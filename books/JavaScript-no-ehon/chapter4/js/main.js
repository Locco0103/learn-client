// 偶数と奇数で異なる処理をさせてみよう
var a = 102;
document.write("a = " + a + "より, ");
if( a % 2 == 0 ){
  document.write("a は偶数です。");
} else {
  document.write("a は奇数です。");
}

// 1-4桁の桁数によって異なるテキストを出力させてみよう
if ( 0 < a && a < 10){
  document.write("a は1桁です。");
} else if ( 10 <= a && a < 100 ){
  document.write("a は2桁です。");
} else if ( 100 <= a && a < 1000 ){
  document.write("a は3桁です。");
}　else if ( 1000 <= a && a < 10000){
  document.write("a は4桁です。");
} else{
  document.write("a は負の数もしくは5桁以上です。");
}

// 条件をネストして使ってみよう
if( a % 3 == 0 ){
  if( a % 2 == 0 ){
    document.write("3で割り切れる偶数です。");
  } else{
    document.write("3で割り切れる奇数です。");
  }
} else {
  if( a % 2 == 0 ){
    document.write("3で割り切れない偶数です。");
  } else{
    document.write("3で割り切れない奇数です。");
  }  
}

// カウンタを用いてループ処理を行ってみよう
for ( i=0; i < 3; i++){
  document.write("<br>カウンタ数：" + i);
}

// ループをネストして 九九の掛け算を出力させてみよう
for ( i = 1; i < 10; i++){
  document.write("<br>" + i + "の位");
  for( j = 1; j < 10; j++){
    document.write("<br>" + i + "×" + j + "=" + i*j );
  }
}

// do while 文を使って、1から10まで足し算してみよう
k = 0;
total = 0;
do {
  k++;
  total += k;
} while ( k < 10 );
  // 10 の時、最後に足されてから、ループを終了する。
document.write("<br>1~10の合計は" + total);

// while 文に break を使ってみよう
var randNum1 = 0;
var randNum2 = 0;
// どちらも 8, 7 より大きくなれば終了
while( randNum1 < 8 || randNum2 < 7 ){
  randNum1 = Math.floor(Math.random() * 10);
  randNum2 = Math.ceil(Math.random() * 10);
  document.write("<br>乱数１：" + randNum1 + " 乱数２：" + randNum2);
// かけ算して12になっても終了
  if( randNum1 * randNum2 == 12 ){
    break;
  }
}

document.write("<br>");
// while 文に continue を使ってみよう
var i = 0;
while ( i < 10 ){
  i++;
  if( i % 2 == 1 ){
    continue;
  }
  document.write(i);
}

// switch文で福引を作ってみよう
var randNum3 = Math.round(Math.random()*10);
document.write("<br>"+randNum3+"<br>");
var fuku = randNum3;
switch(fuku){
  case 7:
  document.write('一等');
  break;
  case 6:
  document.write('二等');
  break;
  case 1: case 3: case 9:
  document. write('三等');
  break;
  default:
  document. write('外れ');
  break;
}