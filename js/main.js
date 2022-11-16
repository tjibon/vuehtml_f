(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {

       
        $('.portfolio-list').vue-owl-carousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });


       
      

        $(".fa-search").click(function(){
            $(".icon").toggleClass("active");
           $("input[type='text']").toggleClass("active");
         });


    });
  

    
    
  

    

}(jQuery));