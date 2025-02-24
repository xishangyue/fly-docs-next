"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["44919"],{33360:function(n,e,t){t.r(e),t.d(e,{metadata:()=>r,contentTitle:()=>a,default:()=>d,assets:()=>p,toc:()=>c,frontMatter:()=>s});var r=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/cfg","title":"\u53C2\u8003\u914D\u7F6E","description":"","source":"@site/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/cfg.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3","slug":"/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/cfg","permalink":"/fly-docs-next/ko/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"xishangyue","lastUpdatedAt":1740393056000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"\u53C2\u8003\u914D\u7F6E"},"sidebar":"tutorialSidebar","previous":{"title":"\uBA54\uC778\uBCF4\uB4DC \uCC38\uC870 \uBC30\uC120","permalink":"/fly-docs-next/ko/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/wiring"},"next":{"title":"\uAC00\uC18D\uB3C4\uACC4 \uC0AC\uC6A9","permalink":"/fly-docs-next/ko/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/adxl"}}'),o=t("52676"),i=t("79938");let s={sidebar_position:5,sidebar_label:"\u53C2\u8003\u914D\u7F6E"},a="\u53C2\u8003\u914D\u7F6E",p={},c=[];function l(n){let e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"\u53C2\u8003\u914D\u7F6E",children:"\u53C2\u8003\u914D\u7F6E"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-cfg",children:'\n#####################################################################\n#      Notes\n#####################################################################\n## \u8BF7\u5C06[include SB2040.cfg]\u6DFB\u52A0\u5230printer.cfg\u4E0B\n## Please add [include SB2040.cfg] under printer.cfg\n## \u5DE5\u5177\u677F\u5C06\u4F7F\u7528\u4EE5\u4E0B\u51E0\u79CD\u914D\u7F6E\uFF0C\u5982\u679C\u5176\u4ED6\u914D\u7F6E\u4E2D\u4F7F\u7528\u5230\u4E0B\u9762\u7684\u914D\u7F6E\u53EF\u80FD\u4F1A\u51B2\u7A81\n## The tool plate will use the following configurations, \n## and if the following configurations are used in other configurations, conflicts may occur.\n## [resonance_tester] && [extruder] && [tmc2209 extruder] && [fan] && [heater_fan my_hotend_fan]\n## [probe] && [bltouch] && [stepper_x]\n\n#####################################################################\n#      Master ID Configuration\n#####################################################################\n[mcu SB2040]  # \u5DE5\u5177\u4E3B\u677F\u5E8F\u5217\u53F7\n## CAN ID\n## ~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\ncanbus_uuid: \n#--------------------------------------------------------------------\n# # RS232 ID\n## \u8BF7\u6839\u636E\u56FA\u4EF6\u914D\u7F6E\u586B\u5199\u6CE2\u7279\u7387\n## Please fill in the baud rate according to the firmware configuration.\n# serial: /dev/serial/by-path/platform-1c1c000.usb-usb-0:1.2:1.0-port0\n# baud: 250000\n# restart_method:command\n\n#####################################################################\n#      Temperature monitoring\n#####################################################################\n[temperature_sensor SB2040]\nsensor_type: temperature_mcu\nsensor_mcu: SB2040\n\n#####################################################################\n#      Accelerometer\n#####################################################################\n## https://www.klipper3d.org/Measuring_Resonances.html?h=adxl#adxl345\n[lis2dw]\ncs_pin: SB2040:gpio12\nspi_software_sclk_pin: SB2040:gpio2\nspi_software_mosi_pin: SB2040:gpio3\nspi_software_miso_pin: SB2040:gpio4\n#--------------------------------------------------------------------\n[resonance_tester]\naccel_chip: lis2dw\nprobe_points: 150, 150, 20\n# Somewhere slightly above the middle of your print bed\n# \u5728\u6253\u5370\u5E8A\u7684\u4E2D\u95F4\u7A0D\u5FAE\u504F\u4E0A\u7684\u4F4D\u7F6E\nmin_freq: 5\nmax_freq: 133\naccel_per_hz: 75\nhz_per_sec: 1 \n\n#####################################################################\n#      Stealthburner LED\n#####################################################################\n## https://github.com/VoronDesign/Voron-Stealthburner/tree/main\n[neopixel sb_leds]\npin: SB2040:gpio26\nchain_count: 16\n# Number of LEDs\n# \u706F\u73E0\u6570\u91CF\ncolor_order: GRB\ninitial_RED: 0.4    #66CCFF\ninitial_GREEN: 0.8\ninitial_BLUE: 1\ninitial_WHITE: 0.0\n\n#####################################################################\n#      Extruder thermal sensitivity\n#####################################################################\n## Please select the type of thermocouple you want to use.\n## \u8BF7\u6839\u636E\u4F60\u60F3\u8981\u4F7F\u7528\u7684\u70ED\u654F\u9009\u62E9\n[extruder]\n## Type of sensor - common thermistors are (Generic 3950, ATC Semitec 104GT-2)\n## \u4F20\u611F\u5668\u7C7B\u578B-\u5E38\u89C1\u7684\u70ED\u654F\u7535\u963B\u5668\u662F (Generic 3950, ATC Semitec 104GT-2)\nsensor_type:ATC Semitec 104GT-2\nsensor_pin:SB2040:gpio27\n###------------------------------------------------------------------\n## If using PT1000, please connect the jumper next to the thermal sensitivity.\n## \u5982\u679C\u4F7F\u7528PT1000\u8BF7\u5C06\u70ED\u654F\u65C1\u8FB9\u8DF3\u7EBF\u63A5\u4E0A\n# sensor_type:PT1000\n# sensor_pin:SB2040:gpio27\n# pullup_resistor: 1000\n###------------------------------------------------------------------\n## Using MAX31865 to connect PT100 or PT1000\n## \u4F7F\u7528MAX31865\u63A5PT100\u6216\u8005PT1000\n# sensor_type: MAX31865\n# sensor_pin: SB2040:gpio17\n# spi_software_sclk_pin: SB2040:gpio2\n# spi_software_mosi_pin: SB2040:gpio3\n# spi_software_miso_pin: SB2040:gpio4\n# rtd_reference_r: 430  ## \u4F7F\u7528PT100\u65F6\u8BF7\u8BBE\u7F6E\u4E3A430\uFF0C\u4F7F\u7528PT1000\u65F6\u8BF7\u8BBE\u7F6E\u4E3A4300\n#rtd_nominal_r: 100  ## \u4F7F\u7528PT100\u65F6\u8BF7\u8BBE\u7F6E\u4E3A100\uFF0C\u4F7F\u7528PT1000\u65F6\u8BF7\u8BBE\u7F6E\u4E3A1000\n\n#####################################################################\n#      extruder\n#####################################################################\n## https://www.klipper3d.org/Config_Reference.html#extruder\n[extruder]\nstep_pin:SB2040:gpio14\ndir_pin:SB2040:gpio13\nenable_pin: !SB2040:gpio16\nrotation_distance: 21.84\n## rotation_distance = The original rotation_distance multiplied by the actual extrusion length divided by the requested extrusion length.\n## \u6821\u51C6\u6B65\u8FDB\u503C: 22.44=\u65E7\u503C22*\u5B9E\u9645\u503C102/\u76EE\u6807\u503C100\ngear_ratio:50:10\n## \u51CF\u901F\u6BD4\uFF08\u4F3D\u5229\u7565\u9F7F\u6BD47.5:1 \u5E76\u4E14\u8FD9\u884C\u6CE8\u91CA\u6389\uFF1BBMG\u4E3A50\uFF1A17\uFF0C\u8F93\u51FA\u8F74\u5728\u524D\uFF0C\u8F93\u5165\u8F74\u5728\u540E\uFF09\nmicrosteps:16\nfull_steps_per_rotation: 200   \nnozzle_diameter:0.400\nfilament_diameter:1.75\nheater_pin:SB2040:gpio23\nmin_temp:-200\nmax_temp:350\nmax_power:1.0\nmin_extrude_temp:10\npressure_advance: 0.05\npressure_advance_smooth_time: 0.040\n#max_extrude_only_distance: 200.0   # \u6324\u51FA\u6D41\u91CF\u62A5\u9519\u53EF\u4EE5\u6CE8\u91CA\u8FD9\u4E2A\uFF0C\u4F46\u662F\u5EFA\u8BAE\u91CD\u65B0\u5207\u7247\n#\u55B7\u5634\u6E29\u5EA6PID\u6821\u51C6\u547D\u4EE4\uFF1A  "PID_CALIBRATE HEATER=extruder TARGET=245\ncontrol: pid\npid_kp: 26.213\npid_ki:1.304\npid_kd: 131.721\nstep_pulse_duration: 0.000004\n###------------------------------------------------------------------\n[tmc2240 extruder]\nuart_pin:SB2040:gpio15\ninterpolate:False\nrun_current: 0.65\ninterpolate: False\nrref: 12300\nstealthchop_threshold: 0\ndriver_TPFD: 0\n\n###------------------------------------------------------------------\n[verify_heater extruder]\nmax_error: 20\ncheck_gain_time:120\nhysteresis: 50\nheating_gain: 2\n\n\n#####################################################################\n#      FAN\n#####################################################################\n[fan]\npin:SB2040:gpio24\n###------------------------------------------------------------------\n[heater_fan my_hotend_fan]\npin: SB2040:gpio19\nheater: extruder\nheater_temp: 50.0\n\n#####################################################################\n#      TAP && PL08N && BLTOUCH \n#####################################################################\n# [stepper_x]\n# endstop_pin: ^!SB2040:gpio18\n\n# #####################################################################\n# #      TAP && PL08N && BLTOUCH \n# #####################################################################\n# ## https://www.klipper3d.org/Config_Reference.html?h=probe#probe\n# [probe]\n# pin: ^SB2040:gpio22          #gpio22\n# x_offset: 0\n# y_offset: 25.0\n# z_offset: 0\n# speed: 10.0\n# samples: 3\n# samples_result: median\n# sample_retract_dist: 4.0\n# samples_tolerance: 0.010\n# samples_tolerance_retries: 3\n\n'})})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},79938:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return s}});var r=t(75271);let o={},i=r.createContext(o);function s(n){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);