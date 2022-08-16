// -------------------------------
// 1. convert radian to degree
// -------------------------------

function radianToDegree(radian){
    const isDegree = radian * (180 / Math.PI);
    const degree = isDegree.toFixed(2);
    if(typeof radian !== "number"){
        return "invalid input! Please provide a number!";
    }
    return degree;
}



// -----------------------------------------------------------------
// 2. check whether the given file name is a javaScript file or not
// -----------------------------------------------------------------

function isJavaScriptFile(fileName) {
    if(typeof fileName !== "string"){
        return "invalid input! Please provide a string!";
    }

    result = fileName.endsWith(".js");
    return result;
}



// ------------------------------------------------------
// 3. calculate the total oil price that I have to pay
// ------------------------------------------------------

function oilPrice(dieselNeed, petrolNeed, octaneNeed) {
    
    let dieselPerLitre = 114;
    let petrolPerLiter = 130;
    let octanePerLiter = 135;

    const dieselPrice = dieselPerLitre * Math.abs(dieselNeed);
    const petrolPrice = petrolPerLiter * Math.abs(petrolNeed);
    const octanePrice = octanePerLiter * Math.abs(octaneNeed);

    const totalPrice = dieselPrice + petrolPrice + octanePrice;

    if(typeof dieselNeed !== "number" || typeof petrolNeed !== "number" || typeof octaneNeed !== "number"){
        return "invalid input! Please provide numbers only!";
    }
    return totalPrice;
}



// ----------------------------------
// 4. calculate public bus fare
// ----------------------------------

function publicBusFare(peoples) {

    const reservedBusCapacity = 50;
    const microbusCapacity = 11;
    const publicBusParTicket = 250;

    let restPeopleOfReservedBus = Math.abs(peoples) % reservedBusCapacity;
    let restPeopleOfMicrobus = restPeopleOfReservedBus % microbusCapacity;
    let totalPublicBusTicketFare = restPeopleOfMicrobus * publicBusParTicket;

    if(typeof peoples !== "number"){
        return "invalid input! Please provide a number!";
    }
    return totalPublicBusTicketFare;
}




// ------------------------------------------------------------------------
// 5. check whether the given inputs (object) both are best friends or not
// ------------------------------------------------------------------------

function isBestFriend(friend1, friend2) {
    if(typeof friend1 !== "object" || typeof friend2 !== "object"){
        return "invalid input! Please provide an object!";
    }
    else if(friend1.name === friend2.friend && friend2.name === friend1.friend) {
        return true;
    }
    return false;
}
