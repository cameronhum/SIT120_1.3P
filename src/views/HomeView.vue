<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <main>
        <h1 class="name">Cameron</h1>
        <div class="homeContainer">
            <div class="content">
                <h1 class="jobtitle">Web Developer</h1>
                <p class="homeDescriptor">Hi my name is Cameron and I am a web developer that uses JS and Vue3!</p>
                <router-link to="/portfolio">
                    <button class="portfolioHomeLink">Check Out my work!</button>
                </router-link>
            </div>
        </div>
    </main>
</template>


<style>
    

</style>
