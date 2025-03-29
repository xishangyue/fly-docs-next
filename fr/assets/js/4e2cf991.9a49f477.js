"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["41851"],{8690:function(e,s,r){r.r(s),r.d(s,{default:()=>d,frontMatter:()=>a,metadata:()=>n,assets:()=>o,toc:()=>u,contentTitle:()=>l});var n=JSON.parse('{"id":"ProductDoc/SBC/fly-pi-v2/ssh","title":"Connexion \xe0 la station sup\xe9rieure via SSH","description":"* Il est possible d\'utiliser le port s\xe9rie ou le WIFI pour se connecter \xe0 l\'appareil","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/SBC/fly-pi-v2/ssh.mdx","sourceDirName":"ProductDoc/SBC/fly-pi-v2","slug":"/ProductDoc/SBC/fly-pi-v2/ssh","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-pi-v2/ssh","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-pi-v2/ssh.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"frontMatter":{"position secondaire":3,"\xe9tiquette de la barre lat\xe9rale":"Connexion SSH \xe0 la station sup\xe9rieure"},"sidebar":"tutorialSidebar","previous":{"title":"Pr\xe9sentation","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-pi-v2/"},"next":{"title":"FLY-Lite 2","permalink":"/fly-docs-next/fr/docs/category/fly-lite-2"}}'),t=r("74132"),i=r("94551");let a={"position secondaire":3,"\xe9tiquette de la barre lat\xe9rale":"Connexion SSH \xe0 la station sup\xe9rieure"},l="Connexion \xe0 la station sup\xe9rieure via SSH",o={},u=[{value:"Utilisation du port s\xe9rie pour se connecter \xe0 la station sup\xe9rieure via SSH",id:"utilisation-du-port-s\xe9rie-pour-se-connecter-\xe0-la-station-sup\xe9rieure-via-ssh",level:2},{value:"Utilisation de l&#39;adresse IP r\xe9seau pour se connecter \xe0 la station sup\xe9rieure via SSH",id:"utilisation-de-ladresse-ip-r\xe9seau-pour-se-connecter-\xe0-la-station-sup\xe9rieure-via-ssh",level:2}];function c(e){let s={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{ImageView:n,TabItem:a,Tabs:l}=s;return n||p("ImageView",!0),a||p("TabItem",!0),l||p("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"connexion-\xe0-la-station-sup\xe9rieure-via-ssh",children:"Connexion \xe0 la station sup\xe9rieure via SSH"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Il est possible d'utiliser le port s\xe9rie ou le WIFI pour se connecter \xe0 l'appareil"}),"\n",(0,t.jsxs)(s.li,{children:["Veuillez pr\xe9parer \xe0 l'avance ",(0,t.jsx)(s.strong,{children:"MobaXterm_Personal"})," ou un autre outil de terminal SSH"]}),"\n",(0,t.jsxs)(s.li,{children:["V\xe9rifiez que la carte SD ou M2WE a \xe9t\xe9 grav\xe9e avec ",(0,t.jsx)(s.strong,{children:"le syst\xe8me correspondant \xe0 la station sup\xe9rieure"})]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Si la station sup\xe9rieure ne d\xe9marre pas correctement, retirez les p\xe9riph\xe9riques tels que le pilote, les limites, les ventilateurs, etc. !!!"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Enfin, connectez-vous via le r\xe9seau pour faciliter la compilation du firmware !!!"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Pour compiler le firmware, consultez le tutoriel sur la connexion \xe0 la station sup\xe9rieure via le WIFI ou le c\xe2ble Ethernet"})}),"\n"]}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsxs)(a,{value:"serial",label:"Connexion par port s\xe9rie",default:!0,children:[(0,t.jsx)(s.h2,{id:"utilisation-du-port-s\xe9rie-pour-se-connecter-\xe0-la-station-sup\xe9rieure-via-ssh",children:"Utilisation du port s\xe9rie pour se connecter \xe0 la station sup\xe9rieure via SSH"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Connectez le poste de pilotage FLY \xe0 l'ordinateur via un c\xe2ble USB Type-C"}),"\n",(0,t.jsx)(s.li,{children:"Pour les autres postes de pilotage, veuillez consulter la m\xe9thode de connexion"}),"\n"]}),(0,t.jsx)(l,{children:(0,t.jsxs)(a,{value:"piv2",label:"FLY-Pi v2",default:!0,children:[(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Port de FLY-Pi v2"}),"\n"]}),(0,t.jsx)(n,{image:r(97494).Z,size:"20%",align:"center"})]})}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Si la carte m\xe8re est correctement connect\xe9e \xe0 l'ordinateur, ouvrez le gestionnaire de p\xe9riph\xe9riques et vous verrez le port CH340"}),"\n"]}),(0,t.jsx)(n,{image:r(19063).Z,size:"40%",align:"center"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Ouvrez ",(0,t.jsx)(s.code,{children:"MobaXterm"}),", effectuez les param\xe9trages suivants, s\xe9lectionnez le port que vous avez vu dans le gestionnaire de p\xe9riph\xe9riques"]}),"\n"]}),(0,t.jsx)(n,{image:r(25400).Z,size:"40%",align:"center"}),(0,t.jsx)(n,{image:r(91363).Z,size:"40%",align:"center"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Si tout se passe bien, vous verrez l'\xe9cran de d\xe9marrage"}),"\n"]}),(0,t.jsx)(n,{image:r(88525).Z,size:"40%",align:"center"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Attendez un moment, si vous voyez cet \xe9cran, c'est qu'il a d\xe9marr\xe9"}),"\n"]}),(0,t.jsx)(n,{image:r(61305).Z,size:"40%",align:"center"}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Si apr\xe8s quelques minutes, comme sur l'image ci-dessous, rien n'est affich\xe9, appuyez plusieurs fois sur la touche Entr\xe9e"})}),(0,t.jsx)(n,{image:r(23561).Z,size:"40%",align:"center"}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Apr\xe8s avoir appuy\xe9 sur Entr\xe9e, vous verrez le contenu comme indiqu\xe9 ci-dessous"})}),(0,t.jsx)(n,{image:r(72957).Z,size:"40%",align:"center"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Si vous souhaitez voir l'adresse IP, tapez ",(0,t.jsx)(s.code,{children:"ip a | grep inet"})," dans ssh, puis appuyez sur Entr\xe9e. Recherchez l'adresse IP dans la sortie qui correspond au segment de votre routeur"]}),"\n"]}),(0,t.jsx)(n,{image:r(64578).Z,size:"40%",align:"center"})]}),(0,t.jsxs)(a,{value:"net",label:"Connexion r\xe9seau",default:!0,children:[(0,t.jsx)(s.h2,{id:"utilisation-de-ladresse-ip-r\xe9seau-pour-se-connecter-\xe0-la-station-sup\xe9rieure-via-ssh",children:"Utilisation de l'adresse IP r\xe9seau pour se connecter \xe0 la station sup\xe9rieure via SSH"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Connectez-vous \xe0 l'interface arri\xe8re de la ",(0,t.jsx)(s.strong,{children:"routeur"})," auquel la station sup\xe9rieure est connect\xe9e"]}),"\n",(0,t.jsx)(s.li,{children:"Assurez-vous que le syst\xe8me a d\xe9marr\xe9 correctement"}),"\n",(0,t.jsxs)(s.li,{children:["Assurez-vous de conna\xeetre le nom d'utilisateur et le mot de passe de la station sup\xe9rieure, par d\xe9faut pour le syst\xe8me FLY, l'utilisateur est ",(0,t.jsx)(s.strong,{children:"fly"})," et le mot de passe est ",(0,t.jsx)(s.strong,{children:"mellow"})]}),"\n",(0,t.jsx)(s.li,{children:"Si la carte m\xe8re a d\xe9marr\xe9 et est connect\xe9e au r\xe9seau, vous pouvez vous connecter \xe0 SSH via l'adresse IP"}),"\n",(0,t.jsx)(s.li,{children:"Ouvrez MobaXterm, effectuez les param\xe9trages suivants, entrez l'adresse IP que vous avez vue pr\xe9c\xe9demment, vous pouvez \xe9galement la trouver dans l'interface arri\xe8re du routeur"}),"\n"]}),(0,t.jsx)(n,{image:r(25400).Z,size:"40%",align:"center"}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Note : Ici, au quatri\xe8me \xe9tape, entrez le nom d'utilisateur de la station sup\xe9rieure"})}),(0,t.jsx)(n,{image:r(92364).Z,size:"40%",align:"center"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["La premi\xe8re connexion peut faire appara\xeetre cette fen\xeatre, cliquez sur ",(0,t.jsx)(s.code,{children:"Accept"})," pour continuer"]}),"\n"]}),(0,t.jsx)(n,{image:r(4828).Z,size:"40%",align:"center"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Une fois la demande de mot de passe affich\xe9e, entrez le mot de passe de la station sup\xe9rieure et appuyez sur Entr\xe9e"}),"\n"]}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Note : Ici, le mot de passe entr\xe9 ne sera pas visible, appuyez directement sur Entr\xe9e apr\xe8s l'avoir saisi"})}),(0,t.jsxs)(s.p,{children:["L'utilisateur par d\xe9faut est : ",(0,t.jsx)(s.code,{children:"fly"})," , le mot de passe par d\xe9faut est : ",(0,t.jsx)(s.code,{children:"mellow"})]}),(0,t.jsx)(n,{image:r(36847).Z,size:"40%",align:"center"}),(0,t.jsx)(n,{image:r(45565).Z,size:"40%",align:"center"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"La connexion est r\xe9ussie"}),"\n"]})]})]}),"\n",(0,t.jsx)(s.hr,{})]})}function d(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function p(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},25400:function(e,s,r){r.d(s,{Z:function(){return n}});let n=r.p+"assets/images/mobaxterm-1-2a44e31779ffe0a74fdb09921c24ca3e.webp"},4828:function(e,s,r){r.d(s,{Z:function(){return n}});let n=r.p+"assets/images/mobaxterm-10-2699dcaebc29cf1d3bedcdbb40b41b30.webp"},36847:function(e,s,r){r.d(s,{Z:function(){return n}});let n=r.p+"assets/images/mobaxterm-11-3d58dd094664307317d5b7d7a973f88e.webp"},45565:function(e,s,r){r.d(s,{Z:function(){return n}});let n=r.p+"assets/images/mobaxterm-12-032fc32a515ee0afe65d9e77762cbace.webp"},91363:function(e,s,r){r.d(s,{Z:function(){return n}});let n=r.p+"assets/images/mobaxterm-2-273b3b4bfff52a5c1a1e388dc8964112.webp"},88525:function(e,s,r){r.d(s,{Z:function(){return n}});let n=r.p+"assets/images/mobaxterm-3-151965778ddfb93f44aaa24e10e02dbb.webp"},61305:function(e,s,r){r.d(s,{Z:function(){return n}});let n=r.p+"assets/images/mobaxterm-4-0d677ea96590d19d313472418b9d3fa4.webp"},23561:function(e,s,r){r.d(s,{Z:function(){return n}});let n=r.p+"assets/images/mobaxterm-5-b93ee98e2487f52442dacc9b83e1b52a.webp"},72957:function(e,s,r){r.d(s,{Z:function(){return n}});let n=r.p+"assets/images/mobaxterm-6-37fc63e0cb12b9b19420d7a374c3d31a.webp"},64578:function(e,s,r){r.d(s,{Z:function(){return n}});let n=r.p+"assets/images/mobaxterm-8-d3370454369e54fbc22ca40c7ef50a2a.webp"},92364:function(e,s,r){r.d(s,{Z:function(){return n}});let n=r.p+"assets/images/mobaxterm-9-262d9c655a1778c98421ad5179c4685c.webp"},19063:function(e,s,r){r.d(s,{Z:function(){return n}});let n=r.p+"assets/images/pc-device-mgr-31e6d7f9b4a8a052cdfad54479b8de5e.webp"},97494:function(e,s,r){r.d(s,{Z:function(){return n}});let n=r.p+"assets/images/piv2-port-05142296eee0b68d1ec9d84c27acec72.webp"},94551:function(e,s,r){r.d(s,{Z:function(){return l},a:function(){return a}});var n=r(39546);let t={},i=n.createContext(t);function a(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);