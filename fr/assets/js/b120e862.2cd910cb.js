"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["75689"],{31262:function(e,i,r){r.r(i),r.d(i,{metadata:()=>t,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>n});var t=JSON.parse('{"id":"DebugDoc/BasicTutorial/usb_printing","title":"Impression via Cl\xe9 USB","description":"Ce tutoriel est uniquement applicable \xe0 l\'interface sup\xe9rieure FLY.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/BasicTutorial/usb_printing.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/usb_printing","permalink":"/fly-docs-next/fr/docs/DebugDoc/BasicTutorial/usb_printing","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/usb_printing.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"debugdocSidebar","previous":{"title":"Connexion r\xe9seau via SSH","permalink":"/fly-docs-next/fr/docs/DebugDoc/BasicTutorial/Internet"},"next":{"title":"Modification de la zone horaire du syst\xe8me","permalink":"/fly-docs-next/fr/docs/DebugDoc/BasicTutorial/timedatectl"}}'),s=r("52676"),l=r("79938");let n={sidebar_position:3},a="Impression via Cl\xe9 USB",c={},d=[{value:"M\xe9thode d&#39;utilisation",id:"m\xe9thode-dutilisation",level:2},{value:"M\xe9thode d&#39;impression via cl\xe9 USB",id:"m\xe9thode-dimpression-via-cl\xe9-usb",level:2},{value:"Sauvegarde et t\xe9l\xe9chargement de fichier",id:"sauvegarde-et-t\xe9l\xe9chargement-de-fichier",level:3},{value:"Cette \xe9tape restaure le fichier original",id:"cette-\xe9tape-restaure-le-fichier-original",level:3}];function o(e){let i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"impression-via-cl\xe9-usb",children:"Impression via Cl\xe9 USB"})}),"\n",(0,s.jsx)(i.p,{children:"Ce tutoriel est uniquement applicable \xe0 l'interface sup\xe9rieure FLY."}),"\n",(0,s.jsx)(i.admonition,{title:"\xc0 savoir",type:"danger",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Vous devez installer vous-m\xeame"}),"\n",(0,s.jsxs)(i.li,{children:["Ce tutoriel remplacera le fichier ",(0,s.jsx)(i.code,{children:"klipper/klippy/extras/virtual_sdcard.py"})," de Klipper."]}),"\n",(0,s.jsxs)(i.li,{children:["Il est possible d'imprimer un fichier s\xe9lectionn\xe9 dans la cl\xe9 USB apr\xe8s avoir automatiquement copi\xe9 les fichiers de la cl\xe9 USB vers le r\xe9pertoire syst\xe8me ",(0,s.jsx)(i.code,{children:"/tmp"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Apr\xe8s la copie, un message ",(0,s.jsx)(i.code,{children:"File selected"})," s'affichera dans la ligne de commande web."]}),"\n",(0,s.jsxs)(i.li,{children:["Ce fichier d\xe9tectera le dossier ",(0,s.jsx)(i.code,{children:"sdaX"}),", et s'il n'existe pas, il ne sera pas ex\xe9cut\xe9 (o\xf9 sdaX repr\xe9sente A-Z et 0-9)."]}),"\n",(0,s.jsx)(i.li,{children:"Actuellement, ce tutoriel a \xe9t\xe9 test\xe9 uniquement sur l'interface sup\xe9rieure FLY, d'autres interfaces sup\xe9rieures n'ont pas \xe9t\xe9 test\xe9es."}),"\n"]})}),"\n",(0,s.jsx)(i.h2,{id:"m\xe9thode-dutilisation",children:"M\xe9thode d'utilisation"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Utilisez un logiciel SSH pour vous connecter \xe0 l'interface sup\xe9rieure et ex\xe9cutez la commande ci-dessous"}),"\n",(0,s.jsx)(i.li,{children:"Veuillez noter que cette commande red\xe9marrera l'interface sup\xe9rieure !"}),"\n",(0,s.jsxs)(i.li,{children:["Cette \xe9tape active la fonction d'impression via cl\xe9 USB","\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"sudo rm -rf /etc/udev/rules.d/fly_devices.rules && sudo wget https://cdn.mellow.klipper.cn/Utils/fly_devices.rules -O /etc/udev/rules.d/fly_devices.rules > /dev/null 2>&1 && sudo chmod +x /etc/udev/rules.d/fly_devices.rules && sudo service udev restart && sudo reboot\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"m\xe9thode-dimpression-via-cl\xe9-usb",children:"M\xe9thode d'impression via cl\xe9 USB"}),"\n",(0,s.jsx)(i.h3,{id:"sauvegarde-et-t\xe9l\xe9chargement-de-fichier",children:"Sauvegarde et t\xe9l\xe9chargement de fichier"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Veuillez noter que cette commande arr\xeatera Klipper"}),"\n",(0,s.jsxs)(i.li,{children:["Cette \xe9tape active la fonction d'auto-copie des fichiers de la cl\xe9 USB vers le r\xe9pertoire syst\xe8me ",(0,s.jsx)(i.code,{children:"/tmp"})," lorsque vous s\xe9lectionnez un fichier u-disque","\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"sudo systemctl stop klipper && mv ~/klipper/klippy/extras/virtual_sdcard.py ~/virtual_sdcard.py && curl -kfsSL https://cdn.mellow.klipper.cn/firmware/virtual_sdcard.py -o ~/klipper/klippy/extras/virtual_sdcard.py && sudo systemctl restart klipper\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"cette-\xe9tape-restaure-le-fichier-original",children:"Cette \xe9tape restaure le fichier original"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Veuillez noter que cette commande restaure Klipper \xe0 son \xe9tat d'origine","\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"sudo systemctl stop klipper && mv ~/virtual_sdcard.py ~/klipper/klippy/extras/virtual_sdcard.py && sudo systemctl restart klipper\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},79938:function(e,i,r){r.d(i,{Z:function(){return a},a:function(){return n}});var t=r(75271);let s={},l=t.createContext(s);function n(e){let i=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);