---
---

Using `CUPS` web interface to configure printers encounters `401: Forbidden` error.

<!--more-->
## Problem
Use `$username` and `$password` to login `CUPS` admin to add printers or change printers' configures would have `401: Forbidden` error.

---

## Reason
User not in `sys` group.

---

## Solution

- Login `CUPS` admin [web](http://localhost:631/) interface  by using some user in `sys`, e.g. `root`.

- Choose `Add Printer`, then follow the instructions.


### Relogin

1. Relogin `CUPS` by entering [root@localhost:631/admin](https://root@localhost:631/admin).
    

2. No step 2.



### Done

---

## References

[bbs.archlinux.org](https://bbs.archlinux.org/viewtopic.php?id=198906)
