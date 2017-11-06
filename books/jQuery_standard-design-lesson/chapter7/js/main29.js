$(function(){

  $("#pointer").hide();

  // thumb の画像の場所の取得
  var thumbLeft = $("#thumb").offset().left;
  var thumbRight = $("#thumb").offset().left + $("#thumb").width();
  var thumbTop = $("#thumb").offset().top;
  var thumbBottom = $("#thumb").offset().top + $("#thumb").height();

// 1. カーソルについてまわる span タグの作成
  $(window).mousemove(function(e){
    // カーソルの値の取得
    var pageLeft = e.pageX;
    var pageTop = e.pageY;

    // zoompointer css top left の指定
    $("#pointer").css({
      "top" : pageTop - $("#pointer").height() / 2,
      "left" : pageLeft - $("#pointer").width() / 2
    });


    // サムネイル内カーソル条件
    if ( thumbLeft < pageLeft && thumbRight > pageLeft && thumbTop < pageTop && thumbBottom > pageTop ) {
      $("#pointer").show();

      // zoom 画像の表示
      // カーソルがあたっている場所　画像上の左上の取得
      var zoomLeft = pageLeft - thumbLeft - $("#pointer").width() / 2;
      var zoomTop = pageTop - thumbTop - $("#pointer").height() / 2;
      // #zoom に位置を反映
      $("#zoom > img").css({
        "top" : - zoomTop * 10,
        "left" : - zoomLeft * 10
      });

      // カーソル上端
      if ( pageTop - thumbTop < $("#pointer").height() / 2 )　{
        // カーソルの仕様
        $("#pointer").css({
          "top" : thumbTop
        });      
        // zoom の仕様
        $("#zoom > img").css({
          "top" : 0
        });
      }
      // カーソル下端
      if ( thumbBottom - pageTop < $("#pointer").height() / 2 )　{
        // カーソルの仕様
        $("#pointer").css({
          "top" : thumbBottom - $("#pointer").height()
        });      
        // zoom の仕様
        $("#zoom > img").css({
          "top" : - ( $("#thumb").height() - $("#pointer").height() ) * 10
        });
      }
      // カーソル左端
      if ( pageLeft - thumbLeft < $("#pointer").width() / 2 )　{
        // カーソルの仕様
        $("#pointer").css({
          "left" : thumbLeft
        });      
        // zoom の仕様
        $("#zoom > img").css({
          "left" : 0
        });
      }
      // カーソル右端
      if ( thumbRight - pageLeft < $("#pointer").width() / 2 )　{
        // カーソルの仕様
        $("#pointer").css({
          "left" : thumbRight - $("#pointer").width()
        });      
        // zoom の仕様
        $("#zoom > img").css({
          "left" : - ( $("#thumb").width() - $("#pointer").height() ) * 10
        });
      }
    } else {
      $("#pointer").hide();
    }
  });

});