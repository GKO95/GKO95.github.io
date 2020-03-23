# **C++: BASIC**

General-purpose low-level programming language that was based on C programming language. While C language only supports procedural programming, C++ allows object-oriented programming as well; thus, C++ is called hybrid language.

While the C language itself is a deprecated language, it is taught in school and institution to let programmer be able to grasp the basic concept and practice how to write C-based language, i.e., C++ and C#. C-based language especially involves a lot with computer memory and is important to understand how computer memory works.

## Compilation

C-based language uses compiler to run the source code. Compiler translates C++ source code (written in high-level language: English) to a language computer can understand. Without the compiler, a program that runs C++ cannot execute the source file.

Compiler has a several standard revision for ISO (International Organization of Standardization) based on the time it was released. The most renowned revision is a C++11 and C++17. This document will instruct the programming language based on C++11 at minimum.

Compilation is divided into two stage that is done by preprocessor and compiler (technically, preprocessor is included inside a compiler).

### Preprocessor

Preprocessing is a first stage of compilation done by a preprocessor. Preprocessor directive (aka. compiler directive) which is denoted by number sign # in the script commands preprocessor to perform certain actions before compiler does.

| Preprocessor Directive | Syntax                | Summery                                          |
| :--------------------- | --------------------- | ------------------------------------------------ |
| `#include`             | `#include <iostream>` | Include header file to the script.               |
| `#define`              | `#define SQUARE`      | Define new macro that can be used in the script. |
| `#pragma`              | `#pragma warn-rvl`    | Provide additional information to the compiler.  |

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

* `#include <header>` searches directories pre-designated by the compiler or IDE, generally used for system header.
* `#include "header.hpp"` searches current local directories where source file is located firsthand. If failed to find the match automatically searches in the pre-designated directories, just like `#include <header>`. This method is generally used for user-defined header.

Following is the list of header files that is often used when programming with C++ language.

| Header Files | Syntax                | Summery                                                      |
| ------------ | --------------------- | ------------------------------------------------------------ |
| `iostream`   | `#include <iostream>` | Defines standard input/output function:<br />`operator >>`, `operator <<` |
| `string`     | `#include <string>`   | Defines string-handling functions:<br />`append()`, `length()` |
| `cmath`      | `#include <cmath>`    | Define common mathematical functions:<br />`exp()`, `cos()`  |
| `ctime`      | `#include <ctime>`    | Defines date- and time-handling functions:<br />`time()`, `clock()` |

## Comment

Line comment is used to place a comment worth one line of code, using `//` (double slash).

Block comment places a comment that requires more than one line, using `/* */` (slash asterisk).

```cpp
#include <iostream>

int main() {
    
	/*
	BLOCK COMMENT:
	multiple line of comment can be placed here.
	*/
    
	std::cout << 1 << std::endl;
	std::cout << 2 << std::endl; // LINE COMMENT: for a single line of code.
	std::cout << 3 << std::endl;
    
	return 0;
}
```

```
1
2
3
```

## Namespace

A folder (scope) containing variables and functions: name of variables and functions must be unique and cannot have multiple same name in one program due to conflicting error on compilation. Assigning variables and functions under the namespace will allow the use of multiple same name across different namespaces.

```cpp
#include <iostream>

int main() {
    
    int variable1;
    
    namespace namespace1 {
        int function1() {...}
    }
    
    namespace namespace2 {
        int variable1, fucntion1() {...}
    }

    // Function with same name can exist in different namespace
    namespace1::function1();
    namespace2::function1();

    // Variable with different name is also possible.
    variable1;
    namespace2::variable1;
    
    
    return 0;
}
```

However, name of the namespaces must be unique and cannot have multiple same name in one program as well.

### Declaration

Declaration is used to simplify command to redundant repetitive typing of namespace to use variables and functions.

There are two different method to use a declaration: either individually or as a whole namespace.

```cpp
#include <iostream>

using namespace2::function1();

int main() {
    
    int variable1;
    
    namespace namespace1 {
        int function1() {...}
    }
    
    namespace namespace2 {
        int variable1, fucntion1() {...}
    }
    
    namespace1::function1();
    function1();
    namespace2::variable1;
    
    return 0;
}
```

Declaration as a whole namespace is convenient but with a risk of conflicts when using names.

