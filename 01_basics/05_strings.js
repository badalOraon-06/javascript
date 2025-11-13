const name = "badal"
const repoCount = 5

// console.log("name:", name)
// console.log("repoCount:", repoCount)

// console.log("Hello " + name + ", you have " + repoCount + " repositories.")

// console.log(`Hello ${name}, you have ${repoCount} repositories.`) // template literals


const gameName = new String("chess-game-cloud") // string object

// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('e'))

const newString = gameName.substring(0,5)
// console.log(newString)

const anotherString = gameName.slice(-8,5)
// console.log(anotherString)

const newStringOne = "    hello world    "; // string with whitespace
// console.log(newStringOne.trim()) // removes whitespace from both ends


const url = "https://badal.com/oraon%20cloud"

console.log(url.replace('%20', '-'))

console.log(url.includes('oraon')) // true

console.log(gameName.split('-')) // [ 'chess', 'game', 'cloud' ]