"use strict";
// !   optional parameter 
let stuDetails = (name, id, email) => {
    console.log(`student name is : ${name}`);
    console.log(`student id is : ${id}`);
    console.log(`student email is : ${email}`);
};
stuDetails("miller", 10, "miller@gmail.com");
stuDetails("scott", 102);
