"use strict";
// 1. A function that always throws an error
function throwError(message) {
    throw new Error(message); // Execution stops here
}
// 2. A function with an infinite loop
function keepAlive() {
    while (true) {
        console.log("Running...");
    }
}
keepAlive();
