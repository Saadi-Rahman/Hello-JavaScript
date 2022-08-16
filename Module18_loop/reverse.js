// show the output of 10 numbers using while loop in a reverse way (decrementing loop)
var num = 10;

while(num >= 1){
    console.log(num);
    num--;
}

// show the output of 10 numbers using for loop in a reverse way (decrementing loop)
for(i = 10; i >= 1; i--){
    console.log(i);
}


// show the output of "vowels" array 5 times in a reverse way
var vowels = ["a", "e", "i", "o", "u"];
var i = 0;
while(i < 5) {
    var reverseVowles = [].concat(vowels).reverse();
    console.log(reverseVowles);
    i++;
}