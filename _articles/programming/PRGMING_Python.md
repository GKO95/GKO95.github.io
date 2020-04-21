---
name: Python3
layout: document
title: "Programming | Python3"
category: Programming
description: "Python is an interpreted, high-level, general-purpose programming language with great code readability."
---
# **PYTHON: BASIC**

Python is a high-level programming language with applications in numerous areas, including web programming, scientific computing, and artificial intelligence. The language is executed sequentially line-after-line and doesn't need semicolon `;` to end the line of statement.

This chapter describes on basic concepts and coding syntax used in Python.

## Interpreter

Programming language such as C/C++ uses compiler that translates a source code (written in English) to a computer language (such as binary language) computer can understand for execution. However, interpreter allows computer to execute the program directly from a source code without translation.

Python is interpreter-driven high-level language: this allows scripting the code much easier than compiler, but its execution time can be slower in comparison.

## Comment

There are two different comments in Python: line comment and block comment.

* **Line comment**
  : a comment worth a single line of code, and is declared by `#` (octothorpe).
* **Block comment** (aka. **docstrings**)
  : a comment with multiple lines of code by using three pairs of double quote `""" """` or single quote `''' '''`. Docstrings can even be used to write multiple lines of sentence and view it on runtime.

```python
"""
BLOCK COMMENT:
multiple line of comment can be placed here and can even be viewed on runtime.
"""
# LINE COMMENT: for a single line of code.
```

## Input & Output

Python has a single input and output function for a terminal text-based:

| INPUT/OUTPUT | SYNTAX            | DESCRIPTION                                                  |
| ------------ | ----------------- | ------------------------------------------------------------ |
| `input()`    | `input("Write:")` | Text data inside a function `input()` is shown on a terminal when input is needed, and always return input data as text. |
| `print()`    | `print("Read:",variable)` | Print data types (e.g. text, number) on a console, where `variable` is a text data for concatenation. |

```python
variable = input("Write: ")
print("Read:", variable)
# EQUIVALENT: print("Read:", input("Write: "))
```

```
Write: Hello World!
Read: Hello World!
```

To print mixture of more than a single data type in a single `print()` function, there are two possible methods with slightly different results.

1. Using a comma `,` can list the data in sequence but always places blank space on each comma.

   ```python
   A = 10.0
   B = "Python3"
   
   # MIXTURE OF STRING AND INT IS LISTED USING COMMA ",".
   print("A is", A , ", \nand B is", B, ".")
   ```

   ```
   A is 10.0 ,
   and B is Python3 .
   ```

2. Concatenation of string using `+` and does not create blank space between. However, data type that is not a string needs to be converted to string to use a concatenation.

   ```python
   A = 10.0
   B = "Python3"
   
   # MIXTURE OF STRING AND INT IS CONCATENATED USING "+" AFTER STRING CONVERSION.
   print("A is", str(A) + ", \nand B is", B + ".")
   ```

   ```
   A is 10.0,
   and B is Python3.
   ```

## Variable

Variable is a container for the data which can be assigned using assignment operator `=`. There are three different common stages in variable: declaration, definition, and initialization.

* **Declaration**
  : declaration is declaring existence of the construct of such as variables, functions, objects, and more. While declaration also includes specifying which data type the construct is in other languages, this is exception to Python since constructs in this language do not need to be declared with data type.

* **Definition**
  : definition refers to block of codes on values and performance the construct has and is capable of.

  ```python
  # DEFINITION (+DECLARATION) OF VARIABLE
  variable = 1
  
  # DEFINITION (+DECLARATION) OF FUNCTION
  def function():
    statements
      return 0
  ```
  
* **Initialization**
  : initialization is assigning the initial value to the construct, simply the *first* definition. The first definition is generally done on the same time when declaring the construct. Hence, initialization is commonly thought by people as *declaration + definition*, but is not always true.

Programmer should observe the rules on naming variable in Python:

* Only letters, numbers, and underscores are allowed.

* Name cannot start with numbers.

* Spaces are not allowed.

Variables are not data-type fixed, allowing programmer to change the value whatever and whenever they want even from a single variable.

### Local & Global Variable

**Local variable** is a variable declared inside a code block, such as function or class. Data stored in local variable is removed when exiting the code block, thus cannot be used outside. Local variable is allowed to have same variable name declared outside (technically, is borrowing the name as a different identity).

**Global variable** is a variable declared on a global scope of the script which is outside a code block. It is possible to use the global variable inside a code block using `global` keyword. However, global variable should be avoided if possible to prevent unexpected result and error caused by conflicting variables.

### Constant Variable

Constant variable is a special type of variable that cannot be changed after its initialization. Unfortunately, Python does not have a constant variable since Python does not have a concept of *declaration*. While C-based language do have this feature, Python developer should just be careful not to mess up the what-is-used-as-constant variable.

Common method used in Python to indicate the constant variable is declaring the variable UPPERCASE.

### `del` Keyword

A keyword used to delete variable. Deleted variable can be reassigned later.

```python
# DECLARATION OF THE VARIABLE "x"
x = "Python"
print(x)

# DELETION OF THE VARIABLE "x"
del x
print(x)
```

```
Python
NameError: name 'x' is not defined
```

## Data Type

Data type a variable can store in Python can be categorized into three different type: numeric, string, and Boolean data type. Depending on the data type, Python can perform type-specific features that process the data, called *operation*. Those that can operates data are (1) operator, (2) function, and (3) method.

Although a function and a method will be introduced in later chapter, knowing the key difference between these three will prevent getting confused on understanding concepts of programming language overall.

* **Operator**
  : a constructs which can manipulate the value of operands, such as an arithmetic sign. It does not need argument to operates but by placing before, after, or between the operands.
* **Function**
  : a reusable piece of code which is called by name to operates. Function can be distinguished from an operator by parenthesis `()` at suffix of the function's name; `function()`.
* **Method**
  : an object-exclusive function. Method also has parenthesis `()` at suffix of its name but is always bounded to an object; `object.method()`.

### Numeric Data Type

Numeric data type is widely used in Python for scientific purpose such as plotting, processing, and on the field of modeling neural network in artificial intelligence. Following are the list of numeric data types:

| KEYWORD   | DATA TYPE             | DESCRIPTION                                                  |
| --------- | --------------------- | ------------------------------------------------------------ |
| `int`     | Integer               | 32-bits precision integer number.<br />Size: unlimited (max. 400 bytes) |
| `float`   | Floating point number | Real number with decimal points.<br />Size: unlimited (max. 400 bytes) |
| `complex` | Complex number        | Contains floating real and imaginary number.<br />Size: unlimited (max. 400 bytes) |

The byte size of numeric data type is greater than any other languages. This is just a maximum byte size numeric data type can have and it can be much smaller depending on the what the number is. This flexibility of the byte size makes Python doesn't require data type declaration.

Data type `float` is one of the commonly used numeric data type as it’s the smallest data type that can express the fraction besides `complex`. The `float` data type has following properties:

* Extra zeros (beside right behind the decimal point) at end of the number are ignored.
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

| NAME                           | OPERATOR | DESCRIPTION                                                  |
| ------------------------------ | :------: | ------------------------------------------------------------ |
| Addition                       |   `+`    | -                                                            |
| Subtraction                    |   `-`    | Python doesn’t have a subtraction. Instead, negative sign substitutes subtraction, as adding negative value is equal to subtracting. |
| Multiplication                 |   `*`    | -                                                            |
| Exponential                    |   `**`   | -                                                            |
| Division                       |   `/`    | When divided, the value automatically changes to data type of `float`, a data type of number with decimal point. |
| Quotient (aka. floor division) |   `//`   | When divided, gives an output a quotient of division only, without a remainder. |
| Remainder                      |   `%`    | When divided, gives an output a remainder of the division.   |

For easier readability of the arithmetic operation, you can place blank spaces between number and operator as it does not affect anything on its output.

Additional operations using with built-in functions and methods exclusive to numeric data type. Most of the operation below requires an iteratable object called *list* which will be introduced later.

| FUNCTION  | EXAMPLE             | DESCRIPTION                                                  |
| --------- | ------------------- | ------------------------------------------------------------ |
| `max()`   | `max([0,1,2,3,4])`  | Find the maximum number inside.                              |
| `min()`   | `min([0,1,2,3,4])`  | Find the minimum number inside.                              |
| `abs()`   | `abs(-21)`          | Find out absolute value of the number.                       |
| `round()` | `round(164.2597,2)` | Rounds up the number to one’s digit on default, or to a fraction digit behind. |
| `sum()`   | `sum([0,1,2,3,4])`  | Sum all the numbers in the list.                             |

