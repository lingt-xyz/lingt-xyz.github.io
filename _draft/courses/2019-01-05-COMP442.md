---
layout: note
title: COMP 442
comments: false
mathjax: true
toc: true
---

Winter 2019

<!--more-->

## Outline
* Instructor: Dr. Joey Paquet
* Website: [COMP442 Winter 2019](https://users.encs.concordia.ca/~paquet/wiki/index.php?title=COMP442/6421_-_winter_2019)

## Assignmnets:
* [P1]({{ site.baseurl }}/resources/note/COMP442/Assignment1.COMP442.paquet.2019.4.pdf)
* [P2]({{ site.baseurl }}/resources/note/COMP442/Assignment2.COMP442.paquet.2019.4.pdf)
* [P3]({{ site.baseurl }}/resources/note/COMP442/Assignment3.COMP442.paquet.2019.4.pdf)
* [P4]({{ site.baseurl }}/resources/note/COMP442/Assignment4.COMP442.paquet.2019.4.pdf)

## Useful links
* [Parser generator](http://hackingoff.com/compilers/ll-1-parser-generator)
* [CFG](https://cyberzhg.github.io/toolbox/cfg2ll)

---

## 1. Introduction
### 1.1 Comipler
* is a translation system.
* is a computer program.
* translates programs written in a high level language into a lower lever language, generally machine language.
* from a stream of characters,
* to assembly language,
* to binary.

### 1.2 Compilations vs. interpretation
* Programming languages can be implemented (i.e. translated/executed) by any of the following three general methods:
    * Compilation: programs are translated directly into *machine language* by a compiler, the output of which is later loaded and executed directly by a computer.
    * Interpretation: programs are *interpreted* (i.e. simultaneously translated and executed) by an interpreter.
    * Compilation/Interpretation Hybrid: programs are first translated into an intermediate representation by a compiler, the output of which is later executed by and interpreter.
* Dynamic languages: delay much of the checking to run-time.

### 1.3 Front end and Back end
* Front end: from source code to intermediate representation
    * Dependent on the source language compiled.
    * Independent from the target machine.
* Back end: code generation and low-level optimization
    * Independent on the source language compiled.
    * Dependent from the target machine.

---

## 2. Lexcial analysis

### 2.1 Role of the scanner
* Removal of comments
* Case conversion
* Removal of white spaces
* Interpretatioini of compiler directives
* Initial creation of the symbol table
* Convert the input file to a token stream

### 2.2 Design of a lexical analyser
1. Construct a set of regular expressions that define the form of any token
2. Derive an NDFA from REs
3. Derive a DFA from NDFA
4. Translate the NDFA to a state transition table
5. Implement the table
6. Implement the algorithm to interpret the table

### 2.3 Thompson's construction
* An atomic lexical symbol
* A concatenation expression
* A union expression
* A Kleene star expression

### 2.4 Rabin-Scott powerset construction
* $\epsilon\text{-closure}(S)$
* $\text{Move}_{\text{NFA}}(T,a)$
* $\text{Move}_{\text{DFA}}(T,a)$
* Final states

### 2.5 Implementation
* Backtracking
* Ambiguity

### 2.6 Error-recovery in lexical analysis
* Panic Mode: Skip characters until a valid character is read
* Guess Mode

### 2.7 Conclusions
* Three methods
    * Lexical analyzer generator
        * safe, quick
        * must learn software
        * uable to handle unusual situations
    * Table-Driven lexical analyzer
        * general and adaptable method
        * building transition table can be tedious and error-prone
    * Hand-written
        * can be optimized
        * can handle any unusual situation
        * easy to build for most languages
        * error-prone
        * not adaptable or maintainable
* Lexical analyzer’s modularity
    * Modularity/Maintainability: system is more modular, thus more maintainable
    * Efficiency: modularity = task specialization = easier optimization
    * Reusability: can change the whole lexical analyzer without changing other parts


---

## 3. Syntactical analysis
Syntax analysis involves parsing the token sequence to identify the *syntactic structure* of the program.

## 3.1 Syntax and semantics
* Syntax: defines how valid sentences are formed.
* Semantics: defines the meaning of valid sentences.
* Some grammatically correct sentences can have no meaning.

## 3.2 Grammars transformations
* Grammar
    * Definition
        * A quadruple $(T,N,S,R)$
    * Context free grammars
        * Sentential form
        * Sentence
* Derivations
    * Leftmost derivation
    * Rightmost derivation
* Extended Backus-Naur Form (EBNF)
    * alternative
    * repetition
    * optionality
* Grammar transformations
    1. Optionality
    2. Repetition
    3. Ambiguous grammars
        * Incorporate operation precedence in the parser
        * Implement backtracking
        * Transform the grammar
            * Left recursion: right-recursive
            * Non-recursive ambiguity: factorization

## 3.3 Parsing
* Overview
    * Input: token sequence
    * Output: some form of intermediate representation of the program's structure, typically a *parse tree*.
    * How: Using a *context-free grammar* which recursively defines syntactical structures.
        * Written by hand
        * Generated by parser generators
* Top-down and Bottom-up
    * Top-down parsing
        * Starts at the root (starting symbol)
        * Builds the tree downwards from:
            * the sequence of tokens in input (from left to right)
            * the rules in the grammar
    * Bottom-up parsing
        * Starting from the leafs up to the root
        * Builds rightmost derivations.

## 3.4 Predictive parsing
* the parser must always be able to determine which of the right-hand sides to follow, only with its knowledge of the next token in input.
* The assumption is that no backtracking is possible/necessary.
* First and Follow sets
* How:
    * Recursive descent predictive parsing
        * Hard-coded
    * Table-driven
        * Build FIRST and FOLLOW sets
        * Build the parser table
        * Implement the parser algorithm
## 3.5 Error recovery
* Goal:
    * identify all programming errors,
    * give meaningful indications about the location and nature of errors in the input program.
* How:
    * Panic mode, or don’t panic (Nicklaus Wirth)
    * Error productions
    * Phrase level correction
    * Global correction
* Panic mode
    * Variation 1: 
        * Given a non-terminal A on top of the stack, skip input tokens until an element of FOLLOW(A) appears in the token stream.
        * Pop A from the stack and resume parsing. 
        * Report on the error found and where the parsing was resumed. 
    * Variation 2: 
        * Given a non-terminal A on top of the stack, skip input tokens until an element of FIRST(A) appears in the token stream. 
        * Report on the error found and where the parsing was resumed. 
    * Variation 3
        * If we combine variation 1 and 2, when there is a parse error and a variable A on top of the stack, we skip input tokens until we see either
            * a token in FIRST(A), in which case we simply continue,
            * a token in FOLLOW(A), in which case we pop A off the stack and continue.
        * Report on the error found and where the parsing was resumed.
* Implementations:
    * Error Recovery in Recursive Descent Predictive Parsers
    * Error Recovery in Table-Driven Predictive Parsers

---

## 4. Syntax-Directed Translation
* _Semantic actions_ are integrated in the parsing process.
* Semantic actions are functions whose goal is to acumulate and/or process semantic information about the program as the parsing is done.

---

## 5. Abstract Syntax Tree

---

## 6. Symbol table
### Visitor Pattern
* Motivation
    * When many new operations are needed and the object structure consists of many unrelated classes, it is inflexible to add new subclasses each time a new operation is required.
    * Distributing all these new operations across the various classes leads to a system that's hard to understand, maintain, and change.
    * Often, the new operations form groups that are related to specific kinds of operations.
    * Adding all of them in the same existing classes creates low cohesion.
    * Often, only specific sub-groups of operations should be triggered.
* Intent
    * To create a structure/mechanism by which new operations are injected into existing classes, with minimal changes to be applied to these classes.
    * To provide modularity and cohesion by creating groups of related new operations.
    * Be able to inject/execute only a specific group of operations at a time.

---

## 7. Bottom-up parsing
### 7.1 Concepts
* shift‐reduce
    * Shift
    * Reduce
    * Handle
* LL vs. LR parsing

### 7.2 LR Parsing
* LR parsers
    * SLR: simple LR, easiest to implement, but the least powerful. May fail to produce a parsing table for some grammars.
    * CLR: canonical LR, most powerful, general and expensive LR method.
    * LALR: lookahead LR, intermediate in power and cost. Will work for most programming language constructs.
* Construction of an LR parsing table

---
## Code Generation
