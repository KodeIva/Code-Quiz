let questions = [
 {
  question: 'What HTML stands for?',
  answers:['Hyper Text Markup Language','Hyperlink Text Markup Language','<h6>','header'], 
  correctAnswer: 'Hyper Text Markup Language'
 },
 {
  question: 'Which is the right way to set up alert with JS?', 
  answers:['newAlert()','prompt()','alert()','text()'], 
  correctAnswer: 'alert()'
 },
 {
  question: 'Choose the wrong JS data type?', 
  answers:['number','string','letters','boolean'], 
  correctAnswer: 'letters'
 },
 {
  question: 'What is the extention for JS file?', 
  answers:['.js','.javascript','.script','.JS'], 
  correctAnswer: '.js'
 }
]

let currentQuestion = 0
/*
for(let i = 0; i < questions.length;i++){
  console.log(questions[i].question);
  currentQuestion = questions[i].question
  console.log(currentQuestion);
}
*/

let time = 20
let winningPoints = 0
let startBtn = document.getElementById('start')
let questionDiv = document.getElementById('questions')
let questionTitle = document.querySelector('#question-title')
let endScreen = document.getElementById('end-screen')
let finalScore = document.getElementById('final-score')
let subBtn = document.getElementById('submit')
let input = document.getElementById('initials')
let startScreen = document.getElementById('start-screen')

// Setting the timer
function setTimer() {
  let interval  = setInterval(function() {
  let currentTime = document.getElementById('time')
  time--
  currentTime.innerHTML = time

  if(time == 0 || time < 0) {
   clearInterval(interval)
   questionDiv.classList.add('hide')
   questionTitle.classList.add('hide')
   endScreen.classList.remove('hide')
   finalScore.textContent = winningPoints
  }
 },1000)
}

// Add event listener to 'Start Quiz' button
startBtn.addEventListener('click', function() {
 startScreen.classList.add('hide')
 setTimer()
 generateQuestions()
})

// Generating the questions and answers
function generateQuestions() {
  let choices = document.getElementById('choices')
  questionDiv.classList.remove('hide')
  questionTitle.classList.remove('hide')
  questionTitle.textContent = questions[currentQuestion].question
  
  let ol = document.createElement('ol')
  choices.append(ol)

 for(let i = 0; i < questions[currentQuestion].answers.length; i++) {
   let li = document.createElement('li')
   let btn = document.createElement('button')
   btn.textContent = questions[currentQuestion].answers[i]
   ol.appendChild(li) 
   li.appendChild(btn)
   
   btn.addEventListener('click', function(e) {
    if(e.target.innerHTML !== questions[currentQuestion].correctAnswer) {
      time = time - 10
      let h1 = document.createElement('h1')
      h1.textContent = `Wrong!`
      h1.setAttribute('style', 'color: #ef626c; font-style: italic');
      questionDiv.appendChild(h1)
    }else{
      winningPoints += 10
      let h1 = document.createElement('h1')
      h1.textContent = `Correct!`
      h1.setAttribute('style', 'color: #00ad93; font-style: italic')
      questionDiv.appendChild(h1)
    }
   })
 }
}

// Adding functionality to add user initials and points
subBtn.addEventListener('click', (e) => {
 e.preventDefault()
 let user
 let score
 user = input.value
 score = winningPoints
 localStorage.setItem('user', user)
 localStorage.setItem('score',score)
 document.location.assign('highscores.html')
 input.value = ''
})
