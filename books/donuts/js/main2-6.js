// アニメーション処理
$(function(){
// 非表示状態の要素を表示する　display:none; -> display:block;
  // $("div").css({
  //   "display":"none",
  //   "background-color":"black"
  // });
  // ボタンを押したら、即座に表示
  // $("#exist").on('click',function(){
  //   $("div").show();
  // });
  // ボタンを押したら、ゆっくり表示
  // $("#exist").on('click',function(){
  //   $("div").show("slow");
  // });
  // ボタンを押したら、2秒で表示
  // $("#exist").on('click',function(){
  //   $("div").show(2000).css("background-color","blue");
  // });
  // コールバック関数を設定し、アニメーションが終わってから他のメソッド実行させる
  // $("#exist").on('click',function(){
  //   $("div").show("slow",function(){
  //     $(this).css("background-color","blue")
  //   });
  // });
// 表示中の要素を非表示にする　display:block; -> display:none;
  // ボタンを押したら、即座に非表示
  // $("#noexist").on("click",function(){
  //   $("div").hide();
  // });
  // ボタンを押したら、ゆっくり非表示
  // $("#noexist").on('click',function(){
  //   $("div").hide("slow");
  // });
  // ボタンを押したら、2秒で非表示
  // $("#noexist").on('click',function(){
  //   $("div").hide(2000);
  // });
  // アニメーション処理中ではない要素　にのみ、実行されるようにしよう
  $("#exist").on('click',function(){
    $("div:not(:animated)").show(1500);
  });
  $("#noexist").on('click',function(){
    $("div:not(:animated)").hide(1500);
  });

// 表示・非表示を交互に切り替える
  // ゆっくり切り替える
  $("#exist").on('click',function(){
    $("div:not(:animated)").toggle(1500);
  });

// 表示・非表示をスライドで切り替える
  // 開閉パネル (Collapsible-Panel) を作ってみよう
  // 1. html・css で表示状態のパネルを作成
  // 2. 条件分岐を用いて、開閉の動きを jQuery で作成
  // $("dt").click(function(){
  //   if ( $("dd").css("display") == "block" ){
  //     $("dd:not(:animated)").slideUp("slow");
  //   } else {
  //     $("dd:not(:animated)").slideDown("slow");
  //   }
  // });
  // 3. 条件分岐を用いずに、交互にスライドを切り替える
  $("dt").on('click',function(){
    $("dd:not(:animated)").slideToggle("slow");
  });

// 表示状態をフェードイン・フェードアウトで切り替える
  // 画像をフェードイン・アウトで切り替えてみよう
  // $("#fadeIn").on('click',function(){
  //   $("img").fadeTo("slow",1);
  // });
  // $("#fadeOut").on('click',function(){
  //   $("img").fadeTo("slow",0);
  // });
// 透明度を徐々に変更する
  // 画像を半透明まで切り替えてみよう 
  // $("#fadeTo").on('click',function(){
  //   $("img").fadeTo("slow",0.5);
  // })
// 独自のアニメーションを設定しよう
  // 画像を左右にスライドさせてみよう
  $("#light").click(function(){
    $("p:not(:animated)").animate({
      "margin-left":"-300px",
    },"slow","swing");
  });
  $("#hari").click(function(){
    $("p:not(:animated)").animate({
      "margin-left":"0px",
    },"slow","swing");
  });
});















