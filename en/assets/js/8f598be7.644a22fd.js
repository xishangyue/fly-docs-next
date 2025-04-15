"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["61448"],{80299:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>s,contentTitle:()=>a});var t=JSON.parse('{"id":"ProductDoc/MainBoard/fly-d/fly-dp5/warning","title":"Mainboard Precautions","description":"Power Indicator Light","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-d/fly-dp5/warning.mdx","sourceDirName":"ProductDoc/MainBoard/fly-d/fly-dp5","slug":"/ProductDoc/MainBoard/fly-d/fly-dp5/warning","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-d/fly-dp5/warning","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-d/fly-dp5/warning.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10,"sidebar_label":"Mainboard Precautions"},"sidebar":"tutorialSidebar","previous":{"title":"Marlin Firmware Download","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-d/fly-dp5/marlin"},"next":{"title":"\u914D\u7F6Eled","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-d/fly-dp5/led"}}'),r=i("85893"),o=i("50065");let d={sidebar_position:10,sidebar_label:"Mainboard Precautions"},a="Mainboard Precautions",l={},s=[{value:"Power Indicator Light",id:"power-indicator-light",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Driver",id:"driver",level:2},{value:"Limit Switch Port",id:"limit-switch-port",level:2},{value:"Firmware",id:"firmware",level:2}];function c(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ul:"ul",...(0,o.a)(),...e.components},{Button:t,ImageView:d}=n;return t||u("Button",!0),d||u("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"mainboard-precautions",children:"Mainboard Precautions"})}),"\n",(0,r.jsx)(n.h2,{id:"power-indicator-light",children:"Power Indicator Light"}),"\n",(0,r.jsx)(d,{image:i(88557).Z,size:"80%",align:"center"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["When powered only through TYPE-C without connecting to other mainboard power, at least two lights should be on: ",(0,r.jsx)(n.code,{children:"3.3V"})," and ",(0,r.jsx)(n.code,{children:"5V"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["After connecting to mainboard power, the mainboard power light should illuminate ",(0,r.jsx)(n.code,{children:"3.3V"}),", ",(0,r.jsx)(n.code,{children:"5V"}),", and ",(0,r.jsx)(n.code,{children:"VCC"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"In the absence of any external devices (drivers, limit switches, 12864, etc.)"}),"\n",(0,r.jsxs)(n.li,{children:["When powered only through TYPE-C, at least two LEDs, ",(0,r.jsx)(n.code,{children:"3.3V"})," and ",(0,r.jsx)(n.code,{children:"5V"}),", should remain constantly lit."]}),"\n"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If no lights come on, it indicates a short circuit; contact customer service for assistance."}),"\n",(0,r.jsxs)(n.li,{children:["If one of the ",(0,r.jsx)(n.code,{children:"3.3V"})," or ",(0,r.jsx)(n.code,{children:"5V"})," lights is blinking, it indicates a short circuit; contact customer service for assistance."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"driver",children:"Driver"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The mainboard supports external drivers     ",(0,r.jsx)(t,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/ModuleDrive/servo-drive",children:"Wiring and Configuration Guide"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"limit-switch-port",children:"Limit Switch Port"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Pay attention to the wiring sequence. For three-wire limit switches, if the 5V, GND, and S are connected incorrectly, it may cause damage to the mainboard."}),"\n",(0,r.jsx)(n.li,{children:"If using a two-wire connection, connect S and GND directly."}),"\n",(0,r.jsx)(n.li,{children:"PL08 and other proximity switches require an external diode to reduce the voltage to below 3.3V at the signal port."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"firmware",children:"Firmware"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Due to button issues, the tutorial has been updated to use Katapult firmware for firmware flashing."}),"\n",(0,r.jsx)(n.li,{children:"It is recommended to use a computer to flash Katapult firmware and then use Katapult firmware to flash Klipper."}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(t,{variant:"contained",disableElevation:!0,href:"./flash/bl",children:"BL Flashing"}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function u(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},88557:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/power-db8bc21f0554541a283f05bbe759b7f8.webp"},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return d}});var t=i(67294);let r={},o=t.createContext(r);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);