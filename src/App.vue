<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>

        <nav>
            <RouterLink class="routes" to="/">Home</RouterLink>
            <RouterLink class="routes" to="/portfolio">Portfolio</RouterLink>
            <RouterLink class="routes" to="/contact">Contact</RouterLink>

        </nav>
    </header>

    <RouterView />
</template>


<style>
    @import './assets/main.css';
</style>