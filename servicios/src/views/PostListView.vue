<template lang="">
    <div class="container">
        <h1>
            Listado de Posts
        </h1>
        <ul class="post-list">
            <li v-for="post in posts" :key="post.id">
                <router-link :to="{name: 'PostDetail', params: {id: post.id}}">
                    {{ post.title }}
                </router-link>
            </li>
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
<style scoped lang="scss">
    // .container {
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     align-items: center;
    // }
    // .post-list {
    //     width: 95vw;
    //     height: 75px;
    //     padding: 20px;
    //     list-style-type: none;
    // }

    // .post-list >li {
    //     padding: 10px;
    //     width: 100%;
    //     border: 1px solid #ccc;
    // }
    .post-list {
        widows: 95vw;
        height: 75px;
        padding: 20px;
        list-style-type: none;

        li {
            padding: 10px;
            width: 100%;
            border: 1px solid #ccc;
            a {
                text-decoration: none;
                color: rgb(2, 128, 212);
                cursor: pointer;

                &:hover {
                    color: white;
                }
            }

            &:hover {
                background-color:rgb(2, 128, 212);
            }
        }
    }
</style>