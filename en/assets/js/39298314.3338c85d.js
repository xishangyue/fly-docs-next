"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["14860"],{49490:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>o,default:()=>u,assets:()=>d,toc:()=>a,frontMatter:()=>r});var n=JSON.parse('{"id":"DebugDoc/BasicTutorial/usb_printing","title":"USB Drive Printing","description":"This tutorial is only applicable to the FLY host machine.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/DebugDoc/BasicTutorial/usb_printing.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/usb_printing","permalink":"/fly-docs-next/en/docs/DebugDoc/BasicTutorial/usb_printing","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/usb_printing.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"debugdocSidebar","previous":{"title":"Connecting to the Network via SSH","permalink":"/fly-docs-next/en/docs/DebugDoc/BasicTutorial/Internet"},"next":{"title":"Modify System Time Zone","permalink":"/fly-docs-next/en/docs/DebugDoc/BasicTutorial/timedatectl"}}'),s=i("52676"),l=i("79938");let r={sidebar_position:3},o="USB Drive Printing",d={},a=[{value:"Usage Method",id:"usage-method",level:2},{value:"USB Drive Printing Operation Method",id:"usb-drive-printing-operation-method",level:2},{value:"Backup and Download File",id:"backup-and-download-file",level:3},{value:"This step is to restore the original file",id:"this-step-is-to-restore-the-original-file",level:3}];function c(e){let t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"usb-drive-printing",children:"USB Drive Printing"})}),"\n",(0,s.jsx)(t.p,{children:"This tutorial is only applicable to the FLY host machine."}),"\n",(0,s.jsx)(t.admonition,{title:"Note",type:"danger",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"You need to install it yourself."}),"\n",(0,s.jsxs)(t.li,{children:["This tutorial will replace the ",(0,s.jsx)(t.code,{children:"klipper/klippy/extras/virtual_sdcard.py"})," file in Klipper."]}),"\n",(0,s.jsxs)(t.li,{children:["It can automatically copy files from the selected USB drive to the system's ",(0,s.jsx)(t.code,{children:"/tmp"})," directory."]}),"\n",(0,s.jsxs)(t.li,{children:["After copying, it will prompt ",(0,s.jsx)(t.code,{children:"File selected"})," in the web command line."]}),"\n",(0,s.jsxs)(t.li,{children:["This file will detect the ",(0,s.jsx)(t.code,{children:"sdaX"})," folder, and if it does not exist, it will not execute (where sdaX represents A-Z and 0-9)."]}),"\n",(0,s.jsx)(t.li,{children:"Currently, only the FLY host machine has been tested; other host machines have not been tested."}),"\n"]})}),"\n",(0,s.jsx)(t.h2,{id:"usage-method",children:"Usage Method"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Use SSH software to connect to the host machine and then execute the following command."}),"\n",(0,s.jsx)(t.li,{children:"Please note that this command will cause the host machine to restart!"}),"\n",(0,s.jsxs)(t.li,{children:["This step is to enable USB drive printing functionality.","\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo rm -rf /etc/udev/rules.d/fly_devices.rules && sudo wget https://cdn.mellow.klipper.cn/Utils/fly_devices.rules -O /etc/udev/rules.d/fly_devices.rules > /dev/null 2>&1 && sudo chmod +x /etc/udev/rules.d/fly_devices.rules && sudo service udev restart && sudo reboot\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"usb-drive-printing-operation-method",children:"USB Drive Printing Operation Method"}),"\n",(0,s.jsx)(t.h3,{id:"backup-and-download-file",children:"Backup and Download File"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Please note that this command will stop Klipper."}),"\n",(0,s.jsxs)(t.li,{children:["This step is to enable the automatic copying of USB drive files to the system's ",(0,s.jsx)(t.code,{children:"/tmp"})," directory when selecting a USB drive file.","\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo systemctl stop klipper && mv ~/klipper/klippy/extras/virtual_sdcard.py ~/virtual_sdcard.py && curl -kfsSL https://cdn.mellow.klipper.cn/firmware/virtual_sdcard.py -o ~/klipper/klippy/extras/virtual_sdcard.py && sudo systemctl restart klipper\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"this-step-is-to-restore-the-original-file",children:"This step is to restore the original file"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Please note that this command is to restore the original Klipper.","\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo systemctl stop klipper && mv ~/virtual_sdcard.py ~/klipper/klippy/extras/virtual_sdcard.py && sudo systemctl restart klipper\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},79938:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return r}});var n=i(75271);let s={},l=n.createContext(s);function r(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);