---
name: C++
layout: document
title: "Programming | C++"
author: GKO95
category: Programming
description: "C++ is a high-level, general-purpose programming language created as an extension of the C programming language."
---
# **C++: INTRO**

General-purpose programming language that was based on C programming language. While C language only supports procedural programming, C++ allows object-oriented programming as well; thus, C++ is called hybrid language.

## Compilation

C/C++ language uses compiler to create executable file from the source code. Compiler translates C++ source code (written in high-level language: English) to a language computer can understand like binary code (low-level language). Compiled application can be executed without compiler afterward.

Compiler has a several standard revision for ISO (International Organization of Standardization) based on the time it was released. The most renowned revision is a C++11 and C++17. This document will instruct the programming language based on C++11 at minimum.

Compilation of C/C++ language is divided into two stage that is done by preprocessor and compiler (technically, preprocessor is included inside a compiler).

### Preprocessor

Preprocessing is a first stage of compilation done by a preprocessor. Preprocessor directive (aka. compiler directive) which is denoted by octothorpe symbol `#` in the script commands for preprocessor to perform certain actions before compiler does.

| Preprocessor Directive | Example               | Summery                                          |
| :--------------------- | --------------------- | ------------------------------------------------ |
| `#include`             | `#include <iostream>` | Include header file to the script.               |
| `#define`              | `#define SQUARE`      | Define new macro that can be used in the script. |
| `#pragma`              | `#pragma once`        | Provide additional options to the compiler.      |

Preprocessor does not read the C/C++ language but accepts preprocessor directive, comments, declaration, and et cetera within a source code and returns modified source code with preprocessor directive activated, comments removed, header files included, et cetera for compiler to process.

Preprocessor directive is not necessary when programming and does not observe C++ language grammar, but it does make programming much easier. Preprocessor is one of the components included in a compiler. 

### Compiler

After preprocessing is finished, the official stage of compilation is processed by the compiler. Compiler starts translating C++ source code to a language computer can understand, supported by those activated by preprocessor directives.

## Header File

A file that contains function declaration and macro definition which can be used on source code. There exist two different ways of including the header file to the source code: angled brackets `<>` and double quotations `""`.

```cpp
#include <iostream>
#include "header.hpp"
```

The difference is which location preprocessor searches for the including header files.

* `#include <header>`
    : searches directories pre-designated by the compiler or IDE, generally used for system header.
* `#include "header.hpp"`
    : searches current local directories where source file is located firsthand. If failed to find the match automatically searches in the pre-designated directories, just like `#include <header>`. This method is generally used for user-defined header.

Following is the list of header files that is often used when programming with C++ language.

| Header Files | Syntax                | Summery                                                      |
| ------------ | --------------------- | ------------------------------------------------------------ |
| `iostream`   | `#include <iostream>` | Defines standard input/output function:<br />`operator >>`, `operator <<` |
| `string`     | `#include <string>`   | Defines string-handling functions:<br />`append()`, `length()` |
| `cmath`      | `#include <cmath>`    | Define common mathematical functions:<br />`exp()`, `cos()`  |
| `chrono`     | `#include <chrono>`   | Defines date and time-handling functions:<br />`system_clock()`, `duration()` |

### Precompiled Header

Precompiled header is a header that is compiled into an intermediate form that is faster to process for the compiler. Having benefit of reducing compilation time, precompiled header is used on the project that includes large amount of header files, or a header file with huge data.

However, precompiled header is not always beneficial as using precompiled header does take more time to prepare for compilation. For a header file that is small or often subject to change, precompiled header is unnecessary.

| Precompiled Header | Compiler                              |
| ------------------ | ------------------------------------- |
| `stdafx.h`         | Visual Studio 2015 (msvc14) and below |
| `pch.h`            | Visual Studio 2017 (msvc15) and above |

# **C++: BASIC**

General programming language has essential, fundamental, or even helpful data and syntax that needs to be observed and acknowledged when coding. As the beginning of the practical coding, this chapter will introduce basic information on C++ language coding.

## Comment

There are two different comments in C++: line comment and block comment.

* **Line comment**
    : a comment worth a single line of code, and is declared by `//` (double slash).
* **Block comment**
    : a comment with multiple lines of code by using pairs of slash asterisk `/* */`.

```cpp
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

## Namespace

Name of data must be unique and cannot be used elsewhere to prevent confliction. This concept is equivalent to a directory (*project*) only allowed to have files (*data*) with unique name. To have the same naming available, these must be stored in separate folder (*namespace*).

Namespace is created using `namespace` keyword and data is stored inside the code block (`{}`). These data inside the namespace can be accessed by scope resolution (`::`) operator. However, name of the namespaces must be unique and cannot be used elsewhere in one program.

```cpp
int variable;

namespace namespace1 {
	int function1() {...}
}

namespace namespace2 {
	int variable, fucntion() {...}
}

// CALLING FUNCTION LOCATED IN DIFFERENT NAMESPACE.
namespace1::function();
namespace2::function();

// CALLING VARIABLE LOCATED IN AND OUT OF NAMESPACE.
variable;
namespace2::variable;
```

### Global Namespace

Aka. "root namespace", some data have leading scope resolution without specific namespace as previously introduced.

```cpp
::variable;
```

This syntax represents calling the data `variable` not included in any namespace, thus root of the namespace.. Consider Unix's path separator `/`: while the symbol indicates path of directory, it also represents root directory.

```makefile
# UNIX DIRECTORY & PATH SEPARATOR (/)
/Users/<username>/Documents
```

```cpp
// C++ NAMESPACE & SCOPR RESOLUTION (::)
::std::endl
```

The above is identical to `std::endl` that is not included in any namespace.

### `using` Declaration

Declaration with `using` keyword is used to simplify code by reducing repetitive typing of namespace upon using data. There are two different method on using declaration: either individually or as a whole namespace.

For declaration of individual data and whole namespace:

```cpp
// DECLARATION: INDIVIDUAL DATA
using namespace1::function();

// DECLARATION: WHOLE NAMESPACE
using namespace namespace2;
```

## Input & Output

C++ has an input and output under `std` namespace for a text-base console terminal using extraction (`>>`) operator and insertion (`<<`) operator:

| INPUT/OUTPUT | SYNTAX                         | DESCRIPTION                            |
| ------------ | ------------------------------ | -------------------------------------- |
| `std::cin`   | `std::cin >> variable;`        | Takes variable or string as an input.  |
| `std::cout`  | `std::cout << "Hello World!";` | Print variable or string on a console. |

```cpp
int variable;

std::cout << "Enter the value: "
std::cin >> variable;

std::cout << "Hello World!" << variable << std::endl;
```

```
Enter the value: 10
Hello World!10
```

### New-Line Manipulator

A new-line manipulator `std::endl` is a C++ Standard Library that ends or breaks and begins new line:

```cpp
std::cout << "First Line" << std::endl << "Second Line"; 
```

```
First Line
Second Line
```

### Escape Character

Escape character `\` is used to escape from sequence of character and execute certain operation within text-base data.

```cpp
std::cout << "First Line\nSecond Line";
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

C++ programming language have several number of pre-defined type identifier as follows:

| IDENTIFIER | DATA TYPE              | DESCRIPTION                                                  |
| ---------- | ---------------------- | ------------------------------------------------------------ |
| `int`      | Integer                | 32-bits precision integer number.<br />Size: 4 bytes         |
| `float`    | Floating point number  | Real number with decimal points.<br />Size: 4 bytes          |
| `double`   | Double-precision float | Float with doubled precision and memory.<br />Size: 8 bytes  |
| `char`     | Character: `''`        | A single character, e.g. `'A'` and `'?'`.<br />Size: 1 byte  |
| `string`   | String: `""`           | Series of characters under the namespace `std`.<br />Size: N/A (depends on overall character length) |
| `bool`     | Boolean                | Non-zero represents `true` while zero is `false`.<br />Size: 1 byte |
| `auto`     | Automatic              | Data type is declared automatically.<br />Useful for declaring new variable with complex data type. |
| `void`     | Void                   | Non-specific data type.<br />Size: 1 byte                    |

