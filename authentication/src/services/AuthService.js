import {ref} from 'vue'

export default class AuthService {
    constructor() {
        this.jwt = ref('')
        this.error = ref('')
    }

    getJwt() {
        return this.jwt
    }

    getError () {
        return this.error
    }

    async login(email, password) {
        try {
            //https://hfp69ilv.directus.app/auth/login
            const res = await fetch('https://hfp69ilv.directus.app/auth/login', {
                method: 'POST',
                headers : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })

            const response = await res.json()

            if('errors' in response) {
                this.error.value = "Login failed"
                return false;
            }

            this.jwt.value = response.data.access_token
            return true
        } catch (error) {
            console.log(error);
        }
    }
}