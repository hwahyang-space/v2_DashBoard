<script setup lang="ts">
import { useSessionAuthStore, useLocalAuthStore } from '../../stores/authManager';

const regex = /^(\/|https?:\/\/(?:\*\.|)(?:hwahyang\.space|\w+\.\w+\.hwahyang\.space))$/;

const urlParams = new URLSearchParams(window.location.search);
let redirect = urlParams.get('redirect');
if (!redirect || !regex.test(redirect)) redirect = '/';

const localAuthStore = useLocalAuthStore();
const sessionAuthStore = useSessionAuthStore();

localAuthStore.removeAll();
sessionAuthStore.removeAll();

window.location.href = `/authentication/signIn?redirect=${redirect}`;
</script>

<template>
	<p></p>
</template>
