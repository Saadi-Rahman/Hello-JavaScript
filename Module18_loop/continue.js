
var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 42, 32];

for(i = 0; i < numbers.length; i ++) {
    var number = numbers[i];
    if(number > 51) {
        continue;
    }
    console.log(number);
}