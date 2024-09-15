//Utility types are predefined types that make it easier to transform or manipulate existing types in various ways. 

//1. Partial<T>
//Converts all properties of a type T to be optional.
//Useful when you want to allow certain properties to be omitted.

interface User {
  id: number;
  name: string;
  email: string;
}

const updateUser = (user: Partial<User>) => {
  // Now all properties of user are optional
};

// 2. Required<T> 
//Converts all properties of a type T to be required (the opposite of Partial).

interface User2 {
  id?: number;
  name?: string;
}

const updateUser2: Required<User2> = {
  id: 1, // now required
  name: 'John' // now required
};

// 3. Readonly<T>
//Makes all properties of a type T read-only, meaning they cannot be reassigned after initialization.
interface User3 {
  id: number;
  name: string;
}

const user3: Readonly<User3> = {
  id: 1,
  name: 'John'
};

// 4. Pick<T, K>
// Constructs a type by picking a set of properties K from type T.
interface User {
  id: number;
  name: string;
  email: string;
}

const user: Pick<User, 'id' | 'name'> = {
  id: 1,
  name: 'John'
  // email is omitted
};

// 5. Omit<T, K>
// Constructs a type by omitting a set of properties K from type T
interface User {
  id: number;
  name: string;
  email: string;
}

const userWithoutEmail: Omit<User, 'email'> = {
  id: 1,
  name: 'John'
  // email is omitted
};

// 6. Record<K, T>
// Constructs a type with keys of type K and values of type T. Useful for creating dictionaries or maps.
const userRoles: Record<string, string> = {
  user1: 'admin',
  user2: 'user'
};

const userAges: Record<number, string> = {
  1: '25',
  2: '30'
};

// 7. Exclude<T, U>
// Constructs a type by excluding from T all types that are assignable to U.
/* type T = 'a' | 'b' | 'c';
type U = 'a';
type Excluded = Exclude<T, U>; // 'b' | 'c' */

// 8. Extract<T, U>
// Constructs a type by extracting from T all types that are assignable to U.
type T = 'a' | 'b' | 'c';
type U = 'a' | 'c';
type Extracted = Extract<T, U>; // 'a' | 'c'

// 9. NonNullable<T>
// Constructs a type by excluding null and undefined from T
type MaybeString = string | null | undefined;
type StringOnly = NonNullable<MaybeString>; // string

// 10. ReturnType<T>
// Constructs a type consisting of the return type of function T.
function getUser() {
  return { id: 1, name: 'John' };
}

type UserReturnType = ReturnType<typeof getUser>; // { id: number; name: string; }

// 11. InstanceType<T>
// Constructs a type consisting of the instance type of a constructor function T.
class User {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

type UserInstance = InstanceType<typeof User>; // User

// 12. Parameters<T>
// Constructs a tuple type of the parameter types of function T.

function createUser(id: number, name: string) {
  return { id, name };
}

type Params = Parameters<typeof createUser>; // [number, string]

// 13. ConstructorParameters<T>
// Constructs a tuple or array type of the types of the parameters required by a constructor function type.

class Person4 {
  constructor(public name: string, public age: number) {}
}

type PersonParams = ConstructorParameters<typeof Person4>; // [string, number]

// 14. ThisType<T>
// Used to specify the type of this within an object.

type ObjectWithThis = {
  value: number;
  increment(this: ObjectWithThis): void;
};

const objt: ObjectWithThis = {
  value: 0,
  increment() {
    this.value++;
  }
};
