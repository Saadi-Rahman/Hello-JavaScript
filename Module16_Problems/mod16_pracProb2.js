var math = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;

var totalMarks = math + biology + chemistry + physics + bangla;
console.log(totalMarks);  // 355.2

var average = totalMarks / 5;   //71.03999999999999
average = average.toFixed(2);   // "71.04"
average = parseFloat(average);  // 71.04
console.log(average);