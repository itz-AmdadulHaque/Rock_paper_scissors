import readline from "readline";
import { isArgValid } from "./helper.js";
import { Game } from "./game.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function userInput(question) {
  return new Promise((resolve) => {
    rl.question(question, (input) => {
      resolve(input.trim()); // Trim input to remove whitespace
    });
  });
}

async function startGame() {
  const givenMoves = process.argv.slice(2, process.argv.length);

  isArgValid(givenMoves); // if arg not valid stop
  const game = new Game(givenMoves);

  while (true) {
    game.start();
    const input = await userInput("Enter your move: ");

    if (input === "0") {
      console.log("Exiting...");
      break;
    } else if (input === "?") {
      game.table.printTable(input);
    } else {
      if (input > 0 && input <= game.moves.moves.length) {
        game.printResult(input);
      } else {
        console.log("Error: Input must match available moves number");
      }
    }
  }

  rl.close();
}

startGame();
