
# Typescript 

## Introduction 

### what is typescript 

* TypeScript is a strongly typed programming language developed by Microsoft and built on top of JavaScript.

* we can tell typescript is superset of javascript.

* superset means : TypeScript contains everything JavaScript has, plus additional features.


**problem with js**
```js
let value = 10;
value = "Hello";
value = true;
```

```js
function add(a, b) {
    console.log( a + b);
}

add(10, 20);    // 30
add(10, "20"); // 1020
```

### advantage of typescript 

**1. type safety / static typing**

```ts
    let age: number = 25;
    age = "hello"; // Error
```

**2. Early Error Detection**

```ts
let price: number = 100;
price = "100"; // Error
```



### Is TypeScript a Replacement for JavaScript?

* No. TypeScript does not replace JavaScript in the browser.
* Browsers understand JavaScript.
* They don't directly execute normal TypeScript.

    TypeScript
        ↓
    TypeScript Compiler
        ↓
    JavaScript
        ↓
    Browser 

**TypeScript code is compiled/transpiled into JavaScript code that can run in environments that execute JavaScript.**


### what is typescript compiler 

  *tsc* : It converts TypeScript code into JavaScript.

        app.ts
        ↓
        tsc
        ↓
        app.js

 **How to install**

 ```bash
          npm install -g typescript
  ```

  **how to check is it install or not / how to check the version**

  ```bash
          tsc --version
  ```

### Steps Of Execution Of typescript code 

**create ts file by using .ts extension**

     app.ts 

**compile ts file**

```bash
    tsc app.ts
```
 * it will generate one app.js file . 

 **execute js file**

 ```bash
         node app.js
 ```
          
 Write TypeScript
      ↓
     app.ts
      ↓
   TypeScriptCompiler
      ↓
     app.js
      ↓
     Node / Browser


##  Datatype 

* datatype is used to define what kind of data we want to assign to a variable.

* there are 3 types . 

1. primitive datatype
2. non primitive datatype 
3. special datatype


### Primitive Datatype 

**1. string**

* Represents textual data. Supports single, double quotes, and template literals.

```ts
   let ename : string = "miller"
```

**2. number**

* Represents all numeric values, including integers, floating-point numbers

```ts
    let age : number = 45
    let salary: number = 70000.99
```

**3. boolean**

* Represents a logical value: true or false.

```ts
  let isMarried : boolean = false;
  let isPlayer : boolean = true;
```

**4. bigint**

* used to store large nubmers.
* here suffix should be `n`

```ts
 let hugeNumber = 98765432190n;
```


**5. null**

* Intentionally represents an empty or non-existent value.

```ts
let empty: null = null;
```

**6. undefined**

```ts

     let accountBalance : undefined = undefined;
```


## Type Annotation 

* Type annotation in TypeScript is the syntax used to explicitly specify the data type of a variable, function parameter, object, array, or function return value.

* for this we have to use colon ( : )

syntax: 

       variable : type 


## Special Datatype 

### any 

* The any data type in TypeScript is a special type that disables type checking for a variable.

**Characteristics**

*Accepts Any Value :*

 * we can assign a number, a string, a boolean, an object, or any other type to an any variable, and change it at any time.

*No Compile-Time Errors:*

* Because type checking is turned off, the compiler will not throw errors when we are performing illegal operations on the variable. 
but it will provide run time error.


```ts
        let data : any 

        data = 10 ;
        console.log(data)      // 10

        data = "hi"
        console.log(data)    // hi

        data = true
        console.log(data)  // true
```

**problem of any datatype**

```ts
        let a : any 

        a = 10

        console.log(a.toUpperCase()) 
```

* in this example a varialbe is having number value, but we are performing string operation (toUpperCase()). 
then also it will not give compile time error.




### unknown

* `unknown` is a special TypeScript type used when we don't know the type of a value in advance.

* It is similar to `any` in the sense that an `unknown` variable can hold values of different types.

