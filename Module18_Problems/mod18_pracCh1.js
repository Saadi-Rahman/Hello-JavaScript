var workList = 
["1) Unlock the module at 8 O'clock.", 
"2) Quickly watch the videos then practice.", 
"3) Take notes while watching the videos.", 
"4) Practice by yourself after completing the module.", 
"5) If not understand the module, join support session."];


// to display whole array 10 times using for loop
for(var i = 1; i <= 10; i++){
    console.log("------------" + i + "------------");
    console.log(workList);
}


// to display every element using for loop
for(var i = 0; i < workList.length; i++){
    var element = workList[i];
    console.log(element);
}

