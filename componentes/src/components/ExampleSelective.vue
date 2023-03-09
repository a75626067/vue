<template>
    <h1 v-if="age < 18">Eres menor de edad</h1>
    <h1 v-else-if="age >= 18">Eres mayor de edad</h1>
</template>
<script setup>
    let age = 10
</script>
<style scoped></style>