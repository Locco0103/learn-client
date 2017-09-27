$(function(){
  $(".sub").hide();
  $(".menu > li").hover(function(){
    $(".sub",this).show();
  },function(){
    $(".sub",this).hide();
  });
});