---
layout: post
title: Notes for Papers Reading
mathjax: false
comments: false
share: false
tags: [binary, similarity, detection]
---

From Gemini

<!--more-->
## Problem
Binary Code Search
1. Given a binary function of interest (the query function).
2. Quickly and accurately identify a list of candiates in a large corpus of binary functions (the target corpus) that are semantically equivalent or similar to the function of interest.

## Applications
* Bug search
* Malware analysis
* Plagiarism detection
* Authorship

## Goals
* Binary only
* Corss-platform support
* High precision
* High efficiency
* Adaptive? new input?

## Existing Techniques
* Pairwise Graph Matching
* Graph Embedding?

## General approach ?
1. Normalization
2. Feature Selection