### `sizeof()` Operator

An operator that returns the allocating memory size of data type or variable in bytes.

```cpp
sizeof(int);		// SIZE: 4 BYTE
sizeof(char);		// SIZE: 1 BYTE
```

## Variable

Variable is a container for the data assigned using assignment (`=`) operator. There are three different common stages in variable: declaration, definition, and initialization.

* **Declaration**
  : declaration is declaring existence of the construct of such as variables, objects, and more. The declaring also includes specifying which data type the construct is.

  ```c++
  int variable;
  ```
  
* **Definition**
  : definition refers to block of codes on values and performance the construct has and is capable of. In case of variable which can acquire new data, the term *assignment* is more likely to use.

  ```c++
  variable = 3;
  ```

* **Initialization**
  : initialization is assigning the initial value to the construct, simply the *first* definition. Since the first definition is generally done on the same time when declaring the construct. Hence, initialization is commonly thought by people as *declaration + definition* which is not always true.

  ```c++
  int variable = 3;
  ```

Once the declaration sets data type to a variable, that variable can only take the value of that designated data type.

### Local & Global Variable

**Local variable** is a variable declared inside a code block, such as namespace, function, and class. Data stored in local variable is destroyed when exiting the code block, thus cannot be used outside. Local variable is allowed to have same variable name declared outside (technically, is borrowing the name as a different identity).

**Global variable** is a variable declared on a global scope of the script which is outside a code block. Global variable can be used inside a code block without any special keyword. However, global variable should be avoided if possible to prevent unexpected result and error caused by conflicting variables.

### Constant Variable

Constant variable is a special type of variable that cannot be changed after its initialization. The keyword `const` is used to declare it as a constant variable.

```cpp
const int variable = 3;
```

### Static Variable

Static variable is a special local variable which maintain its value even when escaped and re-entered a function code block. The keyword `static` is used to declare it as a static variable.

```cpp
static int variable = 3;
```

## Data Type Casting

Data type casting force-changes data type stored in a variable into other desired type. Casting the smaller size data to its compatible type of a larger size data is called *implicit* data type casting. This is a natural data type conversion automatically done by compiler as no data loss occurs.

```cpp
short A = 1;	// 2 BYTES INTEGER
int B = A;		// 4 BYTES INTEGER
```

On the other hand, its opposite conversion is called *explicit* data type casting which do have a risk of data loss/corruption upon casting data. Traditional C-style casting syntax (before C++11) is as follows:

```cpp
float A = 1.9;  // 4 BYTES FLOAT
int B = (int)A; // 4 BYTES INTEGER - INCOMPATIBLE: only returns its integer value.
```

```
1
```

However, starting from C++11 and its later version introduced four new casting syntaxes which traditional syntax lacked distinguishing upon casting data type.

### Static Cast

Static cast is general purpose casting responsible for implicit and explicit data-type conversion.

```cpp
int variable = 3;
static_cast<double>(variable);
```

### Constant Cast

Constant cast is a type casting operator used to type-cast constant variable, and can also change the value of the constant value. Modifying constant value uses "reference" which will be introduced in *C++: POINTER*.

```cpp
const int A = 3;				 // OLD: A = 3
int *B = const_cast<int *>(&A);
*B = 1;							// NEW: A = 1
```

### Dynamic Cast

Dynamic cast is used to handle polymorphism (class derived from base-class having different functionality). This casting is specifically designed for converting class. Class will be dealt on *C++: OBJECT-ORIENTED PROGRAMMING*.

```cpp
derivedClass *A = new derivedClass;
baseClass *B = dynamic_cast<baseClass *>(A);
```

### Reinterpret Cast

Reinterpret cast is used to convert pointer to pointer of other data type. It also allows any integral type to be converted into any pointer type and vice versa. Pointer will be dealt on *C++: POINTER*.

```cpp
int *variable = 3
reinterpret_cast<double *>(variable)
```

However, this casting is the most dangerous compared to other three and is suggested only to use with proper data type. 

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

# **C++: CONDITIONAL AND LOOP**

Conditional and loop statement is commonly used and one of the essential pieces of code in programming. This chapter introduces list of conditional and loop statements in C++ programming.

## `if` Statement

Conditional `if` statement runs code if the condition is true. When the condition evaluates `true`, the statements are carried out but otherwise ignored.

```cpp
if (condition) {
	statements;
}

// SIMPLIFIED STATEMENT
if (condition) statement;
```

It is possible to place`if` statement in another `if` statement, called "nested `if`". It is recommended to use code block (`{}`) to distinguish between `if` statements to avoid computer’s misinterpretation.

```cpp
if (condition) {
    if (condtion) { 
        statements;
    } 
}
```

### `else` Statement

Conditional `else` statement must be followed after `if` statement as it cannot be used alone. The statement contains code that is called when the condition evaluates `false`.

```cpp
if (condition) {
    statements;
}
else {
    statements; 
}
```

### `else if` Statement

Conditional `else`-`if` statement is a combination of `if` and `else` statement; when the first condition evaluates `false`, the `else if` statement provides second (or more) chance to evaluate condition different from the first one.

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

However, this is not the same as chain of `else`-`if` conditional statement as that is a combination of two different conditional set, while `else if` statement guarantees a single conditional set.

### Ternary Operator

Conditional statement can be expressed simply using ternary (`?:`) operator as shown below:

```cpp
condition ? return_true : return_false;
```

The vocabulary *ternary* represents the statement takes three arguments. Ternary operator should not be overused as it reduces readability, but useful on variable assignment.

## `switch` Statement

Conditional `switch` statement checks the argument passed to the function and compare its value referenced on `case` keyword. Every case needs `break` at the end of the group of statements to prevent the statement from proceeding condition evaluation afterward.

When no case is true to the expression, the statements from `default` keyword is returned. This case does not need `break` statement but must to be presented no matter what.

```cpp
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

```cpp
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

```cpp
while (condition) {
    statements;
}

// SIMPLIFIED STATEMENT
while (condition) statement;
```

### `do`-`while` Statement

The `do`-`while` loop statement is alternative of the `while` statement. Instead of checking the condition before executing looping statement, this statement is does opposite: execute looping statement first, then check the condition.

```cpp
do {
    statements
} while (condition);
```

## `for` Loop

The `for` loop statements repeatedly execute statements inside (aka. iterate) as long as the local variable holds the condition. On each loop, value (generally number) of the variable is incremented/decremented.

```cpp
for (variable; condition; increment) {
    statements;
}

// SIMPLIFIED STATEMENT
for (variable; condition; increment) statement;
```

### Range-based `for` Loop

Since C++11, a new variation of `for` loop statement (aka. `foreach` loop) was introduced that can loop the execution while in range. The range is generally refers to Sequence Container such as array and vector which its element can be sequenced one-by-one.

```cpp
for (variable : range) {
	statements;
}

// SIMPLIFIED STATEMENT
for (variable : range) statement;
```

The Container in C++ will be introduced in *C++: CONTAINER* chapter.

# **C++: CONTAINER**

C++ has a Container that can store collection of data. The container that can sequence stored data one-by-one is called sequence container. The most widely used (sequence) containers are array and vector.

## Array

Array is a sequence container used to store an indexed of item of same data type. To declare an array, bracket `[]` is used to define the size of the container how many value it can store:

