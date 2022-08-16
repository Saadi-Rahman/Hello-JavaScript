var workList = 
["1) Unlock the module at 8 O'clock.", 
"2) Quickly watch the videos then practice.", 
"3) Take notes while watching the videos.", 
"4) Practice by yourself after completing the module.", 
"5) If not understand the module, join support session."];


// to display whole array 10 times using while loop in a reverse way (decremental)
var i = 10;
while(i >= 1){
    console.log("---------------" + i + "---------------");
    var reverseWorkList = [].concat(workList).reverse();
    console.log(reverseWorkList);
    i--;
}


// to display every element using while loop in a reverse way (decremental)
var i = workList.length - 1;
while(i >= 0){
    var element = workList[i];
    console.log(element);
    i--;
}






