"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["94824"],{3773:function(e,n,o){o.r(n),o.d(n,{default:()=>c,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>s});var t=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/undervoltage","title":"M\xe9thodes de r\xe9solution pour la tension d\'alimentation insuffisante du driver","description":"M\xe9thode un","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/undervoltage.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3","slug":"/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/undervoltage","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/undervoltage","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/undervoltage.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8,"sidebar_label":"M\xe9thodes de r\xe9solution pour la tension d\'alimentation insuffisante du driver"},"sidebar":"tutorialSidebar","previous":{"title":"Utilisation d\'Eddy","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/1612"},"next":{"title":"Mod\xe8les 3D et sch\xe9mas","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/schematic"}}'),r=o("74132"),i=o("94551");let d={sidebar_position:8,sidebar_label:"M\xe9thodes de r\xe9solution pour la tension d'alimentation insuffisante du driver"},s="M\xe9thodes de r\xe9solution pour la tension d'alimentation insuffisante du driver",l={},a=[{value:"M\xe9thode un",id:"m\xe9thode-un",level:2},{value:"M\xe9thode deux",id:"m\xe9thode-deux",level:2}];function u(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"m\xe9thodes-de-r\xe9solution-pour-la-tension-dalimentation-insuffisante-du-driver",children:"M\xe9thodes de r\xe9solution pour la tension d'alimentation insuffisante du driver"})}),"\n",(0,r.jsx)(n.h2,{id:"m\xe9thode-un",children:"M\xe9thode un"}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Remplacer l'alimentation"}),"\n",(0,r.jsx)(n.li,{children:"Ajouter un filtre d'alimentation"}),"\n",(0,r.jsx)(n.li,{children:"V\xe9rifier le moteur"}),"\n",(0,r.jsx)(n.li,{children:"Branchez la carcasse du moteur sur la GND du panneau de contr\xf4le"}),"\n",(0,r.jsxs)(n.li,{children:["Ajoutez ",(0,r.jsx)(n.code,{children:"driver_TPFD: 0"})," dans la configuration du driver de l'extrudeuse"]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"m\xe9thode-deux",children:"M\xe9thode deux"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Connectez-vous via SSH \xe0 la machine sup\xe9rieure"}),"\n",(0,r.jsx)(n.li,{children:"Entrez la commande suivante"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sed -i 's/\"uv_cp\":                    0x01 << 2/#&/' ~/klipper/klippy/extras/tmc2240.py\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"La r\xe9initialisation de Klipper pourrait annuler cette \xe9tape"}),"\n"]})})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},94551:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return d}});var t=o(39546);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);