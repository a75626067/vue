<template>
    <ul>
        <li v-for="(country, index) in countries" :key="index">{{ country.name }}</li>
    </ul>
</template>
<script setup>
import { ref } from 'vue';
let countries = ref([
    {
        code: 'es',
        name: 'Spain'
    },
    {
        code: 'en',
        name: 'UK'
    },
    {
        code: 'fr',
        name: 'France'
    },
    {
        code: 'it',
        name: 'Italy'
    },
    {
        code: 'pt',
        name: 'Portugal'
    }
])
</script>
<style lang="">
    
</style>