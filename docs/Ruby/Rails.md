1. Prerequisites
  - VM: Debian 11.x 64-bit
  - VM: User with sudo
    - `usermod -aG sudo $USER`

2. Inside VM, open the terminal
  - `sudo apt install ruby-full`
  - `ruby --version`
  - `sudo apt install sqlite3`
  - `sqlite3 --version`
  - `sudo apt install git`
  - `sudo gem install rails`
  - `rails --version`
  - `sudo gem install bundler`
  - `mkdir Projects`
  - `cd Projects/`
  - `rails new blog`
