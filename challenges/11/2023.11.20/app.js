// Instructions:
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Parameters: two strings, player one's move and player two's move

// Return: result of rock, paper, scissor game

// Examples:
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// Pseudocode:
const rps = (p1, p2) => {
  let cases = {
    rock: {
      rock: "Draw!",
      paper: "Player 2 won!",
      scissors: "Player 1 won!",
    },
    paper: {
      rock: "Player 1 won!",
      paper: "Draw!",
      scissors: "Player 2 won!",
    },
    scissors: {
      rock: "Player 2 won!",
      paper: "Player 1 won!",
      scissors: "Draw!",
    },
  };
  return cases[p1][p2];
};
