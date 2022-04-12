var currentQuestionIndex = 0
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
    var currentQuestion = questions [currentQuestionIndex];
    var title = document.getElementById('question')
    title.textContent= currentQuestion.question

    answerButtonsEl.innerHTML= "";
    currentQuestion.answers.forEach(function(choice, i) {
        var choiceNode = document.createElement("btn")
        choiceNode.setAttribute("btn", )
    }
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