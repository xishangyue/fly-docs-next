"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["41959"],{2930:function(e,n,i){i.d(n,{ZP:function(){return a},d$:function(){return l}});var r=i(52676),s=i(79938);let l=[];function t(e){let n={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{ImageView:l}=n;return!l&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Assurez-vous que l'h\xf4te est connect\xe9 \xe0 Internet et que le c\xe2ble de donn\xe9es du p\xe9riph\xe9rique inf\xe9rieur est capable de transf\xe9rer des donn\xe9es."}),"\n",(0,r.jsxs)(n.li,{children:["Connectez-vous via SSH \xe0 l'h\xf4te et entrez ",(0,r.jsx)(n.code,{children:"lsusb"})," puis appuyez sur Entr\xe9e. Si vous voyez les informations entour\xe9es dans l'image ci-dessous, vous pouvez passer \xe0 l'\xe9tape suivante.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Si aucune information n'est renvoy\xe9e, c'est un probl\xe8me avec le syst\xe8me de l'h\xf4te, nous ne pouvons rien y faire. Vous devez remplacer le syst\xe8me ou changer l'h\xf4te par un autre qui fonctionne correctement."}),"\n",(0,r.jsxs)(n.li,{children:["Si la commande ",(0,r.jsx)(n.code,{children:"lsusb"})," ne donne pas de r\xe9sultats, vous pouvez ex\xe9cuter cette commande pour l'installer :","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install usbutils\n"})}),"\n",(0,r.jsx)(l,{image:i(55811).Z,size:"85%",align:"left"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"1d50:606f"})," fait r\xe9f\xe9rence au p\xe9riph\xe9rique que vous allez utiliser. La mention ",(0,r.jsx)(n.code,{children:"OpenMoko, Inc. Geschwister Schneider CAN adapter"})," peut \xeatre utile mais n'est pas une condition n\xe9cessaire.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Certains h\xf4tes peuvent afficher le p\xe9riph\xe9rique de mani\xe8re incompl\xe8te ou ne pas le montrer du tout en raison de probl\xe8mes de syst\xe8me."}),"\n",(0,r.jsxs)(n.li,{children:["Si vous entrez la commande ",(0,r.jsx)(n.code,{children:"lsusb"})," et que le p\xe9riph\xe9rique s'affiche, mais sans ",(0,r.jsx)(n.code,{children:"1d50:606f"}),", essayez de changer le c\xe2ble de donn\xe9es et de connecter la carte m\xe8re \xe0 d'autres ports USB de l'h\xf4te."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Si vous avez d\xe9j\xe0 effectu\xe9 les \xe9tapes ci-dessus et que vous avez r\xe9ussi \xe0 flasher le firmware Klipper, et que la carte m\xe8re fonctionne normalement, mais que vous voulez simplement mettre \xe0 jour le firmware Klipper, consultez le chapitre ",(0,r.jsx)(n.code,{children:"Mise \xe0 jour du firmware"})," dans le menu de droite de cette page."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Remarques",type:"warning",children:(0,r.jsxs)(n.p,{children:["Vous ne pouvez pas passer \xe0 l'\xe9tape suivante que si vous voyez ",(0,r.jsx)(n.code,{children:"1d50:606f"}),"."]})})]})}function a(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},19339:function(e,n,i){i.d(n,{ZP:function(){return a},d$:function(){return l}});var r=i(52676),s=i(79938);let l=[];function t(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Katapult \xe9tait auparavant appel\xe9 CanBoot, puis renomm\xe9 katapult"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Le firmware Katapult est un type de bootloader qui peut \xeatre utilis\xe9 avec Klipper. Apr\xe8s avoir \xe9t\xe9 grav\xe9 via DFU ou d'autres m\xe9thodes, il permet une mise \xe0 jour du firmware via commande en un clic."}),"\n",(0,r.jsx)(n.li,{children:"Avantages : Un double appui rapide sur le bouton de r\xe9initialisation (reset) ou une coupure d'alimentation rapide deux fois permet d'entrer dans le firmware Katapult, auquel cas une LED clignote sur la carte m\xe8re."}),"\n",(0,r.jsx)(n.li,{children:"Le firmware Katapult ne peut \xeatre utilis\xe9 que pour graver des firmwares, et non pour se connecter \xe0 klipper !!!"}),"\n",(0,r.jsxs)(n.li,{children:["Le firmware Katapult supporte trois m\xe9thodes de connexion \xe0 l'ordinateur principal, les firmwares de ces trois m\xe9thodes sont ind\xe9pendants les uns des autres :","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Connexion CAN","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour directement le firmware, r\xe9sistant aux interf\xe9rences."}),"\n",(0,r.jsx)(n.li,{children:"Inconv\xe9nients : Il faut conna\xeetre \xe0 l'avance le taux de transmission du firmware compil\xe9."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Connexion RS232","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour le firmware, r\xe9sistant fortement aux interf\xe9rences."}),"\n",(0,r.jsx)(n.li,{children:"Inconv\xe9nients : Il n'est pas possible de mettre \xe0 jour le firmware en un clic via commande, il faut entrer manuellement dans le firmware Katapult."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Connexion USB","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour directement le firmware."}),"\n",(0,r.jsx)(n.li,{children:"Inconv\xe9nients : Un c\xe2ble de donn\xe9es trop long peut \xeatre sujet aux interf\xe9rences, ce qui pourrait entra\xeener une d\xe9connexion."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},72147:function(e,n,i){i.d(n,{ZP:function(){return a},d$:function(){return l}});var r=i(52676),s=i(79938);let l=[];function t(e){let n={code:"code",li:"li",ol:"ol",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{ImageView:l}=n;return!l&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Installation de l'outil de gravure"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"L'interface sup\xe9rieure FLY n'a pas besoin d'ex\xe9cuter l'installation de l'outil de gravure"}),"\n",(0,r.jsx)(n.li,{children:"Si vous devez installer, veuillez noter : l'interface sup\xe9rieure doit \xeatre en mesure de se connecter \xe0 Internet pour installer correctement"}),"\n",(0,r.jsx)(n.li,{children:"Si vous avez d\xe9j\xe0 install\xe9, vous n'avez pas besoin d'installer"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install dfu-util -y\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Ex\xe9cutez la commande suivante pour v\xe9rifier si la connexion a r\xe9ussi."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"lsusb\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si aucun p\xe9riph\xe9rique DFU n'est d\xe9tect\xe9, essayez de r\xe9entrez en ",(0,r.jsx)(n.strong,{children:"mode de gravage"})]}),"\n",(0,r.jsxs)(n.li,{children:["En raison des probl\xe8mes de version du syst\xe8me, il est possible que d'autres noms soient affich\xe9s, si ",(0,r.jsx)(n.code,{children:"0483:df11"})," est affich\xe9, cela signifie que le mode de gravage a \xe9t\xe9 entr\xe9"]}),"\n"]}),"\n",(0,r.jsx)(l,{image:i(44691).Z,size:"100%",align:"left"}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"T\xe9l\xe9chargez les fichiers de firmware pr\xe9compil\xe9s"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Cela contient tous les fichiers de firmware pr\xe9compil\xe9s"}),"\n",(0,r.jsx)(n.li,{children:"Veuillez noter que l'interface sup\xe9rieure doit \xeatre en mesure de se connecter \xe0 Internet pour installer"}),"\n",(0,r.jsx)(n.li,{children:"L'interface sup\xe9rieure doit ex\xe9cuter la commande ci-dessous pour t\xe9l\xe9charger le paquet de fichiers de firmware (si le t\xe9l\xe9chargement ne peut pas \xeatre effectu\xe9 en raison de probl\xe8mes de r\xe9seau sur l'interface sup\xe9rieure, veuillez contacter l'administrateur du groupe de support apr\xe8s-vente)"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Si vous avez d\xe9j\xe0 t\xe9l\xe9charg\xe9 le paquet de fichiers de firmware, il est recommand\xe9 de mettre \xe0 jour le paquet de fichiers de firmware avant de poursuivre les autres op\xe9rations"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/FLY_Katapult && git pull\n"})})]})}function a(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},20006:function(e,n,i){i.d(n,{ZP:function(){return a},d$:function(){return l}});var r=i(52676),s=i(79938);let l=[];function t(e){let n={code:"code",li:"li",ol:"ol",strong:"strong",...(0,s.a)(),...e.components},{Button:l,ImageView:t}=n;return!l&&o("Button",!0),!t&&o("ImageView",!0),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Outil de gravure ",(0,r.jsx)(l,{variant:"contained",disableElevation:!0,href:"https://mellow-next.klipper.cn/docs/ResDownload/auxiliary_software/",children:"Lien de t\xe9l\xe9chargement"})]}),"\n",(0,r.jsxs)(n.li,{children:["Vous devez t\xe9l\xe9charger ",(0,r.jsx)(n.code,{children:"DFUProgrammer"})]}),"\n",(0,r.jsxs)(n.li,{children:["Copiez le firmware pr\xe9compil\xe9 (klipper.bin) ou le firmware pr\xe9compil\xe9 ",(0,r.jsx)(n.code,{children:"Katapult"})," dans un r\xe9pertoire au choix sur votre ordinateur"]}),"\n",(0,r.jsxs)(n.li,{children:["Connectez la carte m\xe8re au PC \xe0 l'aide d'un c\xe2ble de donn\xe9es Type-C, assurez-vous qu'elle est d\xe9j\xe0 en mode ",(0,r.jsx)(n.strong,{children:"DFU de gravure"})]}),"\n",(0,r.jsxs)(n.li,{children:["Ouvrez DFUProgrammer et suivez les instructions ci-dessous","\n",(0,r.jsx)(t,{image:i(15359).Z,size:"100%",align:"center"}),"\n",(0,r.jsx)(t,{image:i(14355).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:'Cliquez sur "Mettre \xe0 jour le firmware", patientez quelques instants, une fois la gravure termin\xe9e, retirez le c\xe2ble Type-C et le capuchon de saut'}),"\n"]})}function a(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}function o(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},38524:function(e,n,i){i.d(n,{ZP:function(){return a},d$:function(){return l}});var r=i(52676),s=i(79938);let l=[];function t(e){let n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components},{Button:l,ImageView:t}=n;return!l&&o("Button",!0),!t&&o("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Probl\xe8mes de compatibilit\xe9 du syst\xe8me, veuillez utiliser le port ",(0,r.jsx)(n.code,{children:"USB2.0"})," de l'ordinateur pour la gravure"]}),"\n",(0,r.jsx)(n.li,{children:"Si la gravure \xe9choue toujours, veuillez utiliser un logiciel de p\xe9riph\xe9rique pour la gravure"}),"\n"]})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Outil de gravure ",(0,r.jsx)(l,{variant:"contained",disableElevation:!0,href:"https://mellow-next.klipper.cn/docs/ResDownload/auxiliary_software/",children:"Lien de t\xe9l\xe9chargement"})]}),"\n",(0,r.jsxs)(n.li,{children:["T\xe9l\xe9chargez ",(0,r.jsx)(n.code,{children:"SetupSTM32CubeProgrammer"})," et ",(0,r.jsx)(n.code,{children:"Pilote DFU STM32"})]}),"\n",(0,r.jsxs)(n.li,{children:["Copiez le firmware compil\xe9 \xe0 l'avance (klipper.bin) ou le ",(0,r.jsx)(n.code,{children:"firmware Katapult"})," pr\xe9compil\xe9 dans un r\xe9pertoire au choix de l'ordinateur"]}),"\n",(0,r.jsxs)(n.li,{children:["Connectez la carte m\xe8re au PC via un c\xe2ble de donn\xe9es Type-C, assurez-vous que vous avez d\xe9j\xe0 :",(0,r.jsx)(l,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/MainBoard/fly-d/fly-d5/flash/bl#entrer-en-mode-de-gravage-dfu",children:"Entrer en mode de gravage DFU"})]}),"\n",(0,r.jsxs)(n.li,{children:["Dans STM32CubeProgrammer, choisissez le mode USB, puis rafra\xeechissez et connectez-vous","\n",(0,r.jsx)(t,{image:i(54411).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Si aucune fen\xeatre d'erreur n'appara\xeet, la connexion est r\xe9ussie.","\n",(0,r.jsx)(n.admonition,{title:"Avertissement",type:"danger",children:(0,r.jsxs)(n.p,{children:["Si le contenu suivant s'affiche, il s'agit d'un probl\xe8me avec l'ordinateur ou le logiciel, veuillez utiliser un logiciel de p\xe9riph\xe9rique pour la gravure :",(0,r.jsx)(l,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/MainBoard/fly-d/fly-d5/flash/bl#graver-le-firmware",children:"Tutoriel de gravure par logiciel de p\xe9riph\xe9rique"})]})}),"\n",(0,r.jsx)(t,{image:i(11542).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Cliquez sur l'ic\xf4ne de t\xe9l\xe9chargement \xe0 gauche et s\xe9lectionnez quelques options","\n",(0,r.jsx)(t,{image:i(88789).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Cliquez sur ",(0,r.jsx)(n.code,{children:"Browse"})," indiqu\xe9 par la fl\xe8che, puis s\xe9lectionnez le firmware \xe0 graver","\n",(0,r.jsx)(t,{image:i(34319).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["S\xe9lectionnez ",(0,r.jsx)(n.code,{children:"Start address"})," et entrez ",(0,r.jsx)(n.code,{children:"0x08000000"}),"\n",(0,r.jsx)(t,{image:i(18134).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Cliquez sur ",(0,r.jsx)(n.code,{children:"Start automatic mode"})," en bas pour commencer la gravure du firmware","\n",(0,r.jsx)(t,{image:i(92085).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Une fois le message suivant affich\xe9, cela signifie que la gravure du firmware est termin\xe9e","\n",(0,r.jsx)(t,{image:i(61566).Z,size:"100%",align:"center"}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}function o(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},67404:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>p,default:()=>x,assets:()=>h,toc:()=>m,frontMatter:()=>u});var r=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/bl","title":"Katapult\u56FA\u4EF6","description":"Katapult\u56FA\u4EF6\u8BF4\u660E","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/bl.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash","slug":"/ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/bl","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/bl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/bl.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"BL\u56FA\u4EF6\uFF0C\u8BF7\u5FFD\u7565\uFF01"},"sidebar":"tutorialSidebar","previous":{"title":"Tutoriel de recherche d\'ID","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/id"},"next":{"title":"R\xe9f\xe9rence de c\xe2blage","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v2/wiring"}}'),s=i("52676"),l=i("79938"),t=i("2930"),a=i("20006"),o=i("38524"),c=i("72147"),d=i("19339");let u={sidebar_position:6,sidebar_label:"BL\u56FA\u4EF6\uFF0C\u8BF7\u5FFD\u7565\uFF01"},p="Katapult\u56FA\u4EF6",h={},m=[{value:"Katapult\u56FA\u4EF6\u8BF4\u660E",id:"katapult\u56FA\u4EF6\u8BF4\u660E",level:2},...d.d$,{value:"\u8FDB\u5165\u70E7\u5F55\u6A21\u5F0F",id:"\u8FDB\u5165\u70E7\u5F55\u6A21\u5F0F",level:2},{value:"\u70E7\u5F55\u56FA\u4EF6",id:"\u70E7\u5F55\u56FA\u4EF6",level:2},...o.d$,...c.d$,...a.d$,...t.d$,{value:"\u786E\u8BA4\u56FA\u4EF6\u662F\u5426\u542F\u52A8",id:"\u786E\u8BA4\u56FA\u4EF6\u662F\u5426\u542F\u52A8",level:2}];function f(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{Button:r,ImageView:u,TabItem:p,Tabs:h}=n;return!r&&j("Button",!0),!u&&j("ImageView",!0),!p&&j("TabItem",!0),!h&&j("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"katapult\u56FA\u4EF6",children:"Katapult\u56FA\u4EF6"})}),"\n",(0,s.jsx)(n.h2,{id:"katapult\u56FA\u4EF6\u8BF4\u660E",children:"Katapult\u56FA\u4EF6\u8BF4\u660E"}),"\n",(0,s.jsx)(d.ZP,{}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SHT36 V2\u53EA\u80FD\u4F7F\u7528CAN\u8FDE\u63A5"}),"\n",(0,s.jsx)(n.li,{children:"\u8FD9\u8FB9\u63D0\u4F9BCAN\u56FA\u4EF6\u5206500K\u4E0E1M\u901F\u7387"}),"\n"]})}),"\n",(0,s.jsx)(n.admonition,{title:"\u6CE8\u610F\u4E8B\u9879",type:"warning",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"APMF072\u53EA\u80FD\u4F7F\u7528\u7535\u8111\u70E7\u5F55\u56FA\u4EF6"}),"\n",(0,s.jsx)(n.li,{children:"STM32F103\u53EA\u80FD\u4F7F\u7528\u4E0A\u4F4D\u673A\u66F4\u65B0\u56FA\u4EF6"}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u8FDB\u5165\u70E7\u5F55\u6A21\u5F0F",children:"\u8FDB\u5165\u70E7\u5F55\u6A21\u5F0F"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"\u5708\u8D77\u6765\u7684\u662FBOOT\u62E8\u7801"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"STM32F103\u4E0D\u9700\u8981\u8FDB\u884C\u672C\u6B65\u9AA4\uFF01\uFF01\uFF01\uFF01"}),"\n",(0,s.jsxs)(n.li,{children:["\u4E3B\u677F\u5B8C\u5168\u65AD\u7535\u60C5\u51B5\u4E0B\uFF0C\u6309\u7740BOOT\u6309\u952E\u7136\u540E\u5C06\u5E26\u6709\u6570\u636E\u4F20\u8F93\u7684\u6570\u636E\u7EBF\u4E00\u5934\u63A5\u4E3B\u677F\u4E00\u5934\u63A5\u4F60\u8BBE\u5907","\n",(0,s.jsx)(u,{image:i(84329).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u70E7\u5F55\u56FA\u4EF6",children:"\u70E7\u5F55\u56FA\u4EF6"}),"\n",(0,s.jsxs)(h,{children:[(0,s.jsxs)(p,{value:"win",label:"STM32F072\u4F7F\u7528windows\u70E7\u5F55\u6559\u7A0B",default:!0,children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["SHT36_V2\u7684Katapult\u56FA\u4EF6  ",(0,s.jsx)(r,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/firmware/BL/SHT36_V2.zip",children:"Cliquez pour t\xe9l\xe9charger automatiquement le firmware"})]}),"\n"]}),(0,s.jsx)(o.ZP,{})]}),(0,s.jsxs)(p,{value:"linux",label:"STM32F072\u4F7F\u7528\u4E0A\u4F4D\u673A\u70E7\u5F55\u6559\u7A0B",children:[(0,s.jsx)(c.ZP,{}),(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"\u70E7\u5F55\u56FA\u4EF6"}),"\n"]}),(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"\u53EA\u9700\u8981\u70E7\u5F55\u5176\u4E2D\u4E00\u4E2A\u56FA\u4EF6"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4E0B\u65B9\u662F500K CAN\u901F\u7387\u7684\u56FA\u4EF6\u5237\u5199\u6307\u4EE4"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo dfu-util -a 0 -d 0483:df11 --dfuse-address 0x08000000 -D ~/FLY_Katapult/developer/SHT36/FLY_SHT36V2_072_500K.BIN\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4E0B\u65B9\u662F1M CAN\u901F\u7387\u7684\u56FA\u4EF6\u5237\u5199\u6307\u4EE4"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo dfu-util -a 0 -d 0483:df11 --dfuse-address 0x08000000 -D ~/FLY_Katapult/developer/SHT36/FLY_SHT36V2_072_1M.BIN\n"})}),(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u51FA\u73B0\u4E0B\u56FE\u7BAD\u5934\u5904\u6240\u793A\u5185\u5BB9",(0,s.jsx)(n.code,{children:"File downloaded successfully"}),"\u5219\u70E7\u5F55\u6210\u529F"]}),"\n",(0,s.jsx)(u,{image:i(69056).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"\u70E7\u5F55\u5B8C\u6210\u540E\uFF0C\u9700\u8981\u7ED9\u4E3B\u677F\u5F7B\u5E95\u65AD\u7535\u4E00\u6B21\u3002"})})]}),(0,s.jsxs)(p,{value:"apm",label:"APM32F072\u4F7F\u7528windows\u70E7\u5F55\u6559\u7A0B",default:!0,children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["SHT36_V2\u7684Katapult\u56FA\u4EF6  ",(0,s.jsx)(r,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/firmware/BL/SHT36_V2.zip",children:"Cliquez pour t\xe9l\xe9charger automatiquement le firmware"})]}),"\n"]}),(0,s.jsx)(a.ZP,{})]}),(0,s.jsxs)(p,{value:"103",label:"STM32F103\u4F7F\u7528klipper\u66F4\u65B0\u56FA\u4EF6\u6559\u7A0B",default:!0,children:[(0,s.jsx)(t.ZP,{}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u62C9\u53D6\u9884\u5148\u7F16\u8BD1\u56FA\u4EF6"}),"\n",(0,s.jsx)(n.li,{children:"\u8FD9\u91CC\u9762\u90FD\u662F\u9884\u5148\u7F16\u8BD1\u597D\u7684\u56FA\u4EF6"}),"\n",(0,s.jsx)(n.li,{children:"\u8BF7\u6CE8\u610F\u4E0A\u4F4D\u673A\u9700\u8981\u80FD\u4E0A\u7F51\u624D\u53EF\u4EE5\u5B89\u88C5"}),"\n",(0,s.jsx)(n.li,{children:"\u4E0A\u4F4D\u673A\u9700\u8981\u6267\u884C\u4E0B\u65B9\u547D\u4EE4\u4E0B\u8F7D\u56FA\u4EF6\u5305"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5982\u679C\u5DF2\u7ECF\u4E0B\u8F7D\u8FC7\u56FA\u4EF6\u5305\u7684\u5EFA\u8BAE\u66F4\u65B0\u56FA\u4EF6\u5305\u540E\u5728\u8FDB\u884C\u5269\u4E0B\u64CD\u4F5C"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ~/FLY_Katapult && git pull\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6B64\u65B9\u6CD5\u662F\u76F4\u63A5\u901A\u8FC7CAN\u66F4\u65B0\u5DE5\u5177\u677F\u539F\u6709\u7684Katapult\u56FA\u4EF6"}),"\n",(0,s.jsxs)(n.li,{children:["\u9700\u8981\u5C06",(0,s.jsx)(n.code,{children:"<Toolboard ID>"}),"\u66FF\u6362\u6210STM32F103\u4E3B\u63A7\u7684\u5DE5\u5177\u7248CANID"]}),"\n",(0,s.jsx)(n.li,{children:"\u4E0B\u65B9\u662F103\u7248\u672C1M CAN\u901F\u7387\u7684\u56FA\u4EF6\u66F4\u65B0\u6307\u4EE4"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"~/klippy-env/bin/python ~/klipper/lib/canboot/flash_can.py -f ~/FLY_Katapult/developer/SHT36/FLY_SHT36V2_103_1M.BIN  -u <Toolboard ID>\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4E0B\u65B9\u662F072\u7248\u672C500K CAN\u901F\u7387\u7684\u56FA\u4EF6\u66F4\u65B0\u6307\u4EE4"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"~/klippy-env/bin/python ~/klipper/lib/canboot/flash_can.py -f ~/FLY_Katapult/developer/SHT36/FLY_SHT36V2_103_500K.BIN  -u <Toolboard ID>\n"})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u786E\u8BA4\u56FA\u4EF6\u662F\u5426\u542F\u52A8",children:"\u786E\u8BA4\u56FA\u4EF6\u662F\u5426\u542F\u52A8"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5982\u679C\u56FA\u4EF6\u6B63\u5E38\u542F\u52A8LED\u4F1A\u95EA\u70C1\u8D77\u6765","\n",(0,s.jsx)(u,{image:i(91018).Z,size:"100%",align:"center"}),"\n"]}),"\n"]})]})}function x(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}function j(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},15359:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/apmdfu-cf2a256e58c58c8ec28d7bc458b0d517.webp"},14355:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/apmdfu1-a219f5cefe8db2b344f35ebccd6ba383.webp"},44691:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/lsusb-460d7d3379cb644139898385fd86f2ec.webp"},69056:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/make-flash-85b1e01b14ed5924982a2ae7cb6501f0.webp"},54411:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/stm32cube-1-4d518a7b7231de7da7230ae63b82e477.webp"},88789:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/stm32cube-2-8f9f2f15bea5e6acf6c39175f13140fc.webp"},34319:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/stm32cube-3-51ae6c039223223689cbcab82827c416.webp"},18134:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/stm32cube-4-9cf41c6403736a50cf97b75379c12579.webp"},92085:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/stm32cube-5-02cc80158d21b9919d8815237e5555f3.webp"},61566:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/stm32cube-6-6011a605b09f201c9daa91f53d1c8fca.webp"},11542:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/stm32cube-7-aaf9c753d51189c3c1566d683e552682.webp"},55811:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/606f-ba58e29a9188142cd34019862e0c85e2.webp"},84329:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/boot-d68135d493958868c1d10dc66067ca31.webp"},91018:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/led-539e36ce40293429c6879cdfcff1b2e5.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return t}});var r=i(75271);let s={},l=r.createContext(s);function t(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);