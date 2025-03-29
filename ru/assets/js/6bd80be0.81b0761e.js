"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["2824"],{61799:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"ProductDoc/ExtensionBoard/fly-canbus/index","title":"CANBUS","description":"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/fly-canbus/index.mdx","sourceDirName":"ProductDoc/ExtensionBoard/fly-canbus","slug":"/ProductDoc/ExtensionBoard/fly-canbus/","permalink":"/fly-docs-next/ru/docs/ProductDoc/ExtensionBoard/fly-canbus/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/fly-canbus/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743143372000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435"},"sidebar":"tutorialSidebar","previous":{"title":"FLY-CANBUS","permalink":"/fly-docs-next/ru/docs/category/fly-canbus"},"next":{"title":"\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u044B\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0438 \u0442\u0440\u0451\u0445\u043C\u0435\u0440\u043D\u044B\u0435 \u043C\u043E\u0434\u0435\u043B\u0438","permalink":"/fly-docs-next/ru/docs/ProductDoc/ExtensionBoard/fly-canbus/wiring"}}'),r=t("74132"),o=t("94551");let s={sidebar_position:1,sidebar_label:"\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435"},l="CANBUS",c={},d=[{value:"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438",id:"\u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435-\u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438",level:2},{value:"\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438",id:"\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435-\u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438",level:2},{value:"\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u044F",id:"\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u044F",level:2}];function a(e){let n={admonition:"admonition",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,o.a)(),...e.components},{ImageView:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"canbus",children:"CANBUS"})}),"\n",(0,r.jsx)(i,{image:t(31627).Z,size:"40%",align:"left"}),"\n",(0,r.jsx)(n.h2,{id:"\u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435-\u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438",children:"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435 CAN \u0438 \u043F\u0438\u0442\u0430\u043D\u0438\u044F \u043D\u0430 \u0447\u0435\u0442\u044B\u0440\u0435 \u0447\u0430\u0441\u0442\u0438, \u0447\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044C \u0447\u0435\u0442\u044B\u0440\u0435 \u043F\u043B\u0430\u0442\u044B \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432 CAN"}),"\n",(0,r.jsx)(n.li,{children:"\u041D\u0430 \u0431\u043E\u0440\u0442\u0443 \u0435\u0441\u0442\u044C \u0440\u0430\u0437\u044A\u0435\u043C RJ11, \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044B\u0439 \u0434\u043B\u044F \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0438 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0449\u0438\u043C\u0438 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B CAN. \u041D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u0442\u043E, \u0447\u0442\u043E RJ11 \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u043C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u043C \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445 CAN, \u043D\u0430\u0448 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043F\u043B\u0430\u0432\u043D\u043E\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438"}),"\n",(0,r.jsx)(n.li,{children:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0439 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u0438\u043D\u0442\u0435\u0440 \u043D\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0443\u044E"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435-\u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438",children:"\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u0418\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0441\u0432\u044F\u0437\u0438: RJ11",(0,r.jsx)(n.em,{children:"1, XH2.54"}),"5"]}),"\n",(0,r.jsx)(n.li,{children:"\u0420\u0430\u0437\u044A\u0435\u043C \u043F\u0438\u0442\u0430\u043D\u0438\u044F: KF128-5.028-2P*5"}),"\n",(0,r.jsx)(n.li,{children:"\u0412\u0445\u043E\u0434\u043D\u043E\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435: 5V-24V"}),"\n",(0,r.jsx)(n.li,{children:"\u0421\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C: RRF/Klipper/\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 CAN"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u044F",children:"\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u044F"}),"\n",(0,r.jsx)(n.admonition,{title:"\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u044F",type:"warning",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u0445\u043E\u0434\u043D\u043E\u043C\u0443"}),"\n",(0,r.jsx)(n.li,{children:"\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u0446\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043C\u0430\u0440\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u0440\u043E\u0432\u043E\u0434\u043E\u0432 \u043D\u0435 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0430"}),"\n",(0,r.jsx)(n.li,{children:"\u041F\u0435\u0440\u0435\u0434 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u043E\u0439 \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u044B \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0430 \u043E\u0442 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043F\u0438\u0442\u0430\u043D\u0438\u044F"}),"\n",(0,r.jsx)(n.li,{children:"\u0418\u0437\u0431\u0435\u0433\u0430\u0439\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u044B \u0432 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u0438 \u0438\u043B\u0438 \u0437\u0430\u0433\u0440\u044F\u0437\u043D\u0435\u043D\u0438\u044F"}),"\n",(0,r.jsx)(n.li,{children:"\u041F\u0440\u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0439."}),"\n"]})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},31627:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/canbus-2dc10ab71336881fe356d41e42c77bb4.webp"},94551:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var i=t(39546);let r={},o=i.createContext(r);function s(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);