```cpp
// DECLARATION
int arr[size];
```

and curly bracket `{}` is for assigning value to each element in sequence:

```cpp
// INITIALIZATION 1
int arr[size] = {value1, value2, ... };

// INITIALIZATION 2
int arr[] = {value1, value2, ... };
```

Upon initialization, a number of initialized value should not exceed than its declared size, thou it may be smaller which fills leftover with `0` or `NULL` value. The declared size cannot be changed afterward, but leaving the array size empty will automatically set to fit the content.

Calling array itself does not show the whole elements inside the array; instead it returns the memory address the array data is assigned to (aka. pointer) and is equivalent to the memory address of its first element.

```cpp
int arr[3] = {value1, value2, valu3};

arr;		// >> OUTPUT: 0139F854
&arr[0];	// >> OUTPUT: 0139F854
&arr[1];	// >> OUTPUT: 0139F858 ( = 0139F854 + 4 BYTES from integer data type)
```

This will be explained later on next chapter *C++: POINTER* in detail, so just understand there is such a thing.

Because of this characteristic of array data, array definition cannot be done as a whole; unlike initialization, definition after declaration must be done element-by-element. Each element can be accessed using a bracket `[]` with index starting from 0.

```cpp
int arr[3];

// DEFINITION
arr[0] = value1;
arr[1] = value2;
arr[2] = value3;
```

### Length of Array

When `sizeof()` operator is used on the array, it returns the total assigned byte size considering its data type, thus "$\mathrm{data \ type \ byte} \times \mathrm{number \ of \ elements}$". Hence, divided by data type byte results array length:

```cpp
int arr[3];

sizeof(arr)/sizeof(int);	// >> OUTPUT: 3 ( = LENGTH OF ARRAY)
```

### Multi-dimensional Array

Array can contain another array as an element, under the condition these arrays shares the same length. Multi-dimensional array can also be initialized without definite size but limited to its first boundary only.

```cpp
// INITIALIZATION 1
int arr[size1][size2] = {{value11, value12, ... }, {value21, value22, ...}, ... };

// INITIALIZATION 2
int arr[     ][size2] = {{value11, value12, ... }, {value21, value22, ...}, ... };
```

## Array Class

Array class is one of the C++ Standard Library that can also provide C-style array as introduced above, but with better accessibility and handling such as sequencing. To use array class, `<array>` header needs to be included.

```cpp
#include <array>

// DECLARATION
std::array<int, 3> arr;
```

Since there is not performance difference between these two, developer may freely choose which method to use unless sequencing matters.

*Reference: http://www.cplusplus.com/reference/array/*

## Vector Class

Vector is a sequence container much like an array but has a feature where it can change its size dynamically since the data is stored in separate memory where developer has to allocate manually (and dynamically). Thankfully, the memory management is all done by the system, thus no need to worry about allocation.

```cpp
#include <vector>

// DECLARATION
std::vector<int> vec;
```

Benefit of using the vector is container size can be flexibly (or dynamically) changed, due to its memory allocation property. When it comes to performance speed, array is much faster than vector.

*Reference: http://www.cplusplus.com/reference/vector/*

# **C++: FUNCTION**

C/C++ language is executed based around a single key function called `main()`. Understanding the concept of functions is important in C/C++ languages, which can also be used to create and implement custom function to serve specific purpose.

## Function

Function is an independent block of code which can process the data and present newly processed data once it’s called, allowing dynamic program scripting. The programming based around use of custom functions is called *functional programming*.

Function can be distinguished by its declaration with parenthesis after its name; `function()`. Its definition is stated inside a code block (`{}`), which is executed when called.

```cpp
// FUNCTION DEFINITION(AKA. IMPLEMENTATION)
float function(int arg1, float arg2)
{
	return arg1 + arg2;
}

function(1, 3.0);		// >> OUTPUT: 4.0
```

Because C++ programming is executed from top to bottom sequentially, function won't be executable unless it is defined firsthand. This creates difficulty with script and function management when the project becomes larger.

Function has a prototype used to let compiler know the function's existence recognizing its definition. Prototype shares same syntax of function declaration of its definition but without a code block.

```cpp
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

```cpp
float function(int arg1, float arg2);

function(1);             // >> OUTPUT: 3.0
function(1, 3.0);        // >> OUTPUT: 4.0

float function(int arg1, float arg2 = 2.0)
{
	return arg1 + arg2;
}
```

However, passing container such as array cannot be passed using the syntax above, requiring different method. There are two possible methods available: argument as an array, and as a memory address (pointer).

```cpp
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

```cpp
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

### Function Overloading

Multiple functions with the same name can exist as long as they are unique in arguments (such as number of arguments and its data type). This is called function overloading and these functions can have their own separate definition. Function data type does not overload functions.

```c++
float function(int arg1, float arg2);		// PROTOTYPE OF OVERLOADED FUNCTION 1
float function(float arg1, float arg2);		// PROTOTYPE OF OVERLOADED FUNCTION 2

function(1, 3.0);		// >> OUTPUT: 4.0
function(1.0, 3.0);		// >> OUTPUT: -2.0

// DEFINITION OF OVERLOADED FUNCTION 1
float function(int arg1, float arg2) {
	return arg1 + arg2;
}

// DEFINITION OF OVERLOADED FUNCTION 2
float function(float arg1, float arg2) {
	return arg1 - arg2;
}
```

## Entry Point

Entry point is the startup function where a program execution begins. There are three major entry points that can to be discussed in C++.

### `main()` Function

As the only entry point available in traditional C++ console application, a project must have one and only `main()` function within the project. Creating multiple `main()` functions or not having any `main()` function will cause error on running the program.

```cpp
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

```cpp
int wmain(int argc, wchar_t **argv /* ALTERNATIVE: wchar_t *argv[] */) {

    return 0;
}
```

C/C++ language is originated from UNIX platform which is different from Windows platform. Meaning, certain language characters (e.g. Greek, Cyrillic characters) may not be fully supported due to different encoding on `main()` entry point.

### `WinMain()` Function

The startup `WinMain()` function is an entry point for the application framework such as Win32 and MFC.

```cpp
int WinMain(HINSTANCE 	hInstance,
            HINSTANCE	hPrevInstance,
            LPSTR		lpCmdLine,
            int			nCmdShow)
{
    /* ENTERS MESSAGE LOOP:
    	WILL EXIT BY "return MSG.wParam;" */
    
    // QUIT WinMain() if failed to enter message loop.
    return 0;
}
```

The core functionality of `WinMain()` function is entering a message retrieval-and-dispatch loop, called Message Loop. More information on how framework application works, *PRGMING_MFC.md* is highly recommended for the reference and *PRGMING_Qt.md* for additional universal framework mechanism.

When receiving a `WM_QUIT` message will terminate the Loop and exit the application by returning the `WM_QUIT`'s *wParam* parameter. Failed to enter the Loop will continue to `return 0;` statement in case above, exiting application program.

*Reference: https://docs.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-winmain*

### `DllMain()` Function

The startup `DllMain()` function is an entry point for the dynamic linked library.

```cpp
int DllMain(_In_ HINSTANCE hinstDLL,
            _In_ DWORD     fdwReason,
            _In_ LPVOID    lpvReserved)
{
    
	return 0;
}
```

*Reference: https://docs.microsoft.com/en-us/windows/win32/dlls/dllmain*

## Recursion Function

Recursive function is a function that calls itself (recursion). Factorial $!$ in mathematic is the best example of recursive function implementation.

```cpp
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

## Callback Function

Aka. "call-after" function, it is a function that is passed as an argument to other function (calling function) which expects the argument (callback function) to execute on some time.

Do not try to understand the script below for now as this requires understanding of a pointer which will be dealt on *C++: POINTER § Function Pointer*.

```cpp
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

