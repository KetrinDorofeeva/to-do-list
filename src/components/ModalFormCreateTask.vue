<template>
    <div v-if="taskStore.dialogVisible === true" class="modal d-block py-5" id="modalFormCreateTask">
        <div @click.stop class="modal-dialog">
            <div class="modal-content rounded-4 shadow">
                <div class="modal-header pb-4 border-bottom-0">
                    <h3>Создать новую задачу</h3>
                    <button type="button" @click="taskStore.closeModal" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>

                <div class="modal-body pt-0">
                    <form @submit.prevent>
                        <div class="form-floating mb-3">
                            <input type="text" @input="description = $event.target.value" :class="v$.description.required.$invalid ? 'is-invalid' : ''" class="form-control rounded-3" id="description">
                            <label for="description" :class="v$.description.required.$invalid ? 'is-invalid-label' : ''" class="col-form-label fst-italic">
                                Описание
                            </label>
                        </div>
                        <div class="form-floating mb-3">
                            <select @input="priority = $event.target.value" :class="v$.priority.required.$invalid ? 'is-invalid' : ''" id="priority" class="form-select">
                                <option selected>Выберите приоритет</option>
                                <option v-for="priority in taskStore.prioritys" :key="priority.id" :value="priority.label">
                                    {{priority.label}}
                                </option>
                            </select>
                            <label for="priority" :class="v$.priority.required.$invalid ? 'is-invalid-label' : ''" class="col-form-label fst-italic">
                                Приоритет
                            </label>
                        </div>
                        <div class="form-floating mb-3">
                            <input @input="date_completion = $event.target.value" v-maska data-maska="##.##.####" :class="v$.date_completion.required.$invalid ? 'is-invalid' : ''" class="form-control rounded-3" id="date-completion-create">
                            <label for="date-completion-create" :class="v$.date_completion.required.$invalid ? 'is-invalid-label' : ''" class="col-form-label fst-italic">
                                Срок выполнения (22.05.2023)
                            </label>
                        </div>

                        <button type="submit" @click="createTask" class="btn create-new mt-4">Создать</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {useTasksStore} from "../store/TasksStore.js";

    const taskStore = useTasksStore();
</script>

<script>
    import {useTasksStore} from "../store/TasksStore.js";

    import useVuelidate from "@vuelidate/core";
    import {required} from "@vuelidate/validators";

    import {vMaska} from "maska";

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const format = ('0' + day).slice(-2) + '.' + ('0' + month).slice(-2) + '.' + year;

    export default {
        name: "ModalFormCreateTask",
        data() {
            return {
                v$: useVuelidate(),
                id: Date.now(),
                description: '',
                priority: '',
                date_creation: `${format}`,
                date_completion: '',
                isDone: false,
                folder: 'Все задачи'
            }
        },
        validations() {
            return {
                description: {required},
                priority: {required},
                date_completion: {required}
            }
        },
        methods: {
            createTask(event) {
                const newTask = {
                    id: this.id,
                    description: this.description,
                    priority: this.priority,
                    date_creation: this.date_creation,
                    date_completion: this.date_completion,
                    isDone: this.isDone,
                    folder: this.folder
                }

                if (this.description && this.priority && this.date_completion) {
                    useTasksStore().tasks.push(newTask)

                    useTasksStore().dialogVisible = false;
                }
            }
        }
    }
</script>