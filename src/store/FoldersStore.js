import {defineStore} from "pinia";
import {ref, watch} from "vue";

export const useFoldersStore = defineStore('foldersStore', () => {
    const folders = ref([
        {
            id: 1,
            title: 'Все задачи'
        },
        {
            id: 2,
            title: 'В процессе'
        },
        {
            id: 3,
            title: 'Выполнено'
        }
    ])

    //Статус открытия модального окна
    const dialogVisible = ref(false)

    //Показать модальное окно
    const showModal = () => {
        dialogVisible.value = true
    }

    //Закрыть модальное окно
    const closeModal = () => {
        dialogVisible.value = false
    }

    const foldersInLocalStorage = localStorage.getItem("folders")
    if(foldersInLocalStorage) {
        folders.value = JSON.parse(foldersInLocalStorage)._value
    }

    watch(
        () => folders,
        (state) => {
            localStorage.setItem("folders", JSON.stringify(state))
        },
        {deep: true}
    )

    return {
        folders, dialogVisible, showModal, closeModal
    }
})