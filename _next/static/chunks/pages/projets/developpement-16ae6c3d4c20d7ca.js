(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[959],{6843:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projets/developpement",function(){return i(4399)}])},2230:function(e,s,i){"use strict";var t=i(5893);let l=e=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"",height:"",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{fill:null==e?void 0:e.color,d:"M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"})});s.Z=l},7192:function(e,s,i){"use strict";var t=i(5893),l=i(7294),c=i(2230);let n=e=>{let{children:s}=e,[i,n]=(0,l.useState)(0),a=e=>e<0||e>=s.length?{opacity:0,"pointer-events":"none"}:{opacity:1,"pointer-events":"initial"},r=(0,l.useMemo)(()=>s.map((e,s)=>(0,t.jsx)("div",{className:"h-fit ".concat(s==i?"opacity-1":"opacity-1 hidden pointer-events-none"),children:l.cloneElement(e,{style:{"max-height":"55vh","max-width":"fit-content",width:"100%"}})},s)),[i]);return(0,t.jsxs)("div",{className:"flex relative py-6 justify-center",children:[(0,t.jsxs)("div",{className:"relative flex h-fit",children:[(0,t.jsx)("div",{style:a(i-1),className:"flex h-full max-w-[5vw] justify-center hover:cursor-pointer absolute left-0 ml-2 z-10",onClick(){n(i-1)},children:(0,t.jsx)("div",{className:"flex rotate-180 w-10",children:(0,t.jsx)(c.Z,{color:"#efefef"})})}),r,(0,t.jsx)("div",{style:a(i+1),className:"flex h-full max-w-[5vw] justify-center hover:cursor-pointer absolute right-0 mr-2 z-10",onClick(){n(i+1)},children:(0,t.jsx)("div",{className:"flex w-10",children:(0,t.jsx)(c.Z,{color:"#efefef"})})})]}),(0,t.jsx)("div",{className:"absolute bottom-0 w-full",children:(0,t.jsx)("div",{className:"gap-5 flex justify-center",children:s.map((e,s)=>(0,t.jsx)("button",{onClick:()=>n(s),className:"rounded-full h-4 w-4 bg-[#ffff] border-solid border-2 drop-shadow-[1px_1px_2px_rgba(255,255,255,0.2)] ".concat(s==i?"border-[#DDDDDD]":"border-[#EBEBEB]")},s))})})]})};s.Z=n},3318:function(e,s,i){"use strict";var t=i(5893),l=i(7294);let c=e=>{let s=(0,l.useRef)(null),[i,c]=(0,l.useState)(void 0);return(0,l.useEffect)(()=>{window&&c(window.innerWidth)},[]),(0,l.useEffect)(()=>{window&&c(window.innerWidth)},[]),(0,l.useEffect)(()=>{let t=s.current;if(t){let l=()=>{var s,l;let n=null===(s=t.parentNode)||void 0===s?void 0:null===(l=s.parentNode)||void 0===l?void 0:l.parentNode,a=t.parentElement;if(4==t.readyState&&n instanceof HTMLElement&&a instanceof HTMLElement){let r=Math.round(t.clientHeight*t.videoWidth/t.videoHeight);0!=r&&void 0!=i&&(t.removeAttribute("poster"),t.style.width="fit-content",t.style.height="fit-content",i<window.innerWidth&&n.classList.contains("relative")&&(n.style.maxWidth="fit-content"),n.classList.contains("relative")&&(n.style.maxWidth="".concat(Math.round(t.clientHeight*t.videoWidth/t.videoHeight),"px")),t.hasAttribute("poster")||(t.style.width="".concat(Math.round(t.clientHeight*t.videoWidth/t.videoHeight),"px"),t.style.height="".concat(Math.round(t.clientWidth*t.videoHeight/t.videoWidth),"px")),c(window.innerWidth))}t.hasAttribute("poster")||(t.setAttribute("poster",e.poster),t.load())};return t.addEventListener("loadedmetadata",l),window.addEventListener("resize",l),()=>{t.removeEventListener("loadedmetadata",l),window.removeEventListener("resize",l)}}},[s,i]),(0,t.jsx)("div",{className:"max-h-[55vh] w-full h-full flex",children:(0,t.jsx)("video",{ref:s,width:"fit-content",muted:!0,onMouseEnter(){var e;null===(e=s.current)||void 0===e||e.play()},onMouseLeave(){var e;null===(e=s.current)||void 0===e||e.pause()},children:(0,t.jsx)("source",{src:e.url,type:"video/mp4"})})},e.url)};s.Z=c},8041:function(e,s,i){"use strict";var t=i(5893),l=i(7294),c=i(2265);let n=e=>{let{callback:s}=e,{setScroll:i}=(0,l.useContext)(c.Z),n=()=>{s?s():i("projet")};return(0,t.jsx)("div",{className:"fixed top-0 w-10 h-10 m-5 drop-shadow-lg hover:cursor-pointer bg-white rounded-lg flex p-2 z-20",onClick:()=>n(),children:(0,t.jsx)("svg",{width:"",height:"",viewBox:"0 0 16 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M0.000549877 4.5012C0.00682793 4.66207 0.0730625 4.84806 0.183398 4.96531L3.78351 8.79047C4.02741 9.00972 4.49529 9.10013 4.7679 8.84665C5.03644 8.59695 5.02844 8.11291 4.76099 7.86227L2.22972 5.17623L14.6257 5.17622C14.9985 5.17622 15.3008 4.87394 15.3008 4.50118C15.3008 4.12841 14.9985 3.82613 14.6257 3.82613L2.22972 3.82613L4.76099 1.14009C4.9914 0.90937 5.03393 0.408066 4.7679 0.155702C4.50203 -0.0968313 4.01752 -0.0161571 3.78351 0.212044L0.183398 4.0372C0.0601936 4.1681 0.000236102 4.32175 0.000549877 4.50131L0.000549877 4.5012Z",fill:"currentcolor"})})})};s.Z=n},4399:function(e,s,i){"use strict";i.r(s);var t=i(5893),l=i(3318),c=i(7192),n=i(8041);let a=()=>{let e={minitel:"bg-[#5CA8FF]",resto:"bg-[#f0c771]",runner:"bg-[#FDC4C480]",shop:"bg-[#c6f1ed]"};return(0,t.jsxs)("div",{className:"w-full overflow-y-scroll",children:[(0,t.jsx)(n.Z,{}),(0,t.jsxs)("div",{className:"min-h-[90vh] h-fit flex flex-col",children:[(0,t.jsxs)("div",{className:"title",children:[(0,t.jsxs)("div",{className:"flex gap-5",children:[(0,t.jsx)("h1",{children:"Minitel"}),(0,t.jsx)("p",{className:"tag ".concat(e.minitel),children:"Application"})]}),(0,t.jsx)("h2",{children:"D\xe9veloppement d'une interface CLI en Python permettant d'affichage les informations."})]}),(0,t.jsx)("div",{className:"content",children:(0,t.jsx)("div",{className:"contentChild",children:(0,t.jsx)(l.Z,{url:"https://www.flickr.com/photos/197545131@N02/52654311186/play/1080p/e6f7dafeae/",poster:"https://live.staticflickr.com/65535/52703541017_258829b397_h.jpg"})})}),(0,t.jsx)("div",{className:"description",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"flex flex-col gap-y-[5%] h-fit",children:(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("p",{className:"descTitle",children:"Exercice"}),(0,t.jsx)("p",{children:"- Affichage d'information du Syst\xe8me"}),(0,t.jsx)("p",{children:"- Affichage d'information du R\xe9seau (Interfaces, Routes, Ip Forwarding)"}),(0,t.jsx)("p",{children:"- Affichage d'information du Processus (triable)"}),(0,t.jsx)("p",{children:"- Export de toutes les informations au format .json compr\xe9ss\xe9 en un ficher .tar"})]})}),(0,t.jsxs)("div",{className:"flex flex-col gap-1 min-w-[140px]",children:[(0,t.jsx)("p",{className:"descTitle",children:"Outils"}),(0,t.jsxs)("div",{className:"tagGrid",children:[(0,t.jsx)("p",{children:"Language :"}),(0,t.jsx)("p",{className:"tag ".concat(e.minitel," whitespace-nowrap"),children:"Python"}),(0,t.jsx)("p",{children:"Librairie :"}),(0,t.jsx)("p",{className:"tag ".concat(e.minitel," whitespace-nowrap"),children:"Curses"}),(0,t.jsx)("p",{children:"Interface :"}),(0,t.jsx)("p",{className:"tag ".concat(e.minitel," whitespace-nowrap"),children:"CLI"})]})]})]})})]}),(0,t.jsxs)("div",{className:"min-h-[90vh] h-fit flex flex-col",children:[(0,t.jsxs)("div",{className:"title",children:[(0,t.jsxs)("div",{className:"flex gap-5",children:[(0,t.jsx)("h1",{children:"RestoAd"}),(0,t.jsx)("p",{className:"tag ".concat(e.resto),children:"Mobile"})]}),(0,t.jsx)("h2",{children:"D\xe9veloppement d'une application Mobile de r\xe9pertoire de restaurant."})]}),(0,t.jsxs)("div",{className:"content aspect-square flex justify-center items-center gap-[15%] px-10",children:[(0,t.jsx)("div",{className:"h-fit rounded-2xl overflow-hidden shadow",children:(0,t.jsx)(l.Z,{url:"https://www.flickr.com/photos/197545131@N02/52653874392/play/1080p/fed435f90c/",poster:"https://live.staticflickr.com/65535/52704483400_c268662d3a_c.jpg"})}),(0,t.jsx)("div",{className:"h-fit rounded-2xl overflow-hidden shadow",children:(0,t.jsx)(l.Z,{url:"https://www.flickr.com/photos/197545131@N02/52654642829/play/1080p/087363572d/",poster:"https://live.staticflickr.com/65535/52704317764_6573c53e0a_c.jpg"})})]}),(0,t.jsx)("div",{className:"description",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"flex flex-col gap-y-[5%] h-fit",children:(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("p",{className:"descTitle",children:"Exercice"}),(0,t.jsx)("p",{children:"- Afficher les diff\xe9rents restaurant"}),(0,t.jsx)("p",{children:"- Possibilit\xe9 de cr\xe9er un restaurant ainsi que des menus pour communiquer leurs informations"}),(0,t.jsx)("p",{children:"- Possibilit\xe9 en tant qu'utilisateur d'\xe9mettre des avis aux restaurants et aux menus"})]})}),(0,t.jsxs)("div",{className:"flex flex-col gap-1 min-w-[140px]",children:[(0,t.jsx)("p",{className:"descTitle",children:"Outils"}),(0,t.jsxs)("div",{className:"tagGrid",children:[(0,t.jsx)("p",{children:"Language :"}),(0,t.jsx)("p",{className:"tag ".concat(e.resto," whitespace-nowrap"),children:"Java"}),(0,t.jsx)("p",{children:"Api :"}),(0,t.jsx)("p",{className:"tag ".concat(e.resto," whitespace-nowrap"),children:"Laravel"}),(0,t.jsx)("p",{children:"Environnement :"}),(0,t.jsx)("p",{className:"tag ".concat(e.resto," whitespace-nowrap"),children:"Android"})]})]})]})})]}),(0,t.jsxs)("div",{className:"min-h-[90vh] h-fit flex flex-col",children:[(0,t.jsxs)("div",{className:"title",children:[(0,t.jsxs)("div",{className:"flex gap-5",children:[(0,t.jsx)("h1",{children:"Runner2D"}),(0,t.jsx)("p",{className:"tag ".concat(e.runner),children:"Game"})]}),(0,t.jsx)("h2",{children:"D\xe9veloppement d'un jeux de type Endless Runner en 2D."})]}),(0,t.jsx)("div",{className:"content",children:(0,t.jsx)("div",{className:"contentChild flex max-h-[60vh] h-full",children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(l.Z,{url:"https://www.flickr.com/photos/197545131@N02/52654804250/play/1080p/fbb41db9da/",poster:"https://live.staticflickr.com/65535/52704547673_bc2b2781d0_c.jpg"}),(0,t.jsx)(l.Z,{url:"https://www.flickr.com/photos/197545131@N02/52654642899/play/1080p/88dc735475/",poster:"https://live.staticflickr.com/65535/52704483420_7bdcd71b0f_c.jpg"})]})})}),(0,t.jsx)("div",{className:"description",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"flex flex-col gap-y-[5%] h-fit",children:(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("p",{className:"descTitle",children:"Exercice"}),(0,t.jsx)("p",{children:"- Cr\xe9er une interface graphique"}),(0,t.jsx)("p",{children:"- Initiation aux base du d\xe9veloppement du jeu vid\xe9o (mouvement, hit-box, \xe9tats de jeu)"}),(0,t.jsx)("p",{children:"- Utilisation de structures et de Macros"})]})}),(0,t.jsxs)("div",{className:"flex flex-col gap-1 min-w-[140px]",children:[(0,t.jsx)("p",{className:"descTitle",children:"Outils"}),(0,t.jsxs)("div",{className:"tagGrid",children:[(0,t.jsx)("p",{children:"Language :"}),(0,t.jsx)("p",{className:"tag ".concat(e.runner," whitespace-nowrap"),children:"C"}),(0,t.jsx)("p",{children:"Librairie :"}),(0,t.jsx)("p",{className:"tag ".concat(e.runner," whitespace-nowrap"),children:"SDL2"}),(0,t.jsx)("p",{children:"Environnement :"}),(0,t.jsx)("p",{className:"tag ".concat(e.runner," whitespace-nowrap"),children:"Linux"})]})]})]})})]}),(0,t.jsxs)("div",{className:"min-h-[100vh] h-fit flex flex-col",children:[(0,t.jsxs)("div",{className:"title",children:[(0,t.jsxs)("div",{className:"flex gap-5",children:[(0,t.jsx)("h1",{children:"Shoptafleur"}),(0,t.jsx)("p",{className:"tag ".concat(e.shop),children:"Web"})]}),(0,t.jsx)("h2",{children:"D\xe9veloppement d'un site Web d'E-Commerce de plante"})]}),(0,t.jsx)("div",{className:"content",children:(0,t.jsx)("div",{className:"h-full max-h-[60vh] flex justify-center",children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(l.Z,{url:"https://www.flickr.com/photos/197545131@N02/52654804325/play/1080p/15d89a4dec/",poster:"https://live.staticflickr.com/65535/52704317789_7929adbf96_k.jpg"}),(0,t.jsx)(l.Z,{url:"https://www.flickr.com/photos/197545131@N02/52654847508/play/1080p/1de8265a38/",poster:"https://live.staticflickr.com/65535/52704062316_ac4383f242_k.jpg"})]})})}),(0,t.jsx)("div",{className:"description",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"flex flex-col gap-y-[5%] h-fit",children:(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("p",{className:"descTitle",children:"Exercice"}),(0,t.jsx)("p",{children:"- Ajouter / Modifier des articles en tant qu'administrateur"}),(0,t.jsx)("p",{children:"- Ajouter / supprimer  des articles des articles de son panier"}),(0,t.jsx)("p",{children:"- Syst\xe8me d'authentification, r\xe9initialisation de mot de passe"})]})}),(0,t.jsxs)("div",{className:"flex flex-col gap-1 min-w-[140px]",children:[(0,t.jsx)("p",{className:"descTitle",children:"Outils"}),(0,t.jsxs)("div",{className:"tagGrid",children:[(0,t.jsx)("p",{children:"Language :"}),(0,t.jsx)("p",{className:"tag ".concat(e.shop," whitespace-nowrap"),children:"PHP"}),(0,t.jsx)("p",{children:"Framework :"}),(0,t.jsx)("p",{className:"tag ".concat(e.shop," whitespace-nowrap"),children:"Laravel"})]})]})]})})]})]})};s.default=a}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6843)}),_N_E=e.O()}]);