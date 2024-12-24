"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["41978"],{31755:function(n,e,s){s.r(e),s.d(e,{metadata:()=>i,contentTitle:()=>c,default:()=>t,assets:()=>o,toc:()=>a,frontMatter:()=>d});var i=JSON.parse('{"id":"ProductDoc/ExtensionBoard/BDsensor-m/marlin","title":"**BDsensor-m-m** \u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB","description":"\u30BB\u30F3\u30B5\u30FC\u30B1\u30FC\u30D6\u30EB\u3092\u30E1\u30A4\u30F3\u30DC\u30FC\u30C9\u306EEXP1\u30DD\u30FC\u30C8\u306B\u63A5\u7D9A","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/BDsensor-m/marlin.mdx","sourceDirName":"ProductDoc/ExtensionBoard/BDsensor-m","slug":"/ProductDoc/ExtensionBoard/BDsensor-m/marlin","permalink":"/fly-docs-next/ja/docs/ProductDoc/ExtensionBoard/BDsensor-m/marlin","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/BDsensor-m/marlin.mdx","tags":[],"version":"current","lastUpdatedBy":"xishangxi","lastUpdatedAt":1734947943000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"Marlin\u306E\u4F7F\u7528"},"sidebar":"tutorialSidebar","previous":{"title":"Klipper\u306E\u4F7F\u7528","permalink":"/fly-docs-next/ja/docs/ProductDoc/ExtensionBoard/BDsensor-m/kliper"},"next":{"title":"BDsensor","permalink":"/fly-docs-next/ja/docs/category/bdsensor"}}'),r=s("52676"),l=s("79938");let d={sidebar_position:3,sidebar_label:"Marlin\u306E\u4F7F\u7528"},c="BDsensor-m-m \u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",o={},a=[{value:"\u30BB\u30F3\u30B5\u30FC\u30B1\u30FC\u30D6\u30EB\u3092\u30E1\u30A4\u30F3\u30DC\u30FC\u30C9\u306EEXP1\u30DD\u30FC\u30C8\u306B\u63A5\u7D9A",id:"\u30BB\u30F3\u30B5\u30FC\u30B1\u30FC\u30D6\u30EB\u3092\u30E1\u30A4\u30F3\u30DC\u30FC\u30C9\u306Eexp1\u30DD\u30FC\u30C8\u306B\u63A5\u7D9A",level:2},{value:"Marlin\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u3078\u306E\u30D1\u30C3\u30C1\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",id:"marlin\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u3078\u306E\u30D1\u30C3\u30C1\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",level:2},{value:"\u8A2D\u5B9A.h\u306E\u7DE8\u96C6",id:"\u8A2D\u5B9Ah\u306E\u7DE8\u96C6",level:3},{value:"Configuration_adv.h\u306E\u7DE8\u96C6",id:"configuration_advh\u306E\u7DE8\u96C6",level:3},{value:"\u30D4\u30F3\u30D5\u30A1\u30A4\u30EB\u306E\u7DE8\u96C6",id:"\u30D4\u30F3\u30D5\u30A1\u30A4\u30EB\u306E\u7DE8\u96C6",level:3},{value:"BD\u30BB\u30F3\u30B5\u30FC\u306E\u5024\u3092\u6DB2\u6676\u753B\u9762\u306B\u8868\u793A",id:"bd\u30BB\u30F3\u30B5\u30FC\u306E\u5024\u3092\u6DB2\u6676\u753B\u9762\u306B\u8868\u793A",level:2},{value:"\u6821\u6B63",id:"\u6821\u6B63",level:2},{value:"\u30C6\u30B9\u30C8\u3068\u30D7\u30EA\u30F3\u30C8",id:"\u30C6\u30B9\u30C8\u3068\u30D7\u30EA\u30F3\u30C8",level:2},{value:"\u30D9\u30C3\u30C9\u3092\u81EA\u52D5\u7684\u306B\u30EC\u30D9\u30EB\u306B\u3059\u308B\u65B9\u6CD5\u306F2\u3064\u3042\u308A\u307E\u3059\uFF1A",id:"\u30D9\u30C3\u30C9\u3092\u81EA\u52D5\u7684\u306B\u30EC\u30D9\u30EB\u306B\u3059\u308B\u65B9\u6CD5\u306F2\u3064\u3042\u308A\u307E\u3059",level:2},{value:"Z\u30A8\u30F3\u30C9\u30B9\u30C8\u30C3\u30D7\u306E\u78BA\u8A8D<code>M119</code>",id:"z\u30A8\u30F3\u30C9\u30B9\u30C8\u30C3\u30D7\u306E\u78BA\u8A8Dm119",level:3},{value:"\u63A5\u7D9A\u306E\u78BA\u8A8D",id:"\u63A5\u7D9A\u306E\u78BA\u8A8D",level:3},{value:"\u4E0A\u8A18\u306E\u5168\u3066\u306E\u30B9\u30C6\u30C3\u30D7\u304C\u6B63\u3057\u3044\u5834\u5408\u3001Z\u8EF8\u3092\u30DB\u30FC\u30E0\u306B\u623B\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",id:"\u4E0A\u8A18\u306E\u5168\u3066\u306E\u30B9\u30C6\u30C3\u30D7\u304C\u6B63\u3057\u3044\u5834\u5408z\u8EF8\u3092\u30DB\u30FC\u30E0\u306B\u623B\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059",level:2}];function h(n){let e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...n.components},{ImageView:i}=e;return!i&&function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsxs)(e.h1,{id:"bdsensor-m-m-\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",children:[(0,r.jsx)(e.strong,{children:"BDsensor-m-m"})," \u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"]})}),"\n",(0,r.jsx)(e.h2,{id:"\u30BB\u30F3\u30B5\u30FC\u30B1\u30FC\u30D6\u30EB\u3092\u30E1\u30A4\u30F3\u30DC\u30FC\u30C9\u306Eexp1\u30DD\u30FC\u30C8\u306B\u63A5\u7D9A",children:"\u30BB\u30F3\u30B5\u30FC\u30B1\u30FC\u30D6\u30EB\u3092\u30E1\u30A4\u30F3\u30DC\u30FC\u30C9\u306EEXP1\u30DD\u30FC\u30C8\u306B\u63A5\u7D9A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u30BB\u30F3\u30B5\u30FC\u306E\u30B1\u30FC\u30D6\u30EB\u304C\u77ED\u3044\u5834\u5408\u306F\u3001\u68B1\u5305\u5185\u306E\u5EF6\u9577\u30B1\u30FC\u30D6\u30EB\u3092\u4F7F\u7528"}),"\n",(0,r.jsx)(e.li,{children:"BDsensor-m-m\u306ECKL\u304A\u3088\u3073SDA\u7DDA\u306F\u3001\u56DE\u8DEF\u57FA\u677F\u306E\u4EFB\u610F\u306EGPIO\u30D4\u30F3\u306B\u63A5\u7D9A\u3067\u304D\u307E\u3059\u3002BD\u30BB\u30F3\u30B5\u30FC\u30B1\u30FC\u30D6\u30EB\u3092\u76F4\u63A5Bltouch\u30DD\u30FC\u30C8\u306B\u63A5\u7D9A\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002\u4F8B\u3048\u3070\uFF1A"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"BLtouch    |    BDsensor-m\n5V       --\x3e     5V\nGND      --\x3e     GND\nS        --\x3e     CLK/SCL    (Input)\nGND      --\x3e     GND\nZmin     --\x3e     SDA    (Input/Output) \n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u30E1\u30A4\u30F3\u30DC\u30FC\u30C9\u30B3\u30CD\u30AF\u30BF\u306E\u3044\u304F\u3064\u304B\u306E\u30D4\u30F3\u306F\u3001MCU\u306Egpios\u306B\u76F4\u63A5\u63A5\u7D9A\u3055\u308C\u3066\u3044\u306A\u3044\u53EF\u80FD\u6027\u304C\u3042\u308B\u305F\u3081\uFF08\u30D5\u30A3\u30EB\u30BF\u30B3\u30F3\u30C7\u30F3\u30B5\u3084MOSFET\u3001\u30C0\u30A4\u30AA\u30FC\u30C9\u3001\u5149\u30AB\u30D7\u30E9\u3092\u901A\u3058\u3066\u9694\u96E2\u3055\u308C\u3066\u3044\u308B\u304C\u3001\u62B5\u6297\u3084\u62B5\u6297\u306B\u3088\u308B\u30D7\u30EB\u30A2\u30C3\u30D7/\u30D7\u30EB\u30C0\u30A6\u30F3\u9694\u96E2\u306F\u53EF\u80FD\uFF09\u3001BDsensor-m\u3068\u4E00\u7DD2\u306B\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u305D\u3057\u3066\u3001\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u306F\u63A5\u7D9A\u30A8\u30E9\u30FC\u3092\u5831\u544A\u3057\u307E\u3059\u3002\u4F8B\u3048\u3070"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u30D5\u30A1\u30F3\u3084\u30D2\u30FC\u30BF\u30FC\u306E\u30B3\u30CD\u30AF\u30BF\u306FMOSFET\u3067\u9694\u96E2\u3055\u308C\u3066\u3044\u308B\u3001"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4E00\u90E8\u306E\u56DE\u8DEF\u57FA\u677F\u3067\u306F\u3001\u6E29\u5EA6\u30B5\u30FC\u30DF\u30B9\u30BF\u3068\u30A8\u30F3\u30C9\u30B9\u30C8\u30C3\u30D7/\u30D7\u30ED\u30FC\u30D6\u306E\u30B3\u30CD\u30AF\u30BF\u306F\u901A\u5E38\u3001GND\u306B\u30D5\u30A3\u30EB\u30BF\u30B3\u30F3\u30C7\u30F3\u30B5\u3067\u63A5\u7D9A\u3055\u308C\u3066\u3044\u308B\u3001"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u4E0B\u56F3\u306E\u3088\u3046\u306B\u3001BD\u30BB\u30F3\u30B5\u30FC\u3092\u30DB\u30C3\u30C8\u30A8\u30F3\u30C9\u306E\u8FD1\u304F\u306B\u53D6\u308A\u4ED8\u3051\u307E\u3059\u3002 ",(0,r.jsx)(e.a,{href:"https://www.thingiverse.com/thing:6098131",children:"STL of mount"}),",  ",(0,r.jsx)(e.a,{href:"https://discord.com/channels/829828765512106054/1163237892957671424",children:"STL_mount_VzBot_Goliath short"})]}),"\n",(0,r.jsx)(i,{image:s(47663).Z,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"marlin\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u3078\u306E\u30D1\u30C3\u30C1\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",children:"Marlin\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u3078\u306E\u30D1\u30C3\u30C1\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"}),"\n",(0,r.jsx)(e.p,{children:"BD\u30BB\u30F3\u30B5\u30FC\u306FMarlin2.1.x\u306B\u7D71\u5408\u3055\u308C\u3066\u3044\u307E\u3059\uFF082022.8.27\u4EE5\u964D\uFF09\u3001"}),"\n",(0,r.jsxs)(e.p,{children:["\u30EA\u30EA\u30FC\u30B9\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3067\u304D\u307E\u3059\u304C\u3001\u73FE\u5728\u306F\u6700\u65B0\u306E\u30D0\u30B0\u30D5\u30A3\u30C3\u30AF\u30B9\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\uFF1A",(0,r.jsx)(e.a,{href:"https://github.com/MarlinFirmware/Marlin",children:"https://github.com/MarlinFirmware/Marlin"})]}),"\n",(0,r.jsx)(e.p,{children:"\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3068\u30D4\u30F3\u30D5\u30A1\u30A4\u30EB\u3092\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u8A2D\u5B9Ah\u306E\u7DE8\u96C6",children:"\u8A2D\u5B9A.h\u306E\u7DE8\u96C6"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"BD_SENSOR\u3092\u6709\u52B9\u306B\u3059\u308B"}),"\n",(0,r.jsx)(e.p,{children:"\u30B3\u30E1\u30F3\u30C8\u3092\u89E3\u9664"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"#define BD_SENSOR`\n#define Z_SAFE_HOMING\n#define BD_SENSOR_PROBE_NO_STOP // adding this new line for fast bed leveling without nozzle stop, \n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u3053\u308C\u306F",(0,r.jsx)(e.code,{children:"BD_SENSOR_PROBE_NO_STOP"}),"\u306E\u307F\u3067\u3059"]}),"\n",(0,r.jsxs)(e.p,{children:["\u6700\u65B0\u306EMarlin\u30D0\u30B0\u30D5\u30A3\u30C3\u30AF\u30B9\uFF1A",(0,r.jsx)(e.a,{href:"https://github.com/MarlinFirmware/Marlin",children:"https://github.com/MarlinFirmware/Marlin"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u8AAC\u660E\uFF1A ",(0,r.jsx)(e.a,{href:"https://github.com/MarlinFirmware/Marlin/pull/25847",children:"https://github.com/MarlinFirmware/Marlin/pull/25847"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u30D7\u30ED\u30FC\u30D6\u3092\u4F7F\u7528\u3057\u3066\u30DB\u30FC\u30E0\u306B\u623B\u308B"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Z_MIN_PROBE_USES_Z_MIN_ENDSTOP_PIN"}),"\u304C\u7121\u52B9\u3067\u3042\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3001",(0,r.jsx)(e.code,{children:"USE_PROBE_FOR_Z_HOMING"}),"\u3092\u6B21\u306E\u3088\u3046\u306B\u6709\u52B9\u306B\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"//#define Z_MIN_PROBE_USES_Z_MIN_ENDSTOP_PIN\n// Force the use of the probe for Z-axis homing\n#define USE_PROBE_FOR_Z_HOMING\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"2\u56DE\u76EE\u306E\u30DB\u30FC\u30E0Z\u901F\u5EA6\u3092\u9045\u304F\u3059\u308B"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"#define Z_PROBE_FEEDRATE_SLOW (Z_PROBE_FEEDRATE_FAST / 16)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u3053\u3067\u306F\u3001BDsensor-m\u30D7\u30ED\u30BB\u30B9\u304B\u3089\u8AAD\u307F\u53D6\u3089\u308C\u305F\u30B9\u30C8\u30C3\u30D1\u30FC\u306E\u901F\u5EA6\u3092\u9045\u304F\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u901A\u5E38\u306E\u30B9\u30C8\u30C3\u30D1\u30FC\u307B\u3069\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u3067\u306F\u306A\u3044\u305F\u3081\u3067\u3059\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"configuration_advh\u306E\u7DE8\u96C6",children:"Configuration_adv.h\u306E\u7DE8\u96C6"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"#define BABYSTEPPING"}),"\u3053\u306E\u6A5F\u80FD\u3092\u6709\u52B9\u306B\u3057\u3001\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u306E\u5E73\u5766\u5316\u6A5F\u80FD\u3092\u5B9F\u73FE"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"#define HOMING_BUMP_DIVISOR { 2, 2, 8 }       // Re-Bump Speed Divisor (Divides the Homing Feedrate)\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u30D4\u30F3\u30D5\u30A1\u30A4\u30EB\u306E\u7DE8\u96C6",children:"\u30D4\u30F3\u30D5\u30A1\u30A4\u30EB\u306E\u7DE8\u96C6"}),"\n",(0,r.jsxs)(e.p,{children:["BDsensor-m\u306ESDA\u3068SCL\u306E\u30D4\u30F3\u3092",(0,r.jsx)(e.code,{children:"pins_boardname.h"}),"\u306B\u8FFD\u52A0\u3057\u3066\u8A2D\u5B9A\u3057\u307E\u3059\uFF08\u4F8B\uFF1A",(0,r.jsx)(e.code,{children:"pins_PANDA_PI_V29.h"}),"\uFF09"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"#define  I2C_BD_SDA_PIN    PC6   // \u5B9F\u969B\u306E\u63A5\u7D9A\u5148\u3092\u5909\u66F4\u3057\u3066\u304F\u3060\u3055\u3044\n#define  I2C_BD_SCL_PIN    PB2   // \u5B9F\u969B\u306E\u63A5\u7D9A\u5148\u3092\u5909\u66F4\u3057\u3066\u304F\u3060\u3055\u3044\n#define  I2C_BD_DELAY  20      // \u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306F20\u3067\u3001\u7BC4\u56F2\u306F [20,50] \u3067\u3059\u3002\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u901A\u5E38\u306EBLtouch\u306E\u3088\u3046\u306BG29\u3067\u81EA\u52D5\u30D9\u30C3\u30C9\u30EC\u30D9\u30EA\u30F3\u30B0\u30D7\u30ED\u30FC\u30D6\u3092\u884C\u3044\u305F\u3044\u5834\u5408\u3001\u30B3\u30E1\u30F3\u30C8\u3092\u89E3\u9664"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"#define AUTO_BED_LEVELING_BILINEAR\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6B21\u306E\u3088\u3046\u306B\u5024\u3092\u7DE8\u96C6"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"#define Z_CLEARANCE_DEPLOY_PROBE   0 // Z Clearance for Deploy/Stow\n#define Z_CLEARANCE_BETWEEN_PROBES  1 // Z Clearance between probe points\n#define Z_CLEARANCE_MULTI_PROBE     1 // Z Clearance between multiple probes\n"})}),"\n",(0,r.jsx)(e.h2,{id:"bd\u30BB\u30F3\u30B5\u30FC\u306E\u5024\u3092\u6DB2\u6676\u753B\u9762\u306B\u8868\u793A",children:"BD\u30BB\u30F3\u30B5\u30FC\u306E\u5024\u3092\u6DB2\u6676\u753B\u9762\u306B\u8868\u793A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u30D7\u30EA\u30F3\u30BF\u304C\u72B6\u614B\u8868\u793A\u6A5F\u80FD\u3092\u6301\u3063\u3066\u3044\u308B\u5834\u5408\uFF08M117 G\u30B3\u30FC\u30C9\u3092\u30B5\u30DD\u30FC\u30C8\uFF09\u3001LCD12864\u3084\u4E00\u90E8\u306EUART\u30B9\u30AF\u30EA\u30FC\u30F3\uFF08\u4F8B\u3048\u3070\u3001Ender3V2\u306A\u3069\uFF09"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u6821\u6B63",children:"\u6821\u6B63"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u30CE\u30BA\u30EB\u3092\u6E05\u6383\u3057\u3001\u30B3\u30F3\u30BD\u30FC\u30EB\u3067Z\u8EF8\u3092\u52D5\u304B\u3057\u3066\u30CE\u30BA\u30EB\u304C\u30D9\u30C3\u30C9\u306B\u89E6\u308C\u308B\u307E\u3067\u79FB\u52D5\uFF08BDsensor-m\u306F\u3053\u306E\u4F4D\u7F6E\u30920\u70B9\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u305F\u3081\u3001z_offset\u306F\u5FC5\u8981\u3042\u308A\u307E\u305B\u3093\u3002\u5024\u30920\u306B\u8A2D\u5B9A\u3057\u307E\u3059\uFF09\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["G\u30B3\u30FC\u30C9\u30B3\u30DE\u30F3\u30C9",(0,r.jsx)(e.code,{children:"M102 S-6"}),"\u3092\u9001\u4FE1\u3059\u308B\u3068\u3001\u30D7\u30EA\u30F3\u30BF\u304C0.1mm\u305A\u3064Z\u8EF8\u3092\u3086\u3063\u304F\u308A\u3068\u4E0A\u6607\u3055\u305B\u30014mm\u306B\u9054\u3059\u308B\u307E\u3067\u7D9A\u3051\u307E\u3059\u3002\u30BB\u30F3\u30B5\u30FC\u3092\u53D6\u308A\u4ED8\u3051\u308B\u524D\u306BM102 S-6\u3092\u5B9F\u884C\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002\u307E\u305F\u3001\u6821\u6B63\u4E2D\u306B\u30D7\u30EA\u30F3\u30BF\u306E\u96FB\u6E90\u3092\u5207\u308B\u3068\u3001\u53E4\u3044\u6821\u6B63\u30C7\u30FC\u30BF\u304C\u524A\u9664\u3055\u308C\u307E\u3059\u3002\u305D\u306E\u5834\u5408\u3001\u518D\u5EA6\u6821\u6B63\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"M102 S-5"}),"\u3092\u9001\u4FE1\u3057\u3066BD\u30BB\u30F3\u30B5\u30FC\u304C\u6B63\u3057\u304F\u6821\u6B63\u3055\u308C\u305F\u304B\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u306FBD\u30BB\u30F3\u30B5\u30FC\u5185\u306B\u4FDD\u5B58\u3055\u308C\u305F\u751F\u306E\u6821\u6B63\u30C7\u30FC\u30BF\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u6821\u6B63\u30C4\u30FC\u30EB\u3082\u3053\u308C\u3092\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\uFF1A",(0,r.jsx)(e.a,{href:"https://github.com/markniu/Bed_Distance_sensor/raw/new/marlin/BD_Config_Tool_Marlin.zip",children:"https://github.com/markniu/Bed_Distance_sensor/raw/new/marlin/BD_Config_Tool_Marlin.zip"})," ",(0,r.jsx)(e.img,{src:"https://raw.githubusercontent.com/markniu/Bed_Distance_sensor/main/doc/images/Read.jpg",alt:"img"})]}),"\n",(0,r.jsx)(e.p,{children:"\u6CE8\u610F\uFF1A\u30C7\u30FC\u30BF\u5024\u304C1015\u307E\u305F\u306F>1010\u306E\u5834\u5408\u3001\u30BB\u30F3\u30B5\u30FC\u306E\u7BC4\u56F2\u5916\u3092\u793A\u3057\u307E\u3059\u3002\u6700\u521D\u306E5\u70B9\uFF080~0.5mm\uFF09\u307E\u305F\u306F\u305D\u308C\u4EE5\u4E0A\u306E\u5024\u304C0\u304B\u30891000\u306E\u7BC4\u56F2\u5185\u306B\u3042\u308A\u3001\u5897\u52A0\u3059\u308B\u5024\u306Edelta\u304C>=10\u3067\u3042\u308C\u3070\u3001\u6821\u6B63\u6210\u529F\u3067\u3059\u3002\u4E0A\u306E\u30B0\u30E9\u30D5\u306E\u3088\u3046\u306B\u3002"}),"\n",(0,r.jsx)(e.p,{children:"M102 S-5\u304C\u8FD4\u3059\u6700\u521D\u306E\u751F\u306E\u6821\u6B63\u30C7\u30FC\u30BF\u304C400\u3092\u8D85\u3048\u308B\u5834\u5408\u3001\u30BB\u30F3\u30B5\u30FC\u304C\u9AD8\u3059\u304E\u3066\u53D6\u308A\u4ED8\u3051\u3089\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u3001\u30D9\u30C3\u30C9\u306B\u3088\u308A\u8FD1\u3044\u4F4D\u7F6E\u306B\u518D\u53D6\u308A\u4ED8\u3051\u304C\u5FC5\u8981\u3067\u3059\u3002\u307E\u305F\u30012\u756A\u76EE\u306E\u30C7\u30FC\u30BF\u304C\u6700\u521D\u306E\u30C7\u30FC\u30BF\u5024\u3088\u308A10\u4EE5\u4E0A\u5927\u304D\u304F\u306A\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u30C6\u30B9\u30C8\u3068\u30D7\u30EA\u30F3\u30C8",children:"\u30C6\u30B9\u30C8\u3068\u30D7\u30EA\u30F3\u30C8"}),"\n",(0,r.jsx)(e.p,{children:"\u30E1\u30CB\u30E5\u30FC \u30D9\u30C3\u30C9\u30EC\u30D9\u30EA\u30F3\u30B0"}),"\n",(0,r.jsx)(e.p,{children:"\u81EA\u52D5\u30D9\u30C3\u30C9\u30EC\u30D9\u30EA\u30F3\u30B0"}),"\n",(0,r.jsx)(e.h2,{id:"\u30D9\u30C3\u30C9\u3092\u81EA\u52D5\u7684\u306B\u30EC\u30D9\u30EB\u306B\u3059\u308B\u65B9\u6CD5\u306F2\u3064\u3042\u308A\u307E\u3059",children:"\u30D9\u30C3\u30C9\u3092\u81EA\u52D5\u7684\u306B\u30EC\u30D9\u30EB\u306B\u3059\u308B\u65B9\u6CD5\u306F2\u3064\u3042\u308A\u307E\u3059\uFF1A"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"1. M102\u3092\u4F7F\u7528\u3057\u3066\u6700\u521D\u306E\u6570\u5C64\u3092\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u3067\u30EC\u30D9\u30EB\u306B\u3059\u308B"})}),"\n",(0,r.jsx)(e.p,{children:"G\u30B3\u30FC\u30C9\u30B3\u30DE\u30F3\u30C9\u3092\u9001\u4FE1\u3059\u308B\u304B\u3001G\u30B3\u30FC\u30C9\u30D5\u30A1\u30A4\u30EB\u306BG\u30B3\u30FC\u30C9\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u3067\u3001\u7C21\u5358\u306B\u3053\u306E\u81EA\u52D5\u30EC\u30D9\u30EB\u3092\u6709\u52B9\u307E\u305F\u306F\u7121\u52B9\u306B\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["Kura\u3067\u30D9\u30C3\u30C9\u30EC\u30D9\u30EA\u30F3\u30B0\u3092\u6709\u52B9\u306B\u3059\u308B\u306B\u306F\u3001\u30D7\u30EA\u30F3\u30BF\u30DE\u30B7\u30F3\u306E\u8A2D\u5B9A\u306E\u300C\u958B\u59CBG\u30B3\u30FC\u30C9\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u306BG102\uFF08\u3059\u3079\u3066\u306E\u8EF8\u3092\u30DB\u30FC\u30E0\u306B\u623B\u3059\uFF09G\u30B3\u30FC\u30C9\u306E\u76F4\u4E0B\u306BM28 G\u30B3\u30FC\u30C9\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001G28\u306E\u4E0B\u306B\u3053\u308C\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001Z\u8EF8\u306E\u9AD8\u3055\u304C0.2mm\u672A\u6E80\u306E\u5834\u5408\u306B\u306E\u307F\u30D9\u30C3\u30C9\u30EC\u30D9\u30EA\u30F3\u30B0\u304C\u884C\u308F\u308C\u307E\u3059\u3002",(0,r.jsx)(e.code,{children:"M102 S2"})]}),"\n",(0,r.jsxs)(e.p,{children:["BD\u30BB\u30F3\u30B5\u30FC\u306B\u3088\u308B\u30D9\u30C3\u30C9\u30EC\u30D9\u30EA\u30F3\u30B0\u3092\u7121\u52B9\u306B\u3059\u308B\u306B\u306F\u3001\u6B21\u306EG\u30B3\u30FC\u30C9\u3092\u9001\u4FE1\u3057\u307E\u3059\u3002",(0,r.jsx)(e.code,{children:"M102 S0``G28``M18"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"M102   S-1     //\u30BB\u30F3\u30B5\u60C5\u5831\u306E\u8AAD\u307F\u53D6\u308A\u3001\u3053\u308C\u3092\u4F7F\u7528\u3057\u3066\u63A5\u7D9A\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002\nM102   S-2     //\u73FE\u5728\u306E\u8DDD\u96E2\u5024\u3092\u8AAD\u307F\u53D6\u308B\nM102   S-5     //\u751F\u306E\u6821\u6B63\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u53D6\u308B\nM102   S-6     //\u6821\u6B63\u3092\u958B\u59CB\u3059\u308B\u524D\u306B\u3001\u30CE\u30BA\u30EB\u304C\u30D9\u30C3\u30C9\u306B\u89E6\u308C\u308B\u307E\u3067\u3001\u30D7\u30EA\u30F3\u30BF\u3092\u518D\u8D77\u52D5\u3057\u307E\u3059\u3002Z\u8EF8\u3092\u30DB\u30FC\u30E0\u306B\u623B\u3059\u524D\u306B\u3053\u308C\u3092\u884C\u308F\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002\nM102   S4      //\u8ABF\u6574\u53EF\u80FD\u306AZ\u9AD8\u3055\u5024\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001M102 S4\u306FZ\u9AD8\u3055\u304C0.4mm\u4EE5\u4E0B\u306E\u5834\u5408\u306B\u8ABF\u6574\u3092\u884C\u3044\u307E\u3059\u3002\u7121\u52B9\u306B\u3059\u308B\u306B\u306FM102 S0\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"2. G29\u306B\u3088\u308B\u81EA\u52D5\u30D9\u30C3\u30C9\u30EC\u30D9\u30EA\u30F3\u30B0"})}),"\n",(0,r.jsx)(e.p,{children:"G29\u306EBLtouch\u306E\u3088\u3046\u306B\u81EA\u52D5\u30D9\u30C3\u30C9\u30EC\u30D9\u30EA\u30F3\u30B0\u3092\u884C\u3046\u5225\u306E\u65B9\u6CD5\u306F\u3001G29\u306E\u4E0B\u306B\u4E00\u884C\u3001G28\u3092\u8FFD\u52A0\u3059\u308B\u3060\u3051\u3067\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://www.pandapi3d.com/post/install-bed-distance-sensor-video",children:"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u30D3\u30C7\u30AA"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://youtu.be/VLUfvkO2NFc?si=PF_6nhw39KhHBhcj",children:"\u30AF\u30EA\u30B9\u306E\u5730\u4E0B\u5BA4\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u30D3\u30C7\u30AA"})}),"\n",(0,r.jsxs)(e.h3,{id:"z\u30A8\u30F3\u30C9\u30B9\u30C8\u30C3\u30D7\u306E\u78BA\u8A8Dm119",children:["Z\u30A8\u30F3\u30C9\u30B9\u30C8\u30C3\u30D7\u306E\u78BA\u8A8D",(0,r.jsx)(e.code,{children:"M119"})]}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3092\u78BA\u8A8D\u3059\u308B\u524D\u306BZ\u8EF8\u3092\u30DB\u30FC\u30E0\u306B\u623B\u3055\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002\u305D\u3046\u3057\u306A\u3044\u3068\u3001\u30CE\u30BA\u30EB\u304C\u30D7\u30EA\u30F3\u30BF\u30FC\u30D9\u30C3\u30C9\u306B\u63A5\u89E6\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u308C\u306FM119\u30B3\u30DE\u30F3\u30C9\uFF08\u30A8\u30F3\u30C9\u30B9\u30C8\u30C3\u30D7\u72B6\u614B\u306E\u5831\u544A\uFF09\u9001\u4FE1\u5F8C\u306E\u8FD4\u4FE1\u30E1\u30C3\u30BB\u30FC\u30B8\u3067\u3059\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"Send: M119\nRecv: x:open y:open z:open\n"})}),"\n",(0,r.jsxs)(e.p,{children:["z min\u304C\u958B\u3044\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u3001\u8A2D\u5B9A\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",(0,r.jsx)(e.code,{children:"#define Z_MAX_ENDSTOP_HIT_STATE HIGH"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Z\u30E2\u30FC\u30BF\u30FC\u304C\u30AA\u30D5/\u30ED\u30C3\u30AF\u89E3\u9664\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D"}),"\n",(0,r.jsx)(e.li,{children:"\u624B\u3067Z\u8EF8\u3092\u4E0B\u306B\u52D5\u304B\u3057\u3001\u30CE\u30BA\u30EB\u304C\u30D9\u30C3\u30C9\u306B\u89E6\u308C\u308B\u307E\u3067"}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"M102 S-2"}),"\u3092\u9001\u4FE1\u3059\u308B\u3068\u3001\u8FD4\u308A\u5024\u306F0.00mm\u306B\u306A\u308B\u306F\u305A\u3067\u3059\u3002\u6B21\u306BM119\u3092\u518D\u5EA6\u9001\u4FE1\u3059\u308B\u3068\u3001z\u30A8\u30F3\u30C9\u30B9\u30C8\u30C3\u30D7\u304C\u30C8\u30EA\u30AC\u30FC\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u304C\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"Send: M119\nRecv: x:open y:open z:TRIGGERED\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u63A5\u7D9A\u306E\u78BA\u8A8D",children:"\u63A5\u7D9A\u306E\u78BA\u8A8D"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"M102 S-1"}),"\u3067\u63A5\u7D9A\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u8FD4\u4FE1\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u4F8B\u3067\u3001\u63A5\u7D9A\u3068\u914D\u7DDA\u9806\u5E8F\u304C\u7A7A\u767D\u3084\u4ED6\u306E\u6587\u5B57\u5217\u3092\u8FD4\u3059\u304B\u3069\u3046\u304B\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"Send: M102 S-1\nRecv: V1.0 pandapi3d.com\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u4E0A\u8A18\u306E\u5168\u3066\u306E\u30B9\u30C6\u30C3\u30D7\u304C\u6B63\u3057\u3044\u5834\u5408z\u8EF8\u3092\u30DB\u30FC\u30E0\u306B\u623B\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059",children:"\u4E0A\u8A18\u306E\u5168\u3066\u306E\u30B9\u30C6\u30C3\u30D7\u304C\u6B63\u3057\u3044\u5834\u5408\u3001Z\u8EF8\u3092\u30DB\u30FC\u30E0\u306B\u623B\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"})]})}function t(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},47663:function(n,e,s){s.d(e,{Z:function(){return i}});let i=s.p+"assets/images/bd-4d1080107145fed7d8a6ac8c4e5d9536.webp"},79938:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return d}});var i=s(75271);let r={},l=i.createContext(r);function d(n){let e=i.useContext(l);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);