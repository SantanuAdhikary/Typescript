"use strict";
// ! union ( | )
let rollNo = 101;
console.log(rollNo);
rollNo = "mca101";
console.log(rollNo);
// rollNo = true;  ❌
// ! union with function parameter 
let userDetails = (name, panId, isStudent) => {
    console.log(name);
    console.log(panId);
    if (typeof panId == "string")
        console.log(panId.toUpperCase());
    console.log(isStudent);
};
userDetails("john", 123498765, "yes");
console.log("-----------------------------");
userDetails("miller", "pan1234", false);
console.log("-----------------------------");
// ! union with function return type 
let deposit = (balance) => {
    let acBalance = 3000;
    if (balance <= acBalance)
        return acBalance - balance;
    return "insufficeient balance";
};
console.log(deposit(1000));
console.log(`\t type narrowing`);
let student = (sname, rollNo) => {
    console.log(sname.toUpperCase());
    if (typeof rollNo == "string")
        console.log(rollNo.toUpperCase());
    else
        console.log(rollNo);
};
student("rohit", 101);
student("virat", "india18");
