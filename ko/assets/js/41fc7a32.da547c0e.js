"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["31633"],{88218:function(n,e,i){i.r(e),i.d(e,{metadata:()=>r,contentTitle:()=>d,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>t});var r=JSON.parse('{"id":"ProductDoc/ExtensionBoard/bd-sensor/marlinpz","title":"Marlin\uC758 \uCDA9\uB3CC \uAC10\uC9C0","description":"\uC774 \uAE30\uB2A5\uC740 BD \uC13C\uC11C \uD38C\uC6E8\uC5B4 \uBC84\uC804(\uC13C\uC11C\uC758 \uD558\uB4DC\uC6E8\uC5B4 \uBC84\uC804\uC774 \uC544\uB2CC, M102 S-1\uC744 \uC804\uC1A1\uD558\uC5EC \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4)\uC774 V1.1b, V1.2b\uBCF4\uB2E4 \uD06C\uAC70\uB098 2024\uB144 3\uC6D4 \uC774\uD6C4\uC5D0 \uAD6C\uB9E4\uD55C \uAC83\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uB2E4\uBA74 \uC678\uBD80 \uD558\uB4DC\uC6E8\uC5B4 \uB3C4\uAD6C(STlink \uB4F1)\uB97C \uC0AC\uC6A9\uD558\uC5EC BD \uC13C\uC11C\uC5D0 \uD38C\uC6E8\uC5B4\uB97C \uD50C\uB798\uC2DC\uD574\uC57C \uD569\uB2C8\uB2E4.","source":"@site/i18n/ko/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/bd-sensor/marlinpz.mdx","sourceDirName":"ProductDoc/ExtensionBoard/bd-sensor","slug":"/ProductDoc/ExtensionBoard/bd-sensor/marlinpz","permalink":"/fly-docs-next/ko/docs/ProductDoc/ExtensionBoard/bd-sensor/marlinpz","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/bd-sensor/marlinpz.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"Marlin \uC790\uB3D9 Z-OFFSET"},"sidebar":"tutorialSidebar","previous":{"title":"klipper \uC790\uB3D9 Z-OFFSET","permalink":"/fly-docs-next/ko/docs/ProductDoc/ExtensionBoard/bd-sensor/klipperpz"},"next":{"title":"AirClick \uD83D\uDD25","permalink":"/fly-docs-next/ko/docs/category/airclick-"}}'),s=i("52676"),o=i("79938");let t={sidebar_position:4,sidebar_label:"Marlin \uC790\uB3D9 Z-OFFSET"},d="Marlin\uC758 \uCDA9\uB3CC \uAC10\uC9C0",l={},c=[];function a(n){let e={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components},{Button:i}=e;return!i&&function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Button",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"marlin\uC758-\uCDA9\uB3CC-\uAC10\uC9C0",children:"Marlin\uC758 \uCDA9\uB3CC \uAC10\uC9C0"})}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsx)(e.p,{children:"\uC774 \uAE30\uB2A5\uC740 BD \uC13C\uC11C \uD38C\uC6E8\uC5B4 \uBC84\uC804(\uC13C\uC11C\uC758 \uD558\uB4DC\uC6E8\uC5B4 \uBC84\uC804\uC774 \uC544\uB2CC, M102 S-1\uC744 \uC804\uC1A1\uD558\uC5EC \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4)\uC774 V1.1b, V1.2b\uBCF4\uB2E4 \uD06C\uAC70\uB098 2024\uB144 3\uC6D4 \uC774\uD6C4\uC5D0 \uAD6C\uB9E4\uD55C \uAC83\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uB2E4\uBA74 \uC678\uBD80 \uD558\uB4DC\uC6E8\uC5B4 \uB3C4\uAD6C(STlink \uB4F1)\uB97C \uC0AC\uC6A9\uD558\uC5EC BD \uC13C\uC11C\uC5D0 \uD38C\uC6E8\uC5B4\uB97C \uD50C\uB798\uC2DC\uD574\uC57C \uD569\uB2C8\uB2E4."})}),"\n",(0,s.jsx)(e.h1,{id:"\uC791\uB3D9-\uC6D0\uB9AC",children:"\uC791\uB3D9 \uC6D0\uB9AC"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"G28\uC744 \uC2E4\uD589\uD560 \uB54C \uC790\uB3D9\uC73C\uB85C Z\uCD95 \uC624\uD504\uC14B \uBCF4\uC815\uC744 \uC218\uD589\uD569\uB2C8\uB2E4: \uD504\uB9B0\uD130\uAC00 \uAC00\uB3D9 \uC704\uCE58\uC5D0 \uB3C4\uB2EC\uD558\uBA74(\uB178\uC990\uC774 \uD50C\uB7AB\uD3FC\uC5D0 \uB2FF\uC740 \uD6C4) \uCC9C\uCC9C\uD788 \uC704\uB85C \uC774\uB3D9\uD558\uC5EC \uB178\uC990\uC774 \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uC57D\uAC04 \uB5A0\uB0A0 \uB54C\uAE4C\uC9C0 \uC774\uB3D9\uD558\uACE0, \uC774 \uC704\uCE58\uB97C Z\uCD95\uC758 0\uC810\uC73C\uB85C \uC124\uC815\uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"\uC774\uC810",children:"\uC774\uC810"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\uC790\uB3D9 Z\uCD95 \uC624\uD504\uC14B \uBCF4\uC815."}),"\n",(0,s.jsx)(e.li,{children:"\uC5EC\uC804\uD788 \uB2E4\uC591\uD55C \uD544\uB77C\uBA58\uD2B8\uC5D0 \uB300\uD574 \uC218\uB3D9\uC73C\uB85C Z\uCD95 \uC624\uD504\uC14B\uC744 \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n",(0,s.jsx)(e.li,{children:"\uC628\uB3C4 \uBCC0\uD654\uC5D0 \uB300\uD55C \uC601\uD5A5\uC744 \uC904\uC785\uB2C8\uB2E4."}),"\n",(0,s.jsx)(e.li,{children:"\uC628\uB3C4 \uBCC0\uD654\uB294 Z\uCD95 \uC624\uD504\uC14B\uC744 \uBCC0\uACBD\uD558\uC9C0\uB9CC, BD \uC13C\uC11C\uB97C \uC0AC\uC6A9\uD558\uB294 \uCE68\uB300 \uBA54\uC26C \uB192\uC774 \uB9F5\uC758 \uBC94\uC704\uB294 \uBCC0\uACBD\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC989, \uC628\uB3C4\uAC00 \uB2E4\uB974\uB354\uB77C\uB3C4 \uCE68\uB300 \uBA54\uC26C\uB294 \uB3D9\uC77C\uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{title:"\uD301",type:"info",children:(0,s.jsxs)(e.p,{children:["\uC774 \uAE30\uB2A5\uC758 \uCF54\uB4DC\uB294 \uACF5\uC2DD Marlin GitHub\uC758 \uD480 \uB9AC\uD018\uC2A4\uD2B8 \uBAA9\uB85D\uC5D0 \uC788\uC2B5\uB2C8\uB2E4: ",(0,s.jsx)(e.a,{href:"https://github.com/MarlinFirmware/Marlin/pull/27243",children:"https://github.com/MarlinFirmware/Marlin/pull/27243"}),"\n\uB530\uB77C\uC11C \uB2E4\uC74C Marlin \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4: ",(0,s.jsx)(e.a,{href:"https://github.com/markniu/MarlinPULL/tree/bugfix-2.1.x",children:"https://github.com/markniu/MarlinPULL/tree/bugfix-2.1.x"})]})}),"\n",(0,s.jsx)(e.h1,{id:"\uC0AC\uC6A9-\uBC29\uBC95",children:"\uC0AC\uC6A9 \uBC29\uBC95"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"BD_SENSOR"}),"\uC744 \uD65C\uC131\uD654\uD558\uACE0 ",(0,s.jsx)(e.code,{children:"configuration.h"}),"\uC5D0\uC11C ",(0,s.jsx)(e.code,{children:"#define BD_SENSOR_CONTACT_PROBE"}),"\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\n\uB2E4\uC74C\uACFC \uAC19\uC774 \uD45C\uC2DC\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"#define BD_SENSOR\n#if ENABLED(BD_SENSOR)\n  #define BD_SENSOR_PROBE_NO_STOP // \uAC01 \uD504\uB85C\uBE0C \uD3EC\uC778\uD2B8\uC5D0\uC11C \uC815\uC9C0\uD558\uC9C0 \uC54A\uACE0 \uCE68\uB300\uB97C \uD504\uB85C\uBE0C\uD569\uB2C8\uB2E4\n  #define BD_SENSOR_CONTACT_PROBE // \uB178\uC990 \uCDA9\uB3CC \uAC10\uC9C0\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD648 \uC911\uC5D0 \uD504\uB85C\uBE0C\uD569\uB2C8\uB2E4\n#endif\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"configuration.h"}),"\uC5D0\uC11C \uD504\uB85C\uBE0C \uC18D\uB3C4\uB97C \uB192\uC785\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\uBBFC\uAC10\uB3C4\uB294 \uC18D\uB3C4\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4. \uB530\uB77C\uC11C Z\uCD95\uC758 \uC18D\uB3C4\uB97C \uC870\uC815\uD574\uC57C \uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"homing_speed"}),"(\uD648 \uC18D\uB3C4)\uC640 ",(0,s.jsx)(e.code,{children:"second_homing_speed"}),"(\uB450 \uBC88\uC9F8 \uD648 \uC18D\uB3C4)\uB294 3\uC5D0\uC11C 10 \uC0AC\uC774\uC5EC\uC57C \uD558\uBA70, \uC5EC\uAE30\uC11C Z\uCD95 \uD504\uB85C\uBE0C \uC9C4\uAE09 \uC18D\uB3C4\uC785\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\uC608:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:" #define Z_PROBE_FEEDRATE_FAST  (5*60)\n #define Z_PROBE_FEEDRATE_SLOW  (5*60)\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Configuration_adv.h"}),"\uC5D0\uC11C Z\uCD95\uC758 \uD648 \uC0C1\uC2B9\uC744 4mm\uBCF4\uB2E4 \uD06C\uAC8C \uC99D\uAC00\uC2DC\uD0B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"#define HOMING_BUMP_MM      { 5, 5, 5 }\n"})}),"\n",(0,s.jsx)(e.h1,{id:"\uD648-\uD14C\uC2A4\uD2B8",children:"\uD648 \uD14C\uC2A4\uD2B8"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"G28 Z"})," \uBA85\uB839\uBB38\uC744 \uC57D 10\uBC88 \uBCF4\uB0B4\uAC70\uB098 ",(0,s.jsx)(e.code,{children:"M48"})," \uBA85\uB839\uBB38\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC548\uC815\uC131\uC744 \uD655\uC778\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,s.jsx)(i,{variant:"contained",disableElevation:!0,href:"https://www.youtube.com/watch?v=DzmGyJNS9bY",children:"\uB370\uBAA8 \uBE44\uB514\uC624"})]})}function h(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},79938:function(n,e,i){i.d(e,{Z:function(){return d},a:function(){return t}});var r=i(75271);let s={},o=r.createContext(s);function t(n){let e=r.useContext(o);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);