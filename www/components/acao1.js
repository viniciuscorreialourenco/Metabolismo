// This is a JavaScript file

var res;
var val1;
var val2;
$(document).on("click","#calculos", function(){
  val1=$("#pesos").val()
  val2=$("#alturas").val()
  res= parseFloat(val1) / (parseFloat(val2) * parseFloat(val2))
    $("#resultados").val(res.toFixed(2)+" (IMC)");
  
  })
$(document).on("click","#calculos", function(){
  if(res<18.5){
    $("#area").val("MUITO MAGRO");
   $("#imagens").attr("src", "imagens/1.png")
  }
  else if(res>18.5 && res <=24.99){
     $("#area").val("PESO NORMAL");
     $("#imagens").attr("src", "imagens/12.png")
  }
  else if(res>=25 && res<=29.99){
     $("#area").val("ACIMA DO PESO");
     $("#imagens").attr("src", "imagens/123.png")
  }
  else if(res>=30 && res<=34.99){
     $("#area").val("OBESIDADE I");
     $("#imagens").attr("src", "imagens/1234.png")
  }
  else if(res>=35 && res<=39.99){
     $("#area").val("OBESIDADE II(SEVERA)");
     $("#imagens").attr("src", "imagens/12345.png")
  }
  else if(res>=40){
     $("#area").val("OBESIDADE III(MÓRBIDA)");
     $("#imagens").attr("src", "imagens/123456.png")
  }
  })
  function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle('active');
}