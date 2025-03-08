import{Da as x,Fa as l,Ha as e,Ia as i,Ja as r,Ka as y,La as p,Ma as g,Oa as d,Pa as m,V as f,Wa as S,ba as h,ca as v,qa as u,rb as b,ta as s,ub as _}from"./chunk-LSP3SLHG.js";function w(c,o){if(c&1){let n=y();e(0,"div",16),p("click",function(){let a=h(n).index,k=g();return v(k.playSong(a))}),r(1,"img",17),e(2,"div",18)(3,"p",19),d(4),i(),e(5,"p",10),d(6),i()(),e(7,"span",20),r(8,"img",14),i()()}if(c&2){let n=o.$implicit,t=o.index,a=g();s(),l("src",n.cover,u),s(3),m(n.title),s(2),m(n.artist),s(2),l("src",a.currentSongIndex===t&&a.isPlaying?"assets/icons/pause.png":"assets/icons/play.png",u)}}var P=class c{songs=[{title:"Just Pretend",artist:"Malos Presagios",cover:"/assets/portadas/justpretend.png",file:"/assets/audio/justPretend.mp3"},{title:"Avalanche",artist:"Bring Me The Horizon",cover:"/assets/portadas/avalanche.png",file:"/assets/audio/Avalanche.mp3"},{title:"Antes de Perderte",artist:"Duki",cover:"/assets/portadas/antesPerderte.jfif",file:"/assets/audio/AntesDePerderte.mp3"},{title:"Tofu Delivery",artist:"Orslok-Rojuu",cover:"/assets/portadas/tofu.jfif",file:"/assets/audio/tofu.mp3"},{title:"A la Tumba",artist:"Natos y Waor - Recycled J",cover:"/assets/portadas/tumba.jfif",file:"/assets/audio/ALaTumba.mp3"},{title:"Doomed",artist:"Bring Me The Horizon",cover:"/assets/portadas/doomed.png",file:"/assets/audio/Doomed.mp3"},{title:"Platos Rotos",artist:"Natos y Waor - Recycled J",cover:"/assets/portadas/platos.jfif",file:"/assets/audio/Platos.mp3"},{title:"Llorando Sangre",artist:"Rojuu",cover:"/assets/portadas/llorando.jfif",file:"/assets/audio/llorando.mp3"},{title:"Antivist",artist:"Bring Me The Horizon",cover:"/assets/portadas/anti.jfif",file:"/assets/audio/antivist.mp3"},{title:"Se que no debo",artist:"Orslok",cover:"/assets/portadas/no debo.jfif",file:"/assets/audio/no debo.mp3"}];currentSongIndex=0;currentSong=this.songs[0];audioPlayer=new Audio;isPlaying=!1;ngOnInit(){this.loadSong()}loadSong(){this.audioPlayer.src=this.currentSong.file,this.audioPlayer.load()}playSong(o){this.currentSongIndex=o,this.currentSong=this.songs[o],this.loadSong(),this.playPause()}playPause(){this.audioPlayer.paused?(this.audioPlayer.play(),this.isPlaying=!0):(this.audioPlayer.pause(),this.isPlaying=!1)}nextSong(){this.currentSongIndex=(this.currentSongIndex+1)%this.songs.length,this.currentSong=this.songs[this.currentSongIndex],this.loadSong(),this.isPlaying&&this.audioPlayer.play()}previousSong(){this.currentSongIndex=(this.currentSongIndex-1+this.songs.length)%this.songs.length,this.currentSong=this.songs[this.currentSongIndex],this.loadSong(),this.isPlaying&&this.audioPlayer.play()}static \u0275fac=function(n){return new(n||c)};static \u0275cmp=f({type:c,selectors:[["app-musica"]],standalone:!0,features:[S],decls:21,vars:5,consts:[[1,"min-h-screen","flex","items-center","justify-center","bg-gradient-to-r","from-purple-100","to-pink-100","py-12","animate-gradient"],[1,"bg-white","rounded-2xl","shadow-2xl","p-8","max-w-6xl","w-full"],[1,"text-4xl","font-bold","text-pink-600","mb-8","text-center"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-4","xl:grid-cols-5","gap-6"],["class","flex flex-col items-center p-4 rounded-xl cursor-pointer hover:bg-pink-50 transition duration-300 transform hover:scale-105",3,"click",4,"ngFor","ngForOf"],[1,"mt-8","bg-pink-50","rounded-xl","p-6","shadow-inner"],[1,"flex","items-center","space-x-6"],["alt","Portada de la canci\xF3n actual",1,"w-16","h-16","rounded-lg","shadow-md",3,"src"],[1,"flex-1"],[1,"text-xl","font-semibold","text-pink-600"],[1,"text-sm","text-gray-500"],[1,"flex","items-center","space-x-4"],[1,"p-3","bg-pink-600","text-white","rounded-full","hover:bg-pink-700","transition","duration-300","transform","hover:scale-110",3,"click"],["src","assets/icons/Back.png","alt","Anterior",1,"w-6","h-6"],["alt","Play/Pause",1,"w-6","h-6",3,"src"],["src","assets/icons/Forward.png","alt","Siguiente",1,"w-6","h-6"],[1,"flex","flex-col","items-center","p-4","rounded-xl","cursor-pointer","hover:bg-pink-50","transition","duration-300","transform","hover:scale-105",3,"click"],["alt","Portada del \xE1lbum",1,"w-full","h-48","object-cover","rounded-lg","shadow-md",3,"src"],[1,"mt-4","text-center"],[1,"text-lg","font-semibold","text-pink-600"],[1,"mt-2","text-pink-600"]],template:function(n,t){n&1&&(e(0,"div",0)(1,"div",1)(2,"h2",2),d(3,"Nuestras Canciones"),i(),e(4,"div",3),x(5,w,9,4,"div",4),i(),e(6,"div",5)(7,"div",6),r(8,"img",7),e(9,"div",8)(10,"p",9),d(11),i(),e(12,"p",10),d(13),i()(),e(14,"div",11)(15,"button",12),p("click",function(){return t.previousSong()}),r(16,"img",13),i(),e(17,"button",12),p("click",function(){return t.playPause()}),r(18,"img",14),i(),e(19,"button",12),p("click",function(){return t.nextSong()}),r(20,"img",15),i()()()()()()),n&2&&(s(5),l("ngForOf",t.songs),s(3),l("src",t.currentSong.cover,u),s(3),m(t.currentSong.title),s(2),m(t.currentSong.artist),s(5),l("src",t.isPlaying?"assets/icons/pause.png":"assets/icons/play.png",u))},dependencies:[_,b],styles:["@keyframes _ngcontent-%COMP%_gradientAnimation{0%{background-position:0% 50%}50%{background-position:100% 50%}to{background-position:0% 50%}}.animate-gradient[_ngcontent-%COMP%]{background:linear-gradient(270deg,#fbcfe8,#f9a8d4,#f472b6,#ec4899);background-size:400% 400%;animation:_ngcontent-%COMP%_gradientAnimation 10s ease infinite}"]})};export{P as MusicaComponent};
