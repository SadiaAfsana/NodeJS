//3. Find factorial from given user input

const prompt = require('prompt-sync')();

let n = parseInt(prompt('input number: '))
let answer = 1;

if (n == 0 || n == 1){
  return answer;
}else{
  for(var i = n; i >= 1; i--){
    answer = answer * i;
  }
  console.log("The factorial of " + n + " is " + answer);
}  
