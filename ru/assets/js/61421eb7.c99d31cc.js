"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["65973"],{41012:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"DebugDoc/BasicTutorial/camera","title":"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 USB-\u043A\u0430\u043C\u0435\u0440\u044B","description":"* \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0441\u043B\u0443\u0436\u0431\u044B crowsnest, \u0435\u0441\u043B\u0438 \u043E\u043D\u0430 \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445 lite2 \u0438 mini pad.","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/DebugDoc/BasicTutorial/camera.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/camera","permalink":"/fly-docs-next/ru/docs/DebugDoc/BasicTutorial/camera","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/camera.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743143372000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 USB-\u043A\u0430\u043C\u0435\u0440\u044B"},"sidebar":"debugdocSidebar","previous":{"title":"\u041C\u0435\u0442\u043E\u0434 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B","permalink":"/fly-docs-next/ru/docs/DebugDoc/BasicTutorial/backup"},"next":{"title":"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 KlipperScreen","permalink":"/fly-docs-next/ru/docs/DebugDoc/BasicTutorial/klipperscreen"}}'),c=i("74132"),t=i("94551");let r={sidebar_position:6,sidebar_label:"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 USB-\u043A\u0430\u043C\u0435\u0440\u044B"},l="\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 USB-\u043A\u0430\u043C\u0435\u0440\u044B",d={},a=[{value:"\u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",id:"\u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0435-\u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",level:2},{value:"\u041F\u043E\u0438\u0441\u043A ID \u043A\u0430\u043C\u0435\u0440\u044B",id:"\u043F\u043E\u0438\u0441\u043A-id-\u043A\u0430\u043C\u0435\u0440\u044B",level:2},{value:"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 ID",id:"\u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435-id",level:2},{value:"\u0410\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u044F \u043A\u0430\u043C\u0435\u0440\u044B",id:"\u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u044F-\u043A\u0430\u043C\u0435\u0440\u044B",level:2},{value:"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438",id:"\u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430-\u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438",level:2}];function o(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components},{ImageView:s}=n;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435-usb-\u043A\u0430\u043C\u0435\u0440\u044B",children:"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 USB-\u043A\u0430\u043C\u0435\u0440\u044B"})}),"\n",(0,c.jsx)(n.admonition,{title:"\u0412\u0430\u0436\u043D\u043E",type:"danger",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0441\u043B\u0443\u0436\u0431\u044B ",(0,c.jsx)(n.code,{children:"crowsnest"}),", \u0435\u0441\u043B\u0438 \u043E\u043D\u0430 \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445 lite2 \u0438 mini pad."]}),"\n",(0,c.jsx)(n.li,{children:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043A\u0430\u043C\u0435\u0440\u0430 \u0431\u0435\u0437 \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F plug-and-play, \u0442\u0430\u043A\u0430\u044F \u043A\u0430\u043A \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445 Linux, Armbian \u0438 \u0442. \u0434., \u0434\u043B\u044F klipper, \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u044B \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u044E\u0442\u0441\u044F."}),"\n",(0,c.jsx)(n.li,{children:"\u0412 \u0434\u0430\u043D\u043D\u043E\u043C \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0432\u0435\u0440\u0441\u0438\u044F klipper, crowsnest \u0438 fuidd; \u0434\u043B\u044F \u0434\u0440\u0443\u0433\u0438\u0445 \u043C\u0435\u0442\u043E\u0434\u043E\u0432 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u0435."}),"\n"]})}),"\n",(0,c.jsx)(n.h2,{id:"\u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0435-\u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",children:"\u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"ID \u043A\u0430\u043C\u0435\u0440\u044B \u043C\u043E\u0436\u0435\u0442 \u043E\u0442\u043B\u0438\u0447\u0430\u0442\u044C\u0441\u044F \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u044B, \u0432\u0430\u0436\u043D\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u044B\u0439 ID."}),"\n"]})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u0412 Fuidd \u043D\u0430\u0439\u0434\u0438\u0442\u0435 \u0444\u0430\u0439\u043B \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0438 \u043E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 ",(0,c.jsx)(n.code,{children:"crowsnest.conf"})]}),"\n",(0,c.jsx)(s,{image:i(85537).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u041D\u0430\u0439\u0434\u0438\u0442\u0435 ",(0,c.jsx)(n.code,{children:"device: "})," \u0438 \u0443\u0434\u0430\u043B\u0438\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0439 ID"]}),"\n",(0,c.jsx)(s,{image:i(98264).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u043F\u043E\u0438\u0441\u043A-id-\u043A\u0430\u043C\u0435\u0440\u044B",children:"\u041F\u043E\u0438\u0441\u043A ID \u043A\u0430\u043C\u0435\u0440\u044B"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u043A\u0430\u043C\u0435\u0440\u0430 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0430 \u043A \u0445\u043E\u0441\u0442-\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0443."}),"\n"]})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0432\u0435\u0440\u0445\u043D\u044E\u044E \u043A\u043D\u043E\u043F\u043A\u0443 ",(0,c.jsx)(n.code,{children:"DEVICES"}),", \u0437\u0430\u0442\u0435\u043C ",(0,c.jsx)(n.code,{children:"VIDEO"})," \u0438 \u043D\u0430\u043A\u043E\u043D\u0435\u0446 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435","\n",(0,c.jsx)(s,{image:i(46377).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\u041D\u0430\u0439\u0434\u0438\u0442\u0435 ",(0,c.jsx)(n.code,{children:"path_by_id"})," \u0438 \u0441\u043A\u043E\u043F\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u0441\u0442\u0440\u043E\u043A\u0443","\n",(0,c.jsx)(s,{image:i(80597).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435-id",children:"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 ID"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 ID \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E","\n",(0,c.jsx)(s,{image:i(95743).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u044F-\u043A\u0430\u043C\u0435\u0440\u044B",children:"\u0410\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u044F \u043A\u0430\u043C\u0435\u0440\u044B"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:['\u041F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u043C\u0435\u0440\u0443 \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u043C\u0435\u0440\u0443"',"\n",(0,c.jsx)(s,{image:i(6171).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:['\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0436\u0435\u043B\u0430\u0435\u043C\u043E\u0435 \u0438\u043C\u044F \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"',"\n",(0,c.jsx)(s,{image:i(19326).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430-\u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438",children:"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u0433\u0434\u0435 \u0434\u043E\u043B\u0436\u043D\u0430 \u043F\u043E\u044F\u0432\u0438\u0442\u044C\u0441\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u0441 \u043A\u0430\u043C\u0435\u0440\u044B","\n",(0,c.jsx)(s,{image:i(40588).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,c.jsx)(n.li,{children:"\u0415\u0441\u043B\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043D\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F, \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u0443"}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},85537:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf-ed62c5d3c67d6ffa7049b607c5487114.webp"},98264:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf1-ebd689792e54725448656b348ab9f2c7.webp"},46377:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf2-f212fcb81ae24b4d126e7c45791f38f8.webp"},80597:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf3-f80f6b4227ef850143a177b7bf27e2e4.webp"},95743:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf4-b4bcb990e096b504ede0c708d951cb3f.webp"},6171:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf5-625f49f11a5b7d93a819ae7c4b7c245b.webp"},19326:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf6-0a166fa0bc6535d25156fc8153cdde4b.webp"},40588:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf7-2388d1ccd426a8ec34234afc6afbec06.webp"},94551:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return r}});var s=i(39546);let c={},t=s.createContext(c);function r(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);