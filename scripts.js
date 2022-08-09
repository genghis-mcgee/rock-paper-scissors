let tiePoints = 0;
let humanPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
  let choice = ['ROCK', 'PAPER', 'SCISSORS'];
  return choice[Math.floor(Math.random()*choice.length)];
}

function getPlayerChoice() {
  let playerChoice = prompt('Choose Rock, Paper, or Scissors: ').toUpperCase();
  if (playerChoice === 'ROCK' || playerChoice === 'PAPER' || playerChoice === 'SCISSORS') {
    alert('Nice choice.');
    return playerChoice;
  } else {
    alert("Looks like you misspelled or didn't choose one of the options provided to you.  Keep trying until you get it.");
    getPlayerChoice();
  }
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = getPlayerChoice();

  
  if(playerSelection === computerSelection) {
      console.log(`You both picked ${playerSelection}, it's a tie.`);
      tiePoints++;
    }

  else if(playerSelection === 'ROCK' && computerSelection === 'PAPER' || playerSelection === 'PAPER' && computerSelection === 'SCISSORS' || playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
      console.log(`You lose!  ${computerSelection} beats ${playerSelection}.`);
      computerPoints++;
    }

  else {
      console.log(`You win!  ${playerSelection} beats ${computerSelection}.`);
      humanPoints++;
    }

}

function game() {
  for(i = 0; i < 5; i++) {
    playRound();
  }
  console.log(`Your record is ${humanPoints}-${computerPoints}-${tiePoints}.`)

  if (humanPoints > computerPoints) {
    console.log(`You Win!  You had ${humanPoints} point(s) compared to the computer's ${computerPoints} point(s), congratulations.`)
  }

  else if (computerPoints > humanPoints) {
    console.log(`You Lose!  You had ${humanPoints} point(s) compared to the computer's ${computerPoints} point(s), better luck next time.`)
  }

  else {
    console.log(`Tied game, you're both losers!`)
  }

}

game();