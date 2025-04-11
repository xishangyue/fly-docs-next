"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["53199"],{19717:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>o,assets:()=>a,toc:()=>s,contentTitle:()=>c});var o=JSON.parse('{"id":"ProductDoc/ExtensionBoard/fly-mdm/rrf","title":"Configuration de RRF","description":"Configuration des fonctions de rupture et de bouchage de filament","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/fly-mdm/rrf.mdx","sourceDirName":"ProductDoc/ExtensionBoard/fly-mdm","slug":"/ProductDoc/ExtensionBoard/fly-mdm/rrf","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-mdm/rrf","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/fly-mdm/rrf.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1744193150000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"Configuration de RRF"},"sidebar":"tutorialSidebar","previous":{"title":"Configuration de Klipper","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-mdm/klipper"},"next":{"title":"Configuration Marlin","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-mdm/marlin"}}'),r=t("85893"),i=t("50065");let d={sidebar_position:6,sidebar_label:"Configuration de RRF"},c="Configuration de RRF",a={},s=[{value:"Configuration des fonctions de rupture et de bouchage de filament",id:"configuration-des-fonctions-de-rupture-et-de-bouchage-de-filament",level:2}];function l(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",pre:"pre",...(0,i.a)(),...e.components},{ImageView:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"configuration-de-rrf",children:"Configuration de RRF"})}),"\n",(0,r.jsx)(n.h2,{id:"configuration-des-fonctions-de-rupture-et-de-bouchage-de-filament",children:"Configuration des fonctions de rupture et de bouchage de filament"}),"\n",(0,r.jsx)(o,{image:t(3766).Z,size:"70%",align:"center"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Ouvrez l'interface web de l'imprimante RRF, acc\xe9dez \xe0 ",(0,r.jsx)(n.code,{children:"Fichiers"})," -> ",(0,r.jsx)(n.code,{children:"Syst\xe8me"}),", trouvez le fichier ",(0,r.jsx)(n.code,{children:"config.g"}),", puis cliquez pour l'ouvrir et l'\xe9diter."]}),"\n",(0,r.jsx)(n.li,{children:"Ajoutez le code suivant dans le fichier pour activer la fonction de d\xe9tection de rupture de filament."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gcode",children:'M591 D0 P2 C"PA9" S1\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Ajoutez le code suivant dans le fichier pour activer la fonction de d\xe9tection de bouchage de filament. (Le param\xe8tre ",(0,r.jsx)(n.code,{children:"L"})," varie en fonction du disque codeur utilis\xe9 ; si une activation erron\xe9e se produit, augmentez cette valeur.)"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gcode",children:'M591 D0 P7 C"PA10" L3.5 R75:125 S1\n'})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},3766:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/rrf-00bd47cb9c38c35486b6b6ba7aae2dfe.webp"},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return d}});var o=t(67294);let r={},i=o.createContext(r);function d(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);