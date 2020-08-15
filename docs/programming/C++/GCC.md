---
title: GCC Compiler
---

GCC C Compiler flags

<!--more-->

## -c

`gcc -c` compiles source files without linking.

### Example

`gcc -c myfile.c` would generate `myfile.o` object file.

---

## -D
`gcc -D` defines a macro to be used by the preprocessor.

### Example

```c
#include <stdio.h>
 
void main()
{
    #ifdef DEBUG    
       printf("Debug run\n");
    #else
       printf("Release run\n");
    #endif
}
```

Build `myfile.c` and run it with `DEBUG` defined:

```bash
$ gcc -DDEBUG myfile.c -o myfile
$ ./myfile
Debug run
$
```

---

## -g

`gcc -g` generates debug information to be used by GDB debugger.

* `-g0`: no debug information
* `-g1`: minimal debug information
* `-g` : default debug information
* `-g3`: maximal debug information

### Example

```c
// myfile.c
#include <stdio.h>
 
void main()
{
    printf("Program run!!\n");
}
```

Build `myfile.c` on terminal and run `gdb` to debug:

```bash
$ gcc -g myfile.c -o myfile
$ gdb myfile
(gdb) run
Starting program: /home/ubuntu/myfile
Program run!!
Program exited with code 012.
(gdb) quit
$
```

---


## -I

`gcc -I` adds include directory of header files.

### Example

`proj/src/myheader.h`:
```c
// myheader.h
#define NUM1 5
```

`myfile.c`
```c
// myfile.c
#include <stdio.h>
#include "myheader.h"
 
void main()
{
    int num = NUM1;
    printf("num=%d\n", num);
}
```

Build `myfile.c` *without* include directory `proj/src`:

```bash
$ gcc myfile.c -o myfile
myfile.c:3:10: fatal error: myheader.h: No such file or directory
compilation terminated.
$
```

Build `myfile.c` *with* include directory `proj/src`:

```bash
$ gcc -Iproj/src myfile.c -o myfile
$ ./myfile
num=5
$
```
---

## -L/-l

`gcc -l` links with a library file.

`gcc -L` looks in directory for library files.

### Example

For static library file `libmath.a` use `-lmath`:

```
$ gcc -static myfile.c -lmath -o myfile
```

For shared library file `libmath.so` use `-lmath`:

```
$ gcc myfile.c -lmath -o myfile
```

---

## -O

Set the compiler's optimization level.

* `-O0`: optimization for compilation time (default)
* `-O1`/`-O`: optimization for code size and execution time
* `-O2`: optimization more for code size and execution time
* `-O3`: optimization more for code size and execution time
* `-Os`: optimization for code size
* `-Ofast`: `O3` with fast none accurate math calculations


---

## -shared

Generate shared object file for shared library.

---

## -w

Disable all warning messages.

---

## -Wall

Enables all compiler's warning messages.

---

## References

[RapidTables: GCC C Compiler](https://www.rapidtables.com/code/linux/gcc.html)
