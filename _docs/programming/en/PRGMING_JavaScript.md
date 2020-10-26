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
# **JAVASCRIPT: INTRO**
JavaScript is a procedural web development language used together with HTML & CSS, providing interactable dynamic webpage supports. Currently, JavaScript has a range of use in data processing, application development, and more.

This document focuses on JavaScript application in web development, thus only introduces crucial fundamental concepts while ignoring irrelevant.

## Interpreter
There are two different categories of program languages based on its execution: compiled language and interpreted language.

Source code written in English needs to be translated to binary computer language for the computer to understand. The compiler is responsible for the translation, and its best examples are C/C++ language. On the other hand, the interpreter executes code without translation but has a drawback on a slower speed.

JavaScript is the interpreted language, and the code runs equivalently despite running on a different system as long as it has the interpreter (aka. cross-platform).

## Hypertext Markup Language
Hypertext Markup Language (HTML) is a declarative web design language commonly used to generates a static website. A static website always shows the same content to website visitors. Meaning, HTML alone is not enough to provide various interfaces and features.

However, this document highly recommends learning HTML before learning JavaScript. JavaScript alone can design a webpage but is an inconvenient and inefficient task. It is conventional to create a webpage with HTML first then add interfaces and features using JavaScript.

Below is an example of HTML:

```html
<html>
    <!-- HTML 주석 -->
    <body style="text-align: center">
        <span class="example">Hello World!</span>
    </body>
</html>
```

### Cascade Style Sheets
Cascade Style Sheets (CSS) scripting language that assists HTML by styling HTML elements such as tag, id, class, and more. CSS is another simple language worth studying when learning HTML.

Below is an example of CSS:

```css
body {
    background-color: rgb(42, 45, 46);
    border: solid 3px black;
}

.example {
    font-family: 'Consola', monospace;
    color: white;
}
```

# **JAVASCRIPT: EXECUTE**
Only an internet browser is needed to execute JavaScript: Microsoft Edge, Google Chrome, Mozilla FireFox, Apple Safari, and more can run JavaScript.

The `.js` extension file alone cannot run JavaScript on an internet browser but only shows the script in text. Node.js program can execute JavaScript without a browser, though this document intends to introduce JavaScript for the beginner. Hence, this chapter focuses on setting up a simple JavaScript workspace that runs on an internet browser.

## Visual Studio Code
[Visual Studio Code](https://code.visualstudio.com/download) (VS Code) is a free source code editor developed by Microsoft. Since Microsoft has developed and is promoting TypeScript, a superset of JavaScript, VS Code also significantly supports JavaScript development environment along with TypeScript.

VS Code needs three files to configure a JavaScript workspace: JavaScript, HTML, and JSON file.

### `script.js` File
A JavaScript file is for test and experiment with your JavaScript experience. This document named the file as `script.js`.

### `index.html` File
An HTML file provides a runtime environment for executing JavaScript. If the JavaScript file is `script.js`, create a HTML file as `index.html` and write the code as follows:

```html
<html>
    <!-- LOAD "script.js" JAVASCRIPT FILE -->
    <script type="text/javascript" src="script.js"></script>
</html>
```

### `.vscode/launch.json` File
Run JavaScript on VS Code using an extension. To install the extension, press the `F1` key and select `Extensions: Install Extensions.` Search for the preferred browser:

* Google Chrome: `Debugger for Chrome`
* Mozilla FireFox: `Debugger for FireFox`
* Microsoft Edge: `Debugger for Microsoft Edge`

Install the extension by clicking the green `Install` button. Pressing the `F5` key will show a list of options to run JavaScript, including the selected browser, and automatically generates `.vscode/launch.json` file.

Add the following configuration to the JSON file: `"file": "${workspaceFolder}/index.html"`. Don't forget to place a comma when adding a new value to JSON. Below is the `launch.json` file for the Microsoft Edge browser.

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "edge",
            "request": "launch",
            "name": "Launch Edge against localhost",
            "url": "http://localhost:8080",
            "file": "${workspaceFolder}/index.html"
        }
    ]
}
```

Eventually, a JavaScript environment on VS Code would look like this:

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/programming/JavaScript/js_vs_workspace.png" style="display:block" width="100%"></div><center style="font-weight: bold;">Figure 1. JavaScript workspace environment on VS Code.</center>

There are two different methods when running JavaScript on VS Code: Run with debugging (`F5`) and run without debugging (`Ctrl+F5`). Use the debugging mode when the program encounters an error to identify the cause, but run without debugging when executing in general.

# **JAVASCRIPT: BASIC**
Every programming language has its own rules to be observed and fundamental data that works as a basis of the program. Failed to observe this causes either error or unexpected results. As for the beginning of the practical coding, this chapter will introduce basic knowledge of JavaScript language coding.

The JavaScript documents also introduce newly added syntax since the release of ECMAScript 2015, also known as ES6, that is a standardization for script-language.

## `<script>` Tag
HTML requires the `<script>` tag to implement JavaScript; either write JavaScript or load external JavaScript file using the `<script>` file:

```html
<!-- WRITING JAVASCRIPT -->
<script type="text/javascript">
	Write JavaScript Here... 
