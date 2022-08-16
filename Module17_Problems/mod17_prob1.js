
// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ["Apple", "Banana", "Orange"];
var bananaIndex = fruits.indexOf("Banana");

console.log(fruits);
console.log(bananaIndex);
// fruits[bananaIndex] = "Coconut";
fruits[1] = "Mango";
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push("Watermelon");
console.log(fruits);