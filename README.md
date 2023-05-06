# to-do-list

<table>
  <tr>
    <td><b>Технологии разработки</b></td>
    <td><b>Языки программирования</b></td>
    <td><b>Фреймворки</b></td>
    <td><b>Сервер разработки</b></td>
    <td><b>Библиотеки</b></td>
  </tr>
  
   <tr>
    <td><img src = "https://img.shields.io/badge/-HTML-e44d25?style=for-the-badge&logo=HTML5&labelColor=fcede9&logoColor=e44d25" alt = "HTML"></td>
    <td><img src = "https://img.shields.io/badge/-JavaScript-f7df1e?style=for-the-badge&logo=JavaScript&labelColor=fefce9&logoColor=f7df1e" alt = "JavaScript"></td>
    <td><img src = "https://img.shields.io/badge/-Vue3-3fb27f?style=for-the-badge&logo=Vue.js&labelColor=ecf7f2&logoColor=3fb27f" alt = "Vue3.js"></td>
    <td><img src = "https://img.shields.io/badge/-Vite-0e2eee?style=for-the-badge&logo=Vite&labelColor=e7eafd&logoColor=0e2eee" alt = "Vite"></td>
    <td><img src = "https://img.shields.io/badge/-Pinia-ffe165?style=for-the-badge&logo=Pinia&labelColor=fffcf0&logoColor=ffe165" alt = "Pinia"></td>
  </tr>
  
   <tr>
    <td><img src = "https://img.shields.io/badge/-SCSS-214ce5?style=for-the-badge&logo=CSS3&labelColor=e9edfc&logoColor=214ce5" alt = "SCSS"></td>
    <td></td>
    <td><img src = "https://img.shields.io/badge/-Bootstrap-860afb?style=for-the-badge&logo=Bootstrap&labelColor=f3e7ff&logoColor=860afb" alt = "Bootstrap4"></td>
    <td></td>
    <td><img src = "https://img.shields.io/badge/-vuerouter-41b883?style=for-the-badge&logo=vue-router&labelColor=ecf8f3&logoColor=41b883" alt = "vue-router"></td>
  </tr>
</table>

## <p id = "table-of-contents">Оглавление</p>
- <a href = "#documentation">Документация</a>
- <a href = "#vue3-framework">Установка и запуск фреймворка Vue 3 (Vite)</a>
- <a href = "#installation-pinia">Установка Pinia</a>
- <a href = "#installation-vue-router">Установка vue-router</a>
- <a href = "#implementation-software-product">Реализация программного продукта</a>
  - <a href = "#authorization">Авторизация</a>
  - <a href = "#tasks-page">Страница задач</a>
  - <a href = "#add-task">Добавить задачу</a>
  - <a href = "#update-task">Редактировать задачу</a>
  - <a href = "#delete-task">Удалить задачу</a>

