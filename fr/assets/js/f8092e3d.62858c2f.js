"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["13456"],{3258:function(e,i,t){t.r(i),t.d(i,{metadata:()=>n,contentTitle:()=>d,default:()=>c,assets:()=>l,toc:()=>u,frontMatter:()=>s});var n=JSON.parse('{"id":"DebugDoc/faq/servo-drive","title":"Tutoriel d\'utilisation du moteur externe","description":"Points d\'attention","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/faq/servo-drive.mdx","sourceDirName":"DebugDoc/faq","slug":"/DebugDoc/faq/servo-drive","permalink":"/fly-docs-next/fr/docs/DebugDoc/faq/servo-drive","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/faq/servo-drive.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"Tutoriel d\'utilisation du moteur externe"},"sidebar":"debugdocSidebar","previous":{"title":"Utilisation de l\'acc\xe9l\xe9rom\xe8tre","permalink":"/fly-docs-next/fr/docs/DebugDoc/faq/kipper-adxl"},"next":{"title":"Klipper \u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/fr/docs/category/klipper-\u53C2\u8003\u914D\u7F6E"}}'),r=t("52676"),o=t("79938");let s={sidebar_position:6,sidebar_label:"Tutoriel d'utilisation du moteur externe"},d="Tutoriel d'utilisation du moteur externe",l={},u=[{value:"Points d&#39;attention",id:"points-dattention",level:2},{value:"Connexion du moteur",id:"connexion-du-moteur",level:2},{value:"Sauts de micro-pas du moteur",id:"sauts-de-micro-pas-du-moteur",level:2},{value:"Commutateurs rotatifs int\xe9gr\xe9s au moteur",id:"commutateurs-rotatifs-int\xe9gr\xe9s-au-moteur",level:2},{value:"Configuration de r\xe9f\xe9rence pour Klipper",id:"configuration-de-r\xe9f\xe9rence-pour-klipper",level:2},{value:"Explication des impulsions du moteur",id:"explication-des-impulsions-du-moteur",level:2}];function a(e){let i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,o.a)(),...e.components},{ImageView:n}=i;return!n&&function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"tutoriel-dutilisation-du-moteur-externe",children:"Tutoriel d'utilisation du moteur externe"})}),"\n",(0,r.jsx)(i.h2,{id:"points-dattention",children:"Points d'attention"}),"\n",(0,r.jsx)(i.admonition,{title:"\xc0 savoir",type:"danger",children:(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Ce tutoriel est bas\xe9 sur le contr\xf4le avec Klipper"}),"\n",(0,r.jsx)(i.li,{children:"Le module utilise un c\xe2blage \xe0 anode commune"}),"\n"]})}),"\n",(0,r.jsx)(i.h2,{id:"connexion-du-moteur",children:"Connexion du moteur"}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Les deux m\xe9thodes suivantes ne n\xe9cessitent qu'un seul choix"}),"\n"]})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Premi\xe8re m\xe9thode de connexion","\n",(0,r.jsx)(n,{image:t(89504).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["Deuxi\xe8me m\xe9thode de connexion","\n",(0,r.jsx)(n,{image:t(2011).Z,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"sauts-de-micro-pas-du-moteur",children:"Sauts de micro-pas du moteur"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Pas besoin de jumpers pour le moteur\uFF01\uFF01\uFF01"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"commutateurs-rotatifs-int\xe9gr\xe9s-au-moteur",children:"Commutateurs rotatifs int\xe9gr\xe9s au moteur"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Les commutateurs rotatifs int\xe9gr\xe9s au moteur recommandent d'utiliser ",(0,r.jsx)(i.code,{children:"3200"}),"\n",(0,r.jsx)(n,{image:t(38476).Z,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"configuration-de-r\xe9f\xe9rence-pour-klipper",children:"Configuration de r\xe9f\xe9rence pour Klipper"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Il faut masquer la configuration du moteur correspondant, par exemple ",(0,r.jsx)(i.code,{children:"[tmc5160 stepper_x]"})," ou ",(0,r.jsx)(i.code,{children:"[tmc2209 stepper_x]"})]}),"\n",(0,r.jsxs)(i.li,{children:["D\xe9finir ",(0,r.jsx)(i.code,{children:"microsteps:"})," \xe0 ",(0,r.jsx)(i.code,{children:"16"})]}),"\n",(0,r.jsxs)(i.li,{children:["Ajouter ",(0,r.jsx)(i.code,{children:"step_pulse_duration: 0.000004"})]}),"\n",(0,r.jsxs)(i.li,{children:["Activation du moteur : supprimer le ",(0,r.jsx)(i.code,{children:"!"})," dans ",(0,r.jsx)(i.code,{children:"enable_pin:!"}),"\n",(0,r.jsx)(n,{image:t(86551).Z,size:"50%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"explication-des-impulsions-du-moteur",children:"Explication des impulsions du moteur"}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Si le mod\xe8le imprim\xe9 est d\xe9cal\xe9"}),"\n",(0,r.jsx)(i.li,{children:"Vibration du moteur, bruits \xe9tranges, divers probl\xe8mes bizarres"}),"\n",(0,r.jsxs)(i.li,{children:["Vous pouvez modifier ",(0,r.jsx)(i.code,{children:"step_pulse_duration: 0.000004"})]}),"\n",(0,r.jsxs)(i.li,{children:["Augmenter cette valeur \xe0 ",(0,r.jsx)(i.code,{children:"0.000009"}),", par exemple ",(0,r.jsx)(i.code,{children:"0.00001"})," ou ",(0,r.jsx)(i.code,{children:"0.00002"}),", etc."]}),"\n"]})})]})}function c(e={}){let{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},31349:function(e,i,t){t.r(i),t.d(i,{metadata:()=>n,contentTitle:()=>l,default:()=>p,assets:()=>u,toc:()=>a,frontMatter:()=>d});var n=JSON.parse('{"id":"ProductDoc/MainBoard/fly-d/fly-d7/servo-drive","title":"Tutoriel d\'utilisation du pilote externe","description":"","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-d/fly-d7/servo-drive.mdx","sourceDirName":"ProductDoc/MainBoard/fly-d/fly-d7","slug":"/ProductDoc/MainBoard/fly-d/fly-d7/servo-drive","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-d/fly-d7/servo-drive","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-d/fly-d7/servo-drive.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1737107098000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10,"sidebar_label":"Tutoriel d\'utilisation du pilote externe"},"sidebar":"tutorialSidebar","previous":{"title":"T\xe9l\xe9chargement du firmware Marlin","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-d/fly-d7/malin"},"next":{"title":"Points \xe0 consid\xe9rer pour la carte m\xe8re","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-d/fly-d7/warning"}}'),r=t("52676"),o=t("79938"),s=t("3258");let d={sidebar_position:10,sidebar_label:"Tutoriel d'utilisation du pilote externe"},l="Tutoriel d'utilisation du pilote externe",u={},a=[...s.toc];function c(e){let i={h1:"h1",header:"header",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"tutoriel-dutilisation-du-pilote-externe",children:"Tutoriel d'utilisation du pilote externe"})}),"\n",(0,r.jsx)(s.default,{})]})}function p(e={}){let{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},38476:function(e,i,t){t.d(i,{Z:function(){return n}});let n=t.p+"assets/images/3200-90389335486da9dbe4e6bc7192195ed7.webp"},86551:function(e,i,t){t.d(i,{Z:function(){return n}});let n=t.p+"assets/images/cfg-c846a7c1213c6627f65f79785f7e8b5a.webp"},2011:function(e,i,t){t.d(i,{Z:function(){return n}});let n=t.p+"assets/images/servo-drive-1-923096e333773e70b8548bc877b7a703.webp"},89504:function(e,i,t){t.d(i,{Z:function(){return n}});let n=t.p+"assets/images/servo-drive-b62797ceccb01c160f3ad6c50728b289.webp"},79938:function(e,i,t){t.d(i,{Z:function(){return d},a:function(){return s}});var n=t(75271);let r={},o=n.createContext(r);function s(e){let i=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);