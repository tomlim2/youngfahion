$(document).ready(function(){
  var scrlls1img= 0;

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

    $(window).scroll(function(){
      var num = $(window).scrollTop();
          $(".logospinning").css({
            "transform": "rotate("+ num/2 + "deg)",
            });

      });

    $(".logobox").click(function(){
      $("html, body").animate({
        scrollTop: $("#page").offset().top
      },1100);
    })
    $("#bttn-project").click(function(){
      $("html, body").animate({
        scrollTop: $("#portfolio-section").offset().top
      },1100);
    })


    var getRandomColor = function(){
      var color2 = ["#F48583","#D5E59F","#5ccae8"];
      var randomColor = Math.floor(Math.random() * 3);
      return color2[randomColor];
    };




    $(".footers").append("(C) TOM LIM 2018");


});
