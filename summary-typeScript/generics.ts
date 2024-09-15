//Provide a way to create reusable components that work with a variety of data types, while preserving type safety. Generics allow you to write functions, classes, and interfaces that can operate on multiple types without sacrificing the type-checking capabilities of TypeScript.

//With generics, you can define a placeholder (usually represented by T, U, etc.) that will be replaced with a specific type when the function, class, or interface is used.
  
//Basic Generic Function Example =>
function identity<T>(value: T): T {
  return value;
}

let result1 = identity<string>("Hello"); // Explicitly set T as string
let result2 = identity<number>(100);     // Explicitly set T as number

// TypeScript can infer the type
let result3 = identity("TypeScript");    // Inferred as string

//Generic Constraints =>
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(item.length);
}

logLength("Hello"); // Works because string has a length property
logLength([1, 2, 3]); // Works because array has a length property
// logLength(10); // Error: number doesn't have a length property

//Generic classes =>
class Box<T> {
  content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }
}

let stringBox = new Box<string>("Hello, World");
console.log(stringBox.getContent()); // Output: "Hello, World"

let numberBox = new Box<number>(123);
console.log(numberBox.getContent()); // Output: 123

// Generic Interfaces =>
interface Pair<K, V> {
  key: K;
  value: V;
}

let stringNumberPair: Pair<string, number> = { key: "age", value: 30 };
let numberBooleanPair: Pair<number, boolean> = { key: 1, value: true };


// Generic Constraints with Interfaces
interface Lengthwise {
  length: number;
}

function logWithLength<T extends Lengthwise>(arg: T): void {
  console.log(arg.length);
}

logWithLength({ length})