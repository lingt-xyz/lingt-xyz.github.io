---
title: C/C++ Compilation
---

The C/C++ compilation, or building, process contains fours stages.
<!--more-->

Namely: Preprocessing, Compilation, Assembly, Linking

Take the following code as an example:

```c
/*
 * "Hello, World!": A classic.
 */

#include <stdio.h>

int
main(void)
{
	puts("Hello, World!");
	return 0;
}
```

## 1. Preprocessing

Lines starting with a `#` character are interpreted by the preprocessor as preprocessor commands. These commands form a simple macro language with its own syntax and semantics.

```bash
cc -E hello_world.c
```

Given the “Hello, World!” example above, the preprocessor will produce the contents of the `stdio.h` header file joined with the contents of the `hello_world.c` file, stripped free from its leading comment.

---

## 2. Compilation

The preprocessed code is translated to assembly instructions specific to the target processor architecture. These form an intermediate human readable language.

```bash
cc -S hello_world.c
```

This will create a file named `hello_world.s`, containing the generated assembly instructions.

---

## 3. Assembly

An assembler is used to translate the assembly instructions to object code. The output consists of actual instructions to be run by the target processor.

```bash
cc -c hello_world.c
```

Running the above command will create a file named `hello_world.o`, containing the object code of the program. The contents of this file is in a binary format and can be inspected using `hexdump` or `od` by running either one of the following commands:

```bash
hexdump hello_world.o
od -c hello_world.o
```

---

## 4. Linking

The object code generated in the assembly stage is composed of machine instructions that the processor understands but some pieces of the program are out of order or missing. To produce an executable program, the existing pieces have to be rearranged and the missing ones filled in. This process is called linking.

```bash
cc -o hello_world hello_world.c
```

The linker will arrange the pieces of object code so that functions in some pieces can successfully call functions in other ones. It will also add pieces containing the instructions for library functions used by the program. In the case of the “Hello, World!” program, the linker will add the object code for the `puts` function.

---

## References
* [The C++ compilation process](http://faculty.cs.niu.edu/~mcmahon/CS241/Notes/compile.html)
* [The Four Stages of Compiling a C Program](https://www.calleerlandsson.com/the-four-stages-of-compiling-a-c-program/)
