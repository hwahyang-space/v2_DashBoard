<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <footer class="footer pt-4">
        <div class="container-fluid">
            <div class="row align-items-center justify-content-lg-between">
                <div class="col-lg-6 mb-lg-0 mb-4">
                    <div class="copyright text-center text-sm text-muted text-lg-start Pretendard-Regular">
                        &copy; 2017-2023 <a href="https://hwahyang.space" target="_blank">HwaHyang</a>.
                        Design: <a href="http://www.creative-tim.com" target="_blank">Creative Tim</a>.
                    </div>
                </div>
                <div class="col-lg-6">
                    <ul class="nav nav-footer justify-content-center justify-content-lg-end Pretendard-Light">
                        <li class="nav-item">
                            <a href="https://hwahyang.space" class="nav-link text-muted" target="_blank">Homepage</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://pf.hwahyang.space" class="nav-link text-muted" target="_blank">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link text-muted">Dashboard</RouterLink>
                        </li>
                        <li class="nav-item">
                            <a href="https://github.com/hwahyang-space" class="nav-link pe-0 text-muted" target="_blank">Project GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>