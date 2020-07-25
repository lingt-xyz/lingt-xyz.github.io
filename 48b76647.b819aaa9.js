(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(9),a=(n(0),n(184)),i={title:"Granting Users Administrative Privileges"},l={permalink:"/blog/2019/08/07/add-user-sudo",editUrl:"https://github.com/lingt-xyz/io/tree/master/blog/2019-08-07-add-user-sudo.md",source:"@site/blog/2019-08-07-add-user-sudo.md",description:"After installation of Debian 10, user is not inclued in sudo group, thus cannot use sudo command as a non-root user as in Ubuntu.",date:"2019-08-07T00:00:00.000Z",tags:[],title:"Granting Users Administrative Privileges",readingTime:.475,truncated:!0,prevItem:{title:"Powerline fonts for Visual Studio Code terminal",permalink:"/blog/2019/09/13/vscode-terminal-powerline"},nextItem:{title:"Install Java 8 on Debian 10",permalink:"/blog/2019/08/07/install-java-8-on-debian-10"}},c=[{value:"Problem",id:"problem",children:[]},{value:"Reason",id:"reason",children:[]},{value:"Solution",id:"solution",children:[]},{value:"References",id:"references",children:[]}],u={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"After installation of Debian 10, user is not inclued in sudo group, thus cannot use ",Object(a.b)("inlineCode",{parentName:"p"},"sudo")," command as a non-root user as in Ubuntu."),Object(a.b)("h2",{id:"problem"},"Problem"),Object(a.b)("p",null,"Cannot use ",Object(a.b)("inlineCode",{parentName:"p"},"sudo")," command after installation of Debian 10."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"reason"},"Reason"),Object(a.b)("p",null,"Default user is not included in sudo group."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"solution"},"Solution"),Object(a.b)("p",null,"Add user to sudo group."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Log in as root"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ su -\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Add user to sudo group"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"# usermod -aG sudo your_user_name\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Restart.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After log in, user can use ",Object(a.b)("inlineCode",{parentName:"p"},"sudo")," now."))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"references"},"References"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.digitalocean.com/community/tutorials/how-to-add-delete-and-grant-sudo-privileges-to-users-on-a-debian-vps"}),"Digital Ocean"))))}s.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return n?o.a.createElement(m,l(l({ref:t},u),{},{components:n})):o.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);