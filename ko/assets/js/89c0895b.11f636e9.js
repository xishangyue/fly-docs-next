"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["48511"],{80378:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>s,default:()=>l,assets:()=>d,toc:()=>E,frontMatter:()=>i});var r=JSON.parse('{"id":"DebugDoc/ref-config/idex","title":"idex","description":"slicer \u8D77\u59CB\u4EE3\u7801:","source":"@site/docs/DebugDoc/ref-config/idex.mdx","sourceDirName":"DebugDoc/ref-config","slug":"/DebugDoc/ref-config/idex","permalink":"/fly-docs-next/ko/docs/DebugDoc/ref-config/idex","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/idex.mdx","tags":[],"version":"current","lastUpdatedBy":"xishangyue","lastUpdatedAt":1741075675000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"\u53CCx\u8F74/idex\u53C2\u8003\u914D\u7F6E"},"sidebar":"debugdocSidebar","previous":{"title":"\uD504\uB9B0\uD130 \uC2DC\uC791 \uC628\uB3C4 \uBD88\uC548\uC815 \uB300\uAE30 \uC2DC\uAC04\uC774 \uB108\uBB34 \uAE38\uB2E4","permalink":"/fly-docs-next/ko/docs/DebugDoc/ref-config/m109"},"next":{"title":"\uC5F4 \uC800\uD56D \uD5C8\uC6A9\uCE58 \uC124\uC815","permalink":"/fly-docs-next/ko/docs/DebugDoc/ref-config/verify_heater"}}'),a=t("52676"),o=t("79938");let i={sidebar_position:3,sidebar_label:"\u53CCx\u8F74/idex\u53C2\u8003\u914D\u7F6E"},s=void 0,d={},E=[{value:"slicer \u8D77\u59CB\u4EE3\u7801:",id:"slicer-\u8D77\u59CB\u4EE3\u7801",level:2},{value:"\u7B2C\u4E8C\u4E2A\u6253\u5370\u5934\u8BBE\u7F6E",id:"\u7B2C\u4E8C\u4E2A\u6253\u5370\u5934\u8BBE\u7F6E",level:2}];function _(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"slicer-\u8D77\u59CB\u4EE3\u7801",children:"slicer \u8D77\u59CB\u4EE3\u7801:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"M190 S\u3010bed_temperature_initial_layer_single\u3011\n{if is_extruder_used\u30100\u3011}\nM104 S{first_layer_temperature\u30100\u3011+standby_temperature_delta} T0\n{endif}\n{if is_extruder_used\u30101\u3011}\nM104 S{first_layer_temperature\u30101\u3011+standby_temperature_delta} T1\n{endif}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u7B2C\u4E8C\u4E2A\u6253\u5370\u5934\u8BBE\u7F6E",children:"\u7B2C\u4E8C\u4E2A\u6253\u5370\u5934\u8BBE\u7F6E"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cfg",children:"[dual_carriage]\naxis: x\nstep_pin: PA15\ndir_pin: PA14\nenable_pin: !PA13\nrotation_distance: 40\nmicrosteps: 16\nfull_steps_per_rotation: 200\nendstop_pin: ^!PB4\nposition_endstop: 359.35\nposition_min: 0\nposition_max: 360\nhoming_speed: 50\nhoming_retract_dist: 5\nstep_pulse_duration: 0.000004\n#--------------------------------------------------------------------\n[tmc2209 dual_carriage]\nuart_pin: PC10\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u590D\u5236\u6216\u8005\u955C\u50CF\u5B8F\uFF0C\u9700\u8981\u5728\u5207\u7247\u91CC\u9762\u5F15\u7528\u5BF9\u5E94\u4EE3\u7801"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"ACTIVATE_COPY_MODE\u590D\u5236\u6A21\u5F0F"}),"\n",(0,a.jsx)(n.li,{children:"ACTIVATE_MIRROR_MODE\u955C\u50CF\u6A21\u5F0F"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cfg",children:"[gcode_macro PARK_extruder1]\ngcode:\n    SAVE_GCODE_STATE NAME=park1\n    G90\n    G1 X200\n    RESTORE_GCODE_STATE NAME=park1\n\n[gcode_macro T1]\ngcode:\n    PARK_{printer.toolhead.extruder}\n    ACTIVATE_EXTRUDER EXTRUDER=extruder1\n    SET_DUAL_CARRIAGE CARRIAGE=1\n    SET_GCODE_OFFSET Y=15\n\n# A helper script to activate copy mode\n[gcode_macro ACTIVATE_COPY_MODE]\ngcode:\n    SET_DUAL_CARRIAGE CARRIAGE=0 MODE=PRIMARY\n    G1 X0\n    ACTIVATE_EXTRUDER EXTRUDER=extruder\n    SET_DUAL_CARRIAGE CARRIAGE=1 MODE=PRIMARY\n    G1 X100\n    SET_DUAL_CARRIAGE CARRIAGE=1 MODE=COPY\n    SYNC_EXTRUDER_MOTION EXTRUDER=extruder1 MOTION_QUEUE=extruder\n\n# A helper script to activate mirror mode\n[gcode_macro ACTIVATE_MIRROR_MODE]\ngcode:\n    SET_DUAL_CARRIAGE CARRIAGE=0 MODE=PRIMARY\n    G1 X0\n    ACTIVATE_EXTRUDER EXTRUDER=extruder\n    SET_DUAL_CARRIAGE CARRIAGE=1 MODE=PRIMARY\n    G1 X200\n    SET_DUAL_CARRIAGE CARRIAGE=1 MODE=MIRROR\n    SYNC_EXTRUDER_MOTION EXTRUDER=extruder1 MOTION_QUEUE=extruder\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u53CC\u8272\u914D\u7F6E"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cfg",children:'[gcode_macro CANCEL_PRINT]\nrename_existing: BASE_CANCEL_PRINT\ngcode:\n    TURN_OFF_HEATERS\n    CLEAR_PAUSE\n    SDCARD_RESET_FILE\n    BASE_CANCEL_PRINT\n\n[gcode_macro PAUSE]\nrename_existing: BASE_PAUSE\ngcode:\n    ##### set defaults #####\n    {% set x = params.X|default(100) %}      #edit to your park position\n    {% set y = params.Y|default(100) %}      #edit to your park position\n    {% set lift_z = params.Z|default(50)| float | abs %} #edit to your desired z lift\n    {% set e = params.E|default(1) %}        #edit to your retract length\n    ##### calculate save lift position #####\n    {% set max_z = (printer.toolhead.axis_maximum.z|float ) %} #leave some room for gcode z offset\n    {% set act_z = printer.toolhead.position.z|float %}\n 	{% set new_z = act_z + lift_z %}\n	{% if new_z >  max_z %}\n		new_z = max_z\n	{% endif %}\n    SAVE_GCODE_STATE NAME=PAUSE_state\n    BASE_PAUSE\n    M83 ; set E to rel mode\n    {% if printer.extruder.can_extrude|lower == \'true\' %}\n      G1 E-{e} F2100\n    {% else %}\n      RESPOND MSG="Extruder not hot enough"\n    {% endif %}\n    {% if "xyz" in printer.toolhead.homed_axes %}    \n      G0 Z{new_z} X{x} Y{y} F6000\n    {% else %}\n      RESPOND MSG="Printer not homed"\n    {% endif %}\n\n\n[gcode_macro RESUME]\nrename_existing: BASE_RESUME\ngcode:\n    ##### set defaults #####\n#    {% set e = params.E|default(1) %} #edit to your retract length\n#    M83 ; set E to rel mode\n#    {% if printer.extruder.can_extrude|lower == \'true\' %}\n#      G1 E-{e} F2100\n#    {% else %}\n#      RESPOND MSG="Extruder not hot enough"\n#    {% endif %}\n    RESTORE_GCODE_STATE NAME=PAUSE_state MOVE=1\n    BASE_RESUME\n\n################################################################################\n################################################################################\n\n# Helper script to park the carriage (called from T0 and T1 macros)\n[gcode_macro PARK_extruder]\ngcode:\n	RESPOND MSG="Parking the leftmost extruder"\n	#make sure we move the first carriage\n	SET_DUAL_CARRIAGE CARRIAGE=0\n	{% if not "x" in printer.toolhead.homed_axes %}\n	    RESPOND MSG="Homing X"\n	    G28 X\n	{% endif %}\n\n    SAVE_GCODE_STATE NAME=park0\n    G90\n	SET_GCODE_OFFSET X=0 Y=0 #Z=0\n    G1 X{printer.configfile.settings.stepper_x.position_min} F12000\n    RESTORE_GCODE_STATE NAME=park0\n\n[gcode_macro PARK_extruder1]\ngcode:\n	RESPOND MSG="Parking the rightmost extruder"\n	#make sure we move the second carriage. After all, we do not know which carriage is active\n	SET_DUAL_CARRIAGE CARRIAGE=1\n	{% if not "x" in printer.toolhead.homed_axes %}\n	    RESPOND MSG="Homing X"\n	    G28 X\n	{% endif %}\n\n    SAVE_GCODE_STATE NAME=park1\n    G90\n	SET_GCODE_OFFSET X=0 Y=0 #Z=0\n    G1 X{printer.configfile.settings.dual_carriage.position_max} F12000\n    RESTORE_GCODE_STATE NAME=park1\n\n\n[gcode_macro x_xoffset]\n# helper script, needed as the variable xoffset will be changed during macro execution\n# and macro expansion happens before that\ngcode:\n	{% set offset = printer["gcode_macro set_stepper_x_range"].xoffset %}\n	RESPOND MSG="Xoffset will be set to: { offset }"\n    SET_GCODE_OFFSET Y=0 X={ offset } #Z=0\n	\n\n\n[gcode_macro set_stepper_x_range]\nvariable_xoffset: 0\nvariable_range_set: 0\ngcode:\n    RESPOND MSG="Setting leftmost extruder x-axis origin"\n#	{ action_respond_info("Extruder1 temperature target: %s" % printer.extruder1.target ) }\n	RESPOND MSG="Extruder1 temperature target: { printer.extruder1.target }"\n	{% if   printer.extruder1.target|int > 0 %}\n 		RESPOND MSG="Right hand side extruder active"\n	    #{% set offset= 17 %}\n	    {% set offset= 0 %} #I don\'t know why it was setting this to 17, but it was messing up my prints sometimes!\n	{% else %}\n	    {% set offset=0 %}\n	{% endif %}\n	SET_GCODE_VARIABLE MACRO=set_stepper_x_range VARIABLE=xoffset VALUE={offset}\n	RESPOND MSG="X origin for left head will be set to {offset} mm from left end of bed"\n	#make it known that the range has been set for this print, and should not be re-evaluated again\n	SET_GCODE_VARIABLE MACRO=set_stepper_x_range VARIABLE=range_set VALUE=1\n\n[gcode_macro clear_stepper_x_range]\ngcode:\n    RESPOND MSG="Clearing the leftmost extruder x-axis printing range"\n	SET_GCODE_VARIABLE MACRO=set_stepper_x_range VARIABLE=xoffset VALUE=0\n	#make it known that the range has not been set for this print, and should be re-evaluated again\n	SET_GCODE_VARIABLE MACRO=set_stepper_x_range VARIABLE=range_set VALUE=0\n	\n\n# Activate the primary extruder\n[gcode_macro T0]\ngcode:\n	RESPOND MSG="Selecting tool T0"\n	home_if_not\n	{% if printer.toolhead.extruder != "extruder" %}\n	    PARK_{printer.toolhead.extruder}\n	{% endif %}\n    ACTIVATE_EXTRUDER EXTRUDER=extruder\n    SET_DUAL_CARRIAGE CARRIAGE=0\n	# run the range setting only once, in order not to mis-set it after T1 target temp is set to zero\n	{% if  printer["gcode_macro set_stepper_x_range"].range_set  == 0  %}\n		RESPOND MSG="Lefttmost extruder X-direction movement range not yet set, setting it now"\n		set_stepper_x_range\n	{% endif %}\n	x_xoffset\n\n\n[gcode_macro T1]\ngcode:\n	RESPOND MSG="Selecting tool T1"\n	home_if_not\n	{% if printer.toolhead.extruder != "extruder1" %}\n	    PARK_{printer.toolhead.extruder}\n	{% endif %}\n    ACTIVATE_EXTRUDER EXTRUDER=extruder1\n    SET_DUAL_CARRIAGE CARRIAGE=1\n\n    #The X/Y offsets are opposite from the stock firmware method.\n    #If the E2 prints too far to the left, you must ADD to the X offset.\n    #If the E2 prints too far downwards, you must ADD to the Y offset.\n    #The Z offset usually isn\'t needed. Just calibrate the physical Z adjustment on E2.\n    SET_GCODE_OFFSET X=3.80 Y=0.50 #Z=0\n\n[gcode_macro home_if_not ]\ngcode:\n	{% if printer.toolhead.homed_axes != \'xyz\' %}\n	  G28\n    {% endif %}\n\n[gcode_macro probeon]\ngcode:\n 	SET_GCODE_VARIABLE MACRO=bedmesh VARIABLE=probe_installed VALUE=1\n 	RESPOND MSG="Recorded that you have installed the probe on the left head"\n\n[gcode_macro probeoff]\ngcode:\n 	SET_GCODE_VARIABLE MACRO=bedmesh VARIABLE=probe_installed VALUE=0\n 	RESPOND MSG="Recorded that you have uninstalled the probe from the left head"\n\n[gcode_macro PRIME_LINE]\ngcode: \n    RESPOND MSG="Printing a priming line "\n\n    {% set x = params.X|default(2)|float %}\n    {% set y = params.Y|default(70)|float %}\n	{% set z = params.Z|default(0.2)|float %}\n    {% set xline = params.XLINE|default(0.8)|float %}\n    {% set yline = params.YLINE|default(120)|float %}\n	{% set eMultiplier = 0.15 * z  %}\n    SAVE_GCODE_STATE NAME=prime_line\n \n	M117 Prime Line\n\n    G90 ; XYZ to abs mode\n	M83 ; set E to rel mode\n    # move z axis \n    G1 Z0.3 F3000 ;Move Z Axis up\n    # move to prime position \n	G0 Y{y} Z{z}\n    G0 X{x} ;Move to start position. Do a square move to avoid hitting the bed\'s corner clips\n	G1 Y{y + yline} E{eMultiplier * yline} ;Draw the first line\n    G1 X{x + xline} E{eMultiplier * xline} ;Move to side a little\n    G1 Y{y + 20} E{eMultiplier * (yline - 20)} ;Draw the second line, but do not go back to origin to avoid picking the wipeouts\n#	G1 E-0.5 F300\n    G1 Z0.5 F3000 ;Move Z Axis up\n	\n	RESTORE_GCODE_STATE NAME=prime_line\n\n[gcode_macro prepare_toolheads ]\ngcode:\n    RESPOND MSG="Preparing the toolheads"\n	# BED_MESH_PROFILE LOAD=70c\n	# Use absolute coordinates\n    G90\n	#reset E\n	G92 E0\n	#Set extruder to relative mode\n	M83\n	home_if_not\n	# explicitly set the range at the start of each new print\n	set_stepper_x_range\n	{% if   printer.extruder.target|int > 0 %}\n	    RESPOND MSG="Preparing T0"\n		T0\n		SAVE_GCODE_STATE NAME=prime_ext0 \n		#Always print the prime line at the very left of the bed\n		SET_GCODE_OFFSET X=0 Y=0 Z=0\n		G0 X-10 Y35 Z0.5  F9000\n		# prime in air\n		G1 E5 F300\n		PRIME_LINE X=3 Y=35 Z=0.2 YLINE=100\n		RESTORE_GCODE_STATE NAME=prime_ext0\n	{% endif %}\n	{% if   printer.extruder1.target|int > 0 %}\n	    RESPOND MSG="Preparing T1"\n		T1\n		G0 X225 Y35 Z0.5 F9000\n		G1	E5 F300\n		PRIME_LINE X=200 Y=35 Z=0.2 YLINE=100\n	{% endif %}\n	#set the Tooolhead to what it was when the macro was called. \n	# At least Ideamaker sets the T0/T1 before calling the user-defined macro, \n	# so we need to be know which toolhead was set and switch to that before continuing\n	#Jinja expansion happens befor macro is actually executed, so printer.toolhead.extrude in the conditional\n	#statement will NOT have been dynamically changed, but is instead the original value at call time.\n	\n	{% if printer.toolhead.extruder == "extruder1" %}\n		T1\n	{% else %}\n		T0\n	{% endif %}\n	#set extruder to abs mode\n	M82\n#	{% if  ( (printer.extruder.target|int > 0) and (printer.extruder1.target|int > 0) ) %}\n#		#Two extruders in use, do nothing\n#		RESPOND MSG="Two heads in use, Ideamaker does not do retracting"\n#	{% else %}\n#	 	#Ideamaker insists on retracting at the start. Now we just make it think it already has. Ugly kluldge, yes.\n#		RESPOND MSG="One of two heads in use, Ideamaker spoils the print by retracting, so work around it"\n#		G92 E-0.6\n#	{% endif %}\n\n[gcode_macro wait_for_temperatures]\ngcode:\n    \n	# Wait for temps. If a target is zero, it will not be waited, actually. So you cannot extrude with very low temperatures :)\n    M190 S{printer.heater_bed.target}\n    M109 T0 S{printer.extruder.target}\n	M109 T1 S{printer.extruder1.target}\n    \n\n[gcode_macro START_PRINT]\n# This code assumes that the printhead temperatures and bed temperature targets have been set by the slicer\ngcode:\n	CLEAR_PAUSE\n	{% if printer["gcode_macro bedmesh"].probe_installed != 0 %}\n	   RESPOND TYPE=error MSG="You could have a probe still on. Remove the probe and run the command \'probeoff\' and re-print"\n	   CANCEL_PRINT\n	{% else %}\n		T0\n		home_if_not\n		wait_for_temperatures\n        Z_TILT_ADJUST\n\n		BED_MESH_LOAD\n		prepare_toolheads\n	{% endif %}\n\n\n[gcode_macro bedmesh]\nvariable_probe_installed: 1\ngcode:\n    {% if printer["gcode_macro bedmesh"].probe_installed == 0 %}\n	    RESPOND MSG="Install probe and run then command \'probeon\'"\n	{% else %}\n		RESPOND MSG="Measuring bed mesh with TO, with zero x offset "\n\n		home_if_not\n        Z_TILT_ADJUST\n		T0\n		SAVE_GCODE_STATE NAME=bedmesh\n		#Always measure with raw left head\n		G90\n		SET_GCODE_OFFSET X=0\n		#G0 Z10 F6000\n		BED_MESH_CALIBRATE\n		#G0 Y0 Z100 #brian: estaba en 100\n		G28 X\n		RESTORE_GCODE_STATE NAME=bedmesh\n	{% endif %}\n\n\n[gcode_macro BED_MESH_LOAD]\ndescription: Load an existing bed calibration mesh for the correct temperature\ngcode:\n  ##### get target get temperature #####\n  {% set bed_temp = printer.heater_bed.target|int %}\n  ##### join everything to a single mesh name #####\n  {% set mesh_name = "MESH-" + bed_temp|string + "C" %}\n  ##### end of definitions #####\n  {% if printer.configfile.config["bed_mesh " + mesh_name] is defined %}\n    BED_MESH_PROFILE LOAD={mesh_name}\n    RESPOND TYPE=echo MSG="Loaded bed mesh profile of {mesh_name} "\n  {% else %}\n    RESPOND TYPE=error MSG="Did not find a mesh profile of {mesh_name} "\n  {% endif %}\n\n[gcode_macro bedmesh_renew]\ngcode:\n	home_if_not\n	{% set dwell = 60000 %}\n	{% for t in  [50,60,70] %}\n        {% set mesh_name = "MESH-" + t|string + "C" %}\n		RESPOND MSG="Heating the bed to {t} C"\n		M190 S{t}\n		RESPOND MSG="Settling for {dwell}ms"\n		G4 P{dwell}\n		bedmesh\n		BED_MESH_PROFILE SAVE={mesh_name}\n	{% endfor %}\n	SAVE_CONFIG\n[gcode_macro END_PRINT]\ngcode:\n    \n    M117 End printing.\n    G91 ; relative positioning\n    G1 E-1 F300 ;retract the filament a bit before lifting the nozzle to release some of the pressure\n    G1 Z+5 E-2 F1000 ;move Z up a bit and extract a bit more\n#   T1\n#	T0\n#    G90 ; absolute positioning\n# 	G0 Y220 F6000 ; make the printed object accessible\n    m104 S0 T0 ; turn hotend heating off\n    m104 S0 T1 ; turn hotend heating off\n    M140 S0 ; turn hotbed heating off\n    G90\n    T0\n    PARK_extruder1\n    PARK_extruder\n    M106 S255 ; turn fan on for cooling\n    M84 ; steppers off\n    clear_stepper_x_range\n    M106 S0 ; turn fan off\n    SAVE_AT_END\n\n[gcode_macro SEARCH_VARS]\ngcode:\n    {% set search = params.S|lower %}\n    {% set ns = namespace() %}\n    {% for item in printer  %}\n        {% if \' \' in item %}\n            {% set ns.path = [\'printer\', "[\'%s\']" % (item), \'\'] %}\n        {% else %}\n            {% set ns.path = [\'printer.\', item, \'\'] %}   \n        {% endif %} \n\n        {% if search in ns.path|lower %}\n            { action_respond_info(ns.path|join) }\n        {% endif %} \n\n        {% if printer[item].items() %}\n            {% for childkey, child in printer[item].items() recursive %}\n                {% set ns.path = ns.path[:loop.depth|int + 1] %}\n\n                {% if \' \' in childkey %}\n                    {% set null = ns.path.append("[\'%s\']" % (childkey)) %}\n                {% else %}\n                    {% set null = ns.path.append(".%s" % (childkey)) %}\n                {% endif %} \n\n                {% if child is mapping  %}\n                    { loop(child.items()) }\n                {% else %}\n                    {% if search in ns.path|lower %}\n                        { action_respond_info("%s : %s" % (ns.path|join, child)) }   \n                    {% endif %} \n                {% endif %} \n                \n            {% endfor %}\n        {% endif %} \n    {% endfor %}\n    \n[gcode_macro SAVE_AT_END]\nvariable_save: 1\ngcode:\n  SET_GCODE_VARIABLE MACRO=SAVE_AT_END VARIABLE=save VALUE=1\n  \n[gcode_macro SAVE_IF_SET]\ngcode:\n  {% if printer["gcode_macro SAVE_AT_END"].save == 1 %}\n    SAVE_CONFIG\n  {% endif %}\n\n[gcode_macro INITIALIZE_VARIABLE]\ngcode:\n  {% if \'VARIABLE\' not in params %}\n    {action_respond_info("Missing VARIABLE parameter")}\n  {% elif \'VALUE\' not in params %}\n    {action_respond_info("Missing VALUE parameter")}\n  {% else %}\n    {% set svv = printer.save_variables.variables %}\n    {% if params.VARIABLE not in svv %}\n      {% set escaped = params.VALUE|replace("\\"", "\\\\\\"") %}\n      SAVE_VARIABLE VARIABLE={params.VARIABLE} VALUE="{escaped}"\n    {% endif %}\n  {% endif %}\n\n\n\n[gcode_macro WIPE_LINE]\ngcode:\n  {% set z = params.Z|default(0.25)|float %}\n  {% set n = params.N|default(0.4)|float %}\n\n  {% if printer.toolhead.homed_axes != "xyz" %}\n    {action_respond_info("Please home XYZ first")}\n  {% elif printer.extruder.temperature < 170 %}\n    {action_respond_info("Extruder temperature too low")}\n  {% else %}\n    SAVE_GCODE_STATE NAME=WIPE_LINE_state\n    M82\n    G90\n    G92 E0\n    G1 X10 Y20 Z5 F3000\n    G1 Z{z} F3000\n    G1 X10 Y150 F1500 E10.83\n    G1 X{ n + 10.0 } F5000\n    G1 Y22 F1500 E21.5\n    G1 Y20 F5000\n    RESTORE_GCODE_STATE NAME=WIPE_LINE_state MOVE=0\n  {% endif %}\n  \n[gcode_macro PREP_PRINT]\ndescription: Loads and starts the print\nvariable_x_max: 0\nvariable_y_max: 0\nvariable_z_max: 0\nvariable_nozzle: 0\nvariable_fila_dia: 0\nvariable_bed_temp: 0\nvariable_extruder_temp: 0\nvariable_chamber_temp: 0\nvariable_layer_count: 0\nvariable_tool_changes: 0\nvariable_cur_layer: 0\nvariable_num_layers: 0\nvariable_layer_z: 0\ngcode:\n\n  M117 Print intializing...\n\n  #Get Printer built volume dimensions\n  {% set X_MAX = printer.toolhead.axis_maximum.x|default(100)|float %}\n  {% set Y_MAX = printer.toolhead.axis_maximum.y|default(100)|float %}\n  {% set Z_MAX = printer.toolhead.axis_maximum.z|default(100)|float %}\n\n  #Get Nozzle diameter and filament width for conditioning\n  {% set NOZZLE = printer.extruder.nozzle_diameter|default(0.4)|float %}\n  {% set FILADIA = printer.extruder.filament_diameter|default(1.64)|float %}\n\n  #Set Start coordinates of priming lines\n  {% set X_START = 10.0|default(10.0)|float %}\n  {% set Y_START = 20.0|default(20.0)|float %}\n\n  #Calculate Primer line extrusion volume and filament length\n  {% set PRIMER_WIDTH = 0.75 * NOZZLE %}                    \n  {% set PRIMER_HEIGHT = 0.70 * NOZZLE %}           \n  {% set PRIMER_SECT = PRIMER_WIDTH * PRIMER_HEIGHT %}    \n  {% set PRIMER_VOL = PRIMER_SECT * (X_MAX - 3 * X_START) %}    \n  {% set FILA_SECT = 3.1415 * ( FILADIA / 2.0)**2 %}          \n  {% set FILA_LENGTH = 1.55 * PRIMER_VOL / FILA_SECT %}\n  {% set FILAMENT_TYPE = params.FILAMENT|default(PLA)|string %}\n\n  #Get Bed, Extruder, and Chamber temperatures from Slicer GCode\n  {% set BED_TEMP = params.BED|default(60)|float %}\n  {% set EXTRUDER_TEMP = params.EXTRUDER|default(210)|float %}\n  {% set CHAMBER_TEMP = params.CHAMBER|default(50)|float %}\n\n  # Get Number of Layers\n  {% set NUM_LAYERS = params.COUNT|default(0)|float %}\n  {% set CUR_LAYER = params.NUM|default(0)|float + 1 %}\n\n  # Get Number of Tool Changes Required\n  {% set TOOL_CHANGES = params.TOOLS|default(0)|float %}\n\n  # Save print configuration specs for later use\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=x_max VALUE={X_MAX}\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=y_max VALUE={Y_MAX}\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=z_max VALUE={Z_MAX}\n\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=nozzle VALUE={NOZZLE}\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=fila_dia VALUE={FILADIA}\n\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=bed_temp VALUE={BED_TEMP}\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=extruder_temp VALUE={EXTRUDER_TEMP}\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=chamber_temp VALUE={CHAMBER_TEMP}\n\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=cur_layer VALUE={CUR_LAYER}\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=num_layers VALUE={NUM_LAYERS}\n\n  SET_GCODE_VARIABLE MACRO=PREP_PRINT VARIABLE=tool_changes VALUE={TOOL_CHANGES}\n\n  # Turn on the lights!\n  # I don\'t have any lights yet... sounds fun though!\n  #WLED_ON PRESET=1\n\n  # Make sure T0 is selected for Z probing\n  T0\n  PROBEON\n\n  # Begin preheating and prepping for print\n  G90 ; use absolute coordinates\n  M83 ; extruder relative mode\n\n  M117 Preheating bed for homing...\n\n  M104 S{EXTRUDER_TEMP}\n  G4 S10 ; allow partial nozzle warmup\n  M190 S{BED_TEMP} ; set final bed temp\n  #BED_MESH_PROFILE LOAD="default"\n  BED_MESH_LOAD ; load profile for the specified temp\n  # BEDMESH ; Make a new bed mesh instead of loading a saved one\n  M117 Homing all axis...\n  G28 ; home all axis\n  M117 Adjusting Z-Tilt...\n  Z_TILT_ADJUST ; calibrate dual-Z axis\n\n\n#  G1 Z50 F240\n#  G1 X2 Y10 F3000\n  M117 Waiting for temperatures to stabilize...\n\n  M104 S{EXTRUDER_TEMP} ; set final nozzle temp\n  G28 X ; park extruders while warming up for wipe\n  M190 S{BED_TEMP} ; wait for bed temp to stabilize\n  M109 S{EXTRUDER_TEMP} ; wait for nozzle temp to stabilize\n\n  WIPE_LINE\n\n  M117 Print Started\n\n[de_macro M1091]\n#rename_existing: M99109\ngcode:\n    #Parameters\n    {% set s = params.S|float %}\n    {% set set_tool = params.T|default(0)|int %}\n    \n    M104 {% for p in params %}{\'%s%s\' % (p, params\u3010p\u3011)}{% endfor %}  ; Set hotend temp\n    \n    {% if s != 0 %}\n            {% if (set_tool == 0 ) %}\n                  TEMPERATURE_WAIT SENSOR=extruder MINIMUM={s-3} MAXIMUM={s+3}   ; Wait for hotend temp (within 1 degree)\n            {% else %}\n                  TEMPERATURE_WAIT SENSOR=extruder1 MINIMUM={s-3} MAXIMUM={s+3}   ; Wait for hotend temp (within 1 degree)\n            {% endif %}\n    {% endif %}\n'})})]})}function l(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(_,{...e})}):_(e)}},79938:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return i}});var r=t(75271);let a={},o=r.createContext(a);function i(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);