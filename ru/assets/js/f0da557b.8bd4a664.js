"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["94810"],{19754:function(e,i,n){n.r(i),n.d(i,{metadata:()=>r,contentTitle:()=>s,default:()=>a,assets:()=>c,toc:()=>d,frontMatter:()=>o});var r=JSON.parse('{"id":"ProductDoc/SBC/fly-pi/index","title":"\u7B80\u4ECB","description":"\u6211\u4EEC\u5F88\u9AD8\u5174\u5730\u53D1\u5E03\u5168\u65B0\u7684FLY-\u03C0\u4E3B\u677F\u3002\u6B64\u677F\u53EF\u66FF\u4EE3\u6811\u8393\u6D3E\u4F5C\u4E3A\u4E0A\u4F4D\u673A\u8FD0\u884C\uFF0C\u5B83\u62E5\u6709\u67091GB\u7684\u677F\u8F7DDDR3\u5185\u5B58\uFF0C\u5141\u8BB8\u8FD0\u884C\u5B8C\u6574\u7684LINUX\u684C\u9762\uFF08\u57FA\u4E8E Armbian\u5B9A\u5236\u4F18\u5316\uFF09\u3002\u8BE5\u677F\u53EF\u4E0EKlipper\u548CRRF\u56FA\u4EF6\u4E00\u8D77\u4F7F\u7528\uFF0C\u751A\u81F3\u53EF\u4EE5\u5728\u4F7F\u7528SHT\u5DE5\u5177\u677F\u65F6\u8FD0\u884CKlipper\u5C4F\u5E55\u3002","source":"@site/docs/ProductDoc/SBC/fly-pi/index.mdx","sourceDirName":"ProductDoc/SBC/fly-pi","slug":"/ProductDoc/SBC/fly-pi/","permalink":"/fly-docs-next/ru/docs/ProductDoc/SBC/fly-pi/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-pi/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"\u7B80\u4ECB"},"sidebar":"tutorialSidebar","previous":{"title":"FLY-Pi","permalink":"/fly-docs-next/ru/docs/category/fly-pi"},"next":{"title":"\u7CFB\u7EDF\u70E7\u5F55","permalink":"/fly-docs-next/ru/docs/ProductDoc/SBC/fly-pi/fly-os"}}'),t=n("52676"),l=n("79938");let o={sidebar_position:1,sidebar_label:"\u7B80\u4ECB"},s="\u7B80\u4ECB",c={},d=[{value:"\u7279\u70B9",id:"\u7279\u70B9",level:2},{value:"\u4EA7\u54C1\u63A5\u53E3\u8BF4\u660E",id:"\u4EA7\u54C1\u63A5\u53E3\u8BF4\u660E",level:2}];function p(e){let i={h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components},{ImageView:r}=i;return!r&&function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"\u7B80\u4ECB",children:"\u7B80\u4ECB"})}),"\n",(0,t.jsx)(i.p,{children:"\u6211\u4EEC\u5F88\u9AD8\u5174\u5730\u53D1\u5E03\u5168\u65B0\u7684FLY-\u03C0\u4E3B\u677F\u3002\u6B64\u677F\u53EF\u66FF\u4EE3\u6811\u8393\u6D3E\u4F5C\u4E3A\u4E0A\u4F4D\u673A\u8FD0\u884C\uFF0C\u5B83\u62E5\u6709\u67091GB\u7684\u677F\u8F7DDDR3\u5185\u5B58\uFF0C\u5141\u8BB8\u8FD0\u884C\u5B8C\u6574\u7684LINUX\u684C\u9762\uFF08\u57FA\u4E8E Armbian\u5B9A\u5236\u4F18\u5316\uFF09\u3002\u8BE5\u677F\u53EF\u4E0EKlipper\u548CRRF\u56FA\u4EF6\u4E00\u8D77\u4F7F\u7528\uFF0C\u751A\u81F3\u53EF\u4EE5\u5728\u4F7F\u7528SHT\u5DE5\u5177\u677F\u65F6\u8FD0\u884CKlipper\u5C4F\u5E55\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u8BBE\u8BA1\u8FD9\u6B3E\u4E0A\u4F4D\u673A\u7684\u76EE\u7684\u662F\u8BA9\u5BA2\u6237\u66F4\u5BB9\u6613\u4F7F\u7528Klipper\u56FA\u4EF6\u6216RRF\u56FA\u4EF6\u3002\u6211\u4EEC\u5BF9LINUX\u7CFB\u7EDF\u955C\u50CF\u8FDB\u884C\u4F18\u5316\uFF0C\u66F4\u9002\u54083D\u6253\u5370\u673A\u4F7F\u7528\uFF0C\u64CD\u4F5C\u5B89\u88C5\u4E5F\u66F4\u7B80\u5355\uFF0C\u5C0F\u767D\u7A0D\u6709\u57FA\u7840\u4E5F\u80FD\u5F88\u5FEB\u7684\u5B66\u4E60\u4F7F\u7528\u3002\u76F8\u5BF9\u4E8E\u5176\u4ED6\u4E0A\u4F4D\u673A\u677F\u5B50\u8282\u7701\u4E86\u5B66\u4E60\u6210\u672C\uFF0C\u8BA9\u4F60\u53EF\u4EE5\u66F4\u4E13\u6CE8\u4E8E\u4EAB\u53D73D\u6253\u5370\u5E26\u6765\u7684\u5FEB\u4E50(\u8D2D\u4E70\u5E26SD\u5361\u7684\u5957\u9910\u9884\u88C5Klipper\u56FA\u4EF6\uFF0C\u4E0A\u7535\u5C31\u80FD\u7528\u7701\u65F6\u53C8\u7701\u4E8B)\u3002\u5B89\u88C5\u4E5F\u66F4\u7B80\u5355\uFF0C\u5C0F\u767D\u7A0D\u6709\u57FA\u7840\u4E5F\u80FD\u5F88\u5FEB\u7684\u5B66\u4E60\u4F7F\u7528\u3002\u76F8\u5BF9\u4E8E\u5176\u4ED6\u4E0A\u4F4D\u673A\u677F\u5B50\u8282\u7701\u4E86\u5B66\u4E60\u6210\u672C\uFF0C\u8BA9\u4F60\u53EF\u4EE5\u66F4\u4E13\u6CE8\u4E8E\u4EAB\u53D73D\u6253\u5370\u5E26\u6765\u7684\u5FEB\u4E50(\u8D2D\u4E70\u5E26SD\u5361\u7684\u5957\u9910\u9884\u88C5Klipper\u56FA\u4EF6\uFF0C\u4E0A\u7535\u5C31\u80FD\u7528\u7701\u65F6\u53C8\u7701\u4E8B)\u3002"}),"\n",(0,t.jsx)(i.h2,{id:"\u7279\u70B9",children:"\u7279\u70B9"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"CPU\uFF1A\u9AD8\u6027\u80FD\u5168\u5FD7H5\u82AF\u7247\uFF0C4\u683864\u4F4DCortex-A53"}),"\n",(0,t.jsx)(i.li,{children:"GPU\uFF1A\u9AD8\u6027\u80FD6\u6838Mali 450\uFF0C\u50CF\u7D20\u586B\u5145\u7387\u5927\u4E8E2.7gpixel/s"}),"\n",(0,t.jsx)(i.li,{children:"RAM\uFF1A1GB DDR3\uFF08\u4E0EGPU\u5171\u4EAB\uFF09(512+512)"}),"\n",(0,t.jsx)(i.li,{children:"ROM\uFF1A\u652F\u6301\u6700\u5927128GB SDCARD"}),"\n",(0,t.jsx)(i.li,{children:"\u5916\u8BBE\uFF1ASpi x2\uFF0CUART x2\uFF0CUSB x4\uFF08USB 2.0 x3\uFF0COTG x1\uFF09\uFF0CMicro HDMI x1\uFF0CEth x1\uFF08100M\uFF09\uFF0CCAN x1\uFF08\u9700\u5355\u72EC\u8D2D\u4E70CAN\u6A21\u5757\uFF09"}),"\n",(0,t.jsx)(i.li,{children:"\u63A5\u53E3\uFF1A\u677F\u8F7DM.2\u63A5\u53E3\uFF0C\u53EF\u6269\u5C55WIFI\uFF0CeMMC\u7B49\u3002\uFF08\u79C1\u6709\u534F\u8BAE\uFF0C\u5207\u52FF\u8FDE\u63A5\u975EFLY \u03C0\u4E13\u7528\u7684M.2\u8BBE\u5907\uFF09"}),"\n",(0,t.jsx)(i.li,{children:"40Pin\u63A5\u53E3\uFF0C\u517C\u5BB9\u6811\u8393\u6D3E"}),"\n",(0,t.jsx)(i.li,{children:"\u652F\u630112-24V\u76F4\u6D41\u4F9B\u7535\uFF0C\u4F9B\u7535\u66F4\u7A33\u5B9A"}),"\n",(0,t.jsx)(i.li,{children:"\u9884\u7559\u4E86\u4E00\u4E2A5V\u53EF\u63A7\u98CE\u6247\u63A5\u53E3\uFF0C\u53EF\u7528\u4E8E\u4E0A\u4F4D\u673A\u6563\u70ED"}),"\n",(0,t.jsx)(i.li,{children:"\u9884\u7559CAN\u6269\u5C55\u63A5\u53E3"}),"\n",(0,t.jsx)(i.li,{children:"\u7CFB\u7EDF\u9884\u88C5klipper\u3001moonraker\u3001mainsail\u3001fulidd\u3001klipper-screen\u3001Crowsmest\u3001\u5171\u632F\u8865\u507F\u63D2\u4EF6 numpy\u4E0EFLY-Tools\uFF0C\u65E0\u9700\u6362\u6E90\u7B49\u590D\u6742\u7684\u64CD\u4F5C\uFF0C\u5C0F\u767D\u66F4\u5BB9\u6613\u4E0A\u624B\uFF08\u9700\u8981\u8D2D\u4E70TF\u5361\u6216\u8005M2WE\uFF09"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"\u4EA7\u54C1\u63A5\u53E3\u8BF4\u660E",children:"\u4EA7\u54C1\u63A5\u53E3\u8BF4\u660E"}),"\n",(0,t.jsx)(r,{image:n(87057).Z,size:"80%",align:"center"}),"\n",(0,t.jsx)(i.hr,{})]})}function a(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},87057:function(e,i,n){n.d(i,{Z:function(){return r}});let r=n.p+"assets/images/interface-d6bbf7820a50c7c3c865674bffbe7039.webp"},79938:function(e,i,n){n.d(i,{Z:function(){return s},a:function(){return o}});var r=n(75271);let t={},l=r.createContext(t);function o(e){let i=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(l.Provider,{value:i},e.children)}}}]);