---
name: JavaScript
lang: en
layout: docs
author: GKO95
category: Programming
title: "Programming | JavaScript"
logo: "/assets/images/logo/logo-js.png"
summary: "."
order: 0x04
---
# **JAVASCRIPT: BASIC**

Previously, JavaScript has been used mainly on providing interactable webpages. The usage of the JavaScript has grown and is also used on data processing as well as creating an application itself nowadays.

The JavaScript documents also introduces newly added syntax since after the release of ECMAScript 2015, also known as ES6 which is a standardization for script-language.

## **Script**

JavaScript is commonly used in HTML & CSS to provide dynamic interaction. HTML supports JavaScript with `<script>` tag either by internal scripting or external script file:

```html
<!-- INTERNAL SCRIPTING -->
<script type="text/javascript">
	Write JavaScript Here... 
</script>

<!-- EXTERNAL SCRIPT FILE -->
<script type="text/javascript" src="path/to/script.js"></script>
```

## **Comment**

Line comment is used to place a comment worth one line of code, using `//` (double slash).

Block comment places a comment that requires more than one line, using `/* */` (slash asterisk).

```cpp
/*
This is a block comment:
multiple line of comment can be placed here.
*/
    
std::cout << 1 << std::endl;
std::cout << 2 << std::endl; // This is a line comment that for a single line of code.
std::cout << 3 << std::endl;
```

```js
/*
	BLOCK COMMENT:
	this whole block is designated for a comment section.
*/
var tmp = "Hello World!";
console.log(tmp);	// LINE COMMENT: a single line of comment.
```

```
Hello World!
```

## **Output**

JavaScript has two different version of output keyword based on the platforms:

| OUTPUT             | SYNTAX                         | DESCRIPTION                                                  |
| ------------------ | ------------------------------ | ------------------------------------------------------------ |
| `document.write()` | `document.write("Return", 10)` | HTML version of output within `<script>` or external webpage JS script. |
| `console.log()`    | `console.log("Return", 10)`    | Terminal version of output.                                  |
| `alert()`          | `alert("Descript")`            | A small borderless pop-up box with `"Descript"` text and an OK button. |
| `prompt()`         | `prompt("Descript","Default")` | A small borderless pop-up box with `"Descript"` text and input form `"Default"`. |

Printing output of multiple data-type can be done with two method: comma `,` and plus sign `+`. Former always have space for each comma, while latter does not.

```js
console.log("Return", 10);
console.log("Output" + 0);
```

```
Return 10
Output0
```

HTML version of the output is coded as follows:

```html
<!--HTML VERSION OF JAVASCRIPT-->
<script>
    document.write("Return", 10);
</script>
```

## **Pop-up Box**

JavaScript has three different pop-up box that can be integrated with HTML & CSS:

| OUTPUT      | SYNTAX                         | DESCRIPTION                                                  |
| ----------- | ------------------------------ | ------------------------------------------------------------ |
| `alert()`   | `alert("Descript")`            | A pop-up box with `"Descript"` text and an OK button.        |
| `prompt()`  | `prompt("Descript","Default")` | A pop-up box with `"Descript"` text and input form which has `"Default"` as an default input text. |
| `confirm()` | `confirm("Descript")`          | A pop-up box with `"Descript"` text and an OK, Cancel button which returns True and False. |

## **Identifier**

Identifier is a name used to identify a variable, function, object, class, and more. In another word, it is just a name. There are rules identifier has to observe:

- First character must be an alphabet letter, an underscore `_`, or a dollar sign `$`.
- Beside the first character may use alphabet letters, digits, underscores, or dollar signs.
- Mathematical and logical operators, special characters, and blank spaces are not allowed.
- Reserved words such as a type identifier and function name are not allowed.

## **Variable**

Assigning a variable is very simple in JavaScript: initialize value using a single assignment operator `=` after the variable name. Naming variable's name inherits the rule of identifier. Variables are not data type fixed, allowing programmer to change the value and its data type whatever and whenever they want even from a single variable.

However, starting from ECMAScript 2015, there are now three different types of variable.

| VARIABLE | EXAMPLE            | DESCRIPTION                       |
| -------- | ------------------ | --------------------------------- |
| `var`    | `var x = value;`   | Global variable.                  |
| `let`    | `let x = value;`   | Local variable (scope-sensitive). |
| `const`  | `const x = value;` | Unchangeable local variable.      |

```js
/* VAR VARIABLE TYPE. */
var x = 123.456;
console.log(x);

x = "This is a string.";
console.log(x);

/* LET VARIABLE TYPE. */
let y = "Outer Scope";
if (true) {
    let y = "Inner Scope";
    console.log(y);
}
console.log(y);
```

```
/* VAR VARIABLE TYPE. */
123.456
This is a string
/* LET VARIABLE TYPE. */
Outer Scope
Inner Scope
```

## **Data Type**

Data type of the JavaScript can be categorized into three different type: numeric, string, and Boolean data type.

### Number Data Type

While most of the programming language (such as C++, Java, and Python) have numerical data type of more than one in general, **JavaScript only has one which is simply called *"number" data type***. Number data type can either be expressed as integer and floating-point number accordingly.

