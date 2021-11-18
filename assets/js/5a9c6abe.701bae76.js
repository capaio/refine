"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[221],{3905:function(e,t,n){n.d(t,{Zo:function(){return A},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},A=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,A=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,p=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(p,i(i({ref:t},A),{},{components:n})):a.createElement(p,i({ref:t},A))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14514:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return A},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(65334),l=n(12199),s=["components"],c={title:"Migrating a React-Admin Application to Refine",description:"Recently, our team decided to migrate a B2B admin panel of one of our customers from React-Admin to refine to battle test our new framework and improve our productivity.",slug:"migrating-a-react-admin-application-to-refine",authors:"umut",tags:["refine","react-admin","adminpanel","crud"],image:"https://refine.dev/img/refine_social.png",hide_table_of_contents:!1},A=void 0,d={permalink:"/blog/migrating-a-react-admin-application-to-refine",source:"@site/blog/2021-10-6-migrating-react-admin-application-to-refine.md",title:"Migrating a React-Admin Application to Refine",description:"Recently, our team decided to migrate a B2B admin panel of one of our customers from React-Admin to refine to battle test our new framework and improve our productivity.",date:"2021-10-06T00:00:00.000Z",formattedDate:"October 6, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"react-admin",permalink:"/blog/tags/react-admin"},{label:"adminpanel",permalink:"/blog/tags/adminpanel"},{label:"crud",permalink:"/blog/tags/crud"}],readingTime:5.77,truncated:!0,authors:[{name:"Umut \xd6zdemir",title:"Frontend Developer",url:"https://github.com/miyavsu-limited",imageURL:"https://github.com/miyavsu-limited.png",key:"umut"}],prevItem:{title:"Create E-mail Subscription Panel with Refine and Strapi",permalink:"/blog/e-mail-subscription-panel-with-refine"},nextItem:{title:"Build Fast and Customizable Admin Panel with NestJS.",permalink:"/blog/customizable-admin-panel-with-nestjs"}},u={authorsImageUrls:[void 0]},m=[{value:"Migrating a React-Admin Application to refine",id:"migrating-a-react-admin-application-to-refine",children:[],level:3},{value:"Migrating Listing Pages",id:"migrating-listing-pages",children:[],level:2},{value:"Migrating Create/Edit Pages",id:"migrating-createedit-pages",children:[],level:2}],p={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Recently, our team decided to migrate a B2B admin panel of one of our customers from React-Admin to refine to battle test our new framework and improve our productivity. My mission was to migrate it and it took one and a half days for me to rewrite the panel in refine."),(0,o.kt)("h3",{id:"migrating-a-react-admin-application-to-refine"},"Migrating a React-Admin Application to refine"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/"},"refine")," is an extremely customizable ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/"},"Ant Desig")," based ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," framework for data-intensive applications and it handles most of the CRUD functionality that can be a requirement in many applications, without much effort. Providing the rest of the desired functionality (outside CRUD) is up to you, like in any ",(0,o.kt)("strong",null,"React")," application."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://marmelab.com/react-admin/"},"React-Admin")," is an amazing B2B application framework based on ",(0,o.kt)("a",{parentName:"p",href:"https://material.io/"},"Material Design"),", using ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/"},"Material UI"),". It provides ready-to-fetch-data components, so you just compose them together to create an application."),(0,o.kt)("strong",null,"refine")," is different in the way it makes you compose your application. refine directly provides ",(0,o.kt)("strong",null,"Ant Design")," components and some hooks to work with those components. Hooks give you the required props for those Ant Design components.",(0,o.kt)("p",null,"It is, also, one step forward towards the dream of ",(0,o.kt)("strong",null,"making it headless"),"."),(0,o.kt)("p",null,"To learn more about refine, see: ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/getting-started/overview"},"https://refine.dev/docs/getting-started/overview")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:"data:image/png;base64,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",alt:"sider"})))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("em",{parentName:"td"},"Our panel has 7 resources (all listable), which 4 of them must have create and edit pages, 6 of them must be exportable to ",(0,o.kt)("inlineCode",{parentName:"em"},".csv")," files and some of those resources have images, all images must be uploaded in ",(0,o.kt)("inlineCode",{parentName:"em"},"base64")," format."))))),(0,o.kt)("p",null,"This is how it looks before the migration (React-Admin):"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:i.Z,alt:"react-admin"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"And this is how it looks like after the migration (refine):"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:l.Z,alt:"refine"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Both of these images show a list page of a resource (campaign)."),(0,o.kt)("h2",{id:"migrating-listing-pages"},"Migrating Listing Pages"),(0,o.kt)("p",null,"List pages have one/more tables inside them. Ideally, all table state should be managed by the framework in use."),(0,o.kt)("p",null,"refine is very flexible with tables. You can put them anywhere, configure it as much as you want with ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-references/hooks/table/useTable/"},"useTable"),". See the ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/demo/"},"fineFoods example")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/blob/master/examples/fineFoods/admin/src/pages/categories/list.tsx"},"it's code"),"."),(0,o.kt)("p",null,"Here is an example list page from React-Admin that shows you the list of ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),",",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"isActive"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"startDate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"endDate")," from the API endpoint for ",(0,o.kt)("inlineCode",{parentName:"p"},"campaigns")," resource."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport {\n    List as ReactAdminList,\n    Datagrid,\n    TextField,\n    BooleanField,\n    EditButton,\n} from "react-admin";\n\nimport LocalizeDateField from "../../fields/LocalizeDateField";\n\nconst List = (props) => (\n    <ReactAdminList {...props}>\n        <Datagrid>\n            <TextField source="id" label="ID" />\n            <TextField source="name" label="Name" />\n            <BooleanField source="isActive" label="Active" />\n            <LocalizeDateField source="startDate" />\n            <LocalizeDateField source="endDate" />\n            <EditButton basePath="/campaigns" />\n        </Datagrid>\n    </ReactAdminList>\n);\n\nexport default List;\n')),(0,o.kt)("p",null,"And looks like this:"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:i.Z,alt:"react-admin"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Here's the code that renders this same list in refine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport {\n    List,\n    Table,\n    Space,\n    Button,\n    BooleanField,\n    DateField,\n    CreateButton,\n    EditButton,\n    ExportButton,\n    Icons,\n    useTable,\n    getDefaultSortOrder,\n    useExport,\n    useDeleteMany,\n    IResourceComponentsProps,\n} from "@pankod/refine";\n\nimport { ICampaign } from "interfaces";\n\nexport const CampaignsList: React.FC<IResourceComponentsProps> = () => {\n    const { tableProps, sorter } = useTable<ICampaign>({\n        initialSorter: [\n            {\n                field: "id",\n                order: "asc",\n            },\n        ],\n    });\n\n    const { isLoading: isExportLoading, triggerExport } = useExport();\n\n    const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>(\n        [],\n    );\n\n    const handleSelectChange = (selectedRowKeys: React.Key[]) => {\n        setSelectedRowKeys(selectedRowKeys);\n    };\n\n    const rowSelection = {\n        selectedRowKeys,\n        onChange: handleSelectChange,\n    };\n\n    const { mutate, isLoading } = useDeleteMany<ICampaign>();\n\n    const deleteSelectedItems = () => {\n        mutate(\n            {\n                resource: "campaigns",\n                ids: selectedRowKeys.map(String),\n                mutationMode: "undoable",\n            },\n            {\n                onSuccess: () => {\n                    setSelectedRowKeys([]);\n                },\n            },\n        );\n    };\n\n    const hasSelected = selectedRowKeys.length > 0;\n\n    return (\n        <List\n            pageHeaderProps={{\n                subTitle: hasSelected && (\n                    <Button\n                        type="text"\n                        onClick={() => deleteSelectedItems()}\n                        loading={isLoading}\n                        icon={\n                            <Icons.DeleteOutlined style={{ color: "green" }} />\n                        }\n                    >\n                        Delete\n                    </Button>\n                ),\n                extra: (\n                    <Space>\n                        <CreateButton />\n                        <ExportButton\n                            onClick={triggerExport}\n                            loading={isExportLoading}\n                        />\n                    </Space>\n                ),\n            }}\n        >\n            <Table {...tableProps} rowSelection={rowSelection} rowKey="id">\n                <Table.Column\n                    dataIndex="id"\n                    title="ID"\n                    sorter\n                    defaultSortOrder={getDefaultSortOrder("id", sorter)}\n                    width="70px"\n                />\n                <Table.Column\n                    dataIndex="name"\n                    title="Name"\n                    sorter\n                    defaultSortOrder={getDefaultSortOrder("name", sorter)}\n                />\n                <Table.Column\n                    dataIndex="isActive"\n                    title="Active"\n                    render={(isActive) => <BooleanField value={isActive} />}\n                    sorter\n                    defaultSortOrder={getDefaultSortOrder("isActive", sorter)}\n                />\n                <Table.Column\n                    dataIndex="startDate"\n                    title="Start Date"\n                    render={(value) => <DateField value={value} format="LLL" />}\n                    sorter\n                    defaultSortOrder={getDefaultSortOrder("startDate", sorter)}\n                />\n                <Table.Column\n                    dataIndex="endDate"\n                    title="End Date"\n                    render={(value) => <DateField value={value} format="LLL" />}\n                    sorter\n                    defaultSortOrder={getDefaultSortOrder("endDate", sorter)}\n                />\n                <Table.Column<ICampaign>\n                    fixed="right"\n                    title="Actions"\n                    dataIndex="actions"\n                    render={(_, { id }) => <EditButton recordItemId={id} />}\n                />\n            </Table>\n        </List>\n    );\n};\n')),(0,o.kt)("p",null,"It is long. Because we had to handle selection and bulk delete button manually. That's because refine is decoupled from Ant Design components' code, too. But the advantage here is that you use Ant Design. You can use the Ant Design's Table as however you like, and then connect its data with refine. The point is customizability.\nAnd it looks like this:"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:l.Z,alt:"refine"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"In refine, we use Ant Design's ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/table/"},"Table")," components."),(0,o.kt)("h2",{id:"migrating-createedit-pages"},"Migrating Create/Edit Pages"),(0,o.kt)("p",null,"A resource creation page's code looked like this in React-Admin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport {\n    required,\n    Create as ReactAdminCreate,\n    SimpleForm,\n    BooleanInput,\n    TextInput,\n    DateTimeInput,\n} from "react-admin";\n\nconst Create = (props: any) => (\n    <ReactAdminCreate {...props}>\n        <SimpleForm>\n            <TextInput\n                fullWidth\n                variant="outlined"\n                source="name"\n                validate={[required()]}\n            />\n            <BooleanInput\n                fullWidth\n                variant="outlined"\n                source="isActive"\n                label="Active"\n            />\n            <DateTimeInput\n                source="startDate"\n                label="Start Date"\n                validate={[required()]}\n                fullWidth\n                variant="outlined"\n            />\n            <DateTimeInput\n                source="endDate"\n                label="End Date"\n                validate={[required()]}\n                fullWidth\n                variant="outlined"\n            />\n        </SimpleForm>\n    </ReactAdminCreate>\n);\n\nexport default Create;\n')),(0,o.kt)("p",null,"And it looks like this:"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"data:image/png;base64,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",alt:"react-admin"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"For refine, code of our campaign create page looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    Create,\n    DatePicker,\n    Form,\n    Input,\n    IResourceComponentsProps,\n    Switch,\n    useForm,\n} from "@pankod/refine";\nimport dayjs from "dayjs";\n\nexport const CampaignsCreate: React.FC<IResourceComponentsProps> = () => {\n    const { formProps, saveButtonProps } = useForm();\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <Form\n                {...formProps}\n                layout="vertical"\n                initialValues={{ isActive: false }}\n            >\n                <Form.Item\n                    label="Name"\n                    name="name"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item\n                    label="Is Active"\n                    name="isActive"\n                    valuePropName="checked"\n                >\n                    <Switch />\n                </Form.Item>\n                <Form.Item\n                    label="Start Date"\n                    name="startDate"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                    getValueProps={(value) => dayjs(value)}\n                >\n                    <DatePicker />\n                </Form.Item>\n                <Form.Item\n                    label="End Date"\n                    name="endDate"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                    getValueProps={(value) => dayjs(value)}\n                >\n                    <DatePicker />\n                </Form.Item>\n            </Form>\n        </Create>\n    );\n};\n')),(0,o.kt)("p",null,"In both refine and React-Admin, by default, there aren't much differences between new resource page's code and resource edit page's code."),(0,o.kt)("p",null,"Also note that for both refine and React-Admin, this is all customizable. These code examples and screenshots mean little or no extra customization in resource list/create/edit pages."),(0,o.kt)("p",null,"Advantage of refine is that you use Ant Design directly. Let's assume you have your own way around your Ant Design application. refine doesn't interfere. Instead, it provides you the necessary data for your Ant Design application. This way, refine gives you all the freedom to customize all the components as you wish."),(0,o.kt)("p",null,"Happy hacking with refine \ud83e\ude84"))}g.isMDXComponent=!0},65334:function(e,t,n){t.Z=n.p+"assets/images/react_admin-bfff3110dca92d84b071e79c0416e891.png"},12199:function(e,t,n){t.Z=n.p+"assets/images/refine_table-8b64c16814027309aa1ac5307b3f3b14.png"}}]);