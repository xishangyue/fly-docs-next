"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["9421"],{11728:function(e,n,i){i.r(n),i.d(n,{default:()=>c,frontMatter:()=>r,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"ProductDoc/ExtensionBoard/bd-sensor/marlinpz","title":"Marlin\'s Collision Sensing","description":"This feature requires the BD sensor firmware version (which you can obtain by sending M102 S-1, not the hardware version on the sensor) to be V1.1b, greater than V1.2b, or purchased after March 2024. Otherwise, you need to use an external hardware tool (such as STlink) to flash the firmware into the BD sensor.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/bd-sensor/marlinpz.mdx","sourceDirName":"ProductDoc/ExtensionBoard/bd-sensor","slug":"/ProductDoc/ExtensionBoard/bd-sensor/marlinpz","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/bd-sensor/marlinpz","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/bd-sensor/marlinpz.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"Marlin Automatic Z-OFFSET"},"sidebar":"tutorialSidebar","previous":{"title":"klipper automatic Z-OFFSET","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/bd-sensor/klipperpz"},"next":{"title":"AirClick","permalink":"/fly-docs-next/en/docs/category/airclick"}}'),s=i("85893"),o=i("50065");let r={sidebar_position:4,sidebar_label:"Marlin Automatic Z-OFFSET"},a="Marlin's Collision Sensing",l={},d=[];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Button:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Button",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"marlins-collision-sensing",children:"Marlin's Collision Sensing"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"This feature requires the BD sensor firmware version (which you can obtain by sending M102 S-1, not the hardware version on the sensor) to be V1.1b, greater than V1.2b, or purchased after March 2024. Otherwise, you need to use an external hardware tool (such as STlink) to flash the firmware into the BD sensor."})}),"\n",(0,s.jsx)(n.h1,{id:"how-it-works",children:"How It Works"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Automatically calibrates the z-axis offset when executing G28: It can be triggered after homing (when the nozzle touches the platform) \u2014 then slowly moves upward until the nozzle just leaves the platform \u2014 setting this position as the z-axis zero point."}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"benefits",children:"Benefits"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Automatic z-axis offset calibration."}),"\n",(0,s.jsx)(n.li,{children:"You can still manually adjust the z-axis offset for different filaments."}),"\n",(0,s.jsx)(n.li,{children:"Overcome temperature drift."}),"\n",(0,s.jsx)(n.li,{children:"Temperature drift changes the z-axis offset but does not change the range of the bed mesh height map with the BD sensor. This means that even if the temperature is different, the bed mesh remains the same."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Tip",type:"info",children:(0,s.jsxs)(n.p,{children:["The code for this feature is in the official Marlin GitHub pull request list: ",(0,s.jsx)(n.a,{href:"https://github.com/MarlinFirmware/Marlin/pull/27243",children:"https://github.com/MarlinFirmware/Marlin/pull/27243"}),"\nSo please use the following Marlin code: ",(0,s.jsx)(n.a,{href:"https://github.com/markniu/MarlinPULL/tree/bugfix-2.1.x",children:"https://github.com/markniu/MarlinPULL/tree/bugfix-2.1.x"})]})}),"\n",(0,s.jsx)(n.h1,{id:"how-to-use",children:"How to Use"}),"\n",(0,s.jsxs)(n.p,{children:["Enable ",(0,s.jsx)(n.code,{children:"BD_SENSOR"}),", and add ",(0,s.jsx)(n.code,{children:"#define BD_SENSOR_CONTACT_PROBE"})," in ",(0,s.jsx)(n.code,{children:"configuration.h"}),"\nIt should look like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#define BD_SENSOR\n#if ENABLED(BD_SENSOR)\n  #define BD_SENSOR_PROBE_NO_STOP // Probe bed without stopping at each probe point\n  #define BD_SENSOR_CONTACT_PROBE // it uses nozzle collision sensing to probe while homing\n#endif\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Increase the probe speed in configuration.h."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Sensitivity depends on speed, so you need to adjust the Z-axis speed."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"homing_speed (homing speed) and second_homing_speed (secondary homing speed) should be in the range of 3 to 10, which is the Z-axis probe feed speed."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:" #define Z_PROBE_FEEDRATE_FAST  (5*60)\n #define Z_PROBE_FEEDRATE_SLOW  (5*60)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Increase the homing lift of the Z-axis to more than 4 millimeters in Configuration_adv.h."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#define HOMING_BUMP_MM      { 5, 5, 5 } \n"})}),"\n",(0,s.jsx)(n.h1,{id:"test-homing",children:"Test Homing"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Please send about 10 ",(0,s.jsx)(n.code,{children:"G28 Z"})," commands, or use the ",(0,s.jsx)(n.code,{children:"M48"})," command, to see if it is stable."]}),"\n"]}),"\n",(0,s.jsx)(i,{variant:"contained",disableElevation:!0,href:"https://www.youtube.com/watch?v=DzmGyJNS9bY",children:"Demonstration Video"})]})}function c(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return r}});var t=i(67294);let s={},o=t.createContext(s);function r(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);