# **C++: POINTER**

Starting from *C++: Array* chapter, a new data called "pointer" was mentioned quite often. Pointer is very important concept in C/C++ programming language and is one of the commonly used data to develop advanced program.

This chapter mainly focuses on the pointer and its application that can improve performance and functionality of previously mentioned programming, especially on function.

## Pointer

Pointer is a variable that stores memory address of where the value is located, rather than the value itself. Despite being a memory address, pointer also must to be distinguished by a data type of value. When declaring pointer, compound specifier `*` (aka. asterisk) is placed between data type and identifier:

``` cpp
// POINTER DECLARATION
int* ptr;				// WARNING C4700: unintialized local variable 'ptr' used
```

Memory address can be called from non-pointer variable as well using ampersand (`&`) operator:

```cpp
// NON-POINTER DECLARATION
int variable;
&variable;				// >> OUTPUT: 0139F854
```

Since this hexadecimal memory address cannot be written by hand, the only way to either define or initialize the pointer is by assigning already existing memory address. Beware, data type must matched when defining pointer.

```cpp
// POINTER INITIALIZATION
int variable = 3;
int* ptr = &variable;

std::cout << ptr;		// >> OUTPUT: 0139F854	(ADDRESS)
std::cout << *ptr;		// >> OUTPUT: 3			(VALUE)
```

As seen above, it is possible to return value assigned to the pointer by placing dereference (`*`) operator. While pointer declaration also used asterisk, they are different existence but only sharing the same symbol.

|          OPERATOR          |  VARIABLE   |     RETURN     |
| :------------------------: | :---------: | :------------: |
| Address-on (`&`) Operator  | Non-pointer | Memory address |
| Contents-of (`*`) Operator |   Pointer   |     Value      |

Interestingly, any changes made on variable is also affects contents of the pointer as the pointer shares the same memory address. This feature is the most important when it comes to using pointer in C/C++.

### Null Pointer

Null pointer is a pointer that points to nothing. This can be done by assigning pointer with `nullptr` keyword:

```cpp
int* ptr = nullptr;		// >> OUTPUT: 00000000
```

### Void Pointer

Void pointer is a pointer with no specific data type (thus, `void`). This has advantage of being able to point to any kind of data type value by using static casting.

```cpp
// POINTER DECLARATION
void* ptr;

int variable;
static_cast<int*>(ptr) = &variable;
```

### Function Pointer

Pointer can also be assigned with function, called function pointer. This pointer points to the first line function execution, similar to array pointing to its first element. Function pointer is initialized as below:

```cpp
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

## Reference

Reference is a variable that aliases already existing variable. This can be thought as a constant pointer to the variable, with constant pointer declaration `*` applied by the compiler automatically.

```cpp
// REFERENCE DECLARATION
int variable;
int &ref = variable;
```

Reference must be declared and defined at the same time as reference is deemed as constant pointer; reference that is assigned once cannot be re-assigned afterward.

Unlike pointer that has its own memory address to store the memory address of another, reference shares the memory address and its value of the original variable. Instead, reference takes some space on the stack.

Reference is implemented in (1) passing arguments to function parameters, and (2) assigning return type at the function's end: this is where the term *call by reference* is derived from.

## Handle

*This article is specifically for intermediate-level developer for libraries such as MFC.*

Handle is a unique identifier for the specific data. The handle obtained from the specific data cannot be used to represent other data that includes same handle type. While handle can be integral type and stores certain information, it is generally the pointer that is defined as the name such as `HANDLE`. 

When expressed using the pointer:

```cpp
// RETURN OBJECT POINTER BY ID
void * GetHandle(UINT ID) {

	char variable = findObjectByID(ID);

	return reinterpret_cast<void *>(variable);	// RETURN POINTER
}
```

The function returns memory address of `variable` as void pointer.

The code above can be simplified by replacing certain portion using `typedef` aliasing:

```cpp
// RETURN OBJECT HANDLE(POINTER) BY ID
typedef void * HANDLE;
HANDLE GetHandle(UINT ID) {

	dType obj = findObjectByName(ID);

	return reinterpret_cast<HANDLE>(obj);	// RETURN HANDLE(POINTER)
}
```

Using a handle provides an opaque (concealing) wall between user code and internal representation. Advantage of using handle is the same user code can be implemented despite any update has been made in the library.

*Reference: https://stackoverflow.com/questions/902967/what-is-a-windows-handle*

# **C++: DYNAMIC MEMORY**

Memory management is one of the crucial factors in C/C++ programming language. Dynamic memory allocation is one of the management for greater memory efficiency. And because this concept is closely related to the pointer, understanding the concept cannot be neglected.

## Stack Structure

Stack is a linear LIFO (Last-In-First-Out) data structure; the first entered data is last to be freed from the memory structure. It is a main memory structure used by the compiler which automatically allocates and deallocates data upon declaration and destruction of data (e.g. variables and functions).

The reason compiler uses stack memory structure is due to its fast memory access. However, stack memory has a drawback that its size is fixed and cannot be expanded.

One of the example of stack structure characteristic can be seen on property of local variable; variable defined inside a scope such as function or namespace cannot be used outside the scope.

### Queue Structure

As opposite to stack structure, queue is a linear FIFO (First-In-First-Out) data structure. The first entered data is first to be released from the memory structure. The best example of queue memory structure is a serial communication port.

## Dynamic Allocation

While stack memory is fast but its memory capacity is fixed, there is also heap memory that is resizable though slower access speed. Heap memory is irrelevant to heap data structure and stores data in random heap memory location.

Allocating data to heap memory is done by developer manually, thus dynamic allocation. However, since dynamically allocated memory is not managed by the compiler, developer needs to be cautious on deallocating data manually afterward as well.

Dynamic allocation and deallocation to heap memory is done using `new` keyword and `delete` keyword:

```cpp
// DYNAMIC ALLOCATION
int* ptr1 = new int;
int* ptr2 = new int();

// DYNAMIC DEALLOCATION
delete ptr1;
delete ptr2;
```

The difference between former and latter dynamic allocation is default-initialization and value-initialization.

* **Default-initialization**: initialized with undetermined value.
* **Value-initialization**: initialized with value inside parentheses (data type), or construction call (class).

Dynamic allocation and deallocation of array data is similar to the method above:

```cpp
// DYNAMIC ALLOCATION  (ARRAY)
int* ptr = new int[];

