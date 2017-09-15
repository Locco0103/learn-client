$(function(){
  // 一つずつがむしゃらに
  // $("img[src='images/photo1.jpg']").mouseover(function(){
  //   $(this).attr("src","images/photo1_on.jpg");
  // }).mouseout(function(){
  //   $(this).attr("src","images/photo1.jpg");
  // });
  // $("img[src='images/photo2.jpg']").mouseover(function(){
  //   $(this).attr("src","images/photo2_on.jpg");
  // }).mouseout(function(){
  //   $(this).attr("src","images/photo2.jpg");
  // });
  // $("img[src='images/photo3.jpg']").mouseover(function(){
  //   $(this).attr("src","images/photo3_on.jpg");
  // }).mouseout(function(){
  //   $(this).attr("src","images/photo3.jpg");
  // });
  // 汎用性のあるものを
  // index を利用して
  // $("img.rollover").mouseover(function(){
  //   var index = $("img").index(this) + 1 ;
  //   $(this).attr("src","images/photo" + index + "_on.jpg");
  // }).mouseout(function(){
  //   var index = $("img").index(this) + 1 ;
  //   $(this).attr("src","images/photo" + index + ".jpg");
  // });

  // 正規表現を使用して
  $("img.rollover").mouseover(function(){
    $(this).attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
  }).mouseout(function(){
    $(this).attr("src",$(this).attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1$2"));
  })
  //プリロード
    .each(function(){
      $("<img>").attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
    });

});