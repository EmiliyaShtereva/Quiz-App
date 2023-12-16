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

let shuffledQestions;
let currentQuestionIndex = 0;
let score = 0;

function startQuiz () {
    nextButton.classList.add('hide');
    explanationElement.classList.add('hide');
    shuffledQestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = 'Next';
    showQuestion();
}

function showQuestion() {
    let currentQuestion = shuffledQestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
    });
}

startQuiz();