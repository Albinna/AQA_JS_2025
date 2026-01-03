const firstArray = [10, 20, 30];
const secondArray = ['Alex', 'Max', 'Bob'];
const concatenatedArray = firstArray.concat(secondArray);
const merged = [...firstArray, ...secondArray]

console.log(concatenatedArray);
console.log(merged);