var price = 100;
console.log(typeof price);  // number

var price = "100";
console.log(typeof price);  // string

var isHappy = true;
console.log(typeof isHappy);  // boolean

var hello;
console.log(typeof hello);  // undefined

// example of parseInt, parseFloat, toFixed
var num1 = 1.3;
var num2 = 0.1;
var sum = num1 + num2;     // 1.4000000000000001
sum = sum.toFixed(4);      // "1.4000"
sum = parseFloat(sum);     // 1.4
sum = parseInt(sum);       // 1
console.log(sum);