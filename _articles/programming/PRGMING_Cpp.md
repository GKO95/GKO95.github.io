---
name: C++
layout: document
title: "Programming | C++"
author: GKO95
category: Programming
description: "C++ is a high-level, general-purpose programming language created as an extension of the C programming language."
---
# **C++: BASIC**

General-purpose low-level programming language that was based on C programming language. While C language only supports procedural programming, C++ allows object-oriented programming as well; thus, C++ is called hybrid language.

While the C language itself is a deprecated language, it is taught in school and institution to let programmer be able to grasp the basic concept and practice how to write C-based language, i.e., C++ and C#. C-based language especially involves a lot with computer memory and is important to understand how computer memory works.

## Compilation

C-based language uses compiler to run the source code. Compiler translates C++ source code (written in high-level language: English) to a language computer can understand. Without the compiler, a program developed by C++ cannot execute the source file.

Compiler has a several standard revision for ISO (International Organization of Standardization) based on the time it was released. The most renowned revision is a C++11 and C++17. This document will instruct the programming language based on C++11 at minimum.

Compilation is divided into two stage that is done by preprocessor and compiler (technically, preprocessor is included inside a compiler).

### Preprocessor

Preprocessing is a first stage of compilation done by a preprocessor. Preprocessor directive (aka. compiler directive) which is denoted by octothorpe symbol `#` in the script commands preprocessor to perform certain actions before compiler does.

| Preprocessor Directive | Syntax                | Summery                                          |
| :--------------------- | --------------------- | ------------------------------------------------ |
| `#include`             | `#include <iostream>` | Include header file to the script.               |
| `#define`              | `#define SQUARE`      | Define new macro that can be used in the script. |
| `#pragma`              | `#pragma once`        | Provide additional information to the compiler.  |

Preprocessor does not read the C and C++ language but accepts preprocessor directive, comments, declaration, and et cetera within a source code as an input and returns modified source code with preprocessor directive activated, comments removed, header files included, et cetera for compiler to process.

Preprocessor directive is not necessary when programming and does not observe C++ language grammar, but it does make programming much easier. Preprocessor is one of the parts included in a compiler file. 

### Compiler

After preprocessing is finished, the official stage of compilation is processed by the compiler. Compiler starts translating C++ file source code to a language computer can understand, supported by those activated by preprocessor directives.

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
| `ctime`      | `#include <ctime>`    | Defines date- and time-handling functions:<br />`time()`, `clock()` |

### Precompiled Header

Precompiled header is a header that is compiled into an intermediate form that is faster to process for the compiler. Having benefit of reducing compilation time, precompiled header is used on the project that includes large amount of header files, or a header file with huge data.

However, precompiled header is not always beneficial as using precompiled header does take more time to prepare for compilaion. For a header file that is small or often subject to change, precompiled header is unnecessary.

| Precompiled Header | Compiler                              |
| ------------------ | ------------------------------------- |
| `stdafx.h`         | Visual Studio 2015 (msvc14) and below |
| `pch.h`            | Visual Studio 2017 (msvc15) and above |

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

## Namespace

Name of data must be unique and cannot be used elsewhere to prevent confliction. This concept is equivalent to a folder (project) only allowed to have files (data) with unique name. To have the same naming available, these must be stored in separate folder (namespace).

Assigning data under the namespace will allow the use of multiple same name across different namespaces. Members of these namespace can be accessed by `::` (scope resolution) operator.

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

However, name of the namespaces must be unique and cannot be used elsewhere in one program.

### Global Namespace

Also known as "root namespace", some data have leading scope resolution without specific namespace as previously introduced.

```cpp
::variable;
```

This syntax represents calling the data `variable` from root of the namespace. Consider Unix's path separator: while the symbol indicates path of directory, it also represents root directory.

```makefile
# UNIX DIRECTORY & PATH SEPARATOR (/)
/Users/<username>/Documents
```

```cpp
// C++ NAMESPACE & SCOPR RESOLUTION (::)
::std::endl;
```

...which is identical to `std::endl;` that is not included in any namespace.

### Declaration

Declaration is used to simplify command to reduce repetitive typing of namespace on using data. There are two different method to use a declaration: either individually or as a whole namespace.

For declaration of individual data:

```cpp
using namespace2::function();

int variable;
namespace namespace1 {
    int function1() {...}
}

namespace namespace2 {
    int variable, fucntion() {...}
}
```

```cpp
namespace1::function();
function();

variable;
namespace2::variable;
```

For declaration of a whole namespace:

```cpp
using namespace namespace2;

int variable;
namespace namespace1 {
    int function() {...}
}

namespace namespace2 {
    int variable, fucntion() {...}
}
```

```cpp
namespace1::function();
function();

variable;  // WARNING: cannot distinguish "variable" and "namespace2::variable"
```

Beware, this approach may be convenient but has a risk of conflicts when other data  with the same name.

## Input & Output

C++ has a input and output function in C++ standard library under `std` namespace for a text-base console terminal:

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

### New Line Statement

A `std::endl` statement is a C++ Standard Library that ends or breaks the line and begins new line:

```cpp
std::cout << "First Line" << std::endl << "Second Line"; 
```

```
First Line
Second Line
```

### Escape Sequence

Escape sequence `\` is used to escape from execution of operation intended for an operator. On introduction on string data type, `\n` is used to switch new line.

| SYNTAX | DESCRIPTION    |
| ------ | -------------- |
| `\n`   | New line       |
| `\t`   | Horizontal tab |
| `\\`   | Backslash      |
| `\b`   | Backspace      |
| `\'`   | Single quote   |
| `\"`   | Double quote   |

## Identifier

Identifier is a name used to identify a data such as variable, function, object, class, namespace and more. In another word, it is just a (user-defined) name. There are rules identifier has to observe:

* First character is only allowed to have an alphabet letters and underscore `_`.
* Beside the first character may use alphabet letters, digits, or underscores.
* Black spaces are prohibited.

## Data Type

Data-type is one of the important factor in the C-based programming languages. Each data-type has its defined byte size to store data, thus results memory and time efficiency when processing the script. 

C++ programming language have several number of pre-defined type identifier as follows:

| IDENTIFIER | DATA TYPE              | DESCRIPTION                                                  |
| ---------- | ---------------------- | ------------------------------------------------------------ |
| `int`      | Integer                | 32-bits precision integer number.<br />Size: 4 bytes         |
| `float`    | Floating point number  | Real number with decimal points.<br />Size: 4 bytes          |
| `double`   | Double-precision float | Float with doubled precision and memory.<br />Size: 8 bytes  |
| `char`     | Character: `''`        | A single character, e.g. `'A'` and `'?'`.<br />Size: 1 byte  |
| `string`   | String: `""`           | Series of characters under the namespace `std`.<br />Size: N/A (depends on overall character length) |
| `bool`     | Boolean                | Non-zero represents `True` while zero is `False`.<br />Size: 1 byte |
| `auto`     | Automatic              | Data type is declared automatically.<br />Useful for declaring new variable with complex data type. |
| `void`     | Void                   | Non-specific data type.<br />Size: 1 byte                    |

Data type `float` and `double` is one of the commonly used numeric data type. Any arithmetic operation involving even a single floating point decimal data type is automatically converted to corresponding data type:

```cpp
int ivalue = 4;     			// INTEGER
float fvalue = 1.0; 			// FLOAT

auto result = ivalue + fvalue;	// INTEGER + FLOAT = FLOAT
```

### `sizeof()` Operator

An operator that returns the allocating memory size of data type or variable in bytes.

```cpp
sizeof(int);		// SIZE: 4 BYTE
sizeof(char);		// SIZE: 1 BYTE
```

## Data Type Casting

Data-type casting force changes type of the data into desired type. Assigning the smaller-scoped data to its compatible data-type of a greater-scope is called *implicit* data-type casting which is a natural data-type conversion as no data loss can occur.

```cpp
short A = 1;	// 2 BYTES INTEGER
int B = A;		// 4 BYTES INTEGER
```

On the other hand, its opposite is called *explicit* data-type casting which do have a risk of data corruption upon casting data. Traditional C-style casting syntax (before C++11) is as follows:

```cpp
float A = 1.9;	// 4 BYTES FLOAT
int B = (int)A;	// 4 BYTES INTEGER - INCOMPATIBLE: only returns its integer value.
```

```
1
```

However, starting from C++11 and its later version introduced four new casting syntaxes which traditional syntax lacked distinguishing upon casting the data-type.

### Static Cast

