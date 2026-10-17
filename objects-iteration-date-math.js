
/*
===========================================================
                 JAVASCRIPT OBJECTS
            COMPLETE PROFESSIONAL NOTES
===========================================================

OBJECT:
-------
An object is a collection of related data and behavior
stored using KEY-VALUE pairs.

Syntax:

let objectName = {

    key: value,

    key: value,

    method: function () {

    }
};


REAL-WORLD EXAMPLE:
-------------------

A software developer has:

    name
    age
    email
    skills
    salary
    address

Instead of creating separate variables:

let name = "Ajay";
let age = 21;
let role = "Developer";

We can group related information:

let developer = {

    name: "Ajay",
    age: 21,
    role: "Developer"

};


OBJECT = DATA + BEHAVIOR

Data:
    properties

Behavior:
    methods

===========================================================
*/


// =========================================================
// 1. CREATING AN OBJECT
// =========================================================

let userProfile = {

    username: "Ajay",

    age: 21,

    hairColor: "Black",

    eyeColor: "Brown",

    // A function inside an object is called a METHOD.
    eat: function () {

        console.log("I am going to eat ice cream");

        return "Vanilla Ice Cream";

    }

};


// Accessing properties

console.log(userProfile.username);

console.log(userProfile.age);

console.log(userProfile.hairColor);

console.log(userProfile.eyeColor);


// Calling method

let iceCreamType = userProfile.eat();

console.log(iceCreamType);


/*
IMPORTANT:

Property:
    username
    age
    hairColor

Method:
    eat()

A method is simply a function associated with an object.
*/


// =========================================================
// 2. OBJECT PROPERTY
// =========================================================

let employee = {

    name: "Ajay",

    age: 21,

    salary: 30000

};


// Here:
//
// name   -> property
// age    -> property
// salary -> property


console.log(employee.name);

console.log(employee.salary);


// =========================================================
// 3. DOT NOTATION
// =========================================================

/*

Syntax:

object.property

*/

console.log(employee.name);

console.log(employee.age);

console.log(employee.salary);


/*
DOT NOTATION is best when:

    Property name is known.
    Property name is a valid JavaScript identifier.

Example:

employee.name
employee.salary
employee.age
*/


// =========================================================
// 4. BRACKET NOTATION
// =========================================================

/*

Syntax:

object["property"]

*/

console.log(employee["name"]);

console.log(employee["age"]);

console.log(employee["salary"]);


/*
Both are equivalent:

employee.name

employee["name"]


BUT bracket notation becomes important
when the property name is dynamic.
*/


// =========================================================
// 5. PROPERTY NAME WITH SPACE
// =========================================================

let vehicle = {

    vehicleType: "Four Wheeler",

    price: 20000,

    fuelType: "Petrol",

    "seater Type": ["Two", "Three", "Four"]

};


console.log(vehicle.vehicleType);

console.log(vehicle.price);

console.log(vehicle.fuelType);


// Property contains SPACE:

console.log(vehicle["seater Type"]);


/*
This is invalid:

vehicle.seater Type

because JavaScript interprets it incorrectly.


Therefore:

vehicle["seater Type"]

is required.
*/


// Access array inside object

console.log(vehicle["seater Type"][0]);

console.log(vehicle["seater Type"][2]);


// =========================================================
// 6. DOT VS BRACKET NOTATION
// =========================================================

/*

DOT NOTATION
--------------------------------

object.property


Advantages:

    Short
    Easy to read
    Common for normal properties


Example:

user.name


BRACKET NOTATION
--------------------------------

object["property"]


Advantages:

    Dynamic property names
    Spaces in property names
    Special characters
    Variables as property names


Example:

user["first name"]

let key = "name";

user[key]


*/


// =========================================================
// 7. DYNAMIC PROPERTY ACCESS
// =========================================================

let person = {

    name: "Ajay",

    age: 21,

    role: "Developer"

};


let propertyName = "name";


// Dynamic access

console.log(person[propertyName]);


/*
propertyName contains:

"name"

Therefore:

person[propertyName]

becomes:

person["name"]

Output:

Ajay
*/


// =========================================================
// 8. MODIFY OBJECT PROPERTY
// =========================================================

let employeeData = {

    name: "Ajay",

    age: 21,

    salary: 25000

};


// Modify existing property

employeeData.name = "Ajay Mari";

employeeData.salary = 50000;


console.log(employeeData);


// Objects are MUTABLE.


// =========================================================
// 9. ADD NEW PROPERTY
// =========================================================

employeeData.department = "IT";

employeeData.location = "Tamil Nadu";


console.log(employeeData);


/*
We can add properties after object creation.

This is called:

DYNAMIC PROPERTY ADDITION.
*/


// =========================================================
// 10. DELETE PROPERTY
// =========================================================

delete employeeData.age;


console.log(employeeData);


/*
Syntax:

delete object.property;


Important:

delete removes the property completely.

It does NOT simply change the value to undefined.
*/


// =========================================================
// 11. SHORTHAND PROPERTY
// =========================================================

let userName = "Ajay";

let userAge = 21;


// Old syntax:

let personOld = {

    userName: userName,

    userAge: userAge

};


// Modern JavaScript:

let personNew = {

    userName,

    userAge

};


console.log(personNew);


/*
PROPERTY SHORTHAND

When:

property name === variable name

we can write only the variable name.
*/


// =========================================================
// 12. COMPUTED / DYNAMIC PROPERTY
// =========================================================

let employeeId = "employeeId";

let employeeDetails = {

    name: "Ajay",

    age: 21,

    [employeeId]: "EMP101"

};


console.log(employeeDetails);


/*
Computed property:

[employeeId]

JavaScript evaluates employeeId first.

employeeId = "employeeId"

Therefore:

[employeeId]

becomes:

employeeId:


Useful for:

    Dynamic forms
    API data
    Database mapping
    Configuration objects
    Dynamic keys
*/


// =========================================================
// 13. NESTED OBJECT
// =========================================================

