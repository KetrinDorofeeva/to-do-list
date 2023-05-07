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
    <td><img src = "https://img.shields.io/badge/-vuerouter-41b883?style=for-the-badge&logo=vue-router&labelColor=f0f8f7&logoColor=41b883" alt = "vue-router"></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><img src = "https://img.shields.io/badge/-moment.js-6cb5ab?style=for-the-badge&logo=moment.js&labelColor=f0f8f7&logoColor=6cb5ab" alt = "moment.js"></td>
  </tr>
</table>

## <p id = "table-of-contents">Оглавление</p>
- <a href = "#documentation">Документация</a>
- <a href = "#vue3-framework">Установка и запуск фреймворка Vue 3 (Vite)</a>
- <a href = "#installation-pinia">Установка Pinia</a>
- <a href = "#installation-vue-router">Установка Vue Router</a>
- <a href = "#implementation-software-product">Реализация программного продукта</a>
  - <a href = "#authorization">Авторизация</a>
  - <a href = "#tasks-page">Страница задач</a>
    - <a href = "#tasks-folders">Папки с задачами</a>
    - <a href = "#search-for-tasks-by-name">Поиск задач по описанию</a>
    - <a href = "#tasks-sorting">Сортировка задач</a>
    - <a href = "#final-template">Итоговый шаблон задач</a>
    - <a href = "#add-task">Добавить задачу</a>
    - <a href = "#update-task">Редактировать задачу</a>
    - <a href = "#delete-task">Удалить задачу</a>

