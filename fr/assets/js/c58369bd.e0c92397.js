"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["57965"],{7386:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>u,assets:()=>l,toc:()=>o,frontMatter:()=>t});var r=JSON.parse('{"id":"DebugDoc/BasicTutorial/camera","title":"Ajout d\'une cam\xe9ra USB","description":"* Il est n\xe9cessaire d\'avoir install\xe9 le service crowsnest, comme pour les syst\xe8mes lite2 et mini pad qui ne l\'ont pas install\xe9.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/BasicTutorial/camera.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/camera","permalink":"/fly-docs-next/fr/docs/DebugDoc/BasicTutorial/camera","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/camera.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"Ajout d\'une cam\xe9ra USB"},"sidebar":"debugdocSidebar","previous":{"title":"M\xe9thodes de configuration de sauvegarde de syst\xe8me","permalink":"/fly-docs-next/fr/docs/DebugDoc/BasicTutorial/backup"},"next":{"title":"Fonctionnalit\xe9s \xe9tendues de KlipperScreen","permalink":"/fly-docs-next/fr/docs/DebugDoc/BasicTutorial/klipperscreen"}}'),s=i("52676"),a=i("79938");let t={sidebar_position:6,sidebar_label:"Ajout d'une cam\xe9ra USB"},c="Ajout d'une cam\xe9ra USB",l={},o=[{value:"Ouvrir la configuration",id:"ouvrir-la-configuration",level:2},{value:"Rechercher l&#39;ID de la cam\xe9ra",id:"rechercher-lid-de-la-cam\xe9ra",level:2},{value:"Ajouter l&#39;ID",id:"ajouter-lid",level:2},{value:"Activer la cam\xe9ra",id:"activer-la-cam\xe9ra",level:2},{value:"V\xe9rifier si la cam\xe9ra est activ\xe9e",id:"v\xe9rifier-si-la-cam\xe9ra-est-activ\xe9e",level:2}];function d(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components},{ImageView:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ajout-dune-cam\xe9ra-usb",children:"Ajout d'une cam\xe9ra USB"})}),"\n",(0,s.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Il est n\xe9cessaire d'avoir install\xe9 le service ",(0,s.jsx)(n.code,{children:"crowsnest"}),", comme pour les syst\xe8mes lite2 et mini pad qui ne l'ont pas install\xe9."]}),"\n",(0,s.jsx)(n.li,{children:"Une webcam sans pilote, plug and play, est n\xe9cessaire. Elles sont compatibles avec les syst\xe8mes linux, armbian, etc., sous klipper, sans avoir besoin d'installer de pilotes suppl\xe9mentaires."}),"\n",(0,s.jsx)(n.li,{children:"Ce tutoriel utilise la derni\xe8re version de klipper, crowsnest et fuidd en exemple. Si vous utilisez une autre m\xe9thode, vous devrez faire vos propres recherches."}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"ouvrir-la-configuration",children:"Ouvrir la configuration"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"L'ID de la cam\xe9ra varie selon les syst\xe8mes, nous avons juste besoin de d\xe9terminer un ID qui ne change pas."}),"\n"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Dans Fuidd, trouvez le fichier de configuration, puis ouvrez ",(0,s.jsx)(n.code,{children:"crowsnest.conf"})]}),"\n",(0,s.jsx)(r,{image:i(85537).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Trouvez ",(0,s.jsx)(n.code,{children:"device: "})," et supprimez l'ID configur\xe9 apr\xe8s"]}),"\n",(0,s.jsx)(r,{image:i(98264).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"rechercher-lid-de-la-cam\xe9ra",children:"Rechercher l'ID de la cam\xe9ra"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Assurez-vous que la cam\xe9ra est branch\xe9e sur l'ordinateur."}),"\n"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cliquez sur ",(0,s.jsx)(n.code,{children:"DEVICES"})," en haut, puis cliquez sur ",(0,s.jsx)(n.code,{children:"VIDEO"})," et enfin rechargez.","\n",(0,s.jsx)(r,{image:i(46377).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Cherchez ",(0,s.jsx)(n.code,{children:"path_by_id"})," et copiez la ligne suivante.","\n",(0,s.jsx)(r,{image:i(80597).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ajouter-lid",children:"Ajouter l'ID"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ajoutez l'ID et enregistrez la configuration.","\n",(0,s.jsx)(r,{image:i(95743).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"activer-la-cam\xe9ra",children:"Activer la cam\xe9ra"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cliquez sur les param\xe8tres, choisissez la cam\xe9ra, puis cliquez sur ajouter la cam\xe9ra.","\n",(0,s.jsx)(r,{image:i(6171).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Entrez le nom que vous souhaitez et cliquez sur enregistrer.","\n",(0,s.jsx)(r,{image:i(19326).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"v\xe9rifier-si-la-cam\xe9ra-est-activ\xe9e",children:"V\xe9rifier si la cam\xe9ra est activ\xe9e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cliquez sur le tableau de bord, la vid\xe9o de la cam\xe9ra doit appara\xeetre normalement.","\n",(0,s.jsx)(r,{image:i(40588).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Si ce n'est pas le cas, red\xe9marrez le syst\xe8me."}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},85537:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/conf-ed62c5d3c67d6ffa7049b607c5487114.webp"},98264:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/conf1-ebd689792e54725448656b348ab9f2c7.webp"},46377:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/conf2-f212fcb81ae24b4d126e7c45791f38f8.webp"},80597:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/conf3-f80f6b4227ef850143a177b7bf27e2e4.webp"},95743:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/conf4-b4bcb990e096b504ede0c708d951cb3f.webp"},6171:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/conf5-625f49f11a5b7d93a819ae7c4b7c245b.webp"},19326:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/conf6-0a166fa0bc6535d25156fc8153cdde4b.webp"},40588:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/conf7-2388d1ccd426a8ec34234afc6afbec06.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return t}});var r=i(75271);let s={},a=r.createContext(s);function t(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);