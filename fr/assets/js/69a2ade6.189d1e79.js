"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["20427"],{44139:function(e,o,n){n.r(o),n.d(o,{metadata:()=>t,contentTitle:()=>i,default:()=>a,assets:()=>l,toc:()=>u,frontMatter:()=>d});var t=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/undervoltage","title":"M\xe9thodes de r\xe9solution du sous-tensionnement du pilote","description":"M\xe9thode un","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/undervoltage.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sb2040/sb2040-pro","slug":"/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/undervoltage","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/undervoltage","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/undervoltage.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"M\xe9thodes de r\xe9solution du sous-tensionnement du pilote"},"sidebar":"tutorialSidebar","previous":{"title":"Utilisation de l\'acc\xe9l\xe9rom\xe8tre","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/adxl"},"next":{"title":"Mod\xe8les 3D et sch\xe9mas \xe9lectriques","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/schematic"}}'),r=n("52676"),s=n("79938");let d={sidebar_position:6,sidebar_label:"M\xe9thodes de r\xe9solution du sous-tensionnement du pilote"},i="M\xe9thodes de r\xe9solution du sous-tensionnement du pilote",l={},u=[{value:"M\xe9thode un",id:"m\xe9thode-un",level:2},{value:"M\xe9thode deux",id:"m\xe9thode-deux",level:2}];function c(e){let o={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"m\xe9thodes-de-r\xe9solution-du-sous-tensionnement-du-pilote",children:"M\xe9thodes de r\xe9solution du sous-tensionnement du pilote"})}),"\n",(0,r.jsx)(o.h2,{id:"m\xe9thode-un",children:"M\xe9thode un"}),"\n",(0,r.jsx)(o.admonition,{type:"danger",children:(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Remplacer l'alimentation"}),"\n",(0,r.jsx)(o.li,{children:"Ajouter un filtre d'alimentation"}),"\n",(0,r.jsx)(o.li,{children:"V\xe9rifier le moteur"}),"\n",(0,r.jsx)(o.li,{children:"Branchez la carcasse du moteur sur la GND du panneau de contr\xf4le"}),"\n",(0,r.jsxs)(o.li,{children:["Ajoutez ",(0,r.jsx)(o.code,{children:"driver_TPFD: 0"})," \xe0 la configuration du moteur d'extrusion"]}),"\n"]})}),"\n",(0,r.jsx)(o.h2,{id:"m\xe9thode-deux",children:"M\xe9thode deux"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Connectez-vous via SSH au contr\xf4leur sup\xe9rieur"}),"\n",(0,r.jsx)(o.li,{children:"Entrez la commande ci-dessous"}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"sed -i 's/\"uv_cp\":                    0x01 << 2/#&/' ~/klipper/klippy/extras/tmc2240.py\n"})}),"\n",(0,r.jsx)(o.admonition,{type:"danger",children:(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Cette \xe9tape pourrait \xeatre r\xe9initialis\xe9e apr\xe8s une mise \xe0 jour de klipper"}),"\n"]})})]})}function a(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},79938:function(e,o,n){n.d(o,{Z:function(){return i},a:function(){return d}});var t=n(75271);let r={},s=t.createContext(r);function d(e){let o=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);