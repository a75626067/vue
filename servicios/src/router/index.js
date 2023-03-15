import { createRouter, createWebHistory } from "vue-router"
import PostListView from './../views/PostListView.vue'
import PostDetailView from './../views/PostDetailView.vue'

const routes = [
    {
        path: '/',
        redirect: to => {return {name: 'PostList'}}
    },
    {
        path: '/post',
        name: 'PostList',
        component: PostListView
    },
    {
        path: '/post/:id',
        name: 'PostDetail',
        component: PostDetailView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
  })
  
export default router