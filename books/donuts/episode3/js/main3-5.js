$(function(){
  $(".tooltip").css({
    "opacity":0.8,
    "position":"absolute",
    "display":"none"
  });
  $("a").mouseover(function(){
    $(".tooltip").fadeIn("slow");
  }).mouseout(function(){
    setTimeout(function(){
      $(".tooltip").fadeOut("slow");
    },2000)
  }).mousemove(function(e){
    $(".tooltip").css({
      "top":e.pageY + 10 + "px",
      "left":e.pageX + 10 + "px"
    });
  });
});