<script setup>
    import SubjectCard from './SubjectCard.vue'
    import axios from 'axios'
    import {ref,watchEffect} from 'vue'

    let subjects = ref(null);
    watchEffect(async () => {subjects.value = await (await axios.get('http://127.0.0.1:8000/api/subjects').then(json=>json.data))})
</script>
<template>
    <div class="cards">
        <div v-for="subject in subjects">
            <SubjectCard :subject-data="subject"/>
        </div>
    </div>
</template>
<style scoped>
.cards {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
}
@media screen and (max-width: 768px){
    .cards {
        width: 100vw;
    }
}
</style>