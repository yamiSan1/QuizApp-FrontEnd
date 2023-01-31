<script setup>
    import axios from 'axios'
    import {ref,watchEffect} from 'vue'
    import {useRoute} from 'vue-router'
    import QuizCard from './QuizCard.vue'

    const route = useRoute();
    const id = route.params.id;
    let subject = ref(null);
    watchEffect(async () => {subject.value = await (await axios.get(`http://127.0.0.1:8000/api/subjects/${id}`).then(json=>json.data))})
</script>
<template>
    <div class="container">
        <div class="tags">
            <p><strong>Subject:</strong> <router-link class='link' :to="{name:'Subject',params:{id:subject.id}}">{{subject.name}}</router-link></p>
            <p><strong>Category:</strong> <router-link class='link' :to="{name:'Category',params:{id:subject.category.id}}">{{subject.category.name}}</router-link></p>
            <p><strong>Description:</strong> <span>{{subject.description}}</span></p>
        </div>
        <div class="cards" v-if='subject.quizzes[0]!=undefined'>
            <div v-for='quiz in subject.quizzes'>
                <QuizCard :quiz-data="quiz" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.tags {
    width: 580px;
    height: auto;
    padding: 0px 15px;
    background-color: white;
    border-radius: 5px;
    margin: 20px 0px;
}
.tags .link {
    font-size: 0.9em;
    color: #4F749B;
}
.tags p span {
    font-size: 0.9em;
}
.container {
    display: flex;
    align-items: center;
    width: 80%;
}
.cards {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
}
@media screen and (max-width: 768px){
    .container {
        width: 100vw;
    }
    .tags {
        width: 280px;
    }
}
</style>