
var numbers = [45, 50, 88, 66, 97, 36, 55];

// 1. get element value by index 
var element = numbers[4];
console.log(element);

// when the index is not exist in an array it will give "undefined" output
console.log(numbers[7]);

// 2. set element value by index
numbers[2] = 22;
numbers[4] = 15;           
console.log(numbers);      // [45, 50, 88, 66, 15, 36, 55]


// 3. find index of an element 
// if the value is not available in the array, output will show -1
var positionIndex = numbers.indexOf(188);    // -1
// var positionIndex = numbres.indexOf(36);  // 5
console.log(positionIndex);


