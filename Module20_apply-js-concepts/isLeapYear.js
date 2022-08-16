// check the given year is Leap Year or not
function isEven(year) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        return true;
    }
    return false;
}

const givenYear = isEven(1900);
console.log("Given year is Leap Year:", givenYear);