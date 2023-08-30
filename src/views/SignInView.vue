<script setup lang="ts">
import { RouterLink } from 'vue-router';
import AuthenticationHeader from '@/components/AuthenticationHeader.vue';
import AuthenticationFooter from '@/components/AuthenticationFooter.vue';
</script>

<template>
	<AuthenticationHeader />
	<main class="main-content mt-0">
		<section>
			<div class="page-header min-vh-75">
				<div class="container">
					<div class="row">
						<div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
							<div class="card card-plain mt-8">
								<div class="card-header pb-0 text-left bg-transparent">
									<h3 class="font-weight-bolder text-primary text-gradient Pretendard-Black">
										Welcome back!
									</h3>
									<p class="mb-0 Pretendard-Medium">
										Sign In is required to continue.
									</p>
								</div>
								<div id="warnBoxParent"></div>
								<div class="card-body">
									<form role="form" @submit.prevent="onSubmit(email, password)">
										<label>Email</label>
										<div class="mb-3">
											<input type="email" v-model="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon" />
										</div>
										<label>Password</label>
										<div class="mb-3">
											<input type="password" v-model="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon" />
										</div>
										<div class="form-check form-switch">
											<input class="form-check-input" type="checkbox" v-model="rememberMe" id="rememberMe" />
											<label class="form-check-label" htmlFor="rememberMe">Remember me</label>
										</div>
										<div class="text-center Pretendard-Bold">
											<button type="submit" class="btn bg-gradient-primary w-100 mt-4 mb-0">
												Sign In
											</button>
										</div>
									</form>
								</div>
								<div class="card-footer text-center pt-0 px-lg-2 px-1 Pretendard-Regular">
									<p class="mb-4 text-sm mx-auto">
										Don't have an account? <RouterLink to="/Authentication/SignUp" id="linkText-card" class="text-primary text-gradient font-weight-bolder">Sign Up</RouterLink>
									</p>
									<p class="mb-4 text-sm mx-auto">
										Inquiry: <a class="text-dark font-weight-bolder" href="mailto:me@hwahyang.space">me@hwahyang.space</a>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
								<div class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style="background-image: url('https://cdn.hwahyang.space/hspace_v2/images/20200902_B.png?v=2023082501');"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
	<AuthenticationFooter />
</template>

<style scoped>
form > label {
	font-family: Pretendard_Bold, sans-serif, arial !important;
}
form > div {
	font-family: Pretendard_Medium, sans-serif, arial !important;
}
</style>

<script lang="ts">
import { createApp, type App } from 'vue';

import { useSessionAuthStore, useLocalAuthStore, signIn } from '../stores/authManager';

import StatusCode from '../stores/templates/StatusCode';
import type { ITokenResponse } from '../stores/templates/ITokenResponse';
import { useLoaderState } from '@/stores/isLoading';

import AuthenticationAlert from '@/components/AuthenticationAlert.vue';

let activeApp: App<Element> | null = null;

export default {
	name: 'SignIn',
	data: () => ({
		email: '',
		password: '',
		rememberMe: false,
	}),
	methods: {
		async onSubmit(email: string, password: string) {
			const isLoading = useLoaderState();
			const { changeStateTrue, changeStateFalse } = isLoading;

			changeStateTrue();

			try {
				const rawResponse = await signIn(email, password);
				if (rawResponse instanceof StatusCode) {
					const response = rawResponse as StatusCode;
					console.error(response);
					showAlert('Error', `${response.userDescription}`);
					changeStateFalse();
				} else {
					const response = rawResponse as ITokenResponse;
					if (this.rememberMe) {
						const localAuthStore = useLocalAuthStore();
						localAuthStore.setAccessToken(response.accessToken);
						localAuthStore.setRefreshToken(response.refreshToken);
					} else {
						const sessionAuthStore = useSessionAuthStore();
						sessionAuthStore.setAccessToken(response.accessToken);
						sessionAuthStore.setRefreshToken(response.refreshToken);
					}
					window.location.href = '/';
				}
			} catch (error) {
				console.error(error);
				if (error instanceof Error) {
					const err = error as Error;
					showAlert('Error', err.message);
				} else {
					showAlert('Error', 'Unknown error.');
				}
				changeStateFalse();
			}
		},
	},
};

const showAlert = (title: string, message: string) => {
	if (activeApp !== null) {
		activeApp.unmount();
		activeApp = null;
	}

	const app = createApp(AuthenticationAlert, {
		title,
		message
	});
	app.mount("#warnBoxParent");

	activeApp = app;
}
</script>
