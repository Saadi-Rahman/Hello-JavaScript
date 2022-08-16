const phones = [
    { name: "Samsung", camera: 12, storage: "32GB", price: 52000, color: "silver" },
    { name: "Walton", camera: 16, storage: "32GB", price: 20000, color: "silver" },
    { name: "iphone", camera: 10, storage: "32GB", price: 82000, color: "silver" },
    { name: "Oppo", camera: 18, storage: "32GB", price: 26000, color: "silver" },
    { name: "Xiaomi", camera: 32, storage: "32GB", price: 30000, color: "black" },
    { name: "Simphony", camera: 8, storage: "32GB", price: 18000, color: "black" },
    { name: "Motorola", camera: 14, storage: "32GB", price: 28000, color: "silver" },
];

function highestCamera(phones) {
    let highest = phones[0];
    for(let i = 0; i < phones.length; i++) {
        let phone = phones[i];
        if(phone.camera > highest.camera) {
            highest = phone;
        }
    }
    return highest;
}

const bestCamera = highestCamera(phones);
console.log(bestCamera);