$(function(){
  // 画像の変更
  // $("a").on('click',function(){
  //   $("#main img").attr("src",$(this).attr("href"));
  //   return false;
  // });

  // 画像をゆっくり変更
  $("a").on('click',function(){
    // 新しい画像をimgタグの前に挿入
    $("#main img").before("<img src='"+ $(this).attr("href") +"'>");
    // 古い画像をフェードアウト
    $("#main img:last").fadeOut("slow",function(){
      $(this).remove();
    });
    return false;
  });

  // スライド生成
  $(".next").click(function(){
    $(".pageWrap").animate({
      "margin-left": parseInt($(".pageWrap").css("margin-left"))-300 + "px"
    },"fast");
  });
  $(".previous").click(function(){
    $(".pageWrap").animate({
      "margin-left": parseInt($(".pageWrap").css("margin-left"))+300 + "px"
    },"fast");
  });

});