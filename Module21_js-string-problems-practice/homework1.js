// Homework: 1
// Write a function that will take 3 numbers will return the max number
// First time do it using if-else

function maxNum(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    return num3;
}

let result = maxNum(30, 72, 25)
console.log("max number:", result);



// second time do it using Math.max

let maxResult = Math.max(58, 45, 96);
console.log("maximum number:", maxResult);




// Write a function that will take 3 parameters and will return the min number
// First time do it using if-else

function minNum(num1, num2, num3){
    if(num1 < num2 && num1 < num3){
        return num1;
    }
    else if(num2 < num1 && num2 < num3){
        return num2;
    }
    return num3;
}

let res = minNum(30, 48, 25)
console.log("min number:", res);



// second time do it using Math.min

let minResult = Math.min(58, 45, 96);
console.log("minimum number:", minResult);