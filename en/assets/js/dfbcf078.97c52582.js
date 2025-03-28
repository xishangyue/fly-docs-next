"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["91738"],{61992:function(e,n,i){i.d(n,{ZP:function(){return a},d$:function(){return s}});var t=i(52676),r=i(79938);let s=[{value:"CAN Configuration and ID Search",id:"can-configuration-and-id-search",level:2},{value:"Precautions Before Device Search",id:"precautions-before-device-search",level:3},{value:"Device Search",id:"device-search",level:3},{value:"CAN ID Search",id:"can-id-search",level:3},{value:"CAN Issue Collection",id:"can-issue-collection",level:3},{value:"Fill in the CAN ID into the Configuration",id:"fill-in-the-can-id-into-the-configuration",level:3}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Button:s,ImageView:o}=n;return!s&&c("Button",!0),!o&&c("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"can-configuration-and-id-search",children:"CAN Configuration and ID Search"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you need to use CAN, please ensure that your host computer has performed CAN configuration."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"danger",children:(0,t.jsx)(n.p,{children:"Please ensure that the mainboard is properly connected to the host computer before proceeding with the following operations."})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Please ensure that the host computer's CAN network, the CAN rate of the bridge mainboard, and the CAN tool board rate are completely consistent."})}),"\n",(0,t.jsx)(n.h3,{id:"precautions-before-device-search",children:"Precautions Before Device Search"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Before searching for CAN IDs, please ",(0,t.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"Click to jump",children:"connect to SSH"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Please note that you must ensure you are logging into SSH via the network rather than via serial port."}),"\n",(0,t.jsx)(n.li,{children:"Ensure that the UTOC is properly connected or the mainboard has been flashed with the CAN bridge firmware, and ensure that the data cable connecting to the host computer has data transmission capability."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"device-search",children:"Device Search"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Now that you have successfully logged into the host computer, you can enter ",(0,t.jsx)(n.code,{children:"lsusb"})," to search for devices. This will result in one of the following scenarios:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If entering ",(0,t.jsx)(n.code,{children:"lsusb"})," prompts that the ",(0,t.jsx)(n.code,{children:"ls"})," command is not found, you can enter the following command to install the command:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install usbutils\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["If entering ",(0,t.jsx)(n.code,{children:"lsusb"})," results in no response, this indicates a system issue, and we are unable to assist. You need to change the system or use a confirmed normal system."]}),"\n",(0,t.jsxs)(n.li,{children:["If the information shown below appears, please note that this is just a reference. You only need to confirm that ",(0,t.jsx)(n.code,{children:"1d50:606f"})," appears.","\n",(0,t.jsx)(o,{image:i(55811).Z,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"1d50:606f"})," belongs to the device you will be using. Ignore any subsequent prompts as system issues may cause it to display incompletely or not at all."]}),"\n",(0,t.jsxs)(n.li,{children:["If there are multiple ",(0,t.jsx)(n.code,{children:"1d50:606f"}),", it is recommended to exclude one to avoid affecting subsequent firmware burning and connection to the firmware. For example, if it is ",(0,t.jsx)(n.code,{children:"FLY MINI PAD"}),", it is recommended to use the onboard UTOC and not other CAN bridge devices."]}),"\n",(0,t.jsx)(n.li,{children:"If not, please check whether the data cable is properly connected and whether the firmware has been correctly flashed."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(n.p,{children:["You can only proceed with searching for CAN IDs when ",(0,t.jsx)(n.code,{children:"1d50:606f"})," is present."]})}),"\n",(0,t.jsx)(n.h3,{id:"can-id-search",children:"CAN ID Search"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enter the following command to perform an ID search:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If the ID appears and the ",(0,t.jsx)(n.code,{children:"Application:"})," at the end shows ",(0,t.jsx)(n.code,{children:"Klipper"}),", then this ID can be used directly."]}),"\n",(0,t.jsxs)(n.li,{children:["If the ID appears and the ",(0,t.jsx)(n.code,{children:"Application:"})," at the end shows ",(0,t.jsx)(n.code,{children:"CANBOOT"})," or ",(0,t.jsx)(n.code,{children:"Katapult"}),", then you need to flash the firmware to use it.","\n",(0,t.jsx)(o,{image:i(54915).Z,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"can-issue-collection",children:"CAN Issue Collection"}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you cannot find the CAN ID, please refer to the documentation below."}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(s,{variant:"contained",disableElevation:!0,href:"/docs/DebugDoc/faq/klipper_can",children:"CAN Issue Collection"}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.h3,{id:"fill-in-the-can-id-into-the-configuration",children:"Fill in the CAN ID into the Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the printer web interface, find ",(0,t.jsx)(n.code,{children:"printer.cfg"})," under the configuration options on the left sidebar: for fluidd ",(0,t.jsx)(n.code,{children:"{...}"}),"; for mainsail ",(0,t.jsx)(n.code,{children:"machine"}),", click to enter, and you can find ",(0,t.jsx)(n.code,{children:"printer.cfg"}),"."]}),"\n",(0,t.jsx)(o,{image:i(43412).Z,size:"50%",align:"left"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy the queried UUID and fill it into the ",(0,t.jsx)(n.code,{children:"[mcu]"})," section of the ",(0,t.jsx)(n.code,{children:"canbus_uuid:"})," in the ",(0,t.jsx)(n.code,{children:"printer.cfg"})," configuration. After saving and restarting, you can connect to the mainboard. If Klipper prompts that firmware needs to be updated, ADC errors, etc., it indicates that Klipper has already connected to the mainboard."]}),"\n",(0,t.jsx)(o,{image:i(54915).Z,size:"50%",align:"left"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Note: All IDs appearing in the document are examples. The actual ID for each mainboard is different. Please modify and fill in according to the actual obtained ID."})}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}function c(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50432:function(e,n,i){i.d(n,{ZP:function(){return a},d$:function(){return s}});var t=i(52676),r=i(79938);let s=[{value:"Precautions Before Searching for Devices",id:"precautions-before-searching-for-devices",level:2},{value:"Precautions During Searching for Devices",id:"precautions-during-searching-for-devices",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{ImageView:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"precautions-before-searching-for-devices",children:"Precautions Before Searching for Devices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Before obtaining the ID, please first ",(0,t.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"click to jump",children:"connect to SSH"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Please ensure that the data cable connecting the lower computer to the upper computer has data transfer capabilities."}),"\n",(0,t.jsxs)(n.li,{children:["After connecting to the upper computer via SSH, input ",(0,t.jsx)(n.code,{children:"lsusb"})," and press Enter. Several devices may appear."]}),"\n",(0,t.jsxs)(n.li,{children:["If the system does not support ",(0,t.jsx)(n.code,{children:"lsusb"}),", you can execute the following command to install it."]}),"\n",(0,t.jsxs)(n.li,{children:["If no devices appear after ",(0,t.jsx)(n.code,{children:"lsusb"}),", please replace the upper computer!"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo apt-get install usbutils\n"})}),"\n",(0,t.jsx)(s,{image:i(66810).Z,size:"100%",align:"left"}),"\n",(0,t.jsx)(s,{image:i(68133).Z,size:"100%",align:"left"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Please confirm whether the motherboard firmware has been flashed with the correct firmware."}),"\n",(0,t.jsxs)(n.li,{children:["If it is a USB firmware, ",(0,t.jsx)(n.code,{children:"1d50:614e"})," should appear after ",(0,t.jsx)(n.code,{children:"lsusb"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["If it is a USB bridge CAN firmware, ",(0,t.jsx)(n.code,{children:"1d50:606f"})," should appear after ",(0,t.jsx)(n.code,{children:"lsusb"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["If it is an RS232 firmware, UTOR or G2T must be used in conjunction. G2T does not require firmware searching, while UTOR should appear as ",(0,t.jsx)(n.code,{children:"1a86:7523"})," after ",(0,t.jsx)(n.code,{children:"lsusb"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"precautions-during-searching-for-devices",children:"Precautions During Searching for Devices"}),"\n",(0,t.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,t.jsx)(n.p,{children:"The search ID command cannot be mixed!!!"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Please note that USB firmware can only use the USB ID search method."}),"\n",(0,t.jsx)(n.li,{children:"Please note that USB bridge CAN firmware can only use the CAN ID search method."}),"\n",(0,t.jsx)(n.li,{children:"Please note that RS232 firmware can only use the RS232 ID search method."}),"\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"0483:df11"})," appears, it may indicate that the firmware has been flashed but the motherboard was not powered off and restarted. If the issue persists after powering off and restarting the motherboard, check if DFU (jumper/dip switch/button) has been disconnected."]}),"\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"2e8a:0003"})," appears, it may indicate that the wrong firmware has been flashed. Note that RP2040 can only flash UF2 firmware compiled from source code; other firmware cannot be flashed. After ",(0,t.jsx)(n.code,{children:"2e8a:0003"})," appears, disconnect BOOT (jumper/dip switch/button) to avoid flashing failure!!!"]}),"\n",(0,t.jsxs)(n.li,{children:["The UF2 firmware for RP2040 is compiled with ",(0,t.jsx)(n.code,{children:"No bootloader"})," option to generate the UF2 firmware."]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},10410:function(e,n,i){i.d(n,{ZP:function(){return a},d$:function(){return s}});var t=i(52676),r=i(79938);let s=[{value:"Search USB Tutorial",id:"search-usb-tutorial",level:2},{value:"Precautions Before Searching for Devices",id:"precautions-before-searching-for-devices",level:2},{value:"Search for Devices",id:"search-for-devices",level:2},{value:"Search for USBID",id:"search-for-usbid",level:2},{value:"Fill in the USB ID into the Configuration",id:"fill-in-the-usb-id-into-the-configuration",level:3}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{ImageView:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"search-usb-tutorial",children:"Search USB Tutorial"}),"\n",(0,t.jsx)(n.h2,{id:"precautions-before-searching-for-devices",children:"Precautions Before Searching for Devices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Please connect to SSH before searching for the USB ID (",(0,t.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"Click to jump",children:"Connect to SSH"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"Note that you must log in to SSH via the network rather than via serial port"}),"\n",(0,t.jsx)(n.li,{children:"Ensure that the mainboard with the flashed USB firmware is properly connected and that the data cable connecting it to the host computer has data transfer capability"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"search-for-devices",children:"Search for Devices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ensure that the host computer can access the internet normally and that the data cable connecting the peripheral device to the host computer has data transfer capability."}),"\n",(0,t.jsxs)(n.li,{children:["After connecting to the host computer via SSH, enter ",(0,t.jsx)(n.code,{children:"lsusb"})," and press Enter. If the information circled in the following image appears, you can proceed to the next step.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If there is no feedback, this indicates a problem with the host computer's system, and we are unable to assist; you need to replace the system with one that is confirmed to be working or replace the host computer."}),"\n",(0,t.jsxs)(n.li,{children:["If the instruction ",(0,t.jsx)(n.code,{children:"lsusb"})," is not found, you can execute the following command to install it:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install usbutils\n"})}),"\n",(0,t.jsx)(s,{image:i(18377).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"1d50:6177"})," is the device you will be using for this task. The suffix ",(0,t.jsx)(n.code,{children:"OpenMoko, Inc. stm32f407xx"})," is somewhat indicative but should not be used as a basis for judgment.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Some host computers may display incomplete or no information due to system issues."}),"\n",(0,t.jsxs)(n.li,{children:["If the ",(0,t.jsx)(n.code,{children:"lsusb"})," command displays the device but does not show ",(0,t.jsx)(n.code,{children:"1d50:6177"}),", try changing the data cable and connecting the mainboard to another USB port on the host computer."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["If you have previously executed the above steps and successfully burned the Klipper firmware, and the mainboard is running normally, but you just want to update the Klipper firmware, refer directly to the ",(0,t.jsx)(n.code,{children:"Firmware Update"})," section in the right-hand menu of this page."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Precautions",type:"warning",children:(0,t.jsxs)(n.p,{children:["You must query the ",(0,t.jsx)(n.code,{children:"1d50:6177"})," device before proceeding to the next step."]})}),"\n",(0,t.jsx)(n.h2,{id:"search-for-usbid",children:"Search for USBID"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ls /dev/serial/by-id/*\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enter the command below and press Enter. If everything is normal, a blue ID will appear. (The ID below is for reference only)"}),"\n"]}),"\n",(0,t.jsx)(s,{image:i(27496).Z,size:"80%",align:"left"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If no ID appears after entering the command below, but ",(0,t.jsx)(n.code,{children:"lsusb"})," shows devices, please replace the host computer or change the host computer system"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Precautions",type:"warning",children:(0,t.jsxs)(n.p,{children:["If multiple IDs appear, select the appropriate ID based on your mainboard's ",(0,t.jsx)(n.strong,{children:"MCU"})," model."]})}),"\n",(0,t.jsx)(n.h3,{id:"fill-in-the-usb-id-into-the-configuration",children:"Fill in the USB ID into the Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the printer web interface, find ",(0,t.jsx)(n.code,{children:"printer.cfg"})," under the configuration options in the left sidebar: fluidd is ",(0,t.jsx)(n.code,{children:"{...}"}),", mainsail is ",(0,t.jsx)(n.code,{children:"Machine"}),", click to enter."]}),"\n",(0,t.jsx)(s,{image:i(43412).Z,size:"50%",align:"left"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy the blue ID and paste it into the ",(0,t.jsx)(n.code,{children:"serial:"})," field under the ",(0,t.jsx)(n.code,{children:"[mcu]"})," section in the ",(0,t.jsx)(n.code,{children:"printer.cfg"})," configuration file. After saving and restarting, the mainboard should be connected. If Klipper prompts ",(0,t.jsx)(n.code,{children:"ADC out of range"}),", this is a normal phenomenon; connect the heated bed and thermistor properly, configure the thermistor and output pins for the nozzle and heated bed, then save and restart."]}),"\n",(0,t.jsx)(s,{image:i(16488).Z,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Note: All IDs mentioned in the document are examples. Each mainboard's ID is different, so modify and fill in according to the actual ID obtained."})})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},85568:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>f,assets:()=>d,toc:()=>h,frontMatter:()=>c});var t=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/read-id","title":"Motherboard ID Reading and Viewing","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/read-id.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw","slug":"/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/read-id","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/read-id","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/read-id.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"Motherboard ID Reading and Viewing"},"sidebar":"tutorialSidebar","previous":{"title":"Firmware Burning","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/flash"},"next":{"title":"\u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/cfg"}}'),r=i("52676"),s=i("79938"),o=i("50432"),a=i("10410");i("61992");let c={sidebar_position:3,sidebar_label:"Motherboard ID Reading and Viewing"},l="Motherboard ID Reading and Viewing",d={},h=[...o.d$,...a.d$];function u(e){let n={h1:"h1",header:"header",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"motherboard-id-reading-and-viewing",children:"Motherboard ID Reading and Viewing"})}),"\n",(0,r.jsx)(o.ZP,{}),"\n",(0,r.jsx)(a.ZP,{})]})}function f(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},55811:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/606f-ba58e29a9188142cd34019862e0c85e2.webp"},18377:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/6177-1c73cdd0d9f211a723e9cfe826ffc5c4.webp"},54915:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/canbus-uuid-7117b665e00888c3c8163973d8c29b10.webp"},16488:function(e,n,i){i.d(n,{Z:function(){return t}});let t="data:image/webp;base64,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"},43412:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/fluidd-cfg-852485b665e4c2b86aaf45ae4b133d7d.webp"},66810:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/lsusb-8766c7f9dcf053b698a4632d72b41c64.webp"},68133:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/rs232-d4cf58af4e95e81843518d194bda7c92.webp"},27496:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/usb-id-d430e6018bea26720d0ecb34dff8d9ed.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return o}});var t=i(75271);let r={},s=t.createContext(r);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);