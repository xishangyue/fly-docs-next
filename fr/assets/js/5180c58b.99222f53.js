"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["40769"],{55937:function(e,r,n){n.r(r),n.d(r,{metadata:()=>i,contentTitle:()=>c,default:()=>d,assets:()=>u,toc:()=>s,frontMatter:()=>a});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/fan","title":"Connecteur de ventilateur 5V sur la carte m\xe8re","description":"La carte Gemini dispose d\'un connecteur 5V contr\xf4lable pour le refroidissement du contr\xf4leur principal, avec la m\xe9thode de c\xe2blage comme indiqu\xe9 ci-dessous","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/fan.mdx","sourceDirName":"ProductDoc/MainBoard/fly-gemini/fly-gemini-v3","slug":"/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/fan","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/fan","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/fan.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":11,"frontMatter":{"sidebar_position":11,"sidebar_label":"Ventilateur principal"},"sidebar":"tutorialSidebar","previous":{"title":"Guide d\'utilisation des pilotes externes","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/servo-drive"},"next":{"title":"Mod\xe8les 3D et sch\xe9mas \xe9lectriques","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/schematic"}}'),t=n("52676"),o=n("79938");let a={sidebar_position:11,sidebar_label:"Ventilateur principal"},c="Connecteur de ventilateur 5V sur la carte m\xe8re",u={},s=[{value:"La carte Gemini dispose d&#39;un connecteur 5V contr\xf4lable pour le refroidissement du contr\xf4leur principal, avec la m\xe9thode de c\xe2blage comme indiqu\xe9 ci-dessous",id:"la-carte-gemini-dispose-dun-connecteur-5v-contr\xf4lable-pour-le-refroidissement-du-contr\xf4leur-principal-avec-la-m\xe9thode-de-c\xe2blage-comme-indiqu\xe9-ci-dessous",level:2},{value:"Configuration de r\xe9f\xe9rence",id:"configuration-de-r\xe9f\xe9rence",level:2}];function l(e){let r={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,o.a)(),...e.components},{ImageView:i}=r;return!i&&function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"connecteur-de-ventilateur-5v-sur-la-carte-m\xe8re",children:"Connecteur de ventilateur 5V sur la carte m\xe8re"})}),"\n",(0,t.jsx)(r.h2,{id:"la-carte-gemini-dispose-dun-connecteur-5v-contr\xf4lable-pour-le-refroidissement-du-contr\xf4leur-principal-avec-la-m\xe9thode-de-c\xe2blage-comme-indiqu\xe9-ci-dessous",children:"La carte Gemini dispose d'un connecteur 5V contr\xf4lable pour le refroidissement du contr\xf4leur principal, avec la m\xe9thode de c\xe2blage comme indiqu\xe9 ci-dessous"}),"\n",(0,t.jsx)(i,{image:n(1285).Z,size:"80%",align:"center"}),"\n",(0,t.jsx)(r.h2,{id:"configuration-de-r\xe9f\xe9rence",children:"Configuration de r\xe9f\xe9rence"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cfg",children:"[mcu host]                      # FlyOS a g\xe9n\xe9r\xe9 automatiquement le MCU Linux pour vous, d\xe9finissez-le pour l'utiliser            \nserial: /tmp/klipper_host_mcu \n\n[temperature_sensor FLY-\u03C0]      # Temp\xe9rature du contr\xf4leur sup\xe9rieur\nsensor_type: temperature_host\n\n\n[temperature_fan core_fan]      # Ventilateur de refroidissement du contr\xf4leur sup\xe9rieur\npin: host:gpiochip1/gpio103     # Broche du ventilateur du contr\xf4leur sup\xe9rieur\nmax_power: 1.0\nsensor_type: temperature_host   # D\xe9fini comme temp\xe9rature du contr\xf4leur principal\ncontrol:watermark               # Mode de contr\xf4le\ntarget_temp: 48                 # Temp\xe9rature de d\xe9marrage du ventilateur de refroidissement du contr\xf4leur sup\xe9rieur\nmin_temp: 0                     # Temp\xe9rature minimale, une erreur se produira en dessous de cette valeur\nmax_temp: 90                    # Temp\xe9rature maximale, une erreur se produira au-del\xe0 de cette valeur\noff_below: 0.10\nkick_start_time: 0.50\nmax_speed: 0.8                  # Vitesse maximale, 80% de la puissance maximale\nmin_speed: 0.3                  # Vitesse minimale, 30% de la puissance maximale\n"})})]})}function d(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1285:function(e,r,n){n.d(r,{Z:function(){return i}});let i=n.p+"assets/images/corefan-a5bab708b71f9a950603838c633f71e9.webp"},79938:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return a}});var i=n(75271);let t={},o=i.createContext(t);function a(e){let r=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);