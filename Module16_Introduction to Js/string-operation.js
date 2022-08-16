// String.includes(); to check if the argument string is present in the given string or not. This function is case sensitive.

var sentence = "If I were a train, I'd be late";

console.log(sentence.includes("train"));   // true
console.log(sentence.includes("Late"));    // false

// text.substring(); The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
console.log(sentence.substring(0, 15));  // If I were a tra