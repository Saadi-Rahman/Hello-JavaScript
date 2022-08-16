function add(num1, num2, num3) {
    if(typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") {
        return "invalid input";
    }
    return num1 + num2 + num3;
}

const result = add(12, 20, "10");
console.log(result);