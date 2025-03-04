"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["14743"],{15061:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>c,assets:()=>l,toc:()=>u,frontMatter:()=>t});var i=JSON.parse('{"id":"DebugDoc/ref-config/fuidd","title":"Suspension et annulation de l\'impression \xe0 une position personnalis\xe9e","description":"* Ajoutez [include mainsail.cfg] ou [include fluidd.cfg] dans printer.cfg.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/ref-config/fuidd.mdx","sourceDirName":"DebugDoc/ref-config","slug":"/DebugDoc/ref-config/fuidd","permalink":"/fly-docs-next/fr/docs/DebugDoc/ref-config/fuidd","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/fuidd.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"debugdocSidebar","previous":{"title":"Configuration de r\xe9f\xe9rence multi-Z","permalink":"/fly-docs-next/fr/docs/DebugDoc/ref-config/stepper_z"},"next":{"title":"\u5404\u7C7B\u63D2\u4EF6","permalink":"/fly-docs-next/fr/docs/category/\u5404\u7C7B\u63D2\u4EF6"}}'),r=s("52676"),o=s("79938");let t={sidebar_position:10},a="Suspension et annulation de l'impression \xe0 une position personnalis\xe9e",l={},u=[{value:"Traduction en chinois",id:"traduction-en-chinois",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"suspension-et-annulation-de-limpression-\xe0-une-position-personnalis\xe9e",children:"Suspension et annulation de l'impression \xe0 une position personnalis\xe9e"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ajoutez ",(0,r.jsx)(n.code,{children:"[include mainsail.cfg]"})," ou ",(0,r.jsx)(n.code,{children:"[include fluidd.cfg]"})," dans ",(0,r.jsx)(n.code,{children:"printer.cfg"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Ajoutez les macros ci-dessous dans ",(0,r.jsx)(n.code,{children:"printer.cfg"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"traduction-en-chinois",children:"Traduction en chinois"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[gcode_macro _CLIENT_VARIABLE]\n### Param\xe8tres personnalis\xe9s pour la macro de suspension\nvariable_use_custom_pos   : False ; Utiliser des coordonn\xe9es personnalis\xe9es pour x, y lors du stationnement [True/False]\nvariable_custom_park_x    : 0.0   ; Position X personnalis\xe9e lors de la suspension de l'impression\nvariable_custom_park_y    : 0.0   ; Position Y personnalis\xe9e lors de la suspension de l'impression\nvariable_custom_park_dz   : 2.0   ; Distance en mm pour lever le buse lors du stationnement pendant l'impression\n\n### Param\xe8tres personnalis\xe9s pour la macro d'annulation de suspension\nvariable_park_at_cancel   : False ; Autoriser le d\xe9placement de la t\xeate d'impression vers la position de stationnement lors de l'ex\xe9cution de l'annulation de l'impression [True/False]\nvariable_park_at_cancel_x : None  ; Position X diff\xe9rente lors de l'annulation de l'impression [None/Position en tant que Float]; variable_park_at_cancel doit \xeatre True\nvariable_park_at_cancel_y : None  ; Position Y diff\xe9rente lors de l'annulation de l'impression [None/Position en tant que Float]; variable_park_at_cancel doit \xeatre True\n\n### Action de l'extrudeur lors de la suspension et de l'annulation\nvariable_retract          : 1.0     ; Longueur de retrait en mm lors de la suspension de l'impression\nvariable_cancel_retract   : 5.0     ; Longueur de retrait en mm lors de l'annulation de l'impression\nvariable_speed_retract    : 35.0    ; Vitesse de retrait en mm/s\nvariable_unretract        : 1.0     ; Longueur de r\xe9tractation en mm lors de la reprise de l'impression\nvariable_speed_unretract  : 35.0    ; Vitesse de r\xe9tractation en mm/s\nvariable_speed_hop        : 15.0    ; Vitesse de d\xe9placement en Z en mm/s\nvariable_speed_move       : 100.0   ; Vitesse de d\xe9placement en mm/s\n\n### Configuration de l'arr\xeat du chauffage du moteur\n### Un jour \xe9quivaut \xe0 86400 secondes\nvariable_idle_timeout     : 0     ; Temps en secondes jusqu'\xe0 ce que l'arr\xeat par inactivit\xe9 se d\xe9clenche. Une valeur de 0 signifie qu'aucune valeur ne sera d\xe9finie ou restaur\xe9e\n\n# !!! Attention si vous d\xe9finissez use_fw_retract: True, vous devez d\xe9finir [firmware_retraction] dans printer.cfg !!!\nvariable_use_fw_retract   : False ; Utiliser le retrait du firmware au lieu de la version manuelle [True/False]\nvariable_runout_sensor    : \"\"    ; Si un capteur est d\xe9fini, il sera utilis\xe9 pour annuler l'ex\xe9cution de RESUME si aucun fil n'est d\xe9tect\xe9.\n#                                Sp\xe9cifiez le nom de configuration du capteur de rupture de fil, par exemple \"filament_switch_sensor runout\". Conseil : utilisez la m\xeame chose que dans votre fichier printer.cfg\n# !!! Macros personnalis\xe9es, veuillez utiliser avec prudence et examiner la section correspondante de la macro.\n# Ces macros sont pour des op\xe9rations simples comme l'activation d'une LED de statut. Assurez-vous que votre macro ne perturbe pas les fonctions de base des macros. Seules les commandes sur une seule ligne sont support\xe9es, cr\xe9ez une macro si vous avez besoin de plus d'une commande.\nvariable_user_pause_macro : \"\"    ; Tout ce qui est \xe0 l'int\xe9rieur des \"\" sera ex\xe9cut\xe9 apr\xe8s la fonction de base de pause de Klipper (PAUSE_BASE)\nvariable_user_resume_macro: \"\"    ; Tout ce qui est \xe0 l'int\xe9rieur des \"\" sera ex\xe9cut\xe9 avant la fonction de base de reprise de Klipper (RESUME_BASE)\nvariable_user_cancel_macro: \"\"    ; Tout ce qui est \xe0 l'int\xe9rieur des \"\" sera ex\xe9cut\xe9 avant la fonction de base d'annulation de Klipper (BASE_CANCEL_PRINT)\ngcode:\n"})})]})}function c(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},79938:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return t}});var i=s(75271);let r={},o=i.createContext(r);function t(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);