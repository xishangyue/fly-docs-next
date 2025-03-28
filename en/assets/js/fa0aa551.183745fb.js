"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["2438"],{33196:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>i});var t=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sht36/sht36_pro/spi","title":"Unable to Use Onboard 5160 Driver","description":"Specific Reasons","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sht36/sht36_pro/spi.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sht36/sht36_pro","slug":"/ProductDoc/ToolBoard/fly-sht36/sht36_pro/spi","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/spi","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/spi.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8,"sidebar_label":"Solutions for SPI Usage Issues"},"sidebar":"tutorialSidebar","previous":{"title":"3D Model and Schematic Diagram","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/schematic"},"next":{"title":"FLY-SHT36-LIS3DH","permalink":"/fly-docs-next/en/docs/category/fly-sht36-lis3dh"}}'),s=o("52676"),r=o("79938");let i={sidebar_position:8,sidebar_label:"Solutions for SPI Usage Issues"},l="Unable to Use Onboard 5160 Driver",c={},a=[{value:"Specific Reasons",id:"specific-reasons",level:2},{value:"Solutions",id:"solutions",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"unable-to-use-onboard-5160-driver",children:"Unable to Use Onboard 5160 Driver"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Unable to write tmc spi 'extruder' register IHOLD_IRUN\n"})}),"\n",(0,s.jsx)(n.h2,{id:"specific-reasons",children:"Specific Reasons"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If an error message appears at the bottom when using 5160, it is due to the version issue of the host computer Arm toolchain ",(0,s.jsx)(n.code,{children:"arm-none-eabi-gcc"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"solutions",children:"Solutions"}),"\n",(0,s.jsx)(n.p,{children:"There are three solutions as follows"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Change the compilation toolchain ",(0,s.jsx)(n.code,{children:"arm-none-eabi-gcc"})," from ",(0,s.jsx)(n.code,{children:"gcc10"})," to ",(0,s.jsx)(n.code,{children:"gcc8"})]}),"\n",(0,s.jsx)(n.li,{children:"Change the host computer system"}),"\n",(0,s.jsx)(n.li,{children:"Flash the normal firmware"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For firmware download and burning, please note that the tool board needs to be able to connect to CAN normally and have CANBOOT"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Download"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ~/ && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Burn"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"python3 ~/klipper/lib/canboot/flash_can.py -f ~/FLY_Katapult/Klipper/SHT36PRO/SHT36PRO_KLIPPER_CAN-1M_v0.12.0-229-g589bd64c.bin -u <SHT36PRO_canid>\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},79938:function(e,n,o){o.d(n,{Z:function(){return l},a:function(){return i}});var t=o(75271);let s={},r=t.createContext(s);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);