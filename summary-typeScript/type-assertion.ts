// Type assertion in TypeScript is a way to tell the compiler what the type of a value should be, when you are certain about the type.

//There are two syntax styles for type assertions:

//1. Angle-bracket (<>) syntax (not available in .tsx files)
//2. as syntax (preferred, especially for JSX/TSX files)

//1. Angle-bracket (<>) syntax =>
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

//2. as Syntax => 
let someValue2: any = "this is a string";
let strLength2: number = (someValue as string).length;