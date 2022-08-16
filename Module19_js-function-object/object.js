var student = {
    id: 115,
    name: "Solaiman Khan",
    class: 9,
    marks: 98
}

var mobile = {
    brand: "Samsung",
    price: 19000,
    storage: "64GB",
    camera: "7MP"
}

// object 
var myComputer = {
    brand: "hp",      //keys: "values",
    price: 83000,     //keys: "values",
    color: "silver",  //keys: "values",
    processor: "i7"   //keys: "values",
}

console.log(myComputer);   // { brand: 'hp', price: 83000, color: 'silver', processor: 'i7' }

// to get a single proberty or key's value
console.log(myComputer.price); // 83000

// To set a new value on the existing property:
myComputer.processor = "i9";
console.log(myComputer); // { brand: 'hp', price: 83000, color: 'silver', processor: 'i9' }

// to know all the property names of an object
var properties = Object.keys(myComputer);
console.log(properties);  // [ 'brand', 'price', 'color', 'processor' ]

// to know all the values of an object
var propertyValues = Object.values(myComputer);
console.log(propertyValues);  // [ 'hp', 83000, 'silver', 'i9' ]