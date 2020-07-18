---
---

`sed`: the **s**tream **ed**itor is a text editor that performs editing operations on information coming from standard input or a file. Sed edits line-by-line and in a non-interactive way.

<!--more-->

## Print

`sed '' [file]`

Print \[file\] to screen.

* Why: `''` do nothing on the input, so `sed` just prints whatever the input is.

`cat [file] | sed ''`

Print \[file\] to screen.

`sed 'p' [file]`

Print \[file\] to screen; but it would print every line twice.

* Why: 
    1. Automatic printing.
    2. `-p` printing.

* `p` is `sed`'s explicit printing command.

`sed -n 'p' [file]`

Print \[file\] to screen.

* `-n` suppresses the automatic printing.

`sed -n '1p' [file]`

Print the first line of \[file\] to screen.

`sed -n '1,5' [file]`

Print lines (from 1 to 5) of \[file\] to screen.

`sed -n '1,+4p' [file]`

Print the first line and the following 4 lines of \[file\] to screen.

`sed -n '1~2p' [file]`

Print every other line of \[file\] to screen.

---

## Delete

Deleting no longer need the `-n` command because with the delete command, sed will print everything that is not deleted.

`sed '1~2d' [file]`

Delete every other line starting with the first.

> Source file is not being affected. It is still intact. The edits are output to our screen.

If we want to save our edits, we can redirect standard output to a file like so:

```
sed '1~2d' [file] > everyother.txt
```

`sed -i '1~2d' [file]`

`-i` performs edits in-place.

`sed -i.bak '1~2d' [file]`

`.bak` will create a backup file with the `.bak` extension, and then edit the regular file in-place.

---

## Substitute

Synatx: `sed s/old_word/new_word/`

* `s` is the substitute command. 
* The three slashes (`/`) are used to separate the different text fields.

> By default, the `s` command operates on the first match in a line and then moves to the next line. Use `g` flag to change every instance: `sed s/old_word/new_word/g`.

`sed s/old_word/new_word/ [file]`

Change the first instance of "old_word" on each line in \[file\] to "new_word".

`sed s/old_word/new_word/g [file]`

Change every instance of "old_word" in \[file\] to "new_word".

`sed s/old_word/new_word/2 [file]`

Change *only* the second instances of "old_word" on each line in \[file\] to "new_word".

`sed -n s/old_word/new_word/2p [file]`

`-n` suppressed automatic printing, and `p` would print lines where substitution took place.

---

## Referencing Matched Text

`sed 's/^.*at/REPLACED/' [file]`

The wildcard expression matches from the beginning of the line to the last instance of "at". Then the matched text would be substituted by "REPLACED".

`sed 's/^.*at/(&)/' [file]`

The wildcard expression matches from the beginning of the line to the last instance of "at". Then the matched text would be put in parentheses.

`sed 's/\([^ ][^ ]*\) \([^ ][^ ]*\)/\2 \1/' [file]`

Switch the first two words of each line.

---

## References

* [Using Sed](https://www.digitalocean.com/community/tutorial_series/using-sed)
