"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["94866"],{40458:function(e,t,l){l.r(t),l.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>x,contentTitle:()=>d});var i=JSON.parse('{"id":"DebugDoc/BasicTutorial/timedatectl","title":"Modification de la zone horaire du syst\xe8me","description":"Veuillez noter que si vous utilisez FLY OS 3.3.4, l\'application sup\xe9rieure FLY peut utiliser directement FLY-Tools pour modifier la zone horaire.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/BasicTutorial/timedatectl.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/timedatectl","permalink":"/fly-docs-next/fr/docs/DebugDoc/BasicTutorial/timedatectl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/timedatectl.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"debugdocSidebar","previous":{"title":"Impression via Cl\xe9 USB","permalink":"/fly-docs-next/fr/docs/DebugDoc/BasicTutorial/usb_printing"},"next":{"title":"M\xe9thodes de configuration de sauvegarde de syst\xe8me","permalink":"/fly-docs-next/fr/docs/DebugDoc/BasicTutorial/backup"}}'),s=l("85893"),n=l("50065");let r={sidebar_position:4},d="Modification de la zone horaire du syst\xe8me",c={},x=[{value:"R\xe9gion Pacifique",id:"r\xe9gion-pacifique",level:2},{value:"Am\xe9rique",id:"am\xe9rique",level:2},{value:"Atlantique",id:"atlantique",level:2},{value:"Europe",id:"europe",level:2},{value:"Afrique",id:"afrique",level:2},{value:"Asie",id:"asie",level:2},{value:"Oc\xe9anie",id:"oc\xe9anie",level:2}];function a(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"modification-de-la-zone-horaire-du-syst\xe8me",children:"Modification de la zone horaire du syst\xe8me"})}),"\n",(0,s.jsx)(t.p,{children:"Veuillez noter que si vous utilisez FLY OS 3.3.4, l'application sup\xe9rieure FLY peut utiliser directement FLY-Tools pour modifier la zone horaire.\nPour les autres applications sup\xe9rieures, veuillez suivre les instructions ci-dessous."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo timedatectl set-timezone <TIMEZONE>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Remplacez ",(0,s.jsx)(t.code,{children:"<TIMEZONE>"})," par le code de la zone horaire que vous souhaitez utiliser. Vous pouvez rechercher le code de la zone horaire sur le site ",(0,s.jsx)(t.a,{href:"https://www.iana.org/time-zones",children:"iana.org"}),". Par exemple, si vous souhaitez changer la zone horaire du syst\xe8me en temps de Shanghai (Asia/Shanghai), vous pouvez entrer la commande suivante :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo timedatectl set-timezone Asia/Shanghai\n"})}),"\n",(0,s.jsx)(t.p,{children:"Maintenant, votre zone horaire syst\xe8me a \xe9t\xe9 modifi\xe9e avec succ\xe8s en temps de Shanghai. Vous pouvez v\xe9rifier la configuration de la zone horaire avec la commande suivante :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"date\n"})}),"\n",(0,s.jsx)(t.h2,{id:"r\xe9gion-pacifique",children:"R\xe9gion Pacifique"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Zone horaire"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Nom chinois"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Pacific/Majuro"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Majuro"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Pacific/Midway"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Midway"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Pacific/Honolulu"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Honolulu"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Pacific/Guam"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Guam"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Pacific/Auckland"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Auckland"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Pacific/Fiji"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Fiji"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Pacific/Tongatapu"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Tongatapu"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"am\xe9rique",children:"Am\xe9rique"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Zone horaire"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Nom chinois"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Anchorage"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Anchorage"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Los_Angeles"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure du Pacifique des \xc9tats-Unis (Los Angeles)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Tijuana"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure du Pacifique des \xc9tats-Unis (Tijuana)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Phoenix"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure montagneuse des \xc9tats-Unis (Phoenix)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Chihuahua"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Chihuahua"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Denver"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure montagneuse des \xc9tats-Unis (Denver)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Costa_Rica"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure centrale des \xc9tats-Unis (Costa Rica)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Chicago"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure centrale des \xc9tats-Unis (Chicago)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Mexico_City"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure centrale des \xc9tats-Unis (Mexique)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Regina"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure centrale des \xc9tats-Unis (R\xe9gina)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Bogota"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure de Colombie (Bogota)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/New_York"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure de l'Est des \xc9tats-Unis (New York)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Caracas"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure du Venezuela (Caracas)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Barbados"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure de l'Atlantique (Barbade)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Manaus"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure standard de l'Amazonie (Manaus)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Santiago"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Santiago"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/St_Johns"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure de Terre-Neuve (St John's)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Sao_Paulo"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Sao Paulo"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Argentina/Buenos_Aires"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Buenos Aires"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Godthab"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Godthab"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Montevideo"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure de l'Uruguay (Montevideo)"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"atlantique",children:"Atlantique"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Zone horaire"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Nom chinois"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aantic/South_Georgia"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"South Georgia"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aantic/Azores"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"A\xe7ores"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Aantic/Cape_Verde"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Cap-Vert"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Africa/Casablanca"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Casablanca"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"europe",children:"Europe"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Zone horaire"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Nom chinois"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/London"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure GMT (Londres)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Amsterdam"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure d'Europe centrale (Amsterdam)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Belgrade"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure d'Europe centrale (Belgrade)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Brussels"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure d'Europe centrale (Bruxelles)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Sarajevo"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure d'Europe centrale (Sarajevo)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Athens"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure d'Europe de l'Est (Ath\xe8nes)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Helsinki"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure d'Europe de l'Est (Helsinki)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Minsk"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Minsk"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Moscow"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Moscou"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"afrique",children:"Afrique"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Zone horaire"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Nom chinois"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Africa/Windhoek"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Windhoek"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Africa/Brazzaville"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure standard d'Afrique occidentale (Brazzaville)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Africa/Cairo"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure d'Europe de l'Est (Caire)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Africa/Harare"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure d'Afrique centrale (Harare)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Africa/Nairobi"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure d'Afrique de l'Est (Nairobi)"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"asie",children:"Asie"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Zone horaire"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Nom chinois"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Amman"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure d'Europe de l'Est (Amman)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Beirut"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure d'Europe de l'Est (Beyrouth)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Jerusalem"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure d'Isra\xebl (J\xe9rusalem)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Baghdad"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Bagdad"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Kuwait"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Kowe\xeft"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Tehran"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure standard de l'Iran (T\xe9h\xe9ran)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Baku"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Bakou"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Tbilisi"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Tbilissi"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Yerevan"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Erevan"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Dubai"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Duba\xef"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Kabul"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure d'Afghanistan (Kaboul)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Karachi"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Karachi"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Oral"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Oural"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Yekaterinburg"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Iekaterinbourg"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Calcutta"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Calcutta"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Colombo"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Colombo"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Katmandu"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure du N\xe9pal (Katmandou)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Almaty"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Almaty"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Rangoon"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure de Birmanie (Rangoun)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Krasnoyarsk"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Krasno\xefarsk"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Bangkok"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Bangkok"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Shanghai"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure standard de Chine (P\xe9kin)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Hong_Kong"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure de Hong Kong (Hong Kong)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Irkutsk"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure d'Irkoutsk (Irkoutsk)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Kuala_Lumpur"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Kuala Lumpur"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Australia/Perth"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Perth"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Taipei"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure de Taipei (Taipei)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Seoul"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"S\xe9oul"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Tokyo"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure du Japon (Tokyo)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Yakutsk"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure de Yakoutsk (Yakoutsk)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Vladivostok"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure de Vladivostok (Vladivostok)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Magadan"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Heure de Magadan (Magadan)"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"oc\xe9anie",children:"Oc\xe9anie"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Zone horaire"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Nom chinois"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Australia/Adelaide"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Adelaide"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Australia/Darwin"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Darwin"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Australia/Brisbane"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Brisbane"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Australia/Hobart"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Hobart"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Australia/Sydney"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Sydney"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return d},a:function(){return r}});var i=l(67294);let s={},n=i.createContext(s);function r(e){let t=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);