</script>

<!-- LOADING JAVASCRIPT -->
<script type="text/javascript" src="path/to/script.js"></script>
```

## Comment
Comment in a programming language is not executed and is commonly used to write down information related to the programming on source codes. There exist two comments in JavaScript: line comment and block comment.

* **Line comment**
    : a comment worth a single line of code, declared by `//`.
* **Block comment**
    : a comment with multiple lines of code, declared by `/* */`.

```js
/*
BLOCK COMMENT:
multiple lines of comment can be placed here.
*/
// LINE COMMENT: for a single line of code.
```

## Output
JavaScript has two different outputs:

| OUTPUT             | SYNTAX                   | DESCRIPTION                                                                         |
|--------------------|--------------------------|-------------------------------------------------------------------------------------|
| `document.write()` | `document.write("text")` | Write a text on HTML directly; not recommended as it affects webpage design.        |
| `console.log()`    | `console.log("text")`    | Print text on a terminal; press the `F12` key on a browser and check the "Console" tab. |

To print a mixture of more than a single data type in output functions, there are two possible methods with slightly different results.

1. Using a comma `,` can list the data in sequence but always places blank space on each comma.

    ```js
    console.log("Hello World!", 1);
    ```
    ```
    Hello World! 1
    ```

2. Concatenation of string using `+` and does not create blank space.

    ```js
    console.log("Hello World!" + 1);
    ```
    ```
    Hello World!1
    ```

## Pop-up Box
JavaScript has three different pop-up boxes for HTML:

| POP-UP      | SYNTAX                         | DESCRIPTION                                                  |
| ----------- | ------------------------------ | ------------------------------------------------------------ |
| `alert()`   | `alert("description")`            | A pop-up box with `"description"` with an OK button.        |
| `prompt()`  | `prompt("description","value")` | A pop-up box with `"description"` with input form with `"value"` as default. |
| `confirm()` | `confirm("description")`          | A pop-up box with `"description"` with both OK and Cancel button that returns True and False. |

## Identifier
An identifier is a name used to identify data in programming. In other words, it is just a user-defined name. JavaScript has the following rules when naming an identifier:

* Only alphabet, number, underscore `_`, and dollar sign `$` is allowed.
* First letter cannot start with a number.
* Blank space is prohibited.

## Variable
Variable is a container for data that can be assigned using the assignment operator `=`. Starting from ECMAScript 2015, there are three different types of variables.

| VARIABLE | EXAMPLE            | DESCRIPTION                       |
| -------- | ------------------ | --------------------------------- |
| `var`    | `var x = value;`   | Global variable                  |
| `let`    | `let x = value;`   | Local variable |
| `const`  | `const x = value;` | Unchangeable local/global variable      |

A declared variable does not need `var,` `let,` or `const` keyword when using. A variable in JavaScript can have any data type (ex. number, text, and more) assigned wherever and whenever.

### Initialization
Initialization is the first assignment to a variable where it commonly occurs on the *definition* process.

```js
# VARIABLE INITIALIZATION
let variable = 1
```

### Local & Global Variable
There are two types of variable in Python:

* **Local variable**
    : a variable defined within the code block, such as functions and classes. Data stored inside local variables are released when the program escapes from the code block, and the variables becomes unavailable outside. Due to this property, local variables may have the same name as other variables defined outside the code block.

    ```js
    /* LOCAL VARIABLE "let" */
    let y = "Outer Scope";
    if (true) {
        let y = "Inner Scope";
        console.log(y);
    }
    console.log(y);
    ```
    ```
    Outer Scope
    Inner Scope
    ```

