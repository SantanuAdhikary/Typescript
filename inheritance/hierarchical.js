"use strict";
class Animal {
    eat() {
        console.log("this animal can eat");
    }
    sleep() {
        console.log("this animal can sleep");
    }
}
class Dog extends Animal {
    bark() {
        console.log("dog can bark");
    }
}
class Cat extends Animal {
    meow() {
        console.log("cat can meow");
    }
}
class Lion extends Animal {
    roar() {
        console.log("lion can roar");
    }
}
let l1 = new Lion();
l1.roar();
l1.eat();
l1.sleep();
console.log("---------------------------------------");
let d1 = new Dog();
d1.bark();
d1.eat();
d1.sleep();
console.log("---------------------------------------");
let c1 = new Cat();
c1.eat();
c1.sleep();
c1.meow();