Static cast is general purpose casting responsible for implicit and explicit data-type conversion.

```cpp
int num = 3;
static_cast<double>(num);
```

### Constant Cast

Constant cast is a type casting operator used to type-cast constant variable, and can also change the value of the constant value. Modifying constant value can be done as follows

```cpp
const int A = 3;				// OLD: A = 3
int *B = const_cast<int *>(&A);
*B = 1;							// NEW: A = 1
```

### Dynamic Cast

Dynamic cast is used to handle polymorphism (class derived from base-class having different functionality). This casting specifically for converting class.

```cpp
derivedClass *A = new derivedClass;
baseClass *B = dynamic_cast<baseClass *>(A);
```

### Reinterpret Cast

Reinterpret cast is used to convert pointer to pointer of other data-type. It also allows any integral type to be converted into any pointer type and vice versa.

```cpp
int *num = 3
reinterpret_cast<double *>(num)
```

However, this casting is dangerous compared to other three and is suggested only to use it with proper data type The content pointed does not pass any kind of check nor transformation between types.

## Operation

Data type can be categorized mainly into three different type: numeric, boolean, and string. This section will introduce operations for numerical and boolean data type.

### Arithmetic Operation

Arithmetic operations are mainly focused on numeric data type. Following is a list of arithmetic operation used by numeric data type:

|             NAME             | OPERATOR | DESCRIPTION                                                  |
| :--------------------------: | -------- | ------------------------------------------------------------ |
|           Addition           | `+`      | -                                                            |
|         Subtraction          | `-`      | -                                                            |
|        Multiplication        | `*`      | -                                                            |
|           Division           | `/`      | When both operands are integer: dividend is an integer without remainder.<br/>When at least one operand is real (float or double): dividend is a real (float or double). |
| Remainder (Modulus Division) | `%`      | Remainder only returns integer.                              |

For easier readability of the arithmetic operation, you can place blank space between number and operator, and it doesn’t affect anything on output.

### Assignment Operation

Assignment operations are another operation used within numeric data type. Following is a list of assignment operation used by numeric data type:

| OPERATOR | EXAMPLE  | EQUIVALENT  |
| -------- | -------- | ----------- |
| `+=`     | `x += 1` | `x = x + 1` |
| `-=`     | `x -= 1` | `x = x - 1` |
| `*=`     | `x *= 1` | `x = x * 1` |
| `/=`     | `x /= 1` | `x = x / 1` |
| `%=`     | `x %= 1` | `x = x % 1` |

Although not an assignment operation, a similar **increment and decrement** of the numerical value can be expressed as follow on C-based programming language:

| OPERATOR    | EXAMPLE | DESCRIPTION   |
| ----------- | ------- | ------------- |
| `++` prefix | `x=y++` | `x=y; y=y+1;` |
| `++` suffix | `x=++y` | `y=y+1; x=y;` |
| `--` prefix | `x=y--` | `x=y; y=y-1;` |
| `--` suffix | `x=--y` | `y=y-1; x=y;` |

### Relational Operation

Relational operations are for checking whether the relational condition between two numeric values and returns boolean value whether condition is true or false. Following is a list of relational operation:

| OPERATOR | DESCRIPTION              |
| -------- | ------------------------ |
| `<`      | Lesser than              |
| `<=`     | Lesser than or equal to  |
| `>`      | Greater than             |
| `>=`     | Greater than or equal to |
| `==`     | Equal to                 |
| `!=`     | Not equal to             |

### Logical Operation

Logical operation consist of AND, OR, and NOT logic. When doing so, think of True and False as binary 1 and 0, respectively. In wider sense, any non-zero number is deemed True.

| OPERATOR | LOGIC | DESCRIPTION                                          |
| -------- | ----- | ---------------------------------------------------- |
| `&&`     | AND   | True when all the arguments are True, else False.    |
| `||`     | OR    | True when at least one argument is True, else False. |
| `!`      | NOT   | Change True to False and vice versa.                 |

# **C++: FUNCTION**

C-based language is executed based around a single key function called `main()`. Understanding the concept of functions is important in C-based languages, which can also be applied different programming languages as well.

## Variable

Variable is a container for the data which can be assigned using assignment operator `=`. There are three different common stages in variable: declaration, definition, and initialization.

* **Declaration**
  : declaration is declaring existence of the construct of such as variables, objects, and more. The declaring also includes specifying which data type the construct is.

  ```c++
  int value;
  ```
  
* **Definition**
  : definition refers to block of codes on values and performance the construct has and is capable of.

  ```c++
  value = 3;
  ```

* **Initialization**
  : initialization is assigning the initial value to the construct, simply the *first* definition. Since the first definition is generally done on the same time when declaring the construct. Hence, initialization is commonly thought by people as *declaration + definition* which is not always true.

  ```c++
  int value = 3;
  ```

Once the data type is defined to that variable, that variable can only take the value of that designated data type.

### Global & Local Variable

**Local variable** is a variable declared inside a code block, such as function or class. Data stored in local variable is removed when exiting the code block, thus cannot be used outside. Local variable is allowed to have same variable name declared outside (technically, is borrowing the name as a different identity).

**Global variable** is a variable declared on a global scope of the script which is outside a code block. It is possible to use the global variable inside a code block using `global` keyword. However, global variable should be avoided if possible to prevent unexpected result and error caused by conflicting variables.

### Constant Variable

Constant variable is a special type of variable that cannot be changed after its initialization. The keyword `const` is used to declare it as a constant variable.

```cpp
const int ivalue = 3;
```

### Static Variable

Static variable is a special local variable which maintain its value even when escaped and re-entered a function code block. The keyword `static` is used to declare it as a static variable.

```cpp
static int ivalue = 3;
```

## Function

Function is an independent block of code which can process the data and present newly processed data once it’s called, allowing dynamic program scripting. The programming based around use of custom functions is called *functional programming*.

Function can be distinguished by its declaration that has parenthesis after its name; `function()`. Its definition is stated inside a curly bracket `{}` which is executed when called.

```cpp
// FUNCTION DEFINITION
float function(int arg1, float arg2) {
	return arg1 + arg2;
}

function(1, 3.0);		// >> OUTPUT: 4.0
```

Because C++ programming is executed from top to bottom sequentially, function won't be executable unless it is defined firsthand. This creates difficulty with script and function management when the project becomes larger.

Function has a prototype used to let compiler know the function's existence recognizing its definition. Prototype shares same syntax of function declaration of its definition but without a code block.

```cpp
// FUNCTION PROTOTYPE
float function(int arg1, float arg2);

function(1, 3.0);		// >> OUTPUT: 4.0

// FUNCTION DEFINITION
float function(int arg1, float arg2) {
	return arg1 + arg2;
}
```

However, function defined another function (aka nested function) is invalid in C/C++ language.

### Return Statement

Return statement terminates a function and returns indicated value based on declared function's data type. 

For example, the statement `return arg1 + arg2;` above terminates/exits `function()` function as float sum of integer `arg1` and float `arg2` is returned. The data type is returned according to the data type of the function which is floating point number.

If the function is a `void` data type, function can be returned by `return;` statement alone.

### Parameter & Argument

Following are the difference between parameters and arguments that is referred significantly when discussed on function.

**Parameter**
Parameter is a function-internal local variable: because parameters is a function-exclusive local variable, it cannot be called from outside. It is possible to define default value for parameters which executes function using default value when no external value is passed.

**Argument**
Argument is a value/object being passed to the function parameter and those passed values and objects will be processed by the function code. However, argument is independent from parameter: change on parameter does not affect value/object passed as argument.

```cpp
float function(int arg1, float arg2);

function(1);			// >> OUTPUT: 3.0
function(1, 3.0);		// >> OUTPUT: 4.0

float function(int arg1, float arg2 = 2.0) {
	return arg1 + arg2;
}
```

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

Entry point is the startup function where a program execution actually starts from. There are three different entry points that can to be discussed in C++.

### `main()` Function

As the only entry point available in traditional C++ console application, a project must have one and the only `main()` function within all the source files. Creating multiple `main()` functions or not having any `main()` function will cause error on running the program.

```cpp
int main(int argc, char **argv /* ALTERNATIVE: char *argv[] */) {

    return 0;
}
```

In C++, the `main()` function must always return `int` type: `EXIT_SUCCESS` (traditionally `0`) and `EXIT_FAILURE`. When return value is omitted by the programmer, the compiler implicitly insert `return 0;` at the end of the entry point.

