$(function(){

// Menu ボタンの動作
  $('.menuPlus').parents('li').next('ul').hide();

  $('.menuPlus').click(function(){
    $(this).parents('li').next('ul').fadeToggle(100);
    $(this).toggleClass('fa-plus fa-minus');
    $(this).parent().siblings().toggleClass('color1');
  });

// ハンバーガーメニューの役割
  $('#smMenu').hide();
  $('#ham').click(function(){
    $('#smMenu').not(":animated").slideToggle(300);
  });

// lMenu 出力
  $('.subMenu').hide(); 
  $('#lMenu div').hover(function(){
    $(this).children('.subMenu').show();
  },function(){
    $(this).children('.subMenu').hide();
  });

});