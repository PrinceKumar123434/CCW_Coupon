function numberonly(input){
var num= /[^0-9]/gi;
input.value = input.value.replace(num,"");
}
function isInputNumber(evt){
  var char = String.fromCharCode(evt.which);
  if(!(/[0-9]/.test(ch))){
    evt.preventDefault();
  }
}

// apply coupon function 
$(document).ready(function(){
  $("#btn1").click(function(){
      $("#displayText").show();
  });
});

// contact function 
$(document).ready(function(){
  $("#bt1").click(function(){
      $("#cfc1").show();
      $(".add1").hide();
      $(".pay").hide();
  });
});

// Address function 
$(document).ready(function(){
  $("#bt2").click(function(){
      $(".add1").show();
      $(".formd").hide();
      $(".pay").hide();
  });
});

// Payment function 
$(document).ready(function(){
  $("#bt3").click(function(){
      $(".pay").show();
      $(".formd").hide();
      $(".add1").hide();
  });
});

// Get otp button 
$(document).ready(function(){
  $("#get1").click(function(){
      $(".pay").hide();
      $(".formd").hide();
      $(".add1").show();
  });
});

// continue button 
$(document).ready(function(){
  $("#btc1").click(function(){
      $(".pay").show();
      $(".formd").hide();
      $(".add1").hide();
  });
});