Entry point `main()` function can have parameters mentioned above: argument count `argc` and argument vector `argv`. These arguments are apparent when executed through command-line:

```
./app.exe option1 option2
```

| Arguments | Data        |
| --------- | ----------- |
| argv[0]   | `./app.exe` |
| argv[1]   | `option1`   |
| argv[2]   | `option2`   |

...which indicates `argc` is greater than 0 as the first element is an executing program.

Meanwhile, Windows OS has its exclusive entry point called `wmain()` function which supports wide character arguments encoded in UTF-16.

```cpp
int wmain(int argc, wchar_t **argv /* ALTERNATIVE: wchar_t *argv[] */) {

    return 0;
}
```

C and C++ language is originated from UNIX platform which is different from Windows platform. Meaning, certain language characters (e.g. Greek, Cyrillic characters) may not be fully supported due to different encoding on `main()` entry point.

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

# **C++: CONDITIONAL AND LOOP**

Line-by-line sequential code execution programming is also known as *procedural programming*. It is the basic programming style using mostly with conditional and loops statements and additional functions for assistance.

This chapter introduce list of conditional and loop statements essential in C/C++ programming.

## `if` Statement

Conditional `if` statement runs code if the condition is true. When the condition evaluates `True`, the statements are carried out but otherwise ignored.

```cpp
if (condition) {
	statements;
}

// SIMPLIFIED STATEMENT
if (condition) statement;
```

It is possible to place`if` statement in another `if` statement, called "nested `if`". It is recommended to use curly bracket `{}` to distinguish between `if` statements to avoid computer’s misinterpretation.

```cpp
if (condition) {
    if (condtion) { 
        statements;
    } 
}
```

### `else` Statement

Conditional `else` statement must be followed after `if` statement as it cannot be used alone. The statement contains code that is called when the condition evaluates `False`.

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

Conditional statement can be expressed simply using ternary operator as shown below:

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
}
```


### `break` Statement

The `break` statement can be used to end a loop prematurely, before complete iteration is made. When encountered inside a loop, immediately escapes from the loop but does not break from its outer loop.

### `continue` Statement

The `continue` statement skips the rest of the statement below in the loop and jumps back to the conditioning part. This maintains the loop iteration rather than escaping the loop like `break` statement.

## `while` Loop

The `while` loop statement repeatedly execute statements inside (aka. iterate) as long as the condition holds. The loop ends once the condition evaluates `False`.

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

Since C++11, a new variation of `for` loop statement was introduced that can loop the execution while in range. The range is provided by sequence container such as array and vector which its element can be sequenced one-by-one.

```cpp
for (variable : range) {
	statements;
}

// SIMPLIFIED STATEMENT
for (variable : range) statement;
```

The containers in C++ will be introduced on next chapter.

# **C++: CONTAINER**

C++ has a container that can store collection of data, analogous to iterable object in Python programming language. The container that can sequence stored data one-by-one is called sequence container. The most widely used (sequence) containers are array and vector.

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

### Array as Argument

Developer may wish to take external array data passed to a function parameter. There are two methods on passing array to parameter: as an array, and as a memory address (pointer).

```cpp
// FUNCTION PROTOTYPE
void function(int arg[]);

int arr[3] = {value1, value2, value3};
function(arr);

// FUNCTION DEFINITION
void function(int arg[]) {
    statements;
	return;
}
```

----

```cpp
// FUNCTION PROTOTYPE
void function(int *arg);

int arr[3] = {value1, value2, value3};
function(arr);

// FUNCTION DEFINITION
void function(int *arg) {
    statements;
	return;
}
```

This is possible because array itself returns a memory address. Again, pointer will be explanation on next chapter in detail.

### Multi-dimensional Array

Array can contain another array as an element, under the condition these arrays shares the same length.

```cpp
int arr[size1][size2] = {{value11, value12, ... }, {value21, value22, ...}, ... };
```

As mentioned previously, multi-dimensional array can also be initialized without definite size but limited to its first boundary only.

```cpp
// VALID INITIALIZATION
int arr[][size2] = {{value11, value12, ... }, {value21, value22, ...}, ... };

// INVALID INITIALIZATION
int arr[size1][] = {{value11, value12, ... }, {value21, value22, ...}, ... };
int arr[][] = {{value11, value12, ... }, {value21, value22, ...}, ... };
```

## Array Class

Array class is one of the C++ Standard Library that can also provide C-style array as introduced above, but with better accessibility and handling such as sequencing. To use array class, `<array>` header needs to be included.

```cpp
#include <array>

// DECLARATION
std::array<int, 3> arr;
```

Since there is not performance difference between these two, developer may freely choose which method to use unless sequencing matters.

*Reference: http://www.cplusplus.com/reference/array/array/*

## Vector Class

Vector is a sequence container much like an array but has a feature where it can change its size dynamically since the data is stored in separate memory where developer has to allocate manually (and dynamically). Thankfully, the memory management is all done by the system, thus no need to worry about allocation.

```cpp
#include <vector>

// DECLARATION
std::vector<int> vec;
```

Benefit of using the vector is container size can be flexibly (or dynamically) changed, due to its memory allocation property. When it comes to performance speed, array is much faster than vector.

# **C++: POINTER**

Starting from *C++: Array* chapter, a new data called "pointer" was mentioned quite often. Pointer is very important concept in C/C++ programming language and is one of the commonly used data to develop advanced program.

This chapter mainly focuses on the pointer and its application that can improve performance and functionality of previously mentioned programming, especially on function.

## Pointer

Pointer is a variable that stores memory address of where the value is located, rather than the value itself. Despite being a memory address, pointer also must to be distinguished by a data type of value. When declaring pointer, compound specifier `*` (aka. asterisk) is placed between data type and identifier:

``` cpp
// POINTER DECLARATION
int* ptr;				// C4700: unintialized local variable 'ptr' used
```

Memory address can be called from non-pointer variable as well using ampersand operator `&`:

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

std::cout << ptr;	// >> OUTPUT: 0139F854	(ADDRESS)
std::cout << *ptr;	// >> OUTPUT: 3			(VALUE)
```

As seen above, it is possible to return value assigned to the pointer by placing dereference operator `*`. While pointer declaration also used asterisk, they are different existence but only sharing the same symbol.

|         OPERATOR         |  VARIABLE   |     RETURN     |
| :----------------------: | :---------: | :------------: |
|  Address-on Operator`&`  | Non-pointer | Memory address |
| Contents-of Operator `*` |   Pointer   |     Value      |

Interestingly, any changes made on variable is also affects contents of the pointer as the pointer shares the same memory address. This feature is the most important when it comes to using pointer in C/C++.

### Null Pointer

Null pointer is a pointer that points to nothing. This can be done by assigning pointer with `nullptr`:

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

Reference is a variable that aliases already existing variable. This can be thought as a constant pointer to the variable, with pointer declaration `*` applied by the compiler automatically.

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

Previous chapters have introduced procedural and functional programming style using conditional & loop statements and functions. Another programming style, object-oriented programming is based around usage of objects.

## Object

Object (aka. instance) is an independent data unit which consist of two categories of member:

* Member variable: variable exclusive inside an object (aka. member field).
* Member function: function only available through an object (aka. method).

```cpp
// OBJECT "instance" CALLING ITS MEMBER VARIABLE AND METHOD
instance.variable;
instance.method();
```

Data such as standard library array, vector, and even C++ string that also has member are also an instance.

The programming based around use of a custom objects is called *object-oriented programming*.

### State & Behavior

State and behavior are properties of an object frequently coined in C++, though they are no just a different term to call data and functions stored in object.

* **State**
    : state of an object is a data stored in a member variable of object.
* **Behavior**
    : behavior of an object is a action that can be done by member function of object.


## Class

Class is used to creates objects (aka. instance), hence can be deemed as an object’s blueprint. The mechanism called encapsulation (1) combines member variables and methods into a single class data, and/or (2) restricts direct access to these attributes and methods (aka. data hiding)

Class is declared by `class` keyword and contains variables and functions to include them as members.

```cpp
// CLASS DEFINITION
class CLASS {
public:
    int field1 = 1;
    float field2 = 3.0;
    float method(int arg)
        return field1 + field2 - arg;
};

// INSTANTIATION
CLASS instance;

// THEREFORE...
instance.member1;	// >> OUTPUT: 1
instance.member2;	// >> OUTPUT: 3.0
instance.method(2);	// >> OUTPUT: 2.0 (= 1 + 3.0 - 2)
```

