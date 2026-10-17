javascript
// ============================================================
// JAVASCRIPT OPERATORS
// File Name: 02_operators.js
// ============================================================

// Operators are symbols used to perform operations
// on values and variables.
//
// Main types covered in this file:
//
// 1. Arithmetic Operators
// 2. Increment & Decrement Operators
// 3. Assignment Operators
// 4. Relational / Comparison Operators
// 5. Logical Operators


// ============================================================
// 1. ARITHMETIC OPERATORS
// ============================================================

// Arithmetic operators are used to perform mathematical
// calculations.

// +   Addition
// -   Subtraction
// *   Multiplication
// /   Division
// %   Modulus / Remainder
// **  Exponentiation


console.log(10 + 3);    // Addition       => 13

console.log(10 - 3);    // Subtraction    => 7

console.log(10 * 3);    // Multiplication => 30

console.log(9 / 3);     // Division       => 3

console.log(10 % 3);    // Modulus        => 1
                         // 10 / 3 = 3 remainder 1

console.log(3 ** 3);    // Exponentiation => 27
                         // 3 × 3 × 3 = 27


// ============================================================
// 2. INCREMENT AND DECREMENT OPERATORS
// ============================================================

// Increment (++) increases a value by 1.
//
// Decrement (--) decreases a value by 1.
//
// Increment:
// num++
// ++num
//
// Decrement:
// num--
// --num


// ============================================================
// 3. INCREMENT OPERATOR
// ============================================================

let num = 15;


// ------------------------------------------------------------
// POST-INCREMENT
// ------------------------------------------------------------

// Syntax:
// num++
//
// Meaning:
// 1. Use the current value.
// 2. Perform the operation.
// 3. Increase the value by 1.
//
// Example:
//
// num = 15
// num++
//
// After execution:
// num = 16

num++;


// ------------------------------------------------------------
// PRE-INCREMENT
// ------------------------------------------------------------

// Syntax:
// ++num
//
// Meaning:
// 1. Increase the value by 1.
// 2. Then use the updated value.
//
// Current value:
// num = 16
//
// ++num
//
// New value:
// num = 17

++num;

console.log(num);

// Output:
// 17


// ============================================================
// 4. DECREMENT OPERATOR
// ============================================================

let num1 = 20;


// ------------------------------------------------------------
// POST-DECREMENT
// ------------------------------------------------------------

// Syntax:
// num1--
//
// Current value:
// 20
//
// After decrement:
// 19

num1--;


// ------------------------------------------------------------
// PRE-DECREMENT
// ------------------------------------------------------------

// Syntax:
// --num1
//
// Current value:
// 19
//
// After decrement:
// 18

--num1;

console.log(num1);

// Output:
// 18


// ============================================================
// 5. POST-INCREMENT IN AN EXPRESSION
// ============================================================

// Post-increment means:
//
// 1. Substitute/use the current value.
// 2. Perform the operation.
// 3. Increment the variable.

// Example:

let postNum = 20;

let postResult = postNum++;

// Step 1:
// postResult gets current value = 20
//
// Step 2:
// postNum is incremented.
//
// postNum = 21
//
// Therefore:
//
// postResult = 20
// postNum    = 21

console.log(postNum, postResult);

// Output:
// 21 20


// ------------------------------------------------------------
// Multiple post-increment example
// ------------------------------------------------------------

let num2 = 20;

let result1 = num2++ + num2++;


// Step-by-step:
//
// Initially:
// num2 = 20
//
// First num2++:
// Use 20
// Then num2 becomes 21
//
// Second num2++:
// Use 21
// Then num2 becomes 22
//
// Therefore:
//
// result1 = 20 + 21
// result1 = 41
//
// Final num2 = 22

console.log(num2, result1);

// Output:
// 22 41


// ============================================================
// 6. PRE-INCREMENT IN AN EXPRESSION
// ============================================================

// Pre-increment means:
//
// 1. Increment the variable first.
// 2. Use the updated value.

// Example:

let newNum = 40;

let newNum1 = ++newNum;


// Step-by-step:
//
// Initial:
// newNum = 40
//
// ++newNum:
// newNum = 41
//
// Then the value 41 is assigned to newNum1.
//
// Therefore:
//
// newNum  = 41
// newNum1 = 41

console.log(newNum, newNum1);


// ------------------------------------------------------------
// Multiple pre-increment example
// ------------------------------------------------------------

let newNum2 = 40;

let newResult = ++newNum2 + ++newNum2;


