---
layout: docs
language: en
category: Programming
title: C#
icon: icon-csharp.png
order: 0x03
---
# C#: INTRO
> *Reference: [Microsoft Docs C# Language Documentation](https://docs.microsoft.com/en-us/dotnet/csharp/)*

C# (pronounced as "C sharp") is object-oriented programming (OOP) language developed by Microsoft to counter against another OOP language called Java by Oracle. While being similar to Java, it implements a lot of familiar concepts from C/C++ language. The language supports convenience on development by providing an enormous amount of various libraries from the .NET framework.

## .NET
.NET (successor of the .NET Core) is an open-source software framework by Microsoft. The framework is for developing and running C# applications, available in Windows, Linux, and macOS operating systems.

The framework is constituted by CoreFX (FCL) and CoreCLR (CRL). The following table briefly describes FCL and CLR:

| COMPONENTS                    | DESCRIPTION                                                     |
|-------------------------------|-----------------------------------------------------------------|
| Framework Class Library (FCL) | Provides a standard library for developing the .NET application. |
| Common Language Runtime (CLR) | Compiles and executes the .NET application using the JIT compiler.       |

![Figure 1. .NET Common Language Infrastructure (CLI)<sub><i>Ref: <a href="https://commons.wikimedia.org/wiki/File:Overview_of_the_Common_Language_Infrastructure.svg">Wikipedia</a></i></sub>](/images/docs/csharp/csharp_wiki_netframework.png)

.NET implements Common Language Infrastructure (CLI) that is standardized by ISO and ECMA. The standardization specifies that CLI should allow multiple high-level programming languages and support cross-platform despite having different architectures.

### Assembly
C/C++ language uses a compiler such as MSVC, GCC, and Clang to generates the `.exe` executable file or `.dll` library file from the source code to a machine-readable binary code.

> These binary files do not need any more compilation to execute the application: thus called *ahead-of-time (AOT) compilation*. 

On the other hand, the .NET Compiler Platform (C# compiler aliased "Roslyn") translates the source code to the Common Intermediate Language (CIL) instead of binary code. The CLI refers to a bytecode that is not machine-readable but machine-independent code supporting cross-platform.

> The bytecode file requires additional compilation on runtime to execute the application, translating from bytecode to binary code: thus called *runtime* or *just-in-time (JIT) compilation*.

Assembly, therefore, is a *bytecode file* in C# language. Just like binary executable in C/C++ language, there are two different types of assembly: process assemblies `.exe` and library assemblies `.dll`. Because assembly is not a binary code file, the C# application won't execute without the .NET (more specifically, CoreCLR).

### .NET Framework
The .NET Framework is a predecessor of .NET that is deprecated in November 2020. The .NET Framework is only available on the desktop version of Windows OS.

## Object-Oriented Programming
C# is object-oriented programming (abbrev. OOP) language that focuses on program development using data called "object (aka. instance)." Though explained in detail later, it is crucial to understand the concept of object and class in C# language.

### Object
Object (aka. instance) is an independent unit of data composed of members called *field* and *method*. Members of an object are accessed using the member access operator `.`:

| MEMBER   | SYNTAX              | DESCRIPTION                                                                                 |
|----------|---------------------|---------------------------------------------------------------------------------------------|
| Field    | `object.field`      | A member that stores value.                                                          |
| Method   | `object.method()`   | A member that processes and/or outputs data.                                           |
| Property | `object.property()` | A method specifically designed to output field value without directly accessing the member; this protects the member field from accidental modification. |

### Class
The class creates an object where fields and methods are all defined inside the code block. Members cannot be accessed directly from the class but only from an object. Creating an instance from the class is called *instantiation*.

### `static` Modifier
The `static` access modifier (or access specifier) keyword allows the member accessible from the class without instantiation. Thought convenient to use since it doesn't need an object, the `static` access modifier can make the code a bit more complicating due to its property.

## Entry Point
Unlike C/C++ language, C# has a lot of code blocks `{}` but every .NET application starts from the `static void Main()` entry point.

```csharp
using System;

namespace PROJECT
{
    class Program
    {
        static void Main(string[] args)
        {
            // Insert code here...
        }
    }
}
```

Most of the examples in this document will not have the full code shown above, but only the expression or statements that are necessary. However, be sure to know that the code only functions when inside the `static void Main()` entry point.

# C#: INSTALL
Although the .NET supports cross-platform, this chapter introduces mainly on installation and preparation for Windows OS. And if possible, focuses on utilizing .NET Core rather than .NET Framework.

An integrated development environment (IDE) is a software development program that provides a source code editor and program build tools, compiling source codes to an executable program. Since C# is the language developed by Microsoft, there is one most suitable IDE.

## Visual Studio
[Visual Studio](https://visualstudio.microsoft.com/downloads/) is the most renowned IDE for Windows OS developed by Microsoft, which uses the MSVC compiler. There are three editions for Visual Studio, and the free community edition is enough for development. The IDE provides various components to support different languages as well; for C++ programming, select the ".NET desktop development" workload.

![Figure 2. Workload for C# programming on Visual Studio.](/images/docs/csharp/csharp_vs_component.png)

Visual Studio will start with the window shown below. To create a new project for C# language, select the "Create a new project" button.

![Figure 3. Startup window of Visual Studio.](/images/docs/csharp/csharp_vs_project1.png)

Since C# can create various applications, there are many different kinds of projects available from Visual Studio as well. To create a C# project, follow the procedure below:

1. Select the language as C# and choose the "Console App (.NET Core)" option.

![Figure 4. Creating a C# project on Visual Studio (step 1).](/images/docs/csharp/csharp_vs_project2.png)

2. Designate names for the project and solution. Here, the project is a `.vcxproj` extension file that manages its source codes and compilation options, and the solution is a `.sln` extension file that can contain multiple projects. It is recommended to open the solution file on Visual Studio unless you only want to open a single project.

![Figure 5. Creating a C# project on Visual Studio (step 2).](/images/docs/csharp/csharp_vs_project3.png)

3. Use the project automatically prepared by Visual Studio.

![Figure 6. Creating a C# project on Visual Studio (step 3).](/images/docs/csharp/csharp_vs_project4.png)

The three-step procedure above for creating a C++ console application is the simplest method. To create an empty C++ project, refer to the installation section on the *PRGMING_C* document.

Visual Studio can run a C# language program in two different ways: debugging mode (`F5`) and without debugging mode (`Ctrl+F5`). Debugging mode is used to inspect the problem and visualize the process, otherwise run without debugging is recommended.

# C#: BASIC
Every programming language has its own rules to be observed and fundamental data that works as a basis of the program. Failed to observe this causes either error or unexpected results. As for the beginning of the practical coding, this chapter will introduce basic knowledge of C# language coding.

## Statement Terminator
The "statement" in programming represents a code that executes or processes data. In C# language, every statement needs to end with a statement terminator denoted by a semicolon `;`.

One of the common mistakes made by C# language beginners is the absence of a statement terminator. Therefore, developers need to keep this in mind when programming with languages based on C (such as C++ and C#).

## Comment
Comment in a programming language is not executed and is commonly used to write down information related to the programming on source codes. There exist two comments in C# language: line comment and block comment.

* **Line comment**
    : a comment worth a single line of code, declared by `//`.
* **Block comment**
    : a comment with multiple lines of code, declared by `/* */`.

```csharp
/*
BLOCK COMMENT:
multiple line of comment can be placed here.
*/  
// LINE COMMENT: for a single line of code.
```

## Identifier
An identifier is a name used to identify data in programming. In other words, it is just a user-defined name. C# language has the following rules when naming an identifier:

* Only alphabet, number, and underscore `_` is allowed.
* First letter cannot start with a number.
* Blank space is prohibited.

## Namespace
The namespace is a code space that distinguishes from the others to guarantee the uniqueness of identifiers. It is the same concept as placing files (data) with the same name in different folders (namespace).

The `namespace` keyword declares the namespace and stores the data inside the code block `{}`. Use the member access operator `.` to access the data inside the namespace. However, namespaces must not share the same name with other namespaces.

```csharp
namespace NAMESPCAE1
{
	class Program{
        static void Main(){
            /* CALLING CLASS AND MEMBERS FROM ANOTHER NAMESPACE */
            NAMESPACE2.CLASS.field;
            NAMESPACE3.NAMESPACE4.CLASS.method();
        }
    }
    
    /* NESTED NAMESPACE */
    namespace NAMESPACE2
    {
        static class CLASS { public var field; }
    }
}

/* NAMESPACE INDEPENDENT FROM NAMESPACE1 */
namespace NAMESPACE3
{
    namespace NAMESPACE4
    {
	    static class CLASS { public void method() statement; }
    }
}
```

### Global Namespace
The global namespace (aka. root namespace) is a code space that doesn't belong to any namespace. Data from the global namespace is accessed by placing the `global` keyword and namespace alias qualifier `::` before its identifier.

```csharp
global::variable;
```

### `using` Declaration
The `using` keyword makes accessing data inside the namespace simple. Technically, data becomes available without needing to specify the namespace.

```csharp
/* USING DECLARATION: "System" NAMESPACE */
using System;
```

However, the overuse of the `using` keyword has the potential to cause a naming collision as the compiler cannot tell which data the code is referencing. Hence, C# supports aliasing namespace that is not available in C/C++.

Namespace aliasing either references namespace or data types such as class, structure, and more. The formal can call the data using the qualifier `::`, but the latter can only call the data already chosen.

```csharp
// NAMESPACE ALIASING: REFERENCING NAMESPACE
using scope1 = System;            // "System" namespace
scope1::Console.WriteLine("First Line");

// NAMESPACE ALIASING: REFERENCING TYPE
using scope2 = System.Console;    // "System.Console" class
scope2.WriteLine("Second Line");
```

## Input & Output
C# language has two outputs for a text-based terminal available as methods of the `System.Console` class:

| OUTPUT                | SYNTAX                      | DESCRIPTION                             |
|-----------------------|-----------------------------|-----------------------------------------|
| `Console.Write()`     | `Console.Write("Text")`     | Print text to a terminal without a new line. |
| `Console.WriteLine()` | `Console.WriteLine("Text")` | Print text to a terminal with a new line.  |

```csharp
class Program{
    static void Main(){
        System.Console.Write("Hello");
        System.Console.Write("World!");
        System.Console.WriteLine("Spam");
        System.Console.WriteLine("Egg");
    }
}
```

```
HelloWorld!Spam
Egg
```

Meanwhile, there are three inputs for a text-based terminal available as methods of the same class:

| INPUT                | RETURN         | DESCRIPTION                                         |
|----------------------|----------------|-----------------------------------------------------|
| `Console.Read()`     | Integer        | Read the input of a single character in ASCII.      |
| `Console.ReadLine()` | String         | Read the input for a single line of text as a string.  |
| `Console.ReadKey()`  | ConsoleKeyInfo | Read the input of a single keypress on a keyboard. |

```csharp
using System;

class Program{
    static void Main(){
        Console.Write("Console.Read: ");
            int value1 = Console.Read();
            Console.WriteLine(">>> {0}\n", value1);
        
        Console.Write("Console.ReadLine: ");
            string value2 = Console.ReadLine();
            Console.WriteLine(">>> {0}\n", value2);
        
        Console.Write("Console.ReadKey: ");
            ConsoleKeyInfo value3 = Console.ReadKey();
            Console.WriteLine(">>> {0}", value3);
    }
}
```

```
Console.Read: Ko
>>> 75

Console.ReadLine: Hello World!
>>> Hello World!

Console.ReadKey:  
>>> Spacebar
```

### Placeholder
A placeholder designates where data should locate within the text using zero-based integers surrounded by a curly bracket. The data that comes after the formatted text goes to the placeholder in ascending order.

```csharp
System.Console.Write("First: {0}, Second: {1}, Return to {0}.", 3, 'G');
```

```
First 3, Second G, Return to 3.
```

### Escape Character
Escape character `\` is used to escape from a sequence of characters and execute certain operations within text-based data. In the introduction on string data type, `\n` is used to change to a new line.

```csharp
System.Console.Write("Hello\nWorld!");
```

```
Hello
World!
```

| New line | Horizontal tab | Backslash | Backspace | Single quote | Double quote |
|:--------:|:--------------:|:---------:|:---------:|:------------:|:------------:|
| `\n`     | `\t`           | `\\`      | `\b`      | `\'`         | `\"`         |

## Data Type
A data type is one of the crucial factors which determines the type and byte size of the data. A well-implemented data type can make a program efficient on both memory and processing time. C# language has several numbers of built-in data type as follows:

| IDENTIFIER | DATA TYPE               | DESCRIPTION                                                                                            |
|------------|-------------------------|--------------------------------------------------------------------------------------------------------|
| `int`      | Integer                 | 32-bits precision integer number.<br />Size: 4 bytes                                                   |
| `float`    | Floating point number   | Real number with decimal points<br />Size: 4 bytes (suffixes `f` or `F`)                               |
| `double`   | Double-precision float  | Float with doubled precision and memory.<br />Size: 8 bytes (suffixes `d` or `D` or none)              |
| `decimal`  | Highest-precision float | Float with greater precision and memory<br/>Size: 16 bytes (suffixes `m` or `M`)                       |
| `char`     | Character: `''`         | A single character, such as `'A'` or `'?'`.<br />Size: 2 bytes                                         |
| `string`   | String: `""`            | A series of characters, such as `"Hello World!"`<br />Size: N/A (varies by the length)                 |
| `bool`     | Boolean                 | Non-zero represents `true` while zero is `false`.<br />Size: 1 byte                                    |
| `var`      | Automatic               | Automatically selected by the compiler.<br />Useful for declaring new variable with complex data type. |
| `void`     | Void                    | Non-specific data type.<br />Size: 1 byte                                                              |

### `sizeof()` Operator
The `sizeof()` function returns allocated memory size of the type or data in bytes.

```cpp
sizeof(int);		// SIZE: 4 BYTE
sizeof(char);		// SIZE: 2 BYTE
```

## Variable
Variable is a container for data that can be assigned using the assignment operator `=`. C# language must designate a variable with one of the data types, which can only have data with that data type.

The example code below tells a compiler the existence of the `variable` integer variable. The variable has also allocated memory at the same time to store a value, called *declaration* or *definition* in programming.

```csharp
/* "variable" VARIABLE DECLARATION */
int variable;
```

Unlike C/C++ language, the ECMA-334 standard does not distinguish the difference between declaration and definition but rather considers them the same instead. It is because the OOP C# language compiler is different from the compiler for C/C++ language.

A defined variable does not need to specify the data type as a compiler already knows what type of data it stores. Programming languages, in general, locates assigned data (ex. variable) on the left and assignee (ex. a constant value or another variable) on the right. Otherwise will cause an error or function improperly.

### Initialization
Initialization is the first assignment to a variable where it commonly occurs in the *definition* process.

```csharp
/* VARIABLE INITIALIZATION */
int variable = 3;
```

### Local & Global Variable
There are three types of variable in C# language:

* **Local variable** is a variable defined within the code block, such as namespaces, functions, and classes. A local variable releases data when escapes from the code block and unavailable to use outside. It may have the same name as other variables defined outside the code block.

  ```csharp
  class Program {
      static void Main() {
          // Insert code here...

          /* LOCAL VARIABLE */
          int variable;
      }
  }
  ```

* **Global variable** is officially not supported in C# language. Conceptually, a variable that does not belong to any code blocks within the script, but C# is an OOP language that cannot declare a variable outside the code block.

* **Static variable** is a variable with the `static` access modifier that is accessible directly from the class without instantiation. Unlike a local variable, it retains the data even after escaping from the code block, making a static variable an alternative to a global variable in C# language.

  ```csharp
  class Program {

      /* STATIC VARIABLE: "public" keyword makes accessible from outside. */
      public static int variable;

      static void Main() {
          // Insert code here...

      }
  }
  ```

### Constant Variable
A constant variable is a variable that cannot change its value after initialization. The `const` keyword declares variable as a constant.

```csharp
/* CONSTANT DEFINITION */
const int variable = 1;
```

### Static Variable

Static variable is a special local variable which maintain its value even when escaped and re-entered a function code block. The keyword `static` is used to declare it as a static variable.

```csharp
static int variable = 3;
```

## Data Type Conversion
Data type conversion changes data type stored in a variable into other desired type. Conversion from the small size data to a compatible but larger size data type is called *implicit* conversion. Implicit conversion is a natural data type conversion automatically done by a compiler as no data loss occurs.

```csharp
short A = 1;    // 2 BYTES INTEGER
int B = A;      // 4 BYTES INTEGER
```

On the other hand, *explicit* conversion (aka. casting) risks data loss/corruption upon converting data type. Traditional C-style casting syntax uses parenthesis `()` as follows:

```cpp
float A = 1.9f;  // 4 BYTES FLOAT
int B = (int)A;  // 4 BYTES INTEGER - INCOMPATIBLE: only returns its integer value.
```

```
1
```

### Helper Class Conversion
A helper class is a class that *helps* do something by providing specific functionalities. The `System.Convert` is one of the helper classes for converting data type.

```csharp
int    ivalue = System.Convert.ToInt32(Console.ReadLine());
bool   bvalue = System.Convert.ToBoolean(Console.ReadLine());
double dvalue = System.Convert.ToDouble(Console.ReadLine());
```

### `is` Operator
The `is` operator asserts whether the given data is compatible with another data type in C# language.

```csharp
variable is Type;
```

If the `variable` is compatible with the `Type` data type, the statement returns the `true` boolean value, otherwise `false`.

## Operator
An operator is the simplest form of the data processing unit that manipulates the value of operands. It is placed before, after, or between the operands.

### Arithmetic Operator
The arithmetic operator mainly focuses on processing numeric data types. Following is a list of arithmetic operators used by numeric data type:

|             NAME             | OPERATOR | DESCRIPTION                                                  |
| :--------------------------: | -------- | ------------------------------------------------------------ |
|           Addition           | `+`      | -                                                            |
|         Subtraction          | `-`      | -                                                            |
|        Multiplication        | `*`      | -                                                            |
|           Division           | `/`      | When both operands are integer: an integer dividend without a remainder.<br/>When at least one operand is real (float or double): a real dividend (float or double). |
| Remainder (Modulus Division) | `%`      | Remainder only returns an integer.                              |

For easier readability, you may place blank spaces between numbers and operators which does not affect its output.

### Assignment Operator
The assignment operator is another operation used within numeric data types. Following is a list of assignment operators used by numeric data type:

| OPERATOR | EXAMPLE  | EQUIVALENT  |
| -------- | -------- | ----------- |
| `+=`     | `x += 1` | `x = x + 1` |
| `-=`     | `x -= 1` | `x = x - 1` |
| `*=`     | `x *= 1` | `x = x * 1` |
| `/=`     | `x /= 1` | `x = x / 1` |
| `%=`     | `x %= 1` | `x = x % 1` |

Although not an assignment operator, the similar increment and decrement operator has identical meaning as follows:

| OPERATOR    | EXAMPLE   | DESCRIPTION       |
| ----------- | --------- | ----------------- |
| `++` prefix | `x = y++` | `x = y; y = y+1;` |
| `++` suffix | `x = ++y` | `y = y+1; x = y;` |
| `--` prefix | `x = y--` | `x = y; y = y-1;` |
| `--` suffix | `x = --y` | `y = y-1; x = y;` |

### Relational Operator
The relational operator is used to compare the relation of two values, returning either `true` or `false` boolean value. Following is a list of relational operators:

| OPERATOR | DESCRIPTION              |
| -------- | ------------------------ |
| `<`      | Lesser than              |
| `<=`     | Lesser than or equal to  |
| `>`      | Greater than             |
| `>=`     | Greater than or equal to |
| `==`     | Equal to                 |
| `!=`     | Not equal to             |

### Logical Operator
The logical operator consist of AND, OR, and NOT logic. Consider `true` and `false` as binary counterpart of 1 and 0.

| OPERATOR | LOGIC | DESCRIPTION                                                |
| -------- | ----- | ---------------------------------------------------------- |
| `&&`     | AND   | `true` when all arguments are `true`, else `false`.        |
| `||`     | OR    | `true` when at least one argument is `true`, else `false`. |
| `!`      | NOT   | Changes `true` to `false` and vice versa.                  |

# C#: CONDITIONAL AND LOOP
Conditional and iteration (or loop) statements are two of the most commonly used in programming. The "statement" in programming represents a code that executes or processes data. This chapter introduces a list of conditional and iteration statements in C# language programming.

## `if` Statement
Conditional `if` statement runs code if the condition holds. When the condition evaluates `true`, the indented codes are carried out but otherwise ignored.

```csharp
if (condition)
{
	statements;
}

// SIMPLIFIED STATEMENT
if (condition) statement;
```

The `if` statement can locate inside another `if` statement, called "nested `if`". Use a code block `{}` to distinguish between `if` statements to avoid possible misinterpretation made by a compiler.

```csharp
if (condition)
{
    if (condtion)
    { 
        statements;
    } 
}
```

### `else` Statement
A conditional `else` statement cannot be used alone and must be followed by an `if` condition. The statement contains code that executes when evaluated `false`.

```csharp
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

```csharp
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

However, this statement is different from the chain of `else`-`if` conditional statement as that is a combination of two sets of conditions. On the other hand, `else if` conditional statement is a continuation of an existing evaluation instead of starting new conditioning.

### Ternary Operator
A conditional statement can be simplified using the ternary operator shown below:

```csharp
condition ? return_true : return_false;
```

The vocabulary *ternary* indicates the statement takes three arguments. The ternary operator should not be overused as it reduces readability but useful on variable assignment.

### `as` Operator
The `as` operator converts the given data to another data type in C# language; the operator returns `null` if the conversion is invalid.

```csharp
/* "as" OPERATOR */
variable as Type;
```

The example above attempts to convert the `variable` data to the `Type` data type. The operator is equivalent to the expression below.

```csharp
/* EQUIVALENCE OF THE "as" OPERATOR */
variable is Type ? (Type)variable : (Type)null;
```

## `switch` Statement
Conditional `switch` statement evaluates whether a variable matches a value assigned to the `case` keyword and executes the corresponding code if true. After execution, the `break` statement must locate to prevent further evaluation of the next `case` keyword.

If no condition matches, the statement automatically executes codes under the `default` keyword that is optional. The `default` keyword does not require the `break` statement as opposed to the `case` keyword.

```csharp
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

Multiple `case` keywords may share the same code as follows:

```csharp
switch (argument) {
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
The `break` statement is to end a loop prematurely. When encountered in the loop, the `break` statement escapes from the current loop but does not escape from the nesting loop.

### `continue` Statement
The `continue` statement skips the rest of the code below in the loop and jumps back to the conditioning part. It maintains the iteration rather than escaping from it like the `break` statement.

## `while` Loop
A `while` loop statement repeatedly executes statements inside (aka. iterate) as long as the condition holds. The loop ends once the condition evaluates `false`.

```csharp
while (condition)
{
    statements;
}

// SIMPLIFIED STATEMENT
while (condition) statement;
```

## `do`-`while` Statement
The `do`-`while` loop statement is similar to the `while` loop statement, but the former executes code first then evaluates, and the latter is vice versa.

```csharp
do
{
    statements
} while (condition);
```

## `for` Loop
The `for` loop statement repeatedly executes statements inside (aka. iterate) as long as the condition holds. Its local variable changes as specified on each iteration, which commonly uses integer increment.

```csharp
for (variable; condition; increment) {
    statements;
}

// SIMPLIFIED STATEMENT
for(variable; condition; increment) statement;
```

### Infinite `for` Loop
The `for` loop can run an infinite loop using the following syntax:

```csharp
for ( ; ; ) { 
	statements;
}
```

## `foreach` Loop
The `foreach` loop statement iterates execution while in range. The range is generally given by the Collection, which is the data that can sequence its elements individually.

```csharp
foreach (variable in range) {
	statements;
}

// SIMPLIFIED STATEMENT
foreach (variable in range) statement;
```

Refer to the next chapter, *C#: COLLECTION*, to know more about the collection data in C# language.

# C#: COLLECTION
C# has a collection that can store multiple data of the same type. Aside from the best-renowned "array" collection, there are various other collections available in .NET that are worth knowing.

## Array
An array is a container for data of the same data type in sequence. Declare an array by designating its size of how much data it can store using a bracket `[]`.

```csharp
/* ARRAY DECLARATION */
int[] arr;
```

The `new` keyword creates (that is, instantiate) an array instance that stores multiple data.

```csharp
/* INSTANTIATION */
int[] arr = new int[size];
```

The newly created array is filled with `0` or `NULL` value. After instantiation, access each element using a bracket `[]` with an index starting from 0.

```csharp
int[] arr = new int[size];

/* ASSIGNMENT TO INDIVIDUAL ELEMENT */
arr[0] = value1;
arr[1] = value2;
```

Assign values in order within a pair of curly bracket `{}` to initialize an array with instantiation. C# has three ways of initializing an array.

```csharp
/* ASSIGNMENT 1 */
int[] arr = new int[size] {value1, value2, ... };

/* ASSIGNMENT 2 */
int[] arr = new int[] {value1, value2, ... };

/* ASSIGNMENT 3 */
int[] arr = {value1, value2, ... };
```

1. `ASSIGNMENT 1`: must fill every element of an array, else results in a compilation error.
2. `ASSIGNMENT 2`: dynamically designates an array size based on the number of assigned values.
3. `ASSIGNMENT 3`: more simplified version of the "`ASSIGNMENT 2`" method.

Calling an array itself does not return elements but instead returns the information of array data. However, a character array shows characters in sequence like a string, which technically is not.

```csharp
int[] arr = new int[size] {value1, value2, ... };

System.Console.WriteLine(arr);
System.Console.WriteLine(arr[0]);
```

```
System.Int32[]
value1
```

### `new` Keyword
The `new` keyword creates a new instance (aka. instantiate) of the specified data type.

> While C++ uses the `new` keyword for a dynamic allocation, C# uses as an operator for instantiation. C# language does not have a feature where the developer has to allocate memory manually.

### Multi-dimensional Array
A multi-dimensional array stores another array as its element. These arrays used as elements must share the same length and data type.

```csharp
/* MULTI-DIMENSIONAL ARRAY 1 */
int[ , ] arr = new int[3,2] { {value1, value2}, {value3, value4}, {value5, value6} };

/* MULTI-DIMENSIONAL ARRAY 2 */
int[ , ] arr = new int[ , ] { {value1, value2}, {value3, value4}, {value5, value6} };

/* MULTI-DIMENSIONAL ARRAY 3 */
int[ , ] arr = { {value1, value2}, {value3, value4}, {value5, value6} };
```

A multi-dimensional array only uses a block of memory as it is instantiated from a single declaration despite having multiple array data.

### Jagged Array
A jagged array can have another same data type of array data as its elements irrelevant to its size.

```csharp
int[][] arr = new int[3][] {
    new int[] {3}, 
    new int[] {1, 4, 1}, 
    new int[] {5, 9}
};
```

Because these array elements are already instantiated and allocated to individual memory space, a jagged array utilizes more than a single memory block.

## Collection
> Though not necessary, referring to the *C#: GENERIC* chapter will help understand this chapter better.

The collection is an advanced version of an array that can shrink and extend size flexibly to accommodate any number of data, each of them having unique special features.

The collection has two categories: generic and non-generic. Though explained in a later chapter, the term "generic" refers to the data that designate its data type upon instatiation using angled bracket `<>`.

```csharp
using System.Collections.Generic;

/* INSTATIATION OF GENERIC COLLECTION: INTEGER */
Collection<int> collectionName = new Collection<int>();
```

### `List` Collection
The `list<T>` is a generic collection similar to an array but with flexible sizings, such as inserting and removing the elements. It is a C# counterpart of the vector class in C++ language.

```csharp
using System.Collections.Generic;

/* INSTANTIATION OF List<T> COLLECTION: INT */
List<int> LIST = new List<int>();
```
----
```csharp
using System.Collections.Generic;

/* INITIALIZATION OF List<T> COLLECTION: INT */
List<int> LIST = new List <int>() {3, 1, 4, 1, 5};

System.Console.WriteLine(LIST[0]);
```
```
3
```

### `SortedList` Collection
The `SortedList<TKey, TValue>` is a variation of the `List<T>` collection where the element is now in `{key, value}` format. Here, the key is a unique element identifier for accessing the value. The collection automatically sorts elements by the key.

```csharp
using System.Collections.Generic;

/* INSTATIATION OF SortedList<TKey,TValue> COLLECTION: STRING, INT */
SortedList<string, int> SLIST = new SortedList<string, int>();
```
----
```csharp
using System.Collections.Generic;

/* INITIALIZATION OF SortedList<TKey,TValue> COLLECTION: STRING, INT */SortedList<string, int> SLIST = new SortedList<string, int>() { {"B", 3}, {"A", 1} };

System.Console.WriteLine(SLIST["B"]);
```
```
3
```

### `Dictionary` Collection
The `Dictionary<TKey, TValue>` is a variation of the `List<T>` collection where the element is now in `{key, value}` format. Here, the key is a unique element identifier for accessing the value. The collection does not automatically sort elements by the key.

```csharp
using System.Collections.Generic;

/* INSTATIATION OF Dictionary<TKey,TValue> COLLECTION: STRING, INT */
Dictionary<string, int> DICT = new Dictionary<string, int>();
```
----
```csharp
using System.Collections.Generic;

/* INITIALIZATION OF Dictionary<TKey,TValue> COLLECTION: STRING, INT */Dictionary<string, int> DICT = new Dictionary<string, int>() { {"B", 3}, {"A", 1} };

System.Console.WriteLine(DICT["B"]);
```
```
3
```

### `BitArray` Collection
The `BitArray` is a collection that can only store a boolean value: 0 (`false`) and 1 (`true`). Because of the fixed data type, the `BitArray` is a non-generic collection. The collection cannot change size after instantiation.

```csharp
using System.Collections;

/* INSTATIATION OF BitArray COLLECTION */
BitArray BITARR = new BitArray(4);
```
----
```csharp
using System.Collections;

/* INITIALIZATION OF BitArray COLLECTION */
bool[] arr = new bool[4] {false, true, false, true};
BitArray BITARR = new BitArray(arr);

System.Console.WriteLine(BITARR[0]);
```
```
False
```

### `Stack` Collection
The `Stack<T>` is a generic collection that observes the linear LIFO (Last-In-First-Out) property of stack memory structure. The `Stack<T>` collection cannot use bracket `[]` to access individual elements.

```csharp
using System.Collections.Generic;

/* INSTANTIATION OF Stack<T> COLLECTION: INT */
Stack<int> STACK = new Stack<int>();
```
----
```csharp
using System.Collections.Generic;

/* INSTANTIATION OF Stack<T> COLLECTION: INT */
int[] arr = new bool[4] {1, 2, 3, 4};
Stack<int> STACK = new Stack<int>(arr);

System.Console.WriteLine(STACK.Pop());
System.Console.WriteLine(STACK.Pop());
```
```
4
3
```

### `Queue` Collection
The `Queue<T>` is a generic collection that observes the linear FIFO (First-In-First-Out) property of queue memory structure. The `Queue<T>` collection cannot use bracket `[]` to access individual elements.

```csharp
using System.Collections.Generic;

/* INSTANTIATION OF Queue<T> COLLECTION: INT */
Queue<int> QUEUE = new Queue<int>();
```
----
```csharp
using System.Collections.Generic;

/* INSTANTIATION OF Queue<T> COLLECTION: INT */
int[] arr = new bool[4] {1, 2, 3, 4};
Queue<int> QUEUE = new Queue<int>(arr);

System.Console.WriteLine(STACK.Dequeue());
System.Console.WriteLine(STACK.Dequeue());
```
```
1
2
```

### `HashSet` Collection
The `HashSet<T>` is a generic collection that does not have duplicate element values. Though the `HashSet<T>` collection utilizes high-performance mathematical set operations, it cannot use bracket `[]` to access individual elements.

```csharp
using System.Collections.Generic;

/* INSTANTIATION OF HashSet<T> COLLECTION: INT */
HashSet<int> HSET = new HashSet<int>();
```
----
```csharp
using System.Collections.Generic;

/* INSTANTIATION OF HashSet<T> COLLECTION: INT */
int[] arr = new bool[6] {1, 2, 3, 4, 1, 3};
HashSet<int> HSET = new HashSet<int>(arr);

System.Console.WriteLine(HSET.Count);
```
```
4
```

# C#: METHOD
C# language is executed based on a single method called the `Main()` method. Understanding the concept of method is crucial in C# languages and can increase efficiency by creating custom method. This chapter will be introducing the guide on how to create and use method in C# language.

## Method
A method is a reusable independent block of code comprising the class and object, processing the data and presenting newly processed data once it's called, allowing dynamic program scripting. A method is distinguished by parenthesis after its name followed by the class or object; `object.method()`.

```csharp
System.Console.WriteLine("Hello World!");
// "WriteLine()" METHOD OF THE "System.Console" CLASS
```

C# is an object-oriented programming language, and the procedural doesn't have much significance as C/C++ language does. Meaning, there is no such thing as the forward declaration in OOP. However, defining a method inside another method (aka nested method) is invalid.

### `return` Statement
The `return` statement is a method-exclusive statement that returns the value processed by a method. Once encountering a return statement, the method ends immediately despite having remaining codes.

If the method is a `void` data type, the `return;` statement alone without any data will exit the method.

### Parameter & Argument
Following is a difference between parameter and argument mentioned when discussing method:

* **Argument**
    : An argument is a value or object passed to a method parameter.

* **Parameter**
    : A parameter is a local variable assigned with an argument. Meaning, parameters are only available inside the method. Parameters is declared inside a parenthesis `()`.

Although parameters and arguments are a different existence, two terms are used interchangeably as both stores the same data.

| OPERATOR |   SYNTAX    | DESCRIPTION                                                  |
| :------: | :---------: | ------------------------------------------------------------ |
|   `=`    | `arg=value` | A parameter that has default value when no argument is passed. Must locate after normal parameter. |

Examples below show how parameter and argument work in methjod:

```csharp
using System;

class Program
{
    static void Main(string[] args)
    {
        /* CALLING METHOD */
        Console.WriteLine(method(1, 3.0));                // >> OUTPUT: 4.0
        Console.WriteLine(method(1));                     // >> OUTPUT: 8.0
        Console.WriteLine(method(arg2: 3.0, arg1: 1));    // >> OUTPUT: 4.0
    }
    
    /* METHOD DECLARATION */
    static double method(int arg1, double arg2 = 7.0)
    {
        return arg1 + arg2;
    }
}
```

There are two different ways of passing arguments to parameters: call by value, and call by reference.

* **Call By Value**
    The *call by value* only passes the value of an argument to a parameter. In other words, argument and parameter are separate identities that do not influence each other.

    ```csharp
    using System.Console;
    
    class Program
    {
        static void Main(string[] args)
        {
            int A = 1;
            int B = 3;
            
            Console.WriteLine(A, B);    // >> OUTPUT: 4 (1 + 3.0)
            Console.WriteLine(A, B);    // >> OUTPUT: 4 (1 + 3.0)
        }
        
        /* CALL BY VALUE */
        static int method(int arg1, int arg2)
        {
            arg1 += arg2;
            return arg1;
        }
    }
    ```

* **Call By Reference**
    The *call by reference* uses the `ref` keyword and passes the argument itself to a parameter. In other words, argument and parameter are a single identity, influencing the argument when the parameter changes.

   ```csharp
    using System.Console;
    
    class Program
    {
        static void Main(string[] args)
        {
            int A = 1;
            int B = 3;
            
            Console.WriteLine(ref A, ref B);    // >> OUTPUT: 4 (1 + 3.0)
            Console.WriteLine(ref A, ref B);    // >> OUTPUT: 7 ((1 + 3.0) + 3.0)
        }
        
        /* CALL BY REFERENCE */
        static int method(ref int arg1, ref int arg2)
        {
            arg1 += arg2;
            return arg1;
        }
    }
    ```
    ---
    The `in` keyword implements call by reference. While the argument and parameter become a single identity, the parameter is unchangeable as it sets to read-only, keeping the argument data protected from any changes.

    ```csharp
    using System.Console;
    
    class Program
    {
        static void Main(string[] args)
        {
            int A = 1;
            int B = 3;
            
            Console.WriteLine(in A, in B);    // COMPILATION ERROR: CANNOT EXECUTE "arg1 += arg2;" STATEMENT!
        }
        
        /* CALL BY REFERENCE: "in" KEYWORD */
        static int method(in int arg1, in int arg2)
        {
            arg1 += arg2;
            return arg1;
        }
    }
    ```
    ```
    Cannot assign to variable 'in int' because it is a readonly variable
    ```
    ----
    The `out` keyword also implements call by reference. While the argument and parameter become a single identity, only the uninitialized argument is allowed. The parameter must initialize the argument before exiting the method.

    ```csharp
    using System.Console;
    
    class Program
    {
        static void Main(string[] args)
        {
            int A, B;    // UNINITIALIZED VARIABLE
            
            Console.WriteLine(out A, out B);              // >> OUTPUT: 4 (1 + 3.0)
            Console.WriteLine("A: {0}, B: {1}", A, B);    // >> OUTPUT: "A: 4, B: 3"
        }
       
        /* CALL BY REFERENCE: "out" KEYWORD */ 
        static int method(out int arg1, out int arg2)
        {
            arg1 = 1; arg2 = 3;
            arg1 += arg2;
            return arg1;
        }
    }
    ```

### Method Overloading
The method overloading is the concept where method with the same name behaving differently based on the number of arguments and their data type. While these method may have a different definition, the returned data type must be the same.

```csharp
using System;

class Program
{
	static void Main(string[] args)
    {
        Console.WriteLine(method(1, 3));        // >> OUTPUT: 4
        Consoel.WriteLine(method(1.0, 3.0));    // >> OUTPUT: -2.0
    }
    
    // DEFINITION OF OVERLOADED METHOD 1
    static double method(int arg1, int arg2)
    {
        return arg1 + arg2;
    }
    
    // DEFINITION OF OVERLOADED METHOD 2
    static double method(double arg1, double arg2)
    {
        return arg1 - arg2;
    }
}
```

## Entry Point
An entry point is the startup method where program execution begins. In C# language, the `Main()` *static* method is the entry point that doesn't need to be called. Creating multiple `Main()` method or not having any `Main()` method will cause error on running the program.

```csharp
class Program
{
    // ENTRY POINT: "Main()" METHOD WITH PARAMETER
    static void Main(string[] args)
    {
    	statements;
    }
}
```

The `Main()` entry point parameter `string[] args` takes text-input passed from terminal command as an array of string data. Suppose there is an application `app.exe`, the following command will assign the argument as shown below.

```
./app.exe option1 option2
```

| ARGUMENTS | DATA      |
| --------- | --------- |
| `args[0]` | `option1` |
| `args[1]` | `option2` |

# C#: OBJECT AND CLASS
Object-oriented programming (abbrev. OOP) focuses on the usage of classes and objects that was briefly explained at the very beginning of the *C#: INTRO* chapter.

## Objects
Object (aka. instance) is a block of data that encapsulates variables and methods into a single identity. An object also has a method called *property* whose purpose is to return field value indirectly to prevent accidental field modification.

| MEMBER   | SYNTAX              | DESCRIPTION                                                                                 |
|:----------:|---------------------|---------------------------------------------------------------------------------------------|
| Field    | `object.field`      | 
Variable declared within the class and object; parameters and local variables inside the method are not fields. |
| Method   | `object.method()`   | Responsible for processing data within the class and object; some methods can acquire argument or return data. |
| Property | `object.property()` | A method that returns the field value indirectly; this allows acquiring the field value possible while preventing accidental field modification.  |

The programming based around the use of custom objects is called *object-oriented programming*.

```csharp
string variable = "Hello World!";
System.Console.WriteLine(variable.Length);
// Using the "Length()" method that returns the number of characters excluding a null terminator from the "variable" string object.
```

```
12
```

### Encapsulation
Encapsulation is the core concept in an object with the following characteristics:

1. Combines variables and functions into a single data.
2. Restrict direct access to these variables and functions to prevent accidental modification from external code. 

## Class
A class creates objects (aka. instance) and is declared using the `class` keyword. Declaration of an object's fields and methods are also inside a class declaration. The following example is a simple user-defined class with fields and methods:

```csharp
/* CREATING CLASS */
class CLASS
{
    public int field1 = 1;
    public double field2 = 3.0;
    
    public double method(int arg)
    {
        return field1 + field2 - arg;
    }
}

class Program
{
    static void Main(string[] args)
    {
    	// INSTANTIATION
        CLASS instance = new CLASS();

        // THEREFORE...
        instance.field1;       // >> OUTPUT: 1
        instance.field2;       // >> OUTPUT: 3.0
        instance.method(2);    // >> OUTPUT: 2.0 (= 1 + 3.0 - 2)
    }
}
```

Creating an instance from the class is called *instantiation*.

### Constructor
A constructor is a method that automatically executes whenever instantiation has occurred, defining the number of arguments and its data type to the instance. The name of a constructor must be the same as the class name but without specifying the returned data type because it has a fixed data type of `void.`

One of the common usages of a constructor is the initialization of member fields upon instantiation.

```csharp
/* CREATING CLASS */
class CLASS
{
    /* CONSTRUCTOR */
    public CLASS(int arg1, double arg2)
    {
        field1 = arg1;
        field2 = arg2;
    }
    
    public int field1 = 1;
    public double field2 = 3.0;
    
    public double method(int arg)
    {
        return field1 + field2 - arg;
    }
}

class Program
{
    static void Main(string[] args)
    {
        // INSTANTIATION
        CLASS instance = new CLASS(1, 3.0);
    }
}
```

A constructor is an optional method and passes arguments through parenthesis `()` upon initialization. However, initialize without parenthesis when there is no argument for the instance. Multiple constructors are allowed per class as long as the rule of function overloading is observed.

### Finalizer
A finalizer (aka. destructor) is a method that automatically executes whenever the instance is destroyed and released from the memory. The name of a finalizer must be the same as the class name with a tilde `~` prefix but without specifying the returned data type because it has a fixed data type of `void.`

```csharp
/* CREATING CLASS */
class CLASS
{
    /* FINALIZER */
    ~CLASS()
    {
        statements
    }
    
    public int field1 = 1;
    public double field2 = 3.0;
    
    public double method(int arg)
    {
        return field1 + field2 - arg;
    }
}

class Program
{
    static void Main(string[] args)
    {
        // INSTANTIATION
        CLASS instance = new CLASS(1, 3.0);
    }
}
```

A destructor is an optional method, but only one is allowed per class since the absence of parameters means no support for function overloading.

### `this` Keyword
The `this` keyword is an operator used within a class to refer to an object itself; it can also access its members.

```csharp
/* CREATING CLASS */
class CLASS{
    private int field;
    
    public int method(){
    	return this.field;
    }
}
```

## Static Class
Members defined inside the class cannot be accessed directly but only through instantiation. The static class, declared with the `static` keyword, can access the members without instantiation. However, it cannot instantiate, and only static members are available.

```csharp
/* CREATING STATIC CLASS */
static class CLASS
{
    public static int field1 = 1;
    public static double field2 = 3.0;
    
    public static double method(int arg)
    {
        return field1 + field2 - arg;
    }
}

class Program
{
    static void Main(string[] args)
    {
        // THEREFORE...
        CLASS.field1;       // >> OUTPUT: 1
        CLASS.field2;       // >> OUTPUT: 3.0
        CLASS.method(2);    // >> OUTPUT: 2.0 (= 1 + 3.0 - 2)
        
        // INSTANTIATION: ERROR!
        CLASS instance = new CLASS();
    }
}
```
```
Error	CS0723	Cannot declare a variable of static type 'CLASS'
Error	CS0712	Cannot create an instance of the static class 'CLASS'
```

The most renowned static class in C# language is the `Console` class that has input and output for a terminal, providing fields and methods even without instantiation.

### Static Constructor
A static constructor is a method executed whenever the member of the static class is called.

```csharp
/* CREATING STATIC CLASS */
static class CLASS
{
    /* STATIC CONSTRUCTOR */
    public static CLASS()
    {
        statements;
    }
    
    public static int field1 = 1;
    public static double field2 = 3.0;
    
    public static double method(int arg)
    {
        return field1 + field2 - arg;
    }
}
```

A static constructor is an optional method, but only one is allowed per static class since the absence of parameters means no support for function overloading.

## Modifier
A modifier sets the property of the member upon declaration inside the class.

1. `static` modifier
    : a modifier that is for declaring either a static member or a static class that can only have static members.

    ```csharp
    /* STATIC FIELD */
    static int field = 3;
    
    /* STATIC METHOD */
    static void method()
    { 
        statements;
    }
    ```

2. `const` modifier
    : a static modifier that is for declaring an unmodifiable constant member field. It must initialize upon declaration; otherwise results in a compilation error.

    ```csharp
    /* CONSTANT (STATIC) MEMBER FIELD */
    const int field = 3;
    ```

3. `readonly` modifier
    : a non-static and semi-constant modifier that cannot change after initialization. It can initialize using either field declaration or using a constructor.

    ```csharp
    /* READ-ONLY (NON-STATIC) MEMBER FIELD */
    readonly int field;
    ```

4. `sealed` modifier
    : a modifier that is declared on the base class or base class member to prevent inheritance to a derived class.

    ```csharp
    /* SEALED MEMBER */
    sealed int field;
    ```

5. `virtual` & `override` modifier
    : a pair of modifiers that are for overriding: the `virtual` modifier declares the base class member is overridable, and the `override` modifier overrides the virtual member from the base class.

    ```csharp
    /* VIRTUAL METHOD */
    virtual void method()
    {
        statements;
    }
    
    /* OVERRIDE METHOD */
    override void method()
    {
        statements; 
    }
    ```

6. `abstract` modifier
    : a modifier that is for declaring a method without a code block or a class that has members without a code block.

    ```csharp
    // ABSTRACT METHOD
    abstract void method();
    ```

### Access Modifier
Access modifioer defines accessibility to class members from outside the class. There are four access modifiers in C#: `public`, `private`, `protected`, and `internal`.

| KEYWORD     | DESCRIPTION                                                  |
| ----------- | ------------------------------------------------------------ |
| `public`    | Members are accessible from outside the class.      |
| `private`   | Members are accessible only within the class.                |
| `protected` | Members are accessible from the derived class but still restricted from outside the class (refer to the *inheritance* section). |
| `internal`  | Members are accessible from outside the class but restricted to the current assembly (inaccessible from other assemblies). |

## Inheritance
Inheritance is an act of providing both member fields and methods of a base class to a derived class. When the base class and derived class share the same name of member fields or methods, it uses members from the derived class.

```csharp
using System;

/* CREATING BASE CLASS */
class BASECLASS
{
    public BASECLASS() { Console.WriteLine("BASE CLASS: Constructor"); }
    ~BASECLASS() { Console.WriteLine("BASE CLASS: Finalizer"); }
    
    public int field1 = 1;
    public double field2 = 3.0;
}

/* CREATING DERIVED CLASS */
class DERIVEDCLASS
    : BASECLASS
{
    public DERIVEDCLASS() { Console.WriteLine("DERIVED CLASS: Constructor\n"); }
    ~DERIVEDCLASS() { Console.WriteLine("\nDERIVED CLASS: Finalizer"); }
    
    public double field2 = 7.0;
    public char field3 = 'A';
}

class Program
{
    static void Main(string[] args)
    {
        // INSTANTIATION
        DERIVEDCLASS instance = new DERIVEDCLASS();
        Console.WriteLine("{0}, {1}, {2}",
            instance.field1, instance.field2, instance.field3);
    }
}
```
```
"BASE CLASS: Constructor"
"DERIVED CLASS: Constructor"

1, 7.0, A

"DERIVED CLASS: Destructor"
"BASE CLASS: Destructor"
```

C# language cannot derive from multiple base classes at once and only allows one per inheritance. To derive from several base classes at once, refer to the *Interface* section.

## Polymorphism
Polymorphism means "having many forms," which in C# programming means having different functionality based on the situation and usage. Polymorphism is one of the core features in OOP categorized into two types:

* Compile-time Polymorphism
    : polymorphism achieved on compilation (aka. static polymorphism).
* Run-time Polymorphism
    : polymorphism achieved on run-time (aka. dynamic polymorphism).

One of the compile-time polymorphism has already been introduced; *method overloading* which functions differently according to passed arguments.

### Operator Overloading
Operator overloading is another compile-time polymorphism that customizes operator to method differently on specific classes. Just like function overloading, a single operator can have multiple implementations as long as the argument's uniqueness is guaranteed. Overloaded operators are class-exclusive and won't be applied elsewhere.

Use the `operator` keyword to specify the operator to customize. The syntax for defining operator functionality is identical to the method declaration.

```csharp
/* CREATING CLASS */
class CLASS
{
    public int field;

    // OPERATOR OVERLOADING
    public static int operator + (CLASS arg1, CLASS arg2)
    {
        return arg1.field + arg2.field;
    }
}
```

### Method Overriding
Method overriding is a run-time polymorphism where the derived class redefines members inherited from the base class. The difference between overloading and overriding is the formal *selects* functionality while the latter *redefines* functionality.

A virtual method is a function specifically for method overriding, declared by the `virtual` keyword from the base class alone.

```csharp
/* CREATING BASE CLASS */
class BASECLASS
{
    // METHOD OVERRIDING
    public virtual void polymorph()
    {
        statements1; 
    }
}

/* CREATING DERIVED CLASS */
class DERIVEDCLASS1
    : BASECLASS
{
    // METHOD OVERRIDING
    public override void polymorph()
    {
        statements2;
    }
}
```

A virtual method can have its definition implemented in the base class for either using behavior (1) directly from a base class or (2) from a derived class in case no method override has occurred. However, a virtual method without any definition implemented is called **abstract method**.

```csharp
/* ABSTRACT METHOD */
public abstract void polymorph();
```

Because an abstract method has no definition in the base class, it *must be* overridden when inherited to a derived class. Failed to do so will cause a compilation error.

### Abstract Class
An abstract class is a class declared with the `abstract` modifier, which is unable to instantiate but only exists for inheritance. Attempt to instantiate will results in a compilation error.

```csharp
/* CREATING ABSTRACT CLASS */
abstract class CLASS
{
    public int field1 = 1;
    public double field2 = 3.0;
    
    /* ABSTRACT METHOD */
    public abstract void polymorph();
}

class Program
{
    static void Main(string[] args)
    {
        // INSTANTIATION: ERROR!
        CLASS instance = new CLASS();
    }
}
```
```
Error	CS0144	Cannot create an instance of the abstract class or interface 'CLASS'
```

An abstract class can have members with different access modifiers, but eventually, it *must be* overridden when inherited to a derived class.

### Interface
An interface is a variation of an abstract class, which declares every member with the `abstract` and `public` modifier by default. No modifier needs to be specified but cannot have a member field.

```csharp
/* CREATING INTERFACE */
class interface INTERFACE
{
    int property {get; set;}
    void polymorph();
}

/* CREATING DERIVED CLASS */
class DERIVEDCLASS
    : INTERFACE
{
    public DERIVEDCLASS(int arg) { property = arg; }
    public void polymorph()
    {
        statements;
    }
}
```


A class derived from an interface does not require the `override` modifier for method overriding. Additionally, a class can derive from multiple interfaces at once using the syntax below.

```csharp
/* CREATING DERIVED CLASS: INHERITED FROM TWO INTERFACES */
class DERIVEDCLASS
    : INTERFACE1, INTERFACE2
{
    // ...
}
```

## Properties
A property supports data hiding by dividing a single field into two separate `get` and `set` portion. Though similar to a method, it doesn't have parenthesis `()` like a field.

| ACCESSOR | KEYWORD | DESCRIPTION                                  |
|----------|---------|----------------------------------------------|
| Getter   | `get`   | A member for getting a value from the field. |
| Setter   | `set`   | A member for setting a value to the field.   |

```csharp
using System;

/* CREATING CLASS */
class CLASS
{
    private int field;
    
    /* PROPERTY */
    public int property
    {
        get => field;            // GETTER PROPERTY
        set => field = value;    // SETTER PROPERTY
        
        /* EQUIVALENT:
        get { return field; }
        set {field = value; }
        */
    }
}

class Program
{
    static void Main(string[] args)
    {
        // INSTANTIATION
        CLASS instance = new CLASS();
        
        instance.method = 1;
        instance.method;        // >> OUTPUT: 1
    }
}
```

A property can only accept one argument, as shown in the example above. This argument is automatically passed to the property parameter, the `value` operator.

Separating a field using property hides sensitive code using the setter property while getting a field value from the getter property.

### Auto-Implemented Property
An auto-implemented property is a simplified property that cannot customize the getter and setter property.

```csharp
/* CREATING CLASS */
public int property {get; set;}

/* EQUIVALENT:
string field;
public int property{
    get => field;
    set => field = value;
}
*/
```

## Indexer
An indexer is a member that utilizes an instance just like an array. Similar to a property, it has a getter and setter accessor, storing data in a private collection field.

```csharp
using System;

/* CREATING CLASS */
class CLASS
{
    /* COLLECTION FOR INDEXER */
    private int[] arr = new int[2];
    
    /* INDEXER */
    public int this[int index]
    {
        get => arr[index];
        set => arr[index] = value;
    }
}

class Program
{
    static void Main(string[] args)
    {
        // INSTANTIATION
        CLASS instance = new CLASS();
        
        instance[0] = 1;        // >> OUTPUT: 1
        instance[1] = 3;        // >> OUTPUT: 3
    }
}
```

# C#: USER-DEFINED DATA TYPE
Commonly used data types such as `int,` `float,` `char,` and more are already defined. This chapter introduces defining a new user-defined data type that is similar to these data types but can store multiple data in a single variable.

## Structure
The structure is a user-defined data type that integrates multiple member fields as a single structure tag regardless of their data type. Use the `struct` keyword to define a structure.

```csharp
/* CREATING STRUCTURE */
public struct STRUCTURE
{
    public int    field1;
    public double field2;
    
    public double method(int arg)
    {
        return field1 + field2 - arg;
    }
}

class Program
{
    static void Main(string[] args)
    {
        /* STRUCTURE VARIABLE DECLARATION */
        STRUCTURE variable;
        
        variable.field1 = 1;
        variable.field2 = 3.0;
        System.Console.WriteLine(variable.method(2));    // >> OUTPUT: 2.0 (= 1 + 3.0 - 2)
    }
}
```
----
```csharp
/* CREATING STRUCTURE: WITH CONSTRUCTOR */
public struct STRUCTURE
{
    public STRUCTURE(int arg1, double arg2)
    { field1 = arg1; field2 = arg2; }
    
    public int    field1;
    public double field2;
    
    public double method(int arg)
    {
        return field1 + field2 - arg;
    }
}

class Program
{
    static void Main(string[] args)
    {
        /* STRUCTURE VARIABLE INITIALIZATION */
        STRUCTURE variable = new STRUCTURE(1, 3.0);
        
        System.Console.WriteLine(variable.method(2));    // >> OUTPUT: 2.0 (= 1 + 3.0 - 2)
    }
}
```

Class and structure do share similarity but have distinct differences:

| CLASS                         | STRUCTURE                        |
|:-----------------------------:|:--------------------------------:|
| Allocates on the heap memory. | Allocated on the stack memory.   |
| Inheritance is allowed.       | Inheritance is not allowed.      |
| May initialize member fields. | Cannot initialize member fields. |

## Enumeration
The enumeration is a user-defined data type numbering enumerating items, called enumerators. Enumerators are assigned with an integer that starts from zero and increments by one by default.

```csharp
/* CREATING ENUMERATION */
enum ENUMERATION {
    enumerator1,    // = 0
    enumerator2,    // = 1
    enumerator3     // = 2
};

class Program
{
    static void Main(string[] args)
    {
        /* ENUMERATION VARIABLE INITIALIZATION */
        ENUMERATION variable = ENUMERATION.enumerator1;
        
        System.Console.WriteLine(variable);         // >> OUTPUT: enumerator1
        System.Console.WriteLine((int)variable);    // >> OUTPUT: 0
    }
}
```

Assigning an integer is done using the assignment operator `=`. The other enumerators may share the same value. Unlike C/C++ language, the enumerators of the same name can exist in different enumerations.

```csharp
enum ENUMERATION {
    enumerator1 = 2,    // >> OUTPUT: 2
    enumerator2,        // >> OUTPUT: 3
    enumerator3 = 1,    // >> OUTPUT: 1
    enumerator4,        // >> OUTPUT: 2
    enumerator5	        // >> OUTPUT: 3
};
```

# C#: GENERICS
A generic provides a format of function or class definition regardless of its data type. Developers can utilize this generic to create similar methods and classes with ease. This chapter introduces defining and using a generic.

## Generic Method
Define a generic for a method using the following syntax:

```csharp
class CLASS
{
    /* GENERIC METHOD DECLARATION */
    static U method<T, U>(T arg1, U arg2)
    {
        statements;
        return something;
    }
}
```

Instantiate a generic method to use by specifying the data type in the angled bracket `<>`.

```csharp
/* GENERIC METHOD INSTANTIATION */
CLASS.method<int, double>(1, 3.0);
```

## Generic Class
Define a template for a class (aka. parameterized class) using the following syntax:

```csharp
/* GENERIC CLASS DECLARATION */
class CLASS<T, U>
{
    public CLASS(T arg1, U arg2) { field1 = arg1,=; field2 = arg2; }
    ~CLASS() { }
    
    T field1;
    U field2;
    
    U method(T arg)
    {
        return field1 + field2 - arg;
    }
}
```

Instantiate a generic class to use by specifying the data type in the angled bracket `<>`.

```csharp
/* GENERIC CLASS INSTANTIATION */
CLASS<int, double> instance = new CLASS(1, 3.0);
```

# C#: EXCEPTION
An exception is an inexecutable code error due to incorrect coding or input. Because it is not an error filtered upon compilation, a successfully built program immediately halts when encountering an exception. C# language has keywords and code blocks for handling exceptions: `throw`, `try` and `catch`, and more. Exception handling aims to provide a stable program without any halt or crash.

## `try`/`catch` Blocks
The `try` and `catch` block pair handles exceptions that occurred during the program execution. The paragraphs below explain the purpose of each code block.

The `try` block detects the exception that occurred inside, and when it does, the program immediately skips to the `catch` code block corresponding to the type of exception even if there are remaining codes.

The `catch` block contains the codes to execute when triggered by the `try` block. A single `try` block can have several `catch` blocks to prepare for various types of exceptions. If there is no `catch` block, the compilation error occurs, which is not an exception.

```csharp
/* "try" BLOCK */
try
{
	statements;
}
catch(IndexOutOfRangeException e)
{
	// "catch" BLOCK: ERROR FOR ACCESSING ELEMENT OUT OF RANGE
}
catch(DivideByZeroException e)
{
    // "catch" BLOCK: ERROR FOR ATTEMPTING TO DIVIDE BY ZERO
}
```

For exception handler to catch every exception, place the `Exception` class between parentheses.

```csharp
catch(Exception e)
{
	// "catch" BLOCK: EVERY PARAMETER TYPE & EXCEPTION
}
```

## `throw` Keyword
The `throw` keyword manually halts execution and "throws" expression to the `catch` keyword. The `new` operator is necessary since C# throws the exception by instantiating the `System.Exception` reference type (aka. class).

```csharp
try
{
    statements;
    
    // THROW EXCEPTION: "INDEX OUT OF RANGE"
	throw new IndexOutOfRangeException("Error Message!");
}
catch(IndexOutOfRangeException e)
{
    statements;
}
catch(DivideByZeroException e)
{
    statements;
}
```
```
Error Message!
```

### Re-throw Exception
The exception caught on the `catch` block can be thrown to another `try`/`catch` block pair and processed.

```csharp
class Program
{
    static void method()
    {
        try { throw new IndexOutOfRangeException("Error Message!"); }
        catch(Exception e) { throw; }  // RE-THROW EXCEPTION: method() -> Main()
    }

    static void Main(string[] args)
    {
        try { method(); }              // RECEIVE THROWN EXCEPTION
        catch (Exception e) { System.Console.WriteLine(e.Message) }
    }
}
```
```
Error Message!
```

## `finaly` Block
The optional `final` block executes after the `catch` block regardless of the exception occurrence.

```csharp
try
{
    statements;
}
catch(IndexOutOfRangeException e)
{
    statements;
}
catch(DivideByZeroException e)
{
    statements;
}
/* EXECUTES AFTER "try"/"catch" BLOCKS */
finally
{
	statements;
}
```

# C#: FILE MANAGEMENT
C# language can read and write external files to save or load data. This chapter focuses on accessing and modifying the `.txt` extension text file.

Unlike C/C++ language, C# does not have to open and close the file manually, making file management much easier for developers.

## Reading Files
Read a file (that is, importing data from an external file) using the `ReadAllText()` method of the `System.IO.File.` static class:

```csharp
static void Main(){
    string output = System.IO.File.ReadAllText("./sample.txt");
    System.Console.WriteLine(output);
}
```

## Writing Files
Write a file using the `WriteAllText()` method of the `System.IO.File.` static class:

```csharp
static void Main(){
    string input = "Hello World!";
    System.IO.File.WriteAllText("./sample.txt", input);
}
```

The method creates a new file if it doesn't exist; otherwise, overwrite the existing file.

### Creating File
Create a file using the `Create()` method of the `System.IO.File.` static class:

```csharp
static void Main(){
    System.IO.File.FileStream file = System.IO.File.Create("./sample.txt");
}
```
