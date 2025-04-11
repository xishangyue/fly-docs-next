"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["10232"],{50021:function(e,n,r){r.d(n,{ZP:function(){return o},d$:function(){return t}});var i=r(85893),s=r(50065);let t=[{value:"Recherche de l&#39;ID RS232",id:"recherche-de-lid-rs232",level:2},{value:"Remarques avant la recherche du p\xe9riph\xe9rique",id:"remarques-avant-la-recherche-du-p\xe9riph\xe9rique",level:3},{value:"Recherche du p\xe9riph\xe9rique",id:"recherche-du-p\xe9riph\xe9rique",level:3},{value:"Recherche de l&#39;ID RS232",id:"recherche-de-lid-rs232-1",level:3},{value:"Entrez l&#39;ID RS232 dans la configuration",id:"entrez-lid-rs232-dans-la-configuration",level:3}];function l(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{ImageView:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"recherche-de-lid-rs232",children:"Recherche de l'ID RS232"}),"\n",(0,i.jsx)(n.h3,{id:"remarques-avant-la-recherche-du-p\xe9riph\xe9rique",children:"Remarques avant la recherche du p\xe9riph\xe9rique"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Avant de rechercher l'ID RS232, veuillez d'abord ",(0,i.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"cliquez pour sauter",children:"vous connecter \xe0 SSH"})]}),"\n",(0,i.jsx)(n.li,{children:"Veuillez noter qu'il est n\xe9cessaire de vous assurer que vous vous connectez \xe0 SSH via le r\xe9seau et non via un port s\xe9rie"}),"\n",(0,i.jsx)(n.li,{children:"Assurez-vous d'avoir bien connect\xe9 l'UTOR et que le c\xe2ble de connexion au PC dispose de la fonctionnalit\xe9 de transmission de donn\xe9es"}),"\n",(0,i.jsx)(n.li,{children:"Si vous utilisez G2T, assurez-vous que le syst\xe8me prend en charge la connexion UART"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"recherche-du-p\xe9riph\xe9rique",children:"Recherche du p\xe9riph\xe9rique"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Maintenant que vous \xeates correctement connect\xe9 au PC, vous pouvez entrer ",(0,i.jsx)(n.code,{children:"lsusb"})," pour rechercher des p\xe9riph\xe9riques. Cela donnera l'un des cas suivants :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si vous entrez ",(0,i.jsx)(n.code,{children:"lsusb"})," et que cela affiche une erreur indiquant que la commande ",(0,i.jsx)(n.code,{children:"ls"})," n'est pas trouv\xe9e, vous pouvez entrer la commande ci-dessous pour installer la commande","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install usbutils\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Si vous entrez ",(0,i.jsx)(n.code,{children:"lsusb"})," et qu'il ne se passe rien, c'est un probl\xe8me syst\xe8me pour lequel nous ne pouvons rien faire, vous devrez changer de syst\xe8me ou utiliser un syst\xe8me qui fonctionne correctement"]}),"\n",(0,i.jsx)(n.li,{children:"Si vous obtenez les informations pr\xe9sent\xe9es dans l'image ci-dessous, notez que ce n'est qu'une r\xe9f\xe9rence. Vous n'avez besoin de v\xe9rifier que les caract\xe8res apr\xe8s l'ID"}),"\n"]}),"\n",(0,i.jsx)(t,{image:r(8987).Z,size:"100%",align:"left"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"1a86:7523"})," fait partie des appareils que vous utiliserez. Les indications suivantes ne sont pas importantes car elles peuvent ne pas s'afficher correctement ou ne pas s'afficher du tout en raison de probl\xe8mes syst\xe8me"]}),"\n",(0,i.jsx)(n.li,{children:"Si ce n'est pas le cas, v\xe9rifiez que le c\xe2ble est bien branch\xe9 et que la mise \xe0 jour du firmware a \xe9t\xe9 effectu\xe9e correctement."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Attention",type:"warning",children:(0,i.jsxs)(n.p,{children:["Vous ne pouvez utiliser la commande ci-dessous pour rechercher l'ID RS232 que si vous avez ",(0,i.jsx)(n.code,{children:"1a86:7523"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"recherche-de-lid-rs232-1",children:"Recherche de l'ID RS232"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ls /dev/serial/by-path/*\n"})}),"\n",(0,i.jsx)(t,{image:r(66613).Z,size:"100%",align:"left"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si vous entrez ",(0,i.jsx)(n.code,{children:"ls /dev/serial/by-path/*"})," et qu'aucun ID n'appara\xeet, mais que ",(0,i.jsx)(n.code,{children:"lsusb"})," montre des appareils, changez de PC ou de syst\xe8me d'exploitation sur le PC"]}),"\n",(0,i.jsx)(n.li,{children:"Notez que l'utilisation de l'UTOR produira trois identifiants, et si vous avez utilis\xe9 un autre syst\xe8me d'UTOR auparavant, il pourrait enregistrer ces identifiants pr\xe9c\xe9demment, ce qui entra\xeenera plusieurs identifiants lors de la recherche"}),"\n",(0,i.jsxs)(n.li,{children:["Assurez-vous que l'identifiant se termine par ",(0,i.jsx)(n.code,{children:"-port0"}),", sinon il ne sera pas utilisable"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Attention",type:"warning",children:(0,i.jsx)(n.p,{children:"Assurez-vous que le panneau de contr\xf4le et l'UTOR sont bien branch\xe9s ! Sinon, vous ne pourrez pas vous connecter au panneau de contr\xf4le !"})}),"\n",(0,i.jsx)(n.h3,{id:"entrez-lid-rs232-dans-la-configuration",children:"Entrez l'ID RS232 dans la configuration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ouvrez l'interface Web de l'imprimante, trouvez l'option de configuration dans le menu lat\xe9ral gauche. Pour fluidd : ",(0,i.jsx)(n.code,{children:"{\u2026}"}),", pour mainsail : ",(0,i.jsx)(n.code,{children:"machine"}),", cliquez dessus pour trouver ",(0,i.jsx)(n.code,{children:"printer.cfg"})]}),"\n",(0,i.jsx)(t,{image:r(531).Z,size:"80%",align:"left"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copiez l'ID bleu et collez-le dans la section ",(0,i.jsx)(n.code,{children:"[mcu SHT36]"})," du fichier de configuration ",(0,i.jsx)(n.code,{children:"printer.cfg"}),". Enregistrez et red\xe9marrez pour vous connecter au contr\xf4leur principal. Si Klipper affiche ",(0,i.jsx)(n.code,{children:"ADC out of range"}),", c'est un ph\xe9nom\xe8ne normal. Connectez bien la plaque chauffante et le thermocouple, configurez les broches de sortie pour le buse et la plaque chauffante, puis enregistrez et red\xe9marrez."]}),"\n",(0,i.jsx)(t,{image:r(46064).Z,size:"90%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Attention",type:"warning",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["L'ID RS232 doit \xeatre configur\xe9 avec ",(0,i.jsx)(n.code,{children:"baud:"})," et ",(0,i.jsx)(n.code,{children:"restart_method:command"})]}),"\n",(0,i.jsx)(n.li,{children:"Voici une configuration de r\xe9f\xe9rence"}),"\n"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"[mcu SHT36]\nserial: /dev/serial/by-path/platform-1c1c000.usb-usb-0:1.2:1.0-port0\nbaud: 250000\nrestart_method:command\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"Note : Tous les ID mentionn\xe9s dans le document sont des exemples. Chaque carte m\xe8re a un ID unique. Veuillez modifier et remplir en fonction de l'ID r\xe9ellement obtenu."})}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"Veuillez noter que l'ID ci-dessous ne peut pas \xeatre utilis\xe9 !!!"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"serial: /dev/serial/by-id/usb-1a86_USB_Serial-if00-port0\n"})}),"\n",(0,i.jsx)(n.hr,{})]})}function o(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},258:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>c});var i=JSON.parse('{"id":"ProductDoc/ExtensionBoard/fly-utor/wiring","title":"R\xe9f\xe9rence de c\xe2blage","description":"","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/fly-utor/wiring.mdx","sourceDirName":"ProductDoc/ExtensionBoard/fly-utor","slug":"/ProductDoc/ExtensionBoard/fly-utor/wiring","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-utor/wiring","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/fly-utor/wiring.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"Recherche d\'ID et c\xe2blage"},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-utor/"},"next":{"title":"FLY-CANBUS","permalink":"/fly-docs-next/fr/docs/category/fly-canbus"}}'),s=r("85893"),t=r("50065"),l=r("50021");let o={sidebar_position:2,sidebar_label:"Recherche d'ID et c\xe2blage"},c="R\xe9f\xe9rence de c\xe2blage",a={},d=[...l.d$];function u(e){let n={h1:"h1",header:"header",...(0,t.a)(),...e.components},{ImageView:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"r\xe9f\xe9rence-de-c\xe2blage",children:"R\xe9f\xe9rence de c\xe2blage"})}),"\n",(0,s.jsx)(i,{image:r(54895).Z,size:"100%",align:"left"}),"\n",(0,s.jsx)(l.ZP,{})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8987:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/7523-0c5084ee24f883b9788e2c23b5486127.webp"},46064:function(e,n,r){r.d(n,{Z:function(){return i}});let i="data:image/webp;base64,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"},531:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/fluidd-cfg-852485b665e4c2b86aaf45ae4b133d7d.webp"},66613:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/rs232-id-eb4dfd411153e30d80d621b152f7d8c4.webp"},54895:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/wiring-beece435fa521114c3968dfce6947fdf.webp"},50065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return l}});var i=r(67294);let s={},t=i.createContext(s);function l(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);