// Step-by-step:
//
// Initial:
// newNum2 = 40
//
// First ++newNum2:
// newNum2 = 41
// Value used = 41
//
// Second ++newNum2:
// newNum2 = 42
// Value used = 42
//
// Therefore:
//
// newResult = 41 + 42
// newResult = 83
//
// Final:
// newNum2 = 42

console.log(newNum2, newResult);

// Output:
// 42 83


// ============================================================
// 7. PRE-DECREMENT AND POST-DECREMENT
// ============================================================

let num4 = 10;


// ------------------------------------------------------------
// PRE-DECREMENT
// ------------------------------------------------------------

// --num4
//
// First decrease the value.
// Then use the updated value.
//
// 10 -> 9

let preDecrementResult = --num4;

console.log(num4, preDecrementResult);

// Output:
// 9 9


// ------------------------------------------------------------
// POST-DECREMENT
// ------------------------------------------------------------

// num4--
//
// First use the current value.
// Then decrease it.
//
// Current:
// 9
//
// Value used:
// 9
//
// After decrement:
// 8

let postDecrementResult = num4--;

console.log(num4, postDecrementResult);

// Output:
// 8 9


// ------------------------------------------------------------
// Combined decrement example
// ------------------------------------------------------------

let num6 = 10;

let decrementResult = --num6 + num6--;


// Step-by-step:
//
// Initial:
// num6 = 10
//
// --num6:
// num6 becomes 9
// Value used = 9
//
// num6--:
// Value used = 9
// Then num6 becomes 8
//
// Therefore:
//
// decrementResult = 9 + 9
// decrementResult = 18
//
// Final:
// num6 = 8

console.log(num6, decrementResult);

// Output:
// 8 18


// ============================================================
// 8. ASSIGNMENT OPERATORS
// ============================================================

// Assignment operators are used to assign or update values.

// =
// +=
// -=
// *=
// /=
// %=
// **=


// ------------------------------------------------------------
// Basic assignment
// ------------------------------------------------------------

let age1 = 20;

age1 = 30;

console.log(age1);

// Output:
// 30


// ------------------------------------------------------------
// Addition assignment +=
// ------------------------------------------------------------

// age1 += 20
//
// Same as:
//
// age1 = age1 + 20

age1 += 20;

console.log(age1);


// ------------------------------------------------------------
// Subtraction assignment -=
// ------------------------------------------------------------

// Same as:
// age1 = age1 - 10

age1 -= 10;

console.log(age1);


// ------------------------------------------------------------
// Multiplication assignment *=
// ------------------------------------------------------------

// Same as:
// age1 = age1 * 3

age1 *= 3;

console.log(age1);


// ------------------------------------------------------------
// Division assignment /=
// ------------------------------------------------------------

// Same as:
// age1 = age1 / 2

age1 /= 2;

console.log(age1);


// ------------------------------------------------------------
// Modulus assignment %=
// ------------------------------------------------------------

// Same as:
// age1 = age1 % 2

age1 %= 2;

console.log(age1);


// ============================================================
// 9. ASSIGNMENT OPERATOR SUMMARY
// ============================================================

/*

Operator    Example       Equivalent

=           x = 10        x = 10

+=          x += 5        x = x + 5

-=          x -= 5        x = x - 5

*=          x *= 5        x = x * 5

/=          x /= 5        x = x / 5

%=          x %= 5        x = x % 5

**=         x **= 2       x = x ** 2

*/


// ============================================================
// 10. RELATIONAL / COMPARISON OPERATORS
// ============================================================

// Comparison operators compare two values.
//
// The result is always:
// true OR false

// <
// <=
// >
// >=
// ==
// ===
// !=
// !==


// ------------------------------------------------------------
// Less than
// ------------------------------------------------------------

console.log(20 < 20);

// false


// ------------------------------------------------------------
// Less than or equal to
// ------------------------------------------------------------

console.log(20 <= 20);

// true


// ------------------------------------------------------------
// Greater than
// ------------------------------------------------------------

console.log(20 > 20);

// false


// ------------------------------------------------------------
// Greater than or equal to
// ------------------------------------------------------------

console.log(20 >= 20);

// true


// ------------------------------------------------------------
// Loose equality ==
// ------------------------------------------------------------

// == compares values after type conversion when necessary.

console.log(20 == 20);

// true


console.log(20 == "20");

// true
//
// Number 20 and String "20"
// are considered equal after type conversion.


// ------------------------------------------------------------
// Strict equality ===
// ------------------------------------------------------------

// === checks BOTH:
//
// 1. Value
// 2. Datatype

