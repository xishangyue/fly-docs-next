"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["22223"],{11613:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>o});var s=JSON.parse('{"id":"ProductDoc/ExtensionBoard/fly-airclick/button","title":"Ajout de boutons sans fil","description":"* Les boutons sans fil n\xe9cessitent l\'installation de la batterie, le mod\xe8le de batterie est CR927","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/fly-airclick/button.mdx","sourceDirName":"ProductDoc/ExtensionBoard/fly-airclick","slug":"/ProductDoc/ExtensionBoard/fly-airclick/button","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-airclick/button","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/fly-airclick/button.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"Ajout de boutons"},"sidebar":"tutorialSidebar","previous":{"title":"Connexion \xe0 BambuLab","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-airclick/bambulab"},"next":{"title":"Configuration de connexion filaire Klipper","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-airclick/offline-operation-support"}}'),t=i("52676"),r=i("79938");let o={sidebar_position:6,sidebar_label:"Ajout de boutons"},l="Ajout de boutons sans fil",c={},a=[{value:"Personnalisation GCODE",id:"personnalisation-gcode",level:2},{value:"Requ\xeates API",id:"requ\xeates-api",level:2},{value:"Activation GPIO (uniquement pour Klipper)",id:"activation-gpio-uniquement-pour-klipper",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Button:s,ImageView:o,TabItem:l,Tabs:c}=n;return!s&&p("Button",!0),!o&&p("ImageView",!0),!l&&p("TabItem",!0),!c&&p("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"ajout-de-boutons-sans-fil",children:"Ajout de boutons sans fil"})}),"\n",(0,t.jsx)(n.admonition,{title:"Important notice",type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Les boutons sans fil n\xe9cessitent l'installation de la batterie, le mod\xe8le de batterie est ",(0,t.jsx)(n.code,{children:"CR927"})]}),"\n"]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Cliquez sur le ",(0,t.jsx)(n.code,{children:"+"})," dans la bo\xeete rouge apr\xe8s avoir retourn\xe9 \xe0 la page d'accueil","\n",(0,t.jsx)(o,{image:i(83963).Z,size:"80%",align:"Center"}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Apr\xe8s avoir affich\xe9 cette interface, appuyez normalement sur le bouton sans fil avec la batterie install\xe9e"}),"\n",(0,t.jsxs)(n.li,{children:["La bo\xeete rouge g\xe9n\xe9rera automatiquement l'ID du bouton sans fil, cet ID est unique","\n",(0,t.jsx)(o,{image:i(79483).Z,size:"80%",align:"Center"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Entrez le nom que vous souhaitez donner au bouton dans la bo\xeete rouge","\n",(0,t.jsx)(o,{image:i(77297).Z,size:"80%",align:"Center"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Cliquez sur la premi\xe8re bo\xeete rouge, une deuxi\xe8me bo\xeete bleue appara\xeetra","\n",(0,t.jsx)(o,{image:i(82003).Z,size:"80%",align:"Center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Le GCODE personnalis\xe9 et les requ\xeates API sont contr\xf4l\xe9s via une connexion sans fil"}),"\n",(0,t.jsx)(n.li,{children:"L'activation des GPIO est effectu\xe9e via une connexion filaire"}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"personnalisation-gcode",children:"Personnalisation GCODE"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Personnalisez le ",(0,t.jsx)(n.code,{children:"GCODE"}),", vous pouvez entrer le code ou le nom de la macro dont vous avez besoin dans la bo\xeete rouge, AirClick enverra automatiquement le code au imprimante pour ex\xe9cution","\n",(0,t.jsx)(o,{image:i(37362).Z,size:"80%",align:"Center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"requ\xeates-api",children:"Requ\xeates API"}),"\n",(0,t.jsxs)(c,{children:[(0,t.jsxs)(l,{value:"ka",label:"Configuration de l'API Klipper",default:!0,children:[(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Les API pr\xe9d\xe9finies peuvent r\xe9aliser des macros personnalis\xe9es, un arr\xeat d'urgence, un red\xe9marrage de Klipper, un red\xe9marrage de la mise en m\xe9moire, une fermeture du syst\xe8me, etc."}),"\n"]}),(0,t.jsx)(o,{image:i(52092).Z,size:"80%",align:"Center"}),(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Explications des API personnalis\xe9es","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Toutes les API font r\xe9f\xe9rence \xe0 la documentation de r\xe9f\xe9rence Moonraker API ",(0,t.jsx)(n.a,{href:"https://moonraker.readthedocs.io/en/latest/web_api/",children:"Moonraker API"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"method"})," doit \xeatre conforme au ",(0,t.jsx)(n.code,{children:"method"})," de l'API Moonraker"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"params"})," doit \xeatre conforme au ",(0,t.jsx)(n.code,{children:"params"})," de l'API Moonraker"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Voici un exemple avec l'API de d\xe9marrage d'impression de fichier sp\xe9cifique","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"L'image suivante est un exemple de document officiel de Moonraker"}),"\n"]}),"\n",(0,t.jsx)(o,{image:i(30965).Z,size:"80%",align:"Center"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Voici un exemple de remplissage de l'API AirClick"}),"\n"]}),"\n",(0,t.jsx)(o,{image:i(2568).Z,size:"80%",align:"Center"}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Enregistrer ce bouton permettra de commencer l'impression d'un fichier sp\xe9cifique"}),"\n"]})]}),(0,t.jsx)(l,{value:"ra",label:"Configuration de l'API RRF",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Explications des API personnalis\xe9es","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Toutes les API font r\xe9f\xe9rence \xe0 la documentation de r\xe9f\xe9rence RepRapFirmware HTTP API ",(0,t.jsx)(n.a,{href:"https://github.com/Duet3D/RepRapFirmware/wiki/HTTP-requests",children:"RepRapFirmware HTTP API"})]}),"\n",(0,t.jsx)(n.li,{children:"Seul les requ\xeates GET sont support\xe9es"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"method"})," doit \xeatre conforme au ",(0,t.jsx)(n.code,{children:"uri"})," de l'API HTTP RRF"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"params"})," doit \xeatre conforme au ",(0,t.jsx)(n.code,{children:"url query"})," de l'API HTTP RRF"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Voici un exemple avec l'API de suppression de fichiers ou dossiers sp\xe9cifiques","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"L'image suivante est un exemple de document officiel de RRF"}),"\n"]}),"\n",(0,t.jsx)(o,{image:i(24932).Z,size:"80%",align:"Center"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Voici un exemple de remplissage de l'API AirClick"}),"\n"]}),"\n",(0,t.jsx)(o,{image:i(22775).Z,size:"80%",align:"Center"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Ici, les params doivent \xeatre r\xe9\xe9crits en format JSON, comme ",(0,t.jsx)(n.code,{children:"/?aaaa=bbb&cccc=ddd"})]}),"\n",(0,t.jsxs)(n.li,{children:["Apr\xe8s modification, cela devient","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "aaaa": "bbb",\n    "cccc": "ddd"\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Enregistrer ce bouton permettra de supprimer des fichiers ou dossiers sp\xe9cifiques"}),"\n"]})}),(0,t.jsxs)(l,{value:"ba",label:"Configuration de l'API BambuLab",children:[(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Les API pr\xe9d\xe9finies peuvent r\xe9aliser une pause d'impression, une annulation d'impression, un contr\xf4le des LEDs, etc."}),"\n"]}),(0,t.jsx)(o,{image:i(72579).Z,size:"80%",align:"Center"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Le contr\xf4le des LEDs est recommand\xe9 d'utiliser le mode de commutation automatique, dans ce mode, l'\xe9tat des LEDs sera d\xe9tect\xe9 automatiquement et bascul\xe9 automatiquement. Pour activer ou d\xe9sactiver automatiquement"}),"\n"]}),(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Explications des API personnalis\xe9es","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Les API BambuLab doivent \xeatre recherch\xe9es dans le document Github Open BambuAPI"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Voici un exemple avec l'API de r\xe9glage de la vitesse d'impression","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Voici les param\xe8tres complets de l'envoi MQTT de BambuLab dans le r\xe9seau local","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "print": {\n        "sequence_id": "0",\n        "command": "print_speed",\n        "param": "2" // Niveau de vitesse d\'impression en tant que cha\xeene\n                     // 1 = silencieux\n                     // 2 = standard\n                     // 3 = sport\n                     // 4 = fou\n    }\n}\n'})}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Voici un exemple de remplissage de l'API AirClick"}),"\n"]}),"\n",(0,t.jsx)(o,{image:i(64573).Z,size:"80%",align:"Center"}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Enregistrer ce bouton permettra de r\xe9gler la vitesse d'impression"}),"\n"]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"activation-gpio-uniquement-pour-klipper",children:"Activation GPIO (uniquement pour Klipper)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"L'activation des GPIO n\xe9cessite une connexion entre STM32F072 et Klipper"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["La mise en flash et la connexion n\xe9cessitent de consulter ce document ",(0,t.jsx)(s,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/ExtensionBoard/fly-airclick/offline-operation-support",children:"Mise en flash et connexion"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Les IO utilisables sont ",(0,t.jsx)(n.code,{children:"PB0"})," \xe0 ",(0,t.jsx)(n.code,{children:"PB9"}),", soit dix IO. Apr\xe8s avoir correctement flash\xe9 la mise en flash et connect\xe9 Klipper, il suffit de configurer correctement ci-dessous, voici une configuration de r\xe9f\xe9rence"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"[mcu AirClick]\nserial: /dev/serial/by-id/usb-Klipper_stm32f072xb_AirClick-if00\n### Il faut rechercher l'USBID et modifier ici\n\n[gcode_button _test]\npin: ^!AirClick:PB0\npress_gcode:\n    M118 PB0\n\n[gcode_button _test1]\npin: ^!AirClick:PB1\npress_gcode:\n    M118 PB1\n\n[gcode_button _test2]\npin: ^!AirClick:PB2\npress_gcode:\n    M118 PB2\n\n[gcode_button _test3]\npin: ^!AirClick:PB3\npress_gcode:\n    M118 PB3\n\n[gcode_button _test4]\npin: ^!AirClick:PB4\npress_gcode:\n    M118 PB4\n\n[gcode_button _test5]\npin: ^!AirClick:PB5\npress_gcode:\n    M118 PB5\n\n[gcode_button _test6]\npin: ^!AirClick:PB6\npress_gcode:\n    M118 PB6\n\n[gcode_button _test7]\npin: ^!AirClick:PB7\npress_gcode:\n    M118 PB7\n\n[gcode_button _test8]\npin: ^!AirClick:PB8\npress_gcode:\n    M118 PB8\n\n[gcode_button _test9]\npin: ^!AirClick:PB9\npress_gcode:\n    M118 PB9\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},52092:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/api-2af73b6b4ebea6721d10fe2a0bd6ff6b.webp"},72579:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/bambu-api-1-742abcddb517d529fe02cd33929948f9.webp"},64573:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/bambu-api-2-650785d85fbf48a977e64ebe36ea0c22.webp"},79483:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/button-1-0d8a116019030586c24cc22580c3bc45.webp"},77297:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/button-2-b7d5020af6446d2f7e864cb7fe1f22a1.webp"},82003:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/button-3-dec9d14925864c3fed0b159930ae5a8b.webp"},83963:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/button-0c3d2f9521727bd781609e9e4e1ff6b9.webp"},37362:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/gcode-8fc68035b21ed6c795b12d7c61266d6f.webp"},30965:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/klipper-api-1-418789b68e680f59fb30c89eb79bc7a1.webp"},2568:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/klipper-api-2-8f63b28adc7813934fc850f9aeaf6730.webp"},24932:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/rrf-api-1-46710949cb0083c257ef2d5ca7e6c191.webp"},22775:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/rrf-api-2-acadcc94001e329a5efad508ed2b6134.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return o}});var s=i(75271);let t={},r=s.createContext(t);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);