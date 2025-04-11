"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["50027"],{53325:function(e,n,t){t.d(n,{ZP:function(){return a},d$:function(){return o}});var i=t(85893),r=t(50065);let o=[{value:"Search USB Tutorial",id:"search-usb-tutorial",level:2},{value:"Precautions Before Searching for Devices",id:"precautions-before-searching-for-devices",level:2},{value:"Search for Devices",id:"search-for-devices",level:2},{value:"Search for USBID",id:"search-for-usbid",level:2},{value:"Fill in the USB ID into the Configuration",id:"fill-in-the-usb-id-into-the-configuration",level:3}];function s(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{ImageView:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"search-usb-tutorial",children:"Search USB Tutorial"}),"\n",(0,i.jsx)(n.h2,{id:"precautions-before-searching-for-devices",children:"Precautions Before Searching for Devices"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Please connect to SSH before searching for the USB ID (",(0,i.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"Click to jump",children:"Connect to SSH"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Note that you must log in to SSH via the network rather than via serial port"}),"\n",(0,i.jsx)(n.li,{children:"Ensure that the mainboard with the flashed USB firmware is properly connected and that the data cable connecting it to the host computer has data transfer capability"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"search-for-devices",children:"Search for Devices"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ensure that the host computer can access the internet normally and that the data cable connecting the peripheral device to the host computer has data transfer capability."}),"\n",(0,i.jsxs)(n.li,{children:["After connecting to the host computer via SSH, enter ",(0,i.jsx)(n.code,{children:"lsusb"})," and press Enter. If the information circled in the following image appears, you can proceed to the next step.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If there is no feedback, this indicates a problem with the host computer's system, and we are unable to assist; you need to replace the system with one that is confirmed to be working or replace the host computer."}),"\n",(0,i.jsxs)(n.li,{children:["If the instruction ",(0,i.jsx)(n.code,{children:"lsusb"})," is not found, you can execute the following command to install it:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install usbutils\n"})}),"\n",(0,i.jsx)(o,{image:t(99018).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"1d50:6177"})," is the device you will be using for this task. The suffix ",(0,i.jsx)(n.code,{children:"OpenMoko, Inc. stm32f407xx"})," is somewhat indicative but should not be used as a basis for judgment.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Some host computers may display incomplete or no information due to system issues."}),"\n",(0,i.jsxs)(n.li,{children:["If the ",(0,i.jsx)(n.code,{children:"lsusb"})," command displays the device but does not show ",(0,i.jsx)(n.code,{children:"1d50:6177"}),", try changing the data cable and connecting the mainboard to another USB port on the host computer."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["If you have previously executed the above steps and successfully burned the Klipper firmware, and the mainboard is running normally, but you just want to update the Klipper firmware, refer directly to the ",(0,i.jsx)(n.code,{children:"Firmware Update"})," section in the right-hand menu of this page."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Precautions",type:"warning",children:(0,i.jsxs)(n.p,{children:["You must query the ",(0,i.jsx)(n.code,{children:"1d50:6177"})," device before proceeding to the next step."]})}),"\n",(0,i.jsx)(n.h2,{id:"search-for-usbid",children:"Search for USBID"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ls /dev/serial/by-id/*\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enter the command below and press Enter. If everything is normal, a blue ID will appear. (The ID below is for reference only)"}),"\n"]}),"\n",(0,i.jsx)(o,{image:t(65701).Z,size:"80%",align:"left"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If no ID appears after entering the command below, but ",(0,i.jsx)(n.code,{children:"lsusb"})," shows devices, please replace the host computer or change the host computer system"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Precautions",type:"warning",children:(0,i.jsxs)(n.p,{children:["If multiple IDs appear, select the appropriate ID based on your mainboard's ",(0,i.jsx)(n.strong,{children:"MCU"})," model."]})}),"\n",(0,i.jsx)(n.h3,{id:"fill-in-the-usb-id-into-the-configuration",children:"Fill in the USB ID into the Configuration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the printer web interface, find ",(0,i.jsx)(n.code,{children:"printer.cfg"})," under the configuration options in the left sidebar: fluidd is ",(0,i.jsx)(n.code,{children:"{...}"}),", mainsail is ",(0,i.jsx)(n.code,{children:"Machine"}),", click to enter."]}),"\n",(0,i.jsx)(o,{image:t(531).Z,size:"50%",align:"left"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copy the blue ID and paste it into the ",(0,i.jsx)(n.code,{children:"serial:"})," field under the ",(0,i.jsx)(n.code,{children:"[mcu]"})," section in the ",(0,i.jsx)(n.code,{children:"printer.cfg"})," configuration file. After saving and restarting, the mainboard should be connected. If Klipper prompts ",(0,i.jsx)(n.code,{children:"ADC out of range"}),", this is a normal phenomenon; connect the heated bed and thermistor properly, configure the thermistor and output pins for the nozzle and heated bed, then save and restart."]}),"\n",(0,i.jsx)(o,{image:t(62374).Z,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"Note: All IDs mentioned in the document are examples. Each mainboard's ID is different, so modify and fill in according to the actual ID obtained."})})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},9753:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>d});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-d/fly-d5/canbridge","title":"CAN Bridge","description":"CAN bus is a serial communication protocol bus used for real-time applications, which can transmit signals over twisted pair cables and is one of the most widely used field buses in the world. The CAN protocol is used for communication between various different components in a car to replace expensive and cumbersome wiring harnesses. The robustness of this protocol has extended its use to other automation and industrial applications. The characteristics of the CAN protocol include complete serial data communication, providing real-time support, transmission rates up to 1Mb/s, and features such as 11-bit addressing and error detection.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-d/fly-d5/canbridge.mdx","sourceDirName":"ProductDoc/MainBoard/fly-d/fly-d5","slug":"/ProductDoc/MainBoard/fly-d/fly-d5/canbridge","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-d/fly-d5/canbridge","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-d/fly-d5/canbridge.mdx","tags":[],"version":"current","lastUpdatedBy":"Zin2233","lastUpdatedAt":1743907105000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"CAN Bridge"},"sidebar":"tutorialSidebar","previous":{"title":"Klipper\u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-d/fly-d5/cfg"},"next":{"title":"ADXL345","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-d/fly-d5/adxl345"}}'),r=t("85893"),o=t("50065"),s=t("53325");let a={sidebar_position:6,sidebar_label:"CAN Bridge"},d="CAN Bridge",c={},l=[{value:"Tool Board Connects to Main Board via CAN",id:"tool-board-connects-to-main-board-via-can",level:2},{value:"Flashing Main Board Firmware",id:"flashing-main-board-firmware",level:2},{value:"Searching for ID",id:"searching-for-id",level:2},...s.d$];function h(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components},{ImageView:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"can-bridge",children:"CAN Bridge"})}),"\n",(0,r.jsx)(n.p,{children:"CAN bus is a serial communication protocol bus used for real-time applications, which can transmit signals over twisted pair cables and is one of the most widely used field buses in the world. The CAN protocol is used for communication between various different components in a car to replace expensive and cumbersome wiring harnesses. The robustness of this protocol has extended its use to other automation and industrial applications. The characteristics of the CAN protocol include complete serial data communication, providing real-time support, transmission rates up to 1Mb/s, and features such as 11-bit addressing and error detection.\nOn 3D printers, CAN bus is used to reduce the number of wires connecting the print head to the main board; originally requiring dozens of wires, with CAN only four wires are needed, greatly reducing the number of wires and simplifying wiring.\nThis chapter provides only a brief overview of using the CAN bridge."}),"\n",(0,r.jsx)(n.h2,{id:"tool-board-connects-to-main-board-via-can",children:"Tool Board Connects to Main Board via CAN"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Note that the tool board power line is not connected to the CAN port but to the 12V-24V power line."}),"\n",(0,r.jsx)(n.li,{children:"Note that the 120\u03A9 jumper must be connected."}),"\n"]}),"\n",(0,r.jsx)(i,{image:t(15168).Z,size:"80%",align:"center"}),"\n",(0,r.jsx)(n.h2,{id:"flashing-main-board-firmware",children:"Flashing Main Board Firmware"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ensure that the firmware burned on the D5 main board is the ",(0,r.jsx)(n.code,{children:"USB Bridge CAN Firmware Configuration"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"searching-for-id",children:"Searching for ID"}),"\n",(0,r.jsx)(s.ZP,{})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},99018:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/6177-1c73cdd0d9f211a723e9cfe826ffc5c4.webp"},62374:function(e,n,t){t.d(n,{Z:function(){return i}});let i="data:image/webp;base64,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"},531:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/fluidd-cfg-852485b665e4c2b86aaf45ae4b133d7d.webp"},65701:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/usb-id-d430e6018bea26720d0ecb34dff8d9ed.webp"},15168:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/d5_canbridge-127daf266bdd22674e8030117e05b794.webp"},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var i=t(67294);let r={},o=i.createContext(r);function s(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);