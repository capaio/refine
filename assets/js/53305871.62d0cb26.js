"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Create Full Featured Admin Panel with React and Ant Design",description:"We will see how easy it is to develop a functional Admin panel with the perfect harmony of Refine and Ant Design.",slug:"refine-react-ant-design-admin-panel-framework",authors:"melih",tags:["refine","antd","react","admin"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/refine-react-ant-design-admin-panel-framework",source:"@site/blog/2022-02-21-react-antd-admin.md",title:"Create Full Featured Admin Panel with React and Ant Design",description:"We will see how easy it is to develop a functional Admin panel with the perfect harmony of Refine and Ant Design.",date:"2022-02-21T00:00:00.000Z",formattedDate:"February 21, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"antd",permalink:"/blog/tags/antd"},{label:"react",permalink:"/blog/tags/react"},{label:"admin",permalink:"/blog/tags/admin"}],readingTime:12.68,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Create Full Featured Admin Panel with React and Ant Design",description:"We will see how easy it is to develop a functional Admin panel with the perfect harmony of Refine and Ant Design.",slug:"refine-react-ant-design-admin-panel-framework",authors:"melih",tags:["refine","antd","react","admin"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Build low-code, customizable and authorization ready (accesscontrol) admin panel with NestJS.",permalink:"/blog/how-to-access-control-with-nestjs"},nextItem:{title:"Top React JS Frameworks Every Developer Should Know",permalink:"/blog/best-react-frameworks"},relatedPosts:[{title:"A Guide on React Lazy Loading",permalink:"/blog/react-lazy-loading",formattedDate:"December 7, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:9.935,date:"2022-12-07T00:00:00.000Z"},{title:"How to use React Fragments?",permalink:"/blog/how-react-fragments-is-works",formattedDate:"October 2, 2022",authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],readingTime:5.455,date:"2022-10-02T00:00:00.000Z"},{title:"5 Most Common useState Mistakes React Developers Often Make",permalink:"/blog/common-usestate-mistakes-and-how-to-avoid",formattedDate:"August 29, 2022",authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],readingTime:16.03,date:"2022-08-29T00:00:00.000Z"}],authorPosts:[{title:"How to Import CSV File with React",permalink:"/blog/how-to-import-csv",formattedDate:"January 18, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.195,date:"2022-01-18T00:00:00.000Z"},{title:"ReactJS Frameworks You Should Know Before Start Developing B2B/Internal Application",permalink:"/blog/best-internal-tool-react-frameworks",formattedDate:"March 16, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.51,date:"2022-03-16T00:00:00.000Z"},{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase",formattedDate:"November 12, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:18.205,date:"2021-11-12T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},c=[],m={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/"},(0,r.kt)("strong",{parentName:"a"},"refine"))," is a ",(0,r.kt)("strong",{parentName:"p"},"headless")," ",(0,r.kt)("a",{parentName:"p",href:"https://en.reactjs.org/"},"React")," ",(0,r.kt)("strong",{parentName:"p"},"internal tool")," framework. It helps you develop quickly while developing both B2B and B2C applications. While speeding you up, it is never restricted and has a fully customizable structure."))}p.isMDXComponent=!0}}]);