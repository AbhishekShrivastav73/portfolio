const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    //el ka mtlb konse element pr ye effect lgna hai
    smooth: true
});

(function myCircle(){
    window.addEventListener('mousemove',(dets)=>{
        console.log(dets.x , dets.y);
        document.querySelector("#circle").style.transform = `translate(${dets.x}px , ${dets.y}px )`
    })
})()

function firstPageAnim() {
    var tl = gsap.timeline();
  
    tl.from("#nav", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
      .to(".boundingElem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
      })
      .from(".links", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
      });
  }
  firstPageAnim();