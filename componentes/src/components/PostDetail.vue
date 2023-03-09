<template lang="">
    <div class="post">
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
        <input type="text" v-model="message">
        <button type="button" @click="handleClick()">Di Hola</button>
    </div>
</template>
<script>
    import { defineComponent, ref } from 'vue';
    export default defineComponent({
        name:'PostDetail',
        props: {
            title: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: false,
                default: "Este post no tiene contenido"
            }
        },
        emits: ["sayHi"],
        setup(props, {emit}) {
            const handleClick = () => {
                emit('sayHi', message.value)
            }

            let message = ref('')
            return {handleClick, message,props}
        }
    })
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