"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["54845"],{17424:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>c,default:()=>u,assets:()=>d,toc:()=>a,frontMatter:()=>s});var o=JSON.parse('{"id":"DebugDoc/ref-config/m109","title":"\uD504\uB9B0\uD130 \uC2DC\uC791 \uC628\uB3C4 \uBD88\uC548\uC815 \uB300\uAE30 \uC2DC\uAC04\uC774 \uB108\uBB34 \uAE38\uB2E4","description":"* \uC774 \uB9E4\uD06C\uB85C\uB294 \uC124\uC815 \uD30C\uC77C\uC5D0 \uC9C1\uC811 \uCD94\uAC00\uD558\uBA74 \uB429\uB2C8\uB2E4.","source":"@site/i18n/ko/docusaurus-plugin-content-docs/current/DebugDoc/ref-config/m109.mdx","sourceDirName":"DebugDoc/ref-config","slug":"/DebugDoc/ref-config/m109","permalink":"/fly-docs-next/ko/docs/DebugDoc/ref-config/m109","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/m109.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"debugdocSidebar","previous":{"title":"\uD544\uB7EC\uBA3C\uD2B8 \uC2A4\uC704\uCE58 \uC13C\uC11C","permalink":"/fly-docs-next/ko/docs/DebugDoc/ref-config/filament-switch-sensor"},"next":{"title":"\uB4C0\uC5BC x\uCD95/\uC778\uB371\uC2A4 \uCC38\uC870 \uC124\uC815","permalink":"/fly-docs-next/ko/docs/DebugDoc/ref-config/idex"}}'),r=t("52676"),i=t("79938");let s={sidebar_position:2},c="\uD504\uB9B0\uD130 \uC2DC\uC791 \uC628\uB3C4 \uBD88\uC548\uC815 \uB300\uAE30 \uC2DC\uAC04\uC774 \uB108\uBB34 \uAE38\uB2E4",d={},a=[];function l(e){let n={code:"code",h1:"h1",header:"header",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\uD504\uB9B0\uD130-\uC2DC\uC791-\uC628\uB3C4-\uBD88\uC548\uC815-\uB300\uAE30-\uC2DC\uAC04\uC774-\uB108\uBB34-\uAE38\uB2E4",children:"\uD504\uB9B0\uD130 \uC2DC\uC791 \uC628\uB3C4 \uBD88\uC548\uC815 \uB300\uAE30 \uC2DC\uAC04\uC774 \uB108\uBB34 \uAE38\uB2E4"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\uC774 \uB9E4\uD06C\uB85C\uB294 \uC124\uC815 \uD30C\uC77C\uC5D0 \uC9C1\uC811 \uCD94\uAC00\uD558\uBA74 \uB429\uB2C8\uB2E4."}),"\n",(0,r.jsx)(n.li,{children:"\uC774 \uB9E4\uD06C\uB85C\uC758 \uC5ED\uD560\uC740 \uC5F4\uC774 \uC0C1\uC2B9\uD558\uB294 \uB3D9\uC548 \uC77C\uBC18\uC801\uC73C\uB85C \uAE30\uB2E4\uB9AC\uC9C0\uB9CC, \uC628\uB3C4\uAC00 \uBAA9\uD45C\uCE58\uC5D0 \uB3C4\uB2EC\uD558\uBA74 \uC989\uC2DC \uB2E4\uC74C \uB2E8\uACC4\uB85C \uC9C4\uD589\uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",metastring:'title="printer.cfg"',children:"[gcode_macro M109]\nrename_existing: M109.1\ngcode:\n    {% set s = params.S|float %}\n    M104 {% for p in params %}{'%s%s' % (p, params[p])}{% endfor %}  ; Set hotend temp\n    {% if s != 0 %}\n    TEMPERATURE_WAIT SENSOR=extruder MINIMUM={s} MAXIMUM={s+1}   ; Wait for hotend temp (within 1 degree)\n    {% endif %}	\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},79938:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var o=t(75271);let r={},i=o.createContext(r);function s(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);