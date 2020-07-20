---
title: Powerline fonts for Visual Studio Code terminal
---

Error of "character not in range" after installing zsh.

<!--truncate-->
## Problem
After installing [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh), Visual Studio Code terminal would report the error:

```
character not in range
```

---

## Reason
Fonts not supported.

---

## Solution
Install a powerline font, and update Visual Studio Code terminal fonts settings

### Meslo LG M DZ Regular for Powerline

1. Download [Meslo LG M DZ Regular for Powerline](https://github.com/powerline/fonts/blob/master/Meslo%20Dotted/Meslo%20LG%20M%20DZ%20Regular%20for%20Powerline.ttf)
    

2. Install the fonts. This can be done by clicking the ttf file.

### Config Visual Studio Code

1. Update "settings.json"
```json
"terminal.integrated.fontFamily": "Meslo LG M DZ for Powerline"
```

2. Or by changing terminal fonts setting

     Perferences -> settings -> Features -> Terminal -> Integrated: Font Family

     Set the value to be "Meslo LG M DZ for Powerline"

### Done
**Re login** to see it work.