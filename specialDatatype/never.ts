

//! 1. A function that always throws an error

function throwError(message: string): never {
  throw new Error(message); // Execution stops here
}

//! 2. A function with an infinite loop

function keepAlive(): never {

  while (true) {
    console.log("Running...");
  }

}

keepAlive();