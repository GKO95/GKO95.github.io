---
name: C#
layout: document
title: "Programming | C#"
author: GKO95
category: Programming
description: "C# is a general-purpose, multi-paradigm programming language developed by Microsoft as part of .NET Framework."
---
# **C#: BASIC**

C# (pronounced as "C sharp") is an object-oriented programming language which holds similarity to Java. It has an advantage of able to access .NET Framework and it is crucial to understand what .NET Framework really is before proceeding.

## .NET Framework

.NET Framework is a software framework developed by Microsoft that runs primarily on Microsoft Windows. While the .NET Framework is to create and run software applications on Windows, other implementation of .NET like .NET Core and Mono allows the programs and apps designed using .NET Framework available on different operating systems.

As one of the Common Language Infrastructure (CLI) open specification standardized by ISO and Ecma, .NET Framework allows multiple high-level programming language to be used on multiple platform despite having different architectures.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\Csharp\NETFramework.png" width=100%></div>
<center style="font-weight:bold;">Figure 1. .NET Framework Common Language Infrastructure (CLI).</center>
Inside the .NET Framework includes two major components:

* .NET Framework Class Library (FCL)
* Common Language Runtime

CLI includes Standard Libraries to provide the many different API for convenience; in .NET Framework is called .NET Framework Class Library such as data collection, file access, and more.

.NET Framework not only supports C# but also C++/CLI, F#, and Visual Basic .NET. Although they are all different languages, the Common Intermediate Language (CIL) compiles the code to a platform-neutral language firsthand and send it to Common Language Runtime (CLR) to finally execute the program by compiling based on the current architecture.

Therefore, software developer uses .NET Framework for FCL to design applications with efficiency, while user also needs that certain components of Framework to run the .NET applications using CLR.

### .NET Core

.NET Core is an open-source software framework designed for cross-platform implementation (available for Windows, Linux, and macOS), while the .NET Framework is only available for Windows.

### Xamarin/Mono

Mono software framework created by Xamarin (subsidiary of Microsoft) is another .NET implementation for mobile operating system such as Windows apps, Android, and iOS.

## Comment

Line comment is used to place a comment worth one line of code, using `//` (double slash).

Block comment places a comment that requires more than one line, using `/* */` (slash asterisk).

```c#
/*
This is a block comment:
multiple line of comment can be placed here.
*/
    
System.Console.WriteLine(1);
System.Console.WriteLine(2); // This is a line comment that for a single line of code.
System.Console.WriteLine(3);
```

```
1
2
3
```

## Namespace

Namespace is considered as inner-script folder (scope) containing variables and methods. 

In general, name of variables and methods must be unique and cannot have multiple same name in one script due to conflicting error on compilation. To overcome this matter, assign variables and methods under the namespace which allow the use of multiple same name across different namespaces.

```c#
namespace MainScope{
    
	class Program{
        /* PROGRAM STARTS FROM THIS CLASS METHOD */
        static void Main(){
        	statements;
            
            // CALLING DATA IN DIFFERENT NAMESPACES
            SubScope1.Plugin.fieldName;
            SubScope2.Plugin.methodName();
        }
    }
    
    // NESTED NAMESCOPE
    namespace SubScope1{
        static class Plugin{
        	public var fieldName;
        }
    }
}

// INDEPENDENT NAMESCOPE
namespace SubScope2{
	static class Plugin{
        public void methodName(){
        	statements;
        }
    }
}
```

However, name of the namespaces must be unique and cannot have multiple same name in one program as well.

### `using` Keyword

Referencing namespace every time calling the variable and method located at different namespace can be extremely annoying. The keyword `using` can resolve this repetitive task and provide huge convenience to the programmer.

```c#
class Program{
	static void Main(){
    	System.Console.WriteLine("Hello");
        System.Console.WriteLine("World!");
    }
}
```

By implementing `using` keyword, the above code can be shortened to the code below:

```c#
using System;

class Program{
	static void Main(){
    	Console.WriteLine("Hello");
        Console.WriteLine("World!");
    }
}
```

Beware, redundant use of `using` keyword can cause confusion and results compiler to compile differently or raise a compilation error, mainly due to compiler unable to distinguish whether the data is from which namespace.

## Input & Output

C# displays the results by writing on the console windows and has two different version of output:

| OUTPUT                | SYNTAX                      | DESCRIPTION                             |
| --------------------- | --------------------------- | --------------------------------------- |
| `Console.Write()`     | `Console.Write("Text")`     | Write function without line terminator. |
| `Console.WriteLine()` | `Console.WriteLine("Text")` | Write function with new line feature.   |

```c#
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

Meanwhile, there are three different of input which it reads the input data from the console:

| INPUT                | RETURN         | DESCRIPTION                                             |
| -------------------- | -------------- | ------------------------------------------------------- |
| `Console.Read()`     | Integer        | Read function for a single character in ASCII.          |
| `Console.ReadLine()` | String         | Read function for a single line of text in string.      |
| `Console.ReadKey()`  | ConsoleKeyInfo | Read function for a single keyboard button pressed.[]() |

```c#
using System;

class Program{
    static void Main(){
        System.Console.Write("Console.Read: ");
        int value1 = System.Console.Read();
        System.Console.WriteLine(">>> {0}\n", value1);
        
        System.Console.Write("Console.ReadLine: ");
        string value2 = System.Console.ReadLine();
        System.Console.WriteLine(">>> {0}\n", value2);
        
        System.Console.Write("Console.ReadKey: ");
        System.ConsoleKeyInfo value3 = System.Console.ReadKey();
        System.Console.WriteLine(">>> {0}", value3);
    }
}
```

```
Console.Read: Ko
>>> 75

Console.ReadLine: This is a string.
>>> This is a string.

Console.ReadKey:  
>>> Spacebar
```

### Placeholder

Placeholder is used in formatted string to place variable value to certain location of text.

```c#
int variable1 = 3;
char variable 'G'
System.Console.Write("First: {0}, Second: {1}, Return to {0}.", variable1, variable2);
```

```
First 3, Second G, Return to 3.
```

### Escape Sequence

Begins with backslash `\` it allows formatting of string.

| SYNTAX | DESCRIPTION    |
| ------ | -------------- |
| `\n`   | New line       |
| `\t`   | Horizontal tab |
| `\\`   | Backslash      |
| `\b`   | Backspace      |
| `\'`   | Single quote   |
| `\"`   | Double quote   |

## Variable

Variable is a container for the data which can be assigned using assignment operator `=`. There are three different common stages in variable: declaration, definition, and initialization.

* **Declaration**
  : Declaration is declaring existence of the construct of such as variables, objects, and more. The declaring also includes specifying which data type the construct is.

  ```c++
  int value;
  ```
  
* **Definition**
  : Definition refers to block of codes on values and performance the construct has and is capable of.

  ```c++
  value = 3;
  ```

* **Initialization**
  : Initialization is assigning the initial value to the construct, simply the *first* definition. Since the first definition is generally done on the same time when declaring the construct. Hence, initialization is commonly thought by people as *declaration + definition* which is not always true.

  ```c++
  int value = 3;
  ```

Once the data type is defined to that variable, that variable can only take the value of that designated data type.

### Local & Global Variable

**Local variable** is declared inside a function and cannot be used outside the function. Data stored in local variable evaporates (thus gone) when exiting the function.

**Global variable** is declared outside a function and can be used on entire program. However, global variable should be used less as possible to avoid unexpected result and error caused by global variable conflicting with other variables.

### Constant Variable

**Constant variable** cannot be changed after its initial value assigned (keyword: `const`). Constant variable is only assigned through the `// METHOD_2` variable assignation.

```c#
const int ivalue = 3;
```

### Static Variable

Local variable that maintains its data even when the function is exited. When re-entering the function, the static variable will be ready to use from the last-saved data.

```c#
static int ivalue = 3;
```

## Data Type

Data-type is one of the important factor in the C-based programming languages. Each data-type has its defined byte size to store data, thus results memory and time efficiency when processing the script. 

C# programming language have several number of pre-defined type identifier as follows:

