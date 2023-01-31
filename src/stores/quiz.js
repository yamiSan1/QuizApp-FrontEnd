import {defineStore} from 'pinia'
import {ref,computed} from 'vue'
import axios from 'axios'

export const useQuizStore = defineStore('quiz',()=>{
    let questions = ref(null);
    let i = ref(0);
    let score = ref(0);
    let isAlreadyClicked = ref(0);
    let correctIndex = ref(null);
    let choices = null;


    const getQuestions = computed(() => {
        return questions;
    });
    const getQuestion = computed(() => {
        return questions.value[i.value];
    });
    const getSize = computed(() => {
        return Object.keys(questions).length - 1;
    });
    const getIndex = computed(() => {
        return i;
    })


    async function getQuizQuestions(id) {
        questions.value = await axios.get(`http://127.0.0.1:8000/api/quiz/${id}`)
        .then(json => json.data.data.content);
    }
    function nextQuestion() {
        i.value++
        isAlreadyClicked.value = 0
    }
    function showAnswer(choice,question)
    {
        choices = question.choices.map((ele)=>{
            return ele.choice;
        })
        correctIndex = choices.indexOf(question.correct_choice.choice);
        if (!isAlreadyClicked.value) {
            console.log(isAlreadyClicked)
            isAlreadyClicked.value = 1;
            document.getElementById(`choice-container${correctIndex}`).style.backgroundColor = '#B6E2D3'
            if (choice !== correctIndex) {
                document.getElementById(`choice-container${choice}`).style.backgroundColor = '#EF7C8E'
            }
            else {
                score.value++;
            }
        }
    }
    function finishQuiz()
    {
        i.value = 0;
    }
    return {
            questions,i,score,isAlreadyClicked,correctIndex,choices,
            getQuestions,getQuestion,getSize,getIndex,
            getQuizQuestions,nextQuestion,showAnswer,finishQuiz
        }
})