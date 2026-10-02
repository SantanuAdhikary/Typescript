
class Parent
{
    bike : string 
    room : string 

    constructor(bike : string , room : string)
    {
        this.bike = bike ; 
        this.room = room;
    }

    displayParent():void{
        console.log("bike name is ",this.bike)
        console.log("room is ",this.room)
    }
}


class Child extends Parent
{
    mobile : string 

    constructor(mobile : string,bike : string , room : string)
    {
        super(bike,room);
        this.mobile = mobile;
    }

    displayChild():void
    {
        console.log("mobile name is ",this.mobile)
      
    }


}


let c1 = new Child("iphone","re","2bhk")
c1.displayChild()
c1.displayParent()


console.log("--------------------------")

let c2 = new Child("samsung","yamaha","3bhk")
c2.displayChild()
c2.displayParent()
