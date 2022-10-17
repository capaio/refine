"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22330],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(t),f=r,m=c["".concat(p,".").concat(f)]||c[f]||u[f]||i;return t?a.createElement(m,l(l({ref:n},d),{},{components:t})):a.createElement(m,l({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},66828:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={id:"handling-filters",title:"Handling Filters"},l=void 0,o={unversionedId:"advanced-tutorials/data-provider/handling-filters",id:"advanced-tutorials/data-provider/handling-filters",title:"Handling Filters",description:"refine expects an array of type CrudFilters to filter results based on some field\u2019s values. So you can use more than one filter. Even the or operator can be used to combine multiple filters.",source:"@site/docs/advanced-tutorials/data-provider/handling-filters.md",sourceDirName:"advanced-tutorials/data-provider",slug:"/advanced-tutorials/data-provider/handling-filters",permalink:"/docs/advanced-tutorials/data-provider/handling-filters",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/advanced-tutorials/data-provider/handling-filters.md",tags:[],version:"current",lastUpdatedBy:"Y\u0131ld\u0131ray \xdcnl\xfc",lastUpdatedAt:1666001120,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{id:"handling-filters",title:"Handling Filters"},sidebar:"someSidebar",previous:{title:"GraphQL",permalink:"/docs/advanced-tutorials/data-provider/graphql"},next:{title:"Strapi-v4",permalink:"/docs/advanced-tutorials/data-provider/strapi-v4"}},p={},s=[{value:"<code>CrudFilters</code>",id:"crudfilters",level:2},{value:"<code>LogicalFilters</code>",id:"logicalfilters",level:2},{value:"<code>ConditionalFilters</code>",id:"conditionalfilters",level:2},{value:"Top level multiple conditional filters usage",id:"top-level-multiple-conditional-filters-usage",level:3},{value:"Combining Filters",id:"combining-filters",level:2},{value:"Handle filters in a data provider",id:"handle-filters-in-a-data-provider",level:2}],d={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," expects an array of type ",(0,r.kt)("inlineCode",{parentName:"p"},"CrudFilters")," to filter results based on some field\u2019s values. So you can use more than one filter. Even the ",(0,r.kt)("inlineCode",{parentName:"p"},"or")," operator can be used to combine multiple filters."),(0,r.kt)("h2",{id:"crudfilters"},(0,r.kt)("inlineCode",{parentName:"h2"},"CrudFilters")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CrudFilters")," is an array of objects with the following properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// Supported operators:\ntype CrudOperators =\n    | "eq"\n    | "ne"\n    | "lt"\n    | "gt"\n    | "lte"\n    | "gte"\n    | "in"\n    | "nin"\n    | "contains"\n    | "ncontains"\n    | "containss"\n    | "ncontainss"\n    | "between"\n    | "nbetween"\n    | "null"\n    | "nnull"\n    | "or"\n    | "startswith"\n    | "nstartswith"\n    | "startswiths"\n    | "nstartswiths"\n    | "endswith"\n    | "nendswith"\n    | "endswiths"\n    | "nendswiths"\n\n// Supported filter types:\ntype LogicalFilter = {\n    field: string;\n    operator: Exclude<CrudOperators, "or">;\n    value: any;\n};\n\ntype ConditionalFilter = {\n    operator: "or";\n    value: LogicalFilter[];\n};\n\ntype CrudFilter = LogicalFilter | ConditionalFilter;\n//highlight-next-line\ntype CrudFilters = CrudFilter[];\n')),(0,r.kt)("h2",{id:"logicalfilters"},(0,r.kt)("inlineCode",{parentName:"h2"},"LogicalFilters")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LogicalFilter")," works with ",(0,r.kt)("inlineCode",{parentName:"p"},"AND")," logic. For example, if you want to filter by ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," field and ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," field, you can use the following filter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const filter = [\n    {\n        field: "name",\n        operator: "eq",\n        value: "John",\n    },\n    {\n        field: "age",\n        operator: "lt",\n        value: 30,\n    },\n];\n')),(0,r.kt)("p",null,"Here the query will look like: ",(0,r.kt)("inlineCode",{parentName:"p"},'"name" = "John" AND "age" < 30')),(0,r.kt)("h2",{id:"conditionalfilters"},(0,r.kt)("inlineCode",{parentName:"h2"},"ConditionalFilters")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ConditionalFilter")," works ",(0,r.kt)("inlineCode",{parentName:"p"},"or")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"and")," operator and expects an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"LogicalFilter")," objects in the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," property. For example, if you want to filter multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"OR")," by ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," field and ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," field, you can use the following filter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const filter = [\n    {\n        operator: "or",\n        value: [\n            {\n                operator: "and",\n                value: [\n                    {\n                        field: "name",\n                        operator: "eq",\n                        value: "John Doe",\n                    },\n                    {\n                        field: "age",\n                        operator: "eq",\n                        value: 30,\n                    },\n                ],\n            },\n            {\n                operator: "and",\n                value: [\n                    {\n                        field: "name",\n                        operator: "eq",\n                        value: "JR.Doe",\n                    },\n                    {\n                        field: "age",\n                        operator: "eq",\n                        value: 1,\n                    },\n                ],\n            },\n        ],\n    },\n];\n')),(0,r.kt)("p",null,"Here the query will look like: ",(0,r.kt)("inlineCode",{parentName:"p"},'("name" = John Doe AND "age" = 30) OR ("name" = JR.Doe AND "age" = 1)')),(0,r.kt)("h3",{id:"top-level-multiple-conditional-filters-usage"},"Top level multiple conditional filters usage"),(0,r.kt)("p",null,"If you create multiple Conditional Filters at the top level, you must add a key to it. Otherwise, you will get a warning in the console and your filters may not be combined correctly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const filter = [\n    {\n        key: "parent",\n        operator: "or",\n        value: [\n            {\n                operator: "and",\n                value: [\n                    {\n                        field: "name",\n                        operator: "eq",\n                        value: "John Doe",\n                    },\n                    {\n                        field: "age",\n                        operator: "eq",\n                        value: 30,\n                    },\n                ],\n            },\n            {\n                operator: "and",\n                value: [\n                    {\n                        field: "name",\n                        operator: "eq",\n                        value: "Jane Doe",\n                    },\n                    {\n                        field: "age",\n                        operator: "eq",\n                        value: 28,\n                    },\n                ],\n            },\n        ],\n    },\n    {\n        key: "children",\n        operator: "or",\n        value: [\n            {\n                operator: "and",\n                value: [\n                    {\n                        field: "name",\n                        operator: "eq",\n                        value: "JR John",\n                    },\n                    {\n                        field: "age",\n                        operator: "eq",\n                        value: 1,\n                    },\n                ],\n            },\n            {\n                operator: "and",\n                value: [\n                    {\n                        field: "name",\n                        operator: "eq",\n                        value: "JR Jane",\n                    },\n                    {\n                        field: "age",\n                        operator: "eq",\n                        value: 2,\n                    },\n                ],\n            },\n        ],\n    },\n];\n')),(0,r.kt)("h2",{id:"combining-filters"},"Combining Filters"),(0,r.kt)("p",null,"You can group multiple parameters in the same query using the logical filters or the conditional filters operators to filter results based on more than one criteria at the same time. This allows you to create more complex queries."),(0,r.kt)("p",null,"Example query: Find posts with 2 possible dates & a specific status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'filter = [\n    {\n        operator: "or",\n        value: [\n            {\n                field: "createdAt",\n                operator: "eq",\n                value: "2022-01-01",\n            },\n            {\n                field: "createdAt",\n                operator: "eq",\n                value: "2022-01-02",\n            },\n        ],\n    },\n    {\n        operator: "eq",\n        field: "status",\n        value: "published",\n    },\n];\n')),(0,r.kt)("p",null,"Here the query will look like:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'"status" == "published" AND ("createdAt" == "2022-01-01" OR "createdAt" == "2022-01-02")')),(0,r.kt)("h2",{id:"handle-filters-in-a-data-provider"},"Handle filters in a data provider"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="dataProvider.ts"',title:'"dataProvider.ts"'},'import { DataProvider } from "@pankod/refine-core";\n\nconst dataProvider = (): DataProvider => ({\n    getList: async ({ resource, pagination, filters, sort }) => {\n        if (filters) {\n            filters.map((filter) => {\n                if (filter.operator !== "or" && filter.operator !== "and" && "field" in filter) {\n                    // Handle your logical filters here\n                    // console.log(typeof filter); // LogicalFilter\n                } else {\n                    // Handle your conditional filters here\n                    // console.log(typeof filter); // ConditionalFilter\n                }\n            });\n        }\n    },\n});\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Data providers that support ",(0,r.kt)("inlineCode",{parentName:"p"},"or")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"and")," filtering logic are as follows:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/tree/master/packages/nestjsx-crud"},"NestJS CRUD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/tree/master/packages/strapi"},"Strapi")," - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/tree/master/packages/strapi-v4"},"Strapi v4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/tree/master/packages/strapi-graphql"},"Strapi GraphQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/tree/master/packages/supabase"},"Supabase")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/tree/master/packages/hasura"},"Hasura")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/tree/master/packages/nhost"},"Nhost")))))}u.isMDXComponent=!0}}]);