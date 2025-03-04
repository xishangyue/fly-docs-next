"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["69174"],{73917:function(e,n,i){i.d(n,{ZP:function(){return o},d$:function(){return r}});var s=i(52676),l=i(79938);let r=[{value:"DSI usage method",id:"dsi-usage-method",level:2}];function t(e){let n={code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{ImageView:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"dsi-usage-method",children:"DSI usage method"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"After the image writing is completed, add the following command in /boot/config.txt"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cfg",children:"dtoverlay=vc4-kms-dsi-7inch\n"})}),"\n",(0,s.jsx)(r,{image:i(75699).Z,size:"100%",align:"left"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Save and exit"}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},25615:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>p,assets:()=>h,toc:()=>u,frontMatter:()=>c});var s=JSON.parse('{"id":"ProductDoc/MainBoard/fly-pro/fly-pro-x10/screen","title":"Screen Usage","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-pro/fly-pro-x10/screen.mdx","sourceDirName":"ProductDoc/MainBoard/fly-pro/fly-pro-x10","slug":"/ProductDoc/MainBoard/fly-pro/fly-pro-x10/screen","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-pro/fly-pro-x10/screen","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-pro/fly-pro-x10/screen.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8,"sidebar_label":"Screen Usage"},"sidebar":"tutorialSidebar","previous":{"title":"CSI Camera Usage","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-pro/fly-pro-x10/csi"},"next":{"title":"PRO X10 Bridge CAN","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-pro/fly-pro-x10/canbridge"}}'),l=i("52676"),r=i("79938"),t=i("73917");function o(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"precautions",children:"Precautions:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Ensure that the upper computer is powered off before installing the expansion board."}),"\n",(0,l.jsx)(n.li,{children:"Avoid using the expansion board in a humid or dusty environment."}),"\n",(0,l.jsx)(n.li,{children:"When installing the screen, please note not to plug and unplug while powered on, pay attention to the direction of the screen cable to avoid damage."}),"\n",(0,l.jsx)(n.li,{children:"When installing the fan, please note the current and voltage specifications of the fan to avoid damage."}),"\n",(0,l.jsx)(n.li,{children:"Please note that UART1 is already enabled by default and does not need to be configured."}),"\n",(0,l.jsxs)(n.li,{children:["Please flash the latest image such as ",(0,l.jsx)(n.code,{children:"mainsailos"}),", not kernel upgrade."]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"The Raspberry Pi can use all interfaces!!!"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Note:"})," The system kernel version used by the Raspberry Pi must be greater than ",(0,l.jsx)(n.code,{children:"5.17.x"}),", execute the command ",(0,l.jsx)(n.code,{children:"uname -r"})," to view the kernel version."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"raspberry-pi-pre-installed-tftv2-system-download-link",children:"Raspberry Pi Pre-installed TFTV2 System Download Link"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"System image suitable for Raspberry Pi 3B/3B+/4B/CM4/5B"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cfg",children:"https://cdn.mellow.klipper.cn/IMG/Beta/RPI-TFT-IMG-new.img.xz\n"})}),"\n",(0,l.jsx)(n.h2,{id:"install-screen-driver",children:"Install Screen Driver"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Note that you can directly use the pre-installed system."}),"\n",(0,l.jsxs)(n.li,{children:["Project address: ",(0,l.jsx)(n.a,{href:"https://github.com/kluoyun/FLY-TFT",children:"FLY-TFT"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,l.jsx)(n.p,{children:"FLY-TFT-V2 is a TFT liquid crystal display based on st7796, supporting both capacitive and resistive touch screens, with a resolution of 320x480, using SPI interface"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["You need to install ",(0,l.jsx)(n.a,{href:"https://klipperscreen.readthedocs.io/en/latest/Installation/",children:"KlipperScreen"})," yourself."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"system-installation",children:"System Installation"}),"\n",(0,l.jsx)(n.admonition,{title:"Precautions",type:"warning",children:(0,l.jsxs)(n.p,{children:["Note: The system kernel version used by the Raspberry Pi must be greater than ",(0,l.jsx)(n.code,{children:"5.17.x"}),", execute the command ",(0,l.jsx)(n.code,{children:"uname -r"})," to view the kernel version.\nPlease flash the latest image such as ",(0,l.jsx)(n.code,{children:"mainsailos"}),", not kernel upgrade."]})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Use ",(0,l.jsx)(n.a,{href:"https://www.raspberrypi.com/software/",children:"Raspberry Imager"})," to install the latest ",(0,l.jsx)(n.strong,{children:"MainsailOS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Download and install ",(0,l.jsx)(n.a,{href:"https://www.raspberrypi.com/software/",children:"Raspberry Imager"})]}),"\n",(0,l.jsxs)(n.li,{children:["Open ",(0,l.jsx)(n.strong,{children:"Raspberry Imager"})]}),"\n",(0,l.jsxs)(n.li,{children:["Click ",(0,l.jsx)(n.strong,{children:"CHOOSE DEVICE"})]}),"\n",(0,l.jsx)(n.li,{children:"Choose the corresponding model according to your device"}),"\n",(0,l.jsxs)(n.li,{children:["Click ",(0,l.jsx)(n.strong,{children:"CHOOSE OS"})]}),"\n",(0,l.jsxs)(n.li,{children:["Select ",(0,l.jsx)(n.strong,{children:"Other specific-purpose OS"})]}),"\n",(0,l.jsxs)(n.li,{children:["Select ",(0,l.jsx)(n.strong,{children:"3D printing"})]}),"\n",(0,l.jsxs)(n.li,{children:["Select ",(0,l.jsx)(n.strong,{children:"Mainsail OS"})]}),"\n",(0,l.jsxs)(n.li,{children:["Select the latest version. If your settings support 64-bit systems, select ",(0,l.jsx)(n.strong,{children:"rpi64"})]}),"\n",(0,l.jsxs)(n.li,{children:["Click ",(0,l.jsx)(n.strong,{children:"CHOOSE STORAGE"})]}),"\n",(0,l.jsx)(n.li,{children:"Select your storage device, such as an SD card"}),"\n",(0,l.jsxs)(n.li,{children:["Click ",(0,l.jsx)(n.strong,{children:"NEXT"}),", wait for the installation to complete"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"driver-installation",children:"Driver Installation"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Install FLY-TFT-V2 driver"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/kluoyun/FLY-TFT.git\ncd FLY-TFT\nsudo chmod +x ./scripts/install.sh\n./scripts/install.sh\n"})}),"\n",(0,l.jsx)(n.h3,{id:"enable-tft-display",children:"Enable TFT Display"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Touch requires enabling I2C support, the corresponding configuration is ",(0,l.jsx)(n.code,{children:"dtparam=i2c_arm=on"})]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["After installing the driver, add the overlay support ",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2"})," to the config.txt file"]}),"\n",(0,l.jsxs)(n.li,{children:["Open ",(0,l.jsx)(n.code,{children:"/boot/config.txt"})," (for bookworm system it's ",(0,l.jsx)(n.code,{children:"/boot/firmware/config.txt"}),")","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo nano /boot/config.txt\n"})}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Add the following configuration at the end of the file"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    dtoverlay=fly-tft-v2\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"By default, the screen is displayed in landscape mode at 90 degrees. If you need to rotate the screen, use the following configuration"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    dtoverlay=fly-tft-v2,r90  # Landscape orientation\n    dtoverlay=fly-tft-v2,r270 # Landscape orientation (flipped)\n    dtoverlay=fly-tft-v2,r0   # Portrait orientation\n    dtoverlay=fly-tft-v2,r180 # Portrait orientation (flipped)\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Only one configuration can be added, multiple configurations cannot be added"}),"\n",(0,l.jsx)(n.li,{children:"In normal cases, the touch direction of the TFT will automatically follow the display direction without modifying the touch configuration in the system"}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsxs)(n.li,{children:["After adding to the end of the file, execute the command ",(0,l.jsx)(n.code,{children:"sudo reboot"})," to restart the system"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"use-tft",children:"Use TFT"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Make sure the hardware connection is correct"}),"\n",(0,l.jsx)(n.li,{children:"Installed drivers"}),"\n",(0,l.jsxs)(n.li,{children:["Added ",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2"})," overlay support in the ",(0,l.jsx)(n.code,{children:"/boot/config.txt"})," (for bookworm system it's ",(0,l.jsx)(n.code,{children:"/boot/firmware/config.txt"}),") file"]}),"\n",(0,l.jsx)(n.li,{children:"Some systems may have a default fb0 device, FLY-TFT will be assigned to the fb1 device, you need to modify the configuration file to enable the fb1 device"}),"\n",(0,l.jsxs)(n.li,{children:["Execute the command ",(0,l.jsx)(n.code,{children:"ls /dev/fb*"})," to view the devices, if two devices fb0 and fb1 appear, please execute the following command to enable the fb1 device (by default it is fb0)"]}),"\n",(0,l.jsxs)(n.li,{children:["Execute the following command to modify the default configuration to the fb1 device","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo sed -i 's/\\/dev\\/fb0/\\/dev\\/fb1/g' /etc/X11/xorg.conf.d/99-fbdev.conf\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"use-klipperscreen",children:"Use KlipperScreen"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MainsailOS does not come with KlipperScreen installed by default, you need to install it manually"}),"\n",(0,l.jsxs)(n.li,{children:["Refer to ",(0,l.jsx)(n.a,{href:"https://github.com/KlipperScreen/KlipperScreen",children:"KlipperScreen"})," or use ",(0,l.jsx)(n.a,{href:"https://github.com/dw-0/kiauh",children:"kiauh"})," to install"]}),"\n",(0,l.jsx)(n.li,{children:"If KlipperScreen is successfully installed and step 5 is correctly completed, the KlipperScreen interface should now be displayed"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"all-available-configurations",children:"All Available Configurations"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"speed"})," [",(0,l.jsx)(n.strong,{children:"requires parameter"}),"]: Set the maximum SPI clock frequency of the TFT, unit is Hz, default is 96000000 (if severe screen artifacts occur, reduce this value appropriately)"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Example: ",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,speed=80000000"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"r0/r90/r180/r270"})," [",(0,l.jsx)(n.strong,{children:"optional"}),"][",(0,l.jsx)(n.strong,{children:"no parameter required"}),"]: Set the display and touch direction of the TFT, default is 90 degrees, selectable values are 0,90,180,270 (only one configuration can be added)"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Example: ",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,r90"})," or ",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,r180"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"disable_touch"})," [",(0,l.jsx)(n.strong,{children:"no parameter required"}),"]: Disable the touch function of the TFT, disabled by default"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Example: ",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,disable_touch"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"invx"}),",",(0,l.jsx)(n.code,{children:"invy"})," [",(0,l.jsx)(n.strong,{children:"no parameter required"}),"]: Set the touch direction of the TFT, ",(0,l.jsx)(n.code,{children:"invx"})," is X-axis flip, ",(0,l.jsx)(n.code,{children:"invy"})," is Y-axis flip"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Example: ",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,invx"})," or ",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,invy"})," or ",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,invx,invy"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"swapxy"})," [",(0,l.jsx)(n.strong,{children:"no parameter required"}),"]: Set the touch direction of the TFT, swap X-axis and Y-axis, i.e., landscape mode"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Example: ",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,swapxy"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note:"})," All parameters can be set simultaneously (optional parameters can only choose one), separate multiple parameters with commas, only one line can contain multiple parameters"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Warning:"})," Under normal circumstances, only the ",(0,l.jsx)(n.code,{children:"r0"}),", ",(0,l.jsx)(n.code,{children:"r90"}),", ",(0,l.jsx)(n.code,{children:"r180"}),", ",(0,l.jsx)(n.code,{children:"r270"})," four parameters are used, other parameters are only used in special cases, especially ",(0,l.jsx)(n.code,{children:"invx"}),", ",(0,l.jsx)(n.code,{children:"invy"}),", ",(0,l.jsx)(n.code,{children:"swapxy"})]}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Example: ",(0,l.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,speed=80000000,r270"})]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}let c={sidebar_position:8,sidebar_label:"Screen Usage"},a="Screen Usage",h={},u=[...t.d$,{value:"Precautions:",id:"precautions",level:2},{value:"Raspberry Pi Pre-installed TFTV2 System Download Link",id:"raspberry-pi-pre-installed-tftv2-system-download-link",level:2},{value:"Install Screen Driver",id:"install-screen-driver",level:2},{value:"Introduction",id:"introduction",level:3},{value:"System Installation",id:"system-installation",level:3},{value:"Driver Installation",id:"driver-installation",level:3},{value:"Enable TFT Display",id:"enable-tft-display",level:3},{value:"Use TFT",id:"use-tft",level:3},{value:"Use KlipperScreen",id:"use-klipperscreen",level:3},{value:"All Available Configurations",id:"all-available-configurations",level:3}];function x(e){let n={h1:"h1",header:"header",...(0,r.a)(),...e.components},{ImageView:s,TabItem:o,Tabs:c}=n;return!s&&f("ImageView",!0),!o&&f("TabItem",!0),!c&&f("Tabs",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"screen-usage",children:"Screen Usage"})}),"\n",(0,l.jsxs)(c,{children:[(0,l.jsx)(o,{value:"HDMI",label:"LCD HDMI Screen Usage",default:!0,children:(0,l.jsx)(s,{image:i(34153).Z,size:"100%",align:"left"})}),(0,l.jsxs)(o,{value:"DSI",label:"LCD DSI Screen Usage",children:[(0,l.jsx)(s,{image:i(24778).Z,size:"100%",align:"left"}),(0,l.jsx)(t.ZP,{})]}),(0,l.jsxs)(o,{value:"TFT",label:"Using TFT Screen with G2T",children:[(0,l.jsx)(s,{image:i(13385).Z,size:"100%",align:"left"}),(0,l.jsx)(d,{})]})]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}function f(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},75699:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/dsi-75c93341f72ec076930d2fada92d3679.webp"},24778:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/csi-6db79e157c94efdd5b5e1ab113a9f984.webp"},34153:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/hdmi-e76e53a141e4ff6add79c61e8f706cd1.webp"},13385:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/tft-38284717776f82b79c2db19498a12ab8.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return t}});var s=i(75271);let l={},r=s.createContext(l);function t(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);