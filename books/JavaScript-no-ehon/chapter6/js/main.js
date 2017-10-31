// new演算子・組み込みオブジェクト を使って、配列を生成してみよう
a = new Array(1,2,3);
document.write("a：" + a);
// new演算子・組み込みオブジェクト を使わず　、配列を生成してみよう
b = [4,5,6];
document.write("<br>b：" + b)
// 空の配列を作ってから、要素に値を代入しよう
c = new Array();
c[0] = 7;
c[1] = 8;
c[2] = 9;
document.write("<br>c：" + c);
// 連想配列の代入を二つの方法でやってみよう
// pattern1
d = new Array();
d['dog'] = "犬";
d['cat'] = "猫";
document.write("<br>d：" + d['dog'] + d['cat']);
// pattern2 
e = new Array();
e.doragon = '竜'
e.horse = '馬'
document.write("<br>e：" + e['doragon'] + e['horse']);
// 二次元配列を生成してみよう
// f = new Array();
// f['dog']['name'] = 'dog';
// f['cat']['name'] = 'cat';
// f['dog']['cry'] = 'bauwau';
// f['cat']['cry'] = 'myao';
// document.write(f['dog']['name']);
  // なぜ 'name' はダメなのか？
// 配列の指定した要素を破棄してみよう
g = ['one','two','three'];
delete g[1];
console.log(g);
// 配列を丸ごと破棄してみよう
h = ['une','doux','trois'];
delete h;
  // console.log(h); delete してしまったので、出力不可
// 配列の2.3番目を切り出して 他の変数に代入 してみよう
i = ['ichi','ni','san','yon','go','roku'];
iSlice = i.slice(3,6);
console.log(iSlice);
// 配列先頭に要素を追加
i.unshift('zero');
console.log(i);
// 配列末尾に要素を追加
i.push('nana');
console.log(i);
// 配列先頭から要素を削除
i.shift();
console.log(i);
// 配列末尾から要素を削除
i.pop();
console.log(i);

// 文字列の長さを取得するプロパティ
j = "abcdefghijklmnopqrstuvwxyz";
len = j.length;
document.write("<br>");
document.write(len);
// 文字列を配列に分割するメソッド
k = "2017/10/24";
spl = k.split("/");
console.log(spl);
// 先頭から何番目かを文字列検索
l = "abcdefghijklmnopqrstuvwxyz";
idx = l.indexOf("m");
console.log(idx);
// Math オブジェクト
// プロパティ
  // 円周率を取得
m = Math.PI;
console.log(m);
// メソッド
  // 絶対値を取得
n = -2;
absoluteNum = Math.abs(n);
console.log(absoluteNum);
  // 切り上げを取得
o = 12.345;
ceil = Math.ceil(o);
console.log(ceil);
  // 切り捨てを取得
p = 12.345;
floor = Math.floor(p);
console.log(floor);
  // 最大値を返す
q = Math.max(1,2,3,4);
console.log(q);
      // 配列の最大値はこれではとれない
qArray = [1,2,3,4];
q2 = Math.max(qArray);
console.log(q2);
      // こうすればできる
q3 = Math.max(qArray[0],qArray[1],qArray[2],qArray[3]);
console.log(q3);
q4 = Math.max.apply(null, qArray);
console.log(q4);

  // 最小値を返す
r = Math.min(1,2,3,4);
console.log(r);
rArray = [1,2,3,4];
r2 = Math.min.apply(null, rArray);
console.log(r2);
  // べき乗を取得
s = Math.pow(5, 2);
s2 = Math.pow(8, 3);
console.log(s);
console.log(s2);
  // 乱数を発生させる (0-9.999999)
t = Math.random();
console.log(t);
  // 四捨五入を取得
u = 12.345;
round = Math.round(u);
console.log(round);
  // 平方根を取得
v = Math.sqrt(196);
console.log(v);
// [1-10 の整数の乱数を発生させる]
w = Math.floor(Math.random() * 10) + 1;
console.log(w);
// 配列に色を入れて、背景色をランダムに変更してみよう
var x = ["red","green","blue","yellow","purple","gray"];
  // 配列の何番目をとるのかを乱数で
randNum = Math.floor( Math.random() * x.length );
console.log(randNum);
// document.bgColor = x[randNum];
// 現在時刻の取得
var now = new Date();
document.write("<br>");
document.write(now);
// 指定した日付と時刻のオブジェクトを作成
var y = new Date(1991, 0, 3, 0, 0, 0);
document.write("<br>");
document.write(y);
// 現在の日付時刻別の取得
  // 西暦
var FY = now.getFullYear();
console.log(FY);
  // 月
var M = now.getMonth() + 1;
console.log(M);
  // 日
var Dt = now.getDate();
console.log(Dt);
  // 曜日
var Dy = now.getDay();
console.log(Dy);
  // 時間
var H = now.getHours();
console.log(H);
  // 分
var Ms = now.getMinutes(); 
console.log(Ms);
  // 秒
var S = now.getSeconds();
console.log(S);
  // 1970年1月1日午前0時からのミリ秒を取得
var T = now.getTime();
console.log(T);
// [今日から指定した日までの日数を取得]
  // 誕生日から何日経ってるか計算してみよう
var birth = new Date(1991, 0, 3, 0, 0, 0);
var today = new Date();
var birthTime = birth.getTime();
var todayTime = today.getTime();
var pastTime = (todayTime - birthTime) / (24 * 60 * 60 * 1000);
document.write("<br>");
document.write(Math.floor(pastTime));
  // 誕生日から一万日ってだいたい何歳と何日？（閏年を考えない）
var ageYear = Math.floor(10000 / 365);
var ageDay = 10000 % 365;
document.write("<br>");
document.write(ageYear);
document.write("<br>");
document.write(ageDay);

// 正規表現を用いてパターンマッチングを行う
var str = "I like ungai and choco";
var reg = new RegExp("[a-z]{5}"); // 小文字で5文字 
var mat = str.match(reg);
console.log(mat);
// 大文字と小文字を区別しない
var str2 = "I like Unagi and choco";
var reg21 = new RegExp("[a-z]{5}");
var reg22 = new RegExp("[a-z]{5}","i");
var mat21 = str2.match(reg21);
var mat22 = str2.match(reg22);
console.log(mat21);
console.log(mat22);
// すべてを取得
var str3 = "I loved unagi and choco";
var reg31 = new RegExp("[a-z]{5}"); 
var reg32 = new RegExp("[a-z]{5}","g"); 
var mat31 = str3.match(reg31);
var mat32 = str3.match(reg32);
console.log(mat31);
console.log(mat32);
// 文字列の入れ替え
var str41 = "I loved fish and chips";
var rep = "curry";
var reg4 = new RegExp("[a-z]{5}","g");
var str42 = str41.replace(reg4, rep);
console.log(str42);
              // プロパティは()をつけない！ ()で取得する必要がないから！

