"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["81117"],{49345:function(e,l,n){n.r(l),n.d(l,{metadata:()=>t,contentTitle:()=>c,default:()=>j,assets:()=>r,toc:()=>x,frontMatter:()=>i});var t=JSON.parse('{"id":"DebugDoc/flyos-fast/config","title":"\u30B7\u30B9\u30C6\u30E0\u69CB\u6210\u306E\u5909\u66F4","description":"- \u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u5185\u306E\u90E8\u5206\u8A2D\u5B9A\u306F\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u713C\u304D\u4ED8\u3051\u5F8C\u306E\u6700\u521D\u306E\u30B7\u30B9\u30C6\u30E0\u8D77\u52D5\u6642\u306B\u306E\u307F\u6709\u52B9\u3067\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/DebugDoc/flyos-fast/config.mdx","sourceDirName":"DebugDoc/flyos-fast","slug":"/DebugDoc/flyos-fast/config","permalink":"/fly-docs-next/ja/docs/DebugDoc/flyos-fast/config","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/flyos-fast/config.mdx","tags":[],"version":"current","lastUpdatedBy":"kluoyun","lastUpdatedAt":1741655692000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"debugdocSidebar","previous":{"title":"\u30B7\u30B9\u30C6\u30E0\u30A4\u30E1\u30FC\u30B8\u306E\u713C\u4ED8\u3051","permalink":"/fly-docs-next/ja/docs/DebugDoc/flyos-fast/flash"},"next":{"title":"Klipper\u96FB\u6E90\u55AA\u5931\u7D99\u7D9A\u5370\u5237\u6A5F\u80FD","permalink":"/fly-docs-next/ja/docs/DebugDoc/flyos-fast/plr"}}'),s=n("52676"),d=n("79938");let i={sidebar_position:3},c="\u30B7\u30B9\u30C6\u30E0\u69CB\u6210\u306E\u5909\u66F4",r={},x=[{value:"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u306E\u5909\u66F4\u65B9\u6CD5",id:"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u306E\u5909\u66F4\u65B9\u6CD5",level:2},{value:"\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u713C\u304D\u4ED8\u3051\u5F8C\u306B\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u3092\u5909\u66F4\u3059\u308B",id:"\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u713C\u304D\u4ED8\u3051\u5F8C\u306B\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u3092\u5909\u66F4\u3059\u308B",level:3},{value:"\u30B7\u30B9\u30C6\u30E0\u304C\u8D77\u52D5\u3057\u3066\u3044\u308B\u5834\u5408\u306E\u30AA\u30F3\u30E9\u30A4\u30F3\u3067\u306E\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u5909\u66F4",id:"\u30B7\u30B9\u30C6\u30E0\u304C\u8D77\u52D5\u3057\u3066\u3044\u308B\u5834\u5408\u306E\u30AA\u30F3\u30E9\u30A4\u30F3\u3067\u306E\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u5909\u66F4",level:3},{value:"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE",id:"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE",level:2},{value:"\u7121\u7DDA\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u8A2D\u5B9A",id:"\u7121\u7DDA\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u8A2D\u5B9A",level:3},{value:"\u30D7\u30EA\u30F3\u30BF\u30FC\u30C7\u30D5\u30A9\u30EB\u30C8\u8A2D\u5B9A",id:"\u30D7\u30EA\u30F3\u30BF\u30FC\u30C7\u30D5\u30A9\u30EB\u30C8\u8A2D\u5B9A",level:3},{value:"\u30B7\u30B9\u30C6\u30E0\u8A2D\u5B9A",id:"\u30B7\u30B9\u30C6\u30E0\u8A2D\u5B9A",level:3},{value:"\u30D7\u30EA\u30F3\u30BF\u30FC\u30BF\u30A4\u30D7\u8A2D\u5B9A",id:"\u30D7\u30EA\u30F3\u30BF\u30FC\u30BF\u30A4\u30D7\u8A2D\u5B9A",level:3},{value:"\u8868\u793A\u8A2D\u5B9A",id:"\u8868\u793A\u8A2D\u5B9A",level:3},{value:"Klipper\u95A2\u9023\u8A2D\u5B9A",id:"klipper\u95A2\u9023\u8A2D\u5B9A",level:3},{value:"RRF\u95A2\u9023\u8A2D\u5B9A",id:"rrf\u95A2\u9023\u8A2D\u5B9A",level:3},{value:"\u305D\u306E\u4ED6\u306E\u8A2D\u5B9A",id:"\u305D\u306E\u4ED6\u306E\u8A2D\u5B9A",level:3}];function h(e){let l={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components},{ImageView:t}=l;return!t&&function(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.header,{children:(0,s.jsx)(l.h1,{id:"\u30B7\u30B9\u30C6\u30E0\u69CB\u6210\u306E\u5909\u66F4",children:"\u30B7\u30B9\u30C6\u30E0\u69CB\u6210\u306E\u5909\u66F4"})}),"\n",(0,s.jsx)(l.admonition,{title:"\u8AAD\u307F\u3082\u306E",type:"tip",children:(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u5185\u306E",(0,s.jsx)(l.code,{children:"\u90E8\u5206"}),"\u8A2D\u5B9A\u306F\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u713C\u304D\u4ED8\u3051\u5F8C\u306E\u6700\u521D\u306E\u30B7\u30B9\u30C6\u30E0\u8D77\u52D5\u6642\u306B\u306E\u307F\u6709\u52B9\u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(l.li,{children:["\u3057\u305F\u304C\u3063\u3066\u3001\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u713C\u304D\u4ED8\u3051\u5F8C\u3001\u79FB\u52D5\u53EF\u80FD\u306A\u30C7\u30A3\u30B9\u30AF",(0,s.jsx)(l.code,{children:"FlyOS-Conf"}),"\u5185\u306E\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EBconfig.txt\u3092\u7DE8\u96C6\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(l.li,{children:"\u305D\u306E\u5F8C\u3001\u30AB\u30FC\u30C9\u3092\u30DC\u30FC\u30C9\u306B\u633F\u5165\u3057\u3066\u30B7\u30B9\u30C6\u30E0\u3092\u8D77\u52D5\u3057\u307E\u3059\u3002"}),"\n"]})}),"\n",(0,s.jsx)(l.admonition,{title:"\u6CE8\u610F",type:"warning",children:(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Windows\u306E\u6A19\u6E96\u306E\u30E1\u30E2\u5E33\u3092\u4F7F\u7528\u3057\u3066\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u3092\u7DE8\u96C6\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002\u4EE3\u308F\u308A\u306Bvscode\u3084\u4ED6\u306E\u5C02\u9580\u7684\u306A\u30C6\u30AD\u30B9\u30C8\u30A8\u30C7\u30A3\u30BF\u30FC\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u306B\u306F\u4E2D\u56FD\u8A9E\u3084\u7279\u6B8A\u6587\u5B57\u3092\u5165\u529B\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u306E\u7DE8\u96C6\u5F8C\u3001\u30B7\u30B9\u30C6\u30E0\u3092\u518D\u8D77\u52D5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n"]})}),"\n",(0,s.jsx)(l.admonition,{type:"danger",children:(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u5185\u306E",(0,s.jsx)(l.code,{children:"######### PLEASE DO NOT EDIT THE FOLLOWING #########"}),"\u4EE5\u4E0B\u306E\u5185\u5BB9\u306F\u7DE8\u96C6\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002"]}),"\n"]})}),"\n",(0,s.jsx)(l.h2,{id:"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u306E\u5909\u66F4\u65B9\u6CD5",children:"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u306E\u5909\u66F4\u65B9\u6CD5"}),"\n",(0,s.jsx)(l.h3,{id:"\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u713C\u304D\u4ED8\u3051\u5F8C\u306B\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u3092\u5909\u66F4\u3059\u308B",children:"\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u713C\u304D\u4ED8\u3051\u5F8C\u306B\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u3092\u5909\u66F4\u3059\u308B"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\u4E00\u5EA6\u76EE\u306E\u8D77\u52D5\u6642\u306B\u6709\u52B9\u3068\u306A\u308B\u8A2D\u5B9A\u9805\u76EE\u306F\u3001\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u713C\u304D\u4ED8\u3051\u5F8C\u3001\u5C02\u9580\u7684\u306A\u30C6\u30AD\u30B9\u30C8\u30A8\u30C7\u30A3\u30BF\u30FC\u3092\u4F7F\u7528\u3057\u3066\u79FB\u52D5\u53EF\u80FD\u306A\u30C7\u30A3\u30B9\u30AF",(0,s.jsx)(l.code,{children:"FlyOS-Conf"}),"\u306E\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB",(0,s.jsx)(l.code,{children:"config.txt"}),"\u3092\u958B\u304D\u3001\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(l.h3,{id:"\u30B7\u30B9\u30C6\u30E0\u304C\u8D77\u52D5\u3057\u3066\u3044\u308B\u5834\u5408\u306E\u30AA\u30F3\u30E9\u30A4\u30F3\u3067\u306E\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u5909\u66F4",children:"\u30B7\u30B9\u30C6\u30E0\u304C\u8D77\u52D5\u3057\u3066\u3044\u308B\u5834\u5408\u306E\u30AA\u30F3\u30E9\u30A4\u30F3\u3067\u306E\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u5909\u66F4"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u4E00\u822C\u7684\u306A\u8A2D\u5B9A\u9805\u76EE\u306F\u3001\u30B7\u30B9\u30C6\u30E0\u306EWeb\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30DA\u30FC\u30B8\u3067\u5909\u66F4\u3057\u3001\u30B7\u30B9\u30C6\u30E0\u3092\u518D\u8D77\u52D5\u3059\u308B\u3068\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\u30D6\u30E9\u30A6\u30B6\u3067\u30C7\u30D0\u30A4\u30B9\u306EIP\u30A2\u30C9\u30EC\u30B9\u3092\u958B\u304D\u307E\u3059\u3002\u4F8B\uFF1A",(0,s.jsx)(l.code,{children:"http://192.168.1.2/"})]}),"\n",(0,s.jsxs)(l.li,{children:["fluidd\u306E\u5834\u5408\u3001\u4E0B\u56F3\u5DE6\u306E\u3088\u3046\u306B",(0,s.jsx)(l.code,{children:"\u30C1\u30A7\u30C3\u30AF\u3092\u5916\u3059"})," -> ",(0,s.jsx)(l.code,{children:"\u96A0\u3057\u30D5\u30A1\u30A4\u30EB\u3068\u30D5\u30A9\u30EB\u30C0\u3092\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0\u3059\u308B"}),"\u3002"]}),"\n",(0,s.jsxs)(l.li,{children:["mainsail\u306E\u5834\u5408\u3001\u4E0B\u56F3\u53F3\u306E\u3088\u3046\u306B",(0,s.jsx)(l.code,{children:"\u30C1\u30A7\u30C3\u30AF\u3092\u5165\u308C\u308B"})," -> ",(0,s.jsx)(l.code,{children:"\u96A0\u3057\u30D5\u30A1\u30A4\u30EB\u3092\u8868\u793A\u3059\u308B"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t,{image:n(98429).Z,size:"100%",align:"center"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t,{image:n(33994).Z,size:"85%",align:"center"})})]})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\u3053\u306E\u6642\u70B9\u3067",(0,s.jsx)(l.code,{children:".flyos-config"}),"\u30D5\u30A9\u30EB\u30C0\u304C\u898B\u3048\u308B\u3088\u3046\u306B\u306A\u308A\u3001\u3053\u306E\u30D5\u30A9\u30EB\u30C0\u306B\u5165\u308B\u3068",(0,s.jsx)(l.code,{children:"sys-config.conf"}),"\u30D5\u30A1\u30A4\u30EB\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.code,{children:"sys-config.conf"}),"\u30D5\u30A1\u30A4\u30EB\u306F\u79FB\u52D5\u53EF\u80FD\u306A\u30C7\u30A3\u30B9\u30AF",(0,s.jsx)(l.code,{children:"FlyOS-Conf"}),"\u306E\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB",(0,s.jsx)(l.code,{children:"config.txt"}),"\u306E\u30B7\u30F3\u30DC\u30EA\u30C3\u30AF\u30EA\u30F3\u30AF\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t,{image:n(19606).Z,size:"60%",align:"center"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.code,{children:"sys-config.conf"}),"\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304D\u3001\u5FC5\u8981\u306A\u8A2D\u5B9A\u9805\u76EE\u3092\u5909\u66F4\u5F8C\u3001",(0,s.jsx)(l.code,{children:"\u4FDD\u5B58"})," -> ",(0,s.jsx)(l.code,{children:"\u9589\u3058\u308B"}),"\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t,{image:n(83244).Z,size:"60%",align:"center"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\u6CE8\u610F\uFF1A",(0,s.jsx)(l.code,{children:"sys-config.conf"}),"\u30D5\u30A1\u30A4\u30EB\u306E\u8A2D\u5B9A\u9805\u76EE\u306E\u5F62\u5F0F\u306F",(0,s.jsx)(l.code,{children:"key=value"}),"\u3067\u3059\u3002",(0,s.jsx)(l.code,{children:"key: value"}),"\u306B\u5909\u66F4\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(l.li,{children:"\u5909\u66F4\u3068\u4FDD\u5B58\u5F8C\u3001\u30B7\u30B9\u30C6\u30E0\u3092\u518D\u8D77\u52D5\u3059\u308B\u3068\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE",children:"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE"}),"\n",(0,s.jsx)(l.h3,{id:"\u7121\u7DDA\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u8A2D\u5B9A",children:"\u7121\u7DDA\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u8A2D\u5B9A"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u4EE5\u4E0B\u306E\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE\u306F\u30B7\u30B9\u30C6\u30E0\u306E\u5404\u56DE\u306E\u8D77\u52D5\u6642\u306B\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{style:{textAlign:"center"},children:"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE"}),(0,s.jsx)(l.th,{style:{textAlign:"center"},children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u5024"}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"\u4F7F\u7528\u53EF\u80FD\u306A\u5024"}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(l.tbody,{children:[(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"WIFI_SSID"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"\u7A7A"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\u4EFB\u610F\u306EWIFI\u540D"}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"WIFI\u540D\u3001\u8A18\u8F09\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u8D77\u52D5\u6642\u306B\u512A\u5148\u7684\u306B\u3053\u306EWIFI\u306B\u63A5\u7D9A\u3057\u307E\u3059"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"WIFI_PASS"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"\u7A7A"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\u30D1\u30B9\u30EF\u30FC\u30C9\u306A\u3057\u306E\u5834\u5408\u306F\u7A7A\u6B04"}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"WIFI\u30D1\u30B9\u30EF\u30FC\u30C9\u3001\u8A18\u8F09\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u3066WIFI\u306B\u63A5\u7D9A\u3057\u307E\u3059"})]})]})]}),"\n",(0,s.jsx)(l.hr,{}),"\n",(0,s.jsx)(l.h3,{id:"\u30D7\u30EA\u30F3\u30BF\u30FC\u30C7\u30D5\u30A9\u30EB\u30C8\u8A2D\u5B9A",children:"\u30D7\u30EA\u30F3\u30BF\u30FC\u30C7\u30D5\u30A9\u30EB\u30C8\u8A2D\u5B9A"}),"\n",(0,s.jsx)(l.admonition,{type:"tip",children:(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u4EE5\u4E0B\u306E\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE\u306F\u4E00\u5EA6\u76EE\u306E\u8D77\u52D5\u6642\u306B\u306E\u307F\u6709\u52B9\u3067\u3059\u3002"}),"\n"]})}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{style:{textAlign:"center"},children:"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE"}),(0,s.jsx)(l.th,{style:{textAlign:"center"},children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u5024"}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"\u4F7F\u7528\u53EF\u80FD\u306A\u5024"}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(l.tbody,{children:[(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"language"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"zh-CN"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"\u8A73\u7D30\u3092\u5C55\u958B\u3059\u308B"}),(0,s.jsx)(l.code,{children:"zh-CN"}),", ",(0,s.jsx)(l.code,{children:"zh-HK"}),", ",(0,s.jsx)(l.code,{children:"en"}),", ",(0,s.jsx)(l.code,{children:"de"}),", ",(0,s.jsx)(l.code,{children:"cz"}),", ",(0,s.jsx)(l.code,{children:"es"}),", ",(0,s.jsx)(l.code,{children:"hu"}),", ",(0,s.jsx)(l.code,{children:"ja"}),", ",(0,s.jsx)(l.code,{children:"nl"}),", ",(0,s.jsx)(l.code,{children:"pt"}),", ",(0,s.jsx)(l.code,{children:"se"}),", ",(0,s.jsx)(l.code,{children:"uk"}),", ",(0,s.jsx)(l.code,{children:"da"}),", ",(0,s.jsx)(l.code,{children:"fr"}),", ",(0,s.jsx)(l.code,{children:"it"}),", ",(0,s.jsx)(l.code,{children:"ko"}),", ",(0,s.jsx)(l.code,{children:"pl"}),", ",(0,s.jsx)(l.code,{children:"ru"}),", ",(0,s.jsx)(l.code,{children:"tr"})]})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\u4E00\u5EA6\u76EE\u306E\u8D77\u52D5\u6642\u306Bfluidd\u3068mainsail\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u8A00\u8A9E\u3092\u8A2D\u5B9A"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"printer_name"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"\u7A7A"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\u4EFB\u610F\u306E\u6587\u5B57\u5217"}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\u4E00\u5EA6\u76EE\u306E\u8D77\u52D5\u6642\u306Bfluidd\u3068mainsail\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u30D7\u30EA\u30F3\u30BF\u540D\u3092\u8A2D\u5B9A"})]})]})]}),"\n",(0,s.jsx)(l.hr,{}),"\n",(0,s.jsx)(l.h3,{id:"\u30B7\u30B9\u30C6\u30E0\u8A2D\u5B9A",children:"\u30B7\u30B9\u30C6\u30E0\u8A2D\u5B9A"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u4EE5\u4E0B\u306E\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE\u306F\u30B7\u30B9\u30C6\u30E0\u306E\u5404\u56DE\u306E\u8D77\u52D5\u6642\u306B\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{style:{textAlign:"center"},children:"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE"}),(0,s.jsx)(l.th,{style:{textAlign:"center"},children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u5024"}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"\u4F7F\u7528\u53EF\u80FD\u306A\u5024"}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(l.tbody,{children:[(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"console"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"serial"})}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:[(0,s.jsx)(l.code,{children:"serial"}),", ",(0,s.jsx)(l.code,{children:"both"})]}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:["\u3053\u306E\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE\u306F\u7DE8\u96C6\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002",(0,s.jsx)(l.code,{children:"serial"}),"\u306E\u307F\u6709\u52B9"]})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"board"})}),(0,s.jsxs)(l.td,{style:{textAlign:"center"},children:["H5: ",(0,s.jsx)(l.code,{children:"fly-pi-v2"}),(0,s.jsx)("br",{}),"H3: ",(0,s.jsx)(l.code,{children:"fly-lite2.1"})]}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:[(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"H5\u30B7\u30EA\u30FC\u30BA\u3092\u5C55\u958B\u3059\u308B"}),(0,s.jsx)(l.code,{children:"fly-pi"}),", ",(0,s.jsx)(l.code,{children:"fly-pi-v2"}),", ",(0,s.jsx)(l.code,{children:"fly-gemini-v1"}),", ",(0,s.jsx)(l.code,{children:"fly-gemini-v2"}),", ",(0,s.jsx)(l.code,{children:"fly-gemini-v3"}),", ",(0,s.jsx)(l.code,{children:"fly-c8"})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"H3\u30B7\u30EA\u30FC\u30BA\u3092\u5C55\u958B\u3059\u308B"}),(0,s.jsx)(l.code,{children:"fly-lite2"}),", ",(0,s.jsx)(l.code,{children:"fly-lite2.1"}),", ",(0,s.jsx)(l.code,{children:"fly-minipad"})]})]}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\u30DC\u30FC\u30C9\u30E2\u30C7\u30EB\u3001\u4E3B\u306B\u81EA\u52D5\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u713C\u304D\u4ED8\u3051\u306A\u3069\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"shutdown_pin_state"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"1"})}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:[(0,s.jsx)(l.code,{children:"0"}),", ",(0,s.jsx)(l.code,{children:"1"})]}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:["\u30B7\u30E3\u30C3\u30C8\u30C0\u30A6\u30F3\u30DC\u30BF\u30F3\u306E\u30EC\u30D9\u30EB\u72B6\u614B\u3092\u8A2D\u5B9A\u3057\u307E\u3059",(0,s.jsx)("br",{}),"1: \u4F4E\u96FB\u5E73\u30C8\u30EA\u30AC\u30FC",(0,s.jsx)("br",{}),"0: \u9AD8\u96FB\u5E73\u30C8\u30EA\u30AC\u30FC"]})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"shutdown_pin"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"none"})}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:[(0,s.jsx)(l.code,{children:"PA21"}),", ",(0,s.jsx)(l.code,{children:"PA4"}),"..."]}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:["\u30B7\u30E3\u30C3\u30C8\u30C0\u30A6\u30F3\u30DC\u30BF\u30F3\u306E\u30C8\u30EA\u30AC\u30FC\u30D4\u30F3\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F",(0,s.jsx)(l.code,{children:"none"}),"\u3067\u7121\u52B9"]})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"spidev"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"spidev0.0 spidev1.0"})}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:[(0,s.jsx)(l.code,{children:"spidev0.0"}),", ",(0,s.jsx)(l.code,{children:"spidev0.1"}),", ",(0,s.jsx)(l.code,{children:"spidev1.0"}),", ",(0,s.jsx)(l.code,{children:"spidev1.1"})]}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:["\u30B9\u30D1\u30A4\u30C9\u30A4\u30D6\u3092\u6709\u52B9\u306B\u3059\u308B\u30DD\u30FC\u30C8\u3092\u8A2D\u5B9A\u3057\u307E\u3059",(0,s.jsx)("br",{}),"\u8907\u6570\u6709\u52B9\u306B\u3059\u308B\u5834\u5408\u306F\u30B9\u30DA\u30FC\u30B9\u3067\u533A\u5207\u308A\u307E\u3059"]})]})]})]}),"\n",(0,s.jsx)(l.hr,{}),"\n",(0,s.jsx)(l.h3,{id:"\u30D7\u30EA\u30F3\u30BF\u30FC\u30BF\u30A4\u30D7\u8A2D\u5B9A",children:"\u30D7\u30EA\u30F3\u30BF\u30FC\u30BF\u30A4\u30D7\u8A2D\u5B9A"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u4EE5\u4E0B\u306E\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE\u306F\u30B7\u30B9\u30C6\u30E0\u306E\u5404\u56DE\u306E\u8D77\u52D5\u6642\u306B\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{style:{textAlign:"center"},children:"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE"}),(0,s.jsx)(l.th,{style:{textAlign:"center"},children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u5024"}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"\u4F7F\u7528\u53EF\u80FD\u306A\u5024"}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"\u8AAC\u660E"})]})}),(0,s.jsx)(l.tbody,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"printer"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"klipper"})}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:[(0,s.jsx)(l.code,{children:"klipper"}),", ",(0,s.jsx)(l.code,{children:"rrf"})]}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:["\u30B7\u30B9\u30C6\u30E0\u3092\u3069\u306E\u30B5\u30FC\u30D3\u30B9\u3067\u8D77\u52D5\u3059\u308B\u304B\u3092\u8A2D\u5B9A\u3057\u307E\u3059",(0,s.jsx)("br",{}),(0,s.jsx)(l.code,{children:"klipper"}),": klipper, moonraker\u306A\u3069\u306E\u30B5\u30FC\u30D3\u30B9",(0,s.jsx)("br",{}),(0,s.jsx)(l.code,{children:"rrf"}),": RRF DSF, DWC\u306A\u3069\u306E\u30B5\u30FC\u30D3\u30B9"]})]})})]}),"\n",(0,s.jsx)(l.h3,{id:"\u8868\u793A\u8A2D\u5B9A",children:"\u8868\u793A\u8A2D\u5B9A"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u4EE5\u4E0B\u306E\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE\u306F\u30B7\u30B9\u30C6\u30E0\u306E\u5404\u56DE\u306E\u8D77\u52D5\u6642\u306B\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{style:{textAlign:"center"},children:"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE"}),(0,s.jsx)(l.th,{style:{textAlign:"center"},children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u5024"}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"\u4F7F\u7528\u53EF\u80FD\u306A\u5024"}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(l.tbody,{children:[(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"screen"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"hdmi"})}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:[(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"H5\u30B7\u30EA\u30FC\u30BA\u3092\u5C55\u958B\u3059\u308B"}),(0,s.jsx)(l.code,{children:"none"}),", ",(0,s.jsx)(l.code,{children:"hdmi"}),", ",(0,s.jsx)(l.code,{children:"fly-tft-v1"}),", ",(0,s.jsx)(l.code,{children:"fly-tft-v2-r"}),", ",(0,s.jsx)(l.code,{children:"fly-tft-v2-c"})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"H3\u30B7\u30EA\u30FC\u30BA\u3092\u5C55\u958B\u3059\u308B"}),(0,s.jsx)(l.code,{children:"none"}),", ",(0,s.jsx)(l.code,{children:"hdmi"}),", ",(0,s.jsx)(l.code,{children:"fly-tft-v1"}),", ",(0,s.jsx)(l.code,{children:"fly-minipad-r"}),", ",(0,s.jsx)(l.code,{children:"fly-minipad-c"}),", ",(0,s.jsx)(l.code,{children:"fly-tft-v2-r"}),", ",(0,s.jsx)(l.code,{children:"fly-tft-v2-c"})]})]}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:["\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002",(0,s.jsx)(l.code,{children:"none"}),"\u306E\u5834\u5408\u306F\u3059\u3079\u3066\u306E\u8868\u793A\u3092\u30AA\u30D5\u306B\u3057\u307E\u3059"]})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"rotate"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"90"})}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:[(0,s.jsx)(l.code,{children:"0"}),", ",(0,s.jsx)(l.code,{children:"90"}),", ",(0,s.jsx)(l.code,{children:"180"}),", ",(0,s.jsx)(l.code,{children:"270"})]}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:["FLY-TFT\u306E\u56DE\u8EE2\u89D2\u5EA6\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002",(0,s.jsx)(l.code,{children:"hdmi"}),"\u306F\u7121\u52B9"]})]})]})]}),"\n",(0,s.jsx)(l.hr,{}),"\n",(0,s.jsx)(l.h3,{id:"klipper\u95A2\u9023\u8A2D\u5B9A",children:"Klipper\u95A2\u9023\u8A2D\u5B9A"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u4EE5\u4E0B\u306E\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE\u306F\u30B7\u30B9\u30C6\u30E0\u306E\u5404\u56DE\u306E\u8D77\u52D5\u6642\u306B\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{style:{textAlign:"center"},children:"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE"}),(0,s.jsx)(l.th,{style:{textAlign:"center"},children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u5024"}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"\u4F7F\u7528\u53EF\u80FD\u306A\u5024"}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(l.tbody,{children:[(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"klipper_screen"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"0"})}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:[(0,s.jsx)(l.code,{children:"0"}),", ",(0,s.jsx)(l.code,{children:"1"})]}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:["KlipperScreen\u3092\u6709\u52B9\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u8A2D\u5B9A\u3057\u307E\u3059",(0,s.jsx)("br",{}),"1: \u6709\u52B9",(0,s.jsx)("br",{}),"0: \u7121\u52B9",(0,s.jsx)("br",{}),(0,s.jsx)(l.code,{children:"printer=klipper"}),"\u306E\u5834\u5408\u306E\u307F\u6709\u52B9"]})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"moon2uart"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"0"})}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:[(0,s.jsx)(l.code,{children:"0"}),", ",(0,s.jsx)(l.code,{children:"1"})]}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:["moon2uart\u3092\u6709\u52B9\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u8A2D\u5B9A\u3057\u307E\u3059",(0,s.jsx)("br",{}),"1: \u6709\u52B9",(0,s.jsx)("br",{}),"0: \u7121\u52B9",(0,s.jsx)("br",{}),(0,s.jsx)(l.code,{children:"printer=klipper"}),"\u306E\u5834\u5408\u306E\u307F\u6709\u52B9"]})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"m2u_port"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"/dev/ttyS1"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\u6709\u52B9\u306A\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8"}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:["moon2uart\u306E\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u3002",(0,s.jsx)(l.code,{children:"moon2uart=1"}),"\u306E\u5834\u5408\u306E\u307F\u6709\u52B9"]})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"m2u_baud"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"115200"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\u6709\u52B9\u306A\u30DC\u30FC\u30EC\u30FC\u30C8"}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:["moon2uart\u306E\u30DC\u30FC\u30EC\u30FC\u30C8\u3002",(0,s.jsx)(l.code,{children:"moon2uart=1"}),"\u306E\u5834\u5408\u306E\u307F\u6709\u52B9"]})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"klipper_webui"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"fluidd"})}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:[(0,s.jsx)(l.code,{children:"fluidd"}),", ",(0,s.jsx)(l.code,{children:"mainsail"})]}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:["Klipper\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9UI\u3092\u8A2D\u5B9A\u3057\u307E\u3059",(0,s.jsx)("br",{}),"\u30AA\u30F3\u30E9\u30A4\u30F3\u30EF\u30F3\u30AF\u30EA\u30C3\u30AF\u5207\u308A\u66FF\u3048\u6A5F\u80FD\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093",(0,s.jsx)("br",{}),(0,s.jsx)(l.code,{children:"printer=klipper"}),"\u306E\u5834\u5408\u306E\u307F\u6709\u52B9"]})]})]})]}),"\n",(0,s.jsx)(l.hr,{}),"\n",(0,s.jsx)(l.h3,{id:"rrf\u95A2\u9023\u8A2D\u5B9A",children:"RRF\u95A2\u9023\u8A2D\u5B9A"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u4EE5\u4E0B\u306E\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE\u306F\u30B7\u30B9\u30C6\u30E0\u306E\u5404\u56DE\u306E\u8D77\u52D5\u6642\u306B\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{style:{textAlign:"center"},children:"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE"}),(0,s.jsx)(l.th,{style:{textAlign:"center"},children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u5024"}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"\u4F7F\u7528\u53EF\u80FD\u306A\u5024"}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"\u8AAC\u660E"})]})}),(0,s.jsx)(l.tbody,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"rrf2uart"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"0"})}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:[(0,s.jsx)(l.code,{children:"0"}),", ",(0,s.jsx)(l.code,{children:"1"})]}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\u4E00\u6642\u7684\u306B\u7121\u52B9\u3002\u5F8C\u7D9A\u30D0\u30FC\u30B8\u30E7\u30F3\u306E\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3067\u63D0\u4F9B"})]})})]}),"\n",(0,s.jsx)(l.hr,{}),"\n",(0,s.jsx)(l.h3,{id:"\u305D\u306E\u4ED6\u306E\u8A2D\u5B9A",children:"\u305D\u306E\u4ED6\u306E\u8A2D\u5B9A"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u4EE5\u4E0B\u306E\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE\u306F\u30B7\u30B9\u30C6\u30E0\u306E\u5404\u56DE\u306E\u8D77\u52D5\u6642\u306B\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{style:{textAlign:"center"},children:"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u9805\u76EE"}),(0,s.jsx)(l.th,{style:{textAlign:"center"},children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u5024"}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"\u4F7F\u7528\u53EF\u80FD\u306A\u5024"}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(l.tbody,{children:[(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"crowsnest"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"0"})}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:[(0,s.jsx)(l.code,{children:"0"}),", ",(0,s.jsx)(l.code,{children:"1"})]}),(0,s.jsxs)(l.td,{style:{textAlign:"left"},children:["Crowsnest\u3092\u6709\u52B9\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u8A2D\u5B9A\u3057\u307E\u3059",(0,s.jsx)("br",{}),"1: \u6709\u52B9",(0,s.jsx)("br",{}),"0: \u7121\u52B9",(0,s.jsx)("br",{}),"klipper\u3068rrf\u30E2\u30FC\u30C9\u306E\u3069\u3061\u3089\u3067\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059"]})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"firmware"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.code,{children:"\u7A7A"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\u6709\u52B9\u306A\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u30D5\u30A1\u30A4\u30EB\u30D1\u30B9"}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"\u30B7\u30B9\u30C6\u30E0\u8D77\u52D5\u6642\u306B\u81EA\u52D5\u3067\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u3092\u713C\u304D\u4ED8\u3051\u308B"})]})]})]}),"\n",(0,s.jsx)(l.hr,{}),"\n",(0,s.jsx)(l.admonition,{type:"danger",children:(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u5185\u306E",(0,s.jsx)(l.code,{children:"######### PLEASE DO NOT EDIT THE FOLLOWING #########"}),"\u4EE5\u4E0B\u306E\u5185\u5BB9\u306F\u7DE8\u96C6\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002"]}),"\n"]})})]})}function j(e={}){let{wrapper:l}={...(0,d.a)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},98429:function(e,l,n){n.d(l,{Z:function(){return t}});let t=n.p+"assets/images/config1-b248a5f8708754391dc7f3e30a66404d.webp"},33994:function(e,l,n){n.d(l,{Z:function(){return t}});let t=n.p+"assets/images/config2-520ef43d21da10584cea2f864bbbbdd6.webp"},19606:function(e,l,n){n.d(l,{Z:function(){return t}});let t=n.p+"assets/images/config3-cc5cacbc1d4d230fea0fd0968df0de03.webp"},83244:function(e,l,n){n.d(l,{Z:function(){return t}});let t=n.p+"assets/images/config4-15803e7d27dccb269f796f0e1c83c87f.webp"},79938:function(e,l,n){n.d(l,{Z:function(){return c},a:function(){return i}});var t=n(75271);let s={},d=t.createContext(s);function i(e){let l=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function c(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:l},e.children)}}}]);