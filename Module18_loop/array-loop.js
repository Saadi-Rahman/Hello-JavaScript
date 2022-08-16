/* for(i = 0; i < 10; i++){
    console.log(i);
} */

// target: display every elements of an array
/* var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 42, 32];

for(i = 0; i < numbers.length; i ++) {
    var number = numbers[i];
    console.log(number);
} */

// target: display an array 3 times as output
var numbers = [45, 87, 89, 188, 41, 42, 32];

for(i = 0; i < 3; i ++) {
    console.log(numbers);
}

// Display every elements of an array and find the largest element (by length) of this array
var tableItems = ["mouse", "wristband", "soundbox", "pen", "keyboard", "pendrive", "scale", "paper"];

var temp = tableItems[0];
// console.log(longElement.length);

for(i = 0; i < tableItems.length; i++) {
    var element = tableItems[i];
    console.log(element);
    
    if(element.length > temp.length) {
        temp = element;
    }
}

console.log("Largest length of the element:", temp);
