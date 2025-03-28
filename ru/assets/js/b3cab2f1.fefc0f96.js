"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["44806"],{66844:function(n,e,t){t.r(e),t.d(e,{metadata:()=>r,contentTitle:()=>a,default:()=>c,assets:()=>_,toc:()=>p,frontMatter:()=>s});var r=JSON.parse('{"id":"DebugDoc/ref-config/voron0","title":"VORON 0.2 \u53C2\u8003\u914D\u7F6E","description":"","source":"@site/docs/DebugDoc/ref-config/voron0.mdx","sourceDirName":"DebugDoc/ref-config","slug":"/DebugDoc/ref-config/voron0","permalink":"/fly-docs-next/ru/docs/DebugDoc/ref-config/voron0","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/voron0.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"debugdocSidebar","previous":{"title":"\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0430\u044F \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u0434\u043B\u044F VORON Trident","permalink":"/fly-docs-next/ru/docs/DebugDoc/ref-config/trident"},"next":{"title":"\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0430\u044F \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F VZBOT","permalink":"/fly-docs-next/ru/docs/DebugDoc/ref-config/vzbot"}}'),i=t("52676"),o=t("79938");let s={sidebar_position:6},a="VORON 0.2 \u53C2\u8003\u914D\u7F6E",_={},p=[];function d(n){let e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"voron-02-\u53C2\u8003\u914D\u7F6E",children:"VORON 0.2 \u53C2\u8003\u914D\u7F6E"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cfg",children:"#####################################################################\n#      Items to be changed/checked\n#####################################################################\n##***\u9700\u8981\u66F4\u6539/\u68C0\u67E5\u7684\u4E8B\u9879\uFF1A***\n## MCU \u8DEF\u5F84                                [mcu] \n## \u6253\u5370\u673A\u6D3B\u52A8\u8303\u56F4                           xyz\u7684position   \n## \u70ED\u654F\u7535\u963B\u7C7B\u578B                             [extruder] \u548C [heater_bed]\n## Z\u8F74\u9650\u4F4D\u5F00\u5173\u505C\u6B62\u4F4D\u7F6E                      [safe_z_home] \n## Z\u8F74\u9650\u4F4D\u5F00\u5173\u504F\u79FB\u4F4D\u7F6E                      [stepper_z] \n## PID \u6821\u51C6                               [extruder] \u548C [heater_bed] \n## \u5FAE\u8C03\u6324\u51FA\u673A\u7535\u673A\u6B65\u8FDB\u503C                     [extruder] \n\n#####################################################################\n#      file invocation\n#####################################################################\n### \u5F53\u60A8\u4F7F\u7528fuidd\u6216\u8005mainsail\u4F5C\u4E3A\u524D\u7AEF\u65F6\uFF0C\u8BF7\u5220\u9664#[include XXX.cfg]\u524D\u9762\u7684#\u3002\n### When using fuidd or mainsail as the frontend, remove the '#' before #[include XXX.cfg].\n[include fluidd.cfg]\n#[include mainsail.cfg]\n\n### \u4E0B\u9762/home/fly\u4E2D\u7684fly\u9700\u8981\u66FF\u6362\u6210\u4F60\u7684\u4E0A\u4F4D\u673A\u7528\u6237\uFF0C\u8BF7\u6CE8\u610F\u4E0D\u662FROOT\u7528\u6237\n### Replace 'fly' in /home/fly with your host computer username, ensuring it's not the ROOT user.\n[virtual_sdcard]\npath: /home/fly/printer_data/gcodes\non_error_gcode: CANCEL_PRINT\n\n\n#####################################################################\n#      Master ID Configuration\n#####################################################################\n[mcu]\nserial: /dev/serial/by-id/usb-Klipper_rp2040_MELLOW-if00\n### \u4F7F\u7528is/dev/Serial/by-id/*\u67E5\u627EUSB\u56FA\u4EF6ID\uFF0C\u5E76\u5C06\n### /dev/serial/by-id/usb-Klipper_rp2040_MELLOW-if00\u66FF\u6362\u4E3A\u60A8\u53D1\u73B0\u7684ID\u3002\n### Find the USB firmware ID with: ls /dev/serial/by-id/* and replace\n### /dev/serial/by-id/usb-Klipper_rp2040_MELLOW-if00 with the ID you discover.\n\n#canbus_uuid: 114514114514\n### \u67E5\u8BE2can\u56FA\u4EF6id\u662F\uFF1A~/klippy#env/bin/python ~/klipper/scripts/canbus_query.py can0\n### can\u7684id\u9700\u8981\u628Aserial: \u66FF\u6362\u6210canbus_uuid: \u540E\u9762\u6DFB\u52A0id \n### Query the CAN firmware ID with: ~/klippy#env/bin/python ~/klipper/scripts/canbus_query.py can0\n### Replace 'serial:' in the CAN ID with 'canbus_uuid:', then append the ID.\n\n#####################################################################\n#      Temperature monitoring\n#####################################################################\n[temperature_sensor motherboard]\nsensor_type: temperature_mcu\n\n[temperature_sensor Raspberry Pi]\nsensor_type: temperature_host\n\n#####################################################################\n#      Tmodel and acceleration\n#####################################################################\n[printer]\nkinematics: corexy\nmax_velocity: 200\nmax_accel: 2000\nmax_z_velocity: 15\nmax_z_accel: 300\nsquare_corner_velocity: 6.0\n\n#####################################################################\n#      X/Y Stepper Settings\n#####################################################################\n\n[stepper_x]\n## Refer to https://docs.vorondesign.com/build/startup/#v0\nstep_pin:\ndir_pin:                                        # Check motor direction in link above. If inverted, add a ! before gpio3 \nenable_pin:! \nrotation_distance: 40\nmicrosteps: 32\nfull_steps_per_rotation: 200                    # Set to 400 for 0.9\xb0 degree stepper motor, 200 is for 1.8\xb0 stepper motors\nendstop_pin:\n# endstop_pin: tmc2209_stepper_x:virtual_endstop\n# endstop_pin: tmc5160_stepper_x:virtual_endstop\nposition_min: 0\nposition_endstop: 120\nposition_max: 120\nhoming_speed: 40                                # for sensorless homing it is recommended not to go above 40mm/s   \nhoming_retract_dist: 0\nhoming_positive_dir: true\n\n[tmc2209 stepper_x]\nuart_pin:\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0                        # Set to 999999 to turn stealthchop on, and 0 to use spreadcycle\ndiag_pin: ^\ndriver_SGTHRS: 80\n\n[tmc5160 stepper_x]\ncs_pin:\n### spi_bus\u4E0Espi_software\u53EA\u80FD\u4F7F\u7528\u5176\u4E2D\u4E00\u4E2A\n### spi_bus and spi_software can only use one of them.\n# spi_bus:\nspi_software_mosi_pin:\nspi_software_miso_pin:\nspi_software_sclk_pin:\nrun_current: 1.0\ninterpolate: False\n### \u9A71\u52A8\u91C7\u6837\u7535\u963B\u9700\u8981\u6309\u7740\u9A71\u52A8\u6765\u4FEE\u6539\n### The driver sampling resistor needs to be modified according to the driver\nsense_resistor: 0.075\nstealthchop_threshold: 0\ndiag0_pin: ^!\ndriver_SGT: 1\n\n[stepper_y]\n## Refer to https://docs.vorondesign.com/build/startup/#v0\nstep_pin:\ndir_pin:                                        # Check motor direction in link above. If inverted, add a ! before gpio0\nenable_pin:!\nrotation_distance: 40\nmicrosteps: 32\nfull_steps_per_rotation: 200\nendstop_pin:\n# endstop_pin: tmc2209_stepper_y:virtual_endstop\n# endstop_pin: tmc5160_stepper_y:virtual_endstop\nposition_min: 0\nposition_endstop: 120\nposition_max: 120\nhoming_speed: 40 \nhoming_retract_dist: 0\nhoming_positive_dir: true\n\n[tmc2209 stepper_y]\nuart_pin:\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\ndiag_pin: ^\ndriver_SGTHRS: 80\n\n[tmc5160 stepper_y]\ncs_pin:\n### spi_bus\u4E0Espi_software\u53EA\u80FD\u4F7F\u7528\u5176\u4E2D\u4E00\u4E2A\n### spi_bus and spi_software can only use one of them.\n# spi_bus:\nspi_software_mosi_pin:\nspi_software_miso_pin:\nspi_software_sclk_pin:\nrun_current: 1.0\ninterpolate: False\n### \u9A71\u52A8\u91C7\u6837\u7535\u963B\u9700\u8981\u6309\u7740\u9A71\u52A8\u6765\u4FEE\u6539\n### The driver sampling resistor needs to be modified according to the driver\nsense_resistor: 0.075\nstealthchop_threshold: 0\ndiag0_pin: ^!\ndriver_SGT: 1\n\n#####################################################################\n#   Z Stepper Settings\n#####################################################################\n\n[stepper_z]\n## Refer to https://docs.vorondesign.com/build/startup/#v0\nstep_pin:\ndir_pin:!                                         # Check motor direction in link above. If inverted, add a ! before gpio25\nenable_pin: !\nrotation_distance: 8                                                # For T8x8 integrated lead screw\nmicrosteps: 32\nendstop_pin: ^PA6\nposition_endstop: 120\nposition_max: 120\nposition_min: -1.5\nhoming_speed: 20\nsecond_homing_speed: 3.0\nhoming_retract_dist: 3.0\n\n[tmc2209 stepper_z]\nuart_pin:\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n\n#####################################################################\n#      Extruder\n#####################################################################\n[extruder]\n## Type of sensor # common thermistors are (Generic 3950, ATC Semitec 104GT#2)\n## \u4F20\u611F\u5668\u7C7B\u578B#\u5E38\u89C1\u7684\u70ED\u654F\u7535\u963B\u5668\u662F (Generic 3950, ATC Semitec 104GT#2)\nsensor_type: ATC Semitec 104GT-2\nsensor_pin: \n#####################################################################\n## If using PT1000, please connect the jumper next to the thermal sensitivity.\n## \u5982\u679C\u4F7F\u7528PT1000\u8BF7\u5C06\u70ED\u654F\u65C1\u8FB9\u8DF3\u7EBF\u63A5\u4E0A\n# sensor_type:PT1000\n# pullup_resistor: 1100\n# sensor_pin: \n#####################################################################\n#      extruder\n#####################################################################\n## https://www.klipper3d.org/Config_Reference.html#extruder\n[extruder]\nstep_pin:\ndir_pin:\nenable_pin: !\nrotation_distance: 21.84\n## rotation_distance = The original rotation_distance multiplied by the actual extrusion length divided by the requested extrusion length.\n## \u6821\u51C6\u6B65\u8FDB\u503C: 22.44=\u65E7\u503C22*\u5B9E\u9645\u503C102/\u76EE\u6807\u503C100\ngear_ratio:50:10\n## \u51CF\u901F\u6BD4\uFF08\u4F3D\u5229\u7565\u9F7F\u6BD47.5:1 \u5E76\u4E14\u8FD9\u884C\u6CE8\u91CA\u6389\uFF1BBMG\u4E3A50\uFF1A17\uFF0C\u8F93\u51FA\u8F74\u5728\u524D\uFF0C\u8F93\u5165\u8F74\u5728\u540E\uFF09\nmicrosteps:16\nfull_steps_per_rotation: 200    \nnozzle_diameter:0.400\nfilament_diameter:1.75\nheater_pin:\nmin_temp: -50\nmax_temp: 300\nmax_power: 1.0\nmin_extrude_temp: 150\npressure_advance: 0.05\n##Pressure in advance\n##\u538B\u529B\u63D0\u524D\n##https://www.klipper3d.org/zh/Pressure_Advance.html\npressure_advance_smooth_time: 0.040\n#max_extrude_only_distance: 200.0   # \u6324\u51FA\u6D41\u91CF\u62A5\u9519\u53EF\u4EE5\u6CE8\u91CA\u8FD9\u4E2A\uFF0C\u4F46\u662F\u5EFA\u8BAE\u91CD\u65B0\u5207\u7247\n# \u55B7\u5634\u6E29\u5EA6PID\u6821\u51C6\u547D\u4EE4\uFF1A PID_CALIBRATE HEATER=extruder TARGET=245\n# Calibrate the nozzle temperature PID command \uFF1A PID_CALIBRATE HEATER=extruder TARGET=245\ncontrol: pid\npid_kp: 26.213\npid_ki:1.304\npid_kd: 131.721\nstep_pulse_duration: 0.000004\n\n[tmc2209 extruder]\nuart_pin:gpio9\nuart_address:3\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n#####################################################################\n#   Bed Heater\n#####################################################################\n\n[heater_bed]\nheater_pin: \n## Check what thermistor type you have. See https://www.klipper3d.org/Config_Reference.html#common#thermistors for common thermistor types.\n## Use \"Generic 3950\" for Keenovo heaters\nsensor_type:\nsensor_pin:\nmax_power: 1.0 \nmin_temp: -50\nmax_temp: 120\n# \u70ED\u5E8A\u6E29\u5EA6PID\u6821\u51C6\u547D\u4EE4\uFF1A PID_CALIBRATE HEATER=heater_bed TARGET=100\n# Calibrate the heated bed temperature PID command\uFF1A PID_CALIBRATE HEATER=heater_bed TARGET=100\ncontrol: pid\npid_kp: 68.453\npid_ki: 2.749\npid_kd: 426.122\n\n#####################################################################\n#      Fan Control\n#####################################################################\n[fan]\npin: \nmax_power: 1.0\nkick_start_time: 0.5                                                # Depending on your fan, you may need to increase this value if your fan will not start\noff_below: 0.13\ncycle_time: 0.010\n#####################################################################\n[heater_fan hotend_fan]\npin: \nmax_power: 1.0\nkick_start_time: 0.5\nheater: extruder\nheater_temp: 50.0\n\n\n#####################################################################\n#   Filament Runout Sensor\n#####################################################################\n\n#[filament_switch_sensor Filament_Runout_Sensor]\n#pause_on_runout: True\n#runout_gcode: PAUSE\n#switch_pin: \n\n#####################################################################\n# Homing and Gantry Adjustment Routines\n#####################################################################\n### \u53EA\u80FD\u4F7F\u7528safe_z_home\u6216homing_override\u4E2D\u7684\u4E00\u4E2A\n### You can only use either safe_z_home or homing_override\n#[safe_z_home]                      Only needed if you are using V0.0 or V0.1 Z endstop location\n#home_xy_position: 120,120\n#speed: 50.0\n#z_hop: 5\n\n\n[homing_override]\naxes: xyz\nset_position_z: 0\ngcode:\n   G90\n   G0 Z5 F600\n  {% set home_all = 'X' not in params and 'Y' not in params and 'Z' not in params %}\n\n  {% if home_all or 'X' in params %}\n    _HOME_X\n  {% endif %}\n  \n  {% if home_all or 'Y' in params %}\n    _HOME_Y\n  {% endif %}\n  \n  {% if home_all or 'Z' in params %}\n    _HOME_Z\n  {% endif %}\n\n## To be used with BED_SCREWS_ADJUST\n[bed_screws]\nscrew1: 60,5\nscrew1_name: front screw\nscrew2: 5,115\nscrew2_name: back left\nscrew3: 115,115\nscrew3_name: back right\nProbe_height: 0.1\n\n#####################################################################\n# Neopixel\n#####################################################################\n\n[neopixel board_rgb]\npin: \nchain_count: 1\ncolor_order: GRB\ninitial_RED: 0.0\ninitial_GREEN: 0.1\ninitial_BLUE: 0.0\n\n#####################################################################\n#   V0 Display\n#####################################################################\n# [mcu display]\n# serial: **PASTE YOUR SERIAL PORT HERE AND UNCOMMENT**\n# restart_method: command\n\n# [display]\n# lcd_type: sh1106\n# i2c_mcu: display\n# i2c_bus: i2c1a\n# # Set the direction of the encoder wheel\n# #   Standard: Right (clockwise) scrolls down or increases values. Left (counter-clockwise scrolls up or decreases values.)\n# encoder_pins: ^display:PA3, ^display:PA4\n# #   Reversed: Right (clockwise) scrolls up or decreases values. Left (counter-clockwise scrolls down or increases values.)\n# #encoder_pins: ^display:PA4, ^display:PA3\n# click_pin: ^!display:PA1\n# kill_pin: ^!display:PA5\n# #x_offset: 2\n# #   Use X offset to shift the display towards the right. Value can be 0 to 3\n# #vcomh: 0\n# #   Set the Vcomh value on SSD1306/SH1106 displays. This value is\n# #   associated with a \"smearing\" effect on some OLED displays. The\n# #   value may range from 0 to 63. Default is 0.\n# #   Adjust this value if you get some vertical stripes on your display. (31 seems to be a good value)\n\n# [neopixel displayStatus]\n# pin: display:PA0\n# chain_count: 1\n# color_order: GRB\n# initial_RED: 0.2\n# initial_GREEN: 0.05\n# initial_BLUE: 0\n\n#####################################################################\n# Macros\n#####################################################################\n\n[idle_timeout]\n### \u5982\u679C\u7A7A\u95F2\u8D85\u8FC730\u5206\u949F\uFF0C\u5219\u5173\u95ED\u52A0\u70ED\u5E8A\u3002\n### If idle for more than 30 minutes, heated bed will be turned off.\ntimeout: 1800\n\n[gcode_macro PRINT_START]\n#   Use PRINT_START for the slicer starting script - please customize for your slicer of choice\ngcode:\n    G28                            ; home all axes\n    G90                            ; absolute positioning    \n    G1 Z20 F3000                   ; move nozzle away from bed\n   \n[gcode_macro PRINT_END]\n#   Use PRINT_END for the slicer ending script - please customize for your slicer of choice\ngcode:\n    M400                           ; wait for buffer to clear\n    G92 E0                         ; zero the extruder\n    G1 E-4.0 F3600                 ; retract filament\n    G91                            ; relative positioning\n\n    #   Get Boundaries\n    {% set max_x = printer.configfile.config[\"stepper_x\"][\"position_max\"]|float %}\n    {% set max_y = printer.configfile.config[\"stepper_y\"][\"position_max\"]|float %}\n    {% set max_z = printer.configfile.config[\"stepper_z\"][\"position_max\"]|float %}\n\n    #   Check end position to determine safe direction to move\n    {% if printer.toolhead.position.x < (max_x - 20) %}\n        {% set x_safe = 20.0 %}\n    {% else %}\n        {% set x_safe = -20.0 %}\n    {% endif %}\n\n    {% if printer.toolhead.position.y < (max_y - 20) %}\n        {% set y_safe = 20.0 %}\n    {% else %}\n        {% set y_safe = -20.0 %}\n    {% endif %}\n\n    {% if printer.toolhead.position.z < (max_z - 2) %}\n        {% set z_safe = 2.0 %}\n    {% else %}\n        {% set z_safe = max_z - printer.toolhead.position.z %}\n    {% endif %}\n\n    G0 Z{z_safe} F3600             ; move nozzle up\n    G0 X{x_safe} Y{y_safe} F20000  ; move nozzle to remove stringing\n    TURN_OFF_HEATERS\n    M107                           ; turn off fan\n    G90                            ; absolute positioning\n    G0 X60 Y{max_y-10} F3600          ; park nozzle at rear\n  \n[gcode_macro LOAD_FILAMENT]\ngcode:\n   M83                            ; set extruder to relative\n   G1 E30 F300                    ; load\n   G1 E15 F150                    ; prime nozzle with filament\n   M82                            ; set extruder to absolute\n    \n[gcode_macro UNLOAD_FILAMENT]\ngcode:\n   M83                            ; set extruder to relative\n   G1 E10 F300                    ; extrude a little to soften tip\n   G1 E-40 F1800                  ; retract some, but not too much or it will jam\n   M82                            ; set extruder to absolute\n\n[gcode_macro _HOME_X]\ngcode:\n    # Always use consistent run_current on A/B steppers during sensorless homing\n    {% set RUN_CURRENT_X = printer.configfile.settings['tmc2209 stepper_x'].run_current|float %}\n    {% set RUN_CURRENT_Y = printer.configfile.settings['tmc2209 stepper_y'].run_current|float %}\n    {% set HOME_CURRENT_RATIO = 0.7 %} # by default we are dropping the motor current during homing. you can adjust this value if you are having trouble with skipping while homing\n    SET_TMC_CURRENT STEPPER=stepper_x CURRENT={HOME_CURRENT_RATIO * RUN_CURRENT_X}\n    SET_TMC_CURRENT STEPPER=stepper_y CURRENT={HOME_CURRENT_RATIO * RUN_CURRENT_Y}\n\n    # Home\n    G28 X\n    # Move away\n    G91\n    G1 X-10 F1200\n    \n    # Wait for StallGuard registers to clear\n    M400\n    G90\n    # Set current during print\n    SET_TMC_CURRENT STEPPER=stepper_x CURRENT={RUN_CURRENT_X}\n    SET_TMC_CURRENT STEPPER=stepper_y CURRENT={RUN_CURRENT_Y}\n\n[gcode_macro _HOME_Y]\ngcode:\n    # Set current for sensorless homing\n    {% set RUN_CURRENT_X = printer.configfile.settings['tmc2209 stepper_x'].run_current|float %}\n    {% set RUN_CURRENT_Y = printer.configfile.settings['tmc2209 stepper_y'].run_current|float %}\n    {% set HOME_CURRENT_RATIO = 0.7 %} # by default we are dropping the motor current during homing. you can adjust this value if you are having trouble with skipping while homing\n    SET_TMC_CURRENT STEPPER=stepper_x CURRENT={HOME_CURRENT_RATIO * RUN_CURRENT_X}\n    SET_TMC_CURRENT STEPPER=stepper_y CURRENT={HOME_CURRENT_RATIO * RUN_CURRENT_Y}\n\n    # Home\n    G28 Y\n    # Move away\n    G91\n    G1 Y-10 F1200\n\n    # Wait for StallGuard registers to clear\n    M400\n    G90\n    # Set current during print\n    SET_TMC_CURRENT STEPPER=stepper_x CURRENT={RUN_CURRENT_X}\n    SET_TMC_CURRENT STEPPER=stepper_y CURRENT={RUN_CURRENT_Y}\n\n\n\n[gcode_macro _HOME_Z]\ngcode:\n    G90\n    G28 Z\n    G1 Z30\n"})})]})}function c(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},79938:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return s}});var r=t(75271);let i={},o=r.createContext(i);function s(n){let e=r.useContext(o);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);