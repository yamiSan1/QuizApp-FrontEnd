<script setup>
    import {ref,watchEffect,watch} from 'vue'
    import {useRoute} from 'vue-router'
    import {useQuizStore} from '@/stores/quiz.js'

    const route = useRoute();
    const id = route.params.id;
    const store = useQuizStore();

    let question = ref(null);
    let i = ref(null);
    let size = ref(null);
    let score = ref(null);
    let finished = ref(0);

    watchEffect(async () => {
        store.getQuizQuestions(id)
    })
    watch([store.getQuestions,store.getIndex],() => {
        question.value = store.getQuestion
        i.value = store.i;
        size.value = store.getSize;
        score.value = store.score;
    })


    function nextQuestion() {
        store.nextQuestion()
    }
    function showAnswer(choice,question)
    {
        store.showAnswer(choice,question)
    }
    function finishQuiz()
    {
        finished.value = 1
        store.finishQuiz()
    }
    
</script>
<template>
    <div id="quiz-container" v-if="finished">
        Your score is {{score}}/{{size}}
    </div>
    <div v-else-if="i<size" id="quiz-container">
        <form>
            <div>{{`${i+1}/${size}`}}</div>

            <label :for="`question${i+1}`">{{question.question}}</label>
            
            <div class="choices">
                <div class="choice-field" :id="`choice-container${index}`" v-for="(choice,index) in question.choices" :key="i">
                    <input @click.self="showAnswer(index,question)" type="radio" :name="`question${i+1}`" :id="`choice${index}`" :value="choice">
                    <label :for="`choice${index}`">{{choice.choice}}</label>
                </div>
            </div>

            <div class='btn-container'>
                <button type="button" @click="(i+1) === size?finishQuiz():nextQuestion()">{{(i+1) === size?'Finish':'Next'}}</button>
            </div>
        </form>
    </div>
</template>
<style scoped>
    #quiz-container {
        display:flex;
        align-items:center;
        justify-content: center;
        background-color: #FFFFFF;
        box-shadow: 1px 1px 1px 1px #6666663C;
        width: 77vw;
        height: 80vh;
        border-radius: 20px;
    }
    form {
        height: 70vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .choice-field {
        width: 50vw;
        height: 7vh;
        background-color: #D4F1F4;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 0px 0px 15px;
        border-radius: 15px;
    }
    input {
        visibility: hidden;
    }
    label {
        min-width: 47vw;
    }
    .choices {
        height: 35vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    } 
    .btn-container {
        width: 50vw;
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
    }
    button {
        background-color: #01949A;
        border: none;
        border-radius: 10px;
        width: 80px;
        height:40px;
        color:#FFFFFF;
        font-weight: 600;
    }
</style>