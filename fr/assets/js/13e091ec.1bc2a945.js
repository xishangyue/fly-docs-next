"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["73834"],{41815:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>l,default:()=>d,assets:()=>o,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"ProductDoc/SBC/fly-lite/lite2/ssh","title":"Connexion au poste de travail SSH","description":"* Il est possible de se connecter \xe0 l\'appareil via le port s\xe9rie ou Wi-Fi","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/SBC/fly-lite/lite2/ssh.mdx","sourceDirName":"ProductDoc/SBC/fly-lite/lite2","slug":"/ProductDoc/SBC/fly-lite/lite2/ssh","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-lite/lite2/ssh","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-lite/lite2/ssh.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"Connexion SSH au poste de travail sup\xe9rieur"},"sidebar":"tutorialSidebar","previous":{"title":"Burnage du syst\xe8me","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-lite/lite2/fly-os"},"next":{"title":"Connexion au WiFi","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-lite/lite2/wifi"}}'),i=n("52676"),r=n("79938");let a={sidebar_position:3,sidebar_label:"Connexion SSH au poste de travail sup\xe9rieur"},l="Connexion au poste de travail SSH",o={},c=[{value:"Utilisation d&#39;un port s\xe9rie pour se connecter au poste de travail SSH",id:"utilisation-dun-port-s\xe9rie-pour-se-connecter-au-poste-de-travail-ssh",level:2},{value:"Utilisation de l&#39;adresse IP r\xe9seau pour se connecter au poste de travail SSH",id:"utilisation-de-ladresse-ip-r\xe9seau-pour-se-connecter-au-poste-de-travail-ssh",level:2}];function u(e){let s={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{ImageView:t,TabItem:a,Tabs:l}=s;return!t&&p("ImageView",!0),!a&&p("TabItem",!0),!l&&p("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"connexion-au-poste-de-travail-ssh",children:"Connexion au poste de travail SSH"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Il est possible de se connecter \xe0 l'appareil via le port s\xe9rie ou Wi-Fi"}),"\n",(0,i.jsxs)(s.li,{children:["Veuillez pr\xe9parer \xe0 l'avance ",(0,i.jsx)(s.strong,{children:"MobaXterm_Personal"})," ou un autre ",(0,i.jsx)(s.strong,{children:"outil de terminal SSH"})]}),"\n",(0,i.jsxs)(s.li,{children:["Assurez-vous que la carte SD ou M2WE a \xe9t\xe9 grav\xe9e avec ",(0,i.jsx)(s.strong,{children:"le syst\xe8me correspondant au poste de travail sup\xe9rieur"})]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"Si le poste de travail ne d\xe9marre pas correctement, retirez tous les p\xe9riph\xe9riques externes tels que les pilotes, les limitateurs, les ventilateurs, etc. !!!"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"Enfin, connectez-vous via le r\xe9seau pour faciliter la compilation du firmware !!!"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"Pour compiler le firmware, consultez le tutoriel sur la connexion au poste de travail via Wi-Fi ou par c\xe2ble Ethernet"})}),"\n"]}),"\n",(0,i.jsxs)(l,{children:[(0,i.jsxs)(a,{value:"serial",label:"Connexion par port s\xe9rie",default:!0,children:[(0,i.jsx)(s.h2,{id:"utilisation-dun-port-s\xe9rie-pour-se-connecter-au-poste-de-travail-ssh",children:"Utilisation d'un port s\xe9rie pour se connecter au poste de travail SSH"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Connectez le poste de travail sup\xe9rieur FLY \xe0 l'ordinateur via un c\xe2ble USB Type-C"}),"\n",(0,i.jsx)(s.li,{children:"Pour les autres postes de travail, veuillez consulter vous-m\xeame les m\xe9thodes de connexion !!!"}),"\n"]}),(0,i.jsx)(l,{children:(0,i.jsxs)(a,{value:"pilite2",label:"FLY-Pi Lite2",default:!0,children:[(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Port du FLY-Pi Lite2"}),"\n"]}),(0,i.jsx)(t,{image:n(8312).Z,size:"40%",align:"center"})]})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Si la carte m\xe8re est connect\xe9e correctement \xe0 l'ordinateur, ouvrez le gestionnaire de p\xe9riph\xe9riques et vous verrez le port CH340"}),"\n"]}),(0,i.jsx)(t,{image:n(19063).Z,size:"40%",align:"center"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Ouvrez ",(0,i.jsx)(s.code,{children:"MobaXterm"}),", effectuez les param\xe9trages suivants, en s\xe9lectionnant le port que vous avez vu dans le gestionnaire de p\xe9riph\xe9riques"]}),"\n"]}),(0,i.jsx)(t,{image:n(25400).Z,size:"40%",align:"center"}),(0,i.jsx)(t,{image:n(91363).Z,size:"40%",align:"center"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Si tout est normal, vous verrez l'\xe9cran de d\xe9marrage"}),"\n"]}),(0,i.jsx)(t,{image:n(88525).Z,size:"40%",align:"center"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Attendez un moment, si vous voyez cet \xe9cran, c'est que le d\xe9marrage s'est effectu\xe9"}),"\n"]}),(0,i.jsx)(t,{image:n(61305).Z,size:"40%",align:"center"}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Si apr\xe8s quelques minutes, comme indiqu\xe9 ci-dessous, rien n'est affich\xe9 \xe0 l'\xe9cran, appuyez quelques fois sur la touche Entr\xe9e"})}),(0,i.jsx)(t,{image:n(23561).Z,size:"40%",align:"center"}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Apr\xe8s avoir appuy\xe9 sur Entr\xe9e, vous verrez le contenu comme indiqu\xe9 ci-dessous"})}),(0,i.jsx)(t,{image:n(72957).Z,size:"40%",align:"center"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Si vous souhaitez v\xe9rifier l'adresse IP, tapez ",(0,i.jsx)(s.code,{children:"ip a | grep inet"})," dans ssh et appuyez sur Entr\xe9e. Recherchez l'adresse IP dans le contenu renvoy\xe9 qui est dans la m\xeame plage que votre routeur pour y acc\xe9der"]}),"\n"]}),(0,i.jsx)(t,{image:n(64578).Z,size:"40%",align:"center"})]}),(0,i.jsxs)(a,{value:"net",label:"Connexion r\xe9seau",default:!0,children:[(0,i.jsx)(s.h2,{id:"utilisation-de-ladresse-ip-r\xe9seau-pour-se-connecter-au-poste-de-travail-ssh",children:"Utilisation de l'adresse IP r\xe9seau pour se connecter au poste de travail SSH"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Connectez-vous au ",(0,i.jsx)(s.strong,{children:"panneau de configuration de la routeur"})," auquel est connect\xe9 le poste de travail"]}),"\n",(0,i.jsx)(s.li,{children:"Assurez-vous que le syst\xe8me a bien d\xe9marr\xe9"}),"\n",(0,i.jsxs)(s.li,{children:["Assurez-vous de conna\xeetre le nom d'utilisateur et le mot de passe du poste de travail. Le syst\xe8me FLY a par d\xe9faut le nom d'utilisateur ",(0,i.jsx)(s.strong,{children:"fly"})," et le mot de passe ",(0,i.jsx)(s.strong,{children:"mellow"})]}),"\n",(0,i.jsx)(s.li,{children:"Si la carte m\xe8re est d\xe9j\xe0 allum\xe9e et connect\xe9e au r\xe9seau, vous pouvez vous connecter via l'adresse IP"}),"\n",(0,i.jsx)(s.li,{children:"Ouvrez MobaXterm, effectuez les param\xe9trages suivants, en saisissant l'adresse IP que vous avez vue pr\xe9c\xe9demment, ou consultez-la dans le panneau de configuration de la routeur"}),"\n"]}),(0,i.jsx)(t,{image:n(25400).Z,size:"40%",align:"center"}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Attention : \xc0 l'\xe9tape 4, entrez le nom d'utilisateur du poste de travail"})}),(0,i.jsx)(t,{image:n(92364).Z,size:"40%",align:"center"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Lors de la premi\xe8re connexion, une fen\xeatre s'affiche. Cliquez sur ",(0,i.jsx)(s.code,{children:"Accepter"})," pour continuer"]}),"\n"]}),(0,i.jsx)(t,{image:n(4828).Z,size:"40%",align:"center"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Saisissez le mot de passe du poste de travail et appuyez sur Entr\xe9e"}),"\n"]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Notez que le mot de passe n'est pas affich\xe9 lors de la saisie, appuyez simplement sur Entr\xe9e apr\xe8s l'avoir saisi"})}),(0,i.jsxs)(s.p,{children:["Le nom d'utilisateur par d\xe9faut du syst\xe8me FLY est : ",(0,i.jsx)(s.code,{children:"fly"}),", le mot de passe par d\xe9faut est : ",(0,i.jsx)(s.code,{children:"mellow"})]}),(0,i.jsx)(t,{image:n(36847).Z,size:"40%",align:"center"}),(0,i.jsx)(t,{image:n(45565).Z,size:"40%",align:"center"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"La connexion est r\xe9ussie"}),"\n"]})]})]}),"\n",(0,i.jsx)(s.hr,{})]})}function d(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}function p(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},25400:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/mobaxterm-1-2a44e31779ffe0a74fdb09921c24ca3e.webp"},4828:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/mobaxterm-10-2699dcaebc29cf1d3bedcdbb40b41b30.webp"},36847:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/mobaxterm-11-3d58dd094664307317d5b7d7a973f88e.webp"},45565:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/mobaxterm-12-032fc32a515ee0afe65d9e77762cbace.webp"},91363:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/mobaxterm-2-273b3b4bfff52a5c1a1e388dc8964112.webp"},88525:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/mobaxterm-3-151965778ddfb93f44aaa24e10e02dbb.webp"},61305:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/mobaxterm-4-0d677ea96590d19d313472418b9d3fa4.webp"},23561:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/mobaxterm-5-b93ee98e2487f52442dacc9b83e1b52a.webp"},72957:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/mobaxterm-6-37fc63e0cb12b9b19420d7a374c3d31a.webp"},64578:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/mobaxterm-8-d3370454369e54fbc22ca40c7ef50a2a.webp"},92364:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/mobaxterm-9-262d9c655a1778c98421ad5179c4685c.webp"},19063:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/pc-device-mgr-31e6d7f9b4a8a052cdfad54479b8de5e.webp"},8312:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/pilite2-port-8464c005fb4765f4ac616e1fa3b52fab.webp"},79938:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return a}});var t=n(75271);let i={},r=t.createContext(i);function a(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);