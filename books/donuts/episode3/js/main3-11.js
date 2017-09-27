$(function(){
  // 初期設定
  // carouselInner の幅を指定
  $("#carouselInner").css("width", $(".column").length * 600 + "px" );
  // 最後のcolumn を最初に移動し、
  $("#carouselInner ul.column:last").prependTo("#carouselInner");
  // はじめのを表示する
  $("#carouselInner").css("margin-left","-=600px");

  // 戻るボタン
  $("#carouselPrev button").click(function(){
    // 連続で押されないように一度ボタンを隠す
    $("#carouselPrev,#carouselNext").hide();
    // 左に移動
    $("#carouselInner").animate({
      "margin-left":"+=600px"
    },"slow","swing",
    // クリック後に行う(コールバック関数)
    function(){
      // 最後のcolumn を左へ移動
      $("#carouselInner .column:last").prependTo("#carouselInner");
      // margin-left を左に移動
      $("#carouselInner").css("margin-left","-=600px");
      // 最後にボタンを戻す
      $("#carouselPrev,#carouselNext").show();
    });
  });

  // 進むボタン
  $("#carouselNext").click(function(){
    $("#carouselPrev,#carouselNext").hide();
    $("#carouselInner").animate({
      // "margin-left":"-=600px"
      "margin-left": parseInt($("#carouselInner").css("margin-left"))-600 +"px"
    },"slow","swing",
    function(){
      $("#carouselInner .column:first").appendTo("#carouselInner");
      $("#carouselInner").css("margin-left","+=600px");
      $("#carouselPrev,#carouselNext").show();
    });    
  });

  // タイマー処理
  var timerId = setInterval(function(){
    $("#carouselNext").click()
  },3000);
  // クリックされたら、処理を終了
  $("#carouselPrev button,#carouselNext button").click(function(){
    clearInterval(timerId);
  });
});