let employeeInfo = {

    employeeId: 101,

    name: "Ajay",

    role: "Software Developer",

    address: {

        city: "Madurai",

        state: "Tamil Nadu",

        country: "India"

    }

};


console.log(employeeInfo.name);

console.log(employeeInfo.address);

console.log(employeeInfo.address.city);

console.log(employeeInfo.address.state);

console.log(employeeInfo.address.country);


/*
STRUCTURE:

employeeInfo
    |
    |-- employeeId
    |-- name
    |-- role
    |
    |-- address
          |
          |-- city
          |-- state
          |-- country


Real-world use:

User profile
    ↓
Address
    ↓
City
    ↓
State
*/


// =========================================================
// 14. OBJECT + ARRAY
// =========================================================

let developer = {

    name: "Ajay",

    skills: [

        "Java",

        "JavaScript",

        "React",

        "SQL",

        "Flutter"

    ]

};


console.log(developer.skills);

console.log(developer.skills[0]);

console.log(developer.skills[2]);


/*
Objects can contain:

    arrays
    objects
    functions
    strings
    numbers
    booleans
*/


// =========================================================
// 15. ARRAY OF OBJECTS
// =========================================================

/*
VERY IMPORTANT FOR REAL-WORLD DEVELOPMENT.

APIs commonly return:

ARRAY
   ↓
OBJECT
   ↓
PROPERTIES
*/

let employees = [

    {
        id: 101,
        name: "Ajay",
        salary: 30000
    },

    {
        id: 102,
        name: "Arun",
        salary: 40000
    },

    {
        id: 103,
        name: "Ajith",
        salary: 50000
    }

];


console.log(employees);

console.log(employees[0]);

console.log(employees[0].name);

console.log(employees[1].salary);


/*
employees[0]
    ↓
first object

employees[0].name
    ↓
Ajay
*/


// =========================================================
// 16. LOOP THROUGH ARRAY OF OBJECTS
// =========================================================

for (let employee of employees) {

    console.log(employee.name);

    console.log(employee.salary);

}


/*
This pattern is extremely common in:

    React
    REST APIs
    Node.js
    Database results
    Admin dashboards
*/


// =========================================================
// 17. OBJECT METHODS
// =========================================================

let calculator = {

    number1: 10,

    number2: 20,

    add: function () {

        return this.number1 + this.number2;

    },

    multiply: function () {

        return this.number1 * this.number2;

    }

};


console.log(calculator.add());

console.log(calculator.multiply());


/*
METHOD:

add()
multiply()


THIS:

this.number1
this.number2

refer to the current object.

calculator.number1
calculator.number2
*/


// =========================================================
// 18. `this` KEYWORD
// =========================================================

let user = {

    name: "Ajay",

    age: 21,

    greet: function () {

        console.log(`Hello ${this.name}`);

    }

};


user.greet();


/*
Inside:

user.greet()


this refers to:

user


Therefore:

this.name

means:

user.name
*/


// =========================================================
// 19. MODERN OBJECT METHOD SYNTAX
// =========================================================

let userAccount = {

    name: "Ajay",

    greet() {

        console.log(`Hello ${this.name}`);

    }

};


userAccount.greet();


/*
Old:

greet: function() {}

Modern:

greet() {}

Modern syntax is shorter and commonly used.
*/


// =========================================================
// 20. OBJECT DESTRUCTURING
// =========================================================

let developerDetails = {

    name: "Ajay",

    age: 21,

    role: "Java Full Stack Developer"

};


let {

    name,

    age,

    role

} = developerDetails;


console.log(name);

console.log(age);

console.log(role);


/*
Instead of:

developerDetails.name
developerDetails.age
developerDetails.role


We extract them directly.

This is called:

OBJECT DESTRUCTURING.
*/


// =========================================================
// 21. DESTRUCTURING WITH RENAMING
// =========================================================

let studentDetails = {

    name: "Ajay",

    age: 21

};


let {

    name: studentName,

    age: studentAge

} = studentDetails;


console.log(studentName);

console.log(studentAge);


/*
Original property:

name

New variable:

studentName
*/


// =========================================================
// 22. DESTRUCTURING WITH DEFAULT VALUE
// =========================================================

let account = {

    name: "Ajay"

};


let {

    name: accountName,

    role = "User"

} = account;


console.log(accountName);

console.log(role);


/*
role does not exist in the object.

Therefore default value is used:

User
*/


// =========================================================
// 23. REST IN OBJECT DESTRUCTURING
// =========================================================

let employeeObject = {

    id: 101,

    name: "Ajay",

    age: 21,

    role: "Developer"

};


let {

    id,

    name: employeeName,

    ...otherDetails

} = employeeObject;


console.log(id);

console.log(employeeName);

console.log(otherDetails);


/*
otherDetails contains remaining properties.

Useful when:

    Removing selected properties
    Keeping remaining API data
    React state updates
*/


// =========================================================
// 24. OBJECT.KEYS()
// =========================================================

let employeeObject2 = {

    name: "Ajay",

    age: 21,

    role: "Developer"

};


let keys = Object.keys(employeeObject2);


console.log(keys);


/*
Output:

[
    "name",
    "age",
    "role"
]


Object.keys()
    ↓
returns ARRAY of keys.
*/


// =========================================================
// 25. OBJECT.VALUES()
// =========================================================

let values = Object.values(employeeObject2);


console.log(values);


/*
Output:

[
    "Ajay",
    21,
    "Developer"
]


Object.values()
    ↓
returns ARRAY of values.
*/


// =========================================================
// 26. OBJECT.ENTRIES()
// =========================================================

let entries = Object.entries(employeeObject2);


console.log(entries);


/*
Output:

[
    ["name", "Ajay"],
    ["age", 21],
    ["role", "Developer"]
]


Each item:

[key, value]
*/


// =========================================================
// 27. OBJECT.FROMENTRIES()
// =========================================================

let employeeEntries = [

    ["name", "Ajay"],

    ["age", 21],

    ["role", "Developer"]

];


let convertedObject =
    Object.fromEntries(employeeEntries);


console.log(convertedObject);


