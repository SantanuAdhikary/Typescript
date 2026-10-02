"use strict";
console.log("functions in typescript");
function addition() {
    console.log("i am addition function");
    let a = 20;
    let b = 100;
    let sum = a + b;
    console.log(`the addition of ${a} and ${b} is ${sum}`);
}
addition();
console.log("-----------------------------------------");
// ! arrow function with void 
let multiply = () => {
    console.log("i am multiply function");
    let a = 10;
    let b = 20;
    let ans = a * b;
    console.log(`multiplication of ${a} and ${b} is ${ans}`);
};
multiply();
console.log("-----------------------------------------");
// ! function with parameters 
let empDetails = (ename, eid, sal) => {
    console.log(`emp name is : ${ename}`);
    console.log(`emp id is : ${eid}`);
    console.log(`emp salary is : ${sal}`);
};
empDetails("miller", 101, 54321);
empDetails("scott", 230, 65432);
console.log("-----------------------------------------");
let reverse = (str) => {
    let rev = "";
    let n = str.length;
    for (let i = n - 1; i >= 0; i--) {
        rev = rev + str.charAt(i);
    }
    return rev;
};
console.log(reverse("typescript"));
console.log("------------------------------------------------------");
let reverseNumber = (num) => {
    let rev = 0;
    while (num > 0) {
        let lastdigit = num % 10;
        rev = rev * 10 + lastdigit;
        num = Math.floor(num / 10);
    }
    return rev;
};
console.log(reverseNumber(123));
console.log("-------------------------------------------------------------");
let isPrime = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0)
            count++;
    }
    return count == 2;
};
console.log(isPrime(7));
console.log(isPrime(9));
console.log("---------------------------------------");
// !   optional parameter 
let stuDetails = (name, id, email) => {
    console.log(`student name is : ${name}`);
    console.log(`student id is : ${id}`);
    console.log(`student email is : ${email}`);
};
stuDetails("miller", 10, "miller@gmail.com");
stuDetails("scott", 102);
