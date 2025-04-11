"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["49150"],{81090:function(e,n,r){r.r(n),r.d(n,{default:()=>a,frontMatter:()=>t,metadata:()=>l,assets:()=>d,toc:()=>o,contentTitle:()=>c});var l=JSON.parse('{"id":"DebugDoc/flyos-fast/plr","title":"Klipper\u65AD\u7535\u7EED\u6253\u529F\u80FD","description":"\u6982\u8FF0","source":"@site/docs/DebugDoc/flyos-fast/plr.mdx","sourceDirName":"DebugDoc/flyos-fast","slug":"/DebugDoc/flyos-fast/plr","permalink":"/fly-docs-next/docs/DebugDoc/flyos-fast/plr","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/flyos-fast/plr.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1744267787000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"debugdocSidebar","previous":{"title":"\u7CFB\u7EDF\u914D\u7F6E\u4FEE\u6539","permalink":"/fly-docs-next/docs/DebugDoc/flyos-fast/config"},"next":{"title":"\u7CFB\u7EDF\u5185\u7F6E\u7EC4\u4EF6\u4ECB\u7ECD","permalink":"/fly-docs-next/docs/DebugDoc/flyos-fast/module"}}'),s=r("85893"),i=r("50065");let t={sidebar_position:4},c="Klipper\u65AD\u7535\u7EED\u6253\u529F\u80FD",d={},o=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u914D\u7F6E",id:"\u914D\u7F6E",level:2},{value:"plr.cfg \u914D\u7F6E\u6587\u4EF6",id:"plrcfg-\u914D\u7F6E\u6587\u4EF6",level:3},{value:"\u6D4B\u8BD5",id:"\u6D4B\u8BD5",level:2}];function p(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"klipper\u65AD\u7535\u7EED\u6253\u529F\u80FD",children:"Klipper\u65AD\u7535\u7EED\u6253\u529F\u80FD"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Klipper\u65AD\u7535\u7EED\u6253\u529F\u80FD\u662F\u6307\u5728Klipper\u65AD\u7535\u540E\uFF0C\u518D\u6B21\u4E0A\u7535\u540E\u53EF\u4EE5\u81EA\u52A8\u6062\u590DKlipper\u7684\u6253\u5370\u72B6\u6001\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u8BE5\u529F\u80FD\u9700\u914D\u5408 \u5B89\u5168\u5173\u673A\u6A21\u5757 \u4F7F\u7528\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4E0D\u9002\u7528\u4E8E\u505C\u7535\u540EZ\u8F74\u4F1A\u53D1\u751F\u4F4D\u79FB\u7684\u673A\u578B\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u914D\u7F6E",children:"\u914D\u7F6E"}),"\n",(0,s.jsx)(n.h3,{id:"plrcfg-\u914D\u7F6E\u6587\u4EF6",children:"plr.cfg \u914D\u7F6E\u6587\u4EF6"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5728\u6253\u5370\u673A\u914D\u7F6E\u9875\u9762\u4E2D\uFF0C\u70B9\u51FB\u65B0\u5EFA\u914D\u7F6E\u6587\u4EF6\uFF0C\u521B\u5EFA\u4E00\u4E2A ",(0,s.jsx)(n.code,{children:"plr.cfg"})," \u6587\u4EF6\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cfg",children:"[power_loss_resume]\n# power_pin: PA0 # \u5B89\u5168\u5173\u673A\u6A21\u5757\u7684\u5173\u673A\u5F15\u811A\uFF0C\u63A5\u5728\u4E0B\u4F4D\u673A\u7684PA0\u5F15\u811A\npower_pin: host:gpiochip1/gpio21 # \u5B89\u5168\u5173\u673A\u6A21\u5757\u7684\u5173\u673A\u5F15\u811A\uFF0C\u63A5\u5728\u4E0A\u4F4D\u673A\u7684PA21\u5F15\u811A\nis_shutdown: True # \u662F\u5426\u6267\u884C\u5173\u673A\u64CD\u4F5C, \u9ED8\u8BA4\u4E3A\u542F\u7528\npaused_recover_z: -2.0 # \u5982\u679C\u505C\u673A\u65F6\u4E3A\u6682\u505C\u6253\u5370\uFF0C\u7EED\u6253\u65F6Z\u79FB\u52A8\u8DDD\u79BB, \u9ED8\u8BA4\u4E3A\u4E0D\u79FB\u52A8\nstart_gcode:\n    # \u5F00\u59CB\u7EED\u6253\u524D\u6267\u884C\u7684gcode\n    # \u65AD\u7535\u524D\u4FDD\u5B58\u7684\u6240\u6709\u53C2\u6570\u5747\u53EF\u901A\u8FC7{PLR}\u83B7\u53D6\n    # \u53EF\u4F7F\u7528M118 {PLR}\u8F93\u51FA\u6240\u6709\u53EF\u7528\u53C2\u6570\n    M118 \u5F00\u59CB\u7EED\u6253: {PLR.print_stats.filename}\n    M118 \u4E2D\u65AD\u4F4D\u7F6E: X:[{PLR.POS_X}] Y:[{PLR.POS_Y}] Z:[{PLR.POS_Z}] E:[{PLR.POS_E}]\n    M140 S{PLR.bed.target}      ; \u8BBE\u7F6E\u70ED\u5E8A\u6E29\u5EA6\n    M104 S{PLR.extruder.target-10}  ; \u8BBE\u7F6E\u6324\u51FA\u5934\u6E29\u5EA6\n    M109 S{PLR.extruder.target-10}  ; \u7B49\u5F85\u6324\u51FA\u5934\u52A0\u70ED\u5230\u8BBE\u5B9A\u6E29\u5EA6\n    G91                             ; \u76F8\u5BF9\u5750\u6807\n    G1 Z2 F100                      ; \u62AC\u5347Z\uFF0C\u51C6\u5907X,Y\u5F52\u96F6\n    G90                             ; \u7EDD\u5BF9\u5750\u6807\n    G28 X Y                         ; \u5F52\u96F6XY\n    M140 S{PLR.bed.target}          ; \u8BBE\u7F6E\u70ED\u5E8A\u6E29\u5EA6\n    M104 S{PLR.extruder.target}     ; \u8BBE\u7F6E\u6324\u51FA\u5934\u6E29\u5EA6\n    M190 S{PLR.bed.target}          ; \u7B49\u5F85\u70ED\u5E8A\u52A0\u70ED\u5230\u8BBE\u5B9A\u6E29\u5EA6\n    M109 S{PLR.extruder.target}     ; \u7B49\u5F85\u6324\u51FA\u5934\u52A0\u70ED\u5230\u8BBE\u5B9A\u6E29\u5EA6\n    M83                             ; \u76F8\u5BF9\u6324\u51FA\n    # G1 E0.5 F400                  ; \u6324\u51FA\u4E00\u70B9\nlayer_count: 2 # \u7EED\u6253\u6307\u5B9A\u5C42\u6570\u540E\u6267\u884Clayer_change_gcode\nlayer_change_gcode:                \n    # \u7EED\u6253\u4E86{layer_count}\u5C42\u540E\u8981\u6267\u884C\u7684gcode\n    M118 \u6062\u590D\u6253\u5370\u901F\u5EA6\n    M106 S{PLR.fan_speed}             ; \u5F00\u542F\u5439\u6599\u98CE\u6247\n    M220 S{PLR.move_speed_percent}    ; \u8BBE\u7F6E\u8BF7\u6C42\u901F\u5EA6\u767E\u5206\u6BD4\n    M221 S{PLR.extrude_speed_percent} ; \u8BBE\u7F6E\u8BF7\u6C42\u6324\u51FA\u901F\u5EA6\u767E\u5206\u6BD4\nshutdown_gcode:\n    # \u5173\u673A\u524D\u6267\u884C\u7684gcode\n    M118 \u7535\u6E90\u7535\u538B\u4F4E\uFF0C\u5173\u673A\n    # M112 ; \u7D27\u6025\u505C\u6B62\n\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"\u6CE8\u610F",type:"warning",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4EE5\u4E0A\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684 ",(0,s.jsx)(n.code,{children:"start_gcode"})," \u5B8F\uFF0C\u53EF\u80FD\u9700\u8981\u4FEE\u6539\uFF0C\u5177\u4F53\u6839\u636E\u673A\u5668\u5B9E\u9645\u60C5\u51B5\u4FEE\u6539\u3002"]}),"\n"]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4FDD\u5B58\u4E0A\u9762\u7684\u914D\u7F6E\u6587\u4EF6\u540E"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6253\u5F00 ",(0,s.jsx)(n.code,{children:"printer.cfg"})," \u6587\u4EF6\uFF0C\u5728\u6587\u4EF6\u6700\u524D\u9762\u52A0\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cfg",children:"\n[include plr.cfg]\n\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u70B9\u51FB\u53F3\u4E0A\u89D2\u4FDD\u5B58\u5E76\u91CD\u542F\u5373\u53EF\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u81F3\u6B64\uFF0CKlipper\u65AD\u7535\u7EED\u6253\u529F\u80FD\u5DF2\u7ECF\u914D\u7F6E\u5B8C\u6210\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6D4B\u8BD5",children:"\u6D4B\u8BD5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6253\u5370\u4EFB\u610F\u4E00\u4E2A\u6587\u4EF6\uFF0C\u5728\u6253\u5370\u8FC7\u7A0B\u4E2D\u70B9\u51FB ",(0,s.jsx)(n.code,{children:"\u7D27\u6025\u505C\u673A"})," \u6309\u94AE\uFF0C\u6A21\u62DF\u65AD\u7535\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u518D\u6B21\u70B9\u51FB ",(0,s.jsx)(n.code,{children:"\u56FA\u4EF6\u91CD\u542F"})," \uFF0C\u7B49\u5F85Klipper\u6B63\u5E38\u8FDE\u63A5\u540E\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679C\u7F51\u9875\u6216\u8005KlipperScreen\u51FA\u73B0\u5F39\u7A97\u63D0\u793A\uFF0C\u5219\u8868\u793A\u65AD\u7535\u7EED\u6253\u529F\u80FD\u6B63\u5E38\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u540E\u7EED\u53EF\u7EE7\u7EED\u6D4B\u8BD5\u771F\u5B9E\u65AD\u7535\u60C5\u51B5\u3002"}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return t}});var l=r(67294);let s={},i=l.createContext(s);function t(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);