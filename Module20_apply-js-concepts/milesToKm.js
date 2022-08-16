// convert mile to kilometer
function milesToKilometer(miles) {
    const kilometer = miles * 1.60934;
    return kilometer;
}

const isMiles = 2;
const isKelometer = milesToKilometer(isMiles);
console.log(isKelometer); 