Unlike function, class requires semicolon `;` at the end of the class definition. Creating an instance from a class is called *instantiation*, and accessing the members are done using dot operator `.`.

### Constructor

Constructor is a special member function of a class executed whenever instantiation has occurred (every time object is created from the class). Name of a constructor must be same as the class name and does not require data type.

One of the common usage of constructor is initialization of member fields upon instantiation. There are two different initialization methods on constructor: (1) direct initialization and (2) list initialization.

```cpp
class CLASS {
public:
    int field1;
    float field2;
    float method(int arg)
        return field1 + field2 - arg;

// CONSTRUCTOR
    CLASS(int arg1, float arg2)
    {
        statements;
    	field1 = arg1;		// DIRECT INITIALIZATION
        field2 = arg2;
    }
    
};

// INSTANTIATION
CLASS instance(1, 3.0);
```

----

```cpp
class CLASS {
public:
    int field1;
    float field2;
    float method(int arg)
        return field1 + field2 - arg;
    
// CONSTRUCTOR
    CLASS(int arg1, float arg2)
        : field1(arg1), field2(arg2)	// LIST INITIALIZATION
    {
    	statements;
    }
    
};

// INSTANTIATION
CLASS instance(1, 3.0);
```

One of the benefit on using member initializer list is it can initialize the constant member field that is impossible when initialized directly.

Constructor is optional member function and can be defined when developer wants. Multiple constructor is allowed per class as long as rule of function overloading is observed.

### Destructor

Destructor is a special member function of a class executed whenever instance is released (every time object is destroyed either systematically by compiler or manually by developer). Name of a destructor must be same as the class name with tilde `~` prefix and does not require data type.

```cpp
// CLASS DEFINITION
class CLASS {
public:
    int field1 = 1;
    float field2 = 3.0;
    float method(int arg)
        return field1 + field2 - arg;
    
// DESTRUCTOR
    ~CLASS(){
    	statements;
    }

};
```

Destructor is optional member function and can be defined when developer wants. Only one destructor is allowed per class and cannot take any parameter.

### Constant Object

Constant object is an object that cannot change the value of members after instantiation. Because of property of constant data, initialization of the member variables are done using constructor.

Following is a syntax used to create a constant object from a class:

```cpp
// INSTANTIATION
const ClassName instance;
```

Constant object can only access constant member fields and constant member functions, while non-constant object can access both constant and non-constant members. Beware, declaration of a constant function is only available in class and `const` keyword is located at suffix instead.

```cpp
// DECLARATION OF CLASS-EXCLUSIVE CONSTANT FUNCTION
void function() const {
    statements;
}
```

## Access Specifier

Access specifier in class defines accessibility to class members from the elsewhere. There are three access specifiers in C++: public, private, and protected.

### Public Access

Members declared under `public` access specifier can be accessed from outside the class. Public member uses programming technique called data abstraction. Simply put, data can be accessed and used outside the class even without knowing its definition.

Data abstraction is commonly implemented on linking SDK library to the project; despite library distribution does not contain source file, developer can still use the library with header and library file.

### Private Access

Members declared under `private` access specifier is only available within the class and cannot be accessed from outside. When no access specifier is given, members are specified as private by default due to a data hiding property of encapsulation.

### Protected Access

Members declared under `protected` access specifier is similar to the `private` member, but derived class can access inherited protected member from the base class. *Inheritance* will be introduced later in this chapter with more detail explanation.

## `friend` Function

While a private member cannot be used from outside of a class, a `friend` function has an access to the private member.

```cpp
#include <iostream>

class ClassName {
	public:

    private:
    	std::string name;
    protected:
    
    friend void func(ClassName &obj);	// Declaration of a friend function; not a member.
};

// Definition of the friend function; accessed the private member `name`.
void func(ClassName &tmp){
	tmp.name = "Ko";
    std::cout << tmp.name << std::endl;
}

int main() {
    ClassName obj;
    func(obj);
	return 0;
}
```

```
Ko
```

However, `friend` function is not a member of the class but just a function that has an access to the private member of the class.

## Constructor

A special public member of the class executed every time new instance is created from the class. The name of the constructor member must be equal to the name of its class and does not require data type.

```cpp
#include <iostream>

class ClassName {
	public:
    	ClassName(std::string tmp) {		// Constructor member.
			setName(tmp);
        }
    	void setName(std::string str) {
            name = str;
        }
        std::string getName() {
        	return name;
        }
    private:
    	std::string name;
};

int main() {
    ClassName obj("Ko");
    obj.getName();
	return 0;
}
```

```
Ko
```

### Constructor Initializer

Member initializer list (aka. constructor initializer) is a syntax for initializing members of the class, which is especially useful for initializing value for a constant variable member.

```cpp
#include <iostream>

class ClassName {
	public:
    	ClassName(std::string tmp1, int tmp2)
        : name(tmp1), id(tmp2) {		// Constructor initializer: var_name(value)
			/* ERROR: constant variable cannot be assigned afterward.
            name = tmp1;
            id = tmp2;
        	*/
        }

    private:
    	std::string name;
    	const int id;
};
```

## Destructor

A special member of the class executed every time an instance of the type is destroyed or deleted. The name of the destructor member must be equal to the name of its class with tilde `~` prefix and does not require data type.

```cpp
#include <iostream>

class ClassName {
	public:
    	ClassName(std::string tmp1, int tmp2) 	// Constructor member.
        : id(tmp2)
        {		
			setName(tmp1);
        }
    	~ClassName() {							// Destructor member.
        	std::cout << "Object destroyed." << std::endl;
        }
    	void setName(std::string str) {
            name = str;
        }
        std::string getName() {
        	return name;
        }
    private:
    	std::string name;
    	const int id;
};

int main() {
    ClassName obj("Ko");
    obj.getName();
	return 0;
}
```

```
Ko
Object destroyed.
```

Only one destructor is allowed per class and cannot take any parameter. However, destructor is not a mandatory and can be added as developer pleases.

## Composition

Composition is a process of a class having another class as its member.

```cpp
#include <iostream>
#include "YourClass.h"		// Composition: calling the class "YourClass".

class ClassName {
	public:
    	ClassName(std::string tmp1, int tmp2, YourClass tmp3)
        : id(tmp2), yc(tmp3)
        {		
			setName(tmp1);
        }
    	~ClassName() {
        	std::cout << "Object destroyed." << std::endl;
        }
    	void setName(std::string str) {
            name = str;
        }
        std::string getName() {
            yc.printer();	// Composition: using YourClass behavior in ClassName.
        	return name;
        }
    private:
    	std::string name;
    	const int id;
    	YouClass yc;		// Composition: ClassName has a YourClass.
};

int main() {
    YourClass tmp_obj();
    ClassName obj("Ko", 01001110, tmp_obj);
    obj.getName();
	return 0;
}
```

## Pointer to Class

Instance of the class can be accessed using a pointer by initialization, or instance can be created straight from the pointer. Former method can take arguments for the constructor parameters, while the latter is not suitable for such action.

```cpp
#include <iostream>

class ClassName {
	public:
    	ClassName(std::string tmp1, int tmp2)
        : id(tmp2)
        {		
			setName(tmp);
        }
    	~ClassName() {
        	std::cout << "Object destroyed." << std::endl;
        }
    	void setName(std::string str) {
            name = str;
        }
        std::string getName() {
        	return name;
        }
    private:
    	std::string name;
    	const int id;
};

int main() {
    ClassName obj("Ko");			// Create intance from the class.
	ClassName *ptr_obj = &obj	// Assign poiner to the instance.
    /*
    When no parameter exist in constructor memeber, alternative can be expressed:
		ClassName *ptr_example1;
	*/
    ptr_obj -> getName();
	return 0;
}
```

```
Ko
Object destroyed.
```

Accessing the member through a pointer can be done using **arrow member selection operator** `->`.

### `this` Pointer

A `this` pointer points to the address of its own class and is used only within the class.

```cpp
#include <iostream>

class ClassName {
	public:
    	ClassName(std::string tmp1)
        : name(tmp1)
        { }
    	void printInfo() {
            /* All three statements results the same. */
            std::cout << name << std::endl;			// Accessing private member directly.
            std::cout << this -> name << std::endl;	// Via pointer to class method.
            std::cout << (*this).name << std::endl;	// Call by reference method.
        }
    private:
    	std::string name;
};

int main() {
    ClassName obj("Ko");
    obj.printInfo();
	return 0;
}
```

```
Ko
Ko
Ko
```

## Dynamic Object



## Inheritance

