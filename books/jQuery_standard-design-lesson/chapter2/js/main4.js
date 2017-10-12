//javascript の基本

// var num;
// num = 3;
var num = 5;
num = 11;
console.log(num);
// 文字列の変数宣言と値の挿入
var str = "strings";
console.log(str);
// 数値の3を足し合わせて変数に代入
var plus = 3 + 3;
// 文字列3を足し合わせて変数に代入
var strPlus = "3" + "3";
console.log(plus);
console.log(strPlus);
// 配列の宣言
var sampleArray = new Array();
// 配列内のデータ = 配列の要素　を代入
sampleArray = ["apple","peach","grape"];
console.log(sampleArray);
// 配列の0番目の要素をp要素に表示させる
// $(function(){
//   $("p").html( sampleArray[1] );
// });
// 配列の最初に新しい要素を追加
sampleArray.unshift('orange');
console.log(sampleArray);
// 配列の最後に新しい要素を追加
sampleArray.push('fruits');
console.log(sampleArray);
// 配列の一番目の要素を変更
sampleArray[1] = "shake it";
console.log(sampleArray);
// 関数の作成　と　関数の実行
$(function(){
  // 関数の作成
  // function testFunc(){
  //   $("#price1").html("商品価格：¥1000");
  // }
  // 関数の実行
  // testFunc();
// 第一引数を html要素、第二引数を　文字列内の値として、関数の作成と実行を行う
  // 関数作成
  function testFunc2(elm, price){
    $(elm).html("商品価格：¥" + price);
  }
  // 関数実行
  testFunc2("#price1",2000);
// 上記の関数を用いて、複数関数を呼び出してみよう
  testFunc2("#price2",3000);
  testFunc2("#price3",5000);
  testFunc2("#price4",8000);
// 無名関数の作成・実行
  var createRed = function(){
    $("#price2").css("color","red");
  }
  createRed();
// 5 以上の時のみ p要素 に表示
  var x = 1;
  // if(x >= 5){
  //   $("#x").html("x =" + x + "<br>したがって、5以上");
  // }
// 5 以上の時 p要素 赤色、他の時 p要素 青色
  if(x >= 5){
    $("#x").css("color","red");
    $("#x").html("x =" + x + "<br>したがって、5以上");
  } else {
    $("#x").css("color","blue");
    $("#x").html("x =" + x + "<br>したがって、5より小さい");
  }
// 5 以上の時 p要素 ボーダー赤、3以上の時  p要素 ボーダー緑、他の時 青
  if( x >= 5 ){
    $("#x").css("border","1px solid #f00");
    $("#x").html("x =" + x + "<br>したがって、5以上")
  } else if( x >= 3 ){
    $("#x").css("border","1px solid #0f0");
    $("#x").html("x =" + x + "<br>したがって、3以上5未満")
  }　else {
    $("#x").css("border","1px solid #00f");
    $("#x").html("x =" + x + "<br>したがって、3未満")
  }
// for文を用いて、0から10までを足し算してみよう
  var y = 0;
  for(i = 0; i <= 10; i++){
    y += i;
  }
  console.log(y);
// 3.5 の少数切り捨て
  var z = 3.5;
  zFloor = Math.floor(z);
  console.log(zFloor);
// 3.5 の少数切り上げ
  zCeil = Math.ceil(z);
  console.log(zCeil);
// 3.5 の少数四捨五入
  zRound = Math.round(z);
  console.log(zRound);
// 0から1未満の乱数を生成
  var rand = Math.random();
  console.log(rand);
// 0から100までの整数をランダムに生成
  var rand100 = Math.round( rand * 100 );
  console.log(rand100);
// target クラスのついた要素の数を取得
  var targetLength = $(".target").length;
  var p = "<p>"+ targetLength +"</p>";
  $("body").prepend(p);
// 配列の要素数を取得
  var testArray = ["alpha","beta","gamma","delta","epsilon"];
  $("p:first").html( testArray.length );
  console.log(testArray);
// 文字列の文字数を取得
  var str1 = "aiueoaiueoaiueoaiueoaiueoaiueoaiueoaiueo"
  console.log(str1.length);

// 1秒ごとに p要素にカウントアップされる
  var count = 0;
  // 0秒のみはじめにカウントさせる
  countFunc();
  // 定期的(1000ms)に関数を実行させる
  var timer = setInterval(countFunc,1000);
  // 繰り返される関数の作成
  function countFunc(){
    count++;
    $("#countUp").html("countupされる値"+ count);
    if( count >= 5 ){
  // カウントが10になったらカウント終了
      clearInterval(timer);
    }
  }
// 文字列を複数使って、アラート表示させよう
  var str2 = "I am";
  var str3 = " starving";
  alert( str2 + str3 );
}); 
















