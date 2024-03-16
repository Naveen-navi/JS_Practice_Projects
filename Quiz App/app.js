const questions = [
    {
        question : "Who is the prime minister of India",
        answers : [
            {text: "Rahul Gandhi", correct: false},
            {text: "Narendra Modi", correct: true},
            {text: "Amit Shah", correct: false},
            {text: "Sonia Gandhi", correct: false},
        ]
    },
    {
        question : "Which is the largest animal in the world",
        answers : [
            {text: "Shark", correct: false},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
            {text: "Blue Whale", correct: true},
        ]
    },
    {
        question : "Which is the national bird of India",
        answers : [
            {text: "parrot", correct: false},
            {text: "White-winged duck", correct: false},
            {text: "Woodpecker", correct: false},
            {text: "Peacock", correct: true},
        ]
    },
    {
        question : "Which is the most widely used language in karnataka ",
        answers : [
            {text: "Hindi", correct: false},
            {text: "Kannada", correct: true},
            {text: "Telugu", correct: false},
            {text: "Malayalam", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const options= document.getElementById("options");
const nextButton = document.getElementById("next-btn");

let currentQuestionIdx = 0;
let score = 0;

function startQuiz(){
    currentQuestionIdx = 0;
    score = 0;
    nextButton.innerHTML  = "Next";
    showQuestions();
}

function showQuestions(){
    resetState()
    let currentQuestion = questions[currentQuestionIdx]
    let questionNo = currentQuestionIdx + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML  = answer.text
        button.classList.add("btn");
        options.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(options.firstChild){
        options.removeChild(options.firstChild);
    }
}

function selectAnswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(options.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled  = true;
    })
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIdx < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

function handleNextButton(){
    currentQuestionIdx++;
    if(currentQuestionIdx < questions.length){
        showQuestions();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `your Score is ${score} out of ${questions.length}!!`;
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"; 
}

startQuiz();