Inheritance is a concept where, in mathematical approach, can be deemed as a smaller set included in a greater set.
$$
\mathrm{Derived \ Class} \sub \mathrm{Base \ Class}
$$
This idea of concept is great for management of the class and object when it comes to object-oriented programming style. Below shows the example how inheritance works in code.

```cpp
#include <iostream>

/* Two BaseClass will pass their public member to the DerivedClass. */
class BaseClass1 {
	public:
    	BaseClass1() {std::cout << "BaseClass1 object created."} << std::endl;}
		~BaseClass1() {std::cout << "BaseClass1 object destroyed."} << std::endl;}
    	std::string var1 = "Hello";
};

class BaseClass2 {
	public:
    	std::string var2 = "World!";
};

/* Inheriting all the public member from BaseClass as a pulbic member of DerivedClass. */
class DerivedClass : public BaseClass1, public BaseClass2 {
	public:
    	// Using the public member inherited from the BaseClass.
    	DerivedClass() {std::cout << var1 << " " << var2 << std::endl;}
    	~DerivedClass() {std::cout << "Goodbye." << std::endl;}
};

int main() {
    DerivedClass derived;
	return 0;
}
```

```
BaseClass1 object created.
Hello World!
Goodbye.
BaseClass1 object destroyed.	
```

###  Type of Inheritance

There are three different type of inheritance in object-oriented programming in C++ language:


| INHERITANCE     | DESCRIPTION                                                  |
| --------------- | ------------------------------------------------------------ |
| **`public`**    | Public and protected members of the base class becomes public and protected members of the derived class respectively. While private members are never accessible from derived class, but the public and protected member from the base class can still call them. |
| **`private`**   | Public and protected members of the base class becomes private members of the derived class. |
| **`protected`** | Public and protected members of the base class becomes protected members of the derived class. |

Below is an example of how inheritance type is defined:


```cpp
/* BaseClass1 and BaseClass2 inheritance is public and protected respectively. */
class DerivedClass : public BaseClass1, protected BaseClass2 {
    
};
```

### Polymorphism

In dictionary definition, polymorphism means "having many forms". This is simply done by creating a function in the derived classes which shares same function name under the single base class.

```cpp
#include <iostream>

class BaseClass {
	protected:
    	std::string grt;
    public: 
    	void setGrtMsg(std::string msg) {grt = tmp;}
};

/* DerivedClass1 and 2 inherited from same BaseClass but polyFunc works differently. */
// This is becuase polyFunc() is defined separately by individual derived classes.
class DerivedClass1: public BaseClass {
	public:
    	void polyFunc() {std::cout << grt << " from DerivedClass1!" << std::endl;}
};

class DerivedClass2: public BaseClass {
	public:
    	void polyFunc() {std::cout << grt << " from DerivedClass2?" << std::endl;}
};

/* Because DerivedClass 1 and 2 are both from BaseClass, can have pointer of BaseClass. */
int main() {
	DerivedClass1 derived1;
    BaseClass *obj1 = &derived1;
    
    DerivedClass2 derived2;
    BaseClass *obj2 = &derived2;
    
    // Here, the same function is called but will results differently.
    // Even initializing setGrtMsg can be used without knowing the obj1 and obj2.
    obj1 -> setGrtMsg("Greeting");
    obj2 -> setGrtMsg("Welcome");
    
    // However, polyFunc() function can only be called through DerivedClass directly.
    derived1.polyFunc();
    derived2.polyFunc();

    return 0;
}
```

```
Greeting from DerivedClass1!
Welcome from DerivedClass2?
```

Accessing the polymorphism function through a pointer not possible from the code above. To do this, the code needs to implement **virtual function**.

Pure virtual function is when only derived classes are using the polymorphism function and not the base class. This method must have derived classes to define the polymorphism function: if not, the error will occur due to compilation problem.

```cpp
#include <iostream>

class BaseClass {
	protected:
    	std::string grt;
    public: 
    	void setGrtMsg(std::string msg) {grt = tmp;}
    	// Syntax below means the function has no body.
    	virtual polyFunc() = 0;
};

class DerivedClass1: public BaseClass {
	public:
    	void polyFunc() {std::cout << grt << " from DerivedClass1!" << std::endl;}
};

class DerivedClass2: public BaseClass {
	public:
    	void polyFunc() {std::cout << grt << " from DerivedClass2?" << std::endl;}
};

/* Because DerivedClass 1 and 2 are both from BaseClass, can have pointer of BaseClass. */
int main() {
	DerivedClass1 derived1;
    DerivedClass2 derived2;
    
    BaseClass *obj1 = &derived1;
    BaseClass *obj2 = &derived2;
    
    // Here, the same function is called but will results differently.
    // Even initializing setGrtMsg can be used without knowing the obj1 and obj2.
    obj1 -> setGrtMsg("Greeting");
    obj2 -> setGrtMsg("Welcome");
    
    
    // Since polyFunc() exist within BaseClass, it can be called via BaseClass pointer. 
    obj1 -> polyFunc();
    obj2 -> polyFunc();

    return 0;
}
```

```
Greeting from DerivedClass1!
Welcome from DerivedClass2?
```

However, the class with a pure virtual function cannot create its own objects which results error: this class can only create derived classes. The class with a pure virtual function is called **abstract** class.

Virtual function to have base class to have its own polymorphism function is also possible by implementing the code in following method:

```cpp
#include <iostream>

class BaseClass {
	protected:
    	std::string grt;
    public: 
    	void setGrtMsg(std::string msg) {grt = tmp;}
    	virtual polyFunc() {std::cout << grt << " from BaseClass." << std::endl;}
};

class DerivedClass1: public BaseClass {
	public:
    	void polyFunc() {std::cout << grt << " from DerivedClass1!" << std::endl;}
};

class DerivedClass2: public BaseClass {
	public:
    	void polyFunc() {std::cout << grt << " from DerivedClass2?" << std::endl;}
};

/* Because DerivedClass 1 and 2 are both from BaseClass, can have pointer of BaseClass. */
int main() {
	DerivedClass1 derived1;
    DerivedClass2 derived2;
    BaseClass base1;
    
    BaseClass *obj1 = &derived1;
    BaseClass *obj2 = &derived2;
    BaseClass *obj3 = &base1;
    
    // Here, the same function is called but will results differently.
    // Even initializing setGrtMsg can be used without knowing the obj1 and obj2.
    obj1 -> setGrtMsg("Greeting");
    obj2 -> setGrtMsg("Welcome");
    obj3 -> setGrtMsg("Hello")
    
    
    // Since polyFunc() exist within BaseClass, it can be called via BaseClass pointer. 
    obj1 -> polyFunc();
    obj2 -> polyFunc();
    obj3 -> polyFunc();

    return 0;
}
```

```
Greeting from DerivedClass1!
Welcome from DerivedClass2?
Hello from BaseClass.
```

## Overloading

Overloading is a redefinition of the operators (i.e., `+`, `!`, `&`, etc.) or functions. Below shows overloading of the plus `+` operator for `ClassName` class specifically.

```cpp
#include <iostream>

class ClassName {
	public:
    	ClassName(int tmp1): value(tmp1) {}
    
    	/* ClassName is overloading plus(+) operator; operator- for minus sign.*/
    	ClassName operator+(ClassName &tmp2) {
    		ClassName overPlus;			// Created new class to use overload + operator.
        	overPlus.var = (this -> var) + (tmp2.var);
        	return overPlus;
    	}
    
    private:
    	int value;
};

int main() {
	ClassName obj1(2), obj2(3);
    ClassName add = obj1 + obj2;		// Like its definition, new object for + operator.
    
    std::cout << add.var << std::endl;
}
```

```
5
```

## Classes as Files

For easier and efficient management of the classes, creating classes as files is recommended. On Visual Studio 2019, the class file can be created by right clicking either *Source Files* or *Header Files* and select *Add >> Class...*. A new window will pop up as below:

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\Cpp\create_class.png" width=100%></div>
<center style="font-weight:bold">Figure #. Adding class in Visual Studio 2019</center>
Enter the "**C<u>l</u>ass Name:**" would automatically fill "**.h <u>f</u>ile:**" and "**.c<u>p</u>p file:**" name. This creates two file, header file and source file in the project's *Header Files* and *Source Files*.

Implementation of the class file is shown as follows:

```cpp
#include <iostream>
#include "ClassName.h"

int main() {
    ClassName obj(svalue, ivalue);
    return 0;
}
```