// DYNAMIC DEALLOCATION (ARRAY)
delete[] ptr;
```

This process is extremely important as failed to do so will cause (1) memory leak and (2) dangling pointer.

### Memory Leak

Memory leak is caused by mismanagement of heap memory when dynamically allocated data is not released (deallocated) and accumulated that no more heap memory space is available. Shortage of memory will eventually lead to system failure.

Prevent memory leak by deallocating data on heap memory using `delete` keyword:

```cpp
delete ptr;
```

### Dangling Pointer

By deallocating data on heap memory prevents memory leak from happening. While the data addressed by the pointer is gone, the pointer still holds the address that now points to nothing. This is called dangling pointer and calling this pointer may result segmentation fault, aka. SEGFAULT.

To prevent this, it is advised to assign `nullptr` so the pointer would point at least to nothing than pointing aimlessly after deleting the heap memory data.

```cpp
// PROPER DEALLOCATION: DELETE DATA ON ADDRESS -> NULLIFY ADDRESS
delete ptr;
ptr = nullptr;
```

# **C++: STRING**

Conventional C language does not have a string data type that can hold the string data specifically; it uses array of character data type with extra byte at the end for null terminator `\0`. However, C++ has standard library for string data type.

## String

C-Style string, an array of character with null terminator, is expressed as follows:

```cpp
// C-STYLE STRING
char arr[] = "Hello";
char* ptr = "World!";
```

Despite C++ having its own string data, C-Style string is still used on number of C/C++ libraries.

## String Data Type

C++ string data type is included in `string.h` header which is part of the `iostream.h` header, and under the standard namespace `std`. C++ recommends usage of string data type over conventional C-style string.

```cpp
// C++ STRING
std∷string str = "Hello World!";
```

### String Array

An array cannot have elements with different size; for a string data type that can store text with various length, the only possible way to for array to contain collection of array is by storing pointer to the string.

```cpp
std::string arr[] = {"Hello", "World!"};
```


# **C++: OBJECT-ORIENTED PROGRAMMING**

Previous chapter have introduced conditional and loop statements and functions for processing code. As a hybrid programming language, C++ supports object-oriented programming (abbrev. OOP) paradigm.

## Object

Previous chapters have introduced variable (which can store data) and function (which can process data). Object, aka. instance, is a block of data which encapsulate these variables and functions as members of a single identity, called *member variable* (or *member field*) and *method* respectively.

The programming based around use of a custom objects is called *object-oriented programming*.

```cpp
std::string x = "Hello World!";
std::cout << x.length();
// Using "length()" method that returns number of characters.
```

```
12
```

### Encapsulation

Encapsulation is the core concept in object which...

1. combines variables and functions into a single object
2. restrict direct access to these variables and functions to prevent accidental modification from external code. 

### State & Behavior

Object has a properties called state and behavior which is frequently coined in C++:

* **State** of an object is a data stored in object *member variable* (or *member field*), accessed by `object.field` format.
* **Behavior** of an object is an action that can be done by object *method*, accessed by `object.method()` format.


## Class

Class is used to create objects (aka. instance), hence can be deemed as a blueprint of the object. Classes are created using keyword `class` and inside defines variables and functions which becomes member variable and methods for the object.

Class requires semicolon `;` at the end of the code block, and creating an instance from a class is called *instantiation*.

```cpp
// CREATING CLASS
class CLASS{
public:
    // MEMBER VARIABLE (AKA. MEMBER FIELD)
    int field1 = 1;
    float field2 = 3.0;
    
    // METHOD (AKA. MEMBER FUNCTION)
    float method(int arg) {
        return field1 + field2 - arg;
    }
};

// INSTANTIATION
CLASS instance;

// THEREFORE...
instance.field1;         // >> OUTPUT: 1
instance.field2;         // >> OUTPUT: 3.0
instance.method(2);      // >> OUTPUT: 2.0 (= 1 + 3.0 - 2)
```

### Constructor

Constructor is a special method automatically executed whenever instantiation has occurred and can define the number of arguments to pass to the instance. Name of a constructor must be same as the class name and does not require data type.

One of the common usage of constructor is initialization of member fields upon instantiation. There are two different initialization methods on constructor: (1) direct initialization and (2) list initialization.

```cpp
// CREATING CLASS
class CLASS {
public:
    // CONSTRUCTOR
    CLASS(int arg1, float arg2)
    {
        field1 = arg1; field2 = arg2;	// DIRECT INITIALIZATION
        statements;
    }
    
    int field1;
    float field2;
    
    float method(int arg) {
        return field1 + field2 - arg;
    }    
};

// INSTANTIATION
CLASS instance(1, 3.0);
```

----

```cpp
// CREATING CLASS
class CLASS {
public:
    // CONSTRUCTOR
    CLASS(int arg1, float arg2)
        : field1(arg1), field2(arg2)	// LIST INITIALIZATION
    {
    	statements;
    }
    
    int field1;
    float field2;
    
    float method(int arg) {
        return field1 + field2 - arg;
    }
};

// INSTANTIATION
CLASS instance(1, 3.0);
```

The advantage on using member initializer list is it can initialize the constant member field that is impossible when initialized directly.

Constructor is an optional member function and can be defined when developer wants. However, when constructor that takes argument(s) is presented, parenthesis `()` is required upon instantiation. Multiple constructor is allowed per class as long as rule of function overloading is observed.

### Destructor

Destructor is a special method automatically executed whenever instance is released (every time object is destroyed either systematically by compiler or manually by developer). Name of a destructor must be same as the class name with tilde `~` prefix and does not require data type.

```cpp
class CLASS {
public:
    // DESTRUCTOR
    ~CLASS() {
    	statements;
    }
    
    int field1 = 1;
    float field2 = 3.0;
    
    float method(int arg) {
        return field1 + field2 - arg;
    }
};
```

Destructor is an optional member function and can be defined when developer wants. Only one destructor is allowed per class and does not take any argument.

### Constant Object

Constant object is an object that cannot change the value of members after instantiation. Because of property of constant data, initialization of the member variables are done using constructor.

Following is a syntax used to create a constant object from a class:

```cpp
// INSTANTIATION: CONSTANT OBJECT
const CLASS instance;
```

Constant object can only access constant member variables and constant methods, while non-constant object can access both constant and non-constant members. Beware, declaration of a constant method is only available within the class and `const` keyword is located at suffix instead.

```cpp
// CREATING CLASS
class CLASS {
public: 
    int field1 = 1;
    float field2 = 3.0;
    
    float method1(int arg) {
        return field1 + field2 - arg;
    }
    
    // DECLARATION: CONSTANT METHOD
    void method2(int arg) const {
        statements;
    }
};
```

## Access Specifier

Access specifier in class defines accessibility to class members from the elsewhere. There are three access specifiers in C++: public, private, and protected.

| A.MODIFIER | KEYWORD     | DESCRIPTION                                                  |
| ---------- | ----------- | ------------------------------------------------------------ |
| Public     | `public`    | Members are accessible from the code outside the class.      |
| Private    | `private`   | Members are accessible only within the class.                |
| Protected  | `protected` | Members are accessible from derived class but still restricted from outside the class; refer to inheritance. |

## Friend Function

Friend function is a special function which can access private members of an objects. To declare friend function, place the prototype inside the class definition with `friend` keyword.

```cpp
class CLASS {
private:
    int field1 = 1;
    float field2 = 3.0;
    
    float method1(int arg) {
        return field1 + field2 - arg;
    }

    // FRIEND PROTOTYPE
    friend void function(CLASS &instance);
};

// FRIEND DEFINITION
void function(CLASS &instance) {
	instance.field1 = 2;
}

// INSTANTIATION
CLASS instance;
function(instance);

// THEREFORE...
instance.field1;	// >> OUTPUT: 2
instance.field2;	// >> OUTPUT: 3.0
instance.method(2);	// >> OUTPUT: 3.0 (= 2 + 3.0 - 2)
```

Because friend function is not a member, the function is called just like any other functions. Still, the fact that prototype was defined with members of the class grants access to the private members due to encapsulation.

## Pointer to Class

Object can be instantiated using pointer instead of variable. When assigned to a pointer, members are accessed via arrow member selection (`->`) operator.

```cpp
class CLASS {
public:
    CLASS(int arg1, float arg2)
        : field1(arg1), field2(arg2) { }
    ~CLASS() { }
    
    int field1;
    float field2;
    
    float method1(int arg) {
        return field1 + field2 - arg;
    }
};

// INSTANTIATION (POINTER)
CLASS instance(1, 3.0);
CLASS *ptr = &instance;

