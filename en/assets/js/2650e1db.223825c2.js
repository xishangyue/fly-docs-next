"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["32570"],{44256:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>t,default:()=>p,assets:()=>l,toc:()=>a,frontMatter:()=>s});var r=JSON.parse('{"id":"ProductDoc/Screen/fly-wiscreen7/klipper","title":"klipper","description":"WIFI Connection and Basic Operations","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/Screen/fly-wiscreen7/klipper.mdx","sourceDirName":"ProductDoc/Screen/fly-wiscreen7","slug":"/ProductDoc/Screen/fly-wiscreen7/klipper","permalink":"/fly-docs-next/en/docs/ProductDoc/Screen/fly-wiscreen7/klipper","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/Screen/fly-wiscreen7/klipper.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"WIFI Connection and Klipper Configuration"},"sidebar":"tutorialSidebar","previous":{"title":"Boot Image Modification","permalink":"/fly-docs-next/en/docs/ProductDoc/Screen/fly-wiscreen7/flash"},"next":{"title":"Tutorial for Using Ethernet Cables with Raspberry Pi and Other Host Computers","permalink":"/fly-docs-next/en/docs/ProductDoc/Screen/fly-wiscreen7/linux"}}'),o=i("52676"),c=i("79938");let s={sidebar_position:4,sidebar_label:"WIFI Connection and Klipper Configuration"},t=void 0,l={},a=[{value:"WIFI Connection and Basic Operations",id:"wifi-connection-and-basic-operations",level:2},{value:"Klipper Configuration",id:"klipper-configuration",level:2},{value:"LED Configuration",id:"led-configuration",level:3},{value:"PTC Configuration",id:"ptc-configuration",level:3},{value:"FAN Configuration",id:"fan-configuration",level:3},{value:"Custom Gcode",id:"custom-gcode",level:3},{value:"Use Object Exclusion",id:"use-object-exclusion",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components},{ImageView:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"wifi-connection-and-basic-operations",children:"WIFI Connection and Basic Operations"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://www.bilibili.com/video/BV1mr421b7Bf/?spm_id_from=333.788&vd_source=36affb37d7228751cd1fcbbda487dfdf",children:"7-inch WiFi Capacitive Screen Controls Multiple Machines"})}),"\n",(0,o.jsx)(n.h2,{id:"klipper-configuration",children:"Klipper Configuration"}),"\n",(0,o.jsx)(n.h3,{id:"led-configuration",children:"LED Configuration"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",children:"[led LED]\nwhite_pin:PA15\n"})}),"\n",(0,o.jsx)(n.h3,{id:"ptc-configuration",children:"PTC Configuration"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",children:"[heater_generic warehouse]\nheater_pin:E_CS\nsensor_type:ATC Semitec 104GT-2\nsensor_pin:PA1\nmin_temp:-270\nmax_temp:600\ncontrol = pid\npid_kp = 16.804\npid_ki = 0.794\npid_kd = 88.854\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fan-configuration",children:"FAN Configuration"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",children:"[fan_generic fan1]\npin: FAN1\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",children:"[fan_generic fan2]\npin: FAN2\n"})}),"\n",(0,o.jsx)(n.h3,{id:"custom-gcode",children:"Custom Gcode"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"After the screen is pulled down, custom Gcode appears,"}),"\n",(0,o.jsx)(n.li,{children:"One button sends multiple gcode formats:"}),"\n",(0,o.jsx)(n.li,{children:"Example:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",children:"G91 \nG1 X10 F6000\nG90\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Input format on the screen: (Starting from the second line, add \\n before each command)"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",children:"G91\\nG1 X10 F6000\\nG90\n"})}),"\n",(0,o.jsx)(n.h2,{id:"use-object-exclusion",children:"Use Object Exclusion"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Need to replace moonraker"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Please connect SSH first, and ensure you can access the internet normally"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Backup moonraker files"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"mv ~/moonraker ~/moonraker-bak\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Stop moonraker service"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart moonraker\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Pull moonraker"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://e.coding.net/g-ofpa1390/3D-Printers/moonraker-dev.git -b flylcd-dev moonraker\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["Access the host computer in the browser to find ",(0,o.jsx)(n.code,{children:"moonraker.conf"})," to add, then restart the system"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"[network]\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsx)(n.li,{children:"Then enter the following address in the browser, where IP needs to be replaced with the host computer's IP"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"http://ip:7125/server/network/wifi/scan\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Appearance of this step indicates operation completion"}),"\n",(0,o.jsx)(r,{image:i(4594).Z,size:"100%",align:"left"}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4594:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/moonraker-9b11e2e17eeea9c450be5b404401746a.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return s}});var r=i(75271);let o={},c=r.createContext(o);function s(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);