| IDENTIFIER | DATA TYPE              | DESCRIPTION                                                  |
| ---------- | ---------------------- | ------------------------------------------------------------ |
| `int`      | Integer                | 32-bits precision integer number.<br />Size: 4 bytes         |
| `float`    | Floating point number  | Real number with decimal points.<br />Size: 4 bytes          |
| `double`   | Double-precision float | Float with doubled precision and memory.<br />Size: 8 bytes  |
| `char`     | Character: `''`        | A single character, e.g., `'A'` and `'?'`.<br />Size: 1 byte |
| `string`   | String: `""`           | Series of characters under the namespace `std`.<br />Size: N/A (depends on overall character length) |
| `bool`     | Boolean                | Non-zero represents `True` while zero is `False`.<br />Size: 1 byte |
| `var`      | Automatic              | Data type is declared automatically.<br />Useful for declaring new variable with complex data type. |
| `void`     | Void                   | Non-specific data type.<br />Size: 1 byte                    |

### Type Conversion

C# programming language has two different conversion option available:

**1. Implicit conversion**

Type conversion that is done automatically by the compiler, thus no special syntax is required. This conversion is safe with no risk of losing any data. Typical example is type conversion from smaller to larger (size) data type, e.g., conversion from integer to double.

```c#
int ivalue = 0;
double dvalue = dvalue;	// Converts 4 bytes integer to 8 bytes long automatically.
```

**2. Explicit conversion (cast)**

Unlike implicit conversion where type conversion cannot be made without losing a portion of data, performing explicit conversion becomes necessary, aka. cast. Conversion is done using cast operator `()` and there's no guarantee the conversion would succeed as intended. Typical example is type conversion from larger to smaller (size) data type, e.g., conversion from double from integer.

```c#
double dvalue = 3.14;
int ivalue = (int)dvalue;
```

**3. Helper class conversion**

The term "helper class" refers to a class which provides methods to *help* do something, e.g., converting data type using `Convert` class.

```c#
int ivalue = System.Convert.ToInt32(Console.ReadLine());
bool bvalue = System.Convert.ToBoolean(Console.ReadLine());
double dvalue = System.Convert.ToDouble(Console.ReadLine());
```

## **Operation**

### Arithmetic Operation

Following is a list of arithmetic operation that can be done on C-based programming language:

|             NAME             | OPERATOR | DESCRIPTION                                                  |
| :--------------------------: | -------- | ------------------------------------------------------------ |
|           Addition           | `+`      |                                                              |
|         Subtraction          | `-`      |                                                              |
|        Multiplication        | `*`      |                                                              |
|           Division           | `/`      | When both operands are integer: dividend is an integer without remainder.<br/>When at least one operand is real (float or double): dividend is a real (float or double). |
| Remainder (Modulus Division) | `%`      | Remainder only returns integer.                              |

For easier readability of the arithmetic operation, you can place blank space between number and operator, and it doesn’t affect anything on output.

### Assignment Operation

Following is a list of assignment operation that can be done on C programming language:

| OPERATOR | EXAMPLE | EQUIVALENT |
| -------- | ------- | ---------- |
| `+=`     | `x+=1`  | `x=x+1`    |
| `-=`     | `x-=1`  | `x=x-1`    |
| `*=`     | `x*=1`  | `x=x*1`    |
| `/=`     | `x/=1`  | `x=x/1`    |
| `%=`     | `x%=1`  | `x=x%1`    |

Although not an assignment operation, a similar **increment and decrement** of the numerical value can be expressed as follow on C-based programming language:

| OPERATOR    | EXAMPLE | DESCRIPTION   |
| ----------- | ------- | ------------- |
| `++` prefix | `x=y++` | `x=y; y=y+1;` |
| `++` suffix | `x=++y` | `y=y+1; x=y;` |
| `--` prefix | `x=y--` | `x=y; y=y-1;` |
| `--` suffix | `x=--y` | `y=y-1; x=y;` |

### Relational Operation

Following is a list of assignment operation that can be done on C-based programming language:

| OPERATOR | DESCRIPTION              |
| -------- | ------------------------ |
| `<`      | Lesser than              |
| `<=`     | Lesser than or equal to  |
| `>`      | Greater than             |
| `>=`     | Greater than or equal to |
| `==`     | Equal to                 |
| `!=`     | Not equal to             |

### Logical Operation

Logical operation has AND, OR, and NOT. When doing so, think of True and False as binary 1 and 0, respectively. In wider sense, any non-zero number is deemed True.

| OPERATOR | LOGIC | DESCRIPTION                                          |
| -------- | ----- | ---------------------------------------------------- |
| `&&`     | AND   | True when all the arguments are True, else False.    |
| `||`     | OR    | True when at least one argument is True, else False. |
| `!`      | NOT   | Change True to False and vice versa.                 |

# **C#: CONDITIONAL AND LOOP**

## **`if` Statement**

`if` statement runs code if a certain condition holds. If condition evaluates *True*, the statements are carried out. Otherwise, they aren't carried out.

```cpp
if( logical_condition ) {   // E.g. x==1
    statements;             // E.g. printf("Hello World\n");
}
```

`if` statement can be placed inside another `if` statement, called "nested `if`". It is recommended to use curly bracket `{}` to distinguish between `if` statements to avoid computer’s misinterpretation.

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
logic_condition ? true_return : false_return;
```

Ternary operator should not be overused as it reduces readability, but useful on variable assignment.

## **`switch` Statement**

Another conditional statement which execute one case of statements out of many cases assigned with value, selected when it’s True to argument expression. Every case needs `break` at the end of the group of statements to not iterate over again. Modern C# compiler return error if this is not observed.

When no case is True to the expression, the statements from default is returned. Unlike C and C++ programming language, default case in C# switch statement does require `break` statement. Default case is not necessary as well but is recommended to represent every other case.

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
        break;
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
        break;
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

### Infinite `for` Loop

It is possible to run infinite loop using `for` loop using the following statemen:

```c#
for(;;){}
```
## **`foreach` Loop**

Since C++11, a new variation of `for` loop was introduced that can loop the execution while in range.

```c#
// statements are repeated for a given range.
foreach ( internal_variable in iterable_object ) {
	statements;
}

// simplified foreach loop when the loop statement is simple as a single line.
foreach ( internal_variable in iterable_object ) statement;
```

The `foreach` loop above uses an array object as a range.

# **C#: ITERABLE-OBJECT**

## **Array**

An iterable object used to store an indexed list of items of same data-type. Declaring (existence of) array is done by placing a pair of bracket `[]` after its data type.
```c#
/* ARRAY DECLARATION. */
int[] arrayName1;
```

This, however, does not create an array instance. It only acknowledges such named variable is intended for array object.

Because array itself is also an instance created from pre-built classes in C# programming language, `new` keyword is needed for instantiation and its data type with a pair of bracket numbered by the size of the array. Hence, initializing array is done as follows:

```c#
/* ARRAY INITIALIZATION. */
int[] arrayName1 = new int[5];
```

Assigning the value to array is done using the following methods:

```c#
/* ARRAY ASSIGNMENT. */
int[] arrayName1 = new int[5] {3, 1, 4, 1, 5};

/* ARRAY ASSIGNMENT: UNDEFINED SIZE. */
int[] arrayName1 = new int[ ] {3, 1, 4, 1, 5};

/* ARRAY ASSIGNMENT: SIMPLIFIED UNDEFINED SIZE. */
int[] arrayName1 = {3, 1, 4, 1, 5};
```

Calling array itself does not return a sequence of elements within; instead will return the information of array data. Only a single element at a time can be called.

```c#
/* CALLING ARRAY. */
int[] arrayName1 = new int[5] {3, 1, 4, 1, 5};

System.Console.WriteLine(arrayName1);
System.Console.WriteLine(arrayName1[0]);
```

```
System.Int32[]
3
```

To check all the elements in the array, one way to do this is by using `for` and `foreach` loop to iterate through every element of the array.

```c#
/* CALLING ARRAY: FOREACH LOOP. */
int[] arrayName1 = new int[5] {3, 1, 4, 1, 5};

foreach(int ivalue in arrayName1){
	System.Console.Write(ivalue);
}
```

```
31415
```

### Array Properties & Methods

Just like Python, array object has its own properties and methods programmer can access. Examples of array properties and methods are as follows:

| PROPERTIES | EXAMPLE        | DESCRIPTION                                    |
| ---------- | -------------- | ---------------------------------------------- |
| `Length`   | `array.Length` | Returns total number of elements in the array. |
| `Rank`     | `array.Rank`   | Returns highest dimension in the array.        |

```c#
int[] arrayName1 = new int[] {3, 1, 4, 1, 5};

