function showPlayersChoice(playerChoice, computerChoice) {
  const playerCard = document.querySelector("#player > div.card");
  const computerCard = document.querySelector("#computer > div.card");

  if (playerChoice === "rock") {
    playerCard.textContent = "✊" + "🏼";
  } else if (playerChoice === "paper") {
    playerCard.textContent = "✋" + "🏼";
  } else {
    playerCard.textContent = "✌" + "🏼";
  }

  if (computerChoice === "rock") {
    computerCard.textContent = "✊";
  } else if (computerChoice === "paper") {
    computerCard.textContent = "✋";
  } else {
    computerCard.textContent = "✌";
  }
}