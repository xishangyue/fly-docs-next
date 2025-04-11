"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["37697"],{15452:function(e,i,n){n.r(i),n.d(i,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"DebugDoc/BasicTutorial/backup","title":"M\xe9thodes de configuration de sauvegarde","description":"* Ce tutoriel s\'applique aux FLY-Pi, Raspberry Pi, Orange Pi et autres ordinateurs sup\xe9rieurs.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/BasicTutorial/backup.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/backup","permalink":"/fly-docs-next/fr/docs/DebugDoc/BasicTutorial/backup","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/backup.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"M\xe9thodes de configuration de sauvegarde de syst\xe8me"},"sidebar":"debugdocSidebar","previous":{"title":"Modification de la zone horaire du syst\xe8me","permalink":"/fly-docs-next/fr/docs/DebugDoc/BasicTutorial/timedatectl"},"next":{"title":"Ajout d\'une cam\xe9ra USB","permalink":"/fly-docs-next/fr/docs/DebugDoc/BasicTutorial/camera"}}'),s=n("85893"),t=n("50065");let o={sidebar_position:5,sidebar_label:"M\xe9thodes de configuration de sauvegarde de syst\xe8me"},a="M\xe9thodes de configuration de sauvegarde",l={},c=[{value:"T\xe9l\xe9chargement du logiciel n\xe9cessaire",id:"t\xe9l\xe9chargement-du-logiciel-n\xe9cessaire",level:2},{value:"D\xe9marrage de la sauvegarde",id:"d\xe9marrage-de-la-sauvegarde",level:2},{value:"Connexion",id:"connexion",level:3},{value:"Recherche",id:"recherche",level:3},{value:"Exportation des configurations",id:"exportation-des-configurations",level:3}];function d(e){let i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ul:"ul",...(0,t.a)(),...e.components},{Button:r,ImageView:o}=i;return r||p("Button",!0),o||p("ImageView",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"m\xe9thodes-de-configuration-de-sauvegarde",children:"M\xe9thodes de configuration de sauvegarde"})}),"\n",(0,s.jsx)(i.admonition,{title:"\xc0 savoir",type:"danger",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Ce tutoriel s'applique aux FLY-Pi, Raspberry Pi, Orange Pi et autres ordinateurs sup\xe9rieurs."}),"\n",(0,s.jsx)(i.li,{children:"Si vous utilisez EMMC, vous devez pouvoir entrer en mode de gravure, sinon ce tutoriel ne s'applique pas."}),"\n",(0,s.jsx)(i.li,{children:"Ce tutoriel est bas\xe9 sur des op\xe9rations sous le syst\xe8me Windows, veuillez ne pas formater les disques inconnus, etc.!!!"}),"\n",(0,s.jsx)(i.li,{children:"Ne formatez PAS !!! Ne formatez PAS !!! Ne formatez PAS !!!"}),"\n"]})}),"\n",(0,s.jsx)(i.h2,{id:"t\xe9l\xe9chargement-du-logiciel-n\xe9cessaire",children:"T\xe9l\xe9chargement du logiciel n\xe9cessaire"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Cliquez pour acc\xe9der au t\xe9l\xe9chargement, la page web vous indiquera la version appropri\xe9e pour votre ordinateur."}),"\n",(0,s.jsx)(i.li,{children:"Le logiciel est une version portable, pas besoin de l'installer, d\xe9compressez-le apr\xe8s le t\xe9l\xe9chargement pour l'utiliser."}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(r,{variant:"contained",disableElevation:!0,href:"https://www.diskgenius.cn/download.php",children:"Outils de disque DG"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"d\xe9marrage-de-la-sauvegarde",children:"D\xe9marrage de la sauvegarde"}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Ne formatez PAS !!!"}),"\n",(0,s.jsx)(i.li,{children:"Apr\xe8s la formatage, il sera impossible de r\xe9cup\xe9rer !!!"}),"\n",(0,s.jsx)(i.li,{children:"Si c'est une carte TF, branchez-la directement sur l'ordinateur."}),"\n",(0,s.jsx)(i.li,{children:"Si c'est un EMMC, vous devez entrer manuellement en mode de gravure !!!"}),"\n"]})}),"\n",(0,s.jsx)(i.h3,{id:"connexion",children:"Connexion"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Branchez le syst\xe8me \xe0 sauvegarder sur l'ordinateur."}),"\n",(0,s.jsxs)(i.li,{children:["Ouvrez ",(0,s.jsx)(i.code,{children:"DiskGenius.exe"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["S'il est normal, il affichera le disque que vous devez sauvegarder.","\n",(0,s.jsx)(o,{image:n(36678).Z,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"recherche",children:"Recherche"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Cliquez sur la partition principale \xe0 gauche, puis cliquez sur Parcourir les fichiers en haut, cela affichera enfin les fichiers ci-dessous.","\n",(0,s.jsx)(o,{image:n(37845).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Trouvez ",(0,s.jsx)(i.code,{children:"home"})," et double-cliquez pour y entrer."]}),"\n",(0,s.jsx)(i.li,{children:"Une fois entr\xe9, il y a g\xe9n\xe9ralement qu'un seul dossier, et son nom est celui de votre utilisateur syst\xe8me."}),"\n",(0,s.jsx)(i.li,{children:"Si deux ou plus, vous devez d\xe9terminer par vous-m\xeame lequel contient vos configurations syst\xe8me."}),"\n",(0,s.jsx)(i.li,{children:"Double-cliquez ensuite pour y entrer."}),"\n",(0,s.jsxs)(i.li,{children:["Cherchez ",(0,s.jsx)(i.code,{children:"printer_data"}),".","\n",(0,s.jsx)(o,{image:n(71008).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Le dossier ",(0,s.jsx)(i.code,{children:"printer_data"})," contient vos fichiers d'impression, les configurations Klipper, les journaux Klipper, etc., ils peuvent \xeatre export\xe9s directement."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"exportation-des-configurations",children:"Exportation des configurations"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Cliquez avec le bouton droit sur ",(0,s.jsx)(i.code,{children:"printer_data"}),", un message appara\xeetra ci-dessous.","\n",(0,s.jsx)(o,{image:n(36979).Z,size:"40%",align:"center"}),"\n"]}),"\n",(0,s.jsx)(i.li,{children:"S\xe9lectionnez le r\xe9pertoire o\xf9 vous souhaitez enregistrer ou exportez directement."}),"\n",(0,s.jsxs)(i.li,{children:["Confirmez l'exportation.","\n",(0,s.jsx)(o,{image:n(2482).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Ouvrez le fichier export\xe9 et trouvez ",(0,s.jsx)(i.code,{children:"config"}),", qui contient vos configurations syst\xe8me.","\n",(0,s.jsx)(o,{image:n(25461).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,s.jsx)(i.li,{children:"L'exportation des configurations est termin\xe9e."}),"\n",(0,s.jsxs)(i.li,{children:["Veuillez noter que le fichier ",(0,s.jsx)(i.code,{children:"moonraker"})," ne doit pas \xeatre t\xe9l\xe9charg\xe9 sur d'autres syst\xe8mes, car cela peut entra\xeener une impossibilit\xe9 de connexion de Klipper en raison de diff\xe9rences de syst\xe8me."]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function p(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},36678:function(e,i,n){n.d(i,{Z:function(){return r}});let r=n.p+"assets/images/boot-7ec50b8bc5c705870f716f79248a5edc.webp"},36979:function(e,i,n){n.d(i,{Z:function(){return r}});let r=n.p+"assets/images/export-98c303323d22147200f8d09586edf2b4.webp"},2482:function(e,i,n){n.d(i,{Z:function(){return r}});let r=n.p+"assets/images/export1-879433ba32ce8527eb4f8f47eb6ffdcc.webp"},25461:function(e,i,n){n.d(i,{Z:function(){return r}});let r=n.p+"assets/images/export2-8c4c5d8a2748b23dfb632b4269bf6dd8.webp"},37845:function(e,i,n){n.d(i,{Z:function(){return r}});let r=n.p+"assets/images/home-73c298bb7f8c9a6dff07237c04ad07bd.webp"},71008:function(e,i,n){n.d(i,{Z:function(){return r}});let r=n.p+"assets/images/printer-data-64893972c536b18e6ec1a0554fe8ea10.webp"},50065:function(e,i,n){n.d(i,{Z:function(){return a},a:function(){return o}});var r=n(67294);let s={},t=r.createContext(s);function o(e){let i=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);