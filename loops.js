javascript
// ============================================================
// JAVASCRIPT LOOPS
// File Name: 04_loops.js
// ============================================================

// A loop is used to execute the same block of code
// repeatedly until a specified condition becomes false.
//
// Main loops in JavaScript:
//
// 1. for loop
// 2. while loop
// 3. do...while loop
//
// Loop control statements:
//
// 4. break
// 5. continue


// ============================================================
// 1. FOR LOOP
// ============================================================

// A for loop is commonly used when we know
// how many times we want to execute a block of code.
//
// Syntax:
//
// for (initialization; condition; counter) {
//
//     statement;
//
// }


// How a for loop works:
//
// 1. Initialization -> executed only once
// 2. Condition     -> checked before every iteration
// 3. Statement     -> executes if condition is true
// 4. Counter       -> updates the loop variable
// 5. Condition     -> checked again
//
// This process continues until the condition becomes false.


// ============================================================
// FOR LOOP: PRINT 1 TO 10
// ============================================================

for (let i = 1; i <= 10; i++) {

    console.log(i);

}


// Step-by-step:
//
// i = 1
// 1 <= 10 -> true  -> print 1
//
// i++
// i = 2
// 2 <= 10 -> true  -> print 2
//
// ...
//
// i = 10
// 10 <= 10 -> true -> print 10
//
// i++
// i = 11
// 11 <= 10 -> false
//
// Loop stops.


// ============================================================
// 2. FOR LOOP: PRINT ODD NUMBERS
// ============================================================

// An odd number is a number that is NOT divisible by 2.
//
// Modulus operator (%) returns the remainder.
//
// Example:
//
// 5 % 2 = 1
// 7 % 2 = 1
//
// Therefore:
//
// number % 2 !== 0
//
// means the number is odd.


for (let i = 1; i <= 10; i++) {

    if (i % 2 !== 0) {

        console.log(i);

    }

}


// Output:
//
// 1
// 3
// 5
// 7
// 9


// ============================================================
// 3. FOR LOOP: PRINT EVEN NUMBERS
// ============================================================

// Even numbers are divisible by 2.
//
// Example:
//
// 2 % 2 = 0
// 4 % 2 = 0
// 6 % 2 = 0
//
// Therefore:
//
// number % 2 === 0
//
// means the number is even.


for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {

        console.log(i);

    }

}


// Output:
//
// 2
// 4
// 6
// 8
// 10


// ============================================================
// 4. WHILE LOOP
// ============================================================

// A while loop executes a block of code
// as long as the condition is true.
//
// Syntax:
//
// initialization;
//
// while (condition) {
//
//     statement;
//
//     counter;
//
// }


// Important:
//
// In a while loop, we must update the counter.
//
// Otherwise, the loop may become an INFINITE LOOP.


// ============================================================
// WHILE LOOP: PRINT 10 TO 1
// ============================================================

let val = 10;

while (val >= 1) {

    console.log(val);

    val--;

}


// Step-by-step:
//
// val = 10
// 10 >= 1 -> print 10
// val--
//
// val = 9
// 9 >= 1 -> print 9
// val--
//
// ...
//
// val = 1
// 1 >= 1 -> print 1
// val--
//
// val = 0
// 0 >= 1 -> false
//
// Loop stops.


// ============================================================
// 5. WHILE LOOP: SUM OF DIGITS
// ============================================================

// Problem:
//
// Given:
//
// 1234
//
// Find:
//
// 1 + 2 + 3 + 4 = 10
//
// We can extract the last digit using:
//
// num % 10
//
// Then remove the last digit using:
//
// parseInt(num / 10)


// ============================================================
// DIGIT EXTRACTION CONCEPT
// ============================================================

