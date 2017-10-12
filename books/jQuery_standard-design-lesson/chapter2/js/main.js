$(document).ready(function(){
  // pタグの挿入
  $("#btn").after("<p>after で挿入</p>")

  $("#btn").click(function(){
    // alert($(this).html());
    // $(this).addClass("fs30");
    // $("#btn").on('mouseout',function(){
    //   $(this).removeClass("bg-skyblue");
    // });
  // クラスの有無により動作変更
    if( $(this).hasClass("bg-blue") ){
      $(this).html("Yes!");
    } else {
      $(this).html("No...");
    }
  // 幅の取得
    $("p")
      .html("幅：" + $(this).width() + "px")
  // 高さの取得
      .append(" 高さ：" + $(this).height() + "px")
  // 位置の取得
      .append(" x位置：" + $(this).offset().top + "px")
      .append(" y位置：" + $(this).offset().left + "px");
    });
  // 要素のスクロール位置を取得 し出力
  $(window).scroll(function(){
    $("#scroll").html($(this).scrollTop());
  });
  // 属性の設定 画像を変更
  $("img").attr("src","../images/photo2.jpg");
  // 属性の取得 画像のファイル名を表示
  $("#image-src").html( $("img").attr("src") );

  // value 属性を取得し表示
  $("#btn2").click(function(){
    $(this).html($("input[type='text']").val());
  });

  // pタグに囲まれた helloworld を strong タグで囲む
  $("#change-html").html("<strong>Hello World!</strong>")

  // span タグで囲まれた文字列'hello world'を 空のpタグ へ挿入
  $("#add-html").html($("span").html());

  // 要素の挿入：ul 要素内の冒頭にli要素を追加
  // $("ul").prepend("<li>List0</li>");
  // 要素の移動：ul 要素内の末尾の子要素 li を、リストの冒頭に移動
  // $("ul").prepend($("li:last-child"));
  // 要素の挿入：ul 要素内の末尾にli要素を追加
  // $("ul").append("<li>List5</li");
  // 要素の移動：ul 要素内の最初の子要素 li を、リストの末尾に移動
  // $("ul").append($("li:first-child"));
  // 要素の削除：二番目のli要素を削除
  // $("li:eq(1)").remove();
  // インデックス番号の取得：#target が同階層の中で何番目の要素にあたるかを取得
  // $("ul").append("<li>target の index番号 は" + $("#target").index() + "番目です。</li>" );

  // a要素クリック時、文字色が変化
  $("#for-click").click(function(){
    $(this).css("color","red");
    return false;
  });
  // a要素マウスオーバー時、文字色が変化
  $("#for-mouseover").mouseover(function(){
    $(this).css("color","red");
  });
  // a要素マウスオーバー時、文字色を変化させ、マウスアウト時に文字色変化
  $("#for-mouseoverout").hover(function(){
    $(this).css("color","red");
  }, function(){
    $(this).css("color","green");
  });
  // マウスカーソル位置の座標を取得し、div要素に表示
  $(window).mousemove(function(e){
    $("#cursor-place").html("x位置："+ e.pageX +"px y位置：" + e.pageY + "px");
  });
  // ブラウザをスクロールした時に文字色の変更
  $(window).scroll(function(){
    $("#for-scroll").css("color","blue");
  });
  // p要素を非表示
  $("#for-showhide").hide();
  // p要素を表示
  $("#for-showhide").show();
  // p要素をフェードアウトで非表示
  $("#for-fade1").fadeOut();
  // p要素を1秒でフェードアウト
  $("#for-fade2").fadeOut(1000);
  // p要素をフェードアウト後、文字色の変更
  $("#for-fade3").fadeOut(function(){
    $(this).css("color","red");
  });
  // p要素を1秒でフェードアウト後、文字色の変更
  $("#for-fade4").fadeOut(1000,function(){
    $(this).css("color","red");
  });
  // p要素をフェードインで表示
  $("#for-fade1").fadeIn();
  // p要素を1秒でフェードイン
  $("#for-fade2").fadeIn(1000);
  // p要素をフェードイン後文字色の変更
  $("#for-fade3").fadeIn(function(){
    $(this).css("color","lime");
  });
  // p要素を1秒でフェードイン後、文字色の変更
  $("#for-fade4").fadeIn(1000,function(){
    $(this).css("color","lime");
  });
  
  // dt タグをクリックすると、スライド式閉
  // $("#definition-term").click(function(){
  //   $("#definition-description").slideUp();
  // });
  // dt タグをクリックすると、スライド式開閉
  // $("#definition-term").click(function(){
  //   $("#definition-description").slideToggle(2000);
  // });
  // box 500ms かけて、1000px 右へ移動
  // $("#circle").click(function(){
  //   $(this).animate({
  //     "margin-left":"1000px"
  //   },500);
  // });
  // box 500ms かけて、1000px 右へ移動(相対指定を用いて)
  $("#circle").click(function(){
    $(this).animate({
      "margin-left":"+=1000px"
    },5000);
  });
  // dt 要素にマウスを乗っけると、スライド式開閉
  // $("#definition-term").hover(function(){
  //   $("#definition-description").slideToggle();
  // });
  // dt 要素にマウスを乗っけると、スライド式開閉（アニメーション中は無効化）
  $("#definition-term").hover(function(){
    $("#definition-description").stop().slideToggle();
  });
// 要素の検索
  // div 要素の子要素の文字色を変更
  // $("#selector").children().css("color","red");
  // div 要素の子要素のspan 要素のみ文字色を変更
  $("#selector").children("span").css("color","red");
  // p 要素の親要素にボーダーをつける
  $("#selector2").parent().css("border","1px solid #ff0000");
  // li 要素にそれぞれのインデックス番号を挿入
  $("#insert-index li").each(function(){
    $(this).html("List"+ $(this).index());
  });
});