<script setup>

import {ref,watch,watchEffect} from 'vue'
import {useTrendStore} from '@/stores/trend.js'

const store = useTrendStore();
let quiz = ref(null)
let acceptanceRate = ref(null)

watchEffect(
    async() => {store.getTrendingQuiz()}
)
watch(store.getTrend,()=>{
    quiz.value = store.trend;
    acceptanceRate.value = store.getAcceptanceRate;
})


</script>
<template>
<div v-if='quiz' class="box-container">
    <div class=box>
        <div class="box-head">
            <h1>{{quiz.name}}</h1>
            <div class="label">Trending</div>
        </div>
        <div class="description">
            <p>
                {{quiz.description}}
            </p>
        </div>
        <div class="state-container">
            <div class="state-content">
                <div class="num">{{quiz.submissions}}</div>
                <div class="title">submissions</div>
            </div>
            <div class="state-content">
                <div class="num">{{quiz.views}}</div>
                <div class="title">views</div>
            </div>
            <div class="state-content">
                <div class="num">{{acceptanceRate}}%</div>
                <div class="title">acceptance rate</div>
            </div>
        </div>
        <div class="btns">
            <router-link class="btn" :to="{name:'Quiz',params:{id:quiz.id}}">Pass Quiz</router-link>
            <router-link class="btn" to="/quiz"><i class="fa-solid fa-bars"></i>Description</router-link>
            <router-link class="btn" to="/quiz"><i class="fa-solid fa-bookmark"></i>Save</router-link>
        </div>
    </div>
    <img src="../assets/img/cover.png" alt="">
</div>
</template>
<style scoped>
    .box-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 73vw;
        height: 35vh;
        background-color: white;
        padding: 25px;
        border-radius: 10px;
        box-shadow: 0.1px 0.1px 10px 0.1px #9191913B;
    }
    .box {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .box-head {
        display: flex;
        flex-direction: row;
    }
    .box-head h1 {
        color: rgb(1, 1, 60);
    }
    .box-head .label {
        background-color: rgb(245, 87, 119);
        color: white;
        width: 70px;
        height: 25px;
        text-align: center;
        border-radius: 5px;
    }
    .state-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 17vw;
    }
    .state-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .description {
        display: none;
    }
    .title {
        color: #4F749B;
        font-size: 0.7em;
    }
    .num {
        font-size: 1.4em;
        color: rgb(1, 1, 60);
    }
    .btns {
        width: 30vw;
        display: flex;
        justify-content: space-between;
    }
    .btn:first-child {
        background-color: #4F74FB;
        color: white;
    }
    .btn {
        font-size: 0.9em;
        text-decoration: none;
        border-radius: 5px;
        padding: 15px 25px;
        border: none;
        background-color: white;
        color: #4F749B;
        font-weight: 600;
        box-shadow: 0.1px 0.1px 10px 1px #0000001B;
    }
    .btn i {
        margin-right: 10px;
    }
    img {
        height: 60vh;
    }
    @media screen and (max-width: 768px){
        img {
            display: none;
        }
        .box-container {
            width: 75vw;
            height: 50vh;
        }
        .state-container {
            width: 55vw;
        }
        .description {
            display: block;
        }
        .btns {
            width: 70vw;
        }
        .btn {
            width: 85px;
            padding: 10px 0px;
            text-align: center;
            font-size: 0.7em;
        }
        .btn:nth-of-type(2)
        {
            display: none;
        }
    }
</style>