const numbers = [45, 65, 23, 98, 19];
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

for(const number of numbers){
    console.log(number);
}


const products = [
    {id: 1, name: "xiaomi phone", price: 19000},
    {id: 2, name: "iPhone", price: 90000},
    {id: 3, name: "macbook air laptop", price: 120000},
    {id: 4, name: "lenovo laptop", price: 39000},
    {id: 5, name: "Dell inspiron Laptop", price: 29000},
    {id: 6, name: "Samsung Galaxi phone", price: 24000},
    {id: 7, name: "hp pavilion Laptop", price: 85000},
    {id: 8, name: "Motorola phone", price: 20000},
    {id: 8, name: "ASUS ROG Gaming LapTOP", price: 245000},
];

// for(const product of products){
//     console.log(product);
// }

function matchedProducts (products, search) {
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, "laptop");
console.log(result);