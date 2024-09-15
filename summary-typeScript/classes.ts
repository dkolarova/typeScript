// Classes in TypeScript provide a way to define blueprints for creating objects. 

// Basic Class Syntax =>

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const johny = new Person("Johny", 30);
johny.greet(); // Output: Hello, my name is John and I am 30 years old.

// Access Modifiers =>

//1. public: Members are accessible from anywhere (this is the default).
//2. private: Members are only accessible within the class they are defined in.
//3. protected: Members are accessible within the class and in derived classes (subclasses).

class Employee {
  public name: string;        // Can be accessed anywhere
  private salary: number;     // Only accessible within the class
  protected department: string; // Accessible in this class and subclasses

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  public showInfo() {
    console.log(`Employee Name: ${this.name}`);
  }

  private getSalary() {
    return this.salary;
  }
}

let empp = new Employee("Alice", 50000, "IT");
empp.showInfo();           // Works fine
// emp.getSalary();

// Inheritance = a class can inherit properties and methods from another class using the extends keyword. The subclass can also override the methods of the parent class.
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name); // Call the parent class constructor
  }

  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Buddy");
dog.bark();  // Woof! Woof!
dog.move(10);  // Buddy moved 10 meters.

//Here, the Dog class inherits from the Animal class, meaning it has access to the move method, and the super() keyword is used to call the constructor of the parent class.

// Method Overriding = When a subclass provides a specific implementation of a method that is already defined in the parent class, it's called method overriding. The subclass can use the super keyword to refer to the parent class's method.

class Bird {
  fly() {
    console.log("Bird is flying");
  }
}

class Eagle extends Bird {
  fly() {
    console.log("Eagle is flying higher");
  }
}

const eagle = new Eagle();
eagle.fly();  // Output: Eagle is flying higher

// Getters and Setters => for accessing and modifying private or protected properties.

class Employee1 {
  private _salary: number;

  constructor(salary: number) {
    this._salary = salary;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value > 0) {
      this._salary = value;
    } else {
      console.log("Invalid salary");
    }
  }
}

let emp = new Employee1(3000);
console.log(emp.salary); // 3000
emp.salary = 4000;
console.log(emp.salary); // 4000

// Here, salary is accessed like a property, but behind the scenes, the getter and setter methods are called.

// Static Members => static members are associated with the class itself, not with instances of the class.

class Circle {
  static pi: number = 3.14;

  static calculateArea(radius: number): number {
    return this.pi * radius * radius;
  }
}

console.log(Circle.pi); // 3.14
console.log(Circle.calculateArea(5)); // 78.5

// Abstract Classes => is a class that cannot be instantiated directly. It is used as a base class for other classes to extend and must contain at least one abstract method. Abstract methods are defined without implementation and must be implemented by the derived classes.

abstract class Shape {
  abstract calculateArea(): number;

  display() {
    console.log("This is a shape.");
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

let rectangle = new Rectangle(10, 5);
console.log(rectangle.calculateArea()); // Output: 50

// Implementing Interfaces = enforces a contract that the class must implement all properties and methods defined in the interface.

interface Drivable {
  start(): void;
  stop(): void;
}

class Car implements Drivable {
  start() {
    console.log("Car started");
  }

  stop() {
    console.log("Car stopped");
  }
}

const myCar = new Car();
myCar.start(); // Car started
myCar.stop();  // Car stopped

// Here, the Car class implements the Drivable interface and must provide concrete implementations for the start and stop methods.

//Summary
//1.Classes in TypeScript allow you to define object blueprints with properties and methods.
//2.Access modifiers (public, private, protected) control the visibility of class members.
//3.Inheritance allows classes to extend other classes and share properties and methods.
//4.Getters and Setters can be used to control access to properties.
//5.Static members are associated with the class itself, not instances.
//6.Abstract classes provide a template for other classes to extend and must contain at least one abstract method.
//7.Classes can implement interfaces to ensure they conform to a specific structure or behavior.
