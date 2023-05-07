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
- <a href = "#technical-task">Техническое задание</a>
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
- <a href = "#project-deployment">Развертывание проекта на GitHub</a>
- <a href = "#project-problems">Неполадки с проектом на GitHub</a>

_________________________________________________________________________________________________________________________________________________________________
## <p id = "documentation">Документация</p>
- [Vite](https://vitejs.dev/)
- [Vue 3](https://v3.ru.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Moment.js](https://momentjs.com/)

<br>
:bookmark_tabs: <a href = "#table-of-contents">Оглавление</a>

## <p id = "technical-task">Техническое задание</p>
Задача: Разработать клиентское приложение для ведение списка дел, используя заданные технологии.

Функционал:
- Создание задачи:
  - Название задачи;
  - Приоритет (низкий / средний / высокий);
  - Дата создания (указывается автоматически).
- Пометка задач выполненными;
- Поиск задач по названию;
- Сорировка задач по:
  - Дате;
  - Приоритету;
  - Алфавиту;
  - Изменение порядка сортировки.
- Редактирование и удаление задач;
- (Дополнительно) дополнить задачи пунктом "Срок выполнения" (с точностью до дня), выделять просроченные задачи;
- (Дополнительно) добавить функционал группировки задач (подсписки):
  - Пользователь может создать подсписок задач и, либо указать его при создании новой задачи, либо переместить в него существующую задачу.
- (Дополнительно) возможность авторизации:
	- Регистрация не нужна, используются готовые учётки, записанные где-то в коде приложения;
	- Неавторизированный пользователь видит только форму авторизации;
	- Авторизованный пользователь видит своё имя, может разлогиниться;
	- Авторизованный пользователь автоматически авторизуется после перезагрузки приложения;
	- Разграничение того, какой пользователь какие задачи создаёт и видит делать НЕ нужно.

Технические требования:
- Требуется только клиентская часть приложения, все необходимые данные должны храниться в браузере;
- (Дополнительно) Использовать Vite вместо Webpack:
	- Примечание: делать это следует в самую первую очередь.
- (Дополнительно) Поддержка препроцессора CSS (SCSS / Sass / Less):
	- Примечание: важно чтобы просто была возможность пользоваться препроцессором, изучать его синтаксис и активно им пользоваться необязательно.
- Vue 3;
- Pinia;
- Библиотека для иконок (предпочтительно Iconify);
- Использование дополнительных библиотек не возбраняется.

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
      date_completion: "23.06.2023",
      folder: 'Все задачи'
    },
    {
      id: 2,
      description: "Внедрить Wi-fi для читателей",
      priority: "Средний",
      date_creation: "25.03.2023",
      date_completion: "22.06.2023",
      folder: 'Все задачи'
    },
    {
      id: 3,
      description: "Отредактировать раздел 'Доступная среда'",
      priority: "Высокий",
      date_creation: "15.03.2023",
      date_completion: "21.06.2023",
      folder: 'Все задачи'
    },
    {
      id: 4,
      description: "Презентация 'Информационные технологии'",
      priority: "Средний",
      date_creation: "15.03.2023",
      date_completion: "20.06.2023",
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

https://user-images.githubusercontent.com/93386515/236671929-225e16d9-19b6-46c6-9920-09ba8fa34bd0.mp4
 
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

https://user-images.githubusercontent.com/93386515/236672096-d8077c14-aa21-4243-a2e4-b4afe07c56c1.mp4

<br>
:bookmark_tabs: <a href = "#table-of-contents">Оглавление</a>

#### <p id = "tasks-sorting">Сортировка задач</p>
В компоненте ```Task.vue``` в скрипте подключаем ```moment.js```.  
**[Moment.js](https://momentjs.com/)** — это одна из самых популярных JavaScript-библиотек для разбора и форматирования дат.

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

https://user-images.githubusercontent.com/93386515/236672225-88417e0b-3735-4cd1-bf0c-faedf2ef9e9d.mp4

<br>
:bookmark_tabs: <a href = "#table-of-contents">Оглавление</a>

#### <p id = "final-template">Итоговый шаблон задач</p>
```vue
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
          </tr>
        </transition-group>
      </tbody>
    </table>
  </div>
</template>
```

https://user-images.githubusercontent.com/93386515/236671687-3aca15ed-b857-4aec-86a4-8c357798c230.mp4

<br>
:bookmark_tabs: <a href = "#table-of-contents">Оглавление</a>

#### <p id = "add-task">Добавить задачу</p>
В компоненте ```Tasks.vue``` указана иконка создания задачи. При клике на нее идет обращение к функции ```showModal()``` хранилища ```TasksStore.js```, которая отвечает за всплывание модального окна.

Иконка в шаблоне ```template``` компонента ```Tasks.vue```.
```vue
<div class="img-plus" @click="tasksStore.showModal">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" class="svg-plus">
    <path fill="#314b99" d="M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3v-3M5 3h14c1.11 0 2 .89 2 2v7.8c-.61-.35-1.28-.6-2-.72V5H5v14h7.08c.12.72.37 1.39.72 2H5c-1.11 0-2-.89-2-2V5c0-1.11.89-2 2-2m2 4h10v2H7V7m0 4h10v1.08c-.85.14-1.63.46-2.32.92H7v-2m0 4h5v2H7v-2Z"/>
  </svg>
</div>
```

Создадим компонент ```ModalFormCreateTask.vue```.  
В ```<script setup>``` компонента подключаем хранилище ```TasksStore.js```.
```js
<script setup>
  import {useTasksStore} from "../store/TasksStore.js";

  const taskStore = useTasksStore();
</script>
```

В функции ```data()``` создаем свойства ```id```, ```description```, ```priority```, ```date_creation```, ```date_completion```, ```isDone``` и ```folder```.  
В ```methods``` прописываем функцию ```createTask()```, в которой создаем объект ```newTask```, ссылающийся на свойства из ```data()```. Далее, проверяем поля ```description```, ```priority``` и ```date_completion``` на пустоту. Если они не пустые, то при помощи метода ```.push()``` добавляем объект ```newTask``` в массив ```tasks``` и закрываем модальное окно.

```js
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
```

Шаблон ```template``` компонента ```ModalFormCreateTask.vue```.
```vue
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
```

https://user-images.githubusercontent.com/93386515/236677694-49a3e82a-0d57-4270-8cb6-e9bc00349a2d.mp4

<br>
:bookmark_tabs: <a href = "#table-of-contents">Оглавление</a>

#### <p id = "update-task">Редактировать задачу</p>
В скрипте компонента ```Task.vue``` в функции ```data()``` прописываем свойство ```edit```, отвечающее за доступ к редактированию задачи.  
В ```methods``` создаем функции ```showEdit()```, которая отвечает за открытие полей редактирования, и ```hideEdit()```, которая отвечает за закрытие полей редактирования.
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
        sortby: 'date',
        edit: false //!
      }
    },
    methods: {
      showEdit() { //!
        this.edit = true
      },
      hideEdit() { //!
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

Иконки шаблона ```template``` компонента ```Task.vue```, отвечающие за открытие и закрытие полей редактирования.
```vue
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
```

Редактирование на примере поля ```description``` в шаблоне ```template``` компонента ```Task.vue```.
```vue
<td>
  <span v-if="!edit">{{task.description}}</span>
  <div v-else>
    <textarea rows="4" cols="30" v-model.lazy="task.description"></textarea>
  </div>
</td>
```

https://user-images.githubusercontent.com/93386515/236679749-391a17de-aaa4-43cb-8a52-06c4d65d4e4e.mp4

<br>
:bookmark_tabs: <a href = "#table-of-contents">Оглавление</a>


#### <p id = "delete-task">Удалить задачу</p>
При клике на иконку шаблона ```template``` компонента ```Task.vue```, отвечающую за удаление задачи по ```id```, срабатывает функция ```deleteTask()``` хранилища ```TasksStore.js```. В этот момент всплывает окно подтверждения удаления задачи. Если нажать "ОК" задача удалится.

Иконка шаблона ```template``` компонента ```Task.vue```.
```vue
<div @click="taskStore.deleteTask(task.id)" class="basket">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15">
    <path fill="#c11d13" d="m12.41 5.58l-1.34 8a.5.5 0 0 1-.49.41H4.42a.5.5 0 0 1-.49-.41l-1.34-8A.5.5 0 0 1 3.08 5h8.83a.5.5 0 0 1 .5.58zM13 3.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1 0-1H5V1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V3h2.5a.5.5 0 0 1 .5.5zM9 3V2H6v1h3z"/>
  </svg>
</div>
```

Функция ```deleteTask()``` хранилища ```TasksStore.js```.
```js
//Удалить задачу
const deleteTask = (id) => {
  if (confirm(`Вы уверены, что хотите удалить данную задачу?`)) {
    tasks.value = tasks.value.filter((el) => el.id !== id);
  }
};
```

https://user-images.githubusercontent.com/93386515/236680774-a517c287-e025-41b5-861f-c72a9bc70c22.mp4

<br>
:bookmark_tabs: <a href = "#table-of-contents">Оглавление</a>

## <p id = "project-deployment">Развертывание проекта на GitHub</p>
**1. Установите ```base``` на ```/vite.config.js```.**
```js
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base:
      process.env.NODE_ENV === "production"
          ? "/to-do-list/"
          : "/",
})
```

**2. Удалить ```dist``` из ```/.gitignore```.**

**3. Публиковать проект.**
```js
npm run build
```

**4. Убедиться, что зафиксировано и нажато origin master/main.**

**5. Использовать поддерево.**
```js
git subtree push --prefix dist origin gh-pages
```

**6. Перейти в репозиторий проекта и открыть ```Settings > Pages > Build and deployment```.**  
В ```Branch``` выбрать ветку ```gh-pages```. Нажать "Сохранить".

**7. Сделано.**  
Открыть проект в браузере.

<br>
:bookmark_tabs: <a href = "#table-of-contents">Оглавление</a>

## <p id = "project-problems">Неполадки с проектом на GitHub</p>
При перезагрузке страницы задач, возникает ошибка 404. На локальном сервере данной ошибки нет.

https://user-images.githubusercontent.com/93386515/236690112-6cd2f634-4b80-4768-ae24-5d5abae3a022.mp4

<br>
:bookmark_tabs: <a href = "#table-of-contents">Оглавление</a>
