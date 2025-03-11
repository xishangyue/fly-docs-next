"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["14456"],{4441:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>d,default:()=>x,assets:()=>c,toc:()=>o,frontMatter:()=>r});var i=JSON.parse('{"id":"DebugDoc/flyos-fast/config","title":"System Configuration Modification","description":"- The settings in the part of the configuration file will only take effect on the first system boot after burning.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/DebugDoc/flyos-fast/config.mdx","sourceDirName":"DebugDoc/flyos-fast","slug":"/DebugDoc/flyos-fast/config","permalink":"/fly-docs-next/en/docs/DebugDoc/flyos-fast/config","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/flyos-fast/config.mdx","tags":[],"version":"current","lastUpdatedBy":"kluoyun","lastUpdatedAt":1741655692000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"debugdocSidebar","previous":{"title":"System Image Burning","permalink":"/fly-docs-next/en/docs/DebugDoc/flyos-fast/flash"},"next":{"title":"Power Loss Resume Function for Klipper","permalink":"/fly-docs-next/en/docs/DebugDoc/flyos-fast/plr"}}'),l=n("52676"),s=n("79938");let r={sidebar_position:3},d="System Configuration Modification",c={},o=[{value:"How to Modify the Configuration File",id:"how-to-modify-the-configuration-file",level:2},{value:"Modifying the Configuration File After Burning",id:"modifying-the-configuration-file-after-burning",level:3},{value:"Online Configuration Modification While the System is Running",id:"online-configuration-modification-while-the-system-is-running",level:3},{value:"Configuration Items",id:"configuration-items",level:2},{value:"Wireless Network Configuration",id:"wireless-network-configuration",level:3},{value:"Printer Default Configuration",id:"printer-default-configuration",level:3},{value:"System Configuration",id:"system-configuration",level:3},{value:"Printer Type Configuration",id:"printer-type-configuration",level:3},{value:"Display Configuration",id:"display-configuration",level:3},{value:"Klipper Related Configuration",id:"klipper-related-configuration",level:3},{value:"RRF Related Configuration",id:"rrf-related-configuration",level:3},{value:"Other Settings",id:"other-settings",level:3}];function h(e){let t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{ImageView:i}=t;return!i&&function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"system-configuration-modification",children:"System Configuration Modification"})}),"\n",(0,l.jsx)(t.admonition,{title:"Important",type:"tip",children:(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["The settings in the ",(0,l.jsx)(t.code,{children:"part"})," of the configuration file will only take effect on the first system boot after burning."]}),"\n",(0,l.jsxs)(t.li,{children:["Therefore, please modify the configuration file ",(0,l.jsx)(t.code,{children:"config.txt"})," in the removable disk ",(0,l.jsx)(t.code,{children:"FlyOS-Conf"})," after burning, before inserting the card into the board to start the system."]}),"\n"]})}),"\n",(0,l.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Try not to use the built-in Notepad of Windows to edit the configuration file; you can use VSCode or other professional text editors."}),"\n",(0,l.jsx)(t.li,{children:"It is best not to input Chinese or special characters in the configuration file."}),"\n",(0,l.jsx)(t.li,{children:"After modifying the configuration file, you need to restart the system for the changes to take effect."}),"\n"]})}),"\n",(0,l.jsx)(t.admonition,{type:"danger",children:(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Do not modify the content below ",(0,l.jsx)(t.code,{children:"######### PLEASE DO NOT EDIT THE FOLLOWING #########"})," in the configuration file."]}),"\n"]})}),"\n",(0,l.jsx)(t.h2,{id:"how-to-modify-the-configuration-file",children:"How to Modify the Configuration File"}),"\n",(0,l.jsx)(t.h3,{id:"modifying-the-configuration-file-after-burning",children:"Modifying the Configuration File After Burning"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Configuration items that only take effect on the ",(0,l.jsx)(t.code,{children:"first boot"})," must be modified by using a professional text editor to open the configuration file ",(0,l.jsx)(t.code,{children:"config.txt"})," in the removable disk ",(0,l.jsx)(t.code,{children:"FlyOS-Conf"})," after burning."]}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"online-configuration-modification-while-the-system-is-running",children:"Online Configuration Modification While the System is Running"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"If it's a regular configuration item, modifications made through the system web configuration page will take effect after restarting the system."}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Open the device IP address in the browser, for example: ",(0,l.jsx)(t.code,{children:"http://192.168.1.2/"})]}),"\n",(0,l.jsxs)(t.li,{children:["For Fluidd, uncheck as shown on the left below ",(0,l.jsx)(t.code,{children:"Filter hidden files and folders"}),"."]}),"\n",(0,l.jsxs)(t.li,{children:["For Mainsail, check as shown on the right below ",(0,l.jsx)(t.code,{children:"Show hidden files"}),"."]}),"\n"]}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(i,{image:n(98429).Z,size:"100%",align:"center"})}),(0,l.jsx)("td",{children:(0,l.jsx)(i,{image:n(33994).Z,size:"85%",align:"center"})})]})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["At this point, you can see the ",(0,l.jsx)(t.code,{children:".flyos-config"})," folder. Enter this folder to find the ",(0,l.jsx)(t.code,{children:"sys-config.conf"})," file."]}),"\n",(0,l.jsxs)(t.li,{children:["The ",(0,l.jsx)(t.code,{children:"sys-config.conf"})," file is a soft link to the configuration file ",(0,l.jsx)(t.code,{children:"config.txt"})," in the removable disk ",(0,l.jsx)(t.code,{children:"FlyOS-Conf"}),"."]}),"\n"]}),"\n",(0,l.jsx)(i,{image:n(36171).Z,size:"60%",align:"center"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Open the ",(0,l.jsx)(t.code,{children:"sys-config.conf"})," file, make the necessary modifications, save, and close the file."]}),"\n"]}),"\n",(0,l.jsx)(i,{image:n(83244).Z,size:"60%",align:"center"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Note: The format of configuration items in the ",(0,l.jsx)(t.code,{children:"sys-config.conf"})," file is ",(0,l.jsx)(t.code,{children:"key=value"}),", do not change it to ",(0,l.jsx)(t.code,{children:"key: value"}),"."]}),"\n",(0,l.jsx)(t.li,{children:"After saving the modifications, restart the system for them to take effect."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"configuration-items",children:"Configuration Items"}),"\n",(0,l.jsx)(t.h3,{id:"wireless-network-configuration",children:"Wireless Network Configuration"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"The following configuration items take effect every time the system starts."}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Configuration Item"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Default Value"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Usable Values"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"WIFI_SSID"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"empty"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Any WIFI name"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"WIFI name, if filled, the system will automatically prioritize connecting to this WIFI on startup"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"WIFI_PASS"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"empty"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Leave blank if no password"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"WIFI password, if filled, the system will connect to the WIFI using the password"})]})]})]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"printer-default-configuration",children:"Printer Default Configuration"}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["The following configuration items only take effect on the ",(0,l.jsx)(t.code,{children:"first boot"}),"."]}),"\n"]})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Configuration Item"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Default Value"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Usable Values"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"language"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"zh-CN"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsxs)("details",{children:[(0,l.jsx)("summary",{children:"Click to expand details"}),(0,l.jsx)(t.code,{children:"zh-CN"}),", ",(0,l.jsx)(t.code,{children:"zh-HK"}),", ",(0,l.jsx)(t.code,{children:"en"}),", ",(0,l.jsx)(t.code,{children:"de"}),", ",(0,l.jsx)(t.code,{children:"cz"}),", ",(0,l.jsx)(t.code,{children:"es"}),", ",(0,l.jsx)(t.code,{children:"hu"}),", ",(0,l.jsx)(t.code,{children:"ja"}),", ",(0,l.jsx)(t.code,{children:"nl"}),", ",(0,l.jsx)(t.code,{children:"pt"}),", ",(0,l.jsx)(t.code,{children:"se"}),", ",(0,l.jsx)(t.code,{children:"uk"}),", ",(0,l.jsx)(t.code,{children:"da"}),", ",(0,l.jsx)(t.code,{children:"fr"}),", ",(0,l.jsx)(t.code,{children:"it"}),", ",(0,l.jsx)(t.code,{children:"ko"}),", ",(0,l.jsx)(t.code,{children:"pl"}),", ",(0,l.jsx)(t.code,{children:"ru"}),", ",(0,l.jsx)(t.code,{children:"tr"})]})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Set the default language for fluidd and mainsail on the first startup"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"printer_name"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"empty"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Any string"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Set the default printer name for fluidd and mainsail on the first startup"})]})]})]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"system-configuration",children:"System Configuration"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"The following configuration items take effect every time the system starts."}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Configuration Item"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Default Value"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Usable Values"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"console"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"serial"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"serial"}),", ",(0,l.jsx)(t.code,{children:"both"})]}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["This configuration item should not be modified, only ",(0,l.jsx)(t.code,{children:"serial"})," is valid"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"board"})}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:["H5: ",(0,l.jsx)(t.code,{children:"fly-pi-v2"}),(0,l.jsx)("br",{}),"H3: ",(0,l.jsx)(t.code,{children:"fly-lite2.1"})]}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsxs)("details",{children:[(0,l.jsx)("summary",{children:"Click to expand H5 series"}),(0,l.jsx)(t.code,{children:"fly-pi"}),", ",(0,l.jsx)(t.code,{children:"fly-pi-v2"}),", ",(0,l.jsx)(t.code,{children:"fly-gemini-v1"}),", ",(0,l.jsx)(t.code,{children:"fly-gemini-v2"}),", ",(0,l.jsx)(t.code,{children:"fly-gemini-v3"}),", ",(0,l.jsx)(t.code,{children:"fly-c8"})]}),(0,l.jsx)("br",{}),(0,l.jsxs)("details",{children:[(0,l.jsx)("summary",{children:"Click to expand H3 series"}),(0,l.jsx)(t.code,{children:"fly-lite2"}),", ",(0,l.jsx)(t.code,{children:"fly-lite2.1"}),", ",(0,l.jsx)(t.code,{children:"fly-minipad"})]})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Mainboard model, mainly used for automatic firmware burning, etc."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"shutdown_pin_state"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"1"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"0"}),", ",(0,l.jsx)(t.code,{children:"1"})]}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Set the level state of the shutdown button",(0,l.jsx)("br",{}),"1: Triggered by low level",(0,l.jsx)("br",{}),"0: Triggered by high level"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"shutdown_pin"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"none"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"PA21"}),", ",(0,l.jsx)(t.code,{children:"PA4"}),"..."]}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Set the trigger pin of the shutdown button, default is ",(0,l.jsx)(t.code,{children:"none"})," indicating it is not enabled"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"spidev"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"spidev0.0 spidev1.0"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"spidev0.0"}),", ",(0,l.jsx)(t.code,{children:"spidev0.1"}),", ",(0,l.jsx)(t.code,{children:"spidev1.0"}),", ",(0,l.jsx)(t.code,{children:"spidev1.1"})]}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Set the ports to enable spidev",(0,l.jsx)("br",{}),"To enable multiple, separate with spaces"]})]})]})]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"printer-type-configuration",children:"Printer Type Configuration"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"The following configuration items take effect every time the system starts."}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Configuration Item"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Default Value"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Usable Values"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"printer"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"klipper"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"klipper"}),", ",(0,l.jsx)(t.code,{children:"rrf"})]}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Configure which service the system starts with",(0,l.jsx)("br",{}),(0,l.jsx)(t.code,{children:"klipper"}),": klipper, moonraker services",(0,l.jsx)("br",{}),(0,l.jsx)(t.code,{children:"rrf"}),": RRF DSF, DWC services"]})]})})]}),"\n",(0,l.jsx)(t.h3,{id:"display-configuration",children:"Display Configuration"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"The following configuration items take effect every time the system starts."}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Configuration Item"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Default Value"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Usable Values"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"screen"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"hdmi"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsxs)("details",{children:[(0,l.jsx)("summary",{children:"Click to expand H5 series"}),(0,l.jsx)(t.code,{children:"none"}),", ",(0,l.jsx)(t.code,{children:"hdmi"}),", ",(0,l.jsx)(t.code,{children:"fly-tft-v1"}),", ",(0,l.jsx)(t.code,{children:"fly-tft-v2-r"}),", ",(0,l.jsx)(t.code,{children:"fly-tft-v2-c"})]}),(0,l.jsx)("br",{}),(0,l.jsxs)("details",{children:[(0,l.jsx)("summary",{children:"Click to expand H3 series"}),(0,l.jsx)(t.code,{children:"none"}),", ",(0,l.jsx)(t.code,{children:"hdmi"}),", ",(0,l.jsx)(t.code,{children:"fly-tft-v1"}),", ",(0,l.jsx)(t.code,{children:"fly-minipad-r"}),", ",(0,l.jsx)(t.code,{children:"fly-minipad-c"}),", ",(0,l.jsx)(t.code,{children:"fly-tft-v2-r"}),", ",(0,l.jsx)(t.code,{children:"fly-tft-v2-c"})]})]}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Set the screen, ",(0,l.jsx)(t.code,{children:"none"})," to turn off all displays"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"rotate"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"90"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"0"}),", ",(0,l.jsx)(t.code,{children:"90"}),", ",(0,l.jsx)(t.code,{children:"180"}),", ",(0,l.jsx)(t.code,{children:"270"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Set the rotation angle of FLY-TFT, invalid for HDMI"})]})]})]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"klipper-related-configuration",children:"Klipper Related Configuration"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"The following configuration items take effect every time the system starts."}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Configuration Item"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Default Value"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Usable Values"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"klipper_screen"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"0"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"0"}),", ",(0,l.jsx)(t.code,{children:"1"})]}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Set whether to enable KlipperScreen",(0,l.jsx)("br",{}),"1: Enable",(0,l.jsx)("br",{}),"0: Disable",(0,l.jsx)("br",{}),"Valid when ",(0,l.jsx)(t.code,{children:"printer=klipper"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"moon2uart"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"0"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"0"}),", ",(0,l.jsx)(t.code,{children:"1"})]}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Set whether to enable moon2uart",(0,l.jsx)("br",{}),"1: Enable",(0,l.jsx)("br",{}),"0: Disable",(0,l.jsx)("br",{}),"Valid when ",(0,l.jsx)(t.code,{children:"printer=klipper"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"m2u_port"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"/dev/ttyS1"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Valid serial port"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Serial port for moon2uart, valid when ",(0,l.jsx)(t.code,{children:"moon2uart=1"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"m2u_baud"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"115200"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Valid baud rate"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Baud rate for moon2uart, valid when ",(0,l.jsx)(t.code,{children:"moon2uart=1"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"klipper_webui"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"fluidd"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"fluidd"}),", ",(0,l.jsx)(t.code,{children:"mainsail"})]}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Set the default front-end UI for Klipper",(0,l.jsx)("br",{}),"Does not affect the one-click online switching function",(0,l.jsx)("br",{}),"Valid when ",(0,l.jsx)(t.code,{children:"printer=klipper"})]})]})]})]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"rrf-related-configuration",children:"RRF Related Configuration"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"The following configuration items take effect every time the system starts."}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Configuration Item"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Default Value"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Usable Values"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"rrf2uart"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"0"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"0"}),", ",(0,l.jsx)(t.code,{children:"1"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Temporarily invalid, updates will be provided in future versions"})]})})]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"other-settings",children:"Other Settings"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"The following configuration items take effect every time the system starts."}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Configuration Item"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Default Value"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Usable Values"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"crowsnest"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"0"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"0"}),", ",(0,l.jsx)(t.code,{children:"1"})]}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Set whether to enable Crowsnest",(0,l.jsx)("br",{}),"1: Enable",(0,l.jsx)("br",{}),"0: Disable",(0,l.jsx)("br",{}),"Valid for both Klipper and RRF modes"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"firmware"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"empty"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Valid firmware file path"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Set the firmware to auto-burn on startup"})]})]})]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.admonition,{type:"danger",children:(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Do not modify the content below ",(0,l.jsx)(t.code,{children:"######### PLEASE DO NOT EDIT THE FOLLOWING #########"})," in the configuration file."]}),"\n"]})})]})}function x(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},98429:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/config1-b248a5f8708754391dc7f3e30a66404d.webp"},33994:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/config2-520ef43d21da10584cea2f864bbbbdd6.webp"},36171:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/config3-cc5cacbc1d4d230fea0fd0968df0de03.webp"},83244:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/config4-15803e7d27dccb269f796f0e1c83c87f.webp"},79938:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return r}});var i=n(75271);let l={},s=i.createContext(l);function r(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);