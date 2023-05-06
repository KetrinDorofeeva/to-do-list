import {defineStore} from "pinia";
import {ref} from "vue";
import router from "../router.js";

export const useUserStore = defineStore('userStore', () => {
    const users = ref({
        id: 1,
        login: 'test',
        password: 'test',
        name: 'Екатерина'
    })

    const auth = ref(false)

    const logout = () => {
        router.push(`/`)
        auth.value = false
        localStorage.removeItem('users')
    }

    return {users, auth, logout}
})