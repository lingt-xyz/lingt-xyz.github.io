---
title: C++
---

<!--more-->

## Terminology

### Linux
* Linux is not an operating system, it is a kernel, it is a part of an operating system. An operating system is for humans, a kernel is for programs.

### GNU
* GNU stands for “GNU's Not Unix”. The GNU operating system is a complete free software system, upward-compatible with Unix. The project to develop the GNU system is called the “GNU Project”.

### GNU/Linux
> By 1990 we had either found or written all the major components except one—the kernel. Then Linux, a Unix-like kernel, was developed by Linus Torvalds in 1991 and made free software in 1992. Combining Linux with the almost-complete GNU system resulted in a complete operating system: the GNU/Linux system. [Ref.](https://www.gnu.org/gnu/gnu-history.html)

### GCC
* GNU Compiler Collection

### gcc
* GNU `C` Compiler
* gcc will compile: `*.c` as `C`.
* gcc will compile: `*.cpp` as `C++`.

### g++
* GNU `C++` Compiler
* g++ will compile: `*.c` as `C++`.
* g++ will compile: `*.cpp` as `C++`.

### Clang
* LLVM `C`-family compiler.

### [GNU Make](https://www.gnu.org/software/make/)
* GNU Make is a tool which controls the generation of executables and other non-source files of a program from the program's source files.

* Make gets its knowledge of how to build your program from a file called the makefile, which lists each of the non-source files and how to compute it from other files. When you write a program, you should write a *makefile* for it, so that it is possible to use Make to build and install the program.

### [CMake](https://cmake.org/Wiki/Main_Page)
* CMake is used to control the software compilation process using simple platform and compiler independent configuration files. 
* CMake generates native *makefiles* and workspaces that can be used in the compiler environment of your choice.
* It is easier to understand, when you have the history. People used their compiler. Over the time they added so many flags, that it was cumbersome to type them every time. So they put the calls in a script. From that the build systems (Make, Ninja) evolved. Then people wanted to support multiple platforms, compilers, scenarios and so on and the build system files became hard to maintain and their use was error-prone. That's the reason people invented meta build system that create the files for the actual build system. Examples are Autotools or CMake. [Ref.](https://stackoverflow.com/questions/39761924/understanding-roles-of-cmake-make-and-gcc)

---

## Basic