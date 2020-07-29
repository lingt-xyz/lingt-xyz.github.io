---
---

Terminology Dictionary

<!--more-->

## A

### ACFG
* Attributed control flow graph

### AUC
* Area under curve

---

## B

### Bayesian network
* A [Bayesian network](https://en.wikipedia.org/wiki/Bayesian_network), Bayes network, belief network, decision network, Bayes(ian) model or probabilistic directed acyclic graphical model is a probabilistic graphical model (a type of statistical model) that represents a set of variables and their conditional dependencies via a directed acyclic graph (DAG). Bayesian networks are ideal for taking an event that occurred and predicting the likelihood that any one of several possible known causes was the contributing factor. For example, a Bayesian network could represent the probabilistic relationships between diseases and symptoms. Given symptoms, the network can be used to compute the probabilities of the presence of various diseases.

### BHB algorithm
* Best-Hit-Broadening

---

## C

### CFG
* [CFG](https://en.wikipedia.org/wiki/Control-flow_graph): a control-flow graph (CFG) is a representation, using graph notation, of all paths that might be traversed through a program during its execution. In a control-flow graph each node in the graph represents a basic block, i.e. a straight-line piece of code without any jumps or jump targets; jump targets start a block, and jumps end a block. Directed edges are used to represent jumps in the control flow. There are, in most presentations, two specially designated blocks: the entry block, through which control enters into the flow graph, and the exit block, through which all control flow leaves.

### Chi-Square Test
* The [chi-squared test](https://en.wikipedia.org/wiki/Chi-squared_test) is used to determine whether there is a significant difference between the expected frequencies and the observed frequencies in one or more categories.

### CNN
* In deep learning, a convolutional neural network ([CNN](https://en.wikipedia.org/wiki/Convolutional_neural_network), or ConvNet) is a class of deep neural networks, most commonly applied to analyzing visual imagery.

### Conditional independence
* In probability theory, two random events $A$ and $B$ are conditionally independent given $C$ if and only if, given knowledge that $C$ occurs, knowledge of whether $A$ occurs provides no information on the likelihood of $B$ occurring, and knowledge of whether $B$ occurs provides no information on the likelihood of $A$ occurring.

### CRS
* Cyber reasoning system

### CVE
* [CVE](https://cve.mitre.org/)® is a list of entries—each containing an identification number, a 
description, and at least one public reference—for publicly known cybersecurity vulnerabilities.

----

## D

### DARPA
* Defense Advanced Research Project Agency

### Def-use chain

### DNN
* Deep Neural Network

----

## E

### EFG
* Execution flow graphs

### Electrical grid
* An [electrical grid](https://en.wikipedia.org/wiki/Electrical_grid), electric grid or power grid, is an interconnected network for delivering electricity from producers to consumers. It consists of
    1. Generating stations that produce electrical power
    2. electrical substations for stepping electrical voltage up for transmission, or down for distribution
    3. High voltage transmission lines that carry power from distant sources to demand centers
    4. Distribution lines that connect individual customers.

----

## F

### FOSS
* Free and open-source software

### Fuzzing
* [Fuzzing](https://en.wikipedia.org/wiki/Fuzzing) or fuzz testing is an automated software testing technique that involves providing invalid, unexpected, or random data as inputs to a computer program. The program is then monitored for exceptions such as crashes, failing built-in code assertions, or potential memory leaks.

### Fuzzy matching
* [Fuzzy matching](https://en.wikipedia.org/wiki/Fuzzy_matching_(computer-assisted_translation)) is a technique used in computer-assisted translation as a special case of record linkage. It works with matches that may be less than 100% perfect when finding correspondences between segments of a text and entries in a database of previous translations.

----

## G

### Graph edit distance
* In mathematics and computer science, [graph edit distance](https://en.wikipedia.org/wiki/Graph_edit_distance) (GED) is a measure of similarity (or dissimilarity) between two graphs.

### Graph energy

----

## H

### Hidden Markov Model
* [Hidden Markov Model](https://en.wikipedia.org/wiki/Hidden_Markov_model) (HMM) is a statistical Markov model in which the system being modeled is assumed to be a Markov process with unobservable (i.e. hidden) states. In simpler Markov models (like a Markov chain), the state is directly visible to the observer, and therefore the state transition probabilities are the only parameters, while in the hidden Markov model, the state is not directly visible, but the output (in the form of data or "token" in the following), dependent on the state, is visible. Each state has a probability distribution over the possible output tokens. Therefore, the sequence of tokens generated by an HMM gives some information about the sequence of states.
* The adjective *hidden* refers to the state sequence through which the model passes, not to the parameters of the model; the model is still referred to as a hidden Markov model even if these parameters are known exactly.

### Histogram
* A [histogram](https://en.wikipedia.org/wiki/Histogram) is an accurate representation of the distribution of numerical data. It is an estimate of the probability distribution of a continuous variable and was first introduced by Karl Pearson. It differs from a bar graph, in the sense that a bar graph relates two variables, but a histogram relates only one. 

### Hungarian algorithm
* The [Hungarian method](https://en.wikipedia.org/wiki/Hungarian_algorithm) is a combinatorial optimization algorithm that solves the assignment problem in polynomial time and which anticipated later primal-dual methods.
* Example: there are three workers: Paul, Dave, and Chris. One of them has to clean the bathroom, another sweep the floors and the third washes the windows, but they each demand different pay for the various tasks. The problem is to find the lowest-cost way to assign the jobs.

----

## I

### ICS
* Industrial control systems

### IDA
* [IDA](https://www.hex-rays.com/products/ida/) is a Windows, Linux or Mac OS X hosted multi-processor disassembler and debugger that offers so many features it is hard to describe them all.

### Inline Functions
* When the program executes the function call instruction the CPU stores the memory address of the instruction following the function call, copies the arguments of the function on the stack and finally transfers control to the specified function. The CPU then executes the function code, stores the function return value in a predefined memory location/register and returns control to the calling function. This can become overhead if the execution time of function is less than the switching time from the caller function to called function (callee). For functions that are large and/or perform complex tasks, the overhead of the function call is usually insignificant compared to the amount of time the function takes to run. However, for small, commonly-used functions, the time needed to make the function call is often a lot more than the time needed to actually execute the function’s code. This overhead occurs for small functions because execution time of small function is less than the switching time.
* [Inline functions](https://www.geeksforgeeks.org/inline-functions-cpp/) provide following advantages:
    1. Function call overhead doesn’t occur.
    2. It also saves the overhead of push/pop variables on the stack when function is called.
    3. It also saves overhead of a return call from a function.
    4. When you inline a function, you may enable compiler to perform context specific optimization on the body of function. Such optimizations are not possible for normal function calls. Other optimizations can be obtained by considering the flows of calling context and the called context.
    5. Inline function may be useful (if it is small) for embedded systems because inline can yield less code than the function call preamble and return.
* Inline function disadvantages:
    1. The added variables from the inlined function consumes additional registers, After in-lining function if variables number which are going to use register increases than they may create overhead on register variable resource utilization. This means that when inline function body is substituted at the point of function call, total number of variables used by the function also gets inserted. So the number of register going to be used for the variables will also get increased. So if after function inlining variable numbers increase drastically then it would surely cause an overhead on register utilization.
    2. If you use too many inline functions then the size of the binary executable file will be large, because of the duplication of same code.
    3. Too much inlining can also reduce your instruction cache hit rate, thus reducing the speed of instruction fetch from that of cache memory to that of primary memory.
    4. Inline function may increase compile time overhead if someone changes the code inside the inline function then all the calling location has to be recompiled because compiler would require to replace all the code once again to reflect the changes, otherwise it will continue with old functionality.
    5. Inline functions may not be useful for many embedded systems. Because in embedded systems code size is more important than speed.
    6. Inline functions might cause thrashing because inlining might increase size of the binary executable file. Thrashing in memory causes performance of computer to degrade.

### IoT
* Internet of things

### IVL
* Intermediate verification language

----

## J

### Jaccard index
* The Jaccard coefficient measures similarity between finite sample sets, and is defined as the size of the intersection divided by the size of the union of the sample sets.
* The Jaccard distance measures dissimilarity between sample sets, is complementary to the Jaccard coefficient and is obtained by subtracting the Jaccard coefficient from $1$, or, equivalently, by dividing the difference of the sizes of the union and the intersection of two sets by the size of the union.
* [Jaccard index](https://en.wikipedia.org/wiki/Jaccard_index)

----

## K

### $k$-means clustering
* [$k$-means clustering](https://en.wikipedia.org/wiki/K-means_clustering) is a method of vector quantization, originally from signal processing, that is popular for cluster analysis in data mining. $k$-means clustering aims to partition $n$ observations into $k$ clusters in which each observation belongs to the cluster with the nearest mean, serving as a prototype of the cluster. This results in a partitioning of the data space into Voronoi cells.

### KNN algorithm
* $k$-nearest neighbors algorithm

----

## L

### LCS
* Longest common subsequences

### LES
* Local Evidence of Similarity

### LSH
* [Locality sensitive hashing](https://en.wikipedia.org/wiki/Locality-sensitive_hashing): In computer science, locality-sensitive hashing (LSH) is an algorithmic technique that hashes similar input items into the same "buckets" with high probability. (The number of buckets are much smaller than the universe of possible input items.) Since similar items end up in the same buckets, this technique can be used for data clustering and nearest neighbor search. It differs from conventional hashing techniques in that hash collisions are maximized, not minimized. Alternatively, the technique can be seen as a way to reduce the dimensionality of high-dimensional data; high-dimensional input items can be reduced to low-dimensional versions while preserving relative distances between items.

----

## M

### MapReduce
* [MapReduce](https://en.wikipedia.org/wiki/MapReduce) is a programming model and an associated implementation for processing and generating big data sets with a parallel, distributed algorithm on a cluster.

### Markov model

### MCS
* Maximum common subgraph

### MinHash

### MIRAI
* [MIRAI](https://en.wikipedia.org/wiki/Mirai_(malware)) is a malware that turns networked devices running Linux into remotely controlled "bots" that can be used as part of a botnet in large-scale network attacks. It primarily targets online consumer devices such as IP cameras and home routers.

### mnemonic
* Generally, a [mnemonic](https://en.wikipedia.org/wiki/Assembly_language#Opcode_mnemonics_and_extended_mnemonics) is a symbolic name for a single executable machine language instruction (an opcode), and there is at least one opcode mnemonic defined for each machine language instruction.

----

## N

----

## O

### Obfuscation
* In software development, [obfuscation](https://en.wikipedia.org/wiki/Obfuscation_(software)) is the deliberate act of creating source or machine code that is difficult for humans to understand.

### opcode
* An [opcode](https://en.wikipedia.org/wiki/Opcode) (abbreviated from operation code, also known as instruction syllable, instruction parcel or opstring) is the portion of a machine language instruction that specifies the operation to be performed. Beside the opcode itself, most instructions also specify the data they will process, in the form of operands.

----

## P

### PDG
* Program dependence graph

### PMU
* Phasor measurement unit

### Precision and recall
* In pattern recognition, information retrieval and binary classification, precision (also called positive predictive value) is the fraction of relevant instances among the retrieved instances, while recall (also known as sensitivity) is the fraction of relevant instances that have been retrieved over the total amount of relevant instances. Both precision and recall are therefore based on an understanding and measure of relevance.

----

## Q

----

## R

### REAPER
* [REAPER](https://success.trendmicro.com/solution/1118928-new-rapidly-growing-iot-botnet-reaper) is an IoT botnet malware targets on the IoT devices. Unlike MIRAI, REAPER majorly employs exploits which target on disclosed vulnerabilities in IoT devices, currently many popular router brands as well as IP cameras, Network Attached Storage devices are affected.

### RNN
* A recurrent neural network ([RNN](https://en.wikipedia.org/wiki/Recurrent_neural_network)) is a class of artificial neural networks where connections between nodes form a directed graph along a temporal sequence. This allows it to exhibit temporal dynamic behavior. Unlike feedforward neural networks, RNNs can use their internal state (memory) to process sequences of inputs. This makes them applicable to tasks such as unsegmented, connected handwriting recognition or speech recognition.

### RFG
* Register flow graph

----

## S
### S-Expression

### SCADA
* Supervisory control and data acquisition ([SCADA](https://inductiveautomation.com/resources/article/what-is-scada)) is a system of software and hardware elements that allows industrial organizations to: Control industrial processes locally or at remote locations. Monitor, gather, and process real-time data.

### Siamese network
* [Siamese network](https://en.wikipedia.org/wiki/Siamese_network) is an artificial neural network that use the same weights while working in tandem on two different input vectors to compute comparable output vectors. Often one of the output vectors is precomputed, thus forming a baseline against which the other output vector is compared. This is similar to comparing fingerprints or more technical as a distance function for Locality-sensitive hashing.

### SIG
* Semantic integrated graphs

### Smart grid
* A [Smart grid](https://en.wikipedia.org/wiki/Smart_grid) is an electrical grid which includes a variety of operation and energy measures including smart meters, smart appliances, renewable energy resources, and energy efficient resources. Electronic power conditioning and control of the production and distribution of electricity are important aspects of the smart grid.

### Softmax function
* In mathematics, the [softmax function](https://en.wikipedia.org/wiki/Softmax_function), also known as softargmax or normalized exponential function, is a function that takes as input a vector of $K$ real numbers, and normalizes it into a probability distribution consisting of $K$ probabilities. That is, prior to applying softmax, some vector components could be negative, or greater than one; and might not sum to $1$; but after applying softmax, each component will be in the interval $(0,1)$, and the components will add up to $1$, so that they can be interpreted as probabilities. Furthermore, the larger input components will correspond to larger probabilities. Softmax is often used in neural networks, to map the non-normalized output of a network to a probability distribution over predicted output classes.

### Stripped binary
* In Unix and Unix-like operating systems, the `strip` program removes inessential information from executable binary programs and object files, thus potentially resulting in better performance and sometimes significantly less disk space usage ('inessential information' means information that is not required for correct functioning of the binary in normal execution). This information may consist of debugging and symbol information; however the standard leaves the scope of changes up to the implementer.

----

## T

### TED
* Tree edit distance

----

## U

### UAF
* Use-after-free

----

## V

----

## W

----

## X

----

## Y

----

## Z

### Z3
* [Z3](https://en.wikipedia.org/wiki/Satisfiability_modulo_theories) is the satisfiability modulo theories (SMT) solver