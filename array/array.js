"use strict";
// ! Array with Type Inference  (homogeneous)
// ! number type of array 
console.log('\t number array');
let arr = [10, 20, 30, 40];
arr.push(50);
// arr.push("hi")
console.log(arr);
// ! String type of array 
console.log('\n\t string array\n');
let names = ["vijay", "dhoni", "rajini"];
names.push("suriya");
// names.push(20);
console.log(names);
// ! Array with Type Inference (Heterogeneous)
console.log(`\n\t heterogeneous array\n`);
let arr2 = [10, 20, 30, "hi", "bye"];
arr2.push(50);
arr2.push("how are you");
// arr2.push(true)
console.log(arr2);
