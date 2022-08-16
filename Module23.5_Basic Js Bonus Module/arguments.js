function add(num1, num2){
    console.log(num1, num2);
    // array like object
    console.log(arguments[3]);
}

add(12, 13, 45, 89, 78);