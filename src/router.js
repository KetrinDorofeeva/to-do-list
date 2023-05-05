import {createRouter, createWebHistory, createWebHashHistory} from "vue-router";
import Tasks from "./components/Tasks.vue";
import AuthForm from "./components/AuthForm.vue";

const routes = [
    {
        path: '/',
        component: AuthForm
    },
    {
        path: '/tasks',
        component: Tasks
    }
    // {
    //     path: '/task/:id/:description?/:priority?/:date_completion?',
    //     component: ModalFormEditTask
    // }
]

const router = createRouter({
    history: createWebHashHistory(process.env.NODE_ENV === 'production' ? '/to-do-list/' : '/'),
    //history: createWebHistory(process.env.NODE_ENV === 'production' ? '/to-do-list/' : '/'),
    routes
})

export default router