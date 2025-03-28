"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["10318"],{19339:function(e,n,r){r.d(n,{ZP:function(){return a},d$:function(){return o}});var t=r(52676),i=r(79938);let o=[];function s(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Katapult \xe9tait auparavant appel\xe9 CanBoot, puis renomm\xe9 katapult"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Le firmware Katapult est un type de bootloader qui peut \xeatre utilis\xe9 avec Klipper. Apr\xe8s avoir \xe9t\xe9 grav\xe9 via DFU ou d'autres m\xe9thodes, il permet une mise \xe0 jour du firmware via commande en un clic."}),"\n",(0,t.jsx)(n.li,{children:"Avantages : Un double appui rapide sur le bouton de r\xe9initialisation (reset) ou une coupure d'alimentation rapide deux fois permet d'entrer dans le firmware Katapult, auquel cas une LED clignote sur la carte m\xe8re."}),"\n",(0,t.jsx)(n.li,{children:"Le firmware Katapult ne peut \xeatre utilis\xe9 que pour graver des firmwares, et non pour se connecter \xe0 klipper !!!"}),"\n",(0,t.jsxs)(n.li,{children:["Le firmware Katapult supporte trois m\xe9thodes de connexion \xe0 l'ordinateur principal, les firmwares de ces trois m\xe9thodes sont ind\xe9pendants les uns des autres :","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Connexion CAN","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour directement le firmware, r\xe9sistant aux interf\xe9rences."}),"\n",(0,t.jsx)(n.li,{children:"Inconv\xe9nients : Il faut conna\xeetre \xe0 l'avance le taux de transmission du firmware compil\xe9."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Connexion RS232","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour le firmware, r\xe9sistant fortement aux interf\xe9rences."}),"\n",(0,t.jsx)(n.li,{children:"Inconv\xe9nients : Il n'est pas possible de mettre \xe0 jour le firmware en un clic via commande, il faut entrer manuellement dans le firmware Katapult."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Connexion USB","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour directement le firmware."}),"\n",(0,t.jsx)(n.li,{children:"Inconv\xe9nients : Un c\xe2ble de donn\xe9es trop long peut \xeatre sujet aux interf\xe9rences, ce qui pourrait entra\xeener une d\xe9connexion."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},61627:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>m,assets:()=>u,toc:()=>d,frontMatter:()=>a});var t=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sht36/sht36/flash/index","title":"index","description":"* Les SHT36/42 ne sont pas pr\xe9programm\xe9s avec le firmware Katapult pour CAN au moment de la fabrication.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sht36/sht36/flash/index.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sht36/sht36/flash","slug":"/ProductDoc/ToolBoard/fly-sht36/sht36/flash/","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36/flash/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sht36/sht36/flash/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Notice de programmation de la m\xe9moire interne"},"sidebar":"tutorialSidebar","previous":{"title":"SHT36/42\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55","permalink":"/fly-docs-next/fr/docs/category/sht3642\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55"},"next":{"title":"CAN\u56FA\u4EF6\u70E7\u5F55","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36/flash/can"}}'),i=r("52676"),o=r("79938"),s=r("19339");let a={sidebar_position:1,sidebar_label:"Notice de programmation de la m\xe9moire interne"},l="Notice de programmation de la m\xe9moire interne",u={},d=[{value:"Comment d\xe9terminer quel firmware vous avez besoin",id:"comment-d\xe9terminer-quel-firmware-vous-avez-besoin",level:2},{value:"Notice sur le firmware Katapult",id:"notice-sur-le-firmware-katapult",level:2},...s.d$];function c(e){let n={admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,o.a)(),...e.components},{Button:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Button",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Les SHT36/42 ne sont pas pr\xe9programm\xe9s avec le firmware Katapult pour CAN au moment de la fabrication."}),"\n",(0,i.jsx)(n.li,{children:"Le firmware Katapult pour CAN des SHT36/42 est disponible en deux vitesses : 500K et 1M. Vous pouvez le programmer vous-m\xeame si n\xe9cessaire."}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(r,{variant:"contained",disableElevation:!0,href:"./bl",children:"Programmation du firmware Katapult"}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"notice-de-programmation-de-la-m\xe9moire-interne",children:"Notice de programmation de la m\xe9moire interne"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Les SHT36/42 peuvent \xeatre connect\xe9s \xe0 une station sup\xe9rieure via une connexion CAN."}),"\n",(0,i.jsx)(n.li,{children:"Le c\xe2blage CAN n\xe9cessite l'utilisation de brides m\xe9talliques MX3.0."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"comment-d\xe9terminer-quel-firmware-vous-avez-besoin",children:"Comment d\xe9terminer quel firmware vous avez besoin"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Les SHT36/42 peuvent \xeatre connect\xe9s \xe0 une station sup\xe9rieure via une m\xe9thode CAM."}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(r,{variant:"contained",disableElevation:!0,href:"./can",children:"Programmation du firmware CAN"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantage : Si vous installez le firmware Katapult, vous pouvez mettre \xe0 jour le firmware sans toucher au circuit imprim\xe9 principal et il supporte les connexions en bus."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nient : L'utilisation conjointe de KlipperScreen peut entra\xeener des erreurs comme des retards de positionnement."}),"\n",(0,i.jsx)(n.li,{children:"Remarque : Si vous souhaitez utiliser CAN, assurez-vous que la station sup\xe9rieure prend en charge CAN et qu'elle est \xe9quip\xe9e d'un UTOC ou d'une carte m\xe8re avec un firmware pont."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"notice-sur-le-firmware-katapult",children:"Notice sur le firmware Katapult"}),"\n",(0,i.jsx)(s.ZP,{})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},79938:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return s}});var t=r(75271);let i={},o=t.createContext(i);function s(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);