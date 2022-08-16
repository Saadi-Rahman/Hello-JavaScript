// break using for loop
for(var i = 1; i <= 20; i++) {
    if(i > 10){
        break;
    }
    console.log(i);
}

// break using while loop 
var roastGiven = 0;

while(roastGiven < 10){
    console.log("give me a roast!");
    roastGiven++;
    if(roastGiven > 4) {
        break;
    }
}

var tableItems = ["mouse", "wristband", "soundbox", "pen", "keyboard", "pendrive", "scale", "paper"];

for(i = 0; i < tableItems.length; i++) {
    var tableItem = tableItems[i];
    if(tableItem == "pen"){
        break;
    }
    console.log(tableItem);
}


var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 42, 32];

for(i = 0; i < numbers.length; i ++) {
    var number = numbers[i];
    if(number > 100) {
        break;
    }
    console.log(number);
}


