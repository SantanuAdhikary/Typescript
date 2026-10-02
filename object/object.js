"use strict";
let emp = {
    ename: "miller",
    eid: 101
};
console.log(emp);
// how to access
console.log("emp name is ", emp.ename);
// how to modify 
emp.eid = 302;
// emp.eid = "tsc302"
console.log(emp);
// emp.phNo = 9876543211;
// delete emp.eid;
console.log("---------------------------------------------------------------------");
let student = {
    sname: "rohit",
    sage: 10,
    isPlayer: true,
    address: {
        city: "chennai",
        pin: 654321,
    }
};
delete student.isPlayer;
// student.sage = 12
console.log(student);
let player = {
    name: "dhoni",
    age: 43,
    isCaptain: true,
    teams: ["csk", 17, "pune", 2],
    address: {
        city: "ranchi",
        state: "bihar",
        pin: 876544
    }
};
let products = [
    {
        pId: 1,
        productName: "laptop",
        price: 70000
    },
    {
        pId: 2,
        productName: "watch",
        price: 10000
    },
    {
        pId: 3,
        productName: "mobile",
        price: 60000
    },
];
console.log(products);