/*
Object.entries()
    ↓
Object → Array


Object.fromEntries()
    ↓
Array → Object
*/


// =========================================================
// 28. FOR...IN LOOP
// =========================================================

let employeeLoop = {

    name: "Ajay",

    age: 21,

    role: "Developer"

};


for (let key in employeeLoop) {

    console.log(key);

}


/*
Output:

name
age
role


for...in
    ↓
iterates through OBJECT KEYS.
*/


// =========================================================
// 29. FOR...IN - KEY + VALUE
// =========================================================

for (let key in employeeLoop) {

    console.log(

        key,

        ":",

        employeeLoop[key]

    );

}


/*
Why:

employeeLoop[key]

?

If:

key = "name"

then:

employeeLoop[key]

becomes:

employeeLoop["name"]

which gives:

Ajay
*/


// =========================================================
// 30. FOR...OF VS FOR...IN
// =========================================================

/*

FOR...IN
-----------------------

Used mainly for OBJECT KEYS.

Example:

for (let key in object) {

}


FOR...OF
-----------------------

Used for ITERABLE values.

Examples:

Array
String
Map
Set

Example:

for (let value of array) {

}


Easy memory:

IN  -> keys
OF  -> values


*/


// =========================================================
// 31. OBJECT.ASSIGN()
// =========================================================

let employeeA = {

    id: 101,

    name: "Ajay"

};


Object.assign(

    employeeA,

    {

        age: 21,

        role: "Developer"

    }

);


console.log(employeeA);


/*
Object.assign(target, source)

Copies source properties into target.
*/


// =========================================================
// 32. OBJECT.ASSIGN() - COPY
// =========================================================

let original = {

    name: "Ajay",

    age: 21

};


let copied = Object.assign({}, original);


console.log(copied);


/*
{}:
    New target object

original:
    Source object


This creates a SHALLOW COPY.
*/


// =========================================================
// 33. OBJECT SPREAD
// =========================================================

let employeeOriginal = {

    id: 101,

    name: "Ajay",

    role: "Developer"

};


let employeeUpdated = {

    ...employeeOriginal,

    salary: 50000

};


console.log(employeeUpdated);


/*
Spread operator:

...object

copies enumerable properties into a new object.


Very common in:

    React
    Redux
    State updates
    API transformations
*/


// =========================================================
// 34. UPDATE OBJECT WITHOUT MUTATING ORIGINAL
// =========================================================

let userOriginal = {

    name: "Ajay",

    age: 21

};


let userUpdated = {

    ...userOriginal,

    age: 22

};


console.log(userOriginal);

console.log(userUpdated);


/*
Original remains:

age = 21


New object:

age = 22


This approach is important in React state management.
*/


// =========================================================
// 35. SHALLOW COPY
// =========================================================

let userOne = {

    name: "Ajay",

    address: {

        city: "Madurai"

    }

};


let userTwo = {

    ...userOne

};


userTwo.name = "Arun";


// Nested object is shared.

userTwo.address.city = "Chennai";


console.log(userOne);

console.log(userTwo);


/*
IMPORTANT:

Spread creates only a SHALLOW COPY.

Top-level values are copied.

Nested objects are still references.

Structure:

userOne
   |
   |-- address ─────┐
                    |
userTwo             |
   |                |
   |-- address ─────┘


Therefore changing:

userTwo.address.city

can also affect:

userOne.address.city
*/


// =========================================================
// 36. DEEP COPY
// =========================================================

/*
For simple JSON-compatible data,
structuredClone() can create a deep copy.
*/

let originalUser = {

    name: "Ajay",

    address: {

        city: "Madurai"

    }

};


let deepCopiedUser =
    structuredClone(originalUser);


deepCopiedUser.address.city = "Chennai";


console.log(originalUser);

console.log(deepCopiedUser);


/*
Now nested objects are also copied.

Original:

Madurai

Copied:

Chennai
*/


// =========================================================
// 37. SHALLOW VS DEEP COPY
// =========================================================

/*

SHALLOW COPY
--------------------------------

Only top-level properties are copied.

Examples:

{
    ...object
}

Object.assign({}, object)


Nested objects remain shared.


DEEP COPY
--------------------------------

Nested objects are copied too.

Example:

structuredClone(object)


Use deep copy when independent nested data
is required.


IMPORTANT:

structuredClone() supports many JavaScript values,
but not every possible object type or browser-specific
host object. Use it when the data structure is compatible.
*/


// =========================================================
// 38. OPTIONAL CHAINING ?.
// =========================================================

let customer = {

    name: "Ajay",

    address: {

        city: "Madurai"

    }

};


console.log(customer.address?.city);


/*
Optional chaining:

?.

It safely accesses nested properties.

If something is:

null
or
undefined

JavaScript stops and returns undefined
instead of throwing an error.
*/


let customer2 = {

    name: "Ajay"

};


console.log(customer2.address?.city);


/*
Without optional chaining:

customer2.address.city

would cause an error because address is undefined.
*/


// =========================================================
// 39. OPTIONAL CHAINING WITH METHOD
// =========================================================

let accountUser = {

    name: "Ajay"

};


accountUser.login?.();


/*
If login exists:

    login() executes.

If login does not exist:

    undefined is returned instead of an error.
*/


// =========================================================
// 40. NULLISH COALESCING ??
// =========================================================

/*
?? provides a fallback only when the value is:

null
or
undefined.
*/

let userCity = null;


let finalCity = userCity ?? "Madurai";


console.log(finalCity);


/*
Output:

Madurai
*/


// =========================================================
// 41. || VS ??
// =========================================================

let score = 0;


console.log(score || 100);

console.log(score ?? 100);


/*
|| considers these values as false/falsy:

false
0
""
null
undefined
NaN


Therefore:

0 || 100

returns:

100


But:

0 ?? 100

returns:

0


Because 0 is NOT null or undefined.


This difference is very important in real applications.
*/


// =========================================================
// 42. PROPERTY EXISTENCE - `in`
// =========================================================

let product = {

    name: "Laptop",

    price: 50000

};


