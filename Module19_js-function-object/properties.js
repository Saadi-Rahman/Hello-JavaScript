var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// dot notation system
// when you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;
// console.log(penCount);    // 25

// alternative system 
// when you know the specific property name, use dot notation to get the property value
var penCount2 = shoppingCart["pen"];
// console.log(penCount2);    // 25

// third system
var propertyName = "mouse";
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);     // mouse 1


// to know all the property names of an object
var properties = Object.keys(shoppingCart);
console.log(properties);  // [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen' ]

// to know all the values of an object
var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);  // [ 3, 1, 5, 1, 25 ]



console.log(shoppingCart);

// set property values [system - 1]
shoppingCart.mouse = 15;
console.log(shoppingCart);

// set property values [system - 2]
shoppingCart["mouse"] = 29;
console.log(shoppingCart);

// set property values [system - 3]
shoppingCart[propertyName] = 89;
console.log(shoppingCart); 

