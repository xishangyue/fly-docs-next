"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["66477"],{19339:function(e,n,r){r.d(n,{ZP:function(){return l},d$:function(){return a}});var i=r(52676),t=r(79938);let a=[];function s(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Katapult \xe9tait auparavant appel\xe9 CanBoot, puis renomm\xe9 katapult"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le firmware Katapult est un type de bootloader qui peut \xeatre utilis\xe9 avec Klipper. Apr\xe8s avoir \xe9t\xe9 grav\xe9 via DFU ou d'autres m\xe9thodes, il permet une mise \xe0 jour du firmware via commande en un clic."}),"\n",(0,i.jsx)(n.li,{children:"Avantages : Un double appui rapide sur le bouton de r\xe9initialisation (reset) ou une coupure d'alimentation rapide deux fois permet d'entrer dans le firmware Katapult, auquel cas une LED clignote sur la carte m\xe8re."}),"\n",(0,i.jsx)(n.li,{children:"Le firmware Katapult ne peut \xeatre utilis\xe9 que pour graver des firmwares, et non pour se connecter \xe0 klipper !!!"}),"\n",(0,i.jsxs)(n.li,{children:["Le firmware Katapult supporte trois m\xe9thodes de connexion \xe0 l'ordinateur principal, les firmwares de ces trois m\xe9thodes sont ind\xe9pendants les uns des autres :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Connexion CAN","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour directement le firmware, r\xe9sistant aux interf\xe9rences."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Il faut conna\xeetre \xe0 l'avance le taux de transmission du firmware compil\xe9."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Connexion RS232","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour le firmware, r\xe9sistant fortement aux interf\xe9rences."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Il n'est pas possible de mettre \xe0 jour le firmware en un clic via commande, il faut entrer manuellement dans le firmware Katapult."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Connexion USB","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour directement le firmware."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Un c\xe2ble de donn\xe9es trop long peut \xeatre sujet aux interf\xe9rences, ce qui pourrait entra\xeener une d\xe9connexion."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function l(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},21375:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>p,assets:()=>d,toc:()=>u,frontMatter:()=>l});var i=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-ercf/ercf/flash/index","title":"index","description":"* Le firmware Katapult pour ERCF pr\xe9install\xe9 via CAN a une vitesse de 1M","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-ercf/ercf/flash/index.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-ercf/ercf/flash","slug":"/ProductDoc/ToolBoard/fly-ercf/ercf/flash/","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-ercf/ercf/flash/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-ercf/ercf/flash/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Instructions de gravage du firmware"},"sidebar":"tutorialSidebar","previous":{"title":"ERCF\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55","permalink":"/fly-docs-next/fr/docs/category/ercf\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55"},"next":{"title":"CAN\u56FA\u4EF6\u70E7\u5F55","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-ercf/ercf/flash/can"}}'),t=r("52676"),a=r("79938"),s=r("19339");let l={sidebar_position:1,sidebar_label:"Instructions de gravage du firmware"},o="Instructions de gravage du firmware",d={},u=[{value:"Comment d\xe9terminer quel firmware vous avez besoin",id:"comment-d\xe9terminer-quel-firmware-vous-avez-besoin",level:2},{value:"Instructions relatives au firmware Katapult",id:"instructions-relatives-au-firmware-katapult",level:2},...s.d$];function c(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,a.a)(),...e.components},{Button:i,ImageView:l}=n;return!i&&m("Button",!0),!l&&m("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Le firmware Katapult pour ERCF pr\xe9install\xe9 via CAN a une vitesse de 1M"}),"\n",(0,t.jsx)(n.li,{children:"Le firmware Katapult pour ERCF connect\xe9 via CAN peut avoir une vitesse de 500K ou 1M, il est possible de le graver vous-m\xeame si n\xe9cessaire"}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"./bl",children:"Gravage du firmware Katapult"}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"instructions-de-gravage-du-firmware",children:"Instructions de gravage du firmware"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ERCF peut \xeatre connect\xe9 \xe0 l'ordinateur principal via la m\xe9thode CAN"}),"\n",(0,t.jsxs)(n.li,{children:["CAN doit \xeatre connect\xe9 avec ",(0,t.jsx)(n.code,{children:"XT30(2+2)-F"})]}),"\n",(0,t.jsxs)(n.li,{children:["Ci-dessous est l'apparence du c\xe2ble de donn\xe9es ",(0,t.jsx)(n.code,{children:"XT30(2+2)-F"}),"\n",(0,t.jsx)(l,{image:r(68827).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Le gravage du firmware de la carte m\xe8re doit passer par Katapult pour graver Klipper"}),"\n",(0,t.jsx)(n.li,{children:"Si la carte m\xe8re a d\xe9j\xe0 \xe9t\xe9 grav\xe9e avec Katapult, il n'est pas n\xe9cessaire d'effectuer le dernier gravage du firmware Katapult, cela ne sert qu'\xe0 pr\xe9venir une \xe9ventuelle erreur de gravage"}),"\n",(0,t.jsx)(n.li,{children:"Il est possible de v\xe9rifier si la carte m\xe8re est entr\xe9e dans le firmware Katapult en appuyant rapidement deux fois sur le bouton de r\xe9initialisation, si une LED clignote, c'est un bon signe"}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"comment-d\xe9terminer-quel-firmware-vous-avez-besoin",children:"Comment d\xe9terminer quel firmware vous avez besoin"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ERCF peut se connecter \xe0 l'ordinateur principal de la mani\xe8re suivante"}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"./can",children:"Gravage du firmware CAN"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Avantage : Si le firmware Katapult est install\xe9, il est possible de mettre \xe0 jour le firmware sans toucher la carte m\xe8re et il prend en charge les connexions en bus"}),"\n",(0,t.jsx)(n.li,{children:"Inconv\xe9nient : L'utilisation conjointe de KlipperScreen peut entra\xeener des erreurs telles que des d\xe9passements de d\xe9lai lors des recalibrages"}),"\n",(0,t.jsx)(n.li,{children:"Astuce : Si vous devez utiliser CAN, assurez-vous que l'ordinateur principal supporte CAN et qu'il est n\xe9cessaire d'utiliser UTOC ou une carte m\xe8re avec un firmware de pont"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"./usb",children:"Gravage du firmware USB"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Avantage : Si le firmware Katapult est install\xe9, il est possible de mettre \xe0 jour le firmware sans toucher la carte m\xe8re, si le firmware est install\xe9 via une carte SD ou DFU, il est n\xe9cessaire de suivre la m\xe9thode d'origine pour mettre \xe0 jour le firmware, la communication est fiable et stable"}),"\n",(0,t.jsx)(n.li,{children:"Inconv\xe9nient : Si plusieurs p\xe9riph\xe9riques USB sont pr\xe9sents, ils peuvent affecter la transmission des donn\xe9es"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"instructions-relatives-au-firmware-katapult",children:"Instructions relatives au firmware Katapult"}),"\n",(0,t.jsx)(s.ZP,{})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},68827:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/xt30-742629a50a3b92c13e2f62b56ee806a9.webp"},79938:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return s}});var i=r(75271);let t={},a=i.createContext(t);function s(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);