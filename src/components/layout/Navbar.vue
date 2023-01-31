<script setup>
    import {useSidebarStore} from '@/stores/sidebar'
    const store = useSidebarStore();
    function toggleSidebar() {
        store.toggleSidebar()
    }
</script>


<template>
    <header class="navbar">
        <nav>
            <div @click="toggleSidebar()" id='menu'>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <div class="searchbar">
                <form class="searchfield" method="get" action="search.html">
                    <input type="text" placeholder="Search" name="search">
                    <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
            <div class="img">
                <img src="../../assets/img/profile.jpg" alt="">
            </div>
        </nav>
    </header>
</template>


<style scoped>
.navbar {
    background-color: white;
    height: 12vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
#menu {
    display: none;
    cursor: pointer;
}
#menu .bar{
    content: '';
    border: 2px solid #000;
    width: 30px;
    margin-bottom: 5px;
}

.navbar nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 12vh;
    width: 53%;

}
.searchfield {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    background-color: transparent;
    border: 1px solid #4F749BC0;
    border-radius: 25px;
    width: 24vw;
    height: 7vh;

}
.searchfield i {
    color: #4F749BC0;
    margin: 0vw 1vw;
}
.searchfield input {
    background-color: transparent;
    border: none;
    outline: none;
    width: 15vw;
    height: 7vh;
}
.searchfield button {
    background-color: transparent;
    border: none;
}
.searchfield input::placeholder {
    color: #4F749BC0;
}
.navbar .img img {
    height: 8vh;
    width: auto;
    border-radius: 10px;
    margin-right: 20px;
}
@media screen and (max-width: 768px){
    #menu {
        display: block;
    }
    .navbar {
        position: fixed;
        top: 0;
        width: 100vw;
    }
    .navbar nav {
        width: 100vw;
        justify-content: space-around;
    }
    .navbar img {
        margin: 0;
    }
}

</style>