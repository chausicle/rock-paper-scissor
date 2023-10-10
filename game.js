document.addEventListener("DOMContentLoaded", game);

function decideFate(playerCount, computerCount) {
  if (playerCount === 5) {
    const rpsButtons = document.querySelectorAll("button");
    rpsButtons.forEach(choice => {
      choice.removeEventListener("click", playerSelection)
    });
  } else if (computerCount === 5) {
    const rpsButtons = document.querySelectorAll("button");
    rpsButtons.forEach(choice => {
      choice.removeEventListener("click", playerSelection)
    });
  }
}

function playerSelection(e) {
  let timer;
  clearTimeout(timer);
  timer = setTimeout(function() {}, 100);

  const playerChoice = e.target.getAttribute("id");
  const computerChoice = getComputerChoice();
  const playerCount = document.querySelector("#playerCount");
  const computerCount = document.querySelector("#computerCount");
  const playerResult = document.querySelector("div#playerResult");
  const computerResult = document.querySelector("div#computerResult");
  const description = document.querySelector("p#description");
  const [player, computer, result, playerIncrement, computerIncrement] = playRound(playerChoice, computerChoice);

  console.log("PlayerChoice: ", playerChoice, " - ComputerChoice: ", computerChoice);
  playerCount.textContent = Number(playerCount.textContent) + playerIncrement;
  computerCount.textContent = Number(computerCount.textContent) + computerIncrement;
  playerResult.textContent = player;
  computerResult.textContent = computer;
  description.textContent = result;
  
  showPlayersChoice(playerChoice, computerChoice);
  decideFate(Number(playerCount.textContent), Number(computerCount.textContent));
}

function game() {
  const rpsButtons = document.querySelectorAll("button");

  rpsButtons.forEach(choice => {
    choice.textContent += "🏼";
    choice.addEventListener("click", playerSelection);
  });
}