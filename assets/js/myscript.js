$(document).ready(function(){
  var scrlls1img= 4680;

  $(window).scroll(function(){
    var num = $(window).scrollTop();
      if(num>scrlls1img){
        $(".headerNav").addClass("fixed");
      }else{
        $(".headerNav").removeClass("fixed");
      }
    });
    $(window).scroll(function(){
      var num = $(window).scrollTop();
          $(".logoC").css({
            "opacity": 1 - Math.min(num/500, 0.55) ,
            "transform": "scale(" + (1 - Math.min(num/1000, 0.2)) + ")",
            });
      });

    $(window).scroll(function(){
      var num = $(window).scrollTop();
          $(".parallax-hero").css({
            "transform": "translateY(" + Math.max(- num, -200) + "px)",
            });
      });


    $(".logobox").click(function(){
      $("html, body").animate({
        scrollTop: $("#page").offset().top
      },1100);
    });

// mainpage hover
    $(".nm1").mouseenter(function(){
      $(".main-hover-imgs").addClass("hover-development");
    });

    $(".nm1").mouseleave(function(){
      $(".main-hover-imgs").removeClass("hover-development");
    });


    $(".nm2").mouseenter(function(){
      $(".main-hover-imgs").addClass("hover-zoo");
    });

    $(".nm2").mouseleave(function(){
      $(".main-hover-imgs").removeClass("hover-zoo");
    });


    $(".nm3").mouseenter(function(){
      $(".main-hover-imgs").addClass("hover-polaroid");
    });

    $(".nm3").mouseleave(function(){
      $(".main-hover-imgs").removeClass("hover-polaroid");
    });


    $(".nm4").mouseenter(function(){
      $(".main-hover-imgs").addClass("hover-aboutme");
    });

    $(".nm4").mouseleave(function(){
      $(".main-hover-imgs").removeClass("hover-aboutme");
    });

// end mainpage hover

    $(".di1").click(function(){
      $(this).css({
        "width": '14000px',
        "cursor": "inherit",
      });
      $(".di2,.di3").css({
        "left": '14000px',
        "width": '0px',
      });
    });

    $(".di2").click(function(){
      $(this).css({
        "width": '6800px',
        "left": '0px',
        "cursor": "inherit",
      });
      $(".di1").css({
        "left": '-33.33%',
      });
      $(".di3").css({
        "left": '7800px',
        "width": '0px',
      });
    })

    $(".di3").click(function(){
      $(this).css({
        "width": '100%',
        "left": '0px',
        "cursor": "inherit",
      });
      $(".di-img-3").css({
        "margin-left": '0px',
      });
      $(".di1").css({
        "left": '-33.33%',
      });
      $(".di2").css({
        "left": '-33.33%',
      });
    })

    // end hover_development

    // aboutme

    // end aboutme

    var getRandomColor = function(){
      var color2 = ["#94cee4","#d5eddd","#f3ef8e","#d0e2f0","#b5b4d6","#edbfdc","#fcc8cc","#f7c7c5","#faf26d"];
      var randomColor = Math.floor(Math.random() * 9);
      return color2[randomColor];
    };

    // $(".img-hover").css({
    //   "background": getRandomColor,
    // });

    $(".randomcolor").css({
      "background": getRandomColor,
    });


});
