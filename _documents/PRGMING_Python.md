---
layout: document
title: "Programming | Python3"
---
# **PYTHON: BASIC**

Python is a high-level programming language with applications in numerous areas, including web programming, scientific computing, and artificial intelligence. The language is executed sequentially in line-after-line order and doesn't need semicolon `;` to end the line of statement.

This section describes on fundamental and basic concepts and coding syntax of Python.

## Interpreter

Programming language such as C++ uses compiler which translates the source code (written in English) to a computer language (such as binary language) computer can understand for an execution. However, interpreter allows computer to execute the program directly from the source code without a translation.

Python is interpreter-driven high-level language: this allows scripting the code much easier than compiler, but its execution time can be slower in comparison.

## Comment

There are two different comments in Python: line comment and block comment.

* **Line comment**
  : place a comment worth a single line of code, and is declared by `#` (octothorpe).
* **Block comment** (aka. **docstrings**)
  : place a comment on multiple lines of code by using three pairs of double quote `""" """` or single quote `''' '''`. Docstrings can even be used to write multiple lines of sentence and view it on runtime.

```python
"""
BLOCK COMMENT:
multiple line of comment can be placed here and can even be viewed on runtime.
"""
print(1)
print(2) # LINE COMMENT: for a single line of code.
print(3)
print("""DOCSTRINGS can be viewed
on Python runtime.""")
```

```
1
2
3
DOCSTRINGS can be viewed
on Python runtime.
```

## Input & Output

Python has a single input and output function for a terminal text-based:

| INPUT/OUTPUT | SYNTAX            | DESCRIPTION                                                  |
| ------------ | ----------------- | ------------------------------------------------------------ |
| `input()`    | `input("Write:")` | String argument for `input` appears in when needed to enter input, and always return as string object. |
| `print()`    | `print("Output:",A)` | Print strings and any other data types on the screen, where `A` is concatenating string variable. |

```python
A = input("Write: ")
print(A)
# EQUIVALENT: print(input("Write: "))
```

```
Write: Hello World!
Hello World!
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
  : Declaration is declaring existence of the construct of such as variables, functions, objects, and more. The declaring also includes specifying which data type the construct is. The term of declaration is unclear in Python since constructs in this language do not need to be declared with data type.

* **Definition**
  : Definition refers to block of codes on values and performance the construct has and is capable of.

  ```python
  variable = 1;
  def function():
      statements
      return 0
  ```

* **Initialization**
  : Initialization is assigning the initial value to the construct, simply the *first* definition. Since the first definition is generally done on the same time when declaring the construct. Hence, initialization is commonly thought by people as *declaration + definition* which is not always true.

Programmer should observe the rules on naming variable in Python:

* Only letters, numbers, and underscores are allowed.

* Name cannot start with numbers.

* Spaces are not allowed.

Variables are not data-type fixed, allowing programmer to change the value whatever and whenever they want even from a single variable.

### `del` Keyword

A keyword used to delete variable. Deleted variable can be reassigned later.

```python
# DECLARATION OF THE VARIABLE "x"
x = "Python"
print(x)

# DELECTION OF THE VARIABLE "x"
del x
print(x)
```

```
Python
NameError: name 'x' is not defined
```

### Constant Variable

Unfortunately, Python does not have a constant variable. While C-based language do have this feature, developer should just be careful not to mess up the what-is-used-as-constant variable.

## Data Type

Data type of the Python that variable can store can be categorized into three different type: numeric, string, and Boolean data type. Depending on the data type, Python can perform type-specific features that process the data, called operation. Those that can operates data are (1) operator, (2) function, and (3) method.

Although a function and a method will be introduced in later chapter, knowing the key difference between these two as not to get confused on understanding concepts.

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

The byte size of numeric data type is greater than any other languages. This is just a maximum byte size numeric data type can have and it can be much smaller depending on the what the number is. This flexibility of the byte size makes Python doesn't require data type designation.

Data type `float` is one of the commonly used numeric data type as it’s the smallest data type that can express the fraction besides `complex`. `float` data type has following properties:

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
| Subtraction                    |   `-`    | Python doesn’t have a subtraction.<br />Instead, you have a negative sign which could substitute subtraction, as adding negative value is equal to subtracting. |
| Multiplication                 |   `*`    | -                                                            |
| Exponential                    |   `**`   | -                                                            |
| Division                       |   `/`    | When divided, the value automatically changes to data type of `float`, a data type of number with decimal point. |
| Quotient (aka. floor division) |   `//`   | When divided, gives an output a quotient of division only, without a remainder. |
| Remainder                      |   `%`    | When divided, gives an output a remainder of the division.   |

For easier readability of the arithmetic operation, you can place blank spaces between number and operator as it does not affect anything on its output.

Additional operations can be performed with built-in functions and methods exclusive to numeric data type.

| FUNCTION  | EXAMPLE             | DESCRIPTION                                                  |
| --------- | ------------------- | ------------------------------------------------------------ |
| `max()`   | `max([0,1,2,3,4])`  | Find the maximum number inside.                              |
| `min()`   | `min([0,1,2,3,4])`  | Find the minimum number inside.                              |
| `abs()`   | `abs(-21)`          | Find out absolute value of the number.                       |
| `round()` | `round(164.2597,2)` | Rounds up the number to one’s digit on default, or to a fraction digit behind. |
| `sum()`   | `sum([0,1,2,3,4])`  | Sum all the number in the list. If it’s not a list, an error will occur. |

```python
print(max([0,1,2,3,4]))
print(min([0,1,2,3,4]))

print(abs(-21)) 

print(round(164.259763145))
print(round(164.259763145,2))

print(sum([0,1,2,3,4]))
```

