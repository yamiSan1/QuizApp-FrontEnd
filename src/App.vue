<script setup>
  import Sidebar from './components/layout/Sidebar.vue'
  import Navbar from './components/layout/Navbar.vue'
</script>

<template>
  <div class="container">
    <Sidebar />
      <div class="second-side">
      <Navbar />
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
  * {
    font-family: 'Lato', sans-serif;
    margin:0;
    padding:0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  .second-side {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }
  .content {
    width: 100%;
    min-width: 82vw;
    min-height: 88.5vh;
    background-color: #4564851f;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
  }
  @media screen and (max-width: 768px){
    .content {
      width: 100vw;
      align-items: center;
      padding: 80px 0px 0px 0px;
    }
  }
</style>
