"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["33047"],{47585:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>i,assets:()=>a,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"ProductDoc/ExtensionBoard/bd-sensor/kliper","title":"Installation  **BDsensor**","description":"Connectez le c\xe2ble du capteur au contr\xf4leur m\xe8re ou \xe0 la carte d\'interface CAN.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/bd-sensor/kliper.mdx","sourceDirName":"ProductDoc/ExtensionBoard/bd-sensor","slug":"/ProductDoc/ExtensionBoard/bd-sensor/kliper","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/bd-sensor/kliper","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/bd-sensor/kliper.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"Utilisation de Klipper"},"sidebar":"tutorialSidebar","previous":{"title":"Guide d\'installation","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/bd-sensor/line"},"next":{"title":"klipper auto-z-offset","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/bd-sensor/klipperpz"}}'),r=s("85893"),l=s("50065");let t={sidebar_position:3,sidebar_label:"Utilisation de Klipper"},o="Installation  BDsensor",a={},c=[{value:"Connectez le c\xe2ble du capteur au contr\xf4leur m\xe8re ou \xe0 la carte d&#39;interface CAN.",id:"connectez-le-c\xe2ble-du-capteur-au-contr\xf4leur-m\xe8re-ou-\xe0-la-carte-dinterface-can",level:2},{value:"Appliquez le correctif au firmware Klipper",id:"appliquez-le-correctif-au-firmware-klipper",level:2},{value:"Si votre imprimante fonctionne avec Moonraker, ajoutez la section suivante \xe0 moonraker.conf, puis vous pouvez mettre \xe0 jour Bdsensor via le web ou KlipperScreen en un clic.",id:"si-votre-imprimante-fonctionne-avec-moonraker-ajoutez-la-section-suivante-\xe0-moonrakerconf-puis-vous-pouvez-mettre-\xe0-jour-bdsensor-via-le-web-ou-klipperscreen-en-un-clic",level:2},{value:"\xc9ditez le fichier printer.cfg",id:"\xe9ditez-le-fichier-printercfg",level:2},{value:"Apr\xe8s l&#39;installation, v\xe9rifiez en envoyant les commandes gcode suivantes",id:"apr\xe8s-linstallation-v\xe9rifiez-en-envoyant-les-commandes-gcode-suivantes",level:2},{value:"V\xe9rification de la connexion",id:"v\xe9rification-de-la-connexion",level:2},{value:"Calibration",id:"calibration",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components},{ImageView:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsxs)(n.h1,{id:"installation--bdsensor",children:["Installation  ",(0,r.jsx)(n.strong,{children:"BDsensor"})]})}),"\n",(0,r.jsx)(n.h2,{id:"connectez-le-c\xe2ble-du-capteur-au-contr\xf4leur-m\xe8re-ou-\xe0-la-carte-dinterface-can",children:"Connectez le c\xe2ble du capteur au contr\xf4leur m\xe8re ou \xe0 la carte d'interface CAN."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Notez que SB2040 ne peut pas utiliser Bdsensor"}),"\n",(0,r.jsx)(n.li,{children:"Notez que SHT36 n\xe9cessite que l'horloge/le SCL (entr\xe9e) du Bdsensor soit connect\xe9 \xe0 l'entr\xe9e haute tension et que le pont soit pos\xe9"}),"\n",(0,r.jsx)(n.li,{children:"Les lignes CKL et SDA du Bdsensor peuvent \xeatre connect\xe9es \xe0 n'importe quel broche GPIO sur la carte de circuit. Vous pouvez \xe9galement connecter directement le c\xe2ble du capteur Bds \xe0 la prise Bltouch, par exemple :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"BLtouch    |    Bdsensor\n5V       --\x3e     5V\nGND      --\x3e     GND\nS        --\x3e     CLK/SCL    (entr\xe9e)\nGND      --\x3e     GND\nZmin     --\x3e     SDA    (entr\xe9e/sortie) \n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"En raison de certains connecteurs sur le contr\xf4leur m\xe8re qui peuvent ne pas \xeatre directement connect\xe9s aux gpios de l'MCU (par exemple, ils peuvent avoir des condensateurs de filtrage ou \xeatre isol\xe9s par un MOSFET, un diode ou un couplage optique, mais ils peuvent aussi \xeatre isol\xe9s par une r\xe9sistance ou une r\xe9sistance de tirant/pull-down), ils ne peuvent pas \xeatre utilis\xe9s avec Bdsensor. Et le firmware signalera une erreur de connexion. Par exemple"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Les connecteurs pour les ventilateurs et les chauffe-\xe9l\xe9ments sont isol\xe9s par MOSFET,"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Certains circuits imprim\xe9s ont des connecteurs pour les thermistances de temp\xe9rature et les interrupteurs/sondes qui sont g\xe9n\xe9ralement connect\xe9s au GND par des condensateurs de filtrage,"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Installez le capteur Bds pr\xe8s de l'extr\xe9mit\xe9 chaude comme indiqu\xe9 dans la figure ci-dessous. ",(0,r.jsx)(n.a,{href:"https://www.thingiverse.com/thing:6098131",children:"STL de montage"}),",  ",(0,r.jsx)(n.a,{href:"https://discord.com/channels/829828765512106054/1163237892957671424",children:"STL de montage VzBot_Goliath court"})]}),"\n",(0,r.jsx)(i,{image:s(82481).Z,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"appliquez-le-correctif-au-firmware-klipper",children:"Appliquez le correctif au firmware Klipper"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Abandonnez les fichiers Klipper modifi\xe9s pr\xe9c\xe9demment et mettez \xe0 jour Klipper"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd\ncd ~/klipper\ngit checkout .\ngit pull\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Clonez le dernier code du Bdsensor"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/markniu/Bed_Distance_sensor.git\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Installez"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd  ~/Bed_Distance_sensor/klipper/\n./install_BDsensor.sh\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Compilez le firmware"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/klipper/\nmake menuconfig\nmake clean\nmake\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Branchez le firmware sur le MCU ou la carte d'interface CAN auquel est connect\xe9 le Bdsensor"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"si-votre-imprimante-fonctionne-avec-moonraker-ajoutez-la-section-suivante-\xe0-moonrakerconf-puis-vous-pouvez-mettre-\xe0-jour-bdsensor-via-le-web-ou-klipperscreen-en-un-clic",children:"Si votre imprimante fonctionne avec Moonraker, ajoutez la section suivante \xe0 moonraker.conf, puis vous pouvez mettre \xe0 jour Bdsensor via le web ou KlipperScreen en un clic."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[update_manager Bdsensor]\ntype: git_repo\nprimary_branch: new\nchannel: dev\npath: ~/Bed_Distance_sensor\norigin: https://github.com/markniu/Bed_Distance_sensor.git\ninstall_script: ./klipper/install_BDsensor.sh\nis_system_service: False\nmanaged_services: klipper\ninfo_tags:\ndesc=Bedsensor\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\xe9ditez-le-fichier-printercfg",children:"\xc9ditez le fichier printer.cfg"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Copiez cette partie dans votre fichier ",(0,r.jsx)(n.strong,{children:"printer.cfg"})," et \xe9ditez ",(0,r.jsx)(n.code,{children:"[Bdsensor]"})," ",(0,r.jsx)(n.code,{children:"sda_pin"}),"  ",(0,r.jsx)(n.code,{children:"scl_pin"}),", n'oubliez pas non plus de d\xe9sactiver les autres sections de sonde, comme ",(0,r.jsx)(n.strong,{children:"Bltouch"}),". Vous pouvez connecter le Bdsensor au module CAN sur la carte m\xe8re ou sur la carte d'interface"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Dans ",(0,r.jsx)(n.code,{children:"[Bdsensor]"}),", modifiez ",(0,r.jsx)(n.code,{children:"speed"})," en 0,8. Cela ne s'applique qu'\xe0 la commande ",(0,r.jsx)(n.code,{children:"z_tilt"})," et ",(0,r.jsx)(n.code,{children:"PROBE_ACCURACY"}),". Plus la valeur est petite, plus la pr\xe9cision est \xe9lev\xe9e lors de la d\xe9tection car l'MCU lit le capteur Bds dans le circuit principal lors du retour \xe0 l'origine, pas en temps r\xe9el comme un arr\xeateur normal. ",(0,r.jsx)(n.code,{children:"[Bdsensor]"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Pour utiliser le Bdsensor comme limiteur de position pour l'axe Z lors du retour \xe0 l'origine, modifiez ",(0,r.jsx)(n.code,{children:"endstop_pin"})," dans ",(0,r.jsx)(n.code,{children:"[stepper_z]"})," en ",(0,r.jsx)(n.code,{children:"endstop_pin: probe:z_virtual_endstop"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Assurez-vous que ",(0,r.jsx)(n.strong,{children:"printer.cfg"})," contient ",(0,r.jsx)(n.code,{children:"[safe_z_home]"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Modifiez la valeur de ",(0,r.jsx)(n.code,{children:"[bed_mesh]"})," et ",(0,r.jsx)(n.code,{children:"[z_tilt]"})," ou ",(0,r.jsx)(n.code,{children:"[quad_gantry_level]"})," en 1 (recommand\xe9 entre 0,7 et 1,0 mm). La valeur par d\xe9faut dans Klipper est de 5 mm, sinon le capteur risque de d\xe9passer sa plage"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["La hauteur de la buse ne convient que si elle est d\xe9finie dans ",(0,r.jsx)(n.code,{children:"z_adjust:"}),". Un nombre positif signifie pr\xe8s du lit chaud, un nombre n\xe9gatif signifie loin du lit chaud, toute autre modification de la hauteur de la buse entra\xeenera des bugs"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Pour activer le balayage rapide du lit, supprimez le # devant ",(0,r.jsx)(n.code,{children:"no_stop_probe:true"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Voici un exemple de configuration."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[Bdsensor] \nscl_pin:PC6  # broche de signal servo\nsda_pin:PC3  # broche de signal limite\ndelay: 20 # 20us par impulsion, cette valeur doit \xeatre >=20 mais inf\xe9rieure \xe0 50\nz_offset:0 # cet `z_offset` doit \xeatre d\xe9fini \xe0 0. \nz_adjust:0.0 # ajustement de l'axe Z, remplace la fonction z_offset. dans -0.3 \xe0 0.3mm\nx_offset: -34\ny_offset: 0\n#no_stop_probe:true # activez ceci pour le balayage rapide, la t\xeate d'impression ne s'arr\xeatera pas au point de d\xe9tection.\nposition_endstop: 0.8 # l'axe Z s'arr\xeatera \xe0 cette position (mm) lors du retour \xe0 l'origine, valeur recommand\xe9e est 0,4~1,0\n#speed:0.8 # cette vitesse ne s'applique qu'\xe0 la commande z_tilt et PROBE_ACCURACY.\n\n[stepper_z]\nendstop_pin: probe:z_virtual_endstop \n#position_endstop: 0.5\nhoming_speed: 5\nsecond_homing_speed: 0.8\n\n[bed_mesh]\nspeed: 200\nhorizontal_move_z:1\nalgorithm: bicubic\n\n[quad_gantry_level]\nhorizontal_move_z:1\n\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"apr\xe8s-linstallation-v\xe9rifiez-en-envoyant-les-commandes-gcode-suivantes",children:"Apr\xe8s l'installation, v\xe9rifiez en envoyant les commandes gcode suivantes"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"M102   S-1     # lire les informations du capteur\nM102   S-2     # lire une valeur de distance\n"})}),"\n",(0,r.jsx)(n.h2,{id:"v\xe9rification-de-la-connexion",children:"V\xe9rification de la connexion"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Envoyez ",(0,r.jsx)(n.code,{children:"M102 S-1"})," via ",(0,r.jsx)(n.strong,{children:"console"}),". Voici un exemple de message de retour. Si le retour est vide ou une autre cha\xeene, v\xe9rifiez la connexion et l'ordre des fils"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Send: M102 S-1\nRecv: V1.0 pandapi3d.com\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"calibration",children:"Calibration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Nettoyez la buse, puis d\xe9placez l'axe Z via la console jusqu'\xe0 ce que la buse touche juste le plateau (le Bdsensor utilisera cette position comme z\xe9ro, c'est pourquoi la valeur de ",(0,r.jsx)(n.code,{children:"z_offset"})," est de 0 dans la section ",(0,r.jsx)(n.code,{children:"[Bdsensor]"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Envoyez la commande gcode ",(0,r.jsx)(n.code,{children:"M102 S-6"})," via ",(0,r.jsx)(n.strong,{children:"console"}),", l'imprimante d\xe9placera lentement l'axe Z de 0,1 mm \xe0 chaque fois jusqu'\xe0 atteindre 4 mm. N'ex\xe9cutez pas M102 S-6 avant l'installation du capteur, et n'\xe9teignez pas l'imprimante pendant la calibration, sinon les anciennes donn\xe9es de calibration seront supprim\xe9es. Si cela se produit, recalibrez simplement."]}),"\n",(0,r.jsxs)(n.li,{children:["Apr\xe8s cela, vous pouvez v\xe9rifier si le Bdsensor a \xe9t\xe9 correctement calibr\xe9 en envoyant ",(0,r.jsx)(n.code,{children:"M102 S-5"}),", ce qui renvoie les donn\xe9es de calibration stock\xe9es dans le Bdsensor."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Remarques"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"La vitesse de retour \xe0 l'origine de l'axe Z est pr\xe9f\xe9rable \xe0 5"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Si la premi\xe8re donn\xe9e de calibration brute retourn\xe9e par M102 S-5 est sup\xe9rieure \xe0 400, cela signifie que le capteur est trop haut, il faut le r\xe9installer plus pr\xe8s du lit. La valeur recommand\xe9e pour la premi\xe8re donn\xe9e est de 100. Assurez-vous \xe9galement que la deuxi\xe8me donn\xe9e est sup\xe9rieure de plus de 10 \xe0 la premi\xe8re donn\xe9e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"FAQ: Si les donn\xe9es de calibration commencent par 1, la deuxi\xe8me valeur est 9 et la troisi\xe8me est 24, que signifie-t-il ?"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Cela signifie que la r\xe9solution entre 0 et 0,1 mm est de 9, et celle entre 0,1 et 0,2 mm est de 15. Il est donc recommand\xe9 de recalibrer afin que la premi\xe8re r\xe9solution entre 0 et 0,1 mm soit sup\xe9rieure \xe0 10."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["N'oubliez pas de r\xe9gler la hauteur de l'axe Z apr\xe8s l'ex\xe9cution de G28 ou pour les commandes ",(0,r.jsx)(n.code,{children:"Z_tilt"})," et ",(0,r.jsx)(n.code,{children:"quad_gantry_level"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Les noms des sections doivent \xeatre correctement mis en majuscules et minuscules, sinon Klipper signalera ",(0,r.jsx)(n.code,{children:"Unknown pin chip name 'probe'"})]}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},82481:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/bd-4d1080107145fed7d8a6ac8c4e5d9536.webp"},50065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return t}});var i=s(67294);let r={},l=i.createContext(r);function t(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);