```cpp
#include <iostream>

using namespace namespace2;

int main() {
    
    int variable1;
    
    namespace namespace1 {
        int function1() {...}
    }
    
    namespace namespace2 {
        int variable1, fucntion1() {...}
    }
    
    namespace1::function1();
    function1();
    variable1;  // WARNING: cannot distinguish between variable1 and namespace2::variable1
    
    return 0;
}
```

## Input & Output

Basic input and output of the C++ language is as follows:

| INPUT/OUTPUT | SYNTAX                        | DESCRIPTION                            |
| ------------ | ----------------------------- | -------------------------------------- |
| `std::cin`   | `std::cin >> ivalue;`         | Takes variable or string as an input.  |
| `std::cout`  | `std::cout << "Hello World";` | Print variable or string on a display. |

Due to function `cin` and `cout` are inside the standard library called `std`.

```cpp
int ivalue1, ivalue2 = 3;  // Assigned value 3 is just an example to help understanding.
std::cout << "Enter new the value of \"ivalue1 =" << ivalue1 << "\" here: " 
std::cin >> ivalue1 ;

std::cout << ivalue1 << std::endl << ivalue2;
```

```
Enter the value of "ivalue2 = 3" here: 10
10
3
```

### New Line Statement

A function of C++ Standard Library `std` that ends/breaks the line and begins new line: `std::endl`

```cpp
std::cout << "First Line" << std::endl << "Second Line"; 
```

```
First Line
Second Line
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

## Identifier

Identifier is a name used to identify a variable, function, object, class, namespace and more. In another word, it is just a (user-defined) name. There are rules identifier has to observe:

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
| `char`     | Character: `''`        | A single character, e.g., `'A'` and `'?'`.<br />Size: 1 byte |
| `string`   | String: `""`           | Series of characters under the namespace `std`.<br />Size: N/A (depends on overall character length) |
| `bool`     | Boolean                | Non-zero represents `True` while zero is `False`.<br />Size: 1 byte |
| `auto`     | Automatic              | Data type is declared automatically.<br />Useful for declaring new variable with complex data type. |
| `void`     | Void                   | Non-specific data type.<br />Size: 1 byte                    |

`float` is one of the commonly used numeric data type. Any arithmetic operation involving even a single `float` data type returns numerical data type as `float` automatically to fit the necessity:

```cpp
#include <iostream>

int main() {
	
    int num_1 = 4;     // The number is integer.
	float num_2 = 1.0; // The number is float.
    
    std::cout << num_1 + num_2 << std::endl;
    // Arithmetic of "float + integer" returns "float".
    
    return 0;
}
```

```
5.0
```

### Data Type Casting

Type casting force change the variable to a desired data type.

```cpp
float fvalue = 1.9;
int ivalue;

// Converts the value that should've been 1.9 into an integer just by returning integer.
ivalue = (int) fvalue1;

std::cout << ivalue;
```

```
1
```

### `sizeof()` Operator

An operator that returns the allocating memory size of data-type or variable in bytes.

```cpp
sizeof(int);
sizeof(char);
```

```
4
1
```

## Operation

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

# **C++: FUNCTION**

C-based language is executed based around a single key function called `main()`. Understanding the concept of functions is important in C-based languages, which can also be applied different programming languages as well.

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

Constant variable cannot be changed after its initial value assigned (keyword: `const`). Constant variable is only assigned through the `// METHOD_2` variable assignation.

```cpp
const int ivalue = 3;
```

### Static Variable

Local variable that maintains its data even when the function is exited. When re-entering the function, the static variable will be ready to use from the last-saved data.

```cpp
static int ivalue = 3;
```

## Function

Function is a block of code which can process the data and present processed/new data once it’s called, allowing the design of a dynamic program scripting.

Functions (aka. code blocks) have curly bracket `{}` which is a space where statements are executed. Each statement must end with a semicolon `;`.

```cpp
/* PROTOTYPE: aka. DECLARATION needs to be declare first to use it on the code before defined.*/
return_data_type function_name( data_type parameters );

int main() {
    
    /* CALL: using the newly created function is done by simply placing function_name.*/
	function_name(arguments);
    
    return 0;
}
 
/* DEFINITION: aka. IMPLEMENTATION describes what the function do.*/
return_data_type function_name(data_type parameters) {
    statements;
    return outcome;
}
```

It is possible to have two functions with the same name even under a single namespace only if they have different parameters, called *function overloading*. The scope of function overloading is limited to the function parameter, thus different return type does not overload functions.