// THEREFORE...
instance->field1;		// >> OUTPUT: 1
instance->field2;		// >> OUTPUT: 3.0
instance->method(2);	// >> OUTPUT: 2.0 (= 1 + 3.0 - 2)
```

### Dynamic Object

Dynamic object is another method of instantiating a class, but the data is stored in heap memory instead of stack memory. This is a common method of instantiation when it comes to framework library to prevent releasing objects.

```cpp
// DYNAMIC OBJECT
CLASS *instance = new CLASS(1, 3.0);
```

### Identity

Identity is a third property of an object which distinguishes itself from others, commonly by using memory address to the object itself. Every object has an implicit `this` pointer which points to the address of itself and can be used to access its own member.

```cpp
class CLASS {
public:
    CLASS(int arg1, float arg2)
        : field1(arg1), field2(arg2) { }
    ~CLASS() { }
    
    int field1;
    float field2;
    
    float method1(int arg) {
        // USAGE OF THIS POINTER
        return (this->field1) + (this->field2) - arg;
    }
};
```

For those who are familiar with Python, consider `this` pointer as C++ version of `self` keyword.

## Inheritance

Inheritance is an act of base class providing member variables and methods to derived class. When the same name of members exists on both base class and derived class, members from base class are overridden by derived class's.

```cpp
// CREATING BASE CLASS
class BASECLASS {
public:
    BASECLASS() { std::cout << "BASE CLASS: Constructor" << std::endl; }
    ~BASECLASS() { std::cout << "BASE CLASS: Destructor" << std::endl; }
    
    int field1 = 1;
    float field2 = 3.0;
};

// CREATING DERIVED CLASS
class DERIVEDCLASS
    : public BASECLASS {
public:
    DERIVEDCLASS() { std::cout << "DERIVED CLASS: Constructor\n" << std::endl; }
    ~DERIVEDCLASS() { std::cout << "\nDERIVED CLASS: Destructor" << std::endl; }
    
    float field2 = 7.0;
    char field3 = 'A';
};


// INSTANTIATION
DERIVEDCLASS instance;
std::cout << instance.field1 << ", " << instance.field2 << ", " << instance.field3 << std::endl;
```

```
"BASE CLASS: Constructor"
"DERIVED CLASS: Constructor"

1, 7.0, A

"DERIVED CLASS: Destructor"
"BASE CLASS: Destructor"
```

### Type of Inheritance

There are three different types of class inheritance on OOP in C++ language:


| INHERITANCE | DESCRIPTION                                                  |
| :---------: | ------------------------------------------------------------ |
|   Public    | Private members of base class are not inherited nor accessible.<br />Public and protected members of the base class becomes public and protected members in derived class respectively. |
|   Private   | Private members of base class are not inherited nor accessible.<br />Public and protected members of the base class becomes private members in derived class. |
|  Protected  | Private members of base class are not inherited nor accessible.<br />Public and protected members of the base class becomes protected members in derived class. |


```cpp
// INHERITING BASECLASS1 (PUBLIC) & BASECLASS2 (PROTECTED)
class DERIVEDCLASS
    : public BASECLASS1, protected BASECLASS2
{
    statements;
};
```

## Polymorphism

Polymorphism means "having many forms", which in C++ programming means having different functionality based on the situation and usage. Polymorphism is one of the important features in OOP and is categorized into two types:

* Compile-time Polymorphism
    : polymorphism achieved on compilation (aka. static polymorphism).
* Run-time Polymorphism
    : polymorphism achieved on run-time (aka. dynamic polymorphism).

One of the compile-time polymorphism has been introduced already; *function overloading* which functions differently according to passed arguments.

### Operator Overloading

Overloading operator is another compile-time polymorphism which is customizing operator to function differently on certain classes or portion of the script. Just like function overloading, a single operator can have multiple implementation as long as the arguments are unique. Overloaded operators are exclusive to the class and won't be applied elsewhere.

The `operator` keyword is used to specify the operator for customization. Declaring and defining operator functionality follows syntax identical to member function.

```cpp
// CREATING CLASS
class CLASS {
public:
    // OPERATOR OVERLOADING 1
    void operator [] (int arg1, int arg2) {
    	statements;
    }
    
    // OPERATOR OVERLOADING 2
    CLASS operator + (const CLASS &arg) {
        statements;
        return arg;
    }
};
```

On the second operator overloading, `CLASS` type argument is referenced to the member function parameter and constant `const` keyword makes the parameter read-only. The parameters can access `CLASS` object passed from argument but cannot modify it due to constant property.

### Function Overriding

Overriding function is a run-time polymorphism where derived class redefine member inherited from the base class. The difference between overloading and overriding is, the formal *selects* functionality when the latter *redefines* functionality.

Virtual function is a special function specifically designed for function overriding, and is declared by `virtual` keyword. Declaration of the virtual function is only necessary in base class but not in derived class.

```cpp
// CREATING BASE CLASS
class BASECLASS {
public:
    // VIRTUAL FUNCTION
    virtual void polymorph() {
    	statements1;
    }	
};

// CREATING DERIVED CLASS
class DERIVEDCLASS1
    : public BASECLASS {
public:	
    // OVERRIDDEN FUNCTION
    void polymorph() {
    	statements2;
    }  
};
```

Virtual function can have its definition implemented on base class for either (1) using behavior directly from base class or (2) using behavior from derived class in case no function override has occurred. Meanwhile, virtual function without any definition implemented is called **pure virtual function**.

```cpp
// PURE VIRTUAL FUNCTION
virtual void polymorph() = 0;
```

Because pure virtual function has no definition in base class, it is a virtual function that *must be* overridden when inherited to derived class. Failed to do so will cause a compilation error.

Base class that has at least one pure virtual function is called **abstract class**. Due to the property pure virtual function has, abstract class cannot create its own instances and can only be used to create derived classes.

## Class in Files

For easier and efficient management of the project, creating a class as files is recommended. On Visual Studio 2019, the class file can be created by right clicking either *Source Files* or *Header Files* filter and select *Add >> Class...*. A new window will pop up shown as follows:

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\Cpp\create_class.png" width=100%></div>
<center style="font-weight:bold">Figure #. Adding class in Visual Studio 2019</center>
Class name typed on "**C<u>l</u>ass Name:**" automatically fills "**.h <u>f</u>ile:**" and "**.c<u>p</u>p file:**" with the same name. Click OK button to create two files: header file and source file in the project's *Header Files* and *Source Files* filter respectively.

Despite having separated into two different files, the class can be imported to the C++ script using `#include` directive.

```cpp
#include "ClassName.h"

int main() {

    // CALLING CLASS FROM "ClassName" CLASS FILES.
    ClassName instance(1, 3.0);
    
    return 0;
}
```

The header file is created as `.h` extension which is compatible for both C/C++ language, while `.hpp` extension is C++ exclusive. Generalizing default extension as `.h` is fine, but it is recommended to specify header extension distinguish base language.

### Class Header File

Class header file (.h) contains declaration of the class member fields and member functions:

```cpp
// HEADER "ClassName.h"
class ClassName {
public:
    ClassName(int arg1, float arg2);
    ~CLASS() { }
    
    int field1;
    float field2;
    float method(int arg3);
};
```

### Class Source File

Source file (.cpp) contains implementation and initialization of the class member which is declared in the header file. Declaration of the class must be imported to the class source code using `#include` directives:

```cpp
// SOURCE "ClassName.cpp"
#include "ClassName.h"

ClassName::ClassName(int arg1, float arg2)
	: field1(arg1), field2(arg2)
{
   statements;
}

ClassName::~ClassName()
{
   statements;
}

float ClassName::method(int arg3)
{
    return field1 + field2 - arg3;
}
```

# **C++: USER-DEFINED DATA TYPE**

Commonly used data type such as `int`, `float`, `char`, and more are already defined in `iostream.h` header. Developer may create and use custom data type based on these pre-defined data types.

## Structure

Structure groups multiple member variables under a single structure tag, regardless of data type of member variable.

