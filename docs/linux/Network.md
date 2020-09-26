---
---

## Look up IP

`/sbin/ifconfig`
`netstat -anp | less`

## Listen IP

```
Listen *:80
Listen 0.0.0.0:80
Listen 127.0.0.1:80
Listen 192.168.0.5:80
```

The above options show up as:

```
:::80
0.0.0.0:80
127.0.0.1:80
192.168.0.5:80
```

and translate to:

- Listen on any IP address (IPv4 or IPv6)
- Listen on any IPv4 address on that server
- Listen on IPv4 localhost only
- Listen on external IPv4 address 192.68.0.5