document.addEventListener("DOMContentLoaded", game)

function game() {
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt("Rock, Paper, or Scissor?").toLowerCase()
    let computerSelection = getComputerChoice()

    console.log(`Player: ${playerSelection} - Computer: ${computerSelection}`)
    console.log(playRound(playerSelection, computerSelection), "\n")
  }
}