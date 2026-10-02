"use strict";
let names = ["miller", "sachin", 20, "warner", "lee", "zaheer", 10, 10];
let tuple1 = ["hi", 10, "bye"];
console.log(tuple1);
//! how to print all the elements of tuples
for (let ele of tuple1) {
    console.log(ele);
}
let subjects;
subjects = ["html", "css", "js"];
// subjects.pop();
// subjects.push("ts")
console.log(subjects);
// ! nested array 
let u = ["hi", 10, "bye", 30];
let users = [["miller", 101], ["scott", 102], ["blake", 103], ["david", 104]];
// ! tuple inside array 
let players = [["sachin", 10, true], ["virat", 18, false], ["rahul", 1, true], ["rohit", 45, false]];
console.log("-------------------------------------------------------");
// ! array of objects 
let products;
products = [
    {
        productName: "mobile",
        price: 40000,
        rating: 4.5
    },
    {
        productName: "laptop",
        price: 80000,
        rating: 4.8
    },
    {
        productName: "camera",
        price: 25000,
        rating: 4.1
    }
];
products.map((ele) => {
    console.log(ele.productName);
});
