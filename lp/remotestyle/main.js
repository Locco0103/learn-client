$(function(){
// 1. スクロール ページトップ
  $("#toTop").hide();
  // 1-1. スクロールしたら現れる

  // ウィンドウがスクロールされた時に
  $(window).scroll(function(){
    // 読み込まれた時だけになってしまう
    if ( $("body").scrollTop() > 100 ){
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();    
    }    
  });

  // 1-2. クリックしたら ページトップへ
  $("#toTop").click(function(){
    // なぜ body だけではダメなのか $("html").scrollTop() は常に0
    $("html, body").animate({
      // 自分のスクロールさせたいところまで可能
      // scrollTop:$("#top").offset().top
      scrollTop: 0
    },500, "swing");
  });

// 2. ハンバーガーメニュー パターン１
  // $("#menu").hide();
  // // 2-1. ハンバーガーメニュー：クリック時
  // $("#ham").click(function(){
  //   // 2-1-1. fadeToggle で menu の表示非表示
  //   $("#menu").stop().fadeToggle();
  //   // 2-1-2. 画像の変更
  //   if( $(this).children("img").attr("src") == "images/menu-hover.png"){
  //     $(this).children("img").attr("src", "images/close.png");
  //   } else { // close.png の時
  //     $(this).children("img").attr("src", "images/menu.png");
  //   }
  // }); 

  // //　2-2.ハンバーガーメニュー：マウスオーバー時
  // // ハンバーガーメニューの img attr("src") = 三　であれば、hover 時に attr 変更
  // // 他であれば、何もしない
  // $("#ham").hover(function(){
  //   if( $("#ham").children("img").attr("src") == "images/menu.png"){
  //     $(this).children("img").attr("src", "images/menu-hover.png");
  //   }
  // }, function(){
  //   if( $("#ham").children("img").attr("src") == "images/menu-hover.png"){
  //     $(this).children("img").attr("src", "images/menu.png");    
  //   }
  // });

// 2. ハンバーガーメニュー　パターン２  
  // cssで
  // hover で background-image　が変わる class をつける。
  //   bg-menu1        :menu.png
  //   bg-menu1:hover  :menu-hover.png

  // click時
  //   1. .bg-menu1 へ .active を toggleClass
  //   2. #menu を
  $("#menu").hide();
  $("#ham2").click(function(){
    $(this).toggleClass("active");
    $("#menu").stop().fadeToggle();
  });
  // 18行が5行になりました。

// 3. スライドショー slide1~4
  // setTimeout で 1000ms ごとに background-image slidex.jpg の x を足していく
  // 条件分岐 x > 4 になったら x = 1 に戻る

  // もともとbackTop にあったものをフロントに持ってきて fadeOut させる
  var x = 0;
  var max = 4;
  var crossFade = function(){
    $("#backTop").css({
      "background-image":"url('images/slide" + ((x + 1) % max) + ".jpg')"
    });
    $("#frontTop").css({
      "opacity":"1",
      "background-image":"url('images/slide" + (x % max) + ".jpg')"
    }).stop().animate({
      "opacity":"0"
    },1000);
    x++;
  };
  setInterval(crossFade ,2500);
  // 初期値
  // backTop 2
  // frontTop 1 opacity 0
  // 画像を変更 / 透明度変更
  // backTop 3
  // frontTop 2 opacity 1
  // 透明度変更
  // backTop 3
  // frontTop 2 opacity 0
// 4. ページ内リンクをスムーズスクロールへ
  $('a[href^="#"]').click(function(e){
    // スクロールしてもURL 変更されない
    e.preventDefault();
    // 目的地の取得
    var des = $(this).attr("href");
    // 少しだけ上にスクロールされると見やすい
    var offsetY = -10;
    // href='#' なら何もしない
    if ( des == '#' ){
      return false;
    }
    // 目的地の高さ offset().top
    var offset = $(des).offset().top + offsetY;

    $("html, body").animate({
      "scroll-top": offset
    },500,'swing');

    // リンクへ移動しない
    return false;
  });
  // #後の値の取得
  console.log(location.hash);
});













