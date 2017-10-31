$(function(){
  $(".error").hide();
  $("#someError").hide();
  var sendFlag = true;

  $("#submit").click(function(){

    // text 内に何も書かれていなければ
    if ( $("#name").val() == '' ){
      $("#errorName").show();
      sendFlag = false;
    } else {
      $("#errorName").hide();
      sendFlag = true;
    }

    if ( $("input[name='radio-b']:checked").length == 0 ) {
      $("#errorRadio").show();
      sendFlag = false;
    } else {
      $("#errorRadio").hide();
      sendFlag = true;
    }

    // 同じ変数を使うと一つ消えるのはなぜ？
    if ( $("input[name='checkbox']:checked").length < 3 ) {
      $("#errorCheckbox").show();
      sendFlag = false;      
    } else {
      $("#errorCheckbox").hide();
      sendFlag = true;            
    }

    if ( $("select").val() == 0 ) {
      $("#errorSelect").show();
      sendFlag = false;            
    } else {
      $("#errorSelect").hide();
      sendFlag = true;                  
    }

    if ( $("#textarea").val() == '' ){
      $("#errorTextarea").show();
      sendFlag = false;
    } else {
      $("#errorTextarea").hide();
      sendFlag = true;
    }

    if( sendFlag == false ){
      // error があります。という表示
      $("#someError").show();
      return false;
    } else {
      $("#someError").hide();
    }

  });
});