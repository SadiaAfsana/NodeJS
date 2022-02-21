/*1. Generate 2 number randomly and ask user to input the sum of 2 numbers. If user inputs the correct sum, 
print message that is correct Ans and iterate it 5 times. After 5 iteration, show the total mark out of 5 */

const input  = require('prompt-sync')();
let score = 0;

for (let i = 0; i < 5; i++){
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    console.log("First Number: " + num1);
    console.log("Second Number: " + num2);
    console.log("Enter the Sum");
    let sum = parseInt(input());
    if (sum == num1 + num2) {
        console.log("Answer is correct");
        score++;
    } else  console.log("Wrong Answer");

}
console.log("Your Final Score is: " + score);