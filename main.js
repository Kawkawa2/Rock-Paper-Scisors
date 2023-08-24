// console.log("Hello World");
const scissor = "scissor";
const paper = "paper";
const rock = "rock";
const list = [rock, paper, scissor];

const getComputerChoice = () => {
  var number = Math.floor(Math.random() * list.length);
  return list[number];
};

const playRound = () => {
  let scorePlayer = 0;
  let scoreComputer = 0;

  for (let i = 1; i < 6; i++) {
    let ComputerSelection = getComputerChoice();

    let playerSelection = prompt(
      `choose a number: \n 1-${rock}. \n 2-${paper}. \n 3-${scissor}.`
    ).toLowerCase();

    const listlength = list.length;

    const equality = playerSelection === ComputerSelection;
    const isPlayerWining =
      (list[playerSelection - 1] === scissor && ComputerSelection === paper) ||
      (list[playerSelection - 1] === paper && ComputerSelection === rock) ||
      (list[playerSelection - 1] === rock && ComputerSelection === scissor);

    if (playerSelection < 1 || playerSelection > listlength) {
      alert(`reenter a valid number (1,2 or 3), you have ${i} chance left`);
      ("comtinue");
    } else {
      if (equality) {
        ("continue");
      } else if (isPlayerWining) {
        scorePlayer++;
        ("break");
      } else if (!isPlayerWining) {
        scoreComputer++;
      }
      // console.log(list[playerSelection - 1], " ", ComputerSelection);
    }
  }
  // console.log(scorePlayer);
  // console.log(scoreComputer);
  if (
    (scorePlayer === 0 && ComputerSelection === 0) ||
    scorePlayer === scorePlayer
  ) {
    alert("equality! No winner for this round");
  } else if (scorePlayer > scoreComputer) {
    alert(`Congraaats! you\'re the winner you've got ${playerSelection}/5`);
  } else {
    alert(`Unfortunatly! you lost you've got ${playerSelection}/5`);
  }
};

playRound();
