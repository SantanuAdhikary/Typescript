"use strict";
class Employee {
    static companyName = "ABC company";
    ename;
    eid;
    constructor(ename, eid) {
        this.ename = ename;
        this.eid = eid;
    }
    empDetails() {
        console.log(`emp name is ${this.ename}`);
        console.log(`emp id is ${this.eid}`);
        console.log(`company name is ${Employee.companyName}`);
    }
}
// console.log(Employee.companyName)
let emp1 = new Employee("miller", 1023);
emp1.empDetails();
console.log("--------------------------");
let emp2 = new Employee("david", 9878);
emp2.empDetails();
