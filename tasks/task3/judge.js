

class Judge {
    constructor(userMove, computerMove, moves) {
        this.cMove = computerMove;
        this.uMove = userMove;
        this.moves = moves;

    }

    getResult() {

        if(this.uMove === this.cMove){
            return 'draw';
        }else if (this.uMove > this.cMove && this.uMove - this.cMove > this.moves.length - 1/2 || this.uMove < this.cMove && this.cMove - this.uMove < this.moves.length - 1/2){
            return 'win';
        } else if (this.uMove > this.cMove && this.uMove - this.cMove < this.moves.length - 1/2 || this.uMove < this.cMove && this.cMove - this.uMove > this.moves.length - 1/2) {
            return 'lose';
        }
    }
}

export default Judge;