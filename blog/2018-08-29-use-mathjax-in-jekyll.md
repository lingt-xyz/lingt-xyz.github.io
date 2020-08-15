---
title: Use MathJax in Jekyll
mathjax: true
---
Two things need to be done.

<!--truncate-->

:::info
This page is rendered by Docusaurus; however, the syntax is for Jekyll.
:::

1. Config inline mode, so we can use `$$`
    ```html
    <script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      tex2jax: {
        inlineMath: [ ['$','$'], ["\\(","\\)"] ],
        processEscapes: true
      }
    });
    </script>
    ```
2. Import MathJax: make sure use `https`
    ``` html
    <script type="text/javascript"
        src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
    </script>
    ```
3. Two ways to put the latex code
    1. User latex delimiters

        `\\(...\\)` or `$ ... $` for inline and 
        
        `\\[...\\]` or `$$ ... $$` for block

    2. Put the code in `{% raw %}{%{% endraw %} raw {% raw %}%}{% endraw %}{% raw %}{%{% endraw %} endraw {% raw %}%}{% endraw %}`
        ```
        {% raw %}{%{% endraw %} raw {% raw %}%}{% endraw %}
            $$ put MathJax here $$
        {% raw %}{%{% endraw %} endraw {% raw %}%}{% endraw %}
        ```
    
### Style Examples

* Inline

    $a^2 + b^2 = c^2$ --> note that all equations between these tags will not need escaping!

    ```
    $a^2 + b^2 = c^2$ --> note that all equations between these tags will not need escaping! 
    ```

* Block
    * Correct way:
        
        some text before

        $$a^2 + b^2 = c^2$$ 

        some text after.

        ```
        some text before 

        $$a^2 + b^2 = c^2$$ 

        some text after.
        ```

    * Wrong way 1:

        some text before $$a^2 + b^2 = c^2$$ some text after.

        ```
        some text before $$a^2 + b^2 = c^2$$ some text after.
        ```

    * Wrong way 2:
        
        some text before 
        $$a^2 + b^2 = c^2$$ 
        some text after.

        ```
        some text before 
        $$a^2 + b^2 = c^2$$ 
        some text after.
        ```

### Examples:
* Special symbols
    1. $\\\{\\\}$

        ```
        $\\\{\\\}$
        ```

    2. $\|\|$
        ```
        $\|\|$
        ```

* Indent (did not work with Docusaurus)

    1. Must contain 0: 

        $$
        \left.
        \begin{array}{l}
        0\quad \_\quad \_\quad \_\quad \_:&10^4\\
        \_\quad 0\quad \_\quad \_\quad \_:&10^4\\
        \_\quad \_\quad 0\quad \_\quad \_:&10^4\\
        \_\quad \_\quad \_\quad 0\quad \_:&10^4\\
        \_\quad \_\quad \_\quad \_\quad 0:&10^4
        \end{array}
        \right\}
        =5\times10^4
        $$

        * How about $00012$, it was counted three times.
        * $10^5 - 9^5$: $9^5$ is who does not contain $0$.

    2. Must contain 0 and 1: $10^5-9^5-9^5+8^5$

    ```
    1. Must contain 0: 

        $$
        \left.
        \begin{array}{l}
        0\quad \_\quad \_\quad \_\quad \_:&10^4\\
        \_\quad 0\quad \_\quad \_\quad \_:&10^4\\
        \_\quad \_\quad 0\quad \_\quad \_:&10^4\\
        \_\quad \_\quad \_\quad 0\quad \_:&10^4\\
        \_\quad \_\quad \_\quad \_\quad 0:&10^4
        \end{array}
        \right\}
        =5\times10^4
        $$

        * How about $00012$, it was counted three times.
        * $10^5 - 9^5$: $9^5$ is who does not contain $0$.

    2. Must contain 0 and 1: $10^5-9^5-9^5+8^5$
    ```
