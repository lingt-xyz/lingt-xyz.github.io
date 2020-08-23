(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(9),i=(n(0),n(247)),o={title:"init"},c={id:"programming/Go/4_2init",isDocsHomePage:!1,title:"init",description:"Each source file can define its own niladic init function to set up whatever state is required. \\(Actually each file can have multiple init functions.\\) And finally means finally: init is called after all the variable declarations in the package have evaluated their initializers, and those are evaluated only after all the imported packages have been initialized.",source:"@site/docs/programming/Go/4_2init.mdx",permalink:"/docs/programming/Go/4_2init",editUrl:"https://github.com/lingt-xyz/io/tree/master/docs/programming/Go/4_2init.mdx",lastUpdatedAt:1598157283,sidebar:"go",previous:{title:"Method",permalink:"/docs/programming/Go/4_1Method"},next:{title:"Interface",permalink:"/docs/programming/Go/4_3Interface"}},l=[],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Each source file can define its own niladic ",Object(i.b)("inlineCode",{parentName:"p"},"init")," function to set up whatever state is required. ","(","Actually each file can have multiple ",Object(i.b)("inlineCode",{parentName:"p"},"init")," functions.",")"," And finally means finally: ",Object(i.b)("inlineCode",{parentName:"p"},"init")," is called after all the variable declarations in the package have evaluated their initializers, and those are evaluated only after all the imported packages have been initialized."),Object(i.b)("p",null,"Besides initializations that cannot be expressed as declarations, a common use of ",Object(i.b)("inlineCode",{parentName:"p"},"init")," functions is to verify or repair correctness of the program state before real execution begins."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'func init() {\n    if user == "" {\n        log.Fatal("$USER not set")\n    }\n    if home == "" {\n        home = "/home/" + user\n    }\n    if gopath == "" {\n        gopath = home + "/go"\n    }\n    // gopath may be overridden by --gopath flag on command line.\n    flag.StringVar(&gopath, "gopath", gopath, "override default GOPATH")\n}\n')),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/assets/go/init.png",alt:"https://stackoverflow.com/questions/24790175/when-is-the-init-function-run"}))))}s.isMDXComponent=!0},247:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||f[d]||i;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);