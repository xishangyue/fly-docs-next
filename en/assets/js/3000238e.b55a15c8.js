"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["32293"],{14755:function(e,n,t){t.d(n,{ZP:function(){return l},d$:function(){return o}});var r=t(52676),i=t(79938);let o=[];function s(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Katapult was originally named CanBoot and was later renamed."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After being flashed using methods like DFU, you can use commands to update the firmware in one click."}),"\n",(0,r.jsx)(n.li,{children:"Advantages: Double resetting or quickly cutting power twice will enter the Katapult firmware, and the pre-configured LED will flash; if not configured, it won't flash."}),"\n",(0,r.jsx)(n.li,{children:"The Katapult firmware can only be used for flashing firmware and cannot connect to Klipper!!!"}),"\n",(0,r.jsxs)(n.li,{children:["There are three ways to connect the Katapult firmware to the host machine:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["CAN connection","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n",(0,r.jsx)(n.li,{children:"Disadvantages: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["RS232 connection","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can update the firmware using commands."}),"\n",(0,r.jsx)(n.li,{children:"Disadvantages: You cannot update the firmware in one click using commands; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["USB connection","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},38400:function(e,n,t){t.d(n,{ZP:function(){return l},d$:function(){return o}});var r=t(52676),i=t(79938);let o=[];function s(e){let n={code:"code",li:"li",ol:"ol",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{ImageView:o}=n;return!o&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Install the programming tool"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"No need to install the programming tool for the FLY upper computer."}),"\n",(0,r.jsx)(n.li,{children:"If you need to install it, please note: The upper computer needs to be connected to the internet to install successfully."}),"\n",(0,r.jsx)(n.li,{children:"If already installed, no need to install again."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install dfu-util -y\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Execute the following command to check if the connection is successful."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"lsusb\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If there is no DFU device, please try to re-enter ",(0,r.jsx)(n.strong,{children:"programming mode"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Due to system version issues, other names may be displayed. If ",(0,r.jsx)(n.code,{children:"0483:df11"})," is shown, it indicates that the programming mode has been entered."]}),"\n"]}),"\n",(0,r.jsx)(o,{image:t(44691).Z,size:"100%",align:"left"}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Pull the pre-compiled firmware"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"These are all pre-compiled firmwares."}),"\n",(0,r.jsx)(n.li,{children:"Please note: The upper computer needs to be connected to the internet to install."}),"\n",(0,r.jsx)(n.li,{children:"The upper computer needs to execute the command below to download the firmware package."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the firmware package has already been downloaded, it is recommended to update the firmware package before proceeding with the remaining steps."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/FLY_Katapult && git pull\n"})})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},16437:function(e,n,t){t.d(n,{ZP:function(){return l},d$:function(){return o}});var r=t(52676),i=t(79938);let o=[];function s(e){let n={admonition:"admonition",code:"code",li:"li",ol:"ol",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Button:o,ImageView:s}=n;return!o&&a("Button",!0),!s&&a("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["System compatibility issues, please use the computer's ",(0,r.jsx)(n.code,{children:"USB2.0"})," for burning"]}),"\n",(0,r.jsx)(n.li,{children:"If it still cannot be burned, please use an upper machine for burning"}),"\n"]})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Burning tool ",(0,r.jsx)(o,{variant:"contained",disableElevation:!0,href:"https://mellow-next.klipper.cn/docs/ResDownload/auxiliary_software/",children:"Download link"})]}),"\n",(0,r.jsxs)(n.li,{children:["Download ",(0,r.jsx)(n.code,{children:"SetupSTM32CubeProgrammer"})," and ",(0,r.jsx)(n.code,{children:"STM32 DFU driver"})]}),"\n",(0,r.jsxs)(n.li,{children:["Copy the compiled firmware (klipper.bin) or precompiled ",(0,r.jsx)(n.code,{children:"Katapult firmware"})," to any directory on your computer"]}),"\n",(0,r.jsxs)(n.li,{children:["Connect the motherboard to the computer using a Type-C data cable, ensuring that it has already entered ",(0,r.jsx)(n.strong,{children:"DFU burning mode"})]}),"\n",(0,r.jsxs)(n.li,{children:["In STM32CubeProgrammer, select USB mode and refresh to connect","\n",(0,r.jsx)(s,{image:t(54411).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"If no error pop-up appears, the connection is successful"}),"\n",(0,r.jsxs)(n.li,{children:["Click the download icon on the left and select several options below","\n",(0,r.jsx)(s,{image:t(88789).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Click the arrow point to ",(0,r.jsx)(n.code,{children:"Browse"}),", then choose the firmware you need to burn","\n",(0,r.jsx)(s,{image:t(34319).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.code,{children:"Start address"})," and enter ",(0,r.jsx)(n.code,{children:"0x08000000"}),"\n",(0,r.jsx)(s,{image:t(18134).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"Start automatic mode"})," below to start burning the firmware","\n",(0,r.jsx)(s,{image:t(92085).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["The following prompt indicates that the firmware burning is complete","\n",(0,r.jsx)(s,{image:t(61566).Z,size:"100%",align:"center"}),"\n"]}),"\n"]})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}function a(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},81434:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>h,frontMatter:()=>a});var r=JSON.parse('{"id":"ProductDoc/MainBoard/fly-super/fly-super8-pro/flash/bl","title":"BL Firmware","description":"* Please note that the bootloader has already been pre-flashed at the factory and does not need to be re-flashed.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-super/fly-super8-pro/flash/bl.mdx","sourceDirName":"ProductDoc/MainBoard/fly-super/fly-super8-pro/flash","slug":"/ProductDoc/MainBoard/fly-super/fly-super8-pro/flash/bl","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super8-pro/flash/bl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-super/fly-super8-pro/flash/bl.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"BL firmware, please ignore"},"sidebar":"tutorialSidebar","previous":{"title":"ID Search Tutorial","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super8-pro/flash/id"},"next":{"title":"Main Board Wiring","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super8-pro/wiring"}}'),i=t("52676"),o=t("79938"),s=t("16437"),l=t("38400");t("14755");let a={sidebar_position:6,sidebar_label:"BL firmware, please ignore"},c="BL Firmware",d={},h=[{value:"Entering Programming Mode",id:"entering-programming-mode",level:2},{value:"Flashing Firmware",id:"flashing-firmware",level:2},...s.d$,...l.d$];function u(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Button:r,ImageView:a,TabItem:c,Tabs:d}=n;return!r&&m("Button",!0),!a&&m("ImageView",!0),!c&&m("TabItem",!0),!d&&m("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"bl-firmware",children:"BL Firmware"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Please note that the ",(0,i.jsx)(n.code,{children:"bootloader"})," has already been pre-flashed at the factory and does not need to be re-flashed."]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"entering-programming-mode",children:"Entering Programming Mode"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"There are two methods to enter programming mode."}),"\n",(0,i.jsx)(n.li,{children:"The first method: With the motherboard completely powered off, short the BOOT pin and connect the data transfer cable to the motherboard and your device."}),"\n",(0,i.jsxs)(n.li,{children:["The second method: Connect the data transfer cable to the motherboard and your device, then short the BOOT pin and press the RST button, release the RST button, and finally disconnect the shorted BOOT jumper.","\n",(0,i.jsx)(a,{image:t(44280).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"flashing-firmware",children:"Flashing Firmware"}),"\n",(0,i.jsxs)(d,{children:[(0,i.jsxs)(c,{value:"win",label:"Windows flashing tutorial",default:!0,children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The bootloader firmware for SUPER8 PRO ",(0,i.jsx)(r,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/firmware/BL/SUPER.zip",children:"click to automatically download the firmware"})]}),"\n"]}),(0,i.jsx)(s.ZP,{})]}),(0,i.jsxs)(c,{value:"linux",label:"Host computer flashing tutorial",children:[(0,i.jsx)(l.ZP,{}),(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Flashing Firmware"}),"\n"]}),(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Only one firmware needs to be flashed."})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Below is the firmware flashing command","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo dfu-util -a 0 -d 0483:df11 --dfuse-address 0x08000000 -D ~/FLY_Katapult/BL/SUPER/SUPER8PRO.bin\n"})}),"\n"]}),"\n"]}),(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When the following content appears as shown by the arrow ",(0,i.jsx)(n.code,{children:"File downloaded successfully"}),", the flashing is successful."]}),"\n",(0,i.jsx)(a,{image:t(69056).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"After flashing, the motherboard needs to be completely powered off once."})})]})]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},44691:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/lsusb-460d7d3379cb644139898385fd86f2ec.webp"},69056:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/make-flash-85b1e01b14ed5924982a2ae7cb6501f0.webp"},54411:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/stm32cube-1-4d518a7b7231de7da7230ae63b82e477.webp"},88789:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/stm32cube-2-8f9f2f15bea5e6acf6c39175f13140fc.webp"},34319:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/stm32cube-3-51ae6c039223223689cbcab82827c416.webp"},18134:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/stm32cube-4-9cf41c6403736a50cf97b75379c12579.webp"},92085:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/stm32cube-5-02cc80158d21b9919d8815237e5555f3.webp"},61566:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/stm32cube-6-6011a605b09f201c9daa91f53d1c8fca.webp"},44280:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/boot-e6a739c1cb7097c2eff3ac9072eeb422.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var r=t(75271);let i={},o=r.createContext(i);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);