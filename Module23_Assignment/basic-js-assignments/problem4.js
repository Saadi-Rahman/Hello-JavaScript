// 4. calculate public bus fare

/* 
reserved bus -----> 50
microbus ------> 11
rest people will go public bus
*/

function publicBusFare(peoples) {
    const reservedBusCapacity = 50;
    const microbusCapacity = 11;
    const publicBusParTicket = 250;

    let restPeopleOfReservedBus = Math.abs(peoples) % reservedBusCapacity;
    let restPeopleOfMicrobus = restPeopleOfReservedBus % microbusCapacity;
    let totalPublicBusTicketFare = restPeopleOfMicrobus * publicBusParTicket;

    // console.log(restPeopleOfReservedBus);
    // console.log(restPeopleOfMicrobus);
    // console.log(totalPublicBusTicketFare);

    if(typeof peoples !== "number"){
        return "invalid input! Please provide a number!";
    }
    return totalPublicBusTicketFare;
}


const result = publicBusFare(112);
console.log(result);