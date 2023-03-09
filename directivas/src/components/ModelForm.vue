<template>
    <form>
        <input type="text" v-model="inputText">
        <p>{{ inputText }}</p>
        <input type="checkbox" v-model="agree"> Acepto los términos y condiciones
        <select v-model="country">
            <option value="Spain">Spain</option>
            <option value="Uk">Uk</option>
            <option value="France">France</option>
        </select>
    </form>
</template>
<script setup>
    import { ref, defineComponent } from 'vue';
    // export default defineComponent({
    //     data() {
    //         return {
    //             inputText : '',
    //             agree: true,
    //         }
    //     }
    // })
    let inputText = ref('')
    let agree = ref(true)
    let country = ref('Uk')

</script>
<script scoped>
</script>