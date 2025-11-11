const score = 100

const balance = new Number(100)

// console.log(score) // "number"
// console.log(balance) // "object"

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 12.8456

// console.log(otherNumber.toFixed(1)) // 12.8
// console.log(otherNumber.toPrecision(3)) // 12.8
// console.log(otherNumber.toPrecision(2)) // 13

const hundreds = 1000000

// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN')) // Indian format

// console.log(Number.MAX_VALUE)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Math Object

// console.log(Math)
// console.log(Math.abs(-100)) // 100
// console.log(Math.round(4.6)) // 5
// console.log(Math.floor(4.9)) // 4
// console.log(Math.ceil(4.1)) // 5

// console.log(Math.min(2,34,5,6,7,-23)) // -23
// console.log(Math.max(2,34,5,6,7,-23)) // 34

console.log(Math.random()) // random number between 0 and 1

console.log(Math.random() * 10) // random number between 0 and 10
console.log((Math.random() * 10) +1) // random number between 1 and 10

console.log(Math.floor((Math.random() * 10) +1)) // random integer between 1 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)