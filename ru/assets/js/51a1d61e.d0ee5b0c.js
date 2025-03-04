"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["84357"],{31846:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>p,assets:()=>l,toc:()=>c,frontMatter:()=>s});var r=JSON.parse('{"id":"ProductDoc/ExtensionBoard/fly-kppm/power_resume","title":"Klipper \u65AD\u7535\u7EED\u6253","description":"* \u4EC5\u9002\u7528\u90E8\u5206\u673A\u5668","source":"@site/docs/ProductDoc/ExtensionBoard/fly-kppm/power_resume.mdx","sourceDirName":"ProductDoc/ExtensionBoard/fly-kppm","slug":"/ProductDoc/ExtensionBoard/fly-kppm/power_resume","permalink":"/fly-docs-next/ru/docs/ProductDoc/ExtensionBoard/fly-kppm/power_resume","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/fly-kppm/power_resume.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1728976228000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"\u4EA7\u54C1\u7B80\u4ECB","permalink":"/fly-docs-next/ru/docs/ProductDoc/ExtensionBoard/fly-kppm/"},"next":{"title":"\u4E09\u7EF4\u6A21\u578B","permalink":"/fly-docs-next/ru/docs/ProductDoc/ExtensionBoard/fly-kppm/schematic"}}'),o=t("52676"),i=t("79938");let s={sidebar_position:2},d="Klipper \u65AD\u7535\u7EED\u6253",l={},c=[{value:"\u5207\u6362\u5206\u652F",id:"\u5207\u6362\u5206\u652F",level:2},{value:"\u53C2\u8003\u914D\u7F6E",id:"\u53C2\u8003\u914D\u7F6E",level:2}];function a(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"klipper-\u65AD\u7535\u7EED\u6253",children:"Klipper \u65AD\u7535\u7EED\u6253"})}),"\n",(0,o.jsx)(n.admonition,{title:"\u987B\u77E5",type:"danger",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u4EC5\u9002\u7528\u90E8\u5206\u673A\u5668"}),"\n"]})}),"\n",(0,o.jsx)(n.h2,{id:"\u5207\u6362\u5206\u652F",children:"\u5207\u6362\u5206\u652F"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u9700\u8981\u4F7F\u7528SS\u901A\u8FC7\u7F51\u7EDC\u8FDE\u63A5\u5230\u4E0A\u4F4D\u673A\u540E\u6267\u884C\uFF0C\u9700\u8981\u786E\u4FDD\u4E0A\u4F4D\u673A\u53EF\u4EE5\u8054\u7F51"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://e.coding.net/g-ofpa1390/3D-Printers/klipper-dev.git -b fly-dev klipper\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u53C2\u8003\u914D\u7F6E",children:"\u53C2\u8003\u914D\u7F6E"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",children:"[power_resume]\npower_pin: PA10\nis_shutdown: True # \u662F\u5426\u6267\u884C\u5173\u673A\u64CD\u4F5C, \u9ED8\u8BA4\u4E3A\u542F\u7528\nstart_gcode:\n\xa0 \xa0 # \u5F00\u59CB\u7EED\u6253\u524D\u6267\u884C\u7684gcode\n\xa0 \xa0 # \u65AD\u7535\u524D\u4FDD\u5B58\u7684\u6240\u6709\u53C2\u6570\u5747\u53EF\u901A\u8FC7{PR}\u83B7\u53D6\n\xa0 \xa0 # \u53EF\u4F7F\u7528M118 {PR}\u8F93\u51FA\u6240\u6709\u53EF\u7528\u53C2\u6570\n\xa0 \xa0 M118 \u5F00\u59CB\u7EED\u6253: {PR.print_stats.filename}\n\xa0 \xa0 {% if PR.print_stats.info.total_layer %}\n\xa0 \xa0 \xa0 \xa0 M118 \u603B\u5C42\u6570: {PR.print_stats.info.total_layer}\n\xa0 \xa0 \xa0 \xa0 M118 \u4E2D\u65AD\u5C42: {PR.print_stats.info.current_layer}\n\xa0 \xa0 {% endif %}\n\xa0 \xa0 M118 \u4E2D\u65AD\u4F4D\u7F6E: X:[{PR.POS_X}] Y:[{PR.POS_Y}] Z:[{PR.POS_Z}] E:[{PR.POS_E}]\n\xa0 \xa0 M140 S{PR.bed.target} \xa0 \xa0 \xa0; \u8BBE\u7F6E\u70ED\u5E8A\u6E29\u5EA6\n\xa0 \xa0 # M104 S180 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0; \u8BBE\u7F6E\u6324\u51FA\u5934\u6E29\u5EA6\n\xa0 \xa0 # M109 S180 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0; \u7B49\u5F85\u6324\u51FA\u5934\u52A0\u70ED\u5230\u8BBE\u5B9A\u6E29\u5EA6\n\xa0 \xa0 G91 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0; \u76F8\u5BF9\u5750\u6807\n\xa0 \xa0 G1 Z2 F100 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ; \u62AC\u5347Z\uFF0C\u51C6\u5907X,Y\u5F52\u96F6\n\xa0 \xa0 G90 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0; \u7EDD\u5BF9\u5750\u6807\n\xa0 \xa0 G28 X Y \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0; \u5F52\u96F6XY\n\xa0 \xa0 M140 S{PR.bed.target} \xa0 \xa0 \xa0; \u8BBE\u7F6E\u70ED\u5E8A\u6E29\u5EA6\n\xa0 \xa0 M104 S{PR.extruder.target} ; \u8BBE\u7F6E\u6324\u51FA\u5934\u6E29\u5EA6\n\xa0 \xa0 M190 S{PR.bed.target} \xa0 \xa0 \xa0; \u7B49\u5F85\u70ED\u5E8A\u52A0\u70ED\u5230\u8BBE\u5B9A\u6E29\u5EA6\n\xa0 \xa0 M109 S{PR.extruder.target} ; \u7B49\u5F85\u6324\u51FA\u5934\u52A0\u70ED\u5230\u8BBE\u5B9A\u6E29\u5EA6\n\xa0 \xa0 M106 S255 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0; \u5F00\u542F\u5439\u6599\u98CE\u6247\n\xa0 \xa0 M83 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0; \u76F8\u5BF9\u6324\u51FA\n\xa0 \xa0 G1 E10 F400 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0; \u6324\u51FA\u4E00\u70B9\n\xa0 \xa0 G90 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0; \u7EDD\u5BF9\u5750\u6807\n\xa0 \xa0 G1 F{PR.gcode_move.speed} \xa0; \u8BBE\u7F6E\u79FB\u52A8\u901F\u5EA6\n\xa0 \xa0 G1 X{PR.POS_X} Y{PR.POS_Y} Z{PR.POS_Z} ; \u79FB\u52A8\u5230\u5F00\u59CB\u4F4D\u7F6E\n\xa0 \xa0 {% if PR.gcode_move.absolute_coordinates %}\n\xa0 \xa0 \xa0 \xa0 G90 ; \u7EDD\u5BF9\u8FD0\u52A8\n\xa0 \xa0 {% else %}\n\xa0 \xa0 \xa0 \xa0 G91 ; \u76F8\u5BF9\u8FD0\u52A8\n\xa0 \xa0 {% endif %}\n\xa0 \xa0 {% if PR.gcode_move.absolute_extrude %}\n\xa0 \xa0 \xa0 \xa0 M82 ; \u7EDD\u5BF9\u6324\u51FA\n\xa0 \xa0 {% else %}\n\xa0 \xa0 \xa0 \xa0 M83 ; \u76F8\u5BF9\u6324\u51FA\n\xa0 \xa0 {% endif %}\n\xa0 \xa0 G92 E{PR.POS_E} ; \u8BBE\u7F6E\u6324\u51FA\u4F4D\u7F6E\nshutdown_gcode:\n\xa0 \xa0 # \u5173\u673A\u524D\u6267\u884C\u7684gcode\n\xa0 \xa0 M118 \u7535\u6E90\u7535\u538B\u4F4E\uFF0C\u5173\u673A\n\xa0 \xa0 # M112 ; \u7D27\u6025\u505C\u6B62\n"})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},79938:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var r=t(75271);let o={},i=r.createContext(o);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);