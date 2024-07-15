import { result } from './helper.js';
import { TableGenerator } from './helpTable.js';
import { HMAC } from './hmac.js';
import { Moves } from './moves.js';

export class Game {
    constructor(moves) {
        this.moves = new Moves(moves);
        this.hmac = new HMAC()
        this.table = new TableGenerator(moves)
        this.computerMove = this.moves.getRandomMove();
    }
    
    printHMAC(){
        this.hmac.generateKey()
        console.log("HMAC: ", this.hmac.generateHMAC(this.moves.getMove(this.computerMove)))
    }

    start(){
        this.printHMAC()
        this.moves.printMoves();
    }

    printResult(userInput){
        console.log("Your move: ", this.moves.getMove(userInput-1))
        console.log("Computer move: ", this.moves.getMove(this.computerMove))

        const n = this.moves.moves.length

        if(result(this.computerMove, userInput-1, n) === -1){
            console.log("You win!")
        }
        if(result(this.computerMove, userInput-1, n) === 0){
            console.log("Draw!")
        }
        if(result(this.computerMove, userInput-1, n) === 1){
            console.log("You lose!")
        }
        console.log("HMAC key: ", this.hmac.key)
        console.log("\n\n")

        this.reset()
    }

    reset(){
        this.computerMove = this.moves.getRandomMove();
    }

}

