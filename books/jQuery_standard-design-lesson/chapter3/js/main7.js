$(function(){
  $("li img").click(function(){
    $("#bigDisplay").attr("src", $(this).attr("src"));
  });
});