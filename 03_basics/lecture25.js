// Javascript Execution Contexts and the Call Stack

// Global Execution Context
// This is the default or base context where your code starts executing.

// Function Execution Context
// Each time a function is invoked, a new execution context is created for that function.

// Eval Execution Context
// Code executed inside an eval function also gets its own execution context.

/*

{}  -> Memory Creation Phase / Creation Phase
        in this phase, the JavaScript engine allocates memory for variables and functions.No code is executed in this phase.
   
    -> Execution Phase
        In this phase, the code is executed line by line and the values are assigned to the variables.

*/

/*
when JavaScript code runs, it goes through two main phases for each execution context: the Memory Creation Phase and the Execution Phase.

1 -> Global Eecution 
        -> alocated in this 

2-> Memory Phase
        -> variables and functions are alocated memory
        -> var, let, const = undefined
        -> function = entire function (definition)        

3 -> Execution Phase
        -> line by line execution
        -> assigning values to variables
        -> function invocations
        -> when a function is invoked, a new execution context is created for that function
        -> also get deleted after function execution is completed

  4 -> Function Execution Context
        -> when function is called, a new execution context is created for that function
        -> Memory Phase
                -> variables and functions are alocated memory
                -> var, let, const = undefined
                -> function = entire function (definition)  
        -> Execution Phase
                -> line by line execution of function code

*/
// Example to illustrate Execution Contexts and Call Stack

console.log("Global Execution Context: Start");

var globalVar = "I am a global variable";

function firstFunction() {
    console.log("First Function Execution Context: Start");
    var firstVar = "I am a variable in firstFunction";

    function secondFunction() {
        console.log("Second Function Execution Context: Start");
        var secondVar = "I am a variable in secondFunction";
        console.log(secondVar);
        console.log("Second Function Execution Context: End");
    }

    secondFunction();
    console.log(firstVar);
    console.log("First Function Execution Context: End");
}

firstFunction();
console.log(globalVar);
console.log("Global Execution Context: End");




// call stack
// The call stack is a data structure that keeps track of the execution context in a program. It follows the Last In First Out (LIFO) principle, meaning the last function that was called is the first one to be completed and removed from the stack.

// When a function is invoked, a new execution context is created and pushed onto the call stack. When the function completes its execution, its context is popped off the stack, and control returns to the previous context.

// Example:

function firstFunction() {
    console.log("Inside first function");
    secondFunction(); // Call to second function
    console.log("Exiting first function");
}

function secondFunction() {
    console.log("Inside second function");
    thirdFunction(); // Call to third function
    console.log("Exiting second function");
}

function thirdFunction() {
    console.log("Inside third function");
    // No further function calls here
    console.log("Exiting third function");
}

// Start the execution by calling the first function
firstFunction();

// Call Stack Visualization:
// 1. Global Execution Context
// 2. firstFunction Execution Context (pushed onto stack)
// 3. secondFunction Execution Context (pushed onto stack)
// 4. thirdFunction Execution Context (pushed onto stack)
// 5. thirdFunction completes and is popped off the stack
// 6. secondFunction resumes, completes, and is popped off the stack
// 7. firstFunction resumes, completes, and is popped off the stack
// 8. Back to Global Execution Context




/*

important 

go to browser and inspect -> source -> snippets -> create new snippet -> paste the code and run

there you can see the call stack in action . by clicking on the line numbers you can see the call stack and execution contexts in action
add breakpoints to see how the call stack changes as you step through the code by clicking the "Step over" button (usually represented by an arrow icon).

*/