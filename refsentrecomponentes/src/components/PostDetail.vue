<template lang="">
    <div class="post">
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
        <input type="text" v-model="message">
        <button type="button" @click="handleClick()">Di Hola</button>
    </div>
</template>
<script setup>
    import { defineEmits, defineProps, defineComponent, ref } from 'vue';

    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: false,
            default: "Este post no tiene contenido"
        }
    })

    const emit = defineEmits(['sayHi'])

    let message = ref("");

    const handleClick = () => {
        emit('sayHi', message.value)
    }
</script>
<style scoped>
    .post {
        width: 300px;
        height: 200px;
        border-radius: 10px;
        background-color: antiquewhite;
        margin: 10px;
        padding: 10px;
    }
</style>