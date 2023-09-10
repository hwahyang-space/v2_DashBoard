<script setup lang="ts">
import { RouterLink } from 'vue-router';

import DashboardSidenavView from '@/components/dashboard/DashboardSidenav.vue';
import DashboardHeaderView from '@/components/dashboard/DashboardHeader.vue';
import DashboardFooterView from '@/components/dashboard/DashboardFooter.vue';

document.body.className = 'g-sidenav-show bg-gray-100';
</script>

<template>
	<DashboardSidenavView active="dashboard-root" />
	<main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
		<DashboardHeaderView title="Dashboard" />
		<div class="container-fluid py-4">
			<p>404 NOT FOUND</p>
			<p><RouterLink to="/">Go Home</RouterLink></p>
			<p><a href="javascript:;" @click="$router.go(-1)">Go Back</a></p>

			<DashboardFooterView />
		</div>
	</main>
</template>
