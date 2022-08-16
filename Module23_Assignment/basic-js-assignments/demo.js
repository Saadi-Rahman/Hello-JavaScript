function publicBusFare(peoples) {
    const reservedBus = 50;
    const microbus = 11;
    const parTicket = 250;

    let a = peoples % reservedBus;
    let b = a % microbus;
    let totalPrice = b * parTicket;

    // console.log(a);
    // console.log(b);
    // console.log(totalPrice);

    if(typeof peoples !== "number"){
        return "invalid input! Please provide a number!";
    }
    return totalPrice;
}


const result = publicBusFare(112);
console.log(result);