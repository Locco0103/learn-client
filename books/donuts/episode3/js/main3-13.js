$(function(){
  // 初期設定
  // スライドの数だけ、ページングボタンを用意する。"data-circle"="img の src"
  $("#slide li").each(function(){
    $("#paging").append($("<li></li>").addClass("circle").attr("data-img",$("img",this).attr("src")));
  });
  // 最初のだけactive をつけておく
  $("#paging li:first-child").addClass("active");
  // ボタン隠す
  $("#right,#left").hide();

  // setInterval で実行
  var timerId = setInterval(function(){
    $("#right").click();
  },2000);

  // clearInterval で制御
  $("#slideGallary").hover(function(){
    clearInterval(timerId);
    $("#right,#left").show();
  },function(){
    timerId = setInterval(function(){
      $("#right").click();
    },2000);
    $("#right,#left").hide();    
  });


  // 次へボタン
  $("#right").click(function(){
    // margin 0 から margin -800px へアニメイトし、
    $("#slide:not(:animated)").animate({
      "margin-left":"-=800px"
    },"slow","swing",function(){
    // li:first-child を appendTo("#slide") し
      $("#slide li:first-child").appendTo("#slide");
      // margin-left: 0
      $(this).css("margin-left",0);
      // #paging の active 変更（まずは削除）
      $("#paging li").removeClass("active");
      $("#paging li[data-img='"+ $("#slide li:first-child img").attr("src") +"'] ").addClass("active");
    }); 
  });

  // 前へボタン
  $("#left").click(function(){
    // 最後のli を prependTo でもってくる
    $("#slide:not(:animated) li:last-child").prependTo("#slide");
    // もともとの画像を表示させるためにslide を左へずらす
    $("#slide:not(:animated)").css("margin-left","-=800px");
    // アニメイトで margin-leftを-800から0に
    $("#slide:not(:animated)").animate({
      "margin-left":0
    },"slow","swing",function(){
      // コールバック関数で、#paging のボタン変更
      $("#paging li").removeClass("active");
      $("#paging li[data-img='" + $("#slide li:first-child img").attr("src") + "']").addClass("active");
    });
  });



});