import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import Categories from './components/Categories.vue'
import Category from './components/Category.vue'
import Subjects from './components/Subjects.vue'
import Subject from './components/Subject.vue'
import Quiz from './components/Quiz.vue'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/',name:'Home',component:Home},
        {path:'/subjects',name:'Subjects',component:Subjects},
        {path:'/quiz/:id',name:'Quiz',component:Quiz},
        {path:'/subjects/:id',name:'Subject',component:Subject},
        {path:'/categories',name:'Categories',component:Categories},
        {path:'/categories/:id',name:'Category',component:Category},
    ]
})

const app = createApp(App)

app.use(createPinia())
app.use(router)


app.mount('#app')
