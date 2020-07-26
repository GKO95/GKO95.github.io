---
name: C
lang: en
layout: docs
author: GKO95
category: Programming
title: "Programming | C"
logo: "/assets/images/logo/logo-c.png"
summary: "."
order: 0x01
---
# **C: INTRO**

General-purpose programming language successor to *B* language developed at Bell Labs, designed to construct utilities for Unix. Currently, C is the most widely used programming language and has influenced on numerous programming languages such as C++, C#, Python, Java, and more. 

Though C++ is a superset of C programming language as it provides more functionality, C still has far better advantage on execution speed with greater compatibility and portability. This makes C a common language on many firmware & software development; Python is originally developed using C language!

## Paradigm

Paradigm is a classification of programming language based on their features. Paradigms are mainly categorized into two different groups: imperative, and declarative programming.

### Imperative Programming

Imperative programming is a paradigm that executes program using statements (a line of code that performs certain action) in sequence; it is a programming that focuses on defining how to execute. Below is an example of imperative programming in C language:

```c
// HOW TO EXECUTE: CONDITIONAL (CHECKS MODULUS AND ASSIGN "even" OR "false")
auto variable = value % 2 == 0 ? "even" : "odd";
```

The list of imperative programming languages are: C/C++, C#, Python, JavaScript, Java, and more.

*Procedural Programming* is one of the subcategory of imperative programming paradigm. Just like imperative, procedural programming executes code in sequence but supports structuring procedures (aka. functions).

*Object-Oriented Programming* (abbrev. OOP) is another subcategory of imperative programming paradigm, mainly using object that can store data (fields) and procedures (methods). OOP is considered imperative programming since the procedures within objects can access and modify the data fields.

### Declarative Programing

Declarative programming is a paradigm that executes program purely by declaration but without describing the flow, often defined as any style of programming that is not imperative; it is a programming that focuses on defining what to execute. Below is an example of declarative programming in HTML language:

```html
<!-- WHAT TO EXECUTE: "IMG" TAG (PRESENT IMAGE "./image.png" IN 400x300) -->
<img src="./image.png" width="400" height="300" />
```

The list of imperative programming languages are: HTML, Prolog, SQL, QML, Regex, and more

*Functional programming* is one of the declarative paradigm that focuses on using pure functions. While this paradigm is similar to procedural programming from imperative, there is a main difference: functional programming do not have side-effects which can occur on procedural programming, depending purely on arguments and return value (aka. *pure function*).

## Compilation

C/C++ language uses compiler to create executable file from the source code. Compiler translates C source code (written in high-level language: English) to a language computer can understand like binary code (low-level language). Compiled application can be executed without compiler afterward.

Compiler has a several standard revision for ISO (International Organization of Standardization) based on the time it was released. The most renowned revision is a ANSI C (aka. C89) and C99. This document will instruct the programming language based on ANSI C at minimum.

Compilation of C/C++ language is divided into two stage that is done by preprocessor and compiler (technically, preprocessor is included inside a compiler).

### Preprocessor

Preprocessing is a first stage of compilation done by a preprocessor. Preprocessor directive (aka. compiler directive) which is denoted by octothorpe symbol `#` in the script commands for preprocessor to perform certain actions before compiler does.

| Preprocessor Directive | Example               | Summery                                          |
| :--------------------- | --------------------- | ------------------------------------------------ |
| `#include`             | `#include <iostream>` | Include header file to the script.               |
| `#define`              | `#define SQUARE`      | Define new macro that can be used in the script. |
| `#pragma`              | `#pragma once`        | Provide additional options to the compiler.      |

Preprocessor does not read the C/C++ language but accepts preprocessor directive, comments, declaration, and et cetera within a source code and returns modified source code with preprocessor directive activated, comments removed, header files included, et cetera for compiler to process.

Preprocessor directive is not necessary when programming and does not observe C/C++ language grammar, but it does make programming much easier. Preprocessor is one of the components included in a compiler. 

### Compiler

After preprocessing is finished, the official stage of compilation is processed by the compiler. Compiler starts translating C/C++ source code to a language computer can understand, supported by those activated by preprocessor directives.

### CRT Security Warning

C Run-time Library (CRT) is the part of the C++ Standard Library that incorporates ISO C99 standard library. However, there are several functions not recommended as more secure version of functions are available, suffixed by `_s`. Attempting to utilize these less secured function can alert `C4996` compilation error related to function security warning.

CRT security warning is often found when programming with C language. To override this warning, enter the macro definition shown below:

```c
#define _CRT_SECURE_NO_WARNINGS
```

## Header File

A file that contains function declaration and macro definition which can be used on source code. There exist two different ways of including the header file to the source code: angled brackets `<>` and double quotations `""`.

```cpp
#include <stdio.h>
#include "header.h"
```

The difference is which location preprocessor searches for the including header files.

* `#include <header.h>`
    : searches directories pre-designated by the compiler or IDE, generally used for system header.
* `#include "header.h"`
    : searches current local directories where source file is located firsthand. If failed to find the match automatically searches in the pre-designated directories, just like `#include <header.h>`. This method is generally used for user-defined header.

Following is the list of header files that is often used when programming with C language.

| Header Files | Syntax                | Summery                                                      |
| ------------ | --------------------- | ------------------------------------------------------------ |
| `stdio`      | `#include <stdio.h>`  | Defines standard input/output function:<br />`printf()`, `scanf()` |
| `stdlib`     | `#include <stdlib.h>` | Defines various features, such as memory allocation, exception management (`cstdlib` in C++):<br />`rand()`, `malloc()` |
| `math`       | `#include <math.h>`   | Define common mathematical functions (`cmath` in C++):<br />`exp()`, `cos()` |
| `time`       | `#include <time.h>`   | Defines date and time-handling functions (`ctime` in C++):<br />`time()`, `clock()` |

### Precompiled Header

Precompiled header is a header that is compiled into an intermediate form that is faster to process for the compiler. Having benefit of reducing compilation time, precompiled header is used on the project that includes large amount of header files, or a header file with huge data.

However, precompiled header is not always beneficial as using precompiled header does take more time to prepare for compilation. For a header file that is small or often subject to change, precompiled header is unnecessary.

