 class Menu {
    constructor(moves) {
        this.moves = moves;
    }

    create() {
        console.log(`Available moves:`);
        this.moves.forEach((move, index) => {
           console.log((index + 1 ) + ' - ' + move);
        });
        console.log('0 - exit');
        console.log('? - help');
    }
}

 export default Menu;