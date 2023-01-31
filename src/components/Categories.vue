<script setup>
    import CategoryCard from './CategoryCard.vue'
    import axios from 'axios'
    import {ref,watchEffect} from 'vue'

    let categories = ref(null);
    watchEffect(async () => {categories.value = await (await axios.get('http://localhost:8000/api/categories').then(json=>json.data.data))})
</script>
<template>
    <div class="cards">
        <div v-for="category in categories">
            <CategoryCard :category-data="category"/>
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