/* ARRAY PROPERTIES. */
System.Console.WriteLine(arrayName1.Length);	// TOTAL FIVE: 3, 1, 4, 1, and 5
System.Console.WriteLine(arrayName1.Rank);		// RANK-1 MATRIX
```

```
5
1
```

| METHOD | EXAMPLE       | DESCRIPTION                                      |
| ------ | ------------- | ------------------------------------------------ |
| `Max`  | `array.Max()` | Returns highest value of element in the array.   |
| `Min`  | `array.Min()` | Returns lowest value of element in the array.    |
| `Sum`  | `array.Sum()` | Return overall sum of the elements in the array. |

```c#
int[] arrayName1 = new int[5] {3, 1, 4, 1, 5};

/* ARRAY METHODS. */
System.Console.WriteLine(arrayName1.Max());
System.Console.WriteLine(arrayName1.Min());
System.Console.WriteLine(arrayName1.Sum());
```

```
5
1
14
```

### Multi-dimensional Array

Previous array only had a data in a 1^st^ dimension but it is possible to have data on 2^nd^ dimension and above, namely multi-dimension array. The underlying fundamental syntaxial concept is identical to its predecessor; placing comma and size of the next dimension is all that it takes. 

```c#
/* MULTI-DIMENSIONAL ARRAY ASSIGNMENT */
int[ , ] arrayName1 = new int[3,2] /\{\{/3, 1}, {4, 1}, {5, 9/\}\}/;

/* MULTI-DIMENSIONAL ARRAY ASSIGNMENT: UNDEFINED SIZE. */
int[ , ] arrayName1 = new int[ , ] /\{\{/3, 1}, {4, 1}, {5, 9/\}\}/;

/* MULTI-DIMENSIONAL ARRAY ASSIGNMENT: SIMPLIFIEDUNDEFINED SIZE. */
int[ , ] arrayName1 = /\{\{/3, 1}, {4, 1}, {5, 9/\}\}/;
```

### Jagged Array

Jagged array is an array whose elements are also arrays.

```c#
int[][] arrayName1 = new int[3][] {new int[] {3}, new int[] {1, 4, 1}, new int[] {5, 9}}
```

While this sounds very similar to multi-dimensional array, there exist a core difference:

Multi-dimensional array is a single block of memory, but array in jagged array are stored in separate memory location. Therefore, multi-dimensional array must have equal length of size in every dimension but jagged array does not.

## **String**

String is one of the best example of array object with its element consist of a single character.

| PROPERTIES | EXAMPLE        | DESCRIPTION                                                |
| ---------- | -------------- | ---------------------------------------------------------- |
| `Length`   | `array.Length` | Returns total number of characters, including blank space. |
The difference between the C and C++ programming language is the string in C# does not have null-terminator. Hence, the length property of the array is exactly the same as the number of characters.

```c#
string str = "Hello World!";

/* STRING PROPERTIES. */
System.Console.WriteLine(svalue.Length);
```

```
12
```

The methods of the string object are as follows:

| METHOD      | EXAMPLE                        | DESCRIPTION                                                  |
| ----------- | ------------------------------ | ------------------------------------------------------------ |
| `IndexOf`   | `str.IndexOf(value)`           | Returns index of first occurrence of the `value`.            |
| `Insert`    | `str.Insert(index, value)`     | Insert the `value` at the `index`.                           |
| `Replace`   | `str.Replace(old,new)`         | Replace the `old` value to `new` value.                      |
| `Contains`  | `str.Contains(value)`          | Check whether the `str` contains `value` inside.             |
| `Remove`    | `str.Remove(index)`            | Remove all the characters after the `index`.                 |
| `Substring` | `str.Substring(index, length)` | Extract from `index` to `length` long;<br />When no `length`, extract until the end. |

```c#
string str = "Hello World!";

/* STRING METHODS. */
System.Console.WriteLine(str.IndexOf('l'));
// OUTPUT: 2

System.Console.WriteLine(str.Insert(7, "New "));
// OUTPUT: "Hello New World!"

System.Console.WriteLine(str.Replace("New", "Old"));
// OUTPUT: "Hello Old World!"

System.Console.WriteLine(str.Contains("World"));
// OUTPUT: found

System.Console.WriteLine(str.Remove(9));
// OUTPUT: "Hello Old"

System.Console.WriteLine(str.Substring(1,7));
// OUTPUT: "ello Ol"
```

## **Collection**

*To better understand this section, please read the chapter "C#: GENERIC" beforehand.*

Collection is similar to array but it is more dynamic, meaning its size is flexible it can shrink and extend to accommodate any number of objects. 

Collection is divided into two category: generic and non-generic collection. While the term "generic" will be introduced on later chapter, short and brief explanation is its data type can be designated upon the declaring the collection.

```c#
// EXAMPLE OF DECLARATION OF GENERIC COLLECTION:
using System.Collections.Generic;	// System.Collections.Generic.List<T> >> List<T>
Collection<int> collectionName = new Collection<int>();
```

Declaration of the array can simply be done using the syntax `int[] arrayName = new int[5];`. However, collection is different from array which requires different approach on declaration for different data type, thus using generics.

### Lists

List generic collection is similar to an array but the its flexible size change allows inserting and removing the elements more dynamic. Below is some of the properties and methods the list generic collection has:

| PROPERTIES | EXAMPLE      | DESCRIPTION                            |
| ---------- | ------------ | -------------------------------------- |
| `Count`    | `li.Count` | Return the number of elements in the collection. |
| `Add()`      | `li.Add(value)` | Append `value` at the end of the list. |
| `Insert()`      | `li.Insert(index, value)` | Insert `value` at the `index` location. |
| `Remove()`   | `li.Remove(value)` | Remove the first element of `value`. |
| `RemoveAt()`       | `li.RemoveAt(index)` | Remove element located at `index`. |
| `Clear()`    | `li.Clear()` | Remove all its elements from the collection. |

```c#
using System.Collections.Generic;

static void Main(){
	/* DECLARATION OF THE LIST COLLECTION. */
	List<int> listName = new List<int>();
    
    listName.Add(2);
    listName.Add(3);
    System.Console.WriteLine(listName[0]);
}
```

```
2
```

### SortedList

Sorted list generic collection is a variation of the list generic collection where its values (elements) are accessed and sorted in order by data-type specific key (index). These keys are unique and should not share the same name. Below is some of the properties and methods the SortedList generic collection has:

| PROPERTIES | EXAMPLE      | DESCRIPTION                            |
| ---------- | ------------ | -------------------------------------- |
| `Count`    | `sl.Count` | Return the number of elements in the collection. |
| `Keys` | `sl.Keys` | Return collection of keys in array-like format. |
| `Values` | `sl.Values` | Return collection of values in array-like format. |
| `Add()`      | `sl.Add(key, value)` | Append `value` and its `key` in the sorted list as a pair. |
| `Remove()`   | `sl.Remove(key)` | Remove the element in the sorted list by its `key`. |
| `Clear()`    | `sl.Clear()` | Remove all its elements from the collection. |

```c#
using System.Collections.Generic;

static void Main(){
	/* DECLARATION OF THE SORTED LIST COLLECTION. */
	SortedList<string, int> slistName = new SortedList<string, int>();
    
    slistName.Add("Alpha", 2);
    slistName.Add("Bravo", 3);
    System.Console.WriteLine(slistName["Alpha"]);
}
```

```
2
```

### BitArray

BitArray non-generic collection is a variation of the list collection whereas its each element is a value of a bit; either 0 (false) and 1 (true). Unlike its general collections, BitArray is declared with its fixed-size and cannot be changed afterward. Below is some of the properties and methods the BitArray non-generic collection has:

| PROPERTIES | EXAMPLE               | DESCRIPTION                                       |
| ---------- | --------------------- | ------------------------------------------------- |
| `Count`    | `ba.Count`            | Return the number of elements in the collection. |
| `Get()`        | `ba.Get(index)` | Return the bit element located at `index`;<br />Equivalent to `ba[index]`. |
| `SetAll()` | `ba.SetAll(bool)`     | Set all its bit elements as Boolean `bool`.       |
| `Set()`    | `ba.Set(index, bool)` | Set the bit element at `index` as Boolean `bool`. |
| `Not()`    | `ba.Not()`            | Perform NOT operation on BitArray `ba`.           |
| `And()`    | `ba1.And(ba2)`        | Perform AND operation between `ba1` and `b2`.     |
| `Or()`     | `ba1.Or(ba2)`         | Perform OR operation between `ba1` and `b2`.      |

```c#
using System.Collections;

