// Premitive Data Types

// 7 types of primitive data types in JavaScript
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // false

// const bigNumber = 9007199254741991n



// Reference (Non-Premitive) Data Types

//  Array, Objects, Functions

const heros = ["superman", "batman", "wonderwoman"]

let myObj = {
    name: "badal",
    age: 22,
    hobbies: ["coding", "gaming"]
}

const myfunction = function (){
    console.log("hello world")
}

// types of operators in JavaScript

undefined // undefined type

null // null type

Number // number type

String // string type

Boolean // boolean type

Symbol // symbol type

BigInt // bigint type

Array // object type

Object // object type

Function // function type

console.log(typeof BigInt) // "bigint"


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 

//  Stack (Primitive), Heap (non-Primitive) Memory

let num1 = 6  // stored in stack memory
let num2 = num1 // stored in stack memory

console.log("num1:", num1) // 6
console.log("num2:", num2) // 6

num1++

console.log("after incrementing num1")
console.log("num1:", num1) // 7
console.log("num2:", num2) // 6 

let obj1 = { name: "badal", age: 22 } // stored in heap memory
let obj2 = obj1 // stored in stack memory (reference to the location in heap memory)

console.log("obj1:", obj1) // { name: "badal", age: 22 }
console.log("obj2:", obj2) // { name: "badal", age: 22 }

obj1.age++

console.log("after incrementing age in obj1")
console.log("obj1:", obj1) // { name: "badal", age: 23 }
console.log("obj2:", obj2) // { name: "badal", age: 23 }
