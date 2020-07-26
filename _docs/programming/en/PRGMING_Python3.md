---
name: Python3
lang: en
layout: docs
author: GKO95
category: Programming
title: "Programming | Python3"
logo: "/assets/images/logo/logo-python.png"
order: 0x00
---
# **PYTHON: INTRO**
Python is a high-level programming language with applications in numerous areas, including web programming, scientific computing, and artificial intelligence. The language is executed sequentially line-after-line and doesn't need semicolon `;` to end the line of the statement.

## Interpreter
A programming language such as C/C++ uses compiler that translates (English-written) source codes to (binary code) machine language computer can understand and execute. However, the interpreter allows a computer to execute the program directly from source code without translation.

Python is interpreter-driven high-level language: this allows scripting the code much easier than a compiler, but its execution time can be slower in comparison.

### CPython
A Python interpreter was first developed with C programming language, called CPython, and is the most widely used implementation of all. Other notable implementations are Jython (Java-implementation), IronPython (.NET-implementation), and PyPy (Python-implementation).

While Python is introduced as an interpreter language, it uses both interpreter and compiler: CPython first processes Python code into intermediate bytecode which is then executed by CPython interpreter. Because of this, Python execution takes a long time on the first run from the compilation.

# **PYTHON: BASIC**
The general programming language has essential, fundamental, or even helpful data and syntax that needs to be observed and acknowledged when coding. As for the beginning of the practical coding, this chapter will introduce basic information on Python language coding.

## Comment
Comment in a programming language is not executed and is commonly used to write down information related to the code. There are two different comments in Python: line comment and block comment.

* **Line comment**
  : a comment worth a single line of code, and is declared by `#` (octothorpe).
* **Block comment** (aka. **docstrings**)
  : a comment with multiple lines of code by using three pairs of double quote `""" """` or single quote `''' '''`. Docstrings can even be used to write multiple lines of sentences and view them on runtime.

```python
"""
BLOCK COMMENT:
multiple lines of comment can be placed here and can even be viewed on runtime.
"""
# LINE COMMENT: for a single line of code.
```

## Input & Output
Python has a single input and output function for a terminal text-based:

| INPUT/OUTPUT | SYNTAX                    | DESCRIPTION                                                                                                              |
|--------------|---------------------------|--------------------------------------------------------------------------------------------------------------------------|
| `input()`    | `input("Write:")`         | Text data inside a function `input()` is shown on a terminal when input is needed, and always return input data as text. |
| `print()`    | `print("Read:",variable)` | Data inside a function `print()` is shown on a terminal when executed irrelevant to data type, where `variable` is a text data for concatenation.                    |

```python
variable = input("Write: ")
print("Read:", variable)
# EQUIVALENT: print("Read:", input("Write: "))
```

```
Write: Hello World!
Read: Hello World!
```

To print a mixture of more than a single data type in a single `print()` function, there are two possible methods with slightly different results.

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

2. Concatenation of string using `+` and does not create blank space between. However, a data type that is not a string needs to be converted to a string to use concatenation.

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
An identifier is a name used to identify data (aka. construct) in programming. In other words, it is just a (user-defined) name. In Python, the following rules must be observed when naming an identifier:

* The first character is only allowed to have alphabet letters and underscore `_`.
* Aside from the first character may use alphabet letters, digits, or underscores.
* Black spaces are prohibited.

## Variable
Variable is a container for data that can be assigned using the assignment operator `=`. There are three different common stages in a variable: declaration, definition, and initialization.

* **Declaration**
  : a declaration refers to declaring the existence of the construct (e.g. variables, functions, objects, etc) by specifying the name (aka. identifier). Declaration typically specifies the data type of constructs in other languages, but this is an exception in Python as it does not specify data type on constructs.

* **Definition**
  : a definition refers to a block of codes containing values or functionalities the construct has. In some cases, the definition of variable and function is also called *assignment* and *implementation* respectively.

  ```python
  # DEFINITION (+ DECLARATION) OF VARIABLE
  variable = 1
  
  # DEFINITION (+ DECLARATION) OF FUNCTION
  def function():
      statements
      return 0
  ```
  
* **Initialization**
  : an initialization is assigning the initial value to the construct, simply the *first* definition. The first definition is generally done at the same time when declaring the construct. Hence, initialization is commonly thought by people as *declaration + definition* but is not always true.

Variable is not data-type fixed, allowing developers to change the value whatever and whenever using a single variable.

### Local & Global Variable
**Local variable** is a variable declared inside a code block, such as function or class. However, this does not apply to conditional, loop, `with` statements, and others. Data stored in a local variable is destroyed when exiting the code block, thus cannot be used outside. This allows variable with the same name to be declared outside the code block.

**Global variable** is a variable declared outside of any code block on the script. Accessing the global variable in a code block is done using the `global` keyword. However, global variables should be avoided if possible to prevent unexpected results and errors caused by conflicting variables.

### Constant Variable
A constant variable is a special type of variable that cannot be changed after its initialization. Unlike programming languages such as C/C++, Python cannot declare constant variables due to the absence of *declaration*. Python developers should just be careful not to mess up the what-is-used-as-constant variable.

The conventional mean of naming constant variables are using all UPPERCASE.

### `del` Keyword
The `del` keyword is used to delete variables. Deleted variables can always be reassigned later.

```python
# DECLARATION OF THE VARIABLE "x"
x = "Python3"
print(x)

# DELETION OF THE VARIABLE "x"
del x
print(x)
```

```
Python3
NameError: name 'x' is not defined
```

## Data Type
Data type a variable can store in Python can be categorized into three different types: numeric, string, and Boolean data type. Depending on the data type, Python can perform type-specific features that process the data, called *operation*. Those that can operate data are (1) operator, (2) function, and (3) method.

Although a function and a method will be introduced in a later chapter, knowing the key difference between these three will prevent getting confused about understanding concepts of programming language overall.

* **Operator**
  : a construct that can manipulate the value of operands, such as arithmetic operators. It operates simply by placing before, after, or between the operands.
* **Function**
  : a reusable piece of code that is called by name to operates. A function can be distinguished from an operator by parenthesis `()` at the suffix of the function's name; `function()`.
* **Method**
  : an object-exclusive function. Methods also have parenthesis `()` at the suffix of its name but are always bounded to an object; `object.method()`.

### Numeric Data Type
A numeric data type is widely used in Python for scientific purposes such as plotting, processing, and on the field of modeling neural networks in artificial intelligence. Following are the list of numeric data types:

| KEYWORD   | DATA TYPE             | DESCRIPTION                                                                        |
|-----------|-----------------------|------------------------------------------------------------------------------------|
| `int`     | Integer               | 32-bits precision integer number.<br />Size: unlimited (max. 400 bytes)            |
| `float`   | Floating point number | Real number with decimal points.<br />Size: unlimited (max. 400 bytes)             |
| `complex` | Complex number        | Contains floating real and imaginary number.<br />Size: unlimited (max. 400 bytes) |

The byte size of a numeric data type is greater than any other language. This is just a maximum byte size numeric data type can have and it can be much smaller depending on what the number is. This flexibility of the byte size makes Python doesn't require a data type declaration.

