// An interface is a way to define the structure of an object. It specifies what properties and methods an object should have, as well as their types. Interfaces are a key part of TypeScript’s type system and are used to enforce type-checking, ensuring that objects and classes conform to a specific structure.

//Defining an Interface =>

interface Person {
  name: string;
  age: number;
}

let john: Person = {
  name: "John Doe",
  age: 30
};
 
//Optional Properties =>

interface Car {
  brand: string;
  model: string;
  year?: number; // Optional property
}

let myCarr: Car = {
  brand: "Toyota",
  model: "Corolla"
};

// Readonly Properties =>

interface Book {
  readonly title: string;
  author: string;
}

let myBook: Book = {
  title: "TypeScript Guide",
  author: "John"
};

// Function Types in Interfaces =>

interface Calculate {
  (x: number, y: number): number;
}

let add: Calculate = (x: number, y: number): number => {
  return x + y;
};

// In this example, the Calculate interface specifies that a function should take two number parameters and return a number.

// Indexable Types =>

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray = ["Alice", "Bob"];
let firstElement: string = myArray[0]; // "Alice"

//Here, StringArray specifies that an array can be indexed by number and will return a string.

// Extending Interfaces =>

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

let myDog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever"
};

//In this case, the Dog interface extends the Animal interface, meaning that Dog must have both a name and a breed.
 
//Summary
//Interfaces are a way to define the structure of an object, function, or class in TypeScript.
//They support optional properties, readonly properties, function types, indexable types, and inheritance via extension.
//Classes can implement interfaces, ensuring they adhere to the defined structure.
//Interfaces vs. Type Aliases: Use interfaces for defining object types and type aliases for unions and primitives.

