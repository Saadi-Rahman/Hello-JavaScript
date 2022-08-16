//Create an array to display the prices of all your books. Which books are more than 200 tk, will be skipped. Others will show as output.

var bookPrices = [150, 550, 200, 100, 145, 300, 85, 170];

for(i = 0; i < bookPrices.length; i++) {
    var bookprice = bookPrices[i];
    if(bookprice > 200) {
        continue;
    }
    console.log(bookprice);
}

