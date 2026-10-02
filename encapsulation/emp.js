"use strict";
class Emp {
    ename;
    eid;
    age;
    constructor(ename, eid, age) {
        this.ename = ename;
        this.eid = eid;
        this.age = age;
    }
    getEname() {
        return this.ename;
    }
    getEid() {
        return this.eid;
    }
    setEname(ename) {
        this.ename = ename;
    }
    setEid(eid) {
        this.eid = eid;
    }
}
let emp1 = new Emp("miller", 2010, 34);
// console.log("emp name is ",emp1.ename)
// console.log("emp id is ",emp1.eid)
// emp1.ename = "scott"
// emp1.eid = 2026
// console.log("emp name is ",emp1.ename)
// console.log("emp id is ",emp1.eid)
console.log("emp name is ", emp1.getEname());
console.log("emp id is ", emp1.getEid());
console.log("emp age is : ", emp1.age);
emp1.setEid(2026);
emp1.setEname("scott");
emp1.age = 54;
console.log("emp name is ", emp1.getEname());
console.log("emp id is ", emp1.getEid());
console.log("emp age is ", emp1.age);
