"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["88196"],{92798:function(e,n,i){i.d(n,{ZP:function(){return d},d$:function(){return o}});var t=i(52676),r=i(79938);let o=[];function s(e){let n={admonition:"admonition",li:"li",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsx)(n.admonition,{title:"Infinite Position Usage Tips",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Infinite position usage requires occupying a limit port; normally, the first drive position uses IO1, the second drive position uses IO2, and so on."}),"\n",(0,t.jsx)(n.li,{children:"When using infinite positions, please ensure not to connect anything to the corresponding limit port."}),"\n",(0,t.jsx)(n.li,{children:"For some FLY mainboards that are directly connected to the drive port, please check if DIAG is directly connected to the corresponding pin."}),"\n"]})})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},45897:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>p,assets:()=>l,toc:()=>a,frontMatter:()=>d});var t=JSON.parse('{"id":"ProductDoc/ModuleDrive/tp2209","title":"TP 2209","description":"Basic Parameters","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ModuleDrive/tp2209.mdx","sourceDirName":"ProductDoc/ModuleDrive","slug":"/ProductDoc/ModuleDrive/tp2209","permalink":"/fly-docs-next/en/docs/ProductDoc/ModuleDrive/tp2209","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ModuleDrive/tp2209.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"TMC 5160 Plus","permalink":"/fly-docs-next/en/docs/ProductDoc/ModuleDrive/tmc5160_plus"},"next":{"title":"TP 5160","permalink":"/fly-docs-next/en/docs/ProductDoc/ModuleDrive/tp5160"}}'),r=i("52676"),o=i("79938"),s=i("92798");let d={sidebar_position:8},c="TP 2209",l={},a=[{value:"Basic Parameters",id:"basic-parameters",level:2},{value:"FLY Motherboard Jumper",id:"fly-motherboard-jumper",level:2},{value:"TP2209 Reference Configuration",id:"tp2209-reference-configuration",level:2},{value:"Infinite Position Usage Instructions",id:"infinite-position-usage-instructions",level:2},...s.d$];function u(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{ImageView:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"tp-2209",children:"TP 2209"})}),"\n",(0,r.jsx)(t,{image:i(21773).Z,size:"60%",align:"center"}),"\n",(0,r.jsx)(n.h2,{id:"basic-parameters",children:"Basic Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Input voltage: 12V-24V"}),"\n",(0,r.jsx)(n.li,{children:"Suitable for: Marlin/Klipper/RRF firmware"}),"\n",(0,r.jsx)(n.li,{children:"The motor is not prone to losing steps"}),"\n",(0,r.jsx)(n.li,{children:"Supports silent mode"}),"\n",(0,r.jsx)(n.li,{children:"Large area fan thermal pad to reduce drive operating temperature"}),"\n",(0,r.jsx)(n.li,{children:"Drive mode support: TMC: UART"}),"\n",(0,r.jsx)(n.li,{children:"Supports motor stall detection"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"fly-motherboard-jumper",children:"FLY Motherboard Jumper"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"TP2209 uses UART mode"}),"\n",(0,r.jsx)(n.li,{children:"TP2209 does not require driver jumper caps, just pure configuration is needed"}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"tp2209-reference-configuration",children:"TP2209 Reference Configuration"}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"The drive sampling resistor is 0.110, please do not set it incorrectly"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[tmc2209 stepper_x]\nuart_pin: \ninterpolate: False\nrun_current: 0.8                    # Motor running current value (unit: mA)\nsense_resistor: 0.110               # Drive sampling resistor do not change\nstealthchop_threshold: 0\n"})}),"\n",(0,r.jsx)(n.h2,{id:"infinite-position-usage-instructions",children:"Infinite Position Usage Instructions"}),"\n",(0,r.jsx)(s.ZP,{}),"\n",(0,r.jsx)(n.admonition,{title:"Infinite Position Usage Tips",type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The original ",(0,r.jsx)(n.code,{children:"endstop_pin:"})," needs to be shielded or deleted, and add ",(0,r.jsx)(n.code,{children:"endstop_pin: tmc2209_stepper_x:virtual_endstop"})]}),"\n",(0,r.jsxs)(n.li,{children:["After configuring ",(0,r.jsx)(n.code,{children:"diag_pin:"}),", refreshing the limit status is not triggered"]}),"\n",(0,r.jsxs)(n.li,{children:["Configuring ",(0,r.jsx)(n.code,{children:"driver_SGTHRS:"})," requires you to test a suitable value by yourself"]}),"\n"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Reference Configuration"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[stepper_x]\n# endstop_pin:PF3\nendstop_pin: tmc2209_stepper_x:virtual_endstop\nhoming_retract_dist: 0        # Retraction without changing 0 may cause homing failure\n\n[tmc2209 stepper_x]\ndiag_pin: ^\ndriver_SGTHRS: 100\n\n"})})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},21773:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/tp2209-17db3799300d77b9971445c26f8d4f09.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return s}});var t=i(75271);let r={},o=t.createContext(r);function s(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);