<template>
  <div class="d-flex justify-content-between">
    <h2>{{userStore.users.name}}, это ваш To do list</h2>

    <div class="d-flex">
      <!--<div class="img-plus" @click="foldersStore.showModal">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" class="svg-plus">
            <path fill="#314b99" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v5.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6m7-1v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3Z"/>
        </svg>
      </div>-->
      <div class="img-plus" @click="tasksStore.showModal">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" class="svg-plus">
            <path fill="#314b99" d="M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3v-3M5 3h14c1.11 0 2 .89 2 2v7.8c-.61-.35-1.28-.6-2-.72V5H5v14h7.08c.12.72.37 1.39.72 2H5c-1.11 0-2-.89-2-2V5c0-1.11.89-2 2-2m2 4h10v2H7V7m0 4h10v1.08c-.85.14-1.63.46-2.32.92H7v-2m0 4h5v2H7v-2Z"/>
        </svg>
      </div>
      <div class="img-logout" @click="userStore.logout">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" class="svg-logout">
          <path fill="#c11d32" d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h7v2H5v14h7v2H5Zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5l-5 5Z"/>
        </svg>
      </div>
    </div>
  </div>

  <!--<ModalFormCreateFolder></ModalFormCreateFolder>-->

  <ModalFormCreateTask></ModalFormCreateTask>

  <Task class="mt-4"></Task>
</template>

<script setup>
  import {useFoldersStore} from "../store/FoldersStore.js";
  import {useTasksStore} from "../store/TasksStore.js";
  import {useUserStore} from "../store/UserStore.js";

  import Task from "./Task.vue";
  //import ModalFormCreateFolder from "./ModalFormCreateFolder.vue";
  import ModalFormCreateTask from "./ModalFormCreateTask.vue";

  const foldersStore = useFoldersStore()
  const tasksStore = useTasksStore()
  const userStore = useUserStore()
</script>

<script>
  // let user = JSON.parse(localStorage.users)
  // console.dir(user.login)
</script>

<style scoped lang="scss">
  .img-plus {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #d6dbeb;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 15px;
  }

  .img-logout {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffebf0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }

  @media screen and (max-width: 769px) {
    h2 {
      font-size: 18px;
    }

    .img-plus {
      width: 30px;
      height: 30px;
    }

    .img-plus .svg-plus {
      width: 20px;
      height: 20px;
    }

    .img-logout {
      width: 30px;
      height: 30px;
    }

    .img-logout .svg-logout {
      width: 20px;
      height: 20px;
    }
  }
</style>