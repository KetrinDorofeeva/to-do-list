<template>
    <div class="modal d-block py-5" id="modalSignin">
        <div class="modal-dialog">
            <div class="modal-content rounded-4 shadow">
                <div class="modal-header pb-4 border-bottom-0">
                    <h3 class="fw-bold mb-0">Авторизация</h3>
                </div>

                <div class="modal-body pt-0">
                    <form @submit.prevent="signIn">
                        <div class="form-floating mb-3">
                            <input type="text" v-model="login" :class="v$.login.required.$invalid ? 'is-invalid' : ''" class="form-control rounded-3" id="floatingInput">
                            <label for="floatingInput" :class="v$.login.required.$invalid ? 'is-invalid-label' : ''">Логин</label>

                            <p v-if="v$.login.required.$invalid" class="invalid-feedback">Введите логин</p>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" v-model="password" :class="v$.password.required.$invalid ? 'is-invalid' : ''" class="form-control rounded-3" id="floatingPassword">
                            <label for="floatingPassword" :class="v$.password.required.$invalid ? 'is-invalid-label' : ''">Пароль</label>

                            <p v-if="v$.password.required.$invalid" class="invalid-feedback">Введите пароль</p>
                        </div>
                        <button type="submit" @click="signIn" class="w-100 mb-2 btn btn-lg rounded-3">Войти</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {useUserStore} from "../store/UserStore.js";

  import useVuelidate from "@vuelidate/core";
  import {required} from "@vuelidate/validators";

  export default {
      name: 'AuthForm',
      setup() {
          const userStore = useUserStore();
          return {userStore}
      },
      data() {
          return {
              v$: useVuelidate(),
              login: "",
              password: ""
          };
      },
      validations() {
          return {
              login: {required},
              password: {required},
          }
      },
      methods: {
          signIn() {
              if(this.login && this.password) {
                  if (this.login === this.userStore.users.login && this.password === this.userStore.users.password) {
                      const parsed = JSON.stringify(this.userStore.users);
                      localStorage.setItem('users', parsed);

                      if (localStorage.getItem("users") != null) {
                          this.$router.push(`/tasks`)
                          this.userStore.auth = true
                      }
                  }
              }
          }
      }
  };
</script>

<style scoped lang="scss">
    .btn {
        height: 50px;
        background: #f0f5ff;
        color: #314b99;
        font-size: 18px;
        border: none;

        &:hover {
            background: #314b99;
            color: #f0f5ff;
        }
    }
</style>