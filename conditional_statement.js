javascript
// ============================================================
// JAVASCRIPT CONDITIONAL STATEMENTS
// File Name: 03_conditional_statements.js
// ============================================================

// Conditional statements are used to make decisions in JavaScript.
//
// They execute different blocks of code based on whether
// a condition is TRUE or FALSE.
//
// Main conditional statements:
//
// 1. if statement
// 2. if...else statement
// 3. if...else if...else statement
// 4. switch statement
// 5. Nested if statement
// 6. Ternary operator


// ============================================================
// 1. IF STATEMENT
// ============================================================

// The if statement executes a block of code
// ONLY when the condition is true.
//
// Syntax:
//
// if (condition) {
//     statement;
// }


// Example:

let uAge = 25;

if (uAge >= 18) {

    console.log("He is Eligible to Vote");

}


// Step-by-step:
//
// uAge = 25
//
// Condition:
// 25 >= 18
//
// Result:
// true
//
// Therefore, the statement inside the if block executes.


// Example when condition is false:

let studentAge = 15;

if (studentAge >= 18) {

    console.log("Student is eligible to vote");

}

// Nothing will be printed because:
//
// 15 >= 18
// false


// ============================================================
// 2. IF...ELSE STATEMENT
// ============================================================

// if...else is used when we have TWO possible outcomes.
//
// If the condition is TRUE:
//     if block executes
//
// If the condition is FALSE:
//     else block executes.
//
// Syntax:
//
// if (condition) {
//     statement;
// }
// else {
//     statement;
// }


// Example:

let uAge1 = 12;

if (uAge1 >= 18) {

    console.log("He is eligible");

}
else {

    console.log("He is not eligible");

}


// Step-by-step:
//
// uAge1 = 12
//
// 12 >= 18
// false
//
// Therefore, else block executes.
//
// Output:
// He is not eligible


// ============================================================
// 3. BOOLEAN CONDITION WITH IF...ELSE
// ============================================================

// A Boolean value can directly be used as a condition.
//
// true  -> if block executes
// false -> else block executes


let pwd_input = false;

if (pwd_input) {

    console.log("Welcome to Website");

}
else {

    console.log("Password is Incorrect");

}


// Step-by-step:
//
// pwd_input = false
//
// if(false)
//     ↓
// condition is false
//
// Therefore, else block executes.


// ============================================================
// 4. IF...ELSE IF...ELSE
// ============================================================

// When we need to check MULTIPLE conditions,
// we use an else-if ladder.
//
// Syntax:
//
// if (condition1) {
//     statement;
// }
// else if (condition2) {
//     statement;
// }
// else if (condition3) {
//     statement;
// }
// else {
//     statement;
// }


// JavaScript checks the conditions from TOP to BOTTOM.
//
// As soon as one condition becomes true,
// its block executes and the remaining conditions
// are skipped.


// ============================================================
// EXAMPLE: TIME-BASED MESSAGE
// ============================================================

let hour = 15;


// Early Morning: 1 - 6
if (hour >= 1 && hour <= 6) {

    console.log("Early Morning!");

}


// Morning: 7 - 12
else if (hour >= 7 && hour <= 12) {

    console.log("Morning!");

}


// Afternoon: 13 - 17
else if (hour >= 13 && hour <= 17) {

    console.log("Afternoon!");

}


// Evening: 18 - 21
else if (hour >= 18 && hour <= 21) {

    console.log("Evening!");

}


// Night: 22 - 24
else if (hour >= 22 && hour <= 24) {

    console.log("Night!");

}


// Invalid time
else {

    console.log("It is not a valid hour");

}


// IMPORTANT:
//
// In the original code, some conditions were repeated:
//
// hour >= 1 && hour <= 6
//
// for Noon and Night.
//
// That would never correctly identify those times.
//
// Correct time ranges are:
//
// 1 - 6   -> Early Morning
// 7 - 12  -> Morning
// 13 - 17 -> Afternoon
// 18 - 21 -> Evening
// 22 - 24 -> Night


// ============================================================
// 5. SWITCH STATEMENT
// ============================================================

