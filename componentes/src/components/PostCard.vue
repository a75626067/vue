<template>
    <div class="post-card">
        <h3>Título</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aspernatur laborum nesciunt autem. Repellendus, veritatis totam commodi aperiam quidem tempore facere unde a molestiae, perferendis nesciunt quasi vitae libero corporis.
        </p>
        <PostButton></PostButton>
    </div>
</template>

<script setup>
    import PostButton from './PostButton.vue';
</script>

<style scoped>
    .post-card {
        border-radius: 15px;
        padding: 10px;
        margin: 5px;
        border: 1px solid #ccc;
    }
</style>