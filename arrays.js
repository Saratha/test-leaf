let letters = ['a', 'b', 'c', 'd', 'e',''];
letters.push('f'); // Add 'f' to the end of the array
console.log("Letters after push:", letters);
letters.pop(); // Remove the last element ('f')
console.log("Letters after pop:", letters);
letters.unshift('A'); // Add 'A' to the beginning of the array
console.log("Letters after unshift:", letters);
letters.shift(); // Remove the first element ('A')
console.log("Letters after shift:", letters);
letters.splice(2, 0, 'x'); // Insert 'x' at index
console.log("Letters after splice:", letters);
let newLetters = letters.slice(2, 4); // Create a new array with elements from index 2 to 4
console.log("New Letters:", newLetters);