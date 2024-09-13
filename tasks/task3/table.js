import Table from 'cli-table3';

class TableGenerator {
    constructor() {

        this.table = null;
    }

    createTable() {
        this.table = new Table({
            head: ['v PC\\User', 'Rock', 'Paper', '3rd move', '4th', '5th']
        });

        this.table.push(
            ['Rock', 'Draw', 'Win', 'Win', 'Lose', 'Lose'],
            ['Paper', 'Lose', 'Draw', 'Win', 'Win', 'Lose'],
            ['3rd move', 'Lose', 'Lose', 'Draw', 'Win', 'Win'],
            ['4th', 'Win', 'Lose', 'Lose', 'Draw', 'Win'],
            ['5th', 'Win', 'Win', 'Lose', 'Lose', 'Draw']
        );
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