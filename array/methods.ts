

let ages : number[] = [10,20,30]


// ! 1. pop()


ages.pop();
console.log(ages);   // [10,20]


// ! 2. push()

ages.push(40);
console.log(ages)  // [ 10, 20, 40 ]

// ! 3. shift()

ages.shift()
console.log(ages);  // [ 20, 40 ]

// ! 4. unshift()

ages.unshift(5)
console.log(ages)  // [ 5, 20, 40 ]

// ! 5. indexOf()

console.log(ages.indexOf(40)); // 2

// ! 6. includes()

console.log(ages.includes(5))   // true
console.log(ages.includes(10)) // false

// ! 7. concat()

let frontend : string[] = ["html","css","js"]
let backend : string[] = ["node","express"]

let fullstack : string[] = frontend.concat(backend)
console.log(fullstack)  // [ 'html', 'css', 'js', 'node', 'express' ]


// ! 8. slice()

console.log(fullstack.slice(2,4))  // [ 'js', 'node' ]


// ! How to traverse 


for(let i=0 ; i<fullstack.length; i++)
{
    console.log(fullstack[i]);
}


// ! how to use map method

let upper = fullstack.map((ele)=>{
     return ele.toUpperCase();
})

console.log(upper)