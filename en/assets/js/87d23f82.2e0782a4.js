"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["79354"],{39406:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>l});var s=JSON.parse('{"id":"ProductDoc/ExtensionBoard/fly-g2t/rpi","title":"Raspberry Pi User Manual","description":"Precautions:","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/fly-g2t/rpi.mdx","sourceDirName":"ProductDoc/ExtensionBoard/fly-g2t","slug":"/ProductDoc/ExtensionBoard/fly-g2t/rpi","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/fly-g2t/rpi","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/fly-g2t/rpi.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"Raspberry Pi Usage Tutorial"},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/fly-g2t/"},"next":{"title":"FLY PI User Manual","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/fly-g2t/fly"}}'),r=i("52676"),t=i("79938");let l={sidebar_position:2,sidebar_label:"Raspberry Pi Usage Tutorial"},o="Raspberry Pi User Manual",a={},d=[{value:"Precautions:",id:"precautions",level:2},{value:"Raspberry Pi Pre-installed TFTV2 System Download Link",id:"raspberry-pi-pre-installed-tftv2-system-download-link",level:2},{value:"Installing G2T",id:"installing-g2t",level:2},{value:"Using the Onboard RS232 Connection Tool Version Method",id:"using-the-onboard-rs232-connection-tool-version-method",level:2},{value:"Using the Onboard 5VFAN",id:"using-the-onboard-5vfan",level:2},{value:"Screen Usage Method",id:"screen-usage-method",level:2},{value:"1. Introduction",id:"1-introduction",level:3},{value:"2. System Installation",id:"2-system-installation",level:3},{value:"4. Driver Installation",id:"4-driver-installation",level:3},{value:"5. Usage",id:"5-usage",level:3},{value:"6. Using KlipperScreen",id:"6-using-klipperscreen",level:3},{value:"7. All Available Configurations",id:"7-all-available-configurations",level:3},{value:"Raspberry Pi zero2 and zero2W Precautions",id:"raspberry-pi-zero2-and-zero2w-precautions",level:2},{value:"Screen Installation",id:"screen-installation",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Button:s,ImageView:l}=n;return!s&&u("Button",!0),!l&&u("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"raspberry-pi-user-manual",children:"Raspberry Pi User Manual"})}),"\n",(0,r.jsx)(n.h2,{id:"precautions",children:"Precautions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure that the host computer is powered off before installing the extension board."}),"\n",(0,r.jsx)(n.li,{children:"Avoid using the extension board in humid or dusty environments."}),"\n",(0,r.jsx)(n.li,{children:"When installing the screen, be careful not to plug or unplug it while powered on and pay attention to the direction of the screen cable to avoid damage."}),"\n",(0,r.jsx)(n.li,{children:"When installing the fan, pay attention to the current and voltage specifications of the fan to avoid damage."}),"\n",(0,r.jsx)(n.li,{children:"Please note that UART1 is already enabled by default and does not need to be configured."}),"\n",(0,r.jsxs)(n.li,{children:["Please flash the latest image such as ",(0,r.jsx)(n.code,{children:"mainsailos"}),", not an upgrade of the kernel."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Raspberry Pi can use all interfaces!!!"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.strong,{children:["Note: The system kernel version used by Raspberry Pi must be greater than ",(0,r.jsx)(n.code,{children:"5.17.x"}),", execute the command ",(0,r.jsx)(n.code,{children:"uname -r"})," to check the kernel version"]})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"raspberry-pi-pre-installed-tftv2-system-download-link",children:"Raspberry Pi Pre-installed TFTV2 System Download Link"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"System image suitable for Raspberry Pi zero2/zero2W/2B/3B/3B+/4B/CM4/5B"}),"\n",(0,r.jsx)(n.li,{children:"This image is pre-installed with klipper, moonraker, mainsail, fulidd, klipper-screen, etc."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"https://cdn.mellow.klipper.cn/IMG/Beta/RPI-TFT-IMG-new.img.xz\n"})}),"\n",(0,r.jsx)(n.h2,{id:"installing-g2t",children:"Installing G2T"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Below is for reference","\n",(0,r.jsx)(l,{image:i(59830).Z,size:"60%",align:"left"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Reference wiring","\n",(0,r.jsx)(l,{image:i(86991).Z,size:"60%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"using-the-onboard-rs232-connection-tool-version-method",children:"Using the Onboard RS232 Connection Tool Version Method"}),"\n",(0,r.jsx)(l,{image:i(99264).Z,size:"60%",align:"left"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["After flashing the latest system on Raspberry Pi, you need to edit the ",(0,r.jsx)(n.code,{children:"config.txt"})," file under the boot disk"]}),"\n",(0,r.jsx)(n.li,{children:"Please note that UART1 is already open by default and does not need to be configured in the system, UART3 needs to be performed in the following steps"}),"\n",(0,r.jsxs)(n.li,{children:["Add in ",(0,r.jsx)(n.code,{children:"config.txt"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dtoverlay=uart3\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If using uart1, the id is as follows"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[mcu] \nserial: /dev/ttyAMA0\nbaud: 250000\nrestart_method:command\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If using uart3, the id is as follows"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[mcu] \nserial: /dev/ttyAMA1\nbaud: 250000\nrestart_method:command\n"})}),"\n",(0,r.jsx)(n.h2,{id:"using-the-onboard-5vfan",children:"Using the Onboard 5VFAN"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If you need to control devices with Raspberry Pi 40PIN, please follow the Klipper tutorial for installation ",(0,r.jsx)(s,{variant:"contained",disableElevation:!0,href:"https://www.klipper3d.org/zh/RPi_microcontroller.html?h=rpi",children:"RPi Microcontroller"})]}),"\n",(0,r.jsx)(l,{image:i(99279).Z,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[mcu host]       \nserial: /tmp/klipper_host_mcu \n\n[temperature_sensor Raspberry Pi]\nsensor_type: temperature_host\n\n[temperature_fan core_fan] \npin: host:gpio12\nmax_power: 1.0\nsensor_type: temperature_host   #Set as the host computer's main control temperature\ncontrol:watermark                  #Control method\ntarget_temp: 48                   #Host computer cooling fan start temperature\nmin_temp: 0                     #Minimum temperature, an error will be reported below this temperature\nmax_temp: 90                    #Maximum temperature, an error will be reported above this temperature\noff_below: 0.10\nkick_start_time: 0.50\nmax_speed: 0.8                   #Maximum speed, 80% of full power operation\nmin_speed: 0.3                    #Minimum speed, 30% of full power operation\n"})}),"\n",(0,r.jsx)(n.h2,{id:"screen-usage-method",children:"Screen Usage Method"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Github address ",(0,r.jsx)(s,{variant:"contained",disableElevation:!0,href:"https://github.com/kluoyun/FLY-TFT",children:"FLY-TFT"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,r.jsx)(n.p,{children:"FLY-TFT-V2 is a TFT LCD screen based on st7796, supporting both capacitive and resistive touch, with a resolution of 320x480, using the SPI interface"}),"\n",(0,r.jsx)(n.h3,{id:"2-system-installation",children:"2. System Installation"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Note: The system kernel version used by Raspberry Pi must be greater than ",(0,r.jsx)(n.code,{children:"5.17.x"}),", execute the command ",(0,r.jsx)(n.code,{children:"uname -r"})," to check the kernel version"]}),"\n",(0,r.jsxs)(n.li,{children:["Please flash the latest image such as ",(0,r.jsx)(n.code,{children:"mainsailos"}),", not an upgrade of the kernel"]}),"\n",(0,r.jsxs)(n.li,{children:["You need to install ",(0,r.jsx)(s,{variant:"contained",disableElevation:!0,href:"ttps://klipperscreen.readthedocs.io/en/latest/Installation/",children:"KlipperScreen"})," yourself"]}),"\n"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.a,{href:"https://www.raspberrypi.com/software/",children:"Raspberry Imager"})," to install the latest ",(0,r.jsx)(n.strong,{children:"MainsailOS"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Download and install ",(0,r.jsx)(n.a,{href:"https://www.raspberrypi.com/software/",children:"Raspberry Imager"})]}),"\n",(0,r.jsxs)(n.li,{children:["Open ",(0,r.jsx)(n.strong,{children:"Raspberry Imager"})]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"CHOOSE DEVICE"})]}),"\n",(0,r.jsx)(n.li,{children:"Select the corresponding model according to your device"}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"CHOOSE OS"})]}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.strong,{children:"Other specific-purpose OS"})]}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.strong,{children:"3D printing"})]}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.strong,{children:"Mainsail OS"})]}),"\n",(0,r.jsxs)(n.li,{children:["Select the latest version. If your settings support 64-bit systems, choose ",(0,r.jsx)(n.strong,{children:"rpi64"})]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"CHOOSE STORAGE"})]}),"\n",(0,r.jsx)(n.li,{children:"Select your storage device, such as an SD card"}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"NEXT"}),", wait for the installation to complete"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"4-driver-installation",children:"4. Driver Installation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Install FLY-TFT-V2 driver"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/kluoyun/FLY-TFT.git\ncd FLY-TFT\nsudo chmod +x ./scripts/install.sh\n./scripts/install.sh\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"5-usage",children:"5. Usage"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Touch requires enabling I2C support, corresponding configuration is ",(0,r.jsx)(n.code,{children:"dtparam=i2c_arm=on"})]}),"\n"]})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["After installing the driver, you need to add the overlay support ",(0,r.jsx)(n.code,{children:"dtoverlay=fly-tft-v2"})," in the config.txt file"]}),"\n",(0,r.jsxs)(n.li,{children:["Open ",(0,r.jsx)(n.code,{children:"/boot/config.txt"})," (bookworm system is ",(0,r.jsx)(n.code,{children:"/boot/firmware/config.txt"}),")","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo nano /boot/config.txt\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Add the following configuration at the end of the file","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dtoverlay=fly-tft-v2\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The default screen is 90 degrees landscape display, if you need to rotate the screen, use the following configuration","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dtoverlay=fly-tft-v2,r90  # Consistent with the default direction, landscape\ndtoverlay=fly-tft-v2,r270 # 270 degrees landscape, landscape (flipped)\ndtoverlay=fly-tft-v2,r0   # 0 degrees portrait, portrait\ndtoverlay=fly-tft-v2,r180 # 180 degrees portrait, portrait (flipped)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Only one configuration can be added, not multiple"}),"\n",(0,r.jsx)(n.li,{children:"Normally, the touch direction of TFT will automatically rotate following the display direction, no need to modify the touch configuration in the system"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["After adding to the end of the file, execute the command ",(0,r.jsx)(n.code,{children:"sudo reboot"})," to restart the system"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Please ensure that the hardware connection is correct"}),"\n",(0,r.jsx)(n.li,{children:"Installed the driver"}),"\n",(0,r.jsxs)(n.li,{children:["Added the overlay support ",(0,r.jsx)(n.code,{children:"dtoverlay=fly-tft-v2"})," in the ",(0,r.jsx)(n.code,{children:"/boot/config.txt"})," (bookworm system is ",(0,r.jsx)(n.code,{children:"/boot/firmware/config.txt"}),") file"]}),"\n",(0,r.jsx)(n.li,{children:"Some systems may have a default fb0 device, FLY-TFT will be assigned to fb1 device, you need to modify the configuration file to enable the fb1 device"}),"\n",(0,r.jsxs)(n.li,{children:["Execute the command ",(0,r.jsx)(n.code,{children:"ls /dev/fb*"})," to check the device, if two devices fb0 and fb1 appear, please execute the following command to enable the fb1 device (the default is fb0)"]}),"\n",(0,r.jsxs)(n.li,{children:["Execute the following command to modify the default configuration to fb1 device","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo sed -i 's/\\/dev\\/fb0/\\/dev\\/fb1/g' /etc/X11/xorg.conf.d/99-fbdev.conf\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"6-using-klipperscreen",children:"6. Using KlipperScreen"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"MainsailOS does not install KlipperScreen by default, you need to install it manually"}),"\n",(0,r.jsxs)(n.li,{children:["Please refer to ",(0,r.jsx)(n.a,{href:"https://github.com/KlipperScreen/KlipperScreen",children:"KlipperScreen"})," or use ",(0,r.jsx)(n.a,{href:"https://github.com/dw-0/kiauh",children:"kiauh"})," to install"]}),"\n",(0,r.jsx)(n.li,{children:"If KlipperScreen is successfully installed and step 5 is completed correctly, the KlipperScreen interface should be displayed at this time"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"7-all-available-configurations",children:"7. All Available Configurations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"speed"})," **Requires parameters: Set the maximum SPI clock frequency of TFT, in Hz, the default is 96000000 (if serious screen flicker occurs, please appropriately reduce this value)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Example: ",(0,r.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,speed=80000000"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"r0/r90/r180/r270"})," ",(0,r.jsx)(n.strong,{children:"Optional"})," No parameters: Set the display and touch direction of TFT, the default is 90 degrees, optional values are 0,90,180,270, (only one configuration can be added)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Example: ",(0,r.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,r90"})," or ",(0,r.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,r180"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"disable_touch"})," ",(0,r.jsx)(n.strong,{children:"No parameters"}),": Disable the touch function of TFT, enabled by default"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Example: ",(0,r.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,disable_touch"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"invx"}),",",(0,r.jsx)(n.code,{children:"invy"})," ",(0,r.jsx)(n.strong,{children:"No parameters"}),": Set the touch direction of TFT, ",(0,r.jsx)(n.code,{children:"invx"})," is X-axis flip, ",(0,r.jsx)(n.code,{children:"invy"})," is Y-axis flip"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Example: ",(0,r.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,invx"})," or ",(0,r.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,invy"})," or ",(0,r.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,invx,invy"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"swapxy"})," ",(0,r.jsx)(n.strong,{children:"No parameters"}),": Set the touch direction of TFT, swap X and Y axes, that is, landscape"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Example: ",(0,r.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,swapxy"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," All parameters can be set at the same time (only one optional parameter can be selected), multiple parameters are separated by commas, and multiple parameters can only be on the same line"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Warning:"})," Normally only ",(0,r.jsx)(n.code,{children:"r0"}),",",(0,r.jsx)(n.code,{children:"r90"}),",",(0,r.jsx)(n.code,{children:"r180"}),",",(0,r.jsx)(n.code,{children:"r270"})," four parameters are used, other parameters are only used in special cases, especially ",(0,r.jsx)(n.code,{children:"invx"}),",",(0,r.jsx)(n.code,{children:"invy"}),",",(0,r.jsx)(n.code,{children:"swapxy"})]}),"\n"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Example: ",(0,r.jsx)(n.code,{children:"dtoverlay=fly-tft-v2,speed=80000000,r270"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"raspberry-pi-zero2-and-zero2w-precautions",children:"Raspberry Pi zero2 and zero2W Precautions"}),"\n",(0,r.jsx)(l,{image:i(8641).Z,size:"60%",align:"left"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This precaution is for the instructions of using FLY-TFT screen with G2T"}),"\n",(0,r.jsx)(n.li,{children:"Raspberry Pi zero2 and zero2w need to modify the default display device, you can execute the following code to modify directly, otherwise it will not display"}),"\n",(0,r.jsx)(n.li,{children:"Please note that you need to restart after executing before you can use it"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo sed -i 's/\\/dev\\/fb0/\\/dev\\/fb1/g' /etc/X11/xorg.conf.d/99-fbdev.conf\n"})}),"\n",(0,r.jsx)(n.h2,{id:"screen-installation",children:"Screen Installation"}),"\n",(0,r.jsx)(l,{image:i(30382).Z,size:"60%",align:"left"})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function u(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},99279:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/fan-e6535916f95c6a94e95ea9d7db9891fa.webp"},59830:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/rpi-f550377e6b2b6c35156fe11bf638213d.webp"},99264:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/rpi1-f1e8a944f33142318715072937c95400.webp"},30382:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/tft-c7c05154ce5b60eea7e2814b21c17577.webp"},86991:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/wiring-78f638290176e0176e660b4569b9c8f1.webp"},8641:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/zero-7b6dfc5d2fc078a77b56265254d76b3a.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return l}});var s=i(75271);let r={},t=s.createContext(r);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);