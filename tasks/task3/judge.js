
import {GAME_STATUS} from "./const.js";
class Judge {
    constructor(moves) {
        this.moves = moves;
    }

    getResult(uMove, cMove) {

        if (uMove === cMove) {
            return GAME_STATUS.DRAW;
        } else if (
            (uMove > cMove && uMove - cMove > this.moves.length / 2) ||
            (uMove < cMove && cMove - uMove <= this.moves.length / 2)
        ) {
            return GAME_STATUS.LOSE;
        } else {
            return GAME_STATUS.WIN;
        }
    }
}

export default Judge;