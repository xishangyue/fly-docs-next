"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["48823"],{3279:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>a,assets:()=>t,toc:()=>o,frontMatter:()=>d});var s=JSON.parse('{"id":"ProductDoc/ExtensionBoard/fly-g2t/rpi","title":"\u30E9\u30BA\u30D1\u30A4\u4F7F\u7528\u8AAC\u660E","description":"\u6CE8\u610F\u4E8B\u9805\uFF1A","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/fly-g2t/rpi.mdx","sourceDirName":"ProductDoc/ExtensionBoard/fly-g2t","slug":"/ProductDoc/ExtensionBoard/fly-g2t/rpi","permalink":"/fly-docs-next/ja/docs/ProductDoc/ExtensionBoard/fly-g2t/rpi","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/fly-g2t/rpi.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"\u30E9\u30BA\u30D1\u30A4\u4F7F\u7528\u30AC\u30A4\u30C9"},"sidebar":"tutorialSidebar","previous":{"title":"\u7D39\u4ECB","permalink":"/fly-docs-next/ja/docs/ProductDoc/ExtensionBoard/fly-g2t/"},"next":{"title":"FLY PI\u4F7F\u7528\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB","permalink":"/fly-docs-next/ja/docs/ProductDoc/ExtensionBoard/fly-g2t/fly"}}'),l=i("52676"),r=i("79938");let d={sidebar_position:2,sidebar_label:"\u30E9\u30BA\u30D1\u30A4\u4F7F\u7528\u30AC\u30A4\u30C9"},c="\u30E9\u30BA\u30D1\u30A4\u4F7F\u7528\u8AAC\u660E",t={},o=[{value:"\u6CE8\u610F\u4E8B\u9805\uFF1A",id:"\u6CE8\u610F\u4E8B\u9805",level:2},{value:"\u30E9\u30BA\u30D1\u30A4\u306E\u4E8B\u524D\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6E08\u307FTFTV2\u30B7\u30B9\u30C6\u30E0\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u30EA\u30F3\u30AF",id:"\u30E9\u30BA\u30D1\u30A4\u306E\u4E8B\u524D\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6E08\u307Ftftv2\u30B7\u30B9\u30C6\u30E0\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u30EA\u30F3\u30AF",level:2},{value:"G2T\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",id:"g2t\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",level:2},{value:"\u30AA\u30F3\u30FB\u30DC\u30FC\u30C9RS232\u3092\u4F7F\u7528\u3057\u3066\u30C4\u30FC\u30EB\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u63A5\u7D9A\u3059\u308B\u65B9\u6CD5",id:"\u30AA\u30F3\u30DC\u30FC\u30C9rs232\u3092\u4F7F\u7528\u3057\u3066\u30C4\u30FC\u30EB\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u63A5\u7D9A\u3059\u308B\u65B9\u6CD5",level:2},{value:"\u30AA\u30F3\u30FB\u30DC\u30FC\u30C95VFAN\u306E\u4F7F\u7528",id:"\u30AA\u30F3\u30DC\u30FC\u30C95vfan\u306E\u4F7F\u7528",level:2},{value:"\u753B\u9762\u306E\u4F7F\u7528\u65B9\u6CD5",id:"\u753B\u9762\u306E\u4F7F\u7528\u65B9\u6CD5",level:2},{value:"1. \u7D39\u4ECB",id:"1-\u7D39\u4ECB",level:3},{value:"2. \u30B7\u30B9\u30C6\u30E0\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",id:"2-\u30B7\u30B9\u30C6\u30E0\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",level:3},{value:"4. \u30C9\u30E9\u30A4\u30D0\u30FC\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",id:"4-\u30C9\u30E9\u30A4\u30D0\u30FC\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",level:3},{value:"5. \u4F7F\u7528",id:"5-\u4F7F\u7528",level:3},{value:"6. KlipperScreen\u306E\u4F7F\u7528",id:"6-klipperscreen\u306E\u4F7F\u7528",level:3},{value:"7. \u5229\u7528\u53EF\u80FD\u306A\u3059\u3079\u3066\u306E\u8A2D\u5B9A",id:"7-\u5229\u7528\u53EF\u80FD\u306A\u3059\u3079\u3066\u306E\u8A2D\u5B9A",level:3},{value:"\u30E9\u30BA\u30D1\u30A4zero2\u3068zero2W\u306B\u95A2\u3059\u308B\u6CE8\u610F\u4E8B\u9805",id:"\u30E9\u30BA\u30D1\u30A4zero2\u3068zero2w\u306B\u95A2\u3059\u308B\u6CE8\u610F\u4E8B\u9805",level:2},{value:"\u753B\u9762\u306E\u8A2D\u7F6E",id:"\u753B\u9762\u306E\u8A2D\u7F6E",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Button:s,ImageView:d}=n;return!s&&x("Button",!0),!d&&x("ImageView",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u30E9\u30BA\u30D1\u30A4\u4F7F\u7528\u8AAC\u660E",children:"\u30E9\u30BA\u30D1\u30A4\u4F7F\u7528\u8AAC\u660E"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9805",children:"\u6CE8\u610F\u4E8B\u9805\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u62E1\u5F35\u30DC\u30FC\u30C9\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u524D\u306B\u3001\u4E0A\u4F4D\u6A5F\u306E\u96FB\u6E90\u3092\u5207\u3063\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u6E7F\u6C17\u3084\u307B\u3053\u308A\u306E\u591A\u3044\u74B0\u5883\u3067\u306E\u62E1\u5F35\u30DC\u30FC\u30C9\u306E\u4F7F\u7528\u3092\u907F\u3051\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u753B\u9762\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u969B\u306F\u3001\u96FB\u6E90\u3092\u5165\u308C\u305F\u307E\u307E\u629C\u304D\u5DEE\u3057\u3057\u306A\u3044\u3088\u3046\u306B\u6CE8\u610F\u3057\u3001\u753B\u9762\u306E\u5411\u304D\u306B\u3082\u6C17\u3092\u4ED8\u3051\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u30D5\u30A1\u30F3\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u969B\u306F\u3001\u30D5\u30A1\u30F3\u306E\u96FB\u6D41\u3068\u96FB\u5727\u4ED5\u69D8\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,l.jsx)(n.li,{children:"UART1\u306F\u65E2\u306B\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u6709\u52B9\u306B\u306A\u3063\u3066\u3044\u308B\u305F\u3081\u3001\u8A2D\u5B9A\u306F\u4E0D\u8981\u3067\u3059\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u6700\u65B0\u306E\u30A4\u30E1\u30FC\u30B8\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u4F8B\u3048\u3070",(0,l.jsx)(n.code,{children:"mainsailos"}),"\u3067\u3059\u3002\u30AB\u30FC\u30CD\u30EB\u3092\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u30E9\u30BA\u30D1\u30A4\u306F\u5168\u3066\u306E\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\uFF01\uFF01\uFF01"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsxs)(n.strong,{children:["\u6CE8\u610F\uFF1A\u30E9\u30BA\u30D1\u30A4\u304C\u4F7F\u7528\u3059\u308B\u30B7\u30B9\u30C6\u30E0\u306E\u30AB\u30FC\u30CD\u30EB\u30D0\u30FC\u30B8\u30E7\u30F3\u306F",(0,l.jsx)(n.code,{children:"5.17.x"}),"\u4EE5\u4E0A\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u30B3\u30DE\u30F3\u30C9",(0,l.jsx)(n.code,{children:"uname -r"}),"\u3067\u30AB\u30FC\u30CD\u30EB\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u30E9\u30BA\u30D1\u30A4\u306E\u4E8B\u524D\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6E08\u307Ftftv2\u30B7\u30B9\u30C6\u30E0\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u30EA\u30F3\u30AF",children:"\u30E9\u30BA\u30D1\u30A4\u306E\u4E8B\u524D\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6E08\u307FTFTV2\u30B7\u30B9\u30C6\u30E0\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u30EA\u30F3\u30AF"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u30E9\u30BA\u30D1\u30A4zero2/zero2W/2B/3B/3B+/4B/CM4/5B\u7528\u306E\u30B7\u30B9\u30C6\u30E0\u30A4\u30E1\u30FC\u30B8"}),"\n",(0,l.jsx)(n.li,{children:"\u3053\u306E\u30A4\u30E1\u30FC\u30B8\u306B\u306Fklipper\u3001moonraker\u3001mainsail\u3001fulidd\u3001klipper-screen\u306A\u3069\u304C\u4E8B\u524D\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u307E\u3059\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"https://cdn.mellow.klipper.cn/IMG/Beta/RPI-TFT-IMG-new.img.xz\n"})}),"\n",(0,l.jsx)(n.h2,{id:"g2t\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",children:"G2T\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u4E0B\u8A18\u306F\u53C2\u8003\u3067\u3059","\n",(0,l.jsx)(d,{image:i(59830).Z,size:"60%",align:"left"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u914D\u7DDA\u53C2\u8003","\n",(0,l.jsx)(d,{image:i(86991).Z,size:"60%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u30AA\u30F3\u30DC\u30FC\u30C9rs232\u3092\u4F7F\u7528\u3057\u3066\u30C4\u30FC\u30EB\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u63A5\u7D9A\u3059\u308B\u65B9\u6CD5",children:"\u30AA\u30F3\u30FB\u30DC\u30FC\u30C9RS232\u3092\u4F7F\u7528\u3057\u3066\u30C4\u30FC\u30EB\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u63A5\u7D9A\u3059\u308B\u65B9\u6CD5"}),"\n",(0,l.jsx)(d,{image:i(99264).Z,size:"60%",align:"left"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u30E9\u30BA\u30D1\u30A4\u306B\u6700\u65B0\u306E\u30B7\u30B9\u30C6\u30E0\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u305F\u5F8C\u3001",(0,l.jsx)(n.strong,{children:"\u30D6\u30FC\u30C8\u30C7\u30A3\u30B9\u30AF\u306Econfig.txt\u30D5\u30A1\u30A4\u30EB\u3092\u7DE8\u96C6\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059"})]}),"\n",(0,l.jsx)(n.li,{children:"UART1\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u958B\u304B\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u30B7\u30B9\u30C6\u30E0\u5185\u3067\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002UART3\u306F\u4EE5\u4E0B\u306E\u624B\u9806\u304C\u5FC5\u8981\u3067\u3059\u3002"}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"config.txt"}),"\u306B\u4EE5\u4E0B\u306E\u884C\u3092\u8FFD\u52A0\u3057\u3066\u304F\u3060\u3055\u3044"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"dtoverlay=uart3\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"UART1\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001ID\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cfg",children:"[mcu] \nserial: /dev/ttyAMA0\nbaud: 250000\nrestart_method:command\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"UART3\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001ID\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cfg",children:"[mcu] \nserial: /dev/ttyAMA1\nbaud: 250000\nrestart_method:command\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u30AA\u30F3\u30DC\u30FC\u30C95vfan\u306E\u4F7F\u7528",children:"\u30AA\u30F3\u30FB\u30DC\u30FC\u30C95VFAN\u306E\u4F7F\u7528"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u30E9\u30BA\u30D1\u30A440PIN\u3067\u30C7\u30D0\u30A4\u30B9\u3092\u5236\u5FA1\u3059\u308B\u5834\u5408\u306F\u3001Klipper\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u306B\u5F93\u3063\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u304F\u3060\u3055\u3044\u3002 ",(0,l.jsx)(s,{variant:"contained",disableElevation:!0,href:"https://www.klipper3d.org/zh/RPi_microcontroller.html?h=rpi",children:"RPi \u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u30FC"})]}),"\n",(0,l.jsx)(d,{image:i(99279).Z,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cfg",children:"[mcu host]       \nserial: /tmp/klipper_host_mcu \n\n[temperature_sensor Raspberry Pi]\nsensor_type: temperature_host\n\n[temperature_fan core_fan] \npin: host:gpio12\nmax_power: 1.0\nsensor_type: temperature_host   #\u30DB\u30B9\u30C8\u30DE\u30B7\u30F3\u306E\u6E29\u5EA6\u306B\u8A2D\u5B9A\ncontrol:watermark                  #\u5236\u5FA1\u65B9\u6CD5\ntarget_temp: 48                   #\u30DB\u30B9\u30C8\u30DE\u30B7\u30F3\u51B7\u5374\u30D5\u30A1\u30F3\u958B\u59CB\u6E29\u5EA6\nmin_temp: 0                     #\u6700\u4F4E\u6E29\u5EA6\u3001\u3053\u308C\u4EE5\u4E0B\u306E\u6E29\u5EA6\u3067\u306F\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3059\nmax_temp: 90                    #\u6700\u9AD8\u6E29\u5EA6\u3001\u3053\u308C\u4EE5\u4E0A\u306E\u6E29\u5EA6\u3067\u306F\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3059\noff_below: 0.10\nkick_start_time: 0.50\nmax_speed: 0.8                   #\u6700\u5927\u901F\u5EA6\u3001\u30D5\u30EB\u30D1\u30EF\u30FC\u6642\u306E80%\nmin_speed: 0.3                    #\u6700\u5C0F\u901F\u5EA6\u3001\u30D5\u30EB\u30D1\u30EF\u30FC\u6642\u306E30%\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u753B\u9762\u306E\u4F7F\u7528\u65B9\u6CD5",children:"\u753B\u9762\u306E\u4F7F\u7528\u65B9\u6CD5"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Github\u30EA\u30F3\u30AF ",(0,l.jsx)(s,{variant:"contained",disableElevation:!0,href:"https://github.com/kluoyun/FLY-TFT",children:"FLY-TFT"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"1-\u7D39\u4ECB",children:"1. \u7D39\u4ECB"}),"\n",(0,l.jsx)(n.p,{children:"FLY-TFT-V2\u306Fst7796\u30D9\u30FC\u30B9\u306ETFT\u6DB2\u6676\u753B\u9762\u3067\u3001\u9759\u96FB\u5BB9\u91CF\u5F0F\u30BF\u30C3\u30C1\u3068\u62B5\u6297\u819C\u5F0F\u30BF\u30C3\u30C1\u306E\u4E21\u65B9\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3001\u89E3\u50CF\u5EA6\u306F320x480\u3001SPI\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"2-\u30B7\u30B9\u30C6\u30E0\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",children:"2. \u30B7\u30B9\u30C6\u30E0\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u6CE8\u610F\uFF1A\u30E9\u30BA\u30D1\u30A4\u304C\u4F7F\u7528\u3059\u308B\u30B7\u30B9\u30C6\u30E0\u306E\u30AB\u30FC\u30CD\u30EB\u30D0\u30FC\u30B8\u30E7\u30F3\u306F",(0,l.jsx)(n.code,{children:"5.17.x"}),"\u4EE5\u4E0A\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u30B3\u30DE\u30F3\u30C9",(0,l.jsx)(n.code,{children:"uname -r"}),"\u3067\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6700\u65B0\u306E\u30A4\u30E1\u30FC\u30B8\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u4F8B\u3048\u3070",(0,l.jsx)(n.code,{children:"mainsailos"}),"\u3067\u3059\u3002\u30AB\u30FC\u30CD\u30EB\u3092\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u81EA\u5206\u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059 ",(0,l.jsx)(s,{variant:"contained",disableElevation:!0,href:"ttps://klipperscreen.readthedocs.io/en/latest/Installation/",children:"KlipperScreen"})]}),"\n"]})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://www.raspberrypi.com/software/",children:"Raspberry Imager"}),"\u3092\u4F7F\u7528\u3057\u3066\u6700\u65B0\u306E",(0,l.jsx)(n.strong,{children:"MainsailOS"}),"\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://www.raspberrypi.com/software/",children:"Raspberry Imager"}),"\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Raspberry Imager"}),"\u3092\u958B\u304F"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"CHOOSE DEVICE"}),"\u3092\u30AF\u30EA\u30C3\u30AF"]}),"\n",(0,l.jsx)(n.li,{children:"\u5BFE\u5FDC\u3059\u308B\u30E2\u30C7\u30EB\u3092\u9078\u629E"}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"CHOOSE OS"}),"\u3092\u30AF\u30EA\u30C3\u30AF"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Other specific-purpose OS"}),"\u3092\u9078\u629E"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"3D printing"}),"\u3092\u9078\u629E"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Mainsail OS"}),"\u3092\u9078\u629E"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6700\u65B0\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u9078\u629E\u300264\u30D3\u30C3\u30C8\u30B7\u30B9\u30C6\u30E0\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u308B\u5834\u5408\u306F",(0,l.jsx)(n.strong,{children:"rpi64"}),"\u3092\u9078\u629E"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"CHOOSE STORAGE"}),"\u3092\u30AF\u30EA\u30C3\u30AF"]}),"\n",(0,l.jsx)(n.li,{children:"\u30B9\u30C8\u30EC\u30FC\u30B8\u30C7\u30D0\u30A4\u30B9\u3092\u9078\u629E\uFF08\u4F8B\uFF1ASD\u30AB\u30FC\u30C9\uFF09"}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"NEXT"}),"\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3001\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u304C\u5B8C\u4E86\u3059\u308B\u306E\u3092\u5F85\u3064"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"4-\u30C9\u30E9\u30A4\u30D0\u30FC\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",children:"4. \u30C9\u30E9\u30A4\u30D0\u30FC\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"FLY-TFT-V2\u30C9\u30E9\u30A4\u30D0\u30FC\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/kluoyun/FLY-TFT.git\ncd FLY-TFT\nsudo chmod +x ./scripts/install.sh\n./scripts/install.sh\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"5-\u4F7F\u7528",children:"5. \u4F7F\u7528"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u30BF\u30C3\u30C1\u6A5F\u80FD\u3092\u4F7F\u7528\u3059\u308B\u306B\u306FI2C\u3092\u6709\u52B9\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u5BFE\u5FDC\u3059\u308B\u8A2D\u5B9A\u306F",(0,l.jsx)(n.code,{children:"dtparam=i2c_arm=on"})]}),"\n"]})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u30C9\u30E9\u30A4\u30D0\u30FC\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u5F8C\u3001config.txt\u30D5\u30A1\u30A4\u30EB\u306B",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2"}),"\u306E\u30AA\u30FC\u30D0\u30FC\u30EC\u30A4\u3092\u8FFD\u52A0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"/boot/config.txt"})," (bookworm\u30B7\u30B9\u30C6\u30E0\u3067\u306F",(0,l.jsx)(n.code,{children:"/boot/firmware/config.txt"}),")\u3092\u958B\u304F","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo nano /boot/config.txt\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u30D5\u30A1\u30A4\u30EB\u306E\u6700\u5F8C\u306B\u4EE5\u4E0B\u306E\u8A2D\u5B9A\u3092\u8FFD\u52A0","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"dtoverlay=fly-tft-v2\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u753B\u9762\u306F90\u5EA6\u306E\u6A2A\u753B\u9762\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u753B\u9762\u3092\u56DE\u8EE2\u3055\u305B\u308B\u5834\u5408\u306F\u4EE5\u4E0B\u306E\u8A2D\u5B9A\u3092\u4F7F\u7528","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"dtoverlay=fly-tft-v2,r90  # \u30C7\u30D5\u30A9\u30EB\u30C8\u3068\u540C\u3058\u65B9\u5411\u3001\u6A2A\ndtoverlay=fly-tft-v2,r270 # 270\u5EA6\u6A2A\u753B\u9762\u3001\u6A2A\uFF08\u53CD\u8EE2\uFF09\ndtoverlay=fly-tft-v2,r0   # 0\u5EA6\u7E26\u753B\u9762\u3001\u7E26\ndtoverlay=fly-tft-v2,r180 # 180\u5EA6\u7E26\u753B\u9762\u3001\u7E26\uFF08\u53CD\u8EE2\uFF09\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8907\u6570\u306E\u8A2D\u5B9A\u3092\u540C\u6642\u306B\u8FFD\u52A0\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u30021\u3064\u3060\u3051\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u901A\u5E38\u3001TFT\u306E\u30BF\u30C3\u30C1\u65B9\u5411\u306F\u81EA\u52D5\u7684\u306B\u753B\u9762\u306E\u8868\u793A\u65B9\u5411\u306B\u5408\u308F\u305B\u3066\u56DE\u8EE2\u3057\u307E\u3059\u3002\u30B7\u30B9\u30C6\u30E0\u5185\u306E\u30BF\u30C3\u30C1\u8A2D\u5B9A\u3092\u5909\u66F4\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u30D5\u30A1\u30A4\u30EB\u306E\u6700\u5F8C\u306B\u8FFD\u52A0\u3057\u305F\u5F8C\u3001\u30B3\u30DE\u30F3\u30C9 ",(0,l.jsx)(n.code,{children:"sudo reboot"})," \u3067\u30B7\u30B9\u30C6\u30E0\u3092\u518D\u8D77\u52D5\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u63A5\u7D9A\u304C\u6B63\u3057\u3044\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u30C9\u30E9\u30A4\u30D0\u30FC\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"/boot/config.txt"})," (bookworm\u30B7\u30B9\u30C6\u30E0\u3067\u306F",(0,l.jsx)(n.code,{children:"/boot/firmware/config.txt"}),")\u306B",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2"}),"\u306E\u30AA\u30FC\u30D0\u30FC\u30EC\u30A4\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"\u4E00\u90E8\u306E\u30B7\u30B9\u30C6\u30E0\u3067\u306F\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306Efb0\u30C7\u30D0\u30A4\u30B9\u304C\u3042\u308A\u3001FLY-TFT\u304Cfb1\u30C7\u30D0\u30A4\u30B9\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001fb1\u30C7\u30D0\u30A4\u30B9\u3092\u6709\u52B9\u306B\u3059\u308B\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3092\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u30B3\u30DE\u30F3\u30C9",(0,l.jsx)(n.code,{children:"ls /dev/fb*"}),"\u3092\u5B9F\u884C\u3057\u3066\u30C7\u30D0\u30A4\u30B9\u3092\u78BA\u8A8D\u3057\u3001fb0\u3068fb1\u306E2\u3064\u306E\u30C7\u30D0\u30A4\u30B9\u304C\u8868\u793A\u3055\u308C\u305F\u5834\u5408\u306F\u3001\u6B21\u306E\u30B3\u30DE\u30F3\u30C9\u3067fb1\u30C7\u30D0\u30A4\u30B9\u3092\u6709\u52B9\u306B\u3057\u3066\u304F\u3060\u3055\u3044\uFF08\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ffb0\u3067\u3059\uFF09\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6B21\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u3066\u30C7\u30D5\u30A9\u30EB\u30C8\u8A2D\u5B9A\u3092fb1\u30C7\u30D0\u30A4\u30B9\u306B\u5909\u66F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo sed -i 's/\\/dev\\/fb0/\\/dev\\/fb1/g' /etc/X11/xorg.conf.d/99-fbdev.conf\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"6-klipperscreen\u306E\u4F7F\u7528",children:"6. KlipperScreen\u306E\u4F7F\u7528"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MainsailOS\u306B\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067KlipperScreen\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u624B\u52D5\u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/KlipperScreen/KlipperScreen",children:"KlipperScreen"}),"\u307E\u305F\u306F",(0,l.jsx)(n.a,{href:"https://github.com/dw-0/kiauh",children:"kiauh"}),"\u3092\u4F7F\u7528\u3057\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"KlipperScreen\u304C\u6B63\u5E38\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u30015\u306E\u624B\u9806\u304C\u6B63\u3057\u304F\u5B8C\u4E86\u3057\u3066\u3044\u308B\u5834\u5408\u3001KlipperScreen\u306E\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u306F\u305A\u3067\u3059\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"7-\u5229\u7528\u53EF\u80FD\u306A\u3059\u3079\u3066\u306E\u8A2D\u5B9A",children:"7. \u5229\u7528\u53EF\u80FD\u306A\u3059\u3079\u3066\u306E\u8A2D\u5B9A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"speed"})," **\u30D1\u30E9\u30E1\u30FC\u30BF\u304C\u5FC5\u8981\uFF1ATFT\u306E\u6700\u5927SPI\u30AF\u30ED\u30C3\u30AF\u5468\u6CE2\u6570\u3092\u8A2D\u5B9A\u3001\u5358\u4F4D\u306FHz\u3001\u30C7\u30D5\u30A9\u30EB\u30C896000000\uFF08\u91CD\u5EA6\u306E\u753B\u9762\u4E71\u308C\u304C\u767A\u751F\u3059\u308B\u5834\u5408\u306F\u3053\u306E\u5024\u3092\u9069\u5207\u306B\u4E0B\u3052\u3066\u304F\u3060\u3055\u3044\uFF09"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u4F8B\uFF1A",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,speed=80000000"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"r0/r90/r180/r270"})," ",(0,l.jsx)(n.strong,{children:"\u30AA\u30D7\u30B7\u30E7\u30F3****\u30D1\u30E9\u30E1\u30FC\u30BF\u4E0D\u8981"}),"\uFF1ATFT\u306E\u8868\u793A\u3068\u30BF\u30C3\u30C1\u65B9\u5411\u3092\u8A2D\u5B9A\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306F90\u5EA6\u3001\u9078\u629E\u80A2\u306F0,90,180,270\uFF081\u3064\u306E\u8A2D\u5B9A\u3057\u304B\u8FFD\u52A0\u3067\u304D\u307E\u305B\u3093\uFF09"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u4F8B\uFF1A",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,r90"}),"\u307E\u305F\u306F",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,r180"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"disable_touch"})," ",(0,l.jsx)(n.strong,{children:"\u30D1\u30E9\u30E1\u30FC\u30BF\u4E0D\u8981"}),"\uFF1ATFT\u306E\u30BF\u30C3\u30C1\u6A5F\u80FD\u3092\u7121\u52B9\u5316\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306F\u6709\u52B9"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u4F8B\uFF1A",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,disable_touch"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"invx"}),",",(0,l.jsx)(n.code,{children:"invy"})," ",(0,l.jsx)(n.strong,{children:"\u30D1\u30E9\u30E1\u30FC\u30BF\u4E0D\u8981"}),"\uFF1ATFT\u306E\u30BF\u30C3\u30C1\u65B9\u5411\u3092\u8A2D\u5B9A\u3001",(0,l.jsx)(n.code,{children:"invx"}),"\u306FX\u65B9\u5411\u306E\u53CD\u8EE2\u3001",(0,l.jsx)(n.code,{children:"invy"}),"\u306FY\u65B9\u5411\u306E\u53CD\u8EE2"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u4F8B\uFF1A",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,invx"}),"\u307E\u305F\u306F",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,invy"}),"\u307E\u305F\u306F",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,invx,invy"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"swapxy"})," ",(0,l.jsx)(n.strong,{children:"\u30D1\u30E9\u30E1\u30FC\u30BF\u4E0D\u8981"}),"\uFF1ATFT\u306E\u30BF\u30C3\u30C1\u65B9\u5411\u3092\u8A2D\u5B9A\u3001X\u8EF8\u3068Y\u8EF8\u3092\u5165\u308C\u66FF\u3048\u308B\u3001\u3064\u307E\u308A\u6A2A\u753B\u9762"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u4F8B\uFF1A",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,swapxy"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u6CE8\u610F\uFF1A"})," \u3059\u3079\u3066\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u540C\u6642\u306B\u8A2D\u5B9A\u53EF\u80FD\u3067\u3059\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u306F1\u3064\u3060\u3051\u8A2D\u5B9A\u3067\u304D\u307E\u3059\uFF09\u3001\u30D1\u30E9\u30E1\u30FC\u30BF\u9593\u306F\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3089\u308C\u3001\u8907\u6570\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u540C\u3058\u884C\u306B\u8A18\u8FF0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u8B66\u544A\uFF1A"})," \u901A\u5E38",(0,l.jsx)(n.code,{children:"r0"}),",",(0,l.jsx)(n.code,{children:"r90"}),",",(0,l.jsx)(n.code,{children:"r180"}),",",(0,l.jsx)(n.code,{children:"r270"}),"\u306E4\u3064\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u3060\u3051\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002\u4ED6\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u7279\u5225\u306A\u5834\u5408\u306B\u306E\u307F\u4F7F\u7528\u3057\u3001\u7279\u306B",(0,l.jsx)(n.code,{children:"invx"}),",",(0,l.jsx)(n.code,{children:"invy"}),",",(0,l.jsx)(n.code,{children:"swapxy"}),"\u306F\u6CE8\u610F\u304C\u5FC5\u8981\u3067\u3059\u3002"]}),"\n"]})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u4F8B\uFF1A",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,speed=80000000,r270"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u30E9\u30BA\u30D1\u30A4zero2\u3068zero2w\u306B\u95A2\u3059\u308B\u6CE8\u610F\u4E8B\u9805",children:"\u30E9\u30BA\u30D1\u30A4zero2\u3068zero2W\u306B\u95A2\u3059\u308B\u6CE8\u610F\u4E8B\u9805"}),"\n",(0,l.jsx)(d,{image:i(8641).Z,size:"60%",align:"left"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u3053\u306E\u6CE8\u610F\u4E8B\u9805\u306F\u3001G2T\u3068FLY-TFT\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u7D44\u307F\u5408\u308F\u305B\u4F7F\u7528\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u30E9\u30BA\u30D1\u30A4zero2\u3068zero2w\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u8868\u793A\u30C7\u30D0\u30A4\u30B9\u3092\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3057\u3066\u76F4\u63A5\u5909\u66F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u305D\u3046\u3057\u306A\u3044\u3068\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5B9F\u884C\u5F8C\u3001\u518D\u8D77\u52D5\u304C\u5FC5\u8981\u3067\u3059\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo sed -i 's/\\/dev\\/fb0/\\/dev\\/fb1/g' /etc/X11/xorg.conf.d/99-fbdev.conf\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u753B\u9762\u306E\u8A2D\u7F6E",children:"\u753B\u9762\u306E\u8A2D\u7F6E"}),"\n",(0,l.jsx)(d,{image:i(30382).Z,size:"60%",align:"left"})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}function x(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},99279:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/fan-e6535916f95c6a94e95ea9d7db9891fa.webp"},59830:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/rpi-f550377e6b2b6c35156fe11bf638213d.webp"},99264:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/rpi1-f1e8a944f33142318715072937c95400.webp"},30382:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/tft-c7c05154ce5b60eea7e2814b21c17577.webp"},86991:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/wiring-78f638290176e0176e660b4569b9c8f1.webp"},8641:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/zero-7b6dfc5d2fc078a77b56265254d76b3a.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return d}});var s=i(75271);let l={},r=s.createContext(l);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);