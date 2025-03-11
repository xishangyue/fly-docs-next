"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["50534"],{838:function(e,s,i){i.r(s),i.d(s,{metadata:()=>n,contentTitle:()=>a,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>l});var n=JSON.parse('{"id":"DebugDoc/flyos-fast/index","title":"Pr\xe9sentation du syst\xe8me et t\xe9l\xe9chargement","description":"Pr\xe9sentation","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/flyos-fast/index.mdx","sourceDirName":"DebugDoc/flyos-fast","slug":"/DebugDoc/flyos-fast/","permalink":"/fly-docs-next/fr/docs/DebugDoc/flyos-fast/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/flyos-fast/index.mdx","tags":[],"version":"current","lastUpdatedBy":"kluoyun","lastUpdatedAt":1741655692000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"debugdocSidebar","previous":{"title":"FlyOS-Fast","permalink":"/fly-docs-next/fr/docs/category/flyos-fast"},"next":{"title":"Gravure du syst\xe8me d\'exploitation","permalink":"/fly-docs-next/fr/docs/DebugDoc/flyos-fast/flash"}}'),t=i("52676"),r=i("79938");let l={sidebar_position:1},a="Pr\xe9sentation du syst\xe8me et t\xe9l\xe9chargement",o={},d=[{value:"Pr\xe9sentation",id:"pr\xe9sentation",level:2},{value:"Pr\xe9sentation des noms des fichiers d&#39;image du syst\xe8me",id:"pr\xe9sentation-des-noms-des-fichiers-dimage-du-syst\xe8me",level:2},{value:"T\xe9l\xe9chargement des images du syst\xe8me",id:"t\xe9l\xe9chargement-des-images-du-syst\xe8me",level:2},{value:"Processus de t\xe9l\xe9chargement de l&#39;image du syst\xe8me",id:"processus-de-t\xe9l\xe9chargement-de-limage-du-syst\xe8me",level:2}];function c(e){let s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components},{ImageView:n}=s;return!n&&function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"pr\xe9sentation-du-syst\xe8me-et-t\xe9l\xe9chargement",children:"Pr\xe9sentation du syst\xe8me et t\xe9l\xe9chargement"})}),"\n",(0,t.jsx)(s.h2,{id:"pr\xe9sentation",children:"Pr\xe9sentation"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"FlyOS-Fast est un syst\xe8me Linux all\xe9g\xe9, personnalis\xe9 pour l'impression 3D, compatible avec toutes les plateformes de contr\xf4le Fly."}),"\n",(0,t.jsx)(s.li,{children:"FlyOS-Fast est all\xe9g\xe9 et d\xe9marre rapidement."}),"\n",(0,t.jsx)(s.li,{children:"Le noyau est optimis\xe9 pour garantir la r\xe9activit\xe9 de Klipper."}),"\n",(0,t.jsx)(s.li,{children:"Le syst\xe8me de fichiers est optimis\xe9 pour r\xe9duire le risque d'impossibilit\xe9 de d\xe9marrage en cas de coupure de courant."}),"\n",(0,t.jsx)(s.li,{children:"D\xe9marrage rapide, 30 secondes pour d\xe9marrer Klipperscreen."}),"\n",(0,t.jsx)(s.li,{children:"Pr\xe9install\xe9 avec Klipper, RRF, Mainsail, Fluidd, Moonraker, KlipperScreen, etc."}),"\n",(0,t.jsx)(s.li,{children:"Supporte le passage entre les syst\xe8mes Klipper et RRF."}),"\n",(0,t.jsx)(s.li,{children:"Supporte le passage en ligne entre Mainsail et Fluidd."}),"\n",(0,t.jsx)(s.li,{children:"Supporte l'impression via une cl\xe9 USB."}),"\n",(0,t.jsx)(s.li,{children:"Supporte la reprise d'impression apr\xe8s coupure de courant."}),"\n",(0,t.jsx)(s.li,{children:"Supporte les \xe9crans \xe0 liaison s\xe9rie."}),"\n",(0,t.jsx)(s.li,{children:"Supporte le flashage automatique au d\xe9marrage des firmwares (fly-c8, fly-geminiv3)."}),"\n",(0,t.jsx)(s.li,{children:"Supporte la configuration avanc\xe9e des langues par d\xe9faut et des noms d'imprimantes pour Fluidd, etc."}),"\n",(0,t.jsx)(s.li,{children:"Pour plus de fonctionnalit\xe9s OEM sur mesure : tels que le logo au d\xe9marrage, les fichiers de configuration pr\xe9param\xe9tr\xe9s, la possibilit\xe9 de masquer les onglets Mainsail, etc., veuillez nous contacter."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"pr\xe9sentation-des-noms-des-fichiers-dimage-du-syst\xe8me",children:"Pr\xe9sentation des noms des fichiers d'image du syst\xe8me"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["La r\xe8gle de nommage des fichiers syst\xe8me est : ",(0,t.jsx)(s.code,{children:"FlyOS-Fast-[s\xe9rie de puces]-[num\xe9ro de version].img"}),", par exemple : ",(0,t.jsx)(s.code,{children:"FlyOS-Fast-H5-v1.0.0.img"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Le fichier source est au format ",(0,t.jsx)(s.code,{children:".img"}),", les liens de t\xe9l\xe9chargement ne fournissent que des fichiers compress\xe9s au format ",(0,t.jsx)(s.code,{children:".exe"})," et ",(0,t.jsx)(s.code,{children:".7z"}),", pour faciliter le t\xe9l\xe9chargement."]}),"\n",(0,t.jsxs)(s.li,{children:["Pour les syst\xe8mes Windows, t\xe9l\xe9chargez le fichier ",(0,t.jsx)(s.code,{children:".exe"}),", qui est un fichier de compression 7z auto-extractible. Une fois le t\xe9l\xe9chargement termin\xe9, double-cliquez dessus pour extraire le fichier ",(0,t.jsx)(s.code,{children:".img"})," (seul le syst\xe8me Windows peut extraire ce fichier)."]}),"\n",(0,t.jsxs)(s.li,{children:["Pour les autres syst\xe8mes comme MacOS et Linux, t\xe9l\xe9chargez le fichier ",(0,t.jsx)(s.code,{children:".7z"}),", qui est un fichier de compression 7z. Une fois le t\xe9l\xe9chargement termin\xe9, utilisez un outil compatible avec le format 7z pour extraire le fichier ",(0,t.jsx)(s.code,{children:".img"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"En raison de la taille importante des fichiers syst\xe8me, d'autres formats de compression et le t\xe9l\xe9chargement de l'image source sont temporairement indisponibles."}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{title:"S\xe9lection du syst\xe8me",type:"tip",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Les s\xe9ries fly-pi, fly-c8, fly-gemini, etc., tous les produits Fly utilisant le puces H5, choisissez ",(0,t.jsx)(s.code,{children:"FlyOS-Fast-H5.exe"})," ou ",(0,t.jsx)(s.code,{children:"FlyOS-Fast-H5.7z"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Les s\xe9ries fly-pi-lite2, fly-miniPad, etc., tous les produits Fly utilisant le puces H3, choisissez ",(0,t.jsx)(s.code,{children:"FlyOS-Fast-H3.exe"})," ou ",(0,t.jsx)(s.code,{children:"FlyOS-Fast-H3.7z"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"Les mod\xe8les de puces \xe9tant diff\xe9rents, les fichiers syst\xe8me sont \xe9galement diff\xe9rents, veuillez choisir en fonction de vos besoins r\xe9els."}),"\n"]})}),"\n",(0,t.jsx)(s.h2,{id:"t\xe9l\xe9chargement-des-images-du-syst\xe8me",children:"T\xe9l\xe9chargement des images du syst\xe8me"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["L'adresse officielle de t\xe9l\xe9chargement de FlyOS-Fast : ",(0,t.jsx)(s.a,{href:"https://g-ofpa1390.coding.net/public-artifacts/3D-Printers/flyos-fast/packages",children:"FlyOS-Fast d\xe9p\xf4t d'artefacts"})]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Nom d'utilisateur par d\xe9faut : ",(0,t.jsx)(s.code,{children:"root"})]}),"\n",(0,t.jsxs)(s.li,{children:["Mot de passe par d\xe9faut : ",(0,t.jsx)(s.code,{children:"mellow"})]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{title:"\xc0 noter",type:"tip",children:(0,t.jsx)(s.p,{children:"Ce syst\xe8me est un syst\xe8me personnalis\xe9 all\xe9g\xe9, les composants et services int\xe9gr\xe9s comme Klipper ne sont pas des versions officielles et ne supportent pas la modification ou la mise \xe0 jour par l'utilisateur."})}),"\n",(0,t.jsx)(s.h2,{id:"processus-de-t\xe9l\xe9chargement-de-limage-du-syst\xe8me",children:"Processus de t\xe9l\xe9chargement de l'image du syst\xe8me"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Processus de t\xe9l\xe9chargement de l'image FlyOS-Fast :"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Acc\xe9dez au d\xe9p\xf4t d'artefacts FlyOS-Fast dans votre navigateur web."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Choisissez le format de compression souhait\xe9, puis cliquez pour acc\xe9der \xe0 la page du fichier."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n,{image:i(45350).Z,size:"50%",align:"center"}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsx)(s.li,{children:"Choisissez la version (version par d\xe9faut : la derni\xe8re)."}),"\n"]}),"\n",(0,t.jsx)(n,{image:i(53999).Z,size:"50%",align:"center"}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsxs)(s.li,{children:["Si vous ne voyez pas le bouton de t\xe9l\xe9chargement, placez la souris dans la liste de fichiers, appuyez sur la touche ",(0,t.jsx)(s.code,{children:"Shift"})," et roulez la molette de la souris pour faire d\xe9filer la liste de fichiers horizontalement."]}),"\n",(0,t.jsx)(s.li,{children:"Vous pouvez \xe9galement placer la souris sur la barre de d\xe9filement en bas, maintenez le bouton gauche de la souris enfonc\xe9 et faites glisser vers la droite pour voir le bouton de t\xe9l\xe9chargement."}),"\n"]}),"\n",(0,t.jsx)(n,{image:i(38301).Z,size:"50%",align:"center"}),"\n",(0,t.jsxs)(s.ol,{start:"6",children:["\n",(0,t.jsx)(s.li,{children:"Cliquez sur le bouton de t\xe9l\xe9chargement pour obtenir le fichier d'image du syst\xe8me correspondant."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},45350:function(e,s,i){i.d(s,{Z:function(){return n}});let n=i.p+"assets/images/down1-5da91de85b264aeae0b11e12b76b5bba.webp"},53999:function(e,s,i){i.d(s,{Z:function(){return n}});let n=i.p+"assets/images/down2-c9710e34ae3a2a13fbaf80a060c8d598.webp"},38301:function(e,s,i){i.d(s,{Z:function(){return n}});let n=i.p+"assets/images/down3-9d3b3c945ac567f8226a8935c5dfea4a.webp"},79938:function(e,s,i){i.d(s,{Z:function(){return a},a:function(){return l}});var n=i(75271);let t={},r=n.createContext(t);function l(e){let s=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);