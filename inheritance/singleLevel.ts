


class Animal
{
    legs : number = 4 
    color : string = "brown"
}

class Dog extends Animal
{
    name : string = "tom"

    sound():void{
        console.log("it barks")
    }
}

let  a1 = new Animal();
console.log("animal legs ",a1.legs)
console.log("animal color ",a1.color)
// console.log("animal name ",a1.name)

console.log("----------------------------------------")


let d1 = new Dog()
console.log("dog name is ",d1.name)
d1.sound()

 console.log("dog legs ",d1.legs)
 console.log("dog color ",d1.color)


