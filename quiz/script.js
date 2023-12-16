const questions = [
    {
        question: 'Which is the largest animal in the world?',
        answers: [
            {text: 'Shark', correct: false},
            {text: 'Blue whale', correct: true},
            {text: 'Elephant', correct: false},
            {text: 'Giraffe', correct: false},
        ],
        explanation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae consequatur adipisci illum reprehenderit quod impedit harum, accusamus at quis ad minima asperiores optio consequuntur libero voluptate ipsa neque dolorem itaque?'
    }, 
    {
        question: 'Which is the smallest continent in the world?',
        answers: [
            {text: 'Asia', correct: false},
            {text: 'Australia', correct: true},
            {text: 'Arctic', correct: false},
            {text: 'Africa', correct: false},
        ],
        explanation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae consequatur adipisci illum reprehenderit quod impedit harum, accusamus at quis ad minima asperiores optio consequuntur libero voluptate ipsa neque dolorem itaque?'
    }, {
        question: 'Which is the smallest countryl in the world?',
        answers: [
            {text: 'Vatican City', correct: true},
            {text: 'Bhutan', correct: false},
            {text: 'Nepal', correct: false},
            {text: 'Shri Lanka', correct: false},
        ],
        explanation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae consequatur adipisci illum reprehenderit quod impedit harum, accusamus at quis ad minima asperiores optio consequuntur libero voluptate ipsa neque dolorem itaque?'
    }
];

const questionElement = document.getElementById('question');
const explanationElement = document.getElementById('explanation-contaner');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let shuffledQestions;
let currentQuestionIndex = 0;
let score = 0;

function startQuiz () {
    shuffledQestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = shuffledQestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    explanationElement.classList.add('hide');
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';
    if(isCorrect) {
        selectBtn.classList.add('correct');
        score++;
    } else {
        selectBtn.classList.add('incorrect')
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.classList.remove('hide');
    explanationElement.classList.remove('hide');
}

startQuiz();