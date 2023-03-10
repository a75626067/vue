<script setup>
  import { ref } from 'vue'
  import Posts from './components/Posts.vue';
  const dataPosts = ref("a");

  const getAll = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json()

    return posts
  }

  getAll()
  .then(posts => dataPosts.value = posts)

</script>

<template>
  <div class="container">
    <Posts 
      v-for="(post, index) in dataPosts" 
      :title="post.title" 
      :body="post.body" 
      :key="index"
    />
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
</style>
