<script setup lang="ts">
import { RouterLink } from 'vue-router';

document.body.className = 'g-sidenav-show bg-gray-100';
</script>

<template>
	<p>404 NOT FOUND</p>
	<p><RouterLink to="/">Go Home</RouterLink></p>
	<p><a href="javascript:;" @click="$router.go(-1)">Go Back</a></p>
</template>
