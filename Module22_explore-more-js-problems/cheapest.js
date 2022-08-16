const phones = [
    { name: "Samsung", camera: 12, storage: "32GB", price: 52000, color: "silver" },
    { name: "Walton", camera: 16, storage: "32GB", price: 20000, color: "silver" },
    { name: "iphone", camera: 10, storage: "32GB", price: 82000, color: "silver" },
    { name: "Oppo", camera: 18, storage: "32GB", price: 26000, color: "silver" },
    { name: "Xiaomi", camera: 32, storage: "32GB", price: 30000, color: "black" },
    { name: "Simphony", camera: 8, storage: "32GB", price: 18000, color: "black" },
    { name: "Motorola", camera: 14, storage: "32GB", price: 28000, color: "silver" },
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const myChoise = cheapestPhone(phones);
console.log(myChoise);