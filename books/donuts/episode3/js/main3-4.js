$(function(){
  // ます selected 以外のパネルを隠す
  $("#panel li:not(" + $(".selected").attr("href") + ")").hide();
  // tabをクリック
  $("#tab li a").on('click',function(){
    // 選択されたtabの背景色が変わる
    // selected のクラスを外す
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
    // パネルの変更
    // すべてのパネルを hide()
    $("#panel li").slideUp(1000);
    // セレクトされたパネルを出す
    $($(this).attr("href")).slideDown(1000);
    return false;
  });
});