console.log("name" in product);

console.log("brand" in product);


/*
in checks whether the property exists
on the object or its prototype chain.
*/


// =========================================================
// 43. OBJECT.HASOWN()
// =========================================================

console.log(Object.hasOwn(product, "name"));

console.log(Object.hasOwn(product, "brand"));


/*
Object.hasOwn()

checks whether the object itself directly owns
the property.


Difference:

in
    ↓
object + prototype chain

Object.hasOwn()
    ↓
own property only
*/


// =========================================================
// 44. OBJECT.FREEZE()
// =========================================================

let frozenUser = {

    name: "Ajay",

    age: 21

};


Object.freeze(frozenUser);


frozenUser.name = "Arun";

frozenUser.salary = 50000;

delete frozenUser.age;


console.log(frozenUser);


/*
Object.freeze()

Prevents:

    Modification
    Addition
    Deletion


The object becomes read-only at its current level.
*/


// =========================================================
// 45. OBJECT.ISFROZEN()
// =========================================================

console.log(Object.isFrozen(frozenUser));


/*
Returns:

true
or
false
*/


// =========================================================
// 46. OBJECT.SEAL()
// =========================================================

let sealedUser = {

    name: "Ajay",

    age: 21

};


Object.seal(sealedUser);


// Existing property can be changed.

sealedUser.age = 22;


// New property cannot be added.

sealedUser.salary = 50000;


// Existing property cannot be deleted.

delete sealedUser.name;


console.log(sealedUser);


/*
SEAL:

Modify existing -> YES

Add property    -> NO

Delete property -> NO
*/


// =========================================================
// 47. FREEZE VS SEAL
// =========================================================

/*

                    FREEZE       SEAL

Modify value        NO           YES

Add property        NO           NO

Delete property     NO           NO


FREEZE:
    Stronger protection.

SEAL:
    Structure protected,
    existing values can change.


*/


// =========================================================
// 48. OBJECT.CREATE()
// =========================================================

/*
Object.create()

Creates a new object whose prototype is
the object passed to Object.create().
*/

let personBase = {

    name: "Ajay",

    age: 21

};


let personChild =
    Object.create(personBase);


personChild.role = "Developer";


console.log(personChild.name);

console.log(personChild.age);

console.log(personChild.role);


/*
personChild directly owns:

role


But it inherits:

name
age

from personBase.
*/


// =========================================================
// 49. PROTOTYPE CHAIN
// =========================================================

/*

personChild
     ↓
personBase
     ↓
Object.prototype
     ↓
null


When JavaScript searches for a property:

1. Check personChild.
2. If not found, check personBase.
3. If not found, check Object.prototype.
4. If not found, return undefined.


This is called:

PROTOTYPE CHAIN.
*/


// =========================================================
// 50. OBJECT.GETPROTOTYPEOF()
// =========================================================

console.log(

    Object.getPrototypeOf(personChild)

);


/*
Returns the prototype of the object.

Preferred standard API for inspecting prototypes.
*/


// =========================================================
// 51. HASOWNPROPERTY VS OBJECT.HASOWN
// =========================================================

let testObject = {

    name: "Ajay"

};


console.log(

    Object.hasOwn(testObject, "name")

);


console.log(

    testObject.hasOwnProperty("name")

);


/*
Both commonly check own properties.

Modern code can prefer:

Object.hasOwn(object, property)


because it works safely even when the object
does not inherit directly from Object.prototype.
*/


// =========================================================
// 52. GETTERS
// =========================================================

/*
A getter allows a method-like calculation
to be accessed like a property.
*/

let employeeSalary = {

    firstName: "Ajay",

    lastName: "Mari",

    get fullName() {

        return this.firstName + " " + this.lastName;

    }

};


console.log(employeeSalary.fullName);


/*
Notice:

employeeSalary.fullName

NOT:

employeeSalary.fullName()


Because it is a getter.
*/


// =========================================================
// 53. SETTERS
// =========================================================

let employeeUser = {

    name: "Ajay",

    set updateName(newName) {

        this.name = newName;

    }

};


employeeUser.updateName = "Arun";


console.log(employeeUser.name);


/*
Setter allows controlled assignment.

Syntax:

set property(value) {

}


Useful for:

    Validation
    Data formatting
    Controlled updates
*/


// =========================================================
// 54. GETTER + SETTER REAL-WORLD EXAMPLE
// =========================================================

let bankAccount = {

    _balance: 10000,

    get balance() {

        return this._balance;

    },

    set balance(amount) {

        if (amount >= 0) {

            this._balance = amount;

        }

    }

};


console.log(bankAccount.balance);


bankAccount.balance = 15000;


console.log(bankAccount.balance);


/*
Getter:

    Reading data


Setter:

    Updating data with validation


This pattern is useful for controlled object state.
*/


// =========================================================
// 55. PROPERTY DESCRIPTORS
// =========================================================

let descriptorUser = {

    name: "Ajay"

};


console.log(

    Object.getOwnPropertyDescriptor(

        descriptorUser,

        "name"

    )

);


/*
A property descriptor can contain:

value
writable
enumerable
configurable


Example concept:

{
    value: "Ajay",
    writable: true,
    enumerable: true,
    configurable: true
}


These control how the property behaves.
*/


// =========================================================
// 56. DEFINEPROPERTY()
// =========================================================

let customObject = {};


Object.defineProperty(

    customObject,

    "name",

    {

        value: "Ajay",

        writable: false,

        enumerable: true,

        configurable: false

    }

);


console.log(customObject.name);


/*
writable: false

means the value cannot normally be changed.

defineProperty() is useful when
fine-grained property control is required.
*/


// =========================================================
// 57. JSON OBJECT
// =========================================================

/*
JSON:

JavaScript Object Notation

Used heavily for communication between:

Frontend
    ↕
Backend
    ↕
Database/API


Example JSON-like data:
*/

let apiUser = {

    id: 101,

    name: "Ajay",

    role: "Developer"

};


// JavaScript object → JSON string

