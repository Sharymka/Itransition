import Menu from "./menu.js";
import crypto from "node:crypto";
import Hasher from "./hasher.js";
import Judge from "./judge.js";
import readline from "node:readline";
import TableGenerator from "./table.js";
import ArgvValidator from "./argvValidator.js";

let moves = process.argv.slice(2);
let url = 'https://www.freeformatter.com/hmac-generator.html#before-output';

// Валидация аргументов
let validator = new ArgvValidator();
validator.isValidLength(moves);
validator.isOdd(moves);
validator.isDublicate(moves);

// Генерация ключа и хода компьютера
let key = crypto.randomBytes(32).toString('hex');
let randomNumber = Math.floor(Math.random() * moves.length);
let computerMove = moves[randomNumber];
let hasher = new Hasher();
let computerMoveHash = hasher.getHash(computerMove, key);

console.log("HMAC: " + computerMoveHash);

// отображаем меню с вариантами ходов
let menu = new Menu();
menu.create(moves);

//инициализация readline
let rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});


// Запрос ввода хода у пользователя
function askMove() {
   rl.question('Enter your move: ', (input) => {

      if(input === '?') {
         displayTable();
         askMove();
      } else if (parseInt(input) === 0) {
         process.exit(1);
      } else if (parseInt(input) >= 1 && parseInt(input) <= moves.length) {
         handelUserMove(input);
      } else {
         console.log('Invalid choice. Please enter a valid number.');
         menu.create(moves);
         askMove();
      }

   });
}

// Отображение таблицы
function displayTable() {
   const table = new TableGenerator(moves);
   table.createTable(moves);
   table.printTable();
}

function handelUserMove(userInput) {

   let userMove = parseInt(userInput) - 1;
   let computerMove = null;

   console.log(`Your move: ${moves[userMove]}`);

   //находим ход компьютера по HMAC
   moves.forEach((move, index)=> {
      let hash = hasher.getHash(move, key);
      if(computerMoveHash === hash){
         computerMove = index;
         console.log('Computer move:' + move);
      }
   })

   // определяем победителя
   let judge = new Judge(moves);
   let result = judge.getResult(userMove, computerMove);
   console.log('You ' + result + '!');
   console.log('HMAC key: ' + key);
   console.log('here the link to check HMAC: ' + url);
   rl.close();
}

askMove();







