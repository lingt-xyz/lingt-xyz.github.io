---
title: Integration with PyCharm
---

This post demostrates how to code python with PyCharm and Github.

## Installation

- Have PyCharm installed.
- Have Python installed.

---

## Github setup

If you have already opened PyCharm...

- Open PyCharm settings.
    > File > Settings > Version Control > GitHub
    
    :grey_exclamation:This settings is global. Instead, you can also set only for current project(s) at

    > File > Other Settings > Settings for New Projects > Version Control > GitHub
- Add a Github account.

If you are on PyCharm Welcome view...

- Open Configure.

    > Configure > Settings > Version Control > GitHub

    Beware this is a configuration for current project.

---

## Checkout a project

If you have already opened PyCharm...

- Open PyCharm import settings.
    > VCS > Get from Version Control > Git

If you are on PyCharm Welcome view...

- Open PyCharm import settings.

    > Check out from Version Control > Git

#### Input the URL

- It should be an address like this: `https://github.com/YOUR_NAME/PROJECT_NAME.git`

:100: The input has completion suggestion, so you can list down all available projects and choose one, or type keywords to find a one.

---

## Switch to another branch

Practically, we would work on our own branch rather than master and pull a request after our work is done.

Right click any file in the project

> Git > Repostory > Branches

Then, in the popup window, choose a corresponding branch under `Remote Branches`.

Now we can work on our own branch.

---

## Commit

You can commit by right clicking any file in the project to open the Commit window.

> Git > Commit file

Or by open the `Version Control` view in the lower left area of PyCharm IDE, and click the red checking mark.

#### Commit Message

Commit message is mandatory and recommended. After type the message, click `Commit` to commit your changes locally.

---

## Push

`Push` is the last step to sync your changes to the remote Github repository.

Right click any file in your project to open Push window.

> Git > Repository > Push

Keep default settings, and click `Push`. Your work should be on Github now.
