let humanScore = 0
let computerScore = 0
let draws = 0

playGame()

function playGame() {

  for(let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice()
    let computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
  }

  displayResults()
}

function playRound(humanChoice, computerChoice) {

  displayChoices(humanChoice, computerChoice)

  if (humanChoice === computerChoice) {
    console.log("It's a tie!")
    draws+=1
  } else if (humanChoice === 'rock') {
    if (computerChoice === 'paper') {
      console.log('You lose! Paper beats rock!');
      computerScore+=1
    } else {
      console.log(`You win! Rock beats ${computerChoice}!`);
      humanScore+=1
    }
  } else if (humanChoice === 'paper') {
    if (computerChoice === 'scissors') {
      console.log('You lose! Scissors beats paper!');
      computerScore+=1
    } else {
      console.log(`You win! Paper beats ${computerChoice}!`);
      humanScore+=1
    }
  } else if (humanChoice === 'scissors') {
    if (computerChoice === 'rock') {
      console.log('You lose! Rock beats scissors!');
      computerScore+=1
    } else {
      console.log(`You win! Scissors beats ${computerChoice}!`);
      humanScore+=1
    }
  }
  console.log('\n')
}

function getComputerChoice() {
  const compChoice = Math.ceil(Math.random() * 3)
  
  switch (compChoice) {
    case 1:
      return 'rock'
      break;
    case 2:
      return 'paper'
      break;
    case 3: 
      return 'scissors'
      break;
  }
}
 
function getHumanChoice() {
  return prompt('Enter your choice of rock, paper or scissors.').toLowerCase()
}

function displayChoices(humanChoice, computerChoice) {
  console.log(`Human   : ${humanChoice}`);
  console.log(`Computer: ${computerChoice}`);
  
}

function displayResults() {
  console.log(`Human score: ${humanScore}`)
  console.log(`Computer score: ${computerScore}`)
  console.log(`Draws: ${draws}`)
}