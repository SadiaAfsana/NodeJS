/*2. User will input continuously numbers. Which numbers are divisible by 5, only print sum of them. 
Continue the program until user inputs -1 */

const prompt = require('prompt-sync')();

var sum = 0;
do {
    let input = parseInt(prompt('input number: '))
    if (input != -1) {
        if(input % 5 ==0)
        sum += input;
    }
    else{
        console.log("sum is "+sum);
        break;
    }
}
while (true);
