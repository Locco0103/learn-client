$(function(){
  $("#modal").hide();

  $("#img img").click(function(){
    // #modal の img の src の変更
    $("#modal img").attr("src", $(this).attr("src") );
    // #modal を表示
    $("#modal").fadeIn(500);
  });

  $("#modal").click(function(){
    $(this).fadeOut(500);
  });


  // 本
  $("#image img").click(function(){
    // body要素の最後に #bg, #photo の divタグ生成
    $("body")
      .append('<div id="bg">')
      .append('<div id="photo">');
    // <img src="../images/hoge.jpg" width="100%" height="100%"> を#photo へ
    $("#photo").html("<img src='" + $(this).attr("src") + " '>");
    $("#photo img").attr("width","80vw").attr("height","80vh").addClass("w100per h100per");
    $("#bg").hide();
    $("#photo").hide();
    $("#bg").fadeIn();
    $("#photo").fadeIn();

    $("#bg").click(function(){
      $(this).fadeOut(function(){
        $(this).remove();
      });
      $("#photo").fadeOut(function(){
        $("#photo").remove();
      });
    });


  });

});