```python
# EXAMPLE OF ROUND() FUNCTION
print(round(164.259763145))
print(round(164.259763145,2))
```

```
164
164.26
```

Assignment operator is a combination of an arithmetic and an assignment sign `=`, making numerical calculation code to be written more concisely.

| OPERATOR | EXAMPLE  | EQUIVALENT                                                   |
| :------: | -------- | ------------------------------------------------------------ |
|   `=`    | `x = y`  | `x = y`; assign the value of variable `y` to the variable `x`. |
|   `+=`   | `x += y` | `x = x + y`                                                  |
|   `-=`   | `x -= y` | `x = x - y`                                                  |
|   `*=`   | `x *= y` | `x = x * y`                                                  |
|   `/=`   | `x /= y` | `x = x / y`                                                  |
|   `%=`   | `x %= y` | `x = x % y`                                                  |

Increment and decrement does not exist in Python programming language.

### Boolean Data Type

Boolean data type is useful for a code that requires logical conditioning whether it is true or false:

| VALUE          | NAME            | DESCRIPTION                   |
| -------------- | --------------- | ----------------------------- |
| `True` or `1`  | Logically true  | Returned when logic is true.  |
| `False` or `0` | Logically false | Returned when logic is false. |

Any non-zero positive number can represents Boolean value of `True`. In other word, Boolean value of `2` or `3` are also equivalent to `True` while `False` is only represented by the number `0`.

Comparison operation is used to compare relation of two or more values, returning corresponding Boolean data type depending on whether the condition is held true or false. 

| OPERATOR | DESCRIPTION              |
| -------- | ------------------------ |
| `<`      | Lesser than              |
| `<=`     | Lesser than or equal to  |
| `>`      | Greater than             |
| `>=`     | Greater than or equal to |
| `==`     | Equal to                 |
| `!=`     | Not equal to             |

Meanwhile, the Boolean data type can be added, multiplied, and complemented as follows:

| OPERATOR | NAME           | DESCRIPTION                                             |
| :------: | -------------- | ------------------------------------------------------- |
|   `is`   | Equivalence    | Boolean evaluator between two data: equivalent to `==`. |
|  `and`   | Multiplication | True when all the arguments are True, else False.       |
|   `or`   | Addition       | True when at least one argument is True, else False.    |
|  `not`   | Complement     | Change True to False and vice versa.                    |

### String Data Type

String data type is a text-based data which can be distinguished with other data type by a pair of single quotation mark `''` or double quotation mark `""`. Variable or data that is a string data type is commonly called *string object*.

