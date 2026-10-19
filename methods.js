const nums = [1, 2, 3, 4];
const doubledNumbers = nums.map(num => num * 2);

console.log(doubledNumbers);

const evenNumbers = [1, 2, 3, 4, 5, 6].filter(num => num % 2 === 0);

console.log(evenNumbers);

const sum = nums.reduce((total, num) => total + num, 0);

console.log(sum);
/*
map     → transform every item
filter  → select some items
reduce  → combine into one result
*/





