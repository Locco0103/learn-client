$(function(){
//1. フォーム部品の値を取得・変更する命令
  // input[name='email'] 要素に入力された文字を取得し、ボタンで出力
  // $("#confirm").click(function(){
  //   $("p").text($("input[name='email']").val());
  //   $(this).text("送信");
  // });
  // // クリアボタンを押せば、input要素の値をクリアする
  // $("#clear").click(function(){
  //   $("input[name='email']").val("");
  // });
//2. フォームに関するイベントの処理
  // フォーカスを感知する
  // フォーム部品が選択されたら、value属性の値を空にし、入力の色を変えよう。
  // $("input[name='email']")
  //   .val("入力してください")
  //   .css("color","#ccc")
  //   .focus(function(){
  //     $(this).val("").css("color","#000");
  //   });
  // 上記のイベントを一回のみ実行されるイベントにしよう。（一度入力した内容が残る）
  // $("input[name='email']")
  //   .val("入力してください")
  //   .css("color","#ccc")
  //   .one('focus',function(){
  //     $(this).val("").css("color","#000");
  //   });
  // フォーカスが外れたことを感知する
  // フォーカスが外れた際に、入力が空欄なら「入力してください」と表示し、再びフォーカス時のイベントを実行する。
  // $("input[name='email']")
  //   .val("入力してください")
  //   .css("color","#ccc")
  //   .one('focus',function(){
  //     $(this).val("").css("color","#000");
  //   })
  //   .blur(function(){
  //     if($(this).val() == ""){
  //       $(this)
  //         .val("入力してください")
  //         .css("color","#ccc")
  //         .one('focus',function(){
  //           $(this).val("").css("color","#000");
  //         });
  //     } 
  //   });
  // フォームの内容変更を感知する
  // select タグで変更があれば、テキストを変更する
  // $("select").change(function(){
  //   $("#desc").text($(this).val());
  // });
  // フォームの送信を感知する
// お問い合わせフォーム(ラジオボタン・セレクトボックス・チェックボックス)を作ってみよう
  // 送信ボタンを押した際、名前が未入力であれば、ボックスのスタイルを変更し、注意文を出力
  // $("form").submit(function(){
  //   if( $("input[name='name']").val() == "" ){
  //     $("input[name='name']").css({
  //       "border":"1px solid #f00"
  //     }).after('<span>入力してください。</span>');
  //     $("span").css({
  //       "color":"#f00",
  //       "font-weight":"bold"
  //     });
  //   }
  //   return false;
  // });
  // 上記の操作が連続して行えないようにしよう
  // $("form").submit(function(){
  //   if( $("input[name='name']").val() == "" ){
  //     if( $("span").css("font-weight") != "bold"){
  //       $("input[name='name']").css({
  //         "border":"1px solid #f00"
  //       }).after('<span>入力してください。</span>');
  //       $("span").css({
  //         "color":"#f00",
  //         "font-weight":"bold"
  //       });        
  //     }
  //   }
  //   return false;
  // });
//3. フォーム部品を選択するセレクター
  // チェックの入っているフォーム部品を選択
  // チェックの入ったもののラベルだけに背景色をいれよう
  // $("input").click(function(){
  //   $("label").css("background","");
  //   $(":checked").each(function(){
  //     $("label[for='" + $(this).attr("id") + "']")
  //     .css("background","#ccc");
  //   });
  // });

  // 選択されている要素を選択
  // 10代が選択されている時入力できないようにしよう
  $("select").change(function(){
    if($(":selected").val() == "10代"){
      $("input").attr("disabled","disabled");
    } else {
      $("input").removeAttr("disabled");
    }
  });

});

// each の場合に意味が異なる this(現在処理している内容を指す)













