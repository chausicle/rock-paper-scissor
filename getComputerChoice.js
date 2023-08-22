function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1
  const choice = randomNum === 1 
    ? "rock" : randomNum === 2 
    ? "paper" : "scissor"
  
  return choice
}