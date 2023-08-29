import { createRouter, createWebHistory } from 'vue-router';

import { useLoaderState } from '@/stores/isLoading';

import SignInView from '../views/SignInView.vue';
import SignUpView from '../views/SignUpView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/authentication/signIn',
			name: 'signIn',
			component: SignInView,
		},
		{
			path: '/authentication/signUp',
			name: 'signUp',
			component: SignUpView,
		},
	],
});

router.beforeEach((to, from, next) => {
	const isLoading = useLoaderState();
	const { changeStateTrue } = isLoading;
	
	console.log("beforeach");
	changeStateTrue();
	console.log(isLoading.state);
  
	setTimeout(() => {
	  next();
	}, 500);
  });
  router.afterEach((to, from) => {
	const isLoading = useLoaderState();
	const { changeStateFalse } = isLoading;
  
	console.log("aftereach");
	changeStateFalse();
	console.log(isLoading.state);
  });

export default router;
