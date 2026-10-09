abstract class Vehicle
{
    abstract speed():void

    stop():void{
        console.log("it can stop within 0.5sec ")
    }
}

class Bike extends Vehicle{

    override speed(): void {
        console.log("max speed is 120km/hr")
    }
}

class Car extends Vehicle{
    override speed(): void {
        console.log("max speed is 180km/hr")
    }

}

let car1 = new Car();
let bike1 = new Bike();

car1.stop()
car1.speed()

console.log("---------------------")
bike1.stop()
bike1.speed()