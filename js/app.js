

gsap.registerPlugin(ScrollTrigger);

gsap.to(".texte", {
  ease: 'none',
  scrollTrigger: {
      trigger: '.texte',
      start: "top +=6%top",
      
      pin: true,
      scrub: true,
      markers: {
          visible: true,
          startColor: 'pink',
          endColor: 'pink',
          label: 'truc'
      }
  } 
  
  

})

gsap.to("nav", {
  ease: 'none',
  scrollTrigger: {
    trigger: 'nav',
    start: 'top +=6% top',
    end: 'bottom bottom',
    toggle: {
      visible: 'active',
      hidden: 'inactive'
    }
  } 
  
  

})


gsap.fromTo('img',
        {
          opacity: 0,
       
        },
        {
          opacity:1,
          stagger:.5,
      }

)