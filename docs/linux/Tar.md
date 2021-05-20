---
title: Tar
---

"tar" stands for tape archive, which is used deal with tape drives backup.

- `c`: Create a new `.tar` archive file.
- `v`: Verbosely show the `.tar` file progress.
- `f`: Use archive file or device ARCHIVE.
- `x`: Extract files from an archive.
- `z`: Filter the archive through gzip.
- `j`: Filter the archive through bzip2.
- `t`: List the contents of an archive.

## Compress

- Create .tar archive file
    - `tar -cvf test.tar file1 file2`
- Create .tar.gz archive compressed file
    - `tar -cvzf test.tar.gz folder`
- Create .tar.bz2 archive compressed file
    - `tar -cvjf test.tar.bz2 folder`
- Add files or directories to tar archive file
    - `tar -rvf test.tar newFile`
    - `tar -rvf test.tar.gz newFile`
    - `tar -rvf test.tar.bz2 newFile`

## Decompress
- Untar tar archive file
    - `tar -xvf test.tar`
- Uncompress archive compressed file
    - `tar -xvf test.tar.gz`
    - `tar -xvf test.tar.bz2`
- Untar file(s) from tar File
    - `tar -xvf test.tar file`
    - `tar -xvf test.tar file1 file2`
    - `tar -zxvf test.tar.gz file`
    - `tar -jxvf test.tar.bz2 file`
- Extract group of files using wildcard
    - `tar -xvf test.tar --wildcards '*.json'`
    - `tar -zxvf test.tar.gz --wildcards '*.json'`
    - `tar -jxvf test.tar.bz2 --wildcards '*.json'`
- List content of tar archive file
    - `tar -tvf test.tar`
    - `tar -tvf test.tar.gz`
    - `tar -tvf test.tar.bz2`