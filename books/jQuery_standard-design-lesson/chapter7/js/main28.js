$(function(){

  var duration = 500;
  var interval = 2000;

  var slideoutImage = function(){
    $("#slideshow > div:last-child").not(':animated').fadeOut(duration,function(){
      $("#slideshow > div:last-child").prependTo("#slideshow");
      $("#slideshow > div:first-child").show(1,function(){
        var frontImgNumber = $("#slideshow > div:last-child").data('n');
        // frontImgNumber 番目のボタンの色を変更(addClass active)
        $("#buttons > div").removeClass('active');
        $('#buttons > div:eq(' + frontImgNumber + ')').addClass('active');
      });
    });
  };

  var changeButtonColor = function(){
    var frontImgNumber = $("#slideshow > div:last-child").index();
  };

// 時間で変わる
  var slideShow = setInterval(function(){
    slideoutImage();
  } ,interval);


// クリックでの変更
  $('#buttons > div').click(function(){
  // もともと active になっているものをクリックしてもなにも変わらない
    if ( $(this).hasClass('active') ) {
      return false;
    } else {

    // ボタン自身の色の変更
    $(this).siblings('div').removeClass('active');
    $(this).addClass('active');
    // slideshow の変更
    var index = $(this).index();
    // #img + (index + 1) を#slideshow の真ん中にもってくる insertBefore
    $('#img'+ (index + 1) ).insertBefore('#slideshow > div:last');

    $("#slideshow > div:last-child").not(':animated').fadeOut(duration,function(){
      $("#slideshow > div:last-child").prependTo("#slideshow");
      $("#slideshow > div:first-child").show();
    });

    }
  });



// スライドショーの変更とともにボタンの色が変わるしくみをつくるよ！


});