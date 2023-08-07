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


let currentIndex = 0;
let score = 0;

function render() {
    questionEl.innerHTML =`${currentIndex + 1}. ${quizQuestions[currentIndex].question}`

    quizQuestions[currentIndex].options.map(option => {
    answerButtonsEl.innerHTML += `<button class="btn">${option}</button>`
})
}

// console.log(quizQuestions.lastIndexOf());

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
    nextBtnEl.innerText = 'Play Again'
   }
   if (currentIndex < quizQuestions.length  && nextBtnEl.textContent == 'Play Again') {
       nextBtnEl.onclick = render()
   }
})
//    nextBtnEl.onclick = render()
   // console.log(quizQuestions);


