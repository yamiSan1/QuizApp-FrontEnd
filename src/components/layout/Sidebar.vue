<script setup>
import {ref,watch} from 'vue'
import {useSidebarStore} from '@/stores/sidebar'
let store = useSidebarStore()
let isActive = ref('hide')
const list = store.list
watch(store,()=>{isActive.value = store.isActive?'show':'hide'})
</script>


<template>
    <nav :class="isActive">
        <div class="sidebar-container">
        <router-link class="logo" to="/"><span>The</span> Quiz</router-link>
        <ul>
        <li v-for="element in list"><router-link class='element' :to="element.link"><div class="icon" v-html="element.icon"></div>{{element.name}}</router-link></li>
        </ul>
        </div>
    </nav>
</template>


<style scoped>
    nav{
        width: 18vw;
        height: 100vh;
        background-color: #f5faff;
        position:fixed;
        top:0;
        left:0;
    }
    .sidebar-container {
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
        height: 70vh;
    }
    ul {
        width: 14vw;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        height: 40vh;
    }
    li {
        list-style:none;
    }
    li .element {
        width: 15vw;
        font-size: 0.9em;
        display:flex;
        flex-direction:row;
        align-items: center;
        color: #4F749B;
        text-decoration: none;
    }
    .logo {
        font-size: 1.5em;
        font-weight: 900;
        color:#000000;
        text-decoration: none;
    }
    .logo span{
        color: #4F74FB;
        font-weight: 900;
    }
    .icon {
        background-color: #4F749B30;
        color: #4F749BC0;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items:center;
        border-radius: 6px;
        margin-right: 8px;
    }
    @media screen and (max-width: 768px){
        nav{
            width: 100vw;
        }
        .show {
            display: block;
        }
        .hide {
            display: none;
        }
        .sidebar-container {
            width: 100vw;
            height: 100vh;
            display: flex;
        }
        ul {
            width: 40vw;
            height: 40vh;
        }
        li .element{
            width: 40vw;
        }


    }

</style>