| Precompiled Header | Compiler                              |
| ------------------ | ------------------------------------- |
| `stdafx.h`         | Visual Studio 2015 (msvc14) and below |
| `pch.h`            | Visual Studio 2017 (msvc15) and above |

# **C: BASIC**

General programming language has essential, fundamental, or even helpful data and syntax that needs to be observed and acknowledged when coding. As the beginning of the practical coding, this chapter will introduce basic information on C++ language coding.

## Comment

There are two different comments in C/C++: line comment and block comment.

* **Line comment**
    : a comment worth a single line of code, and is declared by `//` (double slash).
* **Block comment**
    : a comment with multiple lines of code by using pairs of slash asterisk `/* */`.

```c
/*
BLOCK COMMENT:
multiple line of comment can be placed here.
*/  
// LINE COMMENT: for a single line of code.
```

## Identifier

Identifier is a name used to identify a data such as namespace, variable, function, object, class, and more. In other word, it is just a (user-defined) name. There are rules identifier has to observe:

* First character is only allowed to have an alphabet letters and underscore `_`.
* Beside the first character may use alphabet letters, digits, or underscores.
* Black spaces are prohibited.

## Input & Output

C languages displays the results by writing on the console windows and has several different version of output:

| OUTPUT      | SYNTAX                            | DESCRIPTION                                                  |
| ----------- | --------------------------------- | ------------------------------------------------------------ |
| `putchar()` | `putchar('A');`                   | Prints a single character on a console.                      |
| `puts()`    | `puts("Text");`                   | Prints sequence of characters (aka. string) on a console; auto new-line. |
| `printf()`  | `printf("format", var);`          | Prints sequence of characters (aka. string) on a console, with format support. |
| `fprintf()` | `fprintf(stream, "format", var);` | Extension of `printf()` function, available with `stream` selection.<br />`printf(...)` is equivalent to `fprintf(stdout, ...)`, where `stdout` is *standard output stream*. |

```c
// PUTCHAR()
putchar('A');

// PUTS()
puts("Hello World!");

// PRINTF()
float variable = 3.14159;
printf("variable: %.2f", variable);
```

```
AHello World!
variable: 3.14
```

Meanwhile, there are several different version of input which it reads the input data from the console:

| INPUT       | RETURN                        | DESCRIPTION                                                  |
| ----------- | ----------------------------- | ------------------------------------------------------------ |
| `getchar()` | Character                     | Accepts foremost character as an input.                      |
| `gets()`    | String (aka. character array) | Accepts sequence of characters (aka. string) as an input.    |
| `scanf()`   | Format-specific               | Accepts inputs matching format specifier; requires address (`&`) operator, except for string. |

```c
// GETCHAR()
char var1;
var1 = getchar();

// GETS()
char var2[20];
gets(var2);

// SCANF()
float var3; char var4[10];
scanf("%f %3s", &var3, var4);
```

```
A
>>> var1 = 'A'

Hello World!
>>> var2 = "Hello World!"

3.0 Program
>>> var3 = 3.000000
>>> var4 = "Pro"
```

### Formatted Specifier

Format specifier is to specify the format of data to be accepted as input. While format specifier is available on both `scanf()` input function and `printf()` output function, splicing data (`Program -> Pro`) should be formatted on input-side and how it is presented without modifying data (`3.14159 -> 3.14`) should be formatted on output-side function.

```c
int variable;
printf("Enter: ");
scanf("%5d", &variable);

printf("%3d", variable);
```

```
Enter: 1234567
12345			// NOT "123" AS SPECIFIED USING "%3d"
```

| FORMAT | DESCRIPTION           |
| :----: | --------------------- |
|  `%d`  | Decimal               |
|  `%f`  | Floating point number |
|  `%c`  | Character             |
|  `%s`  | String                |
|  `%x`  | Hexadecimal           |

### Escape Character

Escape character `\` is used to escape from sequence of character and execute certain operation within text-base data.

```c
printf("First Line\nSecond Line");
```

```
First Line
Second Line
```

| SYNTAX | DESCRIPTION    |
| ------ | -------------- |
| `\n`   | New line       |
| `\t`   | Horizontal tab |
| `\\`   | Backslash      |
| `\b`   | Backspace      |
| `\'`   | Single quote   |
| `\"`   | Double quote   |

## Data Type

Data type is one of the important factor which determines type and byte size of the data. A well-implemented data type can results memory and time efficiency when processing the script.

C programming language have several number of pre-defined type identifier as follows:

| IDENTIFIER | DATA TYPE              | DESCRIPTION                                                  |
| ---------- | ---------------------- | ------------------------------------------------------------ |
| `int`      | Integer                | 32-bits precision integer number.<br />Size: 4 bytes         |
| `float`    | Floating point number  | Real number with decimal points.<br />Size: 4 bytes          |
| `double`   | Double-precision float | Float with doubled precision and memory.<br />Size: 8 bytes  |
| `char`     | Character: `''`        | A single character, e.g. `'A'` and `'?'`.<br />Size: 1 byte  |
| `bool`     | Boolean                | Non-zero represents `true` while zero is `false`.<br />Size: 1 byte |
| `void`     | Void                   | Non-specific data type.<br />Size: 1 byte                    |

### `sizeof()` Operator

An operator that returns the allocating memory size of data type or variable in bytes.

```c
sizeof(int);		// SIZE: 4 BYTE
sizeof(char);		// SIZE: 1 BYTE
```

## Variable

Variable is a container for the data assigned using assignment (`=`) operator. There are three different common stages in variable: declaration, definition, and initialization.

* **Declaration**
    : declaration is declaring existence of the construct of such as variables, objects, and more. The declaring also includes specifying which data type the construct is.

    ```c
    int variable;
    ```

* **Definition**
    : definition refers to block of codes on values and performance the construct has and is capable of. In case of variable which can acquire new data, the term *assignment* is more likely to use.

    ```c
    variable = 3;
    ```

* **Initialization**
    : initialization is assigning the initial value to the construct, simply the *first* definition. Since the first definition is generally done on the same time when declaring the construct. Hence, initialization is commonly thought by people as *declaration + definition* which is not always true.

    ```c
    int variable = 3;
    ```

