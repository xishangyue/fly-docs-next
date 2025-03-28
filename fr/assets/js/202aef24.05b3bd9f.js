"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["93636"],{83366:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>s,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>a});var r=JSON.parse('{"id":"DebugDoc/ref-config/m109","title":"Attente trop longue pour la stabilisation de la temp\xe9rature initiale lors de l\'impression","description":"* Ce macro peut \xeatre plac\xe9 directement dans la configuration.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/ref-config/m109.mdx","sourceDirName":"DebugDoc/ref-config","slug":"/DebugDoc/ref-config/m109","permalink":"/fly-docs-next/fr/docs/DebugDoc/ref-config/m109","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/m109.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"debugdocSidebar","previous":{"title":"Capteur de filament","permalink":"/fly-docs-next/fr/docs/DebugDoc/ref-config/filament-switch-sensor"},"next":{"title":"R\xe9f\xe9rence de configuration pour double axe/idex","permalink":"/fly-docs-next/fr/docs/DebugDoc/ref-config/idex"}}'),i=n("52676"),o=n("79938");let a={sidebar_position:2},s="Attente trop longue pour la stabilisation de la temp\xe9rature initiale lors de l'impression",l={},c=[];function d(e){let t={code:"code",h1:"h1",header:"header",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"attente-trop-longue-pour-la-stabilisation-de-la-temp\xe9rature-initiale-lors-de-limpression",children:"Attente trop longue pour la stabilisation de la temp\xe9rature initiale lors de l'impression"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Ce macro peut \xeatre plac\xe9 directement dans la configuration."}),"\n",(0,i.jsx)(t.li,{children:"Ce macro a pour effet d'attendre normalement que la temp\xe9rature monte, mais de passer \xe0 l'\xe9tape suivante une fois que la temp\xe9rature atteint sa cible."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cfg",metastring:'title="printer.cfg"',children:"[gcode_macro M109]\nrename_existing: M109.1\ngcode:\n    {% set s = params.S|float %}\n    M104 {% for p in params %}{'%s%s' % (p, params[p])}{% endfor %}  ; D\xe9finir la temp\xe9rature de l'hotend\n    {% if s != 0 %}\n    TEMPERATURE_WAIT SENSOR=extruder MINIMUM={s} MAXIMUM={s+1}   ; Attendre que la temp\xe9rature de l'hotend soit atteinte (dans une plage de 1 degr\xe9)\n    {% endif %}	\n"})})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},79938:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return a}});var r=n(75271);let i={},o=r.createContext(i);function a(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);