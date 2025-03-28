"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["6243"],{92798:function(e,n,i){i.d(n,{ZP:function(){return c},d$:function(){return o}});var t=i(52676),r=i(79938);let o=[];function s(e){let n={admonition:"admonition",li:"li",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsx)(n.admonition,{title:"Infinite Position Usage Tips",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Infinite position usage requires occupying a limit port; normally, the first drive position uses IO1, the second drive position uses IO2, and so on."}),"\n",(0,t.jsx)(n.li,{children:"When using infinite positions, please ensure not to connect anything to the corresponding limit port."}),"\n",(0,t.jsx)(n.li,{children:"For some FLY mainboards that are directly connected to the drive port, please check if DIAG is directly connected to the corresponding pin."}),"\n"]})})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},67074:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>p,assets:()=>d,toc:()=>a,frontMatter:()=>c});var t=JSON.parse('{"id":"ProductDoc/ModuleDrive/tmc5160hv","title":"TMC 5160HV","description":"Basic Parameters","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ModuleDrive/tmc5160hv.mdx","sourceDirName":"ProductDoc/ModuleDrive","slug":"/ProductDoc/ModuleDrive/tmc5160hv","permalink":"/fly-docs-next/en/docs/ProductDoc/ModuleDrive/tmc5160hv","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ModuleDrive/tmc5160hv.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"TMC 5160","permalink":"/fly-docs-next/en/docs/ProductDoc/ModuleDrive/tmc5160"},"next":{"title":"TMC 5160 Pro V1.2","permalink":"/fly-docs-next/en/docs/ProductDoc/ModuleDrive/tmc5160_pro"}}'),r=i("52676"),o=i("79938"),s=i("92798");let c={sidebar_position:4},l="TMC 5160HV",d={},a=[{value:"Basic Parameters",id:"basic-parameters",level:2},{value:"Motherboard Jumper Instructions",id:"motherboard-jumper-instructions",level:2},{value:"TMC5160 Reference Configuration",id:"tmc5160-reference-configuration",level:2},{value:"SPI Mode Reference Configuration",id:"spi-mode-reference-configuration",level:3},{value:"Infinite Position Usage Instructions",id:"infinite-position-usage-instructions",level:2},...s.d$];function u(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{ImageView:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"tmc-5160hv",children:"TMC 5160HV"})}),"\n",(0,r.jsx)(t,{image:i(76726).Z,size:"60%",align:"center"}),"\n",(0,r.jsx)(t,{image:i(9793).Z,size:"80%",align:"center"}),"\n",(0,r.jsx)(n.h2,{id:"basic-parameters",children:"Basic Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Input voltage: 12V-48V"}),"\n",(0,r.jsx)(n.li,{children:"Maximum current: 4.4A"}),"\n",(0,r.jsx)(n.li,{children:"Suitable for: Marlin/Klipper/RRF firmware"}),"\n",(0,r.jsx)(n.li,{children:"Drive mode support: TMC: SPI"}),"\n",(0,r.jsx)(n.li,{children:"Stepper/direction interface with microstepping interpolation microPlyer"}),"\n",(0,r.jsx)(n.li,{children:"Highest resolution of 256 microsteps"}),"\n",(0,r.jsx)(n.li,{children:"Supports stealthChop2 silent operation and smooth motion"}),"\n",(0,r.jsx)(n.li,{children:"Supports resonance suppression for mid-frequency resonance"}),"\n",(0,r.jsx)(n.li,{children:"Supports spreadCycle high-dynamic motor control chopper"}),"\n",(0,r.jsx)(n.li,{children:"Supports dcStep load-related speed control"}),"\n",(0,r.jsx)(n.li,{children:"Supports stallGuard2 high-precision sensorless motor load detection"}),"\n",(0,r.jsx)(n.li,{children:"Supports coolStep current control, up to 75% energy savings"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"motherboard-jumper-instructions",children:"Motherboard Jumper Instructions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"TMC5160 uses SPI jumper"}),"\n",(0,r.jsxs)(n.li,{children:["The SPI pin for FLY driver is the fourth pin from the left downwards, and the CS pin is the SPI pin. If the motherboard does not correspond to the pin position, SPI cannot be used","\n",(0,r.jsx)(t,{image:i(12142).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"tmc5160-reference-configuration",children:"TMC5160 Reference Configuration"}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The drive sampling resistor is ",(0,r.jsx)(n.code,{children:"sense_resistor: 0.075"}),", please do not set it incorrectly"]}),"\n",(0,r.jsx)(n.li,{children:"spi_bus and spi_software can only choose one"}),"\n"]})}),"\n",(0,r.jsx)(n.h3,{id:"spi-mode-reference-configuration",children:"SPI Mode Reference Configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[tmc5160 stepper_x]\ncs_pin:\nspi_bus:\n# spi_software_mosi_pin:\n# spi_software_miso_pin:\n# spi_software_sclk_pin: \nrun_current: 1.0                    # Motor running current value\ninterpolate: False                  # Whether to enable 256 microstep interpolation (True for enabled, False for disabled)\nsense_resistor: 0.075\nstealthchop_threshold: 0\ndriver_DISS2G: 1\ndriver_DISS2VS: 1\n"})}),"\n",(0,r.jsx)(n.h2,{id:"infinite-position-usage-instructions",children:"Infinite Position Usage Instructions"}),"\n",(0,r.jsx)(s.ZP,{}),"\n",(0,r.jsx)(n.admonition,{title:"Infinite Position Usage Tips",type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The original ",(0,r.jsx)(n.code,{children:"endstop_pin:"})," needs to be shielded or deleted, and add ",(0,r.jsx)(n.code,{children:"endstop_pin: tmc5160_stepper_x:virtual_endstop"})]}),"\n",(0,r.jsxs)(n.li,{children:["After configuring ",(0,r.jsx)(n.code,{children:"diag1_pin:"}),", the limit status is not triggered"]}),"\n",(0,r.jsxs)(n.li,{children:["Configuring ",(0,r.jsx)(n.code,{children:"driver_SGT:"})," requires you to test a suitable value yourself"]}),"\n"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Reference Configuration"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:'[stepper_x]\n# endstop_pin:PF3\nendstop_pin: tmc5160_stepper_x:virtual_endstop\nhoming_retract_dist: 0        # Retraction without changing to 0 may cause homing failure\n\n[tmc5160 stepper_x]\ndiag1_pin: ^!\ndriver_SGT: 1\n\n#   After configuration, please ensure that the limit status is not triggered\n#   This pin usually uses the "^" prefix to enable internal pull-up\n#   Sensitivity is related to belt tightness and needs to be adjusted by yourself\n#  (Ensure that driver_SGTHRS is also set to a suitable sensitivity)\n\n'})})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},9793:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/5160HV2-b447ee01cf4fcdd0e7db34fe25261349.webp"},76726:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/5160hv-6322c1c9d4c02b0bf4b973d2dd2823fe.webp"},12142:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/jumper-b7f0cad58ee1720512eaebc40deee431.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return s}});var t=i(75271);let r={},o=t.createContext(r);function s(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);