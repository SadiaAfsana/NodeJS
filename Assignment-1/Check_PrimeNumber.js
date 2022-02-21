const prompt = require('prompt-sync')();

let number = parseInt(prompt('Input number greater than 1: '))
let isPrime = true;

for (let i = 2; i < number; i++) {
    if (number % i == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(number+ " is prime number");
} else {
    console.log(number+ " is not prime number");
}