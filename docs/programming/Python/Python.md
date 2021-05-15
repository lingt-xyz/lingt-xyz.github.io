---
title: Python
---

## Python

### Variables

A Python variable is a symbol that *refers* to an object.

```python
>>> x = 5    # Create a new variable 'x' and make it refer to an integer object that holds value 5
>>> y = x    # Create a new variable 'y' and make it refer to the same integer object as 'x'
>>> x += 10  # Make 'x' refer to a new integer object with value (x + 10)
>>> x        # Variable x now refers to the new integer object, with value 15
15
>>> y        # Variable y still refers to the old integer object, with value 5
5
```

One way to see how variables work is to understand the [difference between the == and is operators](https://www.geeksforgeeks.org/difference-operator-python/):

```python
>>> x = 257     # Make 'x' refer to an integer object that holds value 257
>>> x == 257    # Does x refer to an object that has SAME VALUE as this other integer object?
True            # Yes!
>>> x is 257    # Does x refer to EXACT SAME OBJECT as this other integer object?
False           # No! There are two different integer objects in memory, each with value 257.
```

> The result would be different for integers 0..256 because Python tries to save memory by pooling small integers. Likewise for short strings.

### Numbers

```python
x = 3
print(type(x)) # Prints "<class 'int'>"
print(x)       # Prints "3"
print(x + 1)   # Addition; prints "4"
print(x - 1)   # Subtraction; prints "2"
print(x * 2)   # Multiplication; prints "6"
print(x ** 2)  # Exponentiation; prints "9"
x += 1
print(x)  # Prints "4"
x *= 2
print(x)  # Prints "8"
y = 2.5
print(type(y)) # Prints "<class 'float'>"
print(y, y + 1, y * 2, y ** 2) # Prints "2.5 3.5 5.0 6.25"
```

> Note: Python does *NOT* have unary increment (`x++`) or decrement (`x--`) operators.

In interactive mode, the last printed expression is assigned to the variable `_`.

```python
>>> tax = 12.5 / 100
>>> price = 100.50
>>> price * tax
12.5625
>>> price + _
113.0625
>>> round(_, 2)
113.06
```

### Booleans

```python
t = True
f = False
print(type(t)) # Prints "<class 'bool'>"
print(t and f) # Logical AND; prints "False"
print(t or f)  # Logical OR; prints "True"
print(not t)   # Logical NOT; prints "False"
print(t != f)  # Logical XOR; prints "True"
```

> Note: Python uses English words rather than symbols (`&&`, `||`, etc.).

### [String](https://docs.python.org/3.7/library/stdtypes.html#string-methods)

Different ways to create strings.

```python
>>> s = 'hello'      # Make a new variable 's' and make it refer to a string object with value 'hello'
>>> s = "hello"      # Same thing, with double-quotes
>>> s = """hello"""  # Same thing, with triple-quotes
>>> s
'hello'              # By default Python displays strings with single quotes around them
>>> print(s)
hello                # Printing a string does not result in surrounding quotes
```

Strings can be treated like a sequence of characters:

```python
>>> s = 'abcd'
>>> s[2]         # Get the character at index 2 (the third character)
'c'
>>> len(s)       # Get the length of the string (the number of characters)
4
```

Strings can be concatenated (glued together) with the + operator, and repeated with *:

```python
hello = 'hello'    # String literals can use single quotes
world = "world"    # or double quotes; it does not matter.
hw = hello + ' ' + world  # String concatenation
print(hw)  # prints "hello world"
print(3 * 'un' + 'ium') # 3 times 'un', followed by 'ium'; prints "unununium"
```

Two or more string literals (i.e. the ones enclosed between quotes) next to each other are automatically concatenated.
This feature is particularly useful when you want to break long strings.

```python
print('Py' 'thon') # prints 'Python'
```

You can get a string representation of most Python objects:
```python
>>> x = 123
>>> str(x)
'123'
```

You can also split and join strings together:
```python
>>> words = 'Dog versus cat'.split()     # Split a string by whitespace
>>> words
['Dog', 'versus', 'cat']                 # The result is a list of string objects

>>> '-'.join(words)                      # Make a string object with value '-' and then call its join()
'Dog-versus-cat'   
```

string functions:

```python
s = "hello"
print(s.capitalize())  # Capitalize a string; prints "Hello"
print(s.upper())       # Convert a string to uppercase; prints "HELLO"
print(s.rjust(7))      # Right-justify a string, padding with spaces; prints "  hello"
print(s.center(7))     # Center a string, padding with spaces; prints " hello "
print(s.replace('l', '(ell)'))  # Replace all instances of one substring with another;
                                # prints "he(ell)(ell)o"
print('  world '.strip())  # Strip leading and trailing whitespace; prints "world"
```

#### String formatting
See this [Python string formatting guide](https://pyformat.info) for lots of examples, comparing both "old style" and "new style."

The "old style" string formatting in Python is similar to the printf function in C:
```python
>>> name = 'Jack'
>>> age = 7
>>> '%s is %d years old' % (name, age)
'Jack is 7 years old'
```
The formatting scheme is similar to the printf function in C, where %s means string, %.2f means "floating point value with 2 decimals of precision," etc.


### [Lists](https://docs.python.org/3.7/tutorial/datastructures.html#more-on-lists)

A list is a mutable sequence. It is resizeable and can contain elements of different types.

You should know how to make lists:
```python
>>> x = []                   # Make 'x' refer to a new empty list object
>>> x = list()               # Same as above
>>> x = [3, 'abc']           # Make 'x' refer to a new list object that has two slots, one referring
                             # to an integer object and one referring to a string object
```

You can get and set items by index:
```python
xs = [3, 1, 2]    # Create a list
print(xs, xs[2])  # Prints "[3, 1, 2] 2"
print(xs[-1])     # Negative indices count from the end of the list; prints "2"
xs[2] = 'foo'     # Lists can contain elements of different types
print(xs)         # Prints "[3, 1, 'foo']"
xs.append('bar')  # Add a new element to the end of the list
print(xs)         # Prints "[3, 1, 'foo', 'bar']"
x = xs.pop()      # Remove and return the last element of the list
print(x, xs)      # Prints "bar [3, 1, 'foo']"
```

Lists also support operations like concatenation.

```python
>>> squares = [1, 4, 9, 16, 25]
>>> squares + [36, 49, 64, 81, 100]
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

#### Slicing

```python
nums = list(range(5))     # range is a built-in function that creates a list of integers
print(nums)               # Prints "[0, 1, 2, 3, 4]"
print(nums[2:4])          # Get a slice from index 2 to 4 (exclusive); prints "[2, 3]"
print(nums[2:])           # Get a slice from index 2 to the end; prints "[2, 3, 4]"
print(nums[:2])           # Get a slice from the start to index 2 (exclusive); prints "[0, 1]"
print(nums[:])            # Get a slice of the whole list; prints "[0, 1, 2, 3, 4]"
print(nums[:-1])          # Slice indices can be negative; prints "[0, 1, 2, 3]"
nums[2:4] = [8, 9]        # Assign a new sublist to a slice
print(nums)               # Prints "[0, 1, 8, 9, 4]"
```

#### Loops

```python
animals = ['cat', 'dog', 'monkey']
for animal in animals:
    print(animal)
# Prints "cat", "dog", "monkey", each on its own line.
```

#### Enumerate

```python
animals = ['cat', 'dog', 'monkey']
for idx, animal in enumerate(animals):
    print('#%d: %s' % (idx + 1, animal))
# Prints "#1: cat", "#2: dog", "#3: monkey", each on its own line
```

#### List comprehensions

```python
nums = [0, 1, 2, 3, 4]
squares = []
for x in nums:
    squares.append(x ** 2)
print(squares)   # Prints [0, 1, 4, 9, 16]
```
which equivelent to
```python
nums = [0, 1, 2, 3, 4]
squares = [x ** 2 for x in nums]
print(squares)   # Prints [0, 1, 4, 9, 16]
```

List comprehensions with conditions:  

```python
nums = [0, 1, 2, 3, 4]
even_squares = [x ** 2 for x in nums if x % 2 == 0]
print(even_squares)  # Prints "[0, 4, 16]"
```

### [Dictionaries](https://docs.python.org/3.7/library/stdtypes.html#mapping-types-dict)

A dictionary stores (key, value) pairs.

```python
d = {'cat': 'cute', 'dog': 'furry'}  # Create a new dictionary with some data
print(d['cat'])       # Get an entry from a dictionary; prints "cute"
print('cat' in d)     # Check if a dictionary has a given key; prints "True"
d['fish'] = 'wet'     # Set an entry in a dictionary
print(d['fish'])      # Prints "wet"
# print(d['monkey'])  # KeyError: 'monkey' not a key of d
print(d.get('monkey', 'N/A'))  # Get an element with a default; prints "N/A"
print(d.get('fish', 'N/A'))    # Get an element with a default; prints "wet"
del d['fish']         # Remove an element from a dictionary
print(d.get('fish', 'N/A')) # "fish" is no longer a key; prints "N/A"
```

#### Loops

```python
d = {'person': 2, 'cat': 4, 'spider': 8}
for animal in d:
    legs = d[animal]
    print('A %s has %d legs' % (animal, legs))
# Prints "A person has 2 legs", "A cat has 4 legs", "A spider has 8 legs"
```

#### Access keys and their corresponding values

```python
d = {'person': 2, 'cat': 4, 'spider': 8}
for animal, legs in d.items():
    print('A %s has %d legs' % (animal, legs))
# Prints "A person has 2 legs", "A cat has 4 legs", "A spider has 8 legs"
```

#### Dictionary comprehensions

```python
nums = [0, 1, 2, 3, 4]
even_num_to_square = {x: x ** 2 for x in nums if x % 2 == 0}
print(even_num_to_square)  # Prints "{0: 0, 2: 4, 4: 16}"
```

### [Sets](https://docs.python.org/3.7/library/stdtypes.html#set-types-set-frozenset)

A set is an unordered collection of distinct elements.

```python
animals = {'cat', 'dog'}
print('cat' in animals)   # Check if an element is in a set; prints "True"
print('fish' in animals)  # prints "False"
animals.add('fish')       # Add an element to a set
print('fish' in animals)  # Prints "True"
print(len(animals))       # Number of elements in a set; prints "3"
animals.add('cat')        # Adding an element that is already in the set does nothing
print(len(animals))       # Prints "3"
animals.remove('cat')     # Remove an element from a set
print(len(animals))       # Prints "2"
```

#### Loops

```python
animals = {'cat', 'dog', 'fish'}
for idx, animal in enumerate(animals):
    print('#%d: %s' % (idx + 1, animal))
# Prints "#1: fish", "#2: dog", "#3: cat"
```

> Note: Sets are unordered, you cannot make assumptions about the order in which you visit the elements of the set:

#### Set comprehensions:

```python
from math import sqrt
nums = {int(sqrt(x)) for x in range(30)}
print(nums)  # Prints "{0, 1, 2, 3, 4, 5}"
```

### [Tuples](https://docs.python.org/3.7/tutorial/datastructures.html#tuples-and-sequences)

A tuple is an (immutable) ordered list of values.

```python
d = {(x, x + 1): x for x in range(10)}  # Create a dictionary with tuple keys
t = (5, 6)        # Create a tuple
print(type(t))    # Prints "<class 'tuple'>"
print(d[t])       # Prints "5"
print(d[(1, 2)])  # Prints "1"
```

### [Functions](https://docs.python.org/3.7/tutorial/controlflow.html#defining-functions)

```python
def sign(x):
    if x > 0:
        return 'positive'
    elif x < 0:
        return 'negative'
    else:
        return 'zero'

for x in [-1, 0, 1]:
    print(sign(x))
# Prints "negative", "zero", "positive"
```

#### Optional arguments

```python
def hello(name, loud=False):
    if loud:
        print('HELLO, %s!' % name.upper())
    else:
        print('Hello, %s' % name)

hello('Bob') # Prints "Hello, Bob"
hello('Fred', loud=True)  # Prints "HELLO, FRED!"
```

#### [`*args and **kwargs`](https://www.geeksforgeeks.org/args-kwargs-python/)

`*args`: pass a **non-keyworded**, **variable-length** argument list

```python
# Python program to illustrate 
# *args with first extra argument 
def myFun(arg1, *argv): 
	print ("First argument :", arg1) 
	for arg in argv: 
		print("Next argument through *argv :", arg) 

myFun('Hello', 'Welcome', 'to', 'GeeksforGeeks') 

# output
First argument : Hello
Next argument through *argv : Welcome
Next argument through *argv : to
Next argument through *argv : GeeksforGeeks
```

`**kwargs`: pass a **keyworded**, variable-length argument list

```python
# Python program to illustrate **kargs for 
# variable number of keyword arguments with 
# one extra argument. 

def myFun(arg1, **kwargs): 
	for key, value in kwargs.items(): 
		print ("%s == %s" %(key, value)) 

myFun("Hi", first ='Geeks', mid ='for', last='Geeks')	 

# output
last == Geeks
mid == for
first == Geeks
```

### [Classes](https://docs.python.org/3.7/tutorial/classes.html)

```python
class Greeter(object):

    # Constructor
    def __init__(self, name):
        self.name = name  # Create an instance variable

    # Instance method
    def greet(self, loud=False):
        if loud:
            print('HELLO, %s!' % self.name.upper())
        else:
            print('Hello, %s' % self.name)

g = Greeter('Fred')  # Construct an instance of the Greeter class
g.greet()            # Call an instance method; prints "Hello, Fred"
g.greet(loud=True)   # Call an instance method; prints "HELLO, FRED!"
```

### Code styles

### Virtual Environments

```bash
$ mkdir project                         # create a test project
$ cd project
$ python3 -m venv .venv                 # create a virtual environment in the folder .venv
$ source .venv/bin/activate             # activate the virtual environment
(.venv) $ pip search requests
(.venv) $ pip install requests
(.venv) $ pip install requests==2.6.0
(.venv) $ pip --upgrade requests
(.venv) $ pip show requests             # display information about a particular package
(.venv) $ pip list                      # display all of the packages installed in the virtual environment
(.venv) $ pip freeze > requirements.txt
(.venv) $ pip install -r requirements.txt
(.venv) $ deactivate                    # deactivate the virtual environment
```

---

## Conda

```bash
# create env
(base)$ conda create -n py37 python=3.7 numpy=1.20.1 scipy=1.6.2

# activate env
(base)$ conda activate py37

# export env
(py37)$ conda env export --from-history | grep -v "^prefix: " > environment.yml

# import env
(base)$ conda env create -f environment.yml
```

- List env: `$ conda info --envs`
- Remove env: `$ conda remove -n $name --all`
- List packages: `$ conda list -n $name`
- Search packages: `$ conda search $package`

---

## Nohup

Nohup output to "nohup.out":
```bash
$ nohup python -u ./test.py &
```

- `-u` flag will force the stdout and stderr streams to be unbuffered

Nohup output to a file:
```bash
$ nohup python -u ./test.py > out.log &
```
---

## Numpy

[Numpy](http://www.numpy.org/) is the core library for scientific computing in Python. It provides a high-performance multidimensional array object, and tools for working with these arrays.

### Arrays

A numpy array is a grid of values, all of the same type, and is indexed by a tuple of nonnegative integers. The number of dimensions is the _rank_ of the array; the _shape_ of an array is a tuple of integers giving the size of the array along each dimension.

```python
import numpy as np

a = np.array([1, 2, 3])   # Create a rank 1 array
print(type(a))            # Prints "<class 'numpy.ndarray'>"
print(a.shape)            # Prints "(3,)", means we have 3 elements in the outter array.
print(a[0], a[1], a[2])   # Prints "1 2 3"
a[0] = 5                  # Change an element of the array
print(a)                  # Prints "[5, 2, 3]"

b = np.array([[1,2,3],[4,5,6]])    # Create a rank 2 array
print(b.shape)                     # Prints "(2, 3)", means we have 2 elements in the outter array, 
                                   # and 3 elements in the inner array
print(b[0, 0], b[0, 1], b[1, 0])   # Prints "1 2 4"

a = np.zeros((2,2))   # Create an array of all zeros
print(a)              # Prints "[[ 0.  0.]
                      #          [ 0.  0.]]"

b = np.ones((1,2))    # Create an array of all ones
print(b)              # Prints "[[ 1.  1.]]"

c = np.full((2,2), 7)  # Create a constant array
print(c)               # Prints "[[ 7.  7.]
                       #          [ 7.  7.]]"

d = np.eye(2)         # Create a 2x2 identity matrix
print(d)              # Prints "[[ 1.  0.]
                      #          [ 0.  1.]]"

e = np.random.random((2,2))  # Create an array filled with random values
print(e)                     # Might print "[[ 0.91940167  0.08143941]
                             #               [ 0.68744134  0.87236687]]"
```

### Array indexing

#### Slicing

Slicing returns a **view** of the data.

```python
import numpy as np

# Create the following rank 2 array with shape (3, 4)
# [[ 1  2  3  4]
#  [ 5  6  7  8]
#  [ 9 10 11 12]]
a = np.array([[1,2,3,4], [5,6,7,8], [9,10,11,12]])

# Use slicing to pull out the subarray consisting of the first 2 rows
# and columns 1 and 2; b is the following array of shape (2, 2):
# [[2 3]
#  [6 7]]
b = a[:2, 1:3]

# A slice of an array is a view into the same data, so modifying it
# will modify the original array.
print(a[0, 1])   # Prints "2"
b[0, 0] = 77     # b[0, 0] is the same piece of data as a[0, 1]
print(a[0, 1])   # Prints "77"

# Two ways of accessing the data in the middle row of the array.
# Mixing integer indexing with slices yields an array of lower rank,
# while using only slices yields an array of the same rank as the
# original array:
row_r1 = a[1, :]    # Rank 1 view of the second row of a
row_r2 = a[1:2, :]  # Rank 2 view of the second row of a
print(row_r1, row_r1.shape)  # Prints "[5 6 7 8] (4,)"
print(row_r2, row_r2.shape)  # Prints "[[5 6 7 8]] (1, 4)"

# We can make the same distinction when accessing columns of an array:
col_r1 = a[:, 1]
col_r2 = a[:, 1:2]
print(col_r1, col_r1.shape)  # Prints "[ 2  6 10] (3,)"
print(col_r2, col_r2.shape)  # Prints "[[ 2]
                             #          [ 6]
                             #          [10]] (3, 1)"
```

#### Integer array indexing

Integer array indexing returns a **copy** of the data.

```python
import numpy as np

a = np.array([[1,2], [3, 4], [5, 6]])

# An example of integer array indexing.
# The returned array will have shape (3,) and
print(a[[0, 1, 2], [0, 1, 0]])  # Prints "[1 4 5]"
# [0, 1, 2] are row index.
# [0, 1, 0] are column index corresponding to row index.

# The above example of integer array indexing is equivalent to this:
print(np.array([a[0, 0], a[1, 1], a[2, 0]]))  # Prints "[1 4 5]"

# When using integer array indexing, you can reuse the same
# element from the source array:
print(a[[0, 0], [1, 1]])  # Prints "[2 2]"

# Equivalent to the previous integer array indexing example
print(np.array([a[0, 1], a[0, 1]]))  # Prints "[2 2]"
```

#### Boolean array indexing

Boolean array indexing returns a **copy** of the data.

```python
import numpy as np

a = np.array([[1,2], [3, 4], [5, 6]])

bool_idx = (a > 2)   # Find the elements of a that are bigger than 2;
                     # this returns a numpy array of Booleans of the same
                     # shape as a, where each slot of bool_idx tells
                     # whether that element of a is > 2.

print(bool_idx)      # Prints "[[False False]
                     #          [ True  True]
                     #          [ True  True]]"

# We use boolean array indexing to construct a rank 1 array
# consisting of the elements of a corresponding to the True values
# of bool_idx
print(a[bool_idx])  # Prints "[3 4 5 6]"

# We can do all of the above in a single concise statement:
print(a[a > 2])     # Prints "[3 4 5 6]"
```

### Datatypes

Every numpy array is a grid of elements of the same type. Numpy tries to guess a datatype when you create an array, but functions that construct arrays usually also include an optional argument to explicitly specify the datatype.

```python
import numpy as np

x = np.array([1, 2])   # Let numpy choose the datatype
print(x.dtype)         # Prints "int64"

x = np.array([1.0, 2.0])   # Let numpy choose the datatype
print(x.dtype)             # Prints "float64"

x = np.array([1, 2], dtype=np.int64)   # Force a particular datatype
print(x.dtype)                         # Prints "int64"
```

### Array math

```python
import numpy as np

x = np.array([[1,2],[3,4]], dtype=np.float64)
y = np.array([[5,6],[7,8]], dtype=np.float64)

# Elementwise sum; both produce the array
# [[ 6.0  8.0]
#  [10.0 12.0]]
print(x + y)
print(np.add(x, y))

# Elementwise difference; both produce the array
# [[-4.0 -4.0]
#  [-4.0 -4.0]]
print(x - y)
print(np.subtract(x, y))

# Elementwise product; both produce the array
# [[ 5.0 12.0]
#  [21.0 32.0]]
print(x * y)
print(np.multiply(x, y))

# Elementwise division; both produce the array
# [[ 0.2         0.33333333]
#  [ 0.42857143  0.5       ]]
print(x / y)
print(np.divide(x, y))

# Elementwise square root; produces the array
# [[ 1.          1.41421356]
#  [ 1.73205081  2.        ]]
print(np.sqrt(x))
```

> Note: `*` is elementwise multiplication, not matrix multiplication. We instead use the `dot` function to compute inner products of vectors, to multiply a vector by a matrix, and to multiply matrices.

```python
import numpy as np

x = np.array([[1,2],[3,4]])
y = np.array([[5,6],[7,8]])

v = np.array([9,10])
w = np.array([11, 12])

# Inner product of vectors; both produce 219
print(v.dot(w))
print(np.dot(v, w))

# Matrix / vector product; both produce the rank 1 array [29 67]
print(x.dot(v))
print(np.dot(x, v))

# Matrix / matrix product; both produce the rank 2 array
# [[19 22]
#  [43 50]]
print(x.dot(y))
print(np.dot(x, y))
```

#### Sum

```python
import numpy as np

x = np.array([[1,2],[3,4]])

print(np.sum(x))  # Compute sum of all elements; prints "10"
print(np.sum(x, axis=0))  # Compute sum of each column; prints "[4 6]"
print(np.sum(x, axis=1))  # Compute sum of each row; prints "[3 7]"
```

#### Transpose

```python
import numpy as np

x = np.array([[1,2], [3,4]])
print(x)    # Prints "[[1 2]
            #          [3 4]]"
print(x.T)  # Prints "[[1 3]
            #          [2 4]]"

# Note that taking the transpose of a rank 1 array does nothing:
v = np.array([1,2,3])
print(v)    # Prints "[1 2 3]"
print(v.T)  # Prints "[1 2 3]"
```

### [Broadcasting](https://www.numpy.org/devdocs/user/basics.broadcasting.html)

The term broadcasting describes how numpy treats arrays with different shapes during arithmetic operations. Subject to certain constraints, the smaller array is “broadcast” across the larger array so that they have **compatible** shapes. 

```python
>>> a = np.array([1.0, 2.0, 3.0])
>>> b = np.array([2.0, 2.0, 2.0])
>>> a * b
array([ 2.,  4.,  6.])

>>> y = np.array([[10, 20, 30]])  # Create an ndarray with shape (1,3)
>>> x = np.eye(3, dtype=y.dtype)  # Create an ndarray with shape (3,3)

>>> x + y                 # Broadcast y across the rows of x
array([[11, 20, 30],      # = [[1  0  0]   +   [[10 20 30]]
       [10, 21, 30],      #    [0  1  0]
       [10, 20, 31]])     #    [0  0  1]]       
       
>>> x + y.T               # Broadcast y.T across the columns of x
array([[11, 10, 10],      # = [[1  0  0]   +   [[10]
       [20, 21, 20],      #    [0  1  0]        [20]
       [30, 30, 31]])     #    [0  0  1]]       [30]]
```


### APIs

#### [numpy.arange](https://docs.scipy.org/doc/numpy/reference/generated/numpy.arange.html)

```python
>>> np.arange(3)
array([0, 1, 2])
>>> np.arange(3.0)
array([ 0.,  1.,  2.])
>>> np.arange(3,7)
array([3, 4, 5, 6])
>>> np.arange(3,7,2)
array([3, 5])
```

#### [numpy.linspace](https://docs.scipy.org/doc/numpy/reference/generated/numpy.linspace.html)

```python
>>> np.linspace(2.0, 3.0, num=5)
array([2.  , 2.25, 2.5 , 2.75, 3.  ])
>>> np.linspace(2.0, 3.0, num=5, endpoint=False)
array([2. ,  2.2,  2.4,  2.6,  2.8])
>>> np.linspace(2.0, 3.0, num=5, retstep=True)
(array([2.  ,  2.25,  2.5 ,  2.75,  3.  ]), 0.25)
```

#### [numpy.meshgrid](https://docs.scipy.org/doc/numpy/reference/generated/numpy.meshgrid.html)

[What is the purpose of meshgrid in Python / NumPy?](https://stackoverflow.com/questions/36013063/what-is-the-purpose-of-meshgrid-in-python-numpy)

[XX, YY = meshgrid(x,y)](https://i.stack.imgur.com/8Mbig.png)


```python
>>> nx, ny = (3, 2)
>>> x = np.linspace(0, 1, nx)
>>> y = np.linspace(0, 1, ny)
>>> xv, yv = np.meshgrid(x, y)
>>> xv
array([[0. , 0.5, 1. ],
       [0. , 0.5, 1. ]])
>>> yv
array([[0.,  0.,  0.],
       [1.,  1.,  1.]])
>>> xv, yv = np.meshgrid(x, y, sparse=True)  # make sparse output arrays
>>> xv
array([[0. ,  0.5,  1. ]])
>>> yv
array([[0.],
       [1.]])
```

#### [numpy.reshape](https://docs.scipy.org/doc/numpy/reference/generated/numpy.reshape.html)

```python
>>> a = np.arange(6).reshape((3, 2))
>>> a
array([[0, 1],
       [2, 3],
       [4, 5]])
```

when pass `-1`

```python
>>> a = np.array([[1,2,3], [4,5,6]])
>>> np.reshape(a, 6)
array([1, 2, 3, 4, 5, 6])
>>> np.reshape(a, (3,-1))       # the unspecified value is inferred to be 2
array([[1, 2],
       [3, 4],
       [5, 6]])
```

---

## SciPy

### Image operations

### MATLAB files

### Distance between points


---

## Matplotlib

### Plotting

### Subplots

### Images


---

## References
* [Concordia COMP 6321 Machine Learning](#)
* [Python + Numpy + Matplotlib tutorial from Stanford's cs231n course](http://cs231n.github.io/python-numpy-tutorial/)