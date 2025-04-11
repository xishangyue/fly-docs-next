"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["84693"],{81770:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"ProductDoc/SBC/fly-pi-v2/ssh","title":"Connect to Host Machine via SSH","description":"* You can use serial port or Wi-Fi to connect to the device.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/SBC/fly-pi-v2/ssh.mdx","sourceDirName":"ProductDoc/SBC/fly-pi-v2","slug":"/ProductDoc/SBC/fly-pi-v2/ssh","permalink":"/fly-docs-next/en/docs/ProductDoc/SBC/fly-pi-v2/ssh","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-pi-v2/ssh.mdx","tags":[],"version":"current","lastUpdatedBy":"Zin2233","lastUpdatedAt":1744127993000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"SSH Connection to Host Machine"},"sidebar":"tutorialSidebar","previous":{"title":"System Burning","permalink":"/fly-docs-next/en/docs/ProductDoc/SBC/fly-pi-v2/fly-os"},"next":{"title":"Connect to Wi-Fi","permalink":"/fly-docs-next/en/docs/ProductDoc/SBC/fly-pi-v2/wifi"}}'),i=t("85893"),r=t("50065");let o={sidebar_position:3,sidebar_label:"SSH Connection to Host Machine"},c="Connect to Host Machine via SSH",a={},l=[{value:"Use Serial Port to Connect to Host Machine SSH",id:"use-serial-port-to-connect-to-host-machine-ssh",level:2},{value:"Use Network IP to Connect to Host Machine SSH",id:"use-network-ip-to-connect-to-host-machine-ssh",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{ImageView:s,TabItem:o,Tabs:c}=n;return s||u("ImageView",!0),o||u("TabItem",!0),c||u("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"connect-to-host-machine-via-ssh",children:"Connect to Host Machine via SSH"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can use serial port or Wi-Fi to connect to the device."}),"\n",(0,i.jsxs)(n.li,{children:["Please prepare ",(0,i.jsx)(n.strong,{children:"MobaXterm_Personal"})," or other ",(0,i.jsx)(n.strong,{children:"SSH terminal tools"})," in advance."]}),"\n",(0,i.jsxs)(n.li,{children:["Please confirm that the SD card or M2WE has burned the ",(0,i.jsx)(n.strong,{children:"corresponding host system"}),"."]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"If the host machine cannot start normally, please remove peripherals such as drivers, limiters, fans, etc.!"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Finally, please connect to SSH via the network for firmware compilation!"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"For firmware compilation, refer to the tutorial on connecting to the host machine via Wi-Fi or Ethernet cable."})}),"\n"]}),"\n",(0,i.jsxs)(c,{children:[(0,i.jsxs)(o,{value:"serial",label:"Serial Connection",default:!0,children:[(0,i.jsx)(n.h2,{id:"use-serial-port-to-connect-to-host-machine-ssh",children:"Use Serial Port to Connect to Host Machine SSH"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Use a USB Type-C cable to connect the FLY host machine to the computer."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For other host machines, please query the connection method yourself!!"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"FLY-Pi v2 port"}),"\n",(0,i.jsx)(s,{image:t(40471).Z,size:"30%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If the motherboard is connected to the computer normally, you can see the CH340 port in the Device Manager."}),"\n"]}),"\n"]}),(0,i.jsx)(s,{image:t(42974).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsx)(n.code,{children:"MobaXterm"}),", and make the following settings, select the port seen in the Device Manager earlier."]}),"\n"]}),(0,i.jsx)(s,{image:t(43845).Z,size:"40%",align:"center"}),(0,i.jsx)(s,{image:t(92714).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If everything is normal, you can see the boot screen."}),"\n"]}),(0,i.jsx)(s,{image:t(37395).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"After a while, this screen appears, indicating the startup is complete."}),"\n"]}),(0,i.jsx)(s,{image:t(98862).Z,size:"40%",align:"center"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"If there is no display after waiting for a few minutes, press the Enter key a few times."})}),(0,i.jsx)(s,{image:t(94898).Z,size:"40%",align:"center"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"After pressing Enter, the content shown in the following figure will appear."})}),(0,i.jsx)(s,{image:t(69860).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you need to view the IP address, enter ",(0,i.jsx)(n.code,{children:"ip a | grep inet"})," in the SSH and press Enter. Find the IP address that matches your router segment to access."]}),"\n"]}),(0,i.jsx)(s,{image:t(98105).Z,size:"40%",align:"center"})]}),(0,i.jsxs)(o,{value:"net",label:"Network Connection",default:!0,children:[(0,i.jsx)(n.h2,{id:"use-network-ip-to-connect-to-host-machine-ssh",children:"Use Network IP to Connect to Host Machine SSH"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Please log in to the ",(0,i.jsx)(n.strong,{children:"router backend"})," connected to the host machine."]}),"\n",(0,i.jsxs)(n.li,{children:["Please ensure that the system has already ",(0,i.jsx)(n.strong,{children:"started normally"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Please ensure that you know the ",(0,i.jsx)(n.strong,{children:"username and password of the host machine"}),", FLY system default username is ",(0,i.jsx)(n.strong,{children:"fly"}),", default password is ",(0,i.jsx)(n.strong,{children:"mellow"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"If the motherboard has started and is already connected to the network, you can use the IP to connect to SSH."}),"\n",(0,i.jsx)(n.li,{children:"Open MobaXterm, and make the following settings, fill in the IP address viewed earlier, or check it in the router backend."}),"\n"]}),(0,i.jsx)(s,{image:t(43845).Z,size:"40%",align:"center"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note: The username of the host machine is entered here in step 4."})}),(0,i.jsx)(s,{image:t(33978).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["When first connecting, a window will pop up, click ",(0,i.jsx)(n.code,{children:"Accept"})," to proceed."]}),"\n"]}),(0,i.jsx)(s,{image:t(61316).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prompt for password input, enter the host machine password and press Enter."}),"\n"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note: The entered password is not visible here, press Enter directly after entering."})}),(0,i.jsxs)(n.p,{children:["FLY system default, username is: ",(0,i.jsx)(n.code,{children:"fly"}),", password is: ",(0,i.jsx)(n.code,{children:"mellow"}),"."]}),(0,i.jsx)(s,{image:t(63902).Z,size:"40%",align:"center"}),(0,i.jsx)(s,{image:t(79545).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Login successful."}),"\n"]})]})]}),"\n",(0,i.jsx)(n.hr,{})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function u(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},43845:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-1-2a44e31779ffe0a74fdb09921c24ca3e.webp"},61316:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-10-2699dcaebc29cf1d3bedcdbb40b41b30.webp"},63902:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-11-3d58dd094664307317d5b7d7a973f88e.webp"},79545:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-12-032fc32a515ee0afe65d9e77762cbace.webp"},92714:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-2-273b3b4bfff52a5c1a1e388dc8964112.webp"},37395:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-3-151965778ddfb93f44aaa24e10e02dbb.webp"},98862:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-4-0d677ea96590d19d313472418b9d3fa4.webp"},94898:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-5-b93ee98e2487f52442dacc9b83e1b52a.webp"},69860:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-6-37fc63e0cb12b9b19420d7a374c3d31a.webp"},98105:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-8-d3370454369e54fbc22ca40c7ef50a2a.webp"},33978:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/mobaxterm-9-262d9c655a1778c98421ad5179c4685c.webp"},42974:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pc-device-mgr-31e6d7f9b4a8a052cdfad54479b8de5e.webp"},40471:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/piv2-port-05142296eee0b68d1ec9d84c27acec72.webp"},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var s=t(67294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);