<template lang="">
    <div>
        Hola Mundo
    </div>
</template>
<script setup>
import { onMounted, onUpdated } from 'vue'

onMounted(() => {
    console.log("mounted");
})

onUpdated(() => {
    console.log("updated");
})

// Option API (quitar el "setup de la etiqueta script")
// import { defineComponent } from 'vue';
// export default defineComponent({
//     name : 'CycleOption',
//     created() {
//         console.log("created");
//     },
//     mounted() {
//         console.log("mounted");
//     },
//     updated() {
//         console.log("updated");
//     },
//     unmounted() {
//         console.log("unmounted");
//     }
// })
</script>
<style scoped>
    
</style>