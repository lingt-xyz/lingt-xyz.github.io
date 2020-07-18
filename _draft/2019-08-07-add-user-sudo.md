---
title: Granting Users Administrative Privileges
---

After installation of Debian 10, user is not inclued in sudo group, thus cannot use `sudo` command as a non-root user as in Ubuntu.

<!--more-->
## Problem
Cannot use `sudo` command after installation of Debian 10.

---

## Reason
Default user is not included in sudo group.

---

## Solution
Add user to sudo group.

1. Log in as root
    ```
    $ su -
    ```

2. Add user to sudo group
    ```
    # usermod -aG sudo your_user_name
    ```

3. Restart.

4. After log in, user can use `sudo` now.

---

## References

1. [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-add-delete-and-grant-sudo-privileges-to-users-on-a-debian-vps)