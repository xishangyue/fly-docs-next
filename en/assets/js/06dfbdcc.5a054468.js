"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["63616"],{14755:function(e,n,t){t.d(n,{ZP:function(){return s},d$:function(){return o}});var i=t(52676),r=t(79938);let o=[];function a(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Katapult was originally named CanBoot, and later renamed to katapult."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After burning the firmware using methods like DFU, you can use commands to update the firmware with one click."}),"\n",(0,i.jsx)(n.li,{children:"Advantage: Quickly double-clicking the reset button or quickly cutting power twice will enter the Katapult firmware, at which point there will be an LED flashing on the mainboard."}),"\n",(0,i.jsx)(n.li,{children:"Katapult firmware can only be used to burn firmware and cannot connect to Klipper!!!"}),"\n",(0,i.jsxs)(n.li,{children:["Katapult firmware supports three connection methods for connecting to the host computer, and the firmwares for these three methods are independent of each other.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["CAN connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can directly update the firmware using a command, and it has strong interference resistance."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["RS232 connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can update the firmware using a command, and it has very strong interference resistance."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: You cannot use a command to update the firmware with one click; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["USB connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can directly update the firmware using a command."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: A long data cable is prone to interference, which may lead to disconnection."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function s(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},76116:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>s});var i=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/flash/index","title":"index","description":"* SB2040 PRO comes pre-flashed with Katapult firmware for CAN connection at a rate of 1M","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/flash/index.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/flash","slug":"/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/flash/","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/flash/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/flash/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Firmware Burning Instructions"},"sidebar":"tutorialSidebar","previous":{"title":"SB2040 PRO\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55","permalink":"/fly-docs-next/en/docs/category/sb2040-pro\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55"},"next":{"title":"CAN Firmware Burning","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/flash/can"}}'),r=t("52676"),o=t("79938"),a=t("14755");let s={sidebar_position:1,sidebar_label:"Firmware Burning Instructions"},l="Firmware Burning Instructions",c={},d=[{value:"How to Determine Which Firmware You Need",id:"how-to-determine-which-firmware-you-need",level:2},{value:"Katapult Firmware Description",id:"katapult-firmware-description",level:2},...a.d$];function u(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,o.a)(),...e.components},{ImageView:i}=n;return!i&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SB2040 PRO comes pre-flashed with Katapult firmware for CAN connection at a rate of 1M"}),"\n",(0,r.jsx)(n.li,{children:"SB2040 PRO CAN-connected Katapult firmware rates are available at 500K and 1M, which can be burned if needed"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/flash/bl",title:"Click to jump",children:"Katapult Firmware Burning"})}),"\n"]})}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"firmware-burning-instructions",children:"Firmware Burning Instructions"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SB2040 PRO can be connected to the host computer via CAN connection"}),"\n",(0,r.jsxs)(n.li,{children:["CAN needs to be connected using ",(0,r.jsx)(n.code,{children:"XT30(2+2)-F"})]}),"\n",(0,r.jsxs)(n.li,{children:["Below is the style of ",(0,r.jsx)(n.code,{children:"XT30(2+2)-F"})," data cable"]}),"\n"]}),"\n",(0,r.jsx)(i,{image:t(68827).Z,size:"80%",align:"left"}),"\n",(0,r.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Mainboard firmware burning needs to be done through Katapult burning Klipper"}),"\n",(0,r.jsx)(n.li,{children:"If it is confirmed that the mainboard has been burned with Katapult, there is no need to burn the last Katapult firmware, which is just a precaution in case the mainboard's Katapult firmware was not burned successfully"}),"\n",(0,r.jsx)(n.li,{children:"You can quickly press the reset button twice to see if there is an LED flashing on the mainboard, if so, it means the mainboard has entered Katapult firmware"}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"how-to-determine-which-firmware-you-need",children:"How to Determine Which Firmware You Need"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SB2040 PRO can be connected to the host computer in the following ways"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/flash/can",title:"Click to jump",children:"CAN Firmware"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Advantage: If ",(0,r.jsx)(n.code,{children:"Katapult"})," firmware is flashed, the firmware can be updated without touching the mainboard, and bus connection is supported"]}),"\n",(0,r.jsxs)(n.li,{children:["Disadvantage: Using ",(0,r.jsx)(n.code,{children:"KlipperScreen"})," together may cause positioning timeout and other errors."]}),"\n",(0,r.jsx)(n.li,{children:"Tip: If CAN is needed, please make sure the host computer supports CAN, and it needs to be paired with UTOC or a mainboard with bridging firmware flashed"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"katapult-firmware-description",children:"Katapult Firmware Description"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SB2040 PRO comes with Katapult firmware for CAN connection at a rate of 1M by default"}),"\n"]}),"\n",(0,r.jsx)(a.ZP,{})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},68827:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/xt30-742629a50a3b92c13e2f62b56ee806a9.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var i=t(75271);let r={},o=i.createContext(r);function a(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);