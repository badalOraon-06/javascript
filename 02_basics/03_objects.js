// singleton

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: 'baddal',
    "full name": 'badal kumar',
    age: 22,
    [mySym]: "myKey1", // symbol as key 
    location: 'india',
    email: "badal@gmail.com",
    lastLoggedIn: ['Monday', 'Tuesday'],
} 

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "badal@new.com"
// Object.freeze(JsUser) // prevent modification by freezing the object 
JsUser.email = "newbadal@new.com"
// console.log(JsUser)

JsUser.greeting = function()
{
    console.log("hello js user")
}

JsUser.greeting2 = function()
{
    console.log(`hello js user ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())