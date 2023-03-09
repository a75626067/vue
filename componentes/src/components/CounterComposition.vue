<template>
    <h3>Counter {{ counter }}</h3>
    <button @click="addCounter">Incrementar</button>
</template>
<script>
    import { defineComponent, ref } from 'vue';
    export default defineComponent({
        name: 'CounterComposition',
        setup() {
            //Se debe de declarar como referencia
            //cada que manejar las variables como
            //los states de React
            let counter = ref(0)
            const addCounter = () => {
                //Para proceder con la modificación de
                //las variables de referencia, se debe de
                //utilizar la propiedad "value"
                counter.value++
            }
            return {counter, addCounter}
        }
    })
</script>