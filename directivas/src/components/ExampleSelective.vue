<template lang="">
    <h3 v-if="age < 18">Eres menor de edad</h3>
    <h3 v-else-if="age >= 18">Eres mayor de edad</h3>
</template>
<script setup>
    let age = 10
</script>
<style lang="">
    
</style>