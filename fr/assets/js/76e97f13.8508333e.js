"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["23010"],{18067:function(e,n,r){r.d(n,{ZP:function(){return l},d$:function(){return a}});var i=r(85893),t=r(50065);let a=[];function s(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Katapult \xe9tait auparavant appel\xe9 CanBoot, puis renomm\xe9 katapult"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le firmware Katapult est un type de bootloader qui peut \xeatre utilis\xe9 avec Klipper. Apr\xe8s avoir \xe9t\xe9 grav\xe9 via DFU ou d'autres m\xe9thodes, il permet une mise \xe0 jour du firmware via commande en un clic."}),"\n",(0,i.jsx)(n.li,{children:"Avantages : Un double appui rapide sur le bouton de r\xe9initialisation (reset) ou une coupure d'alimentation rapide deux fois permet d'entrer dans le firmware Katapult, auquel cas une LED clignote sur la carte m\xe8re."}),"\n",(0,i.jsx)(n.li,{children:"Le firmware Katapult ne peut \xeatre utilis\xe9 que pour graver des firmwares, et non pour se connecter \xe0 klipper !!!"}),"\n",(0,i.jsxs)(n.li,{children:["Le firmware Katapult supporte trois m\xe9thodes de connexion \xe0 l'ordinateur principal, les firmwares de ces trois m\xe9thodes sont ind\xe9pendants les uns des autres :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Connexion CAN","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour directement le firmware, r\xe9sistant aux interf\xe9rences."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Il faut conna\xeetre \xe0 l'avance le taux de transmission du firmware compil\xe9."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Connexion RS232","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour le firmware, r\xe9sistant fortement aux interf\xe9rences."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Il n'est pas possible de mettre \xe0 jour le firmware en un clic via commande, il faut entrer manuellement dans le firmware Katapult."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Connexion USB","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour directement le firmware."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Un c\xe2ble de donn\xe9es trop long peut \xeatre sujet aux interf\xe9rences, ce qui pourrait entra\xeener une d\xe9connexion."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function l(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},30130:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>i,assets:()=>u,toc:()=>d,contentTitle:()=>o});var i=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/index","title":"index","description":"* SHT36 V2 propose le firmware Katapult avec connexion USB et CAN, il peut \xeatre flash\xe9 si n\xe9cessaire","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/index.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash","slug":"/ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Instructions de gravage du firmware"},"sidebar":"tutorialSidebar","previous":{"title":"SHT36 V2\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55","permalink":"/fly-docs-next/fr/docs/category/sht36-v2\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55"},"next":{"title":"Compilation et flash du firmware CAN 072","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/can072"}}'),t=r("85893"),a=r("50065"),s=r("18067");let l={sidebar_position:1,sidebar_label:"Instructions de gravage du firmware"},o="Instructions de gravage du firmware",u={},d=[{value:"Gravage du firmware CAN",id:"gravage-du-firmware-can",level:2},{value:"Instructions relatives au firmware Katapult",id:"instructions-relatives-au-firmware-katapult",level:2},...s.d$];function c(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,a.a)(),...e.components},{Button:i,ImageView:l}=n;return i||f("Button",!0),l||f("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"SHT36 V2 propose le firmware Katapult avec connexion USB et CAN, il peut \xeatre flash\xe9 si n\xe9cessaire"}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"./bl",children:"Gravage du firmware Katapult"}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Le firmware Katapult connect\xe9 par CAN est pr\xe9install\xe9 sur SHT36 V2 \xe0 la sortie d'usine, le taux de transmission est de 1 Mbit/s"}),"\n"]})}),"\n",(0,t.jsx)(n.admonition,{title:"Remarques importantes",type:"warning",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"SHT36 V2 utilise trois types de contr\xf4leurs principaux, ne pas graver le mauvais firmware ou il ne pourra pas d\xe9marrer"}),"\n",(0,t.jsxs)(n.li,{children:["Pour APM 072 et STM 072, veuillez consulter ",(0,t.jsx)(n.a,{href:"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/can072",title:"Cliquez pour sauter",children:"Gravage du firmware CAN 072"})]}),"\n",(0,t.jsxs)(n.li,{children:["Pour STM 103, veuillez consulter ",(0,t.jsx)(n.a,{href:"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/can103",title:"Cliquez pour sauter",children:"Gravage du firmware CAN 103"})]}),"\n"]})}),"\n",(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"instructions-de-gravage-du-firmware",children:"Instructions de gravage du firmware"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"La compilation du firmware et le gravage n\xe9cessitent un logiciel de haut niveau"}),"\n",(0,t.jsx)(n.li,{children:"SHT36 V2 peut utiliser la m\xe9thode de connexion CAN pour se connecter au logiciel de haut niveau"}),"\n",(0,t.jsxs)(n.li,{children:["CAN doit \xeatre connect\xe9 en utilisant ",(0,t.jsx)(n.code,{children:"XT30(2+2)-F"})]}),"\n",(0,t.jsxs)(n.li,{children:["Ci-dessous est l'apparence du c\xe2ble de donn\xe9es ",(0,t.jsx)(n.code,{children:"XT30(2+2)-F"}),"\n",(0,t.jsx)(l,{image:r(61668).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Le flashage du firmware de la carte m\xe8re doit passer par Katapult pour graver Klipper"}),"\n",(0,t.jsx)(n.li,{children:"Si vous \xeates s\xfbr que la carte m\xe8re a d\xe9j\xe0 \xe9t\xe9 grav\xe9e avec Katapult, vous n'avez pas besoin de faire le flashage final de Katapult, c'est juste une pr\xe9caution si le flashage pr\xe9c\xe9dent n'a pas r\xe9ussi"}),"\n",(0,t.jsx)(n.li,{children:"Vous pouvez appuyer rapidement deux fois sur le bouton de r\xe9initialisation pour voir si une LED clignote sur la carte m\xe8re, si oui, cela signifie que la carte m\xe8re est d\xe9j\xe0 dans le firmware Katapult"}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"gravage-du-firmware-can",children:"Gravage du firmware CAN"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"SHT36 V2 ne peut utiliser que la m\xe9thode de connexion CAN pour se connecter au logiciel de haut niveau"}),"\n",(0,t.jsxs)(n.li,{children:["Pour STM 103, veuillez consulter   ",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"./can103",children:"Gravage du firmware CAN 103"})]}),"\n",(0,t.jsxs)(n.li,{children:["Pour APM 072 et STM 072, veuillez consulter   ",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"./can072",children:"Gravage du firmware CAN 072"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"instructions-relatives-au-firmware-katapult",children:"Instructions relatives au firmware Katapult"}),"\n",(0,t.jsx)(s.ZP,{})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function f(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},61668:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/xt30-742629a50a3b92c13e2f62b56ee806a9.webp"},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return s}});var i=r(67294);let t={},a=i.createContext(t);function s(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);