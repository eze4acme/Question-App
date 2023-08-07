const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: "William Shakespeare"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale"
  },
  {
    question: "Which gas do plants use for photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: "Carbon Dioxide"
  }
];

const questionEl = document.getElementById('question')
const btnEl = document.getElementById('btn')
const answerButtonsEl = document.getElementById('answer-buttons')
const nextBtnEl = document.getElementById('next-btn')


let currentIndex = 0;
let score = 0;

questionEl.innerHTML =`${currentIndex + 1}. ${quizQuestions[currentIndex].question}`
// let btn = ''
quizQuestions[currentIndex].options.map(option => {
    answerButtonsEl.innerHTML += `<button class="btn">${option}</button>`
})

console.log(quizQuestions);
