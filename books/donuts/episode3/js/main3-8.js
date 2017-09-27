$(function(){
  // 閉じるボタンで閉じる
  $("#close").on('click',function(){
    $("#graylayer").hide();
    $("#overlayer").hide();
  });
  // 画像をクリックすると、モーダルウィンドウが出現
  $("ul li a").on('click',function(){
    // 画像のsrc 変更
    $("#overlayer img").attr("src",$(this).attr("href"));
    // 表示
    $("#graylayer").show();
    $("#overlayer").show();
    return false;
  });
});