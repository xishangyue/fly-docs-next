"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["47293"],{4613:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var a=r(85893);r(67294);var n=r(53367),i=r(7670),s=r(39890),l=r(84221),c=r(13687),d=r(46055);function o(e){let{year:t,posts:r}=e,i=(0,l.P)({day:"numeric",month:"long",timeZone:"UTC"}),s=e=>i.format(new Date(e));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Z,{as:"h3",id:t,children:t}),(0,a.jsx)("ul",{children:r.map(e=>(0,a.jsx)("li",{children:(0,a.jsxs)(n.Z,{to:e.metadata.permalink,children:[s(e.metadata.date)," - ",e.metadata.title]})},e.metadata.date))})]})}function h(e){let{years:t}=e;return(0,a.jsx)("section",{className:"margin-vert--lg",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:t.map((e,t)=>(0,a.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,a.jsx)(o,{...e})},t))})})})}function m(e){let{archive:t}=e,r=(0,i.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),n=(0,i.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),l=Array.from(t.blogPosts.reduce((e,t)=>{let r=t.metadata.date.split("-")[0],a=e.get(r)??[];return e.set(r,[t,...a])},new Map),e=>{let[t,r]=e;return{year:t,posts:r}});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.d,{title:r,description:n}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("header",{className:"hero hero--primary",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(d.Z,{as:"h1",className:"hero__title",children:r}),(0,a.jsx)("p",{className:"hero__subtitle",children:n})]})}),(0,a.jsx)("main",{children:l.length>0&&(0,a.jsx)(h,{years:l})})]})]})}},84221:function(e,t,r){r.d(t,{P:function(){return n}});var a=r(87262);function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{i18n:{currentLocale:t}}=(0,a.Z)(),r=function(){let{i18n:{currentLocale:e,localeConfigs:t}}=(0,a.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:r,...e})}}}]);