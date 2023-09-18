function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "rock") {
        return ["DRAW", "DRAW", "DRAW"];
      } else if (computerSelection === "paper") {
        return ["FAILURE", "SUCCESSFUL", "YOU LOSE... Rock is quickly overwhelmed by Paper's suffocating grasp"];
      } else {
        return ["SUCCESSFUL", "FAILURE", "YOU WIN! Rock smashes Scissor leaving it extremely blunt and lost in search of its purpose in life"];
      }
    case "paper":
      if (computerSelection === "rock") {
        return ["SUCCESSFUL", "FAILURE", "YOU WIN! Paper puts Rock in a choke hold till it passes out stone cold"];
      } else if (computerSelection === "paper") {
        return ["DRAW", "DRAW", "DRAW"];
      } else {
        return ["FAILURE", "SUCCESSFUL", "YOU LOSE... As fast as Paper saw the light, it split into two by Scissor's deadly quick draw of the blade"];
      }
    case "scissor":
      if (computerSelection === "rock") {
        return ["FAILURE", "SUCCESSFUL", "YOU LOSE... Scissor sends a flurry of slashes but quickly dulls out from Rock's impenetrable defense"];
      } else if (computerSelection === "paper") {
        return ["SUCCESSFUL", "FAILURE", `YOU WIN! Before Paper could fold in defeat, Scissor chants the words "you're already dead", splitting Paper into two clean halves`];
      } else {
        return ["DRAW", "DRAW", "DRAW"];
      }
    default:
      return "Hmm, I don't suppose you know how to play the game... That's alright, try again!";
  }
}