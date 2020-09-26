---
title: Common Commands
---

## CUDA

- Check version: `CUDA check version`

## Conda

- List env
    - `conda info --envs`
- Create env
    - `conda create -n tf_115 python=3.7 tensorflow-gpu=1.15`
    - `conda create -n tf_220 python=3.7 tensorflow=2.2.0=gpu_py37h1a511ff_0 scikit-learn`
- Activate env
    - `conda activate tf_220`
- Install env on Jupyter notebook
    1. Create env and activate it
        - `conda create -n tf_220 python=3.7 anaconda ipykernel tensorflow=2.2.0=gpu_py37h1a511ff_0`
        - `conda activate tf_220`
    1. or install if created and activated
        - `conda install -c anaconda ipykernel`
    1. `python -m ipykernel install --user --name=tf_220`
- Remove env
    - `conda remove -n $name --all`

## Jupyter lab
- List jupyter notebook
    - `jupyter notebook list`
- Run background
    - `nohup jupyter lab &`
    - `jupyter lab --allow-root --ip=0.0.0.0 --port=8888`
- Stop
    - `jupyter notebook stop 3443`

## TensorBoard

* `tensorboard --logdir logs/log_dir --bind_all`
* `tensorboard —0logdir logs/log_dir —host 0.0.0.0 —port 6006`

## TensorFlow

- Release GPU
    - https://github.com/tensorflow/tensorflow/issues/36465
    - `for i in $(sudo lsof /dev/nvidia2 | grep python | awk '{print $2}' | sort -u); do sudo kill -9 $i; done`