"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["33174"],{61073:function(e,r,i){i.r(r),i.d(r,{metadata:()=>a,contentTitle:()=>s,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>t});var a=JSON.parse('{"id":"DebugDoc/baodian/firmware","title":"Notice du firmware","description":"* Il est pr\xe9f\xe9rable d\'utiliser le firmware de l\'ordinateur principal pour compiler le firmware Klipper","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/baodian/firmware.mdx","sourceDirName":"DebugDoc/baodian","slug":"/DebugDoc/baodian/firmware","permalink":"/fly-docs-next/fr/docs/DebugDoc/baodian/firmware","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/baodian/firmware.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"debugdocSidebar","previous":{"title":"Partie PC Sup\xe9rieur","permalink":"/fly-docs-next/fr/docs/DebugDoc/baodian/host"}}'),n=i("52676"),l=i("79938");let t={sidebar_position:2},s="Notice du firmware",o={},c=[{value:"Notice sp\xe9ciale",id:"notice-sp\xe9ciale",level:2},{value:"Explications sur la compilation du firmware",id:"explications-sur-la-compilation-du-firmware",level:2},{value:"Explications sur la compilation du firmware",id:"explications-sur-la-compilation-du-firmware-1",level:2},{value:"STM32",id:"stm32",level:3},{value:"RP2040",id:"rp2040",level:3},{value:"Explications sur la programmation du firmware",id:"explications-sur-la-programmation-du-firmware",level:2},{value:"Firmware Katapult",id:"firmware-katapult",level:3},{value:"Firmware bootloader",id:"firmware-bootloader",level:3}];function d(e){let r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"notice-du-firmware",children:"Notice du firmware"})}),"\n",(0,n.jsx)(r.admonition,{title:"Notice",type:"danger",children:(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Il est pr\xe9f\xe9rable d'utiliser le firmware de l'ordinateur principal pour compiler le firmware Klipper"}),"\n",(0,n.jsx)(r.li,{children:"L'utilisation d'un firmware compil\xe9 par quelqu'un d'autre ou d'une version diff\xe9rente du firmware peut entra\xeener divers probl\xe8mes"}),"\n",(0,n.jsx)(r.li,{children:"Essayez d'\xe9viter d'utiliser un ordinateur principal modifi\xe9"}),"\n"]})}),"\n",(0,n.jsx)(r.h2,{id:"notice-sp\xe9ciale",children:"Notice sp\xe9ciale"}),"\n",(0,n.jsx)(r.admonition,{title:"Notice sp\xe9ciale",type:"info",children:(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["La plupart des cartes m\xe8res FLY ont \xe9t\xe9 programm\xe9es avec le firmware ",(0,n.jsx)(r.code,{children:"Katapult"})," lors de la fabrication"]}),"\n",(0,n.jsxs)(r.li,{children:["Les cartes m\xe8res FLY utilisent principalement le firmware ",(0,n.jsx)(r.code,{children:"Katapult"})," pour \xe9crire le firmware Klipper"]}),"\n",(0,n.jsxs)(r.li,{children:["Les cartes m\xe8res DP5, D5 et D7 n\xe9cessitent une programmation manuelle du firmware ",(0,n.jsx)(r.code,{children:"Katapult"})," correspondant"]}),"\n",(0,n.jsxs)(r.li,{children:["En raison de l'influence de l'ancien firmware, apr\xe8s avoir programm\xe9 le firmware ",(0,n.jsx)(r.code,{children:"Katapult"}),", si vous devez rechercher l'ID de la carte m\xe8re, vous devez appuyer deux fois sur le r\xe9initialisation de la carte m\xe8re, sinon la programmation du firmware ne peut pas \xeatre effectu\xe9e"]}),"\n"]})}),"\n",(0,n.jsx)(r.h2,{id:"explications-sur-la-compilation-du-firmware",children:"Explications sur la compilation du firmware"}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Les cartes m\xe8res FLY utilisent le bootloader programm\xe9 avec Katapult et la carte m\xe9moire"}),"\n",(0,n.jsx)(r.li,{children:"L'avantage du firmware Katapult est qu'il permet une mise \xe0 jour du firmware sans contact avec la carte m\xe8re"}),"\n",(0,n.jsx)(r.li,{children:"L'avantage du firmware bootloader est qu'il \xe9vite de flasher le mauvais firmware"}),"\n",(0,n.jsxs)(r.li,{children:["Il est recommand\xe9 d'utiliser ",(0,n.jsx)(r.code,{children:"MobaXterm"})," pour la configuration du firmware, car certains logiciels SSH sp\xe9ciaux signal\xe9s par les membres de la communaut\xe9 peuvent entra\xeener des \xe9checs de compilation"]}),"\n"]})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Veuillez noter que quelle que soit la version du firmware, il est essentiel de s'assurer que la compilation du firmware est correcte, sinon cela peut entra\xeener des probl\xe8mes de recherche d'impression normale ou m\xeame la non-d\xe9tection de l'appareil"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"explications-sur-la-compilation-du-firmware-1",children:"Explications sur la compilation du firmware"}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Il est important de cocher l'option ",(0,n.jsx)(r.code,{children:"Activer les options de configuration de bas niveau suppl\xe9mentaires"})," sinon le contenu d\xe9taill\xe9 ne sera pas affich\xe9"]}),"\n"]})}),"\n",(0,n.jsx)(r.h3,{id:"stm32",children:"STM32"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Si la compilation du firmware STM32 n\xe9cessite la configuration des ",(0,n.jsx)(r.code,{children:"broches GPIO \xe0 configurer au d\xe9marrage du microcontr\xf4leur"}),", veuillez noter qu'il faut utiliser des majuscules"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"rp2040",children:"RP2040"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Si la compilation du firmware RP2040 n\xe9cessite la configuration des ",(0,n.jsx)(r.code,{children:"broches GPIO \xe0 configurer au d\xe9marrage du microcontr\xf4leur"}),", veuillez noter qu'il faut utiliser des minuscules"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"explications-sur-la-programmation-du-firmware",children:"Explications sur la programmation du firmware"}),"\n",(0,n.jsx)(r.admonition,{title:"Notice",type:"danger",children:(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Pour programmer le firmware Klipper via le firmware Katapult, assurez-vous que le p\xe9riph\xe9rique peut \xeatre trouv\xe9. Si le p\xe9riph\xe9rique ne peut pas \xeatre trouv\xe9, appuyez deux fois sur la r\xe9initialisation de la carte m\xe8re"}),"\n",(0,n.jsx)(r.li,{children:"N'utilisez pas de m\xe9thodes autres que celles du tutoriel pour programmer le firmware"}),"\n",(0,n.jsx)(r.li,{children:"V\xe9rifiez s'il y a des erreurs de compilation du firmware. Si des erreurs de compilation existent, la programmation du firmware ne peut pas \xeatre effectu\xe9e correctement"}),"\n"]})}),"\n",(0,n.jsx)(r.h3,{id:"firmware-katapult",children:"Firmware Katapult"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"M\xe9thode pour r\xe9soudre les probl\xe8mes de compilation d'un firmware erron\xe9 avec le firmware Katapult"}),"\n",(0,n.jsx)(r.li,{children:"Appuyez deux fois sur la r\xe9initialisation de la carte m\xe8re, normalement une LED clignotera apr\xe8s le r\xe9initialisation"}),"\n",(0,n.jsx)(r.li,{children:"Effacez le firmware de la carte m\xe8re, puis reprogrammez le firmware Katapult"}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"firmware-bootloader",children:"Firmware bootloader"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"M\xe9thode pour r\xe9soudre les probl\xe8mes de compilation d'un firmware erron\xe9 avec le firmware bootloader"}),"\n",(0,n.jsx)(r.li,{children:"R\xe9essayez d'\xe9crire le firmware avec la carte SD"}),"\n",(0,n.jsx)(r.li,{children:"Si cela ne fonctionne pas, d\xe9branchez l'alimentation, installez la carte SD dans la carte m\xe8re, puis rallumez-la, cela prendra cinq secondes pour \xe9crire"}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},79938:function(e,r,i){i.d(r,{Z:function(){return s},a:function(){return t}});var a=i(75271);let n={},l=a.createContext(n);function t(e){let r=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),a.createElement(l.Provider,{value:r},e.children)}}}]);