Once the declaration sets data type to a variable, that variable can only take the value of that designated data type.

### Local & Global Variable

**Local variable** is a variable declared inside a code block, such as namespace, function, and class. Data stored in local variable is destroyed when exiting the code block, thus cannot be used outside. Local variable is allowed to have same variable name declared outside (technically, is borrowing the name as a different identity).

**Global variable** is a variable declared on a global scope of the script which is outside a code block using `extern` keyword. Global variable can be used inside a code block without any special keyword. However, global variable should be avoided if possible to prevent unexpected result and error caused by conflicting variables.

### Constant Variable

Constant variable is a special type of variable that cannot be changed after its initialization. The keyword `const` is used to declare it as a constant variable.

```c
const int variable = 3;
```

### Static Variable

Static variable is a special local variable which maintain its value even when escaped and re-entered a function code block. The keyword `static` is used to declare it as a static variable.

```c
static int variable = 3;
```

## Data Type Casting

Data type casting force-changes data type stored in a variable into other desired type. Casting the smaller size data to its compatible type of a larger size data is called *implicit* data type casting. This is a natural data type conversion automatically done by compiler as no data loss occurs.

```c
short A = 1;	// 2 BYTES INTEGER
int B = A;		// 4 BYTES INTEGER
```

On the other hand, its opposite conversion is called *explicit* data type casting which do have a risk of data loss/corruption upon casting data. C-style casting syntax is as follows:

```c
float A = 1.9;  // 4 BYTES FLOAT
int B = (int)A; // 4 BYTES INTEGER - INCOMPATIBLE: only returns its integer value.
```

```
1
```

## Operator

Operator is the simplest form of data processing unit which can manipulate the value of operands. It operates simply by placing before, after, or between the operands.

### Arithmetic Operator

Arithmetic operator is mainly focused on processing numeric data type. Following is a list of arithmetic operator used by numeric data type:

|             NAME             | OPERATOR | DESCRIPTION                                                  |
| :--------------------------: | -------- | ------------------------------------------------------------ |
|           Addition           | `+`      | -                                                            |
|         Subtraction          | `-`      | -                                                            |
|        Multiplication        | `*`      | -                                                            |
|           Division           | `/`      | When both operands are integer: dividend is an integer without remainder.<br/>When at least one operand is real (float or double): dividend is a real (float or double). |
| Remainder (Modulus Division) | `%`      | Remainder only returns integer.                              |

For easier readability of the arithmetic operator, you can place blank space between number and operator, and it doesn’t affect anything on output.

### Assignment Operator

Assignment operator is another operation used within numeric data type. Following is a list of assignment operator used by numeric data type:

| OPERATOR | EXAMPLE  | EQUIVALENT  |
| -------- | -------- | ----------- |
| `+=`     | `x += 1` | `x = x + 1` |
| `-=`     | `x -= 1` | `x = x - 1` |
| `*=`     | `x *= 1` | `x = x * 1` |
| `/=`     | `x /= 1` | `x = x / 1` |
| `%=`     | `x %= 1` | `x = x % 1` |

Although not an assignment operator, a similar **increment and decrement** of the numerical value can be expressed as follow on C-based programming language:

| OPERATOR    | EXAMPLE   | DESCRIPTION       |
| ----------- | --------- | ----------------- |
| `++` prefix | `x = y++` | `x = y; y = y+1;` |
| `++` suffix | `x = ++y` | `y = y+1; x = y;` |
| `--` prefix | `x = y--` | `x = y; y = y-1;` |
| `--` suffix | `x = --y` | `y = y-1; x = y;` |

### Relational Operator

Relational operator is for checking whether the relational condition between two numeric values and returns Boolean value whether condition is true or false. Following is a list of relational operator:

| OPERATOR | DESCRIPTION              |
| -------- | ------------------------ |
| `<`      | Lesser than              |
| `<=`     | Lesser than or equal to  |
| `>`      | Greater than             |
| `>=`     | Greater than or equal to |
| `==`     | Equal to                 |
| `!=`     | Not equal to             |

### Logical Operator

Logical operator consist of AND, OR, and NOT logic. When doing so, think of `true` and `false` as binary 1 and 0, respectively. In wider sense, any non-zero number is deemed `true`.

| OPERATOR | LOGIC | DESCRIPTION                                                |
| -------- | ----- | ---------------------------------------------------------- |
| `&&`     | AND   | `true` when all the arguments are `true`, else `false`.    |
| `||`     | OR    | `true` when at least one argument is `true`, else `false`. |
| `!`      | NOT   | Change `true` to `false` and vice versa.                   |

# **C: CONDITIONAL AND LOOP**

Conditional and loop statement is commonly used and one of the essential pieces of code in programming. This chapter introduces list of conditional and loop statements in C programming.

## `if` Statement

Conditional `if` statement runs code if the condition is true. When the condition evaluates `true`, the statements are carried out but otherwise ignored.

```c
if (condition) {
	statements;
}

// SIMPLIFIED STATEMENT
if (condition) statement;
```

It is possible to place`if` statement in another `if` statement, called "nested `if`". It is recommended to use code block (`{}`) to distinguish between `if` statements to avoid computer’s misinterpretation.

```c
if (condition) {
    if (condtion) { 
        statements;
    } 
}
```

### `else` Statement

Conditional `else` statement must be followed after `if` statement as it cannot be used alone. The statement contains code that is called when the condition evaluates `false`.

```c
if (condition) {
    statements;
}
else {
    statements; 
}
```

### `else if` Statement

Conditional `else`-`if` statement is a combination of `if` and `else` statement; when the first condition evaluates `false`, the `else if` statement provides second (or more) chance to evaluate condition different from the first one.

