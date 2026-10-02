

console.log("unknown Datatype")


let data : unknown

data = 10 
console.log(data)

data = "hi"
console.log(data)

data = true
console.log(data)


console.log("-------------------------------")


let a : unknown 

a = "how are you"

if(typeof a == "string")
{
    console.log(a.toUpperCase())
}
    








let x : any 


x = 20 


console.log(x.toLowerCase())
x = "hi"
x = true


let y : unknown 

y = 20 ;

if(typeof y == "number")
{
    
    console.log(y + 100)
}

// console.log(y.toUpperCase())

y = "hi"
y = true