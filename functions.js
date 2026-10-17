```javascript
// ============================================================
// JAVASCRIPT FUNCTIONS - COMPLETE NOTES
// File Name: 05_functions.js
// ============================================================

// A function is a reusable block of code designed to perform
// a specific task.
//
// Instead of writing the same code multiple times,
// we define it once and call it whenever required.
//
// Basic syntax:
//
// function functionName(parameters) {
//
//     // statements
//
// }


// ============================================================
// 1. WHY DO WE USE FUNCTIONS?
// ============================================================

// Without a function:

console.log("Hello Ajay");
console.log("Hello Arun");
console.log("Hello Abishek");

// If we need the same logic many times,
// repeating code makes the program difficult to maintain.
//
// Functions solve this problem.


// ============================================================
// 2. BASIC FUNCTION
// ============================================================

function sayHello() {

    console.log("Hello Everyone");

}


// Calling / invoking the function:

sayHello();


// IMPORTANT:
//
// Defining a function does NOT execute it.
//
// Function definition:
// function sayHello() {}
//
// Function call:
// sayHello();


// ============================================================
// 3. FUNCTION WITH PARAMETERS
// ============================================================

// Parameters are variables defined inside
// the function declaration.
//
// They receive values when the function is called.

function printUserName(uName, uAge) {

    if (uAge < 22) {

        console.log(`Hi ${uName}, your age is ${uAge}`);

    }

}


// Function calls:

printUserName("AjayMari", 20);

printUserName("Arun", 21);

printUserName("Abishek", 22);

printUserName("Ajith", 23);


// Step-by-step:
//
// printUserName("AjayMari", 20)
//
// uName = "AjayMari"
// uAge  = 20
//
// 20 < 22 -> true
//
// Output:
// Hi AjayMari, your age is 20


// ============================================================
// 4. PARAMETERS VS ARGUMENTS
// ============================================================

// PARAMETERS:
// Variables written in the function definition.
//
// ARGUMENTS:
// Actual values passed when calling the function.


function introduce(name, age) {

    // name and age are PARAMETERS.

    console.log(name, age);

}


introduce("Ajay", 21);

// "Ajay" and 21 are ARGUMENTS.


// Easy way to remember:
//
// function add(a, b) {}
//              ↑  ↑
//          parameters
//
// add(10, 20);
//     ↑   ↑
//   arguments


// ============================================================
// 5. DEFAULT PARAMETERS
// ============================================================

// A default parameter provides a default value
// when the caller does not provide a value.
//
// Syntax:
//
// function functionName(parameter = defaultValue) {}


// Example:

function printUserNameDefault(uName = "Ajes", uAge = 20) {

    console.log(`Hi ${uName}, your age is ${uAge}`);

}


printUserNameDefault("AjayMari", 20);

printUserNameDefault("Arun", 21);


// No age provided:

printUserNameDefault("Abishek");


// Output:
//
// Hi Abishek, your age is 20


// No arguments:

printUserNameDefault();


// Output:
//
// Hi Ajes, your age is 20


// undefined also triggers the default value:

printUserNameDefault(undefined, 20);


// IMPORTANT:
//
// Default parameter is used when the argument is
// undefined or missing.


// ============================================================
// 6. DEFAULT PARAMETERS - REAL WORLD USE
// ============================================================

// Example: user settings

function createUser(name, role = "User") {

    console.log(`Name: ${name}`);
    console.log(`Role: ${role}`);

}


createUser("Ajay");

createUser("Ajay", "Admin");


// Real-world use cases:
//
// API default values
// Function configuration
// Pagination
// User settings
// Optional parameters


// ============================================================
// 7. RETURN STATEMENT
// ============================================================

// return sends a value FROM the function
// back to the place where the function was called.
//
// Syntax:
//
// function functionName() {
//     return value;
// }


// Example:

function findRectArea(length, breadth) {

    return length * breadth;

}


let rectangleArea = findRectArea(20, 10);

console.log(rectangleArea);

// Output:
// 200


// We can also directly use the returned value:

console.log(findRectArea(100, 50));

// Output:
// 5000


// Flow:
//
// findRectArea(20, 10)
//        ↓
// 20 * 10
//        ↓
// return 200
//        ↓
// rectangleArea = 200


// ============================================================
// 8. RETURN STOPS FUNCTION EXECUTION
// ============================================================

function testReturn() {

    console.log("First statement");

    return "Finished";

    // This line will NOT execute.

    // console.log("Second statement");

}


console.log(testReturn());


// Output:
//
// First statement
// Finished


// ============================================================
// 9. MULTIPLE VALUES WITH RETURN
// ============================================================

// A JavaScript function can return only ONE value
// directly.
//
// But that value can be an array or object
// containing multiple values.


// ------------------------------------------------------------
// Returning an Array
// ------------------------------------------------------------

function getEmployeeData() {

    return ["Ajay", 21, "Developer"];

}


console.log(getEmployeeData());


// ------------------------------------------------------------
// Returning an Object
// ------------------------------------------------------------

function getEmployee() {

    return {
        name: "Ajay",
        age: 21,
        role: "Developer"
    };

}


console.log(getEmployee());


// IMPORTANT:
//
// This original style:
//
// return (num ** 3, "Eighty", true, 140)
//
// does NOT return four values.
//
// The comma operator evaluates the expressions
// and returns only the LAST value.
//
// Better:
//
// return {
//     cube: num ** 3,
//     text: "Eighty",
//     status: true,
//     value: 140
// };


// ============================================================
// 10. FUNCTION WITHOUT RETURN
// ============================================================

// A function does not always need to return a value.
//
// It can simply perform an action.

function showMessage() {

    console.log("Non Return Type Function");

}


showMessage();


// If a function has no return statement,
// JavaScript automatically returns undefined.

let noReturn = showMessage();

console.log(noReturn);

// Output:
//
// Non Return Type Function
// undefined


// IMPORTANT:
//
// console.log() and return are DIFFERENT.
//
// console.log():
//     Displays something.
//
// return:
//     Sends a value back to the caller.


// ============================================================
// 11. FUNCTION DECLARATION / NAMED FUNCTION
// ============================================================

// A named function has a function name.
//
// Syntax:
//
// function functionName() {
//
// }


// Example:

function addNumbers(a, b) {

    console.log(a + b);

}


addNumbers(10, 20);


// Advantages:
//
// - Reusable
// - Easy to understand
// - Can be called multiple times
// - Function declarations are hoisted


// ============================================================
// 12. FUNCTION HOISTING
// ============================================================

// Function declarations are hoisted.
//
// This means we can call a function
// before its declaration.

greet();

function greet() {

    console.log("Hello JavaScript");

}


// This works because function declarations
// are hoisted by JavaScript.


// IMPORTANT:
//
// Function expressions and arrow functions
// do NOT behave the same way.


/*
greetUser();

const greetUser = function () {
    console.log("Hello");
};

*/

// This causes an error because the variable
// is in the Temporal Dead Zone until initialization.


// ============================================================
// 13. ANONYMOUS FUNCTION
// ============================================================

// A function without a name is called
// an anonymous function.
//
// Usually it is stored in a variable
// or passed as a callback.

let anonymousFunction = function () {

    console.log("Anonymous Function");

};


anonymousFunction();


// Structure:
//
// let variable = function () {};
//
// The variable becomes the reference
// used to call the function.


// ============================================================
// 14. FUNCTION EXPRESSION
// ============================================================

// A function assigned to a variable
// is called a function expression.

let multiply = function (a, b) {

    return a * b;

};


console.log(multiply(10, 20));

// Output:
// 200


// Function declaration:
//
// function add() {}
//
//
// Function expression:
//
// const add = function () {};


// ============================================================
// 15. ARROW FUNCTION
// ============================================================

// Arrow functions were introduced in ES6.
//
// They provide a shorter syntax for functions.
//
// Normal function:

function normalAdd(a, b) {

    return a + b;

}


// Arrow function:

let arrowAdd = (a, b) => {

    return a + b;

};


console.log(arrowAdd(10, 20));


// ============================================================
// 16. ARROW FUNCTION - IMPLICIT RETURN
// ============================================================

// If an arrow function contains only ONE expression,
// curly braces and return can be removed.

let multiplyArrow = (a, b) => a * b;

console.log(multiplyArrow(20, 30));

// Output:
// 600


// Single parameter:
//
// Parentheses can be omitted for one parameter.

let showName = name => console.log(name);

showName("Ajay");


// No parameters:

let welcome = () => console.log("Welcome");

welcome();


// ============================================================
// 17. NORMAL FUNCTION VS ARROW FUNCTION
// ============================================================

/*

Normal Function:

function add(a, b) {
    return a + b;
}


Arrow Function:

const add = (a, b) => a + b;


Main differences:

1. Syntax
   Arrow functions are shorter.

2. `this`
   Normal functions have their own `this`
   depending on how they are called.

   Arrow functions do NOT create their own `this`.
   They inherit `this` from the surrounding scope.

3. constructor
   Normal functions can be used with `new`
   when designed as constructors.

   Arrow functions cannot be used as constructors.

4. arguments object
   Normal functions have their own `arguments`.

   Arrow functions do not have their own
   `arguments` object.

*/


// ============================================================
// 18. FUNCTION SCOPE
// ============================================================

// Variables declared inside a function
// normally belong to that function's scope.

function scopeExample() {

    let message = "Inside Function";

    console.log(message);

}


scopeExample();


// This would cause an error:
//
// console.log(message);
//
// because message exists only inside
// scopeExample().


// ============================================================
// 19. GLOBAL VS LOCAL SCOPE
// ============================================================

let globalName = "Ajay";


function showScope() {

    let localName = "JavaScript";

    console.log(globalName); // Accessible
    console.log(localName);  // Accessible

}


showScope();


// Outside the function:
//
// globalName -> accessible
//
// localName -> NOT accessible


// ============================================================
// 20. REST PARAMETERS
// ============================================================

// Rest parameter (...) allows a function
// to receive any number of arguments.
//
// Syntax:
//
// function functionName(...values) {}

function calculateTotal(...numbers) {

    let total = 0;

    for (let number of numbers) {

        total += number;

    }

    return total;

}


console.log(calculateTotal(10, 20));

console.log(calculateTotal(10, 20, 30, 40));

console.log(calculateTotal(5, 10, 15, 20, 25));


// Real-world use:
//
// Shopping cart
// Multiple products
// Dynamic API data
// Multiple scores


// ============================================================
// 21. SPREAD OPERATOR WITH FUNCTION
// ============================================================

// Spread (...) expands an array
// into individual arguments.

function addThreeNumbers(a, b, c) {

    return a + b + c;

}


let numbers = [10, 20, 30];

console.log(addThreeNumbers(...numbers));

// Output:
// 60


// Difference:
//
// REST:
// Collects multiple values.
//
// SPREAD:
// Expands multiple values.


// ============================================================
// 22. CALLBACK FUNCTION
// ============================================================

// A callback is a function passed as an argument
// to another function.
//
// The receiving function can execute the callback
// later or immediately.

function processUser(callback) {

    console.log("Processing User...");

    callback();

}


function completed() {

    console.log("User Processing Completed");

}


processUser(completed);


// Flow:
//
// completed function
//       ↓
// passed into processUser
//       ↓
// callback()
//       ↓
// completed() executes


// ============================================================
// 23. HIGHER-ORDER FUNCTION
// ============================================================

// A Higher-Order Function is a function that:
//
// 1. Takes another function as an argument
// OR
// 2. Returns another function
// OR
// 3. Does both


function functionOne() {

    console.log("I am a callback function");

}


function functionTwo(callback) {

    console.log("I am a Higher-Order Function");

    callback();

}


functionTwo(functionOne);


// IMPORTANT:
//
// A callback is the function being passed.
//
// A higher-order function is the function
// receiving or returning another function.


// ============================================================
// 24. IMPORTANT CALLBACK CORRECTION
// ============================================================

// Incorrect concept:
//
// function1(function2());
//
// This CALLS function2 immediately
// and passes its RETURN VALUE.
//
// Correct:
//
// function1(function2);
//
// This passes the FUNCTION itself.


// Example:

function parent(callback) {

    callback();

}


function child() {

    console.log("Child Function");

}


parent(child);


// ============================================================
// 25. HIGHER-ORDER FUNCTION RETURNING A FUNCTION
// ============================================================

function outerFunctionExample() {

    return function () {

        console.log("Returned Function");

    };

}


let returnedFunction = outerFunctionExample();

returnedFunction();


// Here:
//
// outerFunctionExample()
// returns another function.
//
// Therefore:
//
// returnedFunction()
// executes the returned function.


// ============================================================
// 26. IIFE
// ============================================================

// IIFE = Immediately Invoked Function Expression
//
// It is a function that executes immediately
// after it is created.
//
// Syntax:
//
// (function () {
//
// })();


// Example:

(function () {

    console.log("IIFE Function Executed");

})();


// IIFE with parameters:

(function (username, age) {

    console.log("Name:", username);
    console.log("Age:", age);

})("Ajay", 20);


// Real-world use:
//
// - Initialization code
// - Avoiding global variables
// - Creating private scope
// - Older JavaScript module patterns


// ============================================================
// 27. CLOSURE
// ============================================================

// A closure occurs when an inner function
// remembers variables from its outer function
// even after the outer function has finished executing.

function outerFunction() {

    let outerVariable = "I am from outer function";

    function innerFunction() {

        console.log(outerVariable);

    }

    return innerFunction;

}


let inner = outerFunction();

inner();


// Why does this work?
//
// outerFunction() finishes execution.
//
// Normally its local variable would become
// inaccessible.
//
// But innerFunction remembers outerVariable.
//
// This is called CLOSURE.


// ============================================================
// 28. CLOSURE - REAL WORLD COUNTER
// ============================================================

// Closure can be used to create private data.

function createCounter() {

    let count = 0;

    return function () {

        count++;

        return count;

    };

}


let counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4


// `count` cannot be directly accessed outside.
//
// But the returned function can access it.
//
// This is a common real-world use of closures.


// ============================================================
// 29. CURRYING
// ============================================================

// Currying converts a function with multiple arguments
// into a sequence of functions,
// each accepting one argument.
//
// Normal:
//
// add(a, b, c)
//
// Curried:
//
// add(a)(b)(c)


// Example:

function add(a) {

    return function (b) {

        return function (c) {

            return a + b + c;

        };

    };

}


console.log(add(20)(10)(30));

// Output:
// 60


// Step-by-step:
//
// add(20)
//    ↓
// returns function(b)
//
// (10)
//    ↓
// returns function(c)
//
// (30)
//    ↓
// 20 + 10 + 30
//
// = 60


// ============================================================
// 30. CURRYING WITH VARIABLES
// ============================================================

let curry1 = add(100);

let curry2 = curry1(200);

let curryResult = curry2(300);

console.log(curryResult);

// Output:
// 600


// This is useful when some values are known
// before the remaining values are available.


// ============================================================
// 31. GENERATOR FUNCTION
// ============================================================

// A generator function is declared using:
//
// function*
//
// It can pause execution using `yield`.
//
// Syntax:
//
// function* generatorName() {
//
//     yield value;
//
// }


// Example:

function* generatorFunction() {

    yield "First Value";

    yield "Second Value";

    yield "Third Value";

    return "Complete";

}


let generator = generatorFunction();


// next() resumes the generator.

console.log(generator.next());

console.log(generator.next());

console.log(generator.next());

console.log(generator.next());


// Result structure:
//
// {
//     value: "First Value",
//     done: false
// }
//
// ...
//
// Final:
//
// {
//     value: "Complete",
//     done: true
// }


// ============================================================
// 32. GENERATOR - .value
// ============================================================

function* urlGenerator() {

    yield "https://";

    yield "www.gasckk.com/";

    yield "home/";

}


let urlParts = urlGenerator();

console.log(urlParts.next().value);

console.log(urlParts.next().value);

console.log(urlParts.next().value);

console.log(urlParts.next().value);


// The fourth call:
//
// value = undefined
// done = true


// IMPORTANT:
//
// `yield` pauses the generator.
//
// Calling next() continues execution
// until the next yield or return.


// ============================================================
// 33. CALL(), APPLY() AND BIND()
// ============================================================

// call(), apply() and bind() are used to control
// the value of `this` when working with normal functions.
//
// Main difference:
//
// call  -> arguments separately
//
// apply -> arguments as an array
//
// bind  -> returns a new function


// ============================================================
// 34. `this` IN OBJECT METHODS
// ============================================================

let employee = {

    uName: "Ajay M",

    uSalary: 100000,

    introYourself: function (a, b) {

        console.log(this.uName);

        console.log(this.uName + " " + (a + b));

    }

};


employee.introYourself(10, 20);


// Here:
//
// this -> employee
//
// this.uName -> "Ajay M"


// ============================================================
// 35. CALL()
// ============================================================

// call() invokes the function immediately.
//
// Syntax:
//
// function.call(object, arg1, arg2);


// Another employee object:

let employee1 = {

    uName: "Ajith",

    laName: "Kumar"

};


// Use a NORMAL FUNCTION here because
// normal functions receive `this` from call().

function introduceEmployee(a, b) {

    console.log(this.uName);

    console.log(this.uName + " " + this.laName);

    console.log("Total:", a + b);

}


introduceEmployee.call(employee1, 10, 20);


// Output:
//
// Ajith
// Ajith Kumar
// Total: 30


// ============================================================
// 36. APPLY()
// ============================================================

// apply() works like call(),
// but arguments are passed as an ARRAY.
//
// Syntax:
//
// function.apply(object, [arg1, arg2]);

introduceEmployee.apply(employee1, [10, 20]);


// IMPORTANT:
//
// Original style:
//
// introduceEmployee.apply(employee1, 10, 20)
//
// is incorrect.
//
// Correct:
//
// introduceEmployee.apply(employee1, [10, 20]);


// ============================================================
// 37. BIND()
// ============================================================

// bind() does NOT execute the function immediately.
//
// It returns a NEW function
// with `this` permanently associated
// with the supplied object.

let newFunction =
    introduceEmployee.bind(employee1, 10, 20);


newFunction();


// Flow:
//
// bind()
//   ↓
// creates new function
//   ↓
// newFunction()
//   ↓
// executes later


// ============================================================
// 38. CALL VS APPLY VS BIND
// ============================================================

/*

CALL
------------------------------------------------

Executes immediately.

function.call(object, arg1, arg2);


APPLY
------------------------------------------------

Executes immediately.

Arguments are provided as an array.

function.apply(object, [arg1, arg2]);


BIND
------------------------------------------------

Does NOT execute immediately.

Returns a new function.

let newFunction =
    function.bind(object, arg1, arg2);

newFunction();


Easy memory trick:

CALL  -> Call now
APPLY -> Apply now with Array
BIND  -> Bind for later


*/


// ============================================================
// 39. ARROW FUNCTION AND `this`
// ============================================================

// IMPORTANT:
//
// Arrow functions do NOT create their own `this`.
//
// They inherit `this` from the surrounding scope.
//
// Therefore, using call/apply/bind to change
// `this` of an arrow function does NOT work
// the same way as with a normal function.


// Example:

let employeeArrow = {

    uName: "Ajay",

    intro: () => {

        console.log(this.uName);

    }

};


employeeArrow.intro();


// Do NOT use arrow functions as object methods
// when you need `this` to refer to the object.
//
// Better:

let employeeNormal = {

    uName: "Ajay",

    intro: function () {

        console.log(this.uName);

    }

};


employeeNormal.intro();


// Output:
//
// Ajay


// ============================================================
// 40. RECURSION
// ============================================================

// Recursion means a function calls itself.
//
// Every recursive function needs
// a BASE CONDITION to stop recursion.


// Example: countdown

function countdown(number) {

    if (number === 0) {

        return;

    }

    console.log(number);

    countdown(number - 1);

}


countdown(5);


// Output:
//
// 5
// 4
// 3
// 2
// 1


// Flow:
//
// countdown(5)
//     ↓
// countdown(4)
//     ↓
// countdown(3)
//     ↓
// countdown(2)
//     ↓
// countdown(1)
//     ↓
// countdown(0)
//     ↓
// stop


// ============================================================
// 41. RECURSION - FACTORIAL
// ============================================================

// Factorial:
//
// 5! = 5 × 4 × 3 × 2 × 1
//
// 5! = 120

function factorial(number) {

    if (number === 1) {

        return 1;

    }

    return number * factorial(number - 1);

}


console.log(factorial(5));

// Output:
// 120


// ============================================================
// 42. PURE FUNCTION
// ============================================================

// A pure function:
//
// 1. Gives the same output for the same input.
// 2. Does not modify external data/state.
//
// Example:

function addPure(a, b) {

    return a + b;

}


console.log(addPure(10, 20));

console.log(addPure(10, 20));


// Same input:
//
// 10, 20
//
// Always gives:
//
// 30


// Pure functions are useful in:
//
// React
// Redux
// Testing
// Functional programming


// ============================================================
// 43. IMPURE FUNCTION
// ============================================================

// An impure function can depend on
// or modify external state.

let total = 0;

function addToTotal(value) {

    total += value;

}


addToTotal(100);

console.log(total);


// Because the function changes external data,
// it is considered impure.


// ============================================================
// 44. FUNCTION COMPOSITION
// ============================================================

// Function composition means using the output
// of one function as the input of another.

function double(number) {

    return number * 2;

}


function square(number) {

    return number * number;

}


let value = 5;

let doubled = double(value);

let finalValue = square(doubled);

console.log(finalValue);

// 5
// ↓ double
// 10
// ↓ square
// 100


// ============================================================
// 45. FUNCTION AS A FIRST-CLASS VALUE
// ============================================================

// JavaScript treats functions as first-class values.
//
// This means a function can be:
//
// 1. Stored in a variable
// 2. Passed as an argument
// 3. Returned from another function
// 4. Stored inside arrays/objects


// Stored in variable:

let myFunction = function () {

    console.log("Function stored in variable");

};


// Passed as argument:

function execute(callback) {

    callback();

}


execute(myFunction);


// Returned:

function getFunction() {

    return myFunction;

}


let resultFunction = getFunction();

resultFunction();


// ============================================================
// 46. FUNCTION INSIDE AN ARRAY
// ============================================================

let operations = [

    function () {
        console.log("Addition Operation");
    },

    function () {
        console.log("Subtraction Operation");
    }

];


operations[0]();

operations[1]();


// ============================================================
// 47. FUNCTION INSIDE AN OBJECT
// ============================================================

let user = {

    name: "Ajay",

    greet: function () {

        console.log(`Hello ${this.name}`);

    }

};


user.greet();


// A function stored inside an object
// is commonly called a METHOD.


// ============================================================
// 48. METHOD VS FUNCTION
// ============================================================

/*

Function:

function greet() {
    console.log("Hello");
}


Method:

const user = {

    greet: function () {
        console.log("Hello");
    }

};


A method is essentially a function associated
with an object.

*/


// ============================================================
// 49. OPTIONAL PARAMETERS
// ============================================================

// JavaScript does not require every parameter
// to receive a value.
//
// Missing arguments become undefined,
// unless a default value is provided.

function displayUser(name, age) {

    console.log(name);
    console.log(age);

}


displayUser("Ajay");


// Output:
//
// Ajay
// undefined


// ============================================================
// 50. FUNCTION ARGUMENTS OBJECT
// ============================================================

// Normal functions have an `arguments` object.
//
// It contains arguments passed to the function.

function showArguments() {

    console.log(arguments);

}


showArguments(10, 20, 30);


// IMPORTANT:
//
// Arrow functions do not have their own
// `arguments` object.
//
// For modern JavaScript,
// rest parameters are generally preferred.


// ============================================================
// 51. REST PARAMETER VS ARGUMENTS
// ============================================================

function showValues(...values) {

    console.log(values);

}


showValues(10, 20, 30, 40);


// Rest gives a real Array,
// which makes array methods easier to use.


// ============================================================
// 52. FUNCTION TYPES - QUICK COMPARISON
// ============================================================

/*

1. FUNCTION DECLARATION
------------------------------------------------

function add(a, b) {
    return a + b;
}


2. FUNCTION EXPRESSION
------------------------------------------------

const add = function (a, b) {
    return a + b;
};


3. ARROW FUNCTION
------------------------------------------------

const add = (a, b) => a + b;


4. ANONYMOUS FUNCTION
------------------------------------------------

function () {
    // no function name
}


5. CALLBACK FUNCTION
------------------------------------------------

function process(callback) {
    callback();
}


6. HIGHER-ORDER FUNCTION
------------------------------------------------

A function that receives or returns
another function.


7. IIFE
------------------------------------------------

(function () {
    console.log("Run immediately");
})();


8. GENERATOR FUNCTION
------------------------------------------------

function* generate() {
    yield 1;
    yield 2;
}


9. RECURSIVE FUNCTION
------------------------------------------------

function count(n) {

    if (n === 0) return;

    count(n - 1);

}


*/


// ============================================================
// 53. FUNCTION CONCEPTS - REAL WORLD USE CASES
// ============================================================

/*

FUNCTION
------------------------------------------------
Reusable business logic.

Example:
calculateSalary()


PARAMETERS
------------------------------------------------
Accept dynamic input.

Example:
calculateSalary(basicSalary, bonus)


DEFAULT PARAMETERS
------------------------------------------------
Provide fallback values.

Example:
createUser(name, role = "User")


RETURN
------------------------------------------------
Send calculated data back.

Example:
calculateTotal()


CALLBACK
------------------------------------------------
Execute a function after another operation.

Examples:

- API response
- Event handling
- setTimeout
- Array methods


HIGHER-ORDER FUNCTION
------------------------------------------------
Functions that work with other functions.

Examples:

- map()
- filter()
- reduce()
- forEach()


CLOSURE
------------------------------------------------
Maintain private state.

Examples:

- Counters
- Data privacy
- Factory functions
- React hooks concepts


CURRYING
------------------------------------------------
Break a multi-parameter function
into smaller function calls.

Examples:

- Reusable configurations
- Functional programming
- Partial application


GENERATOR
------------------------------------------------
Pause and resume execution.

Examples:

- Iterators
- Lazy data processing
- Controlled sequences


CALL / APPLY / BIND
------------------------------------------------
Control `this` and function invocation.

Examples:

- Method borrowing
- Reusing object methods
- Function binding


RECURSION
------------------------------------------------
Solve problems by breaking them
into smaller versions of themselves.

Examples:

- Tree traversal
- Factorial
- File structures
- Nested data


PURE FUNCTIONS
------------------------------------------------
Predictable and easy to test.

Examples:

- Calculations
- Data transformations
- React-style logic


*/


// ============================================================
// 54. FUNCTION EXECUTION FLOW
// ============================================================

/*

When a function is called:

function add(a, b) {

    return a + b;

}


add(10, 20);


Flow:

1. Function is called
          ↓
2. Arguments are passed
          ↓
3. Parameters receive values
          ↓
   a = 10
   b = 20
          ↓
4. Function body executes
          ↓
5. a + b
          ↓
6. return 30
          ↓
7. Calling code receives 30


*/


// ============================================================
// 55. PROFESSIONAL BEST PRACTICES
// ============================================================

/*

1. Give functions meaningful names.

Good:

calculateTotal()
getUserDetails()
validateEmail()


Avoid:

fun1()
abc()
test()


2. Keep one function focused on one responsibility.

Good:

validateUser()
calculateSalary()
saveUser()


3. Prefer return values for reusable logic.

4. Avoid unnecessary global variables.

5. Use const for function expressions
   when the function reference should not change.

6. Use arrow functions for short callbacks
   and simple functions.

7. Use normal functions when you specifically
   need dynamic `this`.

8. Use default parameters for optional values.

9. Use rest parameters when the number of
   arguments is dynamic.

10. Always provide a base condition in recursion.

11. Use closures carefully when maintaining
    private state.

12. Use === instead of == in normal comparisons.

*/


// ============================================================
// 56. FINAL FUNCTION REVISION
// ============================================================

/*

FUNCTION
    ↓
Reusable block of code


PARAMETER
    ↓
Variable in function definition


ARGUMENT
    ↓
Actual value passed to function


RETURN
    ↓
Sends value back to caller


DEFAULT PARAMETER
    ↓
Fallback value when argument is missing/undefined


FUNCTION DECLARATION
    ↓
Named function


FUNCTION EXPRESSION
    ↓
Function stored in variable


ANONYMOUS FUNCTION
    ↓
Function without a name


ARROW FUNCTION
    ↓
Short function syntax
    + lexical `this`


CALLBACK
    ↓
Function passed to another function


HIGHER-ORDER FUNCTION
    ↓
Receives or returns another function


IIFE
    ↓
Executes immediately


CLOSURE
    ↓
Inner function remembers outer scope


CURRYING
    ↓
f(a,b,c) -> f(a)(b)(c)


GENERATOR
    ↓
function* + yield + next()


CALL
    ↓
Immediate execution + separate arguments


APPLY
    ↓
Immediate execution + array arguments


BIND
    ↓
Returns a new bound function


RECURSION
    ↓
Function calls itself


PURE FUNCTION
    ↓
Same input -> same output
No external side effects


REST
    ↓
Collects arguments


SPREAD
    ↓
Expands values


*/


// ============================================================
// 57. INTERVIEW QUICK QUESTIONS
// ============================================================

/*

Q1. What is a function?

A:
A reusable block of code designed to perform
a specific task.


Q2. What is the difference between parameter
and argument?

A:
Parameter is the variable defined in the function.
Argument is the actual value passed during the call.


Q3. What does return do?

A:
It sends a value back to the caller and
stops execution of that function.


Q4. What is a callback?

A:
A function passed as an argument to another function.


Q5. What is a higher-order function?

A:
A function that accepts another function as an argument
or returns another function.


Q6. What is a closure?

A:
A closure allows an inner function to remember
and access variables from its outer scope.


Q7. What is currying?

A:
Converting a function with multiple arguments
into a sequence of functions accepting arguments
one at a time.


Q8. Difference between call, apply and bind?

A:

call:
    executes immediately,
    arguments separately.

apply:
    executes immediately,
    arguments as an array.

bind:
    returns a new function for later execution.


Q9. What is an arrow function?

A:
A shorter ES6 function syntax that also uses
lexical `this`.


Q10. What is a generator?

A:
A special function that can pause and resume execution
using yield and next().


Q11. What is recursion?

A:
When a function calls itself until a base condition
is reached.


Q12. What is an IIFE?

A:
Immediately Invoked Function Expression.
It executes immediately after being created.


Q13. What is a pure function?

A:
A function that produces the same output for the same
input and does not modify external state.


*/
```
