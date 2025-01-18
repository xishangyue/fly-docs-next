"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["83704"],{3258:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>d,default:()=>a,assets:()=>l,toc:()=>u,frontMatter:()=>s});var n=JSON.parse('{"id":"DebugDoc/faq/servo-drive","title":"Tutoriel d\'utilisation du moteur externe","description":"Points d\'attention","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/faq/servo-drive.mdx","sourceDirName":"DebugDoc/faq","slug":"/DebugDoc/faq/servo-drive","permalink":"/fly-docs-next/fr/docs/DebugDoc/faq/servo-drive","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/faq/servo-drive.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"Tutoriel d\'utilisation du moteur externe"},"sidebar":"debugdocSidebar","previous":{"title":"Utilisation de l\'acc\xe9l\xe9rom\xe8tre","permalink":"/fly-docs-next/fr/docs/DebugDoc/faq/kipper-adxl"},"next":{"title":"Klipper \u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/fr/docs/category/klipper-\u53C2\u8003\u914D\u7F6E"}}'),r=i("52676"),o=i("79938");let s={sidebar_position:6,sidebar_label:"Tutoriel d'utilisation du moteur externe"},d="Tutoriel d'utilisation du moteur externe",l={},u=[{value:"Points d&#39;attention",id:"points-dattention",level:2},{value:"Connexion du moteur",id:"connexion-du-moteur",level:2},{value:"Sauts de micro-pas du moteur",id:"sauts-de-micro-pas-du-moteur",level:2},{value:"Commutateurs rotatifs int\xe9gr\xe9s au moteur",id:"commutateurs-rotatifs-int\xe9gr\xe9s-au-moteur",level:2},{value:"Configuration de r\xe9f\xe9rence pour Klipper",id:"configuration-de-r\xe9f\xe9rence-pour-klipper",level:2},{value:"Explication des impulsions du moteur",id:"explication-des-impulsions-du-moteur",level:2}];function c(e){let t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,o.a)(),...e.components},{ImageView:n}=t;return!n&&function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"tutoriel-dutilisation-du-moteur-externe",children:"Tutoriel d'utilisation du moteur externe"})}),"\n",(0,r.jsx)(t.h2,{id:"points-dattention",children:"Points d'attention"}),"\n",(0,r.jsx)(t.admonition,{title:"\xc0 savoir",type:"danger",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Ce tutoriel est bas\xe9 sur le contr\xf4le avec Klipper"}),"\n",(0,r.jsx)(t.li,{children:"Le module utilise un c\xe2blage \xe0 anode commune"}),"\n"]})}),"\n",(0,r.jsx)(t.h2,{id:"connexion-du-moteur",children:"Connexion du moteur"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Les deux m\xe9thodes suivantes ne n\xe9cessitent qu'un seul choix"}),"\n"]})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Premi\xe8re m\xe9thode de connexion","\n",(0,r.jsx)(n,{image:i(89504).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Deuxi\xe8me m\xe9thode de connexion","\n",(0,r.jsx)(n,{image:i(2011).Z,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"sauts-de-micro-pas-du-moteur",children:"Sauts de micro-pas du moteur"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Pas besoin de jumpers pour le moteur\uFF01\uFF01\uFF01"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"commutateurs-rotatifs-int\xe9gr\xe9s-au-moteur",children:"Commutateurs rotatifs int\xe9gr\xe9s au moteur"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Les commutateurs rotatifs int\xe9gr\xe9s au moteur recommandent d'utiliser ",(0,r.jsx)(t.code,{children:"3200"}),"\n",(0,r.jsx)(n,{image:i(38476).Z,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"configuration-de-r\xe9f\xe9rence-pour-klipper",children:"Configuration de r\xe9f\xe9rence pour Klipper"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Il faut masquer la configuration du moteur correspondant, par exemple ",(0,r.jsx)(t.code,{children:"[tmc5160 stepper_x]"})," ou ",(0,r.jsx)(t.code,{children:"[tmc2209 stepper_x]"})]}),"\n",(0,r.jsxs)(t.li,{children:["D\xe9finir ",(0,r.jsx)(t.code,{children:"microsteps:"})," \xe0 ",(0,r.jsx)(t.code,{children:"16"})]}),"\n",(0,r.jsxs)(t.li,{children:["Ajouter ",(0,r.jsx)(t.code,{children:"step_pulse_duration: 0.000004"})]}),"\n",(0,r.jsxs)(t.li,{children:["Activation du moteur : supprimer le ",(0,r.jsx)(t.code,{children:"!"})," dans ",(0,r.jsx)(t.code,{children:"enable_pin:!"}),"\n",(0,r.jsx)(n,{image:i(86551).Z,size:"50%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"explication-des-impulsions-du-moteur",children:"Explication des impulsions du moteur"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Si le mod\xe8le imprim\xe9 est d\xe9cal\xe9"}),"\n",(0,r.jsx)(t.li,{children:"Vibration du moteur, bruits \xe9tranges, divers probl\xe8mes bizarres"}),"\n",(0,r.jsxs)(t.li,{children:["Vous pouvez modifier ",(0,r.jsx)(t.code,{children:"step_pulse_duration: 0.000004"})]}),"\n",(0,r.jsxs)(t.li,{children:["Augmenter cette valeur \xe0 ",(0,r.jsx)(t.code,{children:"0.000009"}),", par exemple ",(0,r.jsx)(t.code,{children:"0.00001"})," ou ",(0,r.jsx)(t.code,{children:"0.00002"}),", etc."]}),"\n"]})})]})}function a(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},39672:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>l,default:()=>p,assets:()=>u,toc:()=>c,frontMatter:()=>d});var n=JSON.parse('{"id":"ProductDoc/MainBoard/fly-e3/fly-e3-v2/servo-drive","title":"Tutoriel d\'utilisation du pilote externe","description":"","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-e3/fly-e3-v2/servo-drive.mdx","sourceDirName":"ProductDoc/MainBoard/fly-e3/fly-e3-v2","slug":"/ProductDoc/MainBoard/fly-e3/fly-e3-v2/servo-drive","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-e3/fly-e3-v2/servo-drive","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-e3/fly-e3-v2/servo-drive.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1737107098000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10,"sidebar_label":"Tutoriel d\'utilisation du pilote externe"},"sidebar":"tutorialSidebar","previous":{"title":"Mod\xe8le 3D et sch\xe9ma","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-e3/fly-e3-v2/schematic"},"next":{"title":"FLY-CDY \u7CFB\u5217\u4E3B\u677F","permalink":"/fly-docs-next/fr/docs/category/fly-cdy-\u7CFB\u5217\u4E3B\u677F"}}'),r=i("52676"),o=i("79938"),s=i("3258");let d={sidebar_position:10,sidebar_label:"Tutoriel d'utilisation du pilote externe"},l="Tutoriel d'utilisation du pilote externe",u={},c=[...s.toc];function a(e){let t={h1:"h1",header:"header",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"tutoriel-dutilisation-du-pilote-externe",children:"Tutoriel d'utilisation du pilote externe"})}),"\n",(0,r.jsx)(s.default,{})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},38476:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/3200-90389335486da9dbe4e6bc7192195ed7.webp"},86551:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/cfg-c846a7c1213c6627f65f79785f7e8b5a.webp"},2011:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/servo-drive-1-923096e333773e70b8548bc877b7a703.webp"},89504:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/servo-drive-b62797ceccb01c160f3ad6c50728b289.webp"},79938:function(e,t,i){i.d(t,{Z:function(){return d},a:function(){return s}});var n=i(75271);let r={},o=n.createContext(r);function s(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);