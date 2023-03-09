<template>
    <!-- En este caso se define como: -->
    <!-- En caso hasError sea true -->
    <!-- agregar la clase danger -->
    <p v-bind:class="{
        'danger' : hasError
    }">El mensaje se ha enviado satisfactoriamente</p>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ClassBind',
    setup() {
        let hasError = false
        return {hasError}
    }
})
</script>
<style scoped>
.danger {
    color:red;
}
</style>