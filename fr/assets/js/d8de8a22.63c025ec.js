"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["90230"],{28489:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>a,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-c/fly-c8/wiring","title":"Connexion de la carte m\xe8re","description":"Sch\xe9ma des interfaces","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-c/fly-c8/wiring.mdx","sourceDirName":"ProductDoc/MainBoard/fly-c/fly-c8","slug":"/ProductDoc/MainBoard/fly-c/fly-c8/wiring","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-c/fly-c8/wiring","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-c/fly-c8/wiring.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8,"sidebar_label":"Connexion de la carte m\xe8re"},"sidebar":"tutorialSidebar","previous":{"title":"Lecture et v\xe9rification de l\'ID de la carte m\xe8re","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-c/fly-c8/read-id"},"next":{"title":"klipper\u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-c/fly-c8/cfg"}}'),t=s("74132"),r=s("94551");let a={sidebar_position:8,sidebar_label:"Connexion de la carte m\xe8re"},l="Connexion de la carte m\xe8re",d={},c=[{value:"Sch\xe9ma des interfaces",id:"sch\xe9ma-des-interfaces",level:2},{value:"Explication des interfaces",id:"explication-des-interfaces",level:3},{value:"Explication des broches",id:"explication-des-broches",level:3},{value:"Branchement de l&#39;alimentation",id:"branchement-de-lalimentation",level:2},{value:"Installation des pilotes",id:"installation-des-pilotes",level:2},{value:"Sautez les configurations du pilote de la carte m\xe8re",id:"sautez-les-configurations-du-pilote-de-la-carte-m\xe8re",level:3},{value:"Installation des pilotes",id:"installation-des-pilotes-1",level:3},{value:"Branchement des moteurs pas \xe0 pas",id:"branchement-des-moteurs-pas-\xe0-pas",level:2},{value:"Branchement des tubes chauffants",id:"branchement-des-tubes-chauffants",level:2},{value:"Branchement des lits chauffants",id:"branchement-des-lits-chauffants",level:2},{value:"Branchement des sondes de temp\xe9rature",id:"branchement-des-sondes-de-temp\xe9rature",level:2},{value:"Introduction des types de sondes",id:"introduction-des-types-de-sondes",level:3},{value:"Connexion des sondes de temp\xe9rature sur la carte m\xe8re",id:"connexion-des-sondes-de-temp\xe9rature-sur-la-carte-m\xe8re",level:3},{value:"Branchement des ventilateurs",id:"branchement-des-ventilateurs",level:2},{value:"Branchement des interrupteurs de fin de course",id:"branchement-des-interrupteurs-de-fin-de-course",level:2},{value:"Branchement des sondes de nivellement",id:"branchement-des-sondes-de-nivellement",level:2},{value:"Branchement des interrupteurs de proximit\xe9 m\xe9talliques",id:"branchement-des-interrupteurs-de-proximit\xe9-m\xe9talliques",level:3},{value:"Branchement de BL-Touch",id:"branchement-de-bl-touch",level:3},{value:"Branchement de Klicky",id:"branchement-de-klicky",level:3},{value:"Branchement de Voron Tap",id:"branchement-de-voron-tap",level:3},{value:"Branchement de l&#39;\xe9cran FLY-Mini12864 LCD",id:"branchement-de-l\xe9cran-fly-mini12864-lcd",level:2}];function u(e){let n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{ImageView:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"connexion-de-la-carte-m\xe8re",children:"Connexion de la carte m\xe8re"})}),"\n",(0,t.jsx)(n.h2,{id:"sch\xe9ma-des-interfaces",children:"Sch\xe9ma des interfaces"}),"\n",(0,t.jsx)(n.h3,{id:"explication-des-interfaces",children:"Explication des interfaces"}),"\n",(0,t.jsx)(i,{image:s(77031).Z,size:"50%",align:"center"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"explication-des-broches",children:"Explication des broches"}),"\n",(0,t.jsx)(i,{image:s(50164).Z,size:"50%",align:"center"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"branchement-de-lalimentation",children:"Branchement de l'alimentation"}),"\n",(0,t.jsx)(i,{image:s(11999).Z,size:"40%",align:"center"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"installation-des-pilotes",children:"Installation des pilotes"}),"\n",(0,t.jsx)(n.h3,{id:"sautez-les-configurations-du-pilote-de-la-carte-m\xe8re",children:"Sautez les configurations du pilote de la carte m\xe8re"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Mode STEP/DIR."})," Dans ce mode, la subdivision est d\xe9finie en utilisant un capuchon de saut, et le courant est ajust\xe9 en r\xe9gulant le potentiom\xe8tre. Les plus courants sont A4988, 8825 qui n\xe9cessitent de consulter la table de configuration de subdivision fournie par le fabricant, puis de d\xe9finir la subdivision \xe0 l'aide d'un capuchon de saut."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Mode UART."})," Les pilotes les plus couramment utilis\xe9s dans ce mode sont : TMC2208, TMC2209, TMC2226, etc. Ces puces de pilotage peuvent communiquer de mani\xe8re asynchrone en s\xe9rie avec le contr\xf4leur principal via UART, et la subdivision, le courant de fonctionnement, le mode silencieux, etc., du pilote peuvent \xeatre d\xe9finis en modifiant le fichier de configuration."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Mode SPI."})," Les pilotes les plus couramment utilis\xe9s dans ce mode sont : TMC5160, TMC2130, TMC2240, etc. Ces puces de pilotage peuvent \xe9galement d\xe9finir la subdivision, le courant de fonctionnement, le mode silencieux, etc., du pilote en modifiant le fichier de configuration."]}),"\n",(0,t.jsx)(i,{image:s(49999).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"installation-des-pilotes-1",children:"Installation des pilotes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Les pilotes doivent \xeatre v\xe9rifi\xe9s avant installation pour \xe9viter tout dommage au pilote ou \xe0 la carte m\xe8re."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Pilotes FLY :"})," Si vous n'utilisez pas la fonction de r\xe9initialisation sans fin, placez l'interrupteur \xe0 bascule sur la position 1 ; au contraire, si vous utilisez la fonction de r\xe9initialisation sans fin, placez l'interrupteur \xe0 bascule sur la position ON."]}),"\n",(0,t.jsx)(i,{image:s(70339).Z,size:"40%",align:"center"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"**Attention !!! Lors de l'installation du module de pilote, assurez-vous que la direction est correcte, c'est-\xe0-dire que la broche EN doit \xeatre \xe0 l'angle sup\xe9rieur gauche, sinon cela peut endommager le pilote et m\xeame la carte m\xe8re !!! Assurez-vous de bien fixer un dissipateur thermique sur le pilote !!!"}),"\n"]})}),"\n",(0,t.jsx)(i,{image:s(92649).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"branchement-des-moteurs-pas-\xe0-pas",children:"Branchement des moteurs pas \xe0 pas"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Quel que soit le fabricant de moteur pas \xe0 pas biphas\xe9, il se termine toujours par 4 fils. Quelle que soit la couleur, noir, blanc, vert, jaune, il s'agit toujours de 4 fils. Par cons\xe9quent, nous devons regrouper les fils en deux groupes, A et B."}),"\n",(0,t.jsx)(n.li,{children:"Pour les moteurs pas \xe0 pas biphasiques \xe0 quatre fils, nous n'avons pas besoin de savoir quel est le groupe A ou le groupe B, il suffit de d\xe9terminer un groupe, puis de modifier la direction du moteur dans la configuration."}),"\n"]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Dans une imprimante 3D, le moteur pas \xe0 pas biphasique \xe0 quatre fils est le plus couramment utilis\xe9, comme indiqu\xe9 ci-dessous. Il existe deux m\xe9thodes pour identifier la s\xe9quence des fils du moteur pas \xe0 pas :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Connectez deux fils au hasard, tournez l'axe du moteur \xe0 la main, si une r\xe9sistance significative est ressentie, alors ces deux fils forment un groupe. Sinon, ils ne forment pas un groupe, il faut tester les autres fils."}),"\n",(0,t.jsx)(n.li,{children:"Utilisez un multim\xe8tre r\xe9gl\xe9 sur le mode de continuit\xe9, testez les deux fils au hasard du moteur pas \xe0 pas, si ils sont connect\xe9s, alors ils forment un groupe. Sinon, ils ne forment pas un groupe, il faut tester les autres fils."}),"\n"]}),"\n",(0,t.jsx)(i,{image:s(30071).Z,size:"50%",align:"center"}),"\n",(0,t.jsx)(i,{image:s(2096).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"branchement-des-tubes-chauffants",children:"Branchement des tubes chauffants"}),"\n",(0,t.jsx)(i,{image:s(78181).Z,size:"60%",align:"center"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"branchement-des-lits-chauffants",children:"Branchement des lits chauffants"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Lits chauffants AC :"})," Attention lors du branchement du relais \xe0 semi-conducteur, veillez \xe0 ne pas inverser l'entr\xe9e et la sortie."]}),"\n",(0,t.jsx)(i,{image:s(54628).Z,size:"20%",align:"center"}),"\n",(0,t.jsx)(i,{image:s(22429).Z,size:"40%",align:"center"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Lits chauffants DC :"})," Attention lors de l'utilisation de la MOS embarqu\xe9e pour alimenter les lits chauffants DC, veillez \xe0 ne pas d\xe9passer 10A. Si la consommation est sup\xe9rieure \xe0 10A, il est recommand\xe9 d'utiliser un module MOS externe, sinon cela pourrait causer des dommages irr\xe9versibles \xe0 la carte m\xe8re."]}),"\n",(0,t.jsx)(i,{image:s(77132).Z,size:"60%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"branchement-des-sondes-de-temp\xe9rature",children:"Branchement des sondes de temp\xe9rature"}),"\n",(0,t.jsx)(n.h3,{id:"introduction-des-types-de-sondes",children:"Introduction des types de sondes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"La m\xe9thode de connexion des sondes est illustr\xe9e ci-dessous. Le type de r\xe9sistance thermique doit \xeatre consult\xe9 aupr\xe8s du vendeur."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Si vous avez achet\xe9 FLY (comme illustr\xe9 ci-dessous), configurez sensor_type en tant que : ",(0,t.jsx)(n.strong,{children:"ATC Semitec 104GT-2"})]}),"\n",(0,t.jsx)(i,{image:s(41736).Z,size:"30%",align:"center"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Si vous avez un NTC 100K classique (comme illustr\xe9 ci-dessous), configurez sensor_type en tant que : ",(0,t.jsx)(n.strong,{children:"Generic 3950"})]}),"\n",(0,t.jsx)(i,{image:s(95993).Z,size:"40%",align:"center"}),"\n",(0,t.jsx)(i,{image:s(32117).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"connexion-des-sondes-de-temp\xe9rature-sur-la-carte-m\xe8re",children:"Connexion des sondes de temp\xe9rature sur la carte m\xe8re"}),"\n",(0,t.jsx)(i,{image:s(3916).Z,size:"40%",align:"center"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"branchement-des-ventilateurs",children:"Branchement des ventilateurs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Branchement des ventilateurs"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Choix de la tension du ventilateur. Branchez simplement le capuchon de saut sur la broche correspondant \xe0 la tension souhait\xe9e, comme illustr\xe9 ci-dessous. Remarque : les m\xe9thodes de saut de broche dans la zone encadr\xe9e en jaune sont identiques.\nAttention !!! Une tension de ventilateur incorrecte peut endommager le ventilateur ou le module MOS."})}),"\n",(0,t.jsx)(i,{image:s(66070).Z,size:"30%",align:"center"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Branchement des ventilateurs"}),"\n"]}),"\n",(0,t.jsx)(i,{image:s(10508).Z,size:"30%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"branchement-des-interrupteurs-de-fin-de-course",children:"Branchement des interrupteurs de fin de course"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Les interrupteurs de fin de course ont deux types : normalement ouvert (NO) et normalement ferm\xe9 (NC). En g\xe9n\xe9ral, sur une imprimante 3D, il est recommand\xe9 d'utiliser ",(0,t.jsx)(n.strong,{children:"normalement ferm\xe9 (NC)"}),", afin que le syst\xe8me signale une erreur rapidement si la ligne de l'interrupteur de fin de course pr\xe9sente un probl\xe8me, \xe9vitant ainsi des collisions non n\xe9cessaires et la d\xe9t\xe9rioration de l'imprimante."]}),"\n",(0,t.jsx)(i,{image:s(26770).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"branchement-des-sondes-de-nivellement",children:"Branchement des sondes de nivellement"}),"\n",(0,t.jsx)(n.h3,{id:"branchement-des-interrupteurs-de-proximit\xe9-m\xe9talliques",children:"Branchement des interrupteurs de proximit\xe9 m\xe9talliques"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"La recommandation officielle de VORON est d'utiliser le capteur Omron Omron TL-Q5MC (l'offre pr\xe9c\xe9dente \xe9tait PL08N, dont le principe est le m\xeame, mais la distance de d\xe9tection est diff\xe9rente) pour le nivellement du lit chaud. Le c\xe2blage est illustr\xe9 ci-dessous."}),"\n",(0,t.jsx)(i,{image:s(39447).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"branchement-de-bl-touch",children:"Branchement de BL-Touch"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"BL-touch a cinq fils, trois font partie du premier groupe, responsable de l'alimentation du capteur et du d\xe9ploiement du probe, le deuxi\xe8me groupe est constitu\xe9 de la masse et de la ligne de signal, qui transmettent le signal de fin de course. V\xe9rifiez attentivement l'ordre des fils lors du branchement de BL-touch, un c\xe2blage incorrect pourrait endommager d\xe9finitivement le capteur et la carte m\xe8re !!! Le c\xe2blage est illustr\xe9 ci-dessous."}),"\n",(0,t.jsx)(i,{image:s(14552).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"branchement-de-klicky",children:"Branchement de Klicky"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Klicky est un capteur de nivellement tiers qui peut \xeatre fabriqu\xe9 \xe0 faible co\xfbt \xe0 la maison et offre des performances stables et une bonne rapport qualit\xe9-prix, il est recommand\xe9 d'\xeatre utilis\xe9. Le c\xe2blage est illustr\xe9 ci-dessous."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Adresse du projet : ",(0,t.jsx)(n.a,{href:"https://github.com/jlas1/Klicky-Probe",title:"Adresse du projet, cliquez pour sauter",children:"jlas1/Klicky-Probe"})]}),"\n",(0,t.jsx)(i,{image:s(91481).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"branchement-de-voron-tap",children:"Branchement de Voron Tap"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Tap est un z-probe bas\xe9 sur la buse, adapt\xe9 aux conceptions d'imprimantes V2 et Trident. L'ensemble de la t\xeate d'outil se d\xe9place pour activer l'interrupteur lumineux, offrant une pr\xe9cision sup\xe9rieure aux interrupteurs de fin de course conventionnels et peut utiliser presque tous les plateaux d'impression sur le march\xe9."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Voron Tap n'est pas recommand\xe9 de brancher sur ",(0,t.jsx)(n.strong,{children:"24V"}),", certains versions peuvent provoquer la destruction du capteur Tap avec une certaine probabilit\xe9, ce n'est pas un probl\xe8me de produit Fly, mais un d\xe9faut de conception de Voron Tap, veuillez \xeatre inform\xe9 !!!"]})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Attention : Ne branchez pas 5V et GND \xe0 l'envers, sinon cela pourrait endommager le capteur Tap et m\xeame la carte m\xe8re !!!"})}),"\n",(0,t.jsx)(i,{image:s(12561).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"branchement-de-l\xe9cran-fly-mini12864-lcd",children:"Branchement de l'\xe9cran FLY-Mini12864 LCD"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Le sch\xe9ma de c\xe2blage de l'\xe9cran mini12864 de FLY est illustr\xe9 ci-dessous, veuillez consulter l'usine respective pour les \xe9crans d'autres fabricants. Si l'\xe9cran Mini12864 est invers\xe9 ou mal connect\xe9, il peut emp\xeacher le PC de se connecter au MCU. Si vous pouvez connecter le MCU de la carte m\xe8re avant d'utiliser l'\xe9cran Mini12864, mais apr\xe8s l'avoir utilis\xe9, vous ne pouvez plus le connecter, essayez de d\xe9brancher les connexions de l'\xe9cran Mini12864 !!!"}),"\n",(0,t.jsx)(i,{image:s(82099).Z,size:"30%",align:"center"}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},77031:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/interface-36941b90883683ab178e0f872cd9470c.webp"},50164:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/pin-34c7e23127cea3f45d0d8104c4a86b53.webp"},22429:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/bed-ac-2-7b8b34b5a35ad362c351d1730dfaa2ef.webp"},77132:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/bed-dc-1902b6b7b07c03ed8e3e8c55929ef356.webp"},14552:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/bltouch-ade840a1b22a65a7fbd845340f7d069b.webp"},26770:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/endstop-17e7ad28bfe9f08f3a6dca968de96ea3.webp"},66070:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/fan-voltage-c42c026df4aeefe793c6133986187dae.webp"},10508:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/fan-c91414481219f757f67e7004d79325d6.webp"},78181:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/heater-4dc34bf6f7ae45385fe2616a45e9c140.webp"},91481:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/klicky-688e908d3923c268a9ed4b2b67fa50a1.webp"},82099:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/mini12864-e73ba1c6458007df1c8261d610a14ef3.webp"},2096:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/motor-de540367c07aa3488fc9db0edbcf4dde.webp"},39447:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/pl08-09b124f0475ae5e61f6628f8918e0fc5.webp"},11999:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/power-68ae0d8ede60adc968ac7c14a312d6b2.webp"},12561:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/tap-348d51f5541174ae32f898dcc0d82a67.webp"},3916:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/thermistor-6668004323eb3e5a4ed2e134e1755e55.webp"},54628:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/bed-ac-1-27e7237f87ddfd04ca5392c3487f4ac5.webp"},49999:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/drive-dip-aff3fda803e9be2628f35059c8849057.webp"},92649:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/drive-install-a1f9947c4f7a2a8724aabab95c5fab38.webp"},70339:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/fly2209-f37b9e1a5bd36dc1839d7558663806b8.webp"},30071:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/motor-sch-7914db5b80127d5a16b7a3d0be311a07.webp"},41736:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/ntc-1-2a44153c94ef48946e8e538e8deb5ced.webp"},95993:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/ntc-2-e19315cc0501e3f1e49e3edff3a31053.webp"},32117:function(e,n,s){s.d(n,{Z:function(){return i}});let i="data:image/webp;base64,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"},94551:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var i=s(39546);let t={},r=i.createContext(t);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);