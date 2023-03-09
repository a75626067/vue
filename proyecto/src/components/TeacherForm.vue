<template>
    <section>
        <h3>Añadir profesor</h3>
        <div>
            <label for="">Nombre:</label>
            <input type="text" v-model="teacher.teacherName"/>
        </div>
        <div>
            <label for="">Apellidos:</label>
            <input type="text" v-model="teacher.teacherSurname"/>
        </div>
        <div>
            <label for="">DNI/NIF:</label>
            <input type="text" v-model="teacher.dni"/>
        </div>
        <div>
            <label for="">Materias:</label>
            <input type="text" v-model="subject"/>
            <button @click="handleSubject" type="button">Agregar</button>
        </div>
        <div>
            <ul>
                <li v-for="(elm, index) in teacher.subjects" :key="index">
                    {{ elm }}
                </li>
            </ul>
        </div>
        <input type="checkbox" v-model="teacher.doc" > Documentación entregada
        <button type="button" @click="handleAddTeacher()">Agregar</button>
    </section>
    <section>
        <h3>Listado de profesores</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>DNI/NIF</th>
                    <th>Materias</th>
                    <th>Documentación entregada</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(elm) in teachers" :key="elm.dni">
                    <td>{{ elm.teacherName }}</td>
                    <td>{{ elm.teacherSurname }}</td>
                    <td>{{ elm.dni }}</td>
                    <td>
                        <ul>
                            <li v-for="(subj, index) in elm.subjects" :key="index">
                                {{ subj }}
                            </li>
                        </ul>
                    </td>
                    <td v-if="elm.doc">entregada</td>
                    <td v-else>entregada</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script setup>
    import { ref } from 'vue';

    let teacher = ref({
        teacherName: '',
        teacherSurname: '',
        dni: '',
        subjects: [],
        doc: false,
    });

    let teachers = ref([

    ]);

    let subject = ref('')

    const handleSubject = () => {
        teacher.value.subjects.push(subject.value)
        subject.value = ''
    }

    const handleAddTeacher = () => {
        teachers.value.push({
            teacherName: teacher.value.teacherName,
            teacherSurname: teacher.value.teacherSurname,
            dni: teacher.value.dni,
            subjects: teacher.value.subjects,
            doc: teacher.value.doc,
        })
        teacher.value.teacherName = ''
        teacher.value.teacherSurname = ''
        teacher.value.dni = ''
        teacher.value.subjects = []
        teacher.value.doc = false
    }

</script>
<style scoped>
    
</style>