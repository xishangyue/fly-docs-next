"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["38887"],{51188:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>c,assets:()=>l,toc:()=>d,frontMatter:()=>r});var i=JSON.parse('{"id":"ProductDoc/ExtensionBoard/BDsensor-m/marlin","title":"Install **BDsensor-m-m**","description":"Connect the sensor cable to the EXP1 interface of the mainboard","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/BDsensor-m/marlin.mdx","sourceDirName":"ProductDoc/ExtensionBoard/BDsensor-m","slug":"/ProductDoc/ExtensionBoard/BDsensor-m/marlin","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/BDsensor-m/marlin","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/BDsensor-m/marlin.mdx","tags":[],"version":"current","lastUpdatedBy":"xishangxi","lastUpdatedAt":1735546887000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"Using Marlin"},"sidebar":"tutorialSidebar","previous":{"title":"Using Klipper","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/BDsensor-m/kliper"},"next":{"title":"Klipper Automatic Z-OFFSET","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/BDsensor-m/klipperpz"}}'),s=t("52676"),o=t("79938");let r={sidebar_position:3,sidebar_label:"Using Marlin"},a="Install BDsensor-m-m",l={},d=[{value:"Connect the sensor cable to the EXP1 interface of the mainboard",id:"connect-the-sensor-cable-to-the-exp1-interface-of-the-mainboard",level:2},{value:"Apply the patch to the Marlin firmware",id:"apply-the-patch-to-the-marlin-firmware",level:2},{value:"Edit configuration.h",id:"edit-configurationh",level:3},{value:"Edit Configuration_adv.h",id:"edit-configuration_advh",level:3},{value:"Edit pins_boardname.h",id:"edit-pins_boardnameh",level:3},{value:"Display BD sensor values on the LCD screen",id:"display-bd-sensor-values-on-the-lcd-screen",level:2},{value:"Calibration",id:"calibration",level:2},{value:"Test and Print",id:"test-and-print",level:2},{value:"There are two ways to automatically level the bed:",id:"there-are-two-ways-to-automatically-level-the-bed",level:2},{value:"Check Z Endstop <code>M119</code>",id:"check-z-endstop-m119",level:3},{value:"Check Connection",id:"check-connection",level:3},{value:"If all the above steps are correct, you can now home the Z-axis.",id:"if-all-the-above-steps-are-correct-you-can-now-home-the-z-axis",level:2}];function h(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{ImageView:i}=n;return!i&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsxs)(n.h1,{id:"install-bdsensor-m-m",children:["Install ",(0,s.jsx)(n.strong,{children:"BDsensor-m-m"})]})}),"\n",(0,s.jsx)(n.h2,{id:"connect-the-sensor-cable-to-the-exp1-interface-of-the-mainboard",children:"Connect the sensor cable to the EXP1 interface of the mainboard"}),"\n",(0,s.jsx)(n.p,{children:"*If the sensor cable is not long enough, use the extension cable included in the package"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The CKL and SDA lines of BDsensor-m-m can be connected to any GPIO pins on the board. You can also directly connect the BD sensor cable to the Bltouch port, for example:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BLtouch    |    BDsensor-m\n5V       --\x3e     5V\nGND      --\x3e     GND\nS        --\x3e     CLK/SCL    (Input)\nGND      --\x3e     GND\nZmin     --\x3e     SDA    (Input/Output) \n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Due to some pins in the mainboard connectors might not be directly connected to the MCU's GPIOs (e.g., they might have filtering capacitors or be isolated through MOSFETs, diodes, or optocouplers, but if they are isolated through resistors or resistor pull-ups/pull-downs, they can be used), they cannot be used with BDsensor-m, and the firmware will report a connection error. For example:"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Fan and heater connectors are isolated through MOSFETs,"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Some boards have connectors for thermistors and limit switches/probes typically connected to GND through filtering capacitors,"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install the BD sensor near the hotend as shown in the figure below. ",(0,s.jsx)(n.a,{href:"https://www.thingiverse.com/thing:6098131",children:"STL of mount"}),",  ",(0,s.jsx)(n.a,{href:"https://discord.com/channels/829828765512106054/1163237892957671424",children:"STL_mount_VzBot_Goliath short"})]}),"\n",(0,s.jsx)(i,{image:t(82273).Z,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"apply-the-patch-to-the-marlin-firmware",children:"Apply the patch to the Marlin firmware"}),"\n",(0,s.jsx)(n.p,{children:"The BD sensor has been integrated into Marlin2.1.x (since 2022.8.27),"}),"\n",(0,s.jsxs)(n.p,{children:["You can download the release version. However, it's now recommended to download the latest bug fix version: ",(0,s.jsx)(n.a,{href:"https://github.com/MarlinFirmware/Marlin",children:"https://github.com/MarlinFirmware/Marlin"})]}),"\n",(0,s.jsx)(n.p,{children:"What you need is to change the configuration files and pin files."}),"\n",(0,s.jsx)(n.h3,{id:"edit-configurationh",children:"Edit configuration.h"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enable BD_SENSOR"}),"\n",(0,s.jsx)(n.p,{children:"Uncomment"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#define BD_SENSOR`\n#define Z_SAFE_HOMING\n#define BD_SENSOR_PROBE_NO_STOP //adding this new line for fast bed leveling without nozzle stop, \n"})}),"\n",(0,s.jsxs)(n.p,{children:["Only ",(0,s.jsx)(n.code,{children:"BD_SENSOR_PROBE_NO_STOP"})]}),"\n",(0,s.jsxs)(n.p,{children:["Latest Marlin bug fix: ",(0,s.jsx)(n.a,{href:"https://github.com/MarlinFirmware/Marlin",children:"https://github.com/MarlinFirmware/Marlin"})]}),"\n",(0,s.jsxs)(n.p,{children:["Description: ",(0,s.jsx)(n.a,{href:"https://github.com/MarlinFirmware/Marlin/pull/25847",children:"https://github.com/MarlinFirmware/Marlin/pull/25847"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use probe for homing"}),"\n",(0,s.jsxs)(n.p,{children:["Ensure ",(0,s.jsx)(n.code,{children:"Z_MIN_PROBE_USES_Z_MIN_ENDSTOP_PIN"})," is disabled, and ",(0,s.jsx)(n.code,{children:"USE_PROBE_FOR_Z_HOMING"})," should be enabled as shown below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"//#define Z_MIN_PROBE_USES_Z_MIN_ENDSTOP_PIN\n// Force the use of the probe for Z-axis homing\n#define USE_PROBE_FOR_Z_HOMING\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Slow down the second homing Z speed"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#define Z_PROBE_FEEDRATE_SLOW (Z_PROBE_FEEDRATE_FAST / 16)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here, we must slow down the bump homing speed and Z homing speed because the endstop read from the BDsensor-m process is not real-time like a normal endstop."}),"\n",(0,s.jsx)(n.h3,{id:"edit-configuration_advh",children:"Edit Configuration_adv.h"}),"\n",(0,s.jsxs)(n.p,{children:["Enable ",(0,s.jsx)(n.code,{children:"#define BABYSTEPPING"})," for real-time leveling feature"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#define HOMING_BUMP_DIVISOR { 2, 2, 8 }       // Re-Bump Speed Divisor (Divides the Homing Feedrate)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"edit-pins_boardnameh",children:"Edit pins_boardname.h"}),"\n",(0,s.jsxs)(n.p,{children:["Configure the SDA and SCL pins for BDsensor-m in the pin file pins_boardname.h by adding the following 3 lines (for example):",(0,s.jsx)(n.code,{children:"pins_PANDA_PI_V29.h"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#define  I2C_BD_SDA_PIN    PC6   // Please change to the actual number which the SDA wire is connected to your mainboard\n#define  I2C_BD_SCL_PIN    PB2   // Please change to the actual number which the SLK wire is connected to your mainboard\n#define  I2C_BD_DELAY  20      // default value is 20, should be in the range [20,50].\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you want to do an automatic bed leveling probe (G29) before printing like a regular BLtouch, uncomment:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#define AUTO_BED_LEVELING_BILINEAR\n"})}),"\n",(0,s.jsx)(n.p,{children:"and edit the following values:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#define Z_CLEARANCE_DEPLOY_PROBE   0 // Z Clearance for Deploy/Stow\n#define Z_CLEARANCE_BETWEEN_PROBES  1 // Z Clearance between probe points\n#define Z_CLEARANCE_MULTI_PROBE     1 // Z Clearance between multiple probes\n"})}),"\n",(0,s.jsx)(n.h2,{id:"display-bd-sensor-values-on-the-lcd-screen",children:"Display BD sensor values on the LCD screen"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"For printers with status display (supporting gcode M117), like LCD12864 or some UART screens, like ender3V2 ..."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"calibration",children:"Calibration"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Clean the nozzle, then move the Z-axis via the console until the nozzle just touches the bed (BDsensor-m will use this position as the 0 point, so no z_offset is needed, we set the value to 0)."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Send the gcode command ",(0,s.jsx)(n.code,{children:"M102 S-6"}),", the printer will slowly move the Z-axis up by 0.1mm each time until it reaches 4mm. Do not run M102 S-6 before installing the sensor, and do not turn off the printer power during calibration, otherwise the old calibration data will be deleted. If this happens, just recalibrate again."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can send ",(0,s.jsx)(n.code,{children:"M102 S-5"})," to check if the BD sensor has been successfully calibrated, which will return the raw calibration data stored in the BD sensor."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["There's also a calibration tool that can do this: ",(0,s.jsx)(n.a,{href:"https://github.com/markniu/Bed_Distance_sensor/raw/new/marlin/BD_Config_Tool_Marlin.zip",children:"https://github.com/markniu/Bed_Distance_sensor/raw/new/marlin/BD_Config_Tool_Marlin.zip"})," ",(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/markniu/Bed_Distance_sensor/main/doc/images/Read.jpg",alt:"img"})]}),"\n",(0,s.jsx)(n.p,{children:"Note: A data value of 1015 or > 1010 indicates out of sensor range. If the first 5 points (0~0.5mm) or more are within the range of 0 to 1000, and the delta value increases by >=10, then the calibration is successful. Just like the chart shown above."}),"\n",(0,s.jsx)(n.p,{children:"If the first raw calibration data returned by M102 S-5 is greater than 400, it means the sensor is installed too high and needs to be reinstalled closer to the bed. Also, ensure the second data is more than 10 greater than the first value."}),"\n",(0,s.jsx)(n.h2,{id:"test-and-print",children:"Test and Print"}),"\n",(0,s.jsx)(n.p,{children:"Menu bed leveling"}),"\n",(0,s.jsx)(n.p,{children:"Auto bed leveling"}),"\n",(0,s.jsx)(n.h2,{id:"there-are-two-ways-to-automatically-level-the-bed",children:"There are two ways to automatically level the bed:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Use M102 for real-time leveling of the first few layers"})}),"\n",(0,s.jsx)(n.p,{children:"We can easily enable or disable this auto-leveling by sending gcode commands or adding gcode to the gcode file."}),"\n",(0,s.jsxs)(n.p,{children:['To enable bed leveling in Cura, add the M28 gcode just below the G102 (home all axes) gcode in the "Start G-code" section of the printer machine settings. For example, below G28, this means it will only do bed leveling below 0.2mm of Z-axis height. ',(0,s.jsx)(n.code,{children:"M102 S2"})]}),"\n",(0,s.jsxs)(n.p,{children:["Send or add this to disable bed leveling with the BD sensor, by the way, it's disabled by default. ",(0,s.jsx)(n.code,{children:"M102 S0``G28``M18"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"M102   S-1     //Read sensor information, and we can use this for connection checking.\nM102   S-2     //Read current distance value\nM102   S-5     //Read raw Calibrate data\nM102   S-6     //Start Calibrate, before that make sure the nozzle is just touched the bed, and then the printer restarted. Don't home the Z-axis before this.\nM102   S4      //Set the adjustable Z height value, e.g. M102 S4 means it will do adjusting while the Z height <=0.4mm, disable it by M102 S0.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. G29 Auto Bed Leveling"})}),"\n",(0,s.jsx)(n.p,{children:"Another way to automatically level the bed is like the G29 of BLtouch, just add a line G28 below G29."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.pandapi3d.com/post/install-bed-distance-sensor-video",children:"Installation Video"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://youtu.be/VLUfvkO2NFc?si=PF_6nhw39KhHBhcj",children:"Chris's Basement Installation Video"})}),"\n",(0,s.jsxs)(n.h3,{id:"check-z-endstop-m119",children:["Check Z Endstop ",(0,s.jsx)(n.code,{children:"M119"})]}),"\n",(0,s.jsx)(n.p,{children:"Before checking this step, do not home Z, otherwise the nozzle might touch the printer bed."}),"\n",(0,s.jsx)(n.p,{children:"This is the return message after sending the M119 command (report endstop status)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Send: M119\nRecv: x:open y:open z:open\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If z min is not open, check your configuration. ",(0,s.jsx)(n.code,{children:"#define Z_MAX_ENDSTOP_HIT_STATE HIGH"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure Z motor is off/unlocked"}),"\n",(0,s.jsx)(n.li,{children:"Move the Z-axis by hand down until the nozzle touches the bed"}),"\n",(0,s.jsxs)(n.li,{children:["Send ",(0,s.jsx)(n.code,{children:"M102 S-2"}),", the return value should be 0.00mm, then send M119 again, you can see the z endstop is now triggered."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Send: M119\nRecv: x:open y:open z:TRIGGERED\n"})}),"\n",(0,s.jsx)(n.h3,{id:"check-connection",children:"Check Connection"}),"\n",(0,s.jsxs)(n.p,{children:["Check the connection with ",(0,s.jsx)(n.code,{children:"M102 S-1"}),". Here is an example of the return message, please check if the connection and wire order return blank or other strings."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Send: M102 S-1\nRecv: V1.0 pandapi3d.com\n"})}),"\n",(0,s.jsx)(n.h2,{id:"if-all-the-above-steps-are-correct-you-can-now-home-the-z-axis",children:"If all the above steps are correct, you can now home the Z-axis."})]})}function c(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},82273:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/jxcs_webp-e90fb83e26a5605607e720e487bc6f3a.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var i=t(75271);let s={},o=i.createContext(s);function r(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);