Arithmetic operation of a number data type is as follows:

| NAME           | OPERATOR | DESCRIPTION                                                  |
| -------------- | :------: | ------------------------------------------------------------ |
| Addition       |   `+`    | -                                                            |
| Subtraction    |   `-`    | -                                                            |
| Multiplication |   `*`    | -                                                            |
| Division       |   `/`    | When divided, the value automatically changes to data type of `float` if the number cannot be divided without a remainder. |
| Modulus        |   `%`    | When divided, gives an output a remainder of the division.   |

Increment and decrement is possible using the syntax below:

|  OPERATOR   | EXAMPLE | DESCRIPTION   |
| :---------: | ------- | ------------- |
| `++` prefix | `x=y++` | `x=y; y=y+1;` |
| `++` suffix | `x=++y` | `y=y+1; x=y;` |
| `--` prefix | `x=y--` | `x=y; y=y-1;` |
| `--` suffix | `x=--y` | `y=y-1; x=y;` |

Assignment operators `=` can be combined with arithmetic operator to execute in-place operation:

| OPERATOR | EXAMPLE  | EQUIVALENT  |
| :------: | -------- | ----------- |
|   `+=`   | `x += 1` | `x = x + 1` |
|   `-=`   | `x -= 1` | `x = x - 1` |
|   `*=`   | `x *= 1` | `x = x * 1` |
|   `/=`   | `x /= 1` | `x = x / 1` |
|   `%=`   | `x %= 1` | `x = x % 1` |

### String Data Type

String object is a value assigned to string data type that is created by entering text between a pair of single quotation marks `' '` or double quotation marks `" "`.

