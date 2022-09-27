// JavaScript Document
jQuery('#custom-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

jQuery('#technology-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:6
      }
  }
});

jQuery(document).ready(function() {
    jQuery('.-accordion').asAccordion({
      namespace: '-accordion'
    });
  });

  jQuery(document).ready(function() {
    jQuery('.-accordion').asAccordion({
      namespace: '-accordion',
      // accordion theme. WIP
      skin: null,
  
      // breakpoint for mobile devices. WIP
      mobileBreakpoint: 768,
  
      // initial index panel
      initialIndex: 0,
  
      // CSS3 easing effects.
      easing: 'ease-in-out',
  
      // animation speed.
      speed: 500,
  
      // vertical or horizontal
      direction: 'vertical',
  
      // jQuery mouse events. click, mousehover, etc.
      event: 'click',
  
      // multiple instance
      multiple: false
    });
  });
