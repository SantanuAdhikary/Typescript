
let wish = (name : string , msg : string ="welcome") : void=>{

    console.log(`${msg} , ${name}`)
}

wish("john","happy birthday")
wish("miller")




console.log("------------------------------------")


let totalPrice = (quantity : number , price : number = 100) : number=>{

    return quantity * price ; 
}

console.log(totalPrice(10,300));
console.log(totalPrice(20));