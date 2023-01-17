let Scores = document.querySelector('#highscores')

// Adding initials and score from localStorage
function hScores() {
 let newUser = localStorage.getItem('user') || ({user: ''})
 console.log(newUser);
 let newScore = localStorage.getItem('score') || ({score: ''})
 console.log(newScore);
 let score = document.createElement('li')
 score.textContent = `${newUser.toUpperCase()} - ${newScore}points`
 Scores.append(score)
}
hScores() 

let clearBtn = document.querySelector('#clear')

clearBtn.addEventListener('click', () => {
 Scores.innerHTML = ''
 localStorage.clear()
})