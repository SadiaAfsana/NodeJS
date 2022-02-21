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
