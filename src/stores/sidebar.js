import {defineStore} from 'pinia'
import {ref,reactive} from 'vue'
export const useSidebarStore = defineStore('sidebar',() => {
    const list = reactive(
        [
            {
                name:'Home',
                icon:'<i class="fa-solid fa-house"></i>',
                link:'/'
            },
            {
                name:'Dashboard',
                icon:'<i class="fa-solid fa-user"></i>',
                link:'/'
            },
            {
                name:'Categories',
                icon:'<i class="fa-solid fa-list-ul"></i>',
                link:'/categories'
            },
            {
                name:'Subjects',
                icon:'<i class="fa-solid fa-square-root-variable"></i>',
                link:'/subjects'
            },
            {
                name:'Saved',
                icon:'<i class="fa-solid fa-bookmark"></i>',
                link:'/'
            }
        ]
    );
    let isActive = ref(false);
    function toggleSidebar() {
        isActive.value = isActive.value?false:true;
    }
    return {list,isActive,toggleSidebar}

})