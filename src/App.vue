<script setup lang="ts">
import { RouterView } from 'vue-router';

import { useLoaderState } from './stores/isLoading';

import PreloaderView from './views/PreloaderView.vue';

const isLoading = useLoaderState();
</script>

<template>
	<PreloaderView v-if="isLoading.state" />
	<RouterView />
</template>

<style>
* {
	scrollbar-width: thin;
	scrollbar-color: #b268dd;
}

*::-webkit-scrollbar {
	width: 7px;
}

*::-webkit-scrollbar-track {
	background: transparent;
}

*::-webkit-scrollbar-thumb {
	background: #b268dd;
	border: 7px solid transparent;
	border-radius: 10px;
}

*::-webkit-scrollbar-corner {
	background: transparent;
}

html.scroll-hidden {
	color: transparent;
}
</style>

