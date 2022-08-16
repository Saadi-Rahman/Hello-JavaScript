const names = ["abul", "babul", "bulbul", "bokul", "abul", "mokbul", "abul", "babul", "kabul", "abul", 
"abul", "bulbul", "bokul", "bulbul", "baki"];

function removeDuplicte(names) {
    const unique = [];
    for(let i = 0; i < names.length; i++){
        let element = names[i];
        if(unique.includes(element) === false){
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicte(names);
console.log(uniqueNames);