function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "rock") {
        return ["DRAW", "DRAW", "DRAW", 0, 0];
      } else if (computerSelection === "paper") {
        return ["FAILURE", "SUCCESSFUL", "YOU LOSE... Rock is quickly overwhelmed by Paper's suffocating grasp", 0, 1];
      } else {
        return ["SUCCESSFUL", "FAILURE", "YOU WIN! Rock smashes Scissor leaving it extremely blunt and lost in search of its purpose in life", 1, 0];
      }
    case "paper":
      if (computerSelection === "rock") {
        return ["SUCCESSFUL", "FAILURE", "YOU WIN! Paper puts Rock in a choke hold till it passes out stone cold", 1, 0];
      } else if (computerSelection === "paper") {
        return ["DRAW", "DRAW", "DRAW", 0, 0];
      } else {
        return ["FAILURE", "SUCCESSFUL", "YOU LOSE... As fast as Paper saw the light, it split into two by Scissor's deadly quick draw of the blade", 0, 1];
      }
    case "scissor":
      if (computerSelection === "rock") {
        return ["FAILURE", "SUCCESSFUL", "YOU LOSE... Scissor sends a flurry of slashes but quickly dulls out from Rock's impenetrable defense", 0, 1];
      } else if (computerSelection === "paper") {
        return ["SUCCESSFUL", "FAILURE", `YOU WIN! Before Paper could fold in defeat, it splits into two clean halves`, 1, 0];
      } else {
        return ["DRAW", "DRAW", "DRAW", 0, 0];
      }
    default:
      return "Hmm, I don't suppose you know how to play the game... That's alright, try again!";
  }
}