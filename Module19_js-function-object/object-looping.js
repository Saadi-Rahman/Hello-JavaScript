
// difference between Object & Array
// -----------------------------------------
// Arrays are a special type of variable that is also mutable and can also be used to store a list of values.
// Array contain only some properties.
var shoppingItems = ["books", "sunglass", "shoes", "pen"];
var friendsAge = [12, 45, 78, 20, 25, 26];

// Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). 
// Object contain properties and their values.
var friendsAge = {
    rahim: 12,
    robi: 25,
    kazi: 26
}

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2,
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]
for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}

// "for in" loop
for(var propertyName in shoppingCart) {
    const propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}

