---
title: COMP 465
---

2018 Fall


## Outline

### Instructor
* Instructor: Hovhannes Harutyunyan
* Office: EV 003.155
* Email: haruty@cs.concordia.ca
* Office hours: Thursday 11:40 - 12:40 or by appointment

### Textbook
Introduction to Algorithms, third edition, by T. Cormen, C. Leiserson, R. Rivest, C. Stein, MIT Press, 2009.

### Grading
* 10% Assignments 
* 30% Midterm Exam – in class (week 7 or 8)
* 60% Final Exam

### Assignments
* Assignment 1. (due on September 22, 2018, 11:59pm)
* Assignment 2. (due on October 9, 2018, 11:59pm)
* Assignment 3. (due on November 11, 2018, 11:59pm)
* Assignment 4. (due on November 28, 2018, 11:59pm) 

---

## 4 Divide-and-Conquer

A **_recurrence_** is an equation or inequality that describes a function in terms of its value on smaller inputs.

Three methods for solving recurrences:
1. Substitution method
2. Recursion-tree method
3. Master method

### 4.2 Strassen's algorithm for matrix multiplication

If {% raw %}$$A=(a_{ij}), B=(b_{ij})$${% endraw %} are square {% raw %}$$n\times n$${% endraw %} matrices, then
{% raw %}
$$
C=A\times B, \text{ entry }c_{ij}=\sum_{k=1}^n a_{ik}\cdot b_{kj}
$$
{% endraw %}

* Square-Matrix_Multiply: Running time {% raw %}$$T(n)=\Theta (n^3)$${% endraw %}
* A simple divide-and-conquer algorithm

    Partition each of *A*, *B*, and *C* into four {% raw %}$$n/2 \times n/2$${% endraw %} matrices

    {% raw %}$$

    \begin{pmatrix}
        a & b \\
        c & d \\ 
    \end{pmatrix}
    ,
    \begin{pmatrix}
        e & g \\
        f & h \\ 
    \end{pmatrix}
    ,
    \begin{pmatrix}
        r & s \\
        t & u \\ 
    \end{pmatrix}

    $${% endraw %}

    so that we rewrite the equation {% raw %}$$C=A\cdot B$${% endraw %} as

    {% raw %}$$

    \begin{pmatrix}
        r & s \\
        t & u \\  
    \end{pmatrix}
    =
    \begin{pmatrix}
        a & b \\
        c & d \\ 
    \end{pmatrix}
    \cdot
    \begin{pmatrix}
        e & g \\
        f & h \\ 
    \end{pmatrix}

    $${% endraw %}

    with

    {% raw %}$$
    
    r=a\cdot e + b\cdot f,\\
    s=a\cdot g + b\cdot h,\\
    t=c\cdot e + d\cdot f,\\
    u=c\cdot g + d\cdot h.

    $${% endraw %}

    In total, 8 multiplications and 4 adds.

    {% raw %}$$

    \begin{align}
    T(n) & = 8T(n/2) + \Theta(n^2) \\
    & = 8\bigl(8T(n/{2^2}\bigr) + \Theta\bigl((n/2)^2)\bigr) + \Theta(n^2) \\ 
    & = 8^2T(n/{2^2}) + \Theta\bigl((n/2)^2\bigr) + \Theta(n^2) \\
    & = TODO
    \end{align}

    $${% endraw %}

* Stassen's method
    
    {% raw %}$$

    \begin{align}
    P_1 &= a \cdot (g-h)\\
    P_2 &= (a+b) \cdot h\\
    P_3 &= (c+d) \cdot e\\
    P_4 &= d \cdot (f-e)\\
    P_5 &= (a+d)\cdot (e+h)\\
    P_6 &= (b-d) \cdot (f+h)\\
    P_7 &= (a-e) \cdot (e+g)\\
    &\\
    r&=P_5+P_4-P_2+P_6\\
    s&=P_1+P_2\\
    t&=P_3+P_4\\
    u&=P_5+P_1-P_3-P_7
    \end{align}

    

    $${% endraw %}

    In total, 7 multiplications, and 18 adds.

    {% raw %}$$

    \begin{align}
    T(n) & = 7T(n/2) + \Theta(n^2) \\
    & = \Theta(n^{\log_2{7}}) \\ 
    & = \Theta(n^{2.81})
    \end{align}

    $${% endraw %}

