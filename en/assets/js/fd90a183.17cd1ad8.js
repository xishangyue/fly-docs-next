"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["47238"],{36703:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>d,assets:()=>a,toc:()=>u,frontMatter:()=>s});var r=JSON.parse('{"id":"DebugDoc/ref-config/filament-switch-sensor","title":"Filament Runout Sensor","description":"----","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/DebugDoc/ref-config/filament-switch-sensor.mdx","sourceDirName":"DebugDoc/ref-config","slug":"/DebugDoc/ref-config/filament-switch-sensor","permalink":"/fly-docs-next/en/docs/DebugDoc/ref-config/filament-switch-sensor","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/filament-switch-sensor.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"debugdocSidebar","previous":{"title":"Klipper \u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/en/docs/category/klipper-\u53C2\u8003\u914D\u7F6E"},"next":{"title":"Unstable Start Temperature Waiting Too Long","permalink":"/fly-docs-next/en/docs/DebugDoc/ref-config/m109"}}'),o=t("52676"),i=t("79938");let s={sidebar_position:1},c="Filament Runout Sensor",a={},u=[];function l(e){let n={code:"code",h1:"h1",header:"header",hr:"hr",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"filament-runout-sensor",children:"Filament Runout Sensor"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",metastring:'title="printer.cfg"',children:"[filament_switch_sensor Filament Monitoring]\npause_on_runout: True\nswitch_pin: ^PC2\nrunout_gcode: \n        PAUSE\n        M118 Filament runout, pause printing\ninsert_gcode:\n        M118 Filament restored\n"})}),"\n",(0,o.jsx)(n.hr,{})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},79938:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var r=t(75271);let o={},i=r.createContext(o);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);