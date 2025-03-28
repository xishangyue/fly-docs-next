"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["49893"],{75726:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>d,default:()=>x,assets:()=>c,toc:()=>a,frontMatter:()=>l});var n=JSON.parse('{"id":"DebugDoc/flyos-fast/config","title":"Configuration du syst\xe8me","description":"- Les param\xe8tres dans la section partie du fichier de configuration ne prendront effet qu\'\xe0 la premi\xe8re d\xe9marr\xe9e apr\xe8s le flashage.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/flyos-fast/config.mdx","sourceDirName":"DebugDoc/flyos-fast","slug":"/DebugDoc/flyos-fast/config","permalink":"/fly-docs-next/fr/docs/DebugDoc/flyos-fast/config","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/flyos-fast/config.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"debugdocSidebar","previous":{"title":"Gravure du syst\xe8me d\'exploitation","permalink":"/fly-docs-next/fr/docs/DebugDoc/flyos-fast/flash"},"next":{"title":"Fonction de reprise d\'impression apr\xe8s coupure d\'alimentation Klipper","permalink":"/fly-docs-next/fr/docs/DebugDoc/flyos-fast/plr"}}'),s=i("52676"),r=i("79938");let l={sidebar_position:3},d="Configuration du syst\xe8me",c={},a=[{value:"Comment modifier le fichier de configuration",id:"comment-modifier-le-fichier-de-configuration",level:2},{value:"Modifier le fichier de configuration apr\xe8s le flashage",id:"modifier-le-fichier-de-configuration-apr\xe8s-le-flashage",level:3},{value:"Modification en ligne de configuration apr\xe8s le d\xe9marrage du syst\xe8me",id:"modification-en-ligne-de-configuration-apr\xe8s-le-d\xe9marrage-du-syst\xe8me",level:3},{value:"Param\xe8tres de configuration",id:"param\xe8tres-de-configuration",level:2},{value:"Configuration r\xe9seau sans fil",id:"configuration-r\xe9seau-sans-fil",level:3},{value:"Configuration par d\xe9faut de l&#39;imprimante",id:"configuration-par-d\xe9faut-de-limprimante",level:3},{value:"Configuration syst\xe8me",id:"configuration-syst\xe8me",level:3},{value:"Configuration du type d&#39;imprimante",id:"configuration-du-type-dimprimante",level:3},{value:"Configuration de l&#39;affichage",id:"configuration-de-laffichage",level:3},{value:"Configuration li\xe9e \xe0 Klipper",id:"configuration-li\xe9e-\xe0-klipper",level:3},{value:"Configuration li\xe9e \xe0 RRF",id:"configuration-li\xe9e-\xe0-rrf",level:3},{value:"Autres param\xe8tres",id:"autres-param\xe8tres",level:3}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{ImageView:n}=t;return!n&&function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"configuration-du-syst\xe8me",children:"Configuration du syst\xe8me"})}),"\n",(0,s.jsx)(t.admonition,{title:"\xc0 lire obligatoirement",type:"tip",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Les param\xe8tres dans la section ",(0,s.jsx)(t.code,{children:"partie"})," du fichier de configuration ne prendront effet qu'\xe0 la premi\xe8re d\xe9marr\xe9e apr\xe8s le flashage."]}),"\n",(0,s.jsxs)(t.li,{children:["Veuillez donc modifier le fichier de configuration config.txt sur la disque amovible ",(0,s.jsx)(t.code,{children:"FlyOS-Conf"})," apr\xe8s le flashage."]}),"\n",(0,s.jsx)(t.li,{children:"Ensuite, ins\xe9rez la carte dans le panneau pour d\xe9marrer le syst\xe8me."}),"\n"]})}),"\n",(0,s.jsx)(t.admonition,{title:"Attention",type:"warning",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Essayez d'\xe9viter d'utiliser le Bloc-notes int\xe9gr\xe9 \xe0 Windows pour \xe9diter le fichier de configuration, vous pouvez utiliser VSCode ou un autre \xe9diteur de texte professionnel."}),"\n",(0,s.jsx)(t.li,{children:"Il est pr\xe9f\xe9rable de ne pas entrer de caract\xe8res chinois ou de caract\xe8res sp\xe9ciaux dans le fichier de configuration."}),"\n",(0,s.jsx)(t.li,{children:"Apr\xe8s avoir modifi\xe9 le fichier de configuration, il est n\xe9cessaire de red\xe9marrer le syst\xe8me pour que les modifications prennent effet."}),"\n"]})}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Ne modifiez pas le contenu sous la section ",(0,s.jsx)(t.code,{children:"######### PLEASE DO NOT EDIT THE FOLLOWING #########"}),"."]}),"\n"]})}),"\n",(0,s.jsx)(t.h2,{id:"comment-modifier-le-fichier-de-configuration",children:"Comment modifier le fichier de configuration"}),"\n",(0,s.jsx)(t.h3,{id:"modifier-le-fichier-de-configuration-apr\xe8s-le-flashage",children:"Modifier le fichier de configuration apr\xe8s le flashage"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Les param\xe8tres qui ne prennent effet qu'\xe0 la premi\xe8re d\xe9marr\xe9e doivent \xeatre modifi\xe9s apr\xe8s le flashage en utilisant un \xe9diteur de texte professionnel pour ouvrir le fichier de configuration ",(0,s.jsx)(t.code,{children:"config.txt"})," dans le disque amovible ",(0,s.jsx)(t.code,{children:"FlyOS-Conf"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"modification-en-ligne-de-configuration-apr\xe8s-le-d\xe9marrage-du-syst\xe8me",children:"Modification en ligne de configuration apr\xe8s le d\xe9marrage du syst\xe8me"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Si c'est une configuration ordinaire, apr\xe8s avoir modifi\xe9 la page de configuration web du syst\xe8me et red\xe9marrer le syst\xe8me, les modifications prendront effet."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Ouvrez l'adresse IP du p\xe9riph\xe9rique dans le navigateur, par exemple : ",(0,s.jsx)(t.code,{children:"http://192.168.1.2/"})]}),"\n",(0,s.jsxs)(t.li,{children:["Pour fluidd, d\xe9cochez comme indiqu\xe9 \xe0 gauche dans la figure ci-dessous -> ",(0,s.jsx)(t.code,{children:"Filtrer et masquer les fichiers et dossiers cach\xe9s"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Pour mainsail, cochez comme indiqu\xe9 \xe0 droite dans la figure ci-dessous -> ",(0,s.jsx)(t.code,{children:"Afficher les fichiers cach\xe9s"}),"."]}),"\n"]}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n,{image:i(98429).Z,size:"100%",align:"center"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n,{image:i(33994).Z,size:"85%",align:"center"})})]})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Vous verrez alors le dossier ",(0,s.jsx)(t.code,{children:".flyos-config"}),". Entrez dans ce dossier pour trouver le fichier ",(0,s.jsx)(t.code,{children:"sys-config.conf"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Le fichier ",(0,s.jsx)(t.code,{children:"sys-config.conf"})," est un lien symbolique du fichier de configuration ",(0,s.jsx)(t.code,{children:"config.txt"})," sur le disque amovible ",(0,s.jsx)(t.code,{children:"FlyOS-Conf"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n,{image:i(36171).Z,size:"60%",align:"center"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Ouvrez le fichier ",(0,s.jsx)(t.code,{children:"sys-config.conf"}),", modifiez les param\xe8tres n\xe9cessaires, puis enregistrez et fermez-le."]}),"\n"]}),"\n",(0,s.jsx)(n,{image:i(83244).Z,size:"60%",align:"center"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Remarque : Le format des param\xe8tres dans le fichier ",(0,s.jsx)(t.code,{children:"sys-config.conf"})," est ",(0,s.jsx)(t.code,{children:"cl\xe9=valeur"}),", ne modifiez pas en ",(0,s.jsx)(t.code,{children:"cl\xe9: valeur"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Apr\xe8s avoir enregistr\xe9 les modifications, red\xe9marrez le syst\xe8me pour que celles-ci prennent effet."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"param\xe8tres-de-configuration",children:"Param\xe8tres de configuration"}),"\n",(0,s.jsx)(t.h3,{id:"configuration-r\xe9seau-sans-fil",children:"Configuration r\xe9seau sans fil"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Les param\xe8tres suivants prennent effet \xe0 chaque d\xe9marrage du syst\xe8me."}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Param\xe8tre"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Valeur par d\xe9faut"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Valeurs possibles"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"WIFI_SSID"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"vide"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Toute SSID de WiFi"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Nom du r\xe9seau WiFi, si rempli, essaiera de se connecter automatiquement au premier d\xe9marrage"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"WIFI_PASS"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"vide"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Laisser vide s'il n'y a pas de mot de passe"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Mot de passe du r\xe9seau WiFi, si rempli, essaiera de se connecter avec le mot de passe"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"configuration-par-d\xe9faut-de-limprimante",children:"Configuration par d\xe9faut de l'imprimante"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Les param\xe8tres suivants ne prennent effet qu'\xe0 la premi\xe8re d\xe9marr\xe9e."}),"\n"]})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Param\xe8tre"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Valeur par d\xe9faut"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Valeurs possibles"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"language"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"zh-CN"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"Cliquez pour afficher le d\xe9tail"}),(0,s.jsx)(t.code,{children:"zh-CN"}),", ",(0,s.jsx)(t.code,{children:"zh-HK"}),", ",(0,s.jsx)(t.code,{children:"en"}),", ",(0,s.jsx)(t.code,{children:"de"}),", ",(0,s.jsx)(t.code,{children:"cz"}),", ",(0,s.jsx)(t.code,{children:"es"}),", ",(0,s.jsx)(t.code,{children:"hu"}),", ",(0,s.jsx)(t.code,{children:"ja"}),", ",(0,s.jsx)(t.code,{children:"nl"}),", ",(0,s.jsx)(t.code,{children:"pt"}),", ",(0,s.jsx)(t.code,{children:"se"}),", ",(0,s.jsx)(t.code,{children:"uk"}),", ",(0,s.jsx)(t.code,{children:"da"}),", ",(0,s.jsx)(t.code,{children:"fr"}),", ",(0,s.jsx)(t.code,{children:"it"}),", ",(0,s.jsx)(t.code,{children:"ko"}),", ",(0,s.jsx)(t.code,{children:"pl"}),", ",(0,s.jsx)(t.code,{children:"ru"}),", ",(0,s.jsx)(t.code,{children:"tr"})]})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"D\xe9finit la langue par d\xe9faut de fluidd et mainsail lors du premier d\xe9marrage"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"printer_name"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"vide"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Toute cha\xeene de texte"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Nom d'imprimante par d\xe9faut pour fluidd et mainsail lors du premier d\xe9marrage"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"configuration-syst\xe8me",children:"Configuration syst\xe8me"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Les param\xe8tres suivants prennent effet \xe0 chaque d\xe9marrage du syst\xe8me."}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Param\xe8tre"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Valeur par d\xe9faut"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Valeurs possibles"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"console"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"serial"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"serial"}),", ",(0,s.jsx)(t.code,{children:"both"})]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Ce param\xe8tre ne doit pas \xeatre modifi\xe9, uniquement ",(0,s.jsx)(t.code,{children:"serial"})," est valide"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"board"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["H5: ",(0,s.jsx)(t.code,{children:"fly-pi-v2"}),(0,s.jsx)("br",{}),"H3: ",(0,s.jsx)(t.code,{children:"fly-lite2.1"})]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"Cliquez pour afficher les s\xe9ries H5"}),(0,s.jsx)(t.code,{children:"fly-pi"}),", ",(0,s.jsx)(t.code,{children:"fly-pi-v2"}),", ",(0,s.jsx)(t.code,{children:"fly-gemini-v1"}),", ",(0,s.jsx)(t.code,{children:"fly-gemini-v2"}),", ",(0,s.jsx)(t.code,{children:"fly-gemini-v3"}),", ",(0,s.jsx)(t.code,{children:"fly-c8"})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"Cliquez pour afficher les s\xe9ries H3"}),(0,s.jsx)(t.code,{children:"fly-lite2"}),", ",(0,s.jsx)(t.code,{children:"fly-lite2.1"}),", ",(0,s.jsx)(t.code,{children:"fly-minipad"})]})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Mod\xe8le de la carte m\xe8re, principalement utilis\xe9 pour le flashage automatique des firmwares, etc."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"shutdown_pin_state"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"1"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"0"}),", ",(0,s.jsx)(t.code,{children:"1"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"D\xe9finir l'\xe9tat de la broche d'alimentation (bas ou haut) lors de l'arr\xeat du syst\xe8me"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"shutdown_pin"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"none"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"PA21"}),", ",(0,s.jsx)(t.code,{children:"PA4"}),"..."]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["D\xe9finir la broche de la touche d'arr\xeat, par d\xe9faut ",(0,s.jsx)(t.code,{children:"none"})," pour d\xe9sactiver"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"spidev"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"spidev0.0 spidev1.0"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"spidev0.0"}),", ",(0,s.jsx)(t.code,{children:"spidev0.1"}),", ",(0,s.jsx)(t.code,{children:"spidev1.0"}),", ",(0,s.jsx)(t.code,{children:"spidev1.1"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"D\xe9finir les ports SPI \xe0 activer, plusieurs ports peuvent \xeatre activ\xe9s en les s\xe9parant par un espace"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"localtime"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"Asia/Shanghai"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/DebugDoc/flyos-fast/timezone",children:"Tableau des fuseaux horaires mondiaux"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"D\xe9finir le fuseau horaire par d\xe9faut du syst\xe8me, le syst\xe8me ajustera automatiquement l'heure apr\xe8s connexion \xe0 Internet"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"canbus_bitrate"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"1000000"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"1000000"}),", ",(0,s.jsx)(t.code,{children:"500000"}),", ",(0,s.jsx)(t.code,{children:"250000"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"D\xe9finir le taux de transmission par d\xe9faut pour tous les appareils CAN du syst\xe8me, par d\xe9faut 1M"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"configuration-du-type-dimprimante",children:"Configuration du type d'imprimante"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Les param\xe8tres suivants prennent effet \xe0 chaque d\xe9marrage du syst\xe8me."}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Param\xe8tre"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Valeur par d\xe9faut"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Valeurs possibles"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"printer"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"klipper"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"klipper"}),", ",(0,s.jsx)(t.code,{children:"rrf"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Configurer quel service d\xe9marrer"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.code,{children:"klipper"}),": klipper, moonraker, etc.",(0,s.jsx)("br",{})]}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.code,{children:"rrf"}),": RRF DSF, DWC, etc."]}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"configuration-de-laffichage",children:"Configuration de l'affichage"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Les param\xe8tres suivants prennent effet \xe0 chaque d\xe9marrage du syst\xe8me."}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Param\xe8tre"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Valeur par d\xe9faut"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Valeurs possibles"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"screen"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"hdmi"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"Cliquez pour afficher les s\xe9ries H5"}),(0,s.jsx)(t.code,{children:"none"}),", ",(0,s.jsx)(t.code,{children:"hdmi"}),", ",(0,s.jsx)(t.code,{children:"fly-tft-v1"}),", ",(0,s.jsx)(t.code,{children:"fly-tft-v2-r"}),", ",(0,s.jsx)(t.code,{children:"fly-tft-v2-c"})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"Cliquez pour afficher les s\xe9ries H3"}),(0,s.jsx)(t.code,{children:"none"}),", ",(0,s.jsx)(t.code,{children:"hdmi"}),", ",(0,s.jsx)(t.code,{children:"fly-tft-v1"}),", ",(0,s.jsx)(t.code,{children:"fly-minipad-r"}),", ",(0,s.jsx)(t.code,{children:"fly-minipad-c"}),", ",(0,s.jsx)(t.code,{children:"fly-tft-v2-r"}),", ",(0,s.jsx)(t.code,{children:"fly-tft-v2-c"})]})]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["D\xe9finir l'\xe9cran, ",(0,s.jsx)(t.code,{children:"none"})," pour d\xe9sactiver tout affichage"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"rotate"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"90"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"0"}),", ",(0,s.jsx)(t.code,{children:"90"}),", ",(0,s.jsx)(t.code,{children:"180"}),", ",(0,s.jsx)(t.code,{children:"270"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Angle de rotation pour FLY-TFT, inutile pour HDMI"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"configuration-li\xe9e-\xe0-klipper",children:"Configuration li\xe9e \xe0 Klipper"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Les param\xe8tres suivants prennent effet \xe0 chaque d\xe9marrage du syst\xe8me."}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Param\xe8tre"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Valeur par d\xe9faut"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Valeurs possibles"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"klipper_screen"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"0"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"0"}),", ",(0,s.jsx)(t.code,{children:"1"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Activer ou non KlipperScreen"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"moon2uart"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"0"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"0"}),", ",(0,s.jsx)(t.code,{children:"1"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Activer ou non moon2uart"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"m2u_port"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"/dev/ttyS1"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Port s\xe9rie valide"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Port s\xe9rie pour moon2uart, applicable lorsque ",(0,s.jsx)(t.code,{children:"moon2uart=1"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"m2u_baud"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"115200"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Baudrate valide"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Baudrate pour moon2uart, applicable lorsque ",(0,s.jsx)(t.code,{children:"moon2uart=1"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"klipper_webui"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"fluidd"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"fluidd"}),", ",(0,s.jsx)(t.code,{children:"mainsail"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Interface utilisateur frontale par d\xe9faut pour Klipper"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.code,{children:"printer=klipper"})," applicable"]}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"configuration-li\xe9e-\xe0-rrf",children:"Configuration li\xe9e \xe0 RRF"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Les param\xe8tres suivants prennent effet \xe0 chaque d\xe9marrage du syst\xe8me."}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Param\xe8tre"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Valeur par d\xe9faut"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Valeurs possibles"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"rrf2uart"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"0"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"0"}),", ",(0,s.jsx)(t.code,{children:"1"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Non applicable pour le moment, mise \xe0 jour dans les versions futures"})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"autres-param\xe8tres",children:"Autres param\xe8tres"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Les param\xe8tres suivants prennent effet \xe0 chaque d\xe9marrage du syst\xe8me."}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Param\xe8tre"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Valeur par d\xe9faut"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Valeurs possibles"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"crowsnest"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"0"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"0"}),", ",(0,s.jsx)(t.code,{children:"1"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Activer ou non Crowsnest"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.code,{children:"klipper"})," et ",(0,s.jsx)(t.code,{children:"rrf"})," applicables"]}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Les param\xe8tres suivants ne prennent effet qu'\xe0 la premi\xe8re d\xe9marr\xe9e."}),"\n"]})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Param\xe8tre"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Valeur par d\xe9faut"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Valeurs possibles"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"firmware"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"vide"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Chemin de fichier de firmware valide"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Configurer le flashage automatique du firmware au d\xe9marrage, actuellement valide pour C8 et Gemini-V3"})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Ne modifiez pas le contenu sous la section ",(0,s.jsx)(t.code,{children:"######### PLEASE DO NOT EDIT THE FOLLOWING #########"}),"."]}),"\n"]})})]})}function x(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},98429:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/config1-b248a5f8708754391dc7f3e30a66404d.webp"},33994:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/config2-520ef43d21da10584cea2f864bbbbdd6.webp"},36171:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/config3-cc5cacbc1d4d230fea0fd0968df0de03.webp"},83244:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/config4-15803e7d27dccb269f796f0e1c83c87f.webp"},79938:function(e,t,i){i.d(t,{Z:function(){return d},a:function(){return l}});var n=i(75271);let s={},r=n.createContext(s);function l(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);