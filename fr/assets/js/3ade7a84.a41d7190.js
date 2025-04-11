"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["35004"],{18067:function(e,n,r){r.d(n,{ZP:function(){return o},d$:function(){return s}});var i=r(85893),t=r(50065);let s=[];function l(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Katapult \xe9tait auparavant appel\xe9 CanBoot, puis renomm\xe9 katapult"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le firmware Katapult est un type de bootloader qui peut \xeatre utilis\xe9 avec Klipper. Apr\xe8s avoir \xe9t\xe9 grav\xe9 via DFU ou d'autres m\xe9thodes, il permet une mise \xe0 jour du firmware via commande en un clic."}),"\n",(0,i.jsx)(n.li,{children:"Avantages : Un double appui rapide sur le bouton de r\xe9initialisation (reset) ou une coupure d'alimentation rapide deux fois permet d'entrer dans le firmware Katapult, auquel cas une LED clignote sur la carte m\xe8re."}),"\n",(0,i.jsx)(n.li,{children:"Le firmware Katapult ne peut \xeatre utilis\xe9 que pour graver des firmwares, et non pour se connecter \xe0 klipper !!!"}),"\n",(0,i.jsxs)(n.li,{children:["Le firmware Katapult supporte trois m\xe9thodes de connexion \xe0 l'ordinateur principal, les firmwares de ces trois m\xe9thodes sont ind\xe9pendants les uns des autres :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Connexion CAN","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour directement le firmware, r\xe9sistant aux interf\xe9rences."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Il faut conna\xeetre \xe0 l'avance le taux de transmission du firmware compil\xe9."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Connexion RS232","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour le firmware, r\xe9sistant fortement aux interf\xe9rences."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Il n'est pas possible de mettre \xe0 jour le firmware en un clic via commande, il faut entrer manuellement dans le firmware Katapult."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Connexion USB","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour directement le firmware."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Un c\xe2ble de donn\xe9es trop long peut \xeatre sujet aux interf\xe9rences, ce qui pourrait entra\xeener une d\xe9connexion."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},21233:function(e,n,r){r.r(n),r.d(n,{default:()=>c,frontMatter:()=>l,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>o});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-d/fly-d5/flash/index","title":"index","description":"Avant de compiler et de programmer le firmware, veillez \xe0 lire ce qui suit !!!","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-d/fly-d5/flash/index.mdx","sourceDirName":"ProductDoc/MainBoard/fly-d/fly-d5/flash","slug":"/ProductDoc/MainBoard/fly-d/fly-d5/flash/","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-d/fly-d5/flash/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-d/fly-d5/flash/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Guide de programmation du firmware (\xe0 lire obligatoirement)"},"sidebar":"tutorialSidebar","previous":{"title":"D5\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55","permalink":"/fly-docs-next/fr/docs/category/d5\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55"},"next":{"title":"USB de programmation du firmware","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-d/fly-d5/flash/usb"}}'),t=r("85893"),s=r("50065");r("18067");let l={sidebar_position:1,sidebar_label:"Guide de programmation du firmware (\xe0 lire obligatoirement)"},o=void 0,a={},d=[{value:"D\xe9terminez le firmware dont vous avez besoin",id:"d\xe9terminez-le-firmware-dont-vous-avez-besoin",level:2}];function u(e){let n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components},{Button:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Button",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Avant de compiler et de programmer le firmware, veillez \xe0 lire ce qui suit !!!"}),"\n",(0,t.jsx)(n.admonition,{title:"Remarques importantes",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Le D5 est pr\xe9-approvisionn\xe9 avec le firmware Katapult \xe0 partir du 1er septembre 2024."}),"\n",(0,t.jsx)(n.li,{children:"Une fois que vous avez programm\xe9 BL une seule fois, vous n'avez pas besoin de le reprogrammer (le BL du D5 est Katapult)."}),"\n",(0,t.jsx)(n.li,{children:"BL n'est qu'un programme de d\xe9marrage pour guider le firmware Katapult, il faut encore programmer le firmware Klipper."}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"d\xe9terminez-le-firmware-dont-vous-avez-besoin",children:"D\xe9terminez le firmware dont vous avez besoin"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Veuillez noter que vous n'avez besoin de programmer qu'un seul des firmwares."}),"\n"]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Le D5 peut \xeatre connect\xe9 \xe0 l'ordinateur h\xf4te via les deux m\xe9thodes suivantes :"}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(r,{variant:"contained",disableElevation:!0,href:"./usb",children:"Firmware USB (le plus couramment utilis\xe9)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Avantages : communication fiable, stable"}),"\n",(0,t.jsx)(n.li,{children:"Inconv\xe9nients : si plusieurs p\xe9riph\xe9riques USB sont utilis\xe9s, cela peut affecter la transmission des donn\xe9es"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(r,{variant:"contained",disableElevation:!0,href:"./can",children:"Firmware pont USB (souvent utilis\xe9 lors de l'utilisation d'une carte outil CAN)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Avantages : vous pouvez connecter plusieurs appareils sans occuper de ports USB"}),"\n",(0,t.jsxs)(n.li,{children:["Inconv\xe9nients : l'utilisation conjointe avec ",(0,t.jsx)(n.code,{children:"KlipperScreen"})," peut entra\xeener des erreurs telles que des retards de retour \xe0 z\xe9ro."]}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return l}});var i=r(67294);let t={},s=i.createContext(t);function l(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);