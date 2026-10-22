const name = "Pavan";
const marks = 95;

console.log(`Hello ${name}, you scored ${marks}`);
//truthy and falsy values and optional values
const name = "";

if (name) {
    console.log("Name entered");
} else {
    console.log("Name is empty");
}
//output: Name is empty
//falsy values are false, 0, "", null, undefined, NaN
//nullish coalescing operator ?? supplies a 
// default only if the left side is null or undefined.
const username = null;

console.log(username ?? "Guest"); // Guest