```cpp
void printNumber(int x) {
    std::cout << "Prints an integer: " << x << std::endl;
}
void printNumber(float x) {
    std::cout << "Prints a float: " << x << std::endl;
}

int main() {
    int a = 16;
    float b = 54.541;
    printNumber(a);
    printNumber(b);
}
```

### Return Statement

Return statement terminates a function and returns indicated value.

The statement `return 0;`  above terminates `function_name()` function and returns value 0 as an output which means the program has successfully executed. Any other number represent failure of execution of program.

### Parameter & Argument

Argument value is passed over to parameter of the function, but parameter and argument is processed in different memory thus does not affect each other (i.e. change of value). To make parameter and argument influential to each other, a pointer is used to do the job.

It is possible to define default arguments for function execution even without external arguments. However, you cannot skip to next argument passing by typing double comma.

```cpp
int function_1 (int a=1,int b=2,int c=3) { return a + b + c;}

int main() {
    std::cout << function_1() << std::endl;
	std::cout << function_1(4) << std::endl;
	std::cout << function_1(4,5) << std::endl;
	std::cout << function_1(4,,5) << std::endl;
    
    return 0;
}
```

```
6
9
12
error: expected primary-expression before ',' token
```

### Void Function

A function with `return_data_type` being void is a void function where there’s no returned variable or value. It is not recommended to use void function too often but can be used on case where there’s nothing to be returned.

```cpp
#include <iostream>

// int main() {...} means main() function returns value in integer.
int main() {
    printf("Hello,World!\n");
    return 0;
}
```

It is advised not to use `void` function on `main()` function.

## `main()` Function

The `main()` function is a where an actual programming starts. A solution (aka. project) must one and the only `main()` function within all the source files: creating multiple `main()` functions or not having any `main()` function will cause error on running the program.

### Command-line Arguments

Some C++ programming has the following arguments passed to the `main()` function.

```cpp
int main(int argc, char **argv /* ALTERNATIVE: char *argv[] */){

    return 0;
}
```

The argument count `argc` and argument vector `argv` is used to accept command line when executing the program, in a format of `argv[argc]`. Suppose there is a program names `sample.out` with additional commands entered:

```
./sample.out option1 option2
```

* `argv[0]`: `./sample.out`
* `argv[1]`: `option1`
* `argv[2]`: `option2`

## Recursion Function

A function which calls itself (recursion). Able to solve problems with ease by utilizing the same type of simpler sub-problem-solving method. Factorial $!$ is a best example of a recursion function.

```cpp
int factorial( int num ) {
    if (num == 1)
        return (1);
    else
        return (num * factorial(num-1));
}
```

Recursion can occur indirectly by multiple number of functions calling one to another, then back to the beginning.

# **C++: CONDITIONAL AND LOOP**

## `if` Statement

`if` statements run code if a certain condition holds. If condition evaluates True, the statements are carried out. Otherwise, they aren't carried out.

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

## Ternary Operator

Conditional expression with a functionality same as if statement but much simpler. The operator is called “ternary” since they take three arguments.

```cpp
logic_condition ? true_return : false_return;
```

Ternary operator should not be overused as it reduces readability, but useful on variable assignment.

## `switch` Statement

Another conditional statement which execute one case of statements out of many cases assigned with value, selected when it’s True to argument expression. Every case needs `break` at the end of the group of statements to not iterate over again.

When no case is True to the expression, the statements from default is returned. Default case does not need break statement but must to be presented in switch statement no matter what.

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
}
```


### `break` Statement

The `break` statement can be used to end a nearest loop or a switch statement prematurely. When encountered inside a loop, the `break` statement causes the loop to finish immediately. However, it does not break from its outer loop.

### `continue` Statement

Although `continue` statement is exclusive only to a loop statement and cannot be applied to a switch statement, it is a statement that works similarly to `break` statement. `continue` statement skips the rest of the statements and jumps back to the nearest conditioning of the loop, rather than stopping it.

## `while` Loop

The statements inside are repeatedly executed (iteration) as long as the condition holds. The loop ends once it evaluates to False.

```cpp
// statements repeate until condition is False,skipping without performing statements.
while (condition) {
    statements;
}

