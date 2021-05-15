---
title: Bash
---

Bash Programming


## whereis bash

```bash
#!/bin/bash

echo Hello World
```

The first line indicates the system which program to use to run the file. Use `whereis bash` to see where bash is.

---

## Redirection

### `&`

`&` indicates that what follows is a file descriptor and not a file name.

### File descriptor

- `stdin`
- `stdout`: File descriptor `1` is the standard output (`stdout`).
- `stderr`: File descriptor `2` is the standard error (`stderr`).

### Examples

* `ls -l > ls.txt`: 
    
    This will redirect `stdout` of a program (`ls -l`) to a file (`ls.txt`).

* `grep da * 2> grep-errors.txt`

    This will redirect the `stderr`(`2`) of a program (`grep da *`) to a file (`grep-errors.txt`).

* `grep da * 2>&1` 

    This will redirect the `stderr`(`2`) of a program (`grep da *`) to be written to the `stdout`(`1`).

* `grep da * 2>1` 

    This will redirect the `stderr`(`2`) of a program (`grep da *`) to a file (`1`).

* `ls -l > ls.log 2>&1`

    This will redirect `stdout` of a program (`ls -l`) to a file (`ls.log`) and redirect `stderr`(`2`) to `stdout`(`1`).

* `ls -l &> ls.log`

    This is equivalent to `ls -l > ls.log 2>&1`.

* `ls -l &> ls.log &`

    This is equivalent to `ls -l &> ls.log`, but running in a "subshell". If the current shell is closed, the "subshell" would be closed as well.

* `nohup ls -l > ls.log &`

    This is equivalent to `ls -l &> ls.log &`, but running separately. Closing the current shell would not terminate the program.

* `nohup ls -l &`

    This is equivalent to `nohup ls -l > ls.log &`, but the output is written into `nohup.out` file in the current folder.

* `grep da * > /dev/null `

    This will redirect `stdout` of a program (`grep da *`) to the null device.

* `grep da * &> /dev/null `

    This will redirect `stdout` and `stderr` of a program (`grep da *`) to the null device.

---

## Pipes

Pipes let you use the output of a program as the input of another one.

### Examples

* `ls -l | sed -e "s/[aeio]/u/g"`

    Here, the following happens: first the command `ls -l` is executed, and it's output, instead of being printed, is sent (piped) to the `sed` program, which in turn, prints what it has to.

---

## Variables

No type, no declaration.

```bash
#!/bin/bash          
STR="Hello World!"
echo $STR 
## Hello World!
```

### Local variables

Local variables can be created by using the keyword `local`.

```bash
#!/bin/bash
#!/bin/bash
HELLO=Hello 
function hello {
        local HELLO=World
        echo $HELLO
}
echo $HELLO
hello
echo $HELLO

## Hello
## World
## Hello
```

---

## Conditionals

### if..then

```bash
#!/bin/bash
if [ "foo" = "foo" ]; then
    echo expression evaluated as true
fi
```

### if..then...else

```bash
#!/bin/bash
if [ "foo" = "foo" ]; then
    echo expression evaluated as true
else
    echo expression evaluated as false
fi
```

### Conditionals with variables

```bash
#!/bin/bash
T1="foo"
T2="bar"
if [ "$T1" = "$T2" ]; then
    echo expression evaluated as true
else
    echo expression evaluated as false
fi
```

---

## Loop

### For

```bash
#!/bin/bash
for i in $( ls ); do
    echo item: $i
done
```

### While

```bash
#!/bin/bash 
COUNTER=0
while [  $COUNTER -lt 10 ]; do
    echo The counter is $COUNTER
    let COUNTER=COUNTER+1 
done
```

### Util

```bash
#!/bin/bash 
COUNTER=20
until [  $COUNTER -lt 10 ]; do
    echo COUNTER $COUNTER
    let COUNTER-=1
done
```

---

## Functions

### Without paramerters
```bash
#!/bin/bash 
function quit {
    exit
}
function hello {
    echo Hello!
}
hello
quit
echo foo
```

### With paramerters
```bash
#!/bin/bash 
function quit {
    exit
}  
function e {
    echo $1 
}  
e Hello
e World
quit
echo foo
```

---

## User interfaces

### Menus

```bash
#!/bin/bash
OPTIONS="Hello Quit"
select opt in $OPTIONS; do
    if [ "$opt" = "Quit" ]; then
    echo done
    exit
    elif [ "$opt" = "Hello" ]; then
    echo Hello World
    else
    clear
    echo bad option
    fi
done
```

### Command line

```bash
#!/bin/bash        
if [ -z "$1" ]; then 
    echo usage: $0 directory
    exit
fi
SRCD=$1
TGTD="/var/backups/"
OF=home-$(date +%Y%m%d).tgz
tar -cZf $TGTD$OF $SRCD
```

`-z`: the length of STRING is zero. Please check `man test`.

---

## References

* [BASH Programming - Introduction HOW-TO](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html)
* [What does “ 2>&1 ” mean?](https://stackoverflow.com/questions/818255/in-the-shell-what-does-21-mean)
* [When is double-quoting necessary?](https://unix.stackexchange.com/questions/68694/when-is-double-quoting-necessary)
