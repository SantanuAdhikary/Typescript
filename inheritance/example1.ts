
class Animal
{
    color : string = "black"
    legs : number = 4 ;
}


class Dog
{
    name : string = "tom"
}


class Cat{

    sound : string = "mew"
}

let d1 = new Dog()
console.log(d1.name)


let a1 = new Animal()
console.log(a1.color)
console.log(a1.legs)


let c1 = new Cat();
console.log(c1.sound)