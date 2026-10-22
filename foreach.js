const nums = [10, 20, 30];

nums.forEach(num => {
    console.log(num);
});
const nums = [1, 2, 3, 4];

const doubled = nums.map(n => n * 2);

console.log(doubled);
const nums = [10, 15, 20, 25, 30];

const even = nums.filter(n => n % 2 === 0);

console.log(even);
const nums = [5, 12, 18, 25];

const answer = nums.find(n => n > 15);
// finds the first 
//match according to condition

console.log(answer); // 18
const nums = [10, 20, 30, 40];
const total=nums.reduce((sum,n) => sum+n,0);

console.log(total); // 100