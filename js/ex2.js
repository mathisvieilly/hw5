const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter(number => number % 2 !== 0);
const numbersDivisibleBy2Or5 = numbers.filter(number => number % 2 === 0 || number % 5 === 0);
const numbersDivisibleBy3Squared = numbers.filter(number => number % 3 === 0).map(number => number * number);
const sumOfNumbersDivisibleBy5 = numbers.filter(number => number % 5 === 0).reduce((sum, number) => sum + number, 0);

console.log(oddNumbers);
console.log(numbersDivisibleBy2Or5);
console.log(numbersDivisibleBy3Squared);
console.log(sumOfNumbersDivisibleBy5);