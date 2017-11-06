$(function(){
  // $('nav ul li:nth-of-type(1)').addClass('bg-cornflowerblue');

// pattern1
  // 各Sectionの上でscroll開始されたら、
  // $('div').scroll(function(){
  // // すべての nav ul li の bg-color を元に戻す
  //   $('nav ul li').removeClass('bg-cornflowerblue');

  // // それの section div の index をひろって

  // });

// pattern2
  // id名を指定する
  var offsetY = [];
  // offsetY[0] = $('#section1').offset().top;
  // offsetY[1] = $('#section2').offset().top;
  // offsetY[2] = $('#section3').offset().top;
  // offsetY[3] = $('#section4').offset().top;

  // $(window).scroll(function(){
  //   if ( $(window).scrollTop() > offsetY[3] - 260 ){
  //     $('nav ul li').removeClass('bg-cornflowerblue');
  //     $('nav ul li:nth-of-type(4)').addClass('bg-cornflowerblue');
  //   } else if ( $(window).scrollTop() > offsetY[2] - 260 ) {
  //     $('nav ul li').removeClass('bg-cornflowerblue');
  //     $('nav ul li:nth-of-type(3)').addClass('bg-cornflowerblue');      
  //   } else if ( $(window).scrollTop() > offsetY[1] - 260 ) {
  //     $('nav ul li').removeClass('bg-cornflowerblue');
  //     $('nav ul li:nth-of-type(2)').addClass('bg-cornflowerblue');      
  //   } else if ( $(window).scrollTop() > offsetY[0] - 260 ) {
  //     $('nav ul li').removeClass('bg-cornflowerblue');
  //     $('nav ul li:nth-of-type(1)').addClass('bg-cornflowerblue');      
  //   }
  // });

// pattern2 refactoring
  var length = $("nav ul li").length;

  for (var i=0; i < length; i++){
    offsetY.push($('section div:nth-of-type(' + (i+1) + ')').offset().top);
  }

  $(window).scroll(function(){
    for (var i=0; i < length; i++){
      // var j = length - i;

      if( $(window).scrollTop() > offsetY[ i ] - 260 ){
        $('nav ul li').removeClass('bg-cornflowerblue');
        $('nav ul li:nth-of-type('+ (i + 1)+')').addClass('bg-cornflowerblue');
      }
    }
  });
});