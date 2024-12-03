"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["84693"],{94717:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>l,frontMatter:()=>o});var s=JSON.parse('{"id":"ProductDoc/SBC/fly-pi-v2/ssh","title":"Connect to Host Machine via SSH","description":"* You can connect to the device using serial port or WIFI","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/SBC/fly-pi-v2/ssh.mdx","sourceDirName":"ProductDoc/SBC/fly-pi-v2","slug":"/ProductDoc/SBC/fly-pi-v2/ssh","permalink":"/fly-docs-next/en/docs/ProductDoc/SBC/fly-pi-v2/ssh","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-pi-v2/ssh.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"SSH Connection to Host Machine"},"sidebar":"tutorialSidebar","previous":{"title":"System Flashing","permalink":"/fly-docs-next/en/docs/ProductDoc/SBC/fly-pi-v2/fly-os"},"next":{"title":"Connect to Wi-Fi","permalink":"/fly-docs-next/en/docs/ProductDoc/SBC/fly-pi-v2/wifi"}}'),i=t("52676"),r=t("79938");let o={sidebar_position:3,sidebar_label:"SSH Connection to Host Machine"},c="Connect to Host Machine via SSH",a={},l=[{value:"Connect to Host Machine SSH via Serial Port",id:"connect-to-host-machine-ssh-via-serial-port",level:2},{value:"Connect to Host Machine SSH via Network IP",id:"connect-to-host-machine-ssh-via-network-ip",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{ImageView:s,TabItem:o,Tabs:c}=n;return!s&&u("ImageView",!0),!o&&u("TabItem",!0),!c&&u("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"connect-to-host-machine-via-ssh",children:"Connect to Host Machine via SSH"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can connect to the device using serial port or WIFI"}),"\n",(0,i.jsxs)(n.li,{children:["Please prepare in advance ",(0,i.jsx)(n.strong,{children:"MobaXterm_Personal"})," or other ",(0,i.jsx)(n.strong,{children:"SSH terminal tools"})]}),"\n",(0,i.jsxs)(n.li,{children:["Please ensure that the SD card or M2WE has been burned with the ",(0,i.jsx)(n.strong,{children:"corresponding host machine system"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"If the host machine cannot start normally, please remove all peripherals such as drivers, limiters, fans, etc.!"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Finally, connect to SSH via the network for firmware compilation!"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"For firmware compilation, see the tutorial on connecting the host machine via WIFI or Ethernet"})}),"\n"]}),"\n",(0,i.jsxs)(c,{children:[(0,i.jsxs)(o,{value:"serial",label:"Serial Port Connection",default:!0,children:[(0,i.jsx)(n.h2,{id:"connect-to-host-machine-ssh-via-serial-port",children:"Connect to Host Machine SSH via Serial Port"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use a USB Type-C cable to connect the FLY host machine to your computer"}),"\n",(0,i.jsx)(n.li,{children:"For other host machines, please query the connection method yourself!!"}),"\n"]}),(0,i.jsx)(c,{children:(0,i.jsxs)(o,{value:"piv2",label:"FLY-Pi v2",default:!0,children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"FLY-Pi v2 port"}),"\n"]}),(0,i.jsx)(s,{image:t(97494).Z,size:"20%",align:"center"})]})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the motherboard is connected normally to the computer, open Device Manager, and you will see the CH340 port"}),"\n"]}),(0,i.jsx)(s,{image:t(19063).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsx)(n.code,{children:"MobaXterm"}),", set it up as follows, select the port seen in Device Manager"]}),"\n"]}),(0,i.jsx)(s,{image:t(25400).Z,size:"40%",align:"center"}),(0,i.jsx)(s,{image:t(91363).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If everything is normal, you should see the boot screen"}),"\n"]}),(0,i.jsx)(s,{image:t(88525).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Wait a moment, and this screen indicates that it has started"}),"\n"]}),(0,i.jsx)(s,{image:t(61305).Z,size:"40%",align:"center"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"If after a few minutes, as shown in the following image, there is no display, press the Enter key a few times"})}),(0,i.jsx)(s,{image:t(23561).Z,size:"40%",align:"center"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"After pressing Enter, the following content will appear"})}),(0,i.jsx)(s,{image:t(72957).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To view the IP address, enter ",(0,i.jsx)(n.code,{children:"ip a | grep inet"})," in the SSH and find the IP address that matches your router in the returned content"]}),"\n"]}),(0,i.jsx)(s,{image:t(64578).Z,size:"40%",align:"center"})]}),(0,i.jsxs)(o,{value:"net",label:"Network Connection",default:!0,children:[(0,i.jsx)(n.h2,{id:"connect-to-host-machine-ssh-via-network-ip",children:"Connect to Host Machine SSH via Network IP"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Please log into the ",(0,i.jsx)(n.strong,{children:"router backend"})," of the connected host machine"]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure the system has already ",(0,i.jsx)(n.strong,{children:"started normally"})]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure you know the ",(0,i.jsx)(n.strong,{children:"username and password of the host machine"}),", the FLY system's default username is ",(0,i.jsx)(n.strong,{children:"fly"}),", default password is ",(0,i.jsx)(n.strong,{children:"mellow"})]}),"\n",(0,i.jsx)(n.li,{children:"If the motherboard has started and is connected to the network, you can use the IP to connect to SSH"}),"\n",(0,i.jsx)(n.li,{children:"Open MobaXterm, set it up as follows, fill in the IP address you saw earlier, or check it in the router backend"}),"\n"]}),(0,i.jsx)(s,{image:t(25400).Z,size:"40%",align:"center"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note: Here in step 4, input the username of the host machine"})}),(0,i.jsx)(s,{image:t(92364).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The first connection will prompt this window, click ",(0,i.jsx)(n.code,{children:"Accept"})]}),"\n"]}),(0,i.jsx)(s,{image:t(4828).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prompt for password, enter the host machine password and press Enter"}),"\n"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note: Here the entered password is not visible, just press Enter after typing"})}),(0,i.jsxs)(n.p,{children:["The default username for the FLY system is: ",(0,i.jsx)(n.code,{children:"fly"}),", password is: ",(0,i.jsx)(n.code,{children:"mellow"})]}),(0,i.jsx)(s,{image:t(36847).Z,size:"40%",align:"center"}),(0,i.jsx)(s,{image:t(45565).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Login successful"}),"\n"]})]})]}),"\n",(0,i.jsx)(n.hr,{})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function u(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},25400:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-1-2a44e31779ffe0a74fdb09921c24ca3e.webp"},4828:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-10-2699dcaebc29cf1d3bedcdbb40b41b30.webp"},36847:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-11-3d58dd094664307317d5b7d7a973f88e.webp"},45565:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-12-032fc32a515ee0afe65d9e77762cbace.webp"},91363:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-2-273b3b4bfff52a5c1a1e388dc8964112.webp"},88525:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-3-151965778ddfb93f44aaa24e10e02dbb.webp"},61305:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-4-0d677ea96590d19d313472418b9d3fa4.webp"},23561:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-5-b93ee98e2487f52442dacc9b83e1b52a.webp"},72957:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-6-37fc63e0cb12b9b19420d7a374c3d31a.webp"},64578:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-8-d3370454369e54fbc22ca40c7ef50a2a.webp"},92364:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-9-262d9c655a1778c98421ad5179c4685c.webp"},19063:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pc-device-mgr-31e6d7f9b4a8a052cdfad54479b8de5e.webp"},97494:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/piv2-port-05142296eee0b68d1ec9d84c27acec72.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var s=t(75271);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);