// switch is useful when we compare ONE expression
// against multiple possible values.
//
// Syntax:
//
// switch (expression) {
//
//     case value:
//         statement;
//         break;
//
//     case value:
//         statement;
//         break;
//
//     default:
//         statement;
// }


// Important keywords:
//
// case
//     -> Defines a possible matching value.
//
// break
//     -> Stops the switch after a matching case.
//
// default
//     -> Executes when no case matches.


// ============================================================
// TRAFFIC LIGHT EXAMPLE
// ============================================================

let trafficLight = "red";

switch (trafficLight) {

    case "red":

        console.log("STOP");

        break;


    case "yellow":

        console.log("SLOW DOWN");

        break;


    case "green":

        console.log("GO");

        break;


    default:

        console.log("Invalid Traffic Light");

        break;

}


// Step-by-step:
//
// trafficLight = "red"
//
// JavaScript checks:
//
// "red" === "red"
//       ↓
//      true
//
// Therefore:
//
// STOP
//
// break stops the switch statement.


// ============================================================
// 6. SWITCH FALL-THROUGH
// ============================================================

// Fall-through means multiple cases can execute
// the SAME block of code.
//
// We intentionally omit break between cases.
//
// Example:
//
// Monday, Wednesday and Friday
// are treated as weekdays.
//
// Saturday and Sunday
// are treated as weekends.


// NOTE:
// The original example had:
//
// let day = "jan";
//
// "jan" is not a day name.
//
// Here we use "monday" as a valid example.


let day = "monday";

switch (day) {

    case "monday":

    case "wednesday":

    case "friday":

        console.log("Weekday");

        break;


    case "saturday":

    case "sunday":

        console.log("Weekend");

        break;


    default:

        console.log("Not a valid day");

}


// How fall-through works:
//
// If day = "monday":
//
// case "monday"
//      ↓
// no break
//      ↓
// case "wednesday"
//      ↓
// no break
//      ↓
// case "friday"
//      ↓
// execute console.log("Weekday")
//
// This is intentional fall-through.
//
// IMPORTANT:
// Without break, JavaScript continues executing
// the following cases until it reaches a break
// or the switch ends.


// ============================================================
// 7. NESTED IF
// ============================================================

// A nested if means placing one if statement
// inside another if statement.
//
// It is useful when one condition depends on
// another condition being true.
//
// Example:
//
// if (condition1) {
//
//     if (condition2) {
//
//         statement;
//
//     }
//
// }


// ============================================================
// NESTED IF EXAMPLE
// ============================================================

let age = 18;
let height = 150;
let weight = 55;


if (age >= 18) {

    // First condition:
    // Candidate must be at least 18 years old.

    if (height >= 150) {

        // Second condition:
        // Candidate must have a height of at least 150 cm.

        if (weight >= 50) {

            // Third condition:
            // Candidate must weigh at least 50 kg.

            console.log("You are Selected");

        }

        else {

            console.log("Weight is Not Matched");

        }

    }

    else {

        console.log("Height is Not Matched");

    }

}

else {

    console.log("Age is Not Matched");

}


// Step-by-step:
//
// age = 18
// 18 >= 18 -> true
//
// height = 150
// 150 >= 150 -> true
//
// weight = 55
// 55 >= 50 -> true
//
// All three conditions are true.
//
// Output:
// You are Selected


// ============================================================
// 8. NESTED IF - REAL-WORLD EXAMPLE
// ============================================================

// Login example:
//
// First check username.
// If username is correct,
// then check password.


let username = "ajay";
let password = "12345";


if (username === "ajay") {

    console.log("Username is correct");

    if (password === "12345") {

        console.log("Login Successful");

    }

    else {

        console.log("Incorrect Password");

    }

}

else {

    console.log("Incorrect Username");

}


// ============================================================
// 9. TERNARY OPERATOR
// ============================================================

// Ternary operator is a SHORT FORM of if...else.
//
// Syntax:
//
// condition ? expression1 : expression2
//
// If condition is true:
//     expression1 executes.
//
// If condition is false:
//     expression2 executes.
//
// It is called a TERNARY operator because
// it contains THREE parts:
//
// 1. Condition
// 2. ?
// 3. :