// simplified while loop when the loop statement is simple as a single line.
while (condition) statement;
```

## `do`-`while` Statement

Works same as the While Loop, but condition decides whether to proceed to next iteration instead rather than whether to execute statements. The loop ends once it evaluates to False.

```cpp
// statements are repeated until condition is False,stopping the iteration.
do {
    statements
} while (condition);
```

## `for` Loop

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

### Range-based `for` Loop

Since C++11, a new variation of `for` loop was introduced that can loop the execution while in range.

```cpp
// statements are repeated for a given range.
for ( internal_variable : range ) {
	statements;
}

// simplified range-based for loop when the loop statement is simple as a single line.
for ( internal_variable : range ) statement;
```

Following code shows the example how to use this `for` loop statement:

```cpp
#include <iostream>

int main() {
	
    /*  */
    for (int var : {0, 1, 2, 3, 4, 5})
        std::cout << var << " ";
    
    return 0;
}
```

```
0 1 2 3 4 5
```

The range-based `for` loop above uses an array object as a range. Other array-like object such as `std::vector` can be used alternatively, and these will be explained in next chapter.

# **C++: ITERABLE OBEJCT**

There is a concept called iteration that data is access in sequential order and this process is done by an object called iterator. The object that can be iterated is called iterable. In the programming language called Python exist four different iterable object.

Meanwhile, C++ has a iterable object called `std::array` and `std::vector`.

## Array

An iterable object used to store an indexed list of items of same data-type. Bracket `[]` is used to declare the size of an array, while curly bracket `{}` is used to assign value to each element of the array:

```cpp
/* Create array of array_0 which can contain size of data.*/
int arrayName1 [size];

/* INITIALIZE series of data to the array upon declaration.*/
float arrayName2 [size] ={float1, float2, float3, float4, ...};

/* INITIALIZE series of data (lesser than the size) to the array upon declaration.*/
char arrayName3 [5] ={char1, char2, char3};
array_2 = {char1, char2, char3, Null, Null}
// An array can be partially initialized.
// Missing values would be set to 0 (num) or Null (char).
```

An array is stored in contiguous memory locations and cannot change size after being declared.

Calling array itself does not return a sequence of elements within; instead will return the array memory address. This address is equivalent to an address of the first elements of the array. Iteration (i.e., `for` or `while` loop) is needed to visualize all elements of the array.

```cpp
/* Calling array_0 returns the memory address.*/
std::cout << array_0 << std::endl;

/* Address of array_0 is same as address of the first element array_0 [0] */
std::cout << &array_0[0] << std::endl;


/* Assigns initial series of data (lesser than the size) to the array upon declaration.*/
for (int i=0 ; i < array_size ; i++ ) {
    std::cout << array_0 [i] << std::endl;
}
```

```
0139F854
0139F854
```

Array in C++ programming language can have undefined size and still be able to initialize value. But attempting to declare dynamic-size array without any initial value will see it incomplete and thus results error.

```cpp
/* Assigning initial series of data to the array of undefined size upon declaration.*/
float array_0 [] = {float_0, float_1, float_2, float_3, ...};

/* ERROR: Declaring array of undefined size even without any initialization.*/
float array_0 [];
```

```
error C2122: 'array_0 ': unknown size
```

### `sizeof()` Operator on Array

Operator `sizeof()`  is a function that returns the total assigned byte size in a variable. This is also very useful in counting the number of elements in an array using following code:

```cpp
int array_1 [100];
std∷cout << sizeof(array_1 ) / sizeof(array_1 [0]);
// Dividing the total bytes to the byte of each element returns total number of elements in the array.
```

```
100
```

### Passing Array to Functions

Some functions may require array as an argument. Only the name of its array is passed to the function parameter and without square bracket since array name itself represents the address.

```cpp
/* DECLARATION: need to declare in order to use it on the code before defined as below.*/ 
void function_name ( char parameter_1 [ ],int paramter_2 );

/* USAGE: using the newly defined or created is done by simply placing function_name.*/
char array_1[3];
function_1 ( array_1,variable_2 );

/* DEFINITION: describe what the function do.*/
void function_1( char parameter_1 [ ],int parameter_2 ) {
    statement;
}
```

## Multi-dimensional Array

An array that has series of array of same size as elements.

```cpp
/* Assigning initial series of data to the array upon declaration.*/
int array_0[2][3]={{ivalue00 ,ivalue01 ,ivalue02 } ,{ivalue10 ,ivalue11 ,ivalue12 }};
```

Dynamic array size is also possible in multi-dimensional array but limited only to its first boundary.

```cpp
/* Assigning initial series of data to the nth-Dimension array of undefined size upon declaration.*/
int array_0[][]={{ivalue00, ivalue01, ivalue02}, {ivalue10, ivalue11, ivalue12}};
std::cout << array_0[0][2];

