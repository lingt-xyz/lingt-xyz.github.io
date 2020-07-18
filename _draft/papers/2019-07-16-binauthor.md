---
layout: post
title: Notes for BinAuthor
mathjax: false
comments: false
share: false
tags: [vulnerabilities, firmware, binary, authorship]
---

Reading Notes for *On Leveraging Coding Habits for Effective Binary Authorship Attribution* by Saed Alrabaee, Paria Shirani, Lingyu Wang, Mourad Debbabi, and Aiman Hanna.

<!--more-->
## Limitations of existing techniques
* Most existing approaches to binary authorship attribution employ machine learning methods to extract unique features for each author and subsequently match the features of a given binary to identify the authors.
1. A considerable percentage of the extracted features are related to compiler functions rather than author styles, and this causes a high false positive rate.
2. The extracted features are not resilient to code transformation methods, refactoring techniques, changes in the compiliation settings, and the use of different compilers.
 
## How
1. Fiter unrelated functions such as compiler-related functions.
    * Compiler/helper functions can be identified through a collection of static signatures that are created in the training phase(e.g. opcode frequencies)
2. Label library-related functions and free open-source related functions.
    * BinShape
    * SIGMA
    * FOSSIL
3. Eliminate the effects of changes in the compiler or the compilation settings, code transformation, and refactoring tools.
4. Collect a set of author choices frequently made during code.
5. Design features based on these habits and integranted them into BinAuthor.

## Components
1. Filtration Process
    * Label library functions: BinShape
    * Label FOSS libraries: FOSSIL
    * Fiter compiler-related functions
2. Canonicalization
    * Lifting Binaries to Intermediate Representation(IR)
        * Convert the disassembled binary to the VEX-IR: angr
        * Convert the VEX-IR to LLVM-IR: implemented a translator
    * Optimizaing Intermediate Representation to Optimized IR
        * Extended version of Peggy tool
3.  Choices Categorization
    1. General Choices: capture an author's general programming preerences, for example, preferences in organizing the code, terminating a function, the use of particular keywords, or the use of specific resources.
        * Code organization: measure the reliance on the main function
        * Function termination
        * Keyword and resource preferences
    2. Quality-Related Chocies
        * Compliance with C/C++ coding standards
        * Security concerns
    3. Embedded Choices: actions that are related to coding habits present in the source code, which are not easily captured at the binary level by traditional features such as strings or graphs. Examples are initializing member variables in constructors and dynamically deleting allocated resources in destructors.
        * Distruction of opcode frequencies
    4. Structural Choices
        * Object-oriented v.s. procedural programming
        * ad hoc v.s. hierarchical
4. Feature Vectors
5. Classification
    * A weight is assigned to each choice by applying logistic regression to them in order to predict class probabilities

## Limitations of BinAuthor
1. Advanced Obfuscation
2. IR: IR would remove some author style, e.g., loop deletion.
3. Functionality: there are some choices appear when an author implements a specific functionality. For instance, if the functionality does not have a multiple-branch logic, there is no choice beween `if` and `swith`.
4. ? Less than 150 authors only on the Google Code Jam.