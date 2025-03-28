"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["31675"],{42462:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>o});var s=JSON.parse('{"id":"ProductDoc/SBC/fly-mini-pad/ssh","title":"Connect to Host Machine via SSH","description":"* You can connect to the device using serial port or WIFI.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/SBC/fly-mini-pad/ssh.mdx","sourceDirName":"ProductDoc/SBC/fly-mini-pad","slug":"/ProductDoc/SBC/fly-mini-pad/ssh","permalink":"/fly-docs-next/en/docs/ProductDoc/SBC/fly-mini-pad/ssh","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-mini-pad/ssh.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"SSH Connection to Host Machine"},"sidebar":"tutorialSidebar","previous":{"title":"System Burn-in","permalink":"/fly-docs-next/en/docs/ProductDoc/SBC/fly-mini-pad/fly-os"},"next":{"title":"Connect to WIFI","permalink":"/fly-docs-next/en/docs/ProductDoc/SBC/fly-mini-pad/wifi"}}'),i=t("52676"),r=t("79938");let o={sidebar_position:3,sidebar_label:"SSH Connection to Host Machine"},a="Connect to Host Machine via SSH",c={},l=[{value:"Connect to Host Machine SSH via Serial Port",id:"connect-to-host-machine-ssh-via-serial-port",level:2},{value:"Connect to Host Machine SSH via Network IP",id:"connect-to-host-machine-ssh-via-network-ip",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{ImageView:s,TabItem:o,Tabs:a}=n;return!s&&u("ImageView",!0),!o&&u("TabItem",!0),!a&&u("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"connect-to-host-machine-via-ssh",children:"Connect to Host Machine via SSH"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can connect to the device using serial port or WIFI."}),"\n",(0,i.jsxs)(n.li,{children:["Please prepare ",(0,i.jsx)(n.strong,{children:"MobaXterm_Personal"})," or other ",(0,i.jsx)(n.strong,{children:"SSH terminal tools"})," in advance."]}),"\n",(0,i.jsx)(n.li,{children:"Please ensure that the SD card or M2WE has been burned with the system corresponding to the host machine."}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"If the host machine cannot start normally, please remove all peripherals such as drivers, limiters, fans, etc.!"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Finally, please connect to the SSH through the network for convenient firmware compilation!"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"For firmware compilation, refer to the tutorial on connecting to the host machine via WIFI or Ethernet cable."})}),"\n"]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsxs)(o,{value:"serial",label:"Serial Port Connection",default:!0,children:[(0,i.jsx)(n.h2,{id:"connect-to-host-machine-ssh-via-serial-port",children:"Connect to Host Machine SSH via Serial Port"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use a USB Type-C cable to connect the FLY host machine to the computer."}),"\n",(0,i.jsx)(n.li,{children:"For other host machines, please query the connection method yourself!!"}),"\n"]}),(0,i.jsx)(a,{children:(0,i.jsxs)(o,{value:"minipad",label:"FLY-MiniPad",default:!0,children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"FLY-MiniPad port"}),"\n"]}),(0,i.jsx)(s,{image:t(3686).Z,size:"30%",align:"center"})]})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the motherboard is connected normally to the computer, you can see the CH340 port in the Device Manager."}),"\n"]}),(0,i.jsx)(s,{image:t(19063).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsx)(n.code,{children:"MobaXterm"})," and set it up as follows, select the port seen in the Device Manager earlier."]}),"\n"]}),(0,i.jsx)(s,{image:t(25400).Z,size:"40%",align:"center"}),(0,i.jsx)(s,{image:t(91363).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If everything is normal, you should be able to see the startup screen."}),"\n"]}),(0,i.jsx)(s,{image:t(88525).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Wait a moment, if this screen appears, it means it has started."}),"\n"]}),(0,i.jsx)(s,{image:t(61305).Z,size:"40%",align:"center"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"If after a few minutes, there's no display as shown below, press the enter key a few times."})}),(0,i.jsx)(s,{image:t(23561).Z,size:"40%",align:"center"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"After pressing enter, you will see the following content."})}),(0,i.jsx)(s,{image:t(72957).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you need to check the IP address, enter ",(0,i.jsx)(n.code,{children:"ip a | grep inet"})," in SSH and press enter. Find the IP address in the returned content that is in the same segment as your router to access it."]}),"\n"]}),(0,i.jsx)(s,{image:t(64578).Z,size:"40%",align:"center"})]}),(0,i.jsxs)(o,{value:"net",label:"Network Connection",default:!0,children:[(0,i.jsx)(n.h2,{id:"connect-to-host-machine-ssh-via-network-ip",children:"Connect to Host Machine SSH via Network IP"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Please log into the ",(0,i.jsx)(n.strong,{children:"router backend"})," of the connected host machine."]}),"\n",(0,i.jsx)(n.li,{children:"Ensure that the system has started normally."}),"\n",(0,i.jsxs)(n.li,{children:["Ensure that you know the username and password of the host machine. The default username for the FLY system is ",(0,i.jsx)(n.strong,{children:"fly"}),", and the default password is ",(0,i.jsx)(n.strong,{children:"mellow"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"If the motherboard has started and is connected to the network, you can connect to SSH using the IP address."}),"\n",(0,i.jsx)(n.li,{children:"Open MobaXterm and set it up as follows, fill in the IP address seen earlier, or view it in the router backend."}),"\n"]}),(0,i.jsx)(s,{image:t(25400).Z,size:"40%",align:"center"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note: In step 4, input the username of the host machine here."})}),(0,i.jsx)(s,{image:t(92364).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The first connection will pop up this window, click ",(0,i.jsx)(n.code,{children:"Accept"}),"."]}),"\n"]}),(0,i.jsx)(s,{image:t(4828).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prompt for password, enter the host machine password and press enter."}),"\n"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note: The password entered here is not visible. Press enter directly after typing it."})}),(0,i.jsxs)(n.p,{children:["The default username for the FLY system is ",(0,i.jsx)(n.code,{children:"fly"}),", and the password is ",(0,i.jsx)(n.code,{children:"mellow"}),"."]}),(0,i.jsx)(s,{image:t(36847).Z,size:"40%",align:"center"}),(0,i.jsx)(s,{image:t(45565).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Successfully logged in."}),"\n"]})]})]}),"\n",(0,i.jsx)(n.hr,{})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function u(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},3686:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/minipad-port-2b4dc5f3cdecd4c1fad8981d4eeb6639.webp"},25400:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-1-2a44e31779ffe0a74fdb09921c24ca3e.webp"},4828:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-10-2699dcaebc29cf1d3bedcdbb40b41b30.webp"},36847:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-11-3d58dd094664307317d5b7d7a973f88e.webp"},45565:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-12-032fc32a515ee0afe65d9e77762cbace.webp"},91363:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-2-273b3b4bfff52a5c1a1e388dc8964112.webp"},88525:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-3-151965778ddfb93f44aaa24e10e02dbb.webp"},61305:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-4-0d677ea96590d19d313472418b9d3fa4.webp"},23561:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-5-b93ee98e2487f52442dacc9b83e1b52a.webp"},72957:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-6-37fc63e0cb12b9b19420d7a374c3d31a.webp"},64578:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-8-d3370454369e54fbc22ca40c7ef50a2a.webp"},92364:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-9-262d9c655a1778c98421ad5179c4685c.webp"},19063:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pc-device-mgr-31e6d7f9b4a8a052cdfad54479b8de5e.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var s=t(75271);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);