int array_0[2][]={{ivalue00, ivalue01, ivalue02}, {ivalue10, ivalue11, ivalue12}};
std::cout << array_0[0][2]; 

int array_0[][3]={{ivalue00, ivalue01, ivalue02}, {ivalue10, ivalue11, ivalue12}};
std::cout << array_0[0][2];
```

```
error: declaration of 'array_0 ' as multidimensional array must have bounds for all dimensions except the first
error: declaration of 'array_0 ' as multidimensional array must have bounds for all dimensions except the first
ivalue02
```

## Vector

Vector is similar to the concept of the array but has a feature where it can change its size since the data is stored in dynamic memory allocation unlike array; this concept will be explained later in *C++: DYNAMIC MEMORY* chapter.

```cpp
/* DECLARATION of a vector. */
std::vector<char> vectorName1;	// PARAMETERIZED TYPE is `char`: character-only vector.

/* INITIALIZATION of a vector */
std::vector<int> vectorName2 {value1, value2, value3};
```

Example above have a parameterized vector of integer data type by `std::vector<int>`. This is not necessary but recommended to speed up the process caused by the property of having a flexible capacity.

Although the concept itself is very similar to array, there are significant difference when it comes to the handling the vector function. The table below introduces some of the operators vector has:

| OPERATOR      | EXAMPLE               | DESCRIPTION                                                  |
| ------------- | --------------------- | ------------------------------------------------------------ |
| `at()`        | `var.at(index)`       | Equivalent to reference operator `[]` from an array.<br />Example on the left returns element located at `index`. |
| `data()`      | `var.data()`          | Returns the pointer of the vector (= of the first element).  |
| `size()`      | `var.size()`          | Returns the number of elements in the vector.                |
| `empty()`     | `var.empty()`         | Returns Boolean whether the vector is empty or not.          |
| `assign()`    | `var.assign(num,val)` | Assign new `val` element `num` times, replacing old ones.    |
| `push_back()` | `var.push_back(val)`  | Insert new element `val` at the end of the vector (push).    |
| `pop_back()`  | `var.pop_back()`      | Remove the last element (pop).                               |
| `erase()`     | `var.erase(index)`    | Remove the element of the specified `index` location.        |
| `clear()`     | `var.clear()`         | Remove all the elements in the vector.                       |

The vector function can take two parameters: data type and allocator type. While data type parameter is to parameterize the function as explained previously, parameterizing allocator type define the storage allocation model.

```cpp
// GENERIC TEMPLATE of a vector.
template <class T, class Alloc = allocator<T>> class vector;
```

### Parameterized Function

Function can be parameterized to specify which data type the function is declared for. This is done by placing a angle bracket `< >` as a prefix of the function. Not only is parameterization limited to functions but also extends to scope of classes as well, called **parameterized class**.

```cpp
// INITIALIZATION of a parameterized function.
funcName<dtype> function1;

// INITIALIZATION of a parameterized class.
className<dtype> object1;
```

# **C++: POINTER**

## Pointer

A variable that holds a data of address of memory allocation rather than data-typed value.

Asterisk `*` sign is used to declare pointer variable and it can be placed next to data-type, variable, or even between them. Beware the pointer can only be assigned with address from same data-type variable. 

After declaration, there is two different way to call a pointer: with and without asterisk. Asterisk sign (dereference operator) on pointer returns the value that is stored in address assigned to the pointer instead of returning the address. If there is no asterisk sign on pointer on call returns the address of the variable.

```cpp
/* Declaration of a pointer.*/
int *pointer_0;
float * pointer_1;
char* pointer_2;
bool* pointer_3 (parameters);      // Function pointer: address of starting point of the function.

/* Assigning address to a pointer.*/
int variable_0  = 3;
pointer_0 = &variable_0;
pointer_3 = function_1;            // Function pointer: does not need & or *.

