import {defineStore} from "pinia";
import {ref, watch} from "vue";

export const useTasksStore = defineStore('tasksStore', () => {
    //Массив задач
    const tasks = ref([
        {
            id: 1,
            description: "Размещение новостей на сайте",
            priority: "Низкий",
            date_creation: "22.04.2023",
            date_completion: "27.04.2023",
            folder: 'Все задачи'
        },
        {
            id: 2,
            description: "Внедрить Wi-fi для читателей",
            priority: "Средний",
            date_creation: "25.03.2023",
            date_completion: "26.03.2023",
            folder: 'Все задачи'
        },
        {
            id: 3,
            description: "Отредактировать раздел 'Доступная среда'",
            priority: "Высокий",
            date_creation: "15.03.2023",
            date_completion: "17.03.2023",
            folder: 'Все задачи'
        },
        {
            id: 4,
            description: "Презентация 'Информационные технологии'",
            priority: "Средний",
            date_creation: "15.03.2023",
            date_completion: "18.03.2023",
            folder: 'Все задачи'
        },
        {
            id: 5,
            description: "Счетчики - внедрить дизайн",
            priority: "Средний",
            date_creation: "09.03.2023",
            date_completion: "10.03.2023",
            folder: 'Все задачи'
        },
        {
            id: 6,
            description: "Внедрит новый layout",
            priority: "Средний",
            date_creation: "07.03.2023",
            date_completion: "08.03.2023",
            folder: 'Все задачи'
        },
        {
            id: 7,
            description: "Скролл в новостях",
            priority: "Низкий",
            date_creation: "01.03.2023",
            date_completion: "02.03.2023",
            folder: 'Все задачи'
        },
        {
            id: 8,
            description: "Форма сброса пароля",
            priority: "Средний",
            date_creation: "25.02.2023",
            date_completion: "27.02.2023",
            folder: 'Все задачи'
        },
        {
            id: 9,
            description: "Внедрение модуля Chat",
            priority: "Низкий",
            date_creation: "20.02.2023",
            date_completion: "21.02.2023",
            folder: 'Все задачи'
        }
    ]);

    //Статус открытия модального окна
    const dialogVisible = ref(false)

    //Массив приоритетов
    const prioritys = ref([
        {
            id: 1,
            label: 'Низкий',
            value: 'low'
        },
        {
            id: 2,
            label: 'Средний',
            value: 'medium'
        },
        {
            id: 3,
            label: 'Высокий',
            value: 'high'
        }
    ])

    //Показать модальное окно
    const showModal = () => {
        dialogVisible.value = true
    }

    //Закрыть модальное окно
    const closeModal = () => {
        dialogVisible.value = false
    }

    //Удалить задачу
    const deleteTask = (id) => {
        if (confirm(`Вы уверены, что хотите удалить данную задачу?`)) {
            tasks.value = tasks.value.filter((el) => el.id !== id);
        }
    };

    const tasksInLocalStorage = localStorage.getItem("tasks")
    if(tasksInLocalStorage) {
        tasks.value = JSON.parse(tasksInLocalStorage)._value
    }

    watch(
        () => tasks,
        (state) => {
            localStorage.setItem("tasks", JSON.stringify(state))
        },
        {deep: true}
    )

    return {
        tasks, prioritys, dialogVisible, showModal, closeModal, deleteTask
    }
})