---
title: GNU/Linux command
---
Commands on Debian 10

<!--more-->


## Audio

- Show Settings: `amixer`
- Set volumn: `amixer set Master 50%`
- Increase/Decrease volumn:
    - `amixer set Master 10%+`
    - `amixer set Master 10%-`
- Mute/Unmute
    - `amixer set Master mute`
    - `amixer set Master unmute`
    - `amixer set Master toggle`


## Disk

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


## Tar

"tar" stands for tape archive, which is used deal with tape drives backup.

- `c`: create a new `.tar` archive file
- `v`: verbosely show the `.tar` file progress.
- `f`: use archive file or device ARCHIVE
- `x`: extract files from an archive
- `j`: filter the archive through bzip2
- `t`: list the contents of an archive

e.g.:

- Create .tar archive file
    - `tar -cvf test.tar file1 file2`
- Create .tar.gz archive compressed file
    - `tar -cvzf test.tar.gz folder`
- Create .tar.bz2 archive compressed file
    - `tar -cvjf test.tar.bz2 folder`
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
-  Add files or directories to tar archive file
    - `tar -rvf test.tar newFile`
    - `tar -rvf test.tar.gz newFile`
    - `tar -rvf test.tar.bz2 newFile`

## User

- Add a new user
    - `adduser $username`
    - low level: `useradd -m $username`
- Change `$HOME` permission
    - default is `755` on Debian 10
    - only executable: `chmod 750 $HOME`
    - nothing: `chmod 700 $HOME`
- Grant `sudo`
    - `usermod -aG sudo $username`

- Delete a user
    - `deluser $username`
    - low level: `userdel [-r] $username`

- Change user id
    - `usermod -u 1001 $username`

- Change group id
    - `groupmod -g 1001 $username`

- Changer ownership
    - `chown -R $username:$groupname $folder`


---