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

## References

- [A Tour of Go](https://tour.golang.org/welcome/1)
- [Why should you learn go](https://medium.com/@kevalpatel2106/why-should-you-learn-go-f607681fad65)
- [How to Write Go Code](https://golang.org/doc/code.html)
- [Effective Go](https://golang.org/doc/effective_go.html)
- [Style guideline for Go packages](https://rakyll.org/style-packages/)
- [Logging and instrumentation](https://peter.bourgon.org/go-best-practices-2016/#logging-and-instrumentation)