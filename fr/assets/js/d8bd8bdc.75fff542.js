"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["24195"],{91426:function(e,n,s){s.r(n),s.d(n,{default:()=>d,frontMatter:()=>u,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"DebugDoc/BasicTutorial/index","title":"Connexion SSH au PC sup\xe9rieur","description":"* Ce document ne s\'applique qu\'au PC sup\xe9rieur FLY, les autres appareils ne sont mentionn\xe9s que pour r\xe9f\xe9rence.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/BasicTutorial/index.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/","permalink":"/fly-docs-next/fr/docs/DebugDoc/BasicTutorial/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"debugdocSidebar","previous":{"title":"\u4E0A\u4F4D\u673A\u57FA\u7840\u6559\u7A0B","permalink":"/fly-docs-next/fr/docs/category/\u4E0A\u4F4D\u673A\u57FA\u7840\u6559\u7A0B"},"next":{"title":"Connexion r\xe9seau via SSH","permalink":"/fly-docs-next/fr/docs/DebugDoc/BasicTutorial/Internet"}}'),i=s("74132"),t=s("94551");let u={sidebar_position:1},a="Connexion SSH au PC sup\xe9rieur",l={},c=[{value:"Utilisation du port s\xe9rie pour se connecter au SSH du PC sup\xe9rieur",id:"utilisation-du-port-s\xe9rie-pour-se-connecter-au-ssh-du-pc-sup\xe9rieur",level:2},{value:"Utilisation de l&#39;adresse IP r\xe9seau pour se connecter au SSH du PC sup\xe9rieur",id:"utilisation-de-ladresse-ip-r\xe9seau-pour-se-connecter-au-ssh-du-pc-sup\xe9rieur",level:2}];function o(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{ImageView:r,TabItem:u,Tabs:a}=n;return r||p("ImageView",!0),u||p("TabItem",!0),a||p("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"connexion-ssh-au-pc-sup\xe9rieur",children:"Connexion SSH au PC sup\xe9rieur"})}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ce document ne s'applique qu'au PC sup\xe9rieur FLY, les autres appareils ne sont mentionn\xe9s que pour r\xe9f\xe9rence."}),"\n",(0,i.jsx)(n.li,{children:"Si vous compilez et br\xfblez le firmware, veuillez consulter le tutoriel de connexion r\xe9seau plut\xf4t que le tutoriel de connexion s\xe9rie."}),"\n"]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Vous pouvez vous connecter \xe0 l'appareil via le port s\xe9rie ou le WiFi."}),"\n",(0,i.jsxs)(n.li,{children:["Veuillez pr\xe9parer \xe0 l'avance ",(0,i.jsx)(n.strong,{children:"MobaXterm_Personal"})," ou tout autre ",(0,i.jsx)(n.strong,{children:"outil de terminal SSH"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Assurez-vous que la carte SD ou M2WE a \xe9t\xe9 grav\xe9e avec le syst\xe8me correspondant au PC sup\xe9rieur."}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Si le PC sup\xe9rieur ne d\xe9marre pas correctement, retirez tous les p\xe9riph\xe9riques externes tels que les pilotes, les limitateurs, les ventilateurs, etc. !!!"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Enfin, connectez-vous au SSH via le r\xe9seau pour faciliter la compilation du firmware !!!"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Pour compiler le firmware, consultez le tutoriel de connexion au PC sup\xe9rieur via le WiFi ou le c\xe2ble r\xe9seau."})}),"\n"]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsxs)(u,{value:"serial",label:"Connexion par port s\xe9rie",default:!0,children:[(0,i.jsx)(n.h2,{id:"utilisation-du-port-s\xe9rie-pour-se-connecter-au-ssh-du-pc-sup\xe9rieur",children:"Utilisation du port s\xe9rie pour se connecter au SSH du PC sup\xe9rieur"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Connectez le PC sup\xe9rieur FLY \xe0 l'ordinateur via un c\xe2ble USB Type-c."}),"\n",(0,i.jsx)(n.li,{children:"Pour les autres PC sup\xe9rieurs, veuillez rechercher vous-m\xeame la m\xe9thode de connexion !!!"}),"\n"]}),(0,i.jsxs)(a,{children:[(0,i.jsxs)(u,{value:"c8",label:"FLY-C8",default:!0,children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Port du FLY-C8"}),"\n"]}),(0,i.jsx)(r,{image:s(85187).Z,size:"40%",align:"center"})]}),(0,i.jsxs)(u,{value:"piv2",label:"FLY-Pi v2",default:!0,children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Port du FLY-Pi v2"}),"\n"]}),(0,i.jsx)(r,{image:s(97494).Z,size:"20%",align:"center"})]}),(0,i.jsxs)(u,{value:"piv1",label:"FLY-Pi(\u03C0)",default:!0,children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Port du FLY-Pi"}),"\n"]}),(0,i.jsx)(r,{image:s(82174).Z,size:"20%",align:"center"})]}),(0,i.jsxs)(u,{value:"gemini",label:"FLY-Gemini",default:!0,children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Port du FLY-Gemini"}),"\n"]}),(0,i.jsx)(r,{image:s(23206).Z,size:"20%",align:"center"})]}),(0,i.jsxs)(u,{value:"minipad",label:"FLY-MiniPad",default:!0,children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Port du FLY-MiniPad"}),"\n"]}),(0,i.jsx)(r,{image:s(3686).Z,size:"30%",align:"center"})]}),(0,i.jsxs)(u,{value:"pilite2",label:"FLY-Pi Lite2",default:!0,children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Port du FLY-Pi Lite2"}),"\n"]}),(0,i.jsx)(r,{image:s(8312).Z,size:"40%",align:"center"})]})]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Si le contr\xf4leur m\xe8re est correctement connect\xe9 \xe0 l'ordinateur, ouvrez le Gestionnaire de p\xe9riph\xe9riques et vous verrez le port CH340."}),"\n"]}),(0,i.jsx)(r,{image:s(19063).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ouvrez ",(0,i.jsx)(n.code,{children:"MobaXterm"}),", effectuez les param\xe9trages suivants, le port doit \xeatre s\xe9lectionn\xe9 sur celui que vous avez vu dans le Gestionnaire de p\xe9riph\xe9riques."]}),"\n"]}),(0,i.jsx)(r,{image:s(25400).Z,size:"40%",align:"center"}),(0,i.jsx)(r,{image:s(91363).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Si tout est en ordre, vous verrez l'\xe9cran de d\xe9marrage."}),"\n"]}),(0,i.jsx)(r,{image:s(88525).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Attendez un moment, si vous voyez cet \xe9cran, c'est que le d\xe9marrage est r\xe9ussi."}),"\n"]}),(0,i.jsx)(r,{image:s(61305).Z,size:"40%",align:"center"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Si apr\xe8s quelques minutes, comme indiqu\xe9 ci-dessous, aucune interface n'est affich\xe9e, appuyez plusieurs fois sur la touche Entr\xe9e."})}),(0,i.jsx)(r,{image:s(23561).Z,size:"40%",align:"center"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Apr\xe8s avoir appuy\xe9 sur Entr\xe9e, vous verrez le contenu suivant."})}),(0,i.jsx)(r,{image:s(72957).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si vous souhaitez v\xe9rifier l'adresse IP, tapez ",(0,i.jsx)(n.code,{children:"ip a | grep inet"})," dans le SSH et appuyez sur Entr\xe9e. Recherchez l'adresse IP dans le contenu retourn\xe9 qui correspond \xe0 celle de votre routeur."]}),"\n"]}),(0,i.jsx)(r,{image:s(64578).Z,size:"40%",align:"center"})]}),(0,i.jsxs)(u,{value:"net",label:"Connexion r\xe9seau",default:!0,children:[(0,i.jsx)(n.h2,{id:"utilisation-de-ladresse-ip-r\xe9seau-pour-se-connecter-au-ssh-du-pc-sup\xe9rieur",children:"Utilisation de l'adresse IP r\xe9seau pour se connecter au SSH du PC sup\xe9rieur"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Assurez-vous que le syst\xe8me est d\xe9marr\xe9 correctement."}),"\n",(0,i.jsx)(n.li,{children:"Connectez-vous \xe0 l'interface arri\xe8re du routeur auquel le PC sup\xe9rieur est connect\xe9, sauf si vous connaissez l'adresse IP du PC sup\xe9rieur."}),"\n",(0,i.jsxs)(n.li,{children:["Assurez-vous que vous connaissez le nom d'utilisateur et le mot de passe du PC sup\xe9rieur, le nom d'utilisateur par d\xe9faut est ",(0,i.jsx)(n.strong,{children:"fly"}),", et le mot de passe par d\xe9faut est ",(0,i.jsx)(n.strong,{children:"mellow"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Si la carte m\xe8re est d\xe9j\xe0 d\xe9marr\xe9e et est connect\xe9e au r\xe9seau, vous pouvez utiliser la m\xe9thode suivante pour vous connecter au SSH."}),"\n",(0,i.jsx)(n.li,{children:"Ouvrez MobaXterm et effectuez les param\xe9trages suivants, entrez l'adresse IP que vous avez vue pr\xe9c\xe9demment, ou consultez-la dans l'interface arri\xe8re du routeur."}),"\n"]}),(0,i.jsx)(r,{image:s(25400).Z,size:"40%",align:"center"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Attention : Dans cette \xe9tape 4, entrez le nom d'utilisateur du PC sup\xe9rieur."})}),(0,i.jsx)(r,{image:s(92364).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["La premi\xe8re connexion peut faire appara\xeetre cette fen\xeatre, cliquez sur ",(0,i.jsx)(n.code,{children:"Accept"})," pour continuer."]}),"\n"]}),(0,i.jsx)(r,{image:s(4828).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Il vous sera demand\xe9 d'entrer le mot de passe, tapez le mot de passe du PC sup\xe9rieur et appuyez sur Entr\xe9e."}),"\n"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Attention : Ici, le mot de passe n'est pas affich\xe9 lors de la saisie, appuyez simplement sur Entr\xe9e une fois termin\xe9."})}),(0,i.jsxs)(n.p,{children:["Le nom d'utilisateur par d\xe9faut est : ",(0,i.jsx)(n.code,{children:"fly"})," , et le mot de passe par d\xe9faut est : ",(0,i.jsx)(n.code,{children:"mellow"}),"."]}),(0,i.jsx)(r,{image:s(36847).Z,size:"40%",align:"center"}),(0,i.jsx)(r,{image:s(45565).Z,size:"40%",align:"center"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"La connexion r\xe9ussie."}),"\n"]})]})]}),"\n",(0,i.jsx)(n.hr,{})]})}function d(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},85187:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/c8-port-6816085af07cf862fa261a15d28cf147.webp"},23206:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/gemini-port-8ad5dc8fcc8ac4d84ff82fddfa799553.webp"},3686:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/minipad-port-2b4dc5f3cdecd4c1fad8981d4eeb6639.webp"},25400:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/mobaxterm-1-2a44e31779ffe0a74fdb09921c24ca3e.webp"},4828:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/mobaxterm-10-2699dcaebc29cf1d3bedcdbb40b41b30.webp"},36847:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/mobaxterm-11-3d58dd094664307317d5b7d7a973f88e.webp"},45565:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/mobaxterm-12-032fc32a515ee0afe65d9e77762cbace.webp"},91363:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/mobaxterm-2-273b3b4bfff52a5c1a1e388dc8964112.webp"},88525:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/mobaxterm-3-151965778ddfb93f44aaa24e10e02dbb.webp"},61305:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/mobaxterm-4-0d677ea96590d19d313472418b9d3fa4.webp"},23561:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/mobaxterm-5-b93ee98e2487f52442dacc9b83e1b52a.webp"},72957:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/mobaxterm-6-37fc63e0cb12b9b19420d7a374c3d31a.webp"},64578:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/mobaxterm-8-d3370454369e54fbc22ca40c7ef50a2a.webp"},92364:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/mobaxterm-9-262d9c655a1778c98421ad5179c4685c.webp"},19063:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/pc-device-mgr-31e6d7f9b4a8a052cdfad54479b8de5e.webp"},82174:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/pi-port-4613f1dd218929f19b8321a97d115048.webp"},8312:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/pilite2-port-8464c005fb4765f4ac616e1fa3b52fab.webp"},97494:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/piv2-port-05142296eee0b68d1ec9d84c27acec72.webp"},94551:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return u}});var r=s(39546);let i={},t=r.createContext(i);function u(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:u(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);