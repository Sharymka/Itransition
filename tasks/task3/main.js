import Menu from "./menu.js";
import crypto from "node:crypto";
import RendomMove from "./randomMove.js";
import Hasher from "./hasher.js";
import Judge from "./judge.js";
import readline from "node:readline";
import TableGenerator from "./table.js";

let moves = process.argv.slice(2);

if(moves.length < 3 || moves.length % 2  === 0 ) {
   console.error(`Amount of moves should be an odd number more or equal 3`);
   process.exit(1);
}
//генерируем ход компьютера, ключ и делаем HMAC, выводим в консоль
let key = crypto.randomBytes(32).toString('hex');
let randomMove = new RendomMove(moves);
let computerMove = randomMove.get();


console.log('real computer move ');
console.log(computerMove);

//создаем хеш на основе ключа и строки (ход компьютера)
let hasher = new Hasher();
let computerMoveHash = hasher.getHash(computerMove, key);

console.log("HMAC: " + computerMoveHash);

// отображаем меню с вариантами ходов
let menu = new Menu(moves);
menu.create();

//игрок делает ход
let rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

  rl.question('Enter your move: ', (input) => {
      let userInput = input;
      let userMove = '';
      let computerMove = '';

     if(userInput === '?') {

        const table = new TableGenerator(moves);
        table.createTable(moves);
        table.printTable();

     } else if (parseInt(userInput) === 0) {
        process.exit(1);

     } else if (parseInt(userInput) >= 1 && parseInt(userInput) <= moves.length) {
        userMove = parseInt(userInput) - 1;

        console.log(`Your move: ${moves[parseInt(userInput) - 1]}`);

        moves.forEach((move, index)=> {
           let hash = hasher.getHash(move, key);

           if(computerMoveHash === hash){

              computerMove = index;
              console.log('Computer move:' + move);

           }
        })

        let judge = new Judge(userMove, computerMove, moves);
        let result = judge.getResult();
        console.log('You ' + result + '!');
        rl.close();

     } else {
        console.log('Invalid choice. Please enter a valid number.');
        // this.rl.close();  // Можно повторить ввод вместо завершения
     }




  });

// let input = new Input();
// let inputData = input.get();

//обрабатывает ввод пользователя

// let judge = new Judge(moves, inputData, computerMoveHash, key);







