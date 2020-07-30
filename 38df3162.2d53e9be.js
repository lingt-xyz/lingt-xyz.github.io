(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{165:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return d}));var a=r(2),n=r(9),i=(r(0),r(220)),o={},c={id:"programming/database/Cassandra",isDocsHomePage:!1,title:"Cassandra",description:"Basic Rules of Cassandra Data Modeling",source:"@site/docs/programming/database/Cassandra.md",permalink:"/docs/programming/database/Cassandra",editUrl:"https://github.com/lingt-xyz/io/tree/master/docs/programming/database/Cassandra.md",lastUpdatedAt:1596099793,sidebar:"database",next:{title:"Cassandra in Docker",permalink:"/docs/programming/database/Cassandra_in_Docker"}},s=[{value:"Non-Goals",id:"non-goals",children:[{value:"Minimize The Number Of Writes",id:"minimize-the-number-of-writes",children:[]},{value:"Minimize Data Duplication",id:"minimize-data-duplication",children:[]}]},{value:"Basic Goals",id:"basic-goals",children:[{value:"Spread data evenly around the cluster",id:"spread-data-evenly-around-the-cluster",children:[]},{value:"Minimize the number of partitions read",id:"minimize-the-number-of-partitions-read",children:[]}]},{value:"Keys",id:"keys",children:[{value:"Primary key",id:"primary-key",children:[]},{value:"Partition key",id:"partition-key",children:[]},{value:"Clustering key",id:"clustering-key",children:[]}]},{value:"References",id:"references",children:[]}],l={rightToc:s};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Basic Rules of Cassandra Data Modeling"),Object(i.b)("p",null,"Picking the right data model is the hardest part of using Cassandra. If you have a relational background, CQL will look familiar, but the way you use it can be very different. The goal of this post is to explain the basic rules you should keep in mind when designing your schema for Cassandra. If you follow these rules, you'll get pretty good performance out of the box. Better yet, your performance should scale linearly as you add nodes to the cluster."),Object(i.b)("h2",{id:"non-goals"},"Non-Goals"),Object(i.b)("h3",{id:"minimize-the-number-of-writes"},"Minimize The Number Of Writes"),Object(i.b)("h3",{id:"minimize-data-duplication"},"Minimize Data Duplication"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"basic-goals"},"Basic Goals"),Object(i.b)("h3",{id:"spread-data-evenly-around-the-cluster"},"Spread data evenly around the cluster"),Object(i.b)("h3",{id:"minimize-the-number-of-partitions-read"},"Minimize the number of partitions read"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"keys"},"Keys"),Object(i.b)("h3",{id:"primary-key"},"Primary key"),Object(i.b)("h3",{id:"partition-key"},"Partition key"),Object(i.b)("h3",{id:"clustering-key"},"Clustering key"),Object(i.b)("h2",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://hub.docker.com/_/cassandra"}),"Docker Offical Images: cassandra")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.datastax.com/blog/2015/02/basic-rules-cassandra-data-modeling"}),"Basic Rules of Cassandra Data Modeling"))))}d.isMDXComponent=!0},220:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(r),p=a,m=u["".concat(o,".").concat(p)]||u[p]||b[p]||i;return r?n.a.createElement(m,c(c({ref:t},l),{},{components:r})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);