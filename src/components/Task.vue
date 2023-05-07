<template>
    <div class="table-responsive">
        <div class="d-flex align-items-center sort-select">
            <div class="text-sort folder">Папки:</div>
            <select v-model="specificFolder" class="form-select">
                <option value="all-tasks">Все задачи</option>
                <option value="in-process">В процессе</option>
                <option value="done-tasks">Выполнено</option>
            </select>
        </div>

        <div class="d-flex align-items-center justify-content-between mt-4">
            <div class="d-flex align-items-center search-input">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <path fill="#59bba6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/>
                </svg>
                <input type="text" @input="searchDescription = $event.target.value" class="form-control" placeholder="Поиск по описанию">
            </div>

            <div class="d-flex align-items-center sort-select">
                <div class="text-sort">Сортировать по:</div>
                <select v-model="sortby" class="form-select">
                    <option value="date">Дата</option>
                    <option value="priority">Приоритет</option>
                    <option value="from_a_to_z">От А до Я</option>
                    <option value="from_z_to_a">От Я до А</option>
                </select>
            </div>
        </div>

        <table class="table table-bordered mt-4">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col" class="border-start border-2 border-secondary">Описание</th>
                    <th scope="col" class="border-start border-2 border-secondary">Приоритет</th>
                    <th scope="col" class="border-start border-2 border-secondary">Дата создания</th>
                    <th scope="col" class="border-start border-2 border-secondary">Срок выполнения</th>
                    <th scope="col" class="border-start border-2 border-secondary">Папка</th>
                    <th scope="col" class="border-start border-2 border-secondary"></th>
                </tr>
            </thead>

            <tbody>
                <transition-group name="tasks-list">
                    <tr
                        v-for="task in searchAndSort" :key="task.id"
                        :class="[{active_tr: task.isDone === true}, {overdue_task: moment(task.date_completion, 'DD.MM.YYYY').isBefore(Date.now(), 'DD.MM.YYYY')}]"
                        class="border-top border-2"
                    >
                        <td class="check-mark">
                            <div @click="task.isDone = !task.isDone">
                                <svg v-if="!task.isDone" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256">
                                    <path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92Z"/>
                                </svg>

                                <svg v-else xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256">
                                    <path fill="#27b24a" d="M172.24 99.76a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L112 151.51l51.76-51.75a6 6 0 0 1 8.48 0ZM230 128A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102Zm-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90Z"/>
                                </svg>
                            </div>
                        </td>

                        <td>
                            <span v-if="!edit">{{task.description}}</span>
                            <div v-else>
                                <textarea rows="4" cols="30" v-model.lazy="task.description"></textarea>
                            </div>
                        </td>

                        <td :class="[{text_blue: task.priority === 'Низкий'}, {text_yellow: task.priority === 'Средний'}, {text_red: task.priority === 'Высокий'}]">
                            <span v-if="!edit">{{task.priority}}</span>
                            <select v-else v-model.lazy="task.priority" class="form-select">
                                <option v-for="priority in taskStore.prioritys" :key="priority.id" :value="priority.label">
                                    {{priority.label}}
                                </option>
                            </select>
                        </td>

                        <td>{{task.date_creation}}</td>

                        <td>
                            <span v-if="!edit">{{task.date_completion}}</span>
                            <div v-else>
                                <input v-model.lazy="task.date_completion" class="form-control"/>
                            </div>
                        </td>

                        <td>
                            <span v-if="!edit">{{task.folder}}</span>
                            <select v-else v-model.lazy="task.folder" class="form-select">
                                <option v-for="folder in folderStore.folders" :key="folder.id" :value="folder.title">
                                    {{folder.title}}
                                </option>
                            </select>
                        </td>

                        <td class="d-flex justify-content-between">
                            <div v-if="!edit" @click="showEdit" class="edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="#314b99" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 5.63l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41z"/>
                                </svg>
                            </div>
                            <div v-else @click="hideEdit" class="edit-check">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                                    <path fill="#59bba6" d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"/>
                                </svg>
                            </div>
                            <div @click="taskStore.deleteTask(task.id)" class="basket">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15">
                                    <path fill="#c11d13" d="m12.41 5.58l-1.34 8a.5.5 0 0 1-.49.41H4.42a.5.5 0 0 1-.49-.41l-1.34-8A.5.5 0 0 1 3.08 5h8.83a.5.5 0 0 1 .5.58zM13 3.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1 0-1H5V1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V3h2.5a.5.5 0 0 1 .5.5zM9 3V2H6v1h3z"/>
                                </svg>
                            </div>
                        </td>

                        <!-- @click="$router.push(`/task/${task.id}/${task.description}/${task.priority}/${task.date_completion}`)" -->
                    </tr>
                </transition-group>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    import {useFoldersStore} from "../store/FoldersStore.js";
    import {useTasksStore} from "../store/TasksStore.js";

    const folderStore = useFoldersStore()
    const taskStore = useTasksStore()
