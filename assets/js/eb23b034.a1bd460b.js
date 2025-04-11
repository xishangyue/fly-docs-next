"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["29416"],{81813:function(e,n,t){t.r(n),t.d(n,{default:()=>f,frontMatter:()=>s,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"DebugDoc/ref-config/m109","title":"\u6253\u5370\u5F00\u59CB\u6E29\u5EA6\u4E0D\u7A33\u5B9A\u7B49\u5F85\u65F6\u95F4\u592A\u4E45","description":"* \u6B64\u5B8F\u76F4\u63A5\u653E\u914D\u7F6E\u91CC\u9762\u5373\u53EF","source":"@site/docs/DebugDoc/ref-config/m109.mdx","sourceDirName":"DebugDoc/ref-config","slug":"/DebugDoc/ref-config/m109","permalink":"/fly-docs-next/docs/DebugDoc/ref-config/m109","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/m109.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"debugdocSidebar","previous":{"title":"\u65AD\u6599\u4F20\u611F\u5668","permalink":"/fly-docs-next/docs/DebugDoc/ref-config/filament-switch-sensor"},"next":{"title":"\u53CCx\u8F74/idex\u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/docs/DebugDoc/ref-config/idex"}}'),o=t("85893"),i=t("50065");let s={sidebar_position:2},c="\u6253\u5370\u5F00\u59CB\u6E29\u5EA6\u4E0D\u7A33\u5B9A\u7B49\u5F85\u65F6\u95F4\u592A\u4E45",d={},a=[];function l(e){let n={code:"code",h1:"h1",header:"header",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"\u6253\u5370\u5F00\u59CB\u6E29\u5EA6\u4E0D\u7A33\u5B9A\u7B49\u5F85\u65F6\u95F4\u592A\u4E45",children:"\u6253\u5370\u5F00\u59CB\u6E29\u5EA6\u4E0D\u7A33\u5B9A\u7B49\u5F85\u65F6\u95F4\u592A\u4E45"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u6B64\u5B8F\u76F4\u63A5\u653E\u914D\u7F6E\u91CC\u9762\u5373\u53EF"}),"\n",(0,o.jsx)(n.li,{children:"\u6B64\u5B8F\u4F5C\u7528\u662F\u6B63\u5E38\u7B49\u5F85\u4E0A\u5347\u6E29\u5EA6\uFF0C\u4F46\u662F\u6E29\u5EA6\u5230\u8FBE\u76EE\u6807\u540E\u76F4\u63A5\u8FDB\u884C\u4E0B\u4E00\u6B65"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",metastring:'title="printer.cfg"',children:"[gcode_macro M109]\nrename_existing: M109.1\ngcode:\n    {% set s = params.S|float %}\n    M104 {% for p in params %}{'%s%s' % (p, params[p])}{% endfor %}  ; Set hotend temp\n    {% if s != 0 %}\n    TEMPERATURE_WAIT SENSOR=extruder MINIMUM={s} MAXIMUM={s+1}   ; Wait for hotend temp (within 1 degree)\n    {% endif %}	\n"})})]})}function f(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var r=t(67294);let o={},i=r.createContext(o);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);