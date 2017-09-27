$(function(){
  // 最後のli を先頭に持ってきて、マージンレフトを変更
  $("li:last-child").prependTo("#slide");
  $("#slide").css("margin-left","-360px");
  
  // クリックした a のリンクをクリアし、の href を保存　（さいごに微動した際にタップと認識させるため）
  $("#slide li a").click(function(){
    return false;
  }).on("touchstart",function(){
    $("#slide").data("href",$(this).attr("href"));
  });
  
// touch 開始時データ取得
  $("#slide").on("touchstart",function(){

    // touch 操作時のスクロールを防ぐ
    event.preventDefault();
    $(this).data("startX",event.touches[0].pageX)
      .data("startY",event.touches[0].pageY)
      .data("moveX",0)
      .data("moveY",0);

// touch 移動時指について動く
  }).on("touchmove",function(){
    // 指の動きについてくる
    $(this).data("moveX",event.touches[0].pageX - $(this).data("startX"))
      .data("moveY",event.touches[0].pageY - $(this).data("startY"))
      .css("margin-left",$(this).data('moveX') - 360 + "px");

// touch 話した時の動作
  }).on("touchend",function(){
    // 右スワイプ
    if( $(this).data("moveX") > 10 ){
      // $("#slide li:last-child").prependTo("#slide");
      // $(this).css("margin-left","-=360px").animate({
      //   "margin-left":"-360px"
      // },"slow","swing");

      $(this).animate({
        "margin-left":0
      },function(){
        $("#slide li:last-child").prependTo("#slide");
        $(this).css("margin-left","-360px");
      });

    // 左スワイプ
    } else if ( $(this).data("moveX") < -10 ){

      $(this).animate({
        "margin-left":"-720px"
      },function(){
        $("#slide li:first-child").appendTo(this);
        $(this).css("margin-left","-360px");
      });

    // タッチ
    } else if ( $(this).data("moveY") < 10 && $(this).data("moveY") > -10){
      location.href = $(this).data("href");
    // スクロール
    } else {
      $(this).animate({
        "margin-left":"-360px"
      });
    }

  });

});