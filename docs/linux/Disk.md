---
title: Disk
---

- Usage
    - `du -sh $folder`
        - `d` is disk
        - `u` is usage
        - `-s, --summarize`
        - `-h, --human-readable`
- Find which sub-folder takes up how much disk
    - `du -h --max-depth=1 | sort -hr`
- Find all folders' size
    - `du -sh .[!.]* *`
- Find free space
    `df -h $folder`