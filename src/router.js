import {createRouter, createWebHistory} from "vue-router";
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
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
})

export default router