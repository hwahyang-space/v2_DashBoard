<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
	<div class="container position-sticky z-index-sticky top-0">
		<div class="row">
			<div class="col-12">
				<nav
					class="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4"
				>
					<div class="container-fluid pe-0">
						<RouterLink
							to="/"
							class="navbar-brand font-weight-bolder ms-lg-0 ms-3 Pretendard-Bold"
						>
							dash.hwahyang.space
						</RouterLink>
						<button
							class="navbar-toggler shadow-none ms-2"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navigation"
							aria-controls="navigation"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon mt-2">
								<span class="navbar-toggler-bar bar1"></span>
								<span class="navbar-toggler-bar bar2"></span>
								<span class="navbar-toggler-bar bar3"></span>
							</span>
						</button>
						<div class="collapse navbar-collapse Pretendard-Medium" id="navigation">
							<ul class="navbar-nav mx-auto ms-xl-auto me-xl-7" id="navbarParent">
								<li class="nav-item">
									<a
										class="nav-link me-2"
										href="https://hwahyang.space"
										target="_blank"
									>
										<i aria-hidden class="fa-solid fa-house opacity-6 me-1"></i>
										Homepage
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link d-flex align-items-center me-2 active"
										href="https://pf.hwahyang.space"
										target="_blank"
									>
										<i aria-hidden class="fa fa-chart-pie opacity-6 me-1"></i>
										Portfolio
									</a>
								</li>
								<li class="nav-item">
									<RouterLink to="/" id="linkText-header" class="nav-link me-2">
										<i
											aria-hidden
											class="fa-solid fa-chart-line opacity-6 me-1"
										></i>
										Dashboard
									</RouterLink>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</div>
</template>

<style scoped>
#navbarParent {
	margin-right: 0 !important;
}
</style>
