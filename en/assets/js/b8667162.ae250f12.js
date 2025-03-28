"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["39571"],{32770:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>d,assets:()=>c,toc:()=>l,frontMatter:()=>o});var i=JSON.parse('{"id":"DebugDoc/ref-config/fuidd","title":"Pause and Cancel Print at Custom Position","description":"* Add [include mainsail.cfg] or [include fluidd.cfg] in printer.cfg","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/DebugDoc/ref-config/fuidd.mdx","sourceDirName":"DebugDoc/ref-config","slug":"/DebugDoc/ref-config/fuidd","permalink":"/fly-docs-next/en/docs/DebugDoc/ref-config/fuidd","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/fuidd.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"debugdocSidebar","previous":{"title":"Multi-Z Reference Configuration","permalink":"/fly-docs-next/en/docs/DebugDoc/ref-config/stepper_z"},"next":{"title":"\u5404\u7C7B\u63D2\u4EF6","permalink":"/fly-docs-next/en/docs/category/\u5404\u7C7B\u63D2\u4EF6"}}'),r=t("52676"),a=t("79938");let o={sidebar_position:10},s="Pause and Cancel Print at Custom Position",c={},l=[{value:"Chinese Translation",id:"chinese-translation",level:2}];function u(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"pause-and-cancel-print-at-custom-position",children:"Pause and Cancel Print at Custom Position"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"[include mainsail.cfg]"})," or ",(0,r.jsx)(n.code,{children:"[include fluidd.cfg]"})," in ",(0,r.jsx)(n.code,{children:"printer.cfg"})]}),"\n",(0,r.jsxs)(n.li,{children:["Add the following macro to ",(0,r.jsx)(n.code,{children:"printer.cfg"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"chinese-translation",children:"Chinese Translation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:'[gcode_macro _CLIENT_VARIABLE]\n### Pause Macro Related Custom Settings\nvariable_use_custom_pos   : False ; Whether to use x, y custom parking coordinates [True/False]\nvariable_custom_park_x    : 0.0   ; X position when pausing print\nvariable_custom_park_y    : 0.0   ; Y position when pausing print\nvariable_custom_park_dz   : 2.0   ; Z lifting distance (in millimeters) when moving to parking position during pause\n\n### Cancel Pause Macro Related Custom Settings\nvariable_park_at_cancel   : False ; Allow the toolhead to move to parking position when executing the cancel print macro [True/False]\nvariable_park_at_cancel_x : None  ; Different parking position during cancel print [None/Position as Float]; park_at_cancel must be True\nvariable_park_at_cancel_y : None  ; Different parking position during cancel print [None/Position as Float]; park_at_cancel must be True\n\n### Extruder actions when pausing and canceling\nvariable_retract          : 1.0     ; Retraction length (in millimeters) for extruder when pausing print\nvariable_cancel_retract   : 5.0     ; Retraction length (in millimeters) for extruder when canceling print\nvariable_speed_retract    : 35.0    ; Retraction speed (mm/s)\nvariable_unretract        : 1.0     ; Unretract length (in millimeters) for extruder when resuming print\nvariable_speed_unretract  : 35.0    ; Unretract speed (mm/s)\nvariable_speed_hop        : 15.0    ; Z-axis movement speed (mm/s)\nvariable_speed_move       : 100.0   ; Movement speed (mm/s)\n\n### Turn off motor heating configuration\n### One day is 86400 seconds\nvariable_idle_timeout     : 0     ; Number of seconds until idle timeout kicks in. Setting to 0 means no value will be set or restored\n\n# !!!Caution if you set use_fw_retract: True, then [firmware_retraction] must be defined in printer.cfg!!!\nvariable_use_fw_retract   : False ; Use firmware retraction instead of manual version [True/False]\nvariable_runout_sensor    : ""    ; If a sensor is defined, it will be used to cancel the execution of RESUME when no filament is detected.\n#                                Specify the configuration name of the runout sensor, e.g., "filament_switch_sensor runout". Note: Use the same as in your printer.cfg\n# !!!Custom macros, please use with care and review the section of the corresponding macro.\n# These macros are for simple operations like setting a status LED. Please ensure your macro does not interfere with the basic macro functions.\n# Only single-line commands are supported, please create a macro if you need more than one command.\nvariable_user_pause_macro : ""    ; Everything inside the "" will be executed after the Klipper base pause (PAUSE_BASE) function\nvariable_user_resume_macro: ""    ; Everything inside the "" will be executed before the Klipper base resume (RESUME_BASE) function\nvariable_user_cancel_macro: ""    ; Everything inside the "" will be executed before the Klipper base cancel (CANCEL_PRINT_BASE) function\ngcode:\n'})})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},79938:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var i=t(75271);let r={},a=i.createContext(r);function o(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);