let jsonData = JSON.stringify(apiUser);


console.log(jsonData);


/*
Output:

{"id":101,"name":"Ajay","role":"Developer"}
*/


// JSON string → JavaScript object

let parsedData = JSON.parse(jsonData);


console.log(parsedData);

console.log(parsedData.name);


/*
IMPORTANT:

JSON.stringify()
    ↓
Object → String


JSON.parse()
    ↓
String → Object
*/


// =========================================================
// 58. JSON REAL-WORLD API FLOW
// =========================================================

/*

Frontend
    |
    | HTTP Request
    ↓
Backend
    |
    | JSON Response
    ↓
Frontend
    |
    ↓
JSON.parse()
    |
    ↓
JavaScript Object
    |
    ↓
Display in UI


Modern fetch() automatically provides
convenient JSON parsing through:

response.json()

*/


// =========================================================
// 59. OBJECT COMPARISON
// =========================================================

let objectOne = {

    name: "Ajay"

};


let objectTwo = {

    name: "Ajay"

};


console.log(objectOne === objectTwo);


/*
Output:

false


WHY?

Objects are compared by REFERENCE,
not by their contents.


objectOne
    ↓
Memory location A


objectTwo
    ↓
Memory location B


Even though data is same,
references are different.
*/


// =========================================================
// 60. SAME OBJECT REFERENCE
// =========================================================

let objectThree = {

    name: "Ajay"

};


let objectFour = objectThree;


console.log(objectThree === objectFour);


/*
Output:

true


Both variables point to the SAME object.
*/


objectFour.name = "Arun";


console.log(objectThree.name);


/*
Output:

Arun


Because both variables reference
the same object.
*/


// =========================================================
// 61. OBJECT MUTABILITY
// =========================================================

let mutableUser = {

    name: "Ajay"

};


mutableUser.name = "Arun";


console.log(mutableUser);


/*
Objects are mutable by default.

Properties can generally be:

    Added
    Updated
    Deleted


unless the object is protected using mechanisms
such as freeze/seal or property descriptors.
*/


// =========================================================
// 62. OBJECT IMMUTABILITY PATTERN
// =========================================================

let originalProfile = {

    name: "Ajay",

    age: 21

};


let newProfile = {

    ...originalProfile,

    age: 22

};


console.log(originalProfile);

console.log(newProfile);


/*
Instead of modifying original:

originalProfile.age = 22;


Create a new object:

{
    ...originalProfile,
    age: 22
}


This pattern is very important in React.
*/


// =========================================================
// 63. OBJECT METHOD + THIS
// =========================================================

let developerAccount = {

    firstName: "Ajay",

    lastName: "Mari",

    getFullName() {

        return this.firstName + " " + this.lastName;

    }

};


console.log(developerAccount.getFullName());


/*
`this` refers to the object through which
the method is called.


developerAccount.getFullName()

this
 ↓
developerAccount
*/


// =========================================================
// 64. NORMAL FUNCTION VS ARROW FUNCTION AS METHOD
// =========================================================

let normalMethodObject = {

    name: "Ajay",

    greet: function () {

        console.log(this.name);

    }

};


normalMethodObject.greet();


/*
Normal function:

this
 ↓
object calling the method
*/


// Arrow function:

let arrowMethodObject = {

    name: "Ajay",

    greet: () => {

        console.log(this.name);

    }

};


arrowMethodObject.greet();


/*
IMPORTANT:

Arrow functions do NOT create their own `this`.

They inherit `this` from the surrounding scope.

Therefore, avoid arrow functions for object methods
when you need:

this.property


Use a normal method/function instead.
*/


// =========================================================
// 65. OBJECT CLONING
// =========================================================

let sourceUser = {

    name: "Ajay",

    age: 21

};


// Method 1: Spread

let cloneOne = {

    ...sourceUser

};


// Method 2: Object.assign()

let cloneTwo = Object.assign({}, sourceUser);


// Method 3: structuredClone()

let cloneThree = structuredClone(sourceUser);


console.log(cloneOne);

console.log(cloneTwo);

console.log(cloneThree);


/*
Spread:
    Short and modern.

Object.assign():
    Older but still useful.

structuredClone():
    Deep clone for supported data structures.
*/


// =========================================================
// 66. OBJECT PROPERTY ORDER
// =========================================================

let orderedObject = {

    name: "Ajay",

    age: 21,

    role: "Developer"

};


console.log(Object.keys(orderedObject));


/*
Modern JavaScript defines property enumeration
ordering rules, but when working with objects,
do not use object key order as a replacement
for an ordered data structure.

If strict ordering is the main requirement,
use an Array or another suitable collection.
*/


// =========================================================
// 67. OBJECT AS A DICTIONARY / LOOKUP
// =========================================================

let statusMessages = {

    success: "Operation successful",

    error: "Something went wrong",

    pending: "Processing..."

};


let currentStatus = "success";


console.log(statusMessages[currentStatus]);


/*
This is much cleaner than many if/else statements
when values are simply mapped to messages.

Useful for:

    Status codes
    Labels
    Configuration
    Translation
    Lookup tables
*/


// =========================================================
// 68. OBJECT + FUNCTION - REAL-WORLD USER
// =========================================================

let applicationUser = {

    id: 101,

    name: "Ajay",

    email: "ajay@example.com",

    role: "Developer",

    login() {

        console.log(

            `${this.name} logged in successfully`

        );

    },

    logout() {

        console.log(

            `${this.name} logged out successfully`

        );

    }

};


applicationUser.login();

applicationUser.logout();


/*
This represents a realistic object:

DATA:
    id
    name
    email
    role

BEHAVIOR:
    login()
    logout()
*/


// =========================================================
// 69. OBJECT + NESTED OBJECT + ARRAY
// =========================================================

let completeProfile = {

    id: 101,

    name: "Ajay",

    contact: {

        email: "ajay@example.com",

        phone: "9876543210"

    },

    skills: [

        "Java",

        "JavaScript",

        "React",

        "SQL"

    ],

    address: {

        city: "Madurai",

        state: "Tamil Nadu",

        country: "India"

    }

};