static void Main(){
	/* DECLARATION OF THE BITARRAY COLLECTION. */
    BitArray barrayName1 = new BitArray(4);
    BitArray barrayName2 = new BitArray(4);

    barrayName1.SetAll(true);
    barrayName2.SetAll(false);

    System.Console.WriteLine(barrayName1.Get(0));
    System.Console.WriteLine(barrayName2[0]);
}
```

```
true
false
```

### Stack

Stack is a LIFO (Last In First Out) memory-structure generic collection where last element to append (push) to the collection needs to come out (pop) first beforehand to previous elements. Below is some of the properties and methods the Stack generic collection has:
| PROPERTIES | EXAMPLE               | DESCRIPTION                                       |
| ---------- | --------------------- | ------------------------------------------------- |
| `Count`    | `st.Count`         | Return the number of elements in the collection. |
| `Peek()`       | `st.Peek()` | Return the value of the top stack without removing it. |
| `Pop()` | `st.Pop()`  | Return the value of the top stack as remove from stack. |
| `Push()`    | `st.Set(value)` | Append the `value` on top of the stack. |
| `Clear()`    | `st.Clear()`         | Remove all its elements from the collection. |
| `Contains()`    | `st.Contains(value)`     | Return Boolean True when `value` is found in the stack. |
| `ToArray()` | `st.ToArray()`      | Copy the stack into a new array. |

```c#
using System.Collections.Generic;

static void Main(){
	/* DECLARATION OF THE STACK COLLECTION. */
    Stack<int> stackName = new Stack<int>();

    stackName.Push(2);
    stackName.Push(3);
    
    System.Console.WriteLine(stackName.Pop());
    System.Console.WriteLine(stackName.Peek());
}
```

```
3
2
```

Stack collection cannot use the syntax `stackName[index]` to browse the elements in the stack.

### Queue

Stack is a FIFO (First In First Out) memory-structure generic collection where last element to append (push) to the collection needs to come out (pop) first beforehand to previous elements. Below is some of the properties and methods the Stack generic collection has:

| PROPERTIES | EXAMPLE               | DESCRIPTION                                       |
| ---------- | --------------------- | ------------------------------------------------- |
| `Count`    | `st.Count`         | Return the number of elements in the collection. |
| `Peek()`       | `st.Peek()` | Return the value of the first queue without removing it. |
| `Dequeue()` | `st.Pop()`  | Return the value of the first queue as remove from queue. |
| `Enqueue()` | `st.Set(value)` | Append the `value` at the last end of the queue. |
| `Clear()`    | `st.Clear()`         | Remove all its elements from the collection. |
| `Contains()`    | `st.Contains(value)`     | Return Boolean True when `value` is found in the queue. |
| `ToArray()` | `st.ToArray()`      | Copy the queue into a new array. |

```c#
using System.Collections.Generic;

static void Main(){
	/* DECLARATION OF THE QUEUE COLLECTION. */
    Queue<int> queueName = new Queue<int>();

    stackName.Enqueue(2);
    stackName.Enqueue(3);
    
    System.Console.WriteLine(queueName.Dequeue());
    System.Console.WriteLine(queueName.Peek());
}
```

```
2
3
```

### Dictionary
Dictionary generic collection is a variation of the list generic collection where its values (elements) are accessed via data-type specific key (index) but unsorted. These keys are unique and should not share the same name. Below is some of the properties and methods the Dictionary generic collection has:

| PROPERTIES | EXAMPLE      | DESCRIPTION                            |
| ---------- | ------------ | -------------------------------------- |
| `Count`    | `dic.Count` | Return the number of elements in the collection. |
| `Keys` | `dic.Keys` | Return collection of keys in array-like format. |
| `Values` | `dic.Values` | Return collection of values in array-like format. |
| `Add()`      | `dic.Add(key, value)` | Append `value` and its `key` in the dictionary as a pair. |
| `Remove()`   | `dic.Remove(key)` | Remove the element in the dictionary by its `key`. |
| `Clear()`    | `dic.Clear()` | Remove all its elements from the collection. |

```c#
using System.Collections.Generic;

static void Main(){
	/* DECLARATION OF THE SORTED LIST COLLECTION. */
	Dictionary<string, int> dicName = new Dictionary<string, int>();
    
    dicName.Add("Alpha", 2);
    dicName.Add("Bravo", 3);
    System.Console.WriteLine(dicName["Alpha"]);
}
```

```
2
```

Distinct difference between Dictionary and SortedList collection is the formal is unsorted and latter is sorted automatically based on the key. However, there are much more technical differences related to memory usage and performance efficiency.

### HashSet

HashSet generic collection where elements are unique and does not allow duplicates. Below is some of the properties and methods the Dictionary generic collection has:

| PROPERTIES | EXAMPLE      | DESCRIPTION                            |
| ---------- | ------------ | -------------------------------------- |
| `Count`    | `hs.Count` | Return the number of elements in the collection. |
| `Add()`      | `hs.Add(value)` | Add `value` to the HashSet. |
| `Remove()`   | `hs.Remove(value)` | Remove `value` from the HashSet. |
| `Contains()`       | `hs.Contains(value)` | Return Boolean True when `value` is found in the HashSet. |
| `Clear()`    | `hs.Clear()` | Remove all its elements from the collection. |

HashSet provides high-performance set operations, just like a set from a mathematics. HashSet offers the set operation (i.e., union, intersection, et cetera):

| OPERATIONS | EXAMPLE      | DESCRIPTION                            |
| ---------- | ------------ | -------------------------------------- |
| `IsSubsetOf()` | `hs1.IsSubsetOf(hs2)` | Returns true if `hs1` is a subset of `hs2`. |
| `IsSupersetOf()` | `hs1.IsSupersetOf(hs2)` | Returns true if `hs1` is a superset of `hs2`. |
| `UnionWith()` | `hs1.UnionWith(hs2)` | Consider as follows: $\mathrm{hs1} = \mathrm{hs1} \cup \mathrm{hs2}$ |
| `IntersectWith()` | `hs1.InteresctWith(hs2)` | Consider as follows: $\mathrm{hs1} = \mathrm{hs1} \cap \mathrm{hs2}$ |
| `ExceptWith()` | `hs1.ExceptWith(hs2)` | Consider as follows: $\mathrm{hs1} = \mathrm{hs1} - \mathrm{hs2}$ |


```c#
using System.Collections.Generic;

static void Main(){
	/* DECLARATION OF THE SORTED LIST COLLECTION. */
	HashSet<int> hsetName1 = new HashSet<int>();
    HashSet<int> hsetName2 = new HashSet<int>();
    
    hsetName.Add(2);
    hsetName.Add(3);
    System.Console.WriteLine(dicName["Alpha"]);
}
```

```
2
```

# **C#: METHOD**

C# language is executed based around a single key method called `Main()`. While other C-based language have its term called "function", C# language calls it a "method" is due to C# being a object-oriented programming language and method is a function bounded by an object. Understanding the concept of method (or function) is important in C-based languages, which can also be applied different programming languages as well.

## **Method**

In C# programming, method (aka. function) is a member of class with a block of code which can process the data and present processed/new data once it’s called, allowing the design of a dynamic program scripting. The reason it's called method is because it is a function bounded by the class. In other word, the method cannot be used independently without the instance.

Method (aka. code blocks) have curly bracket `{}` which is a space where statements are executed. Each statement must end with a semicolon `;`.

```c#
class Program{    
    /* DO NO REQUIRE DECLARATION! */

    static void Main(){
		/* CALL: using the newly created method is done by simply placing method_name.*/
        method_name();
    }
    
    /* DEFINITION: describe what the method do.*/
    static int method_name(){
    	statements;
        return outcome;
    }
}
```

### Return Statement

Return statement terminates a method and returns indicated value, which is defined by the data type of the method placed before its name.

### `Main()` Method

The `Main()` *static* method is a where an actual programming starts. A solution (aka. project) must have one and the only `Main()` method within all the source files: creating multiple `Main()` methods or not having any `Main()` method will cause error on running the program.

In some case, `Main()` method has a parameter as follows:

```c#
/* D:\Workspace\Csharp\Sample.exe */

