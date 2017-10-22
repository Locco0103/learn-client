$(function(){
  $("#small").click(function(){
    $("body").addClass("s-fs").removeClass("m-fs l-fs");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });
  $("#medium").click(function(){
    $("body").addClass("m-fs").removeClass("s-fs l-fs");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });
  $("#large").click(function(){
    $("body").addClass("l-fs").removeClass("s-fs m-fs");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

});