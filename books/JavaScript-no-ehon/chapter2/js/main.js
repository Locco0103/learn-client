// Hello World! と 表示
window.document.write("Hello World!");
// window を省略してみよう
document.write("Hey Universe!");
// 警告ダイアログボックスを表示
// window.alert("Yo Nippon!");

// ドキュメントの文字色を変更しよう 
// 非推奨 覚えなくてよい
document.fgColor = "red";
// ドキュメントの背景色を変更しよう
// document.bgColor = "gray";
// ウインドウのサイズを変更しよう
window.resizeTo(300,600);

// 変数
// 型を調べる
a = typeof(123);
console.log(a);
// number / 数値型

b = typeof("123");
console.log(b);
// string / 文字列

c = typeof(true);
console.log(c);
// boolean / 論理型

d = typeof(window);
console.log(d);
// object / object型

e = typeof(null);
console.log(e);
// object / null

f = typeof(undefined);
console.log(f);
// undefined / 未定義型

// 変数を削除してみよう
// a = 2;
// delete a;
// console.log(a);
// a is not defined になります。

// 文字列リテラル  
text = "テキスト";
console.log(text);

// 文字列の連結
hello = "hello";
world = "world";
hw = hello + world;
console.log(hw);

// エスケープシーケンス
es = 'ようこそ"Javascript"へ';
es = "ようこそ\'Javascript\'へ";
console.log(es);

// 異なる 型 の 連結
  // 数値　と　文字列
  x = "a" + 1 + 1 ; // a11 左からまず文字列になる
  y = 1 + 1 + "a"; // 2a  左から数値として足された後、文字列
  console.log(x);
  console.log(y);

  // 論理値 と 数値
  z = 3 + true; //4
  console.log(z);
  // true は 1 となる

// 型の変換
  // 文字列を整数に
  str = "2714";
  int = parseInt(str);
  console.log(int);
  // 文字列を少数に
  str = "27.14";
  console.log(str);
  console.log(typeof(str));
  float = parseFloat(str);
  console.log(float);
  console.log(typeof(float));
  // 整数を文字列に
  num = 27;
  numToString = num.toString();
  console.log(numToString);
  console.log(typeof(numToString));
  // 論理値を文字列に
  bln = true;
  blnToString = bln.toString();
  console.log(blnToString);
  console.log(typeof(blnToString));

  // 前置、後置 の インクリメント演算子 の比較
  a = 1;
  x = ++a;
  b = 1;
  y = b++;
  console.log(a);
  console.log(x);
  console.log(b);
  console.log(y);
  // ++a 先に足してから代入
  // a++ 代入してから足す

// 比較演算子を用いて 論理値の出力
  x = 2;
  y = 8;
  console.log( x > y );
// 三項演算子
  z = ( x > y ) ? "x win" : "y win";
  console.log(z);
// 論理演算子　複数の条件を用いて、処理実行
  a = 1;
  z = ( y > x ) && ( a == b ) ? "y win かつ a = b" : "x win または a != b";
  console.log(z);
// 演算子　の　優先順位
  b = 2;
  c = 2;
  a = b == c;
  console.log(a); // true