class Program{
    /* Main() METHOD WITH PARAMETERS */
    static void Main(string[] args){
    	statements;
    }
}
```

Prior to executing the program, additional arguments can be added after calling the program.

```
> D:\Workspace\Csharp\Sample.exe argument1 argument2 argument3
```

These arguments are passed through and is declared as below:

```c#
string[] args = {argument1, argument2, argument3};
```

## **Parameter & Argument**

Argument value is passed over to parameter of the method, but parameter and argument is processed in different memory thus does not affect each other (i.e. change of value). To make parameter and argument influential to each other, a pointer is used to do the job.

It is possible to define default arguments for function execution even without external arguments. Additionally, C# supports named parameter where passing argument by specifying the parameter name, while this is not possible in C++ language. However, you cannot skip to next argument passing by typing double comma.

```cpp
class Program{
    static int method_name(int a, int b = 2, int c = 3){
        return a * b + c;
    }
    
    static void Main(string[] args){
        System.Console.WriteLine( method_name(1,4) );			// 1 * 4 + 3 = 7
        System.Console.WriteLine( method_name(c: 5, a: 2) );	// 2 * 2 + 5 = 9
        System.Console.WriteLine( method_name(1, ,4) );		// COMPILATION ERROR!
    }
}
```

```
7
9
error CS0839: Argument missing
```

There are three different method of passing arguments to parameters: call by value, reference and output.

### By Value

This method passes only the value of the variable, meaning the variables as argument and parameter are separate identities. Hence, changes of parameter within the method does not affect variable passed as an argument anyhow.

```c#
class Program{
    /* CALL BY VALUE */
    static void method_name(int x, int y){
        x += y;
        System.Console.WriteLine(x);
    }
    
    static void Main(string[] args){
        int a = 1; int b = 2;
        method_name(a, b);			// x = 1 + 2 = 3
        
        System.Console.WriteLine(a);		// x = 1 + 2 = 3
    }
}
```

```
3
1
```

### By Reference

Call by reference passes the address of the variable, thus the variable of argument and parameter is the exact same identity. The changes of parameter within the method does affect variable passed as an argument, and it is done using `ref` keyword.

```c#
class Program{
    /* CALL BY VALUE */
    static void method_name(ref int x, ref int y){
        x += y;
        System.Console.WriteLine(x);
    }
    
    static void Main(string[] args){
        int a = 1; int b = 2;
        method_name(ref a, ref b);		// x = 1 + 2 = 3
        
        System.Console.WriteLine(a);			// a = x = 3
    }
}
```

```
3
3
```

However, starting from C# 7.2 introduced a new variation of call by reference, namely `in` keyword. This is almost identical to `ref` keyword but also encompasses part of call by value; the passed variable to parameter is read-only and unmodifiable, thus does not affect original variable.

```c#
class Program{
    /* CALL BY VALUE */
    static void method_name(in int x, in int y){
        x = 3;						// COMPILATION ERROR!
        System.Console.WriteLine(x);
    }
    
    static void Main(string[] args){
        int a = 1; int b = 2;
        method_name(in a, in b);
    }
}
```

```
Cannot assign to variable 'in int' because it is a readonly variable
```

Because it does not create a copy and uses call by reference, it does not consume additional memory. Therefore, `in` keyword is best used for improving the process performance.

### By Output

Call by output is similar to call by reference that variable passed as argument and its parameter is a single identity. However, the purpose of `out` output keyword is used to assign value to variables: while the variable is declared outside the method without any value, its assignment is done within the method via call by output.

```c#
class Program{
    static void method_name(out int x, out int y){
        x = 1;
        y = 2;
    }
    
    static void Main(string[] args){
        int a, b;
        method_name(out a, out b);	// VARIABLE a AND b MUST BE AN UNASSIGNED VARIABLE.
        
        System.Console.WriteLine(a);		// a = x = 1
        System.Console.WriteLine(b);		// b = y = 2
    }
}
```

```
1
2
```

## **Overloading**

Method overloading refers to the method with the same name but consist of different parameters. Compiler identify such functions as different methods and can call the appropriate method automatically based on the data type passed from argument to parameter.

```c#
class Program{
    // OVERLOADED: INTEGER
    static void method_name(int x){
        statements;
    }
    
    // OVERLOADED: DOUBLE
    static void method_name(double x){
    	statements;
    }
    
    // COMPILATION ERROR: IDENTICAL CONSISTENCY TO "DOUBLE" OVERLOADED METHOD.
    /* static double method(double y) {
    	statements;
    } */
    
    static void Main(string[] args){
        method_name(3);		// INTEGER
        method_name(3.14);	// DOUBLE
    }
}
```

However, method overloading does not apply to difference in return data type: the compiler will see them as a single identical method as long as consisting parameters are the same. This eventually lead to compilation error.

# **C#: OBJECT-ORIENTED PROGRAMMING**

Object-oriented programming is a programming style based around usage of objects used as a block to build-up the script, which is close to real world representation. Since C# is designed to be programmed using object-oriented style.

## **Objects**

Objects (aka. instances) are independent unit of data, created from the class (that is, the blueprint for object) called *instantiation*. Each object has its own members which capsulate its current states and functions, called **fields** and **methods**:

| MEMBER | DESCRIPTION                                                  |
| ------ | ------------------------------------------------------------ |
| Field  | Member that is a variable declared directly in a class or struct. |
| Method | Member which functions with certain behavior, only available by its object. |

While the term object is first mentioned upon introduction of the class to create customized object, objects declared by pre-built class has been used many time prior to this section already; e.g., integer object `ivalue` from the declaration `int ivalue;`.

## **Modifier**

Modifier is used to initialize the property of the class or the members in object from the class.

| MODIFIER  | KEYWORD    | DESCRIPTION                                                  |
| --------- | ---------- | ------------------------------------------------------------ |
| Static    | `static`   | Member is accessible without instantiation.                  |
| Constant  | `const`    | Static member initialized to unmodifiable constant value.    |
| Read-only | `readonly` | Similar to `const` but with less restrictions and is non-static. |
| Sealed    | `sealed`   | Prevents inheritance of the class or its members.            |
| Virtual   | `virtual`  | Allows method override by derived class; paired with `override`. |
| Override  | `override` | Override inherited method from base class; paired with `virtual`. |
| Abstract  | `abstract` | Similar to `virtual` method but without any method definition. |

Meanwhile, some modifier may needs some more detail description to fully understand:

**1. DIFFERENCE BETWEEN CONSTANT AND READ-ONLY**

While both prevents modification of the field member after the initialization, there are quite some difference between constant and read-only member.

Constant:

* Static member
* Initialization is done using declaration only
* Cannot be declared empty-valued

Read-only:

* Non-static member
* Initialization is done using declaration and constructor
* Can be declared empty-valued

### Access Modifier

Access modifier is specifically used to modify the access authorization to certain members. There are four different access modifiers available in C# classes: public, private, protected, and internal.

| A.MODIFIER | KEYWORD     | DESCRIPTION                                                  |
| ---------- | ----------- | ------------------------------------------------------------ |
| Public     | `public`    | External code can access the member outside the instance.    |
| Private    | `private`   | Members are only accessible to code within its instance.     |
| Protected  | `protected` | Members are only accessible by the members of its derived class. |
| Internal   | `internal`  |                                                              |

The following provides more detail information on certain access modifier:

**1. Private**

Private member is widely used for an encapsulation; it combines the fields and methods of the class together but also restricts access to fields and methods of that class and the variables within to prevent accidental modification, thus protect them. This is done by allowing access from external code only to selected components, called **Data Hiding**.

## **Classes**

Class is a user-defined data type for creating objects, hence can be deemed as an object’s blueprint. The name of the class is also called as "type", thus class is used to create an instance of a particular *type*. The process of creating an instance through class is called *instantiation*, and without instantiation won't be able to use (non-static) members.

Class in C# have two method of storing data: by value and reference.

* By Value: stored on the stack (static memory allocation); for small data type like `int`, `char`.
* By Reference: stored on the heap (dynamic memory allocation); for large data type like object.

The reason why object is stored in heap instead of stack is due to the huge size of object that cannot be simply stored on the stack. Even if it's possible, is not recommended for performance-wise. Rather, it is much efficient to store on extremely large size of heap memory and utilize by calling its address. 

```c#
class Program{

	static void Main(){
        // INSTANTIATION SYNTAX: DATATYPE OBJECT = new CLASS();
        ClassName objectName1 = new ClassName();
        objectName1.ID = 1995;
        objectName1.setName("Ko");
        
        System.Console.WriteLine(objectName1.ID);
        System.Console.WriteLine(objectName1.getName());
    }
    