_________________________________________________________________________________________________________________________________________________________________
## <p id = "documentation">Документация</p>
- [Vite](https://vitejs.dev/)
- [Vue 3](https://v3.ru.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)

<br>
:bookmark_tabs: <a href = "#table-of-contents">Оглавление</a>

## <p id = "vue3-framework">Установка и запуск фреймворка Vue 3 (Vite)</p>
Для начала нужно [установить и настроить Vite](https://vitejs.dev/guide/)  
**Vite** — это инструмент сборки, цель которого — обеспечить более быструю и экономичную разработку современных веб-проектов.

**1. Установка Vite**  
```js
npm create vite@latest
```
**2. Дать название проекту**  

<img src="https://github.com/ketrindorofeeva/to-do-list/raw/main/for-readme/name-project.png" width="70%" alt = "Название проекта"/>

**3. Выбрать фреймворк Vue**  

<img src="https://github.com/ketrindorofeeva/to-do-list/raw/main/for-readme/select-framework.png" width="70%" alt = "Выбор фреймворка"/>

**4. Выбрать язык программирования JavaScript**  

<img src="https://github.com/ketrindorofeeva/to-do-list/raw/main/for-readme/programming-language.png" width="70%" alt = "Язык программирования"/>

Итог:  

<img src="https://github.com/ketrindorofeeva/to-do-list/raw/main/for-readme/installation-summary.png" width="70%" alt = "Итог"/>

**5. Завершить настройку проекта**  
Перейти в проект:
```js
cd to-do-list
```

Установить соответствующие пакеты:
```js
npm i
```

Итог:

<img src="https://github.com/ketrindorofeeva/to-do-list/raw/main/for-readme/total.png" width="70%" alt = "Итог"/>

**6. Запустить проект** 
```js
npm run dev
```
Итог:

<img src="https://github.com/ketrindorofeeva/to-do-list/raw/main/for-readme/launch-project.png" width="70%" alt = "Запуск проекта"/>

Перейдите по ссылке Local, чтобы увидеть проект в браузере.

<br>
:bookmark_tabs: <a href = "#table-of-contents">Оглавление</a>

## <p id = "installation-pinia">Установка Pinia</p> 
**[Pinia](https://pinia.vuejs.org/introduction.html)** — это легковесная библиотека хранилища и структура управления состоянием для Vue.js. Разработанный в первую очередь для создания интерфейсных веб-приложений, он использует декларативный синтаксис и предлагает собственный API управления состоянием.

**1. Установка pinia**
```js
npm install pinia
```

**2. Создать экземпляр pinia в ```/src/main.js``` и передать его в приложение как плагин**
```js
import {createApp} from 'vue'
import {createPinia} from "pinia" //!
import router from "./router.js";

import './style.scss'
import "bootstrap/dist/css/bootstrap.min.css";

import App from './App.vue'

createApp(App)
    .use(createPinia()) //!
    .use(router)
    .mount('#app')
```

<br>
:bookmark_tabs: <a href = "#table-of-contents">Оглавление</a>

## <p id = "installation-vue-router">Установка vue-router</p> 


<br>
:bookmark_tabs: <a href = "#table-of-contents">Оглавление</a>

## <p id = "implementation-software-product">Реализация программного продукта</p>
### <p id = "authorization">Авторизация</p>
Поля и их заполнение:
<table>
  <tr>
    <td><b>Поля</b></td>
    <td><b>Обязательность заполнения</b></td>
    <td><b>Правила заполнения</b></td>
  </tr>
  <tr>
    <td>Логин</td>
    <td>Да</td>
    <td>test</td>
  </tr>
  <tr>
    <td>Пароль</td>
    <td>Да</td>
    <td>test</td>
  </tr>
</table>

Создадим хранилище ```UserStore.js``` в папке ```/src/store/```.  
Хранилище определяется с помощью ```defineStore()``` и что для него требуется уникальное имя, передаваемое в качестве первого аргумента.

В хранилище ```UserStore.js``` указаны:

1. Реактивный ref-объект users, содержащий в себе свойства ```id```, ```login```, ```password``` и ```name```. Значения логина и пароля используются при авторизации;
2. Реактивная переменная ```auth```, указывающая на состояние авторизованного пользователя;
3. Функция ```logout()```, использующаяся для выхода авторизованного пользователя из аккаунта.

```js
import {defineStore} from "pinia";

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
```

Далее, создадим компонент ```AuthForm.vue``` в папке ```/src/components/```  
Определяем хранилище, потому что хранилище не будет создано до тех пор, пока ```use...Store()``` не вызвано внутри компонента ```<script setup>``` (или внутри ```setup()```).  
В функции ```data()```, которая возвращает объект данных для экземпляра компонента, хранятся свойства ```login``` и ```password```, которые будут использоваться в шаблоне ```template``` компонента. Также в скрипте подключаем ```useVuelidate``` для валидации форм. В ```methods``` прописываем функцию ```signIn()```, используемая для авторизации. Рассмотрим ее поподробнее.

Если поля логина и пароля не пустые и введенные данные совпадают с данными, хранящимися в объекте ```users``` хранилища ```UserStore.js```, то информация о пользователе сохраняется в ```localStorage```.  
Объекты веб-хранилища ```localStorage``` позволяют хранить пары ключ/значение в браузере. Данные, которые записаны в ```localStorage```, сохраняются после перезапуска браузера.

После идет проверка, если ```localStorage``` не пустой, то пользователя перенаправляет на страницу задач.

```vue
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
  }
</script>

```

Далее, прописываем шаблон ```template```:
```vue
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
```

В итоге, в компонент ```App.vue``` подключаем компонент ```AuthForm.vue``` и хранилище ```UserStore.js``` и прописываем условия в шаблоне ```template```, при которых при запуске приложения проверяется, есть ли информация о пользователе. Если данных нет, то пользователя перенапрявляет на авторизацию, если данные есть - то пользователь при перезагрузке страницы остается на странице с задачами.
```vue
<template>
  <div class="main-container">
    <AuthForm v-if="userStore.auth === false && localStorage != null"></AuthForm>
    <router-view v-else></router-view>
  </div>
</template>
```
```js
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
```

<br>
:bookmark_tabs: <a href = "#table-of-contents">Оглавление</a>