* **Global variable**
    : a variable that does not belong to any code blocks within the script. Be cautious when using a global variable as it can affect other JavaScript code, which can lead to variable confliction or results undesired.

    ```js
    /* GLOBAL VARIABLE "var" */
    var x = 123.456;
    console.log(x);
    
    x = "This is a string.";
    console.log(x);
    ```
    ```
    123.456
    This is a string
    ```

### Constant
A constant variable is a variable that cannot change its value after initialization. Constant in JavaScript becomes a local and global variable depending on declared location: local variable when declared inside a code block, but global variable otherwise.

## Data Type
There are three categories of data in Python: numeric, boolean, and string data type.

### Numeric Data Type
While most of the programming language (such as C++, Java, and Python) have numerical data type of more than one in general. However, JavaScript only has one `number` numeric data type that can store both integer and floating-point numbers.

Arithmetic operation of a numeric data type is as follows:

| NAME           | OPERATOR | DESCRIPTION                          |
|----------------|:--------:|--------------------------------------|
| Addition       | `+`      | -                                    |
| Subtraction    | `-`      | -                                    |
| Multiplication | `*`      | -                                    |
| Division       | `/`      | -                                    |
| Modulus        | `%`      | Returns a remainder of the division. |

Assignment operator is a combination of an arithmetic and an assignment symbol `=`, making numerical calculation code written more concisely.

| OPERATOR | EXAMPLE  | EQUIVALENT  |
| :------: | -------- | ----------- |
|   `+=`   | `x += 1` | `x = x + 1` |
|   `-=`   | `x -= 1` | `x = x - 1` |
|   `*=`   | `x *= 1` | `x = x * 1` |
|   `/=`   | `x /= 1` | `x = x / 1` |
|   `%=`   | `x %= 1` | `x = x % 1` |

Although not an assignment operator, the similar increment and decrement operator has identical meaning as follows:

| OPERATOR    | EXAMPLE   | DESCRIPTION       |
|:-----------:|-----------|-------------------|
| `++` prefix | `x = y++` | `x = y; y = y+1;` |
| `++` suffix | `x = ++y` | `y = y+1; x = y;` |
| `--` prefix | `x = y--` | `x = y; y = y-1;` |
| `--` suffix | `x = --y` | `y = y-1; x = y;` |

### Boolean Data Type
A boolean data type is useful for a code that requires logical condition whether the statement is true or false.

| VALUE          | NAME            | DESCRIPTION                   |
|----------------|-----------------|-------------------------------|
| `True` or `1`  | Logically true  | Returned when logic is true.  |
| `False` or `0` | Logically false | Returned when logic is false. |

An integer value can substitute boolean logic values; any non-zero numbers represent `True`, while `False` is only expressed by zero.

A comparison operator is used to compare the relation of two or more values, returning corresponding boolean data type depending on whether the condition holds or not. 

| OPERATOR | DESCRIPTION              |
|----------|--------------------------|
| `<`      | Lesser than              |
| `<=`     | Lesser than or equal to  |
| `>`      | Greater than             |
| `>=`     | Greater than or equal to |
| `==`     | Equal to                 |
| `===`    | Identical (value & type) |
| `!=`     | Not equal to             |

The `===` operator is stricter than the `==` operator by evaluating whether both value and type matches.

Meanwhile, the boolean data type can be added, multiplied, and complemented as follows:

| OPERATOR | LOGIC | DESCRIPTION                                          |
|:--------:|-------|------------------------------------------------------|
| `&&`     | AND   | True when all the arguments are True, else False.    |
| `||`     | OR    | True when at least one argument is True, else False. |
| `!`      | NOT   | Change True to False and vice versa.                 |

