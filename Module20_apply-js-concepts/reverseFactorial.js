// Write a function to calculate Factorial of a number using for loop (decrementing loop)
function reverseFactorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result * i;
        console.log(i, result);
    }
    return result;
}

let number = 5
let revFact = reverseFactorial(number);
console.log("factorial of:", number, revFact);