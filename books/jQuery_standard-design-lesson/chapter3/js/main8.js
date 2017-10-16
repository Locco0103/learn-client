$(function(){
  $(".tabContent:first").nextAll().hide();
  $("#tabMenu li:first").addClass("bg-skyblue");

  // tabMenu > li i 番目をクリックしたら i 番目 のtabContentを表示
  $("#tabMenu li").click(function(){
    // #tabMenu li の bg-skyblue クラスを消す
    $("#tabMenu li").removeClass("bg-skyblue");
    $(this).addClass("bg-skyblue");
    // すべての .tabContent を一度隠す
    $(".tabContent").hide();
    // tabMenu li のインデックス $(this).index()
    $(".tabContent:eq(" + $(this).index() + ")").show();
  });

});