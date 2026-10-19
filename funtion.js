/*function collar(){
    console.log("hello");}
collar();
function greet(name) {
    console.log("Hello " + name);
}
greet("ayyappa");
greet("pavan");
function add(a, b) {
    return a + b;
}
let i = Number(prompt("enter first number : "));
let j = Number(prompt("enter second number : "));
//console.log(add(i,j));
//arrow function
const sub=(k,l)=>{ return k-l;}
console.log(sub(i,j));*/
let a=["pavan","kumar","ayyappa"];
console.log(a);
a.push("sai");//adds element at the end of array

a.pop();
a.unshift("sai");//adds element at the beginning of array
a.shift();//removes element at the beginning of array
console.log(a[0],a.length,a.includes("pavan"),a.indexOf("kumar"));
let k=[1,2,3,4,5];
let result=k.map(function(k){
    return k*2;
})
let result1=k.map(k=>k*10);
console.log(result+"\n"+result1);
