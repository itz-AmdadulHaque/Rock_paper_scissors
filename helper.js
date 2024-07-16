function areElementsUnique(arr) {
  return new Set(arr).size === arr.length;
}

export function isArgValid(inputs) {
  let valid = true;

  if (inputs.length < 3) {
    valid = false;
    console.log("Error: 3 or more then 3 Moves are require to start the Game");
    console.log("Exmple: npm start rock paper scissors");
  }
  if (inputs.length % 2 === 0) {
    valid = false;
    console.log("Error: Total moves has to be odd number");
    console.log("like, 3, 5, 7, ...");
  }
  if (!areElementsUnique(inputs)) {
    valid = false;
    console.log("Error: Moves Name have to be uniqe");
    console.log("Exmple: npm start rock paper scissors");
  }

  if (valid === false) {
    console.log("try again!");
    process.exit(0);
  }
}

// a is computer move, b is player move and n is total moves
export function result(a, b, n) {
  return Math.sign(((a - b + Math.floor(n / 2) + n) % n) - Math.floor(n / 2));
}