/* Different outcome between pointer with and without asterisk sign */
std::cout << *pointer_0 << std::endl;
std::cout << pointer_0 << std::endl;
```

```
3
0139F854
```

Using these ampersand `&` and dereference `*` operator are the important factor on programming C++.

The `pointer_3`  is a special case where pointer holds the function and does not need ampersand nor dereference operator: this is because function, just like an array, returns the address of the starting point of the function when called by its name.

### Address-on Operator `&`

Aka. ampersand operator used to access the memory location address of a variable.

```cpp
int variable_0 = 3;
std::cout << &variable_0 << std::endl;
// Memory allocation address of variable_0 in hexadecimal.
```

```
0139F854
```

### Contents-of Operator `*`

Aka. dereference operator returns the value of the variable located at the address (pointer exclusive operator). However, this is different from the asterisk used on declaring pointer which is rather a type compound specifier, only sharing the same asterisk sign.

```cpp
int variable_0 = 3;
int pointer_0 = &variable_0;
std::cout << *pointer_0 << std::endl;
```

```
3
```

## Void Pointer

A pointer without any specified data-type, thus can point to any kind of data-type value.

```cpp
/* Declaration of a void pointer.*/ 
void *pointer_0;

/* Dereferencing a void pointer.*/
pointer_0 = &int_variable;
std::cout << *((int*)pointer_0 ) << std::endl;

pointer_0 = &char_variable;
std::cout << *((char*)pointer_0 ) << std::endl;

pointer_0 = &bool_variable;
std::cout << *((bool*)pointer_0 ) << std::endl;
```

# **C++: DYNAMIC MEMORY**

## Dynamic Memory

C++ language course has dealt with subjects and topics heavily related to memory allocation and management. This is crucial when it comes to programming as great program should be memory efficient.

So far, allocation of memory for local variables and functions are done automatically by the compiler. Data is store on stack data structure which sequentially stacks up local variables and functions one-by-one. Huge flaw in stack memory is inability to retrieve the data that has been popped out.

Dynamic memory allocation allows programmer can manually select data to be stored elsewhere that is non-subjective to stacking. This memory is a heap data structure (a variation of the tree data structure) and data is stored in random memory location.

For better understanding, consider stack as a computer’s main storage drive that holds necessary data to run the computer but perceptible to change heap as an external drive which stores readable database only.

Following is a text-based diagram that shows how memory is assigned upon program execution:

<div style="background:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em; padding:0.5em 0 0.5em 0;"><img src=".\.images\Cpp\memory_layout.jpg" width=100%></div>
<center style="font-weight:bold">Figure #. Virtual memory layout of C-based language.</center>
This,however,is only a virtual layout so to help programmer understand the concept. In reality,these memory can be entangled with actual memory needed to run a computer (e.g.OS ).

It is noticeable that stack and heap are noncontiguous, i.e. their boarder does not touch each other.

Created dynamic memory should be assigned to the local pointer variable (stack), thus the pointer becomes a gateway between the memory of stack and heap.

```cpp
/* Creating dynamic memory on heap */
int *pointer_1 = new int;                 // Dynamic memory for a single variable.
char *pointer_2 = new char[ ];      // Dynamic memory for an array.

/* Creating dynamic memory on heap */
delete pointer_1;
delete [ ]  pointer_2;
```

When dynamic memory is created, it is essential that programmer must delete that same dynamic memory to prevent fatal memory error from occurring (i.e. memory leak).

### Memory Leak

Caused by dynamic memory in heap not released even when is no longer needed. This unreleased dynamic memory will take up space, and accumulation of this event will eventually lead to memory shortage, or even system failure.

### Dangling Pointer

The command "delete"  erase the heap memory but the pointer in stack is still remained. This pointer points to the memory address that does not exist anymore, thus dangling like a rope with no other end. This memory error eventually leads to segmentation fault, aka SEGFAULT.

To prevent this error, it is advised to use null pointer instead on the pointer that can be reused later so the pointer would point at least to nothing than to point aimlessly after deleting the memory.

```cpp
int* pointer_1 = NULL;
pointer_1 = new int;
```

# **C++: STRING**

## String

Conventional C language does not have a string data-type that can hold the string data specifically. Alternative is by using character data-type array and hold individual character of the string in each element one-by-one. Because array is used to hold string data, it is possible to use pointer instead to hold a string data since an array (itself) and a pointer both returns memory address.

```cpp
/* Declaration of a string data.*/
char string_1[] = "Hello";                 // Conventional C-based method 1 
char* pointer_1 = "World!";              // Conventional C-based method 2

