---
---

Basic Rules of Cassandra Data Modeling

Picking the right data model is the hardest part of using Cassandra. If you have a relational background, CQL will look familiar, but the way you use it can be very different. The goal of this post is to explain the basic rules you should keep in mind when designing your schema for Cassandra. If you follow these rules, you'll get pretty good performance out of the box. Better yet, your performance should scale linearly as you add nodes to the cluster.

<!--more-->

## Non-Goals

### Minimize The Number Of Writes

### Minimize Data Duplication

---

## Basic Goals

### Spread data evenly around the cluster

### Minimize the number of partitions read

---

## Keys

### Primary key

### Partition key

### Clustering key

## References

- [Docker Offical Images: cassandra](https://hub.docker.com/_/cassandra)
- [Basic Rules of Cassandra Data Modeling](https://www.datastax.com/blog/2015/02/basic-rules-cassandra-data-modeling)