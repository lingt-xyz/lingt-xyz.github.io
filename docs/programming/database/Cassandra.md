---
title: Cassandra
---

An example to play with Cassandra on Docker

<!--more-->

## Prerequisites

- Have a docker account

- Docker installed

---

## Get the Image

1. Docker login: `$ docker login`
2. Pull cassandra image: `$ docker pull cassandra:3.11.4`

---

## Start cassandra

### One instance

- `$ docker run -p 9042:9042 --name cassandra-node1 -e CASSANDRA_CLUSTER_NAME=VEXCluster -d cassandra:3.11.4`
    - `-p 9042:9042`: public the port `9042` to the host `9042`
    - `--name cassandra-node1`: name the container
    - `-e CASSANDRA_CLUSTER_NAME=VEXCluster`: set the variable `CASSANDRA_CLUSTER_NAME` to be `VEXCluster`
    - `-d`: run the container in background (detach)

### Cluster

Start the instance as described above. To start other instances, just tell each new node where the first is.

- `$ docker run --name cassandra-node2 -e CASSANDRA_SEEDS="$(docker inspect --format='{{ .NetworkSettings.IPAddress }}' cassandra-node1)" -e CASSANDRA_CLUSTER_NAME=VEXCluster -d cassandra:3.11.4`

---

## Connection

### Bash

Execute the bash in the docker in an interactive way:

`$ docker exec -it cassandra-example bash`

### cqlsh

Run `cqlsh` in the docker:

`$ docker run -it [--network name-of-a-network] --rm cassandra:3.11.4 cqlsh cassandra-example`

### From the host

If we want to directly connect to the cassandra in the docerk, we have to expose the port to the host.

`$ docker run -p 9042:9042 --rm --name cassandra-example -d cassandra:3.11.4`

Then we can use `cqlsh` locally.

### Update cofig

`$ docker run -p 9042:9042 --rm --name cassandra-example -d cassandra:3.11.4 -Dcassandra.config=file:////docker/apth/cassandra.yaml`

---

## cqlsh

- cqlsh version: `$ show version`

### Keyspace
- `DESC[RIBE] KEYSPACES;`
- `USE $KEYSPACE_NAME;`
- `DESC[RIBE] KEYSPACE;`
- `DESC[RIBE] $KEYSPACE_NAME;`

### Table
- `DESC[RIBE] TABLES;`
- `DESC[RIBE] $TABLE_NAME;`

---

## Data Migration

```bash
# Get cassandra container
$ docker ps | grep cassandra

docker exec -it ${cassandra_container} cqlsh

cqlsh> show version;
[cqlsh 5.0.1 | Cassandra 3.11.1 | CQL spec 3.4.4 | Native protocol v4]

cqlsh> USE $KEYSPACE_NAME;

```
### Export

```bash
COPY $TABLE_NAME TO '$CSV_FILE_FULL_PATH'
```

### Import

```bash
COPY $TABLE_NAME FROM '$CSV_FILE_FULL_PATH'
```

---


## Debug

### Log

Check logs through docker:

`$ docker logs cassandra-example`

### Python driver

- Install the driver: `pip install cassandra-driver`

---

## References

- [Docker Offical Images: cassandra](https://hub.docker.com/_/cassandra)
- [Five Minute Guide: Getting Started with Cassandra on Docker](https://medium.com/@michaeljpr/five-minute-guide-getting-started-with-cassandra-on-docker-4ef69c710d84)