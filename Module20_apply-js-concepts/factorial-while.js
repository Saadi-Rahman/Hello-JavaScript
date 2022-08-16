// Write a function to calculate Factorial of a number using for loop
function factorial(num){
    let result = 1;
    let i = 1;
    while(i <= num){
        result = result * i;
        console.log(i, result);
        i++;
    }
    return result;
}

let num = 5;
let output = factorial(num);
console.log("factorial of:", num, output);


// Write a function to calculate Factorial of a number using for loop (decrementing loop)
function revFact(number){
    let revFactResult = 1;
    let i = number;
    while(i >= 1){
        revFactResult = revFactResult * i;
        console.log(i, revFactResult);
        i--;
    }
    return revFactResult;
}

let number = 5;
let revResult = revFact(number);
console.log("reverse result of factorial:", number, revResult);