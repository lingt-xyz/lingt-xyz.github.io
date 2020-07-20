---
title: Conda env disk quote exceeded error
---

<!--truncate-->
## Problem
When create conda virtual environment, got InvalidArchiveError because of Disk quota exceeded:

```
InvalidArchiveError("Error with archive /nfs/home/t/ta_li/.conda/pkgs/mkl_random-1.1.1-py37h0573a6f_007duxo2n/pkg-mkl_random-1.1.1-py37h0573a6f_0.tar.zst.  You probably need to delete and re-download or re-create this file.  Message from libarchive was:\n\nFailed to create dir 'lib/python3.7/site-packages/mkl_random/tests'")
[Errno 122] Disk quota exceeded
```

---

## Reason
Conda install packages to default env location; before installtion, it will cache packages to default cache location.

---

## Solution

- `conda info` will output all information.
- `conda --prefix=$PATH` will only change env directories, but not cache.

Both env and cache should be configured to point to new locations.

### Env

`conda config --add envs_dirs /speed-scratch/ta_li/.conda/envs`

### Cache

`conda config --add pkgs_dirs /speed-scratch/ta_li/.conda/pkgs`


---

## Create a virtual environment

`conda create -y --prefix /speed-scratch/ta_li/.conda/envs/t2t python=3.7 tensorflow-gpu=1.15`

Packages and cache should be in the folder `/speed-scratch/ta_li/.conda` and `/speed-scratch/ta_li/.conda/pkgs`


---

## References

- https://docs.anaconda.com/anaconda/user-guide/tasks/shared-pkg-cache/
- https://groups.google.com/a/continuum.io/forum/#!topic/anaconda/e_CbHa0-ImM