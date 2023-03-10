<template lang="">
    <div class="containerPost">
        <div class="post">
            <div class="headerPost">
                <h2>{{ props.title }}</h2>
            </div>
            <div class="bodyPost">
                <p>{{ props.body }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref, defineProps } from 'vue';

    const props = defineProps({
        title: {
            type: String,
            required: false,
            default: 'test'
        },
        body: {
            type: String,
            required: false,
            default: "Este post no tiene contenido"
        }
    })
</script>
<style scoped>
    .containerPost {
        flex : 0 0 100%;
    }

    .post {
        display: flex;
        flex-direction: column;
        border: 0.5px solid #7979799f;
        border-radius: 4px;
    }

    .headerPost {
        border-bottom: 0.5px solid #7979799f;
        padding: 0.5rem;
    }

    .bodyPost {
        padding: 0.5rem;
    }
</style>