* Lower bound: Running time {% raw %}$$T(n)=\Omega (n^2)$${% endraw %}

### 4.3 The substitution method for solving recurrences

1. Guess the form of the solution
2. Use mathematical induction to find the constants and show that the solution works.

* e.g.: {% raw %}$$T(n)=2T(\lfloor n/2\rfloor)+n$${% endraw %}

    1. Guess: {% raw %}$$T(n)\in O(n \log n)$${% endraw %}
    2. Prove:
        Assume {% raw %}$$T(\lfloor{k}\rfloor)\leq c\lfloor{k}\rfloor\log{\lfloor{k}\rfloor}, k< n\text{, that is, }T(\lfloor{n/2}\rfloor)\leq c\lfloor{n/2}\rfloor\log{\lfloor{n/2}\rfloor}$${% endraw %}

        {% raw %}$$
        \begin{align*}
        T(n) & = 2T(n/2) + n \\
        & \leq 2(c\lfloor{n/2}\rfloor\log{\lfloor{n/2}\rfloor})+n \\ 
        & \leq cn\log{\lfloor{n/2}\rfloor}+n \\
        & = cn \log{n} -cn\log{2}+2\\
        & = cn \log n - cn+n \\
        & \leq cn \log n \text{ for } c\geq 1
        \end{align*}

        $${% endraw %}

* Avoiding pitfalls

    Make {% raw %}$$n_0$${% endraw %} big enough to avoid boundary problem.

### 4.4 The recursion-tree method for solving recurrences


![The recursion-tree method for solving recurrences]({{ site.baseurl }}/assets/COMP 465/recursion-tree.png "The recursion-tree method for solving recurrences")

### 4.5 The master method for solving recurrences

![Master Theorem]({{ site.baseurl }}/assets/COMP 465/Master-Theorem.png "Master Theorem")

Let 

{% raw %}$$ T(n) = aT(n/b) + f(n) $${% endraw %}

where {% raw %}$$a \geq 1, b > 1 $${% endraw %}.

1. If {% raw %}$$ f(n)/{n^{\log_b{a}}}\in O(n^{-\epsilon})$${% endraw %} for some constant {% raw %}$$ \epsilon>0$${% endraw %}, then {% raw %}$$T(n)=\Theta(n^{\log_b{a}}) $${% endraw %}.
2. If {% raw %}$$ f(n)/{n^{\log_b{a}}}\in \Theta({\log^k{n}})$${% endraw %} for some constant {% raw %}$$ k\geq 0$${% endraw %}, then {% raw %}$$T(n)=\Theta(n^{\log_b{a}} {\log^{k+1}{n}}) $${% endraw %}.
3. If {% raw %}$$ f(n)/{n^{\log_b{a}}}\in \Omega(n^{\epsilon})$${% endraw %} for some constant {% raw %}$$\epsilon>0 $${% endraw %}, and if {% raw %}$$f(n/b)\leq cf(n)$${% endraw %} for some constant {% raw %}$$c>0$${% endraw %}, then {% raw %}$$T(n)=\Theta\bigl(f(n)\bigr) $${% endraw %}.
4. Some are not in these cases, see example 4.

