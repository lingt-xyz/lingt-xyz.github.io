---
title: Word2Vec
---

An Intuitive Understanding of Word Embeddings: From Count Vectors to Word2Vec

<!--more-->

## What are Word Embeddings?

A Word Embedding format generally tries to map a word using a dictionary to a vector.

- A dictionary may be the list of all unique words in the sentence.
- A vector representation of a word may be a one-hot encoded vector where 1 stands for the position where the word exists and 0 everywhere else.

---

## Different types of Word Embeddings

### Frequency based Embedding

#### Count Vectors

#### TF-IDF

> term frequency–inverse document frequency

$\text{IDF} = \log (N/n)$, where, $N$ is the number of documents and $n$ is the number of documents a term $t$ has appeared in.

It takes into account not just the occurrence of a word in a single document but in the entire corpus.
If a word has appeared in all the document, then probably that word is not relevant to a particular document. But if it has appeared in a subset of documents then probably the word is of some relevance to the documents it is present in.

#### Co-Occurrence Matrix

Similar words tend to occur together and will have similar context for example – Apple is a fruit. Mango is a fruit.
Apple and mango tend to have a similar context i.e fruit.

###  Prediction based Embedding
#### CBOW
#### Skip-Gram

---

## Word Embeddings use case scenarios(what all can be done using word embeddings? eg: similarity, odd one out etc.)

---

## Using pre-trained Word Vectors

---

## Training your own Word Vectors

---

## End Notes


---

## References
* [An Intuitive Understanding of Word Embeddings: From Count Vectors to Word2Vec](https://www.analyticsvidhya.com/blog/2017/06/word-embeddings-count-word2veec/)
* [Google Code: word2vec](https://code.google.com/archive/p/word2vec/)