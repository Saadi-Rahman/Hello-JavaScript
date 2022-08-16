// Math.pow()
const result = Math.pow(3, 8);
// console.log(result);


// Math.abs()
const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
console.log(gap);

if(gap < 5){
    console.log("you guys can be friend");
}
else {
    console.log("you guys stay apart");
}


// Math.round()
const number = 2.4521;
const fullNumber1 = Math.round(number);
console.log("round: ", fullNumber1);

// Math.ceil()
const fullNumber2 = Math.ceil(number);
console.log("ceil:", fullNumber2);

// Math.floor()
const fullNumber3 = Math.floor(number);
console.log("floor", fullNumber3);


// -----------------------------
// Math.random()
for(let i = 0; i < 5; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}