Although placing the quotation mark inside a string object can cause broken string data, placing a backslash `\` before the quotation mark can escape from premature end of string.

```python
# COMPARISON BETWEEN IMPROPER AND PROPER WAY OF TYPING STRINGS.
print('Where's my "Cat in the Hat" book?')
print('Where\'s my "Cat in the Hat" book?')
```

```
Where
Where's my "Cat in the Hat" book?
```

Create a string with three sets of quotes (either single or double) becomes docstring; docstring can create a newlines just by pressing Enter/Return button. Otherwise, developer need to insert `\n` code manually.

```python
# PRINTING AND WRITING STRING IN MULTIPLE LINES.
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

| OPERATOR | NAME           | DESCRIPTION                                                  |
| :------: | -------------- | ------------------------------------------------------------ |
|   `+`    | Concatenation  | Merge two different strings to one (type of quote doesn’t matter). |
|   `*`    | Multiplication | Multiply the string by the number of integer (float does not work). |

```python
print("Pyt" + 'hon')
print(4 * "2")
```

```
Python
2222
```

String is an object (or simply, an independent individual of data), thus string has its own unique operations that has not been introduced in previous two data types:


| METHOD         | EXAMPLE                  | DESCRIPTION                                                  |
| -------------- | ------------------------ | ------------------------------------------------------------ |
| `format()`     | `str.format(data)`       | Inserts string or non-string `data` type to a designated space via location or name designated by `{}`. |
| `join()`       | `str.join(str_lst)`      | Joins a list of string objects `str_lst` by placing string object `str` in-between. |
| `split()`      | `str.split([str1])`      | Convert a string `str` to a list by separating based on blank spaces if there's no argument in method.<br /><br />[OPTIONAL: In case there’s an argument `str1`, the string object `str` is separated based on `str1`.] |
| `replace()`    | `str.replace(str1,str2)` | Replace `str1` to `str2` within the string object `str`.     |
| `startswith()` | `str.startswith()`       | Check the start of the `str` for equivalence.                |
| `endswith()`   | `str.endswith()`         | Check the end of the `str` for equivalence.                  |
| `upper()`      | `str.upper()`            | Change every text in `str` to uppercase letter.              |
| `lower()`      | `str.lower()`            | Change every text in `str` to lowercase letter.              |


```python
# STRING FORMAT: [1] BY-LOCATION & [2] BY-NAME ASSIGNMENT
lst = [str0, int1, int2]
print("{2} {0} {1}".format(lst[0], lst[2], lst[1]))
print("{x} {y} {z}".format(x = lst[0], y = lst[2], z = lst[1]))

# STRING CONCATENATION
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
int1 str0 int2
str0 int2 int1

str0 ! str1 ! str2
[str0, str1, str2]

False       # False as the first letter "t" is not capitalized.
True        # True as it also includes a period at the end.

THIS IS A SENTENCE.
this is a sentence.
```
### Type Conversion

It is possible to convert one's data type to another different data type. The following three are the conversion widely used when developing Python program:

| FUNCTION  | NAME               | DESCRIPTION                                                  |
| --------- | ------------------ | ------------------------------------------------------------ |
| `int()`   | Convert to integer | `float`: Fraction is eliminated, returning integer only.<br />`string`: Only numerical characters are convertible. |
| `float()` | Convert to float   | `int`: No restriction.<br />`string`: Only numerical characters are convertible. |
| `str()`   | Convert to string  | `int`: No restriction.<br />`float`: No restriction.         |

## Escape Character

Escape character `\` is used to escape from execution of operation intended for an operator. On introduction on string data type, `\'` is used to prevent string from premature ending.

| SYNTAX | DESCRIPTION    |
| ------ | -------------- |
| `\n`   | New line       |
| `\t`   | Horizontal tab |
| `\\`   | Backslash      |
| `\b`   | Backspace      |
| `\'`   | Single quote   |
| `\"`   | Double quote   |

Not just to escape from unwanted operation, escape character is also used to code a single long command into short consecutive multi-line commands.

## None

An data with no value regardless of data type. Although `None` can be used as `False` in Boolean logic conditioning, `None` and `False` is completely different even in Boolean concept.

```python
# CONDITIONAL CHECK: is None can be deemed as False in Boolean?
if not(None and True):
	print(None)
```

```
None                    # This proves that None can be used as False in Boolean.
```

# **PYTHON: CONDITIONAL AND LOOP**

Line-by-line sequential code execution programming is also known as *procedural programming*. It is the basic programming style using mostly with conditional and loops statements and additional functions for assistance.

This chapter introduce list of conditional and loop statements essential in Python programming.

## Indentation
Indentation is used to delimit (mark the limits or boundaries) blocks of code. Simply put, it is used to distinguish where the block of code belongs to. Indentation is inserted on the section of code after colon `:`.

Beware as placement of indentation can change the script entirely.

```python
# IDENTATION ON THE SECOND PRINT. 
if 1 < 0:
	print("Condition is False.") 
	print("End of IF statement.")
print("The End.") 

# NO INDENTATION ON THE SECOND PRINT.
if 1 < 0:
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

Conditional `if` statement runs code if the condition is true. When the condition evaluates `True`, the statements are carried out but otherwise ignored.

```python
if condition:
	statements
```

### `else` Statement

Conditional `else` statement must be followed after `if` statement as it cannot be used alone. The statement contains code that is called when the condition evaluates `False`. The `else` statement is not indented along with `if` statement.

```python
if condition:
	statements
else:
	statements
```
Chaining `if` and `else` statement is possible in series of conditioning as follows:

```python
if condition: 
	statements
else:
	if condition:
		statements
	else condition:
		statements
```

### `elif` Statement

Conditional `elif` statement is a combination of `if` and `else` statement; when the first condition evaluates `false`, the `elif` statement provides second (or more) chance to evaluate condition different from the first one. 

```python
if condition: 
	statements
elif condition:
	statments:
else:
	statements
```

However, this is not the same as chain of `else`-`if` conditional statement as that is a combination of two different conditional set, while `elif` statement guarantees a single conditional set.

### Ternary Operator

Conditional statement can be expressed simply using ternary operator as shown below:

```python
var = True_return if condition else False_return
```

The vocabulary *ternary* represents the statement takes three arguments. Ternary operator should not be overused as it reduces readability, but useful on variable assignment.

## `while` Loop

The `while` loop statement repeatedly execute statements inside (aka. iterate) as long as the condition holds. The loop ends once the condition evaluates `False`.

```python
while condition:
	statements
```
The `else` statement may follow after a `while` loop statement, which will be executed when the loop statement has successfully finished its iteration (by conditional mean).

```python
# FINISHED LOOP: completed iteration
while index < 10:
	index += 1
	if index == 999:
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

The `break` statement can be used to end a loop prematurely, before complete iteration is made. When encountered inside a loop, immediately escapes from the loop but does not break from its outer loop.

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

The `continue` statement skips the rest of the statement below in the loop and jumps back to the conditioning part. This maintains the loop iteration rather than escaping the loop like `break` statement.

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

The `for` loop statements repeatedly execute statements inside (aka. iterate) as long as it is in the valid range. The loop ends once the range object is out of range integer.

```python
for index in iterable:
	statements
```

Here, a local variable `index` obtains integer from `iterable` iterable object and execute statements one-by-one until running all the values inside the object. The `iterable` doesn’t have to be an iterable object: string object can also work, which returns character comprising the string object instead.

```python
for var in range(3, 9, 2):
	print("Hello World" , var)
```

```
Hello World 3
Hello World 5
Hello World 7
```

Just like the `while` loop statement, `break` and `continue` can be used in `for` loop as well since it is the same loop-iterating statement.

The `else` statement may follow after a `for` loop statement, which will be executed when the loop statement has successfully finished its iteration (by running out of range).

```python
# FINISHED LOOP: completed iteration
for index in range(10):
	if index == 999:
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

### **`range()` Function**

A function that creates a sequential list of integers, called "range" object.

| FUNCTION  | EXAMPLE                             | DESCRIPTION                                                  |
| --------- | ----------------------------------- | ------------------------------------------------------------ |
| `range()` | `range(start_num, length,interval)` | Creates a range object that has `legnth` number of sequence of integer starting from 0.<br /><br />OPTIONAL: Sequence starts from `start_num` number (not an index) with `interval`. For easier understanding, refer to the sample code below. |
| `list()`  | `list(rng)`                         | Convert range object `rng` to list.                          |

```python
print(range(10)) 

print(list(range(10)))

print(list(range(4,10)))

print(list(range(4,10,2)))
```

```
range(0,10)            # Range object (one of a types of iterable object)
[0,1,2,3,4,5,6,7,8,9]
[4,5,6,7,8,9]
[4,6,8]
```

A yet explained `for` loop statement executes code while in valid range, and `range()` function creates a range object that can provide a valid range of iteration.

```python
for var in range(3, 9, 2):
	print("Hello World" , var)
```

```
Hello World 3
Hello World 5
Hello World 7
```

## Exception

Exception is an error-exclusive conditional statement: the statement checks whether something goes wrong due to incorrect coding or input, stopping the program immediately. There are some statements that can be used to handle the script errors as follows.

### `try`/`except` Statement

The `try`/`except` statement is used to handle exceptions, and to call certain statements when an exception occurred. There are additional statements that can be used together with the pair:

| KEYWORD   | USAGE               | DESCRIPTION                                                  |
| --------- | ------------------- | ------------------------------------------------------------ |
| `try`     | Code testing ground | A block of code to be checked for exception.                 |
| `except`  | Code for exception  | A code to be executed when certain exception occurs.         |
| `else`    | Code for no error   | [OPTIONAL: A code to be executed when the code has passed with no error (exception) occurred.] |
| `finally` | Finale statement    | [OPTIONAL: A block of code executed no matter what exception has occurred, and even when there’s no error.] |

```python
try:
	statements
except exception_type_1:
	statements
except exception_type_2:
	statements
except:			# UNCONDITIONAL EXCEPTION LOCATES LAST.
	statements
finally:
	statements
```

Even after `try`/`except` statement is executed, the program does not stop and continues onward.

### `raise` Statement

The `raise` statement is used to raise exception intentionally, but manually. As the statement raises error, it also stops the runtime immediately, preventing anymore further execution thereafter.

```python
# EXPLICITLY RAISE EXCEPTION: can be used alone, even inside an 'except' code above.
raise

# PROVIDE DETAIL DESCRIPTION ON EXPLICITLY RAISED EXCEPTION
raise exception_description
```

### `assert` Statement

The `assert` statement checks expressions of code for validity (aka. assertion). When tested expression is valid with no problem, assertion returns `True`. When assertion returns `False`, an exception is raised.

```python
Print(0)
assert TRUE_expression
Print(1)
assert FALSE_expression,"exception_type"
Print(2)
```

```
0
1
AssertionError: exception_type
```

## `pass` Statement

The `pass` statement is a null operation that does nothing when executed. This comes useful by inserting it where the code will be placed but hasn’t been written yet.

# **PYTHON: ITERABLE OBJECT**

Not just its simplicity that makes Python language useful, its iterable object is powerful and flexible than any other programming language can provide. While C++ has a iterable object called *array* and *vector*, Python has four iterable object that has same features but with slightly different properties.

## Iterable Object

An object with an `__iter__` method (Python3) which returns iterator object, eventually going through every data within the iterable object in sequence; called iteration.

### Iterator Object

An object with a `__next__` method (Python3) which automatically calls next element of data.

## List

List iterable object is used to store item in order along its index, irrelevant to data type. Defining the list object is done using a bracket ` []` by assigning values inside, comma separated. Bracket is also used to call an element at index location.

```python
lst = [int1, str2, lst3, any4, ... ]

print( lst )		# >> OUTPUT: [int1, str2, lst3, any4, ... ]
print( lst[0] )		# >> OUTPUT: int1
```

It is possible to change the existing value by reassigning individual element. Calling the element that is outside the range of list is not possible and will results error.

```python
lst = [int0, int1, int2]

lst[1] = int3		# >> RESULT: lst = [int0, int3, int2]
lst[3] = int4		# IndexError: list assignment index out of range
```

String data can be indexed like a list, where each element is a character consisting the string.

```python
variable ="Hello." 
print(variable[1])
```

```
e
```

A list can be added and multiplied, with operations exclusive to iterable objects. Operations below are not restricted to a list alone but can be applied to other iterable objects introduced later.

| OPERATOR | NAME           | DESCRIPTION                                                  |
| -------- | -------------- | ------------------------------------------------------------ |
| `+`      | Addition       | Merge two or more different lists to a single list.          |
| `*`      | Multiplication | Multiply the string by the number of integer (float does not work). |
| `in`     | Included       | Check if an item is in a list.                               |

```python
lst = [1, 2, 3]

# + OPERATOR
print( lst + [3, 4, 5] )	# >> OUTPUT: [1, 2, 3, 3, 4, 5]

# * OPERATOR
print( lst * 3 )			# >> OUTPUT: [1, 2, 3, 1, 2, 3, 1, 2, 3]

# in OPERATOR
print( 1 in lst )			# >> OUTPUT: True
print( 2 not in lst )		# >> OUTPUT: False
```

Following are functions that does certain features to and for a list (or more like iterable) object.

| FUNCTION      | EXAMPLE                             | DESCRIPTION                                                  |
| ------------- | ----------------------------------- | ------------------------------------------------------------ |
| `len()`       | `len(lst)`                          | Find the length of the `lst` list by counting elements.      |
| `all()`       | `all([condition for index in lst])` | Return `True` when all elements inside the `lst` list meets `condition`. |
| `any()`       | `any([condition for index in lst])` | Return `True` when any element inside the `lst` list meets `condition`. |
| `enumerate()` | `enumerate(lst)`                    | Iterates elements inside the `lst` list with sequencing.     |
| `list()`      | `list(iterable)`                    | Convert an iterable object to a list; creates empty list if `iterable` is not presented. |

```python
lst = [10, 9, 8, 7, 6]

# ALL() FUNCTION
if all( [var > 5 for var in lst] ):
	print("Numbers are all above 5.")		# >> OUTPUT: Numbers are all above 5.

# ANY() FUNCTION
if any( [ var % 2 ==  0 for var in lst] ):
	print("At least one number is even.")	# >> OUTPUT: At least one number is even.
    
# ENUMERATE() FUNCTION
for var in enumerate(lst):
	print(var)								# >> OUTPUT: (0,10)
    										# >>		 (1,9)
        									# >>		 (2,8)
            								# >>		 (3,7)
                							# >>		 (4,6)
```

Since list is an (iterable) object, it also has methods it can access to perform certain features:

| METHOD     | EXAMPLE                 | DESCRIPTION                                             |
| ---------- | ----------------------- | ------------------------------------------------------- |
| `append()` | `lst.append(data)`      | Add `data` at the end of the `lst` list.                |
| `insert()` | `lst.insert(int, data)` | Add `data` at `int` element location of the `lst` list. |
| `index()`  | `lst.index(data)`       | Find the smallest number of location of *data*.         |

```python
lst = [10, 9, 8, 7, 6]

# APPEND() METHOD
print( lst.append("7") )		# >> OUTPUT: [10, 9, 8, 7, 6, "7"]

# INSERT() METHOD
print( lst.insert(1,"7") )		# >> OUTPUT: [10, "7", 9, 8, 7, 6]

# INDEX() METHOD
print( lst.index(8) )			# >> OUTPUT: 2
```

### List Comprehension

List can be generated using a `for` loop and `if` condition syntax when elements have certain rule/pattern.

| SYNTAX          | EXAMPLE                                  |
| --------------- | ---------------------------------------- |
| `[ for in if ]` | `lst[elem for index in rng if condtion]` |

This creates a list according to the `elem` utilizing variable `var` in a range given by the range object `rng` when the `condition` is true; `if` statement in comprehension is optional.

```python
lst =[i**2 for i in range(5)]
lst =[i**2 for i in range(5) if (i**2)%2==0]
```

```
[0, 1, 4, 9, 16]
[0, 4, 16]
```

### List Slice

List slicing is one of the powerful tool Python has advantage over other programming languages. Slicing the list extracts portion of the original list, thus creates smaller list.

|  SYNTAX   | EXAMPLE                                 |
| :-------: | --------------------------------------- |
| `[ : : ]` | `lst[start_elem : end_elem : interval]` |

Slicing starts from `start_elem` (inclusive) until `end_elem` (exclusive) with interval of `interval`. All thee arguments do not have to be filled to slice the list.

```python
lst =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print( lst[2:8] )		# >> OUTPUT: [2, 3, 4, 5, 6, 7]

# SLICE FROM/UNTIL THE END OF THE LIST
print( lst[2:] )		# >> OUTPUT: [2, 3, 4, 5, 6, 7, 8, 9]
print( lst[:8] )		# >> OUTPUT: [0, 1, 2, 3, 4, 5, 6, 7]

# SLICE WITH SKIPPING SOME ELEMENTS WITH INTERVAL
print( lst[::2] )		# >> OUTPUT: [0, 2, 4, 6, 8]
print( lst[2:8:3] )		# >> OUTPUT: [2, 5]

# REVERSE INTERVAL
print( lst[7:3:-1] )	# >> OUTPUT: [7, 6, 5, 4]
```

## Tuple

Tuple iterable object is used to store item in order just like a list, but cannot change value of elements after its initialization. This property of iterable object is called immutable (opp. mutable). Tuple use parentheses `()` or even without any to distinguish itself from the List.

```python
tpl =(data0, data1, data2)
print( tpl )		# >> OUTPUT: (data0, data1, data2)
print( tpl[0] )		# >> OUTPUT: data0

# ALTERNATIVE: tuple without parentheses
tpl = data0, data1, data2
print( tpl )		# >> OUTPUT: (data0, data1, data2)
print( tpl[0] )		# >> OUTPUT: data0
```

Because tuple is a constant version of a list, the data inside cannot be changed. The error will occur when such effort is made.

```python
tpl = [data0, data1, data2]
tpl[1] = data3
```

```
TypeError: 'tuple' object does not support item assignment
```

Tuple operation can be referred from operation, function, and method table in *List* section.


### Unpacking Tuple

Unpacking tuple means assigning individual element in tuple to variables or another tuples. Placing asterisk `*` on prefix of a variable would return multiple number of elements as a list. This will be explained in *Parameters & Arguments* article section.

```python
var0, var1, *var2, var3 = [data0, data1, data2, data3, data4, data5]

print(var0)		# >> OUTPUT: data0
print(var1)		# >> OUTPUT: data1
print(var2)		# >> OUTPUT: [data2, data3, data4]
print(var3) 	# >> OUTPUT: data5
```

## Dictionary

Dictionary is an iterable object with data structured to maps the key elements to its value. Because of this property, dictionary does not call value by numerical index but through keys. Dictionary uses curly bracket `{}` to distinguish itself from other iterable objects.

```python
dictionary = {key0:value0, key1:value1, key2:value2}

print( dictionary[key0] )	# >> OUTPUT: value0
print( dictionary[key1] )	# >> OUTPUT: value1
print( dictionary[key3] )	# KeyError: key3
```

Mutable object (e.g. list and dictionary) cannot be used as a key element; only immutable object is allowed. However, mutable object can still be used as a value of the key.

```python
dictionary = {list0:value0, key1:value1}
```

```
TypeError: unhashable type: 'list'
```

It is possible to change the existing value of a key within a dictionary. Unlike list object, creating new key and assigning its value is also possible without needing any help from a method.

```python
dictionary = {key0:value0, key1:value1, key2:value2}
dictionary[key1] = value3
dictionary[key4] = value4
```

```
{key0:value0, key1:value3, key2:value2, key4:value4}
```

Operations for a dictionary is same as other iterable objects but have slight difference:

| OPERATOR | NAME                     | DESCRIPTION                                                  |
| -------- | ------------------------ | ------------------------------------------------------------ |
| `in`     | Included (key exclusive) | Check if the key is in a dictionary. However, it does not check the value. |

```python
dictionary = {key0:value0, key1:value1}

print( key0 in dictionary )			# >> OUTPUT: True
print( value1 in dictionary )		# >> OUTPUT: False
print( key3 not in dictionary )		# >> OUTPUT: True
```

Dictionary can have its own functions and methods to execute certain features of dictionary:

| OPERATION | EXAMPLE                             | DESCRIPTION                                                  |
| --------- | ----------------------------------- | ------------------------------------------------------------ |
| `get()`   | `dictionary.get(key,[description])` | Find the key and get its value; additional description can be added when the key is not found (`None` by default). |
| `dict()`  | `name=dict()`                       | Can create empty dictionary.                                 |

```python
dictionary = {key0:value0, key1:value1}

print( dictionary.get(key0) )						# >> OUTPUT: value0
print( dictionary.get(key2) )						# >> OUTPUT: None
print( dictionary.get(key3, "not in dictionary") )	# >> OUTPUT: not in dictionary
```

## Set

Set is an iterable object that guarantees uniqueness, meaning it does not allow duplicate data to exist within the object. Just like dictionary, set uses curly bracket `{}` to assign values but without key-value pair. Due to the reasons above, set is much faster to check the data than a list.

```python
set0 = {data0, data1, data2, data1}
print(set0)
```

```
{data0, data1, data2}
```

Set have mathematical operations which works exactly like mathematical set.

| OPERATION | NAME                 | DESCRIPTION                                                  |
| --------- | -------------------- | ------------------------------------------------------------ |
| `|`       | Union                | Returns the combined of two sets.                            |
| `&`       | Intersection         | Returns data which only exist in both sets.                  |
| `-`       | Difference           | Returns data which only exist in subtrahend and not in minuend. |
| `^`       | Symmetric difference | Return data exclusive to each set, but not both.             |

```python
set0 = {1, 2, 3, 4, 5, 6}
set1 = {4, 5, 6, 7, 8, 9}

print(set0 | set1)
# >> OUTPUT: {1, 2, 3, 4, 5, 6, 7, 8, 9}

print(set0 & set1)
# >> OUTPUT: {4, 5, 6}

print(set0 - set1)
print(set1 - set0) 
# >> OUTPUT: {1, 2, 3}
# >> OUTPUT: {7, 8, 9}

print(set0 ^ set1)
# >> OUTPUT: {1, 2, 3, 7, 8, 9}
```

Set can have its own functions and methods to execute certain features of set.

| FUNCTION | EXAMPLE         | DESCRIPTION                                                  |
| -------- | --------------- | ------------------------------------------------------------ |
| `set()`  | `set(iterable)` | Function which creates set: list and tuple should be with bracket `[]` and parentheses `()`. Dictionary is not included in this case. |

The function above is necessary when creating an empty set, as `{}` creates an empty dictionary instead. Meanwhile, the methods used by set object are as follows:

| METHOD     | EXAMPLE            | DESCRIPTION                                                  |
| ---------- | ------------------ | ------------------------------------------------------------ |
| `add()`    | `set.add(data)`    | Add `data` at the end of the set.                            |
| `remove()` | `set.remove(data)` | Remove `data` in the set.                                    |
| `pop()`    | `set.pop([key1])`  | Randomly selected element [or `key1` ] is popped or removed from the set. |

```python
set0 = set( [data0, data1, data2, data1] )
print( set0 )			# >> OUTPUT: {data0, data1, data2}

set0.add( data3 )
set0.remove( data0 )
print( set0 )			# >> OUTPUT: {data1, data2, data3}

print( set0.pop() )		# >> OUTPUT: data1 (randomly popped)
print( set0 )			# >> OUTPUT: {data0, data2}
```

## Generator

Generator is an iterable object that can be created by developer using `yield` and `for` loop statement. Generator is especially useful due to its absence of memory restrictions, allowing generator to yield infinite number of data.

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

A keyword used to create a generator; keyword returns the value when iterated by `for` loop statement.

# **PYTHON: FUNCTIONAL PROGRAMMING**

There are three different types of programming method that can be applied to Python language: procedural, functional, and object-oriented.

Functional programming is a style of program scripting that is based mostly around usage of the functions. This chapter will be introducing the guide on how to create and use function in Python for functional programming.

## Function

Function is an independent block of code which can process the data and present newly processed data once it’s called, allowing dynamic program scripting. Function can be distinguished from its code format which has parenthesis after its name; `function()`.

The programming based around use of custom functions is called *functional programming*.

```python
x = [0, 3, 5, 9]
print(len(x))
# Code "print()" function, and "len( )" function that returns the length of list object.
```

```
4
```

Although function acts quite different from variable, they can be treated just the same. For easier understanding please refer to the example below:

```python
# ORIGINAL FUNCTION
function(arg1, arg2)

# ASSIGNING AND EXECUTING FUNCTION VIA VARIABLE
variable = function
print(variable(arg1, arg2))
```

Not only can it be assigned to variable, but function can also be passed as parameter of the other function. Therefore, you can define a function by using another function that’s been already defined.

### Pure Function

Function that returns a value that depends only on their arguments without any side effects.

As for an example, cosine function `cos(x)` that only has single parameter `x` returns the value which depends only on the argument `x`; hence, the the cosine function is a pure function.

```python
# FUNCTION WITH x AND y PARAMETER.
def function(x,y):
    variable = 2 * x
    vairable += y
    return variable			# RETURN DEPENDS ONLY ON x AND y PARAMETER.
```

### Higher-Order Function

A function that takes other function(s) as parameters or return the function(s) as a result.

## `def` Keyword

The `def` keyword is used to create your own function. When calling your newly created function before defining one, an error occurs as Python executes sequentially, thus is deemed calling non-existing function.

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

Parentheses `()` is necessary when defining a function even the function does not have any parameter.

### `return` Statement

The `return` statement is a function-exclusive statement that returns value of certain data that can be directly used from the function. Once a return statement is executed, the function ends immediately despite there are codes still left inside.

Function does not need to have a `return` statement which will return `None` when passed to variable or be printed on console terminal (for example, by using `print()` function).

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

Following are the difference between parameters and arguments that is referred significantly when discussed on function.

**Parameter**
Parameter is a function-internal local variable: because parameters is a function-exclusive local variable, it cannot be called from outside.

| OPERATOR |    SYNTAX    | DESCRIPTION                                                  |
| :------: | :----------: | ------------------------------------------------------------ |
|   `*`    |   `*args`    | Allows multiple number of arguments.<br />Call by `args`(arguments) without asterisk, and returns tuple of arguments. Must locate after normal parameter. |
|   `**`   |  `**kwargs`  | Allows use of undefined parameter in advance.<br />Call by `kwargs`(keyword arguments) without asterisks, and returns dictionary of arguments’ name and corresponding values. |
|   `=`    | `arg1=value` | Returns default value otherwise inputted to its parameter. Must locate after normal parameter. |

**Argument**
Argument is a value/object being passed to the function parameter and those passed values and objects will be processed by the function code.

Examples below show how function parameter and argument works:

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
{key_0∶value_0, key_1∶value_1}
```

----

```python
# DEFAULT-INITIALIZED PARAMETER arg2
def function(arg1, arg2="string"):
    print(arg_2)
    
function(1)
function(2, "needle")
```

```
string
needle
```

## Anonymous Function

Also known as **Lambda function (express)**, is a function without declaration without name (thus, anonymous) and does not store data, returning value only from a single expression. Anonymous function is generally used for a single-use function, or as an argument of higher-order function's parameter.

| SYNTAX                                                       |
| ------------------------------------------------------------ |
| `lambda param0, param1 ∶ expression`                         |
| A main body of anonymous function consisting parameters and its return expression. |

Although anonymous function is a function without a name for a single-use, it can be assigned to variables and called when the function is needed. The anonymous function of the named function at *Pure Function* example section is expressed as below:

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

Built-in function which takes iterable objects and function with parameters as arguments. Map function returns a list containing return value of the function with iterable objects as arguments.

| SYNTAX                                                       |
| ------------------------------------------------------------ |
| `map(function, iter0, iter1, ...)`                           |
| In higher-order `map` function, iterable object `iter0` and `iter1` are passed as argument for `function`. |

Conversion to an iterable object, such as `list()` function is necessary to avoid error such as "SyntaxError".

```python 
lst0 = [1, 2, 3, 4, 5]
lst1 = [0, 9, 8, 7, 6, 5]

var0 = map(lambda x, y: x ** 2 + y, lst0, lst1)
var1 = map(lambda y, x: x ** 2 + y, lst1, lst0)

print( list(var0) )
print( list(var1) )
```

```
[1, 13, 17, 23, 31]
[1, 83, 67, 53, 41]
```

## Filter Function

Built-in function which takes iterable object and Boolean conditioning function (aka. predicate) as arguments and returns iterable object containing only with the data that passed the predicate.

| SYNTAX                                                       |
| ------------------------------------------------------------ |
| `filter(predicate, iterable)`                                |
| In higher-order `filter` function, iterable object `iterable`are passed as argument for `predicate`. |

Conversion to an iterable object, such as `list()` function is necessary to avoid error such as "SyntaxError".

```python
lst = [1, 2, 3, 4, 5]

var = filter(lambda x: x % 2 is 0, lst)

print( list(var) )
```

```
[2, 4]
```

## Recursive Function

Recursive function is a function that calls itself (recursion). Factorial $!$ in mathematic is the best example of recursive function implementation.

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

Recursion can occur indirectly by multiple number of functions calling one to another, then back to the beginning.

### Base Case

A case of recursion which doesn’t involve referring to itself anymore. It can be deemed as an exit condition. Without a base case, recursion results infinitely and thus crashes due to memory shortage:

```
RuntimeError: maximum recursion depth exceeded
```

## Decorator

A function which modifies original function’s functionality and returns the modified "function" itself (rather than returning value). Hence, assignment to a variable is needed for a function to properly work after processing through the decorator. Its function will then have a same name as the variable.

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
variable()		# WHICH IS ACTUALLY A FUNCTION ASSIGNED TO "variable".

# DECORATING (MODIFYING) FUNCTION: MAINTAIN FUNCTION NAME
function = decorator(function)
function()
```

Decorator above have decorated (modified) `function()` and assigned the decorated function to a variable `variable()` and `function()`, where latter maintains the function name.

When passing function as a parameter of a decorator, no parenthesis are needed like `function()`. This is because former passes function itself and latter passes return value of the function.

### `@` Symbol

A decorator symbol `@` used for pre-pending the function definition, placed before pre-decorated function.

| OPERATOR | EXAMPLE      | DESCRIPTION                                               |
| :------: | ------------ | --------------------------------------------------------- |
|   `@`    | `@decorator` | `@decorator` is a replacement of `func = decorator(func)` |

```python
# CREATING DECORATOR.
def decorator(func):
    def modified_function():
        """
        statements including func()
        """
    return function_modified

# DECORATING FUNCTION: @ SYMBOL
@decorator
def function():	# ORIGINAL FUNCTION OF "function()"
    statements

# FUNCTION NAME REMAINS THE SAME.
function()
```

Additionally, more than one decorator can be applied to a single pre-decorated function.

```python
@decorator0
@decorator1
def function():
    statements
```

A decorator located closest to pre-decorated function will be applied firsthand. Thus, the function object `function()` will first be decorated by `@decorator1`  then `@decorator0` sequentially.


# **PYTHON: OBJECT-ORIENTED PROGRAMMING**

Previous chapter has explained and dealt with procedural and functional programming. The third scripting method, object-oriented programming is based around usage of classes and objects instead of functions.

## Object

Object (aka. instance) is a block of data which acts like a building brick: every object has its own attributes that are properties and capabilities of the object. The attribute can be accessed and utilized by `object.attribute` format.

The programming based around use of a custom objects is called *object-oriented programming*.

```python
# OBJECT "x" CALLING METHOD "append()" AVAILABLE IN STRING
x = [0 ,3 ,5 ,9]
print( x.append(13) )
```

```
[0, 3, 5, 9, 13]
```

### Method & Attribute

**Method**
: method is an object-dependent function that is bounded by the object, meaning the object needs to be presented to use a method and cannot be used independently.

**Attribute**
: attribute is a features and properties of the object (including bounded function). Hence, methods are included as one of the attributes of the object. However, for easier understanding, this document will distinguish attribute as attribute without methods.

## Classes

Classes create objects (aka. instance), hence can be deemed as an object’s blueprint. Classes are created first by a keyword `class` containing functions as method of the class in indented block.

```python
# CREATING CLASS
class CLASS∶
	global var			# GLOBAL VARIABLE: LINKED TO VARAIBLE OUTSIDE WITH SAME NAME
    attr0 = value		# CLASS ATTRIBUTE
    
    # INSTANCE INITIALIZATION (= CONSTRUCTOR)
    def __init__(self, arg1, arg2):
        # INSTANCE ATTRIBUTES
        self.attr1 = arg1
        self.attr2 = arg2
        
    # INSTANCE METHOD
    def method(self, arg3):
        """
        statements including var3
        """
        return arg3

var = "Hello World!"			# DECLARE VARIABLE (LINKED TO GLOBAL VARIABLE)
instance = CLASS(var1, var2)	# CREATE INSTANCE FROM THE CLASS

instance.method(var3)			# CALLING METHOD
instance.var					# CALLING ATTRIBUTE
```

```
var3
"Hello World!"
```

### `__init__` Method

The `__init__` method is the most important method in class which is used to create class constructor (like the *constructor* in C/C++ language). This method defines how many parameters the instance can have and also responsible for initializing attribute values for instance.

The `__init__` method automatically called only when instance is created from the class. Therefore, initialized attribute can only be access through instance, but not from the class directly. As oppose to this, attribute declared outside the `__init__` method is accessible from both instance and class.

### Global Variable

Variable assigned with `global` keyword represents global variable. This variable is linked to the variable outside the class but shares the same name.

Without `global` keyword, the variable inside the class becomes local variable. Local variable and variable declared outside the class will be irrelevant to each other.

## Instance Method

All methods (or attributes) that are declared normally within the class are instance methods (or attributes). There is no special syntax that need to declare for instance method.

Some may misunderstand instance method can be distinguished by checking whether the argument `self` is there or not. This is not true as `self` is purely an argument and has no power on defining the type of method or attribute. The detail information is explained under the subsection below.

### `self` Variable

The `self` variable is a conventional name to indicate a current instance, meaning it is not a keyword and the name can be set however developer wants. Variables with `self` prefix become instance attributes.

These instance attribute can be accessed only upon declaring an instance (like `this` pointer in C++ language). Variables without `self` prefix cannot be called from the instance as they are not an attribute but a plain local variables. Local variables cannot be called outside its scope of method, and attempting to do so results "AttributeError".

```python
# CREATING CLASS
class CLASS():
    def __init__(self, arg1, arg2, arg3):
        self.A = arg1
        self.B = arg2
        self.C
        D = arg3			# LOCAL VARIABLE
        
    def method(other, x)	# REPLACING "self" VARIABLE TO DIFFERENT NAME STILL WORKS.
    	other.C = x			# ATTRIBUTE "self.C" IS AVAILABLE IN DIFFERENT METHODS.


# INSTANTIATION
instance = CLASS(1, 2, 3)
instance.method(4)
'''EQUIVALENT: 
Class.__init__(self = instance, arg1 = 1, arg2 = 2, arg3 = 3)
Class.method_name(other = instance, x = 4)
'''

# THEREFORE...
CLASS.A			# AttributeError: type object 'Class' has no attribute 'A'

instance.A		# >> OUTPUT: 1
instance.B		# >> OUTPUT: 2
instance.C		# >> OUTPUT: 4
instance.D		# AttributeError: 'Class' object has no attribute 'D'
```

## Class Method

A method which can be accessed through class alone without needs of creating an instance.

|     SYNTAX     | DESCRIPTION                              |
| :------------: | ---------------------------------------- |
| `@classmethod` | Decorator used to declare class methods. |

Though class method is defined by the decorator syntax mentioned above, the method also requires parameter to indicate the class itself (just like instance method have `self` parameter to mention instance itself), conventionally written as `cls`.

```python
# CREATING CLASS
class CLASS:
    def __init__(self, arg1, arg2):
        self.A = arg1
        self.B = arg2
        self.C
        
	def method1(self, arg3):
        self.C = arg3
    
    # DEFINING CLASS METHOD
    @classmethod
    def method2(cls, arg4):
        return arg4
    
    # DEFINING CLASS METHOD FOR INSTANTIATION
    @classmethod
    def method3(cls, x, y):
        return cls(x**2, y**2)
    
    
# INSTANTIATION
instance1 = CLASS(1, 2)
instance1.method1(4)

instance2 = CLASS.method3(1, 2)	# INSTANTIATE: arg1 = 1**1, arg2 = 2**2
instance2.method1(4)

# THEREFORE...
instance1.A			# >> OUTPUT: 1
instance1.B			# >> OUTPUT: 2
instance1.C			# >> OUTPUT: 4

instance2.A			# >> OUTPUT: 1 (= 1**2)
instance2.B			# >> OUTPUT: 4 (= 2**2)
instance3.C			# >> OUTPUT: 4

CLASS.method2(3)	# >> OUTPUT: 3
```

## Static Method

A method that can be called without instantiation, but without parameter to call itself like `self` and `cls`.

| SYNTAX          | DESCRIPTION                               |
| --------------- | ----------------------------------------- |
| `@staticmethod` | Decorator used to declare static methods. |

Since static method does not have a parameter to call itself, static method cannot access or modify any attribute from class and instance. This makes static method identical to normal function belonged to class.

```python
# CREATING CLASS
class CLASS:
    def __init__(self, arg1, arg2):
        self.A = arg1
        self.B = arg2
        self.C
        
	def method1(self, arg3)
    	self.C = arg3
        
    @staticmethod
	def method2(arg4):
        return True if arg4 is 4 else False


# INSTANTIATION
instance = CLASS(1, 2)
instance.method1(4)

# THEREFORE...
instance.A			# >> OUTPUT: 1
instance.B			# >> OUTPUT: 2
instance.C			# >> OUTPUT: 4

CLASS.method2(4)	# >> OUTPUT: True
```

## Magic Method

Magic method is a special method which has Double UNDERscores(dunder) on both side of its name. These method generally represents operator, and are referenced to overload operator to modify the operator's functionality. 

Previously encountered `__init__` method used for instance initialization is one of the widely used magic method. More can be seen on the table below:

| OPERATOR | NAME           | MAGIC METHOD               |
| -------- | -------------- | -------------------------- |
| `+`      | Addition       | `__add__(self, other)`     |
| `-`      | Subtraction    | `__sub__(self, other)`     |
| `*`      | Multiplication | `__mul__(self, other)`     |
| `/`      | Division       | `__truediv__(self, other)` |
| `&`      | AND            | `__and__(self, other)`     |
| `^`      | XOR            | `__xor__(self, other)`     |
| `|`      | OR             | `__or__(self, other)`      |

### Operator Overloading

Overloading operator means customizing operator to function differently on certain classes or portion of the script. Magic method is used to overload operator but overloaded functionality is only exclusive to that specific class. As an example, `x + y`  is expressed as `x.__add__(y)` .

```python
class CLASS:
    def __init__(self, arg1):
        self.A = arg1
        
    def __add__(self, arg2):
        return "&".join([self.A, arg2])		# INSERT "&" BETWEEN TWO STRING OBJECTS.

    
var1 = CLASS("Hello")
var2 = CLASS("World!")
print(var1 + var2)
```

```
Hello&World!
```

## Inheritance

Inheritance is act of superclass providing (inheriting) attributes and methods to derived subclass.

Any class that inherits attributes and methods and class that derives from are called superclass (base class) and subclass (child class) respectively. When the same name of attributes and methods exists on both superclass and subclass, superclass's attributes are overwritten by attributes of subclass.

Inheritance can be done through multiple instances but cannot have circular inheritance.

```python
class SUPERCLASS:
    def __init__(self, arg1, arg2):
        self.A = arg1
        self.B = arg2

        
# DERIVE SUBLCASS (BUT NO INHERITANCE YET)
class SUBCLASS (SUPERCLASS):
    def __init__(self, x, y):
        super().__init__(y, x)	# INHERITING SUPERCLASS'S ATTRIBUTES AND METHODS
        """EQUIVALENT:
        super(SUBCLASS, self).__init__(arg1 = y, arg2 = x)
        """
        self.A = x
        self.C = y


# INSTANTIATION  
instance = SUBCLASS(1, 3)

instance.A		# >> OUTPUT: 1 (ALTHOUGH INHERITED "self.A = 3", OVERWRITTEN BY SUBCLASS)
instance.B		# >> OUTPUT: 1 (ATTRIBUTE "B" INHERITED FROM SUPERCLASS)
instance.C		# >> OUTPUT: 3
```

### Super Function

The `super()` function calls the attributes or methods from its superclass directly. Without this function, the `instance.B` will cause "AttributeError" saying no attribute `B` exist within `SUBCLASS` instance. 

The following syntax is used for single base class inheritance:

```python
class SUBCLASS(SUPERCLASS):
    super().__init__()
    super().attribute
```

### Diamond Problem

Diamond problem refers to the inheritance logic problem where a single subclass (`SUBCLASS`) is inherited from two classes (`INTERCLASS1` and `INTERCLASS2`) derived from a single superclass (`SUPERCLASS`). In such case, it is likely that inheritance from superclass occurs twice to the subclass.

This occurrence can be prevented using `super()` function:

```python
# SUPERCLASS
class SUPERCLASS:
    def __init__():
        print("START SUPERCLASS __INIT__")
        print("----")
        print("END SUPERCLASS __INIT__")
        
        
# TWO INTERMEDIATE CLASSES DERIVED FROM SUPERCLASS
class INTERCLASS1(SUPERCLASS):
    def __init__():
        print("START INTERCLASS1 __INIT__")
        super().__init__()
        print("")
        
        
class INTERCLASS2(SUPERCLASS):
    def __init__():
        print("START INTERCLASS2 __INIT__")
        super().__init__()
        print("END INTERCLASS2 __INIT__")
        
        
# SUBCLASS DERIVED FROM TWO INTERMEDIATE CLASSES
class SUBCLASS(INTERCLASS1, INTERCLASS2):
    def __init__():
        print("START SUBCLASS __INIT__")
        super().__init__()
        print("END SUBCLASS __INIT__")
        
        
# INSTANTIATION
instance = SUBCLASS()
```

```
START SUBCLASS __INIT__
START INTERCLASS1 __INIT__
START INTERCLASS2 __INIT__
START SUPERCLASS __INIT__
----
END SUPERCLASS __INIT__
END INTERCLASS2 __INIT__
END INTERCLASS1 __INIT__
END SUBCLASS __INIT__
```

The result above shows the superclass is only inherited once, this is due to `super()` function recognizing the inheritance pattern and skips extra inheritance from superclass.

## Lifecycle of Object

Object has three stages of lifecycle:

1. **Definition**
    : a stage of creating class using keyword `class`.
2. **Instantiation**
    : creating an instance through `__init__` magic method.
3. **Destruction**
    : Python automatically deletes instance once the number of variables referring to the instance counts down to zero, called reference count. Manual instance deletion can be done by `del` statement (aka. `__del__`  method). This process of instance deletion is called *garbage collection*.

## Encapsulation

Encapsulation restricts access to attributes/methods and variables to prevent accidental modification. Refer to *Data Hiding* and *Properties* for more information on encapsulation.

### Data Hiding

Restricting external code from accessing attributes/methods and variables of instances by making them private. Python uses the following two symbols, underscore `_` and dunder `__` for make attributes and methods private.

| SYMBOL | EXAMPLE       | DESCRIPTION                                                  |
| :----: | ------------- | ------------------------------------------------------------ |
|  `_`   | `_attribute`  | Underscore at beginning of an attribute's name. This prevents accessing attribute from `import` statement, but class-external code can still access this "private" attributes. |
|  `__`  | `__attribute` | Dunder at beginning of an attribute's name. This prevents accessing from import statement and class-external code. Bugs caused by sharing same object name can be avoided by this approach. |

### Properties

Properties is a decorator that allows method to be updated without modifying the method directly. Because of this, property does not permitted direct change of data which makes the method seems read-only.

| SYNTAX      | DESCRIPTION                           |
| ----------- | ------------------------------------- |
| `@property` | Decorator used to declare properties. |

Property is declared using decorator symbol, meaning it is used specifically for method. One of the special feature of property is it does not take any argument except `self` variable to call itself from instance. Although property is based on method, syntax to call property is same as attribute: `instance.attribute`.

```python
# CREATE CLASS
class CLASS:
    def __init__(self, arg1, arg2):
        self.A = arg1
        self.B = arg2
        
    @property
    def method(self):
        return True
    
    
 # INSTANTIATION 
instance = CLASS(1, 3)
instance.method				# >> OUTPUT: True
instance.method = False		# AttributeError: can't set attribute
```

Properties are consist of three different method used for encapsulation: `getter`, `setter`, and `deleter`.

| METHOD  | SYNTAX            | DESCRIPTION                                           |
| ------- | ----------------- | ----------------------------------------------------- |
| Getter  | `@property`       | Method for getting the value from property attribute. |
| Setter  | `@method.setter`  | Method for setting the value of property attribute.   |
| Deleter | `@method.deleter` | Method for deleting property attribute.               |

```python
# CREATING CLASS
class CLASS:
    def __init__(self, arg1, arg2):
        self.A = arg1
        self.B = arg2
        
    @property			# GETTER METHOD
    def method(self):
        return self.A
        
    @method.setter		# SETTER METHOD
    def method(self, arg3):
        statements
        
    @method.deleter		# DELETER METHOD
    def method(self):
        del self.A
```

The `setter` method is used to modify the property attribute which may seems like defining property is unnecessary. However, this is not true as a single function is separated into more than one method: method exclusive for setting value and returning value.

Using the property with these methods encapsulate sensitive codes that shouldn't be modified by the user (such as `setter` method), while maintaining constant API user can access despite having updated function.

# **PYTHON: PYTHONICNESS**

As learning to understand how the Python can and be use on programming, there is a Python's unique style of programming recommended for Python developer to implement as possible.

## Zen of Python

A set of principle guide when coding Python, provided within Python itself. Accessible via example below.

```python
import this
```

## Python Enhancement Proposals

Eight scripting style guides for Python suggested by experienced Python developers, aka. **PEP8**.
1.	Module should have short, all-lowercase name.
2.	Class name should be in the CapWords style.
3.	Most variables and function names should be lowercase_with_underscores.
4.	Constants (variables that never change value) should be CAPS_WITH_UNDERSCORES.
5.	Names that would clash with Python keywords (such as 'class' or 'if') should have a trailing underscore.
6.	Line shouldn’t be longer than 80 characters.
7.	`from module import *` should be avoided.
8.	There should be only one statement per line.

## Entry Point

While other program language such as C/C++ has a traditional entry point called `main()` which is the function where the program execution starts, Python does not have one.

Instead, Python uses special variable `__name__` which indicates the current Python script being executed. When this script is the main executing file, the `__name__` variable is assigned as `"__main__"` value. 

```python
# ENTRY POINT
if __name__ == "__main__":
    statements
```

Codes and statements indented under this condition will not be executed when it is imported as a module to the other script. Beware, the equivalent `==` operator cannot be replaced to logical `is` operator.

# **PYTHON: REGULAR EXPRESSION**

Regular expression is a domain specific language (DSL) for string manipulation. Regular expression is not Python-exclusive feature, and is utilized by other programming languages as well (aka. regex).

## `re` Module

The module which allows Python to access regular expressions. To use the regular expression, place the letter `r` before the string object which indicates raw string.

| SYNTAX | EXAMPLE     | DESCRIPTION        |
| ------ | ----------- | ------------------ |
| `r`    | `r"string"` | Raw string object. |

### Special Sequences

In regular expression not only the backslash works as an escape character `\` but also as a metacharacter that supports various features.

| SYNTAX | EXAMPLE | DESCRIPTION                                      |
| ------ | ------- | ------------------------------------------------ |
| `\`    | `r"\"`  | Metacharacter for special sequence (+ *escaper*) |


## Grouping

Grouping makes series of characters or strings to be as one and allows grouped to become an argument for other metacharacters as seen in example of the previous section.

| OPERATION  | EXAMPLE                | DESCRIPTION                                      |
| ---------- | ---------------------- | ------------------------------------------------ |
| `()`       | `r"^str0(str1)" `      | Grouping `str1`  separately from `str0` .        |
| `group()`  | `re.search.group(...)` | Method used for calling a grouped.               |
| `groups()` | `re.search.groups( )`  | Method used for calling all the groups in tuple. |

Calling `group(0)` is same as `group()` which returns matched characters or strings between compared two. The rest of integer starting from 1 calls individual group starting from left to right and outer to inner group.

### Named Groups

Group can be specified to have its own name to be called. No double quotations are needed when inserting name but are needed when calling the named groups.

| SYNTAX | EXAMPLE                | DESCRIPTION                            |
| ------ | ---------------------- | -------------------------------------- |
| `?P<>` | `r"(?P<name>string)" ` | Designate group with name for calling. |

### Non-capturing Groups

Group that cannot be accessible by `group(...)` and `groups()` methods, which results skipping index on such groups. However, `group(0)` is an exception where it calls matched comparison between two rather than groups.

| SYNTAX | EXAMPLE          | DESCRIPTION                                             |
| ------ | ---------------- | ------------------------------------------------------- |
| `?:`   | `r"(?:string)" ` | Inaccessible via `group(...)`  and `groups()`  methods. |

# **PYTHON: FILE MANAGEMENT**

When using the Python in advanced scripting, such as use for scientific research and artificial intelligence, the input data that needs to be computed cannot be stored through console command of the Python and may need to read through files if necessary.

## Opening Files

Before reading or manipulating files via Python, the file must be opened firsthand. The `open()` function is used to open a file user want to open.

```python
open("filename.txt")
```

| OPTION | DESCRIPTION                        |
| ------ | ---------------------------------- |
| `r`    | Read mode (default)                |
| `w`    | Write mode (rewrites content)      |
| `a`    | Append mode (adding new content)   |
| `rb`   | Binary read mode (non-text files)  |
| `wb`   | Binary write mode (non-text files) |

The `close()` method is used to close currently opened files. Closing file in very important on avoiding wasting resource. Ensure the files are always closed even on exceptions by using try/except or with statement.

```python
variable = open("file.txt", "r")
variable.close()
```

### `with` Statement

The `with` statement creates temporary variable only available inside an indented code block of the `with` statement. When the file is opened using this statement, the file automatically closes at the end of the code block even if exceptions occur within it.

```python
with open("file.txt") as variable:
    statements
```

### Absolute & Relative Paths

Just as other programming languages are, Python have two different types of path: absolute and relative path. When designating a path, use double backslash `\\` as a single backslash is an escape character that can cause unwanted operation.

```python
variable = open("path\\file.txt")
```

## Reading Files

After opening the text-based file, Python can read lines of file's content using `read()` method. Argument inside the method represent the number of bytes the method will read.

Read method can be used on the same file over again, but it will continue from where Python last read. When there’s no argument, the read method reads the rest of the text from where it last left off.

```python
with open("path\\file.txt") as variable:
    print(variable.read(16))	# READ 16 BYTES FROM THE START OF THE CONTENT.
	print(variable.read(4))		# READ 4 BYTES FROM THE POINT AFTER PREVIOUS 16 BYTES.
	print(variable.read())		# READ THE REST OF THE TEXT AFTER PREVIOUS 4 BYTES.
	print(variable.read())		# READ NO TEXT AS NO MORE CONTENT TO READ.
```

The `Readlines()` method is used to return a list of text of each line. The method do accepts argument, but it works exactly same as a read method: it designates how many bytes to read.

Don’t get confused with `Readline()`s method which only reads the first line in string.

```
<file.txt>
First line here.
Second line there.
Last line somewhere.
```

```python
with open("path\\file.txt") as variable:
    print(variable.readlines())
    print(variable.readline())
```

```
['First line here.\n','Second line there.\n','Last line somewhere.']
First line here.
```

### Printing Line using Loop

Each line of text-base content can be retrieved using `for` loop statement:

```python
for variable in file:
    print(variable)
```

## Writing Files

In Python, file can be created or (over)written by the `write()` method of the text-based file object. There are two options user can choose when writing: overwrite and append.

Suppose there is a file with text content written as follows:

```
<file.txt>
First line here.
Second line there.
Last line somewhere.
```

Overwrite mode `w` deletes all of previously existing content and write down fresh from the beginning.

```python
with open("path\\file.txt", "w") as variable:
    variable.write("TEXT OVERWRITTEN!")
```

```
<file.txt>
TEXT OVERWRITTEN!
```

On the other hand, append mode `a` does not delete existing content but continue writing from the end.

```python
with open("path\\file.txt", "a") as variable:
    variable = variable.write("TEXT APPENDED.")
	print(variable)
```

```
<file.txt>
First line here.
Second line there.
Last line somewhere.TEXT APPENDED.
```

Upon successfully written, `write()` method returns the number of bytes written.

### Creating Files

New file can be created using the `write()` method which does not bound by just writing on existing file. Creating file is simply done by designating file name is doesn't exist on the specified path.

```python
with open("path\\new-file.txt", "w") as variable:
    variable.write("NEW FILE CREATED!")
```

```
<new-file.txt>
NEW FILE CREATED!
```

# **PYTHON: PACKAGE**

Python has variety of packages that can be easily downloaded and used on-demand. This chapter describes what the package is and how to implement it to the script.

## Modules

A Python module is simply a Python source code file with `.py` extension. Developer may developed their own code containing class or function, and calling those codes from distribute Python file can be done using `import` keyword.

```python
import module
module.function()
```

Above approach still requires name of the module to be mentioned every time when using its function. To ignore referring to the module while still using module's function, use the `from` keyword beforehand.

```python
from module import function1, function2
from module import function as name
```

However, because module is not referred to use the function, there is potential conflict caused by function naming. Unless the function is named with guaranteed uniqueness, it is safe to use the previous approach to import modules.

## Package

Package is a directory of folder that holds a collection of Python modules or sub-packages. Every package folder must have a special Python file called `__init__.py` which can be blank or contains directory path of current package to prevent directories error caused by a common name.

```python
import package.module
from package.module import function
```

## Python Package Index

Python Package Index (aka. PyPI) is an external module storage website (*https://pypi.python.org/pypi*). To download and install the modules and packages, a software called pip is necessary.

### PIP

The pip software is a package management system required to install and manage the Python package. Nowadays, pip comes installed by default with modern distribution of Python. User can install pip separately online. Installation and management of packages are done using Command Prompt.

| NAME         | DESCRIPTION               | COMMAND                 |
| ------------ | ------------------------- | ----------------------- |
| Installation | Install the package       | `pip install package`   |
| Remove       | Uninstall the package     | `pip uninstall package` |
| List         | Show the list of packages | `pip list`              |

When using Python on Windows, it is recommended to use `python -m pip` instead of `pip` alone. 

```
python -m pip
```

The command means accessing the pip under the python interpreter specified as `python` in environment variable. This allows package management by each interpreter more controllable, even when using virtual environment. When there is another version of Python installed, say 32 bits of Python 3.5

```
py -3.5-32 -m pip
```

# **PYTHON: VIRTUAL ENVIRONMENT**

C-based project needs to include header files and libraries individually when compiling the script. Python, on the other hand, requires installation of modules under the interpreter directory.

However, when working with multiple Python projects, having all the packages installed in a single interpreter is inconvenient and inefficient. This is why separating Python environment is essential which can be done using virtual environment.

## `venv` Package

The Python3 has virtual environment package `venv` included by default. The package support creating lightweight virtual environments with their own site directory, optionally isolated from system site directory.

Each virtual environment has its own Python binary (which matches the version of the binary that was used to create this environment) and can have its own independent set of installed Python packages in its site directory.

### Creating Environment

Creating a virtual environment under the name `.venv` on desired project directory is done as follows:

```
python -m venv D:\Workspace\Python\project\.venv
```

### Activate Environment

Here, the term "activating" means activating virtual environment on the command prompt or terminal. While this is unnecessary when running the script under virtual environment, activation is required when installing packages using pip on console.

* Windows:

    ```
    D:\Workspace\Python\project\.venv\Scripts\activate.bat
    ```

* Unix (e.g. Linux and macOS):

    ```
    source ~/Workspace/Python/project/.venv/bin/activate
    ```

### Deactivate Environment

To exit from virtual environment activated console, user need to "deactivate" virtual environment.

```
deactivate
```

This is same as enter the command `PATH=D:\Workspace\Python\.venv\Scripts\deactivate.bat`. Because of this, relocating the virtual environment directory will cause `deactivate` command unable to recognize the path.