* e.g.:
    1. Master theorem case 1: {% raw %}$$ T(n) = 2T(n/2) + 1 $${% endraw %}

        {% raw %}$$
        a=2, b=2, f(n)=1,n^{\log_b{a}}=n^{\log_2{2}}=n\\
        f(n)/{n^{\log_b{a}}}=1/n=n^{-1}\in O(n^{-1}), \epsilon=1\\
        \Rightarrow T(n)=\Theta(n^{\log_b{a}})=\Theta(n^1)=\Theta(n)
        $${% endraw %}

    2. Master theorem case 2: {% raw %}$$ T(n) = 2T(n/2) + n\log{n} $${% endraw %}

        {% raw %}$$
        a=2, b=2, f(n)=n\log{n},n^{\log_b{a}}=n^{\log_2{2}}=n\\
        f(n)/{n^{\log_b{a}}}={n\log{n}}/n=\log{n}\in \Theta({\log^1{n}}), k=1\\
        \Rightarrow T(n)=T(n)=\Theta(n^{\log_b{a}} {\log^{k+1}{n}})=\Theta(n {\log^{2}{n}})
        $${% endraw %}

    3. Master theorem case 3 (case 1): Strassen {% raw %}$$ T(n) = 7T(n/2) + \Theta(n^2) $${% endraw %}

        {% raw %}$$
        a=7, b=2, f(n)=\Theta(n^2),n^{\log_b{a}}=n^{\log_2{7}}=n^{2.81}\\        
        f(n)/{n^{\log_b{a}}}={\Theta(n^2)}/{n^2.81}=n^{k}, k>0\\
        f(n/b)=f(n/2)=\\
        \Rightarrow T(n)=\Theta(n^{\log_b{a}})=\Theta(n^{\log_2{7}}) (why?)
        $${% endraw %}

    4. Not in these cases: {% raw %}$$ T(n) = 4T(n/2) + n^2/{\log n} $${% endraw %}

        {% raw %}$$
        a=4, b=2, f(n)=n^2/{\log n},n^{\log_b{a}}=n^{\log_2{4}}=n^2\\
        f(n)/{n^{\log_b{a}}}=(n^2/{\log n})/{n^2}=1/\log{n}\\
        \Rightarrow T(n)=???
        $${% endraw %}

---

## Quiz 1

1. (a)F, (b)F, (c)F, (d)F
    (d): {% raw %}$$ f(n)=2n, g(n)=n; 2^{f(n)}=4^n \notin 2^n = 2^{g(n)} $${% endraw %}

3. Direct proof

    Every internal node has *3* children, in total {% raw %}$$ 3n_i $${% endraw %} children.

    Every internal node is a child except the root, in total {% raw %}$$ 3n_i + 1$${% endraw %} nodes.

    {% raw %}$$ 
    3n_i + 1=n_i+n_e \\
    \Rightarrow n_e = 2n_i + 1
    $${% endraw %}

---

## 7 Quicksort

### 7.1 Description of quicksort

**Divide**: Partition (rearrange) the array *A[p .. r]* into two (possibly empty) subarrays
*A[p .. q-1]* and *A[q+1 .. r]* such that each element of *A[p .. q-1]* is less than or equal to *A[q]*, which is, in turn, less than or equal to each element of *A[q+1 .. r]*. Compute the index *q* as part of this partitioning procedure.

**Conquer**: Sort the two subarrays *A[p .. q-1]* and *A[q+1 .. r]* by recursive calls to quicksort.

**Combine**: Because the subarrays are already sorted, no work is needed to combine them: the entire array *A[p .. r]* is now sorted.

### 7.2 Performance of quicksort

* Worst-case partitioning: {% raw %}$$ T(n)=\Theta(n^2) $${% endraw %}
* Best-case partitioning: {% raw %}$$ T(n)=\Theta(n\log n) $${% endraw %}
* Balanced partitioning: {% raw %}$$ T(n)=\Theta(n\log n) $${% endraw %}

![Balanced partitioning]({{ site.baseurl }}/assets/COMP 465/Balanced partitioning.png "Balanced partitioning")

### 7.3 A randomized version of quicksort

### 7.4 Analysis of quicksort

---

## 9 Medians and Order Statistics

### 9.1 Minimum and maximum

### 9.2 Selection in expected linear time

### 9.3 Selection in worst-case linear time

---

## 15 Dynamic Programming

### 15.1 Rod cutting

### 15.2 Matrix-chain multiplication

### 15.3 Elements of dynamic programming

### 15.4 Longest common subsequence

### 15.5 Optimal binary search trees

---

## 16 Greedy Algorithms
For many optimization problems, using dynamic programming to determine the best choices is overkill; simpler, more efficient algorithms will do. A greedy algorithm always makes the choice that looks best at the moment. That is, it makes a locally optimal choice in the hope that this choice will lead to a globally optimal solution.

