---
title: Zip
---

[zip](https://linux.die.net/man/1/zip) - package and compress (archive) files.

```bash
$ sudo apt install zip
```

- `r`: Travel the directory structure recursively.
- `d`: Remove (delete) entries from a zip archive.
- `e`: Encrypt the contents of the zip archive using a password which is entered on the terminal in response to a prompt.

## Compress

- Create .zip compressed file
    - `zip archivename.zip filename1 filename2 filename3`
    - `zip archivename.zip *.csv`
- Create .zip compressed file, including all files in the folder
    - `zip -r archivename.zip directory_name`
    - `zip -r archivename.zip directory_name1 directory_name2 file1 file1`
- Creating a Password Protected .zip file
    - `zip -e archivename.zip directory_name`
- Creating Split Zip File
    - `zip -s 1g -r archivename.zip directory_name`

## Delete

- Remove files in compressed file
    - `zip -d archivename.zip "__MACOSX*"`

---

[unzip](https://linux.die.net/man/1/unzip) - list, test and extract compressed files in a ZIP archive

```bash
$ sudo apt install unzip
```

- `d`: An optional directory to which to extract files.


## Decompress
- Unzip to the current directory
    - `unzip archivename.zip`
- Unzip to the target directory
    - `unzip archivename.zip -d /path/to/directory`
- Unzip a Password Protected .zip file
    - `unzip -P $Password$ archivename.zip`
- List content of .zip file
    - `unzip -l archivename.zip`
