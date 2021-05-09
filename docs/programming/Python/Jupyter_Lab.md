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
sudo apt update
sudo apt install -y curl
```


---

## Anaconda


1. Download Anaconda
    ``` shell
    cd /tmp
    curl -O https://repo.anaconda.com/archive/Anaconda3-2020.11-Linux-x86_64.sh
    ```

1. Install Anaconda
    ``` shell
    bash Anaconda-latest-Linux-x86_64.sh
    ```
    Follow the prompts on the installer screens.
    
    If you are unsure about any setting, *__accept the defaults__*. You can change them later.

1. Activate Anaconda

    To make the changes take effect, close and then re-open your terminal window.

---

## Jupyter Lab