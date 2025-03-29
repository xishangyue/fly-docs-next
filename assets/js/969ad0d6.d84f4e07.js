"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["82819"],{80717:function(e,r,t){t.r(r),t.d(r,{default:()=>Z,frontMatter:()=>w,metadata:()=>i,assets:()=>_,toc:()=>P,contentTitle:()=>g});var i=JSON.parse('{"id":"ToolsDoc/firmware-parser","title":"Klipper \u56FA\u4EF6\u89E3\u6790\u5668","description":"\u8BE5\u5DE5\u5177\u53EF\u4EE5\u4ECE Klipper \u56FA\u4EF6 .bin, .uf2, .dict, .elf \u4E2D\u63D0\u53D6\u6784\u5EFA\u4FE1\u606F\u7B49\u53C2\u6570 (\u5EFA\u8BAE\u4ECEPC\u7AEF\u8BBF\u95EE\u83B7\u5F97\u66F4\u4F73\u4F53\u9A8C)","source":"@site/docs/ToolsDoc/firmware-parser.mdx","sourceDirName":"ToolsDoc","slug":"/ToolsDoc/firmware-parser","permalink":"/fly-docs-next/docs/ToolsDoc/firmware-parser","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ToolsDoc/firmware-parser.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1718265676000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"toolsdocSidebar","previous":{"title":"\u5B9E\u7528\u5DE5\u5177","permalink":"/fly-docs-next/docs/tools"},"next":{"title":"Fly-Tools","permalink":"/fly-docs-next/docs/category/fly-tools"}}'),n=t("74132"),s=t("94551"),l=t("39546"),a=t("23368"),d=t("36962"),o=t("92625"),h=t("8525"),c=t("19081"),x=t("1657"),p=t("16513"),f=t("22085"),j=t("77345"),u=t("44688");let m={50:"#F3F6F9",100:"#E5EAF2",200:"#DAE2ED",300:"#C7D0DD",400:"#B0B8C4",500:"#9DA8B7",600:"#6B7A90",700:"#434D5B",800:"#303740",900:"#1C2025"},y=(0,f.Z)("div")(e=>{let{theme:r}=e;return`
    border-radius: 12px;
    border: 2px solid ${"dark"===r.palette.mode?m[800]:m[500]};
    overflow: hidden;

    table {
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 1rem;
      border-collapse: collapse;
      border-radius: 12px;
      border: 0px;
      width: 100%;
      margin: 0px;
    }
  
    td,
    th {
      border: 1px solid ${"dark"===r.palette.mode?m[800]:m[500]};
      text-align: left;
      padding: 10px;
    }
  
    @media screen and (max-width: 600px) {
        th, td {
            width: auto; /* \u{5728}\u{5C0F}\u{5C4F}\u{5E55}\u{4E0A}\u{81EA}\u{52A8}\u{8C03}\u{6574}\u{5BBD}\u{5EA6} */
        }
    }
    `}),S=(0,f.Z)(a.Z)({p:2,border:"4px dashed grey",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textAlign:"center",minHeight:"100px",minWidth:"300px",transition:"border-color 0.3s, background-color 0.3s","&.highlight":{borderColor:"blue",backgroundColor:"lightblue",zIndex:0x5f5e0ff}}),E=(0,f.Z)("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1}),b=()=>{let[e,r]=(0,l.useState)(null),t=(0,l.useRef)(null),[i,s]=(0,l.useState)({snackbarisOpen:!1,snackbarMsg:""}),{snackbarisOpen:f,snackbarMsg:m}=i,[b,w]=(0,l.useState)(!1),[g,_]=(0,l.useState)(null),[P,R]=(0,l.useState)([]),[Z,N]=(0,l.useState)([]),[I,O]=(0,l.useState)([]),[A,B]=(0,l.useState)([]),C=e=>{s({snackbarisOpen:!0,snackbarMsg:e})},U=e=>{let r=[];for(let t=0;t<e.length;t+=2)r.push(parseInt(e.slice(t,t+2),16));return new Uint8Array(r)},v=e=>Array.prototype.map.call(e,function(e){return("0"+(255&e).toString(16)).slice(-2)}).join(""),D=e=>{try{let r=new FileReader;r.onload=async()=>{let e=r.result,t=new Uint8Array(e);var i=v(t),s=i.indexOf("78da9d");if(-1==s&&(s=i.indexOf("78da")),-1==s){if(i.indexOf("43616e426f6f74")>0){C((0,n.jsx)(u.Z,{children:"\u4E0D\u652F\u6301\u89E3\u6790 CanBoot(Katapult) \u56FA\u4EF6"}));return}C((0,n.jsx)(u.Z,{children:"BIN\u6587\u4EF6\u89E3\u6790\u9519\u8BEF,0x01"}));return}var l=i.indexOf("020000000002",s);if(-1==l&&(l=i.indexOf("0000000000",s)),-1==l){C((0,n.jsx)(u.Z,{children:"BIN\u6587\u4EF6\u89E3\u6790\u9519\u8BEF,0x02"}));return}i=i.slice(s,l);var a=U(i);try{let e=j.ZP.inflate(a),r=new TextDecoder().decode(e);_(JSON.parse(r))}catch(e){console.error("\u89E3\u538B\u6570\u636E\u65F6\u53D1\u751F\u9519\u8BEF:",e),C((0,n.jsx)(u.Z,{children:"\u6570\u636E\u5904\u7406\u5931\u8D25,0x01"}))}},r.readAsArrayBuffer(e)}catch(e){console.error(e),C((0,n.jsx)(u.Z,{children:"Bin\u6587\u4EF6\u89E3\u6790\u9519\u8BEF,0x0f"}))}},W=e=>{try{let r=new FileReader;r.onload=async()=>{let e=r.result,t=new Uint8Array(e);var i=v(t),s=(i=(i=i.replace(/00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000/g,"")).replace(/306fb10a5546320a57515d9e.*?56ff8be4/g,"")).indexOf("78da9d");if(-1==s&&(s=i.indexOf("78da")),-1==s){if(i.indexOf("43616e426f6f74")>0){C((0,n.jsx)(u.Z,{children:"\u4E0D\u652F\u6301\u89E3\u6790 CanBoot(Katapult) \u56FA\u4EF6"}));return}C((0,n.jsx)(u.Z,{children:"UF2\u6587\u4EF6\u89E3\u6790\u9519\u8BEF,0x01"}));return}var l=i.indexOf("020000000002",s);if(-1==l&&(l=i.indexOf("0000000000",s)),-1==l){C((0,n.jsx)(u.Z,{children:"UF2\u6587\u4EF6\u89E3\u6790\u9519\u8BEF,0x02"}));return}i=i.slice(s,l);var a=U(i);try{let e=j.ZP.inflate(a),r=new TextDecoder().decode(e);_(JSON.parse(r))}catch(e){console.error("\u89E3\u538B\u6570\u636E\u65F6\u53D1\u751F\u9519\u8BEF:",e),C((0,n.jsx)(u.Z,{children:"\u6570\u636E\u5904\u7406\u5931\u8D25,0x01"}))}},r.readAsArrayBuffer(e)}catch(e){console.error(e),C((0,n.jsx)(u.Z,{children:"UF2\u6587\u4EF6\u89E3\u6790\u9519\u8BEF,0x0f"}))}},k=e=>{try{let r=new FileReader;r.onload=async()=>{let e=r.result,t=new Uint8Array(e),i=new TextDecoder().decode(t);_(JSON.parse(i))},r.readAsArrayBuffer(e)}catch(e){console.error(e),C((0,n.jsx)(u.Z,{children:"DICT\u6587\u4EF6\u89E3\u6790\u9519\u8BEF,0x0f"}))}},T=e=>{D(e)};return(0,l.useEffect)(()=>{if(null==e||void 0==e||!e)return;_(null),R([]),N([]),O([]),B([]);let r=e.name.toLowerCase();if(!r.endsWith(".bin")&&!r.endsWith(".uf2")&&!r.endsWith(".dict")&&!r.endsWith(".elf")){C((0,n.jsx)(u.Z,{children:"\u6587\u4EF6\u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u9009\u62E9.bin/.uf2/.dict/.elf\u6587\u4EF6"}));return}if(!r.endsWith(".elf")&&e.size>2097152){C((0,n.jsx)(u.Z,{children:"\u6587\u4EF6\u4E0D\u80FD\u5927\u4E8E2M"}));return}if(r.endsWith(".elf")&&e.size>5242880){C((0,n.jsx)(u.Z,{children:"elf\u6587\u4EF6\u4E0D\u80FD\u5927\u4E8E5M"}));return}C((0,n.jsx)(u.Z,{children:"\u6587\u4EF6\u89E3\u6790\u4E2D\uFF0C\u8BF7\u7A0D\u540E"})),r.endsWith(".bin")?D(e):r.endsWith(".uf2")?W(e):r.endsWith(".dict")?k(e):r.endsWith(".elf")?T(e):C((0,n.jsx)(u.Z,{children:"\u6587\u4EF6\u89E3\u6790\u9519\u8BEF\uFF0C\u8BF7\u9009\u62E9\u6B63\u786E\u7684\u6587\u4EF6"}))},[e]),(0,l.useEffect)(()=>{if(g&&null!=g&&void 0!=g&&g!={}){if(!g.hasOwnProperty("app")||!g.hasOwnProperty("version")){C((0,n.jsx)(u.Z,{children:"\u6587\u4EF6\u89E3\u6790\u9519\u8BEF\uFF0C\u7F3A\u5C11\u5FC5\u8981\u5B57\u6BB5"}));return}if(g.hasOwnProperty("app")&&R(e=>[...e,{name:(0,n.jsx)(u.Z,{children:"APP\u7A0B\u5E8F"}),info:g.app}]),g.hasOwnProperty("license")&&R(e=>[...e,{name:(0,n.jsx)(u.Z,{children:"\u8BB8\u53EF\u534F\u8BAE"}),info:g.license}]),g.hasOwnProperty("version")){let r=g.version.match(/-g([0-9a-f]{8})/i);var e="";r&&r[1]&&0>g.version.indexOf("dirty")&&(e=r[1]),R(r=>[...r,{name:(0,n.jsx)(u.Z,{children:"\u56FA\u4EF6\u7248\u672C"}),info:e?g.version.replace(e,"<a href='https://github.com/Klipper3d/klipper/commit/"+e+"' target='_blank'>"+e+"</a>"):g.version}])}if(g.hasOwnProperty("build_versions ")&&R(e=>[...e,{name:(0,n.jsx)(u.Z,{children:"\u5DE5\u5177\u94FE\u7248\u672C"}),info:g.build_versions}]),g.hasOwnProperty("config")){let e=g.config;if(e.hasOwnProperty("MCU")&&R(r=>[...r,{name:(0,n.jsx)(u.Z,{children:"\u4E3B\u63A7\u578B\u53F7"}),info:e.MCU.toUpperCase()}]),e.hasOwnProperty("CLOCK_FREQ")&&R(r=>[...r,{name:(0,n.jsx)(u.Z,{children:"\u4E3B\u63A7\u9891\u7387"}),info:`${e.CLOCK_FREQ/1e6}MHz`}]),e.hasOwnProperty("RESERVE_PINS_USB")&&R(r=>[...r,{name:(0,n.jsx)(u.Z,{children:"USB\u5F15\u811A"}),info:`DM:${e.RESERVE_PINS_USB.split(",")[0]},  DP:${e.RESERVE_PINS_USB.split(",")[1]}`}]),e.hasOwnProperty("RESERVE_PINS_CAN")&&R(r=>[...r,{name:(0,n.jsx)(u.Z,{children:"CAN\u5F15\u811A"}),info:`RX:${e.RESERVE_PINS_CAN.split(",")[0]},  TX:${e.RESERVE_PINS_CAN.split(",")[1]}`}]),e.hasOwnProperty("CANBUS_FREQUENCY")&&R(r=>[...r,{name:(0,n.jsx)(u.Z,{children:"CAN\u901F\u7387"}),info:`${e.CANBUS_FREQUENCY} Kbps`}]),e.hasOwnProperty("RESERVE_PINS_serial")&&R(r=>[...r,{name:(0,n.jsx)(u.Z,{children:"UART\u5F15\u811A"}),info:`RX:${e.RESERVE_PINS_serial.split(",")[0]},  TX:${e.RESERVE_PINS_serial.split(",")[1]}`}]),e.hasOwnProperty("SERIAL_BAUD")&&R(r=>[...r,{name:(0,n.jsx)(u.Z,{children:"UART\u901F\u7387"}),info:`${e.SERIAL_BAUD} bps`}]),!e.hasOwnProperty("RESERVE_PINS_USB")||e.hasOwnProperty("RESERVE_PINS_serial")||e.hasOwnProperty("RESERVE_PINS_CAN")?e.hasOwnProperty("RESERVE_PINS_serial")||e.hasOwnProperty("SERIAL_BAUD")&&!e.hasOwnProperty("RESERVE_PINS_USB")&&!e.hasOwnProperty("RESERVE_PINS_CAN")?R(e=>[...e,{name:(0,n.jsx)(u.Z,{children:"\u901A\u4FE1\u65B9\u5F0F"}),info:(0,n.jsx)(u.Z,{children:"\u8BE5\u56FA\u4EF6\u4F7F\u7528\u4E32\u53E3UART\u4E0E\u4E0A\u4F4D\u673A\u901A\u4FE1"})}]):!e.hasOwnProperty("RESERVE_PINS_USB")&&!e.hasOwnProperty("RESERVE_PINS_serial")&&e.hasOwnProperty("RESERVE_PINS_CAN")?R(e=>[...e,{name:(0,n.jsx)(u.Z,{children:"\u901A\u4FE1\u65B9\u5F0F"}),info:(0,n.jsx)(u.Z,{children:"\u8BE5\u56FA\u4EF6\u4F7F\u7528CANBus\u4E0E\u4E0A\u4F4D\u673A\u901A\u4FE1"})}]):e.hasOwnProperty("RESERVE_PINS_USB")&&!e.hasOwnProperty("RESERVE_PINS_serial")&&e.hasOwnProperty("RESERVE_PINS_CAN")&&e.hasOwnProperty("CANBUS_BRIDGE")&&"1"==e.CANBUS_BRIDGE&&R(e=>[...e,{name:(0,n.jsx)(u.Z,{children:"\u901A\u4FE1\u65B9\u5F0F"}),info:(0,n.jsx)(u.Z,{children:"\u8BE5\u56FA\u4EF6\u4F7F\u7528USB\u6865\u63A5CANBus\u4E0E\u4E0A\u4F4D\u673A\u901A\u4FE1"})}]):R(e=>[...e,{name:(0,n.jsx)(u.Z,{children:"\u901A\u4FE1\u65B9\u5F0F"}),info:(0,n.jsx)(u.Z,{children:"\u8BE5\u56FA\u4EF6\u4F7F\u7528USB\u4E0E\u4E0A\u4F4D\u673A\u901A\u4FE1"})}]),e.hasOwnProperty("INITIAL_PINS")){var r=e.INITIAL_PINS.split(",");r?.forEach(e=>{N(r=>[...r,{pin:e.startsWith("!")?e.substring(1):e,state:e.startsWith("!")?"LOW":"HIGH"}])})}Object.entries(e).map(e=>{let[r,t]=e;if(r.startsWith("BUS_PINS_spi")){var i=r.replace("BUS_PINS_",""),n=t.split(",");O(e=>[...e,{bus:i,miso:n[0],mosi:n[1],sck:n[2]}])}else if(r.startsWith("BUS_PINS_i2c")){var i=r.replace("BUS_PINS_",""),n=t.split(",");B(e=>[...e,{bus:i,sda:n[0],scl:n[1]}])}})}C((0,n.jsx)(u.Z,{children:"\u56FA\u4EF6\u89E3\u6790\u5B8C\u6210"}))}},[g]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Z,{children:(0,n.jsx)(S,{component:"section",className:b?"highlight":"",onDrop:e=>{e.preventDefault(),w(!1);let t=e.dataTransfer.files[0];t&&r(t)},onDragOver:e=>{e.preventDefault()},onDragEnter:e=>{e.preventDefault(),w(!0)},onDragLeave:e=>{e.preventDefault(),w(!1)},children:(0,n.jsxs)(o.Z,{component:"label",role:void 0,variant:"contained",tabIndex:-1,startIcon:(0,n.jsx)(p.Z,{}),children:["Upload file",(0,n.jsx)(E,{type:"file",accept:".bin,.uf2,.dict,.elf",onChange:e=>{if(e.target.files.lenght>1){C((0,n.jsx)(u.Z,{children:"\u4E0D\u652F\u6301\u591A\u6587\u4EF6\u89E3\u6790\uFF0C\u8BF7\u9009\u62E9\u5355\u4E2A\u6587\u4EF6"}));return}if(e.target.files.lenght<1){C((0,n.jsx)(u.Z,{children:"\u8BF7\u9009\u62E9\u6587\u4EF6"}));return}r(e.target.files[0])},ref:t})]})})}),(0,n.jsx)("br",{}),(0,n.jsx)(c.Z,{variant:"middle"}),(0,n.jsx)("br",{}),(0,n.jsxs)(a.Z,{width:"100%",component:"section",sx:{p:2},children:[P.length>0&&(0,n.jsx)(y,{children:(0,n.jsxs)("table",{style:{tableLayout:"fixed",width:"100%",minWidth:"100%"},"aria-label":"custom pagination table",children:[(0,n.jsx)("caption",{children:(0,n.jsx)(u.Z,{children:"\u56FA\u4EF6\u914D\u7F6E"})}),(0,n.jsx)("thead",{style:{maxWidth:"100%",width:"100%"},children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{style:{width:"auto",minWidth:"100px"},children:"Name"}),(0,n.jsx)("th",{style:{width:"100%"},align:"right",children:"Info"})]})}),(0,n.jsx)("tbody",{children:P.map(e=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.name}),(0,n.jsx)("td",{dangerouslySetInnerHTML:{__html:e.info}})]},e.name))})]})}),Z.length>0&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsx)(y,{children:(0,n.jsxs)("table",{style:{tableLayout:"fixed",width:"100%",minWidth:"100%"},"aria-label":"custom pagination table",children:[(0,n.jsx)("caption",{children:(0,n.jsx)(u.Z,{children:"\u521D\u59CB\u5F15\u811A\u914D\u7F6E"})}),(0,n.jsx)("thead",{style:{maxWidth:"100%",width:"100%"},children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{style:{width:"auto",minWidth:"100px"},children:"Pin"}),(0,n.jsx)("th",{style:{width:"100%"},align:"right",children:"State"})]})}),(0,n.jsx)("tbody",{children:Z.map(e=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.pin}),(0,n.jsx)("td",{children:"HIGH"===e.state?(0,n.jsx)(x.Z,{label:e.state,size:"small",color:"success"}):(0,n.jsx)(x.Z,{label:e.state,size:"small",color:"primary"})})]},e.pin))})]})})]}),I.length>0&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsx)(y,{children:(0,n.jsxs)("table",{style:{tableLayout:"fixed",width:"100%",minWidth:"100%"},"aria-label":"custom pagination table",children:[(0,n.jsx)("caption",{children:(0,n.jsx)(u.Z,{children:"\u786C\u4EF6SPI\u901A\u9053\u914D\u7F6E"})}),(0,n.jsx)("thead",{style:{maxWidth:"100%",width:"100%"},children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{style:{width:"auto",minWidth:"100px"},children:"Bus"}),(0,n.jsx)("th",{style:{width:"30%"},align:"right",children:"Miso"}),(0,n.jsx)("th",{style:{width:"30%"},align:"right",children:"Mosi"}),(0,n.jsx)("th",{style:{width:"30%"},align:"right",children:"Sck"})]})}),(0,n.jsx)("tbody",{children:I.map(e=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.bus}),(0,n.jsx)("td",{children:e.miso}),(0,n.jsx)("td",{children:e.mosi}),(0,n.jsx)("td",{children:e.sck})]},e.bus))})]})})]}),A.length>0&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsx)(y,{children:(0,n.jsxs)("table",{style:{tableLayout:"fixed",width:"100%",minWidth:"100%"},"aria-label":"custom pagination table",children:[(0,n.jsx)("caption",{children:(0,n.jsx)(u.Z,{children:"\u786C\u4EF6I2C\u901A\u9053\u914D\u7F6E"})}),(0,n.jsx)("thead",{style:{maxWidth:"100%",width:"100%"},children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{style:{width:"auto",minWidth:"100px"},children:"Bus"}),(0,n.jsx)("th",{style:{width:"50%"},align:"right",children:"Sda"}),(0,n.jsx)("th",{style:{width:"50%"},align:"right",children:"Scl"})]})}),(0,n.jsx)("tbody",{children:A.map(e=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.bus}),(0,n.jsx)("td",{children:e.sda}),(0,n.jsx)("td",{children:e.scl})]},e.bus))})]})})]})]}),(0,n.jsx)(h.Z,{anchorOrigin:{vertical:"top",horizontal:"right"},open:f,message:m})]})},w={sidebar_position:1},g="Klipper \u56FA\u4EF6\u89E3\u6790\u5668",_={},P=[];function R(e){let r={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"klipper-\u56FA\u4EF6\u89E3\u6790\u5668",children:"Klipper \u56FA\u4EF6\u89E3\u6790\u5668"})}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["\u8BE5\u5DE5\u5177\u53EF\u4EE5\u4ECE Klipper \u56FA\u4EF6 ",(0,n.jsx)(r.code,{children:".bin"}),", ",(0,n.jsx)(r.code,{children:".uf2"}),", ",(0,n.jsx)(r.code,{children:".dict"}),", ",(0,n.jsx)(r.code,{children:".elf"})," \u4E2D\u63D0\u53D6\u6784\u5EFA\u4FE1\u606F\u7B49\u53C2\u6570 (\u5EFA\u8BAE\u4ECEPC\u7AEF\u8BBF\u95EE\u83B7\u5F97\u66F4\u4F73\u4F53\u9A8C)"]})}),"\n","\n",(0,n.jsx)(b,{})]})}function Z(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(R,{...e})}):R(e)}}}]);