"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[24625],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),a=n(27862);const i={id:"markdown",title:"Markdown"},s=void 0,l={unversionedId:"api-reference/antd/components/fields/markdown",id:"api-reference/antd/components/fields/markdown",title:"Markdown",description:"This field lets you display markdown content. It supports GitHub Flavored Markdown.",source:"@site/docs/api-reference/antd/components/fields/markdown.md",sourceDirName:"api-reference/antd/components/fields",slug:"/api-reference/antd/components/fields/markdown",permalink:"/docs/api-reference/antd/components/fields/markdown",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-reference/antd/components/fields/markdown.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1666001046,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{id:"markdown",title:"Markdown"},sidebar:"someSidebar",previous:{title:"Image",permalink:"/docs/api-reference/antd/components/fields/image"},next:{title:"Number",permalink:"/docs/api-reference/antd/components/fields/number"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2}],c=(u="PropsTable",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const m={toc:p};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This field lets you display markdown content. It supports ",(0,o.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"GitHub Flavored Markdown"),"."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Let's see how we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"<MarkdownField>")," in a show page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/show.tsx"',title:'"pages/posts/show.tsx"'},'import { useShow, IResourceComponentsProps } from "@pankod/refine-core";\nimport {\n    Show,\n    Typography,\n    // highlight-next-line\n    MarkdownField,\n} from "@pankod/refine-antd";\n\nconst { Title, Text } = Typography;\n\nexport const PostShow: React.FC = () => {\n    const { queryResult } = useShow<IPost>();\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    return (\n        <Show isLoading={isLoading}>\n            <Title level={5}>Id</Title>\n            <Text>{record?.id}</Text>\n\n            <Title level={5}>Content</Title>\n\n            // highlight-next-line\n            <MarkdownField value={record?.content} />\n        </Show>\n    );\n};\n\ninterface IPost {   \n    id: number;    \n    title: string;\n    content: string;\n}\n')),(0,o.kt)("br",null),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:a.Z,alt:"MarkdownField"})),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)(c,{module:"@pankod/refine-antd/MarkdownField","value-description":"Markdown data to render",mdxType:"PropsTable"}),(0,o.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,o.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com//github/pankod/refine/tree/master/examples/inputs/customInputs?embed=1&view=preview&theme=dark&preset=node",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-custom-inputs-example"}))}f.isMDXComponent=!0},27862:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/markdownfield-938f3a349a11754041f1b6d90a6a954d.png"}}]);