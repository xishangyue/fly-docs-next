"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["27217"],{30529:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>p,assets:()=>o,toc:()=>t,frontMatter:()=>s});var i=JSON.parse('{"id":"ProductDoc/Screen/fly-wiscreen7/klipper","title":"klipper","description":"WIFI\u63A5\u7D9A\u3068\u57FA\u672C\u64CD\u4F5C","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/ProductDoc/Screen/fly-wiscreen7/klipper.mdx","sourceDirName":"ProductDoc/Screen/fly-wiscreen7","slug":"/ProductDoc/Screen/fly-wiscreen7/klipper","permalink":"/fly-docs-next/ja/docs/ProductDoc/Screen/fly-wiscreen7/klipper","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/Screen/fly-wiscreen7/klipper.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"WIFI\u63A5\u7D9A\u3068klipper\u8A2D\u5B9A"},"sidebar":"tutorialSidebar","previous":{"title":"\u958B\u6A5F\u5716\u7247\u4FEE\u6539","permalink":"/fly-docs-next/ja/docs/ProductDoc/Screen/fly-wiscreen7/flash"},"next":{"title":"\u30E9\u30BA\u30D9\u30EA\u30FC\u30D1\u30A4\u306A\u3069\u306E\u4E0A\u4F4D\u6A5F\u5668\u3092\u4F7F\u7528\u3057\u305F\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30B1\u30FC\u30D6\u30EB\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB","permalink":"/fly-docs-next/ja/docs/ProductDoc/Screen/fly-wiscreen7/linux"}}'),l=r("52676"),c=r("79938");let s={sidebar_position:4,sidebar_label:"WIFI\u63A5\u7D9A\u3068klipper\u8A2D\u5B9A"},d=void 0,o={},t=[{value:"WIFI\u63A5\u7D9A\u3068\u57FA\u672C\u64CD\u4F5C",id:"wifi\u63A5\u7D9A\u3068\u57FA\u672C\u64CD\u4F5C",level:2},{value:"Klipper\u8A2D\u5B9A",id:"klipper\u8A2D\u5B9A",level:2},{value:"LED\u8A2D\u5B9A",id:"led\u8A2D\u5B9A",level:3},{value:"PTC\u8A2D\u5B9A",id:"ptc\u8A2D\u5B9A",level:3},{value:"FAN\u8A2D\u5B9A",id:"fan\u8A2D\u5B9A",level:3},{value:"\u30AB\u30B9\u30BF\u30E0Gcode",id:"\u30AB\u30B9\u30BF\u30E0gcode",level:3},{value:"\u4F7F\u7528\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u9664\u5916",id:"\u4F7F\u7528\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u9664\u5916",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components},{ImageView:i}=n;return!i&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"wifi\u63A5\u7D9A\u3068\u57FA\u672C\u64CD\u4F5C",children:"WIFI\u63A5\u7D9A\u3068\u57FA\u672C\u64CD\u4F5C"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://www.bilibili.com/video/BV1mr421b7Bf/?spm_id_from=333.788&vd_source=36affb37d7228751cd1fcbbda487dfdf",children:"7\u30A4\u30F3\u30C1WiFi\u30BF\u30C3\u30C1\u30B9\u30AF\u30EA\u30FC\u30F3\u3067\u8907\u6570\u306E\u30DE\u30B7\u30F3\u3092\u5236\u5FA1"})}),"\n",(0,l.jsx)(n.h2,{id:"klipper\u8A2D\u5B9A",children:"Klipper\u8A2D\u5B9A"}),"\n",(0,l.jsx)(n.h3,{id:"led\u8A2D\u5B9A",children:"LED\u8A2D\u5B9A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cfg",children:"[led LED]\nwhite_pin:PA15\n"})}),"\n",(0,l.jsx)(n.h3,{id:"ptc\u8A2D\u5B9A",children:"PTC\u8A2D\u5B9A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cfg",children:"[heater_generic warehouse]\nheater_pin:E_CS\nsensor_type:ATC Semitec 104GT-2\nsensor_pin:PA1\nmin_temp:-270\nmax_temp:600\ncontrol = pid\npid_kp = 16.804\npid_ki = 0.794\npid_kd = 88.854\n"})}),"\n",(0,l.jsx)(n.h3,{id:"fan\u8A2D\u5B9A",children:"FAN\u8A2D\u5B9A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cfg",children:"[fan_generic fan1]\npin: FAN1\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cfg",children:"[fan_generic fan2]\npin: FAN2\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u30AB\u30B9\u30BF\u30E0gcode",children:"\u30AB\u30B9\u30BF\u30E0Gcode"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u4E0B\u306B\u30B9\u30EF\u30A4\u30D7\u3059\u308B\u3068\u30AB\u30B9\u30BF\u30E0Gcode\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.li,{children:"1\u3064\u306E\u30DC\u30BF\u30F3\u3067\u8907\u6570\u306EGcode\u5F62\u5F0F\u3092\u9001\u4FE1\u3067\u304D\u307E\u3059\uFF1A"}),"\n",(0,l.jsx)(n.li,{children:"\u4F8B\uFF1A"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cfg",children:"G91 \nG1 X10 F6000\nG90\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u3067\u5165\u529B\u3059\u308B\u5F62\u5F0F:(2\u884C\u76EE\u4EE5\u964D\u3001\u5404\u30B3\u30DE\u30F3\u30C9\u306E\u524D\u306B\\n\u3092\u8FFD\u52A0)"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cfg",children:"G91\\nG1 X10 F6000\\nG90\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u4F7F\u7528\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u9664\u5916",children:"\u4F7F\u7528\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u9664\u5916"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"moonraker\u3092\u7F6E\u304D\u63DB\u3048\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"SSH\u306B\u63A5\u7D9A\u3057\u3001\u6B63\u5E38\u306B\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306B\u63A5\u7D9A\u3067\u304D\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"moonraker\u30D5\u30A1\u30A4\u30EB\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"mv ~/moonraker ~/moonraker-bak\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"moonraker\u30B5\u30FC\u30D3\u30B9\u3092\u505C\u6B62"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart moonraker\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"moonraker\u3092pull"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"git clone https://e.coding.net/g-ofpa1390/3D-Printers/moonraker-dev.git -b flylcd-dev moonraker\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsxs)(n.li,{children:["\u30D6\u30E9\u30A6\u30B6\u3067\u4E0A\u4F4D\u6A5F\u306B\u30A2\u30AF\u30BB\u30B9\u3057\u3001",(0,l.jsx)(n.code,{children:"moonraker.conf"}),"\u3092\u8FFD\u52A0\u3057\u3066\u304B\u3089\u30B7\u30B9\u30C6\u30E0\u3092\u518D\u8D77\u52D5\u3057\u307E\u3059"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"[network]\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"5",children:["\n",(0,l.jsx)(n.li,{children:"\u6B21\u306B\u3001\u4EE5\u4E0B\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u30D6\u30E9\u30A6\u30B6\u306B\u5165\u529B\u3057\u307E\u3059\u3002IP\u306F\u4E0A\u4F4D\u6A5F\u306EIP\u306B\u7F6E\u304D\u63DB\u3048\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"http://ip:7125/server/network/wifi/scan\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u304C\u8868\u793A\u3055\u308C\u305F\u3089\u64CD\u4F5C\u5B8C\u4E86\u3067\u3059"}),"\n",(0,l.jsx)(i,{image:r(4594).Z,size:"100%",align:"left"}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},4594:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/moonraker-9b11e2e17eeea9c450be5b404401746a.webp"},79938:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return s}});var i=r(75271);let l={},c=i.createContext(l);function s(e){let n=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);