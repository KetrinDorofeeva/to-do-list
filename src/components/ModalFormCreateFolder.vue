<template>
    <div v-if="foldersStore.dialogVisible === true" class="modal d-block py-5" id="modalFormCreateFolder">
        <div @click.stop class="modal-dialog">
            <div class="modal-content rounded-4 shadow">
                <div class="modal-header pb-4 border-bottom-0">
                    <h3>Создать новую папку</h3>
                    <button type="button" @click="foldersStore.closeModal" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>

                <div class="modal-body pt-0">
                    <form @submit.prevent>
                        <div class="form-floating mb-3">
                            <input type="text" @input="title = $event.target.value" :class="v$.title.required.$invalid ? 'is-invalid' : ''" class="form-control pt-2 pb-2" id="title">
                            <label for="title" :class="v$.title.required.$invalid ? 'is-invalid-label' : ''" class="col-form-label fst-italic">
                                Описание
                            </label>
                        </div>

                        <button type="submit" @click="createFolder" class="btn create-new mt-4">Создать</button>
                    </form>
                </div>
            </div>
        </div>
    </div>


<!--    <div class="dialog" v-if="foldersStore.dialogVisible === true">-->
<!--        <div @click.stop class="dialog_content">-->
<!--            <form @submit.prevent>-->
<!--                <div class="d-flex justify-content-between">-->
<!--                    <h4>Создать новую папку</h4>-->
<!--                    <button type="button" @click="foldersStore.closeModal" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>-->
<!--                </div>-->
<!--                <div class="mt-4">-->
<!--                    <label for="title" :class="v$.title.required.$invalid ? 'is-invalid-label' : ''" class="col-form-label fst-italic">-->
<!--                        Описание-->
<!--                    </label>-->
<!--                    <input type="text" @input="title = $event.target.value" :class="v$.title.required.$invalid ? 'is-invalid' : ''" class="form-control pt-2 pb-2" id="title" placeholder="Введите название">-->
<!--                </div>-->

<!--                <div class="d-flex justify-content-center mt-5">-->
<!--                    <button type="button" class="btn create-new" @click="createFolder">Создать</button>-->
<!--                </div>-->
<!--            </form>-->
<!--        </div>-->
<!--    </div>-->
</template>

<script setup>
  import {useFoldersStore} from "../store/FoldersStore.js";

  const foldersStore = useFoldersStore();
</script>

<script>
  import {useFoldersStore} from "../store/FoldersStore.js";

  import useVuelidate from "@vuelidate/core";
  import {required} from "@vuelidate/validators";

  export default {
      name: "ModalFormCreateFolder",
      data() {
          return {
              v$: useVuelidate(),
              id: Date.now(),
              title: ''
          }
      },
      validations() {
          return {
              title: {required}
          }
      },
      methods: {
          createFolder(event) {
              const newFolder = {
                  id: this.id,
                  title: this.title,
              }

              if (this.title) {
                  useFoldersStore().folders.push(newFolder)

                  useFoldersStore().dialogVisible = false;
              }
          }
      }
  }
</script>