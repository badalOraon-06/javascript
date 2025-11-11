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