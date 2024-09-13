
const { sha3_256 } = require('js-sha3');

// d64b2a48fd86c35768f40eaf043cdf6e5af8aa5b00c3215b925dddf7d736fc66

const fs = require('fs/promises');

const email = 'sveta.sharymova@gmail.com';

 async function calculateSHA3ForFile(filePath) {
    // const allHashes = [];

    const filesPath = await fs.readdir(filePath);

    if (filesPath.length !== 256) {
        throw new Error(`Неправильное количество файлов. Ожидалось 256, но найдено ${filesPath.length}`);
    }
    // for (const filePath of filesPath) {
    //     const fileContent =  await fs.readFile('tasks/task2/' + filePath);
    // }
     // for (const filePath of filesPath) {
     //     const fileContent = await fs.readFile('tasks/task2/' + filePath);
     //     allHashes.push(sha3_256(fileContent));
     // }
     const fileReadPromises = filesPath.map(async (filePath) => {
         const fileContent = await fs.readFile('tasks/task2/' + filePath);
         return sha3_256(fileContent);
     });

     const allHashes = await Promise.all(fileReadPromises);
     allHashes.sort();
     const concatString = allHashes.join('');
     const concatStringAndEmail = concatString.concat(email);
     const resultHash = sha3_256(concatStringAndEmail);

     console.table({
         result: resultHash,
         expected: 'd64b2a48fd86c35768f40eaf043cdf6e5af8aa5b00c3215b925dddf7d736fc66',
         valid: 'd64b2a48fd86c35768f40eaf043cdf6e5af8aa5b00c3215b925dddf7d736fc66' === resultHash,
     });
}

calculateSHA3ForFile('tasks/task2');
