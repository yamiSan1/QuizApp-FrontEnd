<script setup>
    const props = defineProps({subjectData: Object})
</script>
<template>
    <div class="card">
        <div class="image">
            <img src="../assets/img/Subjects/Arabic.png" alt="">
        </div>
        <div class="info">
            <p class="category">{{subjectData.category}}</p>
            <strong class="title">
                <span>{{subjectData.name}}</span>
                <router-link :to='{ name:"Subject", params:{id:subjectData.id}}' class="more-details">More details</router-link>
            </strong>
        </div>
    </div>
</template>
<style scoped>

.card{
    background-color: #fff;
    border: 1px solid #fff;
    min-height: 224px;
    width: 280px;
    overflow: hidden;
    border-radius: 10px;
    margin: 20px;
    transition: 0.7s ease;
}
.card:hover{
    transform: scale(1.1);
}
.image{
    display: flex;
    justify-content: center;
    align-items: center;
}
.image img {
    height: 200px;
}
.info{
    padding: 1em;
}
.category{
    font-size: 0.8em;
    color: black;
}
.title{
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    font-weight: 800;
    margin-top: 10px;
}
.more-details {
    text-decoration: none;
    color: #4F749B;
}
.more-details:hover {
    color: black;
}
</style>