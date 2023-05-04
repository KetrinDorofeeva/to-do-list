<template>
  <div class="main-container">
    <AuthForm v-if="userStore.auth === false && localStorage != null"></AuthForm>
    <router-view v-else></router-view>
  </div>
</template>

<script>
  import AuthForm from "./components/AuthForm.vue";
  import {useUserStore} from "./store/UserStore.js";

  export default {
      name: 'App',
      setup() {
          const userStore = useUserStore();
          return {userStore};
      },
      components: {
          AuthForm
      }
  }
</script>