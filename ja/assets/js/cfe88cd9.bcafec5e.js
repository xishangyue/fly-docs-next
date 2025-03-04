"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["75498"],{53347:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>s});var r=JSON.parse('{"id":"DebugDoc/ref-config/m109","title":"\u30D7\u30EA\u30F3\u30BF\u306E\u958B\u59CB\u6642\u6E29\u5EA6\u304C\u4E0D\u5B89\u5B9A\u3067\u5F85\u6A5F\u6642\u9593\u304C\u9577\u3044","description":"* \u3053\u306E\u30DE\u30AF\u30ED\u306F\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u306B\u76F4\u63A5\u8FFD\u52A0\u3067\u304D\u307E\u3059","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/DebugDoc/ref-config/m109.mdx","sourceDirName":"DebugDoc/ref-config","slug":"/DebugDoc/ref-config/m109","permalink":"/fly-docs-next/ja/docs/DebugDoc/ref-config/m109","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/m109.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"debugdocSidebar","previous":{"title":"\u65AD\u6599\u4F20\u611F\u5668","permalink":"/fly-docs-next/ja/docs/DebugDoc/ref-config/filament-switch-sensor"},"next":{"title":"\u53CCx\u8F74/idex\u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/ja/docs/DebugDoc/ref-config/idex"}}'),o=t("52676"),i=t("79938");let s={sidebar_position:2},c="\u30D7\u30EA\u30F3\u30BF\u306E\u958B\u59CB\u6642\u6E29\u5EA6\u304C\u4E0D\u5B89\u5B9A\u3067\u5F85\u6A5F\u6642\u9593\u304C\u9577\u3044",a={},d=[];function l(e){let n={code:"code",h1:"h1",header:"header",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"\u30D7\u30EA\u30F3\u30BF\u306E\u958B\u59CB\u6642\u6E29\u5EA6\u304C\u4E0D\u5B89\u5B9A\u3067\u5F85\u6A5F\u6642\u9593\u304C\u9577\u3044",children:"\u30D7\u30EA\u30F3\u30BF\u306E\u958B\u59CB\u6642\u6E29\u5EA6\u304C\u4E0D\u5B89\u5B9A\u3067\u5F85\u6A5F\u6642\u9593\u304C\u9577\u3044"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u3053\u306E\u30DE\u30AF\u30ED\u306F\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u306B\u76F4\u63A5\u8FFD\u52A0\u3067\u304D\u307E\u3059"}),"\n",(0,o.jsx)(n.li,{children:"\u3053\u306E\u30DE\u30AF\u30ED\u306E\u5F79\u5272\u306F\u901A\u5E38\u306E\u5F85\u3061\u6642\u9593\u3092\u8A2D\u3051\u3066\u6E29\u5EA6\u4E0A\u6607\u3092\u5F85\u3064\u3053\u3068\u3067\u3059\u304C\u3001\u6E29\u5EA6\u304C\u76EE\u6A19\u5024\u306B\u9054\u3057\u305F\u3089\u3059\u3050\u306B\u6B21\u306E\u30B9\u30C6\u30C3\u30D7\u306B\u9032\u307F\u307E\u3059"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",metastring:'title="printer.cfg"',children:"[gcode_macro M109]\nrename_existing: M109.1\ngcode:\n    {% set s = params.S|float %}\n    M104 {% for p in params %}{'%s%s' % (p, params[p])}{% endfor %}  ; Set hotend temp\n    {% if s != 0 %}\n    TEMPERATURE_WAIT SENSOR=extruder MINIMUM={s} MAXIMUM={s+1}   ; Wait for hotend temp (within 1 degree)\n    {% endif %}	\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},79938:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var r=t(75271);let o={},i=r.createContext(o);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);