<script setup lang="ts">
import DashboardSidenavView from '@/components/dashboard/DashboardSidenav.vue';
import DashboardHeaderView from '@/components/dashboard/DashboardHeader.vue';
import DashboardFooterView from '@/components/dashboard/DashboardFooter.vue';

document.body.className = 'g-sidenav-show bg-gray-100';

window.location.href = '/dashboard';
</script>

<template>
	<DashboardSidenavView active="dashboard" />
	<main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
		<DashboardHeaderView title="Dashboard" />
		<div class="container-fluid py-4">
			<DashboardFooterView />
		</div>
	</main>
</template>