While the header file here has an extension as `.h` which is could either be pure C header or C/C++ compatible header, there is `.hpp` for C++ exclusive. Generalizing the extension as `.h` is fine, but recommends distinguishing to helps tell what language is based on.

### Class Header File

The class header file (.h) holds the function declarations and variable declarations. Below includes a template for `ClassName` class.

```cpp
#ifndef CLASSNAME_H			// Execute the code if `ClassName.h` is not defined already.
#define CLASSNAME_H			// Define `ClassName.h` header.

class MyClass
{
  public:
    ClassName(std::string tmp1, int tmp2);
    ~ClassName();
    void setName(std::string str);
    std::string getName() {return name}
  protected:
  private:
    std::string name;
    const int ID;
};

#endif						// End of the IF condition.
```

Preprocessor directive `#ifndef` & `#endif` pair is an IF conditional statement which executes when specific is not already defined.

### Class Source File

The source file (.cpp) holds the definition of the class functions based on the declaration from its header `ClassName.h` which is where the source file gets functions and variables in need.

```cpp
#include "ClassName.h"
#include <iostream>					// To use "std::cout" and "std::endl" function.

ClassName::ClassName(std::string tmp1, int tmp2)	// MyClass constructor of the MyClass class.
: ID(tmp2)
{
   setName(tmp1);
}

ClassName::~ClassName()	// MyClass constructor member of the MyClass class.
{
   std::cout << "Object destroyed." << std::endl;
}

void ClassName::setName(std::string str)
{
    name = str;
}
```

...where the double colon `::` is called the **scope resolution operator** which calls a function of the class member (aka. behavior).

# **C++: USER-DEFINED DATA TYPE**

Frequently used data type such as `int`, `float`, `char` and more are pre-defined data type that is already defined from `iostream.h` header. User-defined is a data type that is defined by the developer personally and implemented in the script.

Class from *C++: Object-Oriented Programming* is a best example of the user-defined data type. There are others such as structure, union, and enumeration. 

## Structure

Structure groups different data elements together under a single name of data. This can be applied to a scope of data that shares same members across. 

```cpp
#include <iostream>

/* (forward) DECLARATION of the data structure. */
struct studentName;

int main() {
    /* ASSIGNMENT of the data structure. (uniform initialization) */
    studentName student1 = {3, 79.6, "KIM"};
    // ALTERNATIVE: studentName student1 = {.name = "KIM", .grade = 3, .average = 79.6};
    
    /* ASSIGNMENT of the data structure. (non-static member initialization) */
    studentName student2;
    student2.grade = 2;
    student2.average = 83.5;
    student2.name = "PARK";
    
	return 0;
}

/* DEFINITION of the data structure. */
struct studentName {
	int grade;
    double average;
    std::string name;
};
```

Some C++ material may have an example script that assigns as `struct studenName student1;`. While this may work on C++ language, compiler version of C++11 and above does not need `struct` keyword for an assignment.

## Union

Union is a user-defined data type like the structure but all members share the same memory location. Since all the member shares a single memory location, the size of the union data is big as the element of the largest byte size.

Figure below shows the comparison between struct and union type:

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\Cpp\struct_vs_union.png" width=100%></div>
<center style="font-weight:bold">Figure #. Difference between Struct and Union in C++.</center>
Figure explains the size of union type is total 4 bytes, same size as a float but greater than char type, while the size of struct type is 5 (= float + char) bytes.

Following code shows how one element can affect the other due to the property union type has:

```cpp
#include <iostream>

/* (forward) DECLARATION of the data structure. */
union unionName;

int main() {
    /* OPERATION of the data union. */
    unionName union1;
    union1.x = 65;
    
    // Although only x has been assigned, y shares the same location.
    // Hence, member y would have 1 byte portion of data from member x, returning 'A'.
    std::cout << union1.x << " " << union1.y << std::endl;
    
	return 0;
}

/* DEFINITION of the data structure. */
union unionName {
	int x;
    char y;
};
```

```
65, A
```


## Enumeration

Enumeration is another user-defined data type that enumerates a set of specified data. Definition of the enumeration in English dictionary is "the action of mentioning a number of things one by one". 

```cpp
enum flagName { constant1, constant2, constant3, ... };
```

The variable name of the enumeration is called **flag** and data the flag has is called **constant**.

```cpp
#include <iostream>

/* (forward) DECLARATION of the data enumeration. */
enum flagName;

int main() {
    
    /* OPERATION of an enumeration user-defined data type. */
    flagName enumObj;
    enumObj = constant3;	// Data "constant3" is indexed 2 in enumeration by default.
    
    std::cout << enumObj << std::endl;
    // Would print integer "2" on terminal.
    
    return 0;
}

/* DEFINITION of the data enumeration. */
enum flagName {
    constant1, 
    constant2, 
    constant3, 
    constant4
};
```

```
2
```

It is possible to specify index number of the constant manually. The very first constant is indexed 0 as default and the next constant is indexed by plus one. However, the index number is not unique and can have multiple same index number across the constant.

```cpp
#include <iostream>

enum flagName {
    constant1 = 2, 
    constant2, 
    constant3 = 0, 
    constant4,
    constant5
};

int main() {

    std::cout << constant1 << " " << constant2 << " " << constant3
        << " " << constant4 << " " << constant5 << std::endl;
    
    return 0;
}
```

```
2 3 0 1 2
```

Additionally, the constant is always unique, hence, enumeration cannot have a constant with the same name despite being inside a different enumeration data type. Else results compilation error.

```cpp
#include <iostream>

// COMPILATION ERROR: constant2 is not globally unique.
enum flagName1 {constant1, constant2};
enum flagName2 {constant2, constant3};

int main() {return 0;}
```

### Enumeration Class

Enumeration data type had a huge flaw that every constant needs to be unique. This problem can be overcome by using enumeration class instead which acts as a local version of enumeration data type. 

Local version of enumeration can have a constant share the same name across other enumeration classes. Even the indexing number cannot affect the other enumeration. Hence, it is recommended to use `enum class` than `enum` for safer coding.

```cpp
#include <iostream>

enum flagName1 {constant11, constant12, constant13};
enum flagName2 {constant21, constant21, constant23};

// NO COMPILATION ERROR: constants are locally unique.
enum class cflagName1 {constant1, constant2, constant3};
enum class cflagName2 {constant1, constant2, constant3};

int main() {
	// ENUMERATION INDEXING affects other enumerations.
    var1 = flagName1::constant11 == flagName2::constant21 ? "GLOBAL" : "LOCAL";
    
    // LOCAL ENUMERATION INDEXING does not affect other enumerations.
    var2 = cflagName1::constant1 == cflagName2::constant1 ? "GLOBAL" : "LOCAL";
    
    std::cout << var1 << std::endl << var2 << std::endl;
    
    return 0;
}
```

```
GLOBAL
LOCAL
```

## `typedef` Keyword

Keyword `typedef` is used to create an alias name for existing data type, simplifying the syntax of declared complex user-defined data type and providing better readability of pre-defined data type.

```cpp
typedef int dtypeName
```

Below is an example of how `typedef` keyword is used:

```cpp
#include <iostream>

// DECLARING EXISTING DATA TYPE WITH NEW NAME.
typedef double meter;
typedef double foot;

int main() {
    // meter AND foot ARE ANOTHER NAME OF DATA TYPE dobule.
	meter measure1 = 2.0;
    foot measure2 = measure1 * 3.28;
    
    return 0;
}
```

On user-defined data type, this keyword is generally used to define a single-use structure and union. Example code from *C++: USER-DEFINED DATA TYPE - Structure* can be expressed as below:

```cpp
#include <iostream>

/* DEFINITION of the data type student1 and student 2 directly from structure. */
typedef struct {
	int grade;
    double average;
    std::string name;
} student1 student2;

int main() {
    /* ASSIGNMENT of the data structure. (uniform initialization) */
    student1 = {.name = "KIM", .grade = 3, .average = 79.6};
    
    /* ASSIGNMENT of the data structure. (non-static member initialization) */
    student2.grade = 2;
    student2.average = 83.5;
    student2.name = "PARK";
    
	return 0;
}
```

### Type Alias

Type alias is another method of declaring synonym for the data type by using `using` syntax. There is no difference between type alias declaration and `typedef` declaration, meaning two are actually equivalent.

```cpp
using aliasName = type_identifier;
```

...where `type_identifier` is an abstract declarator of what data type `aliasName` be synonym of. This allows even the mixture of various other data type be initiated just by using `aliasName`. 

