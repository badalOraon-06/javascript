const tinderUser = new Object()  // singleton object


tinderUser.id = "123abc"
tinderUser.name = "badal"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "badal@gmail.com",
    fullname:{
        userfullname:{
            firstname: "badal",
            lastname: "kumar"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname)

// console.log(regularUser.fullname?.userfullname?.firstname) // optional chaining use during api data fetching

const obj1 ={
    1: "a",
    2: "b"
}
const obj2 ={
    "3": "a",
    "4": "b"
}
const obj3 ={
    5: "a",
    6: "b"
}

// const obj3 ={ obj1, obj2 }
// const mergedObject = Object.assign({}, obj1, obj2, obj3) //syntax to merge multiple objects Object.assign(target, source1, source2,...)

const mergedObject = {...obj1, ...obj2, ...obj3} // spread operator to merge multiple objects
// console.log(mergedObject)

const users = [
    {
        id: 1,
        email: "badal@gmail.com"
    },
    {
        id: 1,
        email: "badal@gmail.com"
    },
    {
        id: 1,
        email: "badal@gmail.com"
    },
    {
        id: 1,
        email: "badal@gmail.com"
    },
    {
        id: 1,
        email: "badal@gmail.com"
    }

]

users[0].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // get all keys of object
// console.log(Object.values(tinderUser)) // get all values of object
// console.log(Object.entries(tinderUser)) // get all entries of object as array of arrays

// console.log(tinderUser.hasOwnProperty("isLoggedIn")) // check if object has specific property




const cource = {
    courcename: "js in hindi",
    price: 299,
    courceInstructor: "hitesh"
}

const{courceInstructor : Instructor} = cource

// console.log(courceInstructor);
console.log(Instructor);

/*
here is a simple example of a navbar component in React that takes a Company prop and displays it.
while this is not directly related to objects in JavaScript, it does demonstrate the use of object destructuring in function parameters.

const navbar = ({Company}) => {
    
}

navbar({Company: "amazon"})

*/


// JSON structure
// {
//     "name": "badal",
//     "age": 22,
//     "isLoggedIn": false,
//     "lastLoggedInDays": ["monday", "tuesday"]
// }

[
    {},
    {},
    {}
]