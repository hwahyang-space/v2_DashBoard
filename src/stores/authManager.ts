import axios, { AxiosError } from 'axios';
import { defineStore } from 'pinia';

import StatusCode from './templates/StatusCode';
import type { ITokenResponse } from './templates/ITokenResponse';

const signIn = async (email: string, password: string): Promise<StatusCode | ITokenResponse> => {
	try {
		const response = await axios.post(
			'https://api.hwahyang.space/api/v2/authorize/signIn',
			{
				email,
				password,
			},
			{
				headers: {
					'Cache-Control': 'no-store',
					'Pragma': 'no-store',
					'Expires': '0',
				},
			}
		);
		if (response.status !== 200) {
			return response.data as StatusCode;
		} else {
			return response.data as ITokenResponse;
		}
	} catch (error) {
		if (error instanceof AxiosError) {
			const axiosError = error as AxiosError;
			const errorCode = axiosError.response?.status ?? 0;
			if (400 <= errorCode && errorCode < 500 && axiosError.response !== undefined) {
				// Prototype 때문인지 Casting이 안됨
				const data = axiosError.response.data as StatusCode;
				return new StatusCode(data.code, data.description, data.userDescription);
			} else {
				throw error;
			}
		} else {
			throw error;
		}
	}
};

const signUp = async (
	userName: string,
	email: string,
	password: string,
	passwordConfirm: string,
	approvalCode: string,
	agreeTerms: boolean
): Promise<StatusCode | ITokenResponse> => {
	if (password !== passwordConfirm) {
		return new StatusCode(
			400,
			'Missing Parameters',
			'Password and password confirmation do not match.'
		);
	}
	try {
		const response = await axios.post(
			'https://api.hwahyang.space/api/v2/authorize/signUp',
			{
				name: userName,
				email,
				password,
				approvalCode,
				agreeTerms,
			},
			{
				headers: {
					'Cache-Control': 'no-store',
					'Pragma': 'no-store',
					'Expires': '0',
				},
			}
		);
		if (response.status !== 200) {
			return response.data as StatusCode;
		} else {
			return response.data as ITokenResponse;
		}
	} catch (error) {
		if (error instanceof AxiosError) {
			const axiosError = error as AxiosError;
			const errorCode = axiosError.response?.status ?? 0;
			if (400 <= errorCode && errorCode < 500 && axiosError.response !== undefined) {
				// Prototype 때문인지 Casting이 안됨
				const data = axiosError.response.data as StatusCode;
				return new StatusCode(data.code, data.description, data.userDescription);
			} else {
				throw error;
			}
		} else {
			throw error;
		}
	}
};

const useLocalAuthStore = defineStore('Authentication_LocalStorage', {
	state: () => {
		return {
			accessToken: '',
			refreshToken: '',
		};
	},
	actions: {
		setAccessToken(accessToken: string) {
			this.accessToken = accessToken;
		},
		setRefreshToken(refreshToken: string) {
			this.refreshToken = refreshToken;
		},
		removeAll() {
			this.accessToken = '';
			this.refreshToken = '';
		},
	},
	getters: {
		getAccessToken(): string {
			return this.accessToken;
		},
		getRefreshToken(): string {
			return this.refreshToken;
		},
	},
	persist: {
		storage: localStorage,
	},
});

const useSessionAuthStore = defineStore('Authentication_SessionStorage', {
	state: () => {
		return {
			accessToken: '',
			refreshToken: '',
		};
	},
	actions: {
		setAccessToken(accessToken: string) {
			this.accessToken = accessToken;
		},
		setRefreshToken(refreshToken: string) {
			this.refreshToken = refreshToken;
		},
		removeAll() {
			this.accessToken = '';
			this.refreshToken = '';
		},
	},
	getters: {
		getAccessToken(): string {
			return this.accessToken;
		},
		getRefreshToken(): string {
			return this.refreshToken;
		},
	},
	persist: {
		storage: sessionStorage,
	},
});

const isAuthenticated = async (): Promise<boolean> => {
	const localAuthStore = useLocalAuthStore();
	const sessionAuthStore = useSessionAuthStore();
	if (
		localAuthStore.accessToken === '' &&
		localAuthStore.refreshToken === '' &&
		sessionAuthStore.accessToken === '' &&
		sessionAuthStore.accessToken === ''
	) {
		return false;
	} else {
		const accessToken =
			localAuthStore.accessToken !== ''
				? localAuthStore.accessToken
				: sessionAuthStore.accessToken;
		try {
			const validateResponse = await axios.post(
				'https://api.hwahyang.space/api/v2/authorize/validate',
				{},
				{
					headers: {
						'Cache-Control': 'no-store',
						'Pragma': 'no-store',
						'Expires': '0',
						'Authorization': `Bearer ${accessToken}`,
					},
				}
			);
			if (validateResponse.status === 200) {
				return true;
			} else {
				return await tryRefresh();
			}
		} catch (error) {
			return await tryRefresh();
			//return false;
		}
	}
};

const tryRefresh = async (): Promise<boolean> => {
	const localAuthStore = useLocalAuthStore();
	const sessionAuthStore = useSessionAuthStore();
	try {
		const refreshToken =
			localAuthStore.refreshToken !== ''
				? localAuthStore.refreshToken
				: sessionAuthStore.refreshToken;
		const refreshResponse = await axios.post(
			'https://api.hwahyang.space/api/v2/authorize/refresh',
			{},
			{
				headers: {
					'Cache-Control': 'no-store',
					'Pragma': 'no-store',
					'Expires': '0',
					'Authorization': `Bearer ${refreshToken}`,
				},
			}
		);
		if (refreshResponse.status === 200) {
			const data = refreshResponse.data as ITokenResponse;
			if (
				localAuthStore.accessToken !== '' &&
				localAuthStore.refreshToken !== ''
			) {
				localAuthStore.setAccessToken(data.accessToken);
				localAuthStore.setRefreshToken(data.refreshToken);
				return true;
			} else {
				sessionAuthStore.setAccessToken(data.accessToken);
				sessionAuthStore.setRefreshToken(data.refreshToken);
				return true;
			}
		} else {
			return false;
		}
	} catch (error) {
		return false;
	}
}

export { useSessionAuthStore, useLocalAuthStore, signIn, signUp, isAuthenticated };
