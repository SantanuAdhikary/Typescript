"use strict";
class Rapido {
    pickup;
    dest;
    distance;
    constructor(pickup, dest, distance) {
        this.pickup = pickup;
        this.dest = dest;
        this.distance = distance;
    }
    travelDetails() {
        console.log("your pickup location is ", this.pickup);
        console.log("your destination is ", this.dest);
    }
    pay() {
        console.log(`your total fare is : ${this.distance * 10}`);
    }
    vehicleDetails() {
    }
}
class Car extends Rapido {
    cars = ["BMW", "Audi", "Toyota", "Honda", "Mercedes"];
    drivers = ["Arun Kumar", "Rahul Sharma", "Vijay Singh", "Karthik Raj", "Suresh Kumar"];
    colors = ["black", "white", "red"];
    constructor(pickup, dest, distance) {
        super(pickup, dest, distance);
        console.log("you have selected Car ride");
    }
    pay() {
        console.log(`your Car fare is : ${this.distance * 25}`);
    }
    vehicleDetails() {
        console.log("car name is", this.cars[Math.floor(Math.random() * this.cars.length)]);
        console.log("car color is ", this.colors[Math.floor(Math.random() * this.colors.length)]);
        console.log("driver name is ", this.drivers[Math.floor(Math.random() * this.drivers.length)]);
    }
}
class Bike extends Rapido {
    bikes = ["Yamaha", "Kawasaki", "Ducati", "Royal Enfield", "KTM"];
    drivers = ["Aditya Kumar", "Rohit Verma", "Naveen Raj", "Sanjay Patel", "Manoj Das"];
    colors = ["Blue", "Grey", "Orange"];
    constructor(pickup, dest, distance) {
        super(pickup, dest, distance);
        console.log("you have selected Bike ride ");
    }
    pay() {
        console.log(`your bike fare is : ${this.distance * 15}`);
    }
    vehicleDetails() {
        console.log("bike name is", this.bikes[Math.floor(Math.random() * this.bikes.length)]);
        console.log("bike color is ", this.colors[Math.floor(Math.random() * this.colors.length)]);
        console.log("driver name is ", this.drivers[Math.floor(Math.random() * this.drivers.length)]);
    }
}
let ride;
ride = new Bike("arumbakkam", "vadapalani", 2);
ride.travelDetails();
ride.pay();
ride.vehicleDetails();
console.log("-------------------------------------");
ride = new Car("arumbakkam", "vadapalani", 2);
ride.travelDetails();
ride.pay();
ride.vehicleDetails();
