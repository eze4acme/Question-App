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
const btnEl = document.querySelectorAll('.btn')
const answerButtonsEl = document.getElementById('answer-buttons')
const nextBtnEl = document.getElementById('next-btn')
const playBtnEl = document.getElementById('play-btn')


let currentIndex = 0;
let score = 0;

function render() {
    questionEl.innerHTML =`${currentIndex + 1}. ${quizQuestions[currentIndex].question}`

    quizQuestions[currentIndex].options.map(option => {
    const button = document.createElement('button')
    button.classList.add('btn')
    button.innerHTML = option
    answerButtonsEl.appendChild(button)
    if (option == quizQuestions[currentIndex].correctAnswer){
        button.dataset.correctAnswer5 = quizQuestions[currentIndex].correctAnswer;
    }
    button.addEventListener('click', selectAnswer)
})
}

function selectAnswer(e) {
    const selectedBtn = e.target.dataset.correctAnswer5
    console.log(selectedBtn);
    if (selectedBtn === quizQuestions[currentIndex].correctAnswer) {
    console.log(score++);
  }
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
// console.log(btnEl);
})
playBtnEl.addEventListener('click', function () {
    currentIndex = 0
    render()
    nextBtnEl.style.display = 'block'
    playBtnEl.style.display = 'none'
})


