$(function(){
  $("li").hover(function(){
    $("body").append('<div id="toolTip"><p></p></div>');
    $("#toolTip p").html( $(this).children("img").attr('alt') );
    // 場所を決める
    $("#toolTip").hide();

    $("#toolTip").css({
      // 高さ指定
      "top":$(this).offset().top - $("#toolTip").innerHeight() - 18 ,
      // 幅指定 (li の左側) + ((li の幅) - (#toolTip の幅) / 2)
      "left":$(this).offset().left + ($(this).width() - $("#toolTip").innerWidth()) / 2
    });

    $("#toolTip").stop().fadeIn(500);

    // #toolTIp の削除
  },function(){
    $("#toolTip").remove();
  });
});