$(function(){
  // 独自のやり方
  // $("#category li").click(function(){
  //   var idName = $(this).attr('id');
  //   $("#imgs img").fadeOut(300,function(){
  //     // パターン１　クラス名
  //     $("#imgs ." + idName ).fadeIn(300);      
  //   });
  // });

  // 本のやり方
  $("#category li").click(function(){
    // id名の取得
    var idName = $(this).attr('id');
    // まずすべてのimg を aimateで消す
    $("img").stop().animate({
      "opacity":0
    },300,function(){
      $(this).hide();
      // すべての img をサーチ
      $("section img").each(function(){
        if( $(this).hasClass(idName) ){
          $(this).show().stop().animate({'opacity':1},300);
        }
      });

    });
  });

});