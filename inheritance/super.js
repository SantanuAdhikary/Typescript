"use strict";
class Parent {
    bike;
    room;
    constructor(bike, room) {
        this.bike = bike;
        this.room = room;
    }
    displayParent() {
        console.log("bike name is ", this.bike);
        console.log("room is ", this.room);
    }
}
class Child extends Parent {
    mobile;
    constructor(mobile, bike, room) {
        super(bike, room);
        this.mobile = mobile;
    }
    displayChild() {
        console.log("mobile name is ", this.mobile);
    }
}
let c1 = new Child("iphone", "re", "2bhk");
c1.displayChild();
c1.displayParent();
console.log("--------------------------");
let c2 = new Child("samsung", "yamaha", "3bhk");
c2.displayChild();
c2.displayParent();
