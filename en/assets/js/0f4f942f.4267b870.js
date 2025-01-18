"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["94840"],{68792:function(e,r,n){n.r(r),n.d(r,{metadata:()=>i,contentTitle:()=>d,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>s});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-super/fly-super8-pro/warning","title":"Main Board Precautions","description":"Power Indicator","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-super/fly-super8-pro/warning.mdx","sourceDirName":"ProductDoc/MainBoard/fly-super/fly-super8-pro","slug":"/ProductDoc/MainBoard/fly-super/fly-super8-pro/warning","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super8-pro/warning","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-super/fly-super8-pro/warning.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8,"sidebar_label":"Main Board Precautions"},"sidebar":"tutorialSidebar","previous":{"title":"3D Models and Schematics","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super8-pro/schematic"},"next":{"title":"External Drive User Guide","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super8-pro/servo-drive"}}'),t=n("52676"),o=n("79938");let s={sidebar_position:8,sidebar_label:"Main Board Precautions"},d="Main Board Precautions",c={},l=[{value:"Power Indicator",id:"power-indicator",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Drivers",id:"drivers",level:2},{value:"Limit Switches",id:"limit-switches",level:2},{value:"Firmware Burning",id:"firmware-burning",level:2}];function a(e){let r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ul:"ul",...(0,o.a)(),...e.components},{Button:i,ImageView:s}=r;return!i&&h("Button",!0),!s&&h("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"main-board-precautions",children:"Main Board Precautions"})}),"\n",(0,t.jsx)(r.h2,{id:"power-indicator",children:"Power Indicator"}),"\n",(0,t.jsx)(s,{image:n(79061).Z,size:"80%",align:"center"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["When powered only through TYPE-C without connecting other motherboard power, at least two lights ",(0,t.jsx)(r.code,{children:"3.3V"})," and ",(0,t.jsx)(r.code,{children:"5V"})," should be on."]}),"\n",(0,t.jsxs)(r.li,{children:["After connecting to the motherboard power, the motherboard power light should illuminate ",(0,t.jsx)(r.code,{children:"3.3V"}),", ",(0,t.jsx)(r.code,{children:"5V"}),", and ",(0,t.jsx)(r.code,{children:"12V"}),"."]}),"\n",(0,t.jsx)(r.li,{children:"The power indicator on the bottom left of the motherboard will only light up normally after the driver power 0-2, driver power 3-7, and hotbed power are connected."}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(r.admonition,{title:"Notice",type:"danger",children:(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"With no external devices connected (drivers, limit switches, 12864, etc.)"}),"\n",(0,t.jsxs)(r.li,{children:["At least two LEDs, ",(0,t.jsx)(r.code,{children:"3.3V"})," and ",(0,t.jsx)(r.code,{children:"5V"}),", should remain constantly on when powered only through TYPE-C."]}),"\n"]})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["If ",(0,t.jsx)(r.code,{children:"3.3V"})," and ",(0,t.jsx)(r.code,{children:"5V"})," do not light up, please check the motherboard's 5V jumper."]}),"\n",(0,t.jsx)(r.li,{children:"If the issue persists after changing the jumper and confirming that the TYPE-C is supplying power correctly, contact customer service."}),"\n",(0,t.jsxs)(r.li,{children:["If one of the lights ",(0,t.jsx)(r.code,{children:"3.3V"}),", ",(0,t.jsx)(r.code,{children:"5V"}),", or ",(0,t.jsx)(r.code,{children:"12V"})," is blinking, it indicates a chip short circuit, and you need to contact customer service.","\n",(0,t.jsx)(s,{image:n(62076).Z,size:"60%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"drivers",children:"Drivers"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Pay attention to the driver power, which is divided into two routes: the first route powers drivers 3-7, and the second route powers 0-2."}),"\n",(0,t.jsxs)(r.li,{children:["The motherboard supports external drivers     ",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/ModuleDrive/servo-drive",children:"Wiring and Configuration Guide"})]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"limit-switches",children:"Limit Switches"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Except for the last driver port (Drive7), which has an infinite limit switch, all other driver ports have infinite limits directly connected to the limit switch."}),"\n",(0,t.jsxs)(r.li,{children:["If the limit switch does not work, you can replace the limit switch or cut off the infinite limit pin of the driver.","\n",(0,t.jsx)(s,{image:n(8102).Z,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"firmware-burning",children:"Firmware Burning"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"The motherboard uses an SD card for burning."}),"\n",(0,t.jsxs)(r.li,{children:["Due to tutorial issues, DFU was previously used for burning. If you need to update the firmware, you need to ",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/MainBoard/fly-super/fly-super8-pro/flash/bl",children:"re-burn BL"}),"."]}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}function h(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},62076:function(e,r,n){n.d(r,{Z:function(){return i}});let i=n.p+"assets/images/5v-916d0083486c4fe769f9672e0ae6bbb5.webp"},79061:function(e,r,n){n.d(r,{Z:function(){return i}});let i=n.p+"assets/images/power-129fdd9a4eaa9833ca9a9c5bdaa4decb.webp"},8102:function(e,r,n){n.d(r,{Z:function(){return i}});let i=n.p+"assets/images/2209diag-262cd788fbf99f89f3dfc8ec68d68e8c.webp"},79938:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return s}});var i=n(75271);let t={},o=i.createContext(t);function s(e){let r=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);