"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["62246"],{33743:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>s});var i=JSON.parse('{"id":"ProductDoc/SBC/fly-mini-pad/uart","title":"\u8A2D\u5B9A\u65B9\u6CD5","description":"\u3053\u306E\u65B9\u6CD5\u3092\u4F7F\u7528\u3057\u305F\u5F8C\u3001mini pad\u306E\u52A0\u901F\u5EA6\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u4ECB\u3057\u3066\u52A0\u901F\u5EA6\u8A08\u3092\u5916\u4ED8\u3051\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/ProductDoc/SBC/fly-mini-pad/uart.mdx","sourceDirName":"ProductDoc/SBC/fly-mini-pad","slug":"/ProductDoc/SBC/fly-mini-pad/uart","permalink":"/fly-docs-next/ja/docs/ProductDoc/SBC/fly-mini-pad/uart","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-mini-pad/uart.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":9,"frontMatter":{"sidebar_position":9,"sidebar_label":"UART\u7D4C\u7531\u3067\u30E1\u30A4\u30F3\u30DC\u30FC\u30C9\u306B\u63A5\u7D9A\u3059\u308B"},"sidebar":"tutorialSidebar","previous":{"title":"\u30DC\u30FC\u30C9\u5185\u8535UTOC\u306E\u4F7F\u7528","permalink":"/fly-docs-next/ja/docs/ProductDoc/SBC/fly-mini-pad/utoc"},"next":{"title":"\u4E09\u6B21\u5143\u30E2\u30C7\u30EB\u3068\u56DE\u8DEF\u56F3","permalink":"/fly-docs-next/ja/docs/ProductDoc/SBC/fly-mini-pad/schematic"}}'),r=t("52676"),o=t("79938");let s={sidebar_position:9,sidebar_label:"UART\u7D4C\u7531\u3067\u30E1\u30A4\u30F3\u30DC\u30FC\u30C9\u306B\u63A5\u7D9A\u3059\u308B"},d="\u8A2D\u5B9A\u65B9\u6CD5",c={},a=[{value:"\u30B1\u30FC\u30D6\u30EB\u63A5\u7D9A\u65B9\u6CD5",id:"\u30B1\u30FC\u30D6\u30EB\u63A5\u7D9A\u65B9\u6CD5",level:2},{value:"Klipper\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u8A2D\u5B9A",id:"klipper\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u8A2D\u5B9A",level:2}];function l(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{ImageView:i}=n;return!i&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u8A2D\u5B9A\u65B9\u6CD5",children:"\u8A2D\u5B9A\u65B9\u6CD5"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u6CE8\u610F",type:"danger",children:(0,r.jsx)(n.p,{children:"\u3053\u306E\u65B9\u6CD5\u3092\u4F7F\u7528\u3057\u305F\u5F8C\u3001mini pad\u306E\u52A0\u901F\u5EA6\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u4ECB\u3057\u3066\u52A0\u901F\u5EA6\u8A08\u3092\u5916\u4ED8\u3051\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["BOOT\u30C9\u30E9\u30A4\u30D6\u3092\u958B\u304D\u3001",(0,r.jsx)(n.code,{children:"armbianEnv.txt"}),"\u3092\u898B\u3064\u3051\u958B\u304F"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"overlays=usbhost2 usbhost3 uart2"}),"\u306E",(0,r.jsx)(n.strong,{children:"uart2"}),"\u3092",(0,r.jsx)(n.strong,{children:"uart3"}),"\u306B\u5909\u66F4\u3057\u4FDD\u5B58\u3059\u308B\u3060\u3051\u3067\u5B8C\u4E86\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(i,{image:t(9045).Z,size:"80%",align:"center"}),"\n",(0,r.jsx)(n.h2,{id:"\u30B1\u30FC\u30D6\u30EB\u63A5\u7D9A\u65B9\u6CD5",children:"\u30B1\u30FC\u30D6\u30EB\u63A5\u7D9A\u65B9\u6CD5"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"mini-pad\u306ETX\u306F\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u304C\u713C\u304B\u308C\u305F\u30E1\u30A4\u30F3\u30DC\u30FC\u30C9\u306ERX\u306B\u63A5\u7D9A\u3057\u3066\u304F\u3060\u3055\u3044"}),"\n",(0,r.jsx)(n.li,{children:"mini-pad\u306ERX\u306F\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u304C\u713C\u304B\u308C\u305F\u30E1\u30A4\u30F3\u30DC\u30FC\u30C9\u306ETX\u306B\u63A5\u7D9A\u3057\u3066\u304F\u3060\u3055\u3044"}),"\n",(0,r.jsx)(n.li,{children:"\u5730\u7DDA\u3082\u5171\u6709\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059"}),"\n",(0,r.jsx)(n.li,{children:"\u305D\u3046\u3057\u306A\u3044\u3068\u3001\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u304C\u713C\u304B\u308C\u305F\u30E1\u30A4\u30F3\u30DC\u30FC\u30C9\u306B\u63A5\u7D9A\u3067\u304D\u307E\u305B\u3093"}),"\n"]}),"\n",(0,r.jsx)(i,{image:t(3111).Z,size:"80%",align:"center"}),"\n",(0,r.jsx)(n.h2,{id:"klipper\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u8A2D\u5B9A",children:"Klipper\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u8A2D\u5B9A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[mcu]\nserial: /dev/ttyS3\nbaud\uFF1A250000\n#   \u4F7F\u7528\u3055\u308C\u308B\u30DC\u30FC\u30EC\u30FC\u30C8\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F250000\nrestart_method:command\n"})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},9045:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/uart-9f86dbf2b17ce74810241302c49d6f21.webp"},3111:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/uart1-84f4dfe5ec67b4a3b173b060fdf6072f.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var i=t(75271);let r={},o=i.createContext(r);function s(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);