---
title: Install Jupyter Lab on Ubuntu
---

This post demostrates how to install Jupyter Lab on Ubuntu.

## Ubuntu

``` shell
ling@ubuntu:~$ uname -a
Linux ubuntu 5.4.0-42-generic #46~18.04.1-Ubuntu SMP Fri Jul 10 07:21:24 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux
```

### Prerequisites

``` shell
$ sudo apt update
$ sudo apt install -y curl
```


---

## Anaconda


1. Download Anaconda
    ``` shell
    $ cd /tmp
    $ curl -O https://repo.anaconda.com/archive/Anaconda3-2020.11-Linux-x86_64.sh
    ```

1. Install Anaconda
    ``` shell
    $ bash Anaconda3-2020.11-Linux-x86_64.sh
    ```
    Follow the prompts on the installer screens. Most time, just press "Enter" or type "yes".
    
    If you are unsure about any setting, *__accept the defaults__*. You can change them later.

1. Activate Anaconda

    To make the changes take effect, close and then re-open your terminal window.

---

## Jupyter Lab


### Installation

```shell
$ conda install -c conda-forge jupyterlab --yes
```

### Change the working folder (Optinal) 

- The default working folder will be your home folder.
- If you would like to work in a different folder:
    - In the terminal, go to that folder which you would like to work in.
    - Startup the Jupyter Lab (see next instruction).

### Startup

``` shell
$ jupyter lab
```

Now you can access the Jupyter Lab locally.


### Remote Server

To setup a remove Jupyter Lab server, follow the instructions below.

1. Lookup the server IP

    ```shell
    $ hostname -I
    ```
1. Configure password
    ```shell
    $ jupyter notebook --generate-config
    $ jupyter notebook password
    Enter password: 
    Verify password: 
    [NotebookPasswordApp] Wrote hashed password to /home/username/.jupyter/jupyter_notebook_config.json
    ```
1. Startup
    ```shell
    $ jupyter lab --ip 0.0.0.0 --port 8888 --no-browser
    ```
1. Access
    Use the IP from the first step and the port in the previous step to access the Jupyter Lab.


### Common Commands

1. Check running notebook
    ```shell
    $ jupyter notebook list
    ```