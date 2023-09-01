<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = defineProps(['active']);
</script>

<template>
	<aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3" id="sidenav-main">
		<div class="sidenav-header">
			<i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
			<RouterLink to="/" class="navbar-brand m-0">
				<img src="https://cdn.hwahyang.space/hspace_v2/images/HwaHyang_19_Alpha.gif" class="navbar-brand-img h-100" alt="main_logo">
				<span class="ms-1 font-weight-bold Pretendard-Bold">dash.hwahyang.space</span>
			</RouterLink>
		</div>
		<hr class="horizontal dark mt-0" />
		<div style="height: auto;" class="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
			<ul class="navbar-nav">
				<li class="nav-item mt-3">
					<h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Dashboard</h6>
				</li>
				<li class="nav-item">
					<RouterLink to="/dashboard" class="nav-link" :class="{'active': props.active === 'dashboard-root' }">
						<div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
							<i class="fa-solid fa-chart-pie"></i>
						</div>
						<span class="nav-link-text ms-1">Home</span>
					</RouterLink>
				</li>
				
				<li class="nav-item mt-3">
					<h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">hwahyang.space</h6>
				</li>
				<li class="nav-item">
					<RouterLink to="/dashboard/Main/analytics" class="nav-link" :class="{'active': props.active === 'dashboard-main-analytics' }">
						<div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
							<i class="fa-solid fa-chart-line"></i>
						</div>
						<span class="nav-link-text ms-1">Analytics</span>
					</RouterLink>
				</li>
				<li class="nav-item">
					<RouterLink to="/dashboard/Main/about" class="nav-link" :class="{'active': props.active === 'dashboard-main-about' }">
						<div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
							<i class="fa-solid fa-user-pen"></i>
						</div>
						<span class="nav-link-text ms-1">Edit About</span>
					</RouterLink>
				</li>
				
				<li class="nav-item mt-3">
					<h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">pf.hwahyang.space</h6>
				</li>
				<li class="nav-item">
					<RouterLink to="/dashboard/Portfolio/analytics" class="nav-link" :class="{'active': props.active === 'dashboard-portfolio-analytics' }">
						<div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
							<i class="fa-solid fa-chart-line"></i>
						</div>
						<span class="nav-link-text ms-1">Analytics</span>
					</RouterLink>
				</li>
				<li class="nav-item">
					<RouterLink to="/dashboard/Portfolio/cover" class="nav-link" :class="{'active': props.active === 'dashboard-portfolio-cover' }">
						<div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
							<i class="fa-solid fa-pen-to-square"></i>
						</div>
						<span class="nav-link-text ms-1">Edit Cover</span>
					</RouterLink>
				</li>
				<li class="nav-item">
					<RouterLink to="/dashboard/Portfolio/about" class="nav-link" :class="{'active': props.active === 'dashboard-portfolio-about' }">
						<div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
							<i class="fa-solid fa-user-pen"></i>
						</div>
						<span class="nav-link-text ms-1">Edit About</span>
					</RouterLink>
				</li>
				<li class="nav-item">
					<RouterLink to="/dashboard/Portfolio/services" class="nav-link" :class="{'active': props.active === 'dashboard-portfolio-services' }">
						<div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
							<i class="fa-solid fa-calendar-check"></i>
						</div>
						<span class="nav-link-text ms-1">Edit Services</span>
					</RouterLink>
				</li>
				<li class="nav-item">
					<RouterLink to="/dashboard/Portfolio/articles" class="nav-link" :class="{'active': props.active === 'dashboard-portfolio-articles' }">
						<div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
							<i class="fa-solid fa-file-pen"></i>
						</div>
						<span class="nav-link-text ms-1">Edit Portfolio</span>
					</RouterLink>
				</li>

				<li class="nav-item mt-3">
					<h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">dash.hwahyang.space</h6>
				</li>
				<li class="nav-item">
					<RouterLink to="/dashboard/DashBoard/analytics" class="nav-link" :class="{'active': props.active === 'dashboard-dashboard-analytics' }">
						<div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
							<i class="fa-solid fa-chart-line"></i>
						</div>
						<span class="nav-link-text ms-1">Analytics</span>
					</RouterLink>
				</li>
				<li class="nav-item">
					<RouterLink to="/dashboard/DashBoard/me" class="nav-link" :class="{'active': props.active === 'dashboard-dashboard-me' }">
						<div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
							<i class="fa-solid fa-user"></i>
						</div>
						<span class="nav-link-text ms-1">My Account</span>
					</RouterLink>
				</li>
			</ul>
		</div>
	</aside>
</template>

<style scoped>
/* 이유는 모르겠지만 navbar의 그라디언트가 안 되어있는 관계로 직접 지정 */
.navbar-vertical .navbar-nav > .nav-item .nav-link.active .icon {
	background-image: linear-gradient(310deg, #7928ca, #ff0080);
}

li.nav-item {
	font-family: Pretendard_Medium;
}
div.nav-link.active {
	font-family: Pretendard_SemiBold;
}
.nav-link > div > i {
	color: #141727;
}
.active > div > i {
	color: #ffffff !important;
}
</style>
