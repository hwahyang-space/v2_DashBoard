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
