$(function(){
  var color = ["blue","brown","green","red","yellow"];
  var length = color.length;
  var choosenColor = color[ Math.floor(Math.random() * length) ];

  $("img").attr("src","../images/" + choosenColor + ".jpg");
});