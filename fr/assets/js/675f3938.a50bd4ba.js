"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["6577"],{3258:function(e,i,n){n.r(i),n.d(i,{metadata:()=>t,contentTitle:()=>d,default:()=>u,assets:()=>l,toc:()=>a,frontMatter:()=>o});var t=JSON.parse('{"id":"DebugDoc/faq/servo-drive","title":"Tutoriel d\'utilisation des pilotes externes","description":"Remarques importantes","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/faq/servo-drive.mdx","sourceDirName":"DebugDoc/faq","slug":"/DebugDoc/faq/servo-drive","permalink":"/fly-docs-next/fr/docs/DebugDoc/faq/servo-drive","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/faq/servo-drive.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"Tutoriel d\'utilisation des pilotes externes"},"sidebar":"debugdocSidebar","previous":{"title":"Erreurs li\xe9es au TMC","permalink":"/fly-docs-next/fr/docs/DebugDoc/faq/tmc"},"next":{"title":"kipper-adxl","permalink":"/fly-docs-next/fr/docs/DebugDoc/faq/kipper-adxl"}}'),r=n("52676"),s=n("79938");let o={sidebar_position:6,sidebar_label:"Tutoriel d'utilisation des pilotes externes"},d="Tutoriel d'utilisation des pilotes externes",l={},a=[{value:"Remarques importantes",id:"remarques-importantes",level:2},{value:"Branchement du pilote",id:"branchement-du-pilote",level:2},{value:"Sauter les r\xe9glages de subdivision du pilote",id:"sauter-les-r\xe9glages-de-subdivision-du-pilote",level:2},{value:"Codeur int\xe9gr\xe9 au pilote",id:"codeur-int\xe9gr\xe9-au-pilote",level:2},{value:"Configuration de r\xe9f\xe9rence Klipper",id:"configuration-de-r\xe9f\xe9rence-klipper",level:2},{value:"Explication des impulsions du pilote",id:"explication-des-impulsions-du-pilote",level:2}];function c(e){let i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,s.a)(),...e.components},{ImageView:t}=i;return!t&&function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"tutoriel-dutilisation-des-pilotes-externes",children:"Tutoriel d'utilisation des pilotes externes"})}),"\n",(0,r.jsx)(i.h2,{id:"remarques-importantes",children:"Remarques importantes"}),"\n",(0,r.jsx)(i.admonition,{title:"\xc0 savoir",type:"danger",children:(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Ce tutoriel est bas\xe9 sur Klipper pour le contr\xf4le"}),"\n",(0,r.jsx)(i.li,{children:"Le module utilise une connexion en anode commune"}),"\n"]})}),"\n",(0,r.jsx)(i.h2,{id:"branchement-du-pilote",children:"Branchement du pilote"}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Il suffit de choisir l'une des deux m\xe9thodes suivantes"}),"\n"]})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Premi\xe8re m\xe9thode de branchement","\n",(0,r.jsx)(t,{image:n(89504).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["Deuxi\xe8me m\xe9thode de branchement","\n",(0,r.jsx)(t,{image:n(2011).Z,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"sauter-les-r\xe9glages-de-subdivision-du-pilote",children:"Sauter les r\xe9glages de subdivision du pilote"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Aucun saut de pilote n'est n\xe9cessaire !!!"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"codeur-int\xe9gr\xe9-au-pilote",children:"Codeur int\xe9gr\xe9 au pilote"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Il est conseill\xe9 d'utiliser ",(0,r.jsx)(i.code,{children:"3200"})," pour le codeur int\xe9gr\xe9 au pilote","\n",(0,r.jsx)(t,{image:n(38476).Z,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"configuration-de-r\xe9f\xe9rence-klipper",children:"Configuration de r\xe9f\xe9rence Klipper"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Il faut masquer la configuration du pilote correspondant, par exemple ",(0,r.jsx)(i.code,{children:"[tmc5160 stepper_x] "}),"ou",(0,r.jsx)(i.code,{children:"[tmc2209 stepper_x] "})]}),"\n",(0,r.jsxs)(i.li,{children:["D\xe9finir ",(0,r.jsx)(i.code,{children:"microsteps:"})," \xe0 ",(0,r.jsx)(i.code,{children:"16"})]}),"\n",(0,r.jsxs)(i.li,{children:["Ajouter ",(0,r.jsx)(i.code,{children:"step_pulse_duration: 0.000004"})]}),"\n",(0,r.jsxs)(i.li,{children:["Activation du moteur : supprimer le ",(0,r.jsx)(i.code,{children:"!"})," dans ",(0,r.jsx)(i.code,{children:"enable_pin:!"}),"\n",(0,r.jsx)(t,{image:n(86551).Z,size:"50%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"explication-des-impulsions-du-pilote",children:"Explication des impulsions du pilote"}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Apparition d'un d\xe9calage lors de l'impression du mod\xe8le"}),"\n",(0,r.jsx)(i.li,{children:"Vibration du moteur, bruits inhabituels, divers probl\xe8mes \xe9tranges"}),"\n",(0,r.jsxs)(i.li,{children:["Modifier ",(0,r.jsx)(i.code,{children:"step_pulse_duration: 0.000004"})]}),"\n",(0,r.jsxs)(i.li,{children:["Augmenter cette valeur \xe0 ",(0,r.jsx)(i.code,{children:"0.000009"}),", par exemple ",(0,r.jsx)(i.code,{children:"0.00001"})," ou ",(0,r.jsx)(i.code,{children:"0.00002"})," etc."]}),"\n"]})})]})}function u(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},18369:function(e,i,n){n.r(i),n.d(i,{metadata:()=>t,contentTitle:()=>l,default:()=>p,assets:()=>a,toc:()=>c,frontMatter:()=>d});var t=JSON.parse('{"id":"ProductDoc/MainBoard/fly-e3/fly-e3-pro/servo-drive","title":"Guide d\'utilisation des pilotes externes","description":"","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-e3/fly-e3-pro/servo-drive.mdx","sourceDirName":"ProductDoc/MainBoard/fly-e3/fly-e3-pro","slug":"/ProductDoc/MainBoard/fly-e3/fly-e3-pro/servo-drive","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-e3/fly-e3-pro/servo-drive","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-e3/fly-e3-pro/servo-drive.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10,"sidebar_label":"Guide d\'utilisation des pilotes externes"},"sidebar":"tutorialSidebar","previous":{"title":"Mod\xe8les 3D et sch\xe9mas","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-e3/fly-e3-pro/schematic"},"next":{"title":"FLY-E3 v2","permalink":"/fly-docs-next/fr/docs/category/fly-e3-v2"}}'),r=n("52676"),s=n("79938"),o=n("3258");let d={sidebar_position:10,sidebar_label:"Guide d'utilisation des pilotes externes"},l="Guide d'utilisation des pilotes externes",a={},c=[...o.toc];function u(e){let i={h1:"h1",header:"header",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"guide-dutilisation-des-pilotes-externes",children:"Guide d'utilisation des pilotes externes"})}),"\n",(0,r.jsx)(o.default,{})]})}function p(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},38476:function(e,i,n){n.d(i,{Z:function(){return t}});let t=n.p+"assets/images/3200-90389335486da9dbe4e6bc7192195ed7.webp"},86551:function(e,i,n){n.d(i,{Z:function(){return t}});let t=n.p+"assets/images/cfg-c846a7c1213c6627f65f79785f7e8b5a.webp"},2011:function(e,i,n){n.d(i,{Z:function(){return t}});let t=n.p+"assets/images/servo-drive-1-923096e333773e70b8548bc877b7a703.webp"},89504:function(e,i,n){n.d(i,{Z:function(){return t}});let t=n.p+"assets/images/servo-drive-b62797ceccb01c160f3ad6c50728b289.webp"},79938:function(e,i,n){n.d(i,{Z:function(){return d},a:function(){return o}});var t=n(75271);let r={},s=t.createContext(r);function o(e){let i=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);