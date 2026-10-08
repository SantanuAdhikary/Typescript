"use strict";
class Vehicle {
    travel() {
        console.log("you can travel by using this vehicle");
    }
}
class Car extends Vehicle {
    breakingSystem() {
        console.log("it will stop the car within 1sec");
    }
}
class Bike extends Vehicle {
    breakingSystem() {
        console.log("it will stop bike within 1.02 sec");
    }
}
let car1 = new Car();
car1.breakingSystem();
car1.travel();
console.log("---------------------");
let bike1 = new Bike();
bike1.breakingSystem();
bike1.travel();
