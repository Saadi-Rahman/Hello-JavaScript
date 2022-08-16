// var isGraduated = true;
// var salary = 55000;
// var car = 1;

// if(isGraduated == true && salary > 50000){
//     console.log("Eligible for marriage.")
// } else {
//     console.log("Not Eligible for marriage.")
// }

// if(isGraduated == true && salary > 50000 && car >= 1){
//     console.log("Eligible for marriage.")
// } else {
//     console.log("Not Eligible for marriage.")
// }


var isGraduated = true;
var salary = 51000;
var car = 0;


// if(isGraduated == true || salary > 50000 || car >= 1){
//     console.log("Eligible for going to a relationship.")
// } else {
//     console.log("Not Eligible.")
// }


if(isGraduated == true && (salary > 50000 || car >= 1)){
    console.log("Eligible for going to a relationship.")
} else {
    console.log("Not Eligible.")
}