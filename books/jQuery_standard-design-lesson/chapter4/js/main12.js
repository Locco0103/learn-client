$(function(){
  $("#caption li div:nth-of-type(even)").hide();

  // hover 時に fadeIn(), fadeOut()
  $("#caption li").hover(function(){
    // マウスオーバー時
    $(this).children("div:odd").stop().fadeIn(500).animate({
      "padding-top":"10px"
    }, 300);

  }, function(){
    // マウスアウト時
    $(this).children("div:odd").stop().animate({
      "padding-top":"15px"
    }, 300).fadeOut(500);
  });
});