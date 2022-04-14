var questionDivEl = document.querySelector(".question");

//the thing I want to do with this local storage is be able to store answers
let questionIndex = 0
let score = 0
let timeLeft = 60
let timeInterval

// created a timer that attached to the html element "time"

var onStartQuiz = function () {
    timeInterval = setInterval(function () {
        document.querySelector(".time").innerText = "Time:" + timeLeft
        timeLeft--
        if (timeLeft <= 0){
            showScore()
        }
    }, 1000);

    //when the quiz starts it grabs the first object in the array
    var currentQuestion = questions[questionIndex];

    //its going into the html and taking the div clas question and setting the value equal to the current question
    questionDivEl.innerText = currentQuestion.question
    //I had to pass in currentQuestions because it wasn't defined inside this function
    createButtons(currentQuestion)
    //I removed the start quiz button but I'm amzed that it doesn't just remove it from the very begining  
    document.querySelector(".intro").remove();


}

//same shit, I had to pass in currentQuestion
var createButtons = function (currentQuestion) {

    //I created buttons with create element
    //and then I added stuff to the button from the array using btn.innerHtml.
    //and then I had document.questionDivEl to get the variable but that didn't work
    //so finally I deleted the "document" and it worked but I'm not exactly sure why because I just checked the taskinator to see
    var btn = document.createElement("button");
    btn.innerHTML = currentQuestion.a
    btn.id = "btn-a";
    btn.type = "button";
    btn.className = "btn"
    btn.addEventListener("click", turnBlue);
    questionDivEl.appendChild(btn);

    var btn = document.createElement("button");
    btn.innerHTML = currentQuestion.b
    btn.id = "btn-b";
    btn.type = "button";
    btn.className = "btn"
    btn.addEventListener("click", turnBlue);
    questionDivEl.appendChild(btn);


    var btn = document.createElement("button");
    btn.innerHTML = currentQuestion.c
    btn.id = "btn-c";
    btn.type = "button";
    btn.className = "btn"
    btn.addEventListener("click", turnBlue);
    questionDivEl.appendChild(btn);


    var btn = document.createElement("button");
    btn.innerHTML = currentQuestion.d
    btn.id = "btn-d";
    btn.type = "button";
    btn.className = "btn"
    btn.addEventListener("click", turnBlue);
    questionDivEl.appendChild(btn);


    var btn = document.createElement("button");
    //i need a btn to go to the next question but its not working
    btn.innerHTML = "Next Question"
    // buttons
    btn.id = "next-question";
    btn.type = "button";
    btn.addEventListener("click", nextQuestion);
    questionDivEl.appendChild(btn);

    //if the questions we've gone through equals the questions that are in the array then we show score
    if (questionIndex == questions.length - 1) {
        btn.innerHTML = "Finish Quiz"
        btn.removeEventListener("click", nextQuestion);
        btn.addEventListener("click", showScore)

    }
}
var nextQuestion = function () {

    //need to save the blue answer if background color is blue whe get the id of the btn
    //and compare it to the answer
    //saving all the btns in a variable
    var btnList = document.querySelectorAll(".btn");
    //I originally put var here but it can't be a variable because I need to reset it to something else inside the for loop
    let checkIt = ""
    for (let i = 0; i < btnList.length; i++) {
        //if the background color is blue then I am setting the variable checkit to the btn id
        //this will hopefully save the btn id
        if (btnList[i].style.backgroundColor === "blue") {
            checkIt = btnList[i].id
        }
        //it needs the currentQuestion in the createbuttons 
    }


    //the first paramenter of verifyAnswer is the current question
    verifyAnswer(questions[questionIndex], checkIt)


    //questionIndex++=questionIndex plus 1, which would change our index to the next question in our list
    questionIndex++
    console.log(questionIndex)
    //change the innertext for the question
    var currentQuestion = questions[questionIndex];
    questionDivEl.innerText = currentQuestion.question
    //update answer options 

    createButtons(questions[questionIndex])
    //if the questions we've gone through equals the questions that are in the array then we show score
    // if (questionIndex == questions.length - 1) {

    // }

}
var turnBlue = function (event) {
    //when btn onclick, turn btn blue
    //so I made a variable to select all the buttons to change color when they are clicked
    //because I want them to turn blue when clicked but I also don't want them to all turn blue
    //I want whichever is the most recent clicked button to turn blue
    //I didn't know how to do this so w3schools https://www.w3schools.com/js/js_htmldom_nodelist.asp
    //was very helpful
    var btnList = document.querySelectorAll(".btn")
    for (let i = 0; i < btnList.length; i++) {
        btnList[i].style.backgroundColor = "white"
    }
    event.target.style.backgroundColor = "blue";

}
//whenever we call verifyAnswer, we are feeding it the current question
var verifyAnswer = function (currentQuestion, btnId) {
    //btn- is an empty string and we are replaing it as an empty string so the remaining part of the string a, b, c, or d is left as the received answer
    //woah so cool, replacing parts of strings
    //check recieved answer against the current question answer
    var receivedAnswer = btnId.replace("btn-", "")
    //if answer is correct, update overallScore
    if (receivedAnswer === currentQuestion.answer) {
        //I feel like I might need some math here
        score++
    }
    //if answer is incorrect, update overallScore and steal time
    if (receivedAnswer !== currentQuestion.answer) {
        timeLeft = timeLeft - 5

    }

}
var input = document.createElement("input");
var showScore = function () {
    clearInterval(timeInterval);
    // argh the reason I never get full credit is because I wasn't checking the final question. I copy pasted
    var btnList = document.querySelectorAll(".btn");
    let checkIt = ""
    for (let i = 0; i < btnList.length; i++) {
        if (btnList[i].style.backgroundColor === "blue") {
            checkIt = btnList[i].id
        }
    }
    verifyAnswer(questions[questionIndex], checkIt)
    
    questionDivEl.innerText = "Your score is " + score + "/" + questions.length
    //I put savescore here but it really should be attached to something i feel

    //thank yoooou stack overflow

    input.type = "text";
    input.className = "save-initials"; // set the CSS class
    questionDivEl.appendChild(input); // put it into the DOM
    //add a button to submit scores

    var btn = document.createElement("button");
    btn.innerHTML = "Write your initials to save"
    btn.id = "btn-save";
    btn.type = "button";
    btn.className = "btn"
    btn.addEventListener("click", function () {
        var initials = input.value
        console.log(initials)
        var object = {
            //key value pair, key being the name of the property within the object, the value being the actual data or content
            initials: initials, score: score

        }
        //pushing my scores onto my array
        highScores.push(object)
        //making my high scores object into a string
        localStorage.setItem("highScores", JSON.stringify(highScores))
        questionDivEl.innerHTML = ""
        var thankYou = document.createElement("h3")
        thankYou.innerText = "Thank You For Taking this Quiz"
        questionDivEl.appendChild(thankYou)
    });


    questionDivEl.appendChild(btn);

    //new javascript attached to html, within that javascript first create a variable and set equal to localstorage,
    //like line 200 but key word var infront of line 200
}
var highScores = []
//getting items from local storage to put in array
if (localStorage.getItem("highScores")) {
    //changing them from string to object
    highScores = JSON.parse(localStorage.getItem("highScores"))


}


