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
									<h3 class="font-weight-bolder text-primary text-gradient Pretendard-Black">Welcome back!</h3>
									<p class="mb-0 Pretendard-Medium">Sign In is required to continue.</p>
								</div>
								<div class="alert alert-warning alert-dismissible fade show" role="alert" id="warnBox" style="display: none;">
									<span class="alert-icon">
										<i aria-hidden class="fa-solid fa-triangle-exclamation"></i>
									</span>
									<span class="alert-text Pretendard-Medium" id="warnText"><strong>Warning!</strong> This is a warning alert—check it out!</span>
									<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="card-body">
									<form role="form">
										<label>Email</label>
										<div class="mb-3">
											<input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon"/>
										</div>
										<label>Password</label>
										<div class="mb-3">
											<input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon"/>
										</div>
										<div class="form-check form-switch">
											<input class="form-check-input" type="checkbox" id="rememberMe"/>
											<label class="form-check-label" htmlFor="rememberMe">Remember me</label>
										</div>
										<div class="text-center Pretendard-Bold">
											<button type="submit" class="btn bg-gradient-primary w-100 mt-4 mb-0">Sign In</button>
										</div>
									</form>
								</div>
								<div class="card-footer text-center pt-0 px-lg-2 px-1 Pretendard-Regular">
									<p class="mb-4 text-sm mx-auto">Don't have an account? <RouterLink to="/Authentication/SignUp" id="linkText-card" class="text-primary text-gradient font-weight-bolder">Sign Up</RouterLink></p>
									<p class="mb-4 text-sm mx-auto">Inquiry: <a class="text-dark font-weight-bolder" href="mailto:me@hwahyang.space">me@hwahyang.space</a></p>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
								<div class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style="background-image: url('https://cdn.hwahyang.space/hspace_v2/images/20200902_B.png?v=2023082501')"></div>
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
.alert {
    margin: 15px 15px 0;
    color: white;
}
</style>
