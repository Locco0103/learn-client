// 1. HTML CSS3 のみでストライプテーブルを作ってみよう
$(function(){
  // 2. css3 を使わないで、jQuery を使って作ろう
  $("tr:nth-child(odd)").addClass("odd");
  $("th:nth-child(even)").addClass("even");

  // 3. マウスオーバーで行や列をハイライト表示にしよう
  // $("tr:not(:first-child)").mouseover(function(){
    // 行のハイライト
  //   $(this).addClass("highlight");
  // });
    // マウスアウトでハイライト外す
  // $("tr:not(:first-child)").mouseout(function(){
  //   $(this).removeClass("highlight");
  // });
    // メソッドチェーン
  $("tr:not(:first-child)").mouseover(function(){
    $(this).addClass("highlight");
  }).mouseout(function(){
    $(this).removeClass("highlight");
  });
    // 列のハイライト
  $("td").mouseover(function(){
    $("td:nth-child("+ ($(this).index()%$("tr").length+1) +")").addClass("highlight");
  }).mouseout(function(){
    $("td:nth-child("+ ($(this).index()%$("tr").length+1) +")").removeClass("highlight");
  }); 
});