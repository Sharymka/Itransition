 class Menu {
    constructor() {
    }

    create(moves) {
        console.log(`Available moves:`);
        moves.forEach((move, index) => {
           console.log((index + 1 ) + ' - ' + move);
        });
        console.log('0 - exit');
        console.log('? - help');
    }
}

 export default Menu;