</script>

<script>
    import {useFoldersStore} from "../store/FoldersStore.js";
    import {useTasksStore} from "../store/TasksStore.js";
    import moment from "moment/moment.js";

    export default {
        name: 'Task',
        data() {
            return {
                searchDescription: '',
                sortby: 'date',
                edit: false,
                specificFolder: 'all-tasks'
            }
        },
        methods: {
            showEdit() {
                this.edit = true
            },
            hideEdit() {
                this.edit = false
            }
        },
        computed: {
            getTasksInFolder() {
                let array = useTasksStore().tasks;

                //Определенные задачи в определенных папках
                return array.filter(task => {
                    if (this.specificFolder === 'all-tasks') {
                        return task.folder
                    }

                    if (this.specificFolder === 'in-process') {
                        return task.folder === 'В процессе'
                    }

                    if (this.specificFolder === 'done-tasks') {
                        return task.folder === 'Выполнено'
                    }
                })
            },
            searchDesc() {
                //Поиск задач по названию
                return this.getTasksInFolder.filter(task => {
                    return task.description.toLowerCase().includes(this.searchDescription.toLowerCase())
                })
            },
            searchAndSort() {
                //Сортировка
                return this.searchDesc.sort((a, b) => {
                    //По дате завершения
                    if (this.sortby === 'date') {
                        return moment(b.date_completion, 'DD.MM.YY') - moment(a.date_completion, 'DD.MM.YY')
                    }

                    //По приоритету
                    if (this.sortby === 'priority') {
                        return b.priority.length - a.priority.length || a.priority.localeCompare(b.priority);
                    }

                    //От А до Я
                    if (this.sortby === 'from_a_to_z') {
                        return a.description.localeCompare(b.description)
                    }

                    //От Я до А
                    if (this.sortby === 'from_z_to_a') {
                        return b.description.localeCompare(a.description)
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .btn {
        padding: 10px 15px;
        border: 2px solid #e0e2ff;
        color: #314b99;

        &:hover,
        &:focus {
            background: #f3f4ff;
            color: #022aaf;
        }
    }

    .search-input .form-control {
        margin-left: 5px;
        border: none;

        &::placeholder {
            color: #c4c4c4 !important;
        }

        &:focus  {
            box-shadow: none;
        }
    }

    .sort-select .form-select:focus {
        box-shadow: none;
    }

    .text-sort {
        margin-left: 0px;
    }

    .sort-select .form-select {
        border: none;
        width: 140px;
    }

    .table thead tr,
    .table tbody th,
    .table tbody tr,
    .table tbody tr td {
        border: 0;
    }

    .table thead tr th {
        font-weight: normal;
        padding-left: 20px;
        border: 0
    }

    .table tbody tr .check-mark {
        display: flex;
        justify-content: center;
    }

    .table tbody tr:hover,
    .active_tr {
        background: #f6f9ff;
    }

    .overdue_task {
        background: #fff0f0;
    }

    .table tbody tr td:not(:first-child):not(:last-child) {
        padding-left: 20px;
        padding-top: 15px;
    }

    textarea {
        border-color: #c4c4c6;
        padding: 5px 10px;
        border-radius: 5px;
    }

    .text_blue {
        color: #134ec1
    }
    .text_yellow {
        color: #f89b11;
    }
    .text_red {
        color: #c11d13;
    }

    .table tbody tr .check-mark svg,
    .table .edit,
    .table .edit-check,
    .table .basket {
        cursor: pointer;
    }

    //Анимация списка задач
    .tasks-list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .tasks-list-enter-active,
    .tasks-list-leave-active {
        transition: all 0.4s ease;
    }
    .tasks-list-enter-from,
    .tasks-list-leave-to {
        opacity: 0;
        transform: translateX(130px);
    }
    .tasks-list-move {
        transition: transform 0.4s ease;
    }

    @media screen and (max-width: 769px) {
        .search-input svg {
            width: 20px;
            height: 20px;
        }

        .form-control {
            font-size: 12px;
        }

        .text-sort.folder {
            display: block;
            font-size: 12px;
        }

        .text-sort {
            display: none;
        }

        .form-select {
            font-size: 12px;
            width: 110px;
        }

        table {
            font-size: 12px;
        }

        .check-mark svg {
            width: 25px;
            height: 25px;
        }
    }
</style>