console.log(20 === "20");

// false
//
// 20     -> Number
// "20"   -> String
//
// Datatypes are different.


// Professional recommendation:
//
// Prefer === instead of == in most modern JavaScript code.


// ------------------------------------------------------------
// Loose inequality !=
// ------------------------------------------------------------

console.log(20 != 20);

// false


// ------------------------------------------------------------
// Strict inequality !==
// ------------------------------------------------------------

console.log(20 !== "20");

// true
//
// Value may look similar,
// but datatype is different.


// ============================================================
// 11. COMPARISON OPERATOR SUMMARY
// ============================================================

/*

Operator     Meaning

<            Less than

<=           Less than or equal to

>            Greater than

>=           Greater than or equal to

==           Loose equality

===          Strict equality

!=           Loose inequality

!==          Strict inequality

*/


// ============================================================
// 12. LOGICAL OPERATORS
// ============================================================

// Logical operators are mainly used to combine
// multiple conditions.
//
// &&   Logical AND
// ||   Logical OR
// !    Logical NOT


// ============================================================
// 13. LOGICAL AND (&&)
// ============================================================

// AND returns true ONLY when both conditions are true.

/*

Condition 1    Condition 2    Result

true          true            true

true          false           false

false         true            false

false         false           false

*/


// Example:

let age = 30;

console.log(age >= 18 && age <= 30);

// true
//
// 30 >= 18 -> true
// 30 <= 30 -> true
//
// true && true -> true


// ------------------------------------------------------------
// Real-world example
// ------------------------------------------------------------

let idProof = "Aadhaar";

console.log(
    idProof == "Aadhaar" &&
    idProof == "Driving License"
);

// false
//
// One variable cannot be both
// "Aadhaar" AND "Driving License"
// at the same time.


// ============================================================
// 14. LOGICAL OR (||)
// ============================================================

// OR returns true when AT LEAST ONE condition is true.

/*

Condition 1    Condition 2    Result

true          true            true

true          false           true

false         true            true

false         false           false

*/


// Example:

let pwd_input = "12345";

console.log(
    pwd_input == "12345" ||
    pwd_input == "54321"
);

// true


// Change password input:

pwd_input = "54321";

console.log(
    pwd_input == "12345" ||
    pwd_input == "54321"
);

// true
//
// First condition  = false
// Second condition = true
//
// false || true = true


// ------------------------------------------------------------
// Another OR example
// ------------------------------------------------------------

let userName1 = "abc";

console.log(
    pwd_input == "12345" ||
    userName1 == "xus"
);

// false
//
// 54321 == 12345 -> false
// abc == xus     -> false
//
// false || false -> false


// ============================================================
// 15. LOGICAL NOT (!)
// ============================================================

// NOT reverses a boolean value.
//
// true  -> false
// false -> true


console.log(!false);

// true


console.log(!true);

// false


// ------------------------------------------------------------
// Example
// ------------------------------------------------------------

let isLoggedIn = true;

console.log(!isLoggedIn);

// false
//
// isLoggedIn = true
// !true = false


// ============================================================
// 16. IMPORTANT OPERATOR EXAMPLES
// ============================================================

// Arithmetic

console.log(10 + 5);     // 15

// Comparison

console.log(10 > 5);     // true

// Logical AND

console.log(10 > 5 && 20 > 10);   // true

// Logical OR

console.log(10 > 20 || 20 > 10);  // true

// Logical NOT

console.log(!(10 > 20));           // true


// ============================================================
// 17. OPERATOR QUICK REVISION
// ============================================================

/*

ARITHMETIC
------------------------------------------------
+       Addition
-       Subtraction
*       Multiplication
/       Division
%       Remainder
**      Exponentiation


INCREMENT / DECREMENT
------------------------------------------------
++x     Pre-increment
x++     Post-increment
--x     Pre-decrement
x--     Post-decrement


ASSIGNMENT
------------------------------------------------
=       Assignment
+=      Addition assignment
-=      Subtraction assignment
*=      Multiplication assignment
/=      Division assignment
%=      Modulus assignment
**=     Exponentiation assignment


COMPARISON
------------------------------------------------
<       Less than
<=      Less than or equal
>       Greater than
>=      Greater than or equal
==      Loose equality
===     Strict equality
!=      Loose inequality
!==     Strict inequality


LOGICAL
------------------------------------------------
&&      AND
||      OR
!       NOT


IMPORTANT:
Comparison and logical operators return
a Boolean value:

true
or
false

*/



