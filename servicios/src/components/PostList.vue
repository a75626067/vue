<template lang="">
    <div class="container">
        <div>
            Listado de Posts
        </div>
        <ul class="post-list">
            <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
        </ul>
    </div>
</template>
<script setup>
    import PostService from '@/services/PostService'
    import { defineComponent, onMounted } from 'vue';

    const service = new PostService();
    const posts = service.getPosts()
    onMounted(async () => {
        await service.fetchAll()
    })

</script>
<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .post-list {
        width: 95vw;
        height: 75px;
        padding: 20px;
        list-style-type: none;
    }

    .post-list >li {
        padding: 10px;
        width: 100%;
        border: 1px solid #ccc;
    }
</style>