// function to find the sum of an Array
function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        sum = sum + element;
        // console.log(i, element, sum);
    }
    return sum;
}

// function to find the odd numbers of an Array and output them as an Array
function getOddNumbersOfAnArray(numbers){
    let oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element % 2 !== 0){
            // console.log(i, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

// function to find odd sum of an Array
function getOddSumOfAnArray(numbers){
    let oddSum = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element % 2 !== 0){
            oddSum = oddSum + element;
            // console.log(i, element, oddSum);
        }
    }
    return oddSum;
}



const myNumbers = [5, 7, 8, 10, 45, 30];

const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);

console.log("--------------------------");

const sum = getSumOfAnArray(oddNumbers);
console.log(sum);

console.log("--------------------------");

console.log(myNumbers);
const oddSum = getOddSumOfAnArray(myNumbers);
console.log("sum of odd numbers:", oddSum);
