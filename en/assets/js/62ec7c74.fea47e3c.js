"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["79564"],{61992:function(e,n,i){i.d(n,{ZP:function(){return a},d$:function(){return r}});var t=i(52676),o=i(79938);let r=[{value:"CAN Configuration and ID Search",id:"can-configuration-and-id-search",level:2},{value:"Precautions Before Device Search",id:"precautions-before-device-search",level:3},{value:"Device Search",id:"device-search",level:3},{value:"CAN ID Search",id:"can-id-search",level:3},{value:"CAN Issue Collection",id:"can-issue-collection",level:3},{value:"Fill in the CAN ID into the Configuration",id:"fill-in-the-can-id-into-the-configuration",level:3}];function s(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Button:r,ImageView:s}=n;return!r&&c("Button",!0),!s&&c("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"can-configuration-and-id-search",children:"CAN Configuration and ID Search"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you need to use CAN, make sure your host computer has undergone CAN configuration."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,t.jsx)(n.p,{children:"Please ensure the motherboard is properly connected to the host computer before proceeding with the following operations."})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Please ensure that the CAN network on the host computer, the CAN rate of the bridge motherboard, and the CAN tool board rate are all consistent."})}),"\n",(0,t.jsx)(n.h3,{id:"precautions-before-device-search",children:"Precautions Before Device Search"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Before searching for CAN IDs, please first ",(0,t.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"click to jump",children:"connect to SSH"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Please note that you need to ensure you are logging into SSH via the network, not via serial port."}),"\n",(0,t.jsx)(n.li,{children:"Please ensure that the UTOC or a motherboard with CAN bridge firmware installed is properly connected, and the data cable connecting to the host computer has data transfer capability."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"device-search",children:"Device Search"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Now that you have successfully logged into the host computer, you can enter ",(0,t.jsx)(n.code,{children:"lsusb"})," to search for devices. You will encounter one of the following situations:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Entering ",(0,t.jsx)(n.code,{children:"lsusb"})," prompts that the ",(0,t.jsx)(n.code,{children:"ls"})," command is not found; in this case, you can enter the following command to install the command:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install usbutils\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Entering ",(0,t.jsx)(n.code,{children:"lsusb"})," produces no response. This is a system issue beyond our control; you will need to replace the system or use a confirmed working system."]}),"\n",(0,t.jsxs)(n.li,{children:["The information shown below appears. Please note that this is only for reference. You only need to confirm that ",(0,t.jsx)(n.code,{children:"1d50:606f"})," appears.","\n",(0,t.jsx)(s,{image:i(55811).Z,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"1d50:606f"})," belongs to the device you will be using. Ignore any subsequent prompts as they may be incomplete or not displayed due to system issues."]}),"\n",(0,t.jsxs)(n.li,{children:["If there are multiple ",(0,t.jsx)(n.code,{children:"1d50:606f"}),", it is recommended to exclude one, otherwise it may affect subsequent firmware burning and connection, such as when using the ",(0,t.jsx)(n.code,{children:"FLY MINI PAD"}),", it is recommended to use the onboard UTOC and not other CAN bridge devices."]}),"\n",(0,t.jsx)(n.li,{children:"If none appear, please check if the data cable is properly connected and if the firmware is correctly installed."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(n.p,{children:["You can only proceed with CAN ID search when ",(0,t.jsx)(n.code,{children:"1d50:606f"})," is present."]})}),"\n",(0,t.jsx)(n.h3,{id:"can-id-search",children:"CAN ID Search"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enter the following command to search for IDs:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If an ID appears and the ",(0,t.jsx)(n.code,{children:"Application:"})," at the end shows ",(0,t.jsx)(n.code,{children:"Klipper"}),", it means this ID can be used directly."]}),"\n",(0,t.jsxs)(n.li,{children:["If an ID appears and the ",(0,t.jsx)(n.code,{children:"Application:"})," at the end shows ",(0,t.jsx)(n.code,{children:"CANBOOT"})," or ",(0,t.jsx)(n.code,{children:"Katapult"}),", it means you need to flash the firmware to use it.","\n",(0,t.jsx)(s,{image:i(54915).Z,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"can-issue-collection",children:"CAN Issue Collection"}),"\n",(0,t.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you cannot find a CAN ID, refer to the documentation below."}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(r,{variant:"contained",disableElevation:!0,href:"/docs/DebugDoc/faq/klipper_can",children:"CAN Issue Collection"}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.h3,{id:"fill-in-the-can-id-into-the-configuration",children:"Fill in the CAN ID into the Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the printer's web interface. In the configuration options on the left sidebar, find ",(0,t.jsx)(n.code,{children:"fluidd"}),": ",(0,t.jsx)(n.code,{children:"{...}"})," ; ",(0,t.jsx)(n.code,{children:"mainsail"}),": ",(0,t.jsx)(n.code,{children:"Machine"}),", then click to access ",(0,t.jsx)(n.code,{children:"printer.cfg"}),"."]}),"\n",(0,t.jsx)(s,{image:i(43412).Z,size:"50%",align:"left"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy the queried UUID and paste it into the ",(0,t.jsx)(n.code,{children:"[mcu]"})," section of the ",(0,t.jsx)(n.code,{children:"printer.cfg"})," configuration under ",(0,t.jsx)(n.code,{children:"canbus_uuid:"}),". After saving and restarting, you should be able to connect to the motherboard. If Klipper prompts for firmware updates, ADC errors, etc., it indicates that Klipper has successfully connected to the motherboard."]}),"\n",(0,t.jsx)(s,{image:i(54915).Z,size:"50%",align:"left"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Note: All IDs mentioned in the document are examples. Each motherboard's ID is unique, so please modify according to the actual ID obtained."})}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}function c(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},82986:function(e,n,i){i.d(n,{ZP:function(){return a},d$:function(){return r}});var t=i(52676),o=i(79938);let r=[{value:"Search for RS232 ID",id:"search-for-rs232-id",level:2},{value:"Precautions Before Searching for Devices",id:"precautions-before-searching-for-devices",level:3},{value:"Searching for Devices",id:"searching-for-devices",level:3},{value:"Searching for RS232 ID",id:"searching-for-rs232-id",level:3},{value:"Enter the RS232 ID into the Configuration",id:"enter-the-rs232-id-into-the-configuration",level:3}];function s(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{ImageView:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"search-for-rs232-id",children:"Search for RS232 ID"}),"\n",(0,t.jsx)(n.h3,{id:"precautions-before-searching-for-devices",children:"Precautions Before Searching for Devices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Before searching for the RS232 ID, please first ",(0,t.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"click to jump",children:"connect to SSH"})]}),"\n",(0,t.jsx)(n.li,{children:"Please note that you need to ensure that you are logging in via SSH using the network, not via a serial port"}),"\n",(0,t.jsx)(n.li,{children:"Please ensure that UTOR is properly connected and that the data cable connecting to the host computer has data transfer capabilities"}),"\n",(0,t.jsx)(n.li,{children:"If using G2T, confirm whether the system supports UART connection"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"searching-for-devices",children:"Searching for Devices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Now that you have successfully logged into the host machine, you can enter ",(0,t.jsx)(n.code,{children:"lsusb"})," to search for devices. This will result in one of the following scenarios:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If entering ",(0,t.jsx)(n.code,{children:"lsusb"})," prompts that the ",(0,t.jsx)(n.code,{children:"ls"})," command cannot be found, you can enter the following command to install the command:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install usbutils\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["If entering ",(0,t.jsx)(n.code,{children:"lsusb"})," results in no response, this indicates a system issue. You will need to change the system or use a confirmed working system."]}),"\n",(0,t.jsx)(n.li,{children:"If you see the information shown in the image below, please note that this is just a reference. You only need to determine the characters after the ID."}),"\n"]}),"\n",(0,t.jsx)(r,{image:i(57833).Z,size:"100%",align:"left"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"1a86:7523"})," belongs to the device you need to use. The subsequent prompts do not need to be concerned with because system issues may cause it to display incompletely or not at all."]}),"\n",(0,t.jsx)(n.li,{children:"If none of these apply, please check if the data cable is properly connected and if the firmware has been correctly flashed."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(n.p,{children:["You can only use the commands below to search for the RS232 ID when you have ",(0,t.jsx)(n.code,{children:"1a86:7523"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"searching-for-rs232-id",children:"Searching for RS232 ID"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ls /dev/serial/by-path/*\n"})}),"\n",(0,t.jsx)(r,{image:i(91192).Z,size:"100%",align:"left"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If entering ",(0,t.jsx)(n.code,{children:"ls /dev/serial/by-path/*"})," does not produce any IDs, but ",(0,t.jsx)(n.code,{children:"lsusb"})," shows devices, consider replacing the host machine or the host machine's system."]}),"\n",(0,t.jsx)(n.li,{children:"Please note that using UTOR will output three IDs, and if you have used another UTOR system before, it may record them, leading to multiple IDs appearing during the search."}),"\n",(0,t.jsxs)(n.li,{children:["Ensure that the ID ends with ",(0,t.jsx)(n.code,{children:"-port0"}),", otherwise it cannot be used."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsx)(n.p,{children:"Please make sure that the tool board and UTOR are grounded!!! Otherwise, you will not be able to connect to the tool board!!!"})}),"\n",(0,t.jsx)(n.h3,{id:"enter-the-rs232-id-into-the-configuration",children:"Enter the RS232 ID into the Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the printer web interface and find the ",(0,t.jsx)(n.code,{children:"printer.cfg"})," configuration under the configuration option in the left sidebar. For fluidd, it is ",(0,t.jsx)(n.code,{children:"{...}"}),"; for mainsail, it is ",(0,t.jsx)(n.code,{children:"machine"}),"."]}),"\n",(0,t.jsx)(r,{image:i(43412).Z,size:"50%",align:"left"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy the blue ID and paste it into the ",(0,t.jsx)(n.code,{children:"[mcu]"})," section of the ",(0,t.jsx)(n.code,{children:"printer.cfg"})," configuration file under ",(0,t.jsx)(n.code,{children:"serial:"}),". After saving and restarting, you should be able to connect to the mainboard. If Klipper prompts ",(0,t.jsx)(n.code,{children:"ADC out of range"}),", this is normal. Connect the hotbed and thermistor properly, configure the thermistor pins and output pins for the nozzle and hotbed, then save and restart."]}),"\n",(0,t.jsx)(r,{image:i(16488).Z,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The RS232 ID needs to be configured with ",(0,t.jsx)(n.code,{children:"baud:"})," and ",(0,t.jsx)(n.code,{children:"restart_method:command"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Below is a reference configuration:"}),"\n"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"[mcu SHT36]\nserial: /dev/serial/by-path/platform-1c1c000.usb-usb-0:1.2:1.0-port0\nbaud: 250000\nrestart_method:command\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Note: All IDs mentioned in the document are examples. Each motherboard\u2019s ID is unique, so please modify and fill in according to the actual ID obtained."})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Please note that the IDs below cannot be used!!!"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"serial: /dev/serial/by-id/usb-1a86_USB_Serial-if00-port0\n"})}),"\n",(0,t.jsx)(n.hr,{})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},10410:function(e,n,i){i.d(n,{ZP:function(){return a},d$:function(){return r}});var t=i(52676),o=i(79938);let r=[{value:"Search USB Tutorial",id:"search-usb-tutorial",level:2},{value:"Precautions Before Searching for Devices",id:"precautions-before-searching-for-devices",level:2},{value:"Search for Devices",id:"search-for-devices",level:2},{value:"Search for USB ID",id:"search-for-usb-id",level:2},{value:"Fill in the USB ID in the Configuration",id:"fill-in-the-usb-id-in-the-configuration",level:3}];function s(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{ImageView:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"search-usb-tutorial",children:"Search USB Tutorial"}),"\n",(0,t.jsx)(n.h2,{id:"precautions-before-searching-for-devices",children:"Precautions Before Searching for Devices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Before searching for the USB ID, please first ",(0,t.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"click to jump",children:"connect to SSH"})]}),"\n",(0,t.jsx)(n.li,{children:"Please make sure you are logging in via network SSH rather than serial port SSH"}),"\n",(0,t.jsx)(n.li,{children:"Please ensure that the motherboard with the USB firmware installed is properly connected, and the data cable connecting it to the host computer has data transfer capability"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"search-for-devices",children:"Search for Devices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Now that you have successfully logged into the host machine, you can enter ",(0,t.jsx)(n.code,{children:"lsusb"})," to search for devices. You will encounter one of the following scenarios:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If entering ",(0,t.jsx)(n.code,{children:"lsusb"})," prompts that the ",(0,t.jsx)(n.code,{children:"ls"})," command is not found, you can enter the following command to install the command:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install usbutils\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["If entering ",(0,t.jsx)(n.code,{children:"lsusb"})," produces no response, this indicates a system issue beyond our control. You need to change the system or use a confirmed working system."]}),"\n",(0,t.jsxs)(n.li,{children:["If you see the information shown in the image below, note that this is just a reference. You only need to confirm the characters after the ID.","\n",(0,t.jsx)(r,{image:i(14030).Z,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"1d50:614e"})," belongs to the device you will be using. Ignore the rest of the prompt as the system issue may cause it to display incompletely or not at all."]}),"\n",(0,t.jsx)(n.li,{children:"If none of the above occur, please check if the data cable is properly connected and if the firmware is correctly installed."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(n.p,{children:["You can only search for the USB ID when you have ",(0,t.jsx)(n.code,{children:"1d50:614e"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"search-for-usb-id",children:"Search for USB ID"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ls /dev/serial/by-id/*\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enter the command below and press Enter. If everything is normal, a blue ID will appear (the one below is just an example)."}),"\n"]}),"\n",(0,t.jsx)(r,{image:i(27496).Z,size:"80%",align:"left"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If no ID appears after entering the command below, but ",(0,t.jsx)(n.code,{children:"lsusb"})," shows devices, try changing the host machine or the host machine's system."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(n.p,{children:["If multiple IDs appear, select the appropriate one based on your motherboard's ",(0,t.jsx)(n.strong,{children:"MCU"})," model."]})}),"\n",(0,t.jsx)(n.h3,{id:"fill-in-the-usb-id-in-the-configuration",children:"Fill in the USB ID in the Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the printer web interface, find the configuration option in the left sidebar: for fluidd, it is ",(0,t.jsx)(n.code,{children:"{...}"}),"; for mainsail, it is ",(0,t.jsx)(n.code,{children:"machine"}),", and click to access ",(0,t.jsx)(n.code,{children:"printer.cfg"}),"."]}),"\n",(0,t.jsx)(r,{image:i(43412).Z,size:"50%",align:"left"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy the blue ID and fill it into the ",(0,t.jsx)(n.code,{children:"[mcu]"})," section of the ",(0,t.jsx)(n.code,{children:"serial:"})," parameter in the ",(0,t.jsx)(n.code,{children:"printer.cfg"})," configuration file. Save and restart to connect to the motherboard. If Klipper displays ",(0,t.jsx)(n.code,{children:"ADC out of range"}),", it is normal. Connect the bed and thermistor properly, configure the hotend and bed thermistor and output pins, then save and restart."]}),"\n",(0,t.jsx)(r,{image:i(16488).Z,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Note: All IDs mentioned in the document are examples. The actual ID for each motherboard is unique. Please modify according to the actual ID obtained."})})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},45339:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>a});var t=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sb2040/sb2040/flash/id","title":"Motherboard ID Reading Guide","description":"Please do not modify the configuration when opening web page translation.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sb2040/sb2040/flash/id.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sb2040/sb2040/flash","slug":"/ProductDoc/ToolBoard/fly-sb2040/sb2040/flash/id","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040/flash/id","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040/flash/id.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"ID Search Tutorial"},"sidebar":"tutorialSidebar","previous":{"title":"CAN Firmware Flashing","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040/flash/can"},"next":{"title":"BL Firmware, please ignore","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040/flash/bl"}}'),o=i("52676"),r=i("79938");i("10410"),i("82986");var s=i("61992");let a={sidebar_position:5,sidebar_label:"ID Search Tutorial"},c="Motherboard ID Reading Guide",l={},d=[...s.d$];function h(e){let n={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components},{ImageView:t,TabItem:a,Tabs:c}=n;return!t&&f("ImageView",!0),!a&&f("TabItem",!0),!c&&f("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"motherboard-id-reading-guide",children:"Motherboard ID Reading Guide"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Please do not modify the configuration when opening web page translation."})}),"\n",(0,o.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,o.jsx)(n.p,{children:"Please do not modify the configuration when opening web page translation."})}),"\n",(0,o.jsx)(n.admonition,{title:"Must Know",type:"danger",children:(0,o.jsx)(n.p,{children:"Please do not modify the configuration when opening web page translation."})}),"\n",(0,o.jsx)(c,{children:(0,o.jsx)(a,{value:"can",label:"Obtaining CANBus UUID",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Before searching for the ID, connect the tool board to UTOC or a motherboard with bridge firmware using the XT30 data cable. Below is a reference wiring diagram:"}),"\n",(0,o.jsx)(t,{image:i(49842).Z,size:"80%",align:"left"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Please ensure that the resistance between CAN H and CAN L measures around ",(0,o.jsx)(n.code,{children:"60\u03A9"})," when the power is off. If it's ",(0,o.jsx)(n.code,{children:"120\u03A9"}),", a ",(0,o.jsx)(n.code,{children:"120\u03A9"})," jumper needs to be added; if it's around ",(0,o.jsx)(n.code,{children:"40\u03A9"}),", the jumper needs to be removed."]}),"\n",(0,o.jsx)(t,{image:i(25152).Z,size:"50%",align:"center"}),"\n",(0,o.jsx)(s.ZP,{}),"\n"]}),"\n"]})})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}function f(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},55811:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/606f-cbbebb6ec94773e733a05ddcf6a076e0.webp"},14030:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/614e-e3b128c38ae0a3e7e17cb759c113b831.webp"},57833:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/7523-0c5084ee24f883b9788e2c23b5486127.webp"},54915:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/canbus-uuid-7117b665e00888c3c8163973d8c29b10.webp"},16488:function(e,n,i){i.d(n,{Z:function(){return t}});let t="data:image/webp;base64,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"},43412:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/fluidd-cfg-852485b665e4c2b86aaf45ae4b133d7d.webp"},91192:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/rs232-id-a667ad1d1748b61b58021d7d7ecb6e76.webp"},27496:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/usb-id-d430e6018bea26720d0ecb34dff8d9ed.webp"},25152:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/120-fc38ef77a4db966662a6c39d4eaba2eb.webp"},49842:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/sb2040_utoc-4341d37f724748d607653bf3110a85bd.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return s}});var t=i(75271);let o={},r=t.createContext(o);function s(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);