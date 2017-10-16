$(function(){
  $(window).scroll(function(){
    $("nav").stop().animate({
      top: $(this).scrollTop() + 100 + "px"
    },300);
  });

  // $(window).scrollTop() で値を取得　（何px スクロールされたのか）
  // absolute になっている top を scrollTop の値だけ増やす

});