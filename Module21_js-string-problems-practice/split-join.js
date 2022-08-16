const lyrics = "Teacher, leave them kids alone. Hey, teacher, leave them kids alone!";

// split
const parts = lyrics.split(" ");
console.log(parts);

const chars = lyrics.split("");
console.log(chars);

const sentences = lyrics.split(".");
console.log(sentences);

// They are somewhat similar
// slice
const partial = lyrics.slice(9, 14);
console.log(partial);

// substring
const partial1 = lyrics.substring(9, 14);
console.log(partial);

// join
const lines = [
    'Teacher',
    'leave them kids alone',
    'Hey',
    'teacher',
    'leave them kids alone!'
  ];

  const newLyrics = lines.join(" - ");
  console.log(newLyrics);