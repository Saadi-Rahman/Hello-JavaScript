const lyrics = "We don't need no education, We don't need no thought control!";

// ----- includes -----
// let isExist = lyrics.includes("education");
// let isExist = lyrics.includes("Education");
// let isExist = lyrics.includes(searchString); 

let searchStr = "WE";
let searchStrLowarCase = searchStr.toLowerCase();

let lyricsLowerCase = lyrics.toLowerCase();

let isExist = lyricsLowerCase.includes(searchStrLowarCase);
console.log(isExist);

let isExistOneLine = lyrics.toLowerCase().includes(searchStr.toLowerCase());
console.log(isExistOneLine);


// -------------------------------
// indexOf
console.log(lyrics.indexOf("no"));

if(lyrics.indexOf("control") !== -1) {
    console.log("exist inside the string");
}
else {
    console.log("can't find it");
}

// startsWith
console.log(lyrics.startsWith("We"));

// endsWith
console.log(lyrics.endsWith("Control!"));

let fileName = "mybiodata.pdf";
let otherFile = "mypic.png";

console.log(fileName.endsWith(".pdf"));
console.log(otherFile.endsWith(".jpg"));