    /* USER-DEFINED CLASS */
    class ClassName{
        string name;						// PRIVATE PROPERTY (DEFAULT)
        public int age;						// PUBLIC PROPERTY
        public void setName(string str){	// PUBLIC METHOD 1
            name = str;
        }
        public string getName(string str){	// PUBLIC METHOD 2
        	return name;
        }
    }
}
```

```
1995
Ko
```

### Static Class

Class itself cannot use the its members directly and need to create instance to access them. However, declaring the class itself as static allows the class to access the members without needing any instantiation. Hence, it is impossible to create an instance from the static class.

```c#
class Program{
	
    /* USER-DEFINED STATIC CLASS */
    static class ClassName{
    	public fieldName;
        public int methodName;
    }
    
    static void Main(){
    	System.Console.WriteLine(ClassName.fieldName);
        System.Console.WriteLine(ClassName.methodName);
    }
}
```

Static class is generally used as a collection of member for specific purpose which does not (or should not) need instantiation; e.g., `Math`, `Array`, `String`, `DataTime`, `Console`, and more.

### `this` Keyword

The keyword `this` is used inside a class for current instance to refer itself.

```c#
class ClassName{
	private int X;
    public Person(int temp){
    	this.X = temp;
    }
}
```

### `operator` Keyword

Class can modify the operator such as `+`, `-` and more to suit better for its instances need. This is called operation overloading, a customized operation for specific instances via `operator`.

```c#
class ClassName{
    public int L1 {get; set;}
    public int L2 {get; set;}
    public ClassName(int x, int y){
    	L1 = x;
        L2 = y;
    }
    
    /* OPERATION OVERLOADING: OPERATOR + */
    public static int operator+(ClassName X, ClassName Y){
        return X.L1 + Y.L2;
    }
}
```

## **Constructor**

A special public member of the class executed every time new instance is created from the class. The name of the constructor member must be equal to the name of its class and does not require data type. Just like any method, constructor can be overloaded.

```c#
class Program{
    
    /* USER-DEFINED CLASS: WITH CONSTRUCTOR */
    class ClassName{
        string name;
        public int age;
        
        /* CONSTRUCTOR */
        public ClassName(){
        	System.Console.WriteLine("Hello World!");	// Constructor member
        }
        public ClassName(string tmp){					// Constructor member (OVERLOADED)
        	setName(tmp);
        }
        
        public void setName(string str){
            name = str;
        }
        public string getName(string str){
        	return name;
        }
    }
    
    static void Main(){
        ClassName objectName1 = new ClassName("Ko");	// (OVERLOADED) Constructor init.
        objectName1.ID = 1995;
        
        System.Console.WriteLine(objectName1.ID);
        System.Console.WriteLine(objectName1.getName());
    }
}
```

```
1995
Ko
```

### Static Constructor

Static constructor is executed when any static member is called even when it is not instantiated.

```c#
class Program{
    
    /* USER-DEFINED CLASS: WITH STATIC CONSTRUCTOR */
    class ClassName{
        public static int X;
        public static int Y;
        
        static ClassName(){
        	X = 2;
            Y = 3;
        }
    }
    
    static void Main(){
        System.Console.WriteLine(ClassName.X);
        System.Console.WriteLine(ClassName.Y);
    }
}
```

```
2
3
```

## **Destructor**

A special member of the class executed automatically when instance of the type is destroyed or deleted, unable to be called separately. The name of the destructor member must be equal to the name of its class with tilde `~` prefix and does not require data type.

```c#
class Program{
    
    /* USER-DEFINED CLASS: WITH CONSTRUCTOR & DESTRUCTOR */
    class ClassName{
        string name;
        public int age;
        
        /* CONSTRUCTOR */
        public ClassName(){
        	System.Console.WriteLine("Hello World!");	// Constructor member
        }
        public ClassName(string tmp){					// Constructor member (OVERLOADED)
        	setName(tmp);
        }
        
        /* DESTRUCTOR */
        ~ClassName(){
        	System.Console.WriteLine("Goodbye World!");
        }
        
        public void setName(string str){
            name = str;
        }
        public string getName(string str){
        	return name;
        }
    }
    
    static void Main(){
        ClassName objectName1 = new ClassName("Ko");	// (OVERLOADED) Constructor init.
        objectName1.ID = 1995;
        
        System.Console.WriteLine(objectName1.ID);
        System.Console.WriteLine(objectName1.getName());
    }
}
```

```
1995
Ko
Goodbye World!
```

Only one destructor is allowed per class and cannot take any parameter. However, destructor is not a mandatory and can be added as developer pleases.

## **Properties**

Properties are the public or protected field member but with code block, which allows reading, writing, and doing simple computation of a private field member outside the class. While it looks similar to methods, but properties do not have a pair of parenthesis.

While the public method such as `getName()` and `setName()` on the example above can still be used, but is not advised as the code gets longer and more complex. To avoid such annoyance, property introduces two accessors.

* `get` accessor: returns the private field member to be able to use outside the class.
* `set` accessor: for initializing private field member, possibly with logical conditioning.

The following is the difference between implementation of property and non-property style of code.

```c#
ClassName objectName1 = new ClassName();

/* NON-PROPERTY STYLE */
objectName1.setName("Ko");
System.Console.WriteLine(objectName1.getName());

/* PROPERTY STYLE */
objectName1.Name = "Ko";
System.Console.WriteLine(objectName1.Name);
```

The property syntax itself explains it cannot pass more than a single data as an argument. While there exists an argument means there is also a (auto-defined) parameter that should accept the passed argument, pre-declared as `value` keyword.

The following example shows how to implement the property in the class.

```c#
class Program{
    
    /* USER-DEFINED CLASS: WIHTOUT CONSTRUCTOR & DESTRUCTOR */
    class ClassName{
        public int age;

        /* PROPERTY */
        string name;
        public string Name{
            get{return name;}
            set{if (value != "") name = value;}
        }
    }
    
    static void Main(){
        ClassName objectName1 = new ClassName();
        objectName1.ID = 1995;
        objectName1.Name = "Ko";
        
        System.Console.WriteLine(objectName1.ID);
        System.Console.WriteLine(objectName1.Name);
    }
}
```

```
1995
Ko
```

### Auto-Implemented Property

There are brief version of code style for such a simple set and get access that does not need any conditioning. In such cases, `/* PROPERTY */` section above can be changed as follows, called "auto-implemented

```c#
/* PROPERTY */
public string Name{get; set;}
/* EQUIVALENT
string name;
public string Name{
	get{return name;}
	set{name = value;}
}
*/
```

This way, there is no need to define additional private field member just to store the data. However, this is only possible when there is no custom logic condition needed to apply on either get and set accessor.

## **Indexer**

Indexer is similar to properties that sets and gets private member of the class using public member, but the private member is now in a format of array that can store multiple data. Storing multiple objects is done by using array; in other word, indexer is an array of objects.

```c#
class ClassName{
	/* ARRAY OF STRING FOR INDEXING STRING OBJECTS. */
	private string[] name = new string[10];
    
    /* INDEXER: int index REPRESENTS THE INDEX OF THE INDEXER FOR CURRENT INSTANCE. */
    public string this[int index]{
    	get{return names[index];}
        set{names[index] = value;}
    }
    
    static void Main(){
    	/* CREATE AN INSTANCE objectName FROM ClassName CLASS. */
        ClassName objectName = new ClassName();
        
        /* INITIALIZING INDEXER: FROM 0~9 INDEX. */
        objectName[0] = "Hello";
        objectName[2] = "World!";
        // objectName[10] = "Goodbye"
        // >>> System.IndexOutOfRangeException: Index was outside the bounds of the array.
        
        System.Console.WriteLine(objectName[0]);
        System.Console.WriteLine(objectName[1]);
        System.Console.WriteLine(objectName[2]);
    }
}
```

```
Hello

World!
```

The blueprint syntax `this[int index]` corresponds to `objectName[0]` and others. Because there is no code which specify that `index` should be in order, setting indexer can be done on any elements from the range between 0~9 (as long as it's within the range).

## **Inheritance** 

Inheritance is a concept where, in mathematical approach, can be deemed as a smaller set included in a greater set.
$$
\mathrm{Derived \ Class} \sub \mathrm{Base \ Class}
$$
This idea of concept is great for management of the class and object when it comes to object-oriented programming style. Below shows the example how inheritance works in code.

```c#
class Program{
	
    /* BASE CLASS */
    class BaseClass{
        // BASE CONSTRUCTOR & DESTRUCTOR: NOT INHERITED
        public BaseClass() {
        	System.Console.WriteLine("Base Class: START")
        }
        ~BaseClass(){
        	System.Console.WriteLine("Base Class: END")
        }
        
