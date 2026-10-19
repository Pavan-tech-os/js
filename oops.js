let student = {
    name: "Pavan",
    age: 20,
    branch: "CSE"
};//dictionary type data structure
console.log(student.name);
console.log(student.age);
console.log(student.branch);
console.log(student["name"]);
student.age = 21;//updating the value of age
student.city = "Vijayawada";//adding new key-value pair to the dictionary
console.log(student);
//Nested Objects and Arrays
let student = {
    name: "Pavan",
    age: 20,

    skills: ["Python", "C", "JavaScript"],

    address: {
        city: "Vijayawada",
        state: "Andhra Pradesh"
    }
};
console.log(student.skills[0]);
console.log(student.address.city);
//ojbect destructuring
/*let name = student.name;
let age = student.age;*/
let { name, age } = student;
console.log(name);
console.log(age);
//array destructuring
let nums = [10, 20, 30];

let [a, b, c] = nums;

console.log(a);
console.log(b);
console.log(c);
let [i, , j] = nums;//skipping the second element
console.log(i);
console.log(j);
