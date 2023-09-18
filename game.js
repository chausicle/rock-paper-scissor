document.addEventListener("DOMContentLoaded", game);

function playerSelection(e) {
  const playerChoice = e.target.getAttribute("id");
  const computerChoice = getComputerChoice();
  const playerResult = document.querySelector("div#playerResult")
  const computerResult = document.querySelector("div#computerResult")
  const description = document.querySelector("p#description");
  const [player, computer, result] = playRound(playerChoice, computerChoice);

  console.log("PlayerChoice: ", playerChoice, " - ComputerChoice: ", computerChoice);
  playerResult.textContent = player;
  computerResult.textContent = computer;
  description.textContent = result;
}

function game() {
  const rpsButtons = document.querySelectorAll("button");

  rpsButtons.forEach(choice => {
    choice.addEventListener("click", playerSelection)
  });
}