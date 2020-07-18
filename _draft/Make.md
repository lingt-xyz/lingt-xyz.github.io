---
title: GNU make
---

GNU make implicit variables used by implicit rules.

<!--more-->

## Programs

### AR

Archive-maintaining program; default `ar`.

### AS

Program for compiling assembly files; default `as`.

### CC

Program for compiling C programs; default `cc`.

### CXX

Program for compiling C++ programs; default `g++`.

### CPP

Program for running the C preprocessor, with results to standard output; default `$(CC) -E`.

### LEX

Program to use to turn Lex grammars into source code; default `lex`.

### YACC

Program to use to turn Yacc grammars into source code; default `yacc`.

### MAKEINFO

Program to convert a Texinfo source file into an Info file; default `makeinfo`.

### TEX

Program to make TeX DVI files from TeX source; default `tex`.

### TEXI2DVI

Program to make TeX DVI files from Texinfo source; default `texi2dvi`.

### WEAVE

Program to translate Web into TeX; default `weave`.

### CWEAVE

Program to translate C Web into TeX; default `cweave`.

### RM

Command to remove a file; default `rm -f`.

### RANLIB

`ranlib` generates an index to the contents of an archive and stores it in the archive. The index lists each symbol defined by a member of an archive that is a relocatable object file.

An archive with such an index speeds up linking to the library and allows routines in the library to call each other without regard to their placement in the archive.

[The GNU ranlib program is another form of GNU `ar`; running `ranlib` is completely equivalent to executing `ar -s`.](https://sourceware.org/binutils/docs/binutils/ranlib.html)

---

## Arguments

The default values for all of these is the empty string, unless otherwise noted.

### ARFLAGS

Flags to give the archive-maintaining program; default `rv`.

### ASFLAGS

Extra flags to give to the assembler (when explicitly invoked on a `.s` or `.S` file).

### CFLAGS

Extra flags to give to the C compiler.

### CXXFLAGS

Extra flags to give to the C++ compiler.

### COFLAGS

Extra flags to give to the RCS co program.

### CPPFLAGS

Extra flags to give to the C preprocessor and programs that use it (the C and Fortran compilers).

### LDFLAGS

Extra flags to give to compilers when they are supposed to invoke the linker, `ld`, such as -L. Libraries (-lfoo) should be added to the LDLIBS variable instead.

### LDLIBS

Library flags or names given to compilers when they are supposed to invoke the linker, `ld`. LOADLIBES is a deprecated (but still supported) alternative to LDLIBS. Non-library linker flags, such as -L, should go in the LDFLAGS variable.

### LFLAGS

Extra flags to give to Lex.

### YFLAGS

Extra flags to give to Yacc.

---

## References

* [Variables Used by Implicit Rules](https://www.gnu.org/software/make/manual/html_node/Implicit-Variables.html)
