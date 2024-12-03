"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["33174"],{61073:function(e,i,r){r.r(i),r.d(i,{metadata:()=>l,contentTitle:()=>t,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>s});var l=JSON.parse('{"id":"DebugDoc/baodian/firmware","title":"Explications du Firmware","description":"* Il est pr\xe9f\xe9rable de compiler le firmware Klipper avec votre propre firmware de machine h\xf4te","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/baodian/firmware.mdx","sourceDirName":"DebugDoc/baodian","slug":"/DebugDoc/baodian/firmware","permalink":"/fly-docs-next/fr/docs/DebugDoc/baodian/firmware","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/baodian/firmware.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732249869000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"debugdocSidebar","previous":{"title":"Chapitre sur le logiciel h\xf4te","permalink":"/fly-docs-next/fr/docs/DebugDoc/baodian/host"}}'),a=r("52676"),n=r("79938");let s={sidebar_position:2},t="Explications du Firmware",o={},d=[{value:"Explications Sp\xe9ciales",id:"explications-sp\xe9ciales",level:2},{value:"Explications de la Compilation du Firmware",id:"explications-de-la-compilation-du-firmware",level:2},{value:"Explications de la Compilation du Firmware",id:"explications-de-la-compilation-du-firmware-1",level:2},{value:"STM32",id:"stm32",level:3},{value:"RP2040",id:"rp2040",level:3},{value:"Explications du Flashing du Firmware",id:"explications-du-flashing-du-firmware",level:2},{value:"Firmware Katapult",id:"firmware-katapult",level:3},{value:"Firmware Bootloader",id:"firmware-bootloader",level:3}];function c(e){let i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"explications-du-firmware",children:"Explications du Firmware"})}),"\n",(0,a.jsx)(i.admonition,{title:"\xc0 savoir",type:"danger",children:(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Il est pr\xe9f\xe9rable de compiler le firmware Klipper avec votre propre firmware de machine h\xf4te"}),"\n",(0,a.jsx)(i.li,{children:"Utiliser un firmware compil\xe9 par quelqu'un d'autre ou une version diff\xe9rente peut entra\xeener divers probl\xe8mes"}),"\n",(0,a.jsx)(i.li,{children:"\xc9vitez autant que possible d'utiliser des machines h\xf4tes modifi\xe9es"}),"\n"]})}),"\n",(0,a.jsx)(i.h2,{id:"explications-sp\xe9ciales",children:"Explications Sp\xe9ciales"}),"\n",(0,a.jsx)(i.admonition,{title:"Explications Sp\xe9ciales",type:"info",children:(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["La plupart des cartes m\xe8res FLY sont d\xe9j\xe0 \xe9quip\xe9es du firmware ",(0,a.jsx)(i.code,{children:"Katapult"})," \xe0 la sortie d'usine"]}),"\n",(0,a.jsxs)(i.li,{children:["Les cartes m\xe8res FLY utilisent maintenant principalement le firmware ",(0,a.jsx)(i.code,{children:"Katapult"})," pour flasher le firmware ",(0,a.jsx)(i.code,{children:"Klipper"})]}),"\n",(0,a.jsxs)(i.li,{children:["Les cartes m\xe8res DP5, D5 et D7 n\xe9cessitent une programmation manuelle du firmware ",(0,a.jsx)(i.code,{children:"Katapult"})," correspondant"]}),"\n",(0,a.jsxs)(i.li,{children:["En raison de l'impact pr\xe9c\xe9dent du firmware, apr\xe8s avoir flash\xe9 le firmware ",(0,a.jsx)(i.code,{children:"Katapult"}),", il faut cliquer deux fois sur la r\xe9initialisation de la carte m\xe8re pour rechercher l'ID de la carte m\xe8re, sinon le firmware ne peut pas \xeatre flash\xe9"]}),"\n"]})}),"\n",(0,a.jsx)(i.h2,{id:"explications-de-la-compilation-du-firmware",children:"Explications de la Compilation du Firmware"}),"\n",(0,a.jsx)(i.admonition,{type:"tip",children:(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Les cartes m\xe8res FLY utilisent le bootloader Katapult et la carte SD pour flasher"}),"\n",(0,a.jsx)(i.li,{children:"L'avantage du firmware Katapult est qu'il permet de mettre \xe0 jour le firmware sans contact direct avec la carte m\xe8re"}),"\n",(0,a.jsx)(i.li,{children:"L'avantage du firmware bootloader est qu'il n'y a pas de risque de flasher le mauvais firmware"}),"\n",(0,a.jsxs)(i.li,{children:["Il est pr\xe9f\xe9rable d'utiliser ",(0,a.jsx)(i.code,{children:"MobaXterm"})," pour configurer le firmware, car certains logiciels SSH particuliers peuvent entra\xeener des \xe9checs de compilation selon les retours des utilisateurs"]}),"\n"]})}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Veuillez noter que quel que soit le firmware, il est n\xe9cessaire de s'assurer que la compilation est correcte, sinon cela peut entra\xeener l'impossibilit\xe9 de trouver l'imprimante ou m\xeame de la d\xe9tecter"}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"explications-de-la-compilation-du-firmware-1",children:"Explications de la Compilation du Firmware"}),"\n",(0,a.jsx)(i.admonition,{type:"tip",children:(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Assurez-vous de cocher l'option ",(0,a.jsx)(i.code,{children:"Enable extra low-level configuration options"})," sinon les d\xe9tails sp\xe9cifiques ne seront pas affich\xe9s"]}),"\n"]})}),"\n",(0,a.jsx)(i.h3,{id:"stm32",children:"STM32"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Si la configuration de ",(0,a.jsx)(i.code,{children:"GPIO pins to set at micro-controller startup"})," est n\xe9cessaire lors de la compilation du firmware STM32, assurez-vous que les lettres sont en majuscule"]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"rp2040",children:"RP2040"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Si la configuration de ",(0,a.jsx)(i.code,{children:"GPIO pins to set at micro-controller startup"})," est n\xe9cessaire lors de la compilation du firmware RP2040, assurez-vous que les lettres sont en minuscule"]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"explications-du-flashing-du-firmware",children:"Explications du Flashing du Firmware"}),"\n",(0,a.jsx)(i.admonition,{title:"\xc0 savoir",type:"danger",children:(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Pour flasher le firmware ",(0,a.jsx)(i.code,{children:"Klipper"})," via le firmware ",(0,a.jsx)(i.code,{children:"Katapult"}),", assurez-vous de pouvoir trouver l'appareil, si l'appareil n'est pas d\xe9tect\xe9, cliquez manuellement deux fois sur la r\xe9initialisation de la carte m\xe8re"]}),"\n",(0,a.jsx)(i.li,{children:"Veuillez ne pas utiliser des m\xe9thodes de flashing autres que celles mentionn\xe9es dans le tutoriel"}),"\n",(0,a.jsx)(i.li,{children:"V\xe9rifiez s'il n'y a pas d'erreurs de compilation dans le firmware, car des erreurs de compilation emp\xeachent le flashing correct du firmware"}),"\n"]})}),"\n",(0,a.jsx)(i.h3,{id:"firmware-katapult",children:"Firmware Katapult"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"M\xe9thode pour r\xe9soudre un firmware compil\xe9 avec des erreurs lorsqu'il est flash\xe9 avec le firmware Katapult"}),"\n",(0,a.jsx)(i.li,{children:"Cliquez deux fois sur la r\xe9initialisation de la carte m\xe8re, normalement une LED clignotera apr\xe8s la r\xe9initialisation"}),"\n",(0,a.jsx)(i.li,{children:"Effacez le firmware de la carte m\xe8re, puis reflashez le firmware Katapult"}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"firmware-bootloader",children:"Firmware Bootloader"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"M\xe9thode pour r\xe9soudre un firmware compil\xe9 avec des erreurs lorsqu'il est flash\xe9 avec le firmware bootloader"}),"\n",(0,a.jsx)(i.li,{children:"Re-flashez simplement via la carte TF"}),"\n",(0,a.jsx)(i.li,{children:"Si le flash ne fonctionne pas, \xe9teignez d'abord l'appareil, installez la carte SD sur la carte m\xe8re puis rallumez, cela devrait flasher en cinq secondes"}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},79938:function(e,i,r){r.d(i,{Z:function(){return t},a:function(){return s}});var l=r(75271);let a={},n=l.createContext(a);function s(e){let i=l.useContext(n);return l.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),l.createElement(n.Provider,{value:i},e.children)}}}]);