const myInch = 72;
const myFeet = myInch / 12;
console.log(myFeet);

// convert inch to feet
function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}

const yourInch = 84;
const yourFeet = inchToFeet(yourInch);
console.log("Your Feet =", yourFeet);

const hisInch = 96;
const hisFeet = inchToFeet(hisInch);
console.log("His Feet =", hisFeet);