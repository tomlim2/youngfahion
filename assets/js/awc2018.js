$(document).ready(function(){

    $(window).scroll(function(){
      var num = $(this).scrollLeft();
      $(".awc2018-mv1").css({
        'transform': 'translateX('+ (Math.min(num/3,600)) +'px)',

        })
      });

    // awc2018
        $('.aw1b').click(function(){
          $(this).toggleClass('img-ori-ap');
          $('.aw1').toggleClass('img-ori-ap');
        });
        $('.aw2b').click(function(){
          $(this).toggleClass('img-ori-ap');
          $('.aw2').toggleClass('img-ori-ap');
        });
        $('.aw3b').click(function(){
          $(this).toggleClass('img-ori-ap');
          $('.aw3').toggleClass('img-ori-ap');
        });
        $('.aw4b').click(function(){
          $(this).toggleClass('img-ori-ap');
          $('.aw4').toggleClass('img-ori-ap');
        });
        $('.aw5b').click(function(){
          $(this).toggleClass('img-ori-ap');
          $('.aw5').toggleClass('img-ori-ap');
        });
        $('.aw6b').click(function(){
          $(this).toggleClass('img-ori-ap');
          $('.aw6').toggleClass('img-ori-ap');
        });
        $('.aw7b').click(function(){
          $(this).toggleClass('img-ori-ap');
          $('.aw7').toggleClass('img-ori-ap');
        });
        $('.aw8b').click(function(){
          $(this).toggleClass('img-ori-ap');
          $('.aw8').toggleClass('img-ori-ap');
        });


});
