console.log("hello \nworld \n "+10*20);
let name="pavan";
//let can make changes in the value of variable
console.log("hello "+name);
name="kumar";
console.log("hello "+name);
const pi=3.14;
//const cannot make changes in the value of variable
console.log("value of pi is "+pi);
var age = 20;//old way of declaring variable
console.log("age is "+age);
let x=true;
let y;
console.log("value of x is "+x);
console.log("value of y is "+y);
let result = null;
let dic={
    college:'KLU',
    branch:'CSE'
}
console.log("college name is "+dic.college);
console.log(dic);
let name1=prompt("eneter ur name : ");
//prompt() gives a string...so do typecaste for necessity
console.log("hello "+name1);
let age1=prompt("enter ur age : ");
let age2=Number(age1);//for numbers....for integers parseInt() can also be used
//parseFloat()
//String()
console.log(Boolean(1));
console.log("age is "+age2);
if (age2 >= 18){// === is uded for checking equality of value and type
    // !== is used for checking inequality of value and type
    console.log("you are eligible for voting");
}
else{//else if there are multiple conditions to check
    console.log("you are not eligible for voting");
}
//switch also there for multiple conditions same as java and c.
for(let i=1;i<11;i++){
    console.log(i);
}
