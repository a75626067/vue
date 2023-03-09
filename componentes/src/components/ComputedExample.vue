<template lang="">
    <div>
        <input type="text" v-model="message">
        <h3>{{ message }}</h3>
        <h3>{{ reverse }}</h3>
    </div>
</template>
<script>
import { defineComponent, ref, computed } from 'vue';
// export default defineComponent({
//     name: 'ComputedExample',
//     data() {
//         return {
//             message: ''
//         }
//     },
//     computed: {
//         reverse() {
//             return this.message.split('').reverse().join('')
//         }
//     }
// })
export default defineComponent({
    name: 'ComputedExample',
    setup() {
        let message = ref('');

        const reverse = computed(() => message.value.split('').reverse().join(''));

        return {message, reverse}
    }
})
</script>
<style scoped>
    
</style>