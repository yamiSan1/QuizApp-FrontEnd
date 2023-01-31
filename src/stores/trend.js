import {defineStore} from 'pinia'
import {computed,ref} from 'vue'
import axios from 'axios'


export const useTrendStore = defineStore('trend',()=>{
    const trend = ref(null);


    const getTrend = computed(()=>{
        return trend;
    })
    const getAcceptanceRate = computed(()=>{
        return ((trend.value.accepted*100)/trend.value.submissions)
        ?(trend.value.accepted*100)/trend.value.submissions
        :0
    })


    async function getTrendingQuiz(){
        trend.value = await axios
        .get('http://127.0.0.1:8000/api/trend')
        .then(json=>json.data);
    }


    return {
        trend,
        getTrend,getAcceptanceRate,
        getTrendingQuiz
    }

})