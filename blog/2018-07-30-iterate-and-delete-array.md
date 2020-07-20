---
title:  Iterate and delete element from array
---
[Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
> The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

<!--truncate-->
``` javascript
let i = arr.length;
while (i--) {
    if (arr[i] == something) {
        arr.splice(i, 1);
    }
}
```

[Looping through array and removing items, without breaking for loop](https://stackoverflow.com/questions/9882284/looping-through-array-and-removing-items-without-breaking-for-loop)
