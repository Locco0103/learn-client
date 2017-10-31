$(function(){
  // まず１つ目以外のテキスト部分を縮める
  // パターン1
  // $(".wrapper:not(:eq(0))").children("div:last-child").hide();
  // パターン2
  $(".wrapper:gt(0)").children("div:last-child").css("width","0px");
  $(".wrapper").children("div:first-child").click(function(){
    if( !$(this).hasClass("currentBtn") ){

      // クリックしたらすべて縮める
      $(".wrapper").children("div:last-child").animate({
        "width":"0px"
      },300);
      // クリックしたやつだけ出す
      $(this).next().animate({
        "width":"600px"
      },300);

      $(".wrapper").children().removeClass("currentBtn");

      $(this).addClass("currentBtn");
    }
  });
});