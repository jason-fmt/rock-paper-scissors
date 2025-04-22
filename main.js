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
 