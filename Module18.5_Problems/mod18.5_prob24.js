/* 
Problem:
You will buy a mac if you have more than 80,000 tk, if more than 60,000 tk you'll buy a gamming laptop, if more than 40,000 tk you'll buy a lenovo yoga, if more than 20,000 tk you'll buy an used laptop, else you'll use an android phone.
 */

var myMoney = 19999;

if(myMoney >= 80000) {
    console.log("Will buy a mac.");
}
else if(myMoney >= 60000) {
    console.log("Will buy a gamming laptop.");
}
else if(myMoney >= 40000) {
    console.log("Will buy a lenovo yoga.");
}
else if(myMoney >= 20000) {
    console.log("Will buy an used laptop.");
}
else {
    console.log("Will use an android phone.");
}