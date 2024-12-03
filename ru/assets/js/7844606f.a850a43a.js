"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["30265"],{85878:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>d,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"DebugDoc/BasicTutorial/backup","title":"\u041C\u0435\u0442\u043E\u0434 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F","description":"* \u0414\u0430\u043D\u043D\u043E\u0435 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C\u043E \u043A FLY-Pi, Raspberry Pi, Orange Pi \u0438 \u0434\u0440\u0443\u0433\u0438\u043C \u0432\u0435\u0440\u0445\u043D\u0438\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430\u043C.","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/DebugDoc/BasicTutorial/backup.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/backup","permalink":"/fly-docs-next/ru/docs/DebugDoc/BasicTutorial/backup","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/backup.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"\u041C\u0435\u0442\u043E\u0434 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B"},"sidebar":"debugdocSidebar","previous":{"title":"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0447\u0430\u0441\u043E\u0432\u043E\u0439 \u043F\u043E\u044F\u0441 \u0441\u0438\u0441\u0442\u0435\u043C\u044B","permalink":"/fly-docs-next/ru/docs/DebugDoc/BasicTutorial/timedatectl"},"next":{"title":"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 USB-\u043A\u0430\u043C\u0435\u0440\u044B","permalink":"/fly-docs-next/ru/docs/DebugDoc/BasicTutorial/camera"}}'),r=i("52676"),t=i("79938");let l={sidebar_position:5,sidebar_label:"\u041C\u0435\u0442\u043E\u0434 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B"},c="\u041C\u0435\u0442\u043E\u0434 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",d={},o=[{value:"\u0421\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435",id:"\u0441\u043A\u0430\u0447\u0430\u0439\u0442\u0435-\u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435-\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435",level:2},{value:"\u041D\u0430\u0447\u0430\u043B\u043E \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",id:"\u043D\u0430\u0447\u0430\u043B\u043E-\u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0433\u043E-\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",level:2},{value:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435",id:"\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435",level:3},{value:"\u041F\u043E\u0438\u0441\u043A",id:"\u043F\u043E\u0438\u0441\u043A",level:3},{value:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",id:"\u044D\u043A\u0441\u043F\u043E\u0440\u0442-\u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",level:3}];function a(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ul:"ul",...(0,t.a)(),...e.components},{Button:s,ImageView:l}=n;return!s&&h("Button",!0),!l&&h("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u043C\u0435\u0442\u043E\u0434-\u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0433\u043E-\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",children:"\u041C\u0435\u0442\u043E\u0434 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u0412\u0430\u0436\u043D\u043E",type:"danger",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u0414\u0430\u043D\u043D\u043E\u0435 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C\u043E \u043A FLY-Pi, Raspberry Pi, Orange Pi \u0438 \u0434\u0440\u0443\u0433\u0438\u043C \u0432\u0435\u0440\u0445\u043D\u0438\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430\u043C."}),"\n",(0,r.jsx)(n.li,{children:"\u0415\u0441\u043B\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F EMMC, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 \u0432 \u0440\u0435\u0436\u0438\u043C \u0437\u0430\u043F\u0438\u0441\u0438, \u0438\u043D\u0430\u0447\u0435 \u0434\u0430\u043D\u043D\u043E\u0435 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u043D\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442."}),"\n",(0,r.jsx)(n.li,{children:"\u042D\u0442\u043E \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043E \u043D\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F\u0445 \u0432 Windows, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043D\u0435 \u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0435 \u0434\u0438\u0441\u043A\u0438 \u0438 \u0442.\u0434.!!!"}),"\n",(0,r.jsx)(n.li,{children:"\u041D\u0435 \u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u0443\u0439\u0442\u0435!!!    \u041D\u0435 \u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u0443\u0439\u0442\u0435!!!  \u041D\u0435 \u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u0443\u0439\u0442\u0435!!!"}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u0441\u043A\u0430\u0447\u0430\u0439\u0442\u0435-\u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435-\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435",children:"\u0421\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u041F\u043E\u0441\u043B\u0435 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u0441\u043A\u0430\u0447\u0430\u0439\u0442\u0435, \u0441\u0430\u0439\u0442 \u043F\u043E\u0434\u0441\u043A\u0430\u0436\u0435\u0442 \u0432\u0430\u043C, \u043A\u0430\u043A\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430."}),"\n",(0,r.jsx)(n.li,{children:"\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E\u0440\u0442\u0430\u0442\u0438\u0432\u043D\u043E\u0439, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F, \u043F\u0440\u043E\u0441\u0442\u043E \u0440\u0430\u0441\u043F\u0430\u043A\u0443\u0439\u0442\u0435 \u043F\u043E\u0441\u043B\u0435 \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F."}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(s,{variant:"contained",disableElevation:!0,href:"https://www.diskgenius.cn/download.php",children:"\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0434\u0438\u0441\u043A\u0430\u043C\u0438 DG"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u043D\u0430\u0447\u0430\u043B\u043E-\u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0433\u043E-\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",children:"\u041D\u0430\u0447\u0430\u043B\u043E \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u041D\u0435 \u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u0443\u0439\u0442\u0435!!!"}),"\n",(0,r.jsx)(n.li,{children:"\u041F\u043E\u0441\u043B\u0435 \u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E!!!"}),"\n",(0,r.jsx)(n.li,{children:"\u0415\u0441\u043B\u0438 \u044D\u0442\u043E \u043A\u0430\u0440\u0442\u0430 TF, \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0435\u0451 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u043A \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0443."}),"\n",(0,r.jsx)(n.li,{children:"\u0415\u0441\u043B\u0438 \u044D\u0442\u043E EMMC, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0440\u0435\u0436\u0438\u043C \u0437\u0430\u043F\u0438\u0441\u0438!!!"}),"\n"]})}),"\n",(0,r.jsx)(n.h3,{id:"\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435",children:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043D\u0443\u0436\u043D\u043E \u0437\u0430\u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u043A \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0443."}),"\n",(0,r.jsxs)(n.li,{children:["\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 ",(0,r.jsx)(n.code,{children:"DiskGenius.exe"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["\u0415\u0441\u043B\u0438 \u0432\u0441\u0451 \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E, \u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u0441\u044F \u0434\u0438\u0441\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0443\u0436\u043D\u043E \u0437\u0430\u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C.","\n",(0,r.jsx)(l,{image:i(80942).Z,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u043F\u043E\u0438\u0441\u043A",children:"\u041F\u043E\u0438\u0441\u043A"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['\u0421\u043B\u0435\u0432\u0430 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0440\u0430\u0437\u0434\u0435\u043B, \u0437\u0430\u0442\u0435\u043C \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0444\u0430\u0439\u043B\u044B" \u0441\u0432\u0435\u0440\u0445\u0443, \u0438 \u0432\u043D\u0438\u0437\u0443 \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u0444\u0430\u0439\u043B\u044B.',"\n",(0,r.jsx)(l,{image:i(59644).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u041D\u0430\u0439\u0434\u0438\u0442\u0435 ",(0,r.jsx)(n.code,{children:"home"})," \u0438 \u0434\u0432\u0430\u0436\u0434\u044B \u0449\u0435\u043B\u043A\u043D\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u043E\u0439\u0442\u0438."]}),"\n",(0,r.jsx)(n.li,{children:"\u0412\u043D\u0443\u0442\u0440\u0438 \u043E\u0431\u044B\u0447\u043D\u043E \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0434\u043D\u0430 \u043F\u0430\u043F\u043A\u0430 \u0441 \u0438\u043C\u0435\u043D\u0435\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u044B."}),"\n",(0,r.jsx)(n.li,{children:"\u0415\u0441\u043B\u0438 \u043F\u0430\u043F\u043E\u043A \u0431\u043E\u043B\u044C\u0448\u0435 \u043E\u0434\u043D\u043E\u0439, \u043D\u0443\u0436\u043D\u043E \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C, \u043A\u0430\u043A\u0430\u044F \u0438\u0437 \u043D\u0438\u0445 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0430\u0448\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438."}),"\n",(0,r.jsx)(n.li,{children:"\u0417\u0430\u0442\u0435\u043C \u0434\u0432\u0430\u0436\u0434\u044B \u0449\u0435\u043B\u043A\u043D\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u043E\u0439\u0442\u0438."}),"\n",(0,r.jsxs)(n.li,{children:["\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u0438 \u043D\u0430\u0439\u0434\u0438\u0442\u0435 ",(0,r.jsx)(n.code,{children:"printer_data"}),".","\n",(0,r.jsx)(l,{image:i(18384).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u041F\u0430\u043F\u043A\u0430 ",(0,r.jsx)(n.code,{children:"printer_data"})," \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0430\u0448\u0438 \u043F\u0435\u0447\u0430\u0442\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B, \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E klipper, \u043B\u043E\u0433\u0438 klipper \u0438 \u0442.\u0434., \u043C\u043E\u0436\u043D\u043E \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u0441\u0451 \u0446\u0435\u043B\u0438\u043A\u043E\u043C."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u044D\u043A\u0441\u043F\u043E\u0440\u0442-\u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",children:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u0429\u0435\u043B\u043A\u043D\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u043E\u0439 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \u043C\u044B\u0448\u0438 \u043D\u0430 ",(0,r.jsx)(n.code,{children:"printer_data"}),", \u0438 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0432\u0441\u043F\u043B\u044B\u0432\u0430\u044E\u0449\u0435\u0435 \u043E\u043A\u043D\u043E.","\n",(0,r.jsx)(l,{image:i(21405).Z,size:"40%",align:"center"}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0430\u043B\u043E\u0433, \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C, \u0438\u043B\u0438 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E."}),"\n",(0,r.jsxs)(n.li,{children:["\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u044D\u043A\u0441\u043F\u043E\u0440\u0442.","\n",(0,r.jsx)(l,{image:i(51076).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0444\u0430\u0439\u043B \u0438 \u043D\u0430\u0439\u0434\u0438\u0442\u0435 ",(0,r.jsx)(n.code,{children:"config"}),", \u0437\u0434\u0435\u0441\u044C \u043D\u0430\u0445\u043E\u0434\u044F\u0442\u0441\u044F \u0432\u0430\u0448\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438.","\n",(0,r.jsx)(l,{image:i(89756).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D."}),"\n",(0,r.jsxs)(n.li,{children:["\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043B ",(0,r.jsx)(n.code,{children:"moonraker"})," \u0432 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B, \u0442\u0430\u043A \u043A\u0430\u043A \u0438\u0437-\u0437\u0430 \u0440\u0430\u0437\u043B\u0438\u0447\u0438\u0439 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445 klipper \u043C\u043E\u0436\u0435\u0442 \u043D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}function h(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},80942:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/boot-7ec50b8bc5c705870f716f79248a5edc.webp"},21405:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/export-98c303323d22147200f8d09586edf2b4.webp"},51076:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/export1-879433ba32ce8527eb4f8f47eb6ffdcc.webp"},89756:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/export2-8c4c5d8a2748b23dfb632b4269bf6dd8.webp"},59644:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/home-73c298bb7f8c9a6dff07237c04ad07bd.webp"},18384:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/printer-data-64893972c536b18e6ec1a0554fe8ea10.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return l}});var s=i(75271);let r={},t=s.createContext(r);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);