The example code in *C++: USER-DEFINED DATA TYPE - `typedef` Keyword* can be rewritten as follows:

```cpp
#include <iostream>

// DECLARING EXISTING DATA TYPE WITH TYPE ALIASING.
using meter = double;
using foot =  double;

int main() {
    // meter AND foot ARE ANOTHER NAME OF DATA TYPE dobule.
	meter measure1 = 2.0;
    foot measure2 = measure1 * 3.28;
    
    return 0;
}
```

# **C++: TEMPLATE**

Template provides functions and classes provides developer a format of code regardless of considering what data type it uses. Hence, a template is used to define multiple number of similar functions and classes in efficient way.

## Function Template

A template for the function is coded in the manner below:

```cpp
#include <iostream>

/* Template of function adding two number; "class T" is to specify temporary data type. */
// The letter "T" and "U" is a generic letter, and it use other letter if wanted.
template <class T, class U>
	T tempFunc(T tmp1, U tmp2) {
		return (tmp1 < tmp2 ? tmp1 : tmp2);	// Tenary statement. TRUE: tmp1, FALSE: tmp2.
	}

int main() {
    int int1 = 2, int2 = 4;
    float flt1= 2.34, flt2 = 3.45;
    
	std::cout << tempFunc(int1, flt1) << std::endl;
    std::cout << tempFunc(int2, flt2) << std::endl;
	return 0;
}
```

```
2
3.45
```

Now with the template above, developer do not have to create separate function just to calculate for the different data-type. After declaration of the template parameter such as `<class T>` **must** be used on definition of the function.

## Class Template

Class template also is created using `template <class T>` format, but varies slightly different from the function template. Following code shows how the class template is implemented and used:

```cpp
#include <iostream>

/* Declaration of the class member. */
template <class T>
   	class ClassName {
        private:
        	T tmp1, tmp2;
    
        public:
        	ClassName(T num1, T num2): tmp1(num1), tmp2(num2) {}	// Initializer.
	        T tempFunc();
    };

/* Definition of the class function member. */
template <class T>
    T ClassName<T>::tempFunc() {
		return (tmp1 < tmp2 ? tmp1 : tmp2);
	}

/* Usage of the template class. */
int main() {
	ClassName<int> obj1(2, 3);			// Parameterized class as int data type.
    ClassName<float> obj2(3.45, 2.34);	// Parameterized class as float data type.
    
    std::cout << obj1.tempFunc() << std::endl;
    std::cout << obj2.tempFunc() << std::endl;
    
    return 0;
}
```

```
2
2.34
```

### Parameterized Class

A class template of the certain data type.



## Template Specialization

Template specialization is to define separate functions or classes for specific data-type.

```cpp
#include <iostrea>

/* Regular class template. */
template <class T>
	class ClassName {
        private:
        	T tmp1, tmp2;
        public:
        	ClassName(T num1, T num2): tmp1(num1), tmp2(num2) {}
        	T tempFunc() {
            	return (tmp1 < tmp2 ? tmp1 : tmp2);
            }
	};

/* Specialized template for the char data-type. */
template <>		// Specify this is a template without designated data-type.
	class ClassName<char> {	// Template ClassName for data-type of char specifically.
    	private:
        	char tmp3
        public:
	        ClassName(char character) {
    	    	tmp3 = character;
                return tmp3;
       		}
    };


int main() {
	ClassName<int> obj1(2, 3);
    ClassName<float> obj2(3.45, 2.34);
    ClassName<char> obj3("A")
    
    std::cout << obj1.tempFunc() << std::endl;
    std::cout << obj2.tempFunc() << std::endl;
    std::cout << obj3.tempFunc() << std::endl;
    
    return 0;
}
```

```
2
2.34
A
```

## Alias Template

Previously in *C++: USER-DEFINED DATA TYPE - Type Alias* explained declaring synonym data type using different alias name. The concept is same for alias template but is applied in a term of template. The syntax shares similar pattern as seen below:

```cpp
template <class T> using aliasTName = type_identifier;
```

Suppose we want to create a new vector function with different allocator as default.


```cpp
#including <iostream>

// Creating user-defined allocator for a vector; irrelevant to alias template.
template<class T>
    struct newAllocator { ... };

/* ALIAS TEMPLATE of vector with a replaced allocator. */
template<typename T> 	// variable `T` is a data type and not a class or others.
    using newVector = std::vector<T, newAllocator<T>>;

int main() {
	
    /* DECLARATION of a vector using alias name of std::vector<T, newAllocator<T>> */
    newVector<int> vector1;
    
    return 0;
}
```

### `typename` Keyword

Keyword `typename` is to specify the current identifier is a data type.

```cpp
typename type_identifier;
```

# **C++: EXCEPTION**

A problem encountered during a program execution is called an exception.

## `throw` Statement

The statement that "throws" the exception.` throw` statement is different from `std::cout` as the thrown exception is not printed. The program runtime execution stops when encounters an exception.

```cpp
#include <iostream>

int main() {
	int greater = 30;
    int lesser = 50;
    
    std::cout << "Program executed." << std::endl;
        
    if (greater < lesser) {
        /* Throws exception with the string value "Wrong age value!". */
    	throw "Wrong age value!";
    }
    
    // Program stops execution when exception is thrown.
    std::cout << "Program ended successfully." << std::endl;
    
	return 0;
}
```

```
Program executed.
```

To acquire the thrown exception value of `"Wrong age value!"` would need `try`/`catch` statement pair.

## `try`/`catch` Block

An exception thrown by `throw` statement is caught by `try`/`catch` block. These pair cannot be used independently, while a single `try` can have multiple `catch` blocks. Its similar counterpart for Python language is `try`/`except` statement pair.

The code above where `throw` statement is outside the `try`/`catch` block which has ended the program prematurely. However, the code below where `throw` statement is inside the block pair  has executed the code completely due to the `try` code block.

```cpp
#include <iostream>

int main() {
	int greater = 30;
    int lesser = 50;
    
    std::cout << "Program executed." << std::endl;
    
    /* "try" block tests for the exception; no premature runtime halt. */
    try{
	    if (greater < lesser) {throw "Wrong age value!";}
    }
    
    /* "catch" block receives the exception thrown by `throw` statement in `try` block. */
    // Although (what seems like) string is thrown, its data is deemed `const char*`.
    catch(const char* err){
    	std::cout << "ERROR: " << err << std::endl;
    }
    
    std::cout << "Program ended successfully." << std::endl;
    
	return 0;
}
```

```
Program executed.
ERROR: Wrong age value!
Program ended successfully.
```

Instead of crashing the program, the execution continues. Hence, is a great method of managing the exceptions occurred. To catch any exception regardless, replace to ellipsis `...` as below:

```cpp
try{
	// Some code.
}
catch(...){
	// code to handle exceptions.
}
```

# **C++: RANDOM**

## `<cstdlib>` Header

A header responsible for random number generation. This header is especially useful when creating game, statistical modeling, etc.

## `rand()` Function

A pseudo random number generator: although it generates number randomly, the generated number is always the same on every program execution.

```cpp
#include <iostream>
#include <cstdlib>

int main() {
    for (int i=0; i < 3; i++) {
        std∷cout << rand() << ", ";
    }
    return 0;
}
```

```
1, 7, 4  //First run
1, 7, 4  //Second run
1, 7, 4  //Third run
```

### Random Number Range

Limiting the range of randomly generated number can be done purely using modulo arithmetic operator (`%`), returning the remainder instead of quotient of division.

```cpp
// Random number generator ranging from 0 to 9.
#include <cstdlib> 
std∷cout << (rand() % 10) << std::endl;
```

## `srand()` Function

A function that determines the randomness based on argument of seed: every different seed generates number in different randomness. The function generates number in same randomness on every execution when the seed is same.

However, `srand()` function is not a replacement for a `rand()` function: `srand()` determines the randomness of number generation, while `rand()` is the actual random number generator.

```cpp
#include <iostream>
#include <cstdlib>

int main() {
    srand(98);
    for (int i=0; i < 3; i++) {
        std∷cout << rand() << ", ";
    }
    return 0;
}
```

```
8, 7, 5  //First run
8, 7, 5  //Second run
8, 7, 5  //Third run
```

## Truly Random Number

Different argument of seed allow random number generation that is different on every program execution. The best method for getting this seed is by using `time()` function in “ctime” header.

The `time()` function acquires the number of seconds in one’s device system time, thus will have different seed on every execution. Command `time(0)`  returns the current second count.

