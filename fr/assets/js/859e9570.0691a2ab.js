"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["68610"],{57002:function(e,r,n){n.r(r),n.d(r,{default:()=>c,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-micro/fly-micro4/flash/index","title":"index","description":"* Micro4 utilise par d\xe9faut Katapult via la connexion USB pour la gravure du firmware","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-micro/fly-micro4/flash/index.mdx","sourceDirName":"ProductDoc/MainBoard/fly-micro/fly-micro4/flash","slug":"/ProductDoc/MainBoard/fly-micro/fly-micro4/flash/","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-micro/fly-micro4/flash/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-micro/fly-micro4/flash/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Instructions de gravure du firmware"},"sidebar":"tutorialSidebar","previous":{"title":"Micro4 \u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55","permalink":"/fly-docs-next/fr/docs/category/micro4-\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55"},"next":{"title":"Flashage du firmware USB","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-micro/fly-micro4/flash/usb"}}'),t=n("85893"),a=n("50065");let o={sidebar_position:1,sidebar_label:"Instructions de gravure du firmware"},s="Instructions de gravure du firmware",l={},d=[{value:"Comment d\xe9terminer quel type de firmware vous avez besoin",id:"comment-d\xe9terminer-quel-type-de-firmware-vous-avez-besoin",level:2}];function u(e){let r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,a.a)(),...e.components},{Button:n}=r;return n||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Button",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Micro4 utilise par d\xe9faut Katapult via la connexion USB pour la gravure du firmware"}),"\n"]})}),"\n",(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"instructions-de-gravure-du-firmware",children:"Instructions de gravure du firmware"})}),"\n",(0,t.jsx)(r.admonition,{title:"\xc0 savoir",type:"danger",children:(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"La gravure du firmware de la carte m\xe8re doit \xeatre effectu\xe9e via Katapult pour graver Klipper"}),"\n",(0,t.jsx)(r.li,{children:"Si vous \xeates s\xfbr que la carte m\xe8re a d\xe9j\xe0 \xe9t\xe9 grav\xe9e avec Katapult, vous n'avez pas besoin d'effectuer la derni\xe8re \xe9tape de gravure du firmware Katapult, cela n'est que pour pr\xe9venir une \xe9ventuelle erreur de gravage du firmware Katapult"}),"\n",(0,t.jsx)(r.li,{children:"Vous pouvez appuyer rapidement deux fois sur le bouton de r\xe9initialisation pour voir si une LED clignote sur la carte m\xe8re, si c'est le cas, cela signifie que la carte m\xe8re est entr\xe9e dans le firmware Katapult"}),"\n"]})}),"\n",(0,t.jsx)(r.h2,{id:"comment-d\xe9terminer-quel-type-de-firmware-vous-avez-besoin",children:"Comment d\xe9terminer quel type de firmware vous avez besoin"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Notez bien que vous n'avez besoin de flasher qu'un seul type de firmware"}),"\n"]})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"E3 V2 peut utiliser les m\xe9thodes suivantes pour se connecter \xe0 l'ordinateur principal"}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(n,{variant:"contained",disableElevation:!0,href:"./usb",children:"Firmware USB"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Avantage : communication fiable et stable"}),"\n",(0,t.jsx)(r.li,{children:"Inconv\xe9nient : si plusieurs p\xe9riph\xe9riques USB sont pr\xe9sents, cela pourrait affecter la transmission des donn\xe9es"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(n,{variant:"contained",disableElevation:!0,href:"./can",children:"Firmware de pont USB"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Avantage : peut connecter plusieurs appareils sans occuper de ports USB"}),"\n",(0,t.jsxs)(r.li,{children:["Inconv\xe9nient : peut provoquer des erreurs telles qu'un d\xe9passement de temps d'attente lors de l'utilisation conjointe de ",(0,t.jsx)(r.code,{children:"KlipperScreen"}),"\n:::"]}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return s},a:function(){return o}});var i=n(67294);let t={},a=i.createContext(t);function o(e){let r=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:r},e.children)}}}]);