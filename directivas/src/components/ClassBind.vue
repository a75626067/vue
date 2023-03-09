<template>
    <!-- <p :class="{
        'danger' : hasError
    }">El mensaje se ha enviado satisfactoriamente</p> -->
    <p :style="{
        backgroundColor : '#ccc',
        color: c
    }">El mensaje se ha enviado satisfactoriamente</p>
    <button @click="handleClickColor()" type="button">Cambiar color</button>
</template>
<script>
    import { defineComponent, ref } from 'vue';
    export default defineComponent({
        name: 'ClassBind',
        setup() {
            let c = ref("#fff");
            const handleClickColor = () =>{
                c.value = "#000"; 
            }

            return {c, handleClickColor}
        }
    })

    // import { ref } from 'vue';
    // let c = ref("#fff");

    // const handleClickColor = () => {
    //     c.value = "#000";   
    // }
</script>
<style scoped>
    .danger {
        color: red;
    }
</style>