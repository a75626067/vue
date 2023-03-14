<template>
  <h1>
    Post View del elemento {{ postid }}
  </h1>
</template>
<script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';

  const postid = ref('')

  onMounted(() => {
    const route = useRoute()

    postid.value = route.params.id
  })
</script>
