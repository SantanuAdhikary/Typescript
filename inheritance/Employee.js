"use strict";
class Employee {
    ename;
    eid;
    salary;
    constructor(ename, eid, salary) {
        this.ename = ename;
        this.eid = eid;
        this.salary = salary;
    }
    getEname() {
        return this.ename;
    }
    getEid() {
        return this.eid;
    }
    getSalary() {
        return this.salary;
    }
    setEname(ename) {
        this.ename = ename;
    }
    setEid(eid) {
        this.eid = eid;
    }
    setSalary(salary) {
        this.salary = salary;
    }
}
class Developer extends Employee {
    role;
    constructor(role, ename, eid, salary) {
        super(ename, eid, salary);
        this.role = role;
    }
    developerDetails() {
        console.log("developer name ", this.getEname());
        console.log("developer salary ", this.getSalary());
        console.log("developer id ", this.getEid());
        console.log("developer role ", this.role);
    }
}
class Manager extends Employee {
    constructor(ename, eid, salary) {
        super(ename, eid, salary);
    }
    meeting() {
        console.log("manages meeting and employees");
    }
    managerDetails() {
        console.log("manager name ", this.getEname());
        console.log("manager salary ", this.getSalary());
        console.log("manager id ", this.getEid());
    }
}
console.log("----------------------- Employee Management System------------------");
let dev1 = new Developer("frontend", "miller", "ABC101", 20000);
let dev2 = new Developer("backend", "scott", "ABC173", 30000);
dev1.setSalary(25000);
dev1.developerDetails();
console.log("-----------------");
dev2.developerDetails();
console.log("-----------------");
let m1 = new Manager("blake", "ABC001", 50000);
m1.managerDetails();
