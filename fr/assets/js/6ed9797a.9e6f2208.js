"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["86595"],{70222:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>a,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>r});var o=JSON.parse('{"id":"ToolsDoc/fly-tools/flash","title":"D\xe9monstration des fonctionnalit\xe9s","description":"Prise en charge d\'un clic pour copier l\'ID de l\'appareil, identification automatique de l\'ID et ajout automatique de serial , device:* devant les configurations correspondantes","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ToolsDoc/fly-tools/flash.mdx","sourceDirName":"ToolsDoc/fly-tools","slug":"/ToolsDoc/fly-tools/flash","permalink":"/fly-docs-next/fr/docs/ToolsDoc/fly-tools/flash","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ToolsDoc/fly-tools/flash.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"Compilation du firmware"},"sidebar":"toolsdocSidebar","previous":{"title":"Installation de FLY_TOOLS","permalink":"/fly-docs-next/fr/docs/ToolsDoc/fly-tools/Installation"},"next":{"title":"G\xe9n\xe9ration de graphiques de charge, etc.","permalink":"/fly-docs-next/fr/docs/ToolsDoc/fly-tools/utils"}}'),i=t("52676"),s=t("79938");let r={sidebar_position:4,sidebar_label:"Compilation du firmware"},a="D\xe9monstration des fonctionnalit\xe9s",l={},c=[];function d(e){let n={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{ImageView:o}=n;return!o&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"d\xe9monstration-des-fonctionnalit\xe9s",children:"D\xe9monstration des fonctionnalit\xe9s"})}),"\n",(0,i.jsx)(o,{image:t(58967).Z,size:"100%",align:"left"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Prise en charge d'un clic pour copier l'ID de l'appareil, identification automatique de l'ID et ajout automatique de ",(0,i.jsx)(n.strong,{children:"serial:"})," , ",(0,i.jsx)(n.strong,{children:"canbus_uuid:"})," , ",(0,i.jsx)(n.strong,{children:"device:"})," devant les configurations correspondantes"]}),"\n",(0,i.jsx)(n.li,{children:"Prise en charge de la modification du taux de transmission CAN et du tampon CAN, permettant aux joueurs de personnaliser facilement le CAN"}),"\n",(0,i.jsx)(n.li,{children:"Prise en charge de la recherche d'appareils cam\xe9ra, \xe9vitant aux joueurs la peine de chercher la cam\xe9ra"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Astuce",type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Veuillez noter que FLY-Tools ne cr\xe9era pas automatiquement la configuration CAN, vous devez cr\xe9er manuellement la configuration CAN pour pouvoir utiliser la modification du taux de transmission CAN et du tampon CAN"}),"\n"]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Veuillez fournir SSH pour utiliser la connexion r\xe9seau \xe0 votre utilisateur avant d'ex\xe9cuter la commande ci-dessous"}),"\n",(0,i.jsx)(n.li,{children:"Ubuntu n'est temporairement pas pris en charge pour cette fonction"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'sudo /bin/sh -c "cat > /etc/network/interfaces.d/can0" << EOF\nallow-hotplug can0\niface can0 can static\n    bitrate 1000000\n    up ifconfig $IFACE txqueuelen 1024\n    pre-up ip link set can0 type can bitrate 1000000\n    pre-up ip link set can0 txqueuelen 1024\nEOF\n'})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},58967:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/home-a1934df127c6c0bf53aeecf81bbfc6ad.gif"},79938:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var o=t(75271);let i={},s=o.createContext(i);function r(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);