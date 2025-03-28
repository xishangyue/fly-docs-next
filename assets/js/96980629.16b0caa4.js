"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["19556"],{8786:function(n,e,t){t.r(e),t.d(e,{metadata:()=>o,contentTitle:()=>s,default:()=>l,assets:()=>c,toc:()=>u,frontMatter:()=>i});var o=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-mmu/mmu/cfg","title":"\u53C2\u8003\u914D\u7F6E","description":"","source":"@site/docs/ProductDoc/ToolBoard/fly-mmu/mmu/cfg.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-mmu/mmu","slug":"/ProductDoc/ToolBoard/fly-mmu/mmu/cfg","permalink":"/fly-docs-next/docs/ProductDoc/ToolBoard/fly-mmu/mmu/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-mmu/mmu/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"\u53C2\u8003\u914D\u7F6E"},"sidebar":"tutorialSidebar","previous":{"title":"\u4E3B\u677F\u63A5\u7EBF","permalink":"/fly-docs-next/docs/ProductDoc/ToolBoard/fly-mmu/mmu/wiring"},"next":{"title":"\u4E09\u7EF4\u6A21\u578B\u4E0E\u539F\u7406\u56FE","permalink":"/fly-docs-next/docs/ProductDoc/ToolBoard/fly-mmu/mmu/schematic"}}'),r=t("52676"),a=t("79938");let i={sidebar_position:5,sidebar_label:"\u53C2\u8003\u914D\u7F6E"},s="\u53C2\u8003\u914D\u7F6E",c={},u=[];function d(n){let e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u53C2\u8003\u914D\u7F6E",children:"\u53C2\u8003\u914D\u7F6E"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cfg",children:"###########################################################################\n# Happy Hare MMU hardware pin config\n#\n# EDIT THIS FILE BASED ON YOUR SETUP\n#\n# This contains aliases for pins for MCU type unknown\n#\n[mcu mmu]\nserial: /dev/ttyACM1 # Config guess. Run ls -l /dev/serial/by-id and set manually	# Change to `canbus_uuid: 1234567890` for CANbus setups\n\n# Section to create alias for pins used by MMU for easier integration into Klippain and RatOS.\n# The names match those referenced in the mmu_hardware.cfg file. If you get into difficulty\n# you can also comment out this aliases definition and configure the pin names directly\n# into mmu_hardware.cfg.\n#\n[board_pins mmu]\nmcu: mmu # Assuming using an external / extra mcu dedicated to MMU\naliases:\n    MMU_GEAR_UART=PE7,\n    MMU_GEAR_STEP=PC5,\n    MMU_GEAR_DIR=PB1,\n    MMU_GEAR_ENABLE=PB0,\n    MMU_GEAR_DIAG=PE8,\n    MMU_SEL_UART=PE11,\n    MMU_SEL_STEP=PE14,\n    MMU_SEL_DIR=PE13,\n    MMU_SEL_ENABLE=PE12,\n    MMU_SEL_DIAG=PE9,\n    MMU_SEL_ENDSTOP=PE2,\n    MMU_SERVO=PA3,\n    MMU_CUT_SERVO=PA2,\n    MMU_ENCODER=PE3,\n    MMU_GATE_SENSOR=PC3,\n    MMU_NEOPIXEL=PE10,\n    MMU_PRE_GATE_0=PC6,\n    MMU_PRE_GATE_1=PD15,\n    MMU_PRE_GATE_2=PD14,\n    MMU_PRE_GATE_3=PD13,\n    MMU_PRE_GATE_4=PD12,\n    MMU_PRE_GATE_5=PD11,\n    MMU_PRE_GATE_6=PD10,\n    MMU_PRE_GATE_7=PD9,\n"})})]})}function l(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},79938:function(n,e,t){t.d(e,{Z:function(){return s},a:function(){return i}});var o=t(75271);let r={},a=o.createContext(r);function i(n){let e=o.useContext(a);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),o.createElement(a.Provider,{value:e},n.children)}}}]);