        public string fieldName {get; set;}
        public void methodName() {
        	System.Console.WriteLine("Goodbye World?");
        }
    }
    
    /* DERIVED CLASS INHERITED FROM BASE CLASS */
    class DerivedClass : BaseClass{
        // DERIVED CONSTRUCTOR: INITIALIZING INHERITED MEMBER "fieldName1"
    	public DerivedClass(){fieldName = "Hello World!";}
    }
    
    static void Main(){
    	DerivedClass objectName = new DerivedClass();
        
        System.Console.WriteLine(objectName.fieldName);	// INHERITED INITIALIZED FIELD
        objectName.methodName;							// INHERITED METHOD
    }
}
```

```
Base Class: START
Hello World!
Goodbye World?
Base Class: END
```

One thing that can be noticed is the constructor and destructor is not inherited to the derived class. Once the instance from derived class is created, the base and derived constructor is executed sequentially (vice versa for the destructor).

Unlike C++ programming language, derived class on C# generally cannot inherit from multiple base classes; a derived class can inherit only from a single base class. For multiple inheritance, refer to *interface*.

### Polymorphism

In dictionary definition, polymorphism means "having many forms". This is simply done by creating a method (does not imply about field member) in the derived classes which shares same method name under the single base class. Basically, polymorphism can simply be shown as follows:

```c#
class Program{
	
    class BaseClass{
    	protected string str{get; set;}
    }
    
    // DERIVED CLASS WITH POLYMORPHISM METHOD 1
    class DerivedClass1 : BaseClass{
        public DerivedClass1(string temp){str = temp;}
    	public void polyMethod(){
            System.Console.WriteLine(str + " from DerivedClass1.");
        }
    }
    
    // DERIVED CLASS WITH POLYMORPHISM METHOD 2
    class DerivedClass2 : BaseClass{
        public DerivedClass2(string temp){str = temp;}
    	public void polyMethod(){
            System.Console.WriteLine(str + " from DerivedClass2.");
        }
    }
    
    static void Main(){
    	DerivedClass1 objectName1 = new DerivedClass1("Hello");
        DerivedClass2 objectName2 = new DerivedClass2("Goodbye");
        
        /* SINGLE METHOD WITH DIFFERENT IMPLEMENTATION BY ITS TYPE. */
        objectName1.polyMethod();
        objectName2.polyMethod();
    }
}
```

```
Hello from DerivedClass1.
Goodbye from DerivedClass2.
```

Polymorphism is widely used to manage the derived classes which shares similar behaviors and characteristics. The means to access them using the same member name across the different type of classes can be a huge benefit.

Another method of managing polymorphism is by using `virtaul` and `override` modifier pair.

Pure virtual function is when only derived classes are using the polymorphism function and not the base class. This method must have derived classes to define the polymorphism function: if not, the error will occur due to compilation problem.

```c#
class Program{
	
    class BaseClass{
    	protected string str{get; set;}
        public virtual void polyMethod(){	// VIRTUAL MEMBER
        	System.Console.WriteLine("[MISSING_POLYMORPHISM!]");
        }
    }
    
    // DERIVED CLASS WITH POLYMORPHISM METHOD 1
    class DerivedClass1 : BaseClass{
        public DerivedClass1(string temp){str = temp;}
    	public override void polyMethod(){
            System.Console.WriteLine(str + " from DerivedClass1.");
        }
    }
    
    // DERIVED CLASS WITH POLYMORPHISM METHOD 2
    class DerivedClass2 : BaseClass{
        public DerivedClass2(string temp){str = temp;}
    	public override void polyMethod(){
            System.Console.WriteLine(str + " from DerivedClass2.");
        }
    }
    
    static void Main(){
        // NOW POSSIBLE TO CREATE FROM BASE CLASS BUT INSTANTIATE FROM DERIVED CLASS.
    	BaseClass objectName1 = new DerivedClass1("Hello");
        BaseClass objectName2 = new DerivedClass2("Goodbye");
        /* EQUIVALENT:
    	DerivedClass1 objectName1 = new DerivedClass1("Hello");
        DerivedClass2 objectName2 = new DerivedClass2("Goodbye");
        */
        
        /* SINGLE METHOD WITH DIFFERENT IMPLEMENTATION BY ITS TYPE. */
        objectName1.polyMethod();
        objectName2.polyMethod();
    }
}
```

```
Hello from DerivedClass1.
Goodbye from DerivedClass2.
```

### Abstract Class

While polymorphism can be done using `virtual` method being overridden by `override` method, it is not mandatory to define the virtual member which eventually will be override on derived class. Abstract class provides `abstract` modifier that can declare definition-less and overridable method.

```c#
class Program{
	
    abstract class BaseClass{
    	protected string str{get; set;}
        public abstract void polyMethod();	// ABSTRACT MEMBER
    }
    
    // DERIVED CLASS WITH POLYMORPHISM METHOD 1
    class DerivedClass1 : BaseClass{
        public DerivedClass1(string temp){str = temp;}
    	public override void polyMethod(){
            System.Console.WriteLine(str + " from DerivedClass1.");
        }
    }
    
    // DERIVED CLASS WITH POLYMORPHISM METHOD 2
    class DerivedClass2 : BaseClass{
        public DerivedClass2(string temp){str = temp;}
    	public override void polyMethod(){
            System.Console.WriteLine(str + " from DerivedClass2.");
        }
    }
    
    static void Main(){
        // NOW POSSIBLE TO CREATE FROM BASE CLASS BUT INSTANTIATE FROM DERIVED CLASS.
    	BaseClass objectName1 = new DerivedClass1("Hello");
        BaseClass objectName2 = new DerivedClass2("Goodbye");
        /* EQUIVALENT:
    	DerivedClass1 objectName1 = new DerivedClass1("Hello");
        DerivedClass2 objectName2 = new DerivedClass2("Goodbye");
        */
        
        /* SINGLE METHOD WITH DIFFERENT IMPLEMENTATION BY ITS TYPE. */
        objectName1.polyMethod();
        objectName2.polyMethod();
    }
}
```

```
Hello from DerivedClass1.
Goodbye from DerivedClass2.
```

Abstract class can have multiple access member and members with different access modifier too. However, abstract class cannot be instantiated, and the non-abstract derived class must include actual implementation of the abstract member from the abstract base class.

Another caution programmer should take is abstract class cannot be accessed and modified by the `sealed` modifier member since these two have opposite characteristic:

* Sealed modifier prevents member or class from being inherited.
* Abstract modifier requires member of class to be inherited.

### Interface

Interface is a pure abstract class where all its member are nonetheless `abstract` and `public` by default, hence there is no need to and is not allowed to specify the modifier. Although interface can have property, method, and others but cannot have field as its member.

Implicitly, the name of the interface starts with capital **I** to imply the class is an interface.

```c#
class Program{
	
    // INTERFACE: A PURE ABSTRACT CLASS
    class interface IBaseClass{
    	string str{get; set;}
        void polyMethod();
    }
    
    // DERIVED CLASS WITH POLYMORPHISM METHOD 1
    class DerivedClass1 : IBaseClass{
        public DerivedClass1(string temp){str = temp;}
    	public void polyMethod(){
            System.Console.WriteLine(str + " from DerivedClass1.");
        }
    }
    
    // DERIVED CLASS WITH POLYMORPHISM METHOD 2
    class DerivedClass2 : IBaseClass{
        public DerivedClass2(string temp){str = temp;}
    	public void polyMethod(){
            System.Console.WriteLine(str + " from DerivedClass2.");
        }
    }
    
    static void Main(){
        // NOW POSSIBLE TO CREATE FROM BASE CLASS BUT INSTANTIATE FROM DERIVED CLASS.
    	IBaseClass objectName1 = new DerivedClass1("Hello");
        IBaseClass objectName2 = new DerivedClass2("Goodbye");
        /* EQUIVALENT:
    	DerivedClass1 objectName1 = new DerivedClass1("Hello");
        DerivedClass2 objectName2 = new DerivedClass2("Goodbye");
        */
        
        /* SINGLE METHOD WITH DIFFERENT IMPLEMENTATION BY ITS TYPE. */
        objectName1.polyMethod();
        objectName2.polyMethod();
    }
}
```

One of the noticeable difference is there is no `override` modifier at presence when implemented (does not use the term "inherited" in case of interface) from the interface, unlike abstract class.

While derived class can only be inherited from a single base class, it can implement from multiple interfaces: its syntax is `class DerivedClass : IBaseClass1, IBaseClass2, IBaseClass3`.

# **C#: USER-DEFINED DATA TYPE**

Frequently used data type such as `int`, `float`, `char` and more are pre-defined data type that is already defined from `iostream.h` header. User-defined is a data type that is defined by the developer personally and implemented in the script.

Class from *C++: Object-Oriented Programming* is a best example of the user-defined data type. There are others such as structure, union, and enumeration. 

## **Structure**

Structure groups different data elements together under a single name of data. It shares similarity with the class, but struct is more of limited version of a class intended for grouping the data.

* Does not support inheritance and virtual.
* Constructor without parameter is not allowed (but possible with parameter).
* The keyword `this` is available.

```c#
class Program{
    /* DECLARATION OF THE STRUCTURE. */
	struct StructName1{
    	public string fieldName1;
        public bool fieldName2;
    }
    
