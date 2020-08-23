(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{177:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return c})),t.d(e,"metadata",(function(){return o})),t.d(e,"rightToc",(function(){return l})),t.d(e,"default",(function(){return p}));var a=t(2),i=t(9),r=(t(0),t(247)),c={title:"Basic Type"},o={id:"programming/Go/3_2Basic_Type",isDocsHomePage:!1,title:"Basic Type",description:"Go's basic types are:",source:"@site/docs/programming/Go/3_2Basic_Type.mdx",permalink:"/docs/programming/Go/3_2Basic_Type",editUrl:"https://github.com/lingt-xyz/io/tree/master/docs/programming/Go/3_2Basic_Type.mdx",lastUpdatedAt:1598157283,sidebar:"go",previous:{title:"Package",permalink:"/docs/programming/Go/3_1Package"},next:{title:"Variable",permalink:"/docs/programming/Go/3_3Variable"}},l=[{value:"Zero values",id:"zero-values",children:[]},{value:"Type conversions",id:"type-conversions",children:[]},{value:"Type inference",id:"type-inference",children:[]},{value:"Constants",id:"constants",children:[]},{value:"iota",id:"iota",children:[{value:"Counter",id:"counter",children:[]},{value:"Simplified Counter",id:"simplified-counter",children:[]},{value:"Counter from 1",id:"counter-from-1",children:[]},{value:"Counter from an offset",id:"counter-from-an-offset",children:[]},{value:"Application",id:"application",children:[]}]},{value:"Numeric Constants",id:"numeric-constants",children:[]},{value:"bit",id:"bit",children:[]},{value:"string",id:"string",children:[]},{value:"rune",id:"rune",children:[]}],b={rightToc:l};function p(n){var e=n.components,t=Object(i.a)(n,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Go's basic types are:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),"bool\n\nstring\n\nint  int8  int16  int32  int64\nuint uint8 uint16 uint32 uint64 uintptr\n\nbyte // alias for uint8\n\nrune // alias for int32\n     // represents a Unicode code point\n\nfloat32 float64\n\ncomplex64 complex128\n")),Object(r.b)("p",null," The ",Object(r.b)("inlineCode",{parentName:"p"},"int"),", ",Object(r.b)("inlineCode",{parentName:"p"},"uint"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"uintptr")," types are usually 32 bits wide on 32-bit systems and 64 bits wide on 64-bit systems."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"When you need an integer value you should use int unless you have a specific reason to use a sized or unsigned integer type.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n    "math/cmplx"\n)\n\nvar (\n    ToBe   bool       = false\n    MaxInt uint64     = 1<<64 - 1\n    z      complex128 = cmplx.Sqrt(-5 + 12i)\n)\n\nfunc main() {\n    fmt.Printf("Type: %T Value: %v\\n", ToBe, ToBe)\n    fmt.Printf("Type: %T Value: %v\\n", MaxInt, MaxInt)\n    fmt.Printf("Type: %T Value: %v\\n", z, z)\n}\n')),Object(r.b)("h2",{id:"zero-values"},"Zero values"),Object(r.b)("p",null,"Variables declared without an explicit initial value are given their ",Object(r.b)("em",{parentName:"p"},"zero value"),"."),Object(r.b)("p",null,"The zero value is:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"0")," for numeric types,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"false")," for the boolean type, and"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'""')," (the empty string) for strings.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "fmt"\n\nfunc main() {\n    var i int\n    var f float64\n    var b bool\n    var s string\n    fmt.Printf("%v %v %v %q\\n", i, f, b, s)\n}\n\n// Expected results:\n0 0 false ""\n')),Object(r.b)("h2",{id:"type-conversions"},"Type conversions"),Object(r.b)("p",null,"The expression ",Object(r.b)("inlineCode",{parentName:"p"},"T(v)")," converts the value ",Object(r.b)("inlineCode",{parentName:"p"},"v")," to the type ",Object(r.b)("inlineCode",{parentName:"p"},"T"),"."),Object(r.b)("p",null,"Some numeric conversions:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),"var i int = 42\nvar f float64 = float64(i)\nvar u uint = uint(f)\n")),Object(r.b)("p",null,"Or, put more simply:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),"i := 42\nf := float64(i)\nu := uint(f)\n")),Object(r.b)("p",null,"Unlike in C, in Go assignment between items of different type requires an ",Object(r.b)("strong",{parentName:"p"},"explicit")," conversion."),Object(r.b)("h2",{id:"type-inference"},"Type inference"),Object(r.b)("p",null," When declaring a variable without specifying an explicit type ","(","either by using the ",Object(r.b)("inlineCode",{parentName:"p"},":=")," syntax or ",Object(r.b)("inlineCode",{parentName:"p"},"var =")," expression syntax",")",", the variable's type is inferred from the value on the right hand side."),Object(r.b)("p",null,"When the right hand side of the declaration is typed, the new variable is of that same type:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),"var i int\nj := i // j is an int\n")),Object(r.b)("p",null,"But when the right hand side contains an untyped numeric constant, the new variable may be an ",Object(r.b)("inlineCode",{parentName:"p"},"int"),", ",Object(r.b)("inlineCode",{parentName:"p"},"float64"),", or ",Object(r.b)("inlineCode",{parentName:"p"},"complex128")," depending on the precision of the constant:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),"i := 42           // int\nf := 3.142        // float64\ng := 0.867 + 0.5i // complex128\n")),Object(r.b)("h2",{id:"constants"},"Constants"),Object(r.b)("p",null,"Constants are declared like variables, but with the ",Object(r.b)("inlineCode",{parentName:"p"},"const"),"keyword."),Object(r.b)("p",null,"Constants can be character, string, boolean, or numeric values."),Object(r.b)("p",null,"Constants cannot be declared using the ",Object(r.b)("inlineCode",{parentName:"p"},":=")," syntax."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "fmt"\n\nconst Pi = 3.14\n\nfunc main() {\n    const World = "\u4e16\u754c"\n    fmt.Println("Hello", World)\n    fmt.Println("Happy", Pi, "Day")\n\n    const Truth = true\n    fmt.Println("Go rules?", Truth)\n}\n\n// Expected results:\nHello \u4e16\u754c\nHappy 3.14 Day\nGo rules? true\n')),Object(r.b)("h2",{id:"iota"},"iota"),Object(r.b)("p",null,"Go's ",Object(r.b)("inlineCode",{parentName:"p"},"iota")," identifier is used in ",Object(r.b)("inlineCode",{parentName:"p"},"const")," declarations to simplify definitions of incrementing numbers."),Object(r.b)("p",null,'{% embed url="',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/golang/go/wiki/Iota%22"}),'https://github.com/golang/go/wiki/Iota"')," %}"),Object(r.b)("h3",{id:"counter"},"Counter"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n)\n\nconst (\n    a = iota\n    b = iota\n    c = iota\n)\n\nconst (\n    r = iota\n    s = iota\n    t = iota\n)\n\nfunc main() {\n    fmt.Println(a)\n    fmt.Println(b)\n    fmt.Println(c)\n    fmt.Println(r)\n    fmt.Println(s)\n    fmt.Println(t)\n}\n\n// Expected results:\n0\n1\n2\n0\n1\n2\n')),Object(r.b)("h3",{id:"simplified-counter"},"Simplified Counter"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n)\n\nconst (\n    a = iota\n    b\n    c\n)\n\nfunc main() {\n    fmt.Println(a)\n    fmt.Println(b)\n    fmt.Println(c)\n}\n\n// Expected results:\n0\n1\n2\n')),Object(r.b)("h3",{id:"counter-from-1"},"Counter from 1"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n)\n\nconst (\n    _ = iota\n    a\n    b\n    c\n)\n\nfunc main() {\n    fmt.Println(a)\n    fmt.Println(b)\n    fmt.Println(c)\n}\n\n// Expected results:\n1\n2\n3\n')),Object(r.b)("h3",{id:"counter-from-an-offset"},"Counter from an offset"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n)\n\nconst (\n    _ = iota + 10\n    a\n    b\n    c\n)\n\nfunc main() {\n    fmt.Println(a)\n    fmt.Println(b)\n    fmt.Println(c)\n}\n\n// Expected results:\n11\n12\n13\n')),Object(r.b)("h3",{id:"application"},"Application"),Object(r.b)("h4",{id:"file-size"},"File Size"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n)\n\nconst (\n    _ = iota\n    KB = 1 << (10 * iota)\n    MB\n    GB\n    TB\n)\n\nfunc main() {\n    fileSize := 2000000000.\n    fmt.Printf("%.2fGB", fileSize/GB)\n}\n\n// 1.86GB\n')),Object(r.b)("h4",{id:"permission"},"Permission"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n)\n\nconst (\n    X = 1 << iota\n    W\n    R\n)\n\nfunc main() {\n    var permission byte = X | W | R\n    fmt.Printf("%b\\n", permission)\n    fmt.Printf("Is readable? %v", R & permission == R)\n}\n\n\n// Expected results:\n111\nIs readable? true\n')),Object(r.b)("h2",{id:"numeric-constants"},"Numeric Constants"),Object(r.b)("p",null,"Numeric constants are high-precision values."),Object(r.b)("p",null,"An untyped constant takes the type needed by its context."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "fmt"\n\nconst (\n    // Create a huge number by shifting a 1 bit left 100 places.\n    // In other words, the binary number that is 1 followed by 100 zeroes.\n    Big = 1 << 100\n    // Shift it right again 99 places, so we end up with 1<<1, or 2.\n    Small = Big >> 99\n)\n\nfunc needInt(x int) int { return x*10 + 1 }\nfunc needFloat(x float64) float64 {\n    return x * 0.1\n}\n\nfunc main() {\n    fmt.Println(needInt(Small))\n    fmt.Println(needFloat(Small))\n    fmt.Println(needFloat(Big))\n}\n\n// Expected results:\n21\n0.2\n1.2676506002282295e+29\n')),Object(r.b)("p",null," Try printing ",Object(r.b)("inlineCode",{parentName:"p"},"needInt(Big)"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "fmt"\n\nconst (\n    // Create a huge number by shifting a 1 bit left 100 places.\n    // In other words, the binary number that is 1 followed by 100 zeroes.\n    Big = 1 << 100\n    // Shift it right again 99 places, so we end up with 1<<1, or 2.\n    Small = Big >> 99\n)\n\nfunc needInt(x int) int { return x*10 + 1 }\nfunc needFloat(x float64) float64 {\n    return x * 0.1\n}\n\nfunc main() {\n    //fmt.Println(needInt(Small))\n    //fmt.Println(needFloat(Small))\n    //fmt.Println(needFloat(Big))\n    fmt.Println(needInt(Big))\n}\n\n// Expected results (exception):\nconstant 1267650600228229401496703205376 overflows int\n')),Object(r.b)("p",null,"(","An ",Object(r.b)("inlineCode",{parentName:"p"},"int")," can store at maximum a 64-bit integer, and sometimes less.",")"),Object(r.b)("h2",{id:"bit"},"bit"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n)\n\nfunc main() {\n    a := 10 // 1010\n    b := 3  // 0011\n    fmt.Println(a & b)  // 0010\n    fmt.Println(a | b)  // 1011\n    fmt.Println(a ^ b)  // 1001\n    fmt.Println(a &^ b) // 0100\n    \n    c := 8  // 0100\n    fmt.Println(c << 2) // 010000   // 2^3 * 2^2\n    fmt.Println(c >> 2) // 01           // 2^3 / 2^2\n}\n\n// Expected results:\n2\n11\n9\n8\n32\n2\n')),Object(r.b)("h2",{id:"string"},"string"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n)\n\nfunc main() {\n    s := "this is a string"\n    fmt.Printf("%v, %T", s[0], s[0])\n    fmt.Printf("%v, %T", string(s[0]), s[0])\n}\n\n// Expected results:\n116, uint8\nt, uint8\n')),Object(r.b)("h2",{id:"rune"},"rune"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n)\n\nfunc main() {\n    var r rune = \'a\'\n    fmt.Printf("%v, %T\\n", r, r)\n}\n\n// Expected results:\n97, int32\n')))}p.isMDXComponent=!0},247:function(n,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"b",(function(){return f}));var a=t(0),i=t.n(a);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var b=i.a.createContext({}),p=function(n){var e=i.a.useContext(b),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},s=function(n){var e=p(n.components);return i.a.createElement(b.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return i.a.createElement(i.a.Fragment,{},e)}},m=i.a.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,c=n.parentName,b=l(n,["components","mdxType","originalType","parentName"]),s=p(t),m=a,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||r;return t?i.a.createElement(f,o(o({ref:e},b),{},{components:t})):i.a.createElement(f,o({ref:e},b))}));function f(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,c=new Array(r);c[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=n,o.mdxType="string"==typeof n?n:a,c[1]=o;for(var b=2;b<r;b++)c[b]=t[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);