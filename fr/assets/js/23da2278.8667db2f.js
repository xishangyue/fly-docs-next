"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["41405"],{10313:function(e,n,t){t.r(n),t.d(n,{default:()=>s,frontMatter:()=>o,metadata:()=>r,assets:()=>u,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"ProductDoc/ExtensionBoard/fly-filguard-filament-detector/index","title":"Pr\xe9sentation du produit","description":"Le d\xe9tecteur de filament FilGuard est compatible avec l\'extrudeuse VZ-Hextrudort-Low, prend en charge la d\xe9tection de rupture de fil et de bouchage, et dispose d\'un bouton personnalisable.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/fly-filguard-filament-detector/index.mdx","sourceDirName":"ProductDoc/ExtensionBoard/fly-filguard-filament-detector","slug":"/ProductDoc/ExtensionBoard/fly-filguard-filament-detector/","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-filguard-filament-detector/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/fly-filguard-filament-detector/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"FLY-FilGuard-\u65AD\u5835\u6599\u4F20\u611F\u5668","permalink":"/fly-docs-next/fr/docs/category/fly-filguard-\u65AD\u5835\u6599\u4F20\u611F\u5668"},"next":{"title":"FLY-LLL\u7F13\u51B2\u5668","permalink":"/fly-docs-next/fr/docs/category/fly-lll\u7F13\u51B2\u5668"}}'),i=t("85893"),d=t("50065");let o={sidebar_position:1},l="Pr\xe9sentation du produit",u={},c=[{value:"Tutoriel de c\xe2blage",id:"tutoriel-de-c\xe2blage",level:2},{value:"Description des \xe9tats des feux du firmware",id:"description-des-\xe9tats-des-feux-du-firmware",level:2},{value:"R\xe9f\xe9rence de configuration Klipper pour la d\xe9tection de rupture de fil et de bouchage",id:"r\xe9f\xe9rence-de-configuration-klipper-pour-la-d\xe9tection-de-rupture-de-fil-et-de-bouchage",level:2},{value:"R\xe9f\xe9rence de configuration Klipper pour le bouton de retrait de fil",id:"r\xe9f\xe9rence-de-configuration-klipper-pour-le-bouton-de-retrait-de-fil",level:2},{value:"R\xe9f\xe9rence de configuration Klipper pour le bouton d&#39;entr\xe9e de fil",id:"r\xe9f\xe9rence-de-configuration-klipper-pour-le-bouton-dentr\xe9e-de-fil",level:2},{value:"Lien de t\xe9l\xe9chargement du mod\xe8le 3D",id:"lien-de-t\xe9l\xe9chargement-du-mod\xe8le-3d",level:2}];function a(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components},{ImageView:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"pr\xe9sentation-du-produit",children:"Pr\xe9sentation du produit"})}),"\n",(0,i.jsx)(n.p,{children:"Le d\xe9tecteur de filament FilGuard est compatible avec l'extrudeuse VZ-Hextrudort-Low, prend en charge la d\xe9tection de rupture de fil et de bouchage, et dispose d'un bouton personnalisable."}),"\n",(0,i.jsx)(r,{image:t(97594).Z,size:"60%",align:"left"}),"\n",(0,i.jsx)(r,{image:t(75892).Z,size:"40%",align:"left"}),"\n",(0,i.jsx)(n.h2,{id:"tutoriel-de-c\xe2blage",children:"Tutoriel de c\xe2blage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Les connecteurs PH2.0 5P sur la carte permettent un c\xe2blage plus facile"}),"\n"]}),"\n",(0,i.jsx)(r,{image:t(32055).Z,size:"80%",align:"left"}),"\n",(0,i.jsx)(n.h2,{id:"description-des-\xe9tats-des-feux-du-firmware",children:"Description des \xe9tats des feux du firmware"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Manque de fil : clignotement rouge rapide"}),"\n",(0,i.jsx)(n.li,{children:"Entr\xe9e de fil : clignotements bleus (plus la vitesse d'entr\xe9e est \xe9lev\xe9e, plus la fr\xe9quence de clignotement est \xe9lev\xe9e)"}),"\n",(0,i.jsx)(n.li,{children:"Retrait de fil : clignotements verts (pareil que ci-dessus)"}),"\n",(0,i.jsx)(n.li,{children:"Fil pr\xe9sent mais sans entr\xe9e ou retrait : lumi\xe8re respirante orange"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"r\xe9f\xe9rence-de-configuration-klipper-pour-la-d\xe9tection-de-rupture-de-fil-et-de-bouchage",children:"R\xe9f\xe9rence de configuration Klipper pour la d\xe9tection de rupture de fil et de bouchage"}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["Dans la configuration de d\xe9tection de bouchage, ",(0,i.jsx)(n.code,{children:"detection_length: 2.0"})]}),(0,i.jsx)(n.p,{children:"2,0 mm est la longueur de d\xe9tection minimale n\xe9cessaire pour que le module intelligent de d\xe9tection de fil fonctionne correctement. Si vous rencontrez des probl\xe8mes de d\xe9clenchement incorrect, essayez d'augmenter la longueur de d\xe9tection de 1 mm jusqu'\xe0 ce que le probl\xe8me soit r\xe9solu."})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:'[respond]\ndefault_type: echo\n\n[force_move]\nenable_force_move: True\n\n[filament_switch_sensor D\xe9tection de rupture de fil]\npause_on_runout: False\nswitch_pin: ^!PG12\nrunout_gcode:\n        {% if (printer.print_stats.state == "printing") %}\n                PAUSE\n        {% endif %}\n        M118 P\xe9riph\xe9rique de d\xe9tection de fil : manque de fil\n        # filament_unload\ninsert_gcode:\n        M118 P\xe9riph\xe9rique de d\xe9tection de fil : fin de filament\n        FORCE_MOVE STEPPER=extruder DISTANCE=8 VELOCITY=5 ACCEL=60\n        {% if (printer.extruder.can_extrude|lower != \'true\') or (printer.extruder.target == 0)%}\n                M118 P\xe9riph\xe9rique de d\xe9tection de fil : attendre que l\'extrudeur chauffe !\n                SET_HEATER_TEMPERATURE HEATER=extruder TARGET=200\n                TEMPERATURE_WAIT SENSOR=extruder MINIMUM=190\n        {% endif %}\n        M83\n        G92 E0\n        G0 E50 F500\n        G0 E10 F200\n\n[filament_motion_sensor D\xe9tection de bouchage]\nextruder: extruder\ndetection_length: 2.0\nswitch_pin: ^!PG10\npause_on_runout: False\nrunout_gcode:\n        {% if (printer.print_stats.state == "printing") %}\n                PAUSE\n        {% endif %}\n        M118 P\xe9riph\xe9rique de d\xe9tection de fil : bouchage\ninsert_gcode:\n        M118 P\xe9riph\xe9rique de d\xe9tection de fil : bouchage r\xe9solu\n#event_delay:\n#pause_delay:\n\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"L'entr\xe9e et le retrait ne peuvent utiliser qu'un seul."})}),"\n",(0,i.jsx)(n.h2,{id:"r\xe9f\xe9rence-de-configuration-klipper-pour-le-bouton-de-retrait-de-fil",children:"R\xe9f\xe9rence de configuration Klipper pour le bouton de retrait de fil"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"[gcode_button filament_unload]\npin: ^!PG11\nrelease_gcode:\nfilament_unload\npress_gcode:\n\n\n[gcode_macro filament_unload]\ngcode:\n        {% if (printer.print_stats.state != \"printing\") %}\n                M83\n                G92 E0\n                {% if (printer.extruder.can_extrude|lower != 'true') or (printer.extruder.target == 0)%}\n                        M118 P\xe9riph\xe9rique de d\xe9tection de fil : attendre que l'extrudeur chauffe !\n                        SET_HEATER_TEMPERATURE HEATER=extruder TARGET=190\n                        TEMPERATURE_WAIT SENSOR=extruder MINIMUM=185\n                {% endif %}\n                G0 E10 F300\n                G0 E-20 F200\n                G0 E-50 F500\n        {% else %}\n                M118 P\xe9riph\xe9rique de d\xe9tection de fil : impression en cours, op\xe9ration de retrait impossible !\n        {% endif %}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"r\xe9f\xe9rence-de-configuration-klipper-pour-le-bouton-dentr\xe9e-de-fil",children:"R\xe9f\xe9rence de configuration Klipper pour le bouton d'entr\xe9e de fil"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"[gcode_button filament_unload]\npin: ^!PG11\nrelease_gcode:\nfilament_unload\npress_gcode:\n\n\n[gcode_macro filament_unload]\ngcode:\n        {% if (printer.print_stats.state != \"printing\") %}\n                M83\n                G92 E0\n                {% if (printer.extruder.can_extrude|lower != 'true') or (printer.extruder.target == 0)%}\n                        M118 P\xe9riph\xe9rique de d\xe9tection de fil : attendre que l'extrudeur chauffe !\n                        SET_HEATER_TEMPERATURE HEATER=extruder TARGET=190\n                        TEMPERATURE_WAIT SENSOR=extruder MINIMUM=185\n                {% endif %}\n                G0 E20 F300\n        {% else %}\n                M118 P\xe9riph\xe9rique de d\xe9tection de fil : impression en cours, op\xe9ration d'entr\xe9e impossible !\n        {% endif %}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"lien-de-t\xe9l\xe9chargement-du-mod\xe8le-3d",children:"Lien de t\xe9l\xe9chargement du mod\xe8le 3D"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"https://cdn.mellow.klipper.cn/STEP/%E8%80%97%E6%9D%90%E6%96%AD%E6%96%99%E5%A0%B5%E6%96%99%E6%A3%80%E6%B5%8B%E6%A8%A1%E5%9D%97.7z\n"})})]})}function s(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},32055:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/connection-b9eff57ee6f53f80b9279b964fc8fd97.webp"},75892:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/filament-df744ca0f0c1c0651dd34b82ce98ce1c.webp"},97594:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/filament_1-f664a6bbc99c3ff6f9fd66a8ddec568e.webp"},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var r=t(67294);let i={},d=r.createContext(i);function o(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);