$(document).ready(function(){
// 2-2 HTML/CSS を操作するjQueryの命令
  //1. テキストの変更と取得
    // テキストの変更
    $("p#first").text("change");
    // テキストの取得と変更
    $("p#second").text($("#first").text());
  //2. HTML の変更と取得
    // HTML の変更（HTMLごと変更）
    $("#third").html("<strong>htmlによる変更</strong>");
    // HTML の取得と変更
    $("#fourth").html($("#third").html());
  //3. HTML の挿入
    // HTML要素内の先頭に挿入 
    $("#fifth").prepend("<em>prepend </em>");
    // HTML要素内の最後に挿入 
    $("#fifth").append("<em>append</em>");
    // HTML要素の前に挿入 
    $("#sixth").before("<h1>Hello!</h1>");
    // HTML要素の後に挿入 
    $("#sixth").after("<h2>Earth!</h2>");
  //4. HTML の移動
    // HTML要素内の先頭に移動
    $("#move").prependTo("#first");
    // HTML要素内の最後に移動
    $("#move").appendTo("#second");
    // HTMl要素の前に移動
    $("#move").insertBefore("#first");
    // HTMl要素の後ろに移動
    $("#move").insertAfter("#third");
  //5. 他の要素で包む
    // 各要素を指定した要素で包む
    $("#wrap").wrap("<p></p>");
    // 全要素を別の要素で包む
    $("div").wrapAll("<section></section>");
    // 指定した要素の子要素を別の要素で包む
    $("#sixth").wrapInner("<em></em>");
  //6. 親要素を取り除く (jQuery 1.4.0 で追加)
    // 親要素を取り除く
    $("h6").unwrap();
  //7. 要素の置き換え
    // 指定した要素を他の要素と置き換え
    $("#replace").replaceWith("<h1 id='replace'>replaced done</h1>");
  //8. 要素の削除
    // セレクターで指定した要素を削除
    $("#replace").remove();
  //9. 属性値の変更と取得
    // リンク先の変更
    $("#link").attr("href","https://www.yahoo.co.jp/");
    // リンク先を取得し、要素内テキストとして書き込んでみよう
    $("#link").text($("#link").attr("href"));
    // 属性値を削除 targetを削除しよう
    $("#link").removeAttr("target");
  //10. class属性の追加と削除
    // class属性を追加
    $("#link").addClass("add");
    // class属性を削除
    $("#link").removeClass("add");
  //11. CSSの制御
    // css プロパティを一つ変更
    $("#link").css("color","pink");
    // css プロパティを複数変更
    $("#link").css({
      "color":"skyblue",
      "background":"#000",
      "font-weight":"bold"
    });
    // css プロパティの値を取得し書き込んでみよう
    $("#link").text($("#link").css("color"));
  //番外編　メソッドチェーン
    // 複数の命令を一度にしてみよう
    $("#chain").text("method!").append("<strong>chain</strong>").insertAfter("#sixth").appendTo("#wrap");
});