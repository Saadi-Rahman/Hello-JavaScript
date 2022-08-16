// 1. convert radian to degree
function radianToDegree(radian){
    const isDegree = radian * (180 / Math.PI);
    const degree = isDegree.toFixed(2);
    if(typeof radian !== "number"){
        return "invalid input! Please provide a number!";
    }
    return degree;
}

console.log(radianToDegree("10"));
console.log(radianToDegree(10));
console.log(radianToDegree(25));
console.log(radianToDegree(199));
console.log(radianToDegree(Math.PI/3));
console.log(radianToDegree(Math.PI/2));
console.log(radianToDegree("hello"));
console.log(radianToDegree(true));