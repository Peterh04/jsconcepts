
let result = document.querySelector('#result')
let playerScore = document.querySelector('#player-score') 
let hands = document.querySelector('#hands')
let rpsButtons = document.querySelectorAll('.rpsButton')

function getComputerChoice() {
  let rpsChoices = ['Rock', 'Paper', 'Scissors']
  let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
  return computerChoice
}   

function getResult(playerChoice, computerChoice) {
  let score;

  if (playerChoice === computerChoice) {
    score = 0

  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    score = 1

  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1

  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1
  } else {
    score = -1
  } return score
}

function showResult(score, playerChoice, computerChoice) {
  
  switch (score) {
    case -1:
      result.innerText = `You Lose!`
      break;
    case 0:
      result.innerText = `It's a Draw!`
      break;
    case 1:
      result.innerText = `You Win!`
      break;
  }

  

  playerScore.innerText = `${Number(playerScore.innerText) + score}`
    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}
function onClickRPS(playerChoice) {

  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice.value, computerChoice)

  showResult(score, playerChoice.value, computerChoice)
  

}
function playGame() {

 
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton)
  })
  let endGameButton = document.querySelector('#endGameButton')
  endGameButton.onclick = () => endGame()
};
function endGame() {
  let playerScore = document.querySelector('#player-score')
  let hands = document.querySelector('#hands')
  let result = document.querySelector('#result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}


playGame()