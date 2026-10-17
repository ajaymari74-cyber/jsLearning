// ============================================================
// JAVASCRIPT BASICS
// Variables, Naming Conventions, Datatypes & Comments
// ============================================================


// ============================================================
// 1. VARIABLE NAMING
// ============================================================

// Variable name can contain:
// 1. Letters (A-Z, a-z)
// 2. Numbers (0-9), but NOT as the first character
// 3. Underscore (_)
// 4. Dollar sign ($)

// JavaScript variable names are CASE-SENSITIVE.
// Example:
// lName and LName are two different variables.


// let uName = "ECMA Script";
// console.log(uName);


// ------------------------------------------------------------
// CASE-SENSITIVE
// ------------------------------------------------------------

let lName = "javascript";
let LName = "JavaScript";

console.log(lName, LName);

// Output:
// javascript JavaScript


// ------------------------------------------------------------
// $ and _ are valid characters in variable names
// ------------------------------------------------------------

let $Lname = "Single Page Application";
let _lName = "Multi Page Application";

console.log($Lname, _lName);


// ============================================================
// 2. VARIABLE NAMING CONVENTIONS
// ============================================================

// Naming conventions are standard ways of writing variable names.
// They improve code readability and maintainability.


// ------------------------------------------------------------
// A. Normal / Lowercase
// ------------------------------------------------------------

let newemployeid = 10;


// ------------------------------------------------------------
// B. Camel Case
// ------------------------------------------------------------

// First word starts with lowercase.
// Every next word starts with uppercase.

let newEmployeId = 10;


// Example:
// firstName
// employeeName
// mobileNumber
// totalAmount


// ------------------------------------------------------------
// C. Snake Case / Underscore Case
// ------------------------------------------------------------

// Words are separated using underscore (_).

let new_employe_id = 10;


// Example:
// first_name
// employee_id
// mobile_number


// ------------------------------------------------------------
// D. Pascal Case
// ------------------------------------------------------------

// Every word starts with an uppercase letter.

let NewEmployeId = 10;


// Example:
// EmployeeDetails
// UserProfile
// ProductDetails


// NOTE:
// In JavaScript, PascalCase is commonly used for
// classes and React components.


// ============================================================
// 3. VAR KEYWORD
// ============================================================

// var allows:
// 1. Declaration
// 2. Initialization
// 3. Re-declaration
// 4. Re-assignment

// ------------------------------------------------------------
// Declaration + Initialization
// ------------------------------------------------------------

var age = 30;

console.log(age);


// ------------------------------------------------------------
// Declaration
// ------------------------------------------------------------

var employeeAge;


// ------------------------------------------------------------
// Initialization / Assignment
// ------------------------------------------------------------

employeeAge = 54;

console.log(employeeAge);


// ------------------------------------------------------------
// Re-initialization / Re-assignment
// ------------------------------------------------------------

// Existing variable gets a new value.

employeeAge = 70;

console.log(employeeAge);


// ------------------------------------------------------------
// Re-assignment with a different datatype
// ------------------------------------------------------------

employeeAge = "Eighty";

console.log(employeeAge);


// IMPORTANT:
// var allows the same variable to be declared again.

var age = 100;

console.log(age);

// Output:
// 100


// ============================================================
// 4. LET KEYWORD
// ============================================================

// let was introduced in ES6 (ECMAScript 2015).

// let allows:
// 1. Declaration
// 2. Initialization
// 3. Re-assignment

// let does NOT allow re-declaration
// within the same block.


// ------------------------------------------------------------
// Declaration + Initialization
// ------------------------------------------------------------

let newAge = 54;

console.log(newAge);


// ------------------------------------------------------------
// Re-assignment
// ------------------------------------------------------------

// We can change the value of a let variable.

newAge = 30;

console.log(newAge);


// ------------------------------------------------------------
// Re-declaration is NOT allowed
// ------------------------------------------------------------

// let newAge = 50;

// This produces an error:
// SyntaxError: Identifier 'newAge' has already been declared


// ============================================================
// 5. CONST KEYWORD
// ============================================================

// const is used when the variable should not be re-assigned.

// const requires a value during declaration.

const employeeName = "Ajay";

console.log(employeeName);


// ------------------------------------------------------------
// Re-declaration is NOT allowed
// ------------------------------------------------------------

// const employeeName = "Arun";

// Error:
// SyntaxError: Identifier 'employeeName' has already been declared


// ------------------------------------------------------------
// Re-assignment is NOT allowed
// ------------------------------------------------------------

// employeeName = "Arun";

// Error:
// TypeError: Assignment to constant variable.


// ============================================================
// 6. DIFFERENCE BETWEEN var, let AND const
// ============================================================

