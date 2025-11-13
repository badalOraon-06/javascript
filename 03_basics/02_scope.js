//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

// global scope notes
// let and const are block scoped means they are only accessible within the block they are defined in
// var is function scoped means they are accessible within the function they are defined in 





function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){ // function declaration
    return num + 1
}



addTwo(5)
const addTwo = function(num){  // function expression 
    return num + 2
}

// difference above two is called hoisting
// function declarations are hoisted
// function expressions are not hoisted

// hoisting means the function can be called before it is defined in the code
// function declarations are stored in the memory during the compile phase
// function expressions are stored in the memory during the execution phase