### String Data Type
A string data type is text-based data that is distinguished by a pair of single quotation marks `''` or double quotation marks `""`. To place a quotation mark within a string object, insert a backslash `\` before the quotation mark to prevent the premature ending of the string.

```js
// COMPARISON BETWEEN IMPROPER AND PROPER WAY OF TYPING STRINGS.
console.log('Where's my "Cat in the Hat" book?');
console.log('Where\'s my "Cat in the Hat" book?');
```

```
Where
Where's my "Cat in the Hat" book?
```

String data changes to a new line by inserting an escape character `\n` as shown below:

```js
console.log("Hello\nWorld!");
```

```
Thank you!
You're welcome.
```

Previously, the only way to concatenate other data to a string data was by using the addition operator `+`. Starting from ES6, however, JavaScript provides template literal that can insert data in `${}` without dividing an existing string data.

```js
/* BEFORE ES6 */
let variable = 6;
let text = "This is before ES" + variable + "!";
console.log(x);

/* AFTER ES6 */
let variable = 6;
let text = `This is after ES${variable}!`
```

## Escape Character
Escape character `\` is used to escape from a sequence of characters and execute certain operations within text-based data. In the introduction on string data type, `\n` is used to change to a new line.

| SYNTAX | DESCRIPTION    |
|--------|----------------|
| `\n`   | New line       |
| `\t`   | Horizontal tab |
| `\\`   | Backslash      |
| `\b`   | Backspace      |
| `\'`   | Single quote   |
| `\"`   | Double quote   |

# **JAVASCRIPT: CONDITIONAL AND LOOP**
Conditional and iteration (or loop) statements are two of the most commonly used in programming. The "statement" in programming represents a code that executes or processes data. This chapter introduces a list of conditional and iteration statements in Python programming.

## `if` Statement
Conditional `if` statement runs code if the condition holds. When the condition evaluates `True`, the indented codes are carried out but otherwise ignored.

```js
if (condition)
{
    statements;
}

// SIMPLIFIED STATEMENT
if (condition) statement;
```

### `else` Statement
A conditional `else` statement cannot be used alone and must be followed by an `if` condition. The statement contains code that executes when evaluated `False`.

```js
if (condition)
{
    statements;
}
else
{
    statements; 
}
```

### `else if` Statement
A conditional `else if` statement is a combination of `else` and `if` conditions; when the first condition evaluates `false`, the `else if` statement provides a new condition different from the previous one. 

```js
if (condition)
{
    statements;
}
else if (condition)
{
    statements;
}
else
{
    statements;
}
```

However, this statement is different from the chain of `else`-`if` conditional statement as that is a combination of two sets of conditions. On the other hand, `else if` conditional statement is a continuation of an existing evaluation instead of starting new conditioning.

## Ternary Operator
A conditional statement can be simplified using the ternary operator shown below:

```js
condition ? true_return : false_return;
```

The vocabulary *ternary* indicates the statement takes three arguments. The ternary operator should not be overused as it reduces readability but useful on variable assignment.

## `switch` Statement
Conditional `switch` statement evaluates whether a variable matches a value assigned to the `case` keyword and executes the corresponding code if true. After execution, the `break` statement must locate to prevent further evaluation of the next `case` keyword.

If no condition matches, the statement automatically executes codes under the `default` keyword that is optional. The `default` keyword does not require the `break` statement as opposed to the `case` keyword.

```js
switch (argument) {
    case value1:
        statements;
        break;
    case value2:
        statements;
        break;
    default:
        statements;
}
```

Multiple `case` keywords may share the same code as follows:

```js
switch (argument) {
    case value1:
    case value2:
    case value3:
        statements;
        break;
    case value4:
    case value5:
    case value6:
        statements;
        break;
    default:
        statements;
}
```

### `break` Statement
The `break` statement is to end a loop prematurely. When encountered in the loop, the `break` statement escapes from the current loop but does not escape from the nesting loop.

### `continue` Statement
The `continue` statement skips the rest of the code below in the loop and jumps back to the conditioning part. It maintains the iteration rather than escaping from it like the `break` statement.

## `while` Loop
A `while` loop statement repeatedly executes statements inside (aka. iterate) as long as the condition holds. The loop ends once the condition evaluates `False`.

```js
while (condition)
{
    statements;
}

// SIMPLIFIED STATEMENT
while (condition) statement;
```

## `do`-`while` Statement
The `do`-`while` loop statement is similar to the `while` loop statement, but the former executes code first then evaluates, and the latter is vice versa.

```js
do
{
    statements
} while (condition);
```

## `for` Loop
The `for` loop statement repeatedly executes statements inside (aka. iterate) as long as the condition holds. Its local variable changes as specified on each iteration, which commonly uses integer increment.

```js
for (variable; condition; increment) {
    statements;
}

// SIMPLIFIED STATEMENT
for (variable; condition; increment) statement;
```

### Ranged-based `for` Loop
ES6 standardization introduces two different ranged-based `for` loop: `for-of` and `for-in.` The functionality is similar, but the passed argument and data aren't the same.

The `for-of` loop enumerates array data and passes a value of the element.

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

Meanwhile, the `for-in` loop enumerates object data and passes a key (properties name) of the element instead.

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

The concept of an array and object in JavaScript will be explained in later chapters.

# **JAVASCRIPT: ITERABLE**

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

# **JAVASCRIPT: FUNCTION**

## Function
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
