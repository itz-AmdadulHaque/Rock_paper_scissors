export class Moves {
    constructor(moves) {
        this.moves = moves;
    }

    getMove(index) {
        return this.moves[index];
    }

    getRandomMove() {
        const ranValue = Math.floor(Math.random() * this.moves.length);
        return ranValue;
    }

    printMoves() {
        console.log('Available moves:');
        this.moves.forEach((move, index) => {
            console.log(`${index + 1} - ${move}`);
        });
        console.log('0 - exit');
        console.log('? - help');
    }
}


