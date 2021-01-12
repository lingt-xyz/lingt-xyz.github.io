(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{251:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(9),i=(n(0),n(268)),c={title:"INSE 6120"},a={id:"course/INSE6120",isDocsHomePage:!1,title:"INSE 6120",description:"INSE 6120: Cryptographic Protocols and Network Security",source:"@site/docs/course/INSE6120.mdx",permalink:"/docs/course/INSE6120",editUrl:"https://github.com/lingt-xyz/io/tree/master/docs/course/INSE6120.mdx",lastUpdatedAt:1610478879,sidebar:"course",previous:{title:"INSE 6110",permalink:"/docs/course/INSE6110"},next:{title:"INSE 6130",permalink:"/docs/course/INSE6130"}},s=[{value:"Outline",id:"outline",children:[]},{value:"1. Cryptographic Protocols: Definitions, Properties, Types",id:"1-cryptographic-protocols-definitions-properties-types",children:[]},{value:"2. Cryptographic Protocols: Taxonomy of Attacks and Analysis",id:"2-cryptographic-protocols-taxonomy-of-attacks-and-analysis",children:[]},{value:"3. Design Principles of Engineering Security Protocols",id:"3-design-principles-of-engineering-security-protocols",children:[]},{value:"4. Analysis of Security Protocols",id:"4-analysis-of-security-protocols",children:[]},{value:"5. Analysis of TLS",id:"5-analysis-of-tls",children:[]},{value:"6. Worms: Propagation and Detection Techniques",id:"6-worms-propagation-and-detection-techniques",children:[]},{value:"7. Distributed Denial of Service (DDoS) Attacks",id:"7-distributed-denial-of-service-ddos-attacks",children:[]},{value:"8. Online Dictionary Attacks and Defences",id:"8-online-dictionary-attacks-and-defences",children:[]},{value:"9. Botnet Detection and Defences",id:"9-botnet-detection-and-defences",children:[]},{value:"10. Internet Censorship",id:"10-internet-censorship",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"INSE 6120: Cryptographic Protocols and Network Security"),Object(i.b)("h2",{id:"outline"},"Outline"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Instructor: Prof. Mohammad Mannan"),Object(i.b)("li",{parentName:"ul"},"Zoom: ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://concordia-ca.zoom.us/j/7745054259"}),"INSE6120 2021 Winter, Tuesdays, 17:45\u201320:15")),Object(i.b)("li",{parentName:"ul"},"Email: ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"mailto:m.mannan@concordia.ca"}),"m.mannan@concordia.ca")),Object(i.b)("li",{parentName:"ul"},"Office:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Tuesdays from 10:00\u201311:00"))),Object(i.b)("li",{parentName:"ul"},"Course Description: ",Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"The course introduces concepts, methodologies, techniques, tools and research problems in network security. Methods used in the design and analysis of security protocols, as well as an introduction\nto some prominent/example cryptographic protocols will be presented. We will address the issue of network security policies, authentication and authorization services. In addition, we will address\nissues such as botnets, darknets and network security monitoring.\nThe following topics will be covered (a subset of them): Cryptographic protocols, authentication protocols, key distributions protocols, e-commerce security protocols, security protocol properties: authentication, secrecy, integrity, availability, non-repudiation, atomicity, certified delivery,\ncrypto-protocol attacks, security protocols design, implementation and analysis. OSI security architecture, models and architectures for network security, authentication using Kerberos and X.509,\nemail security (PGP, S/MIME), IP security, IPv6, web security, SSL/TLS, virtual private networks, firewalls (screening routers, packet filtering, firewall architecture and theory, implementations and\nmaintenance, proxy servers), content filtering, denial of service attacks, wireless networks security, network security policies, intrusion detection, host-based IDS, network based IDS, misuse detection methods, anomaly detection methods, intrusion detection in distributed systems, intrusion\ndetection in wireless ad hoc networks.")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"1-cryptographic-protocols-definitions-properties-types"},"1. Cryptographic Protocols: Definitions, Properties, Types"),Object(i.b)("h2",{id:"2-cryptographic-protocols-taxonomy-of-attacks-and-analysis"},"2. Cryptographic Protocols: Taxonomy of Attacks and Analysis"),Object(i.b)("h2",{id:"3-design-principles-of-engineering-security-protocols"},"3. Design Principles of Engineering Security Protocols"),Object(i.b)("h2",{id:"4-analysis-of-security-protocols"},"4. Analysis of Security Protocols"),Object(i.b)("h2",{id:"5-analysis-of-tls"},"5. Analysis of TLS"),Object(i.b)("h2",{id:"6-worms-propagation-and-detection-techniques"},"6. Worms: Propagation and Detection Techniques"),Object(i.b)("h2",{id:"7-distributed-denial-of-service-ddos-attacks"},"7. Distributed Denial of Service (DDoS) Attacks"),Object(i.b)("h2",{id:"8-online-dictionary-attacks-and-defences"},"8. Online Dictionary Attacks and Defences"),Object(i.b)("h2",{id:"9-botnet-detection-and-defences"},"9. Botnet Detection and Defences"),Object(i.b)("h2",{id:"10-internet-censorship"},"10. Internet Censorship"))}d.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),y=r,b=p["".concat(c,".").concat(y)]||p[y]||u[y]||i;return n?o.a.createElement(b,a(a({ref:t},l),{},{components:n})):o.a.createElement(b,a({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=y;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);