    struct StructName2{
    	public int fieldName1;
        // STRUCT CONSTRUCTOR W/ PARAMETER
        public StructName2(int A, int B){
            this.fieldName1 = A + B;
        }
    }
    
    static void Main(){
        /* INSTANTIATION OF THE STRUCTURE. */
    	StructName1 struct1;
        StructName2 struct2 = new StructName2(2,3);	// ONLY WHEN CONSTRUCTOR IS PRESENTED.
        
        /* INITIALIZATION OF THE STRUCTURE. */
        struct1.fieldName1 = "Hello World!";
        struct1.fieldName2 = true;
        
        System.Console.WriteLine(struct2.fieldName1);
    }
}
```

```
5
```


## **Enumeration**

Enumeration is another user-defined data type that enumerates a set of specified data. Definition of the enumeration in English dictionary is "the action of mentioning a number of things one by one". 

```c#
enum flagName { constant1, constant2, constant3, ... };
```

The variable name of the enumeration is called **flag** and data the flag has is called **constant**.

```c#
class Program{
	
    enum flagName {constant1 = 2, constant2, constant3 = 0, constant4, constant5};
    // >>> constant1 = 2, constant2 = 3, constant3 = 0, constant4 = 1, constant5 = 2;
    
    static void Main(){
        
        // DECLARATION AND INITIALIZATION.
        flagName x = flagName.constant3;
        
    	System.Console.WriteLine(x);
        System.Console.WriteLine((int)x);
    }
}
```

```
constant3
0
```

# **C#: GENERICS**

Generics (aka. template in C++) provides developer a format of code regardless of considering what data type it uses. Hence, generics are used to define multiple number of similar functions and classes in efficient way.

## **Generic Methods**

Suppose there is a code which returns the greater integer from the passed two integer arguments:

```c#
static int methodName(int temp1, float temp2){
	return (temp1 > temp2 ? temp1 : temp2);	// TENARY >> TRUE: temp1; FALSE: temp2
}

static void Main(){
	var x = methodName(2, 3.14);
    System.Console.WriteLine(x);
}
```

```
3
```

The method above is only available for integer value and programmer need to create another one manually with different numeric data type for numbers with decimal point. This is due to the property of method overload.

This can be overcome by implementing generic method which provides template of the method with modifiable data type that can be applied when the method is called. 

```c#
class Program{
	/* GENERIC METHODS: PARAMETER TYPE "T" AND "U" & RETURN TYPE "T" */
    static T methodName<T, U>(T temp1, U temp2){
    	return (temp1 > temp2 ? temp1 : temp2);
    }
    
    static void Main(){
        var x = methodName<int, float>(2, 3.14);		// GENERIC: T = int, U = float
        var y = methodName<float, float>(3.14, 2.72);	// GENERIC: T = float, U = float
        
        System.Console.WriteLine(x);
        System.Console.WriteLine(y);        
    }
}
```

```
3
3.14
```

## **Generic Classes**

Generic can also be implemented to the classes and its syntax and is applied exactly the same as the generic method does:

```c#
class Program{

    /* GENERIC CLASS: PARAMETER TYPE "T". */
    class ClassName<T>{
        public T data {get; set;}	// PROPERTY
        public ClassName(T temp){	// CONSTRUCTOR
        	data = temp;
        }
    	public T methodName(){		// METHOD
        	return data;
        }
    }
	
    static void Main(){
        /* INSTANTIATION OF GENERIC CLASS. */
    	ClassName<int> objectName1 = new ClassName<int>(2);
        ClassName<float> objectName2 = new ClassName<float>(3.14);
        
        System.Console.WriteLine(objectName1.data);
        System.Console.WriteLine(objectName2.data);
    }
}
```

```
2
3.14
```

# **C#: EXCEPTION**

A problem encountered during a program execution is called an exception.

## **`try`/`catch` Block**

`try`/`catch` statement is used to handle exceptions, and to call certain statements when an exception occurred. This can prevent program to shutdown upon encountering exception and provide alternative code to execute.

| KEYWORD   | USAGE          | DESCRIPTION                                          |
| --------- | -------------- | ---------------------------------------------------- |
| `try`     | Testing ground | A block of code to be checked for exception.         |
| `catch()` | Upon exception | A code to be executed when certain exception occurs. |

Multiple `catch()` blocks can be placed and specified with which to execute by specifying the exception in its parameter. The following is the list of exceptions available in C# programming:

* `Exception`; handles any exception.
* `DivideByZeroException`
* `FileNotFoundException`
* `FormatException`
* `IndexOutOfRangeException`
* `InvalidOperationException`
* `OutOfMemoryException`

```c#
class Program{
	
    static void Main(){
        // TRY EXECUTE THE CODE:
        try{
        	statements;
        }
        // EXECUTE UPON ENCOUNTERING DivideByZeroException IN TRY BLOCK:
        catch(DivideByZeroException err){
        	System.Console.WriteLine("Cannot divide by zero.");
        }
        // EXECUTE UPON ENCOUNTERING ANY EXCEPTION IN TRY BLOCK:
        catch(Exception err){
        	System.Console.WriteLine(err.Message);
        }
    }
}
```

## **`finaly` Block**

An optional block of code executed after the `catch()` block execution no matter what exception has occurred, and even when there’s no error.

```c#
class Program{
	
    static void Main(){
        // TRY EXECUTE THE CODE:
        try{
        	statements;
        }
        // EXECUTE UPON ENCOUNTERING DivideByZeroException IN TRY BLOCK:
        catch(DivideByZeroException err){
        	System.Console.WriteLine("Cannot divide by zero.");
        }
        // EXECUTE UPON ENCOUNTERING ANY EXCEPTION IN TRY BLOCK:
        catch(Exception err){
        	System.Console.WriteLine(err.Message);
        }
        finally{
        	System.Console.WriteLine("END OF EXCEPTION HANDLING!");
        }
    }
}
```

# **C#: FILE MANAGEMENT**

Unlike C++ programming language, C# does not have to specify opening and closing of the file. This makes managing the file much easier since programmer just have to write the code that needs working by inserting inside the API alone.

Therefore, though there are more methods for file management, the chapter will only introduce how to read and write the file, and the rest will be mentioned briefly.

| NAME      | METHOD   | DESCRIPTION                                          |
| --------- | -------------- | ---------------------------------------------------- |
| Append  | `AppendAllText()` | Append all of its content in string data at the end of the file. |
| Create | `Create()` | Create the file in specified location.                       |
| Delete | `Delete()` | Delete the specified file. |
| Exists | `Exists()` | Check whether the specified file exists. |
| Copy | `Copy()` | Copy the file to a new location. |
| Move | `Move()` | Move the file to a new location. |

## Reading Files

Below is one example of reading, in other word, extracting the whole file content to a variable. The core method is `System.IO.File.ReadAllText()`:

```c#
class Program{
	static void Main(){
        // READING FILE FROM "./src/Sample.txt"
        string output = System.IO.File.ReadAllText("./src/Sample.txt");
        System.Console.WriteLine(output);
    }
}
```

If such file does not exist, the method creates the file; when there is a file, it is overwritten.

## Writing Files

Writing the file is also possible by using `System.IO.File.WriteAllText()` method:

```c#
class Program{
	static void Main(){
        // WRITING FILE ON "./src/Sample/txt"
    	string input = "Hello World!";
        System.IO.File.WriteAllText("./src/Sample.txt", input);
    }
}
```

# **C#: WPF**

Windows Presentation Foundation (WPF) is a Microsoft's XAML(extensible application markup language) GUI framework applicable .NET framework.

# **C#: UWP**

Universal Windows Platform (UWP)