var workList = 
["1) Unlock the module at 8 O'clock.", 
"2) Quickly watch the videos then practice.", 
"3) Take notes while watching the videos.", 
"4) Practice by yourself after completing the module.", 
"5) If not understand the module, join support session."];


// to display whole array 10 times using while loop
var i = 1;
while(i <= 10){
    console.log("---------------" + i + "---------------");
    console.log(workList);
    i++;
}


// to display every element using while loop
var i = 0;
while(i < workList.length){
    var element = workList[i];
    console.log(element);
    i++;
}