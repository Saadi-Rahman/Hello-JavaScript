// 5. check whether the given inputs (object) both are best friends or not

function isBestFriend(friend1, friend2) {
    if(typeof friend1 !== "object" || typeof friend2 !== "object"){
        return "invalid input! Please provide an object!";
    }
    else if(friend1.name === friend2.friend && friend2.name === friend1.friend) {
        return true;
    }
    return false;
}


const megadeth = {name: "Dave", friend: "James"};
const metallica = {name: "James", friend: "Dave"};

const ironMaiden = {name: "Bruce", friend: "Roger"};
const pinkFloyd = {name: "Gilmour", friend: "Harris"};

const input1 = {name: "doe", friend: "john", age: 25};
const input2 = {age: 28, name: "john", friend: "doe"};
const input3 = true;

const bestFriend = isBestFriend(input1, input2);
console.log(bestFriend);


