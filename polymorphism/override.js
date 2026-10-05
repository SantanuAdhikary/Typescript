"use strict";
class Animal {
    sound() {
        console.log(`this animal having sound`);
    }
}
class Dog extends Animal {
    eat() {
        console.log("dog can eat");
    }
    sound() {
        console.log("dog sound is barking");
    }
}
class Cat extends Animal {
    sound() {
        console.log("cat is meowing");
    }
}
let cat1;
cat1 = new Cat();
cat1.sound();
console.log("---------------------");
let dog1;
dog1 = new Dog();
dog1.sound();
