---
title: "Shell and Database"
description: "A terminal-based shell using C supporting piping, redirection, signal handling, background and foreground process management. Also some database impementation like SQL engine and B Treess"
pubDate: 2023-01-01
author: "Mayank Musaddi"
image:
  url: "/assets/projects/9.jpg"
  alt: "Shell and Database"
---

# Shell Implementation
A shell similar to UNIX implemented using C Program with the use of only system calls. It has some C implemented functions of the UNIX shell like ls, echo, pwd etc. and manages to execute other functions on the shell as well.

## Features
  - Completely modular and easy to modify
  - Has support for multiple command execution separated by ;
  - Supports processes to be executed in the background if '&' argument is added.
  - Error Handling is done in case of exceptions.
  - Some additional commands like pinfo has been implemented.

<p>[View Code](https://github.com/mayankmusaddi/C-Shell)</p>

# Database Implementations

## Mini SQL Engine
SQL or the Structured Query Language is an essential domain-specific language designed for managing data in a relational database management system. It serves as an Interface between the Functional API and the Database and so it becomes of utmost importance to understand how it may have been constructed. To provide an insight into this, an attempt of making a simple or a mini version of SQL using python has been showcased here.
A Mini SQL Engine which runs a subset of queries using Command Line Interface.
<p>[View Code](https://github.com/mayankmusaddi/mini-sql-engine)</p>

## Two Phase Merge Sort
An implementation of the two phase merge sort algorithm which is required for sorting of high number of records in a small memory space. This is done in two phase by sorting sublists and writing them to the disks. Finally merging the sorted sublists present in the disk while making sure that the memory contraints are maintained.
<p>[View Code](https://github.com/mayankmusaddi/two-phase-merge-sort)</p>

## Database Joins
A simple python implementation of Sort-Merge Join and Hash Join for two large relations R(X, Y) and S(Y, X) with M memory blocks. These joins are used for Natural or EquiJoin implementation and would work as a two-pass implementation when memory blocks are insufficient.
<p>[View Code](https://github.com/mayankmusaddi/database-joins)</p>

## B Trees
A B+ tree is an m-ary tree with a variable but often large number of children per node. A B+ tree consists of a root, internal nodes and leaves.The root may be either a leaf or a node with two or more children.

A B+ tree can be viewed as a B-tree in which each node contains only keys (not key–value pairs), and to which an additional level is added at the bottom with linked leaves.

The primary value of a B+ tree is in storing data for efficient retrieval in a block-oriented storage context — in particular, filesystems. This is primarily because unlike binary search trees, B+ trees have very high fanout (number of pointers to child nodes in a node, typically on the order of 100 or more), which reduces the number of I/O operations required to find an element in the tree.

<p>[View Code](https://github.com/mayankmusaddi/B-trees)</p>
