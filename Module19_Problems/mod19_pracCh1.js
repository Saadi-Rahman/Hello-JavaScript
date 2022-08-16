// write a function of a multiplication table of 13 which will show as output.

function multiplicationTable(num){
    for(var i = 1; i <= 10; i++) {
        var mulResult = num * i;
        console.log(num, "x", i, "=", mulResult);
    }
    return mulResult;
}

let num = 13;
let result = multiplicationTable(num);
// console.log(result);


