import Table from "cli-table3";
import { result } from "./helper.js";

export class TableGenerator {
  constructor(moves) {
    this.moves = moves;
    this.initialHead = ["v PC\\User >", ...moves]; // Store initial head for reset
  }

  generateResults() {
    const results = [];
    const length = this.moves.length;

    for (let i = 0; i < length; i++) {
      const row = [this.moves[i]];
      for (let j = 0; j < length; j++) {
        if (result(i, j, length) === 0) {
          row.push("Draw");
        } else if (result(i, j, length) === -1) {
          row.push("Win");
        } else {
          row.push("Lose");
        }
      }
      results.push(row);
    }
    return results;
  }

  resetTable() {
    this.table = new Table({
      head: this.initialHead,
      colWidths: new Array(this.moves.length + 1).fill(10),
    });
  }

  fillTable() {
    const results = this.generateResults();
    results.forEach((row) => {
      this.table.push(row);
    });
  }

  printTable() {
    this.resetTable(); // Reset the table to its initial state
    this.fillTable();
    console.log(this.table.toString());
  }
}