But there is a **very important difference**:

* `unknown` is type-safe, whereas `any` disables type checking.


```ts
let data: unknown;

data = 10;
console.log(data);   // 10

data = "hello";
console.log(data);  // hello

data = true;
console.log(data);  // true
```

#### How to check the type 

```ts
let value: unknown = 100;

if (typeof value === "number") {
    console.log(value + 20);
}
```

##### Why `unknown` is Safer Than `any`

* becuase `unknown` is providing type-safety.

### any

```ts
let data: any = 10;

data.toUpperCase(); // No compile-time error
```

### unknown

```ts
let data: unknown = 10;

data.toUpperCase(); // ❌ Compile-time error
```

With `unknown`, we must first check the type.

```ts
if (typeof data === "string") {
    data.toUpperCase();
}
```



### void


* `void` represents the absence of a meaningful return value from a function.

* It is most commonly used with functions that **do not return a value**.

```ts
        function add() : void
        {
             let a : number = 10 ; 
             let b : number = 20 ; 
             let sum : number = a + b ; 
             console.log(sum);
        }

        add();

    let multiply = () : void =>{

        let y = 30 ; 
        let x = 4 ; 
        let mul = x * y ; 
        console.log(mul);
    }

    multiply();
```


### never

*  `never` is a special type that represents values that will never occur.

* we can  use `never` as the return type for functions that never successfully finish executing. 


```ts
        function infiniteLoop(): never {
            while (true) 
            {
                 console.log("running");
            }
        }
        // This function never returns because it runs infinitely
```


## Function 


### funciton with return type number datatype**

```ts
         let square = (num : number) : number =>{

            return num * num ; 
         }

         console.log(square(5));  // 25
```

### function with return type string datatype 


```ts
       let wish = (person : string , msg : string) : string =>{
          
          return `${person} ${msg}`;
       }

       console.log(wish("miller","happy birthday"))
```

### function with return type boolean datatype 

```ts

   let isEven = (num : number) : boolean =>{

        return num % 2 == 0; 
   }

   console.log(isEven(7))  // false
   console.log(isEven(10)) // true
```



## Optional Parameter 

* An optional parameter in TypeScript allows a function to be called without specifying an argument for that particular parameter.

* it is denoted by question mark symbol (?). 

* it should be written after the parameter before the type annotation.

**note**
 * it can be used only for the last parameter.
 * it will assing undefined to that parameter


 ```ts
        let stuDetails = (name : string , id ?: number) : void=>{

            console.log(`student name is : ${name}`)
            console.log(`student id is : ${id}`)
        }

        stuDetails("miller",10);
        stuDetails("scott");
 ```


 
## Default parameter 

* Default parameters is used to provide fallback value to a function parameter so that it is used if no argument—or undefined—is passed during the function call.

*  default parameter is defined by adding an equals sign (=) and a fallback value right next to the parameter name (like param: type = defaultValue).


```ts

    let user = (name : string) : void =>{
          console.log(name);
    }

    user("john");  ✅ 
    user();  ❌
```

*to overcome this we can use default parameter*

```ts

    let user = (name : string = "guest") : void =>{
          console.log(name);
    }

    user("john");  // john
    user();     // guest
```

## Type Inference 

* Type inference in TypeScript is the compiler's ability to automatically determine and assign data types to variables, expressions, and function returns based on their values and context.


```ts
        let sname = "john";   // string datatype 
        sname = 10 ; ❌

        let age = 20 ; // number datatype 
        age = true ; ❌

        let isStudent = true ;  // boolean 
        isStudent = "yes";  ❌

        let x ;     // any datatype 
        x = "hi";
        x = 10 ; 
        x = true ;
```

## Union Type

* In TypeScript, a union type allows a variable, function parameter, or return value to hold multiple alternative types.

* we define a union type by a vertical bar (|), known as the pipe symbol.

*syntax*
   
    let variable : type1 | type2 | type3


