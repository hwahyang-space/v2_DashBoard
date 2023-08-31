import {
	createRouter,
	createWebHistory,
	type NavigationGuardNext,
	type RouteLocationNormalized,
} from 'vue-router';

import { isAuthenticated } from '@/stores/authManager';
import { useLoaderState } from '@/stores/isLoading';

import RootView from '../views/RootView.vue';
import SignInView from '../views/SignInView.vue';
import SignUpView from '../views/SignUpView.vue';
import SignOutView from '../views/SignOutView.vue';

enum DefineAuthType {
	None,
	Guest,
	Auth,
}

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'root',
			component: RootView,
			meta: { authRequired: DefineAuthType.Auth },
		},
		{
			path: '/authentication/signIn',
			name: 'signIn',
			component: SignInView,
			meta: { authRequired: DefineAuthType.Guest },
		},
		{
			path: '/authentication/signUp',
			name: 'signUp',
			component: SignUpView,
			meta: { authRequired: DefineAuthType.Guest },
		},
		{
			path: '/authentication/signOut',
			name: 'signOut',
			component: SignOutView,
			meta: { authRequired: DefineAuthType.None },
		},
	],
});

router.beforeEach(
	async (
		to: RouteLocationNormalized,
		from: RouteLocationNormalized,
		next: NavigationGuardNext
	) => {
		const isLoading = useLoaderState();
		const { changeStateTrue } = isLoading;

		changeStateTrue();

		if (to.matched.some((routeInfo) => routeInfo.meta.authRequired == DefineAuthType.Auth)) {
			if (await isAuthenticated()) {
				next();
			} else {
				next('/authentication/signOut');
			}
		} else if (
			to.matched.some((routeInfo) => routeInfo.meta.authRequired == DefineAuthType.Guest)
		) {
			if (await isAuthenticated()) {
				next('/');
			} else {
				next();
			}
		} else {
			next();
		}
	}
);
router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
	const isLoading = useLoaderState();
	const { changeStateFalse } = isLoading;

	changeStateFalse();
});

export default router;
