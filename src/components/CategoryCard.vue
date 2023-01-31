<script setup>
    const props = defineProps({categoryData: Object})
</script>
<template>
    <div class="card">
        <div class="image">
            <img src="../assets/img/Subjects/Arabic.png" alt="">
        </div>
        <div class="info">
            <p class="description">Description</p>
            <p class="description-content">{{categoryData.description}}</p>
            <hr/>
            <strong class="title">
                <span>{{categoryData.name}}</span>
                <router-link :to='{ name:"Category", params:{id:categoryData.id}}' class="more-details">More details</router-link>
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
.description{
    font-size: 0.8em;
    color: black;
    cursor:pointer;
    text-decoration: underline;
}
.description-content {
    width: 250px;
    height: 75px;
    border: none;
    border-radius: 10px;
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