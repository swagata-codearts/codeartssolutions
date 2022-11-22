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
      576:{
        items:3

     },
      992:{
        items:4

     },
      1200:{
        items:5

     },
      1400:{
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
          items:1
      },
      576:{
          items:3
      },
      992:{
          items:4
      }
  }
});


jQuery('.js-accordion__item').on('click', function () {
  jQuery(this).parent().find('.state-active').removeClass('state-active');
  jQuery(this).removeClass('state-collapsed').addClass('state-active');
  jQuery('.js-accordion__item').not(this).addClass('state-collapsed');
});



jQuery(document).ready(function() {
    jQuery('.custom-navbar-toggle').click(function() {
      jQuery(this).toggleClass('menu-open')
      jQuery('.custom-navbar-nav .has-children').removeClass('on-click')
    })
    
});
jQuery(document).ready(function() {
    // jQuery('.custom-navbar-nav .nav-item').hover(function() {
    //     if(jQuery(this).hasClass("has-children"))   {

    //         jQuery(".custom-navbar-nav .has-children").removeClass('on-hover')
    //         jQuery(this).addClass('on-hover', 1000)
    //         jQuery(".custom-navbar-nav").addClass('nav-border-top')
    //     }   else    {
    //         jQuery(".custom-navbar-nav .has-children").removeClass('on-hover')
    //         jQuery(".custom-navbar-nav").removeClass('nav-border-top')
    //     }
    // })
    if(jQuery(window).width > 991) {

        jQuery('.custom-navbar-nav .has-children').hover(function() {
            jQuery(this).toggleClass('on-hover', 2000, "easeOutSine")
            jQuery(".custom-navbar-nav").addClass('nav-border-top')
        })
    } else  {
        jQuery('.custom-navbar-nav .has-children').click(function() {
            jQuery('.custom-navbar-nav .has-children').removeClass('on-click')
            jQuery(this).addClass('on-click')
            // jQuery(".custom-navbar-nav").addClass('nav-border-top')
        })
    }
    
});