Data type `float` is one of the commonly used numeric data types as it's the smallest data type that can express the fraction besides `complex`. The `float` data type has the following properties:

* Extra zeros (besides right behind the decimal point) at end of the number are ignored.
* Calculation returns `float` data type automatically when…
  * Arithmetic operation involving even one single `float`.
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

Arithmetic operation of a numeric data type is as follows:

| NAME                           | OPERATOR | DESCRIPTION                                                                                                                       |
|--------------------------------|:--------:|-----------------------------------------------------------------------------------------------------------------------------------|
| Addition                       | `+`      | -                                                                                                                                 |
| Subtraction                    | `-`      | Python doesn't have a subtraction. Negative sign substitutes subtraction, as adding negative value is equal to subtracting value. |
| Multiplication                 | `*`      | -                                                                                                                                 |
| Exponential                    | `**`     | -                                                                                                                                 |
| Division                       | `/`      | When divided, the value implicitly (or automatically) converts to `float`.                                                        |
| Quotient (aka. floor division) | `//`     | Outputs a quotient of division only, without a remainder.                                                                         |
| Remainder                      | `%`      | Outputs a remainder of the division.                                                                                              |

For easier readability of the arithmetic operation, you can place blank spaces between number and operator as it does not affect its output.

Additional operations are available from built-in functions and methods exclusive to a numeric data type. Most of the operations below require an iterable object called *list* which will be introduced later.

| FUNCTION  | EXAMPLE             | DESCRIPTION                                                                    |
|-----------|---------------------|--------------------------------------------------------------------------------|
| `abs()`   | `abs(-21)`          | Find out absolute value of the number.                                         |
| `round()` | `round(164.2597,2)` | Rounds up the number to one's digit on default, or to a fraction digit behind. |
| `max()`   | `max([0,1,2,3,4])`  | Find the maximum number inside.                                                |
| `sum()`   | `sum([0,1,2,3,4])`  | Sum all the numbers in the list.                                               |

```python
# EXAMPLE OF "round()" FUNCTION
print(round(164.259763145))
print(round(164.259763145,2))
```

```
164
164.26
```

Assignment operators are a combination of an arithmetic and an assignment symbol `=`, making numerical calculation code to be written more concisely.

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
A boolean data type is useful for a code that requires logical conditioning whether the statement is true or false:

| VALUE          | NAME            | DESCRIPTION                   |
|----------------|-----------------|-------------------------------|
| `True` or `1`  | Logically true  | Returned when logic is true.  |
| `False` or `0` | Logically false | Returned when logic is false. |

Any non-zero positive number can represent the Boolean value of `True`. In other words, the Boolean value of `2` or `3` is also equivalent to `True` while `False` is only represented by the number `0`.

A comparison operator is used to compare the relation of two or more values, returning corresponding Boolean data type depending on whether the condition holds or not. 

| OPERATOR | DESCRIPTION              |
|----------|--------------------------|
| `<`      | Lesser than              |
| `<=`     | Lesser than or equal to  |
| `>`      | Greater than             |
| `>=`     | Greater than or equal to |
| `==`     | Equal to                 |
| `!=`     | Not equal to             |

Meanwhile, the Boolean data type can be added, multiplied, and complemented as follows:

| OPERATOR | NAME           | DESCRIPTION                                             |
|:--------:|----------------|---------------------------------------------------------|
| `is`     | Equivalence    | Boolean evaluator between two data: equivalent to `==`. |
| `and`    | Multiplication | True when all the arguments are True, else False.       |
| `or`     | Addition       | True when at least one argument is True, else False.    |
| `not`    | Complement     | Change True to False and vice versa.                    |

### String Data Type
A string data type is a text-based data which can be distinguished by a pair of single quotation mark `''` or double quotation mark `""`. Variable or data that is a string data type is commonly called *string object*.

