---
title: User
---

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