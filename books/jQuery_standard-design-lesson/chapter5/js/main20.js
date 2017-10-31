$(function(){
  $("a").click(function(){
    // リンク先の取得
    var target = $(this).attr("href");
    // リンク先の高さの取得
    var offsetY = $(target).offset().top;
    offsetY -= 10; 
    // windowをスクロール
    $("html, body").animate({
      "scrollTop": offsetY
    }, 500, 'swing');

    // a要素のハイパーリンクを無効化
    return false;
  });
});