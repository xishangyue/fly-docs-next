"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["58609"],{14755:function(e,n,t){t.d(n,{ZP:function(){return a},d$:function(){return o}});var i=t(52676),r=t(79938);let o=[];function s(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Katapult was originally named CanBoot, and later renamed to katapult."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After burning the firmware using methods like DFU, you can use commands to update the firmware with one click."}),"\n",(0,i.jsx)(n.li,{children:"Advantage: Quickly double-clicking the reset button or quickly cutting power twice will enter the Katapult firmware, at which point there will be an LED flashing on the mainboard."}),"\n",(0,i.jsx)(n.li,{children:"Katapult firmware can only be used to burn firmware and cannot connect to Klipper!!!"}),"\n",(0,i.jsxs)(n.li,{children:["Katapult firmware supports three connection methods for connecting to the host computer, and the firmwares for these three methods are independent of each other.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["CAN connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can directly update the firmware using a command, and it has strong interference resistance."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["RS232 connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can update the firmware using a command, and it has very strong interference resistance."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: You cannot use a command to update the firmware with one click; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["USB connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can directly update the firmware using a command."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: A long data cable is prone to interference, which may lead to disconnection."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},38400:function(e,n,t){t.d(n,{ZP:function(){return a},d$:function(){return o}});var i=t(52676),r=t(79938);let o=[];function s(e){let n={code:"code",li:"li",ol:"ol",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{ImageView:o}=n;return!o&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Install the burning tool"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No need to install the burning tool for the FLY upper computer"}),"\n",(0,i.jsx)(n.li,{children:"If you need to install, please note: The upper computer needs to be connected to the internet to install normally"}),"\n",(0,i.jsx)(n.li,{children:"If already installed, no need to install"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install dfu-util -y\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Execute the following command to check if the connection is successful."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"lsusb\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If there is no DFU device, please try to re-enter ",(0,i.jsx)(n.strong,{children:"burning mode"})]}),"\n",(0,i.jsxs)(n.li,{children:["Due to system version issues, other names may be displayed. If ",(0,i.jsx)(n.code,{children:"0483:df11"})," is shown, it indicates that the burning mode has been entered"]}),"\n"]}),"\n",(0,i.jsx)(o,{image:t(44691).Z,size:"100%",align:"left"}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Pull the pre-compiled firmware"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"These are all pre-compiled firmwares"}),"\n",(0,i.jsx)(n.li,{children:"Please note: The upper computer needs to be connected to the internet to install"}),"\n",(0,i.jsx)(n.li,{children:"The upper computer needs to execute the command below to download the firmware package (if unable to get the file due to network issues on the upper computer, please contact the administrator in the after-sales group)"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the firmware package has already been downloaded, it is recommended to update the firmware package before proceeding with the remaining operations"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~/FLY_Katapult && git pull\n"})})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},16437:function(e,n,t){t.d(n,{ZP:function(){return a},d$:function(){return o}});var i=t(52676),r=t(79938);let o=[];function s(e){let n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components},{Button:o,ImageView:s}=n;return!o&&l("Button",!0),!s&&l("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["System compatibility issues, please use the computer's ",(0,i.jsx)(n.code,{children:"USB2.0"})," for burning"]}),"\n",(0,i.jsx)(n.li,{children:"If it still cannot be burned, please use the host machine for burning"}),"\n"]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Burning tool ",(0,i.jsx)(o,{variant:"contained",disableElevation:!0,href:"https://mellow-next.klipper.cn/docs/ResDownload/auxiliary_software/",children:"Download link"})]}),"\n",(0,i.jsxs)(n.li,{children:["Need to download ",(0,i.jsx)(n.code,{children:"SetupSTM32CubeProgrammer"})," and ",(0,i.jsx)(n.code,{children:"STM32 DFU driver"})]}),"\n",(0,i.jsxs)(n.li,{children:["Copy the firmware (klipper.bin) compiled in front or the precompiled ",(0,i.jsx)(n.code,{children:"Katapult firmware"})," to any directory on the computer"]}),"\n",(0,i.jsxs)(n.li,{children:["Use a Type-C data cable to connect the motherboard to the computer, make sure it is already:",(0,i.jsx)(o,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/MainBoard/fly-d/fly-d5/flash/bl#enter-dfu-burning-mode",children:"Enter DFU burning mode"})]}),"\n",(0,i.jsxs)(n.li,{children:["In STM32CubeProgrammer, select USB mode, refresh, and connect","\n",(0,i.jsx)(s,{image:t(54411).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["If no error pop-up appears, then the connection is successful.","\n",(0,i.jsx)(n.admonition,{title:"Warning",type:"danger",children:(0,i.jsxs)(n.p,{children:["If the content shown below appears, it indicates a problem with the computer or software, please use the host machine for burning:",(0,i.jsx)(o,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/MainBoard/fly-d/fly-d5/flash/bl#burn-firmware",children:"Host machine burning tutorial"})]})}),"\n",(0,i.jsx)(s,{image:t(11542).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Click the download icon on the left and select several options below","\n",(0,i.jsx)(s,{image:t(88789).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.code,{children:"Browse"})," button indicated by the arrow, then select the firmware you need to burn","\n",(0,i.jsx)(s,{image:t(34319).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.code,{children:"Start address"})," and enter ",(0,i.jsx)(n.code,{children:"0x08000000"}),"\n",(0,i.jsx)(s,{image:t(18134).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Start automatic mode"})," below to start burning the firmware","\n",(0,i.jsx)(s,{image:t(92085).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The prompt below indicates that the firmware burning is complete","\n",(0,i.jsx)(s,{image:t(61566).Z,size:"100%",align:"center"}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}function l(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},70368:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>m,assets:()=>d,toc:()=>h,frontMatter:()=>l});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash/bl","title":"BL Firmware","description":"* Note that the bootloader has been pre-flashed at the factory and does not need to be flashed again","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash/bl.mdx","sourceDirName":"ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash","slug":"/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash/bl","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash/bl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash/bl.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"BL Firmware, Please Ignore"},"sidebar":"tutorialSidebar","previous":{"title":"ID Search Tutorial","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash/id"},"next":{"title":"klipper\u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/cfg"}}'),r=t("52676"),o=t("79938"),s=t("16437"),a=t("38400");t("14755");let l={sidebar_position:6,sidebar_label:"BL Firmware, Please Ignore"},c="BL Firmware",d={},h=[{value:"Enter Burning Mode",id:"enter-burning-mode",level:2},{value:"Burn Firmware",id:"burn-firmware",level:2},...s.d$,...a.d$];function u(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Button:i,ImageView:l,TabItem:c,Tabs:d}=n;return!i&&p("Button",!0),!l&&p("ImageView",!0),!c&&p("TabItem",!0),!d&&p("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"bl-firmware",children:"BL Firmware"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Note that the ",(0,r.jsx)(n.code,{children:"bootloader"})," has been pre-flashed at the factory and does not need to be flashed again"]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"enter-burning-mode",children:"Enter Burning Mode"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"There are two ways to enter burning mode"}),"\n",(0,r.jsx)(n.li,{children:"The first method: with the motherboard completely powered off, short-circuit BOOT and BOOT1, then connect one end of the data cable with data transmission to the motherboard and the other end to your device"}),"\n",(0,r.jsxs)(n.li,{children:["The second method: after connecting one end of the data cable with data transmission to the motherboard and the other end to your device, short-circuit BOOT and BOOT1, then press the RST key, then release the RST key and finally disconnect the short-circuit BOOT jumper","\n",(0,r.jsx)(l,{image:t(23808).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"burn-firmware",children:"Burn Firmware"}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsxs)(c,{value:"win",label:"Windows Burning Tutorial",default:!0,children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Gemini's bootloader firmware ",(0,r.jsx)(i,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/firmware/BL/GeminiV3.bin",children:"Click to Automatically Download Firmware"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set dip switches ",(0,r.jsx)(n.code,{children:"3"}),", ",(0,r.jsx)(n.code,{children:"4"})," to the right to connect the lower machine to the upper machine via built-in USB"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set dip switches ",(0,r.jsx)(n.code,{children:"1"}),", ",(0,r.jsx)(n.code,{children:"2"})," to the left, otherwise it will affect the connection between the lower machine and the upper machine"]}),"\n",(0,r.jsx)(l,{image:t(52268).Z,size:"50%",align:"center"}),"\n"]}),"\n"]}),(0,r.jsx)(s.ZP,{})]}),(0,r.jsxs)(c,{value:"linux",label:"Upper Machine Burning Tutorial",children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Set dip switches ",(0,r.jsx)(n.code,{children:"1"}),", ",(0,r.jsx)(n.code,{children:"2"})," to the right to connect the lower machine to the upper machine via built-in USB"]}),"\n",(0,r.jsxs)(n.li,{children:["Set dip switches ",(0,r.jsx)(n.code,{children:"3"}),", ",(0,r.jsx)(n.code,{children:"4"})," to the left, otherwise it will affect the connection between the lower machine and the upper machine","\n",(0,r.jsx)(l,{image:t(4742).Z,size:"50%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["After setting the dip switches in this way, the lower USB port will be occupied by the lower machine, please do not connect other devices","\n",(0,r.jsx)(l,{image:t(62977).Z,size:"50%",align:"center"}),"\n"]}),"\n"]}),(0,r.jsx)(a.ZP,{}),(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Burn Firmware"}),"\n"]}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Only one of the firmwares needs to be burned"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Below is the bootloader firmware writing command","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo dfu-util -a 0 -d 0483:df11 --dfuse-address 0x08000000 -D ~/FLY_Katapult/BL/Gemini/GeminiV3.bin\n"})}),"\n"]}),"\n"]}),(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["If the content shown by the arrow in the figure below ",(0,r.jsx)(n.code,{children:"File downloaded successfully"})," appears, then the burning is successful"]}),"\n"]}),(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Ignore the ",(0,r.jsx)(n.strong,{children:"error messages"})," after the red arrow\u6240\u6307\u8FD9\u4E00\u884C\uFF01\uFF01\uFF01"]})}),(0,r.jsx)(l,{image:t(69056).Z,size:"100%",align:"center"}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"After the burning is completed, the motherboard needs to be completely powered off once."})})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},44691:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/lsusb-460d7d3379cb644139898385fd86f2ec.webp"},69056:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/make-flash-85b1e01b14ed5924982a2ae7cb6501f0.webp"},54411:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/stm32cube-1-4d518a7b7231de7da7230ae63b82e477.webp"},88789:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/stm32cube-2-8f9f2f15bea5e6acf6c39175f13140fc.webp"},34319:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/stm32cube-3-51ae6c039223223689cbcab82827c416.webp"},18134:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/stm32cube-4-9cf41c6403736a50cf97b75379c12579.webp"},92085:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/stm32cube-5-02cc80158d21b9919d8815237e5555f3.webp"},61566:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/stm32cube-6-6011a605b09f201c9daa91f53d1c8fca.webp"},11542:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/stm32cube-7-aaf9c753d51189c3c1566d683e552682.webp"},62977:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/usb-53255bdb9281af5f357a85c4b4ceb1be.webp"},23808:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/boot-0b447ca885909e438bd97d564f106caf.webp"},4742:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/dip1-891542cd5c3d510a77a1b520b5cf1d26.webp"},52268:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/dip3-4a1e2c21589a03ed82aa1c70e286cc25.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var i=t(75271);let r={},o=i.createContext(r);function s(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);