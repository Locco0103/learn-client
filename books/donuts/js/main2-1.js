$(document).ready(function(){
// 2-1 jQuery の基本とセレクターの使い方
// セレクター 1. css でもよく使う
  $("li").css("color","red");
  $("#first").css("color","blue");
  $(".two").css("color","green");
  // 子要素
  $("#third strong").css("color","dimgray");
  // すべての
  $("li *").css("background","#aaa");
  // 複数選択
  $("#first, #second").css("font-size","20px");
// セレクター 2. css2.1
  // 直下の子要素
  $("li > strong").css("border","3px solid red");
  // 隣接する次の
  $("#third + li").css("border","3px dotted green");
  // 最初の要素 first-child
  $("li:first-child").css("background","rgba(177,38,244,0.3");
// セレクター 3. css3
  // 間接セレクター　特定の要素の後の要素を指定
  $("#third ~ li").css("font-size","8px");
  // not() それ以外
  $("li:not(#second)").css("text-shadow","1px 1px 2px gray");
  // empty 空要素に対して
  $("li:empty").css("list-style-type","circle");
  // child 系
  // nth-child
  $("li:nth-child(even)").css("color","yellow");
  // last-child
  $("li:last-child").css("font-size","20px");
  // only-child
  $("li span:only-child").css("background-color","lime");
  // nth-last-child
  $("li:nth-last-child(2)").css("background","brown");
  // of-type 系
  // nth-of-type (同じ要素のみ)(nth-child すべての要素を数える)
  $("li:nth-of-type(5)").css("color","white");
  // nth-last-of-type
  $("li:nth-last-of-type(4)").css("border","1px dashed #0000ff");
  // first-of-type
  $("li:first-of-type").css("color","purple");
  // last-of-type
  $("li:last-of-type").css("border","1px dashed #00ff00");
  // only-of-type
  $("span:only-of-type").css("background","#ff00ff");
  // lang擬似クラス
  $(":lang(en)").css("background","#ccc");
// セレクター4 CSSの属性セレクター  
  // [attribute]
  $("[class]").css("font-size","8px");
  // [attribute='value'] 属性のある値
  $("[id='one']").css("color","red");
  // [attribute!='value'] 属性のある値でないもの
  $("[id!='one']").css("color","green");
  // [attribute^='value'] 特定の文字列ではじまるもの
  $("[title^='f']").css("background","yellow");
  // [attribute$='value'] 特定の文字列で終わるもの
  $("[title$='d").css("color","lime");
  // [attribute*='value'] ある特定の文字列を含んでいるもの
  $("[title*='ir']").css("border-bottom","2px solid blue");
  // [attributeFilter1][attributeFilter2] 複数の属性セレクターの選択
  $("[title^='f'][title$='th']").css("border-left","6px solid red");
// セレクター5 jQuery 独自セレクター
  // first/last 最初/最後　(first-child は親要素ごとに子要素の1番目)(first はすべての中で最初のもののみ)
  $("li:first").css("background","red");
  $("[title]:last").css("background","blue");
  // even/odd 偶数/奇数 (最初の数字は　0　になる)
  $("[title^='f']:even").css("color","pink");
  // eq / lt(less than) / gt(greater than)
  $("p:lt(2)").css("color","yellow");
  $("p:eq(2)").css("color","orange");
  $("p:gt(2)").css("color","red");
  // header (h1-h6 タグをすべて)
  $(":header").css("color","orange")
  // contains (文字列), has(タグ) 
  $("p:contains('css')").css("border","3px dotted blue");
  $("li:has(em)").css("text-align","center");
  // parent (テキストを含む/emptyの逆)
  $("li:parent, p:parent, :header:parent").css("text-align","center");
});



















