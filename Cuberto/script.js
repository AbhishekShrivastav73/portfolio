// Menu Bars 
let menu = document.querySelector('.menu');
let overlay = document.querySelector('.overlay');
menu.addEventListener('click', function () {
   menu.classList.toggle('change');
   console.log(menu.classList);
   if(menu.classList !== " change"){
      overlay.style.width = "100%"
      document.heroContainer.style.filter = "blur(10px)"
   }
   if(menu.classList == "change"){
      overlay.style.width = none;
      
   }

})
//Mouse Follower
Shery.mouseFollower({
   //Parameters are optional.
   skew: true,
   ease: "cubic-bezier(0.3, 1, 0.320, 8)",
   duration: 0.3,
 });

//Magnet Menu
Shery.makeMagnet(".menu" /* Element to target.*/, {
   //Parameters are optional.
   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
   duration: 0.5,
 });

 //Card video Player
 let card = document.querySelectorAll('#cardVideo');
console.log(card);
card.forEach(element => {
   element.addEventListener('mouseover',()=>{
      element.play();
   })
   element.addEventListener('mouseout',()=>{
      element.pause();
   })
});

let tl = gsap.timeline();

tl.from("nav h1,.menu",{
   y:10,
   opacity : 0,
   duration :0.7,
   delay :0.5,
  
});
tl.from(".heroContainer h1,.heroContainer aside,.heroContainer video",{
   y:25,
   opacity:0,
   duration:1,
   // delay:0.2
   stagger:0.05
})
tl.from(".work .logoVideo, .content",{
   scale : 0,
   opacity :0.2,
   duration : 1,
   scrollTrigger :{
      trigger : '.work',
      scroller :"body",
      // markers : true,
      scrub : 3,
      start :"-60%",
      end:"8%"
   }
});
tl.from(".projects h2,.heading div,.projects .lists",{
   y:30,
   opacity : 0,
   duration :0.7,
   stagger : 0.2,
   scrollTrigger:{
      trigger : '.projects',
      scroller :"body",
      // markers :true,
      scrub :5, 
      start: "-12%",
      end:"8%"
   }
});
tl.from(".title , .pcontent",{
   y:300,
   opacity :0,
   duration :1,
   stagger : 0.8,
   scrollTrigger :{
      trigger :".philosophy",
      scroller :"body",
      // markers : true,   
      scrub : 3,
      end : "20%",

   }
})