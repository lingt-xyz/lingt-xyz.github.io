---
---

Some basics about containerization.

<!--more-->

## What is container

Containers decouple software applications from the operating system, giving users a clean and minimal Linux environment while running everything else in one or more isolated "containers". The purpose of a container is to launch a limited set of applications or services (often referred to as microservices) and have them run within a self-contained sandboxed environment.

---

## Why it works

### cgroups

* [cgroups](http://man7.org/linux/man-pages/man7/cgroups.7.html) - Linux control groups, are a Linux kernel feature which allow processes to be organized into hiberachical groups whose usage of various types of resources can then be limited and monitored. The kernel's cgroup interface is provided through a pseudo-filesystem called cgroupfs.  Grouping is implemented in the core cgroup kernel code, while resource tracking and limits are implemented in a set of per-resource-type subsystems (memory, CPU, and so on).
* A `cgroup` is a collection of processes that are bound to a set of limits or parameters defined via the cgroup filesystem.

### subsystem

* A `subsystem` is a kernel component that modifies the behavior of the processes in a cgroup.  Various subsystems have been implemented, making it possible to do things such as limiting the amount of CPU time and memory available to a cgroup, accounting for the CPU time used by a cgroup, and freezing and resuming execution of the processes in a cgroup.  Subsystems are sometimes also known as resource controllers (or simply, controllers).
* The cgroups for a controller are arranged in a hierarchy. This hierarchy is defined by creating, removing, and renaming subdirectories within the cgroup filesystem. At each level of the hierarchy, attributes (e.g., limits) can be defined. The limits, control, and accounting provided by cgroups generally have effect throughout the subhierarchy underneath the cgroup where the attributes are defined. Thus, for example, the limits placed on a cgroup at a higher level in the hierarchy cannot be exceeded by descendant cgroups.

### kernfs

* In the Linux kernel, [kernfs](https://en.wikipedia.org/wiki/Kernfs_(Linux)) is a set of functions that contain the functionality required for creating pseudo file systems used internally by various kernel subsystems. The creation of kernfs resulted from splitting off part of the internal logic used by sysfs, which provides a set of virtual files by exporting information about hardware devices and associated device drivers from the kernel's device model to user space, into an independent and reusable functionality so other kernel subsystems can implement their own pseudo file systems more easily and consistently.

---

## LXC

* LXC (Linux Containers) is an operating-system-level virtualization method for running multiple isolated Linux systems (containers) on a control host using a single Linux kernel.
* The Linux kernel provides the cgroups functionality that allows limitation and prioritization of resources (CPU, memory, block I/O, network, etc.) without the need for starting any virtual machines, and also namespace isolation functionality that allows complete isolation of an application's view of the operating environment, including process trees, networking, user IDs and mounted file systems.
* LXC combines the kernel's cgroups and support for isolated namespaces to provide an isolated environment for applications.

### Advantages

* Security: network services can be run in a container, which limits the damage caused by a security breach or violation. An intruder who successfully exploits a security hole on one of the applications running in that container is restricted to the set of actions possible within that container.
* Isolation: containers allow the deployment of one or more applications on the same physical machine, even if those applications must operate under different domains, each requiring exclusive access to its respective resources. For instance, multiple applications running in different containers can bind to the same physical network interface by using distinct IP addresses associated with each container.
* Virtualization and transparency: containers provide the system with a virtualized environment that can hide or limit the visibility of the physical devices or system's configuration underneath it. The general principle behind a container is to avoid changing the environment in which applications are running with the exception of addressing security or isolation issues.

---

## Docker

* Docker is an Apache-licensed open-source *containerization technology* designed to automate the repetitive task of creating and deploying microservices inside containers. 
* Docker treats containers as if they were extremely lightweight and modular virtual machines. 
* Initially, Docker was built on top of LXC, but it has since moved away from that dependency, resulting in a better developer and user experience. Much like LXC, Docker continues to make use of the kernel cgroup subsystem. The technology is more than just running containers, it also eases the process of creating containers, building images, sharing those built images and versioning them.

### Advantages 

* Portability: Docker provides an image-based deployment model. This type of portability allows for an easier way to share an application or set of services (with all of their dependencies) across multiple environments.
* Version control: a single Docker image is made up of a series of combined layers. A new layer is created whenever the image is altered. For instance, a new layer is created every time a user specifies a command, such as run or copy. Docker will reuse these layers for new container builds. Layering to Docker is its very own method of version control.
* Rollback: again, every Docker image has layers. If you don't want to use the currently running layer, you can roll back to a previous version. This type of agility makes it easier for software developers to integrate and deploy their software technology continuously.
* Rapid deployment: provisioning new hardware often can take days. And, the amount of effort and overhead to get it installed and configured is quite burdensome. With Docker, you can avoid all of that by reducing the time it takes to get an image up and running to a matter of seconds. When you're done with a container, you can destroy it just as easily.

---

## LXC v.s. Docker

### Process Management

Docker restricts containers to run as a **single** process. If your application consists of X number of concurrent processes, Docker will want you to run X number of containers, each with its own distinct process. This is not the case with LXC, which runs a container with a conventional init process and, in turn, can host multiple processes inside that same container. For example, if you want to host a LAMP (Linux + Apache + MySQL + PHP) server, each process for each application will need to span across multiple Docker containers.

### State Management

Docker is designed to be stateless, meaning it doesn't support persistent storage. There are ways around this, but again, it's only necessary when the process requires it. When a Docker image is created, it will consist of read-only layers. This will not change. During runtime, if the process of the container makes any changes to its internal state, a diff between the internal state and the current state of the image will be maintained until either a commit is made to the Docker image (creating a new layer) or until the container is deleted, resulting in that diff disappearing.

### Portability

This word tends to be overused when discussing Docker—that's because it's the single-most important advantage Docker has over LXC. Docker does a much better job of abstracting away the networking, storage and operating system details from the application. This results in a truly configuration-independent application, guaranteeing that the environment for the application always will remain the same, regardless of the machine on which it is enabled.

Docker is designed to benefit both developers and system administrators. It has made itself an integral part of many DevOps (developers + operations) toolchains. Developers can focus on writing code without having to worry about the system ultimately hosting it. With Docker, there's no need to install and configure complex databases or worry about switching between incompatible language toolchain versions. Docker gives the operations staff flexibility, often reducing the number of physical systems needed to host some of the smaller and more basic applications. Docker streamlines software delivery. New features and bug/security fixes reach the customer quickly without any hassle, surprises or downtime.

---

## Kubernetes

Kubernetes, or k8s (k + eight characters), originally was developed by Google. It's an open-source platform aiming to automate container operations: "deployment, scaling and operations of application containers across clusters of hosts". Google was an early adopter and contributor to the Linux Container technology (in fact, Linux Containers power Google's very own cloud services). Kubernetes eliminates all of the manual processes involved in the deployment and scaling of containerized applications. It's capable of clustering together groups of servers hosting Linux Containers while also allowing administrators to manage those clusters easily and efficiently.

---

## References
* [IBM Research Report: An Updated Performance Comparison of Virtual Machines and Linux Containers](https://domino.research.ibm.com/library/cyberdig.nsf/papers/0929052195DD819C85257D2300681E7B/$File/rc25482.pdf)
* Everything You Need to Know about Linux Containers
    * [Part I: Linux Control Groups and Process Isolation](https://www.linuxjournal.com/content/everything-you-need-know-about-linux-containers-part-i-linux-control-groups-and-process)
    * [Part II: Working with Linux Containers (LXC)](https://www.linuxjournal.com/content/everything-you-need-know-about-linux-containers-part-ii-working-linux-containers-lxc)
    * [Part III: Orchestration with Kubernetes](https://www.linuxjournal.com/content/everything-you-need-know-about-containers-part-iii-orchestration-kubernetes)