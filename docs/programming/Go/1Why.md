---
title: Go
---

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
4. Other languages:
    * C: fast, difficult to work with and not safe. Compiling speed, dependencies and runtime errors are vast.
    * Ruby: safe but it’s slower and has many dependencies, one of them is the interpreter itself.
    * Java: a virutal machine is needed. Too complex and verbose to write.
    * Javascript and Node.js: they are wild kids; which are interpreted, weakly-typed and unsafe to work with (although there are some possible directions like TypeScript or compiling directly to Javascript from other safer languages).
    * Python: slow, weak types.

## References

- [A Tour of Go](https://tour.golang.org/welcome/1)
- [Why should you learn go](https://medium.com/@kevalpatel2106/why-should-you-learn-go-f607681fad65)
- [How to Write Go Code](https://golang.org/doc/code.html)
- [Effective Go](https://golang.org/doc/effective_go.html)
- [Style guideline for Go packages](https://rakyll.org/style-packages/)
- [Logging and instrumentation](https://peter.bourgon.org/go-best-practices-2016/#logging-and-instrumentation)
- [Go go-to guide](https://yourbasic.org/golang/)
- [About Go Language — An Overview](https://blog.learngoprogramming.com/about-go-language-an-overview-f0bee143597c)