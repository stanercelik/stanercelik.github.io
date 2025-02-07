(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2068:function(e,t,i){Promise.resolve().then(i.bind(i,2573)),Promise.resolve().then(i.bind(i,16)),Promise.resolve().then(i.bind(i,2802)),Promise.resolve().then(i.bind(i,3322))},2573:function(e,t,i){"use strict";var a=i(7437),n=i(5166),s=i(5135),l=i(598),o=i(9345);t.default=()=>(0,a.jsxs)("section",{id:"contact",className:"py-20",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-10 text-center",children:"Contact"}),(0,a.jsxs)(n.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"max-w-md mx-auto text-center",children:[(0,a.jsx)("p",{className:"mb-8",children:"I'm always open to new opportunities and collaborations. Feel free to reach out!"}),(0,a.jsxs)("div",{className:"flex justify-center space-x-6",children:[(0,a.jsx)("a",{href:"https://github.com/stanercelik",target:"_blank",rel:"noopener noreferrer",className:"hover:text-primary transition-colors",children:(0,a.jsx)(s.Z,{size:24})}),(0,a.jsx)("a",{href:"https://linkedin.com/in/tanerc",target:"_blank",rel:"noopener noreferrer",className:"hover:text-primary transition-colors",children:(0,a.jsx)(l.Z,{size:24})}),(0,a.jsx)("a",{href:"mailto:tanercelik2001@gmail.com",className:"hover:text-primary transition-colors",children:(0,a.jsx)(o.Z,{size:24})})]})]})]})},16:function(e,t,i){"use strict";var a=i(7437),n=i(5166),s=i(3145),l=i(2265);let o=new(i(7970)).Z;t.default=()=>{let[e,t]=(0,l.useState)("rgba(0,0,0,0.1)");return(0,l.useEffect)(()=>{(async()=>{try{let e=await o.getColorAsync("/images/profile.jpg");t(e.rgba)}catch(e){console.error("Error getting dominant color:",e)}})()},[]),(0,a.jsx)("section",{id:"about",className:"py-24 px-6",children:(0,a.jsx)(n.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"max-w-4xl mx-auto",children:(0,a.jsxs)("div",{className:"flex flex-col md:flex-row items-center gap-12",children:[(0,a.jsx)(n.E.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.2},className:"w-48 h-48 relative rounded-full overflow-hidden",style:{boxShadow:"0 4px 30px ".concat(e)},children:(0,a.jsx)(s.default,{src:"/images/profile.jpg",alt:"Salim Taner \xc7elik",fill:!0,className:"object-cover",priority:!0})}),(0,a.jsxs)(n.E.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.3},className:"flex-1 text-left",children:[(0,a.jsx)("h1",{className:"text-4xl font-bold mb-4 text-foreground",children:"Salim Taner \xc7elik"}),(0,a.jsx)("h2",{className:"text-2xl text-muted-foreground mb-6",children:"Mobile App Developer"}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("p",{className:"text-lg leading-relaxed text-muted-foreground",children:"I am a passionate mobile developer specializing in creating innovative applications using Swift and Flutter. With a keen eye for detail and a love for clean, efficient code, I bring ideas to life through beautiful and functional mobile experiences."}),(0,a.jsx)("p",{className:"text-lg leading-relaxed text-muted-foreground",children:"I embrace failures as opportunities for growth and am always eager to take on new challenges. As they say:"}),(0,a.jsx)("p",{className:"text-xl italic text-foreground border-l-4 border-border pl-4 my-4",children:"\"The magic you're looking for is in the work you're avoiding.\""})]})]})]})})})}},2802:function(e,t,i){"use strict";var a=i(7437),n=i(5166),s=i(8614),l=i(3145),o=i(7648),r=i(9089),c=i(4295),d=i(2265);let m=new(i(7970)).Z,p=[{id:1,title:"POLYSLEEP",description:"A polyphasic sleep scheduling iOS app that generates personalized sleep plans based on user preferences.",images:["/images/polysleep/polysleep-3.jpg","/images/polysleep/polysleep-1.jpg","/images/polysleep/polysleep-2.jpg"],technologies:["SwiftUI","MVVM","SwiftData","RevenueCat","UserNotifications","AVFoundation","Localization"],link:"https://github.com/stanercelik/PolySleep",githubLink:!0,status:"In Development"},{id:2,title:"LOOM AI",description:"An AI-powered Turkish carpet generation app using Fal.AI models for custom carpet designs.",images:["/images/loom-ai/loomai-1.jpg","/images/loom-ai/loomai-2.jpg","/images/loom-ai/loomai-3.jpg"],technologies:["Flutter","Fal.AI","GetX","SharedPreferences"],link:"https://github.com/stanercelik/LoomAI",githubLink:!0},{id:3,title:"BILDIRGEC APP",description:"An interactive word-guessing game with AI-based word similarity ranking.",images:["/images/bildirgec/image1.jpg","/images/bildirgec/image2.jpg","/images/bildirgec/image3.jpg"],technologies:["Flutter","GetX","MVVM","FastText","Flask API"],links:[{title:"Client",url:"https://github.com/stanercelik/bildirgec-client",icon:r.hJX},{title:"Backend",url:"https://github.com/stanercelik/bildirgec-backend",icon:r.hJX}],githubLink:!0,multipleLinks:!0},{id:4,title:"TESBEE APP",description:"A realistic prayer bead application for tracking dhikrs with haptic feedback.",images:["/images/tesbee/tesbee-1.jpg","/images/tesbee/tesbee-2.jpg","/images/tesbee/tesbee-3.jpg","/images/tesbee/tesbee-4.jpg","/images/tesbee/tesbee-5.jpg"],technologies:["Flutter","GetX","MVVM","Firebase","Google Ads"],links:[{title:"GitHub",url:"https://github.com/stanercelik/TesbeeApp",icon:r.hJX},{title:"Google Play",url:"https://play.google.com/store/apps/details?id=com.tesbee.release&hl=tr",icon:r.Wfz}],multipleLinks:!0},{id:5,title:"VYZE",description:"A virtual try-on and outfit recommendation app inspired by Google's visual try-on models.",images:["/images/virtual-try-on/vyze-1.png","/images/virtual-try-on/vyze-2.png","/images/virtual-try-on/vyze-3.png","/images/virtual-try-on/vyze-4.png"],technologies:["Flutter","Clean Architecture","MobX","AWS Lambda","AWS S3","AWS DynamoDB"],link:"/projects/virtual-try-on"}];t.default=()=>{let[e,t]=(0,d.useState)(null),[i,g]=(0,d.useState)({}),[u,x]=(0,d.useState)({}),h=async(e,t)=>{try{let i=await m.getColorAsync(t);x(a=>({...a,["".concat(e,"-").concat(t)]:i.rgba}))}catch(e){console.error("Error getting dominant color:",e)}},b=(e,t)=>{t.stopPropagation(),t.preventDefault();let i=p.find(t=>t.id===e);i&&g(t=>({...t,[e]:((t[e]||0)+1)%i.images.length}))},f=(e,t)=>{t.stopPropagation(),t.preventDefault();let i=p.find(t=>t.id===e);i&&g(t=>({...t,[e]:((t[e]||0)-1+i.images.length)%i.images.length}))};return(0,d.useEffect)(()=>{p.forEach(e=>{e.images.forEach(t=>{h(e.id,t)})})},[]),(0,a.jsxs)("section",{id:"projects",className:"py-20 noise gradient-bg",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-10 text-center",children:"Projects"}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4",children:p.map((d,m)=>{var p;let x=d.images[i[d.id]||0],h=u["".concat(d.id,"-").concat(x)]||"rgba(0,0,0,0.1)";return(0,a.jsx)("div",{className:"relative",style:{height:"fit-content"},children:(0,a.jsxs)(n.E.div,{onHoverStart:()=>t(d.id),onHoverEnd:()=>{t(null),g({})},className:"rounded-lg overflow-hidden transition-all duration-700 relative group",animate:{zIndex:e===d.id?10:0,scale:e===d.id?1.05:1},transition:{duration:.5,ease:[.4,0,.2,1]},style:{boxShadow:"0 4px 30px ".concat(h),height:e===d.id?"auto":"100%",background:"transparent"},children:[(0,a.jsxs)(n.E.div,{className:"relative w-full",animate:{aspectRatio:e===d.id?"2/3":"4/3"},transition:{duration:.7,ease:[.4,0,.2,1]},children:[(0,a.jsx)(s.M,{mode:"wait",children:(0,a.jsx)(n.E.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:1.05},transition:{duration:.5,ease:[.4,0,.2,1]},className:"absolute inset-0",children:(0,a.jsxs)("div",{className:"relative w-full h-full flex items-center justify-center",children:[(0,a.jsx)(l.default,{src:x,alt:"Project ".concat(d.title," screenshot ").concat(i[d.id]||1),quality:95,fill:!0,className:"transition-all duration-700 ".concat(e===d.id?"object-contain":"object-cover blur-sm scale-105"),sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}),(0,a.jsx)(n.E.div,{initial:!1,animate:{opacity:e===d.id?0:.7,y:e===d.id?-20:0},transition:{duration:.5,ease:[.4,0,.2,1]},className:"absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent via-transparent to-transparent backdrop-blur-[1px]",children:(0,a.jsx)("h3",{className:"text-2xl font-bold text-white text-center px-4",children:d.title})})]})},"".concat(d.id,"-").concat(i[d.id]||0))}),e===d.id&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.E.button,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e=>f(d.id,e),className:"absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors duration-300 z-10 backdrop-blur-sm",children:(0,a.jsx)(c.u1R,{size:20})}),(0,a.jsx)(n.E.button,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e=>b(d.id,e),className:"absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors duration-300 z-10 backdrop-blur-sm",children:(0,a.jsx)(c.hjJ,{size:20})}),(0,a.jsx)(n.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10",children:d.images.map((e,t)=>(0,a.jsx)("div",{className:"w-1.5 h-1.5 rounded-full transition-all duration-300 ".concat((i[d.id]||0)===t?"bg-white scale-125":"bg-white/50")},t))})]})]}),(0,a.jsxs)(n.E.div,{className:"p-6 flex flex-col flex-grow relative z-10 bg-transparent h-[280px]",animate:{opacity:e===d.id?1:.9},transition:{duration:.5},children:[(0,a.jsx)(n.E.h3,{className:"text-xl font-bold mb-2",animate:{opacity:e===d.id?1:0},transition:{duration:.3},children:d.title}),d.status&&(0,a.jsx)("span",{className:"px-2 py-1 text-xs mb-2 inline-block w-fit rounded-full border border-current",children:d.status}),(0,a.jsx)("p",{className:"text-muted-foreground mb-4 line-clamp-2",children:d.description}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2 mb-6",children:d.technologies.map(e=>(0,a.jsx)("span",{className:"px-2 py-1 text-xs rounded-md border border-current/20",children:e},e))}),d.multipleLinks?(0,a.jsx)("div",{className:"flex gap-2 mt-auto",children:null===(p=d.links)||void 0===p?void 0:p.map((e,t)=>(0,a.jsxs)(o.default,{href:e.url,target:"_blank",className:"flex-1 px-4 py-2 rounded-md border border-current hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 text-center flex items-center justify-center gap-2",children:["icon"in e&&(0,a.jsx)(e.icon,{className:"text-lg"}),e.title]},t))}):d.link?(0,a.jsxs)(o.default,{href:d.link,target:d.githubLink?"_blank":"_self",className:"mt-auto inline-block w-full px-4 py-2 rounded-md border border-current hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 text-center flex items-center justify-center gap-2",children:[d.githubLink&&(0,a.jsx)(r.hJX,{className:"text-lg"}),d.githubLink?"GitHub":"Learn More"]}):null]})]})},d.id)})})]})}},3322:function(e,t,i){"use strict";var a=i(7437),n=i(5166),s=i(2909),l=i(3253);let o=[{category:"Programming Languages",items:[{name:"Swift",icon:s.dk6},{name:"Dart",icon:s.nB2},{name:"Kotlin",icon:s.adW},{name:"Python",icon:s.Cul},{name:"SQL",icon:s.uJt}]},{category:"Frameworks and Libraries",items:[{name:"Flutter",icon:s.Bq1},{name:"SwiftUI",icon:s.dk6},{name:"UIKit",icon:s.dk6},{name:"Jetpack Compose",icon:s.k06},{name:"GetX",icon:l.ECw},{name:"MobX",icon:l.ECw}]},{category:"Database Management",items:[{name:"MySQL",icon:s.uJt},{name:"SwiftData",icon:s.dk6},{name:"DynamoDB",icon:s.VVh},{name:"Firebase Firestore",icon:s.xEg}]},{category:"Backend and Cloud Services",items:[{name:"AWS (RDS, S3)",icon:s.b$D},{name:"Firebase",icon:s.xEg},{name:"RESTful APIs",icon:l.ECw}]},{category:"Design and Development Tools",items:[{name:"Git",icon:s.zS0},{name:"JIRA",icon:s.oHM},{name:"Figma",icon:s.q0x},{name:"Confluence",icon:l.ECw},{name:"BitBucket",icon:s.KjQ}]}];t.default=()=>(0,a.jsxs)("section",{id:"skills",className:"py-20",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-10 text-center",children:"Skills"}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:o.map((e,t)=>(0,a.jsxs)(n.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},className:"bg-card rounded-lg p-6 shadow-lg",children:[(0,a.jsx)("h3",{className:"text-xl font-semibold mb-4",children:e.category}),(0,a.jsx)("ul",{className:"space-y-2",children:e.items.map(e=>(0,a.jsxs)("li",{className:"flex items-center gap-2",children:[(0,a.jsx)(e.icon,{className:"text-xl text-primary"}),e.name]},e.name))})]},e.category))})]})}},function(e){e.O(0,[957,452,699,614,61,971,117,744],function(){return e(e.s=2068)}),_N_E=e.O()}]);