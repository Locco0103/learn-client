$(function(){
  // floatWindow を非表示
  $("#floatWindow").hide();
  // floatWindowの表示と非表示
  $("button").on('click',function(){
    $("#floatWindow").fadeIn("fast");
  });
  $("#close").on('click',function(){
    $("#floatWindow").fadeOut("fast");
  });

  $("dt").mousedown(function(e){
    // 座標データの登録 e.pageX e.pageY カーソルの位置
    $("#floatWindow")
      .data("clickPointX", e.pageX - $("#floatWindow").offset().left)
      .data("clickPointY", e.pageY - $("#floatWindow").offset().top);
    $(document).mousemove(function(e){
        $("#floatWindow").css({
          "top": e.pageY - $("#floatWindow").data("clickPointY") + "px",
          "left": e.pageX - $("#floatWindow").data("clickPointX") + "px"
        });
      });
  }).mouseup(function(){
    $(document).off("mousemove");
  });
});