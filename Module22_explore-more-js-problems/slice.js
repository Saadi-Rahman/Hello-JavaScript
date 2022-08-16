const friends = [23, 24, 25, 28, 35, 36, 34, 27, 40];

// slice starts with given index but ends with given (index-1). for example, it will cut before the both index of 2 and 5.
// Returns a copy of a section of an array. For both start and end.
const partial = friends.slice(2, 5);
console.log(partial);

// slice doesn't change the original array
console.log(friends);
