$(function(){
  $("td").hover(function(){
  // 同じ行の色変更
    $(this).parent().children("td").css("opacity","0.3");

  // 同じ列の色変更
  // パターン１
    // tr td となる何番目か取得 0 からはじまる
    // var index = $("tr td").index(this);    
    // 何列目かを取得
    // var columnIndex = index % 7;
    // $("tr td").each(function(){
    //   if( $("tr td").index(this) % 7 == columnIndex ){
    //     $(this).css("opacity","0.3");
    //   }
    // });

  // パターン２
    // その親要素内で何番目かを取得
    var myIndex = $(this).index();
    // nth-child は 0 からはじまる。
    // index は 1 からはじまるので
    myIndex ++;
    $("td:nth-child(" + myIndex + ")").css("opacity","0.3");

  },function(){
  // すべての色を戻す
    $("td").css("opacity","1");  
  });
});