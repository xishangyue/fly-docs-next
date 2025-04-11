"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["21324"],{49237:function(e,n,t){t.d(n,{ZP:function(){return s},d$:function(){return a}});var i=t(85893),r=t(50065);let a=[];function o(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Katapult was originally named CanBoot, and later renamed to katapult."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After burning the firmware using methods like DFU, you can use commands to update the firmware with one click."}),"\n",(0,i.jsx)(n.li,{children:"Advantage: Quickly double-clicking the reset button or quickly cutting power twice will enter the Katapult firmware, at which point there will be an LED flashing on the mainboard."}),"\n",(0,i.jsx)(n.li,{children:"Katapult firmware can only be used to burn firmware and cannot connect to Klipper!!!"}),"\n",(0,i.jsxs)(n.li,{children:["Katapult firmware supports three connection methods for connecting to the host computer, and the firmwares for these three methods are independent of each other.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["CAN connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can directly update the firmware using a command, and it has strong interference resistance."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["RS232 connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can update the firmware using a command, and it has very strong interference resistance."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: You cannot use a command to update the firmware with one click; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["USB connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can directly update the firmware using a command."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: A long data cable is prone to interference, which may lead to disconnection."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function s(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},80121:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-d/fly-dp5/flash/index","title":"index","description":"* If this is your first time reading this document, you need to manually burn the BL before burning the firmware.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-d/fly-dp5/flash/index.mdx","sourceDirName":"ProductDoc/MainBoard/fly-d/fly-dp5/flash","slug":"/ProductDoc/MainBoard/fly-d/fly-dp5/flash/","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-d/fly-dp5/flash/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-d/fly-dp5/flash/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Firmware Burning Instructions"},"sidebar":"tutorialSidebar","previous":{"title":"DP5\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55","permalink":"/fly-docs-next/en/docs/category/dp5\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55"},"next":{"title":"USB Firmware Burning","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-d/fly-dp5/flash/usb"}}'),r=t("85893"),a=t("50065");t("49237");let o={sidebar_position:1,sidebar_label:"Firmware Burning Instructions"},s="Firmware Burning Instructions",l={},d=[{value:"How to Determine Which Firmware You Need",id:"how-to-determine-which-firmware-you-need",level:2}];function c(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,a.a)(),...e.components},{Button:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Button",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"Notes",type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If this is your first time reading this document, you need to manually burn the BL before burning the firmware."}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(t,{variant:"contained",disableElevation:!0,href:"./usb",children:"BL Firmware Burning"}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Once you have burned the BL, there is no need to burn it again."}),"\n",(0,r.jsx)(n.li,{children:"The BL of DP5 is Katapult firmware."}),"\n"]})}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"firmware-burning-instructions",children:"Firmware Burning Instructions"})}),"\n",(0,r.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The mainboard firmware burning needs to be done through Katapult to burn Klipper."}),"\n",(0,r.jsx)(n.li,{children:"If you are sure that the mainboard has already been burned with Katapult, there is no need to perform the last firmware burning of Katapult, as that is just a precaution in case the Katapult firmware was not successfully burned."}),"\n",(0,r.jsx)(n.li,{children:"You can quickly press the reset button twice and see if an LED on the mainboard flashes. If it does, it indicates that the mainboard has entered the Katapult firmware."}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"how-to-determine-which-firmware-you-need",children:"How to Determine Which Firmware You Need"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Please note that you only need to burn one type of firmware."}),"\n"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"DP5 can use the following method to connect to the host computer"}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(t,{variant:"contained",disableElevation:!0,href:"./usb",children:"USB Firmware"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advantages: Reliable and stable communication"}),"\n",(0,r.jsx)(n.li,{children:"Disadvantages: May affect data transmission if multiple USB devices are present"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(t,{variant:"contained",disableElevation:!0,href:"./can",children:"USB Bridge Firmware"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advantages: Can connect multiple devices without occupying USB ports"}),"\n",(0,r.jsxs)(n.li,{children:["Disadvantages: May cause positioning timeouts or other errors when used with ",(0,r.jsx)(n.code,{children:"KlipperScreen"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var i=t(67294);let r={},a=i.createContext(r);function o(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);