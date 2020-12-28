---
name: Python
lang: en
layout: docs
author: GKO95
category: Programming
title: "Programming | Python"
logo: "/assets/img/res/logo-python.png"
order: 0x00
---
# **PYTHON: INTRO**
Python is a high-level programming language with applications in numerous areas, including web programming, scientific computing, and artificial intelligence. Python is simple, easy to learn, and has various development software (such as a library, framework) available thanks to the contribution from vast communities. For the beginner, Python is an excellent language to learn how to program.

## Interpreted Language
There are two different categories of program languages based on its execution: compiled language and interpreted language.

Source code written in English needs to be translated to binary computer language for the computer to understand. The compiler is responsible for the translation, and its best examples are C/C++ language. On the other hand, the interpreter executes code without translation but has a drawback on a slower speed.

Python is the interpreted language, and the code runs equivalently despite running on a different system as long as it has the interpreter (aka. cross-platform).

### CPython Interpreter
The first interpreter for Python was developed using C programming language, called CPython. CPython is the most widely used Python interpreter, and there are others developed using different languages such as Jython (Java implemented), IronPython (.NET implemented), and PyPy (pure Python implemented).

Although introduced as the interpreted language, CPython technically uses both compiler and interpreter. First, the compiler translates Python code to bytecode, then the interpreter executes the bytecode. This bytecode is the one that guarantees Python's cross-platform property.

# **PYTHON: INSTALL**
Two programs are required to develop using Python language: the interpreter and integrated development environment(IDE). Linux and macOS have Python 2 and 3 installed on the system by default but needs manual installation for different versions. This chapter teaches on installing and applying the Python interpreter to IDE, which helps understand how interpreted language works.