Although placing the quotation mark inside a string object can cause broken string data, placing a backslash `\` before the quotation mark can escape from the premature end of the string.

```python
# COMPARISON BETWEEN IMPROPER AND PROPER WAY OF TYPING STRINGS.
print('Where's my "Cat in the Hat" book?')
print('Where\'s my "Cat in the Hat" book?')
```

```
Where
Where's my "Cat in the Hat" book?
```

Create a string with three sets of quotes (either single or double) can create a multi-line string object; this allows changing line just by pressing Enter/Return on keyboard. Otherwise, the developer needs to insert `\n` code manually.

```python
# PRINTING AND WRITING MULTIPLE LINES WITH MULTI-LINE STRING OBJECT.
print("Thank you!\nYou're welcome.")
print("""Thank you!
You're welcome.""")
```

```
Thank you!
You're welcome.
Thank you!
You're welcome.
```

String objects in Python can be added and multiplied like a number data type:

| OPERATOR | NAME           | DESCRIPTION                                                         |
|:--------:|----------------|---------------------------------------------------------------------|
| `+`      | Concatenation  | Merge two different strings to one (type of quote doesn't matter).  |
| `*`      | Multiplication | Multiply the string by the number of integer (float does not work). |

```python
print("Pyt" + 'hon3')
print(4 * "2")
```

```
Python3
2222
```

Strings are "objects"; an independent individual of variable and function merged as a single data. Therefore, strings have its unique operations that have not been introduced in the previous two data types:

| METHOD         | EXAMPLE                  | DESCRIPTION                                                                                                                                                                                                               |
|----------------|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `format()`     | `str.format(data)`       | Insert string or non-string `data` type to a designated space via location or name designated by `{}`.         |
| `join()`       | `str.join(str_lst)`      | Joins a list of string objects `str_lst` by placing string object `str` in-between.                   |
| `split()`      | `str.split()`      | Convert a string `str` to a list by separating based on blank spaces if there's no argument in the method.<br /><br />*[OPTIONAL: In case there's an argument `str1`, the string object `str` is separated based on `str1`.]* |
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
Escape character `\` is used to escape from a sequence of characters and execute certain operations within text-based data. On the introduction on string data type, `\'` is used to prevent strings from premature ending.

| SYNTAX | DESCRIPTION    |
|--------|----------------|
| `\n`   | New line       |
| `\t`   | Horizontal tab |
| `\\`   | Backslash      |
| `\b`   | Backspace      |
| `\'`   | Single quote   |
| `\"`   | Double quote   |

Not just to escape from string and to perform operations, escape character is also used to code a single long line of code into short consecutive multi-line code.

## `None` Keyword
Data with no value regardless of a data type. Although `None` can be used as `False` in Boolean logic conditioning, `None` and `False` are completely different even in the Boolean concept.

```python
# CONDITIONAL CHECK: can None be deemed as False in Boolean?
if not(None and True):
    print(None)
```

```
None                    # This proves that None can be used as False in Boolean.
```

# **PYTHON: CONDITIONAL AND LOOP**
Conditional and loop statements are commonly used and are essential pieces of code in programming. This chapter introduces a list of conditional and loop statements in Python programming.
    
## Indentation
An indentation is used to delimit (mark the limits or boundaries) code block that belongs to certain statements such as conditional and loop statements. Indentations are inserted on the section of code after the colon `:`.

Beware as placement of indentation can change the script entirely.

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
Conditional `if` statement runs code if the condition holds. When the condition evaluates `True`, the statements are carried out but otherwise ignored.

```python
if condition:
    statements
```

### `else` Statement
Conditional `else` statement cannot be used alone and must be followed by `if` statement. The statement contains code that will be executed when the condition evaluates `False`.

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
Conditional `elif` statement is a combination of `else` and `if` statement; when the first condition evaluates `false`, the `elif` statement gives new condition to evaluate, different from the previous one. 

```python
if condition1: 
    statements
elif condition2:
    statements
else:
    statements
```

However, this statement is different from the chain of `else`-`if` conditional statement as that is a combination of two different conditional sets, while `elif` statement guarantees a single conditional set.

### Ternary Operator
A conditional statement can be expressed simply using ternary operator as shown below:

```python
True_return if condition else False_return
```

The vocabulary *ternary* represents the statement that takes three arguments. The ternary operator should not be overused as it reduces readability, but useful on variable assignment.

## `while` Loop
The `while` loop statement repeatedly executes statements inside (aka. iterate) as long as the condition holds. The loop ends once the condition evaluates `False`.

```python
while condition:
    statements
```

The `else` statement may follow after a `while` loop statement, which will be executed when the loop statement has successfully finished its iteration (by conditional mean).

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
The `break` statement is used to end a loop prematurely. When encountered inside a loop, the `break` statement escapes from the current loop but does not escape from the nesting loop.

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
The `continue` statement skips the rest of the code below in the loop and jumps back to the conditioning part. The statement maintains the iteration rather than escaping the loop like a `break` statement.

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
The `for` loop statements repeatedly execute statements inside (aka. iterate) as long as it is in the valid range. The loop ends once all the values in the range are iterated.

```python
for index in iterable:
    statements
```

Here, a local variable `index` obtains value from `iterable` object and executes statements one-by-one until running all the values inside. The objects that can be used in place of `iterable` are as follows.

1. range object: contains pattern of number in sequence (refer to *PYTHON: ITERABLE OBJECT § Range*)
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

Just like the `while` loop statement, `break` and `continue` can be used in `for` loop as well since it is the same loop-iterating statement.

The `else` statement may follow after a `for` loop statement, which will be executed when the loop statement has successfully finished its iteration (by running out of range).

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

## Exception
An exception is an inexecutable code error due to incorrect coding or input, halting the program immediately. Here are some statements that can be used to handle the script errors.

### `try`/`except` Statement
The `try`/`except` statement pair is used to handle exceptions and call certain statements corresponding to an exception occurred. There are additional statements that can be used together with the pair:

| KEYWORD   | DESCRIPTION                                                                                                 |
|-----------|-------------------------------------------------------------------------------------------------------------|
| `try`     | A block of code to be checked for exception.                                                                |
| `except`  | A code to be executed when certain exception occurs.                                                        |
| `else`    | [OPTIONAL: A code to be executed when the code has passed with no error (exception) occurred.]              |
| `finally` | [OPTIONAL: A block of code executed no matter what exception has occurred, and even when there's no error.] |

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

Even after the `try`/`except` statement is executed, the program does not stop and continues onward.

### `raise` Statement
The `raise` statement is used to manually raise exception intentionally. As the statement raises an error, it also stops the runtime immediately, preventing further program execution.


```python
# EXPLICITLY RAISE EXCEPTION: can be used alone, even inside an 'except' code above.
raise

# PROVIDE DETAIL DESCRIPTION ON EXPLICITLY RAISED EXCEPTION
raise exception_description
```

### `assert` Statement
The `assert` statement checks expressions for validity (aka. assertion). When the tested expression is valid with no problem, assertion returns `True`; when an exception is raised, assertion returns `False`.

```python
print(0)
assert TRUE_expression
print(1)
assert FALSE_expression,"exception_type"
print(2)
```

```
0
1
AssertionError: exception_type
```

## `pass` Statement
The `pass` statement is a null operation that does nothing when executed. It can be used as a temporary statement to prevent an exception occurred from running an empty code.

# **PYTHON: ITERABLE OBJECT**
Not just its simplicity that makes Python language useful, its iterable object is powerful and flexible than any other programming language can provide. Python has four iterable objects that have slightly different properties.

## Iterable Object
An iterable object is used to store the collection of data and is defined as an object that has an `__iter__` method (Python3) which returns the iterator object. An iterator is an object which automatically calls the next element of data, thus iterating every data within the iterable object in order.

One of the special features of iterable objects is it can access and modify stored data using a bracket `[]`. String object introduced in *PYTHON: BASIC § String Data Type* is also an iterable object.

```python
variable = "Hello World!" 
print(variable[1])
```

```
e
```

### Iterable Slicing
Slicing is one of the powerful features Python has an advantage over other programming languages on handling a group of data such as iterable objects. Slicing iterable can only extract the desired portion of the original.

| SYNTAX    | EXAMPLE                            |
|:---------:|------------------------------------|
| `[ : : ]` | `iterable[start : end : interval]` |

Slicing starts from `start` (inclusive) until `end` (exclusive) with interval of `interval`. All these arguments do not have to be filled to slice an iterable.

```python
variable = "Hello World!"
print(variable[2:8])    # >> OUTPUT: "llo Wo"

# SLICE FROM/UNTIL THE END OF THE LIST
print(variable[2: ])    # >> OUTPUT: "llo World!"
print(variable[ :8])    # >> OUTPUT: "Hello Wo"

# SLICE WITH SKIPPING SOME ELEMENTS WITH INTERVAL
print(variable[ : :2])    # >> OUTPUT: "HloWrd"
print(vairalbe[2:8:2])    # >> OUTPUT: "oW"

# REVERSE INTERVAL
print(variable[8:2:-1])    # >> OUTPUT: "roW ol"
```

## Range
Range iterable object stores a number in a sequenced pattern by specifying the starting number (inclusive), ending number (exclusive), and sequencing interval. Range object is created using the `range()` function:

| FUNCTION  | EXAMPLE                      | DESCRIPTION                                                                                                                                                                                                                                                          |
|-----------|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `range()` | `range(start,end,interval)` | Creates a range object that numbering from `start` (inclusive) until `end` (exclusive) with interval of `interval`. |

```python
rng = range(3, 10, 2)

rng[0]        # >> OUTPUT: 3
rng[1]        # >> OUTPUT: 5
rng[2]        # >> OUTPUT: 7
rng[3]        # >> OUTPUT: 9
```

## List
List iterable object stores item in sequence with index, irrelevant to a data type. Assigning a value to a list is done using a bracket ` []` with values separated by commas in order. The bracket is also used to call an element at index location.

```python
lst = [value1, value2, value3, value4, ... ]

print(lst)            # >> OUTPUT: [value1, value2, value3, value4, ... ]
print(lst[0])        # >> OUTPUT: value1
```

It is possible to change the existing value by reassigning individual elements. Calling the element that is outside the range of a list is not possible and will result in an error.

```python
lst = [value1, value2, value3]

lst[1] = value4        # >> RESULT: lst = [value1, value4, value3]
lst[3] = value5        # IndexError: list assignment index out of range
```

A list can be created programmatically if the elements follow a specific pattern. This is called **list comprehension** and requires `for` loop with optional `if` conditional statement.

| SYNTAX          | EXAMPLE                                          |
|-----------------|--------------------------------------------------|
| `[ for in if ]` | `lst[element for index in iterable if condtion]` |

This creates a list containing `element` data based on variable `index` from `iterable` object as long as `condition` holds; `if` statement in comprehension is optional.

```python
lst = [i**2 for i in range(5)]
lst = [i**2 for i in range(5) if (i**2) % 2 == 0]
```

```
[0, 1, 4, 9, 16]
[0, 4, 16]
```

### List Operation
A list can be added and multiplied, with operations exclusive to iterable objects. Operations below are not restricted to a list alone but can be applied to other iterable objects introduced later.

| OPERATOR | NAME           | DESCRIPTION                                                         |
|----------|----------------|---------------------------------------------------------------------|
| `+`      | Addition       | Merge two or more different lists to a single list.                 |
| `*`      | Multiplication | Multiply the string by the number of integer (float does not work). |
| `in`     | Included       | Check if an item is in a list.                                      |

```python
lst = [value1, value2, value3]

# + OPERATOR
print(lst + [value3, value4])     # >> OUTPUT: [value1, value2, value3, value3, value4]

# * OPERATOR
print(lst * 2)                       # >> OUTPUT: [value1, value2, value3, value1, value2, value3]

# in OPERATOR
print(value1 in lst)               # >> OUTPUT: True
print(value2 not in lst)        # >> OUTPUT: False
```

The following are functions that do certain features to and for a list (or more like iterable) object.

| FUNCTION      | EXAMPLE                             | DESCRIPTION                                                                                                         |
|---------------|-------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| `len()`       | `len(lst)`                          | Find the length of the `lst` list by counting elements.                                                             |
| `all()`       | `all([condition for index in lst])` | Return `True` when all elements inside the `lst` list meets `condition`.                                            |
| `any()`       | `any([condition for index in lst])` | Return `True` when any element inside the `lst` list meets `condition`.                                             |
| `enumerate()` | `enumerate(lst)`                    | Iterates elements inside the `lst` list with sequencing.                                                            |
| `list()`      | `list(iterable)`                    | Convert an `iterable` object (such as string and range) to a list; creates an empty list if `iterable` is not presented. |

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
    print(var)                                 # >> OUTPUT: (0,10)
                                                # >>         (1,9)
                                                # >>         (2,8)
                                                # >>         (3,7)
                                                # >>         (4,6)
```

Since lists are (iterable) objects, it also has methods it can use to perform certain features:

| METHOD     | EXAMPLE                    | DESCRIPTION                                                |
|------------|----------------------------|------------------------------------------------------------|
| `append()` | `lst.append(value)`        | Add `value` at the end of the `lst` list.                  |
| `insert()` | `lst.insert(index, value)` | Add `value` at `index` element location of the `lst` list. |
| `index()`  | `lst.index(value)`         | Return the smallest index number of `value`.           |

## Tuple
Tuple iterable object is used to store item in order just like a list, but cannot change the value after initialization. This property of an iterable object is called immutable (opp. mutable). Tuple uses parentheses `()` or even without any to distinguish itself from other iterable.

```python
tpl = (value1, value2, value3)
print(tpl)            # >> OUTPUT: (value1, value2, value3)
print(tpl[0])        # >> OUTPUT: value1

# ALTERNATIVE: tuple without parentheses
tpl = value1, value2, value3
print(tpl)            # >> OUTPUT: (value1, value2, value3)
print(tpl[0])        # >> OUTPUT: value1
```

Because tuple is a constant version of a list, the data inside cannot be changed. The error will occur when such an effort is made.

```python
tpl = (value1, value2, value3)
tpl[1] = value4
```

```
TypeError: 'tuple' object does not support item assignment
```

Tuple operation can be referred from the table of operations, functions, and methods in *PYTHON: ITERABLE OBJECT § List Operation* subsection.


### Unpacking Tuple
Unpacking tuple means assigning individual elements in the tuple to variables or other tuples. Placing asterisk `*` on the prefix of a variable would return multiple leftover elements as a list object. This will be explained in *PYTHON: FUNCTIONAL PROGRAMMING § Parameters & Arguments* subsection.

```python
variable1, variable2, *variable3, variable3 = [value1, value2, value3, value4, value5]

print(variable1)        # >> OUTPUT: value1
print(variable2)        # >> OUTPUT: value2
print(variable3)        # >> OUTPUT: [value3, value4]
print(variable3)        # >> OUTPUT: value5
```

## Dictionary
Dictionary is an iterable object that has indexing `key` data and `value` data paired as a single element. Dictionary does not call value by integer index but through `key`. Dictionary uses curly bracket `{}` to distinguish itself from other iterable.

```python
dictionary = {key1: value1, key2: value2, key3: value3}

print(dictionary[key1])        # >> OUTPUT: value1
print(dictionary[key2])        # >> OUTPUT: value2
print(dictionary[key4])        # KeyError: key4
```

Mutable objects such as list and tuple object cannot be used as `key` of the element. However, mutable objects can still be used as a `value` of the element.

```python
dictionary = {lst1: value1, key2: value2}
```

```
TypeError: unhashable type: 'list'
```

It is possible to change the existing `value` of the `key` within a dictionary. Unlike list objects, creating new `key` data and assigning its `value` is also possible without needing any help from a method.

```python
dictionary = {key1: value1, key2: value2, key3: value3}
dictionary[key1] = value4
dictionary[key5] = value5
```

```
{key1: value1, key2: value2, key3: value3, key5: value5}
```

Operations for a dictionary is the same as other iterable objects but have slight differences:

| OPERATOR | NAME                     | DESCRIPTION                                                                |
|----------|--------------------------|----------------------------------------------------------------------------|
| `+`      | Addition                 | Merge two or more different lists to a single list.                        |
| `*`      | Multiplication           | Multiply the string by the number of integer (float does not work).        |
| `in`     | Included (key exclusive) | Check if the key is in a dictionary. However, it does not check the value. |

```python
dictionary = {key1: value1, key2: value2}

print(key1 in dictionary )            # >> OUTPUT: True
print(value2 in dictionary )        # >> OUTPUT: False
print(key3 not in dictionary )        # >> OUTPUT: True
```

Dictionary has its unique functions and methods to execute certain features exclusive for dictionaries:

| OPERATION | EXAMPLE                             | DESCRIPTION                                                                                                        |
|-----------|-------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| `get()`   | `dictionary.get(key,[description])` | Find the key and get its value; additional description can be added when the key is not found (`None` by default). |
| `dict()`  | `dictionary=dict()`                 | Can be used to create an empty dictionary.                                                                                       |

```python
dictionary = {key1: value1, key2: value2}

print(dictionary.get(key0))                            # >> OUTPUT: value1
print(dictionary.get(key2))                            # >> OUTPUT: None
print(dictionary.get(key3, "not in dictionary"))      # >> OUTPUT: not in dictionary
```

## Set
Set is an iterable object that guarantees uniqueness, meaning it does not allow duplicate elements within the object. Just like a dictionary object, set uses curly bracket `{}` to assign values but without `key`-`value` pair. Due to the reasons above, set objects are much faster to check the elements than lists.

```python
st = {value1, value2, value3}
print(st)
```

```
{value1, value2, value3}
```

Set have mathematical operations available which works exactly like a set in mathematics.

| OPERATION | NAME                 | DESCRIPTION                                                     |
|-----------|----------------------|-----------------------------------------------------------------|
| `|`       | Union                | Returns a combined set of two sets.               |
| `&`       | Intersection         | Returns set of data that only exist in both sets.                     |
| `-`       | Difference           | Returns data that only exist in subtrahend and not in minuend. |
| `^`       | Symmetric difference | Returns data exclusive to each set, but not on both sets.                |

```python
set1 = {1, 2, 3, 4, 5, 6}
set2 = {4, 5, 6, 7, 8, 9}

print(set1 | set2)        # >> OUTPUT: {1, 2, 3, 4, 5, 6, 7, 8, 9}

print(set1 & set2)        # >> OUTPUT: {4, 5, 6}

print(set1 - set2)        # >> OUTPUT: {1, 2, 3}
print(set2 - set1)        # >> OUTPUT: {7, 8, 9}

print(set1 ^ set2)        # >> OUTPUT: {1, 2, 3, 7, 8, 9}
```

Set have its unique functions to execute certain features exclusive for sets:

| FUNCTION | EXAMPLE         | DESCRIPTION                                                                                                              |
|----------|-----------------|--------------------------------------------------------------------------------------------------------------------------|
| `set()`  | `set(iterable)` | Function for creating a set: lists and tuples can be converted to a set with this function, except for dictionaries. |

The function above is necessary when creating an empty set, as `{}` creates an empty dictionary instead. Meanwhile, the methods used by set objects are as follows:

| METHOD     | EXAMPLE             | DESCRIPTION                                                 |
|------------|---------------------|-------------------------------------------------------------|
| `add()`    | `set.add(value)`    | Add `value` at the end of the set.                          |
| `remove()` | `set.remove(value)` | Remove `value` in the set.                                  |
| `pop()`    | `set.pop()`         | Randomly selected element is popped (removed) from the set. |

```python
st = set([value1, value2, value3, value1])
print(st)                # >> OUTPUT: {value1, value2, value3}

set0.add(value4)
set0.remove(value1)
print(st)                # >> OUTPUT: {value2, value3, value4}

print(st.pop())            # >> OUTPUT: value2 (randomly popped)
print(st)                # >> OUTPUT: {value3, value4}
```

## Generator
A generator is an iterable object that can be created by developers using `yield` and `for` loop statement. The generator is especially useful due to its absence of memory restrictions, allowing generators to yield an infinite number of data.

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
A keyword used to create a generator; the keyword returns the value when iterated by `for` loop statement.

# **PYTHON: FUNCTIONAL PROGRAMMING**
Functional programming is a style of program scripting that is based mostly around usage of the functions. This chapter will be introducing the guide on how to create and use function in Python for functional programming.

## Function
A function is an independent block of code that can process the data and present newly processed data once it's called, allowing dynamic program scripting. Functions can be distinguished by parenthesis after its name; `function()`.

The programming based around uses of custom functions is called *functional programming*.

```python
x = [0, 3, 5, 9]
print(len(x))
# Using "print()" function, and "len( )" function that returns the length of list object.
```

```
4
```

Although function acts quite different from variables, they can be treated just the same when assigned to a variable.

```python
# ORIGINAL FUNCTION
function(arg1, arg2)

# ASSIGNING AND EXECUTING FUNCTION VIA VARIABLE
variable = function
print(variable(arg1, arg2))
```

Not only can it be assigned to a variable, but function can also be passed as parameters of other functions. Therefore, developers can create new functions using other existing functions.

### Pure Function
A function that returns a value that depends only on their arguments without any side effects.

As for an example, cosine function `cos(x)` that only has a single parameter `x` returns the value which depends only on the argument `x`; hence, the cosine function is considered as a pure function.

```python
# FUNCTION WITH x AND y PARAMETER.
def function(x,y):
    variable = 2 * x
    vairable += y
    return variable            # RETURN DEPENDS ONLY ON x AND y PARAMETER.
```

### Higher-Order Function
A function that takes other functions as parameters or returns functions as a result.

## `def` Keyword
The `def` keyword is used to create a custom function. Calling a custom function before implementation will raise an exception. Since Python executes sequentially, it is considered calling non-existing function.

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
The `return` statement is a function-exclusive statement that returns the value processed in the function. Once a return statement is executed, the function ends immediately despite the remaining codes.

Functions do not need to have a `return` statement, which will return `None` when passed to variables.

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
Following is a difference between parameter and argument, which will be mentioned significantly when discussing function:

**Parameter**
Parameters are local variables located inside a function. Because parameters are exclusive inside the function code block, these cannot be called from outside.

**Argument**
Arguments are values or objects passed to the function parameter.

| OPERATOR | SYNTAX      | DESCRIPTION                                                                                                                                                                   |
|:--------:|:-----------:|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `*`      | `*args`     | Allows multiple number of arguments.<br />Call by `args`(arguments) without asterisk, and returns tuple of arguments. Must locate after normal parameter.                     |
| `**`     | `**kwargs`  | Allows use of undefined parameter in advance.<br />Call by `kwargs`(keyword arguments) without asterisks, and returns a dictionary of arguments' name and corresponding values. |
| `=`      | `arg=value` | Passes default value to parameter unless argument value is specified. Must locate after normal parameter.                                                                     |

Examples below show how function parameters and arguments work:

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
Also known as **Lambda function (express)**, is an unnamed function without declaration (thus, anonymous) and does not store data, returning value only from a single expression. An anonymous function is generally used as a single-use function, or as an argument of higher-order function's parameter.

| SYNTAX                                                       |
| ------------------------------------------------------------ |
| `lambda param0, param1 ∶ expression`                         |
| The main body of an anonymous function, consisting of parameters and its return expression. |

Although an anonymous function is a function without a name for a single-use, it can be assigned to variables and called when the function is needed. The anonymous function of the example from *PYTHON: FUNCTIONAL PROGRAMMING § Pure Function* can be expressed as follows:

```python
# NAMED FUNCTION
def function(x, y):
    return 2 * x + y

# ANONYMOUS FUNCTION
(lambda x, y: 2 * x + y)(2, 3)

# ANONYMOUS FUNCTION ASSIGNED TO VARIABLE
variable = lambda x, y: 2 * x + y
variable(2,3)
```

```
7
```

## Map Function
A built-in function that takes iterable objects and a function with parameters as arguments. Map function returns a list object consisting of values returned from the function with iterable objects passed as its arguments.

| SYNTAX                                                       |
| ------------------------------------------------------------ |
| `map(function, iterable1, iterable2, ...)`                   |
| In higher-order `map` function, iterable object `iterable1` and `iterable2` are passed as argument for `function`. |

Conversion to an iterable object, such as `list()` function is necessary to avoid an exception such as "SyntaxError".

```python 
lst1 = [1, 2, 3, 4, 5]
lst2 = [0, 9, 8, 7, 6, 5]

variable1 = map(lambda x, y: x ** 2 + y, lst1, lst2)
variable2 = map(lambda y, x: x ** 2 + y, lst2, lst1)

print(list(variable1))
print(list(variable2))
```

```
[1, 13, 17, 23, 31]
[1, 83, 67, 53, 41]
```

## Filter Function
A built-in function that takes an iterable object and Boolean conditioning function (aka. predicate) as arguments and returns an iterable object containing only with the data that passed the predicate.

| SYNTAX                                                                                               |
|------------------------------------------------------------------------------------------------------|
| `filter(predicate, iterable)`                                                                        |
| In higher-order `filter` function, iterable object `iterable` is passed as argument for `predicate`. |

Conversion to an iterable object, such as `list()` function is necessary to avoid an exception such as "SyntaxError".

```python
lst = [1, 2, 3, 4, 5]

variable = filter(lambda x: x % 2 is 0, lst)

print(list(variable))
```

```
[2, 4]
```

## Recursive Function
A recursive function is a function that calls itself (recursion). Factorial $!$ in mathematic is the best example of recursive function implementation.

```python
# EXAMPLE: FACTORIAL "!"
def factorial( x ):
    # BASE CASE: a case when to escape from the recursion.
    if x == 1: 
        return 1
    else:
        return x * factorial(x-1)

print( factorial(5) )
```

```
120
```

Recursion can occur indirectly by multiple functions calling one to another, then back to the beginning.

### Base Case
A case of recursion which doesn't involve referring to itself anymore. It can be deemed as an exit condition. Without a base case, recursion results infinitely and thus crash due to memory shortage:

```
RuntimeError: maximum recursion depth exceeded
```

## Decorator
A decorator is a function that modifies the original function's functionality and returns the modified "function" itself (rather than returning a value). Hence, assignment to a variable is needed for a function to properly work after processing through the decorator. Its function will then have the same name as the variable.

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

The decorator above has decorated (modified) `function()` and assigned the decorated function to a variable `variable` and `function`, where the latter maintains the function name.

When passing function as a parameter of a decorator, no parenthesis are needed like `function()`. This is because the former passes function itself and the latter passes returned value from the function.

### `@` Symbol
A decorator symbol `@` used for pre-pending the function definition, placed before pre-decorated function.

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

Additionally, more than one decorator can be applied to a single pre-decorated function.

```python
@decorator1
@decorator2
def function():
    statements
```

A decorator located closest to the pre-decorated function will be applied firsthand. Thus, the function object `function()` will first be decorated by `@decorator2`  then `@decorator1` sequentially.


# **PYTHON: OBJECT-ORIENTED PROGRAMMING**
The previous chapter has explained and dealt with procedural and functional programming. The third scripting method, object-oriented programming (abbrev. OOP) is based around the usage of classes and objects instead of functions.

## Object
Previously, variables (which can store data) and functions (which can process data) were introduced. Object (aka. instance) is a block of data that encapsulates these variables and functions into a single identity.

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
Encapsulation is the core concept in an object with the following characteristics.

1. Combines variables and functions into a single object.
2. Restrict direct access to these variables and functions to prevent accidental modification from external code. 

### Attribute & Method
The variables and function encapsulated to the object are called differently:

* **Attribute** is an object-dependent variable, accessed by `object.attribute` format.
* **Method** is an object-dependent function, accessed by `object.method()` format.

## Class
A class is used to create objects (aka. instance). Classes are defined using keyword `class` while variables and functions inside the class become attributes and methods for the object.

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
The `self` variable is a conventional name to indicate an instance itself. Placing `self` on variables or functions bounds them to an object, thus declares as attributes and methods. These attributes and methods can be accessed only from the instance.

Variables and functions without `self` are local variables and functions inside the instance and are not accessible. Attempting to do so results "AttributeError".

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
Class.__init__(self = instance, arg1 = 1, arg2 = 2, arg3 = 3)
'''

# THEREFORE...
instance.attr1        # >> OUTPUT: 1
instance.attr2        # >> OUTPUT: None
instance.attr3        # AttributeError: 'CLASS' object has no attribute 'C'
```

### `__init__` Method
The `__init__` method is the most important method needed to create an instance. As the name implies (an abbreviation of *initialization*), this method is automatically called when creating an object from the class and is responsible for defining the number of arguments needed on instance initialization.

## Instance Attribute/Method
Every attribute and method that are declared normally within the class with `self` for self-indication are called instance attribute and methods.

No special syntax is required to declare instance methods. However, instance attributes cannot be defined outside instance methods where the `self` variable is invalid. Variables declared outside the method becomes class attribute instead.

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
Class attributes and methods can be accessed both from instance and class without any instantiation. Class attributes are declared without under class definition, indented along with methods. `self` variable is not used.

Class methods are a method which can be accessed through class alone without needing to create an instance.

|     SYNTAX     | DESCRIPTION                              |
| :------------: | ---------------------------------------- |
| `@classmethod` | Decorator used to declare class methods. |

Though class methods are defined using the decorator above, the method also requires a parameter to indicate the class itself (just like instance method has `self` parameter to mention instance itself), conventionally written as `cls`.

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
    def method3(cls, x, y):
        return cls(x**2, y**2)
    
    
# INSTANTIATION
instance1 = CLASS(1, 2)
instance1.method1(4)

instance2 = CLASS.method3(1, 2)    # INSTANTIATE: arg1 = 1**1, arg2 = 2**2
instance2.method1(4)

# THEREFORE...
CLASS.attribute            # >> OUTPUT: value
CLASS.method2(3)        # >> OUTPUT: 3

instance1.attribute         # >> OUTPUT: value
instance1.attr1            # >> OUTPUT: 1
instance1.attr2            # >> OUTPUT: 2
instance1.attr3            # >> OUTPUT: 4

instance2.attribute         # >> OUTPUT: value
instance2.attr1            # >> OUTPUT: 1 (= 1**2)
instance2.attr2            # >> OUTPUT: 4 (= 2**2)
instance2.attr3            # >> OUTPUT: 4
```

## Static Method
Static methods are a method that can be called without instantiation, but without parameter to call itself like `self` and `cls`.

| SYNTAX          | DESCRIPTION                               |
| --------------- | ----------------------------------------- |
| `@staticmethod` | Decorator used to declare static methods. |

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
A magic method is a special method that has Double UNDERscores(dunder) on both sides of its name. These methods generally represent operators and are used to overload operators to modify their functionality. 

The `__init__` method used for instance initialization is one of the widely used magic methods. More can be seen on the table below:

| OPERATOR | NAME           | MAGIC METHOD               |
|----------|----------------|----------------------------|
| `+`      | Addition       | `__add__(self, other)`     |
| `-`      | Subtraction    | `__sub__(self, other)`     |
| `*`      | Multiplication | `__mul__(self, other)`     |
| `/`      | Division       | `__truediv__(self, other)` |
| `&`      | AND            | `__and__(self, other)`     |
| `^`      | XOR            | `__xor__(self, other)`     |
| `|`      | OR             | `__or__(self, other)`      |

### Operator Overloading
Overloading operators means customizing operators to function differently on certain classes or portions of the script. Magic methods are used to overload operators but overloaded functionality is only exclusive to that specific class. As an example, `x + y`  is expressed as `x.__add__(y)` .

```python
# CREATING CLASS
class CLASS:
    def __init__(self, arg1):
        self.A = arg1
        
    def __add__(self, arg2):
        return "\0".join([self.A, arg2.A])        # INSERT "\0" BETWEEN TWO STRING OBJECTS.

# INSTANTIATION
instance1 = CLASS("Hello")
instance2 = CLASS("World!")

instance1 + instance2        # >> OUTPUT: "Hello World!"
```

## Inheritance
Inheritance is an act of superclass (base class) providing attributes and methods to derived subclass (child class). When the same name of attributes and methods exists in both superclass and subclass, the superclass is overridden by the subclass.

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
A `super()` function is used to access the superclass attributes and methods directly. This function is mainly used to avoid overriding superclass attributes and methods.

```python
# CREATING SUPERCLASS
class SUPERCLASS:
    def __init__(self, arg1):
        print("Hello World!")
        self.attr = arg1

# CREATING SUBCLASS
class SUBCLASS(SUPERCLASS):
    def __init__(self, arg2):
        print("Goodbye World?")


# INSTANTIATION
instance = SUBCLASS(3)

# THEREFORE...
print(instance.attr)
```

```
"Goodbye World?"
AttributeError: 'SUBCLASS' object has no attribute 'attribute'
```

The `__init__()` method in `SUPERCLASS` would have been overridden by `SUBCLASS` since both methods share the same name. This is the reason `print(Hello World")` did not appear and `self.attribute` cause an exception despite inheritance.

On the other hand, when using a super function to called the `__init__()` method directly from the `SUPERCLASS`

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
Previously on *Encapsulation* subsection mentioned creating an object provides restriction on accessing attributes and methods, called *Data Hiding*. In Python, however, data hiding is not guaranteed and can be accessed easily from the code outside the class.

Still, manual approach such as name mangling is possible to prevent access to attributes and methods of the class:

| SYMBOL | EXAMPLE       | DESCRIPTION                                                                                                                                            |
|:------:|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `_`    | `_attribute`  | Though not a name mangling, it can prevent accessing attributes and methods from being passed via module import but not from codes outside the class.  |
| `__`   | `__attribute` | Name mangling: this prevents accessing attributes and methods from being passed via module import and codes outside the class, thus becomes "private". |

### Properties
Property is a decorator that supports data hiding by dividing a method into `getter`, `setter`, and `deleter` method. Because properties are declared using a decorator, it can only be used on method.

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
        return self.attr1
    
    # DEFINITION: SETTER METHOD
    @method.setter
    def method(self, arg3):
        self.attr1 = arg3
    
    # DEFINITION: DELETER METHOD
    @method.deleter
    def method(self):
        del self.attr1
        
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

Separating method using property encapsulate sensitive code that shouldn't be modified by the user (such as `setter` and `deleter` method) while providing constant access to the method via `getter` method despite any changes were made on `setter` and `deleter`.

Although the `getter` method is essential in property, the `setter` and `deleter` are optional; using the `getter` method alone would make an unmodifiable read-only method.

# **PYTHON: PYTHONICNESS**
As learning to understand how the Python is used on programming, there is a Python's unique style of programming recommended for Python developers to implement as possible.

## Zen of Python
A set of principle guides when coding Python, provided within Python itself. Accessible via example below.

```python
import this
```

## Python Enhancement Proposals
Eight scripting style guides for Python suggested by experienced Python developers, aka. **PEP8**.
1.    Module should have short, all-lowercase name.
2.    Class name should be in the CapWords style.
3.    Most variables and function names should be lowercase_with_underscores.
4.    Constants (variables that never change value) should be CAPS_WITH_UNDERSCORES.
5.    Names that would clash with Python keywords (such as 'class' or 'if') should have a trailing underscore.
6.    Line shouldn't be longer than 80 characters.
7.    `from module import *` should be avoided.
8.    There should be only one statement per line.

## Entry Point
While program language such as C/C++ has a traditional entry point called `main()` which is the function where the program execution starts, Python does not have one.

Instead, Python uses special variable `__name__` which indicates the current Python script being executed. When this script is the main executing file, the `__name__` variable is assigned as `"__main__"` value.

```python
# ENTRY POINT
if __name__ == "__main__":
    statements
```

Codes and statements indented under this condition will not be executed when it is imported as a module to the other script. Beware, the `==` operator cannot be replaced by `is` operator.

# **PYTHON: FILE MANAGEMENT**
When using the Python in programmings such as scientific research purpose and artificial intelligence, the input data that needs to be computed cannot be stored through console command of the Python and may need to read through files if necessary.

## Opening Files
Before reading or manipulating files in Python, the file must be opened firsthand, using the `open()` function.

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

A `close()` method is used to close the currently opened file. Closing files are important to avoid wasting resources. Ensure files are always closed even on exception by using `try`/`except` or `with` statement.

```python
file = open("file.txt", "r")
file.close()
```

### `with` Statement
A `with` statement creates a temporary variable only available inside an indented code block of the statement. When the file is opened using `with` statement, the file automatically closes at the end of the code block even if an exception occurs.

```python
with open("file.txt") as file:
    statements
```

### Context Manager
Context manager is an interface that allows support of `with` statement. There are two methods available for setting object method and function as context manager: (1) using `__enter__()` & `__exit__()` method pair and (2) using `contextlib` module.

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

----

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

Returned attribute or yielded variable becomes the resource handled by the context manager. The implicitly determined resource makes `as` keyword unnecessary unless there is a need to alias the name.

```python
# INSTANTIATION
instance = CLASS()

with instance.method():
    # HANDLES "self.variable"
    statements
```

One of the actual implementation of this syntax can be found on chapter *TENSORFLOW: BASIC § TensorBoard* in [*PRGMING_TensorFlow*](./PRGMING_TensorFlow.md) document.

### Absolute & Relative Paths
Python has two different types of paths: absolute and relative path. When designating a file path, use double backslash `\\` since using a single backslash will escape string object and can cause unwanted operation.

```python
variable = open("path\\file.txt")
```

## Reading Files
After opening the text-based file, Python can read its content using `read()` method. The argument inside the method represents the number of bytes to read in the content.

Read method can be used on the same file over again, but it will continue from where Python last read. When there is no argument, the read method reads the rest of the text from where it last left off.

```python
with open("path\\file.txt") as file:
    print(file.read(16))    # READ 16 BYTES FROM THE START OF THE CONTENT.
    print(file.read(4))        # READ 4 BYTES FROM THE POINT AFTER PREVIOUS 16 BYTES.
    print(file.read())        # READ THE REST OF THE TEXT AFTER PREVIOUS 4 BYTES.
    print(file.read())        # READ NO TEXT AS NO MORE CONTENT TO READ.
```

The `read-lines()` method is used to return a list of text of each line. The method does accept an argument and works the same as a read method: it designates how many bytes to read.

Don't get confused with `Readline()` method which only reads the first line in a string.

```
<file.txt>
First line here.
Second line there.
Last line somewhere.
```

```python
with open("path\\file.txt") as file:
    print(file.readlines())
    print(file.readline())
```

```
['First line here.\n','Second line there.\n','Last line somewhere.']
First line here.
```

### Printing Line using Loop
Each line of text-base content can be retrieved using `for` loop statement:

```python
for file in variable:
    print(variable)
```

## Writing Files
In Python, a file can be created or (over)written using a `write()` method. There are two options developers can choose when writing: overwrite and append.

Suppose there is a file with text content written as follows:

```
<file.txt>
First line here.
Second line there.
Last line somewhere.
```

Overwrite mode `w` deletes all of previously existing content and write down fresh from the beginning.

```python
with open("path\\file.txt", "w") as file:
    file.write("TEXT OVERWRITTEN!")
```

```
<file.txt>
TEXT OVERWRITTEN!
```

On the other hand, append mode `a` does not delete existing content but continue writing from the end.

```python
with open("path\\file.txt", "a") as file:
    file = file.write("TEXT APPENDED.")
    print(file)
```

```
<file.txt>
First line here.
Second line there.
Last line somewhere.TEXT APPENDED.
```

Upon successfully written, `write()` method returns the number of bytes written.

### Creating Files
A new file can be created using the same `write()` method. Creating a file is simply done by designating a file name that does not exist in the specified path.

```python
with open("path\\new_file.txt", "w") as file:
    file.write("NEW FILE CREATED!")
```

```
<new_file.txt>
NEW FILE CREATED!
```

# **PYTHON: PACKAGE**
Python has a variety of packages that can be easily downloaded and used on-demand. This chapter describes what the package is and how to implement it to the script.

## Modules
A Python module is simply a Python source code file with `.py` extension. Developers may create their module containing classes or functions, and calling these codes from distributed Python files can be done using `import` keyword.

```python
import module
module.function()
```

The above approach still requires the name of the module to be mentioned every time when using its classes or functions. To ignore referring the name of modules, use the `from` keyword beforehand.

```python
from module import function1, function2
from module import function as name
```

However, without the name of modules when using the function, there is a potential conflict caused by function naming. Unless the function is named with guaranteed uniqueness, it is safe to use the previous approach to import modules.

## Package
A package is a directory that holds a collection of Python modules or sub-packages. Every package folder must have a special Python file called `__init__.py` which can be blank or contains directory path of current package to prevent directories error caused by a common name.

```python
import package.module
from package.module import function
```

## Python Package Index
Python Package Index (aka. PyPI) is an external module storage website (*https://pypi.python.org/pypi*). To download and install the modules and packages, a software called pip is necessary.

### PIP
The pip software is a package management system required to install and manage the Python package. Nowadays, pip comes installed by default with the modern distribution of Python. Developers can install pip separately online. Installation and management of packages are done using Command Prompt.

| NAME         | DESCRIPTION               | COMMAND                 |
|--------------|---------------------------|-------------------------|
| Installation | Install the package       | `pip install package`   |
| Remove       | Uninstall the package     | `pip uninstall package` |
| List         | Show the list of packages | `pip list`              |

When using Python on Windows, it is recommended to use `python -m pip` instead of `pip` alone. 

```
python -m pip
```

In case `python` command does not work but opens Microsoft Store, type `py` instead.

The command means accessing the pip under the python interpreter specified as `python` in the environment variable. This allows package management by each interpreter more controllable, even when using a virtual environment. When there is another version of Python installed, say 32 bits of Python 3.5

```
py -3.5-32 -m pip
```

# **PYTHON: VIRTUAL ENVIRONMENT**
A programming language such as C/C++ needs to include header files and libraries before compiling. Similarly, Python requires installing necessary packages on the interpreter before running the script.

However, when working with multiple Python projects, having all the packages installed in a single interpreter is inconvenient and inefficient. This is why separating Python environments is essential which can be done by a virtual environment.

## `venv` Package
The Python3 has a virtual environment package `venv` included by default. The package creates lightweight virtual environments with their site directory, optionally isolated from the system site directory.

Each virtual environment has its distinct Python binary (which matches the version of the binary that was used to create this environment) and can have its own independent set of installed Python packages in its site directory.

### Creating Environment
Creating a virtual environment under the name `.venv` on desired project directory is done as follows:

```
python -m venv D:\Workspace\Python\project\.venv
```

### Activate Environment
Here, the term "activating" means activating a virtual environment on the command prompt or terminal. While this is unnecessary when running the script under a virtual environment, activation is required when installing packages using pip on a terminal.

* Windows:

    ```
    D:\Workspace\Python\project\.venv\Scripts\activate.bat
    ```

* Unix (e.g. Linux and macOS):

    ```
    source ~/Workspace/Python/project/.venv/bin/activate
    ```

### Deactivate Environment
To exit from a virtual environment activated console, developers need to "deactivate" virtual environment.

```
deactivate
```

This is the same as entering the command `PATH=D:\Workspace\Python\.venv\Scripts\deactivate.bat`. Because of this, relocating the virtual environment directory will cause `deactivate` command unable to recognize its path.

# **PYTHON: NUMPY**
NumPy is an extremely powerful and useful library used in Python which supports multi-dimensional matrix (aka. NumPy array). As one of the best known scientific libraries, it is implemented on other well-recognized libraries such as [Matplotlib](https://matplotlib.org/), [TensorFlow](https://www.tensorflow.org/), et cetera.

To install NumPy library, open command prompt window and enter the command below: 

```
python -m pip install numpy
```

Since NumPy is a huge scientific library and is still growing, this chapter will briefly introduce basic usage of the array. For more information on its API, refer to the following URL: https://numpy.org/

## NumPy Array
NumPy array is a very flexible matrix. Compared to a list object in Python, the array has faster speed and higher efficiency on memory management.

Declaration of the NumPy array is be done as follows:

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

This creates a NumPy array object based on the given size, but its value is randomly generated.

Initialization of a NumPy array is done as follows:

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

This creates a NumPy array object based on the given value but has a disadvantage on creating the array with a huge size or deeper dimension. 

More NumPy methods exist that is used to create the array with better convenience:

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
The shape of the NumPy cannot be extracted using methods of Python's iterable object such as `len()`. Instead, NumPy has its unique attribute containing the length of each dimension.

```python
import numpy as np
variable = np.array([[1, 2, 3], [4, 5, 6]])

variable.shape        # >> OUTPUT: (2, 3)
variable.shape[0]    # >> OUTPUT: 2
```

## NumPy Indexing
The term "indexing" means slicing the array to a specific range only. Each dimension is indexed using colon `:` and are distinguished via comma `,`. Indexing shares the same rules as the slicing of iterable objects.

* `n:m` : start indexing from n^th^ element (included) to m^th^ element (excluded)
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