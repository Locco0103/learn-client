$(function(){

// Menu ボタンの動作
  $('.menuPlus').parents('li').next('ul').hide();

  $('.menuPlus').click(function(){
    // if( $(this).hasClass('active') ){
    //   $(this).parents('li').next('ul').fadeOut(100);
    //   $(this).addClass('fa-plus').removeClass('active fa-minus');                
    // } else {
    //   $(this).parents('li').next('ul').fadeIn(100);
    //   $(this).addClass('active fa-minus').removeClass('fa-plus');                
    // }
// もしや全部 toggle でできるのでは？
    $(this).parents('li').next('ul').fadeToggle(100);
    $(this).toggleClass('fa-plus fa-minus');
    $(this).parent().siblings().toggleClass('color1');
  });

// ハンバーガーメニューの役割
  $('#sMenu').hide();

  $('#ham').click(function(){
    $('#sMenu').slideToggle(500);
  });



});