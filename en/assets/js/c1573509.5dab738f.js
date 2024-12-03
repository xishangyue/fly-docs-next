"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["8884"],{30328:function(e,i,n){n.r(i),n.d(i,{metadata:()=>r,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>s});var r=JSON.parse('{"id":"DebugDoc/faq/servo-drive","title":"External Drive Usage Tutorial","description":"Precautions","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/DebugDoc/faq/servo-drive.mdx","sourceDirName":"DebugDoc/faq","slug":"/DebugDoc/faq/servo-drive","permalink":"/fly-docs-next/en/docs/DebugDoc/faq/servo-drive","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/faq/servo-drive.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"External Drive Usage Tutorial"},"sidebar":"debugdocSidebar","previous":{"title":"Accelerometer Usage","permalink":"/fly-docs-next/en/docs/DebugDoc/faq/kipper-adxl"},"next":{"title":"Klipper \u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/en/docs/category/klipper-\u53C2\u8003\u914D\u7F6E"}}'),t=n("52676"),o=n("79938");let s={sidebar_position:6,sidebar_label:"External Drive Usage Tutorial"},l="External Drive Usage Tutorial",c={},d=[{value:"Precautions",id:"precautions",level:2},{value:"Drive Wiring",id:"drive-wiring",level:2},{value:"Drive Microstepping Jumper",id:"drive-microstepping-jumper",level:2},{value:"Built-in DIP Switch on the Drive",id:"built-in-dip-switch-on-the-drive",level:2},{value:"Klipper Reference Configuration",id:"klipper-reference-configuration",level:2},{value:"Pulse Explanation for the Driver",id:"pulse-explanation-for-the-driver",level:2}];function a(e){let i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,o.a)(),...e.components},{ImageView:r}=i;return!r&&function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"external-drive-usage-tutorial",children:"External Drive Usage Tutorial"})}),"\n",(0,t.jsx)(i.h2,{id:"precautions",children:"Precautions"}),"\n",(0,t.jsx)(i.admonition,{title:"Notice",type:"danger",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"This tutorial is based on Klipper for control"}),"\n",(0,t.jsx)(i.li,{children:"The module uses common anode wiring"}),"\n"]})}),"\n",(0,t.jsx)(i.h2,{id:"drive-wiring",children:"Drive Wiring"}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Only one of the following two methods needs to be selected"}),"\n"]})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["First wiring method","\n",(0,t.jsx)(r,{image:n(89504).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["Second wiring method","\n",(0,t.jsx)(r,{image:n(2011).Z,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"drive-microstepping-jumper",children:"Drive Microstepping Jumper"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"No drive jumpering is required!!!"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"built-in-dip-switch-on-the-drive",children:"Built-in DIP Switch on the Drive"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["It is recommended to use ",(0,t.jsx)(i.code,{children:"3200"})," for the built-in DIP switch on the drive","\n",(0,t.jsx)(r,{image:n(38476).Z,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"klipper-reference-configuration",children:"Klipper Reference Configuration"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Disable the corresponding driver configuration, such as ",(0,t.jsx)(i.code,{children:"[tmc5160 stepper_x]"})," or ",(0,t.jsx)(i.code,{children:"[tmc2209 stepper_x]"})]}),"\n",(0,t.jsxs)(i.li,{children:["Set ",(0,t.jsx)(i.code,{children:"microsteps:"})," to ",(0,t.jsx)(i.code,{children:"16"})]}),"\n",(0,t.jsxs)(i.li,{children:["Add ",(0,t.jsx)(i.code,{children:"step_pulse_duration: 0.000004"}),"\n",(0,t.jsx)(r,{image:n(86551).Z,size:"50%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"pulse-explanation-for-the-driver",children:"Pulse Explanation for the Driver"}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["If the configuration is correct but the model prints with offset, modify ",(0,t.jsx)(i.code,{children:"step_pulse_duration: 0.000004"})]}),"\n",(0,t.jsxs)(i.li,{children:["Increase this value ",(0,t.jsx)(i.code,{children:"0.000004"}),", for example, to ",(0,t.jsx)(i.code,{children:"0.000005"})," or ",(0,t.jsx)(i.code,{children:"0.000006"}),", etc."]}),"\n"]})})]})}function u(e={}){let{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},38476:function(e,i,n){n.d(i,{Z:function(){return r}});let r=n.p+"assets/images/3200-90389335486da9dbe4e6bc7192195ed7.webp"},86551:function(e,i,n){n.d(i,{Z:function(){return r}});let r=n.p+"assets/images/cfg-c846a7c1213c6627f65f79785f7e8b5a.webp"},2011:function(e,i,n){n.d(i,{Z:function(){return r}});let r=n.p+"assets/images/servo-drive-1-923096e333773e70b8548bc877b7a703.webp"},89504:function(e,i,n){n.d(i,{Z:function(){return r}});let r=n.p+"assets/images/servo-drive-b62797ceccb01c160f3ad6c50728b289.webp"},79938:function(e,i,n){n.d(i,{Z:function(){return l},a:function(){return s}});var r=n(75271);let t={},o=r.createContext(t);function s(e){let i=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);