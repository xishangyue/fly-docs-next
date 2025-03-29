"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["52781"],{1178:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"ProductDoc/ExtensionBoard/BDsensor-m/kliper","title":"Installation  **BDsensor-m**","description":"Connecter le c\xe2ble du capteur au connecteur EXP1 de la carte m\xe8re","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/BDsensor-m/kliper.mdx","sourceDirName":"ProductDoc/ExtensionBoard/BDsensor-m","slug":"/ProductDoc/ExtensionBoard/BDsensor-m/kliper","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/BDsensor-m/kliper","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/BDsensor-m/kliper.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"Utilisation de Klipper"},"sidebar":"tutorialSidebar","previous":{"title":"Guide d\'installation","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/BDsensor-m/line"},"next":{"title":"klipper auto-z-offset","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/BDsensor-m/klipperpz"}}'),i=s("74132"),l=s("94551");let t={sidebar_position:3,sidebar_label:"Utilisation de Klipper"},o="Installation  BDsensor-m",a={},c=[{value:"Connecter le c\xe2ble du capteur au connecteur EXP1 de la carte m\xe8re",id:"connecter-le-c\xe2ble-du-capteur-au-connecteur-exp1-de-la-carte-m\xe8re",level:2},{value:"Appliquer le correctif au firmware Klipper",id:"appliquer-le-correctif-au-firmware-klipper",level:2},{value:"Compilez le firmware ici seulement si vous recevez un message disant que le firmware principal et le sous-firmware ne sont pas coh\xe9rents.",id:"compilez-le-firmware-ici-seulement-si-vous-recevez-un-message-disant-que-le-firmware-principal-et-le-sous-firmware-ne-sont-pas-coh\xe9rents",level:3},{value:"Si votre imprimante fonctionne avec Moonraker, ajoutez la section suivante \xe0 moonraker.conf, puis vous pourrez mettre \xe0 jour BDsensor via le web ou KlipperScreen d&#39;un simple clic.",id:"si-votre-imprimante-fonctionne-avec-moonraker-ajoutez-la-section-suivante-\xe0-moonrakerconf-puis-vous-pourrez-mettre-\xe0-jour-bdsensor-via-le-web-ou-klipperscreen-dun-simple-clic",level:2},{value:"\xc9ditez le fichier <strong>printer.cfg</strong>",id:"\xe9ditez-le-fichier-printercfg",level:2},{value:"Apr\xe8s l&#39;installation, v\xe9rifiez avec les commandes Gcode suivantes",id:"apr\xe8s-linstallation-v\xe9rifiez-avec-les-commandes-gcode-suivantes",level:2},{value:"V\xe9rifiez la connexion",id:"v\xe9rifiez-la-connexion",level:2},{value:"Calibrage",id:"calibrage",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components},{ImageView:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsxs)(n.h1,{id:"installation--bdsensor-m",children:["Installation  ",(0,i.jsx)(n.strong,{children:"BDsensor-m"})]})}),"\n",(0,i.jsx)(n.h2,{id:"connecter-le-c\xe2ble-du-capteur-au-connecteur-exp1-de-la-carte-m\xe8re",children:"Connecter le c\xe2ble du capteur au connecteur EXP1 de la carte m\xe8re"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Si le c\xe2ble du capteur est trop court, vous pouvez utiliser le c\xe2ble d'allongement fourni dans l'emballage."}),"\n",(0,i.jsx)(n.li,{children:"Les fils CLK et SDA du BDsensor-m peuvent \xeatre connect\xe9s \xe0 n'importe quel broche GPIO sur la carte. Vous pouvez \xe9galement connecter directement le c\xe2ble du capteur au port Bltouch, par exemple :"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"BLtouch    |    BDsensor-m\n5V       --\x3e     5V\nGND      --\x3e     GND\nS        --\x3e     CLK/SCL    (Entr\xe9e)\nGND      --\x3e     GND\nZmin     --\x3e     SDA    (Entr\xe9e/Sortie) \n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["En raison de certains connecteurs sur la carte m\xe8re qui ne sont peut-\xeatre pas directement connect\xe9s aux gpios de la MCU (par exemple, ils pourraient avoir des condensateurs de filtrage ou \xeatre isol\xe9s par un MOSFET, un diode ou un optocoupleur, mais si elles sont isol\xe9es par une r\xe9sistance ou une r\xe9sistance de tirage haute/basse), ils ne peuvent pas \xeatre utilis\xe9s avec ",(0,i.jsx)(n.code,{children:"BDsensor-m"}),". Le firmware signalera une erreur de connexion. Par exemple"]}),"\n",(0,i.jsx)(n.li,{children:"Les connecteurs des ventilateurs et des chauffe-\xe9l\xe9ments sont isol\xe9s par MOSFET,"}),"\n",(0,i.jsx)(n.li,{children:"Certains circuits imprim\xe9s ont des connecteurs pour les thermistances de temp\xe9rature et les fins de course/t\xeates de sonde g\xe9n\xe9ralement connect\xe9s \xe0 GND par des condensateurs de filtrage,"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Installez le capteur BD \xe0 proximit\xe9 du bout chaud comme indiqu\xe9 dans la figure ci-dessous. ",(0,i.jsx)(n.a,{href:"https://www.thingiverse.com/thing:6098131",children:"STL de montage"}),",  ",(0,i.jsx)(n.a,{href:"https://discord.com/channels/829828765512106054/1163237892957671424",children:"STL_mount_VzBot_Goliath short"})]}),"\n",(0,i.jsx)(r,{image:s(82273).Z,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"appliquer-le-correctif-au-firmware-klipper",children:"Appliquer le correctif au firmware Klipper"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Ne faites rien qui n'est pas mentionn\xe9 dans le tutoriel."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Abandonnez les fichiers Klipper modifi\xe9s pr\xe9c\xe9demment et mettez \xe0 jour Klipper."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd\ncd ~/klipper\ngit checkout .\ngit pull\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Ex\xe9cutez la commande git ci-dessous dans le r\xe9pertoire utilisateur pour cloner le code le plus r\xe9cent du capteur BD."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/markniu/Bed_Distance_sensor.git\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Ex\xe9cutez ensuite la commande suivante pour installer."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd  ~/Bed_Distance_sensor/klipper/\n./install_BDsensor.sh\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"compilez-le-firmware-ici-seulement-si-vous-recevez-un-message-disant-que-le-firmware-principal-et-le-sous-firmware-ne-sont-pas-coh\xe9rents",children:"Compilez le firmware ici seulement si vous recevez un message disant que le firmware principal et le sous-firmware ne sont pas coh\xe9rents."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Compilez le firmware en suivant le tutoriel de compilation de votre propre firmware."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Compilez le firmware"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~/klipper/  # Allez dans le r\xe9pertoire Klipper\nmake menuconfig  # Entrez dans l'interface de configuration de compilation de Klipper\nmake clean  # Commande de nettoyage\nmake   # Commande de compilation\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Branchez le firmware compil\xe9 sur la carte m\xe8re connect\xe9e au BDsensor"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"si-votre-imprimante-fonctionne-avec-moonraker-ajoutez-la-section-suivante-\xe0-moonrakerconf-puis-vous-pourrez-mettre-\xe0-jour-bdsensor-via-le-web-ou-klipperscreen-dun-simple-clic",children:"Si votre imprimante fonctionne avec Moonraker, ajoutez la section suivante \xe0 moonraker.conf, puis vous pourrez mettre \xe0 jour BDsensor via le web ou KlipperScreen d'un simple clic."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[update_manager BDsensor]\ntype: git_repo\nprimary_branch: new\nchannel: dev\npath: ~/Bed_Distance_sensor\norigin: https://github.com/markniu/Bed_Distance_sensor.git\ninstall_script: ./klipper/install_BDsensor.sh\nis_system_service: False\nmanaged_services: klipper\ninfo_tags:\ndesc=Bed Distance Sensor\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"\xe9ditez-le-fichier-printercfg",children:["\xc9ditez le fichier ",(0,i.jsx)(n.strong,{children:"printer.cfg"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copiez cette section dans votre ",(0,i.jsx)(n.strong,{children:"printer.cfg"})," et \xe9ditez ",(0,i.jsx)(n.code,{children:"[BDsensor]"})," ",(0,i.jsx)(n.code,{children:"sda_pin"}),"  ",(0,i.jsx)(n.code,{children:"scl_pin"}),", n'oubliez pas non plus de d\xe9sactiver les autres parties de sonde, comme ",(0,i.jsx)(n.strong,{children:"BLtouch"}),". Vous pouvez connecter le BDsensor \xe0 la carte m\xe8re ou au module CAN de la t\xeate d'impression,"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Dans ",(0,i.jsx)(n.code,{children:"[BDsensor]"}),", modifiez ",(0,i.jsx)(n.code,{children:"speed"})," \xe0 0,8. Cette vitesse ne fonctionne que pour la z-tilt et la commande PROBE_ACCURACY. Une valeur plus petite signifie une meilleure pr\xe9cision lors de la d\xe9tection car le MCU lit le capteur BD pendant le retour \xe0 z\xe9ro, contrairement aux arr\xeats normaux qui sont lus en temps r\xe9el. ",(0,i.jsx)(n.code,{children:"[BDsensor]"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Pour utiliser le BDsensor comme limiteur de fin de course sur l'axe Z lors du retour \xe0 z\xe9ro, modifiez ",(0,i.jsx)(n.code,{children:"endstop_pin"})," dans ",(0,i.jsx)(n.code,{children:"[stepper_z]"})," en ",(0,i.jsx)(n.code,{children:"endstop_pin: probe:z_virtual_endstop"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Assurez-vous qu'il y a ",(0,i.jsx)(n.code,{children:"[safe_z_home]"})," dans ",(0,i.jsx)(n.strong,{children:"printer.cfg"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Modifiez les valeurs de ",(0,i.jsx)(n.code,{children:"[bed_mesh]"})," et ",(0,i.jsx)(n.code,{children:"[z_tilt]"})," ou ",(0,i.jsx)(n.code,{children:"[quad_gantry_level]"})," en ",(0,i.jsx)(n.code,{children:"1"})," (recommandation : 0,7-1,0 mm). La valeur par d\xe9faut de Klipper est de 5 mm, sinon cela pourrait d\xe9passer la plage du capteur."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["La hauteur de la buse convient uniquement pour l'ajustement ",(0,i.jsx)(n.code,{children:"z_adjust:"}),". Un nombre positif signifie pr\xe8s du lit chaud, tandis qu'un nombre n\xe9gatif signifie loin du lit chaud. Toutes les autres m\xe9thodes d'ajustement de la hauteur de la buse auront des bugs."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Pour activer la balayage rapide du lit, supprimez le ",(0,i.jsx)(n.code,{children:"#"})," devant ",(0,i.jsx)(n.code,{children:"no_stop_probe:true"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Voici un exemple de configuration."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"[BDsensor] \nscl_pin:PC6  # Broche de signal servo\nsda_pin:PC3  # Broche de signal limite\ndelay: 20 # 20 us par impulsion, cette valeur doit \xeatre >=20 mais inf\xe9rieure \xe0 50\nz_offset:0 # ce `z_offset` doit \xeatre d\xe9fini \xe0 0. \nz_adjust:0.0 # Ajustement de l'axe Z, remplace la fonction z_offset. entre -0,3 et 0,3 mm\nx_offset: -34\ny_offset: 0\n#no_stop_probe:true # activez ceci pour un balayage rapide, la t\xeate d'impression ne s'arr\xeatera pas au point de d\xe9tection.\nposition_endstop: 0.8 # L'axe Z s'arr\xeatera \xe0 cette position (mm) pendant le retour \xe0 z\xe9ro, recommandation de valeur est 0,4~1,0\n#speed:0.8 # cette vitesse ne fonctionne que pour la z tilt et la commande PROBE_ACCURACY.\n\n[stepper_z]\nendstop_pin: probe:z_virtual_endstop \n#position_endstop: 0.5\nhoming_speed: 5\nsecond_homing_speed: 0.8\n\n[bed_mesh]\nspeed: 200\nhorizontal_move_z:1\nalgorithm: bicubic\n\n[quad_gantry_level]\nhorizontal_move_z:1\n\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"apr\xe8s-linstallation-v\xe9rifiez-avec-les-commandes-gcode-suivantes",children:"Apr\xe8s l'installation, v\xe9rifiez avec les commandes Gcode suivantes"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"M102   S-1     # Lit les informations du capteur\nM102   S-2     # Lit une valeur de distance\n"})}),"\n",(0,i.jsx)(n.h2,{id:"v\xe9rifiez-la-connexion",children:"V\xe9rifiez la connexion"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Envoyez ",(0,i.jsx)(n.code,{children:"M102 S-1"})," via le ",(0,i.jsx)(n.strong,{children:"console"}),". Voici un exemple de message de retour. Si le message de retour est vide ou contient une autre cha\xeene, v\xe9rifiez la connexion et l'ordre des fils."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Send: M102 S-1\nRecv: V1.0 pandapi3d.com\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"calibrage",children:"Calibrage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Nettoyez la buse, puis contr\xf4lez via la console en d\xe9pla\xe7ant l'axe Z jusqu'\xe0 ce que la buse touche exactement le plateau (BDsensor-m utilisera cette position comme z\xe9ro, donc pas besoin de ",(0,i.jsx)(n.code,{children:"z_offset"}),", c'est pourquoi la valeur est de 0 dans la partie ",(0,i.jsx)(n.code,{children:"[BDsensor-m]"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["Envoyez la commande Gcode ",(0,i.jsx)(n.code,{children:"M102 S-6"})," via la ",(0,i.jsx)(n.strong,{children:"console"}),". L'imprimante montera lentement l'axe Z de 0,1 mm \xe0 chaque fois jusqu'\xe0 atteindre 4 mm. N'ex\xe9cutez pas M102 S-6 avant d'installer le capteur ou \xe9teignez l'imprimante pendant le calibrage, sinon les anciennes donn\xe9es de calibration seront supprim\xe9es. Si c'est le cas, r\xe9\xe9valuez simplement le calibrage."]}),"\n",(0,i.jsxs)(n.li,{children:["Apr\xe8s cela, vous pouvez v\xe9rifier si le BDsensor a \xe9t\xe9 correctement calibr\xe9 via ",(0,i.jsx)(n.code,{children:"M102 S-5"}),", qui renvoie les donn\xe9es de calibration originales stock\xe9es dans le BDsensor."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Remarques"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"La vitesse de retour \xe0 z\xe9ro de l'axe Z doit \xeatre id\xe9alement de 5."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Si la premi\xe8re donn\xe9e de calibration brute retourn\xe9e par M102 S-5 est sup\xe9rieure \xe0 400, cela signifie que le capteur est install\xe9 trop haut et doit \xeatre r\xe9install\xe9 \xe0 une position plus proche du lit. La valeur recommand\xe9e pour la premi\xe8re donn\xe9e est de 100. Assurez-vous \xe9galement que la deuxi\xe8me donn\xe9e est sup\xe9rieure \xe0 la premi\xe8re d'au moins 10."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"FAQ: Si les donn\xe9es de calibration commencent \xe0 1, la deuxi\xe8me valeur est 9 et la troisi\xe8me est 24, que signifie-t-il ?"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Cela signifie que la r\xe9solution entre 0 et 0,1 mm est de 9, tandis que la r\xe9solution entre 0,1 et 0,2 mm est de 15. Il est donc recommand\xe9 de recalibrer afin que la r\xe9solution entre 0 et 0,1 mm soit sup\xe9rieure \xe0 10."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["N'oubliez pas de r\xe9gler l'altitude de l'axe Z apr\xe8s l'ex\xe9cution de G28 ou de ces commandes ",(0,i.jsx)(n.code,{children:"Z_tilt"})," et ",(0,i.jsx)(n.code,{children:"quad_gantry_level"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Les noms des sections doivent \xeatre correctement mis en majuscules et minuscules, sinon Klipper signalera ",(0,i.jsx)(n.code,{children:"Unknown pin chip name 'probe'"})]}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},82273:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/jxcs_webp-e90fb83e26a5605607e720e487bc6f3a.webp"},94551:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return t}});var r=s(39546);let i={},l=r.createContext(i);function t(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);