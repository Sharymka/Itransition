
class RandomMove {
    constructor(moves) {
       this.moves = moves;
    }

    get() {
        let randomNumber = Math.floor(Math.random() * this.moves.length);
        return this.moves[randomNumber];
    }

}

export default RandomMove;