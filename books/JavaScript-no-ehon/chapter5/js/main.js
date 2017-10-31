// function testFunction(a,b){
//   var c = a + b;
//   console.log(c);
// }

// testFunction(3,4);
// testFunction(1,1);
// testFunction("hey","dude");

// // 値渡し
// function drink(a){
//   a = 'coffee';
//   console.log(a);
// }
// var b = 'tea';
// drink(b);
// // b = 'tea' / its still 'tea'

// // 参照渡し / 配列を用いる場合
// function food(a){
//   a[0] = 'rice';
//   console.log(a[0]);
// }
// b = ['bread','spagetthi'];
// food(b);
// // b = ['rice', 'spagetthi'] / its changed

// x = 1;
// function localGlobalTest(){
//   var x = 3;
//   console.log(x);
// }
// localGlobalTest();
// console.log(x);

// y = 1;
// function localGlobalCheck(){
//   y = 3;
//   console.log(y);
// }
// localGlobalCheck();
// console.log(y);


// ジャンケンプログラムの作成
// やるかやらないかの警告
var strMsg0 = "じゃんけんしますか？";
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var submit = document.getElementById("submit");
var black = "#000";
var choice = 0;

var bgColorBlack = function(a){
  a.style.backgroundColor = black;
}
var getChoice1 = function(){
  bgColorBlack(btn1);
  choice = randNum1;
  console.log(choice);
}
var getChoice2 = function(){
  bgColorBlack(btn2);
  choice = randNum2;
  console.log(choice);
}
var getChoice3 = function(){
  bgColorBlack(btn3);
  choice = randNum3;
  console.log(choice);
}

// やらない場合はボタンを使用できなくする
if(!confirm(strMsg0)){
  bgColorBlack(btn1);
  bgColorBlack(btn2);
  bgColorBlack(btn3);
  submit.innerHTML = "Do not Touch it";
} else {
// やる場合
// 各ボタンに対するランダム数を 0~10 で作成
  randNum1 = Math.round(Math.random()*10);
  randNum2 = Math.round(Math.random()*10);
  randNum3 = Math.round(Math.random()*10);
  console.log(randNum1);
  console.log(randNum2);
  console.log(randNum3);

// btn1 をクリックしたら、randNum1 = choice とする
  btn1.addEventListener('click',getChoice1);
  btn2.addEventListener('click',getChoice2);
  btn3.addEventListener('click',getChoice3);
// 7~10 であなたの勝ちというalert

  var getResult = function(){
    if ( choice > 7 ){
      window.alert('You win !!');
    } else if ( choice > 4 ){
      window.alert('again');
    } else {
      window.alert('You lose...');
    }
  }

  submit.addEventListener('click', getResult);
  
}

















