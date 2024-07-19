var nav_slider = false;
function nav_slider_up(param) {
  var up = gsap.timeline();
  up.to(".nav_slider",{
    scale: 1,
  })
  up.to(".nav_slider",{
      opacity: 1,

  })
  up.to(".line", {
    transform: "translateY(-0vh)",
    //ease: "elastic.out(1,0.3)",
    // ease: "expo.out",
    // ease: "bounce.out",
    // ease: "steps(12)",
    //ease: "sine.in",
    //ease: "elastic.in(1,0.3)",
    //ease: "power4.in",
    ease: "sine.inOut",
    duration: 1.5,
   stagger: 0.02,

  })
  up.from(".text h1", {
     delay:0.5,
   skewY: 60 + "deg",
   duration: 3,
   opacity: 0,
   // ease: "bounce.out",
   // ease:        "circ.out",
   ease: "elastic.out(1,0.3)",
      stagger: 1.02,

 })
 up.from(".link>h3",0.4,{
         opacity: 0,

   y: 50,
   stagger: 0.5,
 })

}
function nav_slider_down(param) {
    var down = gsap.timeline();

     down.to(".line", {
      transform: "translateY(100vh)",
      //ease: "elastic.out(1,0.3)",
      // ease: "expo.out",
      // ease: "bounce.out",
      // ease: "steps(12)",
      //ease: "sine.in",
      //ease: "elastic.in(1,0.3)",
      //ease: "power4.in",
      ease: "sine.inOut",
      duration: 1.5,
      //stagger: 0.02,
      stagger: {
        from: "random",
        amount: 1.5
      }
    })
    down.to(".nav_slider", {
      opacity: 0,
  
    })
    down.to(".nav_slider", {
      //display: "none",
      scale:0,
    })
    
    
    
}

function text_up(param) {
}

var two_line = document.getElementsByClassName("two_line");
two_line[0].addEventListener("click",()=>{
  
  if (nav_slider) {
    nav_slider_down();
    nav_slider=false;
  } else {
    nav_slider_up();
     nav_slider=true;

  }
  
  
})

