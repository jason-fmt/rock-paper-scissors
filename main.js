let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {

  if (humanChoice === computerChoice) {
    console.log("It's a tie!")
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
  return prompt('Enter your choice of rock, paper or scissors.')
}