To place single or double quotes inside a string, place a backslash `\` before the quotes to escape from premature end of string.

```js
// Comparison between improper and proper way of typing strings.
console.log('Where's my "Cat in the Hat" book?');
console.log('Where\'s my "Cat in the Hat" book?');
```

```
Where
Where's my "Cat in the Hat" book?
```

Placing a new line within a string can be done with `\n` which is one of the example of how escape character is used in strings.

```js
// Printing and writing string in multiple lines.
console.log("Thank you!\nYou're welcome.");
```

```
Thank you!
You're welcome.
```

While placing value inside a string has been painstaking due to a need to place concatenation sign  `+` between every string and variable, template literals in ES6 introduced easier way to resolve this matter using a pair of backtick `` ` ` `` with a placeholder `${ }` for the variable.

```js
/* BEFORE ES6. */
let x_new = 6;
let x = "This is before ES" + x_new + "!";
console.log(x);

/* AFTER ES6. */
let y_new = 6;
let y = `This is after ES${y_new}!`
```

### Boolean Data Type

Boolean data type is useful for a code that requires logical conditioning whether it is true or false:

| KEYWORD        | DATA TYPE       | DESCRIPTION                   |
| -------------- | --------------- | ----------------------------- |
| `True` or `1`  | Logically true  | Returned when logic is true.  |
| `False` or `0` | Logically false | Returned when logic is false. |

Any non-zero positive number can represents Boolean value of `True`. In other word, Boolean value of `2` or `3` are also equivalent to `True` while `False` is only represented by the number `0`.

Comparison operators are used to compare relation of two or more values, returning corresponding Boolean data type depending on whether the condition is held true or false. 

| OPERATOR | DESCRIPTION                        |
| -------- | ---------------------------------- |
| `<`      | Lesser than                        |
| `<=`     | Lesser than or equal to            |
| `>`      | Greater than                       |
| `>=`     | Greater than or equal to           |
| `==`     | Equal to                           |
| `===`    | Identical (equal and of same type) |
| `!=`     | Not equal to                       |

Logical operators are similar to comparison operators but evaluates the expression rather than the values. The expression itself is either True or False, and the operators does Boolean operation on these Boolean operands.

| OPERATOR | LOGIC | DESCRIPTION                                         |
| :------: | ----- | --------------------------------------------------- |
|   `&&`   | AND   | True when all the operands are True, else False.    |
|   `||`   | OR    | True when at least one operand is True, else False. |
|   `!`    | NOT   | Change operand True to False and vice versa.        |

# **JAVASCRIPT: CONDITIONAL AND LOOP**

Procedural programming uses the sequential script execution property. It is the basic programming style using mostly with conditional and loops statements with functions as additional assistance.

## **`if` Statement**

`if` statements run code if a certain condition holds. If condition evaluates True, the statements are carried out. Otherwise, they aren't carried out.

```cpp
if( logical_condition ) {   // E.g. x==1
    statements;             // E.g. printf("Hello World\n");
}
```

`if` statement can be placed inside another `if` statement. It is recommended to use curly bracket `{}` to distinguish between `if` statements to avoid computer’s misinterpretation.

```cpp
if (condition){
    if (condtion){ 
        statements;
    } 
}
```

### Non-zero Condition

An expression that evaluates to a non-zero value is considered true.

```cpp
if (3)
    printf(\"Order received!\n");
```

```
Order received!
```

### `else` Statement

A statement that follows an IF statement, and contains code that is called when evaluated False.

```cpp
if (condition) {
    statements;
}
else {
    statements; 
}
```

### `else`-`if` Statement

Additional condition evaluation after failing the previous condition.

```cpp
if (condition) {
    statements;
}
else if (condition) {
    statements;
}
else {
    statements;
}
```

## **Ternary Operator**

Conditional expression with a functionality same as if statement but much simpler. The operator is called “ternary” since they take three arguments.

```cpp
variable = logic_condition ? true_return : false_return;
```

Ternary operator should not be overused as it reduces readability, but useful on variable assignment.

## **`switch` Statement**

Another conditional statement which execute one case of statements out of many cases assigned with value, selected when it’s True to argument expression. Every case needs `break`  at the end of the group of statements to not iterate over again.

When no case is True to the expression, the statements from default is returned. Default case does not need break statement but must to be presented in switch statement no matter what.

```cpp
switch ( argument ) {
    case value_1:
        statements;
        break;
    case value_2:
        statements;
        break;
    default:
        statements;
}
```

Group of multiple cases can have one single label.

```cpp
switch ( argument ) {
    case value_1:
    case value_2:
    case value_3:
        statements;
        break;
    case value_4:
    case value_5:
    case value_6:
        statements;
        break;
    default:
        statements;
}
```

### `break` Statement

The `break` statement can be used to end a nearest loop or a switch statement prematurely. When encountered inside a loop, the `break` statement causes the loop to finish immediately. However, it does not break from its outer loop.

### `continue` Statement

Although `continue` statement is exclusive only to a loop statement and cannot be applied to a switch statement, it is a statement that works similarly to `break` statement. `continue` statement skips the rest of the statements and jumps back to the nearest conditioning of the loop, rather than stopping it.

## **`while` Loop**

The statements inside are repeatedly executed (iteration) as long as the condition holds. The loop ends once it evaluates to False.

```cpp
// statements repeate until condition is False,skipping without performing statements.
while (condition) {
    statements;
}

// simplified while loop when the loop statement is simple as a single line.
while (condition) statement;
```

## **`do`-`while` Statement**

Works same as the While Loop, but condition decides whether to proceed to next iteration instead rather than whether to execute statements. The loop ends once it evaluates to False.

```cpp
// statements are repeated until condition is False,stopping the iteration.
do {
    statements
} while (condition);
```

## **`for` Loop**

The statements inside it are repeatedly executed (iteration) as long as it’s in the valid range. The loop ends once it’s out of range.

```cpp
// statements are repeated while in valid range.
for ( initial_value ; condition ; increment ) {
    statements;
}

// simplified for loop when the loop statement is simple as a single line.
for ( initial_value ; condition ; increment ) statement;
```

It is possible to skip initial_value, condition, and increment.

### Ranged-based `for` Loop

ES6 standardization introduces two different ranged-based `for` loop: `for-of` and `for-in`. The functionality is similar, but the passed argument and returned data is different.

Loop of `for-of` enumerates from array data and returns the elements of the array.

```js
for (let i of [1, 2, 3]) {
    console.log(i);
} 
```

```
1
2
3
```

Meanwhile, `for-in` enumerates from object data and returns the key (properties name) instead.

```js
for (let i in {a:1, b:2, c:3}) {
    console.log(i);
}
```

```
a
b
c
```

The concept of array and object in JavaScript will be explained in future chapter.

# **JAVASCRIPT: FUNCTION**

## **Function**
Function is an independent reusable block of code which can process the data and present processed/new data once it’s called. Function can be distinguished from its code format which has parenthesis after its name; `function()`. Naming function's name inherits the rule of identifier.

```js
/* ORIGINAL SYNTAX. */
function functionName() {
	console.log(4)
}

/* ES6 SYNTAX. */
const functionName = () => {
    console.log(4);
}

functionName();
```

```
4
```

ES6 syntax is especially useful when creating a simple in-line function.

```js
/* A FUNCTION DEFINED ONLY USING A SINGLE LINE (ES6). */
const functionName = param1 => console.log(param1);
functionName(arg1);

/* IMPLEMENTATION ON ARRAY ENUMERATION (ES6). */
const arrayName = [1, 2, 3, 4];
arrayName.forEach(param1 => {console.log(param1*2);} );
```

### Parameter & Argument

Argument value is passed over to parameter of the function, but parameter and argument is processed in different memory thus does not affect each other (i.e., change of value). To make parameter and argument influential to each other, a pointer is used to do the job.

It is possible to define default arguments for function execution even without external arguments. However, you cannot skip to next argument passing by typing double comma

```js
/* ORIGINAL SYNTAX. */
function functionName(param1 = value1, param2 = value2) {
    console.log(param1 + param2);
}

/* ES6 SYNTAX. */
const functionName = (param1 = value1, param2 = value2) => {
    console.log(param1 + param2);
}

functionName(2,3);
```

```
5
```

### Rest Parameter

Rest parameter is an array of remaining parameter which will be passed from extra arguments.

```js
// FUNCTION WITH REST PARAMETER
function functionName(param1, ...restParameter) {
	for(let extraParameter of restParameter){
    	statements;
    }
} 

// EXTRA ARGUMETNS ARE SENT TO THE REST PARAMETER.
functionName(arg1,extraArg2, extraArg3);
```

When no extra argument is presented, the array will simply be empty but never be undefined. The rest parameter is defined using a spread operator `...`. This operator will be introduced again in object and array chapter.

### Return Statement

Return statement terminates a function and returns indicated value.

```js
/* ORIGINAL SYNTAX. */
function functionName(param1 = value1, param2 = value2) {
    return param1 + param2;
}

/* ES6 SYNTAX. */
const functionName = (param1 = value1, param2 = value2) => {
    return param1 + param2;
}

var result = functionName(2,3);
console.log(result);
```

```
5
```

# **JAVASCRIPT: OBJECT**

## **Object**

Object in JavaScript is a group of unordered list of related data: every object can have its own exclusive properties and bounded-functions, called method. Accessing properties and methods are done by syntax of `object.property` and `object.method()` respectively.

```js
/* INTIALIZATION OF AN OBJECT. */
var objectName = {
    // Properties
	property1: value1,
    property2: value2,
    
    // Methods
    method1: ext_functionName,
    method2: function (param1) {
    	// statements for method.
    }
};


/* INITIALIZATION OF AN OBJECT (ES6). */
var property1 = value1;
var property2 = value2;

var objectName = {
    // Properties initialized from variable.
    property1,
    property2,
    property2 = value3;		// Overwrites previous value of "properties2".
    
    // Methods simplified.
    method1() {
        statements;
    }
};
```

Upon calling external function `ext_functionName()` do not requires parenthesis `()` but just the name.

There are two ways to access the properties of the object:

```js
objectName.property
objectName['property']
```

### Properties & Methods

Below is a difference between properties and methods:

* **Property**: a named value stored inside an object.
* **Method**: an object-dependent function which cannot be called without an object.

### Destructuring Object

Destructuring object means assigning each property value of the object to separate individual variables. However, the name of the variables should be same as the name of the properties.

```js
let objectName = {propertyName1 = value1, propertyName2 = value2};

// DESTRUCTURING ARRAY
let {propertyName1, propertyName2} = objectName;

// RESULT
console.log(propertyName1);
console.log(propertyName2);
```

```js
// DESTRUCTURING ARRAY: ALTERNATIVE 1
let {propertyName1, propertyName2} = {propertyName1 = value1, propertyName2 = value2};
```

```js
// DESTRUCTURING ARRAY: ALTERNATIVE 2
let propertyName1, propertyName2;
({propertyName1, propertyName2} = {propertyName1 = value1, propertyName2 = value2});
```

```
value1
value2
```

To change the variable name to something else, simply place a new variable name after colon of the property name.

```js
let objectName = {propertyName1 = value1, propertyName2 = value2};

// DESTRUCTURING ARRAY WITH NEW VARIABLE NAME
let {propertyName1: variableName1, propertyName2: variableName2} = objectName;

// RESULT
console.log(variableName1);
console.log(variableName2);
```

```
value1
value2
```


### Computed Property Names

Starting from ES6, the name of properties can be defined as a form of expression just like general expression used in JavaScript coding. The expression for the property name should be just inside a square bracket `[]`. 

```js
/* COMPUTED PROPERTY NAMES. */
let property1 = propertyName1;
let property2 = propertyName2;

let objectName = {
    [property1]: value1;
    [`computed_${property2}`]: value2;
};
```

### Sourcing Multiple Objects

Creating a new object by merging multiple sources of different objects using `Object.assign()`. Order of the sources in the method matters since the properties can overwrite the previous objects.

```js
// OBJECT SOURCE 1
let objectName1 = {
    property1: value11;
    property2: value12;
};

// OBJECT SOURCE 2
let objectName2 = {
    property2: value22;
    property3: value23;
};

// CREATE "objectName3" OBJECT SOURCING FROM "objectName1" AND "objectName2".
let objectName3 = Object.assign({property4: value34},objectName1,objectName2);
console.log(objectName3.property1);
console.log(objectName3.property2);		// "objectName1" overwritten by "objectName2".
console.log(objectName3.property3);
console.log(objectName3.property4);
```

```
value11
value22
value23
value34
```

...where `{}` represents pre-existing properties of `objectName3` and this too can be overwritten by either `objectName1` and `objectName2`.

Because this is creating a new object and not an assignment of existing object to the variable, changing the value of the properties does not affect the sourced objects.

```js
/* ASSIGNMENT OF OBJECT. */
let objectName1 = {
    property1: value1;
    property2: value2;
};

let objectName2 = objectName1;
objectName2.property = value3;

console.log(objectName1.property1);
console.log(objectName2.property1);


/* DUPLICATE USING OBJECT.ASSIGN() METHOD. */
let objectName1 = {
    property1: value1;
    property2: value2;
};

let objectName2 = Object.assign({},objectName1);
objectName2.property1 = value3;
// ALTERNATIVE: let objectName2 = Object.assign({}, objectName1, {property1: value3});

console.log(objectName1.property1);
console.log(objectName2.property1);
```

```
/* ASSIGNMENT OF OBJECT. */
value3
value3
/* DUPLICATE USING OBJECT.ASSIGN() METHOD. */
value1
value3
```

### Spread Operator in Object

Spread operator in object will spread its properties and its value in a format of iterator. Copying this iterator to other objects will eventually be same as cloning and even merging the objects as one.

```js
const objectName1 = {property1: value11, property2: value12};
const objectName2 = {property1: value21, property3: value23};

// SPREAD OPERATOR USED TO CLONE AND MERGE OBJECT(S) VIA ITERATOR(S).
const clonedObject = {...objectName1};
const mergedObject = {...objectName1, ...objectName2};

// clonedObject = {property1: value11, property2: value12};
// mergedObject = {property1: value21, property2: value12, property3: value23};
```

However, it is impossible to spread the object to show the list of properties and values using the print function such as `console.log()` since the iterator from an object is non-callable.



## Object Type

Object type is used to create multiple objects of the same kind, using constructor function. This concept is very similar to the concept of "class" in other programming language such as C++ and Python, but JavaScript too have "class" starting from ES6.

```js
/* DEFINITION of an object type by constructor function */
function className(param1, param2) {
    // Properties
	this.property1 = param1;
 	this.property2 = param2;
    
    // Methods
    this.method1 = ext_functionName;
    this.method2 = function (param3) {
    	// statements for method.
    }
}

/* DECLARATION of a new object using object type. */
var variableName = new className(argument1, argument2);
```

Upon calling external function `ext_functionName()` do not requires parenthesis `()` but just the name.

### `this` keyword

`this` keyword points to (represents) the current object.


## **Classes**

Class is used to create multiple objects of the same kind, using constructor method.

```js
// CLASS DEFINITION
class className {
	constructor(param1, param2){
        this.property1 = param1;
    	this.property2 = param2;
    }
    // PROTOTYPE METHOD: ACCESSABLE BY OBJECT OF THE CLASS.
    method1(param3) {
    	statements;
    }
    // STATIC METHOD: CANNOT BE ACCESSED BY OBJECT BUT REQUIRES CLASS ITSELF.
    static method2(objectParameter) {
    	statements;
    }
    // SETTER INTIALIZE AND COMPUTE THE VALUES FOR GETTER.
    set method3(param4) {
    	statement;
    }
    // GETTER RETURNS WHAT IS SET BY SETTER METHOD.
    get method3() {
    	return statement;
    }
}

// CLASS DECLARATION
const objectName = new className(value1, value2);
console.log(objectName.method1());			// PROTOTYPE METHOD.
console.log(className.method2(objectName));	// STATIC METHOD.
console.log(objectName.method3(value4));	// GETTER DOES NOT NEED PARENTHESIS.
```

There is an alternative way to declare new object in a single expression.

```js
// COMBINATION OF (UNNAMED) DEFINITION AND DECLARATION.
const objectName = class {
	constructor(param1, param2){
        this.property1 = param1;
    	this.property2 = param2;
    }
}
```

The difference between the object type is that it uses constructor method that is made into the class rather than using the function as constructor.

### Inheritance

Class inheritance is done using `extends` keyword and its properties' value and methods can be accessed using `super` keyword.

```js
// DEFINITION OF THE PARENT CLASS.
class parentClass {
	constructor(param1, param2) {
    	this.property1 = param1;
        this.property2 = param2;
    }
    method1() {
    	statements;
    }
}

// DEFITION OF THE CHILD CLASS INHERITED FROM PARENT CLASS.
class childClass extends parentClass {
    
    // SUPER USED IN CONSTRUCTOR OF THE CHILD CLASS CALLS THE PARAMETER FROM PARENT CLASS.
    constructor(param1, param2) {
    	super(param1, param2)
    }
    method2() {
    	statements;
    }
	method3() {
        // SUPER USED WITH ITS METHOD CALLS THE METHOD OF THE PARENT CLASS.
        super.method1();
    	statements;
    }
}
```

## List of Objects

### `Math` Object

`Math` is a pre-defined object useful for mathematical calculation.

| PROPERTY | EXAMPLE       | DESCRIPTION                                               |
| -------- | ------------- | --------------------------------------------------------- |
| `E`      | `Math.E`      | Euler's constant ($\varepsilon$).                         |
| `PI`     | `Math.PI`     | Constant Pi ($\pi$).                                      |
| `LN2`    | `Math.LN2`    | Natural log of the value 2 ($\ln 2$).                     |
| `LOG10E` | `Math.LOG10E` | The base 10 log of Euler's constant ($\log \varepsilon$). |

The object also provides methods for the calculation.

| METHOD     | EXAMPLE           | DESCRIPTION                       |
| ---------- | ----------------- | --------------------------------- |
| `abs()`    | `math.abs(-3)`    | Absolute value.                   |
| `sqrt()`   | `math.sqrt(36)`   | Square root.                      |
| `power()`  | `math.power(x,y)` | Value of `x` to the power of `y`. |
| `random()` | `math.random()`   | Random number between 0 and 1.    |

### `Map` Object

An object to hold key and its corresponding value, just like a [dictionary](PRGMING_Python.md#**PYTHON: ITERABLE OBJECT**) iterable object in Python.

```js
let mapObject = new Map([[key1, value1], [key2, value2]]);
```

Map can take any iterable that is comprised of an array. While the key is a symbol or a string, its value can be a function, object, or any primitive.

The object also provides methods as the following:

| METHOD      | EXAMPLE              | DESCRIPTION                                           |
| ----------- | -------------------- | ----------------------------------------------------- |
| `set()`     | `map.set(key,value)` | Append the key and value.                             |
| `get()`     | `map.get(key)`       | Acquire the corresponding value of the key.           |
| `has()`     | `map.has(key)`       | Return Boolean `true` if the specified key exist.     |
| `entries()` | `map.entries()`      | Return array `[key,value]` which iterates one-by-one. |

### `Set` Object

An object is unique in value where repeated value is removed, just like a set iterable object in Python.

```js
let setObject = new Set([value1, value2, value3, value1])
//  setObject = [value1, value2, value3];
```

The object also provides methods as the following:

| METHOD     | EXAMPLE             | DESCRIPTION                                         |
| ---------- | ------------------- | --------------------------------------------------- |
| `add()`    | `set.add(value)`    | Append the value.                                   |
| `delete()` | `set.delete(value)` | Delete the value.                                   |
| `has()`    | `set.has(value)`    | Return Boolean `true` if the specified value exist. |
| `value()`  | `set.value()`       | Return list of values which iterates one-by-one.    |

### `Promise` Object



```js
new Promise(function(param1, param2) {
		if(condition)
            param1(statement1); // EXECUTE STATEMENT1 ON TRUE.
    	else
            param2(statement2);	// EXECUTE STATEMENT2 ON FALSE.
	}       
);
```



### `Date` Object Type

`Date` object type can creates date-related objects which can be used for measuring time, checking date, calculating days and so forth.

```js
// Stores current date and time (non-realtime).
var dateName = new Date();
```

Passing value to its parameter can assign designated date to the variable. Following methods point to the same date but with three different approach: 

| ARGUMENT                  | EXAMPLE                                 |
| ------------------------- | --------------------------------------- |
| Milliseconds (since 1970) | `new Date(789971670000)`                |
| Date string               | `new Date("January 13, 1995 13:34:30")` |
| Y, M, D, H, M, S, MS      | `new Date(95,0,13,13,34,30,0)`          |

The object also provides methods for the calculation.

| METHOD          | EXAMPLE                  | DESCRIPTION                                               |
| --------------- | ------------------------ | --------------------------------------------------------- |
| `getFullYear()` | `dateName.getFullYear()` | Gets the year from stored date in `dateName`.             |
| `getMonth()`    | `dateName.getMonth()`    | Gets the month from stored date in `dateName`.            |
| `getDate()`     | `dateName.getDate()`     | Gets the day of the month from stored date in `dateName`. |
| `getHours()`    | `dateName.getHours()`    | Gets the hour from stored date in `dateName`.             |

# **JAVASCRIPT: ARRAY**

## **Array**

An iterable object used to store an indexed list of items of same data-type. Bracket `[]` is used  to assign value to each element of the array:

```js
/* DECLARATION of an array. */
var arrayName = [element1, element2, element3];
```

Another way to create an array is by using `Array()` constructor with value of elements placed inside.

```js
/* ALTERNATIVE DECLARATION of an array. */
var arrayName = new Array(element1, element2, element3);
```

It is possible to create an size-defined empty array using the same constructor but by passing a single integer as an argument. However, this is meaningless since array in JavaScript is always dynamic. That is, more element can be added anytime wanted. 

```js
/* DECLARATION of an empty array of size three. */
var arrayName1 = new Array(3);

/* DECLARATION of an dynamic empty array. */
var arrayName2 = new Array();
var arrayName3 = [];
```

The syntax `new Array(3)` will understand as creating an empty array with size of three instead of creating an array with a single size of value of `3`. This is done automatically based on whether there is only one integer argument or else.

### Destructuring Array

Destructuring array means assigning each value of the array to separate individual variables.

```js
var arrayName = [value1, value2, value3];

// DESTRUCTURING ARRAY
let [var1, , var3] = arrayName;

// RESULT
console.log(var1);
console.log(var3);
```

```
value1
value3
```

### Spread Operator in Array

Spread operator `...` used with array will spread its value one by one sequentially.

```js
let arrayName1 = [value3, value4];
let arrayName2 = [value1, value2, ...arrayName1, value5];
console.log(...arrayName2);
```

```
value1 value2 value3 value4 value5
```

### `filter()` Function

The function `filter()` is an array exclusive function to filter out the values and create a new array based on the conditional function passed as an argument.

```js
// FILTER() METHOD PASSING EXT. FUNCTION AS AN ARGUMENT.
let arrayName = [value1, value2, value3, ...].filter(conditionalFuncName);

// FILTER() METHOD PASSING NEWLY DEFINED FUNCTION AS AN ARGUMENT.
let arrayName = [value1, value2, value3, ...].filter(param1 => {conditions;} );
```

Only the value that passed the the condition will be filtered in while the rest is filtered out.

### `map()` Function



```js

```



## **Associative Array**

JavaScript does not support associative array where elements are indexed by strings instead of numbers, such as a dictionary in Python. There is an alternative way but not recommended; it is advised to use an object instead.

```js
// DECLARATION of an empty array.
var arrayName = [];

// arrayName is not an array anymore; is converted to object.
arrayName['property1'] = value1;
arrayName['proprety2'] = value2;

// Methods for array object do not apply anymore as it is now an object. 
console.log(arrayName.length);
```

```
0
```

## Iterator Object

Creating iterator object can be done using `Symbol.iterator` and generator function `function*`.

```js
let iterableObject = {
	[Symbol.iterator] : function* () {
    	value1; value2; value3; ...
    }
}
```

### Generator Function



# **JAVASCRIPT: DOM**

This chapter is specifically for integration with HTML & CSS. Document object model (DOM) represents a document in a logical structure and its HTML counterpart is shown as the figure below:

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/programming/JavaScript\js_html_dom.png" style="display:block" width="100%"></div><center style="font-weight:bold">Figure #. General DOM of the HTML.</center>

JavaScript has an ability to access and manipulate the DOM, thus can dynamically add, remove, and even modify the HTML elements. Every block of square which represents element in HTML is called **node** in DOM.

## **Node Relationship**

Each element such as `<html>`, `<head>`,  `<h1>` and et cetera is a node of the structure. Nodes have a relation with other nodes like a family: parent, child, and sibling.

| RELATIONSHIP | DESCRIPTION                                 |
| :----------: | ------------------------------------------- |
|    Parent    | Node that is directly enclosing it.         |
|    Child     | Node that is directly being enclosed by it. |
|   Sibling    | Nodes that share same parent.               |

## `document` Object

A pre-defined `document` object is used to access the nodes in DOM,. In other word, the object is a DOM counterpart of root user (superuser) in Unix-like operating system.

### Selecting Elements

Selecting which node of element to access can be done as follows:

| SYNTAX                                         | DESCRIPTION                                                  |
| ---------------------------------------------- | ------------------------------------------------------------ |
| `document.getElementById("idName")`            | Access the element ID of `idName`.                           |
| `document.getElementsByClassName("className")` | Acquire the list of element of the same `className` class in an array format. |
| `document.getElementsByTagName("tagName")`     | Acquire the list of element of the same `tagName` tag in an array format. |

Once accessed the element, you can use following properties to operates or select other elements of in relationship.

| PROPERTY          | EXAMPLE                | DESCRIPTION                                                  |
| ----------------- | ---------------------- | ------------------------------------------------------------ |
| `parentNode`      | `node.parentNode`      | Returns the parent node of an element.                       |
| `childNodes`      | `node.childNodes`      | Returns an array of an element's child nodes.                |
| `firstChild`      | `node.firstChild`      | Returns the first child node of an element.                  |
| `lasChild`        | `node.lastChild`       | Returns the last child node of an element.                   |
| `hasChildNodes`   | `node.hasChildNodes`   | Returns true if an element has any child nodes, otherwise false. |
| `nextSibling`     | `node.nextSibling`     | Returns the next node at the same tree level.                |
| `previousSibling` | `node.previousSibling` | Returns the previous node at the same tree level.            |

### Changing Elements

DOM sees each elements as an object; thus, the elements' attribute can be accessed like an object's.

```html
<!--SAMPLE HTML-->
<div>
    <img id="sample" src="image_path1.png" style="width:400px; height:300px;">
    <span>Figure 1. This is an example image.</span>
</div>

<!--JAVASCRIPT-->
<script>
    /* ACQUIRING ELEMENT OF INTEREST. */
    var node = document.getElementById("sample").getChildNodes;
    
    /* CHANGING ELEMENT ATTRIBUTES. */
    node[0].src = "image_path2.png";
    node[0].style.width = "800px";
    node[0].style.height = "600px";
</script>
```

Animation is possible by changing elements' properties using  `setInterval` and `clearInterval`.

| METHOD            | EXAMPLE                          | DESCRIPTION                                          |
| ----------------- | -------------------------------- | ---------------------------------------------------- |
| `setInterval()`   | `setInterval(funcName,millisec)` | `funcName` is executed with delayed `millisec` time. |
| `clearInterval()` | `clearInterval(setInterval)`     | Disable `setInterval()` object.                      |

### Adding & Removing Elements

Adding element can be using methods below:

| METHOD             | EXAMPLE                             | DESCRIPTION                                                  |
| ------------------ | ----------------------------------- | ------------------------------------------------------------ |
| `createElement()`  | `document.createElement("tagName")` | Create a `tagName` element node not yet placed in anywhere.  |
| `createTextNode()` | `document.createTextNode("String")` | Create a `string` text node to be placed in other nodes.     |
| `appendChild()`    | `node.appendChild("newNodw")`       | Place `newNode` as its child node.                           |
| `insertBefore()`   | `node.insertBefore("node1,node2")`  | Place `node1` as a child node before already existing `node2` child. |
| `cloneNode()`      | `node.cloneNode()`                  | Clone a current node.                                        |

Removing element can be done using method below:

| METHOD          | EXAMPLE                       | DESCRIPTION                    |
| --------------- | ----------------------------- | ------------------------------ |
| `removeChild()` | `node.removeChild(childNode)` | Remove `childNode` child node. |

Replacing the element is also possible.

| METHOD           | EXAMPLE                          | DESCRIPTION                                  |
| ---------------- | -------------------------------- | -------------------------------------------- |
| `replaceChild()` | `node.replaceChild(node1,node2)` | Replace `node2` child to `node1` child node. |

```html
<!--SAMPLE HTML-->
<div>
    <p id="p1">First paragraph.</p>
    <p id="p2">Second paragraph.</p>
</div>

<!--JAVASCRIPT-->
<script>
    /* APPEND TEXT NODE TO NEWLY CREATED PARAGRAPH ELEMENT. */
    var textNode = document.createTextNode("New Text from JS.");
    var paraNode = document.createElement("p");
    paraNode.appendChild(textNode);
    
    /* APPEND PARAGRAPH ELEMENT TO DIV ELEMENT. */
    document.getElementsByTagName("div")[0].appendChild(paraNode);
</script>
```

## **Events**

JavaScript can executes code upon occurrence of events, such as click, keypress, and submit. Although events are recognized by the HTML & CSS, its function called **event handler** is defined in JavaScript.

There are several ways to execute events: one way is to inform the HTML source code what event to expect and define its handler in JavaScript.

```html
<!--SAMPLE HTML-->
<div>
    <!-- EVENT ON CLICKING. -->
    <button onclick="functionName()">CLICK</button>
</div>

<!--JAVASCRIPT-->
<script>
    /* EVENT HANDLER. */
    function functionName() {
        statements;
    }
</script>
```

More flexible and dynamic way to execute events without disturbing any HTML source code is by using DOM of JavaScript.

```html
<!--SAMPLE HTML-->
<div>
    <!-- EVENT WILL BE ADDED USING DOM. -->
    <button id="btn">CLICK</button>
</div>

<!--JAVASCRIPT-->
<script>
    /* EVENT HANDLER USING DOM. */
    var x = document.getElementById("btn");	// Searches for an element to add event.
    x.onclick = function () {				// a function without a name.
        statements;
    }
</script>
```

The `addEventListener()` method is another way to add event and its event handler using JavaScript's DOM. Beware, the name of the event is not identical from the method introduced on previous section.

| METHOD                  | EXAMPLE                                      | DESCRIPTION                                    |
| ----------------------- | -------------------------------------------- | ---------------------------------------------- |
| `addEventListener()`    | `elem.addEventListener("event",funcName)`    | Add `event` that does `funcName` in `elem`.    |
| `removeEventListener()` | `elem.removeEventListener("event,funcName")` | Remove `event` that does `funcName` in `elem`. |

```html
<!--SAMPLE HTML-->
<div>
    <!-- EVENT WILL BE ADDED USING addEventListener() METHOD. -->
    <button id="btn">CLICK</button>
</div>

<!--JAVASCRIPT-->
<script>
    /* EVENT HANDLER USING DOM. */
    var x = document.getElementById("btn");		// Searches for an element to add event.
    x.addEventListener("click", functionName);	// Add event and its handler.
    
    function functionName() {
        statements;
        
        /* REMOVE EVENT AFTER EVENT HANDLER IS EXECUTED; MAKE FUNCTION SINGLE-USE. */
        // Without the code below ables event handler to execute multiple times.
        x.removeEventListener("click", functionName);
    }
</script>
```

### Event Propagation

Event propagation defines priority order of the event handlers. For example, suppose there's an HTML source code as below:

```html
<div>
    <P>
        Hello World!
    </P>
</div>
```

When both elements have an event, which event handler should be executed first: `<div>` or `<p>`?

* **Capturing**
  : goes down the tree structure of DOM (`<div>` first, `<p>` later).
* **Bubbling**
  : goes up the tree structure of DOM (`<p>` first, `<div>` later).

Event propagation can be set using `addEventListener()` method in `useCapture` Boolean parameter (default value is `useCapture = false`, bubbling).

| METHOD               | EXAMPLE                                              | DESCRIPTION                                                  |
| -------------------- | ---------------------------------------------------- | ------------------------------------------------------------ |
| `addEventListener()` | `elem.addEventListener("event",funcName,useCapture)` | `useCapture` is a Boolean value: `true/false` for capture/bubble. |

# **JAVASCRIPT: MODULE**

Starting from ES6, JavaScript now supports modules to be imported made by the other developer, just like Python programming language.

```js
/* JAVASCRIPT LOCATED IN "PATH/TO/MODULE.JS". */
// EXPORT THE VARIABLE AND FUNCTION FOR OTHER JAVASCRIPT.
export const variableName = value1;
export const functionName = (param1) => {
	return statement;
}

/* JAVASCRIPT TO CALL THE MODULE FROM "PATH/TO/MODULE.JS". */
// IMPORT SELECTED MODULE CONTENT
import {variableName, functionName} from "path/to/module.js"

// IMPORT ENTIRE MODULE CONTENT
import * as moduleName from "path/to/module.js";
```





# **JQUERY**

Either download jQuery library from jQuery.com

or include from CDN provided by Microsoft or Google, etc...

```html
<!-- MICROSOFT CDN -->
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>

<!-- GOOGLE CDN -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
```



# **JSON**

# **NODE.JS**

