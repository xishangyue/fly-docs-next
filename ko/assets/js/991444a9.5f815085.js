"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["11273"],{1965:function(e,n,i){i.r(n),i.d(n,{metadata:()=>o,contentTitle:()=>d,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>r});var o=JSON.parse('{"id":"ProductDoc/ExtensionBoard/BDsensor-m/klipperpz","title":"klipper\u5B89\u88C5\u55B7\u5634\u78B0\u649E","description":"\u6B64\u529F\u80FD\u8981\u6C42BD\u4F20\u611F\u5668\u56FA\u4EF6\u7248\u672C(\u60A8\u53EF\u4EE5\u901A\u8FC7\u53D1\u9001M102 S-1\u6765\u83B7\u53D6\u8BE5\u7248\u672C,\u800C\u975E\u4F20\u611F\u5668\u4E0A\u7684\u786C\u4EF6\u7248\u672C)\u4E3AV1.1b\u3001\u5927\u4E8EV1.2b\u6216\u8005\u57282024\u5E743\u6708\u4E4B\u540E\u8D2D\u4E70\u7684\u7248\u672C,\u5426\u5219\u60A8\u9700\u8981\u4F7F\u7528\u5916\u90E8\u786C\u4EF6\u5DE5\u5177(\u5982STlink)\u5C06\u56FA\u4EF6\u5237\u5165BD\u4F20\u611F\u5668\u3002","source":"@site/docs/ProductDoc/ExtensionBoard/BDsensor-m/klipperpz.mdx","sourceDirName":"ProductDoc/ExtensionBoard/BDsensor-m","slug":"/ProductDoc/ExtensionBoard/BDsensor-m/klipperpz","permalink":"/fly-docs-next/ko/docs/ProductDoc/ExtensionBoard/BDsensor-m/klipperpz","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/BDsensor-m/klipperpz.mdx","tags":[],"version":"current","lastUpdatedBy":"xishangyue","lastUpdatedAt":1737358758000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"klipper\u81EA\u52A8Z-OFFSET"},"sidebar":"tutorialSidebar","previous":{"title":"Marlin \uC0AC\uC6A9","permalink":"/fly-docs-next/ko/docs/ProductDoc/ExtensionBoard/BDsensor-m/marlin"},"next":{"title":"Marlin\u81EA\u52A8Z-OFFSET","permalink":"/fly-docs-next/ko/docs/ProductDoc/ExtensionBoard/BDsensor-m/marlinpz"}}'),s=i("52676"),t=i("79938");let r={sidebar_position:4,sidebar_label:"klipper\u81EA\u52A8Z-OFFSET"},d="klipper\u5B89\u88C5\u55B7\u5634\u78B0\u649E",l={},c=[];function a(e){let n={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Button:i}=n;return!i&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Button",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"klipper\u5B89\u88C5\u55B7\u5634\u78B0\u649E",children:"klipper\u5B89\u88C5\u55B7\u5634\u78B0\u649E"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"\u6B64\u529F\u80FD\u8981\u6C42BD\u4F20\u611F\u5668\u56FA\u4EF6\u7248\u672C(\u60A8\u53EF\u4EE5\u901A\u8FC7\u53D1\u9001M102 S-1\u6765\u83B7\u53D6\u8BE5\u7248\u672C,\u800C\u975E\u4F20\u611F\u5668\u4E0A\u7684\u786C\u4EF6\u7248\u672C)\u4E3AV1.1b\u3001\u5927\u4E8EV1.2b\u6216\u8005\u57282024\u5E743\u6708\u4E4B\u540E\u8D2D\u4E70\u7684\u7248\u672C,\u5426\u5219\u60A8\u9700\u8981\u4F7F\u7528\u5916\u90E8\u786C\u4EF6\u5DE5\u5177(\u5982STlink)\u5C06\u56FA\u4EF6\u5237\u5165BD\u4F20\u611F\u5668\u3002"}),(0,s.jsx)(n.p,{children:"\u5728\u4F7F\u7528\u8F6FPEI(\u5982Whambam)\u8FDB\u884C\u5F52\u4F4D\u64CD\u4F5C\u65F6,\u4E0D\u8981\u5C06\u55B7\u5634\u52A0\u70ED\u5F97\u8FC7\u9AD8,\u5426\u5219\u9AD8\u6E29\u53EF\u80FD\u4F1A\u5728PEI\u4E0A\u7559\u4E0B\u5B54\u6D1E\u3002"})]}),"\n",(0,s.jsx)(n.h1,{id:"\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684",children:"\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5982\u679C\u55B7\u5634\u6216\u5E8A\u9762\u56E0\u78B0\u649E\u800C\u505C\u6B62,\u7531bd\u4F20\u611F\u5668\u6D4B\u91CF\u7684\u8DDD\u79BB\u6570\u636E\u4E5F\u5C06\u505C\u6B62\u53D8\u5316,\u7136\u540Ebd\u4F20\u611F\u5668\u5C06\u5FEB\u901F\u8F93\u51FA\u4E00\u4E2A\u505C\u6B62\u4FE1\u53F7\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5728\u6267\u884CG28\u65F6\u81EA\u52A8z_offset\u6821\u51C6\u7684\u8FC7\u7A0B\uFF1A\u5B83\u53EF\u4EE5\u5728\u55B7\u5634\u5728\u5F52\u4F4D\u8FC7\u7A0B\u4E2D\u89E6\u78B0\u5230\u5E8A\u9762\u540E\u89E6\u53D1\u2014\u2014\u7136\u540E\u7F13\u6162\u5411\u4E0A\u79FB\u52A8\u76F4\u5230\u55B7\u5634\u521A\u597D\u79BB\u5F00\u5E8A\u9762\u2014\u2014\u5C06\u6B64\u4F4D\u7F6E\u8BBE\u5B9A\u4E3Az\u8F74\u76840\u4F4D\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"\u597D\u5904",children:"\u597D\u5904"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u81EA\u52A8 z \u8F74\u504F\u79FB\u6821\u51C6\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u540C\u65F6\u60A8\u4ECD\u7136\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u7684\u706F\u4E1D\u624B\u52A8\u8C03\u6574 z \u8F74\u504F\u79FB\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u514B\u670D\u6E29\u5EA6\u6F02\u79FB\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6E29\u5EA6\u6F02\u79FB\u4F1A\u6539\u53D8 z \u8F74\u504F\u79FB,\u4F46\u4E0D\u4F1A\u6539\u53D8\u5E26\u6709 BD \u4F20\u611F\u5668\u7684\u5E8A\u9762\u7F51\u683C\u9AD8\u5EA6\u56FE\u7684\u8303\u56F4\u3002\u8FD9\u610F\u5473\u7740\u5373\u4F7F\u6E29\u5EA6\u4E0D\u540C,\u5E8A\u9762\u7F51\u683C\u4E5F\u662F\u76F8\u540C\u7684\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"\u5982\u4F55\u4F7F\u7528",children:"\u5982\u4F55\u4F7F\u7528"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5C06",(0,s.jsx)(n.code,{children:"collision_homing"}),"\u548C",(0,s.jsx)(n.code,{children:"collision_calibrate"}),"\u6DFB\u52A0\u5230[BDsensor]\u90E8\u5206\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[BDsensor] \ncollision_homing:0 #  set it 1 to enable homing with nozzle collision sensing. disable it by setting 0.  \u5C06\u5176\u8BBE\u7F6E\u4E3A1,\u4EE5\u542F\u7528\u5E26\u55B7\u5634\u78B0\u649E\u611F\u5E94\u7684\u5F52\u4F4D\u529F\u80FD\u3002\u901A\u8FC7\u5C06\u5176\u8BBE\u7F6E\u4E3A0\u6765\u7981\u7528\u8BE5\u529F\u80FD\u3002\n                   \ncollision_calibrate:0 # set it 1 to enable auto calibrate BDsensor with nozzle collision sensing. disable it by setting 0. # \u5C06\u5176\u8BBE\u7F6E\u4E3A1,\u4EE5\u542F\u7528\u901A\u8FC7\u55B7\u5634\u78B0\u649E\u611F\u5E94\u81EA\u52A8\u6821\u51C6BD\u4F20\u611F\u5668\u3002\u5C06\u5176\u8BBE\u7F6E\u4E3A0\u53EF\u7981\u7528\u6B64\u529F\u80FD\u3002\n# that means we do not need to manual move the nozzle on the bed and do paper test before sending calibrate command M102 S-6. \u8FD9\u610F\u5473\u7740\u6211\u4EEC\u4E0D\u9700\u8981\u624B\u52A8\u5728\u5E8A\u4E0A\u79FB\u52A8\u55B7\u5634,\u5E76\u4E14\u5728\u53D1\u9001\u6821\u51C6\u547D\u4EE4M102 S-6\u4E4B\u524D\u4E0D\u9700\u8981\u8FDB\u884C\u7EB8\u5F20\u6D4B\u8BD5\u3002\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7075\u654F\u5EA6\u53D6\u51B3\u4E8E\u901F\u5EA6,\u901F\u5EA6\u8D8A\u6162,\u7075\u654F\u5EA6\u8D8A\u9AD8,\u56E0\u6B64\u60A8\u9700\u8981\u8C03\u6574Z\u8F74\u7684\u901F\u5EA6,homing_speed(\u5F52\u4F4D\u901F\u5EA6)\u548Csecond_homing_speed(\u4E8C\u6B21\u5F52\u4F4D\u901F\u5EA6)\u5E94\u57282\u52305\u7684\u8303\u56F4\u5185\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"\u55B7\u5634\u5E94\u8BE5\u6E05\u7406\u5E72\u51C0\u6216\u8005\u52A0\u70ED\u4EE5\u8F6F\u5316\u4E1D\u6599\u6B8B\u7559\u7269\u3002\n\u8BF7\u4E0D\u8981\u5C06\u901F\u5EA6\u8BBE\u7F6E\u5F97\u8FC7\u9AD8\u6216\u8FC7\u4F4E\u3002\u5982\u679C\u901F\u5EA6\u8FC7\u9AD8,\u53EF\u80FD\u4F1A\u635F\u574F\u4F60\u7684\u70ED\u7AEF\u6216\u6253\u5370\u5E8A\uFF1B\u800C\u901F\u5EA6\u8FC7\u4F4E,\u5219\u4F1A\u5728\u7A7A\u4E2D\u89E6\u53D1,\u5B9E\u9645\u4E0A\u55B7\u5634\u5E76\u6CA1\u6709\u63A5\u89E6\u5230\u6253\u5370\u5E8A\u3002"})}),"\n",(0,s.jsx)(n.h1,{id:"\u53C2\u8003\u914D\u7F6E",children:"\u53C2\u8003\u914D\u7F6E"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[stepper_z]\nendstop_pin: probe:z_virtual_endstop\n#position_endstop: 0.0\nposition_max: 250\nhoming_speed: 5\nsecond_homing_speed:3\nhoming_retract_dist:5\nhoming_retract_speed:2\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"z_hop"}),"(Z\u8F74\u56DE\u9000\u9AD8\u5EA6)\u548C",(0,s.jsx)(n.code,{children:"homing_retract_dist"}),"(\u56DE\u96F6\u56DE\u9000\u8DDD\u79BB)\u5E94\u5927\u4E8E\u7B49\u4E8E5\u3002"]})}),"\n",(0,s.jsx)(n.h1,{id:"\u53C2\u8003\u914D\u7F6E-1",children:"\u53C2\u8003\u914D\u7F6E"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[safe_z_home]\nz_hop: 5 \n\n[stepper_z]\nhoming_retract_dist:5\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[BDsensor] \n...\nspeed:3 # this speed only works for the z tilt and PROBE_ACCURACY command. # \u6B64\u901F\u5EA6\u4EC5\u9002\u7528\u4E8E Z \u8F74\u503E\u659C\u548C PROBE_ACCURACY \u547D\u4EE4\u3002\n...\n\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"\u63D0\u793A",type:"tip",children:(0,s.jsxs)(n.p,{children:["\u53C2\u8003\u914D\u7F6E",(0,s.jsx)(n.code,{children:"zero_reference_position"})]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[bed_mesh]\nhorizontal_move_z:1 # 0.7~1.0mm is recommended \u5EFA\u8BAE\u4F7F\u75280.7~1.0\u6BEB\u7C73\u3002\nzero_reference_position: 150, 160 # Set this value to be the same as home_xy_position that is in the section  ## \u5C06\u6B64\u503C\u8BBE\u7F6E\u4E3A\u4E0Esafe_z_home\u90E8\u5206\u4E2D\u7684home_xy_position\u76F8\u540C\u5750\u6807\u3002\n....\n"})}),"\n",(0,s.jsx)(n.h1,{id:"\u6D4B\u8BD5\u5F52\u4F4D",children:"\u6D4B\u8BD5\u5F52\u4F4D"}),"\n",(0,s.jsxs)(n.p,{children:["\u8BF7\u53D1\u9001\u5927\u7EA610\u6B21",(0,s.jsx)(n.code,{children:"G28 Z"}),"\u6307\u4EE4,\u7136\u540E\u67E5\u770B\u6BCF\u6B21\u53D1\u9001",(0,s.jsx)(n.code,{children:"G28 Z"}),"\u6307\u4EE4\u4E4B\u540E\u63A7\u5236\u53F0\u4E0A\u7684\u8F93\u51FA\u6570\u636E\u662F\u5426\u7A33\u5B9A\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"G28 Z\n"})}),"\n",(0,s.jsx)(i,{variant:"contained",disableElevation:!0,href:"https://www.youtube.com/watch?v=RuPoXbrSPDc",children:"\u6F14\u793A\u89C6\u9891"})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},79938:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return r}});var o=i(75271);let s={},t=o.createContext(s);function r(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);