//making an array of questions
var questions = [
    {
        //right now the key question is a string
        question: "To create an array, what kind of brackets are used?",
        answer: "a",
        a: "a. square brackets",
        b: "b. angle brackets",
        c: "c. curly brackets",
        d: "d. parentheses",
        //an array holds a list of items and since each question is an object we need a fucking comma
    },
    {
        question: "How do you create a branch with github?",
        answer: "b",
        a: "a. git push",
        b: "b. git branch",
        c: "c. git add",
        d: "d. git commit",
    },
    {
        question: "What is a callback function?",
        answer: "b",
        a: "a. a function that is inside another function",
        b: "b. a function passed as an argument to another function",
        c: "c. a function that runs after a set delay",
        d: "d. a function that runs forever",

    },
    {
        question: "What does DOM stand for?",
        answer: "b",
        a: "a. Data Object Monitor",
        b: "b. Document Object Model",
        c: "c. Dynamic Object Monitor",
        d: "d. Data Object Model",

    },
    {
        question: "What does event.preventDefault do when added to a function?",
        answer: "a",
        a: "a. It prevents the default action that belongs to the event from running.",
        b: "b. It stops all code from running.",
        c: "c. It makes the text on the page stand up and dance a jig.",
        d: "d. It creates a new default for the function.",

    }

]