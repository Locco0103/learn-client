$(function(){
  $("nav").css({"margin-left":"-300px"});
    var dis = 300;
  $("#menu").click(function(){
    // if ( $("#main").hasClass(".active") ) {
    //   $("#main").animate({"margin-left":"-=300px"},300,'swing').removeClass(".active");
    //   $("nav").animate({"margin-left":"-=300px"},300,'swing');
    // } else {
    //   $("#main").animate({"margin-left":"+=300px"},300,'swing').addClass(".active");
    //   $("nav").animate({"margin-left":"+=300px"},300,'swing');
    // }

  // より短いコードで
  // #main nav の margin-left の - + 300px
    $("body").children().animate({"margin-left": "+=" + dis + "px"},500,'swing');
    dis *= -1;
  });
});