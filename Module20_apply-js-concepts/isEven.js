// check the given number is Even or not
function isEven(num) {
    const reminder = num % 2;
    console.log(reminder);
    if(reminder == 0) {
        return true;
    }
    else {
        return false;
    }
}

const myNum = isEven(23);
console.log(myNum);
