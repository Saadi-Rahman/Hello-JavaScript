const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const strudent = {id: 121, class: 11, name: "Agun"};
const friends = [23, 24, 25, 28, 35, 36, 34];

function add(num1, num2){
    return num1 + num2;
}

// Check variable type use: typeof
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof strudent);
console.log(typeof add);

// Check array use: Array.isArray
console.log(Array.isArray(strudent));
console.log(Array.isArray(friends));

// Check an element of an array is exeist or not use: includes
console.log(friends.includes(19));
console.log(friends.includes(21));

// alternate way of finding an element of an array
if(friends.indexOf(50) !== -1){
    console.log("The element is exist")
}
else {
    console.log("The element is not exist")

}

// concat
const newFriendsAge = [10, 11, 12, 13];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);
