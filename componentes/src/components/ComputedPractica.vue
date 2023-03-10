<template lang="">
    <div>
        <label for="" v-customer-size:sm>Subtotal</label>
        <label for="" v-custom-font.red.xxl>Subtotal</label>
        <input type="number" v-model="subtotal">
        <h3 v-customer-size:xxl>Total impuestos a pagar {{ totalvat }} ({{ vat }}%)</h3>
        <h3 v-custom-font.xxl.blue>Total impuestos a pagar {{ totalvat }} ({{ vat }}%)</h3>
    </div>
</template>
<script setup>
    import { ref, computed } from 'vue';

    const vat = 21;
    let subtotal = ref(0);

    const totalvat = computed(() => (vat * subtotal.value) / 100)
</script>
<style lang="">
    
</style>