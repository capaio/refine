"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76660],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),c=a,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return r?n.createElement(h,l(l({ref:t},d),{},{components:r})):n.createElement(h,l({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},61517:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"telemetry",title:"Telemetry",sidebar_label:"Telemetry"},l="Telemetry",i={unversionedId:"further-readings/telemetry",id:"further-readings/telemetry",title:"Telemetry",description:"Summary",source:"@site/docs/further-readings/telemetry.md",sourceDirName:"further-readings",slug:"/further-readings/telemetry",permalink:"/docs/further-readings/telemetry",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/further-readings/telemetry.md",tags:[],version:"current",lastUpdatedBy:"Saroj Wasti",lastUpdatedAt:1666111658,formattedLastUpdatedAt:"Oct 18, 2022",frontMatter:{id:"telemetry",title:"Telemetry",sidebar_label:"Telemetry"},sidebar:"someSidebar",previous:{title:"Benchmarks",permalink:"/docs/further-readings/benchmarks"}},s={},p=[{value:"Summary",id:"summary",level:2},{value:"Why do we need this?",id:"why-do-we-need-this",level:2},{value:"How do we collect data?",id:"how-do-we-collect-data",level:2},{value:"What is collected?",id:"what-is-collected",level:2},{value:"How to opt-out?",id:"how-to-opt-out",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"telemetry"},"Telemetry"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," implements a ",(0,a.kt)("strong",{parentName:"p"},"simple")," and ",(0,a.kt)("strong",{parentName:"p"},"transparent")," telemetry module for collecting usage statistics defined in a ",(0,a.kt)("strong",{parentName:"p"},"very limited scope"),". "),(0,a.kt)("p",null,"Tracking is totally ",(0,a.kt)("strong",{parentName:"p"},"secure")," and ",(0,a.kt)("strong",{parentName:"p"},"anonymous"),". It includes no personally identifiable information and ",(0,a.kt)("strong",{parentName:"p"},"does not use cookies"),". Participation is optional and users may easily ",(0,a.kt)("strong",{parentName:"p"},"opt-out"),"."),(0,a.kt)("h2",{id:"why-do-we-need-this"},"Why do we need this?"),(0,a.kt)("p",null,"We try to answer the question ",(0,a.kt)("strong",{parentName:"p"},"how many users are actively using the Refine framework"),". This information is critical for open-source projects like Refine to better understand their communities and measure their growth metrics."),(0,a.kt)("h2",{id:"how-do-we-collect-data"},"How do we collect data?"),(0,a.kt)("p",null,"The tracking happens when a Refine application is loaded on the user's browser. On application init, a single HTTP request is sent to ",(0,a.kt)("a",{parentName:"p",href:"https://telemetry.refine.dev"},"https://telemetry.refine.dev"),". The request body is encoded with Base64 to be decoded on Refine servers."),(0,a.kt)("p",null,"There are no consequent requests for that session, as we do NOT collect any behavioral information such as ",(0,a.kt)("em",{parentName:"p"},"page views"),", ",(0,a.kt)("em",{parentName:"p"},"button clicks"),", etc."),(0,a.kt)("h2",{id:"what-is-collected"},"What is collected?"),(0,a.kt)("p",null,"The HTTP call has a JSON payload having the following application-specific attributes:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"providers"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean[]"),(0,a.kt)("td",{parentName:"tr",align:null},"List of providers used in the project (auth, data, router, live, notification, auditLog, i18n or accessControl)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Version of the refine package.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resourceCount"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of total resources.")))),(0,a.kt)("p",null,"Additionally, the following information is extracted and collected from the HTTP header:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IP Address"),(0,a.kt)("td",{parentName:"tr",align:null},"IP Address of the machine the request is coming from.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,a.kt)("td",{parentName:"tr",align:null},"Hostname of the machine the request is coming from.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Browser"),(0,a.kt)("td",{parentName:"tr",align:null},"Browser and browser version.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OS"),(0,a.kt)("td",{parentName:"tr",align:null},"OS and OS version.")))),(0,a.kt)("h2",{id:"how-to-opt-out"},"How to opt-out?"),(0,a.kt)("p",null,"You can opt out of telemetry by simply adding ",(0,a.kt)("inlineCode",{parentName:"p"},"disableTelemetry")," prop to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component."))}m.isMDXComponent=!0}}]);