
let display = (n)=>{


    // base case 

    if(n==0)
        return ;
    
    console.log(n);
 

    display(n-1);
}
display(5)


console.log("--------------------------------------")

let display2 = (num)=>{

    // base case 
    if(num > 5) return ;

    console.log(num)
    display2(num + 1)
}

display2(1)


console.log("--------------------------------------------")


//! factrial of num 


let factorial = (n)=>{
  
    if(n == 0)
        return 1;

  return n * factorial(n-1) ;
}

let ans = factorial(5)

console.log(ans);

console.log("-------------------------")

let fact = (n,ans)=>{

    if(n==0)
    {
        console.log(ans);
        return
    }
    ans = ans * n 

    fact(n-1,ans)
}

fact(5,1)





let add = (i,sum)=>{

    if(i == 6)
    {
        console.log(sum)
        return;
    }

    sum = sum + i ; 

    add(i+1,sum)
}



add(1,0)



