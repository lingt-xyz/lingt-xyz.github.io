(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var i=n(2),r=n(9),l=(n(0),n(188)),a={title:"sed"},o={id:"linux/Sed",isDocsHomePage:!1,title:"sed",description:"sed: the stream editor is a text editor that performs editing operations on information coming from standard input or a file. Sed edits line-by-line and in a non-interactive way.",source:"@site/docs/linux/Sed.md",permalink:"/docs/linux/Sed",editUrl:"https://github.com/lingt-xyz/io/tree/master/docs/linux/Sed.md"},b=[{value:"Print",id:"print",children:[]},{value:"Delete",id:"delete",children:[]},{value:"Substitute",id:"substitute",children:[]},{value:"Referencing Matched Text",id:"referencing-matched-text",children:[]},{value:"References",id:"references",children:[]}],c={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"sed"),": the ",Object(l.b)("strong",{parentName:"p"},"s"),"tream ",Object(l.b)("strong",{parentName:"p"},"ed"),"itor is a text editor that performs editing operations on information coming from standard input or a file. Sed edits line-by-line and in a non-interactive way."),Object(l.b)("h2",{id:"print"},"Print"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"sed '' [file]")),Object(l.b)("p",null,"Print ","[","file","]"," to screen."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Why: ",Object(l.b)("inlineCode",{parentName:"li"},"''")," do nothing on the input, so ",Object(l.b)("inlineCode",{parentName:"li"},"sed")," just prints whatever the input is.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"cat [file] | sed ''")),Object(l.b)("p",null,"Print ","[","file","]"," to screen."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"sed 'p' [file]")),Object(l.b)("p",null,"Print ","[","file","]"," to screen; but it would print every line twice."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Why: "),Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"Automatic printing."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"-p")," printing."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"p")," is ",Object(l.b)("inlineCode",{parentName:"p"},"sed"),"'s explicit printing command."))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"sed -n 'p' [file]")),Object(l.b)("p",null,"Print ","[","file","]"," to screen."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-n")," suppresses the automatic printing.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"sed -n '1p' [file]")),Object(l.b)("p",null,"Print the first line of ","[","file","]"," to screen."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"sed -n '1,5' [file]")),Object(l.b)("p",null,"Print lines (from 1 to 5) of ","[","file","]"," to screen."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"sed -n '1,+4p' [file]")),Object(l.b)("p",null,"Print the first line and the following 4 lines of ","[","file","]"," to screen."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"sed -n '1~2p' [file]")),Object(l.b)("p",null,"Print every other line of ","[","file","]"," to screen."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"delete"},"Delete"),Object(l.b)("p",null,"Deleting no longer need the ",Object(l.b)("inlineCode",{parentName:"p"},"-n")," command because with the delete command, sed will print everything that is not deleted."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"sed '1~2d' [file]")),Object(l.b)("p",null,"Delete every other line starting with the first."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Source file is not being affected. It is still intact. The edits are output to our screen.")),Object(l.b)("p",null,"If we want to save our edits, we can redirect standard output to a file like so:"),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{}),"sed '1~2d' [file] > everyother.txt\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"sed -i '1~2d' [file]")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"-i")," performs edits in-place."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"sed -i.bak '1~2d' [file]")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},".bak")," will create a backup file with the ",Object(l.b)("inlineCode",{parentName:"p"},".bak")," extension, and then edit the regular file in-place."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"substitute"},"Substitute"),Object(l.b)("p",null,"Synatx: ",Object(l.b)("inlineCode",{parentName:"p"},"sed s/old_word/new_word/")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"s")," is the substitute command. "),Object(l.b)("li",{parentName:"ul"},"The three slashes (",Object(l.b)("inlineCode",{parentName:"li"},"/"),") are used to separate the different text fields.")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"By default, the ",Object(l.b)("inlineCode",{parentName:"p"},"s")," command operates on the first match in a line and then moves to the next line. Use ",Object(l.b)("inlineCode",{parentName:"p"},"g")," flag to change every instance: ",Object(l.b)("inlineCode",{parentName:"p"},"sed s/old_word/new_word/g"),".")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"sed s/old_word/new_word/ [file]")),Object(l.b)("p",null,'Change the first instance of "old_word" on each line in ',"[","file","]",' to "new_word".'),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"sed s/old_word/new_word/g [file]")),Object(l.b)("p",null,'Change every instance of "old_word" in ',"[","file","]",' to "new_word".'),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"sed s/old_word/new_word/2 [file]")),Object(l.b)("p",null,"Change ",Object(l.b)("em",{parentName:"p"},"only"),' the second instances of "old_word" on each line in ',"[","file","]",' to "new_word".'),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"sed -n s/old_word/new_word/2p [file]")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"-n")," suppressed automatic printing, and ",Object(l.b)("inlineCode",{parentName:"p"},"p")," would print lines where substitution took place."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"referencing-matched-text"},"Referencing Matched Text"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"sed 's/^.*at/REPLACED/' [file]")),Object(l.b)("p",null,'The wildcard expression matches from the beginning of the line to the last instance of "at". Then the matched text would be substituted by "REPLACED".'),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"sed 's/^.*at/(&)/' [file]")),Object(l.b)("p",null,'The wildcard expression matches from the beginning of the line to the last instance of "at". Then the matched text would be put in parentheses.'),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"sed 's/\\([^ ][^ ]*\\) \\([^ ][^ ]*\\)/\\2 \\1/' [file]")),Object(l.b)("p",null,"Switch the first two words of each line."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"references"},"References"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.digitalocean.com/community/tutorial_series/using-sed"}),"Using Sed"))))}p.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var i=n(0),r=n.n(i);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,O=d["".concat(a,".").concat(u)]||d[u]||s[u]||l;return n?r.a.createElement(O,o(o({ref:t},c),{},{components:n})):r.a.createElement(O,o({ref:t},c))}));function O(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);