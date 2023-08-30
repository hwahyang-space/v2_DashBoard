import { createRouter, createWebHistory } from 'vue-router';

import { isAuthenticated } from '@/stores/authManager';
import { useLoaderState } from '@/stores/isLoading';

import RootView from '../views/RootView.vue';
import SignInView from '../views/SignInView.vue';
import SignUpView from '../views/SignUpView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'root',
			component: RootView,
			meta: { authRequired: true },
		},
		{
			path: '/authentication/signIn',
			name: 'signIn',
			component: SignInView,
			meta: { authRequired: false },
		},
		{
			path: '/authentication/signUp',
			name: 'signUp',
			component: SignUpView,
			meta: { authRequired: false },
		},
	],
});

router.beforeEach((to, from, next) => {
	const isLoading = useLoaderState();
	const { changeStateTrue } = isLoading;
	
	changeStateTrue();

	if (to.matched.some((routeInfo) => routeInfo.meta.authRequired)) {
		if (isAuthenticated()) {
		  next()
		} else {
			next('/authentication/signIn')
		}
	  } else {
		if (isAuthenticated()) {
			next('/')
		} else {
			next()
		}
	  }
  
	setTimeout(() => {
	  next();
	}, 250);
  });
  router.afterEach((to, from) => {
	const isLoading = useLoaderState();
	const { changeStateFalse } = isLoading;
  
	changeStateFalse();
  });

export default router;
