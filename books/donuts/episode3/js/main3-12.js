$(function(){
  // 初期設定
  $("#content").load($("#pager li a:first").attr("href") + " #container");
  $("#pager li a:first").parent().addClass("selected");

  // click function
  $("#pager li a").click(function(){
    // loading 表示
    $("#content").html("<p class='loading'>now loading...</p>"); 
  // クリックしたページをロード
    // 一回 data "file" に保存
    $("#content").data("file", $(this).attr("href"));
    // ロード
    // $("#content").load($("#content").data("file") + " #container");
    // 一行でやる場合
    // $("#content").load($(this).attr("href") + " #container");
    $("html,body").animate({
      scrollTop : $("h1").offset().top-20
    }, 'slow','swing', function(){
      $("#content").load($("#content").data("file") + " #container .column");
    });

    // 一度すべてのselected を取る
    $("li").removeClass("selected");
    // addClass
    $(this).parent().addClass("selected");
    // aのハイバーリンクを消去
    return false;
  });

});