## Select Interpreter
Python interpreter, the essential program to execute Python, can be downloaded from the official website [here](https://www.python.org/downloads/). There are various versions of the Python interpreter numbered `3.x.y`, where `x` and `y` are minor and patch number. Interpreter functionality differs slightly by the minor version, and a higher patch number means the interpreter version `3.x` is more stable. Therefore, only check the version number `3.x` when selecting an interpreter.

> Python 3.7.4 and 3.6.4 are interpreters used to execute Python 3. If there are changes in functionalities between versions 3.6 and 3.7, two interpreters may run the same Python code differently. On the other hand, Python 3.7.1 and 3.7.4 are considered the same interpreter, but the latter version is more stable and recommended.

Developers should be cautious when selecting an interpreter as the version impacts synchronization with other libraries and software. However, the latest version is good enough when it comes to learning the Python programming language. Beware, the interpreter doesn't have an update feature; you need to install a different version to use another interpreter.

> Python 2 is a Python programming language that has a version number `2.x.y`. Some Python lectures use Python 2, but its service has ended on January 1st, 2020. Additionally, there is Python 1 which has its latest version released in 2000, currently improper to use due to compatibility and efficiency matter.
>
> Many Python-related programs are developed based on version 3. Therefore, Python 3 is recommended than using Python 2.

## Download Interpreter
Install the Python interpreter after selecting the version. There are several options for downloading interpreters.

![Figure 1. Download list of interpreter installers in Python 3 official website.](/assets/img/docs/programming/Python/python_interpreter_download.png)

The website provides 64-bit and 32-bit interpreter for Windows OS (ex. Windows 10, Windows 8.1, Windows 7, etc.), namely `x86-64` and `x86`. To find out the operating system and architecture of the computer, go to the following path on File Explorer.

```
Control Panel\System and Security\System
```

Download `Windows x86` interpreter if the architecture is 32-bit, and `Windows x86-64` interpreter if the architecture is 64-bit.

> A 64-bit architecture computer can also install a 32-bit interpreter as compatibility is guaranteed. Generally, a 32-bit interpreter on 64-bit architecture is used to develop programs for 32-bit architecture or synchronize with development software limited to 32-bit.

Following are three different installation methods available:

1. Embeddable zip file: a compressed zip file of components necessary for the Python interpreter.
2. Executable installer: executable Python interpreter installer without a need for an online connection.
3. Web-based installer: executable Python interpreter installer that requires an online connection. 

In other words, the second and third option is the same, but whether to download components beforehand or while installing. A third option is available if you have a stable internet connection but generally select the second option.

## Install Interpreter
Executing the downloaded interpreter installer shows the following window:

![Figure 2. Startup of Python 3 installer program](/assets/img/docs/programming/Python/python_interpreter_install.png)

"Add Python 3.7 to PATH" checkbox decides whether to setup environment variables, which allows Python execution on command prompt. The following figure is an execution of Python on the command prompt.

![Figure 3. Python 3 execution on Windows command prompt](/assets/img/docs/programming/Python/python_interpreter_cmd.png)

Environment variable setting is not necessary when Python is the only software to be used, but it is essential if to use it with external software or libraries. Therefore, this document strongly recommends enabling the checkbox. Even it the Python interpreter was installed without an environment variable setting, it can manually setup later.

Clicking the "Install Now" button will begin the installation, and can run Python when the process is over.

### Custom Installation
Developers who wish to install Python in a different directory or only want to install the interpreter alone should click the "Customize installation" button for more installation options. The "Optional Features" page selects whether to install additional software that doesn't affect the interpreter's behavior.

![Figure 4. Python 3 installer optional features](/assets/img/docs/programming/Python/python_interpreter_optional.png)

| Options             | Description                                         |
|---------------------|-----------------------------------------------------|
| `Documentation`     | -                                                   |
| [`pip`](#pip)       | Python package management software                  |
| `tcl/tk and IDLE`   | Application GUI toolkit and code editor for Python  |
| `Python test suite` | Framework for testing Python application behavior   |
| `py launcher`       | Python interpreter management program               |

The next selection page is the "Advanced Options," which can affect how the interpreter behaves.

![Figure 5. Python 3 installer advanced options](/assets/img/docs/programming/Python/python_interpreter_advanced.png)

It is worth paying attention to the `Download debug binaries (requires VS 2015 or later)` checkbox, as this option may require when creating the [OpenCV](/docs/library/en/LIBRARY_OpenCV/) library. However, people who are learning Python as their first programming language may ignore this option for now.

## Integrated Development Environment
An integrated development environment (IDE) is a software development program that provides at least a source code editor, program build tools, and debugger. Python interpreter is a software for running a Python-based program, but it is not a source code editor. Therefore, IDE is essential to edit a Python source code, run the program, and examine the execution when encountering problems.

### Visual Studio Code
[Visual Studio Code](https://code.visualstudio.com/download) (VS Code) is a free source code editor developed by Microsoft. Although technically not an IDE, it can still play a role as an IDE. All that requires are an extension tool that can load the interpreter to VS Code.

![Figure 6. Install Python extension on VS Code](/assets/img/docs/programming/Python/python_vscode_extension.png)

The Python extension allows VS Code to use a Python interpreter; meaning, it can be used to build and debug like an IDE. To install the extension, press the `F1` key and select `Extensions: Install Extensions`. Search `Python` and install the extension by clicking the green `Install` button shown as above.

After installation, select and load a Python interpreter to the VS Code. Again, press the `F1` key and enter `Python: Select Interpreter` that automatically queries installed Python interpreters. Select the interpreter, and everything is all set.

There are two different methods when running Python on VS Code: Run with debugging (`F5`) and run without debugging (`Ctrl+F5`). Use the debugging mode when the program encounters an error to identify the cause, but run without debugging when executing in general.

# **PYTHON: BASIC**
Every programming language has its own rules to be observed and fundamental data that works as a basis of the program. Failed to observe this causes either error or unexpected results. As for the beginning of the practical coding, this chapter will introduce basic knowledge of Python language coding.

## Comment
Comment in a programming language is not executed and is commonly used to write down information related to the programming on source codes. There exist two comments in Python: line comment and block comment.

* **Line comment**
  : a comment worth a single line of code, and is declared by `#` (octothorpe).
* **Block comment** (aka. **docstrings**)
  : a comment with multiple lines of code by using three pairs of double quote `""" """` or single quote `''' '''`. Docstrings can even be used to write multiple lines of sentences and view them on runtime.

```python
"""
BLOCK COMMENT:
multiple lines of comment can be placed here and can be viewed even on runtime.
"""
# LINE COMMENT: for a single line of code.
```

## Input & Output
Python has a single input and output function for a text-based terminal:

* **Input function `input()`**: the function shows the text inside the parenthesis on a terminal and accepts text data written when pressed Enter/Return key.
* **Output function `print()`**: the function shows the text inside the parenthesis on a terminal.

```python
variable = input("Write: ")
print("Read:", variable)
# EQUIVALENT: print("Read:", input("Write: "))
```

```
Write: Hello World!
Read: Hello World!
```

To print a mixture of more than a single data type in a `print()` function, there are two possible methods with slightly different results.

1. Using a comma `,` can list the data in sequence but always places blank space on each comma.

   ```python
   A = 10.0
   B = "Python3"
   
   # A MIXTURE OF STRING AND INT IS LISTED USING COMMA ",".
   print("A is", A , ", \nand B is", B, ".")
   ```

   ```
   A is 10.0 ,
   and B is Python3 .
   ```

2. Concatenation of string using `+` and does not create blank space. However, a data type that is not a string needs to be converted to text data to use concatenation.

   ```python
   A = 10.0
   B = "Python3"
   
   # A MIXTURE OF STRING AND INT IS CONCATENATED USING "+" AFTER STRING CONVERSION.
   print("A is", str(A) + ", \nand B is", B + ".")
   ```

   ```
   A is 10.0,
   and B is Python3.
   ```

## Identifier
An identifier is a name used to identify data in programming. In other words, it is just a user-defined name. Python has the following rules when naming an identifier:

* Only alphabet, number, and underscore `_` is allowed.
* First letter cannot start with a number.
* Blank space is prohibited.

## Variable
Variable is a container for data that can be assigned using the assignment operator `=`. Variable also has a name, and the example below has a variable that has identifier `variable` and value `1` assigned.

```python
variable = 1
```

Programming languages, in general, locates assigned data (ex. variable) on the left and assignee (ex. a constant value or another variable) on the right. Otherwise will cause an error or function improperly.

A variable in Python can have any data type (ex. number, text, and more) assigned wherever and whenever.

```python
variable = 1
variable = "Hello World!"
print(variable)
```

### Initialization
Initialization is the first assignment to a variable where it commonly occurs in the *definition* process.

```python
# VARIABLE INITIALIZATION
variable = 1
```

### Local & Global Variable
There are two types of variable in Python:

* **Local variable** is a variable defined within the code block, such as functions and classes. However, this does not apply to conditional, loop, `with` statements, and more. A local variable releases data when escapes from the code block and unavailable to use outside. It may have the same name as other variables defined outside the code block.

* **Global variable** is a variable that does not belong to any code blocks within the script. A global variable can be used with local variables inside other code blocks by placing the `global` keyword.

### Constant Variable
A constant variable is a variable that cannot change its value after initialization. However, Python cannot declare constant due to the absence of *declaration*. Python developers should be careful not to mess up the what-is-used-as-constant variable. The conventional name for a Python's constant is using all UPPERCASE.

```python
CONSTANT_VARIABLE = "Hello World!"
```

### `del` Keyword
The `del` keyword is used to delete a variable. Deleted variable can be reassigned later.

```python
# DEFINITION OF A VARIABLE
variable = "Python"
print(variable)

# DELETE VARIABLE "variable"
del variable
print(variable)
```

```
Python
NameError: name 'variable' is not defined
```

## Data Type
There are three categories of data in Python: numeric, boolean, and string data type. Meanwhile, the following three pieces of code can process other external data, called *operation*.

* **Operator**
  : a code that can manipulate the value of operands, such as arithmetic operators. It operates by placing it before, after, or between the operands.
* **Function**
  : a reusable piece of code that is called by name to operates. A function can be distinguished from an operator by parenthesis `()` at the suffix of the function's name; `function()`.
* **Method**
  : an object-exclusive function. Methods also have parenthesis `()` at the suffix of its name but are always bounded to an object; `object.method()`.

Though the article has not yet introduced function and method, understanding the difference between these three will help avoid misunderstanding on the concept of programming language.

### Numeric Data Type
A numeric data type is a data that stores a number. Following is the list of numeric data types:

| KEYWORD   | DATA TYPE             | DESCRIPTION                                                                        |
|-----------|-----------------------|------------------------------------------------------------------------------------|
| `int`     | Integer               | 32-bits precision integer number.<br />Size: unlimited (max. 400 bytes)            |
| `float`   | Floating point number | Real number with decimal points.<br />Size: unlimited (max. 400 bytes)             |
| `complex` | Complex number        | Contains floating real and imaginary number.<br />Size: unlimited (max. 400 bytes) |

The byte size of a numeric data type is massive compared to other languages, which indicates a maximum byte size numeric data type can have. Such a byte size guarantees flexibility to Python variable that doesn't require data type specification when assigning value.

Data type `float` is one of the commonly used numeric data types as it's the smallest data type that can express the fraction besides `complex`. The `float` data type has the following properties:

* Extra zeros (besides right behind the decimal point) on the decimal part are ignored.
* Calculation returns `float` data type automatically when...
  * Arithmetic operation involving at least one `float`.
  * Division of `int`.

```python
print(9.8765000)
print(4 ** 2.0)
print(4 + 1.0)
```

```
9.8765
16.0
5.0
```

The arithmetic operation for numeric data types is as follows:

| NAME                           | OPERATOR | DESCRIPTION                                                                                                                       |
|--------------------------------|:--------:|-----------------------------------------------------------------------------------------------------------------------------------|
| Addition                       | `+`      | -                                                                                                                                 |
| Subtraction                    | `-`      | Python doesn't have a subtraction. Negative sign substitutes subtraction, as adding negative value is equal to subtracting value. |
| Multiplication                 | `*`      | -                                                                                                                                 |
| Exponential                    | `**`     | -                                                                                                                                 |
| Division                       | `/`      | When divided, the value implicitly (or automatically) converts to `float`.                                                        |
| Quotient (aka. floor division) | `//`     | Returns a quotient of division only, without a remainder.                                                                         |
| Remainder                      | `%`      | Returns a remainder of the division.                                                                                              |

For easier readability, you may place blank spaces between numbers and operators which does not affect its output.

Additional operations are available from built-in functions and methods exclusive to a numeric data type. Most of the operations below require an iterable object called *list* which will be introduced later.

Additional operations are available from built-in functions and methods exclusive to a numeric data type. Most of the operations below require an iterable object called *list*, introduced in a later chapter.

| FUNCTION  | EXAMPLE             | DESCRIPTION                                                            |
|-----------|---------------------|------------------------------------------------------------------------|
| `abs()`   | `abs(-21)`          | Find out absolute value of the number.                                 |
| `round()` | `round(164.2597,2)` | Rounds up the number to one's digit by default, or by a decimal place. |
| `max()`   | `max([0,1,2,3,4])`  | Find the maximum number inside.                                        |
| `sum()`   | `sum([0,1,2,3,4])`  | Sum all the numbers in the list.                                       |

```python
# EXAMPLE OF "round()" FUNCTION
print(round(164.259763145))
print(round(164.259763145,2))
```

```
164
164.26
```

The assignment operator is a combination of an arithmetic and an assignment symbol `=`, making numerical calculation code written more concisely.

| OPERATOR | EXAMPLE  | EQUIVALENT                                                |
|:--------:|----------|-----------------------------------------------------------|
| `=`      | `x = y`  | `x = y`; assigns a value of variable `y` to variable `x`. |
| `+=`     | `x += y` | `x = x + y`                                               |
| `-=`     | `x -= y` | `x = x - y`                                               |
| `*=`     | `x *= y` | `x = x * y`                                               |
| `/=`     | `x /= y` | `x = x / y`                                               |
| `%=`     | `x %= y` | `x = x % y`                                               |

Increment `++` and decrement `--` do not exist in Python programming language.

### Boolean Data Type
A boolean data type is useful for a code that requires logical condition whether the statement is true or false.

| VALUE          | NAME            | DESCRIPTION                   |
|----------------|-----------------|-------------------------------|
| `True` or `1`  | Logically true  | Returned when logic is true.  |
| `False` or `0` | Logically false | Returned when logic is false. |

An integer value can substitute boolean logic values; any non-zero numbers represent `True`, while `False` is only expressed by zero.

A comparison operator is used to compare the relation of two values, returning corresponding boolean data type depending on whether the condition holds or not. 

| OPERATOR | DESCRIPTION              |
|----------|--------------------------|
| `<`      | Lesser than              |
| `<=`     | Lesser than or equal to  |
| `>`      | Greater than             |
| `>=`     | Greater than or equal to |
| `==`     | Equal to                 |
| `!=`     | Not equal to             |

Meanwhile, the boolean data type can be added, multiplied, and complemented as follows:

| OPERATOR | NAME           | DESCRIPTION                                             |
|:--------:|----------------|---------------------------------------------------------|
| `is`     | Equivalence    | Boolean evaluator between two data: equivalent to `==`. |
| `and`    | Multiplication | True when all the arguments are True, else False.       |
| `or`     | Addition       | True when at least one argument is True, else False.    |
| `not`    | Complement     | Changes True to False and vice versa.                    |

### String Data Type
A string data type is text-based data that is distinguished by a pair of single quotation marks `''` or double quotation marks `""`. Variable or data that is a string data type is called *string object*. To place a quotation mark within a string object, insert a backslash `\` before the quotation mark to prevent the premature ending of the string.

```python
# COMPARISON BETWEEN IMPROPER AND PROPER WAY OF TYPING STRINGS.
print('Where's my "Cat in the Hat" book?')
print('Where\'s my "Cat in the Hat" book?')
```

```
Where
Where's my "Cat in the Hat" book?
```

A three pair of quotation marks, either single or double, create a multi-line string object, which allows changing line just by pressing Enter/Return key. Otherwise, the developer needs to insert the `\n` escape character manually.

```python
# PRINTING AND WRITING MULTIPLE LINES WITH MULTI-LINE STRING OBJECT.
print("Hello\nWorld!")
print("""Hello
World!""")
```

```
Hello
World!   
Hello
World!
```

String objects in Python can be added and multiplied like a numerical data type:

| OPERATOR | NAME           | DESCRIPTION                                                                 |
|:--------:|----------------|-----------------------------------------------------------------------------|
| `+`      | Concatenation  | Merge two strings to a single string object (type of quote doesn't matter). |
| `*`      | Multiplication | Multiply a string by the number of integer (float does not work).           |

```python
print("Pyt" + 'hon')
print(4 * "2")
```

```
Python
2222
```

A string is an "object;" an independent individual of variable and function merged as a single data. Therefore, the string data type has its unique operations that don't exist in the previous two data types:

| METHOD         | EXAMPLE                  | DESCRIPTION                                                                                                                                                                                                               |
|----------------|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `format()`     | `str.format(data)`       | Insert string or non-string `data` type to a designated placeholder via location or name specified in `{}`.         |
| `join()`       | `str.join(str_lst)`      | Merge a list of string objects `str_lst` with `str` text in-between.                   |
| `split()`      | `str.split()`            | Separates a string `str` based on blank spaces if there's no argument in the method.<br />*[OPTIONAL: In case there's an argument `str1`, the string object `str` is separated based on `str1`.]* |
| `replace()`    | `str.replace(str1,str2)` | Replace `str1` to `str2` within the string object `str`.                                                 |
| `startswith()` | `str.startswith()`       | Check the start of the `str` for equivalence.                                                     |
| `endswith()`   | `str.endswith()`         | Check the end of the `str` for equivalence.                                              |
| `upper()`      | `str.upper()`            | Change every text in `str` to uppercase letter.                                                                   |
| `lower()`      | `str.lower()`            | Change every text in `str` to lowercase letter.                           |

```python
# STRING FORMAT: [1] BY-LOCATION & [2] BY-NAME ASSIGNMENT
print("{2} {0} {1}".format(value1, value3, value2))
print("{x} {y} {z}".format(x = value1, y = value3, z = value2))

# STRING CONCATENATION AND SPLIT
print(" ! ".join([str0, str1, str2]))
print("str0 ! str1 ! str2".split(" ! "))

# CHECK-UP FOR THE STRING
print("This is a sentence.".startswith("this"))
print("This is a sentence.".endswith("sentence."))

# ALPHABET UPPER/LOWERCASE
print("This is a SENTENCE.".upper())
print("This is a SENTENCE.".lower())
```

```
value2 value1 value3
value1 value3 value2

str0 ! str1 ! str2
[str0, str1, str2]

False       # False as the first letter "t" is not capitalized.
True        # True as it also includes a period at the end.

THIS IS A SENTENCE.
this is a sentence.
```

### Type Conversion
It is possible to convert a data type to another different data type. The following three are the conversion commonly used when developing a Python program:

| FUNCTION  | NAME               | DESCRIPTION                                                                                                        |
|-----------|--------------------|--------------------------------------------------------------------------------------------------------------------|
| `int()`   | Convert to integer | `float`: Fraction is eliminated, returning integer only.<br />`string`: Only numerical characters are convertible. |
| `float()` | Convert to float   | `int`: No restriction.<br />`string`: Only numerical characters are convertible.                                   |
| `str()`   | Convert to string  | `int`: No restriction.<br />`float`: No restriction.                                                               |

## Escape Character
Escape character `\` is used to escape from a sequence of characters and execute certain operations within text-based data. In the introduction on string data type, `\n` is used to change to a new line.

```python
print("Hello\nWorld!")
```
```
Hello
World!
```

| New line | Horizontal tab | Backslash | Backspace | Single quote | Double quote |
|:--------:|:--------------:|:---------:|:---------:|:------------:|:------------:|
| `\n`     | `\t`           | `\\`      | `\b`      | `\'`         | `\"`         |

Not only does it escape from string to perform operations, but the escape character can make a single long line of code into short consecutive multi-line code.

## `None` Keyword
Data with no value regardless of a data type. Although `None` can substitute `False` boolean logic value, `None` and `False` are conceptually different existence.

```python
# CONDITIONAL CHECK: can None be used as False in boolean?
if not(None and True):
    print(None)
```

```
None                    # This proves that None can be used as False in boolean.
```

# **PYTHON: CONDITIONAL AND LOOP**
Conditional and iteration (or loop) statements are two of the most commonly used in programming. The "statement" in programming represents a code that executes or processes data. This chapter introduces a list of conditional and iteration statements in Python programming.

## Indentation
An indentation delimits (mark the limits or boundaries) code block that belongs to certain statements such as conditional and loop statements. Indentations are inserted on the section of code after the colon `:`.

Beware, as different indentation placement can change the script entirely.

```python
# IDENTATION ON THE SECOND "print()". 
if False:
    print("Condition is False.") 
    print("End of IF statement.")
print("The End.") 

# NO INDENTATION ON THE SECOND "print()".
if False:
    print("Condition is False.") 
print("End of IF statement.")
print("The End.") 
```

```
The End.

End of IF statement.
The End.
```

## `if` Statement
Conditional `if` statement runs code if the condition holds. When the condition evaluates `True`, the indented codes are carried out but otherwise ignored.

```python
if condition:
    statements
```

### `else` Statement
A conditional `else` statement cannot be used alone and must be followed by an `if` condition. The statement contains code that executes when evaluated `False`.

```python
if condition:
    True_statement
else:
    False_statement
```

Chaining `if` and `else` statement is possible in a series of conditioning as follows:

```python
if condition1: 
    statements
else:
    if condition2:
        statements
    else:
        statements
```

### `elif` Statement
A conditional `elif` statement is a combination of `else` and `if` conditions; when the first condition evaluates `false`, the `elif` statement provides a new condition different from the previous one. 

```python
if condition1: 
    statements
elif condition2:
    statements
else:
    statements
```

However, this statement is different from the chain of `else`-`if` conditional statement as that is a combination of two sets of conditions. On the other hand, `elif` conditional statement is a continuation of an existing evaluation instead of starting new conditioning.

### Ternary Operator
A conditional statement can be simplified using the ternary operator shown below:

```python
True_return if condition else False_return
```

The vocabulary *ternary* indicates the statement takes three arguments. The ternary operator should not be overused as it reduces readability but useful on variable assignment.

## `while` Loop
A `while` loop statement repeatedly executes statements inside (aka. iterate) as long as the condition holds. The loop ends once the condition evaluates `False`.

```python
while condition:
    statements
```

The `else` statement may follow after a `while` loop statement, which executes when the loop statement has successfully finished its iteration (by conditional mean).

```python
# FINISHED LOOP: completed iteration
while index < 10:
    index += 1
    if index == 100:
        break
    else:
        print("First...successful!")

# FINISHED LOOP: forece-escaped via break statement
while index < 10:
    index += 1
    if index == 5:
        break
    else:
        print("Second...successful!")
```

```
First...successful!
```

### `break` Statement
The `break` statement is to end a loop prematurely. When encountered in the loop, the `break` statement escapes from the current loop but does not escape from the nesting loop.

```python 
while single_loop_condition:
    statement1
    statement2
    break
    statements3
```

```
statement1
statement2
```

### `continue` Statement
The `continue` statement skips the rest of the code below in the loop and jumps back to the conditioning part. It maintains the iteration rather than escaping from it like the `break` statement.

```python 
while i < 5:
    statement1
    statement2
    continue
    statement3
```

```
statement1
statement2
statement1
statement2
statement1
statement2
...
```

## `for` Loop
The `for` loop statement repeatedly executes statements inside (aka. iterate) as long as it is in the valid range. The loop ends once all the values in the range are enumerated.

```python
for index in iterable:
    statements
```

Here, a local variable `index` obtains value from an `iterable` object and executes statements one-by-one until all are enumerated. The data that goes to the `iterable` are as follows:

1. range object: contains sequence of numbers with pattern (refer to *PYTHON: ITERABLE OBJECT § Range*)
2. list object: contains list of data regardless of data type and pattern (refer to *PYTHON: ITERABLE OBJECT § List*).
3. string object: returns character comprising the string.

```python
for var in range(3):
    print("Hello World" , var)
```

```
Hello World 0
Hello World 1
Hello World 2
```

Just like the `while` loop statement, `break` and `continue` can be used in the `for` loop as well since it is the same loop-iterating statement.

The `else` statement may follow after a `for` loop statement, which executes when the loop statement has successfully finished its iteration (by running out of range).

```python
# FINISHED LOOP: completed iteration
for index in range(10):
    if index == 100:
        break
    else:
        print("First...successful!")

# FINISHED LOOP: forece-escaped via break statement
while index in range(10):
    if index == 5:
        break
    else:
        print("Second...successful!")
```

```
First...successful!
```

## `pass` Statement
The `pass` statement is a null operation that does nothing when executed. It prevents an exception occurred when running an empty code.

# **PYTHON: ITERABLE OBJECT**
Not just its simplicity that makes Python language useful, its iterable object is powerful and flexible than any other programming language can provide. Python has four iterable objects that have slightly different properties.

## Iterable Object
An iterable object is used to store the collection of data and is an object that has an `__iter__` method (Python3) that returns the iterator object. An iterator is an object which automatically calls the next element of data, thus iterating every data within the iterable object in order.

Iterable objects can access and modify stored data using a bracket `[]`. The string object introduced in *PYTHON: BASIC § String Data Type* is also an iterable object.

```python
variable = "Hello World!" 
print(variable[1])
```

```
e
```

### Iterable Slicing
Slicing is one of the powerful features Python has an advantage over other programming languages in handling a group of data such as iterable objects. Slicing iterable can only extract the desired portion of the original.

| SYNTAX    | EXAMPLE                            |
|:---------:|------------------------------------|
| `[ : : ]` | `iterable[start : end : interval]` |

Slicing starts from `start` (inclusive) until `end` (exclusive) with interval of `interval`. All these arguments are not mandatory when slicing an iterable.

```python
variable = "Hello World!"
print(variable[2:8])      # >> OUTPUT: "llo Wo"

# SLICE FROM/UNTIL THE END OF THE LIST
print(variable[2: ])      # >> OUTPUT: "llo World!"
print(variable[ :8])      # >> OUTPUT: "Hello Wo"

# SLICE WITH SKIPPING SOME ELEMENTS WITH INTERVAL
print(variable[ : :2])    # >> OUTPUT: "HloWrd"
print(vairalbe[2:8:2])    # >> OUTPUT: "oW"

# REVERSE INTERVAL
print(variable[8:2:-1])   # >> OUTPUT: "roW ol"
```

## Range
Range iterable object stores a number in a sequenced pattern by specifying the starting number (inclusive), ending number (exclusive), and sequencing interval. The range object is created by the `range()` function.

| FUNCTION  | EXAMPLE                     | DESCRIPTION                                                                                                      |
|-----------|-----------------------------|------------------------------------------------------------------------------------------------------------------|
| `range()` | `range(start,end,interval)` | Create a range object that numbers from `start` (inclusive) to `end` (exclusive) with an interval of `interval`. |

```python
rng = range(3, 10, 2)

rng[0]        # >> OUTPUT: 3
rng[1]        # >> OUTPUT: 5
rng[2]        # >> OUTPUT: 7
rng[3]        # >> OUTPUT: 9
```

## List
List iterable object stores item in sequence with index, irrelevant to a data type. Assigning a value to a list object is done using a bracket `[]` with values separated by commas in order. This bracket can also call an element at index location.

```python
lst = [value1, value2, value3, value4, ... ]

print(lst)       # >> OUTPUT: [value1, value2, value3, value4, ... ]
print(lst[0])    # >> OUTPUT: value1
```

It is possible to change the existing value by reassigning individual elements. Calling elements outside the range of a list is not possible and will result in an error.

```python
lst = [value1, value2, value3]

lst[1] = value4    # >> RESULT: lst = [value1, value4, value3]
lst[3] = value5    # IndexError: list assignment index out of range
```

**List comprehension** creates a list object that follows a sequence of specific patterns programmatically. Implementation of the list comprehension requires `for` loop and optional `if` condition.

| SYNTAX          | EXAMPLE                                          |
|-----------------|--------------------------------------------------|
| `[ for in if ]` | `lst[element for index in iterable if condtion]` |

The syntax creates a list containing `element` data based on variable `index` from `iterable` object as long as `condition` holds; `if` statement in comprehension is optional.

```python
lst = [i**2 for i in range(5)]
lst = [i**2 for i in range(5) if (i**2) % 2 == 0]
```

```
[0, 1, 4, 9, 16]
[0, 4, 16]
```

### List Operation
Both addition and multiplication apply to a list object, as well as operations exclusive to the iterable object. Operations below are not restricted to a list alone but can be used on other iterable objects introduced later.

| OPERATOR | NAME           | DESCRIPTION                                                         |
|----------|----------------|---------------------------------------------------------------------|
| `+`      | Addition       | Merge two or more lists to a single list.                           |
| `*`      | Multiplication | Multiply the string by the number of integer (float does not work). |
| `in`     | Included       | Check if an item is in a list.                                      |

```python
lst = [value1, value2, value3]

# + OPERATOR
print(lst + [value3, value4])    # >> OUTPUT: [value1, value2, value3, value3, value4]

# * OPERATOR
print(lst * 2)                   # >> OUTPUT: [value1, value2, value3, value1, value2, value3]

# in OPERATOR
print(value1 in lst)             # >> OUTPUT: True
print(value2 not in lst)         # >> OUTPUT: False
```

The following are functions that do certain features to and for a list (or more like iterable) object:

| FUNCTION      | EXAMPLE                             | DESCRIPTION                                                                                                         |
|---------------|-------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| `len()`       | `len(lst)`                          | Return a length of the `lst` list by counting elements.                                                             |
| `all()`       | `all([condition for index in lst])` | Return `True` when all elements inside the `lst` list meets `condition`.                                            |
| `any()`       | `any([condition for index in lst])` | Return `True` when any element inside the `lst` list meets `condition`.                                             |
| `enumerate()` | `enumerate(lst)`                    | Iterates elements inside the `lst` list with sequencing.                                                            |
| `list()`      | `list(iterable)`                    | Convert an `iterable` object (ex. string and range) to a list; create an empty list if `iterable` is not presented. |

```python
lst = [10, 9, 8, 7, 6]

# ALL() FUNCTION
if all( [var > 5 for var in lst] ):
    print("Numbers are all above 5.")           # >> OUTPUT: Numbers are all above 5.

# ANY() FUNCTION
if any( [ var % 2 ==  0 for var in lst] ):
    print("At least one number is even.")       # >> OUTPUT: At least one number is even.
    
# ENUMERATE() FUNCTION
for var in enumerate(lst):
    print(var)                                  # >> OUTPUT: (0,10)
                                                # >>         (1,9)
                                                # >>         (2,8)
                                                # >>         (3,7)
                                                # >>         (4,6)
```

Since a list is an (iterable) objects, it also has methods it can use to perform specific behavior:

| METHOD     | EXAMPLE                    | DESCRIPTION                                                |
|------------|----------------------------|------------------------------------------------------------|
| `append()` | `lst.append(value)`        | Add `value` at the end of the `lst` list.                  |
| `insert()` | `lst.insert(index, value)` | Add `value` at `index` element location of the `lst` list. |
| `index()`  | `lst.index(value)`         | Return the smallest index number of `value`.               |

## Tuple
Tuple iterable object is used to store item in order just like a list, but cannot change the value after initialization. This property of an iterable object is called immutable (opp. mutable). Tuple uses parentheses `()` or even without any to distinguish itself from other iterable.

```python
tpl = (value1, value2, value3)
print(tpl)        # >> OUTPUT: (value1, value2, value3)
print(tpl[0])     # >> OUTPUT: value1

# ALTERNATIVE: tuple without parentheses
tpl = value1, value2, value3
print(tpl)        # >> OUTPUT: (value1, value2, value3)
print(tpl[0])     # >> OUTPUT: value1
```

Data inside a tuple cannot change as it is the same as the constant version of a list object. The error will occur when attempted.

```python
tpl = (value1, value2, value3)
tpl[1] = value4
```

```
TypeError: 'tuple' object does not support item assignment
```

Refer *PYTHON: ITERABLE OBJECT § List Operation* for tables of operations, functions, and methods available for a tuple object.

### Unpacking Tuple
Unpacking a tuple means assigning individual elements in the tuple to variables or other tuples. Placing asterisk `*` on the prefix of a variable would return the leftovers in a list object. Detail explanation is available on *PYTHON: FUNCTIONAL PROGRAMMING § Parameters & Arguments* subsection.

```python
variable1, variable2, *variable3, variable3 = [value1, value2, value3, value4, value5]

print(variable1)    # >> OUTPUT: value1
print(variable2)    # >> OUTPUT: value2
print(variable3)    # >> OUTPUT: [value3, value4]
print(variable3)    # >> OUTPUT: value5
```

## Dictionary
Dictionary is an iterable object that has indexing `key` data and `value` data paired as a single element. Dictionary does not call value by integer index but through `key`. Dictionary uses curly bracket `{}` to distinguish itself from other iterable.

```python
dictionary = {key1: value1, key2: value2, key3: value3}

print(dictionary[key1])    # >> OUTPUT: value1
print(dictionary[key2])    # >> OUTPUT: value2
print(dictionary[key4])    # KeyError: key4
```

A mutable object such as a list and a tuple object is unavailable as `key` of the element. However, a mutable object is still assignable as a `value` in a dictionary.

```python
dictionary = {lst1: value1, key2: value2}
```

```
TypeError: unhashable type: 'list'
```

A `value` of the `key` within a dictionary is reassignable. Unlike a list object, appending a new element is also possible without needing any help from any external operation.

```python
dictionary = {key1: value1, key2: value2, key3: value3}
dictionary[key1] = value4
dictionary[key5] = value5
```

```
{key1: value1, key2: value2, key3: value3, key5: value5}
```

Operations for a dictionary is the same as other iterable objects but have slight differences:

| OPERATOR | NAME                     | DESCRIPTION                                                       |
|----------|--------------------------|-------------------------------------------------------------------|
| `+`      | Addition                 | Merge two or more dictionary to a single list.                    |
| `in`     | Included (key exclusive) | Check if the key is in a dictionary; it does not check for value. |

```python
dictionary = {key1: value1, key2: value2}

print(key1 in dictionary)         # >> OUTPUT: True
print(value2 in dictionary)       # >> OUTPUT: False
print(key3 not in dictionary)     # >> OUTPUT: True
```

Dictionary object can perform unique operations using specific functions and methods:

| OPERATION | EXAMPLE                             | DESCRIPTION                                                                                                        |
|-----------|-------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| `get()`   | `dictionary.get(key,[description])` | Find the `key` and get its value; additional description can be added when the `key` is not found (`None` by default). |
| `dict()`  | `dictionary=dict()`                 | Create an empty dictionary.    |

```python
dictionary = {key1: value1, key2: value2}

print(dictionary.get(key0))                         # >> OUTPUT: value1
print(dictionary.get(key2))                         # >> OUTPUT: None
print(dictionary.get(key3, "not in dictionary"))    # >> OUTPUT: not in dictionary
```

## Set
Set is an iterable object that guarantees uniqueness, meaning it does not allow duplicate elements. Just like a dictionary object, set uses curly bracket `{}` to assign values but without `key: value` pair. Due to this reason, a set is much faster to check the elements than a list.

```python
st = {value1, value2, value3}
print(st)
```

```
{value1, value2, value3}
```

Set have mathematical operations available that works exactly like a set in mathematics.

| OPERATION | NAME                 | DESCRIPTION                                                    |
|-----------|----------------------|----------------------------------------------------------------|
| `|`       | Union                | Returns a combined set of two sets.                            |
| `&`       | Intersection         | Returns set of data that only exist in both sets.              |
| `-`       | Difference           | Returns data that only exist in subtrahend and not in minuend. |
| `^`       | Symmetric difference | Returns data exclusive to each set, but not on both sets.      |

```python
set1 = {1, 2, 3, 4, 5, 6}
set2 = {4, 5, 6, 7, 8, 9}

print(set1 | set2)        # >> OUTPUT: {1, 2, 3, 4, 5, 6, 7, 8, 9}

print(set1 & set2)        # >> OUTPUT: {4, 5, 6}

print(set1 - set2)        # >> OUTPUT: {1, 2, 3}
print(set2 - set1)        # >> OUTPUT: {7, 8, 9}

print(set1 ^ set2)        # >> OUTPUT: {1, 2, 3, 7, 8, 9}
```

Set object can perform unique operations using specific functions and methods:

| FUNCTION | EXAMPLE         | DESCRIPTION                                                            |
|----------|-----------------|------------------------------------------------------------------------|
| `set()`  | `set(iterable)` | Create a set: list and tuple can be converted, excluding a dictionary. |

The function above is necessary when creating an empty set, as `{}` alone defines an empty dictionary. Meanwhile, methods used by a set object are as follows:

| METHOD     | EXAMPLE             | DESCRIPTION                                                 |
|------------|---------------------|-------------------------------------------------------------|
| `add()`    | `set.add(value)`    | Add `value` at the end of a set.                          |
| `remove()` | `set.remove(value)` | Remove `value` in a set.                                  |
| `pop()`    | `set.pop()`         | Randomly selected element is popped (removed) from a set. |

```python
st = set([value1, value2, value3, value1])
print(st)              # >> OUTPUT: {value1, value2, value3}

set0.add(value4)
set0.remove(value1)
print(st)              # >> OUTPUT: {value2, value3, value4}

print(st.pop())        # >> OUTPUT: value2 (randomly popped)
print(st)              # >> OUTPUT: {value3, value4}
```

## Generator
A generator is an iterable object that can be created by developers using `yield` and `for` loop statement. It is especially useful due to its absence of memory restrictions, allowing generators to yield an infinite number of data.

```python
# CREATING THE GENERATOR.
def generator_function():
    var = 0
    while var < 5
        yield var
        var += 1

# ITERATING GENERATOR ELEMENT-BY-ELEMENT.
for var in generator_function():
    print(var)

# CONVERSION TO "LIST" DATA TYPE.
lst = list(generator_function())
print(lst)
```

```
0
1
2
3
4
[0, 1, 2, 3, 4]
```

### `yield` Keyword
An essential keyword to create a generator; the keyword returns the value when iterated by a `for` loop statement.

# **PYTHON: FUNCTIONAL PROGRAMMING**
Functional programming is a style of program scripting that is based mostly on the usage of functions. This chapter will be introducing the guide on how to create and use functions in Python for functional programming.

## Function
A function is a reusable independent block of code that can process the data and present newly processed data once it's called, allowing dynamic program scripting. A function is distinguished by parenthesis after its name; `function()`.

```python
x = [0, 3, 5, 9]
print(len(x))
# USING "print()" AND "len()" FUNCTION THAT RETURNS THE LENGTH OF A LIST OBJECT.
```

```
4
```

Although variable and function are different, a variable can have a function assigned and treated just the same.

```python
# ORIGINAL FUNCTION
function(arg1, arg2)

# ASSIGNING AND EXECUTING FUNCTION VIA VARIABLE
variable = function
print(variable(arg1, arg2))
```

Not only can function assigned to a variable but can pass as an argument to other functions. Therefore, developers can define a new function using already existing ones.

### Pure Function
A pure function is a function that returns the same value for the same arguments without any side effects (such as a static and global variable). As for an example, cosine function `cos(x)` depends only on the argument `x` and returns the same value when given the same number; hence, the cosine function is a pure function.

### Higher-Order Function
A higher-order function is a function that takes other functions as argument(s) or returns a function as a result.

## `def` Keyword
The `def` keyword creates a custom function. Calling a custom function before definition will raise an exception. Because Python executes codes sequentially, such an attempt is like calling a non-existing function.

```python
def function(arg1, ar2):
    print(arg1 * arg2)
    return arg2

function("Hello",3)
print(function("World",2))
```

```
HelloHelloHello
WorldWorld
2
```

Parentheses `()` is necessary upon function definition even if the function does not have any parameter.

### `return` Statement
The `return` statement is a function-exclusive statement that returns the value processed by a function. Once encountering a return statement, the function ends immediately despite having remaining codes. The `return` statement is not essential, which returns `None` if not present.

```python
def function_name():
    print("Hello!")

print(function_name())
```

```
Hello!
None
```

### Parameter & Argument
Following is a difference between parameter and argument mentioned when discussing function:

* **Argument**
    : An argument is a value or object passed to a function parameter.

* **Parameter**
    : A parameter is a local variable assigned with an argument. Meaning, parameters are only available inside the function.

Although parameters and arguments are a different existence, two terms are used interchangeably as both stores the same data.

| OPERATOR | SYNTAX      | DESCRIPTION                                                                                                                                                                     |
|:--------:|:-----------:|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `*`      | `*args`     | A parameter that accepts one or more arguments.<br />Call parameter by `args`(abbrev. arguments) without asterisk, which returns a tuple of arguments. Must locate after normal parameter.           |
| `**`     | `**kwargs`  | A parameter that accepts one or more named arguments.<br />Call parameter by `kwargs`(abbrev. keyword arguments) without asterisks, which returns a dictionary of arguments' name and their value. Must locate after normal parameter. |
| `=`      | `arg=value` | A parameter that has default value when no argument is passed. Must locate after normal parameter.                                                                       |

Examples below show how parameter and argument work in function:

```python
# PARAMETER *args ALLOWS MORE ARGUMENT TO BE PASSED.
def function(arg1, *args):
    print(arg1)
    print(args)
    print(args[0])
    
function(1, 2, 3, 4)
```

```
1
(2, 3, 4)
2
```

----

```python
# PARAMETER **kwargs ACCEPTS FUNCTION-UNDEFINED PARAMETER.
def function(arg1, **kwargs):
    print(kwargs)
    
function(1, key0 = value0, key1 = value1)
```

```
{key0∶ value0, key1∶ value1}
```

----

```python
# DEFAULT-INITIALIZED PARAMETER arg2
def function(arg1, arg2 = "Hello"):
    print(arg2)
    
function(1)
function(2, "World!")
```

```
Hello
World!
```

## Anonymous Function
An anonymous function (aka. **lambda function** or **lambda expression**) is a function without a name and declaration (that is, anonymous), does not store data, returning value only from a single expression. It is generally used as a single-use or as an argument of a higher-order function.

| SYNTAX                                                                                       |
|:--------------------------------------------------------------------------------------------:|
| `lambda arg1, arg2 : expression`                                                             |
| An anonymous function, consisting of parameters `arg` and returning expression `expression`. |

Although an anonymous function is without a name for a single-use, it can be assigned to variables and called whenever needed. Below is an example from *Pure Function* with the implementation of anonymous function:

```python
# NAMED FUNCTION
def function(arg1, arg2):
    return 2 * x + y

# ANONYMOUS FUNCTION
(lambda arg1, arg2: 2 * x + y)(2, 3)

# ANONYMOUS FUNCTION ASSIGNED TO VARIABLE
variable = lambda arg1, arg2: 2 * x + y
variable(2,3)
```

```
7
```

## `map()` Function
The `map()` function is a built-in function that takes iterable object(s) and a parameterized function as arguments. The `map()` returns an iterable object that maps the iterable object through the parameterized function.

| SYNTAX                                                       |
| ------------------------------------------------------------ |
| `map(function, iterable1, iterable2, ...)`                   |
| A higher-order `map()` function passes iterable object `iterable1` and `iterable2` to parameterized function `function`. |

Conversion to an iterable object such as a list or tuple is necessary to avoid an exception such as "SyntaxError".

```python 
lst1 = [1, 2, 3, 4, 5]
lst2 = [0, 9, 8, 7, 6, 5]

variable1 = map(lambda arg1, arg2: arg1 ** 2 + arg2, lst1, lst2)
variable2 = map(lambda arg2, arg1: arg1 ** 2 + arg2, lst2, lst1)

print(list(variable1))
print(list(variable2))
```

```
[1, 13, 17, 23, 31]
[1, 83, 67, 53, 41]
```

## `filter()` Function
The `filter()` function is a built-in function that takes iterable object(s) and conditioning function (aka. predicate) as arguments. The `filter()` returns an iterable object consists of elements that passed the predicate.

| SYNTAX                                                                                               |
|------------------------------------------------------------------------------------------------------|
| `filter(predicate, iterable)`                                                                        |
| A higher-order `filter` function passes iterable object `iterable` to conditional function `predicate` for evaluation. |

Conversion to an iterable object such as a list or tuple is necessary to avoid an exception such as "SyntaxError".

```python
lst = [1, 2, 3, 4, 5]

variable = filter(lambda arg: arg % 2 is 0, lst)

print(list(variable))
```

```
[2, 4]
```

## Recursive Function
A recursive function is a function that calls itself (recursion). Factorial in mathematic is the best example of recursive function implementation.

```python
# EXAMPLE: FACTORIAL "!"
def factorial(arg):
    # BASE CASE: a case when to escape from the recursion.
    if arg == 1: 
        return 1
    else:
        return arg * factorial(arg-1)

print(factorial(5))
```

```
120
```

Recursion can occur indirectly by multiple functions calling one to another, then back to the beginning.

### Base Case
A base case is a case of recursion which doesn't involve referring to itself anymore; an exit condition. Without a base case, recursion results infinitely and thus crash due to memory shortage:

```
RuntimeError: maximum recursion depth exceeded
```

## Decorator
Decorator is a function that modifies the original function's functionality and returns the modified "function" itself (instead of returning a value). Hence, an assignment to a variable is needed after modifying it with a decorator to use the function.

```python
# ORIGINAL FUNCTION
def function():
    statements

# CREATING DECORATOR
def decorator(func):
    def modified_function():
        """
        statements including func()
        """
    return modified_function

# DECORATING (MODIFYING) FUNCTION
variable = decorator(function) 
variable()        # WHICH IS ACTUALLY A FUNCTION ASSIGNED TO "variable".

# DECORATING (MODIFYING) FUNCTION: MAINTAIN FUNCTION NAME
function = decorator(function)
function()
```

The decorator above has modified `function()` and assigned it to a variable `variable` and `function`, where the latter maintains the function name.

Exclude parenthesis when passing a function to a decorator, which indicates a function itself rather than a value or code execution.

### `@` Symbol
A decorator symbol `@` is for pre-pending the function definition, placed before the function that needs decorating.

| OPERATOR | EXAMPLE      | DESCRIPTION                                               |
|:--------:|--------------|-----------------------------------------------------------|
| `@`      | `@decorator` | `@decorator` is a replacement of `func = decorator(func)` |

```python
# CREATING DECORATOR.
def decorator(func):
    def modified_function():
        """
        statements including func()
        """
    return modified_function

# DECORATING FUNCTION: @ SYMBOL
@decorator
def function():    # ORIGINAL FUNCTION OF "function()"
    statements

# FUNCTION NAME REMAINS THE SAME.
function()
```

More than one decorator can modify a single function:

```python
@decorator1
@decorator2
def function():
    statements
```

A decorator located closest to the pre-decorated function will be applied firsthand. Thus, the function object `function()` will first be decorated by `@decorator2`  then `@decorator1` sequentially.

# **PYTHON: OBJECT-ORIENTED PROGRAMMING**
The current document has explained and dealt with procedural and functional programming. The third scripting method, object-oriented programming (abbrev. OOP), focuses on the usage of classes and objects instead of functions.

## Object
Previous chapters introduced a variable and function, which is for storing and processing data, respectively. Object (aka. instance) is a block of data that encapsulates these variables and functions into a single identity.

The programming based around the use of custom objects is called *object-oriented programming*.

```python
x = [0, 3, 5, 9]
print(x.index(5))
# Using "index()" method that returns index of the value 5.
```

```
2
```

### Encapsulation
Encapsulation is the core concept in an object with the following characteristics:

1. Combines variables and functions into a single data.
2. Restrict direct access to these variables and functions to prevent accidental modification from external code. 

### Attribute & Method
Attribute and method refer to a variable and function encapsulated to an object, which is accessed by the following syntax:

| Components | Syntax               |
|:----------:|----------------------|
| Attribute  | `instance.attribute` |
| Method     | `instnace.method()`  |

## Class
A class creates objects (aka. instance) and is defined using the `class` keyword. Definitions of an object's attributes and methods are also inside a class definition. The following example is a simple user-defined class with attributes and methods:

```python
# CREATING CLASS
class CLASS∶
    # INSTANCE INITIALIZATION (= CONSTRUCTOR)
    def __init__(self, arg1, arg2):
        # ATTRIBUTES (similar to VARIABLE)
        self.attr1 = arg1
        self.attr2 = arg2
        
    # METHOD (similar to FUNCTION)
    def method(self, arg3):
        self.attr3 = arg3
        return self.attr1 + self.attr2 - self.attr3

# INSTANTIATION
instance = CLASS(value1, value2)    # CREATE INSTANCE FROM THE CLASS

# THEREFORE...
print(instance.attr3)
print(instance.method(value3))
```

```
value3
value1 + value2 - value3
```

### `self` Variable
The `self` variable is a conventional name to indicate an instance itself. Placing `self` on variables or functions bounds them to an object, thus declaring them as attributes and methods. These attributes and methods are only accessible from an instance. Variables and functions without `self` are local variables and functions, which results in "AttributeError" when an attempt to access.

```python
# CREATING CLASS
class CLASS:
    def __init__(self, arg1, arg2):
        self.attr1 = arg1
        self.attr2 = None        # ATTRIBUTE MUST BE INITIALIZED, ELSE RESULTS "AttributeError"
        attr3 = arg2             # LOCAL VARIABLE


# INSTANTIATION
instance = CLASS(1, 2)
''' EQUIVALENT: 
Class.__init__(self = instance, arg1 = 1, arg2 = 2)
'''

# THEREFORE...
instance.attr1    # >> OUTPUT: 1
instance.attr2    # >> OUTPUT: None
instance.attr3    # AttributeError: 'CLASS' object has no attribute 'C'
```

### `__init__` Method
The `__init__` method is the most crucial method for creating an instance. From the name implies (an abbreviation of *initialization*), this method is automatically called when creating an object from the class and defines the number of parameters needed for instance initialization.

## Instance Attribute & Method
Instance attribute and instance method is an attribute and method defined with the `self` variable and accessible only through an instance. However, an instance attribute can only be defined in an instance method.instead.

```python
# CREATING CLASS
class CLASS:
    def __init__(self, arg1, arg2):
        # INSTANCE ATTRIBUTES
        self.attr1 = arg1
        self.attr2 = arg2
        self.attr3 = None

    # INSTANCE METHOD
    def method1(self, arg3):
        self.attr3 = arg3
```

## Class Attribute/Method
Class attribute and class method is an attribute and method accessible through an instance and class. A class attribute is defined under a class directly instead of an instance method, and a class method requires a decorator below:

| SYNTAX         | DESCRIPTION                                 |
|:--------------:|---------------------------------------------|
| `@classmethod` | A decorator used to declare a class method. |

Just like the `self` variable for an instance method, a class method needs a variable that refers to its class, conventionally named `cls`.

```python
# CREATING CLASS
class CLASS:
    # CLASS ATTRIBUTE
    attribute = value
    
    def __init__(self, arg1, arg2):
        self.attr1 = arg1
        self.attr2 = arg2
        self.attr3 = None

    def method1(self, arg3):
        self.attr3 = arg3
    
    # CLASS METHOD
    @classmethod
    def method2(cls, arg4):
        return arg4
    
    # CLASS METHOD FOR INSTANTIATION
    @classmethod
    def method3(cls, arg5, arg6):
        return cls(arg5**2, arg6**2)
    
    
# INSTANTIATION
instance1 = CLASS(1, 2)
instance1.method1(4)

instance2 = CLASS.method3(1, 2)    # INSTANTIATE: arg1 = 1**1, arg2 = 2**2
instance2.method1(4)

# THEREFORE...
CLASS.attribute        # >> OUTPUT: value
CLASS.method2(3)       # >> OUTPUT: 3

instance1.attribute    # >> OUTPUT: value
instance1.attr1        # >> OUTPUT: 1
instance1.attr2        # >> OUTPUT: 2
instance1.attr3        # >> OUTPUT: 4

instance2.attribute    # >> OUTPUT: value
instance2.attr1        # >> OUTPUT: 1 (= 1**2)
instance2.attr2        # >> OUTPUT: 4 (= 2**2)
instance2.attr3        # >> OUTPUT: 4
```

## Static Method
Static method is a method accessible without instantiation. Because a static method does not require a variable such as `self` or `class,` it cannot access instance/class attributes and methods. In other words, a static method is just another function bounded by a class, which requires a decorator below to declare:

| SYNTAX          | DESCRIPTION                                  |
|-----------------|----------------------------------------------|
| `@staticmethod` | A decorator used to declare a static method. |

Since static methods do not have a parameter to call itself, static methods cannot access or modify any attribute from class and instance. This makes static methods identical to normal functions that belong to a class.

```python
# CREATING CLASS
class CLASS:
    def __init__(self, arg1, arg2):
        self.attr1 = arg1
        self.attr2 = arg2
        self.attr3 = None
        
    def method1(self, arg3)
        self.attr3 = arg3
        
    # STATIC METHOD
    @staticmethod
    def method2(arg4):
        return True if arg4 is 4 else False


# INSTANTIATION
instance = CLASS(1, 2)
instance.method1(4)

# THEREFORE...
instance.attr1            # >> OUTPUT: 1
instance.attr2            # >> OUTPUT: 2
instance.attr3            # >> OUTPUT: 4

CLASS.method2(4)        # >> OUTPUT: True
```

## Magic Method
The magic method is a method with dunder (double underscore) on both sides of an identifier. Most of the operators have their magic method used for operator overloading that modifies the operator's functionality. The `__init__` method is the most commonly used magic method for initialization.

| OPERATOR | NAME           | MAGIC METHOD               |
|----------|----------------|----------------------------|
| `+`      | Addition       | `__add__(self, other)`     |
| `-`      | Subtraction    | `__sub__(self, other)`     |
| `*`      | Multiplication | `__mul__(self, other)`     |
| `/`      | Division       | `__truediv__(self, other)` |
| `&`      | AND            | `__and__(self, other)`     |
| `^`      | XOR            | `__xor__(self, other)`     |
| `|`      | OR             | `__or__(self, other)`      |
| `()`     | Argument       | `__call__(self, other)`    |

### Operator Overloading
Operator overloading customizes an operator's functionality for specific classes or data types. Magic method overloads an operator but applies to a specified class exclusively. For example, `x + y`  is expressed as `x.__add__(y)`.

```python
# CREATING CLASS
class CLASS:
    def __init__(self, arg1):
        self.attribute = arg1
        
    def __add__(self, arg2):
        return "\0".join([self.attribute, arg2.attribute])  # INSERT "\0" BETWEEN TWO STRING OBJECTS.

# INSTANTIATION
instance1 = CLASS("Hello")
instance2 = CLASS("World!")

instance1 + instance2        # >> OUTPUT: "Hello World!"
```

## Inheritance
Inheritance is an act of providing attributes and methods of a superclass(base class) to a derived subclass(child class). When superclass and subclass share the same name of attributes or methods, those are overridden by the subclass.

```python
# CREATING SUPERCLASS
class SUPERCLASS:
    attr1 = value1
    attr2 = value2

# CREATING SUBCLASS
class SUBCLASS(SUPERCLASS):
    attr2 = "Hello World!"
    attr3 = value3

# INSTANTIATION  
instance = SUBCLASS()

# THEREFORE...
instance.attr1        # >> OUTPUT: value1
instance.attr2        # >> OUTPUT: "Hello World!"
instance.attr3        # >> OUTPUT: value3
```

### Super Function
The `super()` function accesses superclass attributes and methods directly. It is to avoid overriding superclass attributes and methods.

```python
# CREATING SUPERCLASS
class SUPERCLASS:
    def __init__(self, arg1):
        print("Hello World!")
        self.attribute = arg1

# CREATING SUBCLASS
class SUBCLASS(SUPERCLASS):
    def __init__(self, arg2):
        print("Goodbye World?")


# INSTANTIATION
instance = SUBCLASS(3)

# THEREFORE...
print(instance.attribute)
```

```
"Goodbye World?"
AttributeError: 'SUBCLASS' object has no attribute 'attribute'
```

The `__init__()` method in `SUPERCLASS` would have been overridden by `SUBCLASS` since both methods share the same name. Hence, the `print(Hello World")` is not executed, and `self.attribute` causes an exception despite inheritance.

Meanwhile, when using a super function to called the `__init__()` method directly from the `SUPERCLASS`.

```python
# CREATING SUPERCLASS
class SUPERCLASS:
    def __init__(self, arg1):
        print("Hello World!")
        self.attribute = arg1

# CREATING SUBCLASS
class SUBCLASS(SUPERCLASS):
    def __init__(self, arg2):
        # DIRECTLY INHERITING "__init__()" METHOD FROM SUPERCLASS
        super().__init__(arg2)
        print("Goodbye World?")


# INSTANTIATION
instance = SUBCLASS(3)

# THEREFORE...
print(instance.attribute)
```

```
"Hello World!"
"Goodbye World?"
3
```

## Data Hiding
Encapsulation in Python does not fully guarantee data hiding. External code can still access a class's attributes and methods. Hiding attributes and methods inside a class are generally possible by name mangling.

| SYMBOL | EXAMPLE       | DESCRIPTION                                                                                                               |
|:------:|---------------|---------------------------------------------------------------------------------------------------------------------------|
| `_`    | `_attribute`  | Though not a name mangling, it prevents accessing attributes and methods when imported as a module.                       |
| `__`   | `__attribute` | Name mangling, which prevents accessing attributes and methods when imported as a module and from code outside the class. |

### Properties
Property is a decorator that supports data hiding by dividing a method into `getter`, `setter`, and `deleter` method. Property is only available on method as it is declared using a decorator.

| METHOD  | SYNTAX            | DESCRIPTION                                           |
|---------|-------------------|-------------------------------------------------------|
| Getter  | `@property`       | Method for getting the value from property attribute. |
| Setter  | `@method.setter`  | Method for setting the value of property attribute.   |
| Deleter | `@method.deleter` | Method for deleting property attribute.               |

```python
# CREATING CLASS
class CLASS:
    def __init__(self, arg1):
        self.attr1 = arg1
    
    # DEFINITION: GETTER METHOD
    @property
    def method(self):
        return self.attribute
    
    # DEFINITION: SETTER METHOD
    @method.setter
    def method(self, arg3):
        self.attribute = arg3
    
    # DEFINITION: DELETER METHOD
    @method.deleter
    def method(self):
        del self.attribute
        
# INSTANTIATION
instance = CLASS(3)

# THEREFORE
print(instance.method)        # EXAMPLE: GETTER METHOD

instance.method = 1           # EXAMPLE: SETTER METHOD
print(instance.method)

del instance.method           # EXAMPLE: DELETER METHOD
print(instance.method)
```

```
3
1
AttributeError: 'CLASS' object has no attribute 'attr1'
```

Separating a method using property hides sensitive code such as `setter` and `deleter` property, and only the `getter` property is available for use. End-user can use a method with `getter` property while modifying functionality is done through `setter` property.

Although the `getter` is essential in property, the `setter` and `deleter` are optional; using the `getter` alone would make an unmodifiable read-only method.

# **PYTHON: EXCEPTION**
An exception is an inexecutable code error due to incorrect coding or input. Because it is not an error filtered upon running, a program immediately halts when encountering an exception. Exception handling aims to provide a stable program without any halt or crash.

### `try`/`except` Statement
The `try`/`except` statement pair detect exceptions and executes a code accordingly. There are additional statements that can use together with:

| KEYWORD   | DESCRIPTION                                                                            |
|-----------|----------------------------------------------------------------------------------------|
| `try`     | A block of code to check for exception.                                           |
| `except`  | Executed when certain exception occurs.                                                |
| `else`    | [OPTIONAL] Executed when the code has passed with no error (exception).                |
| `finally` | [OPTIONAL] Executed no matter what exception has occurred, even when there's no error. |

```python
try:
    statements
except exception_type1:
    statements
except exception_type2:
    statements
except:            # UNCONDITIONAL EXCEPTION LOCATES LAST.
    statements
finally:
    statements
```

Even after the `try`/`except` statement, the program does not stop and continues.

### `raise` Statement
The `raise` statement manually raises exception intentionally. It also stops the runtime immediately, preventing further program execution.

```python
# EXPLICITLY RAISE EXCEPTION: can be used alone, even inside an 'except' code above.
raise

# PROVIDE DETAIL DESCRIPTION ON EXPLICITLY RAISED EXCEPTION
raise exception_description
```

### `assert` Statement
The `assert` statement checks expressions for validity (aka. assertion). When a tested expression is valid with no problem, the statement returns `True`; when an exception occurs, it returns `False`.

```python
print(0)
assert TRUE_expression
print(1)
assert FALSE_expression, "exception_type"
print(2)
```

```
0
1
AssertionError: exception_type
```

# **PYTHON: PYTHONICNESS**
This chapter introduces the programming coding style of Python recommended by various Python developers, called *pythonic*.

## Zen of Python
Zen of Python is a set of principle guides when coding Python. To view Zen of Python, enter the statement below:

```python
import this
```

## Python Enhancement Proposals
Python Enhancement Proposals (abbrev. PEP8) are eight scripting style guides for Python suggested by experienced Python developers.

1. Module should have short, all-lowercase name.
2. Class name should be in the CapWords style.
3. Most variables and function names should be lowercase_with_underscores.
4. Constants (variables that never change value) should be CAPS_WITH_UNDERSCORES.
5. Names that would clash with Python keywords (such as 'class' or 'if') should have a trailing underscore.
6. Line shouldn't be longer than 80 characters.
7. `from module import *` should be avoided.
8. There should be only one statement per line.

## Entry Point
An entry point is a part of the script where a program begins; C/C++ programming has the `main()` function, but Python does not have one. However, Python can tell which script is the main running script by checking whether the `__name__` magic method has `"__main__"` value.

```python
# ENTRY POINT
if __name__ == "__main__":
    statements
```

Codes and statements indented under this condition won't run when imported as a module to the other script. Beware, the `is` operator cannot substitute the `==` operator.

# **PYTHON: FILE MANAGEMENT**
It is inefficient to input data through a console terminal when using Python for advanced purposes such as scientific research. Instead, a program can load data saved in a file and process them.

## Opening Files
Python must open a file before reading or manipulating a file using the `open()` function.

```python
open("filename.txt")
```

| OPTION | DESCRIPTION                        |
|--------|------------------------------------|
| `r`    | Read mode (default)                |
| `w`    | Write mode (rewrites content)      |
| `a`    | Append mode (adding new content)   |
| `rb`   | Binary read mode (non-text files)  |
| `wb`   | Binary write mode (non-text files) |

The `close()` method closes currently opened file. Closing a file is important to avoid wasting resources. Ensure a file is always closed even on exception by using the `try`/`except` or `with` statement.

```python
file = open("filename.txt", "r")
file.close()
```

### `with` Statement
The `with` statement creates a temporary variable only available inside its indented code block. When opening a file with the `with` statement, the file automatically closes when it ends.

```python
with open("filename.txt") as file:
    statements
```

### Context Manager
A context manager is an interface that supports the `with` statement. There are two methods available for setting an object method and function as a context manager:

1. `__enter__()` and `__exit__()` method

```python
# CONTEXT MANAGER 1
class CLASS:
    def __init__(self):
        pass
    
    # EXECUTE UPON ENTERING "WITH"
    def __enter__(self):
        self.variable = expression
        return self.variable
    
    # EXECUTE UPON EXITING "WITH"
    def __exit__(self):
        statements
```

2. `contextlib` module

```python
from contextlib import contextmanager

# CONTEXT MANAGER 2 
class CLASS:
    def __init__(self):
        pass
    
    # "WITH" SUPPORTED FUNCTION/METHOD
    @contextmanager
    def method(self):
        self.variable = expression
        yield self.variable
        statements
```

The `return` or `yield` data becomes a processible resource within the `with` statement when implements context manager. This implicit resource can alias with the `as` keyword but not necessary.

```python
# INSTANTIATION
instance = CLASS()

with instance.method():
    # HANDLES "self.variable"
    statements
```

One of the actual implementations of this syntax can be found in chapter *TENSORFLOW: BASIC § TensorBoard* in [*LIBRARY_TensorFlow.md*](./../../../library/en/LIBRARY_TensorFlow/) document.

### Absolute & Relative Paths
Python has two different types of paths: absolute and relative path. When designating a file path, use double backslash `\\` since using a single backslash will escape string object and can cause unwanted operation.

```python
variable = open("path\\filename.txt")
```

## Reading Files
After opening a text-based file, Python can read its content using the `read()` method. The argument inside the method represents the number of bytes to read but reads everything by default. Running `read()` method again continues from where it last read.

```python
with open("path\\filename.txt") as file:
    print(file.read(16))    # READ 16 BYTES FROM THE START OF THE CONTENT.
    print(file.read(4))        # READ 4 BYTES FROM THE POINT AFTER PREVIOUS 16 BYTES.
    print(file.read())        # READ THE REST OF THE TEXT AFTER PREVIOUS 4 BYTES.
    print(file.read())        # READ NO TEXT AS NO MORE CONTENT TO READ.
```

The `readlines()` method returns a list of text of each line. The method does accept an argument that represents how many bytes to read. Similarly, the `readline()` method that only reads a single line.

```
[filename.txt]
First line here.
Second line there.
Last line somewhere.
```

```python
with open("path\\filename.txt") as file:
    print(file.readlines())
    print(file.readline())
```

```
['First line here.\n','Second line there.\n','Last line somewhere.']
First line here.
```

### Printing Line using Loop
Each line of text-base content can be retrieved using the `for` loop statement:

```python
for file in variable:
    print(variable)
```

## Writing Files
Python creates and writes a text-based file using the `write()` method. There are two options when writing a file: (1) overwrite and (2) append. Suppose there is a text file shown below.

```
[filename.txt]
First line here.
Second line there.
Last line somewhere.
```

Overwrite mode `w` deletes all the previously existing content and write down fresh from the beginning.

```python
with open("path\\filename.txt", "w") as file:
    file.write("TEXT OVERWRITTEN!")
```

```
[filename.txt]
TEXT OVERWRITTEN!
```

On the other hand, append mode `a` does not delete existing content but continue writing from the end.

```python
with open("path\\filename.txt", "a") as file:
    file = file.write("TEXT APPENDED.")
    print(file)
```

```
[filename.txt]
First line here.
Second line there.
Last line somewhere.TEXT APPENDED.
```

Upon successfully written, the `write()` method returns the number of bytes written.

### Creating Files
The `write()` method also creates a new file. Creating a file is done by designating a file name that does not exist in the specified path.

```python
with open("path\\NEW-filename.txt", "w") as file:
    file.write("NEW FILE CREATED!")
```

```
[NEW-filename.txt]
NEW FILE CREATED!
```

# **PYTHON: PACKAGE**
Python has a variety of packages that can be easily downloaded and used on-demand. This chapter describes what the package is and how to implement it to the script.

## Modules
A Python module is simply a Python source code file with a `.py` extension. Developers may create their module containing classes or functions, and calling these codes from distributed Python files can be done using the `import` keyword. Below is an example of importing the `module.py` Python script.

```python
import module
module.function()
```

The above approach still requires the name of the module to be mentioned every time when using its classes or functions. To ignore referring to the name of modules, use the `from` keyword beforehand.

```python
from module import function1, function2
from module import function as name
```

However, without the name of modules when using the function, there is a potential conflict caused by function naming. Unless the name of the function guarantees uniqueness, it is safe to use the previous approach to import modules.

## Package
A package is a directory that holds a collection of Python modules or sub-packages. Every package folder must have a Python file called `__init__.py` that can be blank or contains the directory path of the current package to prevent directories error caused by a common name.

```python
import package.module
from package.module import function
```

## Python Package Index
Python Package Index (abbrev. PyPI) is an external module storage website (*https://pypi.python.org/pypi*). To download and install the modules and packages, a software called pip is necessary.

### PIP
The pip software is a package management system required to install and manage the Python package. The software comes installed by default with the modern distribution of Python. Installation and management of packages are done using Command Prompt or Powershell.

| NAME        | DESCRIPTION               | COMMAND                 |
|-------------|---------------------------|-------------------------|
| `install`   | Install the package       | `pip install package`   |
| `uninstall` | Uninstall the package     | `pip uninstall package` |
| `list`      | Show the list of packages | `pip list`              |

On Windows OS exclusively, it is recommended using the command `python -m pip` rather than `pip` alone.

```
python -m pip
```

Entering `python` on a terminal opens Microsoft Store on Windows 10 OS. There ways to bypass and prevent this:

1. Use a Python Launcher program; replace`python` with `py`.
2. On `Setting > Apps > Apps & features > App execution aliases`, switch `python.exe` and `python3.exe` off.

The command means accessing the pip under the python interpreter specified in the environment variable. It reduces confusion on managing packages between interpreters. When there is another version of Python installed, say 32 bits of Python 3.5

```
py -3.5-32 -m pip
```

# **PYTHON: VIRTUAL ENVIRONMENT**
Python installs every package to the interpreter directory. However, a single interpreter cannot have more than one of the same package, 
which is a problem when managing multiple Python projects. If two projects require a different version, a developer has to reinstall every time switching a project.

A virtual environment duplicates interpreter for a separate project, preventing package conflict with easier management.

## `venv` Package
The Python3 has a virtual environment package included by default. It creates lightweight virtual environments with their site directory, optionally isolated from the system site directory. Packages installed with this interpreter's pip all go to the virtual environment.

### Creating Environment
Creating a virtual environment under the name `.venv` on the desired project directory is done as follows:

```
python -m venv D:\Workspace\Python\project\.venv
```

### Activate Environment
Here, the term "activating" means activating a virtual environment on a terminal. While this is unnecessary when running the script under a virtual environment, activation is required when installing packages on a virtual environment.

* Windows:

    ```
    D:\Workspace\Python\project\.venv\Scripts\activate.bat
    ```

* Unix (e.g. Linux and macOS):

    ```
    source ~/Workspace/Python/project/.venv/bin/activate
    ```

### Deactivate Environment
To exit from a virtual environment activated console, it needs to be "deactivate" on a terminal.

```
deactivate
```

The above is the same as entering the command `PATH=D:\Workspace\Python\.venv\Scripts\deactivate.bat`. Because of this, relocating the virtual environment directory will cause the `deactivate` command unable to recognize its path.

# **PYTHON: NUMPY**
NumPy is a powerful and useful library used in Python that supports multi-dimensional matrix (aka. NumPy array). As one of the best known scientific libraries, other well-recognized libraries also implements NumPy such as Matplotlib, TensorFlow, and more.

To install NumPy library, open command prompt window and enter the command below: 

```
python -m pip install numpy
```

Since NumPy is a scientific library and is still growing, this chapter will briefly introduce simple usage of the array. For more information on its API, refer to the following URL: https://numpy.org/

## NumPy Array
NumPy array is a very flexible matrix. Compared to a list object in Python, it has faster speed and higher efficiency on memory management. Declaration of the NumPy array is as follows:

```python
import numpy as np

# NUMPY DECLARATION
variable = np.ndarray(shape = (2, 3))
print(variable)
```

```
[[800191312     32765 800196048]
 [    32765 870097920     32765]]
```

The above creates a NumPy array object based on the given size, but its values are random. Initialization of a NumPy array is as follows:

```python
import numpy as np

# NUMPY INITIALIZATION 
variable = np.array([[1, 2, 3], [4, 5, 6]])
print(variable)
```

```
[[1 2 3]
 [4 5 6]]
```

This creates a NumPy array object based on the given value but has a disadvantage on creating the array with a bigger size or deeper dimension. 

More NumPy methods exist that creates the array with better convenience:

| NUMPY ARRAY             | DESCRIPTION                                                   |
|-------------------------|---------------------------------------------------------------|
| `np.zeros(shape)`       | Create a NumPy filled with number 0 with the size of `shape`. |
| `np.ones(shape)`        | Create a NumPy filled with number 1 with the size of `shape`. |
| `np.eye(N)`             | Create a NumPy identity matrix of `N` x `N` size.             |
| `np.full(shape, value)` | Create a NumPy filled with `value` with the size of `shape`.  |

### NumPy Element
While accessing elements in a NumPy array is similar to Python's iterable object, but its syntax is different:

```python
import numpy as np
variable = np.array([[1, 2, 3], [4, 5, 6]])

print(variable[0])        # >> OUTPUT: [1, 2, 3]
print(variable[0, 1])    # >> OUTPUT: 2
```

### NumPy Shape
The shape of the NumPy cannot be found with the `len()` function. Instead, NumPy has its unique attribute containing the length of each dimension.

```python
import numpy as np
variable = np.array([[1, 2, 3], [4, 5, 6]])

variable.shape        # >> OUTPUT: (2, 3)
variable.shape[0]    # >> OUTPUT: 2
```

## NumPy Indexing
The term "indexing" means slicing the array to a specific range only. Each dimension is indexed using colon `:` and distinguished via comma `,`. Indexing shares the same rules as the slicing of an iterable object.

* `n:m` : start indexing from n<sup>th</sup> element (included) to m<sup>th</sup> element (excluded).
* `:` : start indexing from beginning to the end, thus skip indexing.

```python
import numpy as np
variable = np.array([[1, 2, 3], [4, 5, 6]])

print(variable[:, 1:-1])
```

```
[[1 2]
 [4 5]]
```