### 16.1 Anactivity-selection problem
{% raw %}
Suppose we have a set $S={a_1,a_2, \dots, a_n}$ of $n$ proposed **activities** that wish to use a resource, such as a lecture hall, which can serve only one activity at a time. Each activity $a_i$ has a start time $s_i $ and a finish time $f_i$. Activities $a_i$ and $a_j$ are compatible if the intervals do not overlap. In the activity-selection problem, we wish to select a **maximum-size** subset of mutually compatible activities. We assume that the activities are sorted in monotonically increasing order of finish time: $f_1\leq f_2 \leq f_3 \leq \dots \leq f_{n-1} \leq f_n$.
{% endraw %}

* Optimal substructure property
    {% raw %}
    Given an optimal solution $A\subseteq S$, remove an activity $k$ with earliest finish time $f_k$, then $A-\\{k\\}$ is an optimal solution to $S-\\{i:s_i < f_k\\}, 1\leq i\leq n$.
    {% endraw %}

    * Prove by contradiction
        {% raw %}
        Assume $A-\\{k\\}$ is not an optimal solution to the sub-problem $S-\\{i:s_i < f_k\\}, 1\leq i\leq n$, but $B$ is an optimal solution to this sub-problem.\\
        So $|B|>|A-\\{k\\}|=|A|-1$.\\
        Consider a subset $A'\subseteq S$ such that $A'=B\cup \\{k\\}$, then $|A'|=|B|+1>|A|-1+1=|A|$.\\
        So $A'$ is a solution to $S$ with more activities than $A$, this leads to a contradiction that $A$ is an optimal solution. 
        {% endraw %} 
* Greedy Choice

    The activity with earliest finish time is in an optimal solution.

    * Proof
        {% raw %}
        Without loss of generality, assume the activity with the earliest finish time is $1$.\\
        Consider any optimal solution to $S$ is $A=\\{i_i, i_2,\dots, i_p\\}, i_j =1,2,\dots, n$.\\
        It's clear that $f_{i_j} \geq f_1$, for all $j=1,2,\dots,p$.\\
        If replace $i_1$ with the activity $1$, that is $A'= \\{1, i_2, \dots, i_p\\}$. It is also an optimal solution because these activities are compatible and $|A'|=p=|A|$.
        {% endraw %}
* Solution

    1. Apply GC: remove the activity with the earliest finish time.
    2. Apply OS: new subset.
    3. Recursivly apply GC and OS.

### 16.2 Elements of greedy strategy

### 16.3 Huffman codes

---

## 17 Amortized Analysis

### 17.1 Aggregate analysis

### 17.2 The accounting method

### 17.3 The potential method

---

## 22 Elementary Graph Algorithms

### 22.1 Representations of graphs
### 22.2 Breadth-first search
### 22.3 Depth-first search
### 22.4 Topological sort
### 22.5 Strongly connected components

---

## 23 Minimum Spanning Trees
### 23.1 Growing a minimum spanning tree
### 23.2 The algorithms of Kruskal and Prim

---

## 24 Single-Source Shortest Paths

### 24.1 The Bellman-Ford algorithm
### 24.2 Single-source shortest paths in directed acyclic graphs
### 24.3 Dijkstra's algorithm
### 24.4 Difference constraints and shortest paths
### 24.5 Proofs of shortest-paths properties

---

## 25 All-Pairs Shortest Paths

### 25.2 The Floyed-Warshall algorithm

---

## 26 Maximum Flow

### 26.1 Flow networks
### 26.2 The Ford-Fulkerson method
### 26.3 Maximum bipartite matching

---

## 29 Linear Programming

### 29.1 Standard and slack forms
### 29.2 Formulating problems as linear programs
### 29.3 The simplex algorithm
### 29.4 Duality
### 29.5 The initial basic feasible solution

---

## 32 String Matching

### 32.1 The naive string-matching algorithm
### 32.2 The Rabin-Karp algorithm

---

## 34 NP-Completeness

### 34.1 Polynomial time
### 34.2 Polynoimal-time verification
### 34.3 NP-completeness and reducibility
### 34.5 NP-complete problems
---

## 35 Approximation Algorithms

### 35.1 The vertex-cover problem
### 35.2 The travling-salesman problem
### 35.3 The set-covering problem
### 35.5 The subset-sum problem