---
---

<!--more-->
## Reference
* [Go tour](https://tour.golang.org/list)
* [Why should you learn go](https://medium.com/@kevalpatel2106/why-should-you-learn-go-f607681fad65)

## Why

1. Go has goroutines instead of threads.
    * Goroutines have growable segmented stacks.
    * Goroutines have a faster startup time than threads.
    * Goroutines come with built-in primitives to communicate safely between themselves (channels).
    * Goroutines allow you to avoid having to resort to mutex locking when sharing data structures.
    * A single goroutine can run on multiple threads. Goroutines are multiplexed into small number of OS threads.
2. Compiled language.
    * Performance is almost nearer to lower level languages.
3. Neat and clean syntax
    * No classes. Every thing is divided into packages only. Go has only structs instead of classes.
    * Does not support inheritance.
    * No constructors.
    * No annotations.
    * No generics.
    * No exceptions.

## Hello, 世界

``` bash
go version go1.13.3 linux/amd64
```

``` go
package main

import "fmt"

func main() {
	fmt.Println("Hello, 世界")
}
```

## Packages

Every Go program is made up of packages. Programs start running in package main.
By convention, the package name is the same as the last element of the import path.

> :information_source: For instance, the "math/rand"package comprises files that begin with the statement package `rand`.

``` go
package main

import (
	"fmt"
	"math/rand"
)

func main() {
	fmt.Println("My favorite number is", rand.Intn(10))
}
```

### Imports

``` go
package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Printf("Now you have %g problems.\n", math.Sqrt(7))
}
```

This code groups the imports into a parenthesized, "factored" import statement.
You can also write multiple import statements, like:

``` go
import "fmt"
import "math"
```

### Exported names

In Go, a name is exported if it begins with a capital letter. For example, `Pizza` is an exported name, as is `Pi`, which is exported from the `math` package.

`pizza` and `pi` do not start with a capital letter, so they are not exported.

When importing a package, you can refer only to its exported names. Any "unexported" names are not accessible from outside the package.

``` go
package main

import (
	"fmt"
	"math"
)

func main() {
	//fmt.Println(math.pi)
	fmt.Println(math.Pi)
}
```

## Basic types

Go's basic types are:

``` go
bool

string

int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr

byte // alias for uint8

rune // alias for int32
     // represents a Unicode code point

float32 float64

complex64 complex128
```

 The `int`, `uint`, and `uintptr` types are usually 32 bits wide on 32-bit systems and 64 bits wide on 64-bit systems.
 
 > When you need an integer value you should use int unless you have a specific reason to use a sized or unsigned integer type.

``` go
package main

import (
	"fmt"
	"math/cmplx"
)

var (
	ToBe   bool       = false
	MaxInt uint64     = 1<<64 - 1
	z      complex128 = cmplx.Sqrt(-5 + 12i)
)

func main() {
	fmt.Printf("Type: %T Value: %v\n", ToBe, ToBe)
	fmt.Printf("Type: %T Value: %v\n", MaxInt, MaxInt)
	fmt.Printf("Type: %T Value: %v\n", z, z)
}
```

### Zero values

Variables declared without an explicit initial value are given their _zero value_.

The zero value is:
- `0` for numeric types,
- `false` for the boolean type, and
- `""` (the empty string) for strings.

``` go
package main

import "fmt"

func main() {
	var i int
	var f float64
	var b bool
	var s string
	fmt.Printf("%v %v %v %q\n", i, f, b, s)
}

// Expected results:
0 0 false ""
```

### Type conversions

The expression `T(v)` converts the value `v` to the type `T`.

Some numeric conversions:

``` go
var i int = 42
var f float64 = float64(i)
var u uint = uint(f)
```

Or, put more simply:

``` go
i := 42
f := float64(i)
u := uint(f)
```

Unlike in C, in Go assignment between items of different type requires an **explicit** conversion.

### Type inference

### Constants

### Numeric Constants

## Variables

### Variables with initializers

### Short variable declarations

## Functions

## Conditions

## Defer

## Pointers

## Structs

## Arrays


