---
title: Back to black
---

For Ubuntu 17.10 & GDM 3.26.2

<!--more-->

## Steps
1. Dark Theme (i.e., Ark-Dark)
2. Wallpaper & Lockscreen
3. Ubuntu Start/Shutdown screen (w/ ubuntu logo)
4. Grub
5. GDM Login Screen

<hr>

## Dark Theme (i.e., Ark-Dark)
1. install arc-theme

    `sudo apt install arc-theme`

2.  set theme

    `gsettings set org.gnome.desktop.interface gtk-theme 'Arc-Dark'`

## Wallpaper & Lockscreen

1. Copy image file

    `DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd )"`

    `sudo cp <wallpaper_1920x1080.png> /usr/share/backgrounds`

2. desktop wallpaper

    `gsettings set org.gnome.desktop.background picture-uri 'file:///usr/share/backgrounds/<wallpaper_1920x1080.png>'`

3. lock screen

    `gsettings set org.gnome.desktop.screensaver picture-uri 'file:///usr/share/backgrounds/<wallpaper_1920x1080.png>'`

## Ubuntu Start/Shutdown screen (w/ ubuntu logo)

1. Edit script

    `xhost +local: && sudo nano /usr/share/plymouth/themes/ubuntu-logo/ubuntu-logo.script`

2. Change from 

    ```
    # Window.SetBackgroundTopColor (0.16, 0.00, 0.12); # Nice colour on top of the screen fading to
    # Window.SetBackgroundBottomColor (0.16, 0.00, 0.12); # an equally nice colour on the bottom
    ```

 3. Change to
    
    ```
    Window.SetBackgroundTopColor (0.0, 0.00, 0.0); # Nice colour on top of the screen fading to
    Window.SetBackgroundBottomColor (0.0, 0.00, 0.0); # an equally nice colour on the bottom
    ```

4. Update

    `sudo update-initramfs -u`

## Grub

1. Copy image file

    `sudo cp <wallpaper_1920x1080.png> /boot/grub`

2. comment out problematic line

    `sudo sed -i "/GRUB_HIDDEN_TIMEOUT=0/ s/^/# /" /etc/default/grub`

3. update /boot/grub/grub.cfg

    `sudo update-grub`

4. Notes: `sudo nano /etc/default/grub`    

    * `/etc/default/grub` provides `GRUB_HIDDEN_TIMEOUT` and `GRUB_HIDDEN_TIMEOUT_QUIET`.
        Running `sudo update-grub` gives following warning:
        
            Warning: Setting GRUB_TIMEOUT to a non-zero value whenGRUB_HIDDEN_TIMEOUT is set is no longer supported.

        To see custom grub wallpaper, instead of black screen, cannot have both `GRUB_HIDDEN_TIMEOUT` and `GRUB_HIDDEN_TIMEOUT_QUIET`. Commenting out one or the other will permit the custom wallpape to be displayed.

    * Fix black splash screen in 17.10 by commenting out one of the following two lines: 
        * `GRUB_HIDDEN_TIMEOUT=0` # comment out this line (to show both splash screen and grub menu) 
        * `GRUB_HIDDEN_TIMEOUT_QUIET=true`

    * erify update-grub correctly updated splash screen image (search for image filename)
        
        `cat /boot/grub/grub.cfg`

## GDM Login Screen

extract gresource, replace `noise-texture.png`, rebuild gresource, copy `.gresource` into `/usr/share/gnome-shell/`

1. gresource extractor
    * [https://www.devpy.me/the-best-linux-lockscreen/](https://www.devpy.me/the-best-linux-lockscreen/)
    * [https://github.com/devpytech/scripts/tree/master/gresource-extract](https://github.com/devpytech/scripts/tree/master/gresource-extract)

2. Instructions to update GDM Login Screen

    1. download the scripts on the DevPy GitHub: `devpytech/scripts/gresource-extract`
    2. run `./extract.sh` to extract your current theme to the "theme" folder in the same folder as the extract script
    3. edit `./theme/gnome-shell.css` (change #lockDialogGroup)
        
        `background: #000000 url(resource:///org/gnome/shell/theme/noise-texture.png);`

    4. copy background image to `./theme/noise-texture.png` (i.e., use same name) 
    5. run `./build.sh` from DevPy's GitHub to create `.gresource` file in the theme folder
    6. `sudo mv ./theme/gnome-shell-theme.gresource /usr/share/gnome-shell/gnome-shell-theme.gresource`


3. Notes
    * Change from:

        ```
        lockDialogGroup {
            background: #2c001e url(resource:///org/gnome/shell/theme/noise-texture.png);
            background-repeat: repeat; }
        ```

    * purple `(#2c001e)` -> black `(#000000)`

    * Change to:

        ```
        lockDialogGroup {
            background: #000000 url(resource:///org/gnome/shell/theme/noise-texture.png);
            background-repeat: repeat; }
        ```

<hr>
[Ubuntu 17.10 & GDM 3.26.2: Back to Black](https://ubuntuforums.org/showthread.php?t=2384043&p=13736129#post13736129)