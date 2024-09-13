import readline from "node:readline";

class Input {
    constructor() {
        this.move = '';
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

     get() {
        this.rl.question('Enter your move: ', (input) => {
            this.move = input;
        });

        return {'rl':this.rl, 'move':this.move};
    }
}
export default Input;