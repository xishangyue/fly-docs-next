"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["7278"],{49576:function(e,r,n){n.r(r),n.d(r,{default:()=>d,frontMatter:()=>a,metadata:()=>t,assets:()=>u,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"ProductDoc/SBC/fly-pi-v2/fan","title":"Entr\xe9e de ventilateur 5V embarqu\xe9e","description":"La carte Pi-V2 embarque une interface contr\xf4lable de 5V pour le refroidissement du contr\xf4leur principal, avec la m\xe9thode de c\xe2blage comme indiqu\xe9 ci-dessous","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/SBC/fly-pi-v2/fan.mdx","sourceDirName":"ProductDoc/SBC/fly-pi-v2","slug":"/ProductDoc/SBC/fly-pi-v2/fan","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-pi-v2/fan","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-pi-v2/fan.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8,"sidebar_label":"Entr\xe9e de ventilateur 5V embarqu\xe9e"},"sidebar":"tutorialSidebar","previous":{"title":"Connexion et configuration de l\'\xe9cran","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-pi-v2/screen"},"next":{"title":"Utilisation de l\'UTOC int\xe9gr\xe9","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-pi-v2/utoc"}}'),i=n("85893"),o=n("50065");let a={sidebar_position:8,sidebar_label:"Entr\xe9e de ventilateur 5V embarqu\xe9e"},c="Entr\xe9e de ventilateur 5V embarqu\xe9e",u={},l=[{value:"La carte Pi-V2 embarque une interface contr\xf4lable de 5V pour le refroidissement du contr\xf4leur principal, avec la m\xe9thode de c\xe2blage comme indiqu\xe9 ci-dessous",id:"la-carte-pi-v2-embarque-une-interface-contr\xf4lable-de-5v-pour-le-refroidissement-du-contr\xf4leur-principal-avec-la-m\xe9thode-de-c\xe2blage-comme-indiqu\xe9-ci-dessous",level:2},{value:"Configuration de r\xe9f\xe9rence",id:"configuration-de-r\xe9f\xe9rence",level:2}];function s(e){let r={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,o.a)(),...e.components},{ImageView:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"entr\xe9e-de-ventilateur-5v-embarqu\xe9e",children:"Entr\xe9e de ventilateur 5V embarqu\xe9e"})}),"\n",(0,i.jsx)(r.h2,{id:"la-carte-pi-v2-embarque-une-interface-contr\xf4lable-de-5v-pour-le-refroidissement-du-contr\xf4leur-principal-avec-la-m\xe9thode-de-c\xe2blage-comme-indiqu\xe9-ci-dessous",children:"La carte Pi-V2 embarque une interface contr\xf4lable de 5V pour le refroidissement du contr\xf4leur principal, avec la m\xe9thode de c\xe2blage comme indiqu\xe9 ci-dessous"}),"\n",(0,i.jsx)(t,{image:n(20880).Z,size:"80%",align:"left"}),"\n",(0,i.jsx)(r.h2,{id:"configuration-de-r\xe9f\xe9rence",children:"Configuration de r\xe9f\xe9rence"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-cfg",children:"[mcu host]                      # FlyOS a g\xe9n\xe9r\xe9 par d\xe9faut votre linux MCU, d\xe9finissez-le pour l'utiliser           \nserial: /tmp/klipper_host_mcu \n\n[temperature_sensor FLY-\u03C0]      # Temp\xe9rature du contr\xf4leur sup\xe9rieur\nsensor_type: temperature_host\n\n\n[temperature_fan core_fan]      # Ventilateur de refroidissement du contr\xf4leur sup\xe9rieur\npin: host:gpiochip1/gpio103     # Broche du ventilateur du contr\xf4leur sup\xe9rieur\nmax_power: 1.0\nsensor_type: temperature_host   # D\xe9finir comme temp\xe9rature du contr\xf4leur principal\ncontrol:watermark               # Mode de contr\xf4le\ntarget_temp: 48                 # Temp\xe9rature de d\xe9marrage du ventilateur de refroidissement du contr\xf4leur sup\xe9rieur\nmin_temp: 0                     # Temp\xe9rature minimale, une erreur sera signal\xe9e si elle est inf\xe9rieure \xe0 celle-ci\nmax_temp: 90                    # Temp\xe9rature maximale, une erreur sera signal\xe9e si elle est sup\xe9rieure \xe0 celle-ci\noff_below: 0.10\nkick_start_time: 0.50\nmax_speed: 0.8                  # Vitesse maximale, correspondant \xe0 80% de la puissance pleine\nmin_speed: 0.3                  # Vitesse minimale, correspondant \xe0 30% de la puissance pleine\n"})})]})}function d(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},20880:function(e,r,n){n.d(r,{Z:function(){return t}});let t=n.p+"assets/images/fan-b61d25d6d3e941eac302ee1cd735f301.webp"},50065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return a}});var t=n(67294);let i={},o=t.createContext(i);function a(e){let r=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);