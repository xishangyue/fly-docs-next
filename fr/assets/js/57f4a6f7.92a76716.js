"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["98341"],{94225:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"ProductDoc/ExtensionBoard/BDsensor-m/klipperpz","title":"Installation du capteur de collision de buse pour klipper","description":"Cette fonctionnalit\xe9 n\xe9cessite une version de firmware BD sup\xe9rieure \xe0 V1.1b, sup\xe9rieure \xe0 V1.2b ou une version achet\xe9e apr\xe8s mars 2024, sinon vous devrez utiliser un outil de programmation externe (comme STlink) pour flasher le firmware sur le capteur BD.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/BDsensor-m/klipperpz.mdx","sourceDirName":"ProductDoc/ExtensionBoard/BDsensor-m","slug":"/ProductDoc/ExtensionBoard/BDsensor-m/klipperpz","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/BDsensor-m/klipperpz","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/BDsensor-m/klipperpz.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"klipper auto-z-offset"},"sidebar":"tutorialSidebar","previous":{"title":"Utilisation de Klipper","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/BDsensor-m/kliper"},"next":{"title":"D\xe9calage automatique Z pour Marlin","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/BDsensor-m/marlinpz"}}'),o=i("52676"),t=i("79938");let r={sidebar_position:4,sidebar_label:"klipper auto-z-offset"},a="Installation du capteur de collision de buse pour klipper",l={},d=[];function c(e){let n={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Button:i}=n;return!i&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Button",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"installation-du-capteur-de-collision-de-buse-pour-klipper",children:"Installation du capteur de collision de buse pour klipper"})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.p,{children:"Cette fonctionnalit\xe9 n\xe9cessite une version de firmware BD sup\xe9rieure \xe0 V1.1b, sup\xe9rieure \xe0 V1.2b ou une version achet\xe9e apr\xe8s mars 2024, sinon vous devrez utiliser un outil de programmation externe (comme STlink) pour flasher le firmware sur le capteur BD."}),(0,o.jsx)(n.p,{children:"Lorsque vous effectuez un homing avec un PEI mou (comme Whambam), ne chauffez pas la buse \xe0 une temp\xe9rature trop \xe9lev\xe9e, car cela pourrait laisser des trous dans le PEI."})]}),"\n",(0,o.jsx)(n.h1,{id:"comment-\xe7a-marche",children:"Comment \xe7a marche"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Si la buse ou la plaque d'impression s'arr\xeate en raison d'une collision, les donn\xe9es de distance mesur\xe9es par le capteur BD cesseront \xe9galement de changer, puis le capteur BD \xe9mettra rapidement un signal d'arr\xeat."}),"\n",(0,o.jsx)(n.li,{children:"Le processus de calibration automatique z_offset lors de l'homing : il peut \xeatre d\xe9clench\xe9 lorsque la buse touche la plaque d'impression pendant l'homing - puis se d\xe9place lentement vers le haut jusqu'\xe0 ce que la buse quitte l\xe9g\xe8rement la plaque d'impression - en d\xe9finissant cette position comme la position z de 0."}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"avantages",children:"Avantages"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Calibration automatique de l'offset z-axe."}),"\n",(0,o.jsx)(n.li,{children:"Vous pouvez toujours ajuster manuellement l'offset z-axe pour diff\xe9rents types de filaments."}),"\n",(0,o.jsx)(n.li,{children:"Surmontez le d\xe9riveur de temp\xe9rature."}),"\n",(0,o.jsx)(n.li,{children:"La d\xe9rive de temp\xe9rature change l'offset z-axe, mais ne change pas la plage de l'hauteur de la grille de la plaque d'impression avec un capteur BD. Cela signifie que m\xeame si la temp\xe9rature est diff\xe9rente, la grille de la plaque d'impression reste la m\xeame."}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"utilisation",children:"Utilisation"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Ajoutez ",(0,o.jsx)(n.code,{children:"collision_homing"})," et ",(0,o.jsx)(n.code,{children:"collision_calibrate"})," au [BDsensor] section."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"[BDsensor] \ncollision_homing:0 # D\xe9finissez-le \xe0 1 pour activer l'homing avec la d\xe9tection de collision de buse. D\xe9sactivez-le en le d\xe9finissant \xe0 0. D\xe9finissez-le \xe0 1 pour activer l'homing avec la d\xe9tection de collision de buse. En le d\xe9finissant \xe0 0, vous pouvez d\xe9sactiver cette fonction.\n                   \ncollision_calibrate:0 # D\xe9finissez-le \xe0 1 pour activer l'\xe9talonnage automatique du capteur BD avec la d\xe9tection de collision de buse. D\xe9sactivez-le en le d\xe9finissant \xe0 0. Cela signifie que nous n'avons pas besoin de d\xe9placer manuellement la buse sur la plaque et de faire un test de papier avant d'envoyer la commande de calibrage M102 S-6. Cela signifie que nous n'avons pas besoin de d\xe9placer manuellement la buse sur la plaque et de faire un test de papier avant d'envoyer la commande de calibrage M102 S-6.\n# cela signifie que nous n'avons pas besoin de d\xe9placer manuellement la buse sur la plaque et de faire un test de papier avant d'envoyer la commande de calibrage M102 S-6.\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"La sensibilit\xe9 d\xe9pend de la vitesse, plus la vitesse est faible, plus la sensibilit\xe9 est \xe9lev\xe9e, donc vous devez ajuster la vitesse de l'axe Z, la vitesse d'homing (vitesse d'homing) et la deuxi\xe8me vitesse d'homing (deuxi\xe8me vitesse d'homing) doivent \xeatre comprises entre 2 et 5."}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"La buse doit \xeatre nettoy\xe9e ou chauff\xe9e pour ramollir les r\xe9sidus de filament.\nNe d\xe9finissez pas la vitesse trop haute ou trop basse. Si la vitesse est trop \xe9lev\xe9e, elle pourrait endommager votre hot-end ou votre plaque d'impression ; si la vitesse est trop basse, elle pourrait se d\xe9clencher dans l'air, en fait la buse n'a pas touch\xe9 la plaque d'impression."})}),"\n",(0,o.jsx)(n.h1,{id:"configuration-de-r\xe9f\xe9rence",children:"Configuration de r\xe9f\xe9rence"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"[stepper_z]\nendstop_pin: probe:z_virtual_endstop\n#position_endstop: 0.0\nposition_max: 250\nhoming_speed: 5\nsecond_homing_speed:3\nhoming_retract_dist:5\nhoming_retract_speed:2\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"z_hop"})," (hauteur de retrait Z) et ",(0,o.jsx)(n.code,{children:"homing_retract_dist"})," (distance de retrait de l'homing) doivent \xeatre sup\xe9rieurs ou \xe9gaux \xe0 5."]})}),"\n",(0,o.jsx)(n.h1,{id:"configuration-de-r\xe9f\xe9rence-1",children:"Configuration de r\xe9f\xe9rence"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"[safe_z_home]\nz_hop: 5 \n\n[stepper_z]\nhoming_retract_dist:5\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"[BDsensor] \n...\nspeed:3 # cette vitesse ne fonctionne que pour la commande de tilting Z et PROBE_ACCURACY. # Cette vitesse ne fonctionne que pour la commande de tilting Z et PROBE_ACCURACY.\n...\n\n"})}),"\n",(0,o.jsx)(n.admonition,{title:"Conseil",type:"tip",children:(0,o.jsxs)(n.p,{children:["R\xe9f\xe9rence de configuration ",(0,o.jsx)(n.code,{children:"zero_reference_position"})]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"[bed_mesh]\nhorizontal_move_z:1 # 0.7~1.0mm est recommand\xe9 recommand\xe9. # 0.7~1.0mm est recommand\xe9 recommand\xe9.\nzero_reference_position: 150, 160 # D\xe9finissez cette valeur pour qu'elle soit la m\xeame que celle de home_xy_position qui se trouve dans la section  ## D\xe9finissez cette valeur pour qu'elle soit la m\xeame que celle de home_xy_position qui se trouve dans la section.\n....\n"})}),"\n",(0,o.jsx)(n.h1,{id:"test-de-lhoming",children:"Test de l'homing"}),"\n",(0,o.jsxs)(n.p,{children:["Envoyez environ 10 fois la commande ",(0,o.jsx)(n.code,{children:"G28 Z"}),", puis v\xe9rifiez les donn\xe9es de sortie sur la console apr\xe8s chaque envoi de la commande ",(0,o.jsx)(n.code,{children:"G28 Z"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"G28 Z\n"})}),"\n",(0,o.jsx)(i,{variant:"contained",disableElevation:!0,href:"https://www.youtube.com/watch?v=RuPoXbrSPDc",children:"Vid\xe9o de d\xe9monstration"})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},79938:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return r}});var s=i(75271);let o={},t=s.createContext(o);function r(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);