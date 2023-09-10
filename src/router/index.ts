import {
	createRouter,
	createWebHistory,
	type NavigationGuardNext,
	type RouteLocationNormalized,
} from 'vue-router';

import { isAuthenticated } from '@/stores/authManager';
import { useLoaderState } from '@/stores/isLoading';

import RootView from '@/views/RootView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

import dashboardRootView from '@/views/dashboard/DashboardRootView.vue';

import mainAnalyticsView from '@/views/dashboard/Main/mainAnalyticsView.vue';
import mainAboutView from '@/views/dashboard/Main/mainAboutView.vue';
import mainLinksView from '@/views/dashboard/Main/mainLinksView.vue';

import portfolioAnalyticsView from '@/views/dashboard/Portfolio/portfolioAnalyticsView.vue';
import portfolioEditCoverView from '@/views/dashboard/Portfolio/portfolioEditCoverView.vue';
import portfolioAboutView from '@/views/dashboard/Portfolio/portfolioAboutView.vue';
import portfolioServicesView from '@/views/dashboard/Portfolio/portfolioServicesView.vue';
import portfolioArticlesView from '@/views/dashboard/Portfolio/portfolioArticlesView.vue';

import blogAnalyticsView from '@/views/dashboard/Blog/blogAnalyticsView.vue';
import blogCategoryView from '@/views/dashboard/Blog/blogCategoryView.vue';
import blogPostsView from '@/views/dashboard/Blog/blogPostsView.vue';

import dashboardAnalyticsView from '@/views/dashboard/Dashboard/dashboardAnalyticsView.vue';
import dashboardMyAccountView from '@/views/dashboard/Dashboard/dashboardMyAccountView.vue';
import dashboardManageAccountsView from '@/views/dashboard/Dashboard/dashboardManageAccountsView.vue';
import dashboardManageApprovalCodes from '@/views/dashboard/Dashboard/dashboardManageApprovalCodes.vue';

import SignInView from '@/views/authentication/SignInView.vue';
import SignUpView from '@/views/authentication/SignUpView.vue';
import SignOutView from '@/views/authentication/SignOutView.vue';

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
			path: '/dashboard/Main/links',
			name: 'dashboardMainLinks',
			component: mainLinksView,
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
			path: '/dashboard/Blog/analytics',
			name: 'dashboardBlogAnalytics',
			component: blogAnalyticsView,
			meta: { authRequired: DefineAuthType.Auth },
		},
		{
			path: '/dashboard/Blog/category',
			name: 'dashboardBlogCategory',
			component: blogCategoryView,
			meta: { authRequired: DefineAuthType.Auth },
		},
		{
			path: '/dashboard/Blog/posts',
			name: 'dashboardBlogPosts',
			component: blogPostsView,
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
			path: '/dashboard/Dashboard/accounts',
			name: 'dashboardDashboardManageAccounts',
			component: dashboardManageAccountsView,
			meta: { authRequired: DefineAuthType.Auth },
		},
		{
			path: '/dashboard/Dashboard/approvalCodes',
			name: 'dashboardDashboardManageApprovalCodes',
			component: dashboardManageApprovalCodes,
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
		{
			path: '/:pathMatch(.*)*',
			component: NotFoundView,
			meta: { authRequired: DefineAuthType.None },
		},
	],
});

router.beforeEach(
	(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
		const isLoading = useLoaderState();
		const { changeStateTrue } = isLoading;

		changeStateTrue();

		setTimeout(async () => {
			const authenticated = await isAuthenticated();

			if (to.meta.authRequired === DefineAuthType.Auth) {
				if (authenticated) {
					next();
				} else {
					next(`/authentication/signIn?redirect=${to.path}`);
				}
			} else if (to.meta.authRequired === DefineAuthType.Guest) {
				if (authenticated) {
					next('/');
				} else {
					next();
				}
			} else {
				next();
			}
		}, 250);
	}
);
router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
	const isLoading = useLoaderState();
	const { changeStateFalse } = isLoading;

	changeStateFalse();
});

export default router;
