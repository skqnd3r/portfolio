(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[362],{9428:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projets/audiovisuel",function(){return i(7991)}])},2230:function(e,s,i){"use strict";var l=i(5893);let a=e=>(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"",height:"",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{fill:e.color,d:"M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"})});s.Z=a},7192:function(e,s,i){"use strict";var l=i(5893),a=i(7294),c=i(2230);let r=e=>{let{children:s}=e,[i,r]=(0,a.useState)(0),t=e=>e<0||e>=s.length?{opacity:0,"pointer-events":"none"}:{opacity:1,"pointer-events":"initial"},n=(0,a.useMemo)(()=>s.map((e,s)=>(0,l.jsx)("div",{className:"h-fit ".concat(s==i?"opacity-1":"opacity-1 hidden pointer-events-none"),children:a.cloneElement(e,{style:{"max-height":"55vh","max-width":"fit-content",width:"100%"}})},s)),[i]);return(0,l.jsxs)("div",{className:"flex relative py-6 justify-center",children:[(0,l.jsxs)("div",{className:"relative flex h-fit",children:[(0,l.jsx)("div",{style:t(i-1),className:"flex h-full max-w-[5vw] justify-center hover:cursor-pointer absolute left-0 ml-2 z-10",onClick(){r(i-1)},children:(0,l.jsx)("div",{className:"flex rotate-180 w-10",children:(0,l.jsx)(c.Z,{color:e.arrow})})}),n,(0,l.jsx)("div",{style:t(i+1),className:"flex h-full max-w-[5vw] justify-center hover:cursor-pointer absolute right-0 mr-2 z-10",onClick(){r(i+1)},children:(0,l.jsx)("div",{className:"flex w-10",children:(0,l.jsx)(c.Z,{color:e.arrow})})})]}),(0,l.jsx)("div",{className:"absolute bottom-0 w-full",children:(0,l.jsx)("div",{className:"gap-5 flex justify-center",children:s.map((s,a)=>(0,l.jsx)("button",{onClick:()=>r(a),style:{borderColor:a==i?e.arrow:"#EBEBEB"},className:"rounded-full h-4 w-4 bg-[#ffff] border-solid border-2 drop-shadow-[1px_1px_2px_rgba(255,255,255,0.2)] "},a))})})]})};s.Z=r},8041:function(e,s,i){"use strict";var l=i(5893),a=i(7294),c=i(2265);let r=e=>{let{callback:s}=e,{setScroll:i}=(0,a.useContext)(c.Z),r=()=>{s?s():i("projet")};return(0,l.jsx)("div",{className:"fixed top-0 w-10 h-10 m-5 drop-shadow-lg hover:cursor-pointer bg-white rounded-lg flex p-2 z-20",onClick:()=>r(),children:(0,l.jsx)("svg",{width:"",height:"",viewBox:"0 0 16 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M0.000549877 4.5012C0.00682793 4.66207 0.0730625 4.84806 0.183398 4.96531L3.78351 8.79047C4.02741 9.00972 4.49529 9.10013 4.7679 8.84665C5.03644 8.59695 5.02844 8.11291 4.76099 7.86227L2.22972 5.17623L14.6257 5.17622C14.9985 5.17622 15.3008 4.87394 15.3008 4.50118C15.3008 4.12841 14.9985 3.82613 14.6257 3.82613L2.22972 3.82613L4.76099 1.14009C4.9914 0.90937 5.03393 0.408066 4.7679 0.155702C4.50203 -0.0968313 4.01752 -0.0161571 3.78351 0.212044L0.183398 4.0372C0.0601936 4.1681 0.000236102 4.32175 0.000549877 4.50131L0.000549877 4.5012Z",fill:"currentcolor"})})})};s.Z=r},7991:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return h}});var l=i(5893),a=i(7294),c=i(1163),r=i(2265),t=i(8333);let n=e=>{let s=(0,a.useRef)(null);return(0,a.useEffect)(()=>{if(void 0!=window){let s=new t.Z("player".concat(e.id),{id:e.id,responsive:!0,title:!1});s.setVolume(.7),s.on("ended",function(){s.unload(),s.exitFullscreen()})}},[]),(0,l.jsx)("div",{ref:s,id:"player".concat(e.id),className:"vimeoPlayer",style:{height:"100%",width:"100%"}})};var d=i(8041),o=i(7192);let x=()=>{let e=(0,c.useRouter)(),{setScroll:s}=(0,a.useContext)(r.Z);(0,a.useEffect)(()=>{if(e){let i=e=>{e.preventDefault(),s("projet")};return window.addEventListener("popstate",i),()=>{window.removeEventListener("popstate",i)}}},[e]);let i={fast:"#F0567F80",insec:"#bfd898",hey:"#f4a77a",photo:"#90e0ef80",ouvrir:"#CBD6E4"};return(0,l.jsxs)("div",{className:"w-full overflow-y-scroll relative",children:[(0,l.jsx)(d.Z,{}),(0,l.jsxs)("div",{className:"min-h-[90vh] h-fit flex flex-col",children:[(0,l.jsxs)("div",{className:"title",children:[(0,l.jsxs)("div",{className:"flex gap-5",children:[(0,l.jsx)("h1",{children:"Fast Life"}),(0,l.jsx)("p",{style:{backgroundColor:i.fast},className:"tag ",children:"Interview"})]}),(0,l.jsxs)("h2",{children:["Interview de ",(0,l.jsx)("a",{style:{color:i.fast},className:"font-bold hover:underline",target:"_blank",href:"https://www.voxingpro.com/doris-streibl",children:"Doris Streibl"}),' port\xe9 sur son travail d\'intervenante sp\xe9cialis\xe9 dans le style du m\xe9dia "Konbini".']})]}),(0,l.jsx)("div",{className:"content aspect-square",children:(0,l.jsx)("div",{className:"h-full w-full",children:(0,l.jsx)(n,{id:796404841})})}),(0,l.jsx)("div",{className:"description",children:(0,l.jsxs)("div",{className:"",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-y-[5%] h-fit max-w-[80%]",children:[(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("p",{className:"descTitle",children:"Exercice"}),(0,l.jsx)("p",{children:"- Travail de journalisme autour d'une th\xe8matique"}),(0,l.jsx)("p",{children:"- Appropriation d'une identit\xe9 graphique"}),(0,l.jsx)("p",{children:"- Dur\xe9e impos\xe9e : 2'00 / 2'30"})]}),(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("p",{className:"descTitle",children:"Cr\xe9dits"}),(0,l.jsx)("p",{children:"Musique : Tanguy M"})]})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1 min-w-[140px]",children:[(0,l.jsx)("p",{className:"descTitle",children:"Outils"}),(0,l.jsxs)("div",{className:"tagGrid",children:[(0,l.jsx)("p",{children:"Montage :"}),(0,l.jsx)("p",{style:{backgroundColor:i.fast},className:"tag  whitespace-nowrap",children:"Premiere Pro"}),(0,l.jsx)("p",{children:"Motion Design :"}),(0,l.jsx)("p",{style:{backgroundColor:i.fast},className:"tag  whitespace-nowrap",children:"After Effect"}),(0,l.jsx)("p",{children:"\xc9talonnage :"}),(0,l.jsx)("p",{style:{backgroundColor:i.fast},className:"tag  whitespace-nowrap",children:"Davinci Resolve"})]})]})]})})]}),(0,l.jsxs)("div",{className:"min-h-[90vh] h-fit flex flex-col",children:[(0,l.jsxs)("div",{className:"title",children:[(0,l.jsxs)("div",{className:"flex gap-5",children:[(0,l.jsx)("h1",{children:"Ins\xe9curit\xe9"}),(0,l.jsx)("p",{style:{backgroundColor:i.insec},className:"tag ",children:"Film"})]}),(0,l.jsx)("h2",{children:"Exercice de r\xe9alisation sur le th\xe8me de l'ins\xe9curit\xe9."})]}),(0,l.jsx)("div",{className:"content",children:(0,l.jsx)("div",{className:"w-fit justify-center",children:(0,l.jsxs)(o.Z,{arrow:i.insec,children:[(0,l.jsx)("img",{className:"object-contain shadow",src:"https://live.staticflickr.com/65535/52655283678_27282a6ecd_h.jpg"}),(0,l.jsx)("img",{className:"object-contain shadow",src:"https://live.staticflickr.com/65535/52675339230_a7f8063c41_h.jpg"}),(0,l.jsx)("img",{className:"object-contain shadow",src:"https://live.staticflickr.com/65535/52674886046_ac4e5f643e_h.jpg"}),(0,l.jsx)("img",{className:"object-contain shadow",src:"https://live.staticflickr.com/65535/52675384908_d13a2d3ec3_h.jpg"})]})})}),(0,l.jsx)("div",{className:"description",children:(0,l.jsxs)("div",{className:"",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-y-[5%] h-fit max-w-[80%]",children:[(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("p",{className:"descTitle",children:"Exercice"}),(0,l.jsx)("p",{children:"- Travail de Story-Boarding"}),(0,l.jsx)("p",{children:"- Initialisation au bruitage / Foley / Sound-Design"}),(0,l.jsx)("p",{children:"- Format impos\xe9 : Diaporama Photos"}),(0,l.jsx)("p",{children:"- Dur\xe9e impos\xe9e : 1'30"})]}),(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("p",{className:"descTitle",children:"Cr\xe9dits"}),(0,l.jsx)("p",{children:"Figurants : Juliette S / Dines L"})]})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1 min-w-[140px]",children:[(0,l.jsx)("p",{className:"descTitle",children:"Outils"}),(0,l.jsxs)("div",{className:"tagGrid",children:[(0,l.jsx)("p",{children:"Montage Sonore :"}),(0,l.jsx)("p",{style:{backgroundColor:i.insec},className:"tag  whitespace-nowrap",children:"Reaper"}),(0,l.jsx)("p",{children:"Montage :"}),(0,l.jsx)("p",{style:{backgroundColor:i.insec},className:"tag  whitespace-nowrap",children:" Premiere Pro"}),(0,l.jsx)("p",{children:"\xc9talonnage :"}),(0,l.jsx)("p",{style:{backgroundColor:i.insec},className:"tag  whitespace-nowrap",children:"Davinci Resolve"})]})]})]})})]}),(0,l.jsxs)("div",{className:"min-h-[90vh] h-fit flex flex-col",children:[(0,l.jsxs)("div",{className:"title",children:[(0,l.jsxs)("div",{className:"flex gap-5",children:[(0,l.jsx)("h1",{children:"Hey You"}),(0,l.jsx)("p",{style:{backgroundColor:i.hey},className:"tag ",children:"Short"})]}),(0,l.jsx)("h2",{children:"Exercice d'\xe9talonnage sur format court."})]}),(0,l.jsx)("div",{className:"content aspect-square",children:(0,l.jsx)("div",{className:"h-full w-full",children:(0,l.jsx)(n,{id:796403436})})}),(0,l.jsx)("div",{className:"description",children:(0,l.jsxs)("div",{className:"",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-y-[5%] h-fit max-w-[80%]",children:[(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("p",{className:"descTitle",children:"Exercice"}),(0,l.jsx)("p",{children:"- Travailler l'\xe9talonnage"}),(0,l.jsx)("p",{children:"- Plans fixe au tr\xe9pieds"}),(0,l.jsx)("p",{children:"- Utiliser une boucle en bande sonore"}),(0,l.jsx)("p",{children:"- Cr\xe9er des mouvement de cam\xe9ra en post-production"})]}),(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("p",{className:"descTitle",children:"Cr\xe9dits"}),(0,l.jsx)("p",{children:"Musique : XXXTENTACION - King"}),(0,l.jsx)("p",{children:"Figurant : Hugo G"})]})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1 min-w-[140px]",children:[(0,l.jsx)("p",{className:"descTitle",children:"Outils"}),(0,l.jsxs)("div",{className:"tagGrid",children:[(0,l.jsx)("p",{children:"\xc9talonnage :"}),(0,l.jsx)("p",{style:{backgroundColor:i.hey},className:"tag  whitespace-nowrap",children:"Davinci Resolve"}),(0,l.jsx)("p",{children:"Montage :"}),(0,l.jsx)("p",{style:{backgroundColor:i.hey},className:"tag  whitespace-nowrap",children:" Premiere Pro"})]})]})]})})]}),(0,l.jsxs)("div",{className:"min-h-[90vh] h-fit flex flex-col w-full",children:[(0,l.jsxs)("div",{className:"title",children:[(0,l.jsxs)("div",{className:"flex gap-5",children:[(0,l.jsx)("h1",{children:"Exploration"}),(0,l.jsx)("p",{style:{backgroundColor:i.photo},className:"tag ",children:"Photo"})]}),(0,l.jsx)("h2",{children:"R\xe9sultats des exp\xe9rimentations photographique."})]}),(0,l.jsx)("div",{className:"content",children:(0,l.jsx)("div",{className:"w-fit justify-center",children:(0,l.jsxs)(o.Z,{arrow:i.photo,children:[(0,l.jsx)("img",{className:"object-contain",src:"https://live.staticflickr.com/65535/52711785671_354ce19953_k.jpg"}),(0,l.jsx)("img",{className:"object-contain",src:"https://live.staticflickr.com/65535/52711785701_4b6bcd6468_k.jpg"}),(0,l.jsx)("img",{className:"object-contain",src:"https://live.staticflickr.com/65535/52712047114_247a5305bf_k.jpg"}),(0,l.jsx)("img",{className:"object-contain mx-1",src:"https://live.staticflickr.com/65535/52711263092_5f621237af_k.jpg"}),(0,l.jsx)("img",{className:"object-contain",src:"https://live.staticflickr.com/65535/52712047149_0d7dbce2d1_k.jpg"})]})})}),(0,l.jsx)("div",{className:"description",children:(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("div",{className:"flex flex-col gap-y-[5%] h-fit max-w-[80%]",children:(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("p",{className:"descTitle",children:"Exercice"}),(0,l.jsx)("p",{children:"- Travail sur l'ouverture, l'exposition et la composition"}),(0,l.jsx)("p",{children:"- Exp\xe9rimentation autour de l'alt\xe9ration de l'optique et la r\xe9flexion lumineuse"})]})}),(0,l.jsxs)("div",{className:"flex flex-col gap-1 min-w-[140px] w-fit",children:[(0,l.jsx)("p",{className:"descTitle",children:"Outils"}),(0,l.jsxs)("div",{className:"tagGrid",children:[(0,l.jsx)("p",{children:"DSLR :"}),(0,l.jsx)("p",{style:{backgroundColor:i.photo},className:"tag  whitespace-nowrap",children:"Nikon D5300"}),(0,l.jsx)("p",{children:"Fixe :"}),(0,l.jsx)("p",{style:{backgroundColor:i.photo},className:"tag  whitespace-nowrap",children:"50 f/1.8G"}),(0,l.jsx)("p",{children:"Zoom :"}),(0,l.jsx)("p",{style:{backgroundColor:i.photo},className:"tag  whitespace-nowrap",children:"55-200 f/4-5.6G"})]})]})]})})]}),(0,l.jsxs)("div",{className:"end min-h-[100vh] h-fit flex flex-col",children:[(0,l.jsxs)("div",{className:"title",children:[(0,l.jsxs)("div",{className:"flex gap-5",children:[(0,l.jsx)("h1",{children:"Ouvrir l'image"}),(0,l.jsx)("p",{style:{backgroundColor:i.ouvrir},className:"tag",children:"Po\xe9sie"})]}),(0,l.jsx)("h2",{children:'Travail sur le "sens" et sur le principe de "d\xe9flexion" dans la direction du regard du spectateur.'})]}),(0,l.jsx)("div",{className:"content aspect-video",children:(0,l.jsx)("div",{className:"h-full w-full",children:(0,l.jsx)(n,{id:796406420})})}),(0,l.jsx)("div",{className:"description",children:(0,l.jsxs)("div",{className:"",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-y-[5%] h-fit max-w-[80%]",children:[(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("p",{className:"descTitle",children:"Exercice"}),(0,l.jsx)("p",{children:"- Travail d'\xe9chantillonage, d'\xe9criture et de montage sonore"}),(0,l.jsx)("p",{children:"- Utilisation de flares de lumi\xe8re comme \xe9l\xe9ment de transitions"})]}),(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("p",{className:"descTitle",children:"Cr\xe9dits"}),(0,l.jsx)("p",{children:'Citations : Barbara L / Charles Bukowski / "Mr Robot" de Sam Esmail'}),(0,l.jsx)("p",{children:"Musique : Astre - Stay In Your Bed"}),(0,l.jsx)("p",{children:"Figurante : Cyrielle C"})]})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1 min-w-[140px]",children:[(0,l.jsx)("p",{className:"descTitle",children:"Outils"}),(0,l.jsxs)("div",{className:"tagGrid",children:[(0,l.jsx)("p",{children:"Montage :"}),(0,l.jsx)("p",{style:{backgroundColor:i.ouvrir},className:"tag  whitespace-nowrap",children:" Premiere Pro"}),(0,l.jsx)("p",{children:"\xc9talonnage :"}),(0,l.jsx)("p",{style:{backgroundColor:i.ouvrir},className:"tag  whitespace-nowrap",children:"Davinci Resolve"})]})]})]})})]})]})};var h=x}},function(e){e.O(0,[333,774,888,179],function(){return e(e.s=9428)}),_N_E=e.O()}]);