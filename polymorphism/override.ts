

class Animal{
 
    sound() : void
    {
        console.log(`this animal having sound`)
    }
}


class Dog extends Animal
{
    
    eat():void{
        console.log("dog can eat")
    }

  override  sound():void{
        console.log("dog sound is barking")
    }
}


class Cat extends Animal
{
   override sound():void{
        console.log("cat is meowing")
    }
}


let cat1 : Animal

cat1 = new Cat()
cat1.sound();

console.log("---------------------")


let dog1 : Animal 

dog1 = new Dog();
dog1.sound()

console.log("------------------")


let animal : Animal 

animal = new Animal()
animal.sound();