// ============================================================
// TERNARY EXAMPLE
// ============================================================

let pwdInput = true;

pwdInput
    ? console.log("Welcome to Website")
    : console.log("Password is Incorrect");


// Step-by-step:
//
// pwdInput = true
//
// true ?
//     "Welcome to Website"
//     :
//     "Password is Incorrect"
//
// Because the condition is true:
//
// Output:
// Welcome to Website


// ============================================================
// 10. TERNARY WITH VARIABLES
// ============================================================

// Ternary is commonly used to assign a value
// based on a condition.

let userAge = 20;

let votingStatus =
    userAge >= 18
        ? "Eligible to Vote"
        : "Not Eligible to Vote";

console.log(votingStatus);

// Output:
// Eligible to Vote


// ============================================================
// 11. IF...ELSE VS TERNARY
// ============================================================


// Using if...else:

let ageCheck = 20;
let result;


if (ageCheck >= 18) {

    result = "Eligible";

}
else {

    result = "Not Eligible";

}

console.log(result);


// Same logic using ternary:

let ageCheck2 = 20;

let result2 =
    ageCheck2 >= 18
        ? "Eligible"
        : "Not Eligible";

console.log(result2);


// Both produce the same result.
//
// Ternary is useful for simple conditions.
//
// For complex logic, normal if...else
// is usually easier to read.


// ============================================================
// 12. CONDITIONAL STATEMENT SUMMARY
// ============================================================

/*

1. IF
------------------------------------------------

Used when we need to execute code only
when a condition is true.

Example:

if (age >= 18) {
    console.log("Eligible");
}


2. IF...ELSE
------------------------------------------------

Used when there are two possible outcomes.

Example:

if (age >= 18) {
    console.log("Eligible");
}
else {
    console.log("Not Eligible");
}


3. ELSE-IF LADDER
------------------------------------------------

Used when there are multiple conditions.

Example:

if (mark >= 90) {
    console.log("A Grade");
}
else if (mark >= 80) {
    console.log("B Grade");
}
else {
    console.log("C Grade");
}


4. SWITCH
------------------------------------------------

Useful when comparing one value
against multiple fixed values.

Example:

switch (day) {

    case "monday":
        console.log("Weekday");
        break;

    case "sunday":
        console.log("Weekend");
        break;

    default:
        console.log("Invalid Day");
}


5. NESTED IF
------------------------------------------------

An if statement inside another if statement.

Useful when conditions depend on one another.


6. TERNARY
------------------------------------------------

Short form of if...else.

condition ? trueResult : falseResult;


*/


// ============================================================
// 13. PROFESSIONAL BEST PRACTICES
// ============================================================

/*

1. Use === instead of == when possible.

   Good:
   age === 18

   Avoid:
   age == 18


2. Use meaningful condition names.

   Good:
   if (isLoggedIn) {}

   Better than:
   if (x) {}


3. Use curly braces for readability.

   Good:

   if (age >= 18) {
       console.log("Eligible");
   }


4. Use switch when checking one variable
   against many fixed values.

5. Use if...else if when conditions involve
   ranges or complex expressions.

6. Use ternary only for simple conditions.

7. Always remember `break` in switch cases
   unless fall-through is intentional.

*/


// ============================================================
// QUICK INTERVIEW REVISION
// ============================================================

/*

Question:
What is a conditional statement?

Answer:
A conditional statement controls the execution of code
based on whether a condition evaluates to true or false.


Question:
What are the main conditional statements in JavaScript?

Answer:

1. if
2. if...else
3. if...else if...else
4. switch
5. Nested if
6. Ternary operator


Question:
What does break do in switch?

Answer:
It stops execution of the switch statement after
the matching case.


Question:
What is a ternary operator?

Answer:
The ternary operator is a concise way to write
a simple if...else condition.

Syntax:

condition ? trueExpression : falseExpression;


Question:
What is fall-through in switch?

Answer:
Fall-through occurs when a case does not contain
a break statement, allowing execution to continue
into the next case.

*/
