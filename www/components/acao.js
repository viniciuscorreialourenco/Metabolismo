// This is a JavaScript file

var res;

$(document).on("click","#calcular", function(){
  ps = $("#peso").val()
  al = $("#altura").val()
  id = $("#idade").val()
  
  if($("#sexo1").is(":checked")){

    if($("#sedentario").is(":selected")){

        res=1.2*(66+(13.7*ps)+(5*al)-(6.8*id));
        $("#resultado").val(res.toFixed(2)+" (kcal)");
      
    }
    else if($("#levemente").is(":selected")){

      res=1.375*(66+(13.7*ps)+(5*al)-(6.8*id));
        $("#resultado").val(res.toFixed(2)+" (kcal)");

    }
    else if($("#moderadamente").is(":selected")){

      res=1.55*(66+(13.7*ps)+(5*al)-(6.8*id));
        $("#resultado").val(res.toFixed(2)+" (kcal)");

    }
    else if($("#altamente").is(":selected")){

      res=1.725*(66+(13.7*ps)+(5*al)-(6.8*id));
        $("#resultado").val(res.toFixed(2)+" (kcal)");

    }
    else if($("#extremamente").is(":selected")){

      res=1.9*(66+(13.7*ps)+(5*al)-(6.8*id));
        $("#resultado").val(res.toFixed(2)+" (kcal)");

    }
  }
  else if($("#sexo2").is(":checked")){
    if($("#sedentario").is(":selected")){

        res=1.2*(655+(9.6*ps)+(1.8*al)-(4.7*id));
        $("#resultado").val(res.toFixed(2)+" (kcal)");
      
    }
    else if($("#levemente").is(":selected")){

      res=1.375*(655+(9.6*ps)+(1.8*al)-(4.7*id));
        $("#resultado").val(res.toFixed(2)+" (kcal)");

    }
    else if($("#moderadamente").is(":selected")){

      res=1.55*(655+(9.6*ps)+(1.8*al)-(4.7*id));
        $("#resultado").val(res.toFixed(2)+" (kcal)");

    }
    else if($("#altamente").is(":selected")){

      res=1.725*(655+(9.6*ps)+(1.8*al)-(4.7*id));
        $("#resultado").val(res.toFixed(2)+" (kcal)");

    }
    else if($("#extremamente").is(":selected")){

      res=1.9*(655+(9.6*ps)+(1.8*al)-(4.7*id));
        $("#resultado").val(res.toFixed(2)+" (kcal)");

    }
  }
});
