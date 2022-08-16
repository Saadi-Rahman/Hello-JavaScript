// Create an array with the names of the phones you have used so far today. Then run a while loop to show all the items of that array.

var phoneNames = ["Panasonic", "Sagem my202x", "MotoRazr v3", "Motorola L7", "Samsung E250", "Nokia 1200", "Grameenphone V100", "Motorola C115", "micromax x088", "Samphony W20", "Samphony W30", "Samphony W68", "nokia 106", "Samsung Galaxy M31"];

// using while loop
var i = 0;
while(i < phoneNames.length) {
    var phoneName = phoneNames[i];
    console.log(phoneName);
    i++;
}

console.log("-------------------------");

// uning for loop
for(i = 0; i < phoneNames.length; i++) {
    var phoneName = phoneNames[i];
    console.log(phoneName);
}