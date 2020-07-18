---
---

How to setup an SFTP server on Debian 10

<!--more-->

## Prerequisites

- Install SSH
    - `sudo apt install ssh`

---

## Chroot vs non-Chroot

---

## Setup a Chroot SFTP server

### Create a group
- `# groupadd sftpusers`

### Create a user

- Create a new user
    - `# useradd -g sftpusers -d /incoming -s /usr/sbin/nologin guestuser`
    - `# passwd guestuser`
- Modify an existing user
    - `# usermod -g sftpusers -d /incoming -s /usr/sbin/nologin john`

### Config SFTP server

- Update subsystem
    - open config file
        - `vi /etc/ssh/sshd_config`
    - comment out 
        - `#Subsystem       sftp    /usr/lib/openssh/sftp-server`
    - add the following line
        - `Subsystem       sftp    internal-sftp`
    - verify the change
        ```console
        # grep sftp /etc/ssh/sshd_config
        #Subsystem	sftp	/usr/lib/openssh/sftp-server
        Subsystem	sftp	internal-sftp

        ```
- Set up connection
    - open config file
        - `vi /etc/ssh/sshd_config`
    - uncomment the following two lines
        - `ClientAliveInterval 300`
        - `ClientAliveCountMax 3`

### Specify Chroot Directory for a Group

Add the following lines at the end of `/etc/ssh/sshd_config`

```consle
Match Group sftpusers
        #ChrootDirectory /sftp/%u
        ChrootDirectory /sftp/guestuser
        ForceCommand internal-sftp
```

### Create SFTP Home Directory

- `mkdir -p /sftp/guestuser/incoming`

### Setup Appropriate Permission

- Set the owenership to the user, and group to the sftpusers group
    - `# chown guestuser:sftpusers /sftp/guestuser/incoming`
- Verify the permisson
    ```console
    # ls -ld /sftp/guestuser/incoming
    drwxr-xr-x 2 guestuser sftpusers 4096 Dec 28 23:49 /sftp/guestuser/incoming
    # ls -ld /sftp/guestuser
    drwxr-xr-x 3 root root 4096 Dec 28 23:49 /sftp/guestuser
    # ls -ld /sftp
    drwxr-xr-x 3 root root 4096 Dec 28 23:49 /sftp
    ```

### Restart sshd and Test Chroot SFTP

- Restart
    - `# service sshd restart`
- Test
    - `$ sftp guestuser@server_ip`

---

## Issues

### Broken pip

```console
packet_write_wait: Connection to x.x.x.x port 22: Broken pipe
```

- Use `-v` to look verbose information
    - `$ sftp -v guestuser@server_ip`
- Look logs
    - `# cat /var/log/auth.log`

### `ssh_config` or `sshd_confg`

- `ssh_config` is for ssh client
- `sshd_config` is for ssh server daemon

---

## References

- [How to Setup Chroot SFTP in Linux (Allow Only SFTP, not SSH)](https://www.thegeekstuff.com/2012/03/chroot-sftp-setup)
- [How to setup SFTP server on Ubuntu 18.04 Bionic Beaver with VSFTPD](https://linuxconfig.org/how-to-setup-sftp-server-on-ubuntu-18-04-bionic-beaver-with-vsftpd)
- [SSH_CONFIG(5)](http://man7.org/linux/man-pages/man5/ssh_config.5.html)
- [Changing SSH Port: Should I modify only sshd_config, or also ssh_config?
](https://serverfault.com/questions/343533/changing-ssh-port-should-i-modify-only-sshd-config-or-also-ssh-config)