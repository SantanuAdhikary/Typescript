

let names : (string | number )[]= ["miller","sachin",20,"warner","lee","zaheer",10,10]




let tuple1 :  [string , number,string] = ["hi",10,"bye"]

console.log(tuple1);


//! how to print all the elements of tuples

for(let ele of tuple1)
{
    console.log(ele);
}


let subjects : readonly [string , string , string] 

subjects = ["html","css","js"]

// subjects.pop();
// subjects.push("ts")

console.log(subjects)



// ! nested array 


let u : (string|number)[] = ["hi",10,"bye",30]

let users :(string|number)[][] = [["miller",101], ["scott",102], ["blake",103],["david",104]]


// ! tuple inside array 

let players : [string,number,boolean][] = [["sachin",10,true], ["virat",18,false], ["rahul",1,true],["rohit",45,false]]

console.log("-------------------------------------------------------")

// ! array of objects 


let products : {productName : string , price : number, rating : number}[]

 products = [ 
      {
        productName : "mobile",
        price : 40000,
        rating : 4.5
      },
      {
        productName : "laptop",
        price : 80000,
        rating : 4.8
      },
      {
        productName : "camera",
        price : 25000,
        rating : 4.1
      }
]


products.map((ele)=>{

    console.log(ele)
})