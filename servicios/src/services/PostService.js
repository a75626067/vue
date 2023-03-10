import { ref } from 'vue'
class PostService {
    constructor () {
        this.posts = ref([]);
    }

    getPosts() {
        return this.posts
    }

    async fetchAll () {
        try {
            const URL = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(URL)
            const json = await response.json()
            this.posts.value = await json
        } catch (error) {
            console.log(error)
        }
    }
}

export default PostService