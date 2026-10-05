
class Rapido
{
    pickup : string 
    dest : string 
    distance : number 

    constructor(pickup : string , dest: string , distance : number)
    {
         this.pickup = pickup
         this.dest = dest 
         this.distance = distance
    }
    
    travelDetails():void{
        console.log("your pickup location is ",this.pickup)
        console.log("your destination is ",this.dest)
    }

    pay():void{
        console.log(`your total fare is : ${this.distance * 10}`)
    }

    vehicleDetails():void{

    }
}

class Car extends Rapido
{

     cars: string[] = ["BMW", "Audi", "Toyota", "Honda", "Mercedes"];
     drivers: string[] = ["Arun Kumar", "Rahul Sharma", "Vijay Singh", "Karthik Raj", "Suresh Kumar"];
     colors : string[] = ["black","white","red"]



    constructor(pickup : string , dest: string , distance : number)
    {
         super(pickup,dest,distance)
         console.log("you have selected Car ride")
    }

    override pay():void{
        console.log(`your Car fare is : ${this.distance * 25}`)
    }

    override vehicleDetails():void{
        console.log("car name is", this.cars[Math.floor(Math.random() * this.cars.length)])
        console.log("car color is ",this.colors[Math.floor(Math.random() * this.colors.length)])
        console.log("driver name is ",this.drivers[Math.floor(Math.random() * this.drivers.length)])
    }
}

class Bike extends Rapido{

    bikes: string[] = ["Yamaha", "Kawasaki", "Ducati", "Royal Enfield", "KTM"];
   drivers: string[] = ["Aditya Kumar", "Rohit Verma", "Naveen Raj", "Sanjay Patel", "Manoj Das"];
   colors: string[] = ["Blue", "Grey", "Orange"];


    constructor(pickup : string , dest: string , distance : number)
    {
         super(pickup,dest,distance)
         console.log("you have selected Bike ride ")
    }

      override pay():void{
        console.log(`your bike fare is : ${this.distance * 15}`)
    }

      override vehicleDetails():void{
        console.log("bike name is", this.bikes[Math.floor(Math.random() * this.bikes.length)])
        console.log("bike color is ",this.colors[Math.floor(Math.random() * this.colors.length)])
        console.log("driver name is ",this.drivers[Math.floor(Math.random() * this.drivers.length)])
    }
}

let ride : Rapido

ride = new Bike("arumbakkam","vadapalani",2);
ride.travelDetails()
ride.pay()
ride.vehicleDetails();

console.log("-------------------------------------")

ride = new Car("arumbakkam","vadapalani",2);
ride.travelDetails()
ride.pay()
ride.vehicleDetails();

