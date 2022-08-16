var workList = 
["1) Unlock the module at 8 O'clock.", 
"2) Quickly watch the videos then practice.", 
"3) Take notes while watching the videos.", 
"4) Practice by yourself after completing the module.", 
"5) If not understand the module, join support session."];


// to display whole array 10 times using for loop
for(var i = 10; i >= 1; i--){
    console.log("------------" + i + "------------");
    var reverseWorkList = [].concat(workList).reverse();
    console.log(reverseWorkList);
}


// to display every element using for loop in a reverse way (decremental)
for(var i = workList.length - 1; i >= 0; i--){
    var element = workList[i];
    console.log(element);
}