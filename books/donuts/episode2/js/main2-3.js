// [イベント処理]
//1. HTML が読み込まれたタイミング
$(document).ready(function(){
//2. 特定の要素がクリックされた時の処理
  // ボタンがクリックされたら、画像(alt属性も)を変えよう
  // $("#btn").click(function(){
  //   $("img").attr("src")
  // });
  // aタグに対してクリックイベントを設定してみよう
  // $("a").click(function(){
  //   $("img").attr("src","images/rabbit.jpg").attr("alt","うさぎ");
  //   return false;
  // });
  // 複数のボタンで異なる画像を表示してみよう (aタグを用いて)
  // $("a:eq(0)").click(function(){
  //   $("img").attr("src","images/rabbit.jpg").attr("alt","うさぎ");
  //   return false;
  // });
  // $("a:eq(1)").click(function(){
  //   $("img").attr("src","images/racheal.jpg").attr("alt","レイチェル");
  //   return false;
  // });
  // $("a:eq(2)").click(function(){
  //   $("img").attr("src","images/hari.jpeg").attr("alt","ハリネズミ");
  //   return false;
  // });
  // thisを用いて、短く記述してみよう
  // $("a").click(function(){
  //   $("img").attr("src",$(this).attr("href")).attr("alt",$(this).text());
  //   return false;
  // });
//3. 特定の要素がダブルクリックされた時の処理
  // ボタンがダブルクリックされたら、画像を変えよう
  // $("#btn").dblclick(function(){
  //   $("img").attr("src","images/rabbit.jpg").attr("alt","うさぎ");
  // });
//4. マウスのボタンの操作を感知する。(主にドラッグ＆ドロップで用いる)
  // ボタンが押された時に処理を実行
  // $("#btn").mousedown(function(){
  //   $("img").attr("src","images/racheal.jpg").attr("alt","レイチェル");
  // });
  // ボタンが話された時に処理を実行
  // $("button").mouseup(function(){
  //   $("img").attr("src","images/rabbit.jpg").attr("alt","うさぎ");
  // });
//5. マウスが重なったタイミングを感知
  // マウスが重なった時、画像を変更
  // $("img").mouseover(function(){
  //   $(this).attr("src","images/racheal.jpg").attr("alt","レイチェル");
  // });
  // マウスが外れると、画像を変更
  // $("img").mouseout(function(){
  //   $(this).attr("src","images/hari.jpeg").attr("alt","ハリネズミ");
  // });
  // メソッドチェーン（一つにまとめる）
  // $("img").mouseover(function(){
  //   $(this).attr("src","images/racheal.jpg").attr("alt","レイチェル");
  // }).mouseout(function(){
  //   $(this).attr("src","images/hari.jpeg").attr("alt","ハリネズミ");
  // });
//6. マウスの動きに合わせて処理を実行
  // 画像の上でマウスを動かすと、その位置がXY座標で表示される。
  // $("img").mousemove(function(e){
  //   $("#result").text("X座標："+ e.clientX + ",Y座標：" + e.clientY);
  // });
//7. イベント発生時に一度だけ処理を実行
  // 一回目は画像が変わり、二回目はリンク先に飛ぶ処理を実行してみよう
  // $("#btn").one('click',function(){
  //   $("img").attr("src","images/racheal.jpg").attr("alt","レイチェル");
  // });
//8. 対象要素を絞ってイベントを登録
  // 新しく生成された要素にも、付与できるイベントを作成しよう
  $("#btn").click(function(){
    $("ul").append('<li class="my30"><a href="images/light.jpg">ライト</a></li>');
  });
  $("ul").on('click','a',function(){
    $("img").attr("src",$(this).attr("href")).attr("alt",$(this).text());
    return false;
  });
//9. 設定されている イベント処理を取り消す
  // ボタンを押すと、a要素のクリックイベントが取り消され、普通のリンクとなる。
  $("ul").off('click');
});

// mousemove e
// mousemove(function(e){ }) clientX clientY
// 左上からX座標とY座標を取得

// on() のメリット
// 1. [イベントが発生する要素を指定できる] ul要素内のa要素をクリックした時のみ
// $("ul").on("click","a",function(){
//   $("img").attr("src","###");
// });
// 2. 将来追加される要素にもイベントが実行できる

// イベントのイメージ
// 画面が読み込まれた時に、指定した要素 に対し イベント・メソッド を付与するイメージ。
// -> 後から生成される 要素 にはそのイベント・メソッド は付与されていない。
// on('click') はクリックされたタイミングで「イベント発生する要素」かどうかを判断する。











