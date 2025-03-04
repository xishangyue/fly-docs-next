"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["49025"],{50776:function(e,s,r){r.r(s),r.d(s,{metadata:()=>t,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>n});var t=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sht36/sht36_pro/spi","title":"Impossible d\'utiliser le pilote 5160 sur la carte m\xe8re","description":"Raisons sp\xe9cifiques","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sht36/sht36_pro/spi.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sht36/sht36_pro","slug":"/ProductDoc/ToolBoard/fly-sht36/sht36_pro/spi","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/spi","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/spi.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8,"sidebar_label":"M\xe9thodes de r\xe9solution pour les probl\xe8mes d\'utilisation de SPI"},"sidebar":"tutorialSidebar","previous":{"title":"Mod\xe8les 3D et sch\xe9mas \xe9lectriques","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/schematic"},"next":{"title":"FLY-SHT36-LIS3DH","permalink":"/fly-docs-next/fr/docs/category/fly-sht36-lis3dh"}}'),o=r("52676"),i=r("79938");let n={sidebar_position:8,sidebar_label:"M\xe9thodes de r\xe9solution pour les probl\xe8mes d'utilisation de SPI"},l="Impossible d'utiliser le pilote 5160 sur la carte m\xe8re",c={},d=[{value:"Raisons sp\xe9cifiques",id:"raisons-sp\xe9cifiques",level:2},{value:"M\xe9thodes de r\xe9solution",id:"m\xe9thodes-de-r\xe9solution",level:2}];function a(e){let s={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"impossible-dutiliser-le-pilote-5160-sur-la-carte-m\xe8re",children:"Impossible d'utiliser le pilote 5160 sur la carte m\xe8re"})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"Unable to write tmc spi 'extruder' register IHOLD_IRUN\n"})}),"\n",(0,o.jsx)(s.h2,{id:"raisons-sp\xe9cifiques",children:"Raisons sp\xe9cifiques"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Si vous utilisez 5160, vous obtiendrez une erreur ci-dessous en raison du probl\xe8me de la cha\xeene d'outils Arm ",(0,o.jsx)(s.code,{children:"arm-none-eabi-gcc"})]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"m\xe9thodes-de-r\xe9solution",children:"M\xe9thodes de r\xe9solution"}),"\n",(0,o.jsx)(s.p,{children:"Il existe trois m\xe9thodes de r\xe9solution"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Changer la cha\xeene d'outils ",(0,o.jsx)(s.code,{children:"arm-none-eabi-gcc"})," de ",(0,o.jsx)(s.code,{children:"gcc10"})," \xe0 ",(0,o.jsx)(s.code,{children:"gcc8"})]}),"\n",(0,o.jsx)(s.li,{children:"Changer le syst\xe8me de l'ordinateur principal"}),"\n",(0,o.jsx)(s.li,{children:"\xc9crire un firmware correct"}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"T\xe9l\xe9charger et graver le firmware, veuillez noter que le panneau de commande doit \xeatre connect\xe9 normalement au CAN et doit disposer de CANBOOT"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"T\xe9l\xe9charger"}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"cd ~/ && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Graver"}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"python3 ~/klipper/lib/canboot/flash_can.py -f ~/FLY_Katapult/Klipper/SHT36PRO/SHT36PRO_KLIPPER_CAN-1M_v0.12.0-229-g589bd64c.bin -u <SHT36PRO_canid>\n"})})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},79938:function(e,s,r){r.d(s,{Z:function(){return l},a:function(){return n}});var t=r(75271);let o={},i=t.createContext(o);function n(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);