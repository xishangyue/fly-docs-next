"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["62176"],{3089:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>a,default:()=>c,assets:()=>l,toc:()=>d,frontMatter:()=>r});var o=JSON.parse('{"id":"ProductDoc/ExtensionBoard/BDsensor-m/klipperpz","title":"klipper Installation Nozzle Collision","description":"This feature requires the BD sensor firmware version (which you can obtain by sending M102 S-1, not the hardware version on the sensor) to be V1.1b, greater than V1.2b, or versions purchased after March 2024. Otherwise, you need to use external hardware tools (such as STlink) to flash the firmware into the BD sensor.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/BDsensor-m/klipperpz.mdx","sourceDirName":"ProductDoc/ExtensionBoard/BDsensor-m","slug":"/ProductDoc/ExtensionBoard/BDsensor-m/klipperpz","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/BDsensor-m/klipperpz","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/BDsensor-m/klipperpz.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"klipper Automatic Z-OFFSET"},"sidebar":"tutorialSidebar","previous":{"title":"Marlin Usage","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/BDsensor-m/marlin"},"next":{"title":"Marlin Automatic Z-OFFSET","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/BDsensor-m/marlinpz"}}'),i=t("52676"),s=t("79938");let r={sidebar_position:4,sidebar_label:"klipper Automatic Z-OFFSET"},a="klipper Installation Nozzle Collision",l={},d=[];function h(e){let n={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Button:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Button",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"klipper-installation-nozzle-collision",children:"klipper Installation Nozzle Collision"})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"This feature requires the BD sensor firmware version (which you can obtain by sending M102 S-1, not the hardware version on the sensor) to be V1.1b, greater than V1.2b, or versions purchased after March 2024. Otherwise, you need to use external hardware tools (such as STlink) to flash the firmware into the BD sensor."}),(0,i.jsx)(n.p,{children:"When using soft PEI (such as Whambam) for homing operations, do not heat the nozzle too high, otherwise the high temperature may leave holes in the PEI."})]}),"\n",(0,i.jsx)(n.h1,{id:"how-it-works",children:"How It Works"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the nozzle or bed stops due to a collision, the distance data measured by the BD sensor will also stop changing, and then the BD sensor will quickly output a stop signal."}),"\n",(0,i.jsx)(n.li,{children:"The process of automatic z_offset calibration during G28 execution: It can be triggered after the nozzle touches the bed during the homing process - then slowly move up until the nozzle just leaves the bed - set this position as the 0 position of the z-axis."}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"benefits",children:"Benefits"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Automatic z-axis offset calibration."}),"\n",(0,i.jsx)(n.li,{children:"At the same time, you can still manually adjust the z-axis offset for different filaments."}),"\n",(0,i.jsx)(n.li,{children:"Overcome temperature drift."}),"\n",(0,i.jsx)(n.li,{children:"Temperature drift will change the z-axis offset, but will not change the range of the bed mesh height map with the BD sensor. This means that even if the temperature is different, the bed mesh is the same."}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"how-to-use",children:"How to Use"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"collision_homing"})," and ",(0,i.jsx)(n.code,{children:"collision_calibrate"})," to the [BDsensor] section."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[BDsensor] \ncollision_homing:0 # Set it to 1 to enable homing with nozzle collision sensing. Disable it by setting 0.\n                   \ncollision_calibrate:0 # Set it to 1 to enable auto calibrate BDsensor with nozzle collision sensing. Disable it by setting 0.\n# This means we do not need to manually move the nozzle on the bed and do paper test before sending calibrate command M102 S-6.\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sensitivity depends on speed, the slower the speed, the higher the sensitivity, so you need to adjust the Z-axis speed, homing_speed (homing speed) and second_homing_speed (secondary homing speed) should be in the range of 2 to 5."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"The nozzle should be cleaned or heated to soften the filament residue.\nPlease do not set the speed too high or too low. If the speed is too high, it may damage your hot end or print bed; if the speed is too low, it will trigger in the air, and in fact, the nozzle does not touch the print bed."})}),"\n",(0,i.jsx)(n.h1,{id:"reference-configuration",children:"Reference Configuration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[stepper_z]\nendstop_pin: probe:z_virtual_endstop\n#position_endstop: 0.0\nposition_max: 250\nhoming_speed: 5\nsecond_homing_speed:3\nhoming_retract_dist:5\nhoming_retract_speed:2\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"z_hop"})," (Z-axis hop height) and ",(0,i.jsx)(n.code,{children:"homing_retract_dist"})," (home retraction distance) should be greater than or equal to 5."]})}),"\n",(0,i.jsx)(n.h1,{id:"reference-configuration-1",children:"Reference Configuration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[safe_z_home]\nz_hop: 5 \n\n[stepper_z]\nhoming_retract_dist:5\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[BDsensor] \n...\nspeed:3 # This speed only works for the z tilt and PROBE_ACCURACY command.\n...\n\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,i.jsxs)(n.p,{children:["Reference configuration ",(0,i.jsx)(n.code,{children:"zero_reference_position"})]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[bed_mesh]\nhorizontal_move_z:1 # 0.7~1.0mm is recommended\nzero_reference_position: 150, 160 # Set this value to be the same as home_xy_position that is in the section\n....\n"})}),"\n",(0,i.jsx)(n.h1,{id:"test-homing",children:"Test Homing"}),"\n",(0,i.jsxs)(n.p,{children:["Please send about 10 ",(0,i.jsx)(n.code,{children:"G28 Z"})," commands, and then check whether the output data on the console is stable after each ",(0,i.jsx)(n.code,{children:"G28 Z"})," command is sent."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"G28 Z\n"})}),"\n",(0,i.jsx)(t,{variant:"contained",disableElevation:!0,href:"https://www.youtube.com/watch?v=RuPoXbrSPDc",children:"Demonstration Video"})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},79938:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var o=t(75271);let i={},s=o.createContext(i);function r(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);