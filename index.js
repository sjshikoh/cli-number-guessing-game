#! usr/bin/env node
import inquirer from 'inquirer';
// computer will generate a random number
// user input for guessing number
// compare user input with computer generated random number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 - 10 : "
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed the right number");
}
else {
    console.log("Oops! you guessed a wrong number");
}
console.log(randomNumber);
