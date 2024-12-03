"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["25323"],{67359:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>u,assets:()=>s,toc:()=>c,frontMatter:()=>d});var i=JSON.parse('{"id":"ProductDoc/SBC/fly-mini-pad/uart","title":"M\xe9thode de configuration","description":"Veuillez noter qu\'apr\xe8s avoir utilis\xe9 cette m\xe9thode, il ne sera pas possible d\'utiliser l\'interface d\'acc\xe9l\xe9rom\xe8tre externe du mini pad.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/SBC/fly-mini-pad/uart.mdx","sourceDirName":"ProductDoc/SBC/fly-mini-pad","slug":"/ProductDoc/SBC/fly-mini-pad/uart","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-mini-pad/uart","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-mini-pad/uart.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":9,"frontMatter":{"sidebar_position":9,"sidebar_label":"Connexion de la carte m\xe8re par UART"},"sidebar":"tutorialSidebar","previous":{"title":"Utilisation de l\'UTOC int\xe9gr\xe9","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-mini-pad/utoc"},"next":{"title":"Mod\xe8les 3D et sch\xe9mas de principe","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-mini-pad/schematic"}}'),r=t("52676"),o=t("79938");let d={sidebar_position:9,sidebar_label:"Connexion de la carte m\xe8re par UART"},a="M\xe9thode de configuration",s={},c=[{value:"M\xe9thode de connexion",id:"m\xe9thode-de-connexion",level:2},{value:"Configuration de r\xe9f\xe9rence Klipper",id:"configuration-de-r\xe9f\xe9rence-klipper",level:2}];function l(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{ImageView:i}=n;return!i&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"m\xe9thode-de-configuration",children:"M\xe9thode de configuration"})}),"\n",(0,r.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,r.jsx)(n.p,{children:"Veuillez noter qu'apr\xe8s avoir utilis\xe9 cette m\xe9thode, il ne sera pas possible d'utiliser l'interface d'acc\xe9l\xe9rom\xe8tre externe du mini pad."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ouvrez le disque BOOT, trouvez ",(0,r.jsx)(n.code,{children:"armbianEnv.txt"})," et ouvrez-le"]}),"\n",(0,r.jsxs)(n.li,{children:["Modifiez ",(0,r.jsx)(n.strong,{children:"uart2"})," en ",(0,r.jsx)(n.strong,{children:"uart3"})," dans ",(0,r.jsx)(n.code,{children:"overlays=usbhost2 usbhost3 uart2"})," et enregistrez"]}),"\n"]}),"\n",(0,r.jsx)(i,{image:t(9045).Z,size:"80%",align:"center"}),"\n",(0,r.jsx)(n.h2,{id:"m\xe9thode-de-connexion",children:"M\xe9thode de connexion"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Veuillez noter que le TX du mini-pad doit \xeatre connect\xe9 au RX de la carte m\xe8re avec le firmware s\xe9rie"}),"\n",(0,r.jsx)(n.li,{children:"Veuillez noter que le RX du mini-pad doit \xeatre connect\xe9 au TX de la carte m\xe8re avec le firmware s\xe9rie"}),"\n",(0,r.jsx)(n.li,{children:"Veuillez noter qu'une mise \xe0 la terre commune est n\xe9cessaire"}),"\n",(0,r.jsx)(n.li,{children:"Sinon, il ne sera pas possible de se connecter \xe0 la carte m\xe8re avec le firmware s\xe9rie"}),"\n"]}),"\n",(0,r.jsx)(i,{image:t(3111).Z,size:"80%",align:"center"}),"\n",(0,r.jsx)(n.h2,{id:"configuration-de-r\xe9f\xe9rence-klipper",children:"Configuration de r\xe9f\xe9rence Klipper"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[mcu]\nserial: /dev/ttyS3\nbaud\uFF1A250000\n#   Vitesse de transmission utilis\xe9e. Par d\xe9faut, c'est 250000\nrestart_method:command\n"})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},9045:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/uart-9f86dbf2b17ce74810241302c49d6f21.webp"},3111:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/uart1-84f4dfe5ec67b4a3b173b060fdf6072f.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var i=t(75271);let r={},o=i.createContext(r);function d(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);