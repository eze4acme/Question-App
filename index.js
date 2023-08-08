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
// const btnEl = document.getElementById('btn')
const answerButtonsEl = document.getElementById('answer-buttons')
const nextBtnEl = document.getElementById('next-btn')
const playBtnEl = document.getElementById('play-btn')


let currentIndex = 0;
let score = 0;

function render() {
    questionEl.innerHTML =`${currentIndex + 1}. ${quizQuestions[currentIndex].question}`

    quizQuestions[currentIndex].options.map(option => {
    answerButtonsEl.innerHTML += `<button class="btn">${option}</button>`
})
}


render()
nextBtnEl.addEventListener('click', function () {
   if (currentIndex < quizQuestions.length - 1) {
        answerButtonsEl.innerHTML = ''
        currentIndex++
        render()
   }else{
    questionEl.innerHTML = ''
    answerButtonsEl.innerHTML = ''
    questionEl.innerHTML = `You Scored 3 Out Of ${quizQuestions.length}`
    playBtnEl.style.display = 'block'
    nextBtnEl.style.display = 'none'
}
})
playBtnEl.addEventListener('click', function () {
    currentIndex = 0
    render()
    nextBtnEl.style.display = 'block'
    playBtnEl.style.display = 'none'
})