_________________________________________________________________________________________________________________________________________________________________
## <p id = "documentation">Документация</p>
- [Vite](https://vitejs.dev/)
- [Vue 3](https://v3.ru.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)

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

## <p id = "installation-vue-router">Установка Vue Router</p> 
**[Vue Router](https://router.vuejs.org/installation.html)** — маршрутизатор для Vue.js.

**1. Установка vue-router**
```js
npm install vue-router@4
```

**2. Создадим ```router.js``` в папке ```/src/```**  
Создается объект маршрутизатора с помощью функции ```createRouter()```, которая поставляется библиотекой ```vue-router```. Затем в массиве ```routes``` определяются маршруты, которые сопоставляют пути запроса и компоненты. Каждый маршрут определяет свойство ```path```, которое представляет путь запроса, и свойство ```component``` - компонент, который будет обрабатывать запрос по этому пути.
```js
import {createRouter} from "vue-router";
import Tasks from "./components/Tasks.vue";
import AuthForm from "./components/AuthForm.vue";

const routes = [
  {
    path: '/',
    component: AuthForm
  },
  {
    path: '/tasks',
    component: Tasks
  }
]

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/to-do-list/' : '/'),
  routes
})

export default router
```

**3. Подключение ```router.js``` в ```/src/main.js```**
```js
import {createApp} from 'vue'
import {createPinia} from "pinia"
import router from "./router.js"; //!

import './style.scss'
import "bootstrap/dist/css/bootstrap.min.css";

import App from './App.vue'

createApp(App)
  .use(createPinia())
  .use(router) //!
  .mount('#app')
```

**4. Подключение ```router-view``` в ```/src/App.vue```**  
**router-view** - отобразит компонент, соответствующий URL-адресу. Его можно разместить в любом месте, чтобы адаптировать к макету.
```vue
<template>
  <div class="main-container">
    <AuthForm v-if="userStore.auth === false && localStorage != null"></AuthForm>
    <router-view v-else></router-view>
  </div>
</template>
```

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

1. Реактивный ref-объект ```users```, содержащий в себе свойства ```id```, ```login```, ```password``` и ```name```. Значения логина и пароля используются при авторизации;
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

Далее, прописываем шаблон ```template```.
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

<img src="https://github.com/ketrindorofeeva/to-do-list/raw/main/for-readme/blank-authorization.png" alt = "Незаполненная авторизация"/>

<img src="https://github.com/ketrindorofeeva/to-do-list/raw/main/for-readme/completed-authorization.png" alt = "Заполненная авторизация"/>

https://user-images.githubusercontent.com/93386515/236624246-f6233fca-ed01-47fd-84e0-c4e4896b7cf6.mp4

<br>
:bookmark_tabs: <a href = "#table-of-contents">Оглавление</a>

### <p id = "tasks-page">Страница задач</p>
Создадим хранилище ```TasksStore.js``` в папке ```/src/store/```.  
Хранилище определяется с помощью ```defineStore()``` и что для него требуется уникальное имя, передаваемое в качестве первого аргумента.

В хранилище ```TasksStore.js``` указаны:

1. Реактивный ref-массив ```tasks```, содержащий в себе объекты со свойствами ```id```, ```description```, ```priority```, ```date_creation```, ```date_completion``` и ```folder```;  
2. Реактивная переменная ```dialogVisible```, указывающая на статус открытия модального окна;  
3. Реактивный ref-массив ```prioritys```, содержащий в себе объекты со свойствами ```id```, ```label``` и ```value```;  
4. Функция ```showModal()``` для открытия модального окна;  
5. Функция ```closeModal()``` для закрытия модального окна;  
6. Функция ```deleteTask()``` для удаления задачи;  
7. Функция ```watch()```, в которой информация о задачах сохраняется в ```localStorage```. При перезагрузке страницы созданные задачи не пропадут.

```js
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
```

<br>

Создадим хранилище ```FoldersStore.js``` в папке ```/src/store/```. В нем будут указаны:

1. Реактивный ref-массив ```folders```, содержащий в себе объекты со свойствами ```id``` и ```title```;  
2. Реактивная переменная ```dialogVisible```, указывающая на статус открытия модального окна;  
3. Функция ```showModal()``` для открытия модального окна;  
4. Функция ```closeModal()``` для закрытия модального окна;  
5. Функция ```watch()```, в которой информация о папках сохраняется в ```localStorage```. При перезагрузке страницы созданные папки не пропадут.

```js
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
```

<br>

Создадим компонент ```Tasks.vue``` в папке ```/src/components/```.  
В нем будут реализованы:

1. Обращение к авторизованному пользователю;
2. Иконка создания задачи;
3. Иконка выхода пользователя из аккаунта.

И подключены компоненты:

1. Создания задачи ```ModalFormCreateTask.vue``` в папке ```/src/components/```;
2. Задачи ```Task.vue``` в папке ```/src/components/```

В скрипте подключаем компоненты ```Task.vue``` и ```ModalFormCreateTask``` и хранилища ```TasksStore.js``` и ```UserStore.js```.
```js
<script setup>
  import {useTasksStore} from "../store/TasksStore.js";
  import {useUserStore} from "../store/UserStore.js";

  import Task from "./Task.vue";
  import ModalFormCreateTask from "./ModalFormCreateTask.vue";

  const tasksStore = useTasksStore()
  const userStore = useUserStore()
</script>
```

В шаблоне ```template``` обращаемся к хранилищам из скрипта. Из ```UserStore.js``` достаем свойство ```name``` объекта ```users```, при клике на иконку создания задачи срабатывает функция ```showModal``` хранилища ```TasksStore.js```, при клике на иконку выхода пользователя из аккаунта срабатывает функция ```logout``` хранилища ```UserStore.js```.
```vue
<template>
  <div class="d-flex justify-content-between">
    <h2>{{userStore.users.name}}, это ваш To do list</h2>

    <div class="d-flex">
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

  <ModalFormCreateTask></ModalFormCreateTask>

  <Task class="mt-4"></Task>
</template>
```

<br>

Создадим компонент ```Task.vue``` в папке ```/src/components/```.  
В нем будут реализованы:

<ol>
  <li>Список папок;</li>
  <li>Поле поиска задач по описанию;</li>
  <li>Сортировка по дате завершения, приоритету, от А до Я и от Я до А;</li>
  <li>Задачи. Каждая задача включает в себя:</li>
  <ol type="1">
    <li>Статус выполнения (галочка);</li>
    <li>Описание;</li>
    <li>Приоритет;</li>
    <li>Дата создания;</li>
    <li>Срок выполнения;</li>
    <li>Папка;</li>
    <li>Иконка редактирования задачи;</li>
    <li>Иконка удаления задачи.</li>
  </ol>
</ol>

В ```<script setup>``` подключаем хранилища ```TasksStore.js``` и ```FoldersStore.js```.
```js
<script setup>
  import {useFoldersStore} from "../store/FoldersStore.js";
  import {useTasksStore} from "../store/TasksStore.js";

  const folderStore = useFoldersStore()
  const taskStore = useTasksStore()
</script>
```

:exclamation: В следующих подпунктах описана поэтапная реализация структуры компонента ```Task.vue```.

<br>
:bookmark_tabs: <a href = "#table-of-contents">Оглавление</a>

#### <p id = "tasks-folders">Папки с задачами</p>
В компоненте ```Task.vue``` в скрипте подключаем хранилища ```FoldersStore.js``` и ```TasksStore.js```.  
В функции ```data()``` создаем свойство ```specificFolder```, отвечающее за выбор определенной папки.  
В ```computed``` создаем функцию ```getTasksInFolder()```, в которой прописываем связь с массивом ```tasks``` хранилища ```TasksStore.js```. Метод массива ```.filter()``` позволяет получить новый массив, отфильтровав элементы с помощью переданной колбэк-функции. Прописываем условия, в которых сказано, что, если пользователь выберет определенное значение, то в браузере выведутся задачи, в которых ```folder``` равен данному значению.
 ```js
 <script>
  import {useFoldersStore} from "../store/FoldersStore.js";
  import {useTasksStore} from "../store/TasksStore.js";

  export default {
    name: 'Task',
    data() {
      return {
        specificFolder: 'all-tasks'
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
    }
  }
</script>
 ```
 
<br>
:bookmark_tabs: <a href = "#table-of-contents">Оглавление</a>

#### <p id = "search-for-tasks-by-name">Поиск задач по описанию</p>
В компоненте ```Task.vue``` в ```computed``` скрипта создаем функцию ```searchDesc()```, в которой прописываем связь с функцией ```getTasksInFolder()```. Метод массива ```.filter()``` позволяет получить новый массив, отфильтровав элементы с помощью переданной колбэк-функции. Введенные данные в поле поиска сравниваются с данными из массива ```tasks```, а именно со свойством ```description```. Метод ```toLowerCase()``` возвращает значение строки, на которой он был вызван, преобразованное в нижний регистр.
 ```js
 <script>
  import {useFoldersStore} from "../store/FoldersStore.js";
  import {useTasksStore} from "../store/TasksStore.js";
  
  export default {
    name: 'Task',
    data() {
      return {
        specificFolder: 'all-tasks',
        searchDescription: '', //!
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
      searchDesc() { //!
        //Поиск задач по названию
        return this.getTasksInFolder.filter(task => {
          return task.description.toLowerCase().includes(this.searchDescription.toLowerCase())
        })
      },
    }
  }
</script>
 ```
 
<br>
:bookmark_tabs: <a href = "#table-of-contents">Оглавление</a>

#### <p id = "tasks-sorting">Сортировка задач</p>
В компоненте ```Task.vue``` в скрипте подключаем ```moment.js```.  
**Moment.js** — это одна из самых популярных JavaScript-библиотек для разбора и форматирования дат.

В функции ```data()``` создаем свойство ```sortby```, отвечающее за выбор определенной сортировки.  
В ```computed``` скрипта создаем функцию ```searchAndSort()```, в которой прописываем связь с функцией ```searchDesc()```. Метод массива ```.sort()``` на месте сортирует элементы массива и возвращает отсортированный массив.

Сортировка задач происходит:
- По дате завершения;
- По приоритету;
- От А до Я;
- От Я до А.

При сортировке "По дате завершения" обращаемся к библиотеке ```moment.js```. Идет обращение к свойству ```date_completion``` массива ```tasks```, задается формат даты ```DD.MM.YY```. При данной сортировке сначала идут задачи, созданные позже предыдущих.

При сортировке "По приоритету" идет обращение к длине свойства ```priority``` массива ```tasks```, также используется метод ```localeCompare()```.  
**localeCompare()** - возвращает число, указывающее, должна ли данная строка находиться до, после или в том же самом месте, что и строка, переданная через параметр, при сортировке этих строк.  
При данной сортировке сначала идут задачи высокого, затем среднего и только потом низкого приоритета.

При сортировке "От А до Я" и "От Я до А" идет обращение к свойству ```description``` массива ```tasks```, также используется метод ```localeCompare()```. При сортировке "От А до Я" задачи сначала идут по возрастанию, а при сортировке "От Я до А" - по убыванию.

```js
<script>
  import {useFoldersStore} from "../store/FoldersStore.js";
  import {useTasksStore} from "../store/TasksStore.js";
  import moment from "moment/moment.js";

  export default {
    name: 'Task',
    data() {
      return {
        specificFolder: 'all-tasks',
        searchDescription: '',
        sortby: 'date', //!
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
      searchAndSort() { //!
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
```

<br>
:bookmark_tabs: <a href = "#table-of-contents">Оглавление</a>
