```javascript
// ============================================================
// JAVASCRIPT ARRAYS - COMPLETE NOTES
// File Name: 06_arrays.js
// ============================================================
//
// An Array is a special data structure used to store
// multiple values inside a single variable.
//
// Example:
//
// let fruits = ["Apple", "Mango", "Orange"];
//
// Index:
//          0        1         2
//          ↓        ↓         ↓
//       Apple     Mango     Orange
//
// IMPORTANT:
// JavaScript arrays are ZERO-INDEXED.
// First element  -> index 0
// Second element -> index 1
// Last index     -> length - 1
//
// ============================================================


// ============================================================
// 1. BASIC ARRAY
// ============================================================

let flavors = [
    "Vanilla",
    "Butterscotch",
    "Lavender",
    "Chocolate"
];

console.log(flavors);


// Access individual elements:

console.log(flavors[0]); // Vanilla

console.log(flavors[1]); // Butterscotch

console.log(flavors[2]); // Lavender

console.log(flavors[3]); // Chocolate


// Array length:

console.log(flavors.length);

// Output:
// 4


// Last element:

console.log(flavors[flavors.length - 1]);

// length = 4
// last index = 4 - 1 = 3
//
// flavors[3] = Chocolate


// ============================================================
// 2. ARRAY CAN STORE DIFFERENT DATA TYPES
// ============================================================

// JavaScript arrays can contain different types of values.

let sample = [
    1,
    "true",
    true,
    null,
    undefined,
    {
        id: 1
    }
];

console.log(sample);


// Array can contain:
//
// Number
// String
// Boolean
// null
// undefined
// Object
// Another Array
// Function
//
// However, in professional applications,
// it is usually better to keep array elements
// logically related.


/*
GOOD:

let scores = [80, 90, 70, 85];


GOOD:

let users = [
    { name: "Ajay", age: 21 },
    { name: "Arun", age: 22 }
];


Less meaningful:

let data = [10, "Ajay", true, null, undefined];

*/


// ============================================================
// 3. ARRAY INDEX
// ============================================================

let fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana"
];

/*
Index:

0 -> Apple
1 -> Mango
2 -> Orange
3 -> Banana
*/

console.log(fruits[0]);

console.log(fruits[3]);


// If index does not exist:

console.log(fruits[10]);

// Output:
// undefined


// ============================================================
// 4. MODIFY ARRAY ELEMENT
// ============================================================

let fruitList = [
    "Apple",
    "Mango",
    "Orange"
];


// Change Mango to Banana:

fruitList[1] = "Banana";

console.log(fruitList);


// Result:
//
// ["Apple", "Banana", "Orange"]


// IMPORTANT:
//
// Arrays are mutable.
//
// Mutable means their contents can be changed
// after the array is created.


// ============================================================
// 5. ARRAY LENGTH
// ============================================================

let numbers = [10, 20, 30, 40, 50];

console.log(numbers.length);

// Output:
// 5


// Last index:

console.log(numbers.length - 1);

// Output:
// 4


// Last value:

console.log(numbers[numbers.length - 1]);

// Output:
// 50


// ============================================================
// 6. ARRAY CONSTRUCTOR
// ============================================================

// Arrays can also be created using the Array constructor.

let newArray = new Array();

newArray[0] = "First";

newArray[1] = "Second";

newArray[2] = "Third";

newArray[3] = "Fourth";

console.log(newArray);


// Modern JavaScript generally prefers:
//
// let newArray = [];
//
// because it is shorter and easier to read.


// ============================================================
// 7. ARRAY CONSTRUCTOR WITH VALUES
// ============================================================

let colors = new Array(
    "Red",
    "Green",
    "Blue"
);

console.log(colors);


// Usually preferred:
//
// let colors = ["Red", "Green", "Blue"];


// ============================================================
// 8. DENSE ARRAY
// ============================================================

// A dense array has values at its indexes
// without intentionally leaving empty slots.

let denseArray = [
    1,
    2,
    3,
    4,
    5
];

console.log(denseArray);


// Conceptually:
//
// index:  0   1   2   3   4
// value:  1   2   3   4   5


// IMPORTANT:
//
// JavaScript arrays are dynamic objects internally.
// Do not rely on a simple "contiguous memory"
// explanation as a JavaScript implementation rule.
//
// The important concept for beginners is:
//
// Dense array -> no empty slots between elements.


// ============================================================
// 9. SPARSE ARRAY
// ============================================================

// A sparse array contains empty slots.

let sparseArray = [
    1,
    ,
    3,
    ,
    5,
    ,
    7
];

console.log(sparseArray);

console.log(sparseArray.length);


// Notice:
//
// index 0 -> 1
// index 1 -> empty
// index 2 -> 3
// index 3 -> empty
// index 4 -> 5
// index 5 -> empty
// index 6 -> 7


// Sparse arrays should generally be avoided
// unless there is a specific reason to use them.


// ============================================================
// 10. ADD ELEMENT - push()
// ============================================================

// push() adds one or more elements
// to the END of an array.
//
// It modifies the original array.
//
// It returns the NEW LENGTH.

let languages = [
    "JavaScript",
    "Java"
];

let newLength = languages.push("Python");

console.log(languages);

console.log(newLength);


// Result:
//
// ["JavaScript", "Java", "Python"]
//
// newLength = 3


// Add multiple values:

languages.push("C", "C++");

console.log(languages);


// ============================================================
// 11. REMOVE ELEMENT - pop()
// ============================================================

// pop() removes the LAST element.
//
// It modifies the original array.
//
// It returns the removed element.

let stack = [
    "First",
    "Second",
    "Third"
];

let removedValue = stack.pop();

console.log(stack);

console.log(removedValue);


// Result:
//
// stack:
// ["First", "Second"]
//
// removedValue:
// "Third"


// Real-world use:
//
// Stack data structure
// Undo functionality
// Removing last cart item


// ============================================================
// 12. ADD ELEMENT - unshift()
// ============================================================

// unshift() adds elements to the BEGINNING.
//
// It returns the new length.

let queue = [
    "Arun",
    "Ajith"
];

queue.unshift("Ajay");

console.log(queue);


// Result:
//
// ["Ajay", "Arun", "Ajith"]


// ============================================================
// 13. REMOVE ELEMENT - shift()
// ============================================================

// shift() removes the FIRST element.
//
// It returns the removed element.

let users = [
    "Ajay",
    "Arun",
    "Ajith"
];

let firstUser = users.shift();

console.log(users);

console.log(firstUser);


// Result:
//
// users:
// ["Arun", "Ajith"]
//
// firstUser:
// "Ajay"


// ============================================================
// 14. PUSH / POP / SHIFT / UNSHIFT
// ============================================================

/*

                    ADD              REMOVE

BEGINNING        unshift()           shift()

END              push()              pop()


Easy memory:

push    -> add at end
pop     -> remove from end

unshift -> add at beginning
shift   -> remove from beginning


*/


// ============================================================
// 15. concat()
// ============================================================

// concat() combines arrays.
//
// It returns a NEW array.
//
// It does NOT modify the original arrays.

let arr1 = [
    1,
    2,
    3
];

let arr2 = [
    4,
    5,
    6
];

let combinedArray = arr1.concat(arr2);

console.log(combinedArray);


// Output:
//
// [1, 2, 3, 4, 5, 6]


console.log(arr1);

console.log(arr2);


// Original arrays remain unchanged.


// concat() can also combine values:

let anotherArray = arr1.concat(10, 20, 30);

console.log(anotherArray);


// ============================================================
// 16. SLICE()
// ============================================================

// slice() extracts a portion of an array.
//
// Syntax:
//
// array.slice(start, end)
//
// IMPORTANT:
// start -> included
// end   -> excluded
//
// It returns a NEW array.
//
// It does NOT modify the original array.

let sliceArray = [
    10,
    20,
    30,
    40,
    50,
    60,
    70
];

let sliceValue = sliceArray.slice(1, 5);

console.log(sliceValue);


// Index:
//
// 0 -> 10
// 1 -> 20  <- start
// 2 -> 30
// 3 -> 40
// 4 -> 50
// 5 -> 60  <- end, excluded
//
// Result:
//
// [20, 30, 40, 50]


// ------------------------------------------------------------
// slice(start)
// ------------------------------------------------------------

let fromIndexOne = sliceArray.slice(1);

console.log(fromIndexOne);


// Result:
//
// [20, 30, 40, 50, 60, 70]


// ------------------------------------------------------------
// slice()
// ------------------------------------------------------------

// Without arguments,
// slice() creates a shallow copy of the array.

let copiedArray = sliceArray.slice();

console.log(copiedArray);


// ============================================================
// 17. SPLICE()
// ============================================================

// splice() is used to:
//
// 1. Add elements
// 2. Remove elements
// 3. Replace elements
//
// IMPORTANT:
//
// splice() MODIFIES the original array.
//
// Syntax:
//
// array.splice(start, deleteCount, item1, item2, ...)


// ------------------------------------------------------------
// Remove elements
// ------------------------------------------------------------

let spliceArray = [
    10,
    20,
    30,
    40,
    50
];

let removedItems = spliceArray.splice(1, 2);

console.log(spliceArray);

console.log(removedItems);


// Start at index 1:
//
// 10, [20, 30], 40, 50
//
// Remove 2 elements.
//
// Result:
//
// spliceArray:
// [10, 40, 50]
//
// removedItems:
// [20, 30]


// ------------------------------------------------------------
// Add elements
// ------------------------------------------------------------

let addArray = [
    10,
    20,
    40
];

addArray.splice(2, 0, 30);

console.log(addArray);


// Result:
//
// [10, 20, 30, 40]


// ------------------------------------------------------------
// Replace elements
// ------------------------------------------------------------

let replaceArray = [
    "Java",
    "Python",
    "PHP"
];

replaceArray.splice(
    1,
    1,
    "JavaScript"
);

console.log(replaceArray);


// Result:
//
// ["Java", "JavaScript", "PHP"]


// ============================================================
// 18. SLICE VS SPLICE
// ============================================================

/*

slice()
------------------------------------------------
Used to copy/extract elements.

Does NOT modify original array.

Returns a new array.


splice()
------------------------------------------------
Used to add/remove/replace elements.

MODIFIES original array.


Memory trick:

SLICE  -> SELECT / COPY
SPLICE -> MODIFY


*/


// ============================================================
// 19. flat()
// ============================================================

// flat() converts nested arrays
// into a flatter array.
//
// Example:

let nestedArray = [
    1,
    2,
    3,
    [
        4,
        5
    ]
];

let flatArray = nestedArray.flat();

console.log(flatArray);


// Result:
//
// [1, 2, 3, 4, 5]


// Multiple levels:

let deeplyNested = [
    1,
    2,
    [
        3,
        4,
        [
            5,
            6
        ]
    ]
];

console.log(deeplyNested.flat());


// Only one level is flattened by default.


// Flatten all levels:

let fullyFlat = deeplyNested.flat(Infinity);

console.log(fullyFlat);


// Result:
//
// [1, 2, 3, 4, 5, 6]


// ============================================================
// 20. fill()
// ============================================================

// fill() replaces array elements with a value.
//
// Syntax:
//
// array.fill(value, start, end)
//
// IMPORTANT:
//
// fill() MODIFIES the original array.
//
// end is excluded.

let fillArray = [
    10,
    20,
    30,
    40,
    50
];

fillArray.fill(101, 1, 5);

console.log(fillArray);


// Result:
//
// [10, 101, 101, 101, 101]


// Explanation:
//
// start = 1
// end = 5
//
// Indexes 1, 2, 3, 4 are changed.
//
// Index 5 does not exist here anyway.


// ============================================================
// 21. join()
// ============================================================

// join() converts an array into a STRING.
//
// The separator can be specified.

let joinArray = [
    1,
    2,
    3,
    4,
    5
];

let joinedValue = joinArray.join("/");

console.log(joinedValue);


// Output:
//
// "1/2/3/4/5"


// Other examples:

console.log(joinArray.join("-"));

console.log(joinArray.join(","));

console.log(joinArray.join(" "));


// Real-world use:
//
// URL creation
// Breadcrumbs
// CSV-like strings
// Displaying list values


// ============================================================
// 22. toString()
// ============================================================

// toString() converts an array to a string.
//
// IMPORTANT:
//
// toString() does NOT accept a separator
// like join().
//
// Array toString() normally behaves similarly
// to joining with commas.

let stringArray = [
    1,
    2,
    3,
    4
];

let stringValue = stringArray.toString();

console.log(stringValue);


// Output:
//
// "1,2,3,4"


// Correct:
//
// join("/") -> "1/2/3/4"
//
// toString("/") does NOT make "/" the separator.


// ============================================================
// 23. DESTRUCTURING
// ============================================================

// Array destructuring allows us to extract
// array values into variables easily.

let destructureArray = [
    10,
    20,
    30,
    40,
    50
];

let [
    a,
    b,
    c,
    d,
    e
] = destructureArray;

console.log(a, b, c, d, e);


// Result:
//
// a = 10
// b = 20
// c = 30
// d = 40
// e = 50


// ============================================================
// 24. DESTRUCTURING WITH REST
// ============================================================

// The rest operator collects remaining values.

let numbersArray = [
    10,
    20,
    30,
    40,
    50,
    60
];

let [
    first,
    second,
    third,
    ...rest
] = numbersArray;

console.log(first);

console.log(second);

console.log(third);

console.log(rest);


// Result:
//
// first  = 10
// second = 20
// third  = 30
// rest   = [40, 50, 60]


// ============================================================
// 25. NESTED ARRAY DESTRUCTURING
// ============================================================

let nestedValues = [
    10,
    20,
    30,
    40,
    [
        50,
        60,
        70,
        80,
        [
            90,
            100
        ]
    ]
];

let [
    value1,
    value2,
    value3,
    value4,
    [
        value5,
        value6,
        value7,
        value8,
        [
            value9,
            value10
        ]
    ]
] = nestedValues;

console.log(
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10
);


// ============================================================
// 26. DESTRUCTURING - SKIPPING VALUES
// ============================================================

let skipArray = [
    10,
    20,
    30,
    40
];

let [
    firstValue,
    ,
    thirdValue
] = skipArray;

console.log(firstValue);

console.log(thirdValue);


// Result:
//
// firstValue = 10
// thirdValue = 30


// ============================================================
// 27. find()
// ============================================================

// find() returns the FIRST element
// that satisfies the condition.
//
// If nothing matches:
//
// undefined


let employees = [

    {
        eName: "Ajay",
        salary: 100000
    },

    {
        eName: "Arun",
        salary: 120000
    },

    {
        eName: "Ajith",
        salary: 150000
    }

];


let employeeFound =
    employees.find(
        employee => employee.salary > 115000
    );

console.log(employeeFound);


// Output:
//
// Arun object
//
// Because Arun is the FIRST employee
// with salary > 115000.


// ============================================================
// 28. filter()
// ============================================================

// filter() returns ALL elements
// that satisfy the condition.
//
// It always returns a NEW ARRAY.

let filteredEmployees =
    employees.filter(
        employee => employee.salary > 115000
    );

console.log(filteredEmployees);


// Result:
//
// [
//     Arun,
//     Ajith
// ]


// ============================================================
// 29. FIND VS FILTER
// ============================================================

/*

find()
------------------------------------------------

Returns the FIRST matching element.

Return type:
Object / value / undefined


filter()
------------------------------------------------

Returns ALL matching elements.

Return type:
Array


Example:

employees.find(e => e.salary > 115000)

-> Arun


employees.filter(e => e.salary > 115000)

-> [Arun, Ajith]


Easy memory:

find   -> Find ONE
filter -> Filter MANY


*/


// ============================================================
// 30. findIndex()
// ============================================================

// findIndex() returns the index
// of the FIRST element matching a condition.
//
// If nothing matches:
//
// -1


let employeeIndex =
    employees.findIndex(
        employee => employee.salary > 115000
    );

console.log(employeeIndex);


// Arun is index 1.
//
// Output:
// 1


// ============================================================
// 31. forEach()
// ============================================================

// forEach() executes a function
// once for every element.
//
// It does NOT create a new array.
//
// It returns undefined.

let fruitNames = [
    "Apple",
    "Watermelon",
    "MuskMelon",
    "Banana"
];


fruitNames.forEach(
    function (currentElement, index, totalArray) {

        console.log(
            currentElement,
            index,
            totalArray
        );

    }
);


// Callback receives:
//
// currentElement -> current value
// index          -> current index
// totalArray     -> original array


// ============================================================
// 32. forEach() - SIMPLE EXAMPLE
// ============================================================

fruitNames.forEach(
    fruit => {

        console.log(
            fruit.toUpperCase()
        );

    }
);


// ============================================================
// 33. forEach() DOES NOT RETURN A NEW ARRAY
// ============================================================

let forEachResult =
    fruitNames.forEach(
        fruit => {

            return fruit;

        }
    );

console.log(forEachResult);


// Output:
//
// undefined


// IMPORTANT:
//
// return inside forEach callback
// does NOT make forEach return an array.


// ============================================================
// 34. map()
// ============================================================

// map() creates a NEW ARRAY.
//
// It transforms every element.
//
// The number of elements normally remains
// the same as the original array.

let mappedFruits =
    fruitNames.map(
        fruit => fruit.toUpperCase()
    );

console.log(mappedFruits);


// Original:
//
// ["Apple", "Watermelon", "MuskMelon", "Banana"]
//
//
// New:
//
// ["APPLE", "WATERMELON", "MUSKMELON", "BANANA"]


// ============================================================
// 35. map() WITH INDEX
// ============================================================

let fruitObjects =
    fruitNames.map(
        (element, index) => {

            return {
                id: index + 1,
                fruit: element
            };

        }
    );

console.log(fruitObjects);


// Result:
//
// [
//   { id: 1, fruit: "Apple" },
//   { id: 2, fruit: "Watermelon" },
//   ...
// ]


// ============================================================
// 36. FOREACH VS MAP
// ============================================================

/*

forEach()
------------------------------------------------

Purpose:
Execute an operation for each element.

Returns:
undefined

Does not create a transformed array.

Example:

arr.forEach(value => {
    console.log(value);
});


map()
------------------------------------------------

Purpose:
Transform every element.

Returns:
NEW ARRAY.

Example:

let newArray =
    arr.map(value => value * 2);


Easy memory:

forEach -> DO SOMETHING
map     -> CREATE NEW ARRAY


Real-world examples:

forEach:
    Display values
    Logging
    Update external UI


map:
    Transform API data
    Create UI data
    Convert objects
    Change values


*/


// ============================================================
// 37. CONDITION WITH MAP
// ============================================================

// map() always returns one output
// for each input element.

let products = [
    "Apple",
    "Orange",
    "Banana",
    "Watermelon"
];

let appleCheck =
    products.map(
        value => value === "Apple"
    );

console.log(appleCheck);


// Result:
//
// [true, false, false, false]


// IMPORTANT:
//
// If your goal is to FIND matching elements,
// use filter() or find(),
// not map().


// ============================================================
// 38. FILTER FOR CONDITION
// ============================================================

let appleFilter =
    products.filter(
        value => value === "Apple"
    );

console.log(appleFilter);


// Result:
//
// ["Apple"]


// One matching value -> find()
//
// Multiple matching values -> filter()


// ============================================================
// 39. METHOD CHAINING
// ============================================================

// Method chaining means calling multiple
// array methods one after another.

let chainFruits = [
    "apple",
    "orange",
    "banana",
    "watermelon"
];


let upperSortedFruits =
    chainFruits
        .map(
            fruit => fruit.toUpperCase()
        )
        .sort();

console.log(upperSortedFruits);


// Flow:
//
// Original array
//      ↓
// map()
//      ↓
// UPPERCASE
//      ↓
// sort()
//      ↓
// Sorted result


// ============================================================
// 40. REDUCE()
// ============================================================

// reduce() reduces an array
// into ONE final value.
//
// Common uses:
//
// Sum
// Product
// Maximum
// Minimum
// Counting
// Grouping
// Creating objects


let numbersForReduce = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
];


let totalValue =
    numbersForReduce.reduce(
        (accumulator, currentElement) => {

            return accumulator + currentElement;

        },
        0
    );

console.log(totalValue);


// Output:
//
// 45


// ============================================================
// 41. REDUCE FLOW
// ============================================================

/*

Initial accumulator = 0

Array:

[1,2,3,4,5,6,7,8,9]


1st:

0 + 1 = 1


2nd:

1 + 2 = 3


3rd:

3 + 3 = 6


4th:

6 + 4 = 10


5th:

10 + 5 = 15


6th:

15 + 6 = 21


7th:

21 + 7 = 28


8th:

28 + 8 = 36


9th:

36 + 9 = 45


Final result:

45


*/


// ============================================================
// 42. REDUCE WITH EMPLOYEES
// ============================================================

let employeeSalaryData = [

    {
        eName: "Ajay",
        salary: 10000
    },

    {
        eName: "Arun",
        salary: 20000
    },

    {
        eName: "Ajith",
        salary: 30000
    }

];


let totalSalary =
    employeeSalaryData.reduce(
        (accumulator, employee) => {

            return accumulator + employee.salary;

        },
        0
    );

console.log(totalSalary);


// Output:
//
// 60000


// ============================================================
// 43. REDUCE TO COUNT VALUES
// ============================================================

let scores = [
    75,
    95,
    80,
    90,
    60,
    55
];


let above80Count =
    scores.reduce(
        (count, score) => {

            if (score > 80) {

                return count + 1;

            }

            return count;

        },
        0
    );

console.log(above80Count);


// Output:
//
// 2
//
// 95 and 90 are above 80.


// ============================================================
// 44. REDUCE - MAXIMUM VALUE
// ============================================================

let marks = [
    75,
    95,
    80,
    90,
    60
];


let maximum =
    marks.reduce(
        (max, current) => {

            return current > max
                ? current
                : max;

        },
        marks[0]
    );

console.log(maximum);


// Output:
//
// 95


// ============================================================
// 45. SORT()
// ============================================================

// sort() sorts array elements.
//
// IMPORTANT:
//
// By default, sort() converts elements
// to strings and sorts them lexicographically.
//
// Therefore:
//
// [10, 2, 5].sort()
//
// may produce:
//
// [10, 2, 5]
//
// rather than numeric ascending order.


// ------------------------------------------------------------
// String sorting
// ------------------------------------------------------------

let names = [
    "Zebra",
    "Apple",
    "Mango",
    "Banana"
];

names.sort();

console.log(names);


// ============================================================
// 46. NUMERIC ASCENDING SORT
// ============================================================

let numberArray = [
    10,
    29,
    200,
    100,
    30,
    6,
    4,
    5
];


let ascending =
    numberArray.sort(
        (a, b) => a - b
    );

console.log(ascending);


// Result:
//
// [4, 5, 6, 10, 29, 30, 100, 200]


// Why a - b?
//
// If result < 0:
// a comes before b
//
// If result > 0:
// b comes before a
//
// If result = 0:
// order remains equivalent


// ============================================================
// 47. NUMERIC DESCENDING SORT
// ============================================================

let descending =
    numberArray.sort(
        (a, b) => b - a
    );

console.log(descending);


// Result:
//
// [200, 100, 30, 29, 10, 6, 5, 4]


// ============================================================
// 48. SORT MODIFIES ORIGINAL ARRAY
// ============================================================

let sortExample = [
    30,
    10,
    20
];

let sortedResult =
    sortExample.sort(
        (a, b) => a - b
    );

console.log(sortExample);

console.log(sortedResult);


// Both refer to the sorted array
// because sort() modifies the original array.


// If you don't want to modify original:
//
// let sortedCopy = [...sortExample]
//     .sort((a, b) => a - b);


// ============================================================
// 49. reverse()
// ============================================================

// reverse() reverses the array.
//
// IMPORTANT:
//
// It modifies the original array.

let reverseArray = [
    10,
    20,
    30,
    40
];

reverseArray.reverse();

console.log(reverseArray);


// Result:
//
// [40, 30, 20, 10]


// ============================================================
// 50. includes()
// ============================================================

// includes() checks whether an array
// contains a specific value.
//
// Returns:
//
// true
// false

let includeArray = [
    10,
    20,
    30,
    40
];

console.log(
    includeArray.includes(30)
);

// true


console.log(
    includeArray.includes(100)
);

// false


// ============================================================
// 51. indexOf()
// ============================================================

// indexOf() returns the FIRST index
// where a value is found.
//
// If not found:
//
// -1

let indexArray = [
    10,
    20,
    30,
    40,
    10
];

console.log(
    indexArray.indexOf(10)
);

// Output:
// 0


console.log(
    indexArray.indexOf(30)
);

// Output:
// 2


console.log(
    indexArray.indexOf(100)
);

// Output:
// -1


// ============================================================
// 52. indexOf() WITH START INDEX
// ============================================================

// Search starts from the given index.

console.log(
    indexArray.indexOf(10, 1)
);


// Search:
//
// index 1 -> 20
// index 2 -> 30
// index 3 -> 40
// index 4 -> 10
//
// Result:
//
// 4


// ============================================================
// 53. NEGATIVE START INDEX
// ============================================================

// Negative start positions count
// from the end of the array.

console.log(
    indexArray.indexOf(10, -2)
);


// Array:
//
// [10,20,30,40,10]
//
// -1 -> index 4
// -2 -> index 3
//
// Search starts around index 3.
//
// Finds 10 at index 4.


// ============================================================
// 54. lastIndexOf()
// ============================================================

// lastIndexOf() searches from RIGHT TO LEFT.
//
// It returns the last matching index.

console.log(
    indexArray.lastIndexOf(10)
);


// Result:
//
// 4


console.log(
    indexArray.lastIndexOf(100)
);

// -1


// ============================================================
// 55. INDEXOF VS LASTINDEXOF
// ============================================================

/*

indexOf()
------------------------------------------------

Search direction:

LEFT -> RIGHT

Returns FIRST matching index.


lastIndexOf()
------------------------------------------------

Search direction:

RIGHT -> LEFT

Returns LAST matching index.


Example:

[10, 20, 10, 30, 10]

indexOf(10)
-> 0

lastIndexOf(10)
-> 4


*/


// ============================================================
// 56. SOME()
// ============================================================

// some() checks whether AT LEAST ONE
// element satisfies a condition.
//
// Returns:
//
// true / false

let someArray = [
    10,
    30,
    20,
    50,
    5
];


let hasEven =
    someArray.some(
        value => value % 2 === 0
    );

console.log(hasEven);


// true
//
// Because 10, 30, 20 and 50 are even.


// ============================================================
// 57. EVERY()
// ============================================================

// every() checks whether ALL elements
// satisfy a condition.
//
// Returns:
//
// true / false

let everyArray = [
    10,
    30,
    20,
    50,
    5
];


let allEven =
    everyArray.every(
        value => value % 2 === 0
    );

console.log(allEven);


// false
//
// Because 5 is not even.


// ============================================================
// 58. SOME VS EVERY
// ============================================================

/*

some()
------------------------------------------------
At least ONE must satisfy condition.


every()
------------------------------------------------
ALL must satisfy condition.


Example:

[2,4,6,7]


some(even)
-> true


every(even)
-> false


Easy memory:

some  -> ANY?
every -> ALL?


*/


// ============================================================
// 59. ARRAY COPY WITH SPREAD
// ============================================================

// Spread operator (...) can copy
// an array into another array.

let hobbies = [
    "Cricket",
    "Football",
    "Coding"
];

let hobbiesCopy = [
    ...hobbies
];

console.log(hobbiesCopy);


// ============================================================
// 60. COMBINE ARRAYS WITH SPREAD
// ============================================================

let hobbies1 = [
    "Cricket",
    "Football",
    "Coding"
];

let hobbies2 = [
    "Singing",
    "Dancing",
    "Reading"
];


let allHobbies = [
    ...hobbies1,
    ...hobbies2
];

console.log(allHobbies);


// Result:
//
// [
//   "Cricket",
//   "Football",
//   "Coding",
//   "Singing",
//   "Dancing",
//   "Reading"
// ]


// ============================================================
// 61. SPREAD VS REST
// ============================================================

/*

SPREAD
------------------------------------------------

Expands values.

Example:

let arr = [1,2,3];

console.log(...arr);


REST
------------------------------------------------

Collects values.

Example:

function test(a, b, ...rest) {

    console.log(rest);

}


Memory:

SPREAD -> Spread OUT
REST   -> Collect the REST


*/


// ============================================================
// 62. REST PARAMETER
// ============================================================

function restParameter(
    first,
    second,
    ...remaining
) {

    console.log(first);

    console.log(second);

    console.log(remaining);

}


restParameter(
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80
);


// Result:
//
// first = 10
// second = 20
// remaining = [30,40,50,60,70,80]


// ============================================================
// 63. ARRAY OF OBJECTS
// ============================================================

// This is one of the MOST IMPORTANT
// real-world array structures.

let employeesData = [

    {
        id: 101,
        name: "Ajay",
        role: "Developer",
        salary: 50000
    },

    {
        id: 102,
        name: "Arun",
        role: "Tester",
        salary: 40000
    },

    {
        id: 103,
        name: "Ajith",
        role: "Developer",
        salary: 60000
    }

];


console.log(employeesData);


// Access first employee:

console.log(
    employeesData[0]
);


// Access first employee name:

console.log(
    employeesData[0].name
);


// Access first employee salary:

console.log(
    employeesData[0].salary
);


// ============================================================
// 64. ARRAY OF OBJECTS WITH MAP
// ============================================================

// Get only employee names.

let employeeNames =
    employeesData.map(
        employee => employee.name
    );

console.log(employeeNames);


// Result:
//
// ["Ajay", "Arun", "Ajith"]


// ============================================================
// 65. ARRAY OF OBJECTS WITH FILTER
// ============================================================

// Get only developers.

let developers =
    employeesData.filter(
        employee =>
            employee.role === "Developer"
    );

console.log(developers);


// Result:
//
// Ajay
// Ajith


// ============================================================
// 66. ARRAY OF OBJECTS WITH FIND
// ============================================================

// Find one employee by ID.

let employeeById =
    employeesData.find(
        employee =>
            employee.id === 102
    );

console.log(employeeById);


// Result:
//
// Arun object


// ============================================================
// 67. ARRAY OF OBJECTS WITH REDUCE
// ============================================================

// Calculate total salary.

let salaryTotal =
    employeesData.reduce(
        (total, employee) => {

            return total + employee.salary;

        },
        0
    );

console.log(salaryTotal);


// Result:
//
// 150000


// ============================================================
// 68. ARRAY METHOD QUICK COMPARISON
// ============================================================

/*

METHOD        PURPOSE                    RETURNS
------------------------------------------------------------

push()        Add at end                New length

pop()         Remove from end            Removed value

unshift()     Add at beginning           New length

shift()       Remove from beginning      Removed value

concat()      Combine arrays             New array

slice()       Extract/copy               New array

splice()      Add/remove/replace         Removed items

flat()        Flatten nested arrays      New array

fill()        Replace values             Modified array

join()        Array -> string            String

toString()    Array -> string            String

find()        First matching value       Value/undefined

findIndex()   First matching index       Index/-1

filter()      All matching values        New array

forEach()     Execute for each           undefined

map()         Transform each             New array

reduce()      Reduce to one result       Any value

sort()        Sort                       Same modified array

reverse()     Reverse                    Same modified array

includes()    Check value                true/false

indexOf()     First index                Index/-1

lastIndexOf() Last index                Index/-1

some()        At least one?              true/false

every()       All?                       true/false


*/


// ============================================================
// 69. MUTATING VS NON-MUTATING METHODS
// ============================================================

/*

MUTATING METHODS
------------------------------------------------

These can modify the original array.

push()
pop()
shift()
unshift()
splice()
sort()
reverse()
fill()


NON-MUTATING / RETURN NEW RESULT
------------------------------------------------

concat()
slice()
map()
filter()
flat()


SEARCH METHODS
------------------------------------------------

find()
findIndex()
includes()
indexOf()
lastIndexOf()
some()
every()


*/


// ============================================================
// 70. REAL WORLD EXAMPLE - SHOPPING CART
// ============================================================

let cart = [

    {
        product: "Laptop",
        price: 50000,
        quantity: 1
    },

    {
        product: "Mouse",
        price: 1000,
        quantity: 2
    },

    {
        product: "Keyboard",
        price: 2000,
        quantity: 1
    }

];


// Calculate total cart price:

let cartTotal =
    cart.reduce(
        (total, item) => {

            return total +
                (item.price * item.quantity);

        },
        0
    );

console.log(cartTotal);


// Calculation:
//
// Laptop:
// 50000 × 1 = 50000
//
// Mouse:
// 1000 × 2 = 2000
//
// Keyboard:
// 2000 × 1 = 2000
//
// Total:
// 54000


// ============================================================
// 71. REAL WORLD EXAMPLE - API DATA
// ============================================================

// In web development, APIs commonly return
// arrays of objects.
//
// Example:

let apiUsers = [

    {
        id: 1,
        name: "Ajay",
        active: true
    },

    {
        id: 2,
        name: "Arun",
        active: false
    },

    {
        id: 3,
        name: "Ajith",
        active: true
    }

];


// Get active users:

let activeUsers =
    apiUsers.filter(
        user => user.active
    );

console.log(activeUsers);


// Get only names:

let activeUserNames =
    activeUsers.map(
        user => user.name
    );

console.log(activeUserNames);


// Flow:
//
// API DATA
//    ↓
// filter()
//    ↓
// Active Users
//    ↓
// map()
//    ↓
// User Names


// ============================================================
// 72. REAL WORLD EXAMPLE - SEARCH
// ============================================================

let searchUsers = [

    "Ajay",
    "Arun",
    "Ajith",
    "Abishek"
];


let searchText = "Aj";

let searchResult =
    searchUsers.filter(
        user =>
            user
                .toLowerCase()
                .includes(
                    searchText.toLowerCase()
                )
    );

console.log(searchResult);


// Result:
//
// ["Ajay", "Ajith"]


// This type of logic is commonly used in:
//
// Search boxes
// User lists
// Product search
// Employee search
// React applications


// ============================================================
// 73. REAL WORLD EXAMPLE - REMOVE DUPLICATES
// ============================================================

// Set can be converted back to an array.

let duplicateNumbers = [
    10,
    20,
    10,
    30,
    20,
    40
];


let uniqueNumbers = [
    ...new Set(duplicateNumbers)
];

console.log(uniqueNumbers);


// Result:
//
// [10,20,30,40]


// ============================================================
// 74. ARRAY CHECKING
// ============================================================

// typeof array returns:
//
// "object"

let checkArray = [1, 2, 3];

console.log(typeof checkArray);

// object


// To properly check an array:

console.log(
    Array.isArray(checkArray)
);

// true


console.log(
    Array.isArray("Hello")
);

// false


// IMPORTANT:
//
// Use Array.isArray()
// when you need to check whether
// a value is an array.


// ============================================================
// 75. CONVERT STRING TO ARRAY
// ============================================================

// split() belongs to String,
// but it is extremely useful when working with arrays.

let sentence =
    "JavaScript is easy";


let words =
    sentence.split(" ");

console.log(words);


// Result:
//
// ["JavaScript", "is", "easy"]


// Reverse process:
//
// array.join(" ")


let newSentence =
    words.join(" ");

console.log(newSentence);


// ============================================================
// 76. ARRAY ITERATION WITH FOR LOOP
// ============================================================

let loopArray = [
    10,
    20,
    30,
    40
];

for (
    let i = 0;
    i < loopArray.length;
    i++
) {

    console.log(loopArray[i]);

}


// Flow:
//
// i = 0 -> array[0]
// i = 1 -> array[1]
// i = 2 -> array[2]
// i = 3 -> array[3]
// i = 4 -> stop


// ============================================================
// 77. for...of
// ============================================================

// for...of directly gives array values.

for (let value of loopArray) {

    console.log(value);

}


// This is cleaner when
// index is not required.


// ============================================================
// 78. for...in
// ============================================================

// for...in gives indexes/keys.
//
// For arrays, for...of is usually preferred
// when you need values.

for (let index in loopArray) {

    console.log(
        index,
        loopArray[index]
    );

}


// ============================================================
// 79. for LOOP VS forEach VS map
// ============================================================

/*

FOR LOOP
------------------------------------------------

Best when:

- You need index control.
- You need break/continue.
- You need custom looping logic.


forEach()
------------------------------------------------

Best when:

- You want to execute something
  for every element.


map()
------------------------------------------------

Best when:

- You want to transform elements
  and create a new array.


Example:

for:
    flexible control


forEach:
    perform action


map:
    transform data


*/


// ============================================================
// 80. COMMON BEGINNER MISTAKES
// ============================================================

/*

MISTAKE 1:
Using map() only for checking conditions.

Instead:

filter() -> multiple matches
find()   -> first match


MISTAKE 2:
Expecting forEach() to return an array.

forEach() returns undefined.


MISTAKE 3:
Forgetting sort() changes the original array.


MISTAKE 4:
Using sort() directly for numbers.

Wrong:

arr.sort();


Correct:

arr.sort((a, b) => a - b);


MISTAKE 5:
Confusing slice() and splice().

slice() -> does not modify original.

splice() -> modifies original.


MISTAKE 6:
Using toString("/") expecting slash separators.

Correct:

arr.join("/");


MISTAKE 7:
Using index instead of length.

Correct:

arr.length


MISTAKE 8:
Forgetting arrays start at index 0.


*/


// ============================================================
// 81. ARRAY METHODS - INTERVIEW REVISION
// ============================================================

/*

Q1. What is an array?

A:
An array is a data structure used to store
multiple values in a single variable.


Q2. Are JavaScript arrays zero-indexed?

A:
Yes.


Q3. What is the first index?

A:
0.


Q4. How do you find the last index?

A:

array.length - 1


Q5. Difference between map and forEach?

A:

map:
Returns a new array.

forEach:
Returns undefined.


Q6. Difference between find and filter?

A:

find:
First matching element.

filter:
All matching elements.


Q7. Difference between slice and splice?

A:

slice:
Does not modify original array.

splice:
Modifies original array.


Q8. How do you sort numbers ascending?

A:

arr.sort((a,b) => a-b);


Q9. How do you check whether an array
contains a value?

A:

arr.includes(value);


Q10. How do you find the first index?

A:

arr.indexOf(value);


Q11. How do you find the last index?

A:

arr.lastIndexOf(value);


Q12. What does reduce() do?

A:
It processes array elements and produces
one final accumulated value.


Q13. What does some() do?

A:
Returns true if at least one element
satisfies the condition.


Q14. What does every() do?

A:
Returns true only if every element
satisfies the condition.


Q15. Does sort() modify the original array?

A:
Yes.


Q16. Does reverse() modify the original array?

A:
Yes.


Q17. Does fill() modify the original array?

A:
Yes.


Q18. How do you check whether a value is an array?

A:

Array.isArray(value);


*/


// ============================================================
// 82. FINAL ARRAY CHEAT SHEET
// ============================================================

/*

CREATE
------------------------------------------------

let arr = [];


ACCESS
------------------------------------------------

arr[0]


LENGTH
------------------------------------------------

arr.length


LAST VALUE
------------------------------------------------

arr[arr.length - 1]


ADD
------------------------------------------------

arr.push(value)
arr.unshift(value)


REMOVE
------------------------------------------------

arr.pop()
arr.shift()


COMBINE
------------------------------------------------

arr.concat(arr2)
[...arr1, ...arr2]


COPY / EXTRACT
------------------------------------------------

arr.slice()


ADD / REMOVE / REPLACE
------------------------------------------------

arr.splice()


SEARCH
------------------------------------------------

arr.includes(value)
arr.indexOf(value)
arr.lastIndexOf(value)


CONDITION SEARCH
------------------------------------------------

arr.find()
arr.findIndex()


FILTER
------------------------------------------------

arr.filter()


TRANSFORM
------------------------------------------------

arr.map()


LOOP
------------------------------------------------

arr.forEach()


CALCULATE / ACCUMULATE
------------------------------------------------

arr.reduce()


CHECK ANY
------------------------------------------------

arr.some()


CHECK ALL
------------------------------------------------

arr.every()


SORT
------------------------------------------------

arr.sort((a,b) => a-b)


REVERSE
------------------------------------------------

arr.reverse()


FLATTEN
------------------------------------------------

arr.flat()


REPLACE VALUES
------------------------------------------------

arr.fill()


ARRAY -> STRING
------------------------------------------------

arr.join()


STRING -> ARRAY
------------------------------------------------

string.split()


COPY / COMBINE
------------------------------------------------

[...arr]


DESTRUCTURE
------------------------------------------------

let [a,b,c] = arr;


CHECK ARRAY
------------------------------------------------

Array.isArray(arr)


*/


// ============================================================
// 83. MOST IMPORTANT METHODS TO MASTER FIRST
// ============================================================

/*

For beginner -> interview -> React development:

LEVEL 1
------------------------------------------------

length
index
push
pop
shift
unshift


LEVEL 2
------------------------------------------------

slice
splice
concat
includes
indexOf


LEVEL 3
------------------------------------------------

forEach
map
filter
find
findIndex


LEVEL 4
------------------------------------------------

reduce
some
every
sort
reverse


LEVEL 5
------------------------------------------------

flat
flatMap
destructuring
spread
rest
Array.isArray


These methods are extremely important
for JavaScript, React and API development.


*/


// ============================================================
// 84. ARRAY LEARNING FLOW
// ============================================================

/*

ARRAY
  ↓
Index
  ↓
length
  ↓
Add / Remove
  ↓
push / pop / shift / unshift
  ↓
Extract / Modify
  ↓
slice / splice
  ↓
Search
  ↓
find / findIndex / includes / indexOf
  ↓
Filter
  ↓
filter
  ↓
Transform
  ↓
map
  ↓
Loop
  ↓
forEach
  ↓
Calculate
  ↓
reduce
  ↓
Condition
  ↓
some / every
  ↓
Sort
  ↓
sort / reverse
  ↓
Advanced
  ↓
flat / destructuring / spread / rest


*/


// ============================================================
// END OF JAVASCRIPT ARRAYS
// ============================================================
```
