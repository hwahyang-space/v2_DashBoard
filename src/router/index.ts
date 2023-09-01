import {
	createRouter,
	createWebHistory,
	type NavigationGuardNext,
	type RouteLocationNormalized,
} from 'vue-router';

import { isAuthenticated } from '@/stores/authManager';
import { useLoaderState } from '@/stores/isLoading';

import RootView from '../views/RootView.vue';
import dashboardRootView from '../views/dashboard/DashboardRootView.vue';

import mainAnalyticsView from '../views/dashboard/Main/mainAnalyticsView.vue';
import mainAboutView from '../views/dashboard/Main/mainAboutView.vue';

import portfolioAnalyticsView from '../views/dashboard/Portfolio/portfolioAnalyticsView.vue';
import portfolioEditCoverView from '../views/dashboard/Portfolio/portfolioEditCoverView.vue';
import portfolioAboutView from '../views/dashboard/Portfolio/portfolioAboutView.vue';
import portfolioServicesView from '../views/dashboard/Portfolio/portfolioServicesView.vue';
import portfolioArticlesView from '../views/dashboard/Portfolio/portfolioArticlesView.vue';

import dashboardAnalyticsView from '../views/dashboard/Dashboard/dashboardAnalyticsView.vue';
import dashboardMyAccountView from '../views/dashboard/Dashboard/dashboardMyAccountView.vue';

import SignInView from '../views/authentication/SignInView.vue';
import SignUpView from '../views/authentication/SignUpView.vue';
import SignOutView from '../views/authentication/SignOutView.vue';

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
			path: '/dashboard',
			name: 'dashboardRoot',
			component: dashboardRootView,
			meta: { authRequired: DefineAuthType.Auth },
		},
		{
			path: '/dashboard/Main/analytics',
			name: 'dashboardMainAnalytics',
			component: mainAnalyticsView,
			meta: { authRequired: DefineAuthType.Auth },
		},
		{
			path: '/dashboard/Main/about',
			name: 'dashboardMainAbout',
			component: mainAboutView,
			meta: { authRequired: DefineAuthType.Auth },
		},
		{
			path: '/dashboard/Portfolio/analytics',
			name: 'dashboardPortfolioAnalytics',
			component: portfolioAnalyticsView,
			meta: { authRequired: DefineAuthType.Auth },
		},
		{
			path: '/dashboard/Portfolio/cover',
			name: 'dashboardPortfolioCover',
			component: portfolioEditCoverView,
			meta: { authRequired: DefineAuthType.Auth },
		},
		{
			path: '/dashboard/Portfolio/about',
			name: 'dashboardPortfolioAbout',
			component: portfolioAboutView,
			meta: { authRequired: DefineAuthType.Auth },
		},
		{
			path: '/dashboard/Portfolio/services',
			name: 'dashboardPortfolioServices',
			component: portfolioServicesView,
			meta: { authRequired: DefineAuthType.Auth },
		},
		{
			path: '/dashboard/Portfolio/articles',
			name: 'dashboardPortfolioArticles',
			component: portfolioArticlesView,
			meta: { authRequired: DefineAuthType.Auth },
		},
		{
			path: '/dashboard/Dashboard/analytics',
			name: 'dashboardDashboardAnalytics',
			component: dashboardAnalyticsView,
			meta: { authRequired: DefineAuthType.Auth },
		},
		{
			path: '/dashboard/Dashboard/me',
			name: 'dashboardDashboardMyAccount',
			component: dashboardMyAccountView,
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
