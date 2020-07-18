---
title: Conda env disk quote exceeded error
---

<!--more-->
## Problem
When create conda virtual environment, got shell error because of unknown:

```
CommandNotFoundError: Your shell has not been properly configured to use 'conda activate'.
To initialize your shell, run

    $ conda init <SHELL_NAME>

Currently supported shells are:
  - bash
  - fish
  - tcsh
  - xonsh
  - zsh
  - powershell

See 'conda init --help' for more information and options.

IMPORTANT: You may need to close and restart your shell after running 'conda init'.

```

---

## Reason
?

---

## Solution

```bash
source ~/anaconda3/etc/profile.d/conda.sh
conda activate my_env
```


---

## References

- https://docs.anaconda.com/anaconda/user-guide/tasks/shared-pkg-cache/