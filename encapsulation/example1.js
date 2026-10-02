"use strict";
class ABC {
    x;
    y;
    z;
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    // getter method for x 
    getX() {
        return this.x;
    }
    //  setter method 
    setX(x) {
        this.x = x;
    }
    // getter method of y 
    getY() {
        return this.y;
    }
    // setter method for y 
    setY(y) {
        this.y = y;
    }
    // getter method for z 
    getZ() {
        return this.z;
    }
    // setter method for z 
    setZ(z) {
        this.z = z;
    }
}
let ob1 = new ABC("hi", 10, true);
console.log(ob1.getX());
console.log(ob1.getY());
console.log(ob1.getZ());
console.log("-------------------------------");
ob1.setX("hello");
console.log(ob1.getX());
// ob1.y = 200
// console.log(ob1.y)
ob1.setY(300);
console.log(ob1.getY());
ob1.setZ(false);
console.log(ob1.getZ());
