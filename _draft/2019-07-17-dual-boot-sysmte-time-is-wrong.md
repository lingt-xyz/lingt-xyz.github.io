---
title: Dual-boot System time is wrong
---

Debian 10 and Windows 10 system time always get wrong after reboot.

<!--more-->
## Problem
System time is wrong under dual-boot environment.

---

## Reason
* Linux systems reconstruct local time from universal time and the timezone information, so recommend using the CMOS clock in universal time.
* Windows systems in their default configuration ignore this recommendation; they keep the CMOS clock on local time, applying time changes when booting the computer by trying to guess during time changes if the change has already been applied or not.

### Background
* System clock, hardware clock are two time sources in a computer. Computer's motherboard has a hardware clock (CMOS clock), which is not very precise, and provides rather slow access times. The operating system kernel has its own, the software clock, which it keeps up to date with its own means. This system clock is generally more accurate, especially since it doesn't need access to hardware variables. However, since it only exists in live memory, it is zeroed out every time the machine is booted, contrary to the CMOS clock, which has a battery and therefore “survives” rebooting or halting of the machine. The system clock is, thus, set from the CMOS clock during boot, and the CMOS clock is updated on shutdown.
* NTP (Network Time Protocol) allows a machine to synchronize with others fairly accurately, taking into consideration the delays induced by the transfer of information over the network and other possible offsets.

---

## Solution
* Setting the registry key `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\TimeZoneInformation\RealTimeIsUniversal` to `1` as a `DWORD`.

---

## Terminology
1. RTC: real time clock
2. hardware clock = RTC
3. CMOS clock = hardware clock
    * When system boots, it populates the system time with the date and time read from the hardware clock.
3. NTP: Network Time Protocol
    * NTP server: a time server on the Internet.
4. GMT: Greenwich Mean Time
5. UTC: Coordinated Universal Time. UTC was previously called GMT. UTC is constant, and is not subject to Daylight Saving Time or other changes.
    * This is why the base time is better to be kept in UTC.
6. DST: Daylight Saving Time

---

## Command
1. `date`: show/change 'soft' time.
2. `TZ`: temporarily change the timezone, it takes priority over the configured system default.

---

## References
* [Time Synchronization](https://www.debian.org/doc/manuals/debian-handbook/sect.config-misc.en.html)
* [Date time](https://wiki.debian.org/DateTime)
* [Debian GNU/Linux System Administrator's Manual](https://www.debian.org/doc/manuals/system-administrator/ch-sysadmin-time.html)
