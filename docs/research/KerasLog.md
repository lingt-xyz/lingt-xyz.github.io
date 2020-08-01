---
title: Keras Log
---

#### AttributeError: 'Model' object has no attribute 'run_eagerly'

```
  File "/home/ling/.anaconda3/lib/python3.7/site-packages/keras/engine/training.py", line 1239, in fit
    validation_freq=validation_freq)
  File "/home/ling/.anaconda3/lib/python3.7/site-packages/keras/engine/training_arrays.py", line 119, in fit_loop
    callbacks.set_model(callback_model)
  File "/home/ling/.anaconda3/lib/python3.7/site-packages/keras/callbacks/callbacks.py", line 68, in set_model
    callback.set_model(model)
  File "/home/ling/.anaconda3/lib/python3.7/site-packages/tensorflow/python/keras/callbacks.py", line 1786, in set_model
    if not model.run_eagerly:
AttributeError: 'Model' object has no attribute 'run_eagerly'
```

- Reason: Mixed between `keras` and `tf.keras`
- Ref:
    - https://stackoverflow.com/a/59894775/12339035