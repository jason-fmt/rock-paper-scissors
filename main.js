let humanScore = 0
let computerScore = 0
let draws = 0

const scoreDiv = document.createElement('div')

const userScore = document.createElement('p')
scoreDiv.appendChild(userScore)

const compScore = document.createElement('p')
scoreDiv.appendChild(compScore)

const drawScore = document.createElement('p')
scoreDiv.appendChild(drawScore)

const body = document.querySelector('body')
body.appendChild(scoreDiv)

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
	button.addEventListener('click', () => {
		const userSelection = button.textContent.toLowerCase()
		const computerSelection = getComputerChoice()
		playRound(userSelection, computerSelection)
	})
})

function playRound(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		draws += 1
	} else if (humanChoice === 'rock') {
		if (computerChoice === 'paper') {
			computerScore += 1
		} else {
			humanScore += 1
		}
	} else if (humanChoice === 'paper') {
		if (computerChoice === 'scissors') {
			computerScore += 1
		} else {
			humanScore += 1
		}
	} else if (humanChoice === 'scissors') {
		if (computerChoice === 'rock') {
			computerScore += 1
		} else {
			humanScore += 1
		}
	}
	displayScore()
}

function getComputerChoice() {
	const compChoice = Math.ceil(Math.random() * 3)

	switch (compChoice) {
		case 1:
			return 'rock'
			break
		case 2:
			return 'paper'
			break
		case 3:
			return 'scissors'
			break
	}
}

function displayScore() {
	userScore.textContent = `Your wins: ${humanScore}`
	compScore.textContent = `Computer wins: ${computerScore}`
	drawScore.textContent = `Draws: ${draws}`

  if (humanScore === 5) {
		alert('You win! Congrats!')
		resetGame()
	} else if (computerScore === 5) {
		alert('Sorry! Better luck next time.')
		resetGame()
	}
}

function resetGame() {
	humanScore = 0
	computerScore = 0
	draws = 0

	userScore.textContent = `Your wins: ${humanScore}`
	compScore.textContent = `Computer wins: ${computerScore}`
	drawScore.textContent = `Draws: ${draws}`
}
