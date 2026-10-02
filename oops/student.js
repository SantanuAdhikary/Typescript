"use strict";
class Student {
    sname;
    sid;
    constructor(sname, sid) {
        this.sname = sname;
        this.sid = sid;
    }
    study() {
        console.log("student can study");
    }
    play() {
        console.log("play cricket at 4 PM");
    }
}
let stu1 = new Student("john", 101);
console.log(stu1.sname);
console.log(stu1.sid);
stu1.study();
stu1.play();
console.log("-------------------------------------");
let stu2 = new Student("blake", 301);
console.log(stu2.sname);
console.log(stu2.sid);
console.log("------------------------ DOG --------------------");
class Animal {
    name;
    color;
    noOfLegs;
    constructor(name, color, noOfLegs) {
        this.name = name;
        this.color = color;
        this.noOfLegs = noOfLegs;
    }
    display() {
        console.log("animal name is ", this.name);
        console.log("animal color is ", this.color);
        console.log("animal legs couunt is ", this.noOfLegs);
    }
}
let a1 = new Animal("Dog", "brown", 4);
let a2 = new Animal("Bear", "black", 2);
a1.display();
