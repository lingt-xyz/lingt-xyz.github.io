---
title: Jekyll from scratch
---

Build a Github-page hosted Jekyll static website from scratch.

<!--more-->

## Installation

### Ruby

```bash
sudo apt-get install ruby-full build-essential zlib1g-dev
```

- Avoid installing Ruby Gems as the root user. Therefore, we need to set up a gem installation directory for your user account.

```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

### Jekyll

```bash
gem install jekyll bundler
```

---

## Basic website

1. Create a new folder
    
    `mkdir my_website && cd $_`

2. Create a new `Gemfile`

    `bundle init`

3. Edit the Gemfile and add `jekyll` as a dependency

    `echo gem \"jekyll\" >> Gemfile`

4. Install jekyll for your project

    `bundle`

5. Add a home page

    ```html
    <!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Home</title>
    </head>
    <body>
        <h1>Hello World!</h1>
    </body>
    </html>
    ```

6. Serve the website

    `jekyll serve`

7. Test
    - Go to `http://localhost:4000` in your browser. You should see “Hello World!”.

---

## Use minima

`minima` is the defaut template to build a new website.

### Use as a remote theme

- `jekyll new my_website`
- `cd my_website`
- `bundle exec jekyll serve`

### Local customization

- Style
- Templates

### GitHub Pages host

- Update `Gemfile`
    - Remove the `gem "jekyll"`
    - Uncomment `gem "github-pages", group: :jekyll_plugins`
    - Remove the version information of `jekyll-feed`
- Update bundle

---

## References

- [Jekyll](https://jekyllrb.com)