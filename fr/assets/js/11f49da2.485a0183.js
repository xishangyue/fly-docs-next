"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["53637"],{56252:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>u,assets:()=>s,toc:()=>l,frontMatter:()=>d});var r=JSON.parse('{"id":"ProductDoc/ExtensionBoard/fly-tap/index","title":"TAP","description":"Sch\xe9ma de c\xe2blage TAP !","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/fly-tap/index.mdx","sourceDirName":"ProductDoc/ExtensionBoard/fly-tap","slug":"/ProductDoc/ExtensionBoard/fly-tap/","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-tap/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/fly-tap/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"frontMatter":{"position_side_bar":1,"label_side_bar":"Introduction"},"sidebar":"tutorialSidebar","previous":{"title":"FLY-TAP","permalink":"/fly-docs-next/fr/docs/category/fly-tap"},"next":{"title":"BDsensor-m","permalink":"/fly-docs-next/fr/docs/category/bdsensor-m"}}'),t=a("52676"),i=a("79938");let d={position_side_bar:1,label_side_bar:"Introduction"},o="TAP",s={},l=[{value:"Sch\xe9ma de c\xe2blage TAP !",id:"sch\xe9ma-de-c\xe2blage-tap-",level:2},{value:"Tutoriel de configuration TAP",id:"tutoriel-de-configuration-tap",level:2},{value:"Modification des macros de d\xe9marrage",id:"modification-des-macros-de-d\xe9marrage",level:2},{value:"Modification de la macro de d\xe9marrage PrusaSlicer",id:"modification-de-la-macro-de-d\xe9marrage-prusaslicer",level:3},{value:"Modification de la macro de d\xe9marrage CURA",id:"modification-de-la-macro-de-d\xe9marrage-cura",level:3},{value:"Modification de la macro de d\xe9marrage Orca-Slicer",id:"modification-de-la-macro-de-d\xe9marrage-orca-slicer",level:3}];function c(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{ImageView:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"tap",children:"TAP"})}),"\n",(0,t.jsx)(n.h2,{id:"sch\xe9ma-de-c\xe2blage-tap-",children:"Sch\xe9ma de c\xe2blage TAP !"}),"\n",(0,t.jsx)(n.admonition,{title:"Attention",type:"warning",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Veuillez vous assurer de ne pas connecter le tap \xe0 la broche du servomoteur, mais \xe0 celle de la limite !!"}),"\n"]})}),"\n",(0,t.jsx)(r,{image:a(87806).Z,size:"90%",align:"left"}),"\n",(0,t.jsx)(n.h2,{id:"tutoriel-de-configuration-tap",children:"Tutoriel de configuration TAP"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Comme le tap utilise directement le buse comme d\xe9clencheur de limite, il n'y a aucun d\xe9calage XY"}),"\n"]})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Les seules modifications apport\xe9es au TAP concernent la limite Z et le sondeur"}),"\n"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"\n[stepper_z]\nendstop_pin: probe:z_virtual_endstop\n# endstop_pin: ^sht36:PA1  \n# position_endstop: -0.5        \n\n[probe]\npin: ^sht36:PA1              # Interface de signal\nx_offset: 0                  # D\xe9calage X - d\xe9calage relatif de la sonde par rapport \xe0 la buse\ny_offset: 0                  # D\xe9calage Y - d\xe9calage relatif de la sonde par rapport \xe0 la buse\n#z_offset: 0                 # D\xe9calage Z - d\xe9calage relatif de la sonde par rapport \xe0 la buse\nspeed: 3.0                   # Vitesse d'ajustement\nlift_speed: 5                # Vitesse de lev\xe9e du sondeur\nsamples: 3                   # Nombre d'\xe9chantillons\nsamples_result: median       # M\xe9thode de s\xe9lection des valeurs (par d\xe9faut : m\xe9diane)\nsample_retract_dist: 3.0     # Distance de retrait pour l'ajustement\nsamples_tolerance: 0.075     # Tol\xe9rance d'\xe9chantillonnage (attention aux petites valeurs qui peuvent augmenter le nombre d'\xe9chantillons)\nsamples_tolerance_retries: 3 # Nombre de tentatives de r\xe9essai en cas de d\xe9passement de tol\xe9rance\nactivate_gcode:\n    {% set PROBE_TEMP = 150 %}\n    {% set MAX_TEMP = PROBE_TEMP + 5 %}\n    {% set ACTUAL_TEMP = printer.extruder.temperature %}\n    {% set TARGET_TEMP = printer.extruder.target %}\n\n    {% if TARGET_TEMP > PROBE_TEMP %}\n        { action_respond_info('Temp\xe9rature cible de l\\'extrudeur de %.1fC est trop \xe9lev\xe9e, r\xe9duction \xe0 %.1fC' % (TARGET_TEMP, PROBE_TEMP)) }\n        M106 S255\n        M109 S{ PROBE_TEMP }\n        M106 S26\n    {% else %}\n        # La temp\xe9rature cible est d\xe9j\xe0 suffisamment basse, mais la buse pourrait \xeatre encore trop chaude.\n        {% if ACTUAL_TEMP > MAX_TEMP %}\n            { action_respond_info('Temp\xe9rature de l\\'extrudeur de %.1fC est encore trop \xe9lev\xe9e, attente jusqu\\'\xe0 ce qu\\'elle soit en dessous de %.1fC' % (ACTUAL_TEMP, MAX_TEMP)) }\n            TEMPERATURE_WAIT SENSOR=extruder MAXIMUM={ MAX_TEMP }\n        {% endif %}\n    {% endif %}\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"modification-des-macros-de-d\xe9marrage",children:"Modification des macros de d\xe9marrage"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Effet"}),"\n"]}),"\n",(0,t.jsx)(r,{image:a(89139).Z,size:"80%",align:"left"}),"\n",(0,t.jsx)(n.h3,{id:"modification-de-la-macro-de-d\xe9marrage-prusaslicer",children:"Modification de la macro de d\xe9marrage PrusaSlicer"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"M109 S150\nprint_start\nM109 S[first_layer_temperature]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"modification-de-la-macro-de-d\xe9marrage-cura",children:"Modification de la macro de d\xe9marrage CURA"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"M109 S150\nprint_start\nM109 S{material_print_temperature_layer_0} ;Chauffe de l'extrudeur\n"})}),"\n",(0,t.jsx)(n.h3,{id:"modification-de-la-macro-de-d\xe9marrage-orca-slicer",children:"Modification de la macro de d\xe9marrage Orca-Slicer"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"M190 S[bed_temperature_initial_layer_single]\nM109 S150\nprint_start  PRINT_MIN={first_layer_print_min[0]},{first_layer_print_min[1]} PRINT_MAX={first_layer_print_max[0]},{first_layer_print_max[1]}\nM109 S[nozzle_temperature_initial_layer]\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},89139:function(e,n,a){a.d(n,{Z:function(){return r}});let r=a.p+"assets/images/klipper-806cbb29b38164762eb78bec7f5691c9.webp"},87806:function(e,n,a){a.d(n,{Z:function(){return r}});let r=a.p+"assets/images/tap-a19dbb1ae76e5d3aa668019273995cc7.webp"},79938:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return d}});var r=a(75271);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);