---
title: Install Java 8 on Debian 10
---

Cassandra 3.11 does not work on Java 11, but Debian 10 has OpenJdk 11 installed as default.

<!--more-->
## Problem
When following the instructions of the [Cassandra installation](http://cassandra.apache.org/download/), `nodetool status` outputs the exception:

```
error: null
-- StackTrace --
java.lang.NullPointerException at org.apache.cassandra.config.DatabaseDescriptor.getDiskFailurePolicy(DatabaseDescriptor.java:1881)
    at org.apache.cassandra.utils.JVMStabilityInspector.inspectThrowable(JVMStabilityInspector.java:82)
    at org.apache.cassandra.io.util.FileUtils.<clinit>(FileUtils.java:79)
    at org.apache.cassandra.utils.FBUtilities.getToolsOutputDirectory(FBUtilities.java:788)
    at org.apache.cassandra.tools.NodeTool.printHistory(NodeTool.java:200)
    at org.apache.cassandra.tools.NodeTool.main(NodeTool.java:168)
```

---

## Reason
Cassandra 3.11 does not support Java 11. Java 11 support is implemented in Cassandra 4.

---

## Solution
Install Java 8 alongside Java 11 since Cassandra 4 has not been released yet. Then config `nodetool` to use Java 8.

### Install Java 8

1. Add a `contrib` component to `/etc/apt/sources.list`, for example:
    ```
    # Debian 8 "Jessie"
    deb http://httpredir.debian.org/debian/ jessie main contrib
    ```

2. Update the list of available packages and install the java-package package:
    ```
    # apt-get update && apt-get install java-package && exit
    ```

3. Download the desired Java JDK/JRE binary distribution from [Oracle](https://www.oracle.com/technetwork/java/javase/downloads/index.html).

4. Use java-package to create a Debian package, for example:
    ```
    $ make-jpkg jdk-8u51-linux-x64.tar.gz
    ```

5. Install the binary package created:
    ```
    $ su
    # dpkg -i oracle-java8-jdk_8u51_amd64.deb
    ```

### Config `nodetool`
1. Locate the file `/usr/bin/nodetool`.
2. Run `sudo vi nodetool`.
3. Add `JAVA_HOME="/usr/lib/jvm/oracle-java8-server-jre-amd64"` at the very beginning of the file.

### Done
`nodetool status` should work now.

---

## Configuration on system level
To use a specific version of Java

```
# update-alternatives --display java
# update-alternatives --config java 
```

---

## References
1. [Debian JavaPackage](https://wiki.debian.org/JavaPackage)
2. [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-debian-10)