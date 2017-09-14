// Ajax Asynchronous Javascript + XML
// Webページを切り替えずにJavascript でサーバーとやりとり
$(function(){
  // Webページにテキスト sample.txt を挿入する
  $("p").load("./sample.txt");
  // sample.html の p要素を取り込んでみよう
  $("div").load("./sample.html p");
  // XMLデータを取得・書こうして表示する
  $.ajax({
    url:"./rss.xml",
    dataType:"xml",
    success: function(data){
      // XML内のデータを取得　itemセレクターの範囲を指定 data
      $("item",data).each(function(){
        $("dl").append("<dt><a href='" + $("link",this).text() + "'>" + $("title",this).text() + "</a></dt><dd>" + $("description",this).text() + "</dd>");
      });
    }
  });
  // each(function()) を学ぶ
  $("table tr").each(function(){
    $(this).html("<td>" + $("th",this).text() + "は" + $("td",this).text() + "</td>")
  });

});


// RSS (really simple syndication)