/*

    Feature              var       let       const
    ------------------------------------------------
    Declaration           Yes       Yes       Yes
    Initialization        Yes       Yes       Yes
    Re-assignment         Yes       Yes       No
    Re-declaration        Yes       No        No
    Scope                 Function  Block     Block

*/

// Professional recommendation:
//
// Use `const` by default.
// Use `let` when the value needs to change.
// Avoid `var` in modern JavaScript unless you specifically
// need its older behavior.


// ============================================================
// 7. JAVASCRIPT PRINTING / OUTPUT STATEMENTS
// ============================================================


// ------------------------------------------------------------
// console.log()
// ------------------------------------------------------------

// Used mainly for displaying information in the browser
// Developer Console.

console.log("Hello JavaScript");


// ------------------------------------------------------------
// console.error()
// ------------------------------------------------------------

// Used to display error messages.

console.error("This is an error message");


// ------------------------------------------------------------
// console.warn()
// ------------------------------------------------------------

// Used to display warning messages.

console.warn("This is a warning message");


// ------------------------------------------------------------
// console.clear()
// ------------------------------------------------------------

// Clears the browser console.

// console.clear();


// ------------------------------------------------------------
// alert()
// ------------------------------------------------------------

// Displays a popup message to the user.

// alert("Welcome to JavaScript");


// ------------------------------------------------------------
// confirm()
// ------------------------------------------------------------

// Displays a popup with OK and Cancel buttons.

// confirm("Do you want to continue?");


// ------------------------------------------------------------
// prompt()
// ------------------------------------------------------------

// Gets input from the user.

// let userAge = prompt("Enter Your Age:");
// console.log(userAge);


// IMPORTANT:
// prompt() returns the entered value as a STRING.

// Example:
// User enters 25
//
// typeof userAge
// Output:
// "string"


// ------------------------------------------------------------
// document.write()
// ------------------------------------------------------------

// Writes content directly into the webpage.

// document.write("Hello JavaScript");

// NOTE:
// document.write() is generally not recommended for
// modern application development because it can overwrite
// the entire document after the page has loaded.


// ============================================================
// 8. UNDEFINED
// ============================================================

// A variable is undefined when it has been declared
// but has not been assigned a value.

let noValue;

console.log(noValue);

// Output:
// undefined


// We can also explicitly assign undefined.

let anotherValue = undefined;

console.log(anotherValue);


// ============================================================
// 9. NULL
// ============================================================

// null represents an intentional absence of a value.

// It means:
// "There is currently no value."

let emptyValue = null;

console.log(emptyValue);

// Output:
// null


// Example:

let selectedUser = null;

// Later, we can assign a user.

selectedUser = "Ajay";

console.log(selectedUser);


// ============================================================
// 10. BOOLEAN DATATYPE
// ============================================================

// Boolean has only two values:
//
// true
// false

let condition = true;

console.log(condition);


// Change the value

condition = false;

console.log(condition);


// Example:

let isLoggedIn = true;

console.log(isLoggedIn);


// ============================================================
// 11. PRIMITIVE DATATYPES
// ============================================================

// Primitive datatypes store a single/simple value.

// Main JavaScript primitive datatypes:
//
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol


// ============================================================
// 12. NUMBER DATATYPE
// ============================================================

// Number is used for integer and decimal values.

var num = 120;

console.log(num);


// Re-assignment

num = 1.24;

console.log(num);


// Examples:

let age1 = 25;
let salary = 25000;
let percentage = 85.5;


// JavaScript uses the Number datatype for both
// integer and floating-point numbers.


// ============================================================
// 13. STRING DATATYPE
// ============================================================

// String represents text.

// JavaScript supports:
//
// 1. Double quotes ""
// 2. Single quotes ''
// 3. Backticks ``


// ------------------------------------------------------------
// Double quotes
// ------------------------------------------------------------

let userName = "JavaScript is a Scripting Language";

console.log(userName);


// ------------------------------------------------------------
// Single quotes
// ------------------------------------------------------------

userName = 'JavaScript is a Single Threaded Language';

console.log(userName);


// ------------------------------------------------------------
// Template literals / Backticks
// ------------------------------------------------------------

userName = `JavaScript is a Dynamic Language`;

console.log(userName);


// ------------------------------------------------------------
// Template literal example
// ------------------------------------------------------------

let studentName = "Ajay";
let studentAge = 20;

console.log(`My name is ${studentName} and my age is ${studentAge}`);


// Output:
// My name is Ajay and my age is 20


// ============================================================
// 14. NON-PRIMITIVE / REFERENCE DATATYPES
// ============================================================

// Non-primitive datatypes can store collections
// or complex data.

// Common examples:
//
// 1. Array
// 2. Object
// 3. Function


