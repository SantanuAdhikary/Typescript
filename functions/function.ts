

console.log("functions in typescript");


function addition() : void
{
   console.log("i am addition function");
   let a : number = 20 ; 
   let b : number = 100 ; 
   
   let sum : number = a + b ; 

   console.log(`the addition of ${a} and ${b} is ${sum}`);

}

addition();

console.log("-----------------------------------------")

// ! arrow function with void 



let multiply = () : void =>{

    console.log("i am multiply function")
    let a : number = 10 ; 
    let b : number = 20 ; 

    let ans = a * b ; 

    console.log(`multiplication of ${a} and ${b} is ${ans}`);

}

multiply();

console.log("-----------------------------------------")


// ! function with parameters 


let empDetails = (ename : string , eid : number , sal : number) : void =>{
    
    console.log(`emp name is : ${ename}`)
    console.log(`emp id is : ${eid}`)
    console.log(`emp salary is : ${sal}`)
}

empDetails("miller",101,54321);
empDetails("scott",230,65432);

console.log("-----------------------------------------")



let reverse = (str : string) : string=>{

    let rev : string = "";
    let n : number = str.length ; 

    for(let i=n-1 ; i>=0 ; i--)
    {
        rev = rev + str.charAt(i);
    }

    return rev;
}

console.log(reverse("typescript"));


console.log("------------------------------------------------------")

let reverseNumber = (num : number) : number =>{

    let rev : number = 0 ; 

    while(num > 0)
    {
        let lastdigit : number =  num % 10 ; 

        rev = rev * 10 + lastdigit ; 

        num = Math.floor( num / 10 );
    }

    return rev;
}

console.log(reverseNumber(123))



console.log("-------------------------------------------------------------")

let isPrime = (num : number) : boolean=>{

    let count : number = 0 ; 

    for(let i=1 ; i<=num ; i++)
    {
        if(num % i == 0)
            count++;

    }

    return count == 2 ;
}

console.log(isPrime(7))
console.log(isPrime(9))

console.log("---------------------------------------")

