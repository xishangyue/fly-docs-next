"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["41810"],{39636:function(e,l,o){o.r(l),o.d(l,{metadata:()=>n,contentTitle:()=>s,default:()=>u,assets:()=>a,toc:()=>i,frontMatter:()=>d});var n=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/cfg","title":"klipper\u53C2\u8003\u914D\u7F6E","description":"* \u53C2\u8003\u914D\u7F6E","source":"@site/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/cfg.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl","slug":"/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/cfg","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1722235238000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"\u53C2\u8003\u914D\u7F6E"},"sidebar":"tutorialSidebar","previous":{"title":"Reading and Viewing Motherboard ID","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/read-id"},"next":{"title":"ADXL345","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/adxl345"}}'),r=o("52676"),t=o("79938");let d={sidebar_position:4,sidebar_label:"\u53C2\u8003\u914D\u7F6E"},s="klipper\u53C2\u8003\u914D\u7F6E",a={},i=[];function c(e){let l={code:"code",h1:"h1",header:"header",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.header,{children:(0,r.jsx)(l.h1,{id:"klipper\u53C2\u8003\u914D\u7F6E",children:"klipper\u53C2\u8003\u914D\u7F6E"})}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:"\u53C2\u8003\u914D\u7F6E"}),"\n"]}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-cfg",children:"[mcu adxl]\nserial: /dev/serial/by-id/usb-Klipper_rp2040_XXXXXXXXXXXXXXXXXXXXX\n### \u67E5\u8BE2usb\u56FA\u4EF6id\u662F\uFF1Als -l /dev/serial/by-id/\n### \u628A/dev/serial/by-id/usb-Klipper_rp2040_XXXXXXXXXXXXXXXXXXXXX\u66FF\u6362\u67E5\u8BE2\u5230\u7684id\n\n##ADXL345\u52A0\u901F\u5EA6\u8BA1\n[adxl345]\ncs_pin: adxl:gpio9\nspi_software_sclk_pin: adxl:gpio10\nspi_software_mosi_pin: adxl:gpio11\nspi_software_miso_pin: adxl:gpio12\n\n[resonance_tester]\naccel_chip: adxl345\nprobe_points:\n    100, 100, 20  # \u6B64\u5750\u6807\u4E3A\u4F60\u9700\u8981\u6D4B\u91CF\u7684\u4F4D\u7F6E\uFF0C\u4E00\u822C\u4E3A\u70ED\u5E8A\u4E2D\u95F4\n"})})]})}function u(e={}){let{wrapper:l}={...(0,t.a)(),...e.components};return l?(0,r.jsx)(l,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},79938:function(e,l,o){o.d(l,{Z:function(){return s},a:function(){return d}});var n=o(75271);let r={},t=n.createContext(r);function d(e){let l=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function s(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(t.Provider,{value:l},e.children)}}}]);