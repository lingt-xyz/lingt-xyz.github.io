---
title: Build LLVM 6.0
---

Build LLVM 6.0, including Clang.

<!--more-->

LLVM comes in three pieces. 

* The first piece is the LLVM suite. This contains all of the tools, libraries, and header files needed to use LLVM. It contains an assembler, disassembler, bitcode analyzer and bitcode optimizer. It also contains basic regression tests that can be used to test the LLVM tools and the Clang front end.

* The second piece is the Clang front end. This component compiles C, C++, Objective C, and Objective C++ code into LLVM bitcode. Once compiled into LLVM bitcode, a program can be manipulated with the LLVM tools from the LLVM suite.

* There is a third, optional piece called Test Suite. It is a suite of programs with a testing harness that can be used to further test LLVM’s functionality and performance.



## Source code

https://github.com/llvm/llvm-project/releases/tag/llvmorg-6.0.0

---

## Hardware

Disk 20GB, RAM 16GB.

## Host environment

```bash
$ uname -a
Linux ubuntu 5.4.0-42-generic #46~18.04.1-Ubuntu SMP Fri Jul 10 07:21:24 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux
```

```bash
$ sudo apt install g++
$ sudo apt install cmake
```

## Build LLVM and Clang

```bash
$ cd llvm-project
$ mkdir build (in-tree build is not supported)
$ cd build
$ cmake -DLLVM_ENABLE_PROJECTS=clang -G "Unix Makefiles" ../llvm
$ cmake --build .
```

* After LLVM has finished building, install it from the build directory:

```bash
$ cmake --build . --target install
```

The `--target` option with install parameter in addition to the `--build` option tells cmake to build the install target.

It is possible to set a different install prefix at installation time by invoking the cmake_install.cmake script generated in the build directory:

```bash
$ cmake -DCMAKE_INSTALL_PREFIX=/tmp/llvm -P cmake_install.cmake
```

---

## References

* https://releases.llvm.org/6.0.0/docs/CMake.html
* https://clang.llvm.org/get_started.html
* https://releases.llvm.org/6.0.0/docs/GettingStarted.html