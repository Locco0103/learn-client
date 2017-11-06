$(function(){
  $("#slideParts").css({
    "margin-left":"-=1000"
  });

  var interval = 3000;
  var duration = 700;

  var slideNext = function(){
    $("#slideParts").not(':animated').animate({
      "margin-left":"-=1000"
    },duration,function(){
      $("#slideParts > div:first").appendTo($('#slideParts'));
      $("#slideParts").css({
        "margin-left":"+=1000"
      });
    });
  };

  var slidePrev = function(){
    $("#slideParts").not(':animated').animate({
      "margin-left":"+=1000"
    },duration,function(){
      $("#slideParts > div:last").prependTo($("#slideParts"));
      $("#slideParts").css({
        "margin-left":"-=1000"
      });
    });
  };

  var slideImg = setInterval(slideNext,interval);

  $('#prev').click(function(){
    clearInterval(slideImg)
    slidePrev();
    slideImg = setInterval(slideNext,interval);
  }); 

  $('#next').click(function(){
    clearInterval(slideImg)
    slideNext();
    slideImg = setInterval(slideNext,interval);
  }); 

// 変更ポイント
  // 連続クリック防止
  // スライド中のクリック禁止

});