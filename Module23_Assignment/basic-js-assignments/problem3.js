// 3. calculate the total oil price that I have to pay
/* 
diesel ---> 114
petrol ---> 130
octane ---> 135
*/

function oilPrice(dieselNeed, petrolNeed, octaneNeed) {
    
    let dieselPerLitre = 114;
    let petrolPerLiter = 130;
    let octanePerLiter = 135;

    const dieselPrice = dieselPerLitre * Math.abs(dieselNeed);
    const petrolPrice = petrolPerLiter * Math.abs(petrolNeed);
    const octanePrice = octanePerLiter * Math.abs(octaneNeed);
    // console.log(dieselPrice, petrolPrice, octanePrice);

    const totalPrice = dieselPrice + petrolPrice + octanePrice;

    if(typeof dieselNeed !== "number" || typeof petrolNeed !== "number" || typeof octaneNeed !== "number"){
        return "invalid input! Please provide numbers only!";
    }
    return totalPrice;

}

let total = oilPrice(-30, 20, "-10");
console.log(total);

