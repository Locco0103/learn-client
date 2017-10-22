// jQuery 読み込んでから
$(function(){
  var maxH = 0;
  // すべての高さを最大値の取得
  $("#row > div").each(function(){
    if( maxH < $(this).height() ){
      maxH = $(this).height();
    }
  }).css("height", maxH);;

});