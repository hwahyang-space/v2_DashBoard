<script setup lang="ts">
import DashboardSidenavView from '@/components/dashboard/DashboardSidenav.vue';
import DashboardHeaderView from '@/components/dashboard/DashboardHeader.vue';
import DashboardFooterView from '@/components/dashboard/DashboardFooter.vue';

import { createApp, type App, ref } from 'vue';

import StatusCode from '../../../stores/templates/StatusCode';
import { useLoaderState } from '@/stores/isLoading';

import DashboardAlert from '@/components/dashboard/DashboardAlert.vue';

document.body.className = 'g-sidenav-show bg-gray-100';
</script>

<template>
	<DashboardSidenavView active="dashboard-main-about" />
	<main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
		<DashboardHeaderView title="hwahyang.space - Edit About" />

		<div class="container-fluid" id="warnBoxParent"></div>

		<div class="container-fluid py-4">
			<div class="card-group">
				<div class="card">
					<div class="card-body pt-2">
						<h5 class="card-title d-block text-darker Pretendard-SemiBold mt-4">
							Edit About
						</h5>
						<div class="card-description mb-4 Pretendard-Regular">
							<form role="form" @submit.prevent="onSubmit(frontName, backName, description)">
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label for="frontName">Front Name</label>
											<input type="text" v-model="frontName" id="frontName" class="form-control" placeholder="Front Name" aria-label="FrontName" required />
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label for="backName">Back Name</label>
											<input type="text" v-model="backName" id="backName" class="form-control" placeholder="Back Name" aria-label="BackName" required />
										</div>
									</div>
									<div class="col-mb-3">
										<div class="form-group">
											<label for="description">Description</label>
											<input type="text" v-model="description" id="description" class="form-control" placeholder="Description" aria-label="Description" required />
										</div>
									</div>
									<div class="col-mb-3">
										<div class="form-group">
											<label for="profileImage">Profile Image</label>
											<input type="file" v-on:change="onChangeFileUpload()" ref="profileImage" id="profileImage" class="form-control" aria-label="ProfileImage" accept="image/png, image/jpeg" />
										</div>
									</div>
									<div class="col-md-6 text-center Pretendard-Bold">
										<button type="reset" class="btn bg-gradient-secondary w-100 mt-4 mb-0">
											Reset
										</button>
									</div>
									<div class="col-md-6 text-center Pretendard-Bold">
										<button type="submit" class="btn bg-gradient-primary w-100 mt-4 mb-0">
											Apply
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="card">
					<div class="card-body pt-2">
						<h5 class="card-title d-block text-darker Pretendard-SemiBold mt-4">
							Preview
						</h5>
						<div class="card-description mb-4 objectParent">
							<object data="https://hwahyang.space">
								<p class="Pretendard-Regular">
									It appears that your browser does not support the object tag.<br />
									You can use a different browser or access the site <a href="https://hwahyang.space" target="_blank">directly</a>.
								</p>
							</object>
						</div>
					</div>
				</div>
			</div>

			<DashboardFooterView />
		</div>
	</main>
</template>

<style scoped>
.objectParent {
	height: 80%;
}

object {
	width: 100%;
	height: 100%;
	border-radius: 0.5rem;
}
</style>

<script lang="ts">
let activeApp: App<Element> | null = null;
let file: string[] | null = null;

export default {
	name: 'MainAbout',
	data: () => ({
		frontName: '',
		backName: '',
		description: '',
		file: null,
	}),
	methods: {
		async onSubmit(frontName: string, backName: string, description: string) {
			const isLoading = useLoaderState();
			const { changeStateTrue, changeStateFalse } = isLoading;

			changeStateTrue();

			try {
				changeStateFalse();
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
		onChangeFileUpload() {
			file = ref(["profileImage"]).value; 
		}
	},
};

const showAlert = (title: string, message: string) => {
	if (activeApp !== null) {
		activeApp.unmount();
		activeApp = null;
	}

	const app = createApp(DashboardAlert, {
		title,
		message
	});
	app.mount("#warnBoxParent");

	activeApp = app;
}
</script>
