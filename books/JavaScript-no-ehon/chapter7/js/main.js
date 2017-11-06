// コンソールで新しいウインドウを開く
// window.open("https://google.co.jp/");

// 確認ダイアログの表示
// window.alert("heey");
// 文字入力ダイアログの表示
// window.prompt("what's up?","not so much");
// 5秒後に警告ダイアログの表示
// var mytime = setInterval("alert('spent 5 seconds')",5000);
// タイマーを解除してみよう
// clearInterval(mytime);

// 新しいドキュメントの出力を開始
document.open();
// ドメイン名の書き出し
document.write("ドメイン名は" + document.domain + "<br>");
// タイトルの書き出し
document.write("タイトルは" + document.title + "<br>");
// 最終更新日の書き出し
document.write("最終更新日は" + document.lastModified + "<br>");
// フォームの数を参照
document.write("フォームの数は" + document.forms.length + "<br>");
// フォームのエレメント数を参照
document.write("はじめのフォームのエレメント数は" + document.forms[0].length + "<br>");
// フォームのエレメント数を参照
document.write("つぎのフォームのエレメント数は" + document.forms[1].length + "<br>");
// ドキュメントの出力の終了
document.close();

// form 内 typeプロパティ を取得してみよう
// var a = document.forms[0].elements[0].type;
// console.log(a);
// var b = document.forms[0].elements[0].name;
// console.log(b);
// var c = document.practice.knm.name;
// console.log(c);
// var d = document.practice.nnm.value;
// console.log(d);
// var e = document.forms[1].elements[1].name;
// console.log(e);
// var f = document.practice2.knm2.name;
// console.log(f);

var check = function(){
  for(var i = 0; i < document.forValidate.length; i ++) {
    if( document.forValidate.elements[i].value == '') {
      alert("write all");
      return false;
    }
  }
}

var test = document.getElementById("test");
document.write(test.innerHTML);
test.innerText = 'whats going on?';

test.style.color = "blue";
test.style.fontSize = "100px";

var hari = document.getElementById('hari');
console.log(hari.src);
