---
title: Dual boot killed by Windows updating
---

## Problem
Windows 10(7) updating messed up on dual boot.

<!--truncate-->

---

## Reason
Windows sucks.

---

## Solution

### Command

On Windows, open a CMD as an administrator (Win+X).
Run:
- Debian: `bcdedit /set {bootmgr} path \EFI\debian\grubx64.efi`
- Ubuntu: `bcdedit /set {bootmgr} path \EFI\ubuntu\grubx64.efi`

If use PowerShell, Run:
`bcdedit /set "{bootmgr}" path \EFI\ubuntu\grubx64.efi`

:::info
If you do not know your system configuration, run:
`bcdedit /enum firmware`
:::

### GNU/Linux live USB


---

## References

- https://wiki.debian.org/UEFI
- https://askubuntu.com/questions/655011/windows-10-upgrade-kills-grub-and-boot-repair-doesnt-help