console.log(completeProfile.contact.email);

console.log(completeProfile.skills[1]);

console.log(completeProfile.address.city);


/*
This structure is similar to data received
from real-world APIs.
*/


// =========================================================
// 70. OBJECT DESTRUCTURING IN FUNCTION PARAMETER
// =========================================================

function displayEmployee({ name, role, age }) {

    console.log(name);

    console.log(role);

    console.log(age);

}


let employeeForFunction = {

    name: "Ajay",

    role: "Developer",

    age: 21

};


displayEmployee(employeeForFunction);


/*
Instead of:

function displayEmployee(employee) {

    console.log(employee.name);

}


We directly destructure:

function displayEmployee({ name, role, age })


This is commonly used in React components.
*/


// =========================================================
// 71. OBJECT RETURN FROM FUNCTION
// =========================================================

function createEmployee() {

    return {

        id: 101,

        name: "Ajay",

        role: "Developer"

    };

}


let createdEmployee = createEmployee();


console.log(createdEmployee);


/*
Functions can return objects.

This is useful for:

    Factory functions
    API transformation
    Data creation
    Service logic
*/


// =========================================================
// 72. FACTORY FUNCTION
// =========================================================

function createUser(name, role) {

    return {

        name: name,

        role: role,

        login() {

            console.log(`${this.name} logged in`);

        }

    };

}


let userOne = createUser(

    "Ajay",

    "Developer"

);


let userTwo = createUser(

    "Arun",

    "Tester"

);


userOne.login();

userTwo.login();


/*
A factory function creates and returns objects.

This pattern is useful when multiple objects
have the same structure and behavior.
*/


// =========================================================
// 73. PROPERTY SHORTHAND IN FACTORY FUNCTION
// =========================================================

function createDeveloper(name, role) {

    return {

        name,

        role,

        experience: 0

    };

}


console.log(

    createDeveloper(

        "Ajay",

        "Java Full Stack Developer"

    )

);


/*
Because:

name: name

can become:

name

when property and variable names are the same.
*/


// =========================================================
// 74. METHOD SHORTHAND
// =========================================================

let codingUser = {

    name: "Ajay",

    code() {

        console.log("Writing JavaScript");

    }

};


codingUser.code();


/*
Modern method syntax:

code() {}

is shorter than:

code: function() {}

*/


// =========================================================
// 75. OBJECT.KEYS + LOOP
// =========================================================

let productDetails = {

    name: "Laptop",

    price: 50000,

    brand: "Dell"

};


Object.keys(productDetails).forEach(

    function (key) {

        console.log(

            key,

            productDetails[key]

        );

    }

);


/*
Object.keys()
    ↓
Array of keys
    ↓
forEach()
    ↓
key + value
*/


// =========================================================
// 76. OBJECT.VALUES + REDUCE
// =========================================================

let marks = {

    math: 80,

    science: 90,

    english: 70

};


let totalMarks = Object.values(marks)

    .reduce(

        (total, mark) => total + mark,

        0

    );


console.log(totalMarks);


/*
Object.values()
    ↓
[80, 90, 70]
    ↓
reduce()
    ↓
240


This is a powerful combination for
working with object data.
*/


// =========================================================
// 77. OBJECT.ENTRIES + LOOP
// =========================================================

let settings = {

    theme: "dark",

    language: "English",

    notifications: true

};


for (let [key, value] of Object.entries(settings)) {

    console.log(key, value);

}


/*
Destructuring + Object.entries()

makes object iteration clean and readable.
*/


// =========================================================
// 78. COMMON OBJECT MISTAKES
// =========================================================

/*

MISTAKE 1:

Using dot notation for dynamic property:

let key = "name";

console.log(user.key);

This looks for a property literally called:

"key"


Correct:

console.log(user[key]);


-----------------------------------------------------------

MISTAKE 2:

Comparing objects using content expectation:

{} === {}

returns:

false


Because objects are reference values.


-----------------------------------------------------------

MISTAKE 3:

Using for...of directly on a normal object:

for (let value of object)


Normal objects are not directly iterable.

Use:

for (let key in object)


or:

Object.entries(object)


-----------------------------------------------------------

MISTAKE 4:

Assuming spread creates a deep copy.

It creates a SHALLOW copy.


-----------------------------------------------------------

MISTAKE 5:

Using arrow function when object `this`
is required.

Prefer:

method() {

    console.log(this.name);

}


-----------------------------------------------------------

MISTAKE 6:

Confusing:

Object.freeze()

with:

Object.seal()


Freeze:
    Cannot modify existing values.


Seal:
    Can modify existing values.


-----------------------------------------------------------

MISTAKE 7:

Confusing:

Object.keys()
Object.values()
Object.entries()


keys:
    property names

values:
    property values

entries:
    [key, value] pairs

*/


// =========================================================
// 79. MOST IMPORTANT OBJECT METHODS
// =========================================================

/*

Object.keys(object)
    ↓
Array of keys


Object.values(object)
    ↓
Array of values


Object.entries(object)
    ↓
Array of [key,value]


Object.fromEntries(array)
    ↓
Object


Object.assign()
    ↓
Copies properties


Object.create()
    ↓
Creates object with prototype


Object.freeze()
    ↓
Prevents modification


Object.seal()
    ↓
Prevents addition/deletion


Object.hasOwn()
    ↓
Checks own property


Object.getPrototypeOf()
    ↓
Gets prototype


Object.getOwnPropertyDescriptor()
    ↓
Gets property descriptor


Object.defineProperty()
    ↓
Defines controlled property


*/


// =========================================================
// 80. IMPORTANT DIFFERENCES
// =========================================================

