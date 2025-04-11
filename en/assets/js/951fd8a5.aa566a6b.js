"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["79327"],{98932:function(e,n,t){t.d(n,{ZP:function(){return l},d$:function(){return o}});var i=t(85893),r=t(50065);let o=[{value:"WIFI Configuration Instructions",id:"wifi-configuration-instructions",level:3}];function s(e){let n={admonition:"admonition",h1:"h1",h3:"h3",header:"header",li:"li",ul:"ul",...(0,r.a)(),...e.components},{Button:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Button",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"flyos_env-usage",children:"FLYOS_Env Usage"})}),"\n",(0,i.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Starting from system version 3.3.4, you can directly use FLY-TOOLS for system configuration without entering boot to modify configurations."}),"\n",(0,i.jsx)(n.li,{children:"Please note that older systems do not support direct use of FLY-TOOLS for configuration."}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(t,{variant:"contained",disableElevation:!0,href:"/docs/ToolsDoc/fly-tools/",children:"Tutorial for Using FLY_TOOLS"}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"wifi-configuration-instructions",children:"WIFI Configuration Instructions"}),"\n",(0,i.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The WIFI configuration method is complex and requires connecting to the host machine via serial port before performing WIFI connection."}),"\n"]})})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},48977:function(e,n,t){t.d(n,{ZP:function(){return d},d$:function(){return s}});var i=t(85893),r=t(50065),o=t(14393);let s=[{value:"Preparation",id:"preparation",level:3},{value:"Formatting Memory Card",id:"formatting-memory-card",level:3},{value:"Burning to SD Card",id:"burning-to-sd-card",level:3},...o.d$];function l(e){let n={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ul:"ul",...(0,r.a)(),...e.components},{Button:s,ImageView:l}=n;return s||a("Button",!0),l||a("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"system-burn-in-sd-card",children:"System Burn-in SD Card"})}),"\n",(0,i.jsx)(n.h3,{id:"preparation",children:"Preparation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["First install the software ",(0,i.jsx)(n.code,{children:"Win32DiskImager"}),"\n",(0,i.jsx)(s,{variant:"contained",disableElevation:!0,href:"https://mellow.klipper.cn/docs/ResDownload/auxiliary_software/\xdf",children:"Formatting Tool"})]}),"\n",(0,i.jsxs)(n.li,{children:["Extract the system and the file name after extraction should have a ",(0,i.jsx)(n.code,{children:".img"})," suffix"]}),"\n",(0,i.jsxs)(n.li,{children:["It is not recommended to use ",(0,i.jsx)(n.code,{children:"balenaetcher"})," or ",(0,i.jsx)(n.code,{children:"Raspberry Pi"})," for system burning"]}),"\n",(0,i.jsx)(n.li,{children:"Insert the SD card into the reader and plug the reader into the computer's USB interface"}),"\n",(0,i.jsx)(n.li,{children:"If the SD card has data, please back it up. After the system is burned, the system card is not recommended to be removed. You can only remove the SD card after it needs to be burned to M2WE and then removed"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"formatting-memory-card",children:"Formatting Memory Card"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use the ",(0,i.jsx)(n.code,{children:"SDFormatter.exe"})," software to format the SD card"]}),"\n",(0,i.jsx)(n.li,{children:"Select the disk you want to format"}),"\n"]}),"\n",(0,i.jsx)(l,{image:t(87695).Z,size:"80%",align:"left"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Alternatively, use the built-in Disk Management in Windows to delete the partition, and then re-create the partition after deleting the partition."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"burning-to-sd-card",children:"Burning to SD Card"}),"\n",(0,i.jsx)(o.ZP,{})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function a(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},14393:function(e,n,t){t.d(n,{ZP:function(){return l},d$:function(){return o}});var i=t(85893),r=t(50065);let o=[];function s(e){let n={h1:"h1",header:"header",li:"li",ul:"ul",...(0,r.a)(),...e.components},{ImageView:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"testing",children:"Testing"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Select the file to be burned in red"}),"\n",(0,i.jsx)(n.li,{children:"Select the TF card to be burned in orange"}),"\n",(0,i.jsx)(n.li,{children:"Burn the system to the TF card in blue"}),"\n"]}),"\n",(0,i.jsx)(o,{image:t(22079).Z,size:"80%",align:"left"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Confirm burning and wait for it to complete"}),"\n"]}),"\n",(0,i.jsx)(o,{image:t(98219).Z,size:"80%",align:"left"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Burning completed"}),"\n"]}),"\n",(0,i.jsx)(o,{image:t(29028).Z,size:"80%",align:"left"})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},5834:function(e,n,t){t.r(n),t.d(n,{default:()=>f,frontMatter:()=>d,metadata:()=>i,assets:()=>c,toc:()=>u,contentTitle:()=>a});var i=JSON.parse('{"id":"ProductDoc/SBC/fly-lite/lite2.1/fly-os","title":"System Burn-in","description":"Host User Guide for Beginners","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/SBC/fly-lite/lite2.1/fly-os.mdx","sourceDirName":"ProductDoc/SBC/fly-lite/lite2.1","slug":"/ProductDoc/SBC/fly-lite/lite2.1/fly-os","permalink":"/fly-docs-next/en/docs/ProductDoc/SBC/fly-lite/lite2.1/fly-os","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-lite/lite2.1/fly-os.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"System Burn-in"},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/fly-docs-next/en/docs/ProductDoc/SBC/fly-lite/lite2.1/"},"next":{"title":"SSH Connection to Host Computer","permalink":"/fly-docs-next/en/docs/ProductDoc/SBC/fly-lite/lite2.1/ssh"}}'),r=t("85893"),o=t("50065"),s=t("48977"),l=t("98932");let d={sidebar_position:2,sidebar_label:"System Burn-in"},a="System Burn-in",c={},u=[{value:"Host User Guide for Beginners",id:"host-user-guide-for-beginners",level:2},{value:"Preparation Before System Burn-in",id:"preparation-before-system-burn-in",level:2},{value:"System Burn-in",id:"system-burn-in-1",level:2},...s.d$,{value:"System Configuration",id:"system-configuration",level:2},...l.d$,{value:"Install the TF Card onto LITE 2.1",id:"install-the-tf-card-onto-lite-21",level:2}];function h(e){let n={admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,o.a)(),...e.components},{Button:i,ImageView:d}=n;return i||m("Button",!0),d||m("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"system-burn-in",children:"System Burn-in"})}),"\n",(0,r.jsx)(n.h2,{id:"host-user-guide-for-beginners",children:"Host User Guide for Beginners"}),"\n",(0,r.jsx)(i,{variant:"contained",disableElevation:!0,href:"/docs/DebugDoc/baodian/host/",children:"Host User Guide for Beginners"}),"\n",(0,r.jsx)(n.h2,{id:"preparation-before-system-burn-in",children:"Preparation Before System Burn-in"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Card Reader"}),"\n",(0,r.jsx)(n.li,{children:"One TF card with capacity not less than 16GB or not greater than 128GB, and the transfer speed of the TF card must be Class10 or above"}),"\n",(0,r.jsxs)(n.li,{children:["Download the corresponding ",(0,r.jsx)(i,{variant:"contained",disableElevation:!0,href:"/docs/ResDownload/system-img/fly-lite2",children:"System Image"})]}),"\n",(0,r.jsxs)(n.li,{children:["Download the required ",(0,r.jsx)(i,{variant:"contained",disableElevation:!0,href:"/docs/ResDownload/auxiliary_software/",children:"Burn-in Tool"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"system-burn-in-1",children:"System Burn-in"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Lite 2.1 can only burn the system to the TF card and cannot use M2WE."}),"\n",(0,r.jsx)(n.li,{children:"After the system is burned in, the TF card needs to be installed on Lite 2.1."}),"\n"]})}),"\n",(0,r.jsx)(s.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"system-configuration",children:"System Configuration"}),"\n",(0,r.jsx)(l.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"install-the-tf-card-onto-lite-21",children:"Install the TF Card onto LITE 2.1"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"After burning the system into the TF card, you need to connect the TF card to this location on LITE 2.1, otherwise the system will not start."}),"\n"]}),"\n",(0,r.jsx)(d,{image:t(4988).Z,size:"100%",align:"left"})]})}function f(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87695:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/sdformatter-dd0569bb3f8db34c5fbb6378e22b400f.webp"},22079:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/win32-8a8c75acd2f887ac96687d9bf4b28283.webp"},98219:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/win32_1-9b6d182c53acf52bdb4bc9c3c5712149.webp"},29028:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/win32_2-fce90265a0b22b152c8eb72683b55289.webp"},4988:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/tf-ef9d727d8d02bc8792ae365d75165467.webp"},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var i=t(67294);let r={},o=i.createContext(r);function s(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);