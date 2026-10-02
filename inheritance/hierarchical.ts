

class Animal
{
    eat():void{
        console.log("this animal can eat")
    }

    sleep():void{
        console.log("this animal can sleep")
    }
}

class Dog extends Animal
{
    bark():void{
        console.log("dog can bark")
    }
}

class Cat extends Animal{

    meow():void{
        console.log("cat can meow")
    }
}

class Lion extends Animal
{
    roar():void{
        console.log("lion can roar")
    }
}


let l1 = new Lion();
l1.roar()
l1.eat()
l1.sleep()

console.log("---------------------------------------")

let d1 = new Dog()
d1.bark()
d1.eat()
d1.sleep();

console.log("---------------------------------------")


let c1 = new Cat()
c1.meow()
c1.eat()
c1.sleep()




