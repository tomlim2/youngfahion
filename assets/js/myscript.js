$(document).ready(function(){
  var scrlls1img= 4680;
  var scrlls2img= 4580;

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
        if(num>scrlls2img){
          $(".main-hover-imgs, .main-hover-imgs-link").addClass("fixed2");
        }else{
          $(".main-hover-imgs, .main-hover-imgs-link").removeClass("fixed2");
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
      $(".mhil-img1").css({
        "opacity": '1',
        "z-index": '2',
      });
      $(".mhil-img2,.mhil-img3,.mhil-img4").css({
        "opacity": '0',
        "z-index": '0',
      });
    });

    $(".nm1").mouseleave(function(){
      $(".main-hover-imgs").removeClass("hover-development");
    });



    $(".nm2").mouseenter(function(){
      $(".main-hover-imgs").addClass("hover-zoo");
      $(".mhil-img2").css({
        "opacity": '1',
        "z-index": '2',
      });
      $(".mhil-img1,.mhil-img3,.mhil-img4").css({
        "opacity": '0',
        "z-index": '0',
      });
    });

    $(".nm2").mouseleave(function(){
      $(".main-hover-imgs").removeClass("hover-zoo");
    });


    $(".nm3").mouseenter(function(){
      $(".main-hover-imgs").addClass("hover-polaroid");
      $(".mhil-img3").css({
        "opacity": '1',
        "z-index": '2',
      });
      $(".mhil-img1,.mhil-img2,.mhil-img4").css({
        "opacity": '0',
        "z-index": '0',
      });
    });

    $(".nm3").mouseleave(function(){
      $(".main-hover-imgs").removeClass("hover-polaroid");
    });


    $(".nm4").mouseenter(function(){
      $(".main-hover-imgs").addClass("hover-aboutme");
      $(".mhil-img4").css({
        "opacity": '1',
        "z-index": '2',
      });
      $(".mhil-img1,.mhil-img2,.mhil-img3").css({
        "opacity": '0',
        "z-index": '0',
      });
    });

    $(".nm4").mouseleave(function(){
      $(".main-hover-imgs").removeClass("hover-aboutme");
    });

// end mainpage hover

    $(".di31").mouseenter(function(){
      $(".di311").css({
        "opacity": '1',
      });
      $(".di32,.di33,.di34,.di35,.di36").css({
        "opacity": '0',
      });
    });
    $(".di31").mouseleave(function(){
      $(".di311").css({
        "opacity": '0',
      });
      $(".di32,.di33,.di34,.di35,.di36").css({
        "opacity": '1',
      });
    });


    $(".di32").mouseenter(function(){
      $(".di312").css({
        "opacity": '1',
      });
      $(".di31,.di33,.di34,.di35,.di36").css({
        "opacity": '0',
      });
    });
    $(".di32").mouseleave(function(){
      $(".di312").css({
        "opacity": '0',
      });
      $(".di31,.di33,.di34,.di35,.di36").css({
        "opacity": '1',
      });
    });

    $(".di33").mouseenter(function(){
      $(".di313").css({
        "opacity": '1',
      });
      $(".di31,.di32,.di34,.di35,.di36").css({
        "opacity": '0',
      });
    });
    $(".di33").mouseleave(function(){
      $(".di313").css({
        "opacity": '0',
      });
      $(".di31,.di32,.di34,.di35,.di36").css({
        "opacity": '1',
      });
    });

    $(".di34").mouseenter(function(){
      $(".di314").css({
        "opacity": '1',
      });
      $(".di31,.di32,.di33,.di35,.di36").css({
        "opacity": '0',
      });
    });
    $(".di34").mouseleave(function(){
      $(".di314").css({
        "opacity": '0',
      });
      $(".di31,.di32,.di33,.di35,.di36").css({
        "opacity": '1',
      });
    });

    $(".di35").mouseenter(function(){
      $(".di315").css({
        "opacity": '1',
      });
      $(".di31,.di32,.di33,.di34,.di36").css({
        "opacity": '0',
      });
    });
    $(".di35").mouseleave(function(){
      $(".di315").css({
        "opacity": '0',
      });
      $(".di31,.di32,.di33,.di34,.di36").css({
        "opacity": '1',
      });
    });

    $(".di36").mouseenter(function(){
      $(".di316").css({
        "opacity": '1',

      });
      $(".di31,.di32,.di33,.di34,.di35").css({
        "opacity": '0',
      });
    });
    $(".di36").mouseleave(function(){
      $(".di316").css({
        "opacity": '0',

      });
      $(".di31,.di32,.di33,.di34,.di35").css({
        "opacity": '1',
      });
    });


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
