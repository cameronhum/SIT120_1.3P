<template>
    <div class="card" @click="openModal">
        <h2>{{ title }}</h2>
        <img :src="image">
        <a :href="github">GitHub Repo</a>

    </div>

    <div class="modal" v-if="renderModal">
        <button class="exit" @click="closeModal">x</button>
        <h1>{{ title }}</h1>
        <img :src="image">
        <p>{{ desc }}</p>
        <a :href="github">GitHub Repo</a>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            desc: String,
            github: String,
            image: String,
        },
        data() {
            return {
                renderModal: false,
            };
        },
        methods: {
            openModal() {
                this.renderModal = true;
            },
            closeModal() {
                this.renderModal = false;
            },
        },
        
    };

</script>

<style scoped>
    
</style>