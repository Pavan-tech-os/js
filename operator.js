//... (spread operator)
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]
//without spread output will be [ [ 1, 2, 3 ], 4, 5, 6 ]
//used to combine multiple arrays or objects
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [...a, ...b];
console.log(c); // Output: [1, 2, 3, 4, 5, 6]
//Spread with objects
let student = {
    name: "Pavan",
    age: 20
};

let newStudent = {
    ...student,//name and age will be copied to newStudent
    city: "Vijayawada"
};
console.log(newStudent); // Output: { name: 'Pavan', age: 20, city: 'Vijayawada' }
//Rest operator
function add(...nums) {//giving all elemsnts of the array to the function as arguments
    console.log(nums);
}

add(10, 20, 30, 40);//calling the function with multiple arguments
//rest operator with for loop
function add(...nums) {
    let sum = 0;

    for (let num of nums) {
        sum += num;
    }

    return sum;
}

console.log(add(10, 20, 30));

// for...of loop 
// it is used to iterate over iterable objects like arrays, strings, maps, sets, etc.
//  It allows you to access each element of the iterable one by one.
/*
instead of
let nums = [10, 20, 30];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
*/
for(let num of nums){// same as python for i in nums:
    console.log(num);
}



