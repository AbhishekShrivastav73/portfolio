function loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

loco();

//Play Reel Effect-------
(function cursoreffect(){

let heroContainer = document.querySelector(".hero");
let cursor = document.querySelector("#cursor");

// heroContainer.addEventListener('mousemove',function(dets){
//     console.log(dets);
//     cursor.style.left = dets.x + "px"
//     cursor.style.top = dets.y + "px"
// })

heroContainer.addEventListener('mousemove',function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    });

})
heroContainer.addEventListener('mouseenter',function(){
    gsap.to(cursor,{
        scale : 1,
        opacity : 1
    })
})
heroContainer.addEventListener('mouseleave',function(){
    gsap.to(cursor,{
        scale : 0,
        opacity : 0
    })
})
})();


gsap.from(".header .left span, .contents p",{
    y:120,
    stagger : 0.2,
    duration :1,
    scrollTrigger :{
        trigger : ".page2",
        scroller : ".main",
        // markers : true,
        scrub : 4,
        start :"top 100%",
        end :"top 46%"
    }
})

gsap.from('.pageTop div h2, .pageTop div h4',{
    y:120,
    stagger:0.2,
    duration :1,
    scrollTrigger :{
        trigger : ".pageTop",
        scroller : ".main",
        // markers : true,
        scrub : 4,
        start :"top 140%",
        end :"top 110%"

    }
})

gsap.from(".msg div p, .msg2 div p",{
    y:120,
    stagger:0.2,
    duration :1,
    scrollTrigger :{
        trigger : ".message",
        scroller : ".main",
        // markers : true,
        scrub : 4,
        start :"top 180%",
        end :"top 170%"

    }
})

let tl = gsap.timeline();

tl.from('.loader h3',{
    x:40,
    opacity : 0,
    duration :1,
    stagger : 0.1
})
tl.to('.loader h3',{
    x:-40,
    opacity : 0,
    duration :1,
    stagger :0.1
})
tl.to('.loader',{
    opacity : 0
})
tl.to('.loader',{
    display : "none"
})
tl.from('.heroContent h1 span',{
    y:100,
    opacity : 0,
    duration :0.4,
    stagger :0.070
})