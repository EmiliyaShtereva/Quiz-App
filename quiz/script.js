const questions = [
    {
        question: 'Which is the largest animal in the world?',
        answer: [
            {text: 'Shark', correct: false},
            {text: 'Blue whale', correct: true},
            {text: 'Elephant', correct: false},
            {text: 'Giraffe', correct: false},
        ],
        explanation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae consequatur adipisci illum reprehenderit quod impedit harum, accusamus at quis ad minima asperiores optio consequuntur libero voluptate ipsa neque dolorem itaque?'
    }, 
    {
        question: 'Which is the smallest continent in the world?',
        answer: [
            {text: 'Asia', correct: false},
            {text: 'Australia', correct: true},
            {text: 'Arctic', correct: false},
            {text: 'Africa', correct: false},
        ],
        explanation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae consequatur adipisci illum reprehenderit quod impedit harum, accusamus at quis ad minima asperiores optio consequuntur libero voluptate ipsa neque dolorem itaque?'
    }, {
        question: 'Which is the smallest countryl in the world?',
        answer: [
            {text: 'Vatican City', correct: true},
            {text: 'Bhutan', correct: true},
            {text: 'Nepal', correct: false},
            {text: 'Shri Lanka', correct: false},
        ],
        explanation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae consequatur adipisci illum reprehenderit quod impedit harum, accusamus at quis ad minima asperiores optio consequuntur libero voluptate ipsa neque dolorem itaque?'
    }
];

const questionElement = document.getElementById('question');
const explanationElement = document.getElementById('explanation');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = 'Next';
    nextButton.classList.add('hide');
    explanationElement.classList.add('hide');
}

startQuiz();