```cpp
// STRUCTURE DECLARATION
struct STRUCTURE {
    int   field1;
    float field2;
};

// VARIABLE INITIALIZATION
STRUCTURE variable = {1, 3.0};
```

----

```cpp
// STRUCTURE DECLARATION & VARIABLE DECLARATION
struct STRUCTURE {
    int	  field1;
    float field2;
} varialbe;

// VARIABLE ASSIGNMENT
variable.field1 = 1;
variable.field2 = 3.0;
```

----

```cpp
// STRUCTURE INITIALIZATION
struct STRUCTURE {
    int   field1;
    float field2;
} 	varialbe = {1, 3.0};
```

Some C++ project may have structure variable assignment as `struct studenName student1;`. This syntax is still valid but `struct` keyword is not needed anymore starting from C++11 upon variable declaration.

## Union

Union groups multiple member variables under a single structure tag and shares memory address, regardless of data type of member variable. In other word, union is mainly used to present single data in different types of data (such as `int`, `char`, `bool`, et cetera). Because of this, union only requires value assignment on one member field.

```cpp
// UNION DECLARATION
union UNION {
    int  field1;
    char field2[2];
};

// VARAIBLE DECLARATION & ASSIGNMENT
UNION variable;
variable.field1 = 22136;    // >> OUTPUT: 22136		(0x 00 00 56 78)

variable.field2[0];         // >> OUTPUT: 'x'		(0x -- -- -- 78)
variable.field2[1];         // >> OUTPUT: 'V'		(0x -- -- 56 --)
```

----

```cpp
// UNION DECLARATION & VARIABLE DECLARATION
union UNION {
    int  field1;
    char field2[2];
} variable;

// VARAIBLE DECLARATION & ASSIGNMENT
variable.field1 = 22136;    // >> OUTPUT: 22136		(0x 00 00 56 78)

variable.field2[0];         // >> OUTPUT: 'x'		(0x -- -- -- 78)
variable.field2[1];         // >> OUTPUT: 'V'		(0x -- -- 56 --)
```

Since union shares a single memory location to store the value, data allocation size is set based on the member with data type of largest byte size. Member fields with smaller byte-size data type is represented as a portion of the overall.

## Enumeration

Enumeration means "action of mentioning a number of things one by one", thus is a user-defined data type which can only be assigned with a single enumerators that has corresponding integer.

```cpp
// ENUMERATION DELCARATION
enum ENUMERATION {
    enumerator1,    // = 0
    enumerator2,    // = 1
    enumerator3     // = 2
};

// VARIABLE INITIALIZATION
ENUMERATION variable = enumerator1;		// >> OUTPUT: 0
```

----

```cpp
// ENUMERATION DELCARATION & VARIABLE DECLARATION
enum ENUMERATION {
    enumerator1,    // = 0
    enumerator2,    // = 1
    enumerator3     // = 2
} variable;

// VARIABLE ASSIGNMENT
variable = enumerator1;		// >> OUTPUT: 0
```

----

```cpp
// ENUMERATION INITIALIZATION
enum ENUMERATION {
    enumerator1,    // = 0
    enumerator2,    // = 1
    enumerator3     // = 2
} variable = enumerator1;	// >> OUTPUT: 0
```

As a default, integer 0 is assigned to the first enumerator which is incremented by one on next enumerator. While enumerator itself must be unique which cannot share name, same integer value can be assigned to different enumerators using assignment (`=`) operator.

```cpp
enum ENUMERATION {
    enumerator1 = 2,    // >> OUTPUT: 2
    enumerator2,        // >> OUTPUT: 3
    enumerator3 = 1,    // >> OUTPUT: 1
    enumerator4,        // >> OUTPUT: 2
    enumerator5	        // >> OUTPUT: 3
};
```

Uniqueness of enumerators is global and must be observed even across enumerations. Hence, enumerator with the same name cannot exist under different enumeration, else would can cause compilation error.

```cpp
enum ENUMERATION1 {
	enumerator1,
    enumerator2
};

enum ENUMERATION2 {
	enumerator2,		// COMPILATION ERROR: MULTIPLE "enumerator2" EXIST!
    enumerator3
};
```

### Enumeration Class

Enumeration has a problem where enumerator must be globally unique and cannot share the same name despite located in different enumeration. Enumeration class, on the other hand, allows shared name of enumerator across the enumeration class.

```cpp
enum class ENUMERATION1 {
    enumerator1,
    enumerator2
};

enum class ENUMERATION2 {
    enumerator2,		// NO COMPILATION ERROR: "enumerator2" IS LOCAL!
    enumerator3
};
```

Enumeration class is recommended than enumeration as enumerator conflict can be prevented.

## Typedef Declaration

The `typedef` keyword is used to create an alias name for existing data type, providing better readability.

```cpp
typedef int dtypeName;
```

While this is not officially supported in C++ programming language, structure and union can be declared without tag as part of the C programming syntax. This is called *anonymous structure* and *anonymous union* which is for a single use:

```cpp
// ANONYMOUS STRUCTURE
typedef struct {
	int 	field1;
	float 	field2;
} variable1;

// ANONYMOUS UNION
typedef union {
	int		field1;
	float	field2;
} variable2;
```

## Type Alias Declaration

Previously on *C++: BASIC § Namespace* has introduced `using` keyword to simplify the code by reducing repetitive typing of namespace. The `using` keyword is also used on customizing data type to create an alias name for existing data type, serving better readability.

```cpp
using dtypeName = int;
```

There is no difference between type alias declaration and typedef declaration, meaning two are actually equivalent.

# **C++: TEMPLATE**

Template provides developer a format of functions or classes regardless of its data type. Hence, template is used to define multiple number of similar functions and classes in efficient way.

## Function Template

A template for a function is created using the following syntax:

```cpp
// FUNCTION TEMPLATE DECLARATION
template <class T, class U>
U function(T arg1, U arg2) {
    statements;
    return something;
}

// CALLING FUNCTION TEMPLATE (PARAMETERIZED FUNCTION)
function<int, float>(1, 3.0)
```

### `typename` Keyword

The `typename` keyword is used to explicitly tell compiler that trailing identifier is in fact a type. In template declaration, however, it is an alternative synonym for `class` keyword used in template parameters.

```cpp
// FUNCTION TEMPLATE DECLARATION (USING "typename" KEYWORD)
template <typename T, typename U>
U function(T arg1, U arg2) {
    statements;
    return something;
}
```

## Class Template

A template for a class is created using the following syntax:	

```cpp
// CLASS TEMPLATE DECLARATION
template <class T, class U>
class CLASS {
public:
    CLASS(T arg1, U arg2)
        : field1(arg1), field2(arg2) { }
    ~CLASS() { }
    
    T field1;
    U field2;
    
    U method1(T arg) {
        return field1 + field2 - arg;
    }
};

// CALLING CLASS TEMPLATE (PARAMETERIZED CLASS)
CLASS<int, float> instance(1, 3.0);
```

Built-in parameterized classes were previously introduced in *C++: CONTAINER § Array Class* and *§ Vector Class*.

```cpp
std::array<int, 3> arr;      // ARRAY CLASS : <class T, size_t N>
std::vector<int> vec;        // VECTOR CLASS: <class T>
```

### Class Template in Files

Creating a class template in two separate files is not official, since class template is not a class but a *template*. While there is a workaround, it isn't highly recommended.

```cpp
// HEADER "ClassName.h"
template<class T, class U>
class ClassName
{
public:
	ClassName(T arg1, U arg2);
	~ClassName();

	T field1;
	U field2;

	U method(T arg3);
};
```

