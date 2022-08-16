function minInArray(numbers){
    let smallest = numbers[0];
    for(let i = 0; i <= numbers.length; i++){
        const element = numbers[i];
        if(element < smallest){
            smallest = element;
        }
    }
    return smallest;
}


const heights = [167, 190, 99, 120, 165, 137, 265];
const shortest = minInArray(heights);
console.log("shortest person is:", shortest);