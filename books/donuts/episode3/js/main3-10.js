$(function(){
  $("form").submit(function(event){
    event.preventDefault();

    // いくつもエラー値がでては困るので、一度消す
    $("p.error").remove();
    // 治ったらerrorを戻す
    $("dd.error").removeClass("error");

  // 必須項目が入力されているか
    // ラジオボックス・チェックボックス以外に対して
    $("input[type='text'].validate,textarea.validate").each(function(){
      // 必須項目に対して
      if($(this).hasClass("required")){
        if($(this).val() == ""){
          $(this).parent().prepend("<p class='error'>必須項目です。</p>");
        }
      }
      // 郵便番号が数値になっているか
      if($(this).hasClass("number")){
        if(isNaN($(this).val())){
          //入力値が数値でありません　と出力
          $(this).parent().prepend("<p class='error'>数値のみ入力可能です</p>");
        }
      }
      // メールアドレスがメールの書式になっているか？
      if($(this).hasClass("mail")){
        // 入力されていて、メールアドレスの書式になっていなければ、
        if( $(this).val() && !$(this).val().match(/.+@.+\..+/g)){
          $(this).parent().prepend("<p class='error'>" + $(this).val() +  "はメールアドレスの形式が異なります。</p>");
          // 入力値を消去
          $(this).val('');
        }
      }

      // メール確認が同じメールになっているか？
      if($(this).hasClass("mail_check")){
        // 入力されていて、確認フォームと同じであれば、
        if($(this).val() && $(this).val() != $("input[name='" + $(this).attr("name").replace(/^(.+)_check$/,"$1") + "']").val()){
          $(this).parent().prepend("<p class='error'>メールアドレスと内容が異なります。</p>");
        }
      }
    });

    // ラジオボタンに関して // ラジオボタン複数にも対応
    // 入力がなければ val() or length
    // $("input[type='radio'].validate.required").each(function(){
    //   if($("input[name='"+ $(this).attr("name") +"']:checked").length == 0){
    //     $(this).parent().prepend("<p class='error'>入力必須です。</p>");
    //   }
    // });
    // 今回のならこれでもよし
    if($("input[name='gender']:checked").length == 0){
      $("input[type='radio'].validate.required").parent().prepend("<p class='error'>入力必須です。</p>");
    }

    // チェックボックスに関して
    // 今回のならこれでよし
    // if($(".checkboxRequired input[type='checkbox']:checked").length == 0){
    //   $(".checkboxRequired").prepend("<p class='error'>入力必須です。</p>");
    // }
    // dd.checkboxRequired 内　一つずつチェック
    $(".checkboxRequired").each(function(){
      if($(":checked",this).length == 0){
        $(this).prepend("<p class='error'>入力必須です。</p>");
      }
    });

    // 「その他」にチェックが入った時にテキスト入力がされているか？
    // if($(".add_text:checked").length != 0 && $("input[name='other_text']").val() == 0){
    if($(".add_text").prop("checked") && $("input[name='other_text']").val() == ""){
      $(".checkboxRequired").prepend("<p class='error'>その他を選択された場合、テキストの入力を行ってください。</p>");
    }

    // エラーが一つでもあれば
    if($("p.error").length > 0){
      // エラー時ページトップへ戻る
      $('html,body').animate({
        scrollTop: $("p.error:first").offset().top-40
      },"slow");
      // エラー時に css を付与
      $("p.error").parent().addClass("error");
      // submit 操作を終了
      return false;
    }

  });
});