```cpp
// SOURCE "ClassName.cpp"
#include "ClassName.h"

template<class T, class U>
ClassName<T, U>::ClassName(T arg1, U arg2)
	: field1(arg1), field2(arg2) { }

template<class T, class U>
ClassName<T, U>::~ClassName() { }

template<class T, class U>
U ClassName<T, U>::method(T arg3) {
	return field1 + field2 - arg3;
}
```

```cpp
// SOURCE "main.cpp"
#include <iostream>
#include "ClassName.h"
#include "ClassName.cpp"  // REQUIRED TO PREVENT LINKING ERROR!

int main() {
    
    // INSTANTIATION
    CLASS<int, double> instance(1, 3.0);
    
    return 0;
}
```

## Template Specialization

Some implementation of function template or class template may need to be defined separately for special occasion. Template specialization allows creating separate definition for specific data type despite already having the template.

```cpp
// FUNCTION TEMPLATE DECLARATION
template <class T, class U>
U function(T arg1, U arg2) {
    statements;
    return something;
}

// FUNCTION TEMPLATE SPECIALIZATION
template <>
bool function<char>(int arg1, float arg2) {
    statements;
    return something;
}
```

## Template Alias

Previously in *C++: USER-DEFINED DATA TYPE § Type Alias* explained on declaring data type with different alias name. This concept can be applied the same in aliasing new name for a template.

```cpp
template <class T, class U>
U function(T arg1, U arg2) {
    statements;
    return something;
}

// ALIASING TEMPLATE
template <class X, class Y>
    using aliasName = function<X, Y>;
```

# **C++: EXCEPTION**

Exception is a problem encountered during a program execution (not during compilation). C++ programming language offers keyword and blocks for controlling exceptions: `throw`, `try`, and `catch`. Through exception handling, stable program can be compiled and executed without any halt or crash.

## `try`/`catch` Blocks

Two code block pair, `try` block and `catch` block, is used to handle exception occurred during runtime. Following paragraphs explains what each code block is responsible for on exception handling.

The `try` block is a code block that attempts whether the code contains exception or not. If it encounters an exception inside the block, the remaining code won't be executed but skipped to corresponding exception `catch` block.

The `catch` block is a code block that contains code to be executed when exception occurred in `try` block. While there can only be one `try` block, multiple `catch` block can exist for different exceptions. If there is no `catch` block with corresponding exception, compilation error will occur (which is not an exception).

```cpp
// TRY BLOCK
try {
	statements;
}
catch(const std::out_of_range &e) {
	// CATCH: ERROR FOR ACCESSING ELEMENT OUT OF RANGE
}
catch(const std::exception &e) {
	// CATCH: ERROR FOR EVERY EXCEPTION
}
```

## `throw` Keyword

The `throw` keyword is used to manually halt execution and "throws" expression to `catch` keyword. Either expression such as numerical data, text data can follow behind, or may have no expression at all.

However, the `catch` exception handler cannot check the thrown value, but only its parameter type. 

```cpp
// TRY BLOCK
try {
    statements;
	throw expression;
}
catch(int e) {
	// CATCH: INTEGER EXPRESSION
}
catch(char e) {
	// CATCH: CHARACTER EXPRESSION
}
```

For exception handler to catch every exception and parameter type, place ellipsis `...` between parentheses.

```c++
catch(...) {
	// CATCH: EVERY EXCEPTION & PARAMETER TYPE
}
```

### Error Output

Standard output stream for error `std::cerr`, similar to standard output stream `std::cout`, prints text on the console terminal but exclusively designed for error such as exception.

```cpp
std::cerr << "Hello World!"
```

The difference between `std::cout` and `std::cerr` is they are streamed separately.

# **C++: FILE MANAGEMENT**

C++ programming language can read and write external file to save or import data. This chapter is mainly focused on accessing and modifying `.txt` extension text file.

Reading and writing external text file requires following additional header file:

|   HEADER    | DESCRIPTION                     |
| :---------: | ------------------------------- |
| `fstream.h` | Input/output file stream class. |

Inside the header file includes `std::ifstream` and `std::ofstream` object which is responsible for data input to the program and data output from program respectively.

## Opening Files

The file first needs to be opened to either read or write. Opening the file is done using `open()` method which is included in both `std::ifstream` (for reading) and `std::ofstream` (for writing). 

```cpp
#include <fstream>

std::ifstream file;
file.open("sample.txt");

/* EQUIVALENT:
std::ifstream file("sample.txt");
*/
```

File that is opened can now be read and written by the program.

## Reading Files

While there are several methods on reading the file, the best example is using `std::getline()` function. Execution of once will only extract a single text line, thus to extract every line requires loop statement.

The `std::ifstream` object is used since reading means text data input to the program.

```cpp
#include <fstream>

std::ifstream file("sample.txt");
while (getline(file, line)) {
	std::cout << line << std::endl;
}
```

## Writing Files

Writing text to the file is done using insertion (`<<`) operator followed by the data to be written. The `std::ofstream` object is used since writing means text data output from the program.

```cpp
#include <fstream>

std::ofstream file("sample.txt");
file << "Hello World!\n";
```

### Creating Files

New file can be created using the same method of writing file which does not bound by just writing on existing file. Creating file is simply done by designating file name is doesn't exist on the specified path.

```cpp
#include <fstream>

std::ofstream file("path\\new_file.txt");
file << "Hello World!\n";
```

## Closing Files

After opening the file, it should be closed manually. Just like opening with `open()` method, opened file is closed using `close()` method:

```cpp
#include <fstream>

std::ofstream file("sample.txt");
statements;
file.close();
```

# **C++: PREPROCESSOR**

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

# **C++: RANDOM**

Randomization may be necessary in some programming such as game development and statistical modeling. Random number generation requires following additional header file:

|   HEADER    | DESCRIPTION                                                  |
| :---------: | ------------------------------------------------------------ |
| `cstdlib.h` | Contains general purpose function such as random number, communication, et cetera. |

## `rand()` Function

The `rand()` function is a pseudo random number generator; it generates number randomly, but generated numbers are always same on every program execution.

```cpp
#include <cstdlib>

for (int index = 0; index < 3; index++) {
    std∷cout << rand() << " ";
}

// >> OUTPUT: 1 7 4 (1ST EXECUTION)
// >> OUTPUT: 1 7 4 (2ND EXECUTION)
// >> OUTPUT: 1 7 4 (3RD EXECUTION)
```

## `srand()` Function

The `srand()` function does not generate random number but only determines the randomness based on the argument of seed. Each seed will provide randomness unique from others.

However, `rand()` function is still required to generate random number. Thus, numbers are always generated in same pattern on every program execution in spite of having `srand()` function.

```cpp
#include <cstdlib>

srand(98);	// SEED FOR RANDOMNESS

for (int index = 0; index < 3; index++) {
    std∷cout << rand() << " ";
}

// >> OUTPUT: 8 7 5 (1ST EXECUTION)
// >> OUTPUT: 8 7 5 (2ND EXECUTION)
// >> OUTPUT: 8 7 5 (3RD EXECUTION)
```

## Truly Random Number

For different randomness requires renewed seed on each program execution. The best method for seed renewal is using timestamp which is an integer representation of data and time.

Timestamp can be acquired using `time()` function included in `ctime.h` header. To get the timestamp of an executed time of a `time()` function, pass the number 0 as its argument.

```cpp
#include <cstdlib>
#include <ctime>

srand(time(0));	// TIMESTAMP AS SEED FOR RANDOMNESS

for (int index = 0; index < 3; index++) {
    std∷cout << rand() << " ";
}

// >> OUTPUT: 4 0 0 (1ST EXECUTION)
// >> OUTPUT: 3 9 2 (2ND EXECUTION)
// >> OUTPUT: 5 7 1 (3RD EXECUTION)
```