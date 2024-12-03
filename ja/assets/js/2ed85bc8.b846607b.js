"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["76155"],{56030:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>d,toc:()=>a,frontMatter:()=>r});var s=JSON.parse('{"id":"DebugDoc/BasicTutorial/camera","title":"USB\u30AB\u30E1\u30E9\u306E\u8FFD\u52A0","description":"* crowsnest\u30B5\u30FC\u30D3\u30B9\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002lite2\u3084mini pad\u306E\u30B7\u30B9\u30C6\u30E0\u306B\u306F\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u307E\u305B\u3093","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/DebugDoc/BasicTutorial/camera.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/camera","permalink":"/fly-docs-next/ja/docs/DebugDoc/BasicTutorial/camera","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/camera.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"USB\u30AB\u30E1\u30E9\u306E\u8FFD\u52A0"},"sidebar":"debugdocSidebar","previous":{"title":"\u30B7\u30B9\u30C6\u30E0\u30AF\u30E9\u30C3\u30B7\u30E5\u6642\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u8A2D\u5B9A\u65B9\u6CD5","permalink":"/fly-docs-next/ja/docs/DebugDoc/BasicTutorial/backup"},"next":{"title":"KlipperScreen\u306E\u62E1\u5F35\u6A5F\u80FD","permalink":"/fly-docs-next/ja/docs/DebugDoc/BasicTutorial/klipperscreen"}}'),c=i("52676"),t=i("79938");let r={sidebar_position:6,sidebar_label:"USB\u30AB\u30E1\u30E9\u306E\u8FFD\u52A0"},l="USB\u30AB\u30E1\u30E9\u306E\u8FFD\u52A0",d={},a=[{value:"\u8A2D\u5B9A\u3092\u958B\u304F",id:"\u8A2D\u5B9A\u3092\u958B\u304F",level:2},{value:"\u30AB\u30E1\u30E9ID\u306E\u691C\u7D22",id:"\u30AB\u30E1\u30E9id\u306E\u691C\u7D22",level:2},{value:"ID\u306E\u8FFD\u52A0",id:"id\u306E\u8FFD\u52A0",level:2},{value:"\u30AB\u30E1\u30E9\u306E\u6709\u52B9\u5316",id:"\u30AB\u30E1\u30E9\u306E\u6709\u52B9\u5316",level:2},{value:"\u6709\u52B9\u5316\u306E\u78BA\u8A8D",id:"\u6709\u52B9\u5316\u306E\u78BA\u8A8D",level:2}];function o(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components},{ImageView:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"usb\u30AB\u30E1\u30E9\u306E\u8FFD\u52A0",children:"USB\u30AB\u30E1\u30E9\u306E\u8FFD\u52A0"})}),"\n",(0,c.jsx)(n.admonition,{title:"\u6CE8\u610F",type:"danger",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"crowsnest"}),"\u30B5\u30FC\u30D3\u30B9\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002lite2\u3084mini pad\u306E\u30B7\u30B9\u30C6\u30E0\u306B\u306F\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u307E\u305B\u3093"]}),"\n",(0,c.jsx)(n.li,{children:"\u514D\u8A31\u4E0D\u8981\u3067\u5373\u5EA7\u306B\u4F7F\u7528\u53EF\u80FD\u306A\u30AB\u30E1\u30E9\u304C\u5FC5\u8981\u3067\u3059\u3002Linux\u3001Armbian\u306A\u3069\u306E\u30B7\u30B9\u30C6\u30E0\u3067\u306Eklipper\u5BFE\u5FDC\u304C\u53EF\u80FD\u3067\u3001\u8FFD\u52A0\u306E\u30C9\u30E9\u30A4\u30D0\u30FC\u306F\u4E0D\u8981\u3067\u3059\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u3053\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3067\u306F\u6700\u65B0\u306Eklipper\u3001crowsnest\u3001fuidd\u3092\u4F8B\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u7570\u306A\u308B\u65B9\u6CD5\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u81EA\u5206\u3067\u8ABF\u67FB\u3057\u3066\u304F\u3060\u3055\u3044"}),"\n"]})}),"\n",(0,c.jsx)(n.h2,{id:"\u8A2D\u5B9A\u3092\u958B\u304F",children:"\u8A2D\u5B9A\u3092\u958B\u304F"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u30AB\u30E1\u30E9ID\u306F\u30B7\u30B9\u30C6\u30E0\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u304C\u3001\u5909\u66F4\u3055\u308C\u306A\u3044ID\u3092\u78BA\u8A8D\u3059\u308B\u3060\u3051\u3067\u5927\u4E08\u592B\u3067\u3059"}),"\n"]})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Fuidd\u3067\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3092\u898B\u3064\u3051\u3001",(0,c.jsx)(n.code,{children:"crowsnest.conf"}),"\u3092\u958B\u304F"]}),"\n",(0,c.jsx)(s,{image:i(85537).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"device: "}),"\u306E\u5F8C\u308D\u306EID\u8A2D\u5B9A\u3092\u524A\u9664\u3059\u308B"]}),"\n",(0,c.jsx)(s,{image:i(98264).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u30AB\u30E1\u30E9id\u306E\u691C\u7D22",children:"\u30AB\u30E1\u30E9ID\u306E\u691C\u7D22"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u30AB\u30E1\u30E9\u304C\u30DB\u30B9\u30C8PC\u306B\u63A5\u7D9A\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044"}),"\n"]})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u4E0A\u90E8\u306E",(0,c.jsx)(n.code,{children:"DEVICES"}),"\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3001",(0,c.jsx)(n.code,{children:"VIDEO"}),"\u3092\u30AF\u30EA\u30C3\u30AF\u3001\u6700\u5F8C\u306B\u66F4\u65B0\u3092\u30AF\u30EA\u30C3\u30AF","\n",(0,c.jsx)(s,{image:i(46377).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"path_by_id"}),"\u3092\u63A2\u3057\u3001\u5F8C\u308D\u306E\u884C\u3092\u30B3\u30D4\u30FC\u3059\u308B","\n",(0,c.jsx)(s,{image:i(80597).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"id\u306E\u8FFD\u52A0",children:"ID\u306E\u8FFD\u52A0"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["ID\u3092\u8FFD\u52A0\u3057\u3001\u8A2D\u5B9A\u3092\u4FDD\u5B58","\n",(0,c.jsx)(s,{image:i(95743).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u30AB\u30E1\u30E9\u306E\u6709\u52B9\u5316",children:"\u30AB\u30E1\u30E9\u306E\u6709\u52B9\u5316"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u8A2D\u5B9A\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3001\u30AB\u30E1\u30E9\u3092\u9078\u629E\u3001\u6700\u5F8C\u306B\u30AB\u30E1\u30E9\u3092\u8FFD\u52A0\u3092\u30AF\u30EA\u30C3\u30AF","\n",(0,c.jsx)(s,{image:i(6171).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\u597D\u304D\u306A\u540D\u524D\u3092\u5165\u529B\u3057\u3001\u4FDD\u5B58\u3092\u30AF\u30EA\u30C3\u30AF","\n",(0,c.jsx)(s,{image:i(19326).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u6709\u52B9\u5316\u306E\u78BA\u8A8D",children:"\u6709\u52B9\u5316\u306E\u78BA\u8A8D"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30AB\u30E1\u30E9\u306E\u6620\u50CF\u304C\u8868\u793A\u3055\u308C\u307E\u3059","\n",(0,c.jsx)(s,{image:i(40588).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,c.jsx)(n.li,{children:"\u8868\u793A\u3055\u308C\u306A\u3044\u5834\u5408\u306F\u3001\u30B7\u30B9\u30C6\u30E0\u3092\u518D\u8D77\u52D5\u3057\u3066\u304F\u3060\u3055\u3044"}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},85537:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf-ed62c5d3c67d6ffa7049b607c5487114.webp"},98264:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf1-ebd689792e54725448656b348ab9f2c7.webp"},46377:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf2-f212fcb81ae24b4d126e7c45791f38f8.webp"},80597:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf3-f80f6b4227ef850143a177b7bf27e2e4.webp"},95743:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf4-b4bcb990e096b504ede0c708d951cb3f.webp"},6171:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf5-625f49f11a5b7d93a819ae7c4b7c245b.webp"},19326:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf6-0a166fa0bc6535d25156fc8153cdde4b.webp"},40588:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf7-2388d1ccd426a8ec34234afc6afbec06.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return r}});var s=i(75271);let c={},t=s.createContext(c);function r(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);