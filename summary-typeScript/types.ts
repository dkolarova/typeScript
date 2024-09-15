// Types => are used to define the kind of data that a variable can hold.

// boolean : Represents true or false values.
let isDone: boolean = true;

// number: Represents all numbers, both integers and floating-point numbers. TypeScript also supports hexadecimal, binary, and octal literals.
let age: number = 25;
let hex: number = 0xf00d;  // hexadecimal
let binary: number = 0b1010;  // binary
let octal: number = 0o744;  // octal

// string: Used for textual data. TypeScript uses double or single quotes for strings. You can also use template literals (backticks) for multiline strings and string interpolation.
let name1: string = "Alice";
let greeting: string = `Hello, ${name1}!`;

// array: An array type can be defined using either of these two syntaxes:
//number[]: Array of numbers.
//Array<number>: Generic array of numbers.

let numbers: number[] = [1, 2, 3, 4];
let strings: Array<string> = ["a", "b", "c"];

// tuple A tuple allows you to express an array where the type of a fixed number of elements is known.
let tuple: [string, number];
tuple = ["hello", 10]; // OK

// Enum: In TypeScript, an enum (short for "enumeration") is a feature that allows you to define a collection of named constants, which can represent a set of related values in a more readable and organized way.

enum Direction {
  North = 1,   // 0 //You can also manually assign values: 
  East,    // 2 (automatically increments)
  South,   // 3
  West     // 4
}

let myDirection: Direction = Direction.North;
console.log(myDirection);  // Output: 1

// any: A variable of type any can hold any value. It disables type-checking for that particular variable.

let randomValue: any = 10;
randomValue = "Hello"; // OK

// uknown: The unknown type is similar to any, but it forces type-checking when performing operations on the value.
let unsure: unknown = "maybe a string";
unsure = 42; // OK

// void: The void type represents the absence of any value, typically used in functions that do not return anything.
function logMessage(): void {
  console.log("This function returns nothing.");
}

// null and undefined: Both null and undefined are types that represent the absence of value.
let u: undefined = undefined;
let n: null = null;

// never: The never type represents values that never occur, often used in functions that throw errors or never return.
function error(message: string): never {
  throw new Error(message);
}

// object:  Represents non-primitive types, that is, anything that is not number, string, boolean, symbol, null, or undefined.
let obj: object = { name: "Alice", age: 30 };

// symbol: A unique and immutable primitive value, often used as object keys.
let sym1 = Symbol("key");
let sym2 = Symbol("key");
console.log(sym1 === sym2); // false