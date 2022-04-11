var startButton = document.getElementById('start-btn')
var questionContainerEl = document.getElementById ('question-container')
var questionEl = document.getElementById('question')
var answerButtonsEl= document.getElementById('answer-buttons')
startButton.addEventListener("click", startGame);

function startGame() {
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    nextQuestion()
}

function nextQuestion(question) {
    //questionEl.textContent= question
}

function selectAnswer(){

}

var questions = [
    {
        question: "what is my fave color",
        answers: [
            {Text: "Blue", correct:true},
            {Text: "Red", correct:false},
            {Text: "Yellow", correct:false},
            {Text: "Orange", correct:false}
        ]
    },
    {
        question: "what is my fave color",
        answers: [
            {Text: "Blue", correct:true},
            {Text: "Red", correct:false},
            {Text: "Yellow", correct:false},
            {Text: "Orange", correct:false}
        ]
    },
    {
        question: "what is my fave color",
        answers: [
            {Text: "Blue", correct:true},
            {Text: "Red", correct:false},
            {Text: "Yellow", correct:false},
            {Text: "Orange", correct:false}
        ]
    },
    {
        question: "what is my fave color",
        answers: [
            {Text: "Blue", correct:true},
            {Text: "Red", correct:false},
            {Text: "Yellow", correct:false},
            {Text: "Orange", correct:false}
        ]
    }
]