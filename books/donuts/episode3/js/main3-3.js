$(function(){
  $("dd:not(:first)").css("display","none");
  $("dt:first").addClass("selected");

  $("dt").on('click',function(){
    if( $("+dd",this).css("display") == "none" ){
      $("dd").slideUp("slow");
      $("+dd",this).slideDown("slow");
      // 他のdtの背景色を元に戻す
      $("dt.selected").removeClass("selected")
      // クリックした dt の背景色変更
      $(this).addClass("selected");
    }
  });
  // マウスオーバー時にクラス付与
  $("dt").mouseover(function(){
    $(this).addClass("over");
  });
  // マウスアウト時にクラス除去
  $("dt").mouseout(function(){
    $(this).removeClass("over");
  });


});