```cpp
#include <iostream>
#include <cstdlib>
#include <ctime>

int main() {
    srand(time(0));
    for (int i=0; i < 3; i++) {
        std∷cout << rand() << ", ";
    }
    return 0;
}
```

```
4, 0, 0  //First run
3, 9, 2  //Second run
5, 7, 1  //Third run
```

# **C++: FILE MANAGEMENT**

A scripted code can access not just an external header and source files but other files such as `.txt` extension file. Following describes how C++ language can access and modify external files.

## File Headers

The section will introduce three headers that are related to file management.

|    HEADER    | DESCRIPTION                                                  |
| :----------: | ------------------------------------------------------------ |
| `ifstream.h` | Input file stream class: e.g., read from files (input from files). |
| `ofstream.h` | Output file stream class: e.g., write to files (output to files). |
| `fstream.h`  | Input/output file stream class (combination of `ifstream.h` + `ofstream.h`). |

For convenience, the section will be using solely on `fstream.h` header which has both function of input and output features.

## Creating Files

Refer to the section *C++:FILE MANAGEMENT §Writing File*.

## Opening Files

The file first needs to be opened to either read or write. Opening the file is done using `open()` behavior and both `ifstream.h` and `ofstream.h` can open the file.

```cpp
#include <iostream>
#include <fstream>

int main() {
	std::ifstream FileName;			// Creating a ifstream object that can read files.
    FileName.open("sample.txt");	// `open()` behavior opens the "sample.txt" file.

    /* ALTERNATIVE */
    // std::ifstream FileName("sample.txt");
    
	return 0;
}
```

## Reading Files

Opening the file gives access to the file directly. This, however, is different from reading the file. Below is one example of reading, in other word, printing the whole file content to the terminal.

```cpp
#include <iostream>
#include <fstream>

int main() {
	std::ifstream FileName("sample.txt");
    while (getline(FileName, line)) {	// Function `getline()` acquires line of content.
    	std::cout << line << std::endl;
    }
    return 0;
}
```

## Writing Files

Writing the file is also possible after the file is opened.

```cpp
#include <iostream>
#include <fstream>

int main() {
	std::ofstream FileName("sample.txt");	// Creating a ofstream object for writing.
    FileName << "Hello World!\n";			// Writing file can be done using "<<".
    return 0;
}
```

Beware, the `FileName` is now an object of `ofstream` instead of `ifstream` to write the file. To read and write in a same file, the code needs to include both `ifstream` and `ofstream` for reading and writing respectively.

## Closing Files

After opening the file, it is recommended to close the file manually. Similar to opening behavior, the file can be closed using `close()` behavior.

```cpp
#include <iostream>
#include <fstream>

int main() {
    /* Writing content to the file. */
	std::ofstream FileWrite("sample.txt");	// Opening the file "sample.txt" for writing.
    FileWrite << "Hello World!\n";
    FileWrite.close();	// Closing the file "sample.txt".
    
    /* Reading content from the file. */
    std::ifstream FileRead("sample.txt");	// Opening the file "sample.txt" for reading.
    while (getline(FileRead, line)) {
    	std::cout << line << std::endl;
    }
    FileRead.close();	// Closing the file "sample.txt"
	return 0;
}
```

# **C++: Threading**



```cpp
#include <iostream>
#include <thread>

int main() {
	std::thread thread1 (threadFunction1);
	std::thread thread2 (threadFunction2);

	thread1.join();
	thread2.join();
}

void threadFunction1() {

}

void threadFunction2(param) {

}
```





# **C++: CPYTHON**

Python is a program language which uses interpreter to execute the code, and one of the widely used interpreter is an implementation using C language. There are other implementation, such as a Python interpreter made by Java. To distinguish these implementation, the former and latter is called CPython and JPython.

When you google CPython, the very first result that shows up is the GitHub of CPython source code. However, when you read the document carefully, you'll notice there is no need to build from the source code if you already installed Python because that *is* CPython. Official Python website provides different implementations of Python [here](https://www.python.org/download/alternatives/).

A Python application is executed directly from `.py` script file. But in truth, CPython compiles the code into a special low-level intermediary language called Bytecode, which is interpreted by the same CPython. Therefore, CPython is technically an interpreter and a compiler.

The reason Python is written in C language goes back when Python was first created. While there is an option to develop the compiler using its own language, you can start using existing compiler from other language. In case of Go compiler was first developed by C compiler but later re-written in Go. Python decided to keep the inheritance of C compiler, which is how Python can access low-level operating system APIs. Thus, CPython makes it easy to import C libraries and use them from Python.



### Bytecode



# **C++: VISUAL STUDIO**

Visual Studio is one of the best known Windows IDE for C-based languages, developed by Microsoft. Understanding how Visual Studio functions and knowing its features can help when developing C-based program. Documents and downloads for Visual Studio are available *[here](https://docs.microsoft.com/en-us/visualstudio/)*.

## Project and Solution

Upon creating a new project, user is encountered with naming two different stuffs: project and solution. Project is a file where actual program development is processed and managed, its file extension being `.vcxproj` for C++ project. Solution `.sln` is a container for projects, meaning there can be more than one project inside a single solution.

The below is an example of having two projects `Project_A` and `Project_B` under the single solution `Solution.sln`.

```
D:\Workspace\
+-- Solution.sln
+-- Project_A
|   +-- Project_A.vcxproj
|   +-- Project_A.vcxproj.filters
|   +-- Project_A.vcxproj.user
+-- Project_B
|   +-- Project_B.vcxproj
|   +-- Project_B.vcxproj.filters
|   +-- Project_A.vcxproj.user
```

### Single Solution-MultipleProjects

It is common to develop program using single solution-single project because of easy management. This generally means the project is designed for high-level program in the first place.

However, you can also build-up the program by building low-level programs and assemble them. In this case, each project is responsible for building low-level program and solution manages these projects.

## Importing Library

Within Visual Studio, developer can import external libraries such as SDK on developing program. On Windows, extension of static library and dynamic library is `.lib` and `.dll` respectively. These libraries are crucial components when developing and compiling the program.

Suppose the C++ solution and project is structured as follows containing SDK related files:

```
D:\Workspace\
+-- Solution.sln
+-- Project_A
|   +-- Project_A.vcxproj
|   +-- Project_A.vcxproj.filters
|   +-- Project_A.vcxproj.user
|   +-- code_A.cpp
|   +-- SDK_A.dll
|   +-- library
|   |   +-- SDK_A.lib
|   +-- include
|   |   +-- SDK_A.h
```

To designate these SDK related files for compilation should be configured on project property. 

* `Configuration Properties > C/C++ > General > Additional Include Directories`
    : to call the header `SDK_A.h`, enter the path `./include/`. This header contain declaration of the functions, data-types, and classes needed to implement the SDK.
* `Linker > General > Additional Library Directories`
    : to designate the path to the library `SDK_A.lib`, enter the path `./library/`. This configuration is only to designate the library location, while choosing which library is done on different configuration.
* `Linker > Input > Additional Dependencies`
    : to call the library `SDK_A.lib` designated from the library path above, enter the path `SDK_A.lib`. Inside the `.lib` library extension file contains the definition and implementation declared by the header.

Although these are the configurations needed to compile the project, the compiled file won't execute properly. Placing the `.dll` to where the compiled file is located can resolve this matter.

### Static and Dynamic Library

In Windows OS, static library and dynamic library is defined by a file extension `.lib` and `.dll`. Both contains the definitions and implementation needed to run the library as intended, declared within the header file included with the library SDK.

Static library, also called "archive", includes complete definitions ready for compilation. In some case, the library will be built inside the compiled program but this would increase the size and proves inefficient when flexibility is required.

Instead of compiling the program with the library function, program can be linked to the dynamic library which can be called on run-time, which is why it is also called "run-time library". This can save memory as executed program only needs to access the required dynamic library. However, the program won't become a standalone as it depends on dynamic libraries and fails to execute properly without them.

## COMPILE

`Configuration Properties > C/C++ > Code Generation > Runtime Library` indicates whether a multithreaded module is a DLL and specifies retail or debug versions of the run-time library.

Default setting is set to `/MD` which causes the application to use the multithread-specific and DLL-specific version of the run-time library.

To build executable without DLL which has library compiled into, change it to `/MT` and place the library name `LIBCMT.lib` under the Linker configuration.

# **C++: MFC**

Microsoft Foundation Class (MFC) Library is a C++ object-oriented library for developing desktop applications for Windows, introduced by Microsoft in 1992.