"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["38346"],{33826:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>c,default:()=>u,assets:()=>s,toc:()=>l,frontMatter:()=>a});var o=JSON.parse('{"id":"ProductDoc/ExtensionBoard/fly-adxl/wiring","title":"Raccordement de la carte m\xe8re","description":"* Ce tutoriel est bas\xe9 sur l\'exemple PI V2","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/fly-adxl/wiring.mdx","sourceDirName":"ProductDoc/ExtensionBoard/fly-adxl","slug":"/ProductDoc/ExtensionBoard/fly-adxl/wiring","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-adxl/wiring","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/fly-adxl/wiring.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"Connexion"},"sidebar":"tutorialSidebar","previous":{"title":"Pr\xe9sentation","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-adxl/"},"next":{"title":"Utilisation du capteur d\'acc\xe9l\xe9ration","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-adxl/klipper"}}'),r=t("52676"),i=t("79938");let a={sidebar_position:2,sidebar_label:"Connexion"},c="Raccordement de la carte m\xe8re",s={},l=[{value:"Configuration",id:"configuration",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{ImageView:o}=n;return!o&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"raccordement-de-la-carte-m\xe8re",children:"Raccordement de la carte m\xe8re"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ce tutoriel est bas\xe9 sur l'exemple PI V2","\n",(0,r.jsx)(o,{image:t(73848).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[mcu host]\nserial: /tmp/klipper_host_mcu\n\n[adxl345]\ncs_pin: host:None\nspi_bus: spidev1.0\n\n[resonance_tester]\naccel_chip: adxl345\n#accel_chip_y: adxl345 bed\nprobe_points:\n    100, 100, 20  # un exemple\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},73848:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/adxl345-3aafa92553b455efa86d3e76e908a480.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var o=t(75271);let r={},i=o.createContext(r);function a(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);