const numbers = [1,10,14,2,4,5,43,34];
const sortNumbers = [...numbers].sort((a,b) => a-b);

console.log('Original:', numbers);
console.log('Sorted:', sortNumbers);