import { createApp } from 'vue'
import { initializeApp } from "firebase/app";
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const firebaseConfig = {
    apiKey: "AIzaSyAADQXfcIxt8fqV51bBXSQh-Ar99-Zx0Ww",
    authDomain: "curso-vue-8314f.firebaseapp.com",
    projectId: "curso-vue-8314f",
    storageBucket: "curso-vue-8314f.appspot.com",
    messagingSenderId: "538821019473",
    appId: "1:538821019473:web:44b8b850bf701313a0b570",
    measurementId: "G-B1S7MKCJ40"
};

//inicializar firebas
initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
