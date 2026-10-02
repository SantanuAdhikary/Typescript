"use strict";
let wish = (name, msg = "welcome") => {
    console.log(`${msg} , ${name}`);
};
wish("john", "happy birthday");
wish("miller");
console.log("------------------------------------");
let totalPrice = (quantity, price = 100) => {
    return quantity * price;
};
console.log(totalPrice(10, 300));
console.log(totalPrice(20));