```ts
 
        let rollNo : number | string  = 101
        console.log(rollNo)

        rollNo = "mca101"
        console.log(rollNo)


        let abc = (x : boolean | string) : void=>{

                 console.log(x);
        }

        abc(true);
        abc("hi");



        let xyz = () : string | number =>{

            let a = 10 ; 

            if(a > 5)
                return "hi";

            return a;
        }
```


## Type Narrowing 

* when we are using union type means the variable can take more than one type of datatype.
* now if we we try to perform some operation it will give error.
* to overcome this we can use **type narrowing** 


```js
       
        let narrow = (x : number | boolean | string ) : void =>{

            console.log("x value is " , x)

            if(typeof x == "string")
                console.log(x.toUpperCase())

            if(typeof x == "boolean")
                console.log(!x)

            if(typeof x == "number")
                console.log(x * 20)
        }


        narrow(10)
        narrow(true)
        narrow("bye")

```


## ARRAY 

* in array we can store multiple values.
* TypeScript provides type safety, ensuring that all elements inside an array belongs to a specific data type.

### How to declare array 

 
*syntax:*
          arrayname : datatype[] = [value1, value2 , value3........] ; 


```ts
        let fruits : string[] = ['banana','apple','guava']
        let prices : number[] = [40,100,80]
```

**note**

  * here both the arrays we created are homogeneous we can can't add any other datatype value inside the array. 

```ts
        fruits.push("mango") ✅
        fruits.push(30) ❌

        price.push(30) ✅
        price.push("watermelon") ❌
```

### how to store multiple datatype value in array 

* for this we can use `union type` to provide type annotation of array.

*syntax*
    arrayname : (type1 | type2| type3)[] = [value1, value2,....]

```ts
    let students : (string | number)[] = ["rahul",12,"rohit",15,"virat",13]
```

**note**
  * here we are creating one heterogeneous array which can store only string and number values.
  * it can't store any other datatype values.

```ts
     students.push("dhoni") ✅
     students.push(true)   ❌
```

### Type Inference with Array 


```ts
       let subjects = ["sql","mt","ts"]
       let arr = [10,"hi",90]
```

**note**
 * here `subjects` array can store only string values and `arr` can store only string and number.


### Declaring Array with Generic Syntax 

*syntax:*

    arrayname : Array<type> = [value1,value2.....]

```ts
      let arr2 : Array<number> = [90,80,70]
```

### Heterogeneous Array by using Generic 

*syntax:*

    arrayname : Array<type1 | type2 | type3> = [value1,value2.....]

```ts
        let arr3 : Array<number | string> = [90,80,70,"hi"]

        console.log(arr3)
```


## Object 


### type annotation in object 


*syntax*

        objectname : {
            property1 : datatype,
            property2 : datatype,
            property3 : datatype,

        } = {
            property1 : value ,
            property2 : value ,
            property3 : value ,
        }


```ts
       let pen : {
           price : number,
           brand : string
       } = {
         price : 30 , 
         brand : "camlin"
       }

       conosole.log(pen);
```

#### how to access 

 ```ts
         console.log(pen.price)
         console.log(pen.brand)
 ```

 #### how to modify 

 ```ts
          pen.price = 50;
       //   pen.price = "fifty";  ❌ not possible
 ```

 #### how to delete 

 * in typescript we can't delete any property.
 * if we want to delete then **the property should be optional**.

 ```ts
         let laptop  : {
            brand : string , 
            price ? : number
         } = {
            brand : "hp",
            price : 65000
         }

         delete laptop.price ; // ✅
         console.log(laptop);    
 ```

### what is readonly 

* if we provide `readonly` to any property of object, then we can't change the value of that.

```ts
     let watch : {
        readonly brand : string
     } = {
        brand : "sonata"
     }

     watch.brand = "timex"   // ❌
```

### we can't add any extra property in object

```ts
         watch.color = "black"  // ❌
```


### type inference in object 


