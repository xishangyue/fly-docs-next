"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["60331"],{47809:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>E,assets:()=>d,toc:()=>l,frontMatter:()=>s});var t=JSON.parse('{"id":"DebugDoc/ref-config/idex","title":"idex","description":"Code de d\xe9part du tranchage fourni par la cr\xe9atrice de contenu sur Bilibili muimoon:","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/ref-config/idex.mdx","sourceDirName":"DebugDoc/ref-config","slug":"/DebugDoc/ref-config/idex","permalink":"/fly-docs-next/fr/docs/DebugDoc/ref-config/idex","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/idex.mdx","tags":[],"version":"current","lastUpdatedBy":"xishangyue","lastUpdatedAt":1741155898000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"R\xe9f\xe9rence de configuration pour double axe/idex"},"sidebar":"debugdocSidebar","previous":{"title":"Attente trop longue pour la stabilisation de la temp\xe9rature initiale lors de l\'impression","permalink":"/fly-docs-next/fr/docs/DebugDoc/ref-config/m109"},"next":{"title":"Configuration de la tol\xe9rance de chauffage","permalink":"/fly-docs-next/fr/docs/DebugDoc/ref-config/verify_heater"}}'),a=r("52676"),i=r("79938");let s={sidebar_position:3,sidebar_label:"R\xe9f\xe9rence de configuration pour double axe/idex"},o=void 0,d={},l=[{value:"Code de d\xe9part du tranchage fourni par la cr\xe9atrice de contenu sur Bilibili muimoon:",id:"code-de-d\xe9part-du-tranchage-fourni-par-la-cr\xe9atrice-de-contenu-sur-bilibili-muimoon",level:2},{value:"Configuration pour le deuxi\xe8me extrudeur",id:"configuration-pour-le-deuxi\xe8me-extrudeur",level:2}];function u(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"code-de-d\xe9part-du-tranchage-fourni-par-la-cr\xe9atrice-de-contenu-sur-bilibili-muimoon",children:"Code de d\xe9part du tranchage fourni par la cr\xe9atrice de contenu sur Bilibili muimoon:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"M190 S\u3010bed_temperature_initial_layer_single\u3011\n{if is_extruder_used\u30100\u3011}\nM104 S{first_layer_temperature\u30100\u3011+standby_temperature_delta} T0\n{endif}\n{if is_extruder_used\u30101\u3011}\nM104 S{first_layer_temperature\u30101\u3011+standby_temperature_delta} T1\n{endif}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"configuration-pour-le-deuxi\xe8me-extrudeur",children:"Configuration pour le deuxi\xe8me extrudeur"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cfg",children:"[dual_carriage]\naxis: x\nstep_pin: PA15\ndir_pin: PA14\nenable_pin: !PA13\nrotation_distance: 40\nmicrosteps: 16\nfull_steps_per_rotation: 200\nendstop_pin: ^!PB4\nposition_endstop: 359.35\nposition_min: 0\nposition_max: 360\nhoming_speed: 50\nhoming_retract_dist: 5\nstep_pulse_duration: 0.000004\n#--------------------------------------------------------------------\n[tmc2209 dual_carriage]\nuart_pin: PC10\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n"})}),"\n",(0,a.jsx)(n.p,{children:"La copie ou le miroir des macros n\xe9cessite une r\xe9f\xe9rence au code correspondant dans le processus de d\xe9coupe."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"ACTIVATE_COPY_MODE Mode de copie"}),"\n",(0,a.jsx)(n.li,{children:"ACTIVATE_MIRROR_MODE Mode de miroir"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cfg",children:"[gcode_macro PARK_extruder1]\ngcode:\n    SAVE_GCODE_STATE NAME=park1\n    G90\n    G1 X200\n    RESTORE_GCODE_STATE NAME=park1\n\n[gcode_macro T1]\ngcode:\n    PARK_{printer.toolhead.extruder}\n    ACTIVATE_EXTRUDER EXTRUDER=extruder1\n    SET_DUAL_CARRIAGE CARRIAGE=1\n    SET_GCODE_OFFSET Y=15\n\n# Un script d'aide pour activer le mode de copie\n[gcode_macro ACTIVATE_COPY_MODE]\ngcode:\n    SET_DUAL_CARRIAGE CARRIAGE=0 MODE=PRIMARY\n    G1 X0\n    ACTIVATE_EXTRUDER EXTRUDER=extruder\n    SET_DUAL_CARRIAGE CARRIAGE=1 MODE=PRIMARY\n    G1 X100\n    SET_DUAL_CARRIAGE CARRIAGE=1 MODE=COPY\n    SYNC_EXTRUDER_MOTION EXTRUDER=extruder1 MOTION_QUEUE=extruder\n\n# Un script d'aide pour activer le mode de miroir\n[gcode_macro ACTIVATE_MIRROR_MODE]\ngcode:\n    SET_DUAL_CARRIAGE CARRIAGE=0 MODE=PRIMARY\n    G1 X0\n    ACTIVATE_EXTRUDER EXTRUDER=extruder\n    SET_DUAL_CARRIAGE CARRIAGE=1 MODE=PRIMARY\n    G1 X200\n    SET_DUAL_CARRIAGE CARRIAGE=1 MODE=MIRROR\n    SYNC_EXTRUDER_MOTION EXTRUDER=extruder1 MOTION_QUEUE=extruder\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Configuration bicolore"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cfg",children:'[gcode_macro CANCEL_PRINT]\nrename_existing: BASE_CANCEL_PRINT\ngcode:\n    TURN_OFF_HEATERS\n    CLEAR_PAUSE\n    SDCARD_RESET_FILE\n    BASE_CANCEL_PRINT\n\n[gcode_macro PAUSE]\nrename_existing: BASE_PAUSE\ngcode:\n    ##### d\xe9finir les valeurs par d\xe9faut #####\n    {% set x = params.X|default(100) %}      #modifier pour votre position de parking\n    {% set y = params.Y|default(100) %}      #modifier pour votre position de parking\n    {% set lift_z = params.Z|default(50)| float | abs %} #modifier pour votre hauteur de levage d\xe9sir\xe9e\n    {% set e = params.E|default(1) %}        #modifier pour votre longueur de r\xe9traction\n    ##### calculer la position de sauvegarde de levage #####\n    {% set max_z = (printer.toolhead.axis_maximum.z|float ) %} #laisser de la place pour l\'offset z de gcode\n    {% set act_z = printer.toolhead.position.z|float %}\n    {% set new_z = act_z + lift_z %}\n    {% if new_z >  max_z %}\n        new_z = max_z\n    {% endif %}\n    SAVE_GCODE_STATE NAME=PAUSE_state\n    BASE_PAUSE\n    M83 ; d\xe9finir E en mode relatif\n    {% if printer.extruder.can_extrude|lower == \'true\' %}\n      G1 E-{e} F2100\n    {% else %}\n      RESPOND MSG="L\'extrudeur n\'est pas assez chaud"\n    {% endif %}\n    {% if "xyz" in printer.toolhead.homed_axes %}    \n      G0 Z{new_z} X{x} Y{y} F6000\n    {% else %}\n      RESPOND MSG="L\'imprimante n\'est pas \xe0 l\'origine"\n    {% endif %}\n\n\n[gcode_macro RESUME]\nrename_existing: BASE_RESUME\ngcode:\n    ##### d\xe9finir les valeurs par d\xe9faut #####\n#    {% set e = params.E|default(1) %} #modifier pour votre longueur de r\xe9traction\n#    M83 ; d\xe9finir E en mode relatif\n#    {% if printer.extruder.can_extrude|lower == \'true\' %}\n#      G1 E-{e} F2100\n#    {% else %}\n#      RESPOND MSG="L\'extrudeur n\'est pas assez chaud"\n#    {% endif %}\n    RESTORE_GCODE_STATE NAME=PAUSE_state MOVE=1\n    BASE_RESUME\n\n################################################################################\n################################################################################\n\n# Script d\'aide pour garer la carrosserie (appel\xe9 depuis les macros T0 et T1)\n[gcode_macro PARK_extruder]\ngcode:\n	RESPOND MSG="Garer l\'extrudeur le plus \xe0 gauche"\n	#s\'assurer que nous d\xe9pla\xe7ons la premi\xe8re carrosserie\n	SET_DUAL_CARRIAGE CARRIAGE=0\n	{% if not "x" in printer.toolhead.homed_axes %}\n	    RESPOND MSG="\xc0 l\'origine X"\n	    G28 X\n	{% endif %}\n\n    SAVE_GCODE_STATE NAME=park0\n    G90\n	SET_GCODE_OFFSET X=0 Y=0 #Z=0\n    G1 X{printer.configfile.settings.stepper_x.position_min} F12000\n    RESTORE_GCODE_STATE NAME=park0\n\n[gcode_macro PARK_extruder1]\ngcode:\n	RESPOND MSG="Garer l\'extrudeur le plus \xe0 droite"\n	#s\'assurer que nous d\xe9pla\xe7ons la deuxi\xe8me carrosserie. Apr\xe8s tout, nous ne savons pas quelle carrosserie est active\n	SET_DUAL_CARRIAGE CARRIAGE=1\n	{% if not "x" in printer.toolhead.homed_axes %}\n	    RESPOND MSG="\xc0 l\'origine X"\n	    G28 X\n	{% endif %}\n\n    SAVE_GCODE_STATE NAME=park1\n    G90\n	SET_GCODE_OFFSET X=0 Y=0 #Z=0\n    G1 X{printer.configfile.settings.dual_carriage.position_max} F12000\n    RESTORE_GCODE_STATE NAME=park1\n\n\n[gcode_macro x_xoffset]\n# script d\'aide, n\xe9cessaire car la variable xoffset sera modifi\xe9e pendant l\'ex\xe9cution de la macro\n# et l\'expansion de la macro se produit avant cela\ngcode:\n	{% set offset = printer["gcode_macro set_stepper_x_range"].xoffset %}\n	RESPOND MSG="L\'offset X sera d\xe9fini \xe0: { offset }"\n    SET_GCODE_OFFSET Y=0 X={ offset } #Z=0\n	\n\n\n[gcode_macro set_stepper_x_range]\nvariable_xoffset: 0\nvariable_range_set: 0\ngcode:\n    RESPOND MSG="D\xe9finir l\'origine de l\'axe X pour l\'extrudeur le plus \xe0 gauche"\n#	{ action_respond_info("Temp\xe9rature cible de l\'extrudeur1: %s" % printer.extruder1.target ) }\n	RESPOND MSG="Temp\xe9rature cible de l\'extrudeur1: { printer.extruder1.target }"\n	{% if   printer.extruder1.target|int > 0 %}\n 		RESPOND MSG="Extrudeur droit actif"\n	    #{% set offset= 17 %}\n	    {% set offset= 0 %} #Je ne sais pas pourquoi il \xe9tait d\xe9fini \xe0 17, mais cela a parfois perturb\xe9 mes impressions !\n	{% else %}\n	    {% set offset=0 %}\n	{% endif %}\n	SET_GCODE_VARIABLE MACRO=set_stepper_x_range VARIABLE=xoffset VALUE={offset}\n	RESPOND MSG="L\'origine X pour la t\xeate gauche sera d\xe9finie \xe0 {offset} mm \xe0 partir de la fin gauche du lit"\n	#faire savoir que la plage a \xe9t\xe9 d\xe9finie pour cette impression et ne devrait pas \xeatre r\xe9\xe9valu\xe9e\n	SET_GCODE_VARIABLE MACRO=set_stepper_x_range VARIABLE=range_set VALUE=1\n\n[gcode_macro clear_stepper_x_range]\ngcode:\n    RESPOND MSG="Effacer la plage d\'impression de l\'axe X pour l\'extrudeur le plus \xe0 gauche"\n	SET_GCODE_VARIABLE MACRO=set_stepper_x_range VARIABLE=xoffset VALUE=0\n	#faire savoir que la plage n\'a pas \xe9t\xe9 d\xe9finie pour cette impression et devrait \xeatre r\xe9\xe9valu\xe9e\n	SET_GCODE_VARIABLE MACRO=set_stepper_x_range VARIABLE=range_set VALUE=0\n	\n\n# Activer l\'extrudeur primaire\n[gcode_macro T0]\ngcode:\n	RESPOND MSG="S\xe9lectionner l\'outil T0"\n	home_if_not\n	{% if printer.toolhead.extruder != "extruder" %}\n	    PARK_{printer.toolhead.extruder}\n	{% endif %}\n    ACTIVATE_EXTRUDER EXTRUDER=extruder\n    SET_DUAL_CARRIAGE CARRIAGE=0\n	# ex\xe9cuter la d\xe9finition de plage une seule fois, afin de ne pas la mal configurer apr\xe8s que la temp\xe9rature cible de T1 ait \xe9t\xe9 d\xe9finie \xe0 z\xe9ro\n	{% if  printer["gcode_macro set_stepper_x_range"].range_set  == 0  %}\n		RESPOND MSG="Plage de mouvement X de l\'extrudeur le plus \xe0 gauche non encore d\xe9finie, la d\xe9finir maintenant"\n		set_stepper_x_range\n	{% endif %}\n	x_xoffset\n\n\n[gcode_macro T1]\ngcode:\n	RESPOND MSG="S\xe9lectionner l\'outil T1"\n	home_if_not\n	{% if printer.toolhead.extruder != "extruder1" %}\n	    PARK_{printer.toolhead.extruder}\n	{% endif %}\n    ACTIVATE_EXTRUDER EXTRUDER=extruder1\n    SET_DUAL_CARRIAGE CARRIAGE=1\n\n    #Les offsets X/Y sont oppos\xe9s de la m\xe9thode standard du firmware d\'origine.\n    #Si E2 imprime trop \xe0 gauche, vous devez AJOUTER \xe0 l\'offset X.\n    #Si E2 imprime trop vers le bas, vous devez AJOUTER \xe0 l\'offset Y.\n    #L\'offset Z n\'est g\xe9n\xe9ralement pas n\xe9cessaire. Calibrez simplement l\'ajustement physique de Z sur E2.\n    SET_GCODE_OFFSET X=3.80 Y=0.50 #Z=0\n\n[gcode_macro home_if_not ]\ngcode:\n	{% if printer.toolhead.homed_axes != \'xyz\' %}\n	  G28\n    {% endif %}\n\n[gcode_macro probeon]\ngcode:\n 	SET_GCODE_VARIABLE MACRO=bedmesh VARIABLE=probe_installed VALUE=1\n 	RESPOND MSG="Enregistr\xe9 que vous avez install\xe9 le capteur sur la t\xeate gauche"\n\n[gcode_macro probeoff]\ngcode:\n 	SET_GCODE_VARIABLE MACRO=bedmesh VARIABLE=probe_installed VALUE=0\n 	RESPOND MSG="Enregistr\xe9 que vous avez d\xe9sinstall\xe9 le capteur de la t\xeate gauche"\n\n[gcode_macro PRIME_LINE]\ngcode: \n    RESPOND MSG="Imprimer une ligne de pr\xe9chauffage "\n\n    {% set x = params.X|default(2)|float %}\n    {% set y = params.Y|default(70)|float %}\n	{% set z = params.Z|default(0.2)|float %}\n    {% set xline = params.XLINE|default(0.8)|float %}\n    {% set yline = params.YLINE|default(120)|float %}\n	{% set eMultiplier = 0.15 * z  %}\n    SAVE_GCODE_STATE NAME=prime_line\n \n	M117 Ligne de pr\xe9chauffage\n\n    G90 ; passer en mode abs pour XYZ\n	M83 ; d\xe9finir E en mode relatif\n    # d\xe9placer l\'axe Z \n    G1 Z0.3 F3000 ;Monter l\'axe Z\n    # se d\xe9placer \xe0 la position de pr\xe9chauffage \n	G0 Y{y} Z{z}\n    G0 X{x} ;Se d\xe9placer \xe0 la position de d\xe9part. Effectuer un mouvement carr\xe9 pour \xe9viter de frapper les pinces de coin du lit\n	G1 Y{y + yline} E{eMultiplier * yline} ;Dessiner la premi\xe8re ligne\n    G1 X{x + xline} E{eMultiplier * xline} ;Se d\xe9placer un peu sur le c\xf4t\xe9\n    G1 Y{y + 20} E{eMultiplier * (yline - 20)} ;Dessiner la deuxi\xe8me ligne, mais ne pas retourner \xe0 l\'origine pour \xe9viter de ramasser les essuies\n#	G1 E-0.5 F300\n    G1 Z0.5 F3000 ;Monter l\'axe Z\n\n	RESTORE_GCODE_STATE NAME=prime_line\n\n[gcode_macro prepare_toolheads ]\ngcode:\n    RESPOND MSG="Pr\xe9parer les t\xeates d\'impression"\n	# BED_MESH_PROFILE LOAD=70c\n	# Utiliser des coordonn\xe9es absolues\n    G90\n	#r\xe9initialiser E\n	G92 E0\n	#D\xe9finir l\'extrudeur en mode relatif\n	M83\n	home_if_not\n	# d\xe9finir explicitement la plage au d\xe9but de chaque nouvelle impression\n	set_stepper_x_range\n	{% if   printer.extruder.target|int > 0 %}\n	    RESPOND MSG="Pr\xe9parer T0"\n		T0\n		SAVE_GCODE_STATE NAME=prime_ext0 \n		#Imprimer toujours la ligne de pr\xe9chauffage au tout d\xe9but du lit\n		SET_GCODE_OFFSET X=0 Y=0 Z=0\n		G0 X-10 Y35 Z0.5  F9000\n		# pr\xe9chauffer dans l\'air\n		G1 E5 F300\n		PRIME_LINE X=3 Y=35 Z=0.2 YLINE=100\n		RESTORE_GCODE_STATE NAME=prime_ext0\n	{% endif %}\n	{% if   printer.extruder1.target|int > 0 %}\n	    RESPOND MSG="Pr\xe9parer T1"\n		T1\n		G0 X225 Y35 Z0.5 F9000\n		G1	E5 F300\n		PRIME_LINE X=200 Y=35 Z=0.2 YLINE=100\n	{% endif %}\n	#r\xe9tablir la tete d\'impression \xe0 ce qu\'elle \xe9tait lors de l\'appel du macro.\n	# Au moins Ideamaker d\xe9finit T0/T1 avant d\'appeler la macro d\xe9finie par l\'utilisateur,\n	# donc nous devons savoir quel outil est d\xe9fini et passer \xe0 celui-ci avant de continuer\n	# L\'expansion Jinja se produit avant que la macro soit r\xe9ellement ex\xe9cut\xe9e, donc printer.toolhead.extrude dans la condition\n	# de la d\xe9claration ne sera pas dynamiquement chang\xe9e, mais sera au lieu de la valeur originale au moment de l\'appel.\n	\n	{% if printer.toolhead.extruder == "extruder1" %}\n		T1\n	{% else %}\n		T0\n	{% endif %}\n	#d\xe9finir l\'extrudeur en mode abs\n	M82\n#	{% if  ( (printer.extruder.target|int > 0) and (printer.extruder1.target|int > 0) ) %}\n#		#Deux extrudeurs en utilisation, ne rien faire\n#		RESPOND MSG="Deux t\xeates en utilisation, Ideamaker ne fait pas de retrait"\n#	{% else %}\n#	 	#Ideamaker insiste pour faire un retrait au d\xe9but. Maintenant nous allons juste le rendre penser qu\'il l\'a d\xe9j\xe0 fait. Tr\xe8s vilaine astuce, oui.\n#		RESPOND MSG="Une des deux t\xeates en utilisation, Ideamaker g\xe2che l\'impression en faisant un retrait, alors travailler autour de \xe7a"\n#		G92 E-0.6\n#	{% endif %}\n\n[gcode_macro wait_for_temperatures]\ngcode:\n    \n	# Attendre les temp\xe9ratures. Si une cible est z\xe9ro, elle ne sera pas attendue, en r\xe9alit\xe9. Donc, vous ne pouvez pas extruder avec des temp\xe9ratures tr\xe8s basses :)\n    M190 S{printer.heater_bed.target}\n    M109 T0 S{printer.extruder.target}\n	M109 T1 S{printer.extruder1.target}\n    \n\n[gcode_macro START_PRINT]\n# Ce code suppose que les temp\xe9ratures de la t\xeate d\'impression et du lit ont \xe9t\xe9 d\xe9finies par le logiciel de d\xe9coupe\ngcode:\n	CLEAR_PAUSE\n	{% if printer["gcode_macro bedmesh"].probe_installed != 0 %}\n	   RESPOND TYPE=error MSG="Vous pourriez avoir un capteur encore sur. Retirez le capteur et ex\xe9cutez la commande \'probeoff\' puis r\xe9-imprimez"\n	   CANCEL_PRINT\n	{% else %}\n		T0\n		home_if_not\n		wait_for_temperatures\n        Z_TILT_ADJUST\n\n		BED_MESH_LOAD\n		prepare_toolheads\n	{% endif %}\n\n\n[gcode_macro bedmesh]\nvariable_probe_installed: 1\ngcode:\n    {% if printer["gcode_macro bedmesh"].probe_installed == 0 %}\n	    RESPOND MSG="Installez le capteur et ex\xe9cutez ensuite la commande \'probeon\'"\n	{% else %}\n		RESPOND MSG="Mesurer le r\xe9seau du lit avec TO, avec un d\xe9calage x de z\xe9ro "\n\n		home_if_not\n        Z_TILT_ADJUST\n		T0\n		SAVE_GCODE_STATE NAME=bedmesh\n		#Toujours mesurer avec la t\xeate brute gauche\n		G90\n		SET_GCODE_OFFSET X=0\n		#G0 Z10 F6000\n		BED_MESH_CALIBRATE\n		#G0 Y0 Z100 #brian: \xe9tait \xe0 100\n		G28 X\n		RESTORE_GCODE_STATE NAME=bedmesh\n	{% endif %}\n\n\n[gcode_macro BED_MESH_LOAD]\ndescription: Charger un r\xe9seau de calibrage de lit existant pour la temp\xe9rature correcte\ngcode:\n  ##### obtenir la temp\xe9rature cible du lit #####\n  {% set bed_temp = printer.heater_bed.target|int %}\n  ##### joindre tout en un nom de r\xe9seau unique #####\n  {% set mesh_name = "MESH-" + bed_temp|string + "C" %}\n  ##### fin des d\xe9finitions #####\n  {% if printer.configfile.config["bed_mesh " + mesh_name] is defined %}\n    BED_MESH_PROFILE LOAD={mesh_name}\n    RESPOND TYPE=echo MSG="R\xe9seau de lit charg\xe9 de {mesh_name} "\n  {% else %}\n    RESPOND TYPE=error MSG="R\xe9seau de lit non trouv\xe9 de {mesh_name} "\n  {% endif %}\n\n[gcode_macro bedmesh_renew]\ngcode:\n	home_if_not\n	{% set dwell = 60000 %}\n	{% for t in  [50,60,70] %}\n        {% set mesh_name = "MESH-" + t|string + "C" %}\n		RESPOND MSG="Chauffer le lit \xe0 {t} \xb0C"\n		M190 S{t}\n		RESPOND MSG="Se stabiliser pendant {dwell}ms"\n		G4 P{dwell}\n		bedmesh\n		BED_MESH_PROFILE SAVE={mesh_name}\n	{% endfor %}\n	SAVE_CONFIG\n[gcode_macro END_PRINT]\ngcode:\n    \n    M117 Fin de l\'impression.\n    G91 ; positionnement relatif\n    G1 E-1 F300 ;retirer un peu le filtre avant de lever la buse pour lib\xe9rer un peu de pression\n    G1 Z+5 E-2 F1000 ;d\xe9placer Z un peu plus haut et extraire un peu plus\n#   T1\n#	T0\n#    G90 ; positionnement absolu\n# 	G0 Y220 F6000 ; rendre l\'objet imprim\xe9 accessible\n    m104 S0 T0 ; \xe9teindre le chauffage de l\'extrudeur\n    m104 S0 T1 ; \xe9teindre le chauffage de l\'extrudeur\n    M140 S0 ; \xe9teindre le chauffage du lit\n    G90\n    T0\n    PARK_extruder1\n    PARK_extruder\n    M106 S255 ; allumer le ventilateur pour refroidissement\n    M84 ; d\xe9sactiver les moteurs\n    clear_stepper_x_range\n    M106 S0 ; \xe9teindre le ventilateur\n    SAVE_AT_END\n\n[gcode_macro SEARCH_VARS]\ngcode:\n    {% set search = params.S|lower %}\n    {% set ns = namespace() %}\n    {% for item in printer  %}\n        {% if \' \' in item %}\n            {% set ns.path = [\'printer\', "[\'%s\']" % (item), \'\'] %}\n        {% else %}\n            {% set ns.path = [\'printer.\', item, \'\'] %}   \n        {% endif %} \n\n        {% if search in ns.path|lower %}\n            { action_respond_info(ns.path|join) }\n        {% endif %} \n\n        {% if printer[item].items() %}\n            {% for childkey, child in printer[item].items() recursive %}\n                {% set ns.path = ns.path[:loop.depth|int + 1] %}\n\n                {% if \' \' in childkey %}\n                    {% set null = ns.path.append("[\'%s\']" % (childkey)) %}\n                {% else %}\n                    {% set null = ns.path.append(".%s" % (childkey)) %}\n                {% endif %} \n\n                {% if child is mapping  %}\n                    { loop(child.items()) }\n                {% else %}\n                    {% if search in ns.path|lower %}\n                        { action_respond_info("%s : %s" % (ns.path|join, child)) }   \n                    {% endif %} \n                {% endif %} \n                \n            {% endfor %}\n        {% endif %} \n    {% endfor %}\n    \n[gcode_macro SAVE_AT_END]\nvariable_save: 1\ngcode:\n  SET_GCODE_VARIABLE MACRO=SAVE_AT_END VARIABLE=save VALUE=1\n  \n[gcode_macro SAVE_IF_SET]\ngcode:\n  {% if printer["gcode_macro SAVE_AT_END"].save == 1 %}\n    SAVE_CONFIG\n  {% endif %}\n\n[gcode_macro INITIALIZE_VARIABLE]\ngcode:\n  {% if \'VARIABLE\' not in params %}\n    {action_respond_info("Param\xe8tre VARIABLE manquant")}\n  {% elif \'VALUE\' not in params %}\n    {action_respond_info("Param\xe8tre VALUE manquant")}\n  {% else %}\n    {% set svv = printer.save_variables.variables %}\n    {% if params.VARIABLE not in svv %}\n      {% set escaped = params.VALUE|replace("\\"", "\\\\\\"") %}\n      SAVE_VARIABLE VARIABLE={params.VARIABLE} VALUE="{escaped}"\n    {% endif %}\n  {% endif %}\n\n\n\n[gcode_macro WIPE_LINE]\ngcode:\n  {% set z = params.Z|default(0.25)|float %}\n  {% set n = params.N|default(0.4)|float %}\n\n  {% if printer.toolhead.homed_axes != "xyz" %}\n    {action_respond_info("Merci de mettre \xe0 l\'origine XYZ d\'abord")}\n  {% elif printer.extruder.temperature < 170 %}\n    {action_respond_info("Temp\xe9rature de l\'extrudeur trop basse")}\n  {% else %}\n    SAVE_GCODE_STATE NAME=WIPE_LINE_state\n    M82\n    G90\n    G92 E0\n    G1 X10 Y20 Z5 F3000\n    G1 Z{z} F3000\n    G1 X10 Y150 F1500 E10.83\n    G1 X{ n + 10.0 } F5000\n    G1 Y22 F1500 E21.5\n    G1 Y20 F5000\n    RESTORE_GCODE_STATE NAME=WIPE_LINE_state MOVE=0\n  {% endif %}\n  \n[gcode_macro PREP_PRINT]\ndescription: Charge et commence l\'impression\nvariable_x_max: 0\nvariable_y_max: 0\nvariable_z_max: 0\nvariable_nozzle: 0\nvariable_fila_dia: 0\nvariable_bed_temp: 0\nvariable_extruder_temp: 0\nvariable_chamber_temp: 0\nvariable_layer_count: 0\nvariable_tool_changes: 0\nvariable_cur_layer: 0\nvariable_num_layers: 0\nvariable_layer_z: 0\ngcode:\n\n  M117 Initialisation de l\'impression...\n\n  #Obtenir les dimensions du volume construit de l\'imprimante\n  {% set X_MAX = printer.toolhead.axis_maximum.x|default(100)|float %}\n  {% set Y_MAX = printer.toolhead.axis_maximum.y|default(100)|float %}\n  {% set Z_MAX = printer.toolhead.axis_maximum.z|default(100)|float %}\n\n  #Obtenir le diam\xe8tre de la buse et la largeur du fil pour le conditionnement\n  {% set NOZZLE = printer.extruder.nozzle_diameter|default(0.4)|float %}\n  {% set FILADIA = printer.extruder.filament_diameter|default(1.64)|float %}\n\n  #D\xe9finir les coordonn\xe9es de d\xe9part des lignes de pr\xe9chauffage\n  {% set X_START = 10.0|default(10.0)|float %}\n  {% set Y_START = 20.0|default(20.0)|float %}\n\n  #Calculer le volume d\'extrusion et la longueur de fil de la ligne de pr\xe9chauffage\n  {% set PRIMER_WIDTH = 0.75 * NOZZLE %}                    \n  {% set PRIMER_HEIGHT = 0.70 * NOZZLE %}           \n  {% set PRIMER_SECT = PRIMER_WIDTH * PRIMER_HEIGHT %}    \n  {% set PRIMER_VOL = PRIMER_SECT * (X_MAX - 3 * X_START) %}    \n  {% set FILA_SECT = 3.1415 * ( FILADIA / 2.0)**2 %}          \n  {% set FILA_LENGTH = 1.55 * PRIMER_VOL / FILA_SECT %}\n  {% set FILAMENT_TYPE = params.FILAMENT|default(PLA)|string %}\n\n  #Obtenir les temp\xe9ratures du lit, de l\'extrudeur et de la chambre \xe0 partir du GCode de d\xe9coupe\n  {% set BED_TEMP = params.BED|default(60)|float %}\n  {% set EXTRUDER_TEMP = params.EXTRUDER|default(210)|float %}\n  {% set CHAMBER_TEMP = params.CHAMBER|default(50)|float %}\n\n  # Obtenir le nombre de couches\n  {% set NUM_LAYERS = params.COUNT|default(0)|float %}\n  {% set CUR_LAYER = params.NUM|default(0)|float + 1 %}\n\n  # Obtenir le nombre de changements d\'outil requis\n  {% set TOOL_CHANGES = params.TOOLS|default(0)|float %}\n\n  # Enregistrer les sp\xe9cifications de configuration d\'impression pour une utilisation ult\xe9rieure\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=x_max VALUE={X_MAX}\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=y_max VALUE={Y_MAX}\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=z_max VALUE={Z_MAX}\n\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=nozzle VALUE={NOZZLE}\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=fila_dia VALUE={FILADIA}\n\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=bed_temp VALUE={BED_TEMP}\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=extruder_temp VALUE={EXTRUDER_TEMP}\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=chamber_temp VALUE={CHAMBER_TEMP}\n\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=cur_layer VALUE={CUR_LAYER}\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=num_layers VALUE={NUM_LAYERS}\n\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=tool_changes VALUE={TOOL_CHANGES}\n\n  # Allumer les lumi\xe8res!\n  # Je n\'ai pas encore de lumi\xe8res... \xe7a semble amusant pourtant!\n  #WLED_ON PRESET=1\n\n  # Assurer que T0 est s\xe9lectionn\xe9 pour le Z probing\n  T0\n  PROBEON\n\n  # Commencer le pr\xe9chauffage et la pr\xe9paration de l\'impression\n  G90 ; utiliser des coordonn\xe9es absolues\n  M83 ; mode relatif pour l\'extrudeur\n\n  M117 Pr\xe9chauffer le lit pour le centrage...\n\n  M104 S{EXTRUDER_TEMP}\n  G4 S10 ; permettre un pr\xe9chauffage partiel de la buse\n  M190 S{BED_TEMP} ; d\xe9finir la temp\xe9rature finale du lit\n  #BED_MESH_PROFILE LOAD="default"\n  BED_MESH_LOAD ; charger le profil pour la temp\xe9rature sp\xe9cifi\xe9e\n  # BEDMESH ; Cr\xe9er un nouveau r\xe9seau de lit au lieu de charger un enregistr\xe9\n  M117 Centrer tous les axes...\n  G28 ; centrer tous les axes\n  M117 Ajuster le Z-Tilt...\n  Z_TILT_ADJUST ; calibrer l\'axe Z dual\n\n#  G1 Z50 F240\n#  G1 X2 Y10 F3000\n  M117 Attendre que les temp\xe9ratures se stabilisent...\n\n  M104 S{EXTRUDER_TEMP} ; d\xe9finir la temp\xe9rature finale de la buse\n  G28 X ; garer les extrudeurs pendant le chauffage pour le nettoyage\n  M190 S{BED_TEMP} ; attendre que la temp\xe9rature du lit se stabilise\n  M109 S{EXTRUDER_TEMP} ; attendre que la temp\xe9rature de la buse se stabilise\n\n  WIPE_LINE\n\n  M117 Impression commenc\xe9e\n\n[de_macro M1091]\n#rename_existing: M99109\ngcode:\n    #Param\xe8tres\n    {% set s = params.S|float %}\n    {% set set_tool = params.T|default(0)|int %}\n    \n    M104 {% for p in params %}{\'%s%s\' % (p, params\u3010p\u3011)}{% endfor %}  ; D\xe9finir la temp\xe9rature de la buse\n    \n    {% if s != 0 %}\n            {% if (set_tool == 0 ) %}\n                  TEMPERATURE_WAIT SENSOR=extruder MINIMUM={s-3} MAXIMUM={s+3}   ; Attendre que la temp\xe9rature de la buse atteigne (dans une marge d\'un degr\xe9)\n            {% else %}\n                  TEMPERATURE_WAIT SENSOR=extruder1 MINIMUM={s-3} MAXIMUM={s+3}   ; Attendre que la temp\xe9rature de la buse atteigne (dans une marge d\'un degr\xe9)\n            {% endif %}\n    {% endif %}\n'})})]})}function E(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},79938:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return s}});var t=r(75271);let a={},i=t.createContext(a);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);