```
4
0
21
164
164.26
21
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

String object is a value assigned to string data type that is created by entering text between a pair of single quotation marks `' '` or double quotation marks `" "` .

To place single or double quotes inside a string, place a backslash `\` before the quotes to escape from premature end of string.

```python
# COMPARISON BETWEEN IMPROPER AND PROPER WAY OF TYPING STRINGS.
print('Where's my "Cat in the Hat" book?')
print('Where\'s my "Cat in the Hat" book?')
```

```
Where
Where's my "Cat in the Hat" book?
```

Create a string with three sets of quotes (either single or double) becomes docstring, which newlines that are created by pressing Enter button are automatically escaped without newline `\n` manually.

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

Since string is an object, the string has its own method and attribute to access its features:


| METHOD         | EXAMPLE                    | DESCRIPTION                                                  |
| -------------- | -------------------------- | ------------------------------------------------------------ |
| `format()`     | `str.format(data)`         | Inserts string or non-string `data` type to a designated space via location or name designated by `{}`. |
| `join()`       | `str.join(str_lst)`        | Joins a list of string objects `str_lst` by placing string object `str` in-between. |
| `split()`      | `str.split([str_1])`       | Convert a string `str` to a list by separating based on blank spaces if there's no argument in method.<br /><br />[OPTIONAL: In case there’s an argument `str1_`, the string object `str` is separated based on `str_1`.] |
| `replace()`    | `str.replace(str_1,str_2)` | Replace `str_1` to `str_2` within the string object `str`.   |
| `startswith()` | `str.startswith()`         | Check the start of the `str` for equivalence.                |
| `endswith()`   | `str.endswith()`           | Check the end of the `str` for equivalence.                  |
| `upper()`      | `str.upper()`              | Change every text in `str` to uppercase letter.              |
| `lower()`      | `str.lower()`              | Change every text in `str` to lowercase letter.              |


```python
# STRING FORMAT: [1] BY-LOCATION & [2] BY-NAME ASSIGNMENT
lst = [str_0, int_1, int_2]
print("{2} {0} {1}".format(lst[0], lst[2], lst[1]))
print("{x} {y} {z}".format(x = lst[0], y = lst[2], z = lst[1]))

# STRING CONCATENATION
print(" ! ".join([str_0, str_1, str_2]))
print("string_0 ! string_1 ! string_2".split(" ! "))

# STRING REPLACEMENT
print("NO No NO".replace("NO","YES"))

# CHECK-UP FOR THE STRING
print("This is a sentence.".startswith("this"))
print("This is a sentence.".endswith("sentence."))

# ALPHABET UPPER/LOWERCASE
print("This is a SENTENCE.".upper())
print("This is a SENTENCE.".lower())

```

```
int_1 str_0 int_2
str_0 int_2 int_1

str_0 ! str_1 ! str_2
[str_0, str_1, str_2]

YES No YES

False       # False as the first letter "t" is not capitalized.
True        # True as it also includes a period at the end.

THIS IS A SENTENCE.
this is a sentence.
```
## Type Conversion

Converting one data type to another data type is done as follows:

| FUNCTION  | NAME               | DESCRIPTION                                                  |
| --------- | ------------------ | ------------------------------------------------------------ |
| `int()`   | Convert to integer | `float`: Fraction is eliminated, returning integer only.<br />`string`: Only numerical characters are convertible. |
| `float()` | Convert to float   | `int`: No restriction.<br />`string`: Only numerical characters are convertible. |
| `str()`   | Convert to string  | `int`: No restriction.<br />`float`: No restriction.         |

## Escape Character

Escape character `\` is used to escape from execution of operation intended for an operator. Escape character is also used to code a single long command into short consecutive multi-line commands.

| SYNTAX | DESCRIPTION    |
| ------ | -------------- |
| `\n`   | New line       |
| `\t`   | Horizontal tab |
| `\\`   | Backslash      |
| `\b`   | Backspace      |
| `\'`   | Single quote   |
| `\"`   | Double quote   |

## None

Object with no value, equivalent to `Null` in C++ language. Although `None` can be used as `False` in Boolean logic conditioning, `None` and `False` is completely different even in Boolean concept.

```python
# CONDITIONAL CHECK: is None can be deemed as False in Boolean?
if not(None and True):
    print(None)
```

```
None                    # This proves that None can be used as False in Boolean.
```

# **PYTHON: CONDITIONAL AND LOOP**

Procedural programming uses the sequential script execution property. It is the basic programming style using mostly with conditional and loops statements with functions as additional assistance.

## Indentation
Indentation is used to delimit (to fix or mark the limits or boundaries) blocks of code. In other word, indentation is used to distinguish where the block of code belongs to. Indentation is needed in a section of a code with colon `:` inside.

Beware, placement of an indentation can change the script entirely.

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

`if` statement runs code if a condition is true. When condition evaluates `True`, the statements are carried out but ignored otherwise.

```python
if condition:
    statements
```

### `else` Statement

A statement that follows after `if` statement, and contains code that is called when condition evaluates `False`. The `else` statement is not indented along with `if` statement.

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

Shortcut of chain of `if` statement and `else` statement.

```python
if condition: 
    statements
elif condition:
    statments:
else:
    statements
```

## Ternary Operator

Conditional expression with a functionality same as `if` statement but much simpler. This operator is called “ternary” since it only take three arguments.

```python
var = True_return if condition else False_return
```

Ternary operator should not be overused as it reduces readability, but useful on variable assignment.

## `while` Loop

The statements inside are repeatedly executed (iteration) as long as the condition holds. The loop ends once it evaluates `False`.

```python
while condition:
    statements
```
Not just in `if` statement but `else` statement can also be used in `while` loop statement: the statements under the `else` is executed at the end when the cycle of loop has finished normally (depletion of iteration).

```python
# FINISHED LOOP: completed iteration
while i < 10:
    i += 1
    if i == 999:
        break
    else:
        print("First...successful!")

# FINISHED LOOP: forece-escaped via break statement
while i < 10:
    i += 1
    if i == 5:
        break
    else:
        print("Second...successful!")
```

```
First...successful!
```

### `break` Statement

The `break` statement can be used to end a loop prematurely. When encountered inside a loop, the `break` statement causes the loop to finish immediately. However, it does not break from its outer loop.

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

The `continue` statement skips the rest of the statement below inside the loop and jumps back to the conditioning of the loop rather than stopping it.

```python 
while i<5:
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

Statements inside it are repeatedly executed (iteration) as long as it is in the valid range. The loop ends once the range object is out of range integer.

```python
for var in iterable:
    statements
```

Here, a local variable `var` obtains integer from `iterable` iterable object and execute statements one-by-one until running all the values inside the object. The `iterable` doesn’t have to be an iterable object like range object but a string can also work (returns character comprising the string object).

```python
for var in range(3,9,2):
    print("Hello World" , var)
```

```
Hello World 3
Hello World 5
Hello World 7
```

Just like `while` loop statement, `break` and `continue` statement can be used in `for` loop as well, as it is the same iterating loop.

Just like `while` loop, `else` statement can also be used in `while` loop statement: the statements under the `else` is executed at the end when the cycle of loop has finished normally (depletion of iteration).

```python
# FINISHED LOOP: completed iteration
for i in range(10):
    if i == 999:
        break
    else:
        print("First...successful!")

# FINISHED LOOP: forece-escaped via break statement
while i in range(10):
    if i == 5:
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
for var in range(3,9,2):
    print("Hello World" , var)
```

```
Hello World 3
Hello World 5
Hello World 7
```

## Exception

Exception occurs when something goes wrong due to incorrect coding or input, stopping the program immediately. There are some statements that can be used to handle the script errors as follows.

### `try`/`except` Statement

`try`/`except` statement is used to handle exceptions, and to call certain statements when an exception occurred. There are additional statements that can be used together as well.

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
except:     # UNCONDITIONAL EXCEPTION LOCATES LAST.
    statements
finally:
    statements
```

Even after `try`/`except` statement is executed, the program does not stop and continues onward.

### `raise` Statement

`raise` statement is used to raise exception intentionally, but manually. As the statement raises error, it also stops the runtime immediately, preventing anymore further execution thereafter.

```python
# EXPLICITLY RAISE EXCEPTION: can be used alone, even inside an 'except' code above.
raise

# PROVIDE DETAIL DESCRIPTION ON EXPLICITLY RAISED EXCEPTION
raise exception_description
```

### `assert` Statement

`assert` statement checks expressions of code for validity (aka. assertion). When tested expression is valid with no problem, assertion returns `True`. When assertion is `False`, an exception is raised.

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

Null operation that does nothing when executed. Useful by placing it where the code will be placed but hasn’t been written yet. 

# **PYTHON: ITERABLE OBJECT**

Not just its simplicity that makes Python language useful, its iterable object is powerful and flexible than any other programming language. While C++ has a iterable object called "array", Python has four iterable object that has same features but with slightly different properties.

## Iterable Object

An object with an `__iter__` method (Python3) which returns iterator object, eventually going through every data within the iterable object in sequence; called iteration.

### Iterator Object

An object with a `__next__` method (Python3) which automatically calls next element of data.

## List

An iterable object in Python used to store an indexed list of items, irrelevant to data type. Corresponds to array in other programming languages such as C++. Uses bracket ` []` to assign elements.

```python
lst_obj = [int_1, str_2, lst_3, any_4, ...]
print(lst_obj)
print(lst_obj[0])
```

```
[int_1, str_2, lst_3, any_4, ...]
int1
```

It is possible to change the existing value within a list. Calling the element that is outside the range of list size is not possible and results error.

```python
lst =[int_0, int_1, int_2]
lst[1] = int_3
lst[3] = int_4
```

```
[int_0, int_3, int_2]
IndexError: list assignment index out of range
```

String data can be indexed like lists, where each character is an elements of the string.

```python
variable ="Hello." 
print(variable[1])
```

```
e
```

A list can be added and multiplied, including additional operation exclusive to iterable objects. Operations below are not restricted to a list alone but can be applied to other iterable objects introduced later.

| OPERATOR | NAME           | DESCRIPTION                                                  |
| -------- | -------------- | ------------------------------------------------------------ |
| `+`      | Addition       | Merge two or more different lists to a single list.          |
| `*`      | Multiplication | Multiply the string by the number of integer (float does not work). |
| `in`     | Included       | Check if an item is in a list.                               |

```python
lst=[ 1 ,2 ,3 ]
print(lst + [ 3 ,4 ,5 ])
print(lst * 3)
print(1 in lst)
print(2 not in lst)
```

```
[ 1 ,2 ,3 ,3 ,4 ,5]
[ 1 ,2 ,3 ,1 ,2 ,3 ,1 ,2 ,3 ]
True
False
```

Following are functions that does certain features to and for list (or more like iterable) object.

| FUNCTION      | EXAMPLE                           | DESCRIPTION                                                  |
| ------------- | --------------------------------- | ------------------------------------------------------------ |
| `len()`       | `len(lst)`                        | Find the length of the `lst` list by counting elements.      |
| `all()`       | `all([condition for var in lst])` | Return `True` when all elements inside the `lst` list meets `condition`. |
| `any()`       | `any([condition for var in lst])` | Return `True` when any element inside the `lst` list meets `condition`. |
| `enumerate()` | `enumerate(lst)`                  | Iterates elements inside the `lst` list with sequencing.     |
| `list()`      | `list(iterable)`                  | Convert an iterable object to a list; creates empty list if `iterable` is not presented. |

```python
lst=[10,9,8,7 6]
print(len(lst))

if all( [ var > 5 for var in lst] ):
    print("Numbers are all above 5.")

if any( [ var % 2 ==  0 for var in lst] ):
print("At least one number is even.")

for var in enumerate(lst):
    print(var)
```

```
5
Numbers are all above 5.
At least one number is even.
(0,10)
(1,9)
(2,8)
(3,7)
(4,6)
```

As list is an iterable object, it also has methods it can access to perform certain features.

| METHOD     | EXAMPLE                 | DESCRIPTION                                             |
| ---------- | ----------------------- | ------------------------------------------------------- |
| `append()` | `lst.append(data)`      | Add `data` at the end of the `lst` list.                |
| `insert()` | `lst.insert(int, data)` | Add `data` at `int` element location of the `lst` list. |
| `index()`  | `lst.index(data)`       | Find the smallest number of location of *data*.         |

```python
lst = [10,9,8,7 6]
print(lst.append("7"))

print(lst.insert(1,"7"))

print(lst.index(8))
```

```
[10,9,8,7,6,"7"]
[10,"7",9,8,7,6]
2
```

### List Comprehension

Generating a list containing data that follows a certain simple rule/pattern. 

| SYNTAX          | EXAMPLE                                   | DESCRIPTION                                                  |
| --------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `[ for in if ]` | `lst[pattern for var in rng if condtion]` | Creates a list according to the `pattern` utilizing variable `var` in a range given by the range object `rng` when the `condition` is true. `if` statement in comprehension is optional. |

```python
lst =[i**2 for i in range(5)]
lst =[i**2 for i in range(5) if (i**2)%2==0]
```

```
[0,1,4,9,16]
[0,4,16]
```

### List Slice

List slicing is one of the powerful tool Python has advantage over other programming languages. Slicing the list extracts portion of the original list, thus creates smaller list.

| SYNTAX | EXAMPLE                              | DESCRIPTION                                                  |
| :----: | ------------------------------------ | ------------------------------------------------------------ |
| `[::]` | `lst[start_elem: end_elem:interval]` | Slice starting from `start_elem` (inclusive) until `end_elem` (exclusive) with interval of `interval`. Do not have to fill all the arguments. |

```python
lst =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(lst[2:8])

# SLICE FROM/UNTIL THE END OF THE LIST
print(lst[2:])
print(lst[:8])

# SLICE WITH SKIPPING SOME ELEMENTS WITH INTERVAL
print(lst[::2])
print(lst[2:8:3])

# REVERSE INTERVAL
print(lst[7:3:-1])
```

```
[2, 3, 4, 5, 6, 7]
[2, 3, 4, 5, 6, 7, 8, 9]
[0, 1, 2, 3, 4, 5, 6, 7]
[0, 2, 4, 6, 8]
[2, 5]
[7, 6, 5, 4]
```

## Tuple

An iterable object that cannot be changed like constant variable (immutable) when a list can be viewed as a variable (mutable). However, tuple does not require brackets, and rather uses parentheses `()` or even without it. Slicing is also possible, just like a list.

```python
tpl =( data_0 ,data_1 ,data_2 )
print(tpl)
print(tpl[0])

# ALTERNATIVE: tuple without parentheses
tpl = data_0 ,data_1 ,data_2
print(tpl)
print(tpl[0])
```

```
(data_0 ,data_1 ,data_2 )
data_0
(data_0 ,data_1 ,data_2 )
data_0"
```

Because tuple is a constant version of a list, the data inside cannot be changed. The error will occur when such effort is made.

```python
tpl =[data_0,data_1,data_2]
tpl[1]=data_3
```

```
TypeError: 'tuple' object does not support item assignment
```

Tuple operation can be referred to from "List Operation".


### Unpacking Tuple

Unpacking tuple means assigning individual elements in tuple to variables or another tuple. Placing asterisk `*` on prefix of a variable would return multiple number of elements. This will be explained in "Parameters & Arguments" article section.

```python
var_0, var_1, *var_2, var_3 = [data_0, data_1, data_2, data_3, data_4, data_5]
print(var_0)
print(var_1)
print(var_2)
print(var_3) 
```

```
data_0
data_1
[data_2, data_3, data_4]
data_5
```

## Dictionary

An iterable object of data structures which maps the key elements to its value. Its structure is similar to a list object, but has value linked with key element instead. Uses curly bracket `{}` to assign values.

```python
dict_0 = {key_0: value_0,key_1: value_1,key_2: value_2}
print(dict_0[key_0])
print(dict_0[key_1])
print(dict_0[key_3])
```

```
value_0
value_1
KeyError: key_3
```

Mutable object, i.e., list and dictionary, cannot be a key element of a dictionary. Only immutable object can be the key element of a dictionary. However, mutable object can still be used as a value of its key.

```python
dict_0 = {list_0: value_0,key_0: value_0}
```

```
TypeError: unhashable type: 'list'
```

It is possible to change the existing value of a key within a dictionary. Unlike list object, creating new key and assigning its value is also possible without needing any help from a method.

```python
dict_0 = {key_0: value_0,key_1: value_1,key_2: value_2}
dict_0[key_1]=value_3
dict_0[key_4]=value_4
```

```
{key_0: value_0,key_1: value_3,key_2: value_2,key_4: value_4}
```

Operation for a dictionary is same as an iterable object operation but have slight difference:

| OPERATOR | NAME                     | DESCRIPTION                                                  |
| -------- | ------------------------ | ------------------------------------------------------------ |
| `in`     | Included (key exclusive) | Check if the key is in a dictionary. However, it does not check the value. |

```python
dict_0 = {key_0: value_0,key_1: value_1}
print(key_0 in dict_0)
print(value_1 in dict_0)
print(key_3 not in dict_0)
```

```
True
False   # Although there is a value_1 for to key_1,in operator cannot find through value.
True
```

Dictionary can have its own functions and methods to execute certain features of dictionary:

| OPERATION | EXAMPLE                         | DESCRIPTION                                                  |
| --------- | ------------------------------- | ------------------------------------------------------------ |
| `get()`   | `dict_0.get(key,[description])` | Find the key and get its value; additional description can be added when the key is not found (`None` by default). |
| `dict()`  | `dict_name=dict()`              | Can create empty dictionary.                                 |

```python
dict_0={key_0: value_0,key_1: value_1} 
print(dict_0.get(key_0))
print(dict_0.get(key_2))
print(dict_0.get(key_3,"not in dictionary"))
```

```
value_0
None
not in dictionary
```

## Set

Data type similar to list without indexing, thus unordered. Just like dictionary, set also uses curly bracket `{}` when created, but does not have a key. Cannot have duplicate data inside a set, representing uniqueness.

Due to the reasons above, set is much faster to check the data than a list.

```python
set_0 = {data_0 ,data_1 ,data_2 ,data_1 }
print(set_0)
```

```
{data_0 ,data_1 ,data_2}
```

Set have mathematical operations which works exactly like mathematical set.

| OPERATION | NAME                 | DESCRIPTION                                                  |
| --------- | -------------------- | ------------------------------------------------------------ |
| `|`       | Union                | Returns the combined of two sets.                            |
| `&`       | Intersection         | Returns data which only exist in both sets.                  |
| `-`       | Difference           | Returns data which only exist in subtrahend and not in minuend. |
| `^`       | Symmetric difference | Return data exclusive to each set, but not both.             |

```python
set_0 = { 1 ,2 ,3 ,4 ,5 ,6 }
set_1 = { 4 ,5 ,6 ,7 ,8 ,9 }

print( set_0 | set_1 )

print( set_0 & set_1 )

print( set_0 - set_1 )
print( set_1 - set_0 ) 

print( set_0 ^ set_1 )
```

```
{ 1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 }
{ 4 ,5 ,6 }
{ 1 ,2 ,3 }
{ 7 ,8 ,9 }
{ 1 ,2 ,3 ,7 ,8 ,9 }
```

Set can have its own functions and methods to execute certain features of set.

| FUNCTION | EXAMPLE         | DESCRIPTION                                                  |
| -------- | --------------- | ------------------------------------------------------------ |
| `set()`  | `set(iterable)` | Function which creates set: list and tuple should be with bracket `[]` and parentheses `()`. Dictionary is not included in this case. |

The function above is necessary when creating an empty set, as `{ }` creates an empty dictionary. Meanwhile, the methods used by set object is as follows:

| METHOD     | EXAMPLE            | DESCRIPTION                                                  |
| ---------- | ------------------ | ------------------------------------------------------------ |
| `add()`    | `set.add(data)`    | Add `data` at the end of the set.                            |
| `remove()` | `set.remove(data)` | Remove `data` in the set.                                    |
| `pop()`    | `set.pop([key_1])` | Randomly selected element [or `key_1` ] is popped or removed from the set. |

```python
set_0 = set( [data_0 ,data_1 ,data_2 ,data_1 ] )
print(set_0 )

set_0.add( data_3 )
set_0.remove( data_0 )
print(set_0)

print(set_0.pop( ))
print(set_0)
```

```
{data_0 ,data_1 ,data_2 }
{data_1 ,data_2 ,data_3 }
data_1                # Random data inside a set has been popped out and got returned.
{data_0 ,data_2 }     # set_name now has a data only without randomly selected data_1.
```

## Generator

An iterable object without sequence indexing: created by function and `yield` statement, iterated by `for` loop. Generator is especially useful due to its absence of memory restrictions, allowing generator to yield infinite number of data.

```python
# CREATING THE GENERATOR.
def generator_function():
    var = 0
    while var < 5
    	yield var
    	var += 1

# ITERATION OF THE GENERATOR.
for var in generator_function ():
    print(var)

# CONVERSION TO "LIST" DATA TYPE.
print( list( generator_function() ))
```

```
0
1
2
3
4
[ 0 ,1 ,2 ,3 ,4 ]
```

### `yield` Keyword

A crucial keyword which determines the generator; returns the value when iterated by `for` loop.

## Itertools Library

Standard library providing several useful functions related to an iterable object as the example below:

| FUNCTION         | EXAMPLE                                   | DESCRIPTION                                                  |
| ---------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `count()`        | `count(number[,step])`                    | Counts up infinitely from `number` by `step` which is an optional input. |
| `cycle()`        | `cycle(iterable)`                         | Iterates given `iterable` object infinitely.                 |
| `repeat()`       | `repeat(value[, number])`                 | Repeat the `value` infinitely or for certain *number* of times. |
| `chain()`        | `chain(lst_0,lst_1)`                      | Combine the lists or strings to one in sequence.             |
| `takewhile()`    | `takewhile(predicate,lst)`                | Take the value from the `lst` in sequence while each value satisfies Boolean-conditioning function (`predicate`). When `False`, `takewhile()` stops the function and returns the taken value as a list, even there’s a value that satisfies the predicate after, which won’t be returned. |
| `product()`      | `product([lst_0,lst_1,...[,repeat=int]])` | Create iterable object of tuples consist of one data (in sequence order) from each `lst` following the inputted list order. |
| `permutations()` | `permutations(lst[,length])`              | Create iterable object of tuples of length of `length` with every possible permutation (order-sensitive). |

More information on Itertools library can be found online.

# **PYTHON: FUNCTIONAL PROGRAMMING**

There are three different types of programming method that can be applied to Python language: procedural, functional, and object-oriented.

Functional programming is a style of program scripting that is based mostly around usage of the functions. This chapter will be introducing the guide on how to create and use function in Python for functional programming. 

## Function

Function is an independent block of code which can process the data and present newly processed data once it’s called, allowing dynamic program scripting. Function can be distinguished from its code format which has parenthesis after its name; `function_name()`.

The programming based around use of custom functions is called *functional programming*.

```python
x = [0, 3, 5, 9]
print(len(x))
# Code "print()" function, and "len( )" function that returns the length of list object.
```

```
4
```

## `def` Keyword

Keyword used to create your own function. When calling your newly created function before defining one, an error occurs as it is operated sequentially, thus is deemed calling non-existing function.

```python
def your_function(arg_1, arg_2):
    print(arg_1 * arg_2)
    return arg_2

your_function("Hello",3)
print(your_function("World",2))
```

```
HelloHelloHello
WorldWorld
2
```

Parentheses `()` is necessary when defining the function even when not having any parameter. 

Although functions are created differently from normal variables, they are just like any other kind of object. For easier understanding please refer to the example below:

```python
def your_function(arg_1,arg_2):
    statements

# ASSIGNED FUNCTION AND EXECUTED VIA VARIABLE
variable = your_function
print(variable(arg1,arg2))
```

Not only can it be assigned to variable, but also to arguments as well. Therefore, you can define a function by using another function that’s been already defined.

### `return` Statement

Function-exclusive statement which returns value of certain data that can be directly used from the function. Once a return statement is executed, the function ends immediately despite there are codes still left inside.

Function does not need to have a `return` statement and will return None object when passed to variable or be printed using `print()` function.

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

Following are the difference between parameters and arguments in `def` statement.

Parameter is a function-internal local variable: because parameters is a function-exclusive local variable, it cannot be called from outside.

| OPERATOR |    SYNTAX     | DESCRIPTION                                                  |
| :------: | :-----------: | ------------------------------------------------------------ |
|   `*`    |    `*args`    | Allows multiple number of arguments.<br />Call by `args`(arguments) without asterisk, and returns tuple of arguments. Must locate after normal parameter. |
|   `**`   |  `**kwargs`   | Allows use of undefined parameter in advance.<br />Call by `kwargs`(keyword arguments) without asterisks, and returns dictionary of arguments’ name and corresponding values. |
|   `=`    | `arg_1=value` | Returns default value otherwise inputted to its parameter. Must locate after normal parameter. |

Meanwhile, argument is a value/object passed to the function parameter and those passed values and objects will be processed by the function code.

```python
# While it can only supports two arguments, *args allows more arguments to be passed.
def function1(arg_1,*args):
    print(arg_1)
    print(args)
    print(args[0])
function1(1, 2, 3, 4)

# Arguments key_0 and key_1 is not defined but only just when it's about to pass the value.
# This is generally not acceptable but allowed using **kwargs.
def function2(arg_1,**kwargs):
    print(kwargs)
function2(1, key_0 = value_0, key_1 = value_1)

# Initializing default value of the parameter arg_2.
def function3 (arg_1,arg_2="string"):
    print(arg_2)
function3(1)
function3(2, "needle")
```

```
1
(2, 3, 4)
2

{key_0∶ value_0 ,key_1∶ value_1}

string
needle
```

## High-Order Function

A function that takes other function(s) as argument to pass it to its parameters or return the function(s) as a result.

## Pure Function

Function that returns a value that depends only on their arguments without any side effects.

As for an example, cosine function `cos(x)` that only accepts single argument `x` returns the value which depends only on the argument `x`; hence, the the cosine function is indeed a pure function.

```python
# Accepts arguments x and y.
def pure_function(x,y):
    variable = 2*x+y
    # Returns value only based on x and y arguments and nothing else.
    return variable/(x+2*y)
```

### Advantages & Disadvantages

The following table shows the advantages and disadvantages when using a pure function.

| ADVANTAGES                                               |                                    DISADVANTAGES |
| :------------------------------------------------------- | -----------------------------------------------: |
| Higher efficiency (able to run parallel).                |    Can be difficult to apply in some situations. |
| Easier to reason and test.                               | Unsuitable for code which requires side effects. |
| Memoization (function itself stores the input’s result). |                                                - |

## Anonymous Function; Lambda

A function without assigned to a variable (hence temporary). Generally used as a non-complicating function-type argument of higher-order function’s parameter as it can only contain a single expression.

| SYNTAX                                                       |
| ------------------------------------------------------------ |
| `(lambda para_0,para_1∶ expression )(arg_0,arg_1 )`          |
| Distinguished by first and second group of parentheses: first group is a main body of a lambda consisting crucial components for function to run, while the second group is an input where desired argument is entered. |

Although lambda is a temporary function without a need of a variable, it can be assigned to variables like other if wanted.

```python
# Sample function.
def sample_function(x,y):
    return 2 * x + y

# Lambda application.
print((lambda x,y: 2 * x + y)(2,3))

# Assignment and application of Lambda to variable.
variable = lambda x,y: 2 * x + y
print(variable (2,3))
```

```
7
7
7
```

## Map Function

Built-in function which takes iterable objects and function (simply put as function-argument) as arguments and returns new iterable object processed by the function-argument. Individual data within the iterable object is processed through the function-argument corresponding to its iteration order.

| SYNTAX                                                       |
| ------------------------------------------------------------ |
| `map(function_arg, iter_0, iter_1, "⋯")`                     |
| An iterable object `iter_0` and `iter_1` are processed through function argument `function_arg` within a higher-order function of `map` which can have more than one iterable object as shown on example above and below. |

Conversion to an iterable, such as `list()` function is necessary to avoid error such as "SyntaxError".

```python 
lst_0 = [ 1 ,2 ,3 ,4 ,5 ]
lst_1 = [ 0 ,9 ,8 ,7 ,6 ,5 ]

var_0=list( map( lambda x,y: x ** 2 + y ,lst_0,lst_1 ) )
var_1=list( map( lambda y,x: x ** 2 + y ,lst_1,lst_0 ) )

print(var_0 )
print(var_1 )
```

```
[ 1 ,13 ,17 ,23 ,31 ]   # The number of data of a returned iterate is determined by the shortest.
[ 1 ,83 ,67 ,53 ,41 ]
```

## Filter Function

Built-in function which takes iterable object and Boolean conditioning function (aka. predicate) as arguments and returns iterable object only with the data that passed the predicate. The data which didn’t passed the predicate is removed permanently, and only one iterable object can be filtered each time.

| SYNTAX                                                       |
| ------------------------------------------------------------ |
| `filter(Boolean_function, iterable)`                         |
| An iterable object is filter through `Boolean_function` within a higher-order function of `filter` which can only have a single iterable object as shown on example above and below. |

Conversion to an iterable, such as `list()` function is necessary to avoid error such as "SyntaxError".

```python
lst = [ 1 ,2 ,3 ,4 ,5 ]
var_0=list( filter( lambda x: x % 2 == 0 ,lst  ) )
print(variable_0 )
```

```
[ 2 ,4 ]      # Only the data that satisfied the given Boolean condition got returned.
```

## Recursive Function

A function which calls itself (recursion). Able to solve problems with ease by utilizing the same type of simpler sub-problem-solving method. Factorial ! in algebra is best example of a recursive function.

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

A function which modifies original function’s functionality and returns (not the value but) the modified "function" itself. Hence, assignment to a variable is needed for a function to properly work after processing through the decorator. Its function will then have a same name as the variable.

```python
# CREATING DECORATOR
def decorator_name(function_original):
    def function_modified():
        statements including function_original()
    return function_modified

def function_name():	# ORIGINAL FUNCTION OF "function_name()"
    statements

# DECORATING FUNCTION
variable_name = decorator_name(function_name) 
variable_name()		# WHICH IS ACTUALLY A FUNCTION ASSIGNED TO "variable_name".

# DECORATING FUNCTION: KEEPING THE FUNCTION NAME THE SAME.
function_name = decorator_name(function_name)
function_name()
```

On second section, decorator above have modified `func_0()` and assigned the decorated function to a variable `var_0()`. One thing you can notice is the passed function does not have parenthesis like `function_name()`. This is used to pass not the returned value of the function but the function itself as a whole.

### `@` Symbol

A decorator symbol `@` used for pre-pending the function definition, placed before pre-decorated function.

| OPERATOR | EXAMPLE      | DESCRIPTION                                               |
| :------: | ------------ | --------------------------------------------------------- |
|   `@`    | `@decorator` | `@decorator` is a replacement of `func = decorator(func)` |

```python
# CREATING DECORATOR.
def decorator_name(function_original):
    def function_modified():
        statements including function_original()
    return function_modified

# DECORATING FUNCTION: @ SYMBOL
@decorator_name
def function_name():	# ORIGINAL FUNCTION OF "function_name()"
    statements

# FUNCTION NAME REMAINS THE SAME.
function_name()
```

Additionally, more than one decorator can be applied to a single pre-decorated function.

```python
@decorator_0
@decorator_1
def function_name():
    statements
```

A decorator located closest to pre-decorated function will be applied firsthand. Thus, the function object `function_name()` will first be decorated by `@decorator_1`  then `@decorator_0` sequentially.


# **PYTHON: OBJECT-ORIENTED PROGRAMMING**

Previous chapter has explained and dealt with procedural and functional programming. The third scripting method, object-oriented programming is based around usage of classes and objects instead of functions.

## Object

Object (aka. instance) is a block of code which acts like a building brick: every object has its own attributes that are properties and capabilities of the object. The attribute can be accessed and utilized by `object.attribute` format.

The programming based around use of a custom objects is called *object-oriented programming*.

```python
x = [0 ,3 ,5 ,9]
print( x.append(13) )
# Object "x" called one of its attribute "append()" only available in string object.
```

```
[0, 3, 5, 9, 13]
```

### Method & Attribute

**Method** is an object-dependent function that is bounded inside the object, meaning the object needs to be called first to use a method and cannot be used independently.

**Attribute** is a features and properties of the object (including bounded function). Hence, methods are included as one of the attributes of the object. However, for easier understanding, this document will distinguish attribute as attribute without methods.

## Classes

Classes create objects (aka. instance), hence can be deemed as an object’s blueprint. Classes are created first by a keyword `class` containing functions as method of the class in indented block.

```python
class class_name∶
	# INITIALIZE GLOBAL VARIABLE
	global global_var
    
    # CLASS ATTRIBUTE
    attribute0 = attribute0_value	
    
    # INSTANCE INITIALIZATION (SIMILAR TO CONSTRUCTOR)
    def __init__(self, arg_1, arg_2):
        # INSTANCE ATTRIBUTES
        self.attr_1 = arg_1
        self.attr_2 = arg_2
        
    # INSTANCE METHOD
    def method_name(self, arg_2):
        return statements including var_2

global_var = "Hello World!"
# DECLARATION OF INSTANCE
instance_name = class_name(var_1, var_2)
instance_name.method_name
```

```
statements including var_2
```

### `__init__` Method

Most important method in class which is called class constructor (like the *constructor* in C languages). `__init__`  method stores the attributes' initial value of instances upon creation via `arg_1`  and `arg_2` , thus be defined and initialized on creating instance. 

However, `attr_0`  is a class attribute and is initialized by class itself rather than `__init__`  method; this makes class attribute accessible not just by an instance but also by calling the class itself.

## Instance Method

All methods (or attributes) that are declared normally within the class are instance methods (or attributes). There is no special syntax that need to declare it as instance method, whereas class method and static method do need one.

Some may misunderstand instance method can be distinguished by checking whether the argument `self` is there or not. This is not true as `self` is purely an argument and has no power on defining the type of method or attribute. The detail information is explained under the subsection below.

### `self` Variable

The `self` is a conventional name of the variable to indicate the current instance of the class, meaning it is not a keyword and the name can be changed however developer wants. The `self` variable can be accessed only upon declaring an instance.

```python
class class_name():
    def __init__(self, a, b, c):
        self.A = a
        self.B = b
        self.method_name(c)
        
    # REPLACING `self` VARIABLE TO DIFFERENT NAME STILL WORKS WITHIN THAT METHOD.
    def method_name(other, x)
    	other.C = x

# INSTANTIATION
instance_name = class_name(1, 2, 3)
instance_name.method_name(3)
'''EQUIVALNET: 
class_name.__init__(self = instance_name, a = 1, b = 2, c = 3)
class_name.method_name(other = instance_name, x = 3)
'''

# THEREFORE...
class_name.A	''' >> OUTPUT AttributeError: type object'class_name' has no attribute 'A' '''
instance_name.A	''' >> OUTPUT: 1 '''
instance_name.B ''' >> OUTPUT: 2 '''
instance_name.C ''' >> OUTPUT: 3 '''
```

Another important thing is the attribute without a `self` prefix cannot be called from the instance. Placing a `self` at the variables make them as attributes of an instance, which can be used within the whole class definition. Variables, on the other hand, is local to a method and cannot be used outside the method it is declared.

```python
class class_name():
    def __init__(self, a, b):
        self.A = a
        B = b
        print("__init(A)__:", self.A)	# print(A): NameError: name 'A' is not defined
        print("__init(B)__:", B)
        
    def method_name(self, c)
    	self.C = c
        print("method_name(A):", self.A)
        print("method_name(B):", B)

instance_name = class_name(1, 2)
instance_name.method_name(3)

print(instance_name.A)
print(instnace_name.B)
print(instance_name.C)
```

```
__init(A)__: 1
__init(B)__: 2
method_name(A): 1
NameError: name 'B' is not defined

1
AttributeError: 'class_name' object has no attribute 'B'
3
```

## Class Method

A method which can be accessed via classes alone without needs of creating an instance.

|     SYNTAX     | DESCRIPTION                              |
| :------------: | ---------------------------------------- |
| `@classmethod` | Decorator used to declare class methods. |

A separate parameter is needed to access class methods directly through class, conventionally called as `cls` . Since this parameter represent the class, assigning arguments through class method is also possible.

```python
# Example (source: SOLOLEARN.COM)
class RECTANGLE∶
    geometry_type = "Euclidian" 
# Class attributes: shared by every instance created via class RECTANGLE unless modified. 

    def __init__(self, rect_width, rect_height):
        self.width = rect_width
        self.height = rect_height
# Instance attributes: instantiation (designating attributes) of individual instance is done here." 

    def calculate_area(self):
        return self.width * self.height
# Instance method "calculate_area": returns the multiplication of width and height,just like function.

    @classmethod
    def golden_ratio (cls, side_length):            # Class method "golden_ratio" 
        return cls(side_length * 1.62, side_length)
# Representing cls (class) of "rect_width = side_length * 1.62" and "rect_height = side_length" 
# THERFORE: return RECTANGLE(rect_width = side_length * 1.62, rect_height = side_length)

rect = RECTANGLE.golden_ratio(5)
# Assigned argument "side_length = 5" to class method,creating an instance named "rect". 

print( rect.width )
print( rect.calculate_area() )
print( rect.geometry_type)
```

```
8.1
40.5
Euclidean
```

## Static Method

A method similar to class method but does not receive argument to call itself such as `self` and `cls`.

| SYNTAX          | DESCRIPTION                               |
| --------------- | ----------------------------------------- |
| `@staticmethod` | Decorator used to declare static methods. |

Since static method does not have a parameter to call itself, static method cannot access to modify the class’s state. This makes static method identical to normal function which belongs to class.

```python
# Example (source: SOLOLEARN.COM)
class PIZZA∶
    def __init__( self ,toppings ):
        self.toppings = toppings

    @staticmethod
    def validate_topping( topping ):      # Static method "validate_topping" 
        if topping == "pineapple":
            raise ValueError("No pineapples!")
        else:
            return True
# Static method functioned to check for a pineapple topping; does not have a parameter to call itself.

ingredients = [ "cheese" ,"onions" ,"spam" ]
if all( PIZZA.validate_topping(i) for i in ingredients ):
    pizza = PIZZA(ingredients)
# Check the ingredients one by one for pineapple.Static method acts like exclusive function of PIZZA.

# If there is no pineapple,the class creates instance "pizza" with topping of "ingredient" list.
# If there is a pineapple,returns "No pineapple!" error.
```

## Magic Method

Special method which has Double UNDERscores(dunder) on both side of its name, generally used for operator overloading. Previously encountered `__init__`  method (dunder init dunder) is one of the examples of the magic method.

### Operator Overloading

Customization of the operator for custom classes or certain sections of script. Accessing and customizing operator can be done using magic method but its overload is limited only within the class. As an example, `x + y`  is expressed as `x.__add__(y)` .

| OPERATOR | NAME           | MAGIC METHOD               |
| -------- | -------------- | -------------------------- |
| `+`      | Addition       | `__add__(self, other)`     |
| `-`      | Subtraction    | `__sub__(self, other)`     |
| `*`      | Multiplication | `__mul__(self, other)`     |
| `/`      | Division       | `__truediv__(self, other)` |
| `&`      | AND            | `__and__(self, other)`     |
| `^`      | XOR            | `__xor__(self, other)`     |
| `|`      | OR             | `__or__(self, other)`      |

More of the magic method of operator can be found online.

```python
class class_name∶
    def __init__( self, arg_1 ):
        self.attribute = fore_variable

    def __sub__( self, arg_2 ):
        return " and ".join( [ self.attribute ,hind_parameter.attribute  ] ) 
# Newly defining subtraction operator's function to place " and " between two data.

var_0 = class_name("Egg")
var_1 = class_name("Ham")
print(var_0 "-" var_1)
```

```
Egg and Ham
```

## Inheritance

Providing attributes from superclass to subclass. When the same name of attributes exists on both superclass and subclass, superclass’s attributes are overwritten to subclass’s attributes.

Inheritance can be done through multiple instances but cannot have circular inheritance.

```python
class subclass_name (superclass_name)∶
    def __init__( self ,arg_0 ,arg_1 ):
        self.attr_0 = arg_0
        self.attr_1 = arg_1
    def method_name ( self  ,arg_2 ):
        """statements including arg_2"""
```

### Superclass & Subclass

Superclass and subclass can be considered as parent-class and child-class. Distinguishing superclass and subclass are not defined and is relative, thus any class can become superclass and subclass.

### Super Function

Function which calls the attributes from its superclass directly, which is not the attributes overwritten by its subclass. The function is placed in method of subclass (Python3):

```python
class subclass_name ( superclass_name ):
    super().__init__()
    super().superclass_attribute
```

IS `super().__init__()` SAME AS `superclass_name.__init__(self)`???

In Python2, the way to call the super function was `super(subclass,instance).superclass_attr`. The expression got much simpler with Python3 which is the expression at the above example.

## Lifecycle of Object

Object has three stages of lifecycle:

1. Definition: creation of class by a keywork `class` 
2. Instantiation: assigning instance by `__init__`  method
3. Destruction: reference count (the number of variables and other elements that refer to an object) reaches zero. Manual deletion of reference count can be done by `del` statement (aka. `__del__`  method). This process of instance deletion is called garbage collection. Python automatically deletes instance once the reference count reaches zero.

## Encapsulation

Restricting access to attributes (including methods) and variables which can prevent accidental modification. Refer to Data Hiding and Properties for more information on encapsulation.

## Data Hiding

Encapsulation should be able to restrict external code from accessing object’s attributes (including method) and variables by making them private.

Python does not provide an absolute private attribute or methods, meaning an access/modification of the “private” attributes or methods cannot be made despite the effort.

| OPERATOR | EXAMPLE            | DESCRIPTION                                                  |
| :------: | ------------------ | ------------------------------------------------------------ |
|   `_`    | `_attribute_name`  | Single underscore at the beginning of the method’s name. Prevent `from module-name import`  statement, but class-external code can still access this “private” method or attribute. |
|   `__`   | `__attribute_name` | Double underscore at the beginning of the method’s name. Prevent class-external code from accessing the method, to avoid bugs caused by subclasses having same name of methods or attributes.To access the methods, use `_class-name__attribute-name` . |

## Properties

Customizes access to object’s attributes (to read only) and is excellent feature for updating the object’s attributes with minimum effect to external codes.

| SYNTAX      | DESCRIPTION                           |
| ----------- | ------------------------------------- |
| `@property` | Decorator used to declare properties. |

Fact that properties are declared with decorator means it uses methods as attributes, thus needs parameter such as `self`  since it’s called from instance. Although methods are used as attributes, syntax to call properties are same as of attributes `instance.attribute`  rather than of method `instance.method()`.

```python
# Example (source: SOLOLEARN.COM)
class PIZZA∶
    def __init__( self ,toppings ):
        self.toppings = toppings

    @property
    def pineapple_allowed( self ):
        return False

pizza = PIZZA([ "cheese" ,"onions" ,"spam" ])
print( pizza.pineapple_allowed )" 

pizza.pineapple_allowed = True
```

```
False
AttributeError: can't set attribute
# This shows attributes within properties cannot be modified via instance (read only).
# The way to change attributes are dealt at sub-section "Setter & Getter Method".
```

### Setter & Getter Method

`setter` and `getter` method are a gateway between properties and the others, critical in encapsulation.

| NAME   | SYNTAX                  | DESCRIPTION                                        |
| ------ | ----------------------- | -------------------------------------------------- |
| Setter | `@property_name.setter` | A method that allows setting the property’s value. |
| Getter | `@property_name.getter` | A method that gets the value from property.        |

After the decorator, defined name afterward at `def` should be same as the property’s name.

```python
# Example (source: SOLOLEARN.COM)
class PIZZA∶
    def __init__( self ,toppings ):
        self.toppings = toppings
        self._pineapple_allowed = False
# Attribute pineapple_allowed is a private attribute due to a single underscore at the beginning.

    @property
    def pineapple_allowed( self ):
        return self.pineapple_allowed
# Although the property is very empty of statements,property is used for utilization of setter method.
# The _pineapple_allowed and pineapple_allowed have name difference on underscore,they are same.

    @pineapple_allowed.setter
    def pineapple_allowed( self ,value ):
        if value:
            password = input("Enter the password: ")
            if password == "Sw0rdf1sh!":" 
                self._pineapple_allowed = value
            else:
                raise ValueError("Alert! Intruder!")

pizza = PIZZA([ "cheese" ,"tomato" ])
print( pizza.pineapple_allowed )
# This is an initial value set by __init__ method,but has not activated  pineapple_allowed 's setter yet.

pizza.pineapple_allowed = True
# Method pineapple_allowed's setter has finally been called,and input will be shown for next process." 

print( pizza.pineapple_allowed )

# When typed incorrect password...
print( pizza.pineapple_allowed )
```

```
False

Enter the password: Sw0rdf1sh!
True

ValueError('Alert! Intruder!')
```

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
5.	Names that would clash with Python keywords (such as ‘class’ or ‘if’) should have a trailing underscore.
6.	Line shouldn’t be longer than 80 characters.
7.	`from module import *` should be avoided.
8.	There should be only one statement per line.

## `"__main__"` Method

Magic method `"__main__"`  is a scope where top-level codes are executed.

The one generally used together with `"__main__"`  is `__name__`  which represents the current module (source file). They can form an expression that only executes when running in the script and not when imported:

```python
# FILE NAME: PythonFileName.py
if __name__ == "__main__" :
    statements              # Or "class_name" to go object-oreinted programming.
```

This checks for whether currently running modules in the script are indeed the top-level scope.

When this code above is running through a script, it will return the `statements`  as normal. However, when this code is imported via `import PythonFileName` , the `statements`  will not be returned.

This, however, does not work when using Boolean operation `is` instead of `==`:

```python
# WRONG SYNTAX
if __name__ is "__main__" :
    statements
```

# **PYTHON: REGULAR EXPRESSION**

Domain specific language (DSL) for string manipulation, not the Python-exclusive but utilized by other programming languages as well; aka regex.

## `re` Module

A module which allows Python to access regular expressions.

| SYNTAX | EXAMPLE     | DESCRIPTION                                                  |
| ------ | ----------- | ------------------------------------------------------------ |
| `re`   | `import re` | Importing `re` module for regular expression.                |
| `r`    | `r"string"` | Raw string that backslash escape `\` doesn’t work. Must be used within `re`  module, else it won’t work. |

| METHOD         | SYNTAX                                  | DESCRIPTION                                                  |
| -------------- | --------------------------------------- | ------------------------------------------------------------ |
| `match`        | `re.match(rformat,str_1)`               | Compare whether beginning of the string `str_1` matches the format of `rformat` . Returns `rformat` if matched. |
| `search`       | `re.search(rformat,str_1)`              | Compare whether the `str_1` matches the format of `rformat` to `str_1` without considering comparison location. |
| `search.group` | `re.search(...).group()`                | Returns searched string that matched.                        |
| `search.start` | `re.search(...).start()`                | Returns the group’s starting index.                          |
| `search.end`   | `re.search(...).end()`                  | Returns the group’s ending index.                            |
| `search.span`  | `re.search(...).span()`                 | Returns the group’s starting/ending index.                   |
| `findall`      | `re.findall(rformat,str_1)`             | Return a list of string of `rformat`  from `str_1` corresponding to the number it appeared. |
| `finditer`     | `re.finditer(std_str,str_1)`            | Similar to method `findall`  but returns iterable.           |
| `sub`          | `re.sub(std_str,repl_str,str_1[,int ])` | Substitute `std`  to `repl`  on `str_1`.[OPTIONAL: by adding additional argument of `int` , the number of string substitution can be controlled by the number inputted in order. |

```python
import re

# Check for regular expression of .match() method.
print(re.match( r"a(bc)", "abcbcde"))
print(re.match( r"a(bc)*" ,"abcbcde"))
print(re.match( r"a(bc)*" ,"a"))

# Difference between match() and search() and findall() method
print(re.match(r"(bc)*", "abcbcdebc"))
print(re.search(r"(bc)*", "abcbcdebc"))
print(re.findall(r"(bc)*", "abcbcdebc"))

print( re.search( r"a(bc)+" ,"acb" ) )
print( re.search( r"a(bc)+" ,"a" ) )

print( re.search( r"a(bc)?" ,"abcbcde" ) )

print( re.search( r"a(bc){2,3}" ,"abcde" ) )
print( re.search( r"a(bc){2,3}" ,"abcbcde" ) )
print( re.search( r"a(bc){2,4}" ,"abcbcbcbcbcde" ) )
```

```
<re.Match object; span=(0, 3), match='abc'>
<re.Match object; span=(0, 5), match='abcbc'>
<re.Match object; span=(0, 1), match='a'>

None
<re.Match object; span=(1, 4), match='bcbc'>
<re.Match object; span=(1, 4), match='bcbc'>

None
None

None

None
<re.Match object; span(0,5),match='abcbc'> 
None
```

## Grouping

Grouping makes series of characters or strings to be as one and allows grouped to become an argument for other metacharacters as seen in example of the previous section.

| OPERATION  | EXAMPLE                 | DESCRIPTION                                      |
| ---------- | ----------------------- | ------------------------------------------------ |
| `()`       | `r"^string0(string1)" ` | Grouping `string1`  separately from `string0` .  |
| `group()`  | `re.search.group(...)`  | Method used for calling a grouped.               |
| `groups()` | `re.search.groups( )`   | Method used for calling all the groups in tuple. |

Calling `group(0)`  is same as `group( )`  which returns matched characters or strings between compared two. The rest of integer starting from 1 calls individual group starting from left to right and outer to inner group.

```python
import re

print( re.search( r"a(bc)(de)(f(g)h)i" ,"abcdefghijk" ).group( ) )
print( re.search( r"a(bc)(de)(f(g)h)i" ,"abcdefghijk" ).group(0) )

print( re.search( r"a(bc)(de)(f(g)h)i" ,"abcdefghijk" ).group(1) )
print( re.search( r"a(bc)(de)(f(g)h)i" ,"abcdefghijk" ).group(2) )
print( re.search( r"a(bc)(de)(f(g)h)i" ,"abcdefghijk" ).groups( ) )
```

```
abcdefghi
abcdefghi

bc
de
('bc','de','fgh','g')
```

### Named Groups

Group can be specified to have its own name to be called. No double quotations are needed when inserting name but are needed when calling the named groups.

| SYNTAX | EXAMPLE                | DESCRIPTION                            |
| ------ | ---------------------- | -------------------------------------- |
| `?P<>` | `r"(?P<name>string)" ` | Designate group with name for calling. |

```python
import re
print( re.search(r"(?P<first>abc)(def)(ghi)" ,"abcdefghijk") ).group(1)
print( re.search(r"(?P<first>abc)(def)(ghi)" ,"abcdefghijk") ).group("first")
```

```
abc
abc
```

### Non-capturing Groups

Group that cannot be accessible by "group(...)"  and "groups( )"  methods, which results skipping index on such groups. However, "group(0)"  is an exception where it calls matched comparison between two rather than groups.

| SYNTAX | EXAMPLE          | DESCRIPTION                                              |
| ------ | ---------------- | -------------------------------------------------------- |
| `?:`   | `r"(?:string)" ` | Inaccessible via "group(...)"  and "groups( )"  methods. |

```python
import re
print( re.search(r"(abc)(?:def)(ghi)" ,"abcdefghijk") ).group( )
print( re.search(r"(abc)(?:def)(ghi)" ,"abcdefghijk") ).group(2)
print( re.search(r"(abc)(?:def)(ghi)" ,"abcdefghijk") ).groups()
```

```
abcdefghi
ghi
( 'abc' ,'ghi' )
```

## Character Classes

Provide characters or integers that matches whenever the compared string has any of the provided.

| SYNTAX  | EXAMPLE                        | DESCRIPTION                                           |
| ------- | ------------------------------ | ----------------------------------------------------- |
| `[]`    | `r"[chars or ints ]" `         | Allows matching with any *char* or *int* inside.      |
| `[ - ]` | `r\"[char-char or int-int ]" ` | Matching compared with range of *char* or *int*.      |
| `[^ ]`  | `r"[^chars or ints ]\" `       | Matching excluding the given *char* or *int* (range). |

```python
import re

print(re.search(r"[aeiou]", "string"))
print(re.search(r"[aeiou]", "rhythm"))

print(re.search(r"[A-Z][a-z][0-9]", "Xp2"))
print(re.search(r"[A-Z][a-z][0-9]", "xP2"))
print(re.search(r"[A-Z][a-z][0-9]", "E3"))

print(re.search(r"[^A-Z]", "String"))
print(re.search(r"[^A-Z]", "STRING"))
```

```
<re.Match object; span(3,4),match='i'>
None

<re.Match object; span(0,3),match='Ko2'>
None
None

<re.Match object; span(0,7),match='String'>
None
```

## Special Sequences

Metacharacter with backslash `\`  which provides various features.

| SYNTAX | EXAMPLE                          | DESCRIPTION                                                  |
| ------ | -------------------------------- | ------------------------------------------------------------ |
| `\`    | `r"[chars or ints ]"`            | Metacharacter for special sequence (+ *escaper*)             |
| `\int` | `r\"st(r(in)g)\2" `              | Calls the group of the integer. Example on the left calls the group "2"  and would be "stringin" . |
| `\d`   | `Digits [ 0-9 ] `                | Each special sequence represents one digit of number. Capitalized "\D"  means opposite: '[ ^0-9]'. |
| `\s`   | `Whitespace [ \t\n\r\f\v ]`      | Each special sequence represents blank space, i.e. tab and new line. Capitalized `\S`  means opposite. |
| `\w`   | `Word characters [ a-zA-Z0-9_ ]` | Each special sequence represents a single word character. Capitalized `\W`  means opposite. |
| `\b`   | `r"\bstring\b"`                  | Compare matching with string of `\w`  between `\W`  such as blank spaces, or from beginning to end. Capitalized `\B`  means opposite: matches empty. |
| `\A`   | `r"\Astring" `                   | Compare matching with beginning string: "≈ ^"                |
| `\Z`   | `r"string\Z" `                   | Compare matching with ending string: "≈$"                    |

```python
import re 

print( re.search( r"st(r(in)g)\2" ,"string" ) )
print( re.search( r"st(r(in)g)\2" ,"stringin" ) )

# Notice the changes of method from search to match for better example, exclusive to this section only.
print( re.match( r"\d\D\w+" ,"3 Hi!" ) )
print( re.match( r"\d\D\w+" ,"33Hi!" ) )

print( re.search( r"\b(in)\b" ,"string" ) )
print( re.search( r"\b(in)\b" ,"str>in<g" ) )
```

```
None
<re.Match object; span(0,8),match='stringin'>

<re.Match object; span(0,4),match='3 Hi!'>
None

None
<re.Match object; span(4,6),match='in'>
```

# **PYTHON: FILE MANAGEMENT**

When using the Python in advanced scripting, such as use for scientific research and artificial intelligence, the input data that needs to be computed cannot be stored through console command of the Python and may need to read through files if necessary.

## Creating Files

Refer to the section *PYTHON:FILE MANAGEMENT §Writing Files*.

## Opening Files

Before reading or manipulating files via Python, the file must be opened firsthand.

Open function is used to open a certain file you want to open.

```python
open("directory_path\\filename.txt")
open("directory_path\\filename.txt","r")         # read mode (default)
open("directory_path\\filename.txt","w")       # write mode (rewriting content)
open("directory_path\\filename.txt","a")        # append mode (adding new content)
open("directory_path\\filename.txt","rb")      # binary read mode (non-text files)
open("directory_path\\filename.txt","wb")    # binary write mode (non-text files)
```

Close method is used to close currently opened files. Closing file in very important on avoiding wasting resource. Ensure the files are always closed even on exceptions by using try/except or with statement.

```python
file_variable = open("directory_path\\filename.txt","w")
# modified/manipulated file contents
file_variable.close()
```

### `with` Statement

`with` statement creates temporary variable only available inside an indented block of the with statement. The file is automatically closed at the end of the with statement, even if exceptions occurs within it.

```python
with open("filename.txt") as variable:
    statements
```

### Absolute & Relative Paths

Just like every other programming language, Python do have two different types of path: absolute and relative path.

The main difference on designating path is the use of `\\` instead of single `\`, as it alone represents an escape character used when escaping from execution of an unwanted operation.

```python
file_variable=open("relative_path\Sample.txt")
# exception_info: Invalid argument

file_variable=open("relative_path\\Sample.txt")
# opens Sample.txt properly.
```

## Reading Files

For a text file, Python need to read the file first to processing a content of the file.

Read method is used to read the text content of the file. Argument inside the method represent the number of bytes it’d read. Read method can be used on the same file again, but it will continue from where Python last read. When there’s no argument, the read method reads the rest of the text from where it last left off.

```python
file_variable = open("directory_path\\filename.txt")
print(file_variable.read(16))  # Read and print 16 bytes from the start of the text. 
print(file_variable.read(4))   # Read and print 4 bytes from the point after previous 16 bytes.
print(file_variable.read(4))   # Read and print 4 bytes from the point after previous 4 bytes.
print(file_variable.read())    # Read and print the rest of the text after previous 4 bytes.
print(file_variable.read())    # Because the file is all read already,no text will be printed.
file_variable.close()
```

`Readlines()` method is used to return a list of text of each line. `Readlines()` method do accepts argument, but it works exactly same as a read method: it designates how many bytes to read. Don’t get confused with `Readline()`s method which only reads the first line in string.

```
<Sample.txt>
First line here.
Second line there.
Last line somewhere.
```

```python
file_variable = open("directory_path\\Sample.txt")
print(file_variable.readlines()) # As you can see below,it will be shown as a form of list.

print(file_variable.readline())  # In case when designer accidentally typed \"readline\" instead.
```

```
['First line here.\n','Second line there.\n','Last line somewhere.']
First line here.
```

### Printing Text using Loop

You can retrieve each line in file by using a for loop as well.

```python
for variable in file_variable:
    print(variable)
```

```
First line here.

Second line there.

Last line somewhere.
```

### Character Counting Function

Following code is an example of character counting function which will be useful on analyzing text.

```python
def count_char_function(text,char ):
    count = 0
    for i in text:
        if i == char: 
            count += 1
    return count
```

The function above can also help you what percentage that alphabet character occupies within the text with some additional code, including `len(text)`  which find out how long the text is by counting overall number of characters.

## Writing Files

For a text file, Python can (re)write text or create a text file.

Write method allows programmer to write down strings in a text file. While write method in "write (w)" mode deletes all the already existing content and rewrite, "append (a)" mode inserts additional strings. Meanwhile if successfully written, write method returns the number of bytes written in command window.

```
<Sample.txt>
First line here.
Second line there.
Last line somewhere.
```

```python
file_variable = open("directory_path\\Sample.txt","w")
file_variable.write("Text overwritten: previous texts deleted.")
```

```
<Sample.txt>
Text overwritten: previous texts deleted.
```

```python
file_variable = open("directory_path\\Sample.txt","a")
variable_0=file_variable.write(" Additional text included.")
print(variable_0)
# 25
```

```
<Sample.txt>
Text overwritten: previous texts deleted. Additional text included.
```

### Creating Text Files

When in `w`(write) mode, opening non-existing file will create a new text file of the same name. 

```python
file_variable = open("directory_path\\Sample_1.txt","w")
file_variable.write("Created new file from Python.")
```

```
<Sample_1.txt>
Created new file from Python.
```

# **PYTHON: PACKAGE**

Python has variety of packages that can be easily downloaded and used on-demand. This chapter describes what the package is and how to import them to the script-to-use.

## Modules

A Python module is simply a Python source file (.py), i.e. a piece of code that other people have written to fulfill common tasks, such as generating random numbers, performing mathematical operations, etc. Importing a single module alone can provide a script its functionality.

```python
import module_name                      # importing a whole module itself
variable=module_name.module_variable    # assigning mod_var to a variable
print(module_name.module_variable)      # same as print(variable)

from module_name import mod_var1, mod_var 2  # importing individual mod_var
from module_name import mod_var3 as name     # imporiting with new name
```

## Package

A package is a directory of folder that holds a collection of Python modules or sub-packages. Every package folder must have a special file inside called `__init__.py` which can be blank or contains directory path of current package to prevent directories error caused by a common name.

```python
import package_name.module_name
from package_name.module_name import module_variable
```

### Packaging

A process of putting modules in a standard format so other code designer can install and use the package.

```shell
# Directory structure
DirectoryName/setup.py
             /README.txt
             /LICENSE.txt
             /package_name/__init__.py
                          /module_1.py
                          /moduel_2.py
```

```python
# Script of setup.py
from distutils.core import setup

setup(
    name='DirectoryName',
    version='write down the module version',
    packages=['package_name'],
    license='write down license name',
    long_description=open('README.txt').read()
)
```

The `setup.py` is necessary to upload before uploading it to Python Package Index, abbreviated PyPI.

## Python Package Index

Python Package Index, also known as PyPI is an external module storage website (*https://pypi.python.org/pypi*). To download and install the modules and packages, a software called pip is necessary.

### PIP

`pip` is a package management system required to install and manage the Python package. Nowadays, pip comes installed by default with modern distribution of Python, but if you don’t have it, you can install it online. Installation and management of packages are done using Command Prompt (cmd).

| NAME         | DESCRIPTION               | COMMAND                      |
| ------------ | ------------------------- | ---------------------------- |
| Installation | Install the package       | `pip install package_name`   |
| Remove       | Uninstall the package     | `pip uninstall package_name` |
| List         | Show the list of packages | `pip list`                   |

Although using the pip is a standard way of installing packages, some packages can be installed through executable file (.exe) just like installing other programs.

When using Python on Windows, it is recommended to use `python -m pip` instead of `pip` alone. 

```
python -m pip
```

The command means accessing the pip under the python interpreter specified as `python` in command prompt. This allows package management by each interpreter more controllable, even when using virtual environment. When there is another version of Python installed, say 32 bits of Python 3.5

```
py -3.5-32 -m pip
```

Upload and distribution of custom made packages can be done with PyPI as well, also done on Command Prompt. The following commands should be run after navigating all the way to the directory.

| NAME                  | DESCRIPTION               | COMMAND                        |
| --------------------- | ------------------------- | ------------------------------ |
| Distribution (source) | Distribute source code.   | `python setup.py sdist`        |
| Register              | Register packages to PyPI | `python setup.py register`     |
| Upload                | Upload packages to PyPI   | `python setup.py sdist upload` |

# **PYTHON: VIRTUAL ENVIRONMENT**

While C-based project needs to include header files and call libraries individually upon process of compiling the script to functioning executable file, Python install modules under the interpreter directory. Thus, the installed modules would follow along with the interpreter.

However, when working with multiple Python projects, it is inconvenient and inefficient to work only with a single Python interpreter. This is the reason why separate Python environment is necessary, and this is done by using virtual environment.

## `venv` Package

The in-Python3 virtual environment package `venv` support for creating lightweight virtual environments with their own site directories, optionally isolated form system site directories. Each virtual environment has its own Python binary (which matches the version of the binary that was used to create this environment) and can have its own independent set of installed Python packages in its site directories.

### Create

To create a virtual environment under the name `.venv` on desired project directory

```
python -m venv D:\Workspace\Python\project\.venv
```

### Activate

Once the virtual environment is created, it needs to be activated.

* Windows:

    ```
    D:\Workspace\Python\project\.venv\Scripts\activate.bat
    ```

* Unix and Mac:

    ```
    source ~/Workspace/Python/project/.venv/bin/activate
    ```

### Deactivate

To exit out from the virtual environment

```
deactivate
```

This is same as enter the command `PATH=D:\Workspace\Python\.venv\Scripts\deactivate.bat`. Because of this, relocating the virtual environment directory will cause `deactivate` command unable to recognize the path.

# **PYTHON: NUMPY**

[NumPy](https://www.numpy.org/) is a very powerful and useful library used in Python language which supports multi-dimensional matrix (aka. NumPy array). It is widely used in many applications including other Python library such as [Matplotlib](https://matplotlib.org/), [TensorFlow](https://www.tensorflow.org/), et cetera. NumPy is a must-know library in order to use other advanced libraries and for efficient data management.

To install NumPy library, open command prompt window and enter the command below: 

```
python -m pip install numpy
```

## Reading NumPy

One of the widely used dimension size of the NumPy is 2D and 3D NumPy. NumPy can be read almost identical to matrix in mathematics: *column (size/index)* by *row (size/index)*. Reminding NumPy as a matrix can help understand and calculate easily.

## Creating NumPy

NumPy can be created manually by entering each elements one by one in dimension using `numpy.array()` API, each dimension represented by a pair of bracket `[]`.

```python
import numpy as np

a = np.array([[1, 2, 3], [4, 5, 6]])
print(a)
print(a[0])
print(a[0,0], a[0,1], a[1,0])
```

```
[[1 2 3]
[4 5 6]]
[1 2 3]
1 2 4
```

| API                     | DESCRIPTION                                                  |
| ----------------------- | ------------------------------------------------------------ |
| `np.ndarray(shape)`     | Create a shape-dynamic NumPy with elements assigned with random numbers. |
| `np.zeros(shape)`       | Create a NumPy filled with number 0 with the size of `shape`. |
| `np.ones(shape)`        | Create a NumPy filled with number 1 with the size of `shape`. |
| `np.full(shape, value)` | Create a NumPy filled with `value` with the size of `shape`. |
| `np.eye(N)`             | Create a NumPy identity matrix of `N` x `N` size.            |

Here, the size is placed between a pair of parenthesis `()` with a comma `,` separating the size of each dimension.

```python
import numpy as np

# NDARRAY
np.ndarray(shape=(2,3,0), dtype=np.uint8)

# ZERO NUMPY ARRAY
np.zeros(shape=(2,3))

# ONE NUMPY ARRAY
np.ones(shape=(2,3,2))

# NUMPY ARRAY WITH EVERY ELEMENT 7
np.full(shape=(3,2),7)

# IDENTITY NUMPY ARRAY
np.eye(N=3)
```

```
[[[0] [0] [5]]
[[3] [2] [7]]]

[[0. 0. 0.]
[0. 0. 0.]]

[[[1. 1.]
  [1. 1.]
  [1. 1.]]
  
 [[1. 1.]
  [1. 1.]
  [1. 1.]]]
  
[[7. 7.]
 [7. 7.]
 [7. 7.]]
 
[[1. 0. 0.]
 [0. 1. 0.]
 [0. 0. 1.]]
```

### NumPy Shape

Since NumPy is a bit different from the Python's built-in list object, using `len()` method will not provide the shape of the NumPy. Instead, NumPy has its own attribute called `shape` which is a tuple of size of each dimension.

```python
import numpy as np

A = np.ndarray(shape=(2,3,0), dtype=np.uint8)

print(A.shape)
print(A.shape[0])
```

```
(2, 3, 0)
2
```

## Indexing NumPy

The term "indexing" means slicing the NumPy of specific range only. Each dimension is indexed using colon `:` and dimensions are distinguished by comma `,` like the shape. Indexing shares the same rules as of list object slicing.

* `n:` : start indexing from n^th^ element (included)
* `:m` : end indexing until m^th^ element (excluded)
* `:-1` : index matrix excluding the a single last (that is, -1) element.

```python
import numpy as np

a = np.array([[1,2,3,4],[5,6,7,8],[9,10,11,12]])

b = a[:2, 1:3]
print()
```

# **PYTHON: MATPLOTLIB**

[Matplotlib](https://matplotlib.org/) is a Python 2D plotting library which produces publication quality figures in a variety of hardcopy formats and interactive environments across platforms. Matplotlib tries to make easy things easy and hard things possible. You can generate plots, histograms, power spectra, bar charts, errorcharts, scatterplots, etc., with just a few lines of code.

To install Matplotlib library, open command prompt window and enter the command below: 

```
python -m pip install matplotlib
```

## Terminology

This section is hereby to provide better understanding of the API of Matplotlib. Please refer to the figure below, and read the descriptions for detail explanation.

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\Python\matplotlib_terminology.png" width=100%></div><center style="font-weight:bold">Figure #. Matplotlib terminology.</center>
### Figure

Figure is an empty window of easel, a standing frame for a canvas. Upon calling figure using an API method such as `pyplot.figure()` returns pure figure without anything, shown as below:

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\Python\matplotlib_figure_no_axes.png" width=70%></div><center style="font-weight:bold">Figure #. Matplotlib figure without any axes.</center>
The API to call an empty figure is `matplotlib.pyplot.figure()`.

### Axes

Axes is the region of the image with the data space, considered as canvas that goes up on easel. This canvas is commonly known as subplot in `matplotlib.pyplot` module. Do not be confused with axes and axis which is completely different. A figure with four axes is shown as follows:

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\Python\matplotlib_figure_with_axes.png" width=70%></div><center style="font-weight:bold">Figure #. Matplotlib figure with four axes.</center>
The API to call an empty axes is `matplotlib.pyplot.subplot()` or `matplotlib.pyplot.subplots()` when creating both figure and multiple subplots simultaneously.


## Matplotlib Modules

| MODULES             | DESCRIPTION                                                  |
| ------------------- | ------------------------------------------------------------ |
| `matplotlib.pyplot` | Provides commands for interactive plot similar to MATLAB syntax. |
| `matplotlib.figure` |                                                              |
|                     |                                                              |



`plt.figure()` creates empty canvas; accept integer or string for figure title from argument.

`plt.subplot()` adds a subplot to the current figure. Implicitly creates `figure()` if not exist. It also acts as changing the currently selected subplot by `plt.subplot(axes_var)`.

`plt.subplots()` creates a figure and a set of subplots, returns figure and axes.

`figure.gca()` is "get current axes" thus no need to specify axes location, but create axes(111) if none exist.

`plt.plot()` actually plot on the subplot; implicitly creates `subplot(111)` if not exist, if it does then plot concurrently on the same axes(111).

`plt.show()` is what you need to eventually show the figure.

# **PYTHON: EXECUTABLE FILE**



## cx_Freeze

Mentioned by the official Python [documentation](https://docs.python.org/3/faq/windows.html#id5), `cx_Freeze` is a module that allows creating console and GUI executables from Python code.

https://cx-freeze.readthedocs.io/en/latest/index.html

### .pyd

`.pyd` files are dll's, but there are a few differences.



## PyInstaller



## ~~Py2Exe~~

*DEPRECRATED:  DOES NOT SUPPORT PYTHON ABOVE 3.5.*

# **CYTHON**

