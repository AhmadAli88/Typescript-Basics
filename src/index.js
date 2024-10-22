"use strict";
let id = 5;
let company = "Ahmad Sharafat";
let Published = false;
let x = "Hello";
let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// ids.push("Hello")
let arr = [1, true, "Hello"];
//Tuple
let person = [1, "Ahmad", false];
//Tuple Array
let employee;
employee = [
    [1, "John"],
    [2, "Jane"],
    [3, "Bob"],
    [4, "Alice"],
];
//Union
let ProductId = 23;
ProductId = 23;
console.log("id", id);
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John Doe",
};
//Type assertions
let cid = 1;
// let customerId = <number>cid;             One way to assign type of "any" variable at start then change it to specific type
let customerId = cid;
// customerId= true
//Functions
function addNum(a, b) {
    return a + b;
}
console.log("addNum", addNum(1, 2));
console.log("Direction", Direction1.Right);
console.log("Direction2", Direction2.Right);
//Void
function logError(message) {
    console.error(message);
}
logError("Testing message");
const user1 = {
    id: 1,
    name: "John Doe",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(123);
    }
    register() {
        return `${this.name} is registered`;
        // return 1
    }
}
const ahmad = new Person(1, "Ahmad");
const sharafat = new Person(2, "Sharafat");
console.log(ahmad.register());
console.log("ahmad", ahmad);
console.log("sharafat", sharafat);
//Data Modifiers
// 1-Public
// 2-Private
// 3-Protected
//Extending subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Xeven', 'Developer');
console.log("emp", emp.register());
//Generics for making reusable components
function getArray(items) {
    return new Array().concat(items);
}
const numArray = getArray([1, 2, 3, 4, 5]);
const strArray = getArray(["Ahmad", "Alam", "Ali"]);
// numArray.push("Hello")
strArray.push("Test");