/*

Initial number:

1234

Step 1:
1234 % 10 = 4

Last digit = 4


Remove last digit:

parseInt(1234 / 10)
= 123


Step 2:

123 % 10 = 3

Last digit = 3


Remove last digit:

parseInt(123 / 10)
= 12


Step 3:

12 % 10 = 2

Last digit = 2


Remove last digit:

parseInt(12 / 10)
= 1


Step 4:

1 % 10 = 1

Last digit = 1


Remove last digit:

parseInt(1 / 10)
= 0


Now num = 0.

Loop stops.

Sum:

4 + 3 + 2 + 1
= 10

*/


// ============================================================
// CODE: SUM OF DIGITS
// ============================================================

let num = 1234;

let sum = 0;


while (num > 0) {

    // Get the last digit.

    let last = num % 10;


    // Remove the last digit.

    num = parseInt(num / 10);


    // Add the extracted digit to sum.

    sum = sum + last;

}


console.log(sum);

// Output:
// 10


// ============================================================
// 6. HOW % AND / WORK WITH DIGITS
// ============================================================

// Example:
//
// let number = 1234;
//
// number % 10
// => 4
//
// number / 10
// => 123.4
//
// parseInt(number / 10)
// => 123


// Another example:
//
// 123 % 10
// => 3
//
// parseInt(123 / 10)
// => 12


// Another example:
//
// 12 % 10
// => 2
//
// parseInt(12 / 10)
// => 1


// Another example:
//
// 1 % 10
// => 1
//
// parseInt(1 / 10)
// => 0


// ============================================================
// 7. DO...WHILE LOOP
// ============================================================

// A do...while loop executes the code FIRST
// and checks the condition AFTER execution.
//
// Syntax:
//
// do {
//
//     statement;
//
//     counter;
//
// } while (condition);


// Important difference:
//
// while:
//     condition -> statement
//
// do...while:
//     statement -> condition


// ============================================================
// DO...WHILE EXAMPLE
// ============================================================

let num1 = 10;

do {

    console.log(num1);

    num1--;

}
while (num1 >= 1);


// Output:
//
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1


// ============================================================
// 8. DO...WHILE EXECUTES AT LEAST ONCE
// ============================================================

// Even if the condition is false,
// the do block executes once.

let testNumber = 20;

do {

    console.log("This statement executes once");

    testNumber++;

}
while (testNumber < 10);


// Why?
//
// testNumber = 20
//
// First:
// do block executes.
//
// Then condition:
//
// 20 < 10
// false
//
// Loop stops.
//
// Output:
//
// This statement executes once


// ============================================================
// 9. BREAK STATEMENT
// ============================================================

// break is used to IMMEDIATELY STOP a loop.
//
// Once break is executed,
// the loop terminates completely.


// ============================================================
// BREAK EXAMPLE
// ============================================================

for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {

        if (i === 10) {

            break;

        }

        console.log(i);

    }

}


// Output:
//
// 2
// 4
// 6
// 8
//
// When i becomes 10:
//
// i === 10 -> true
//
// break executes.
//
// The entire loop stops.
//
// 12, 14, 16, 18 and 20 are NOT printed.


// ============================================================
// 10. CONTINUE STATEMENT
// ============================================================

// continue does NOT stop the entire loop.
//
// It skips the CURRENT iteration
// and moves to the next iteration.


// ============================================================
// CONTINUE EXAMPLE
// ============================================================

for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {

        if (i === 10) {

            continue;

        }

        console.log(i);

    }

}


// Output:
//
// 2
// 4
// 6
// 8
// 12
// 14
// 16
// 18
// 20
//
// When i becomes 10:
//
// i === 10 -> true
//
// continue executes.
//
// 10 is skipped.
//
// The loop continues with 11, 12, 13...
//
// Therefore 12, 14, 16, 18 and 20 are printed.


// ============================================================
// 11. BREAK VS CONTINUE
// ============================================================

