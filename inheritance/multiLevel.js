"use strict";
class Animal {
    eat() {
        console.log("this animal can eat food");
    }
}
class Dog extends Animal {
    sleep() {
        console.log("dog can sleep");
    }
}
class Puppy extends Dog {
    weep() {
        console.log("puppy can weep");
    }
}
let a1 = new Animal();
a1.eat();
console.log("-----------------------------------");
let d1 = new Dog();
d1.sleep();
d1.eat();
console.log("-----------------------------------");
let p1 = new Puppy();
p1.weep();
p1.eat();
p1.sleep();
