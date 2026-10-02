"use strict";
// ! type infernce for string 
let sname = "karthick";
console.log(typeof sname); // string
// sname = 10 ; ❌
// ! type inference for number 
let age = 12;
// age = true  ❌
// ! type inference for boolean 
let isStudent = true;
// isStudent = "hi";  ❌
// ! type inference for any 
let a;
console.log(typeof a);
a = 10;
a = "hi";
a = true;
// ! type infernce for functions 
let add = () => {
    console.log(5 + 10);
};
let sub = () => {
    return 10 - 2;
};
let isOdd = (num) => {
    return num % 2 == 0;
};
let user = () => {
    return "welcome";
};
add();
console.log(sub());
console.log(isOdd(30));
console.log(user());
