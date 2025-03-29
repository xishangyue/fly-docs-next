"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["16127"],{98281:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"DebugDoc/BasicTutorial/camera","title":"\u6DFB\u52A0USB\u6444\u50CF\u5934","description":"* \u9700\u8981\u6709\u5B89\u88C5crowsnest\u670D\u52A1\uFF0C\u5982lite2\u4E0Emini pad\u7684\u7CFB\u7EDF\u672A\u5B89\u88C5","source":"@site/docs/DebugDoc/BasicTutorial/camera.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/camera","permalink":"/fly-docs-next/docs/DebugDoc/BasicTutorial/camera","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/camera.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"\u6DFB\u52A0USB\u6444\u50CF\u5934"},"sidebar":"debugdocSidebar","previous":{"title":"\u7CFB\u7EDF\u5D29\u6E83\u5907\u4EFD\u914D\u7F6E\u65B9\u6CD5","permalink":"/fly-docs-next/docs/DebugDoc/BasicTutorial/backup"},"next":{"title":"klipperscreen\u6269\u5C55\u529F\u80FD","permalink":"/fly-docs-next/docs/DebugDoc/BasicTutorial/klipperscreen"}}'),c=i("74132"),t=i("94551");let r={sidebar_position:6,sidebar_label:"\u6DFB\u52A0USB\u6444\u50CF\u5934"},l="\u6DFB\u52A0USB\u6444\u50CF\u5934",d={},a=[{value:"\u6253\u5F00\u914D\u7F6E",id:"\u6253\u5F00\u914D\u7F6E",level:2},{value:"\u641C\u7D22\u6444\u50CF\u5934ID",id:"\u641C\u7D22\u6444\u50CF\u5934id",level:2},{value:"\u6DFB\u52A0ID",id:"\u6DFB\u52A0id",level:2},{value:"\u542F\u7528\u6444\u50CF\u5934",id:"\u542F\u7528\u6444\u50CF\u5934",level:2},{value:"\u67E5\u770B\u662F\u5426\u542F\u7528",id:"\u67E5\u770B\u662F\u5426\u542F\u7528",level:2}];function o(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components},{ImageView:s}=n;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u6DFB\u52A0usb\u6444\u50CF\u5934",children:"\u6DFB\u52A0USB\u6444\u50CF\u5934"})}),"\n",(0,c.jsx)(n.admonition,{title:"\u987B\u77E5",type:"danger",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u9700\u8981\u6709\u5B89\u88C5",(0,c.jsx)(n.code,{children:"crowsnest"}),"\u670D\u52A1\uFF0C\u5982lite2\u4E0Emini pad\u7684\u7CFB\u7EDF\u672A\u5B89\u88C5"]}),"\n",(0,c.jsx)(n.li,{children:"\u9700\u8981\u514D\u9A71\u5373\u63D2\u5373\u7528\u6444\u50CF\u5934\uFF0C\u5747\u53EF\u4EE5\u5728linux\u3001armbian\u7B49\u7CFB\u7EDF\u4E0B\u7684klipper\u652F\u6301\u4F7F\u7528\uFF0C\u65E0\u9700\u53E6\u5916\u5B89\u88C5\u9A71\u52A8\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u672C\u6559\u7A0B\u4F7F\u7528\u6700\u65B0klipper\uFF0Ccrowsnest\uFF0Cfuidd\u4E3A\u4F8B\uFF0C\u5982\u679C\u662F\u5176\u4ED6\u65B9\u6CD5\u9700\u8981\u81EA\u884C\u7814\u7A76"}),"\n"]})}),"\n",(0,c.jsx)(n.h2,{id:"\u6253\u5F00\u914D\u7F6E",children:"\u6253\u5F00\u914D\u7F6E"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u6444\u50CF\u5934id\u6839\u636E\u7CFB\u7EDF\u6709\u5F88\u591A\u79CD\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u786E\u5B9A\u4E0D\u4F1A\u53D8\u7684ID\u5373\u53EF"}),"\n"]})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u5728Fuidd\u4E2D\u627E\u5230\u914D\u7F6E\u6587\u4EF6\uFF0C\u7136\u540E\u6253\u5F00",(0,c.jsx)(n.code,{children:"crowsnest.conf"})]}),"\n",(0,c.jsx)(s,{image:i(85537).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u627E\u6253",(0,c.jsx)(n.code,{children:"device: "}),"\u5C06\u540E\u9762\u7684ID\u914D\u7F6E\u5220\u9664"]}),"\n",(0,c.jsx)(s,{image:i(98264).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u641C\u7D22\u6444\u50CF\u5934id",children:"\u641C\u7D22\u6444\u50CF\u5934ID"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u8BF7\u786E\u4FDD\u6444\u50CF\u5934\u5DF2\u7ECF\u63A5\u5230\u4E0A\u4F4D\u673A"}),"\n"]})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u70B9\u51FB\u4E0A\u65B9",(0,c.jsx)(n.code,{children:"DEVICES"}),"\uFF0C\u7136\u540E\u70B9\u51FB",(0,c.jsx)(n.code,{children:"VIDEO"}),",\u6700\u540E\u70B9\u51FB\u5237\u65B0","\n",(0,c.jsx)(s,{image:i(46377).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5BFB\u627E\u5230",(0,c.jsx)(n.code,{children:"path_by_id"}),"\u5C06\u540E\u9762\u4E00\u884C\u590D\u5236","\n",(0,c.jsx)(s,{image:i(80597).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u6DFB\u52A0id",children:"\u6DFB\u52A0ID"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u6DFB\u52A0ID\uFF0C\u5E76\u4E14\u4FDD\u5B58\u914D\u7F6E","\n",(0,c.jsx)(s,{image:i(95743).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u542F\u7528\u6444\u50CF\u5934",children:"\u542F\u7528\u6444\u50CF\u5934"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u70B9\u51FB\u8BBE\u7F6E\uFF0C\u9009\u62E9\u6444\u50CF\u5934\uFF0C\u7136\u540E\u70B9\u51FB\u6DFB\u52A0\u6444\u50CF\u5934","\n",(0,c.jsx)(s,{image:i(6171).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\u8F93\u5165\u81EA\u5DF1\u559C\u6B22\u7684\u540D\u5B57,\u5E76\u4E14\u70B9\u51FB\u4FDD\u5B58","\n",(0,c.jsx)(s,{image:i(19326).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u67E5\u770B\u662F\u5426\u542F\u7528",children:"\u67E5\u770B\u662F\u5426\u542F\u7528"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u70B9\u51FB\u4EEA\u8868\u76D8\u6B63\u5E38\u5DF2\u7ECF\u51FA\u73B0\u6444\u50CF\u5934\u753B\u9762","\n",(0,c.jsx)(s,{image:i(40588).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,c.jsx)(n.li,{children:"\u5982\u679C\u4E0D\u663E\u793A\u91CD\u542F\u7CFB\u7EDF\u5373\u53EF"}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},85537:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf-ed62c5d3c67d6ffa7049b607c5487114.webp"},98264:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf1-ebd689792e54725448656b348ab9f2c7.webp"},46377:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf2-f212fcb81ae24b4d126e7c45791f38f8.webp"},80597:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf3-f80f6b4227ef850143a177b7bf27e2e4.webp"},95743:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf4-b4bcb990e096b504ede0c708d951cb3f.webp"},6171:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf5-625f49f11a5b7d93a819ae7c4b7c245b.webp"},19326:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf6-0a166fa0bc6535d25156fc8153cdde4b.webp"},40588:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/conf7-2388d1ccd426a8ec34234afc6afbec06.webp"},94551:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return r}});var s=i(39546);let c={},t=s.createContext(c);function r(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);