/*

DOT VS BRACKET
===========================================================

Dot:
    object.name

Bracket:
    object["name"]

Dynamic:
    object[key]


-----------------------------------------------------------

OBJECT VS ARRAY
===========================================================

OBJECT:

{
    name: "Ajay",
    age: 21
}

Best for:

    Named properties
    Entity records
    User information


ARRAY:

[
    "Java",
    "React",
    "SQL"
]

Best for:

    Ordered collection
    List of values


-----------------------------------------------------------

OBJECT.KEYS VS VALUES VS ENTRIES
===========================================================

Object.keys()
    -> keys

Object.values()
    -> values

Object.entries()
    -> key + value pairs


-----------------------------------------------------------

IN VS OBJECT.HASOWN
===========================================================

in:
    own + inherited properties

Object.hasOwn():
    own properties only


-----------------------------------------------------------

ASSIGN VS SPREAD
===========================================================

Object.assign():

Object.assign({}, object)


Spread:

{
    ...object
}


Both commonly create shallow copies.

Spread is generally cleaner for modern code.


-----------------------------------------------------------

SHALLOW VS DEEP COPY
===========================================================

Shallow:

{
    ...object
}

Nested references remain shared.


Deep:

structuredClone(object)

Nested structures are copied.


-----------------------------------------------------------

FREEZE VS SEAL
===========================================================

FREEZE:

Modify -> NO
Add    -> NO
Delete -> NO


SEAL:

Modify -> YES
Add    -> NO
Delete -> NO


-----------------------------------------------------------

FUNCTION VS METHOD
===========================================================

Function:

function greet() {}

Method:

let user = {

    greet() {}

};


A method is a function associated with an object.


-----------------------------------------------------------

NORMAL FUNCTION VS ARROW METHOD
===========================================================

Normal:

greet() {

    console.log(this.name);

}


Arrow:

greet: () => {

    console.log(this.name);

}


Normal function:
    Has its own `this` behavior.

Arrow:
    Lexically inherits `this`.

Use normal object methods when
you need `this` to refer to the object.


*/


// =========================================================
// 81. REAL-WORLD API OBJECT EXAMPLE
// =========================================================

let apiResponse = {

    status: "success",

    message: "Employee data retrieved successfully",

    data: {

        id: 101,

        name: "Ajay",

        role: "Software Developer",

        skills: [

            "Java",

            "JavaScript",

            "React"

        ],

        address: {

            city: "Madurai",

            state: "Tamil Nadu"

        }

    }

};


console.log(apiResponse.status);

console.log(apiResponse.data.name);

console.log(apiResponse.data.role);

console.log(apiResponse.data.skills[0]);

console.log(apiResponse.data.address.city);


/*
REAL-WORLD FLOW:

Backend
   ↓
API
   ↓
JSON
   ↓
JavaScript Object
   ↓
Destructuring / Access
   ↓
UI


This structure is extremely common
in frontend development.
*/


// =========================================================
// 82. REAL-WORLD E-COMMERCE OBJECT
// =========================================================

let product = {

    id: 1001,

    name: "Laptop",

    price: 55000,

    brand: "Dell",

    inStock: true,

    specifications: {

        ram: "16GB",

        storage: "512GB SSD",

        processor: "Intel i5"

    },

    discount: 10,

    getFinalPrice() {

        return this.price -

            (this.price * this.discount / 100);

    }

};


console.log(product.name);

console.log(product.specifications.ram);

console.log(product.getFinalPrice());


/*
This single object demonstrates:

    Properties
    Nested objects
    Method
    this
    Calculations
*/


// =========================================================
// 83. REAL-WORLD USER OBJECT
// =========================================================

let applicationUserData = {

    id: 101,

    username: "Ajay",

    email: "ajay@example.com",

    roles: [

        "User",

        "Developer"

    ],

    profile: {

        firstName: "Ajay",

        lastName: "Mari"

    },

    isActive: true

};


let {

    username,

    email,

    roles,

    profile: {

        firstName

    }

} = applicationUserData;


console.log(username);

console.log(email);

console.log(roles);

console.log(firstName);


/*
Nested destructuring is useful when
working with API responses.
*/


// =========================================================
// 84. OBJECTS IN REACT
// =========================================================

/*

React commonly uses objects for:

    State
    Props
    API data
    Configuration


Example:

const [user, setUser] = useState({

    name: "Ajay",

    age: 21

});


Updating:

setUser({

    ...user,

    age: 22

});


The spread operator creates a new object
instead of directly modifying the existing state.


*/


// =========================================================
// 85. OBJECTS IN NODE.JS / BACKEND
// =========================================================

/*

Backend applications commonly use objects for:

    Request data
    Response data
    Database records
    Configuration
    Authentication information


Example:

const response = {

    success: true,

    message: "Login successful",

    user: {

        id: 101,

        name: "Ajay"

    }

};


Frontend receives similar structured data
through APIs.


*/


// =========================================================
// 86. OBJECTS + DATABASE
// =========================================================

/*

Database record:

id     | name | role
-------------------------
101    | Ajay | Developer


Backend can represent it as:

{

    id: 101,

    name: "Ajay",

    role: "Developer"

}


Multiple rows:

[
    {
        id: 101,
        name: "Ajay"
    },

    {
        id: 102,
        name: "Arun"
    }
]


This is why understanding:

OBJECT
ARRAY
ARRAY OF OBJECTS

is extremely important for full-stack development.
*/


// =========================================================
// 87. OBJECTS + FORM DATA
// =========================================================

let formData = {

    username: "Ajay",

    email: "ajay@example.com",

    password: "example-password"

};


console.log(formData.username);

console.log(formData.email);


/*
Frontend forms are commonly converted into
objects before sending data to APIs.

Example concept:

Form
   ↓
Object
   ↓
JSON
   ↓
API
*/


// =========================================================
// 88. OBJECTS + CONFIGURATION
// =========================================================

let appConfig = {

    appName: "My Application",

    version: "1.0.0",

    theme: "dark",

    api: {

        baseUrl: "/api",

        timeout: 5000

    }

};


console.log(appConfig.appName);

console.log(appConfig.api.baseUrl);


/*
Objects are excellent for configuration because
related settings can be grouped together.
*/


// =========================================================
// 89. OBJECTS - COMPLETE MENTAL MODEL
// =========================================================

