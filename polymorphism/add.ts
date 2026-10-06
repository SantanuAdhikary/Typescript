

class Addition
{

    add(a : number , b : number) : void
  

    add (a:number, b: number , c:number):void 



    add(a:number , b:number , c ?:number)
    {
           if(typeof c == "undefined")
             console.log(a + b)
           else
            console.log(a+b+c)
    }
}

let a1 = new Addition()

a1.add(4,9);
a1.add(10,20,30);