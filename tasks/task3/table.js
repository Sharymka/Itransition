import Table from 'cli-table3';
import Judge from "./judge.js";
import {PLAYERS} from "./const.js";

class TableGenerator {
    constructor(moves) {
        this.moves = moves;
        this.judge = new Judge(moves);
        this.table = null;
    }

    createTable() {

        this.table = new Table({
            head: this.createHead(),
        });

        this.table.push(...this.createBody());

    }

    createHead() {
        return [PLAYERS, ...this.moves];
    }

    createBody() {
        return this.moves.map((cMove, i) => [
            cMove,
            ...this.moves.map((uMove, j) => this.judge.getResult(j, i))
        ]);
    }

    printTable() {
        if (this.table) {
            console.log(this.table.toString());
        } else {
            console.log('Table not initialized.');
        }
    }
}

export default TableGenerator;