// 1 * 2 * 3 * 4 * 5 * 6 * 7

// 3! = 3*2*1
// 4! = 4*3*2*1

// factorial
function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
        console.log(i, result);
    }
    return result;
}

let number = 5;
const result = factorial(number);
console.log("factorial of:",number, result);