```ts

       let tv = {
          color :"black",
          brand : "samsung",
          price : 60000,
       }

    // modify property value
       tv.color = "white"; ✅
       tv.price = "seventy thousand"; ❌

    // adding property 
       tv.size = 60 ; ❌

    // delete property
       delete tv.price ; ❌

```


## interface 

* In TypeScript, an interface is a powerful way to define the "shape" or structure of an object.

*  It specifies the exact properties and methods an object must have, along with their data types, without providing any actual implementation.

*syntax*

    interface interfacename {
        
        property : value,
        property : value ,
        .
        .
        .
    }

**How to use interface**

    object : interface {

    }

**note**
 * in interface we can use *readonly* and *optional parameter* 


 ```ts
      interface Employee {
         ename : string , 
        readonly eid : number | string,
         sal ?: number
      }


      let emp1 : Employee = {
        ename : "miller",
        eid : 101
      }

      let emp2 : Employee = {
        ename : "john",
        eid : "abc2345",
        sal : 40000
      }
 ```


 ### how to copy one interface property inside another interface

 * for copying one interface property inside anothe interface we have to use *extends* keyword.

 ```ts
          interface User{
            name : string , 
            age : number
          }

         interface Student extends User{
            skills : string[],
            sid : number
         } 


         let stu1 : Student = {
            name :  "sanjai",
            age : 13,
            skills : ["js","ts"],
            sid : 5
         }
 ```


 ## Tuple 

 * a tuple is a specialized array with a pre-defined length and known types for each specific index.

 * tuple is one array where size is fixed and each index which datatype data we have assign that is also fixed.

 *syntax*

     variable : [type,type,type]

```ts

         let t1 : [string , number , boolean] = ["john",10,true]


         let t2 : [number,string]

         t2 = [10,"miller"]       ✅
         t2 = ["miller",10]       ❌
         t2 = [10,"miller","hi"]  ❌
         t2 = [10]                ❌
```


### how to traverse tuple 

* for traversing tuple we can use looping statement.

```ts
         for(let ele of t1)
         {
            console.log(ele);
         }
```


### readonly property in tuple 

* in tuple we can use in-built array methods like (push , pop,shift,unshift).
* if we are using these methods means it will modify the tuple size.
* to overcome this situation we can use `readonly` property.

```ts
        let subjects : readonly [string , string , string] 

        subjects = ["html","css","js"]

        // subjects.pop();          ❌
        // subjects.push("ts")      ❌

        console.log(subjects)
```


### how to create nested array with type annotation

```ts

let users :(string|number)[][] = [["miller",101], ["scott",102], ["blake",103],["david",104]]

```

### how to create tuple inside array 

```ts

let players : [string,number,boolean][] = [["sachin",10,true], ["virat",18,false], ["rahul",1,true],["rohit",45,false]]

```



## What is class 

* class is a blueprint and user defined datatype that is used to create object.
* class contains states and behaviours.
* state defines variable or the property of object 
* behaviours defines methods/functions of object

### how to create class 

*syntax:*

      class classname{

         // state 
        // behaviours
      }

### how to create object 

* we have to create the object with the help of class and new keyword.

   objectname = new classname()


```ts

 class Animal{

    name : string 
    color : string 

    constructor(name : string , color : string ) 
    {
        this.name = name ; 
        this.color = color ; 
    }
 }

 let a1 = new Animal("Dog","brown")
 let a2 = new Animal("Bear","black")

console.log(a1)
console.log(a2)
```


* when we want to assign value to the state of class we need `constructor`
* we can acess all the class property by using the object

*syntax:*
    
    objectname.propertyname

```ts
     console.log(a1.name)
```

### what is constructor 

* constructor is a specical method of class.
* it does not have any return type. 
* it is used to assign the state of the class.



## static 

* static is a keyword that represents common. 
* static is a property of class.

* we can provide static for variable and method

### static variable 

* any variable that is prefixed with `static` keyword is called **static variable**

