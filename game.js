document.addEventListener("DOMContentLoaded", game);

function playerSelection(e) {
  const playerChoice = e.target.getAttribute("id");
  const computerChoice = getComputerChoice();
  const result = playRound(playerChoice, computerChoice);

  console.log("PlayerChoice: ", playerChoice, " - ComputerChoice: ", computerChoice);
  console.log("RESULT: ", result)
}

function game() {
  const rpsButtons = document.querySelectorAll("button");

  rpsButtons.forEach(choice => {
    choice.addEventListener("click", playerSelection)
  });
}