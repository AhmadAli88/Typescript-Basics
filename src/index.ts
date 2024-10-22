let id: number = 5;
let company: string = "Ahmad Sharafat";
let Published: boolean = false;
let x: any = "Hello";
let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// ids.push("Hello")
let arr: any[] = [1, true, "Hello"];

//Tuple
let person: [number, string, boolean] = [1, "Ahmad", false];

//Tuple Array
let employee: [number, string][];
employee = [
  [1, "John"],
  [2, "Jane"],
  [3, "Bob"],
  [4, "Alice"],
];

//Union
let ProductId: string | number = 23;
ProductId = 23;

console.log("id", id);

//Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
//Objects
type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: "John Doe",
};

//Type assertions
let cid: any = 1;
// let customerId = <number>cid;             One way to assign type of "any" variable at start then change it to specific type
let customerId = cid as number;
// customerId= true

//Functions
function addNum(a: number, b: number): number {
  return a + b;
}
console.log("addNum", addNum(1, 2));
console.log("Direction", Direction1.Right);
console.log("Direction2", Direction2.Right);

//Void
function logError(message: string | number): void {
  console.error(message);
}
logError("Testing message");

//Interface
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}
const user1: UserInterface = {
  id: 1,
  name: "John Doe",
};
//   user1.id= 5;

//   type Point= number | string;
//   const p1: Point = 1;

//Function interface
interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
     id: number;
    name: string;
    register() : string
   
  }
//Classes
class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
      console.log(123)
    }
    register(){
        return `${this.name} is registered` 
        // return 1
    }
}

const ahmad= new Person(1, "Ahmad");
const sharafat= new Person(2, "Sharafat");
console.log(ahmad.register())
console.log("ahmad", ahmad);
console.log("sharafat", sharafat);

//Data Modifiers
// 1-Public
// 2-Private
// 3-Protected

//Extending subclasses
class Employee extends Person{
    position: string;

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }

}
const emp= new Employee(3, 'Xeven', 'Developer');
console.log("emp", emp.register())


//Generics for making reusable components
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items) 
}

const numArray= getArray<number>([1,2,3,4,5])
const strArray=getArray<string>(["Ahmad", "Alam", "Ali"])

// numArray.push("Hello")
strArray.push("Test")