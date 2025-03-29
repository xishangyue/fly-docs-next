"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["8327"],{98728:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"DebugDoc/BasicTutorial/camera","title":"Adding a USB Camera","description":"* The crowsnest service needs to be installed. If not installed on systems like lite2 and mini pad.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/DebugDoc/BasicTutorial/camera.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/camera","permalink":"/fly-docs-next/en/docs/DebugDoc/BasicTutorial/camera","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/camera.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"Adding a USB Camera"},"sidebar":"debugdocSidebar","previous":{"title":"System Crash Backup Configuration Method","permalink":"/fly-docs-next/en/docs/DebugDoc/BasicTutorial/backup"},"next":{"title":"KlipperScreen Extended Functions","permalink":"/fly-docs-next/en/docs/DebugDoc/BasicTutorial/klipperscreen"}}'),a=i("74132"),s=i("94551");let r={sidebar_position:6,sidebar_label:"Adding a USB Camera"},c="Adding a USB Camera",d={},l=[{value:"Open Configuration",id:"open-configuration",level:2},{value:"Search for Camera ID",id:"search-for-camera-id",level:2},{value:"Add ID",id:"add-id",level:2},{value:"Enable Camera",id:"enable-camera",level:2},{value:"Check if Enabled",id:"check-if-enabled",level:2}];function o(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components},{ImageView:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"adding-a-usb-camera",children:"Adding a USB Camera"})}),"\n",(0,a.jsx)(n.admonition,{title:"Note",type:"danger",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"crowsnest"})," service needs to be installed. If not installed on systems like lite2 and mini pad."]}),"\n",(0,a.jsx)(n.li,{children:"A plug-and-play camera without the need for drivers is required. These cameras are supported by klipper under linux, armbian, etc., without the need for additional driver installation."}),"\n",(0,a.jsx)(n.li,{children:"This tutorial uses the latest klipper, crowsnest, fuidd as an example. If using other methods, you will need to research on your own."}),"\n"]})}),"\n",(0,a.jsx)(n.h2,{id:"open-configuration",children:"Open Configuration"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The camera ID can vary depending on the system, we just need to determine the ID that won't change."}),"\n"]})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Find the configuration file in Fuidd, then open ",(0,a.jsx)(n.code,{children:"crowsnest.conf"})]}),"\n",(0,a.jsx)(t,{image:i(85537).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Find ",(0,a.jsx)(n.code,{children:"device: "})," and delete the ID configuration after it"]}),"\n",(0,a.jsx)(t,{image:i(98264).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"search-for-camera-id",children:"Search for Camera ID"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Ensure the camera is connected to the host machine."}),"\n"]})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Click on ",(0,a.jsx)(n.code,{children:"DEVICES"})," at the top, then click ",(0,a.jsx)(n.code,{children:"VIDEO"}),", and finally click refresh","\n",(0,a.jsx)(t,{image:i(46377).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Find ",(0,a.jsx)(n.code,{children:"path_by_id"})," and copy the line following it","\n",(0,a.jsx)(t,{image:i(80597).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"add-id",children:"Add ID"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Add the ID and save the configuration","\n",(0,a.jsx)(t,{image:i(95743).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"enable-camera",children:"Enable Camera"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Click settings, select the camera, and then click add camera","\n",(0,a.jsx)(t,{image:i(6171).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Enter a preferred name and click save","\n",(0,a.jsx)(t,{image:i(19326).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"check-if-enabled",children:"Check if Enabled"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Click on the dashboard; normally, the camera feed should appear","\n",(0,a.jsx)(t,{image:i(40588).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"If it does not display, restarting the system should resolve the issue"}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},85537:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/conf-ed62c5d3c67d6ffa7049b607c5487114.webp"},98264:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/conf1-ebd689792e54725448656b348ab9f2c7.webp"},46377:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/conf2-f212fcb81ae24b4d126e7c45791f38f8.webp"},80597:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/conf3-f80f6b4227ef850143a177b7bf27e2e4.webp"},95743:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/conf4-b4bcb990e096b504ede0c708d951cb3f.webp"},6171:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/conf5-625f49f11a5b7d93a819ae7c4b7c245b.webp"},19326:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/conf6-0a166fa0bc6535d25156fc8153cdde4b.webp"},40588:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/conf7-2388d1ccd426a8ec34234afc6afbec06.webp"},94551:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return r}});var t=i(39546);let a={},s=t.createContext(a);function r(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);