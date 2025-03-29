"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["64286"],{8e4:function(e,n,i){i.d(n,{ZP:function(){return a},d$:function(){return r}});var t=i(74132),o=i(94551);let r=[{value:"CAN Configuration and ID Search",id:"can-configuration-and-id-search",level:2},{value:"Precautions Before Device Search",id:"precautions-before-device-search",level:3},{value:"Device Search",id:"device-search",level:3},{value:"CAN ID Search",id:"can-id-search",level:3},{value:"CAN Issue Collection",id:"can-issue-collection",level:3},{value:"Fill in the CAN ID into the Configuration",id:"fill-in-the-can-id-into-the-configuration",level:3}];function s(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Button:r,ImageView:s}=n;return r||c("Button",!0),s||c("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"can-configuration-and-id-search",children:"CAN Configuration and ID Search"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you need to use CAN, please ensure that your host computer has performed CAN configuration."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"danger",children:(0,t.jsx)(n.p,{children:"Please ensure that the mainboard is properly connected to the host computer before proceeding with the following operations."})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Please ensure that the host computer's CAN network, the CAN rate of the bridge mainboard, and the CAN tool board rate are completely consistent."})}),"\n",(0,t.jsx)(n.h3,{id:"precautions-before-device-search",children:"Precautions Before Device Search"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Before searching for CAN IDs, please ",(0,t.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"Click to jump",children:"connect to SSH"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Please note that you must ensure you are logging into SSH via the network rather than via serial port."}),"\n",(0,t.jsx)(n.li,{children:"Ensure that the UTOC is properly connected or the mainboard has been flashed with the CAN bridge firmware, and ensure that the data cable connecting to the host computer has data transmission capability."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"device-search",children:"Device Search"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Now that you have successfully logged into the host computer, you can enter ",(0,t.jsx)(n.code,{children:"lsusb"})," to search for devices. This will result in one of the following scenarios:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If entering ",(0,t.jsx)(n.code,{children:"lsusb"})," prompts that the ",(0,t.jsx)(n.code,{children:"ls"})," command is not found, you can enter the following command to install the command:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install usbutils\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["If entering ",(0,t.jsx)(n.code,{children:"lsusb"})," results in no response, this indicates a system issue, and we are unable to assist. You need to change the system or use a confirmed normal system."]}),"\n",(0,t.jsxs)(n.li,{children:["If the information shown below appears, please note that this is just a reference. You only need to confirm that ",(0,t.jsx)(n.code,{children:"1d50:606f"})," appears.","\n",(0,t.jsx)(s,{image:i(55811).Z,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"1d50:606f"})," belongs to the device you will be using. Ignore any subsequent prompts as system issues may cause it to display incompletely or not at all."]}),"\n",(0,t.jsxs)(n.li,{children:["If there are multiple ",(0,t.jsx)(n.code,{children:"1d50:606f"}),", it is recommended to exclude one to avoid affecting subsequent firmware burning and connection to the firmware. For example, if it is ",(0,t.jsx)(n.code,{children:"FLY MINI PAD"}),", it is recommended to use the onboard UTOC and not other CAN bridge devices."]}),"\n",(0,t.jsx)(n.li,{children:"If not, please check whether the data cable is properly connected and whether the firmware has been correctly flashed."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(n.p,{children:["You can only proceed with searching for CAN IDs when ",(0,t.jsx)(n.code,{children:"1d50:606f"})," is present."]})}),"\n",(0,t.jsx)(n.h3,{id:"can-id-search",children:"CAN ID Search"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enter the following command to perform an ID search:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If the ID appears and the ",(0,t.jsx)(n.code,{children:"Application:"})," at the end shows ",(0,t.jsx)(n.code,{children:"Klipper"}),", then this ID can be used directly."]}),"\n",(0,t.jsxs)(n.li,{children:["If the ID appears and the ",(0,t.jsx)(n.code,{children:"Application:"})," at the end shows ",(0,t.jsx)(n.code,{children:"CANBOOT"})," or ",(0,t.jsx)(n.code,{children:"Katapult"}),", then you need to flash the firmware to use it.","\n",(0,t.jsx)(s,{image:i(54915).Z,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"can-issue-collection",children:"CAN Issue Collection"}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you cannot find the CAN ID, please refer to the documentation below."}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(r,{variant:"contained",disableElevation:!0,href:"/docs/DebugDoc/faq/klipper_can",children:"CAN Issue Collection"}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.h3,{id:"fill-in-the-can-id-into-the-configuration",children:"Fill in the CAN ID into the Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the printer web interface, find ",(0,t.jsx)(n.code,{children:"printer.cfg"})," under the configuration options on the left sidebar: for fluidd ",(0,t.jsx)(n.code,{children:"{...}"}),"; for mainsail ",(0,t.jsx)(n.code,{children:"machine"}),", click to enter, and you can find ",(0,t.jsx)(n.code,{children:"printer.cfg"}),"."]}),"\n",(0,t.jsx)(s,{image:i(43412).Z,size:"50%",align:"left"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy the queried UUID and fill it into the ",(0,t.jsx)(n.code,{children:"[mcu]"})," section of the ",(0,t.jsx)(n.code,{children:"canbus_uuid:"})," in the ",(0,t.jsx)(n.code,{children:"printer.cfg"})," configuration. After saving and restarting, you can connect to the mainboard. If Klipper prompts that firmware needs to be updated, ADC errors, etc., it indicates that Klipper has already connected to the mainboard."]}),"\n",(0,t.jsx)(s,{image:i(54915).Z,size:"50%",align:"left"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Note: All IDs appearing in the document are examples. The actual ID for each mainboard is different. Please modify and fill in according to the actual obtained ID."})}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}function c(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},12064:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/canbridge","title":"CAN Bridge","description":"The CAN bus is a serial communication protocol bus used for real-time applications. It can use twisted-pair cables to transmit signals and is one of the most widely applied field buses in the world. The CAN protocol is used for communication between various components in automobiles, replacing expensive and cumbersome wiring harnesses. The robustness of the protocol has extended its use to other automation and industrial applications. The characteristics of the CAN protocol include integrity serial data communication, real-time support, a transmission rate of up to 1Mb/s, 11-bit addressing, and error detection capability.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/canbridge.mdx","sourceDirName":"ProductDoc/MainBoard/fly-gemini/fly-gemini-v3","slug":"/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/canbridge","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/canbridge","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/canbridge.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":9,"frontMatter":{"sidebar_position":9,"sidebar_label":"CAN Bridge"},"sidebar":"tutorialSidebar","previous":{"title":"Main Board Wiring","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/wiring"},"next":{"title":"Screen Wiring and Configuration","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/screen"}}'),o=i("74132"),r=i("94551"),s=i("80000");let a={sidebar_position:9,sidebar_label:"CAN Bridge"},c="CAN Bridge",d={},l=[{value:"Tool Board Connecting to Motherboard with CAN",id:"tool-board-connecting-to-motherboard-with-can",level:2},{value:"Flash Motherboard Firmware",id:"flash-motherboard-firmware",level:2},{value:"Search ID",id:"search-id",level:2},...s.d$];function h(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components},{ImageView:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"can-bridge",children:"CAN Bridge"})}),"\n",(0,o.jsx)(n.p,{children:"The CAN bus is a serial communication protocol bus used for real-time applications. It can use twisted-pair cables to transmit signals and is one of the most widely applied field buses in the world. The CAN protocol is used for communication between various components in automobiles, replacing expensive and cumbersome wiring harnesses. The robustness of the protocol has extended its use to other automation and industrial applications. The characteristics of the CAN protocol include integrity serial data communication, real-time support, a transmission rate of up to 1Mb/s, 11-bit addressing, and error detection capability.\n3D printers use the CAN bus to reduce the number of wires connecting the print head to the motherboard. Originally requiring more than a dozen wires, using CAN reduces it to only four wires, significantly decreasing the number of wires and making wiring easier.\nThis chapter only provides a brief overview of using CAN bridging."}),"\n",(0,o.jsx)(n.h2,{id:"tool-board-connecting-to-motherboard-with-can",children:"Tool Board Connecting to Motherboard with CAN"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Please note that the tool board power cord is not connected to the CAN port, but to the 12V-24v power line"}),"\n"]}),"\n",(0,o.jsx)(t,{image:i(5934).Z,size:"80%",align:"center"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Please note that the 120\u03A9 jumper must be connected"}),"\n"]}),"\n",(0,o.jsx)(t,{image:i(62229).Z,size:"80%",align:"center"}),"\n",(0,o.jsx)(n.h2,{id:"flash-motherboard-firmware",children:"Flash Motherboard Firmware"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Please ensure that the firmware burned on the Gemini motherboard is ",(0,o.jsx)(n.code,{children:"USB Bridge CAN Firmware Configuration"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"search-id",children:"Search ID"}),"\n",(0,o.jsx)(s.ZP,{})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},55811:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/606f-ba58e29a9188142cd34019862e0c85e2.webp"},54915:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/canbus-uuid-7117b665e00888c3c8163973d8c29b10.webp"},43412:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/fluidd-cfg-852485b665e4c2b86aaf45ae4b133d7d.webp"},62229:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/120-37aadf15031444cb622ab057442fd0a3.webp"},5934:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/canbridge-33a7808f6a6de92a75124d5f39f950e2.webp"},94551:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return s}});var t=i(39546);let o={},r=t.createContext(o);function s(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);