```c
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

However, this is not the same as chain of `else`-`if` conditional statement as that is a combination of two different conditional set, while `else if` statement guarantees a single conditional set.

### Ternary Operator

Conditional statement can be expressed simply using ternary (`?:`) operator as shown below:

```c
condition ? return_true : return_false;
```

The vocabulary *ternary* represents the statement takes three arguments. Ternary operator should not be overused as it reduces readability, but useful on variable assignment.

## `switch` Statement

Conditional `switch` statement checks the argument passed to the function and compare its value referenced on `case` keyword. Every case needs `break` at the end of the group of statements to prevent the statement from proceeding condition evaluation afterward.

When no case is true to the expression, the statements from `default` keyword is returned. This case does not need `break` statement but must to be presented no matter what.

```c
switch (argument)
{
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

The `switch` statement can have its cases grouped together for a single label:

```c
switch (argument)
{
    case value1:
    default:
        statements;
        break;
    case value2:
    case value3:
        statements;
        break;
    case value4:
        statements;
        break;
}
```


### `break` Statement

The `break` statement can be used to end a loop prematurely, before complete iteration is made. When encountered inside a loop, immediately escapes from the loop but does not break from its outer loop.

### `continue` Statement

The `continue` statement skips the rest of the statement below in the loop and jumps back to the conditioning part. This maintains the loop iteration rather than escaping the loop like `break` statement.

## `while` Loop

The `while` loop statement repeatedly execute statements inside (aka. iterate) as long as the condition holds. The loop ends once the condition evaluates `false`.

```c
while (condition) {
    statements;
}

// SIMPLIFIED STATEMENT
while (condition) statement;
```

### `do`-`while` Statement

The `do`-`while` loop statement is alternative of the `while` statement. Instead of checking the condition before executing looping statement, this statement is does opposite: execute looping statement first, then check the condition.

```c
do {
    statements
} while (condition);
```

## `for` Loop

The `for` loop statements repeatedly execute statements inside (aka. iterate) as long as the local variable holds the condition. On each loop, value (generally number) of the variable is incremented/decremented.

```c
for (variable; condition; increment) {
    statements;
}

// SIMPLIFIED STATEMENT
for (variable; condition; increment) statement;
```

# **C: ARRAY**

C language can create array which stores collection of data. Array provides convenience on managing multiple data at once. This concept is also highly related to the *pointer* which will be introduced later. For now, this chapter will try to explain what array is without referencing pointer too much.

## Array

Array is a container used to store an indexed of item of same data type. To declare an array, bracket `[]` is used to define the size of the container how many value it can store:

```c
// DECLARATION
int arr[size];
```

and curly bracket `{}` is for assigning value to each element in sequence:

```c
// INITIALIZATION 1
int arr[size] = {value1, value2, ... };

// INITIALIZATION 2
int arr[] = {value1, value2, ... };
```

Upon initialization, a number of initialized value should not exceed than its declared size, thou it may be smaller which fills leftover with `0` or `NULL` value. The declared size cannot be changed afterward, but leaving the array size empty will automatically set to fit the content.

Calling array itself does not show the whole elements inside the array; instead it returns the memory address the array data is assigned to (aka. pointer) and is equivalent to the memory address of its first element.

```c
int arr[3] = {value1, value2, valu3};

arr;		// >> OUTPUT: 0139F854
&arr[0];	// >> OUTPUT: 0139F854
&arr[1];	// >> OUTPUT: 0139F858 ( = 0139F854 + 4 BYTES from integer data type)
```

This will be explained later on next chapter *C: POINTER* in detail, so just understand there is such a thing.

Because of this characteristic of array data, array definition cannot be done as a whole; unlike initialization, definition after declaration must be done element-by-element. Each element can be accessed using a bracket `[]` with index starting from 0.

```c
int arr[3];

// DEFINITION
arr[0] = value1;
arr[1] = value2;
arr[2] = value3;
```

### Length of Array

When `sizeof()` operator is used on the array, it returns the total assigned byte size considering its data type, thus "$\mathrm{data \ type \ byte} \times \mathrm{number \ of \ elements}$". Hence, divided by data type byte results array length:

```c
int arr[3];

sizeof(arr)/sizeof(int);	// >> OUTPUT: 3 ( = LENGTH OF ARRAY)
```

### Multi-dimensional Array

Array can contain another array as an element, under the condition these arrays shares the same length. Multi-dimensional array can also be initialized without definite size but limited to its first boundary only.

```c
// INITIALIZATION 1
int arr[size1][size2] = { {value11, value12, ... }, {value21, value22, ...}, ... };

// INITIALIZATION 2
int arr[     ][size2] = { {value11, value12, ... }, {value21, value22, ...}, ... };
```

## String

C language does not have a string data type, but represented using array of character with null terminator `\0` at the end:

```c
// C-STYLE STRING
char arr[] = "Hello";
char* ptr = "World!";
```

The following list shows several string functions available in C programming language:

| FUNCTION   | EXAMPLE               | DESCRIPTION                                                  |
| ---------- | --------------------- | ------------------------------------------------------------ |
| `strcat()` | `strcat(str1, str2);` | Append `str2` string at the end of `str1` string variable.   |
| `strcpy()` | `strcpy(str1, str2);` | Copy `str2` string to `str1` string variable.                |
| `strlen()` | `strlen(str);`        | Return the length of `str` string, excluding null terminator. |

# **C: FUNCTION**

C/C++ language is executed based around a single key function called `main()`. Understanding the concept of functions is important in C/C++ languages, which can also be used to create and implement custom function to serve specific purpose.

## Function

Function is an independent block of code which can process the data and present newly processed data once it’s called, allowing dynamic program scripting. The programming based around use of custom functions is called *functional programming*.

Function can be distinguished by its declaration with parenthesis after its name; `function()`. Its definition is stated inside a code block (`{}`), which is executed when called.

```c
// FUNCTION DEFINITION(AKA. IMPLEMENTATION)
float function(int arg1, float arg2)
{
	return arg1 + arg2;
}

function(1, 3.0);		// >> OUTPUT: 4.0
```

Because C/C++ programming is executed from top to bottom sequentially, function won't be executable unless it is defined firsthand. This creates difficulty with script and function management when the project becomes larger.

Function has a prototype used to let compiler know the function's existence recognizing its definition. Prototype shares same syntax of function declaration of its definition but without a code block.

```c
// FUNCTION PROTOTYPE (AKA. FORWARD DECLARATION)
float function(int arg1, float arg2);

function(1, 3.0);		// >> OUTPUT: 4.0

// FUNCTION DEFINITION (AKA. IMPLEMENTATION)
float function(int arg1, float arg2)
{
	return arg1 + arg2;
}
```

However, defining a function inside another function (aka nested function) is invalid in C/C++ language.

### `return` Statement

The `return` statement is a function-exclusive statement that outputs indicated data under the data type declared on the function. Once the `return` statement is executed, the function ends immediately despite there are codes still left inside.

If the function is a `void` data type, function can be returned by `return;` statement alone without any data to return.

### Parameter & Argument

Following are the difference between parameters and arguments that is referred significantly when discussing function.

**Parameter**
Parameter is a function-internal local variable: because parameters is a function-exclusive local variable, it cannot be called from outside.

| OPERATOR |   SYNTAX    | DESCRIPTION                                                  |
| :------: | :---------: | ------------------------------------------------------------ |
|   `=`    | `arg=value` | Parameter `arg` is assigned `value` by default when no other value is passed. Must locate after normal parameter. |

**Argument**
Argument is a value or object being passed to the function parameter and those passed values and objects will be processed by the function code. However, argument is independent from parameter: change on parameter does not affect value or object passed as argument.

Examples below show how function parameter and argument works:

```c
float function(int arg1, float arg2);

function(1);             // >> OUTPUT: 3.0
function(1, 3.0);        // >> OUTPUT: 4.0

float function(int arg1, float arg2 = 2.0)
{
	return arg1 + arg2;
}
```

However, passing container such as array cannot be passed using the syntax above, requiring different method. There are two possible methods available: argument as an array, and as a memory address (pointer).

```c
void function(int arg[]);

int arr[3] = {value1, value2, value3};
function(arr);              // PASSING ARRAY TO FUNCTION ARGUMENT

// ACCEPT ARGUMENT AS AN ARRAY
void function(int arg[]) {
    statements;
	return;
}
```

----

```c
void function(int *arg);

int arr[3] = {value1, value2, value3};
function(arr);              // PASSING ARRAY TO FUNCTION ARGUMENT

// ACCEPT ARGUMENT AS A POINTER
void function(int *arg) {
    statements;
	return;
}
```

This is possible because array itself returns a memory address. Again, pointer will be explanation on next chapter in detail.

## Entry Point

Entry point is the startup function where a program execution begins. There are three major entry points that can to be discussed in C++.

### `main()` Function

As the only entry point available in traditional C++ console application, a project must have one and only `main()` function within the project. Creating multiple `main()` functions or not having any `main()` function will cause error on running the program.

```c
int main(int argc, char **argv /* ALTERNATIVE: char *argv[] */) {

    return 0;
}
```

According to C++ standard, `main()` function must return `int` data: `EXIT_SUCCESS` (traditionally `0`) and `EXIT_FAILURE`. When return value is omitted by the programmer, the compiler implicitly insert `return 0;` at the end of the entry point.

Entry point `main()` function can have arguments mentioned above: argument count `argc` and argument vector `argv`. These arguments are apparent when executed through command-line:

```
./app.exe option1 option2
```

| Arguments | Data        |
| --------- | ----------- |
| `argv[0]` | `./app.exe` |
| `argv[1]` | `option1`   |
| `argv[2]` | `option2`   |

This indicates `argc` is always greater than 0 as the first element is an executing program.

Meanwhile, Windows OS has its exclusive entry point called `wmain()` function which supports wide character arguments encoded in UTF-16 Unicode (where UTF-8 Unicode encodes common character such as English and numbers).

```c
int wmain(int argc, wchar_t **argv /* ALTERNATIVE: wchar_t *argv[] */) {

    return 0;
}
```

C/C++ language is originated from UNIX platform which is different from Windows platform. Meaning, certain language characters (e.g. Greek, Cyrillic characters) may not be fully supported due to different encoding on `main()` entry point.

## Recursion Function

Recursive function is a function that calls itself (recursion). Factorial $!$ in mathematic is the best example of recursive function implementation.

```c
// EXAMPLE: FACTORIAL "!"
int factorial(int num) {
    // BASE CASE: a case when to escape from the recursion.
    if (num == 1)
        return (1);
    else
        return (num * factorial(num-1));
}
```

Recursion can occur indirectly by multiple number of functions calling one to another, then back to the beginning.

## External Function



## Callback Function

Aka. "call-after" function, it is a function that is passed as an argument to other function (calling function) which expects the argument (callback function) to execute on some time.

Do not try to understand the script below for now as this requires understanding of a pointer which will be dealt on *C: POINTER § Function Pointer*.

```c
// CALLING FUNCTION
float FUNC(float (*callback)(int, float), int arg1, float arg2) {
	float var = callback(arg1, arg2);		// FUNCTION CALLBACK
    return var;
}

// CALLBACK FUNCTION
float function(int arg1, float arg2) {
	return arg1 + arg2;
}

// THEREFORE...
FUNC(&function, 1, 3.0);	// >> OUTPUT: 4.0
```

# **C: POINTER**

Starting from *C: Array* chapter, a new data called "pointer" was mentioned quite often. Pointer is very important concept in C/C++ programming language and is one of the commonly used data to develop advanced program.

This chapter mainly focuses on the pointer and its application that can improve performance and functionality of previously mentioned programming, especially on function.

## Pointer

Pointer is a variable that stores memory address of where the value is located, rather than the value itself. Despite being a memory address, pointer also must to be distinguished by a data type of value. When declaring pointer, compound specifier `*` (aka. asterisk) is placed between data type and identifier:

``` c
// POINTER DECLARATION
int* ptr;				// WARNING C4700: unintialized local variable 'ptr' used
```

Memory address can be called from non-pointer variable as well using ampersand (`&`) operator:

```c
// NON-POINTER DECLARATION
int variable;
&variable;				// >> OUTPUT: 0139F854
```

Since this hexadecimal memory address cannot be written by hand, the only way to either define or initialize the pointer is by assigning already existing memory address. Beware, data type must matched when defining pointer.

```c
// POINTER INITIALIZATION
int variable = 3;
int* ptr = &variable;

printf("%x",  ptr);		// >> OUTPUT: 0139F854	(ADDRESS)
printf("%d", *ptr);		// >> OUTPUT: 3			(VALUE)
```

As seen above, it is possible to return value assigned to the pointer by placing dereference (`*`) operator. While pointer declaration also used asterisk, they are different existence but only sharing the same symbol.

|          OPERATOR          |  VARIABLE   |     RETURN     |
| :------------------------: | :---------: | :------------: |
| Address-on (`&`) Operator  | Non-pointer | Memory address |
| Contents-of (`*`) Operator |   Pointer   |     Value      |

Interestingly, any changes made on variable is also affects contents of the pointer as the pointer shares the same memory address. This feature is the most important when it comes to using pointer in C/C++.

### Null Pointer

Null pointer is a pointer that points to nothing. This can be done by assigning pointer with `nullptr` keyword:

```c
int* ptr = nullptr;		// >> OUTPUT: 00000000
```

### Void Pointer

Void pointer is a pointer with no specific data type (thus, `void`). This has advantage of being able to point to any kind of data type value by using static casting.

```c
// POINTER DECLARATION
void* ptr;

int variable;
(int*)ptr = &variable;
```

### Function Pointer

Pointer can also be assigned with function, called function pointer. This pointer points to the first line function execution, similar to array pointing to its first element. Function pointer is initialized as below:

```c
void function(int, int);

// FUNCTION POINTER INITIALIZATION
void (*ptr)(int, int) = function;

void function(int arg1, int arg2) {
	statements;
    return 0;
}
```

When assigning function pointer, not only should function data type is considered but also the parameters and its number. Failed to meet all these conditions cause compilation error.

While function returns value when used with parenthesis `function()`, function also returns memory address to its starting point when used without parentheses `function`. 

# **C: USER-DEFINED DATA TYPE**

Commonly used data type such as `int`, `float`, `char`, and more are already defined in `stdio.h` header. Developer may create and use custom data type based on these pre-defined data types.

## Structure

Structure groups multiple member variables under a single structure tag, regardless of data type of member variable.

```c
// STRUCTURE DECLARATION
struct STRUCTURE {
    int   field1;
    float field2;
};

// VARIABLE INITIALIZATION
struct STRUCTURE variable1 = {1, 3.0};
struct STRUCTURE variable2 = {.field2 = 3.0, .field1 = 1};
```

----

```c
// STRUCTURE DECLARATION
struct STRUCTURE {
    int   field1;
    float field2;
};

// VARIABLE DECLARATION
struct STRUCTURE variable;

// VARIABLE ASSIGNMENT
variable = (struct STRUCTURE) {1, 3.0};
```

## Union

Union groups multiple member variables under a single structure tag and shares memory address, regardless of data type of member variable. In other word, union is mainly used to present single data in different types of data (such as `int`, `char`, `bool`, et cetera). Because of this, union only requires value assignment on one member field.

```c
// UNION DECLARATION
union UNION {
    int  field1;
    char field2[2];
};

// VARAIBLE DECLARATION & ASSIGNMENT
union UNION variable;
variable.field1 = 22136;    // >> OUTPUT: 22136		(0x 00 00 56 78)

variable.field2[0];         // >> OUTPUT: 'x'		(0x -- -- -- 78)
variable.field2[1];         // >> OUTPUT: 'V'		(0x -- -- 56 --)
```

Since union shares a single memory location to store the value, data allocation size is set based on the member with data type of largest byte size. Member fields with smaller byte-size data type is represented as a portion of the overall.

### Array Union

When declaring array from union, that array can store different types of data due to the nature of union able to express single data into other data types.

```c
// UNION DECLARATION
union UNION {
    int   field1;
    float field2;
};

// ARRAY DECLARATION
union UNION arr[3];
```

## Typedef Declaration

The `typedef` keyword is used to create an alias name for existing data type, providing better readability

```c
typedef int dtypeName;
```

While this is not officially supported in C++ programming language, structure and union can be declared without tag as part of the C programming syntax. This is called *anonymous structure* and *anonymous union* which is for a single use:

```c
// TYPEDEF STRUCTURE
typedef struct {
	int 	field1;
	float 	field2;
} STRUCTURE;

// TYPEDEF UNION
typedef union {
	int		field1;
	float	field2;
} UNION;

// VARIABLE DECLARATION
STRUCTURE variable1;
UNION     variable2;
```

## User-Defined Data Pointer

C language do not support object-oriented programming paradigm. Despite not having a concept called object and class, it can still be implemented similarly on user-defined data.

When user-defined data is assigned by pointer, members can be accessed using arrow member selection (`->`) operator. This method is generally used when the user-defined data needs to be passed as function argument.

```c
// TYPEDEF STRUCTURE
typedef struct {
    int   field1;
    float field2;
} STRUCTURE;

// VARIABLE & POINTER DECLARATION
STRUCTURE variable;
STRUCTURE* ptr = &variable;

// THEREFORE...
ptr->field1 = 1;
ptr->field2 = 3.0;
```

# **C: DYNAMIC MEMORY**

Memory management is one of the crucial factors in C/C++ programming language. Dynamic memory allocation is one of the management for greater memory efficiency. And because this concept is closely related to the pointer, understanding the concept cannot be neglected.

## Stack Structure

Stack is a linear LIFO (Last-In-First-Out) data structure; the first entered data is last to be freed from the memory structure. It is a main memory structure used by the compiler which automatically allocates and deallocates data upon declaration and destruction of data (e.g. variables and functions).

The reason compiler uses stack memory structure is due to its fast memory access. However, stack memory has a drawback that its size is fixed and cannot be expanded.

One of the example of stack structure characteristic can be seen on property of local variable; variable defined inside a scope such as function or namespace cannot be used outside the scope.

### Queue Structure

As opposite to stack structure, queue is a linear FIFO (First-In-First-Out) data structure. The first entered data is first to be released from the memory structure. The best example of queue memory structure is a serial communication port.

## Dynamic Allocation

While stack memory is fast but its memory capacity is fixed, there is also heap memory that is resizable though slower access speed. Heap memory is irrelevant to heap data structure and stores data in random heap memory location.

Allocating data to heap memory is done by developer manually, thus dynamic allocation. However, since dynamically allocated memory is not managed by the compiler, developer needs to be cautious on deallocating data manually afterward as well. Dynamic allocation requires `stdlib.h` header.

| FUNCTION    | EXAMPLE               | DESCRIPTION                                                  |
| ----------- | --------------------- | ------------------------------------------------------------ |
| `malloc()`  | `malloc(size);`       | Allocate `size`-byte heap memory block; memory uninitialized, resulting `SEGFAULT` error. |
| `calloc()`  | `calloc(num, size);`  | Allocate `size`-byte heap memory blocks ($\times$ `num`) contiguously; initialized to 0 but slower than `malloc()`. |
| `realloc()` | `realloc(ptr, size);` | Reallocate to `size`-byte heap memory block.                 |
| `free()`    | `free(ptr);`          | Release dynamically allocated memory.                        |

```c
#include <stdlib.h>

// DYNAMIC ALLOCATION
int* ptr = malloc(10);

// REALLOCATION (10 -> 20 BYTES)
ptr = realloc(ptr, 20);

// DYNAMIC DEALLOCATION
free(ptr);
```

### Dynamic Array

Dynamic array is an array that can change its size dynamically. This implementation is widely used to allow expansion of array size as needed. As common array is static, thus cannot change size after declaration or even define size using non-constant integer.

Dynamic array is generally managed using structure, allow keeping track of array size and current capacity possible.

```c
#include <stdlib.h>

// TYPEDEF STRUCTURE
typedef struct {
    char* arr;
    int   size;        // ASSIGNED
    int   capacity;    // CAPACITY
} dyn_arr;

// VARIABLE DECLARATION
dyn_arr variable;

// DYNAMIC ARRAY (1 BYTE)
variable.arr = calloc(1, sizeof(*variable.arr));
variable.capacity = 1;

// RESIZE DYNAMIC ARRAY (1 + 5 BYTES)
variable.arr = realloc(variable.arr, (variable.capacity + 5) * sizeof(*variable.arr));
variable.capacity += 5;
```

### Memory Leak

Memory leak is caused by mismanagement of heap memory when dynamically allocated data is not released (deallocated) and accumulated that no more heap memory space is available. Shortage of memory will eventually lead to system failure.

Prevent memory leak by deallocating data on heap memory using `delete` keyword:

```c
free(ptr);
```

### Dangling Pointer

By deallocating data on heap memory prevents memory leak from happening. While the data addressed by the pointer is gone, the pointer still holds the address that now points to nothing. This is called dangling pointer and calling this pointer may result segmentation fault, aka. `SEGFAULT`.

To prevent this, it is advised to assign `nullptr` so the pointer would point at least to nothing than pointing aimlessly after deleting the heap memory data.

```c
// PROPER DEALLOCATION: DELETE DATA ON ADDRESS -> NULLIFY ADDRESS
free(ptr);
ptr = NULL;
```

# **C: FILE MANAGEMENT**

C language can read and write external file to save or import data. This chapter is mainly focused on accessing and modifying `.txt` extension text file.

## Opening Files

The file first needs to be opened to either read or write. Opening the file is done using `fopen()` function which returns pointer to `FILE` data type. The `mode` argument must be selected to specify whether the file is for read or write:

```c
FILE* fptr = fopen("sample.txt", mode);
```

| MODE   | DESCRIPTION                                     |
| ------ | ----------------------------------------------- |
| `"r"`  | Open for reading (file must exist)              |
| `"w"`  | Open for writing (create file if not exist)     |
| `"a"`  | Open for append (create file if not exist)      |
| `"r+"` | Open for reading and writing from beginning     |
| `"w+"` | Open for reading and writing, overwriting file  |
| `"a+"` | Open for reading and writing, appending to file |

## Reading Files

C languages has three different version of file reading functions, similar to input (from file to program) functions:

| INPUT      | SYNTAX                     | DESCRIPTION                                                  |
| ---------- | -------------------------- | ------------------------------------------------------------ |
| `fgetc()`  | `fgetc(fptr);`             | Returns the next character from the selected `fptr` file stream. |
| `fgets()`  | `fgets(buff,n,fptr)`       | Stores `n-1` long characters to buffer (ex. `char buff[100];`) with null terminator at the end. |
| `fscanf()` | `fscanf(fptr,format,vars)` | Stores data, separated by space or new line, to variables with matching format specifier; requires address (`&`) operator, except for string. |

```
<sample.txt>
Hello World!
65 3.14159
```

```cpp
FILE* fptr = fopen("sample.txt", "r");

// FGETC()
char var1;
var1 = fgets(fptr);    // >> RESULT: var1 = H

// FGETS()
char buff[10];
fgets(buff, 7, fptr);  // >> RESULT: buff = "ello W"

// FSCANF()
char[10] var2; int var3; float var4;
fscanf(fptr, "%s %d %f", var2, &var3, &var4);    // >> RESULT: var2 = "orld!", var3 = 65, var4 = 3.141590
```

## Writing Files

C languages has three different version of file writing functions, similar to output (from program to file) functions:

| OUTPUT      | SYNTAX               | DESCRIPTION                                                  |
| ----------- | -------------------- | ------------------------------------------------------------ |
| `fputc()`   | `fputc(char,fptr);`  | Writes a single character on a selected `fptr` file stream.  |
| `fputs()`   | `fputs(str,fptr);`   | Writes sequence of characters (aka. string) on a selected `fptr` file stream. |
| `fprintf()` | `fprintf("%d",var);` | Writes sequence of characters (aka. string) on a selected `fptr` file stream, with format support. |

```c
FILE* fptr = fopen("sample.txt", "w");

// FPUTC()
fgets('A', fptr);

// FPUTS()
fgets("Hello World!\n", fptr);

// FPRINTF()
fprintf(fptr, "%d %.2f %s", 1, 3.14159, "Program");
```

```
<sample.txt>
AHello World!
1 3.14 Program
```

### Creating Files

New file can be created using the same method of writing file which does not bound by just writing on existing file. Creating file is simply done by designating file name is doesn't exist on the specified path.

```c
FILE* fptr = fopen("path\\new_file.txt", "w");
fgets("Hello World!\n", fptr);
```

## Closing Files

After opening the file, it should be closed manually. Just like opening with `fopen()` function, opened file is closed using `fclose()` function:

```c
fclose(fptr);
```

The function returns 0 if closed successfully, else returns EOF (end of file).

# **C: EXCEPTION**

Exception is a problem encountered during a program execution (not during compilation). C programming language offers macro and functions for controlling exceptions: `errno`, `perror()`, and `strerror()`. Through exception handling, stable program can be compiled and executed without any halt or crash.

## Error Number

The macro `errno`, short for "error number", is a global variable defined inside `errno.h` header file. The macro must first be initialized to 0 before using, and is automatically assigned with new error number if anything goes wrong.

Following script is one of the best example of `errno` by attempting to open a non-existing file:

```c
#include <errno.h>    // ERRNO HEADER
extern int errno;     // ERRNO DECLARATION (GLOBAL)

int main(){
    // INITIALIZATION
    errno = 0;
    
    // ATTEMPT TO OPEN (NON-EXISTING) FILE
    FILE* fptr = fopen("./non_existance.txt", "r");
    
    // FAILED TO OPEN...
    if (fptr == NULL) {
        // ERROR NAME: ENOENT 2 (No such file or directory)
        fprintf(stderr, "Error opening file. Error code: %d\n", errno);
        exit(-1);
    }

    fclose(fptr);
    return 0;
}
```

```
Error opening file. Error code: 2
```

### Standard Error Stream

Previously on *C: BASIC § Input & Output* first introduced the most common output stream called *standard output* `stdout`. There are other kinds of stream, specifically designed for streaming error, namely *standard error* `stderr`.

```c
fprintf(stderr, "Hello World!");
```

These difference on stream allows control of streaming data from program to target devices/locations, such as console and file.

## Error Description

Error type can be expressed and stored as integer number using `errno` macro. However, these error can also be shown on console terminal in human-readable English, describing what is the cause of the error. This can be done using `perror()` function, without a need of `errno.h` header file.

```c
int main(){
    
    FILE* fptr = fopen("./non_existance.txt", "r");
    if (fptr == NULL) {
        // ERROR NAME: ENOENT 2 (No such file or directory)
        perror("ERROR Description");
        exit(-1);
    }

    fclose(fptr);
    return 0;
}
```

```
ERROR Description: No such file or directory
```

# **C: PREPROCESSOR**

C/C++ program language compiler processes the script into two divided stages: preprocessing and compilation. On the stage of preprocessing, preprocessor directive such as `#include` is taken care of by the compiler.

This chapter will introduce useful and commonly used preprocessor directives that is actually being implemented on development.

## Macro Definition

Macro is a fragment of code that is given a name (aka. identifier). A fragment of code can be a simple data (e.g. number, character, string) or an expression with arguments. The formal and latter is respectively called *object-like* and *function-like* macro.

The benefit of macro is it cannot be changed on runtime. The defined macro can be used on the script passed from a header file through `#include` directive.

### `#define` Directive

The `#define` directive is used to create macro:

```cpp
#define SOMETHING       value                // MACRO
#define ANYTHING(x, y)  (x * SOMETHING - y)  // MACRO WITH ARGUMENTS
```

### `#undef` Directive

In some cases, macro can cause naming collision that cannot be fixed on compilation stage. This macro can be removed by `#undef` directive:

```cpp
#undef SOMETHING
```

### Predefined Macros

Compilers have common standard and compiler-specific predefined macros available for developers.

* MSVC: [Microsoft Docs - Predefined Macros](https://docs.microsoft.com/en-us/cpp/preprocessor/predefined-macros)
* GCC: [GCC Online Documentation - Predefined Macros](https://gcc.gnu.org/onlinedocs/cpp/Predefined-Macros.html)
* Others: https://sourceforge.net/p/predef/wiki/Compilers/

## Conditional Inclusion

Preprocessor has a conditional directives that are used for conditional compilation. These directives are not to be used as a substitution of `if` and `else` conditional statement.

```cpp
#if		SOMETHING > value
	statements;
#elif	SOMETHING < value
	statements;
#else
	statements;
#endif
```

### Macro Condition

Conditional inclusion can check condition whether the macro is already defined or not:

```cpp
// IF COMPILED ON 64-BIT ARM OR x64
#ifdef	_WIN64
	statments;
#endif

// IF NOT COMPILED ON 64-BIT ARM OR x64
#ifndef	_WIN64
	statements;
#endif
```

## Pragma Directive

Pragma directive is used to configure features and options for a compiler. Each compiler differs from each other, and this makes pragma a non-standard compiler-specific preprocessor directive.

* MSVC: [Microsoft Docs - Pragma Directives and the Pragma Keyword](https://docs.microsoft.com/en-us/cpp/preprocessor/pragma-directives-and-the-pragma-keyword)
* GCC: [GCC Online Documentation - Pragmas](https://gcc.gnu.org/onlinedocs/gcc/Pragmas.html)

This chapter mainly focuses on pragma directive from MSVC as it is the most common and widely used C/C++ compiler provided by Microsoft Visual Studio.

### `#pragma once`

The `#pragma once` pragma directive is extremely useful upon compilation by only including the header file once instead of multiple time on every inclusion. 

```cpp
#pragma once
```

Through this pragma directive can reduce compilation time. Additionally, because it prevents multiple inclusion can this pragma function as *include guard*.

The following code is an example of include guard without using `#pragma once` pragma directive:

```cpp
// "header.h"
#ifndef HEADER_FILE
#define HEADER_FILE

#endif	/* HEADER_FILE */
```

If `header.h` has not been processed, the compiler defines the `HEADER_FILE` for the first time. However, upon second encounter, compiler will not process the header file again because of the macro conditioning.

### `#pragma region`

Though it does not affect any on compilation, `#pragma region` and `#pragma endregion` pair supports expanding and collapsing code block on Visual Studio Code Editor:

```cpp
#pragma region REGIONNAME
	statements;
#pragma endregion
```