/*

OBJECT
   |
   +---- PROPERTIES
   |       |
   |       +-- string
   |       +-- number
   |       +-- boolean
   |       +-- array
   |       +-- object
   |       +-- null
   |       +-- undefined
   |
   +---- METHODS
   |       |
   |       +-- function
   |
   +---- NESTED DATA
   |
   +---- PROTOTYPE
   |
   +---- PROPERTY DESCRIPTORS


ACCESS
   |
   +-- dot
   |
   +-- bracket
   |
   +-- optional chaining


MANIPULATION
   |
   +-- add
   +-- update
   +-- delete
   +-- Object.assign
   +-- spread


EXTRACTION
   |
   +-- destructuring
   +-- Object.keys
   +-- Object.values
   +-- Object.entries


PROTECTION
   |
   +-- freeze
   +-- seal


PROTOTYPES
   |
   +-- Object.create
   +-- getPrototypeOf


ADVANCED
   |
   +-- getter
   +-- setter
   +-- descriptors
   +-- defineProperty


DATA EXCHANGE
   |
   +-- JSON.stringify
   +-- JSON.parse


*/


// =========================================================
// 90. OBJECT INTERVIEW QUESTIONS
// =========================================================

/*

Q1. What is an object?

A:
An object is a collection of related data and behavior
represented using key-value pairs.


Q2. What is a property?

A:
A named value stored inside an object.


Q3. What is a method?

A:
A function stored inside or associated with an object.


Q4. Difference between dot and bracket notation?

A:

Dot:
    object.name

Bracket:
    object["name"]

Bracket notation is especially useful for
dynamic property names and property names containing spaces.


Q5. Why are two objects with the same data not equal?

A:
Objects are reference values.

{} === {}

returns false because they are different references.


Q6. What is object destructuring?

A:
A syntax used to extract properties from an object
into variables.


Q7. What is a shallow copy?

A:
A copy where nested objects/arrays may still
share references.


Q8. What is a deep copy?

A:
A copy where nested structures are independently copied.


Q9. Difference between freeze and seal?

A:

freeze:
    Cannot modify, add or delete.

seal:
    Cannot add or delete,
    but existing values can be modified.


Q10. What is Object.keys()?

A:
Returns an array containing an object's own
enumerable property names.


Q11. What is Object.values()?

A:
Returns an array containing an object's own
enumerable property values.


Q12. What is Object.entries()?

A:
Returns an array of [key, value] pairs.


Q13. What is a prototype?

A:
An object from which another object can inherit
properties and methods.


Q14. What is the prototype chain?

A:
The chain JavaScript follows when searching for
a property or method that is not found directly
on an object.


Q15. What is optional chaining?

A:
`?.` safely accesses potentially missing
properties or methods.


Q16. What is nullish coalescing?

A:
`??` provides a fallback when a value is
null or undefined.


Q17. What is a getter?

A:
A method-like property that is accessed as a property
and calculates/returns a value.


Q18. What is a setter?

A:
A special method used to control assignment to a property.


Q19. What is JSON.stringify()?

A:
Converts a JavaScript value into a JSON string.


Q20. What is JSON.parse()?

A:
Converts a JSON string into a JavaScript value.


Q21. Why are objects important in full-stack development?

A:
Objects represent real-world entities and are heavily
used for API responses, database records, form data,
React state, props, configuration and application logic.


*/


// =========================================================
// FINAL REVISION CHEAT SHEET
// =========================================================

/*

CREATE:

let user = {
    name: "Ajay",
    age: 21
};


ACCESS:

user.name

user["name"]


DYNAMIC ACCESS:

let key = "name";

user[key]


ADD:

user.role = "Developer";


UPDATE:

user.age = 22;


DELETE:

delete user.age;


METHOD:

user.login();


THIS:

this.name


NESTED:

user.address.city


ARRAY:

user.skills[0]


ARRAY OF OBJECTS:

employees[0].name


DESTRUCTURE:

let { name, age } = user;


KEYS:

Object.keys(user)


VALUES:

Object.values(user)


ENTRIES:

Object.entries(user)


FROM ENTRIES:

Object.fromEntries(data)


COPY:

{ ...user }


SHALLOW COPY:

{ ...user }


DEEP COPY:

structuredClone(user)


PROTOTYPE:

Object.create(object)


GET PROTOTYPE:

Object.getPrototypeOf(object)


CHECK OWN PROPERTY:

Object.hasOwn(object, "name")


FREEZE:

Object.freeze(object)


SEAL:

Object.seal(object)


SAFE ACCESS:

user?.address?.city


FALLBACK:

user.name ?? "Guest"


JSON:

JSON.stringify(object)

JSON.parse(string)


GETTER:

get fullName() { }


SETTER:

set name(value) { }


DESCRIPTOR:

Object.getOwnPropertyDescriptor()


CUSTOM PROPERTY:

Object.defineProperty()


ITERATE:

for (let key in object)


OBJECT ENTRIES:

for (let [key, value] of Object.entries(object))


===========================================================
MOST IMPORTANT FOR INTERVIEWS
===========================================================

1. Object = key-value collection

2. Property vs Method

3. Dot vs Bracket notation

4. `this`

5. Object destructuring

6. Nested objects

7. Array of objects

8. Object.keys / values / entries

9. Object.assign / spread

10. Shallow vs deep copy

11. Object reference

12. Prototype and prototype chain

13. Object.create()

14. freeze vs seal

15. Optional chaining

16. Nullish coalescing

17. Getter / Setter

18. JSON.stringify / JSON.parse

19. Property descriptors

20. Objects in APIs / React / Node.js / databases


===========================================================
REAL-WORLD DEVELOPMENT CONNECTION
===========================================================

HTML Form
    ↓
JavaScript Object
    ↓
JSON.stringify()
    ↓
REST API
    ↓
Backend
    ↓
Database
    ↓
JSON Response
    ↓
JavaScript Object
    ↓
Destructuring / Object Access
    ↓
React UI


Understanding OBJECTS is therefore essential
for JavaScript, React, Node.js and full-stack development.

===========================================================
*/
```
