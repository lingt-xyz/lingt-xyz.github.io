---
title: TensorFlow Log
---

#### TensorFlow does not support GPU

For the TensorFlow has a version of 2.0 and above, by default, GPU is supported.
When use `conda` to install, make sure choose `gpu` version.

`$conda create -n tf220 python=3.7 anaconda ipykernel tensorflow=2.20=gpu_py37h1a511ff_0`

```
$ conda search -f tensorflow=2.2.0
Loading channels: done
# Name                       Version           Build  Channel             
tensorflow                     2.2.0 eigen_py36h84d285f_0  pkgs/main           
tensorflow                     2.2.0 eigen_py37h1b16bb3_0  pkgs/main           
tensorflow                     2.2.0 eigen_py38hfc6e53c_0  pkgs/main           
tensorflow                     2.2.0 gpu_py36hf933387_0  pkgs/main           
tensorflow                     2.2.0 gpu_py37h1a511ff_0  pkgs/main           
tensorflow                     2.2.0 gpu_py38hb782248_0  pkgs/main           
tensorflow                     2.2.0 mkl_py36h5a57954_0  pkgs/main           
tensorflow                     2.2.0 mkl_py37h6e9ce2d_0  pkgs/main           
tensorflow                     2.2.0 mkl_py38h6d3daf0_0  pkgs/main
```

- Ref:
    - https://medium.com/lsc-psd/tensorflow-2-1-doesnt-seem-to-see-my-gpu-even-though-cuda-10-1-with-solution-7b44297843a