const friends = [23, 24, 25, 28, 35, 36];
console.log("original array: ", friends);

// splice
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements

// splice(starting index, number of elements to remove, insert new elements in place of the deleted elements)
// const partial = friends.splice(2, 3);
const partial = friends.splice(2, 3, 555, 22, 333, 44);
console.log("splice array: ", partial);

// splice change the original array
console.log("after splice the origianl array: ", friends);