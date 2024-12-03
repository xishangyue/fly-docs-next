"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["46234"],{57831:function(n,e,t){t.r(e),t.d(e,{metadata:()=>r,contentTitle:()=>p,default:()=>d,assets:()=>_,toc:()=>a,frontMatter:()=>o});var r=JSON.parse('{"id":"DebugDoc/ref-config/voron2.4","title":"VORON 2.4 \u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u69CB\u6210","description":"","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/DebugDoc/ref-config/voron2.4.mdx","sourceDirName":"DebugDoc/ref-config","slug":"/DebugDoc/ref-config/voron2.4","permalink":"/fly-docs-next/ja/docs/DebugDoc/ref-config/voron2.4","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/voron2.4.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732262999000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"debugdocSidebar","previous":{"title":"\u30D2\u30FC\u30BF\u30FC\u306E\u8A31\u5BB9\u8AA4\u5DEE\u8A2D\u5B9A","permalink":"/fly-docs-next/ja/docs/DebugDoc/ref-config/verify_heater"},"next":{"title":"VORON Trident \u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u69CB\u6210","permalink":"/fly-docs-next/ja/docs/DebugDoc/ref-config/trident"}}'),i=t("52676"),s=t("79938");let o={sidebar_position:4},p="VORON 2.4 \u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u69CB\u6210",_={},a=[];function c(n){let e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"voron-24-\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u69CB\u6210",children:"VORON 2.4 \u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u69CB\u6210"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cfg",children:"\n#####################################################################\n#      \u5909\u66F4/\u78BA\u8A8D\u3059\u308B\u9805\u76EE\n#####################################################################\n##***\u5909\u66F4/\u78BA\u8A8D\u304C\u5FC5\u8981\u306A\u9805\u76EE\uFF1A***\n## MCU \u30D1\u30B9                                [mcu] \n## \u30D7\u30EA\u30F3\u30BF\u306E\u52D5\u4F5C\u7BC4\u56F2                       xyz\u306Eposition   \n## \u30B5\u30FC\u30DF\u30B9\u30BF\u306E\u7A2E\u985E                         [extruder] \u3068 [heater_bed]\n## Z\u8EF8\u30EA\u30DF\u30C3\u30C8\u30B9\u30A4\u30C3\u30C1\u505C\u6B62\u4F4D\u7F6E              [safe_z_home] \n## Z\u8EF8\u30EA\u30DF\u30C3\u30C8\u30B9\u30A4\u30C3\u30C1\u30AA\u30D5\u30BB\u30C3\u30C8\u4F4D\u7F6E        [stepper_z] \n## PID \u30AD\u30E3\u30EA\u30D6\u30EC\u30FC\u30B7\u30E7\u30F3                   [extruder] \u3068 [heater_bed] \n## \u62BC\u3057\u51FA\u3057\u6A5F\u30E2\u30FC\u30BF\u306E\u30B9\u30C6\u30C3\u30D7\u5024\u306E\u5FAE\u8ABF\u6574       [extruder] \n\n#####################################################################\n#      \u30D5\u30A1\u30A4\u30EB\u306E\u547C\u3073\u51FA\u3057\n#####################################################################\n### fuidd\u307E\u305F\u306Fmainsail\u3092\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001#[include XXX.cfg]\u306E\u524D\u306E#\u3092\u524A\u9664\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n### When using fuidd or mainsail as the frontend, remove the '#' before #[include XXX.cfg].\n[include fluidd.cfg]\n#[include mainsail.cfg]\n\n### \u4EE5\u4E0B/home/fly\u306Efly\u3092\u3042\u306A\u305F\u306E\u4E0A\u4F4D\u6A5F\u30E6\u30FC\u30B6\u30FC\u540D\u306B\u7F6E\u304D\u63DB\u3048\u3066\u304F\u3060\u3055\u3044\u3002ROOT\u30E6\u30FC\u30B6\u30FC\u3067\u306A\u3044\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n### Replace 'fly' in /home/fly with your host computer username, ensuring it's not the ROOT user.\n[virtual_sdcard]\npath: /home/fly/printer_data/gcodes\non_error_gcode: CANCEL_PRINT\n\n\n#####################################################################\n#      \u30DE\u30B9\u30BFID\u69CB\u6210\n#####################################################################\n[mcu]\nserial: /dev/serial/by-id/usb-Klipper_rp2040_MELLOW-if00\n### USB\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2ID\u3092\u63A2\u3059\u306B\u306F: ls /dev/serial/by-id/*\u3092\u4F7F\u7528\u3057\u3001\n### /dev/serial/by-id/usb-Klipper_rp2040_MELLOW-if00\u3092\u767A\u898B\u3057\u305FID\u306B\u7F6E\u304D\u63DB\u3048\u3066\u304F\u3060\u3055\u3044\u3002\n### Find the USB firmware ID with: ls /dev/serial/by-id/* and replace\n### /dev/serial/by-id/usb-Klipper_rp2040_MELLOW-if00 with the ID you discover.\n\n#canbus_uuid: 114514114514\n### CAN\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2ID\u306E\u554F\u3044\u5408\u308F\u305B: ~/klippy#env/bin/python ~/klipper/scripts/canbus_query.py can0\n### CAN\u306EID\u3092\u63A2\u3059\u306B\u306F\u3001'serial:'\u3092'canbus_uuid:'\u306B\u7F6E\u304D\u63DB\u3048\u3001ID\u3092\u5F8C\u308D\u306B\u8FFD\u52A0\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n### Query the CAN firmware ID with: ~/klippy#env/bin/python ~/klipper/scripts/canbus_query.py can0\n### Replace 'serial:' in the CAN ID with 'canbus_uuid:', then append the ID.\n\n#####################################################################\n#      \u6E29\u5EA6\u76E3\u8996\n#####################################################################\n[temperature_sensor motherboard]\nsensor_type: temperature_mcu\n\n[temperature_sensor Raspberry Pi]\nsensor_type: temperature_host\n\n#####################################################################\n#      T\u30E2\u30C7\u30EB\u3068\u52A0\u901F\u5EA6\n#####################################################################\n[printer]\nkinematics: corexy\nmax_velocity: 300\nmax_accel: 2000\nmax_z_velocity: 15\nmax_z_accel: 300\nsquare_corner_velocity: 6.0\n\n#####################################################################\n#      X/Y\u30B9\u30C6\u30C3\u30D1\u30FC\u30BB\u30C3\u30C6\u30A3\u30F3\u30B0\n#####################################################################\n\n[stepper_x]\n## \u53C2\u7167: https://docs.vorondesign.com/build/startup/#v0\nstep_pin:\ndir_pin:                                        # \u4E0A\u8A18\u306E\u30EA\u30F3\u30AF\u3067\u30E2\u30FC\u30BF\u30FC\u306E\u65B9\u5411\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u53CD\u8EE2\u3057\u3066\u3044\u308B\u5834\u5408\u3001!gpio3\u306E\u524D\u306B!\u3092\u8FFD\u52A0\u3057\u3066\u304F\u3060\u3055\u3044\u3002\nenable_pin:! \nrotation_distance: 40\nmicrosteps: 32\nfull_steps_per_rotation: 200                    # 0.9\xb0\u30B9\u30C6\u30C3\u30D1\u30FC\u30E2\u30FC\u30BF\u30FC\u306E\u5834\u5408\u306F400\u306B\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u30021.8\xb0\u30B9\u30C6\u30C3\u30D1\u30FC\u30E2\u30FC\u30BF\u30FC\u306E\u5834\u5408\u306F200\u3067\u3059\u3002\nendstop_pin:\n# endstop_pin: tmc2209_stepper_x:virtual_endstop\n# endstop_pin: tmc5160_stepper_x:virtual_endstop\nposition_min: 0\nposition_endstop: 300                           # (250mm-300mm-350mm)\nposition_max: 300                               # (250mm-300mm-350mm)\nhoming_speed: 40                                # \u30BB\u30F3\u30B5\u30FC\u30EC\u30B9\u30DB\u30FC\u30DF\u30F3\u30B0\u306E\u5834\u5408\u306F40mm/s\u3092\u8D85\u3048\u306A\u3044\u3088\u3046\u306B\u63A8\u5968\u3055\u308C\u307E\u3059\u3002\nhoming_retract_dist: 0\nhoming_positive_dir: true\n\n[tmc2209 stepper_x]\nuart_pin:\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0                        # \u30B9\u30C6\u30EB\u30B9\u30C1\u30E7\u30C3\u30D7\u3092\u30AA\u30F3\u306B\u3059\u308B\u306B\u306F999999\u3092\u8A2D\u5B9A\u3057\u30010\u3092\u8A2D\u5B9A\u3059\u308B\u3068\u30B9\u30D7\u30EC\u30C3\u30C9\u30B5\u30A4\u30AF\u30EB\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\ndiag_pin: ^\ndriver_SGTHRS: 80\n\n[tmc5160 stepper_x]\ncs_pin:\n### spi_bus\u3068spi_software\u306F\u3069\u3061\u3089\u304B\u4E00\u65B9\u306E\u307F\u4F7F\u7528\u53EF\u80FD\n### spi_bus and spi_software can only use one of them.\n# spi_bus:\nspi_software_mosi_pin:\nspi_software_miso_pin:\nspi_software_sclk_pin:\nrun_current: 1.0\ninterpolate: False\n### \u30C9\u30E9\u30A4\u30D0\u30FC\u306E\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u62B5\u6297\u306F\u30C9\u30E9\u30A4\u30D0\u30FC\u306B\u5408\u308F\u305B\u3066\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\n### The driver sampling resistor needs to be modified according to the driver.\nsense_resistor: 0.075\nstealthchop_threshold: 0\ndiag0_pin: ^!\ndriver_SGT: 1\n\n[stepper_y]\n## \u53C2\u7167: https://docs.vorondesign.com/build/startup/#v0\nstep_pin:\ndir_pin:                                        # \u4E0A\u8A18\u306E\u30EA\u30F3\u30AF\u3067\u30E2\u30FC\u30BF\u30FC\u306E\u65B9\u5411\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u53CD\u8EE2\u3057\u3066\u3044\u308B\u5834\u5408\u3001!gpio0\u306E\u524D\u306B!\u3092\u8FFD\u52A0\u3057\u3066\u304F\u3060\u3055\u3044\u3002\nenable_pin:!\nrotation_distance: 40\nmicrosteps: 32\nfull_steps_per_rotation: 200\nendstop_pin:\n# endstop_pin: tmc2209_stepper_y:virtual_endstop\n# endstop_pin: tmc5160_stepper_y:virtual_endstop\nposition_min: 0\nposition_endstop: 300\nposition_max: 300\nhoming_speed: 40 \nhoming_retract_dist: 0\nhoming_positive_dir: true\n\n[tmc2209 stepper_y]\nuart_pin:\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\ndiag_pin: ^\ndriver_SGTHRS: 80\n\n[tmc5160 stepper_y]\ncs_pin:\n### spi_bus\u3068spi_software\u306F\u3069\u3061\u3089\u304B\u4E00\u65B9\u306E\u307F\u4F7F\u7528\u53EF\u80FD\n### spi_bus and spi_software can only use one of them.\n# spi_bus:\nspi_software_mosi_pin:\nspi_software_miso_pin:\nspi_software_sclk_pin:\nrun_current: 1.0\ninterpolate: False\n### \u30C9\u30E9\u30A4\u30D0\u30FC\u306E\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u62B5\u6297\u306F\u30C9\u30E9\u30A4\u30D0\u30FC\u306B\u5408\u308F\u305B\u3066\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\n### The driver sampling resistor needs to be modified according to the driver.\nsense_resistor: 0.075\nstealthchop_threshold: 0\ndiag0_pin: ^!\ndriver_SGT: 1\n\n#####################################################################\n#      Z\u30B9\u30C6\u30C3\u30D1\u30FC\u30BB\u30C3\u30C6\u30A3\u30F3\u30B0\n#####################################################################\n\n[stepper_z]\n## \u53C2\u7167: https://docs.vorondesign.com/build/startup/#v0\nstep_pin:\ndir_pin:!                                         # \u4E0A\u8A18\u306E\u30EA\u30F3\u30AF\u3067\u30E2\u30FC\u30BF\u30FC\u306E\u65B9\u5411\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u53CD\u8EE2\u3057\u3066\u3044\u308B\u5834\u5408\u3001!gpio25\u306E\u524D\u306B!\u3092\u8FFD\u52A0\u3057\u3066\u304F\u3060\u3055\u3044\u3002\nenable_pin: !\nrotation_distance: 8\nmicrosteps: 32\nendstop_pin: ^\n# endstop_pin: probe:z_virtual_endstop  \nposition_endstop:-0.5\nposition_max: 270\nposition_min: -15\nhoming_speed: 20\nsecond_homing_speed: 3.0\nhoming_retract_dist: 3.0\n\n[tmc2209 stepper_z]\nuart_pin:\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n[stepper_z1]\nstep_pin: \ndir_pin:\nenable_pin: !\nrotation_distance: 40\ngear_ratio: 80:16\nfull_steps_per_rotation: 200\nmicrosteps: 16\n\n\n[tmc2209 stepper_z1]\nuart_pin:\ninterpolate: false\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n##    Z2\u30B9\u30C6\u30C3\u30D1\u30FC\u30E2\u30FC\u30BF\u30FC - \u53F3\u5F8C\u65B9 on Driver5\n[stepper_z2]\nstep_pin:\ndir_pin:\nenable_pin:!\nrotation_distance: 40\ngear_ratio: 80:16\nfull_steps_per_rotation: 200\nmicrosteps: 16\n\n\n[tmc2209 stepper_z2]\nuart_pin:\ninterpolate: false\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n\n[stepper_z3]\nstep_pin: \ndir_pin: \nenable_pin: !\nrotation_distance: 40\ngear_ratio: 80:16\nfull_steps_per_rotation: 200\nmicrosteps: 16\n\n\n[tmc2209 stepper_z3]\nuart_pin: \ninterpolate: false\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n"})})]})}function d(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},79938:function(n,e,t){t.d(e,{Z:function(){return p},a:function(){return o}});var r=t(75271);let i={},s=r.createContext(i);function o(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function p(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);