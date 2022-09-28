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
jQuery('#project-carousel').owlCarousel({
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
          items:3
      }
  }
})


jQuery('#technology-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      575:{
          items:3
      },
      1000:{
          items:6

      }
  }
});
jQuery('#brand-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:4
      },
      1000:{
          items:5
      }
  }
});


jQuery('.js-accordion__item').on('click', function () {
  // set active class
  jQuery(this).parent().find('.state-active').removeClass('state-active');
  

  
  
  jQuery(this).removeClass('state-collapsed').addClass('state-active');
  // jQuery(this).children().find('.plus-icon').removeClass('plus-icon').addClass('minus-icon');
  
  //collapse other items
  jQuery('.js-accordion__item').not(this).addClass('state-collapsed');
  
  
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