* we can access any static variable with the help of class.

* we can access it in the same class and from other class also.


```ts

  class Student{
     
     static schoolName : string = "abc school"


    // accessing from same class by using non-static method
        display1 : void
        {
            console.log(Student.schoolName);
        }

    // accessing from same class by using static method
        static display2 : void
        {
            console.log(Student.schoolName);
        }
  }

 let stu1 = new Student();
 stu1.display1();

 Student.display2();

```

## OOPS

* `OOPS` stands for *Object Oriented Programming System*

* it is the approach of writing programs based on real world object.

* by using this we are solving real wolrd problems.

### Pillers/Components of OOPS

**1. Encapsulation**
**2. Inheritance**
**3. Polymorphism**
**4. Abstraction**


## Encapsulation

* Encapsulation means binding / wrapping the data(property) and behaviors(methods) inside a single unit(class).

* the main advantage of `Encapsulation` is *data hiding*

### what is data hiding 

 * it is the process of restrict the access of data members directly but providing the access indirectly by using methods.

**steps**

*step 1*
    
 * inside class make non-static variable as `private`.
 * if we make them private we can't access outside of the class.

*step 2*
  
  * create public getter method.
  * by using this method we can access / read the private data outside of the class.

*step 3*
 
 * create public setter method.
 * by using this method we can assign value to the private data members.


 ```js

      class Student 
      {
          private sname : string
          private sid : number 

          constructor(sname : string , sid : number)
          {
            this.sname = sname;
            this.sid = sid;
          }

        //   getter methods 
         
         public getSname():string{
            return this.sname;
         }

         public getSid():number{
            return this.sid;
         }

         // setter methods 

         public setSname(sname : string):void{
            this.sname = sname;
         }
         public setSid(sid : number):void{
            this.sid = sid;
         }
      }
 ```

## Inheritance 

* this is process of acquiring the properties of one class into another class.

* for performing `inheritance` atleast we need 2 classes.

* from which class we are acquiring the property is called as `parent / super / base` class

* inside which class we are inheriting the properties of parent class is called as `child / sub / derived` class.

### types of Inheritance 

* we have 5 types of inheritance. 

**1. single inheritance**
**2. multi level inheritance**
**3. hierarchial inheritance**
**4. mulitple inheritance**
**5. hybrid inheritance**


### Single Level Inheritance 
 
 * this is process of accessing parent class properties into child class. 
 * here we have only 2 classes.

 **note :**
   * to perform inheritance we need `extends` keyword.


```ts
    

        class Animal
        {
            eat() : void{
                console.log("this animal can eat")
            }

            sleep():void{
                console.log("this animal can sleep")
            }

        }


        class Cat extends Animal{

            run():void{
                console.log("cat can run ")
            }

            meow():void{
                console.log("cat is meowing")
            }
        }


        let a1 = new Animal()
        a1.eat()
        a1.sleep()
        // a1.run();

        console.log("----------------------------")

        let c1 = new Cat()
        c1.run()
        c1.meow()
        c1.sleep()
        c1.eat()


```


### MultiLevel Inheritance 

* when one parent class having one child class and that child class having another child class, this is called multilevel inheritance.

```ts
        class Animal
        {
            eat():void{
                console.log("this animal can eat food")
            }
        }

        class Dog extends Animal
        {
            sleep() : void{
                console.log("dog can sleep")
            }
        }

        class Puppy extends Dog{
            
            weep() : void{
                console.log("puppy can weep")
            }
        }


        let p1 = new Puppy();
        p1.weep();
        p1.eat()
        p1.sleep()
```

### Hierarchical Inheritance 

* when one parent class having multiple child class in the same level, that is called `Hierarchical Inheritance`

```js

     class Animal
        {
            eat():void{
                console.log("this animal can eat food")
            }
        }

   class Cat extends Animal
   {
        meow() : void
        {
            console.log("cat can meow")
        }
   }

   class Lion extends Animal
   {
       roar() : void
       {
         console.log("lion can roar")
       }
   }
```

