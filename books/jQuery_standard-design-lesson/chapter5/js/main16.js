$(function(){
  $("#menu li").click(function(){
    // 何個目をクリックしたのか値を取得
    var indexLi = $(this).index();

    // content の変更
    $("#contents").animate({
      "left": -700 * indexLi + "px"
    },500);

    // 背景 bg の変更
    $("#bg").css({
      "background-position": indexLi * 100 +"% 100%"
    });
    $("#bg1").css({
      "background-position": indexLi * 300 +"% 100%"
    });
    $("#bg2").css({
      "background-position": indexLi * 500 +"% 100%"
    });

    // ボタンの色の変更
    $(this).siblings().css("opacity","1");
    $(this).css("opacity","0.4");

  });
});