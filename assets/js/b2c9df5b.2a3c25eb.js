"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71615],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||g[h]||i;return n?a.createElement(m,r(r({ref:e},u),{},{components:n})):a.createElement(m,r({ref:e},u))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25742:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));n(39449),n(35175),n(2563),n(84077),n(66722),n(23404),n(45962),n(20172),n(46237);const i={title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",slug:"nextauth-google-github-authentication-nextjs",authors:"ekekenta_clinton",tags:["nextjs","nextauth","github-authentication","google-authentication","oauth"],image:"/img/blog/2022-08-18-auth-with-nextauth/social.png",social_image:"/img/blog/2022-08-18-auth-with-nextauth/social.png",hide_table_of_contents:!1},r=void 0,s={permalink:"/blog/nextauth-google-github-authentication-nextjs",source:"@site/blog/2022-08-18-auth-with-nextauth.md",title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",date:"2022-08-18T00:00:00.000Z",formattedDate:"August 18, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"nextauth",permalink:"/blog/tags/nextauth"},{label:"github-authentication",permalink:"/blog/tags/github-authentication"},{label:"google-authentication",permalink:"/blog/tags/google-authentication"},{label:"oauth",permalink:"/blog/tags/oauth"}],readingTime:14.03,hasTruncateMarker:!0,authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],frontMatter:{title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",slug:"nextauth-google-github-authentication-nextjs",authors:"ekekenta_clinton",tags:["nextjs","nextauth","github-authentication","google-authentication","oauth"],image:"/img/blog/2022-08-18-auth-with-nextauth/social.png",social_image:"/img/blog/2022-08-18-auth-with-nextauth/social.png",hide_table_of_contents:!1},prevItem:{title:"Temporal API - A new approach to managing Date and Time in JS",permalink:"/blog/temporal-date-api"},nextItem:{title:"Nextjs image optimization with examples",permalink:"/blog/using-next-image"},relatedPosts:[{title:"Build a Progressive Web App (PWA) with Next.js",permalink:"/blog/next-js-pwa",formattedDate:"September 11, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:18.615,date:"2022-09-11T00:00:00.000Z"},{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component",formattedDate:"September 4, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:8.815,date:"2022-09-04T00:00:00.000Z"},{title:"Next.js 13 - What are the new features?",permalink:"/blog/new-features-in-next-js-13",formattedDate:"November 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:6.18,date:"2022-11-12T00:00:00.000Z"}],authorPosts:[{title:"How to create a CRUD app with SvelteKit",permalink:"/blog/sveltekit-crud-app-with-svelte-mui",formattedDate:"September 2, 2022",authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],readingTime:10.495,date:"2022-09-02T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2}],u={toc:c};function g(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"We know how exhausting and time-consuming it can be to set up authentication, which includes handling databases, cookies, JWT, sessions, etc., on your own.\nThe goal of this article is for you to learn about an alternative and simple tool (NextAuth), which we will use to easily add Google and GitHub authentication to our application."))}g.isMDXComponent=!0},39449:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/auth-client-created-bea58506d4d82d6d402123d0c8edad67.png"},45962:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/github_client_secrets-d8de7473a0f966e3dbdfb91712949ae4.png"},23404:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/github_register_enable-acedc286c604a96a2047489ac9fc090b.png"},35175:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/google-create-61a8a513c2fd6c3a87d332a47e4954d5.jpeg"},2563:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/google-select-auth-255f763b224e25d1c9d4c3ab954730c2.png"},84077:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/google-select-project-713037e728359e9631d144771e5c2805.png"},66722:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/google-select-type-f440789091fdc14cbd6d6dc1e7b1cc08.png"},20172:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/result_view-c3fd501317ac1759bdaa7869958efb58.png"},46237:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/result_with_sign-2853350dc8f7c65c9d267916c41f0329.png"}}]);