// ============================================================
// 15. ARRAY
// ============================================================

// An Array is used to store multiple values
// inside a single variable.

// Array index starts from 0.

let multipleUsers = [
    "React JS",
    "JavaScript",
    "Facebook",
    "Instagram"
];


// Index:
// 0 -> React JS
// 1 -> JavaScript
// 2 -> Facebook
// 3 -> Instagram


// ------------------------------------------------------------
// Print complete array
// ------------------------------------------------------------

console.log(multipleUsers);


// ------------------------------------------------------------
// Access array values using index
// ------------------------------------------------------------

console.log(multipleUsers[0]);

console.log(multipleUsers[1]);


// Output:
// React JS
// JavaScript


// ------------------------------------------------------------
// Array length
// ------------------------------------------------------------

// length gives the total number of elements.

console.log(multipleUsers.length);

// Output:
// 4


// ------------------------------------------------------------
// Find the last index
// ------------------------------------------------------------

// Array index always starts from 0.
//
// Therefore:
//
// Last index = length - 1

console.log(multipleUsers.length - 1);

// Output:
// 3


// ------------------------------------------------------------
// Find the last value
// ------------------------------------------------------------

console.log(multipleUsers[multipleUsers.length - 1]);

// Output:
// Instagram


// ============================================================
// 16. OBJECT
// ============================================================

// Object is used to store related data
// using key-value pairs.

// Syntax:
//
// let objectName = {
//     key: value
// };


// ------------------------------------------------------------
// Object Example
// ------------------------------------------------------------

let vehicle = {
    vehicleType: "Four Wheeler",
    brand: "BMW",
    price: "1000000",
    fuelType: "Petrol"
};


// Object structure:
//
// vehicleType -> key
// "Four Wheeler" -> value
//
// brand -> key
// "BMW" -> value
//
// price -> key
// "1000000" -> value
//
// fuelType -> key
// "Petrol" -> value


// ------------------------------------------------------------
// Print complete object
// ------------------------------------------------------------

console.log(vehicle);


// ------------------------------------------------------------
// Access object property using dot notation
// ------------------------------------------------------------

console.log(vehicle.brand);

console.log(vehicle.fuelType);

console.log(vehicle.price);


// Output:
//
// BMW
// Petrol
// 1000000


// ============================================================
// 17. OBJECT ACCESS USING BRACKET NOTATION
// ============================================================

// We can also access object properties using [].

console.log(vehicle["brand"]);

console.log(vehicle["fuelType"]);


// Dot notation:
//
// vehicle.brand
//
// Bracket notation:
//
// vehicle["brand"]


// Bracket notation is especially useful when
// the property name is stored inside a variable.

let propertyName = "brand";

console.log(vehicle[propertyName]);

// Output:
// BMW


// ============================================================
// 18. QUICK DATATYPE SUMMARY
// ============================================================

/*

Primitive Datatypes:

1. Number
   Example:
   let age = 20;

2. String
   Example:
   let name = "Ajay";

3. Boolean
   Example:
   let isStudent = true;

4. Undefined
   Example:
   let value;

5. Null
   Example:
   let data = null;

6. BigInt
   Example:
   let bigNumber = 12345678901234567890n;

7. Symbol
   Example:
   let id = Symbol("id");


Non-Primitive / Reference Types:

1. Array
   Example:
   let fruits = ["Apple", "Mango"];

2. Object
   Example:
   let person = {
       name: "Ajay",
       age: 20
   };

3. Function
   Example:
   function greet() {
       console.log("Hello");
   }

*/


// ============================================================
// 19. COMMENTS IN JAVASCRIPT
// ============================================================


// ------------------------------------------------------------
// Single-line Comment
// ------------------------------------------------------------

// This is a single-line comment.
// JavaScript will ignore this line.


// ------------------------------------------------------------
// Multi-line Comment
// ------------------------------------------------------------

/*
   This is a multi-line comment.

   It can contain
   multiple lines of explanation.

   Useful for documentation and notes.
*/


// ============================================================
// 20. PROFESSIONAL BEST PRACTICE
// ============================================================

/*

Recommended modern JavaScript style:

1. Use const when the value does not change.

   const companyName = "Google";


2. Use let when the value can change.

   let age = 20;
   age = 21;


3. Avoid var in modern JavaScript when possible.

4. Use camelCase for normal JavaScript variables.

   let employeeName;
   let mobileNumber;
   let totalAmount;


5. Use meaningful variable names.

   Good:
   let studentAge = 20;

   Bad:
   let x = 20;


6. Use PascalCase mainly for classes and React components.

   class EmployeeDetails {}

   function UserProfile() {}


7. Use comments to explain WHY the code exists,
   not every obvious line.

*/