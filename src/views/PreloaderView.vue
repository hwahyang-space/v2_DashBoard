<template>
	<div className="overlay">
		<div className="spinner-border text-info" role="status">
			<span className="sr-only"></span>
		</div>
	</div>
</template>

<style scoped>
.hidden {
	height: 100%;
	min-height: 100%;
	overflow: hidden !important;
	touch-action: none;
}
.container {
	padding: 15px;
	margin: auto;
}
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2048;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.7);
}
.spinner-border {
	position: absolute;
	top: 50%;
	left: 50%;
	margin: -25px 0 0 -25px;
}
</style>
