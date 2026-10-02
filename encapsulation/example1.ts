
class ABC
{
   private x : string ;
   private y : number ;
   private z : boolean ; 

    constructor(x:string , y:number , z:boolean)
    {
        this.x = x  ;
        this.y = y ; 
        this.z = z ; 
    }

    // getter method for x 

    public getX() : string{
       return this.x ;
    }

    //  setter method 

    public setX(x : string) : void{
        this.x = x
    }

    // getter method of y 

    public getY():number{
        return this.y
    }

    // setter method for y 

    public setY(y:number):void{
        this.y = y
    }

    // getter method for z 

    public getZ() : boolean{
        return this.z;
    }

    // setter method for z 

    public setZ(z : boolean):void{
        this.z = z ;
    }
}

let ob1 = new ABC("hi",10,true);

console.log(ob1.getX())
console.log(ob1.getY())
console.log(ob1.getZ())


console.log("-------------------------------")

ob1.setX("hello")
console.log(ob1.getX())

// ob1.y = 200
// console.log(ob1.y)

ob1.setY(300)
console.log(ob1.getY())


ob1.setZ(false)
console.log(ob1.getZ())


