"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["48297"],{31688:function(e,n,t){t.d(n,{ZP:function(){return a},d$:function(){return l}});var i=t(74132),r=t(94551);let l=[];function o(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Katapult was originally named CanBoot, and later renamed to katapult."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After burning the firmware using methods like DFU, you can use commands to update the firmware with one click."}),"\n",(0,i.jsx)(n.li,{children:"Advantage: Quickly double-clicking the reset button or quickly cutting power twice will enter the Katapult firmware, at which point there will be an LED flashing on the mainboard."}),"\n",(0,i.jsx)(n.li,{children:"Katapult firmware can only be used to burn firmware and cannot connect to Klipper!!!"}),"\n",(0,i.jsxs)(n.li,{children:["Katapult firmware supports three connection methods for connecting to the host computer, and the firmwares for these three methods are independent of each other.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["CAN connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can directly update the firmware using a command, and it has strong interference resistance."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["RS232 connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can update the firmware using a command, and it has very strong interference resistance."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: You cannot use a command to update the firmware with one click; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["USB connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can directly update the firmware using a command."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: A long data cable is prone to interference, which may lead to disconnection."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},58099:function(e,n,t){t.d(n,{ZP:function(){return a},d$:function(){return l}});var i=t(74132),r=t(94551);let l=[];function o(e){let n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{ImageView:l}=n;return l||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install the burning tool"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enter the following command in SSH"}),"\n",(0,i.jsx)(n.li,{children:"Only execute this the first time you burn, no need to execute it afterwards"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~/klipper/lib/rp2040_flash/ && make\n"})}),"\n",(0,i.jsx)(l,{image:t(46366).Z,size:"100%",align:"left"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Execute the following command to check if the connection is successful."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enter ",(0,i.jsx)(n.code,{children:"lsusb"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If there is no ",(0,i.jsx)(n.code,{children:"2e8a:0003"})," device, please try to re-enter ",(0,i.jsx)(n.strong,{children:"burning mode"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Due to system version issues, it may show other names. If there is ",(0,i.jsx)(n.code,{children:"2e8a:0003"}),", it indicates that the burning mode has been entered."]}),"\n",(0,i.jsx)(l,{image:t(47368).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Notice",type:"warning",children:(0,i.jsxs)(n.p,{children:["Proceed to the next step only if there is a ",(0,i.jsx)(n.code,{children:"2e8a:0003"})]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Pull the pre-compiled firmware"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"These are all pre-compiled firmwares"}),"\n",(0,i.jsx)(n.li,{children:"Please note that the host machine needs to be able to access the internet to install"}),"\n",(0,i.jsx)(n.li,{children:"The host machine needs to execute the following command to download the firmware package"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the firmware package has already been downloaded, it is recommended to update the firmware package before proceeding with the remaining operations"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~/FLY_Katapult && git pull\n"})}),"\n"]}),"\n"]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},43801:function(e,n,t){t.d(n,{ZP:function(){return a},d$:function(){return l}});var i=t(74132),r=t(94551);let l=[];function o(e){let n={code:"code",img:"img",li:"li",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prepare a data cable with data transfer capabilities."}),"\n",(0,i.jsx)(n.li,{children:"Download the firmware to the computer."}),"\n",(0,i.jsxs)(n.li,{children:["Connect the BOOT jumper or hold it and connect it to the computer, at this point the ",(0,i.jsx)(n.code,{children:"RPI-RP2"})," disk will appear.\n",(0,i.jsx)(n.img,{src:"https://example.com/@site/docs/General/dfu-flash/img/uf2.webp",alt:""})]}),"\n",(0,i.jsx)(n.li,{children:"Remove the BOOT jumper or release the button!!!"}),"\n",(0,i.jsxs)(n.li,{children:["Copy the firmware that needs to be burned into it, please note that only ",(0,i.jsx)(n.code,{children:"UF2"})," suffix firmware can be used!!! (Do not modify the suffix name, it is useless.)"]}),"\n",(0,i.jsxs)(n.li,{children:["Refer to\n",(0,i.jsx)(n.img,{src:"https://example.com/@site/docs/General/dfu-flash/img/uf21.webp",alt:""})]}),"\n",(0,i.jsxs)(n.li,{children:["After copying the firmware into the ",(0,i.jsx)(n.code,{children:"RPI-RP2"})," disk, it will automatically disappear, indicating that the firmware burning is complete!"]}),"\n"]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1603:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>i,assets:()=>d,toc:()=>u,contentTitle:()=>c});var i=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/bl","title":"Katapult Firmware","description":"Enter Burning Mode","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/bl.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw","slug":"/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/bl","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/bl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/bl.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"Burn Bootloader Firmware"},"sidebar":"tutorialSidebar","previous":{"title":"LIS2DW","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/adxl345"},"next":{"title":"USB\u52A0\u901F\u5EA6\u8BA1(ADXL345)","permalink":"/fly-docs-next/en/docs/category/usb\u52A0\u901F\u5EA6\u8BA1adxl345"}}'),r=t("74132"),l=t("94551"),o=t("43801"),a=t("58099");t("31688");let s={sidebar_position:6,sidebar_label:"Burn Bootloader Firmware"},c="Katapult Firmware",d={},u=[{value:"Enter Burning Mode",id:"enter-burning-mode",level:2},{value:"Burn Firmware",id:"burn-firmware",level:2},...o.d$,...a.d$];function h(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{Button:i,ImageView:s,TabItem:c,Tabs:d}=n;return i||m("Button",!0),s||m("ImageView",!0),c||m("TabItem",!0),d||m("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"katapult-firmware",children:"Katapult Firmware"})}),"\n",(0,r.jsx)(n.h2,{id:"enter-burning-mode",children:"Enter Burning Mode"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["The circled part is the ",(0,r.jsx)(n.code,{children:"BOOT button"})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["To enter burning mode, the motherboard must be completely powered off. Press and hold the BOOT button, then connect one end of the data cable with data transmission to the motherboard and the other end to your device.","\n",(0,r.jsx)(s,{image:t(82719).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"burn-firmware",children:"Burn Firmware"}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsxs)(c,{value:"win",label:"Windows Burning Tutorial",default:!0,children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Katapult firmware for USB accelerometer ",(0,r.jsx)(i,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/firmware/BL/USBADXL.zip",children:"Click to download firmware automatically"})]}),"\n"]}),(0,r.jsx)(o.ZP,{})]}),(0,r.jsxs)(c,{value:"linux",label:"Host Computer Burning Tutorial",children:[(0,r.jsx)(a.ZP,{}),(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Burn Firmware"}),"\n"]}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Only one of the firmwares needs to be burned"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Below is the firmware flashing command","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ~/klipper/lib/rp2040_flash/rp2040_flash ~/FLY_Katapult/BL/USBADXL/FLY_USBADXL.uf2\n"})}),"\n"]}),"\n"]}),(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If the following prompt appears, the burning is successful"}),"\n",(0,r.jsx)(s,{image:t(49707).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"After burning, the motherboard needs to be completely powered off once."})})]})]})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},46366:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/2040-cc7587e65304922141ed75654c56e8e0.webp"},49707:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/flash3-ca07b1c5da933a137dbf5155a965a150.webp"},47368:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/2e8a-387d46703c1d67dcf7b6fd514e28df22.webp"},82719:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/boot-2e80594f649008c9a458be86b25524f0.webp"},94551:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var i=t(39546);let r={},l=i.createContext(r);function o(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);