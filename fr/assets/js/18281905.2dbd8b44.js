"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["11613"],{53285:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>t,default:()=>u,assets:()=>d,toc:()=>o,frontMatter:()=>c});var i=JSON.parse('{"id":"DebugDoc/faq/klipper-err","title":"Messages d\'erreur courants","description":"mcu \'xxx\': Impossible de se connecter","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/faq/klipper-err.mdx","sourceDirName":"DebugDoc/faq","slug":"/DebugDoc/faq/klipper-err","permalink":"/fly-docs-next/fr/docs/DebugDoc/faq/klipper-err","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/faq/klipper-err.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"debugdocSidebar","previous":{"title":"Klipper \u5E38\u89C1\u95EE\u9898","permalink":"/fly-docs-next/fr/docs/category/klipper-\u5E38\u89C1\u95EE\u9898"},"next":{"title":"Instructions de d\xe9bogage courantes","permalink":"/fly-docs-next/fr/docs/DebugDoc/faq/klipper-directives"}}'),s=r("52676"),l=r("79938");let c={sidebar_position:1},t="Messages d'erreur courants",d={},o=[{value:"mcu &#39;xxx&#39;: Impossible de se connecter",id:"mcu-xxx-impossible-de-se-connecter",level:2},{value:"mcu &#39;mcu&#39;: UUID CAN invalide",id:"mcu-mcu-uuid-can-invalide",level:2},{value:"L&#39;option &#39;serial&#39; dans la section &#39;mcu&#39; doit \xeatre sp\xe9cifi\xe9e",id:"loption-serial-dans-la-section-mcu-doit-\xeatre-sp\xe9cifi\xe9e",level:2},{value:"La m\xe9thode de surcharge de retour \xe0 l&#39;origine positionne toujours X et Y avant de positionner Z. Le safe_z_home",id:"la-m\xe9thode-de-surcharge-de-retour-\xe0-lorigine-positionne-toujours-x-et-y-avant-de-positionner-z-le-safe_z_home",level:2},{value:"Erreur &#39;XXX &#39;mcu&#39; shutdown: ADC hors de port\xe9e\u2026.",id:"erreur-xxx-mcu-shutdown-adc-hors-de-port\xe9e",level:2},{value:"MCU &#39;mcu&#39; shutdown: Timer trop proche",id:"mcu-mcu-shutdown-timer-trop-proche",level:2},{value:"Sur Raspberry Pi, vous pouvez utiliser cette m\xe9thode",id:"sur-raspberry-pi-vous-pouvez-utiliser-cette-m\xe9thode",level:3},{value:"D\xe9lai de communication pendant la sonde de retour \xe0 l&#39;origine",id:"d\xe9lai-de-communication-pendant-la-sonde-de-retour-\xe0-lorigine",level:2}];function a(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components},{ImageView:i}=n;return!i&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"messages-derreur-courants",children:"Messages d'erreur courants"})}),"\n",(0,s.jsx)(n.h2,{id:"mcu-xxx-impossible-de-se-connecter",children:"mcu 'xxx': Impossible de se connecter"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Message d'erreur"})}),"\n",(0,s.jsx)(i,{image:r(53052).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Raison de l'erreur"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"L'ordinateur h\xf4te ne peut pas trouver et se connecter \xe0 la carte m\xe8re"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"M\xe9thode de r\xe9solution"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Consulter le fichier Klippy.log jusqu'\xe0 la fin"}),"\n",(0,s.jsxs)(n.li,{children:["Si ",(0,s.jsx)(n.code,{children:"[Errno 2]"})," appara\xeet, cela signifie qu'aucun ID de recherche n'a \xe9t\xe9 ajout\xe9 dans ",(0,s.jsx)(n.strong,{children:"printer.cfg"})]}),"\n"]}),"\n",(0,s.jsx)(i,{image:r(29645).Z,size:"80%",align:"center"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si ",(0,s.jsx)(n.strong,{children:"serialhdl.error: mcu 'xxx': Serial connection closed"})," appara\xeet, cela signifie que l'ID CAN n'a pas \xe9t\xe9 trouv\xe9 ou a \xe9t\xe9 mal saisi, il faut rechercher et ajouter l'ID"]}),"\n"]}),"\n",(0,s.jsx)(i,{image:r(24958).Z,size:"80%",align:"center"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si ",(0,s.jsx)(n.strong,{children:"mcu 'mcu': Impossible d'ouvrir le port CAN: [Errno 19] Aucun tel p\xe9riph\xe9rique"})," appara\xeet, cela signifie qu'il n'y a pas de ",(0,s.jsx)(n.strong,{children:"UOTC ou qu'une carte m\xe8re avec pont CAN a \xe9t\xe9 flash\xe9e"})]}),"\n"]}),"\n",(0,s.jsx)(i,{image:r(67837).Z,size:"80%",align:"center"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Si ",(0,s.jsx)(n.strong,{children:"mcu 'mcu': Impossible d'ouvrir le port CAN: \xc9chec de la transmission: [Errno 100] Le r\xe9seau est en panne"})," appara\xeet, cela signifie que ",(0,s.jsx)(n.strong,{children:"le r\xe9seau CAN n'est pas configur\xe9 ou que CAN0 n'est pas lanc\xe9"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Si ",(0,s.jsx)(n.strong,{children:"mcu 'mcu': Impossible d'ouvrir le port CAN: \xc9chec de la transmission: [Errno 105] Le r\xe9seau est en panne"})," appara\xeet, cela signifie que ",(0,s.jsx)(n.strong,{children:"la m\xe9moire tampon du r\xe9seau CAN est trop petite"}),", pour r\xe9soudre cela, augmenter la taille de la m\xe9moire tampon"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Si ",(0,s.jsx)(n.code,{children:"[Errno 105] Le r\xe9seau est en panne"})," ou ",(0,s.jsx)(n.code,{children:"[Errno 100] Le r\xe9seau est en panne"})," appara\xeet, consultez la documentation ici : ",(0,s.jsx)(n.a,{href:"/docs/DebugDoc/faq/klipper_can.mdx",title:"Cliquez pour acc\xe9der",children:"Configuration CAN"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"mcu-mcu-uuid-can-invalide",children:"mcu 'mcu': UUID CAN invalide"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Message d'erreur"})}),"\n",(0,s.jsx)(i,{image:r(24958).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Raison de l'erreur"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"L'ID CAN n'a pas \xe9t\xe9 saisi ou a \xe9t\xe9 mal saisi"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"M\xe9thode de r\xe9solution"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Il est n\xe9cessaire de rechercher et d'ajouter l'ID"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"loption-serial-dans-la-section-mcu-doit-\xeatre-sp\xe9cifi\xe9e",children:"L'option 'serial' dans la section 'mcu' doit \xeatre sp\xe9cifi\xe9e"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Message d'erreur"})}),"\n",(0,s.jsx)(i,{image:r(80898).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Raison de l'erreur"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"L'ID USB n'a pas \xe9t\xe9 saisi ou a \xe9t\xe9 mal saisi"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"M\xe9thode de r\xe9solution"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Il est n\xe9cessaire de rechercher et d'ajouter l'ID"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"la-m\xe9thode-de-surcharge-de-retour-\xe0-lorigine-positionne-toujours-x-et-y-avant-de-positionner-z-le-safe_z_home",children:"La m\xe9thode de surcharge de retour \xe0 l'origine positionne toujours X et Y avant de positionner Z. Le safe_z_home"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Message d'erreur"})}),"\n",(0,s.jsx)(i,{image:r(30895).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Raison de l'erreur"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Configuration redondante de ",(0,s.jsx)(n.code,{children:"[safe_z_home]"})," et ",(0,s.jsx)(n.code,{children:"[homing_override]"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"M\xe9thode de r\xe9solution"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Il suffit de configurer l'une des deux sections, supprimer l'autre"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"erreur-xxx-mcu-shutdown-adc-hors-de-port\xe9e",children:"Erreur 'XXX 'mcu' shutdown: ADC hors de port\xe9e\u2026."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Message d'erreur"})}),"\n",(0,s.jsx)(i,{image:r(37395).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Raison de l'erreur"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Klipper d\xe9tecte que la temp\xe9rature d\xe9passe la valeur maximale ou minimale (la thermistance pourrait \xeatre en court-circuit ou ouverte), le syst\xe8me entre en mode de protection par arr\xeat."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"M\xe9thode de r\xe9solution"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Dans la configuration, recherchez ",(0,s.jsx)(n.code,{children:"min_temp:"})," et changez la temp\xe9rature minimale \xe0 -235"]}),"\n",(0,s.jsxs)(n.li,{children:["Dans la configuration, recherchez ",(0,s.jsx)(n.code,{children:"max_temp:"})," et changez la temp\xe9rature maximale \xe0 99999999"]}),"\n",(0,s.jsx)(n.li,{children:"V\xe9rifiez le mod\xe8le de la thermistance"}),"\n",(0,s.jsx)(n.li,{children:"V\xe9rifiez la broche Pin de la thermistance"}),"\n",(0,s.jsx)(n.li,{children:"V\xe9rifiez si la thermistance est en court-circuit"}),"\n",(0,s.jsx)(n.li,{children:"Une fois le probl\xe8me d\xe9termin\xe9 et r\xe9solu, revenir aux temp\xe9ratures d'origine"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"mcu-mcu-shutdown-timer-trop-proche",children:"MCU 'mcu' shutdown: Timer trop proche"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Message d'erreur"})}),"\n",(0,s.jsx)(i,{image:r(35547).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Raison de l'erreur"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Principalement d\xfb \xe0 une surcharge de la machine de bas niveau ou \xe0 un d\xe9lai d'attente de la machine de haut niveau"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"M\xe9thode de r\xe9solution"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"R\xe9duire la subdivision"}),"\n",(0,s.jsx)(n.li,{children:"R\xe9duire la vitesse d'impression"}),"\n",(0,s.jsx)(n.li,{children:"Reflasher le syst\xe8me de la machine de haut niveau et reflasher le firmware"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sur-raspberry-pi-vous-pouvez-utiliser-cette-m\xe9thode",children:"Sur Raspberry Pi, vous pouvez utiliser cette m\xe9thode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'sudo timedatectl status | grep "NTP service" \nsudo timedatectl set-ntp false\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"V\xe9rifier l'\xe9tat du service NTP"}),"\n",(0,s.jsx)(n.li,{children:"D\xe9sactiver la synchronisation NTP"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"d\xe9lai-de-communication-pendant-la-sonde-de-retour-\xe0-lorigine",children:"D\xe9lai de communication pendant la sonde de retour \xe0 l'origine"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Message d'erreur"})}),"\n",(0,s.jsx)(n.p,{children:"Aucune image pour le moment"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Raison de l'erreur"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Probablement d\xfb \xe0 l'utilisation simultan\xe9e du service CAN et de l'\xe9cran"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"M\xe9thode de r\xe9solution"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Connectez-vous \xe0 la machine de haut niveau via SSH par le r\xe9seau et ex\xe9cutez le code ci-dessous"}),"\n",(0,s.jsx)(n.li,{children:"Si Klipper est mis \xe0 jour, cela sera automatiquement restaur\xe9"}),"\n",(0,s.jsx)(n.li,{children:"Ne pas ex\xe9cuter pendant une impression"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sed -i 's/TRSYNC_TIMEOUT = 0.025/TRSYNC_TIMEOUT = 0.05/g' ~/klipper/klippy/mcu.py && sudo systemctl restart klipper\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},37395:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/adc-626733245b59820c1697e09e7450aa71.webp"},53052:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/cannot_connect-40d45773cc215ca69ce43db5b1d8d263.webp"},67837:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/errno19-5e4ecddfb066959fd6580fb8664db518.webp"},29645:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/errno2-3520d3567ab440e1b73b844526686fc0.webp"},30895:function(e,n,r){r.d(n,{Z:function(){return i}});let i="data:image/webp;base64,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"},24958:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/lnvalid_can_uuid-7f477079d63c529075129fc6fa18fd78.webp"},80898:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/serial-ddae3c88819328a0ea09661c1b9c4bfa.webp"},35547:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/ttc-6c5fac3487fa6c7885a3325bc3cdc81a.webp"},79938:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return c}});var i=r(75271);let s={},l=i.createContext(s);function c(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);