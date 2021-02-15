const getUserChoice = userInput => {
    //error checking of user input
    userInput = userInput.toLowerCase();
    if ( userInput === 'rock'|| userInput ==='scissors' || userInput === 'paper'){
      return userInput;
    }
    else {
      return console.log('Please choose a valid option.');
    }
  };
  
  const getComputerChoice = () => {
    //get random output from computer
    let randomNum = Math.floor(Math.random()*3);
    switch (randomNum){
        case 0:
          return 'rock';
          break;
        case 1:
          return 'paper';
          break;
        case 2:
          return 'scissors';
          break;
        default:
          break;
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return 'The game was tied!';
    } 
    // if not tied, determine who won 
    if (userChoice === 'rock'){
      if ( computerChoice === 'paper'){
        return 'You lost!'
      }else {
        return 'You won!';
      }
    }else if ( userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'You lost!';
      } else {
        return 'You won!';
      }
    }else {
      if (computerChoice === 'rock'){
        return 'You lost!';
      }else {
        return 'You won!';
      }
    }
  };
  
  const playGame = () =>{
    //can change user's choice 
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    //output the choices made
    console.log(`User's choice: ${userChoice} \nComputer's choice: ${computerChoice}`);
    //output winner
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  