### Multiple Inheritance 

* when one child class having multiple parent class, that is called `Multiple Inheritance`

* in typescript we can't perform multiple inheritance by using class but we can do by using interface.


### Hybrid Inheritance 

* it is the combination of any two inheritance.



## what is super() calling statement 

* `super()` calling statement is used to call the parent class constructor from child class constructor.

* When a child class extends a parent class and defines its own constructor, it must call `super()` before accessing this.

* inside constructor `super()` should be the first statement.


```ts

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

```


## Polymorphism 

* Polymorphism is the combination of two words `poly` means many and `morphism` means forms.

* it is an ability of an object which can undergo multiple forms.

* there are two types of polymorphism. 

1. compile time polymorphism 
2. run time polymorphism 

### Method Override 

* it is the process of parent and child having same method but different implementation.

* for method override `inheritance` is mandatory.

* we can use `override` keyword infront of the method.

```js

   class Payment
   {
       pay() : void
       {
          console.log("pament done")
       }
   }

   class UPI extends Payment
   {
       override pay():void
       {
         console.log("payment done by upi")
       }
   }

   class Cash extends Payment
   {
       override pay():void
       {
         console.log("payment done through cash")
       }
   }

   let p : Payment 

   p = new UPI()
   p.pay();       // payment done by upi

   p = new Cash()
   p.pay();    // payment done through cash

```


### Method Overloading 

* it is the process of having multiple methods but same name inside one class.

* here name should be same but parameters type or count should be different.

* here we have to follow two steps to provide method overload 
 
 i. overload signature 
 ii. implementation signature 

 ```ts
        class Addition
        {

        // overload signature

            add(a : number , b : number) : void
            add (a:number, b: number , c:number):void 


        // implementation signature
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
 ```


### difference b/w method overload and override 

**Method Overloading**	                    

*Scope*	             
      Happens within the same class.	            

*Method Signature*	
        Different parameter lists (types, number, or order).	

*Polymorphism Type*	
       Compile-time static binding.	          

**Method Overriding**

*Scope*	  
      Happens across parent and child classes (requires inheritance).

*Method Signature*  
       Identical signature to the parent method.

*Polymorphism Type*    
        Runtime dynamic binding.


## Abstraction 

* Abstraction in TypeScript is the Object-Oriented Programming (OOP) principle of hiding internal implementation  and providing only the essential features of an object.

* we can perform abstraction by using **abstract class** and **interface**

### what is abstact class 

* any class having `abstract` keyword infront of the name of class, is called as **abstract class**

* we can't create any object of abstract class.

* abstract class can contain both `abstract method` and `concrete method`.


### what is abstract method 

* any method having `abstract` keyword as prefix, is called as **abstract method**

* `abstract method` can't have any method body / implementation 

### what is concrete mehtod 

* any method without `abstract` keyword is called as **concrete method** 

* this method having their method body.


### How to Achive Abstraction by using abstract class 

*step 1*
   
   * create one class by using `abstract` keyword and inside that class take `abstract method`

```ts

   abstract class KFC
   {
       // abstract method 

        abstract friedChiken(): void ; 

      //  concrete method 

       discount():void
       {
         console.log("20% discount")
       }

   }
 ```

 *step 2 :*
   
   * now we can't access these methods, becuase we can't create object. 
   * for that we need **implementation class**, to provide the body of the `abstract method`
   * for that we have to perform **inheritance**

 ```ts
       class Nexus extends KFC
       {
           override friedChiken(): void
           {
               console.log("you will get 2 plate friedChicken")
           }
       }
 ```

 *step 3*

  * now we can create the object of the implementation class and we can access all the methods.

  ```ts
           let nexus = new Nexus();
           nexus.friedChicken();
           nexus.discount();
  ```


  #### Note : abstract class can not provide 100% abstraction, for that we need interface.