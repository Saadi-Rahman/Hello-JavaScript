function add(number1, number2){
    // console.log(number1, number2);
    var sum = number1 + number2;
    // console.log(sum);
    return sum;
}

// add(45, 15);

var total = add(80, 20);
// console.log("total :", total);


function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 150;
var singaras = bringSingara(myTaka);
console.log("total no of singara I'll get:", singaras);


function print(a, b, c) {
    var addition = a + 2;
    return addition;
    return a*b;
    return b*c+a;
}

console.log(print(1,2,3));