<script setup lang="ts">
import { useSessionAuthStore, useLocalAuthStore } from '../../stores/authManager';

const localAuthStore = useLocalAuthStore();
const sessionAuthStore = useSessionAuthStore();

localAuthStore.removeAll();
sessionAuthStore.removeAll();

window.location.href = '/authentication/signIn';
</script>

<template>
	<p></p>
</template>