/* Calling string variable.*/
std∷cout << string_1 << std∷endl;
std∷cout << pointer_1 << std∷endl;
```

```
"Hello"
"World"
"spam and egg"
```

String data always include the Null data at the end. That is why the character size is always +1 bigger when counting number of the character composing the string.

```cpp
/* Analyzing string data-type.*/
std∷cout ≪ sizeof(\\"Hello World!\\");
// equivalent: {'H','e','l' ,'l','o',' ','W','o','r','l','d','!',NULL}
```

```
13
```

## String Data Type

C++ language is different from C language and do have string data type stored in `string.h` header which is part of the `iostream.h` header. The data type is under the standard namespace `std::` thus the prefix is necessary unless its namespace is declared beforehand. It is recommended to use this method then of conventional C-based method.

```cpp
/* Declaration of a string data.*/
std∷string string_2 = "spam and egg.";  // C++ language method (recommended)

/* Calling string variable.*/
std∷cout << string_2 << std∷endl;
```

```
"spam and egg"
```

### String Array

String type array does not store the string data but instead stores string pointers that point to the address of the string data.

```cpp
std::string array_0[] = {"Hello", "World", "spam and egg"};
```


# **C++: OBJECT-ORIENTED PROGRAMMING**

Object-oriented programming is a programming style based around usage of objects instead of functions, which is close to real world representation.

## Objects

Objects (aka. instances) are independent unit where each object has its own **identity** with **states** and **behaviors** contained within. This is identical to the object of Python programming language, and is counterpart of "attribute" and "method".

### State & Behavior

State (aka. attribute) is a value for a field stored in object, class, or structure as one of its member.

Behavior is an object-dependent function that is  a function that is bounded inside the objects and classes, meaning the object/class is needs to be called first to use a method and cannot be used independently.

### Constant Objects

Constant object shares equivalent concept as of constant variable: once the initialization is done there can be no turning back. Value assigned to the member cannot be modified afterward.

```cpp
const ClassName obj;
```

Initialization of the members are done using public "constructor" with parameter assigned, which is automatically executed as soon as the instance is created from the class. Fail to do so results compilation error.

While non-constant object can only call non-constant functions, same is true for the constant object which can only call constant functions. Unlike the variable counterpart, constant function is defined by placing `const` at the suffix.

```cpp
void obj_function() const {
    std::cout << "This is a constant function" << std::endl;
}
```


## Classes

Classes is a user-defined data type for creating objects, hence can be deemed as an object’s blueprint. The name of the class is also called as "type", thus class is used to create an instance of a particular *type*.

```cpp
#include <iostream>
using namespace std;

/* DECLARATION: need to declare to use it on the code before defined as below.*/
class ClassName;

int main() {
    /* USAGE: creating instance (object) from the class.*/
	ClassName obj;
    obj.ID = 1995;
    obj.setName("Ko");
    cout << obj.ID << endl << obj.getName();
    return 0;
}

/* DEFINITION: describes states, behavior of the class.*/
class ClassName {
	public:
    	int ID;							// Public state
    	void setName(std::string str) { // Public member function 1 (is behavior 1)
        	name = str; // `name` is a state variable of private member.
        }
    	std::string getName() {            // Public member function 2 (is behavior 2)
        	return name;
        }
    private:
    	std::string name;				// Private state
    protected:
};
```

```
1995
Ko
```

Unlike a function, class requires semicolon `;` at the end of the code block bracket. Usage of the class is identical to function: declaration of the class is needed when using it before its definition. Accessing the member through a pointer can be done using dot operator `.`.

### `public` Access Specifier

Members defined under the keyword `public` can be accessed from outside the class. Public member uses programming technique called (data) abstraction: even without knowing how to behavior functions scripted inside the class can be used outside the class.

Abstraction is also applied in header, that is, even though user doesn't know how `cout` is coded inside `iostream` header can be used outside the header and in the script.

### `private` Access Specifier

Members defined under the keyword `private` cannot be accessed from outside the class (including derived class), but can only be used within the class, such as public members. If no access specifier is given, every states and behaviors is included as private member.

This programming technique is called encapsulation, which combines the states and behaviors of the classes together but also restricts access to states and behaviors of the class and the variables within to prevent accidental modification, thus protect them. This is done by allowing access from external code only to selected components, called **Data Hiding**.

### `protected` Access Specifier

Members defined under the keyword `protected` is similar to the `private` member where the member cannot be accessed from outside the class, but can be accessed from the class derived from its base class. A concept of "inheritance" is required for understanding.

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