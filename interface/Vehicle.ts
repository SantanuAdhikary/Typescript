

interface Vehicle
{
     speed() : void
     stop() : void
}


class Car implements Vehicle
{

    speed(): void {
        console.log("car speed is 180km/hr")
    }

    stop():void{
        console.log("car can stop within 0.1sec")
    }
}

class Bike implements Vehicle{

    speed(): void {
        console.log("bike max speed is 130km/hr")
    }

    stop(): void {
        console.log("bike can stop within 0.2sec")
    }
}


let bike1 = new Bike();
bike1.speed()
bike1.stop()

console.log("---------------------------")


let car1 = new Car()
car1.speed()
car1.stop()