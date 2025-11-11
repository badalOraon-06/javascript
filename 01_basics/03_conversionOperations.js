let score = undefined

console.log(typeof score);
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "456" => number 456
// "456abc" => NaN
// true => 1 , false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// 1 => true , 0 => false
// "" => false , "abc" => true
// null => false , " " => true
// undefined => false

let someNumber = 33

let stringNumber = string(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// 33 => "33"
// true => "true"
// false => "false"