/*

BREAK
------------------------------------------------

break completely terminates the loop.

Example:

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}


Output:

1
2
3
4


When i = 5,
the entire loop stops.


CONTINUE
------------------------------------------------

continue skips only the current iteration.

Example:

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}


Output:

1
2
4
5


Only 3 is skipped.
The loop continues.


*/


// ============================================================
// 12. FOR LOOP VS WHILE LOOP
// ============================================================

/*

FOR LOOP
------------------------------------------------

Best when the number of iterations is known.

Example:

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


WHILE LOOP
------------------------------------------------

Best when the number of iterations is not necessarily
known in advance and execution depends on a condition.

Example:

while (userInput !== "exit") {
    // continue processing
}


DO...WHILE LOOP
------------------------------------------------

Best when the code must execute at least once
before checking the condition.

Example:

do {
    // statement
}
while (condition);


*/


// ============================================================
// 13. LOOP CONTROL FLOW
// ============================================================

/*

FOR LOOP:

Initialization
      ↓
Condition
      ↓
  true?
   /   \
 Yes    No
  ↓      ↓
Statement END
  ↓
Counter
  ↓
Condition
  ↓
Repeat


WHILE LOOP:

Initialization
      ↓
Condition
      ↓
  true?
   /   \
 Yes    No
  ↓      ↓
Statement END
  ↓
Counter
  ↓
Condition
  ↓
Repeat


DO...WHILE:

Statement
    ↓
Counter
    ↓
Condition
    ↓
 true?
 /    \
Yes    No
 ↓      ↓
Repeat END

*/


// ============================================================
// 14. IMPORTANT LOOP PRACTICE EXAMPLES
// ============================================================


// ------------------------------------------------------------
// Print numbers from 1 to 5
// ------------------------------------------------------------

for (let i = 1; i <= 5; i++) {

    console.log(i);

}


// ------------------------------------------------------------
// Print numbers from 5 to 1
// ------------------------------------------------------------

for (let i = 5; i >= 1; i--) {

    console.log(i);

}


// ------------------------------------------------------------
// Print even numbers from 1 to 20
// ------------------------------------------------------------

for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {

        console.log(i);

    }

}


// ------------------------------------------------------------
// Print odd numbers from 1 to 20
// ------------------------------------------------------------

for (let i = 1; i <= 20; i++) {

    if (i % 2 !== 0) {

        console.log(i);

    }

}


// ============================================================
// 15. PROFESSIONAL BEST PRACTICES
// ============================================================

/*

1. Always make sure the loop has a valid stopping condition.

2. Update the counter correctly.

3. Avoid unnecessary infinite loops.

4. Use `for` when the number of iterations is predictable.

5. Use `while` when the condition controls the repetition.

6. Use `do...while` when the code must execute at least once.

7. Use `break` when you need to terminate the loop early.

8. Use `continue` when you only want to skip the current iteration.

9. Use meaningful variable names when the loop is complex.

10. Keep loop logic simple and readable.


*/


// ============================================================
// 16. QUICK INTERVIEW REVISION
// ============================================================

/*

Question:
What is a loop?

Answer:
A loop is a control structure used to repeatedly execute
a block of code while a specified condition is satisfied.


Question:
What are the main loops in JavaScript?

Answer:

1. for
2. while
3. do...while


Question:
What is the difference between while and do...while?

Answer:

while checks the condition before execution.

do...while executes the code once before checking
the condition.


Question:
What does break do?

Answer:
break immediately terminates the loop.


Question:
What does continue do?

Answer:
continue skips the current iteration and moves
to the next iteration.


Question:
How do you find the last digit of a number?

Answer:

number % 10


Example:

1234 % 10
=> 4


Question:
How do you remove the last digit?

Answer:

parseInt(number / 10)


Example:

parseInt(1234 / 10)
=> 123


Question:
How do you find the sum of digits?

Example:

1234

1 + 2 + 3 + 4
= 10

Use a while loop with:

number % 10
parseInt(number / 10)


*/

