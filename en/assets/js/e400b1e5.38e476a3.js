"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["17345"],{98412:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>o});var s=JSON.parse('{"id":"DebugDoc/BasicTutorial/index","title":"Connect to Host SSH via Network","description":"* This document is only applicable for the FLY host, other devices are for reference only.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/DebugDoc/BasicTutorial/index.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/","permalink":"/fly-docs-next/en/docs/DebugDoc/BasicTutorial/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"debugdocSidebar","previous":{"title":"\u4E0A\u4F4D\u673A\u57FA\u7840\u6559\u7A0B","permalink":"/fly-docs-next/en/docs/category/\u4E0A\u4F4D\u673A\u57FA\u7840\u6559\u7A0B"},"next":{"title":"Connecting to the Network via SSH","permalink":"/fly-docs-next/en/docs/DebugDoc/BasicTutorial/Internet"}}'),i=t("52676"),r=t("79938");let o={sidebar_position:1},a="Connect to Host SSH via Network",c={},l=[{value:"Connect to the host SSH via Serial Port",id:"connect-to-the-host-ssh-via-serial-port",level:2},{value:"Connect to the host SSH via Network IP",id:"connect-to-the-host-ssh-via-network-ip",level:2}];function d(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{ImageView:s,TabItem:o,Tabs:a}=n;return!s&&u("ImageView",!0),!o&&u("TabItem",!0),!a&&u("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"connect-to-host-ssh-via-network",children:"Connect to Host SSH via Network"})}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This document is only applicable for the FLY host, other devices are for reference only."}),"\n",(0,i.jsx)(n.li,{children:"If you are compiling and burning firmware, please refer to the network connection tutorial instead of the serial port connection tutorial."}),"\n"]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can connect to the device via serial or WIFI."}),"\n",(0,i.jsxs)(n.li,{children:["Please prepare ",(0,i.jsx)(n.strong,{children:"MobaXterm_Personal"})," or another ",(0,i.jsx)(n.strong,{children:"SSH terminal tool"})," in advance."]}),"\n",(0,i.jsxs)(n.li,{children:["Please ensure that the SD card or M2WE has been burned with the ",(0,i.jsx)(n.strong,{children:"corresponding host system"}),"."]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"If the host cannot start normally, please remove all peripherals such as drivers, limiters, fans, etc.!"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Finally, connect to the host via the network to facilitate firmware compilation!"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"For firmware compilation, please refer to the tutorial on connecting to the host via WIFI or Ethernet cable."})}),"\n"]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsxs)(o,{value:"serial",label:"Serial Connection",default:!0,children:[(0,i.jsx)(n.h2,{id:"connect-to-the-host-ssh-via-serial-port",children:"Connect to the host SSH via Serial Port"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use a USB Type-C cable to connect the FLY host to your computer."}),"\n",(0,i.jsx)(n.li,{children:"For other hosts, please query the connection method yourself!!"}),"\n"]}),(0,i.jsxs)(a,{children:[(0,i.jsxs)(o,{value:"c8",label:"FLY-C8",default:!0,children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"FLY-C8 Port"}),"\n"]}),(0,i.jsx)(s,{image:t(85187).Z,size:"40%",align:"center"})]}),(0,i.jsxs)(o,{value:"piv2",label:"FLY-Pi v2",default:!0,children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"FLY-Pi v2 Port"}),"\n"]}),(0,i.jsx)(s,{image:t(97494).Z,size:"20%",align:"center"})]}),(0,i.jsxs)(o,{value:"piv1",label:"FLY-Pi(\u03C0)",default:!0,children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"FLY-Pi Port"}),"\n"]}),(0,i.jsx)(s,{image:t(82174).Z,size:"20%",align:"center"})]}),(0,i.jsxs)(o,{value:"gemini",label:"FLY-Gemini",default:!0,children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"FLY-Gemini Port"}),"\n"]}),(0,i.jsx)(s,{image:t(23206).Z,size:"20%",align:"center"})]}),(0,i.jsxs)(o,{value:"minipad",label:"FLY-MiniPad",default:!0,children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"FLY-MiniPad Port"}),"\n"]}),(0,i.jsx)(s,{image:t(3686).Z,size:"30%",align:"center"})]}),(0,i.jsxs)(o,{value:"pilite2",label:"FLY-Pi Lite2",default:!0,children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"FLY-Pi Lite2 Port"}),"\n"]}),(0,i.jsx)(s,{image:t(8312).Z,size:"40%",align:"center"})]})]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the motherboard is connected normally to the computer, open Device Manager, and you will see the CH340 port."}),"\n"]}),(0,i.jsx)(s,{image:t(19063).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsx)(n.code,{children:"MobaXterm"}),", and set it up as follows, select the port seen in Device Manager."]}),"\n"]}),(0,i.jsx)(s,{image:t(25400).Z,size:"40%",align:"center"}),(0,i.jsx)(s,{image:t(91363).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If everything is normal, you should see the startup screen."}),"\n"]}),(0,i.jsx)(s,{image:t(88525).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"After a moment, if this screen appears, it means the system has started."}),"\n"]}),(0,i.jsx)(s,{image:t(61305).Z,size:"40%",align:"center"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"If after a few minutes, there is no display as shown below, press the Enter key a few times."})}),(0,i.jsx)(s,{image:t(23561).Z,size:"40%",align:"center"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"After pressing Enter, you will see the following content."})}),(0,i.jsx)(s,{image:t(72957).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you need to check the IP address, enter ",(0,i.jsx)(n.code,{children:"ip a | grep inet"})," in SSH and hit Enter. Find the IP address in the returned content that matches your router's segment to access it."]}),"\n"]}),(0,i.jsx)(s,{image:t(64578).Z,size:"40%",align:"center"})]}),(0,i.jsxs)(o,{value:"net",label:"Network Connection",default:!0,children:[(0,i.jsx)(n.h2,{id:"connect-to-the-host-ssh-via-network-ip",children:"Connect to the host SSH via Network IP"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ensure the system has ",(0,i.jsx)(n.strong,{children:"started normally"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Log in to the ",(0,i.jsx)(n.strong,{children:"router backend"})," connected to the host unless you know the host's IP address."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure you know the ",(0,i.jsx)(n.strong,{children:"host's username and password"}),", FLY system default username is ",(0,i.jsx)(n.strong,{children:"fly"}),", default password is ",(0,i.jsx)(n.strong,{children:"mellow"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"If the motherboard has started and is connected to the network, you can use the following methods to connect to SSH."}),"\n",(0,i.jsx)(n.li,{children:"Open MobaXterm and set it up as follows, fill in the IP address seen earlier, or view it in the router backend."}),"\n"]}),(0,i.jsx)(s,{image:t(25400).Z,size:"40%",align:"center"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note: In step 4, input the host's username."})}),(0,i.jsx)(s,{image:t(92364).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The first connection may pop up this window, click ",(0,i.jsx)(n.code,{children:"Accept"}),"."]}),"\n"]}),(0,i.jsx)(s,{image:t(4828).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When prompted to enter the password, enter the host's password and hit Enter."}),"\n"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note: The entered password is not visible, simply hit Enter after typing."})}),(0,i.jsxs)(n.p,{children:["FLY system default, username is: ",(0,i.jsx)(n.code,{children:"fly"}),", password is: ",(0,i.jsx)(n.code,{children:"mellow"})]}),(0,i.jsx)(s,{image:t(36847).Z,size:"40%",align:"center"}),(0,i.jsx)(s,{image:t(45565).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Successful login."}),"\n"]})]})]}),"\n",(0,i.jsx)(n.hr,{})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function u(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},85187:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/c8-port-6816085af07cf862fa261a15d28cf147.webp"},23206:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/gemini-port-8ad5dc8fcc8ac4d84ff82fddfa799553.webp"},3686:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/minipad-port-2b4dc5f3cdecd4c1fad8981d4eeb6639.webp"},25400:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-1-2a44e31779ffe0a74fdb09921c24ca3e.webp"},4828:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-10-2699dcaebc29cf1d3bedcdbb40b41b30.webp"},36847:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-11-3d58dd094664307317d5b7d7a973f88e.webp"},45565:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-12-032fc32a515ee0afe65d9e77762cbace.webp"},91363:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-2-273b3b4bfff52a5c1a1e388dc8964112.webp"},88525:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-3-151965778ddfb93f44aaa24e10e02dbb.webp"},61305:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-4-0d677ea96590d19d313472418b9d3fa4.webp"},23561:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-5-b93ee98e2487f52442dacc9b83e1b52a.webp"},72957:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-6-37fc63e0cb12b9b19420d7a374c3d31a.webp"},64578:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-8-d3370454369e54fbc22ca40c7ef50a2a.webp"},92364:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-9-262d9c655a1778c98421ad5179c4685c.webp"},19063:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pc-device-mgr-31e6d7f9b4a8a052cdfad54479b8de5e.webp"},82174:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pi-port-4613f1dd218929f19b8321a97d115048.webp"},8312:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pilite2-port-8464c005fb4765f4ac616e1fa3b52fab.webp"},97494:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/piv2-port-05142296eee0b68d1ec9d84c27acec72.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var s=t(75271);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);