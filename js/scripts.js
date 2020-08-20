
/*$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });*/
  /*
   $(document).ready(function(){
          $("#myCarousel").carousel( { interval: 2000 } );
          $("#carousel-pause").click(function(){                               //script foe two buttons "pause" and "play"
              $("#myCarousel").carousel('pause');
          });
          $("#carousel-play").click(function(){
              $("#myCarousel").carousel('cycle');
          });
      });*/
      
     $(document).ready(function(){
         $("#myCarousel").carousel({interval:2000});
         $("#carouselButton").click(function(){
              if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                  $("#myCarousel").carousel('pause');
                  $("#carouselButton").children("span").removeClass('fa-pause');
                  $("#carouselButton").children("span").addClass('fa-play');
              }                                                                                //script for one button which can interchange b/w pause and play
              else if ($("#carouselButton").children("span").hasClass('fa-play')){
                  $("#myCarousel").carousel('cycle');
                  $("#carouselButton").children("span").removeClass('fa-play');
                  $("#carouselButton").children("span").addClass('fa-pause');                    
              }
          });
     });

    $(document).ready(function(){
          $("#loginForm").click(function(){                   //script for login modal
              $("#loginModal").modal("show")
          })
          });

   $(document).ready(function(){
   $("#reserveForm").click(function(){                        //script for reserveTable modal
   $("#reserveTable").modal("show")
          })
          }); 