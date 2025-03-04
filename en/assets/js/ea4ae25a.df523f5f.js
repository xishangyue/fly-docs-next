"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["40916"],{30328:function(e,i,n){n.r(i),n.d(i,{metadata:()=>r,contentTitle:()=>d,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>s});var r=JSON.parse('{"id":"DebugDoc/faq/servo-drive","title":"External Drive Usage Guide","description":"Precautions","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/DebugDoc/faq/servo-drive.mdx","sourceDirName":"DebugDoc/faq","slug":"/DebugDoc/faq/servo-drive","permalink":"/fly-docs-next/en/docs/DebugDoc/faq/servo-drive","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/faq/servo-drive.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"External Drive Usage Guide"},"sidebar":"debugdocSidebar","previous":{"title":"Accelerometer Usage","permalink":"/fly-docs-next/en/docs/DebugDoc/faq/kipper-adxl"},"next":{"title":"Klipper \u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/en/docs/category/klipper-\u53C2\u8003\u914D\u7F6E"}}'),t=n("52676"),o=n("79938");let s={sidebar_position:6,sidebar_label:"External Drive Usage Guide"},d="External Drive Usage Guide",l={},c=[{value:"Precautions",id:"precautions",level:2},{value:"Drive Wiring",id:"drive-wiring",level:2},{value:"Drive Microstepping Jumper",id:"drive-microstepping-jumper",level:2},{value:"Built-in Drive DIP Switch",id:"built-in-drive-dip-switch",level:2},{value:"Klipper Reference Configuration",id:"klipper-reference-configuration",level:2},{value:"Drive Pulse Explanation",id:"drive-pulse-explanation",level:2}];function a(e){let i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,o.a)(),...e.components},{ImageView:r}=i;return!r&&function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"external-drive-usage-guide",children:"External Drive Usage Guide"})}),"\n",(0,t.jsx)(i.h2,{id:"precautions",children:"Precautions"}),"\n",(0,t.jsx)(i.admonition,{title:"Notice",type:"danger",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"This tutorial is based on Klipper control"}),"\n",(0,t.jsx)(i.li,{children:"The module uses common anode wiring"}),"\n"]})}),"\n",(0,t.jsx)(i.h2,{id:"drive-wiring",children:"Drive Wiring"}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Only one of the following two methods is needed"}),"\n"]})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["First wiring method","\n",(0,t.jsx)(r,{image:n(89504).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["Second wiring method","\n",(0,t.jsx)(r,{image:n(2011).Z,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"drive-microstepping-jumper",children:"Drive Microstepping Jumper"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"No drive jumpers are needed!!!"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"built-in-drive-dip-switch",children:"Built-in Drive DIP Switch"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["It is recommended to use ",(0,t.jsx)(i.code,{children:"3200"})," for the built-in drive DIP switch","\n",(0,t.jsx)(r,{image:n(38476).Z,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"klipper-reference-configuration",children:"Klipper Reference Configuration"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["The corresponding drive configuration needs to be disabled, such as ",(0,t.jsx)(i.code,{children:"[tmc5160 stepper_x]"})," or ",(0,t.jsx)(i.code,{children:"[tmc2209 stepper_x]"})]}),"\n",(0,t.jsxs)(i.li,{children:["Set ",(0,t.jsx)(i.code,{children:"microsteps:"})," to ",(0,t.jsx)(i.code,{children:"16"})]}),"\n",(0,t.jsxs)(i.li,{children:["Add ",(0,t.jsx)(i.code,{children:"step_pulse_duration: 0.000004"})]}),"\n",(0,t.jsxs)(i.li,{children:["Motor enable: Remove the ",(0,t.jsx)(i.code,{children:"!"})," in ",(0,t.jsx)(i.code,{children:"enable_pin:!"}),"\n",(0,t.jsx)(r,{image:n(86551).Z,size:"50%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"drive-pulse-explanation",children:"Drive Pulse Explanation"}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Model misalignment may occur during printing"}),"\n",(0,t.jsx)(i.li,{children:"Motor vibration, unusual noises, various strange issues"}),"\n",(0,t.jsxs)(i.li,{children:["You can modify ",(0,t.jsx)(i.code,{children:"step_pulse_duration: 0.000004"})]}),"\n",(0,t.jsxs)(i.li,{children:["Increase this value to ",(0,t.jsx)(i.code,{children:"0.000009"}),", for example, ",(0,t.jsx)(i.code,{children:"0.00001"})," or ",(0,t.jsx)(i.code,{children:"0.00002"}),", etc."]}),"\n"]})})]})}function u(e={}){let{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},3771:function(e,i,n){n.r(i),n.d(i,{metadata:()=>r,contentTitle:()=>d,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>s});var r=JSON.parse('{"id":"ProductDoc/MainBoard/fly-pro/fly-pro-x10/servo-drive","title":"External Drive Usage Tutorial","description":"The document is being edited, stay tuned.....","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-pro/fly-pro-x10/servo-drive.mdx","sourceDirName":"ProductDoc/MainBoard/fly-pro/fly-pro-x10","slug":"/ProductDoc/MainBoard/fly-pro/fly-pro-x10/servo-drive","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-pro/fly-pro-x10/servo-drive","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-pro/fly-pro-x10/servo-drive.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10,"sidebar_label":"External Drive Usage Tutorial"},"sidebar":"tutorialSidebar","previous":{"title":"3D Models and Schematics","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-pro/fly-pro-x10/schematic"},"next":{"title":"Mainboard Precautions","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-pro/fly-pro-x10/warning"}}'),t=n("52676"),o=n("79938");n("30328");let s={sidebar_position:10,sidebar_label:"External Drive Usage Tutorial"},d="External Drive Usage Tutorial",l={},c=[];function a(e){let i={admonition:"admonition",h1:"h1",header:"header",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"external-drive-usage-tutorial",children:"External Drive Usage Tutorial"})}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"The document is being edited, stay tuned....."})})})]})}function u(e={}){let{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},38476:function(e,i,n){n.d(i,{Z:function(){return r}});let r=n.p+"assets/images/3200-90389335486da9dbe4e6bc7192195ed7.webp"},86551:function(e,i,n){n.d(i,{Z:function(){return r}});let r=n.p+"assets/images/cfg-c846a7c1213c6627f65f79785f7e8b5a.webp"},2011:function(e,i,n){n.d(i,{Z:function(){return r}});let r=n.p+"assets/images/servo-drive-1-923096e333773e70b8548bc877b7a703.webp"},89504:function(e,i,n){n.d(i,{Z:function(){return r}});let r=n.p+"assets/images/servo-drive-b62797ceccb01c160f3ad6c50728b289.webp"},79938:function(e,i,n){n.d(i,{Z:function(){return d},a:function(){return s}});var r=n(75271);let t={},o=r.createContext(t);function s(e){let i=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);