//5. Take a 5 digits of number from user and print it in reverse order.

const prompt = require('prompt-sync')();

let number = parseInt(prompt('Input 5-digit number: '))
if(number.toString().length==5){
    number = number + "";
    console.log(number.split("").reverse().join(""));
}
else 
console.log("Number is not 5 digits");
