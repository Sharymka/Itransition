class ArgvValidator {

    isValidLength(inputData) {
        if(inputData.length === 0) {
            console.error(`Enter moves`);
            process.exit(1);
        }else if(inputData.length < 3) {
            console.error(`Amount of moves should be more or equal 3`);
            process.exit(1);
        }
    }

    isOdd(inputData) {
        if (inputData.length % 2 === 0) {
            console.error(`Amount of moves should be an odd number`);
            process.exit(1);
        }
    }

    isDublicate(inputData) {
        if(new Set(inputData).size !== inputData.length) {
            console.error(`moves shouldn't be duplicated`);
            process.exit(1);
        }
    }
}

export default ArgvValidator;