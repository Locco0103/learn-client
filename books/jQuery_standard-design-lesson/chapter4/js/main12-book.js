$(function(){
  $("li").hover(function(){
    // caption の作成
    $(this).append("<div><p>" + $(this).children("img").attr("alt") + "</p></div>");
    // div タグをfadeIn() で表示
    $(this).children("div").stop().fadeIn(300);
    // p タグをふわっと
    $(this).children("div").children("p").stop().animate({
      "top":"0px"
    },300);
  },function(){
    // p タグふわっとさげる
    $(this).children("div").children("p").stop().animate({
      "top":"10px"
    },300, function(){
      $(this).parent("div").remove();
    });
    // div タグをfadeOut()
    $(this).children("div").stop().fadeOut(300);
    // caption 削除
  });
});