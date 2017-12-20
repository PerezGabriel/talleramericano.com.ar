$(function(){
        $(".burger-menu").click(function(){
            $(".menu-items").toggle("fast");
        });

        $("#enviarConsulta").click(function () {
        if($("#nombre").attr("value").trim() == ""){
          alert("Es necesario nombre");
          return false;
        }
        if($("#contacto").attr("value").trim() == ""){
          alert("Es necesario mail o telefono");
          return false;
        }

        if($("#consulta").attr("value").trim() == ""){
          alert("Es necesario una consulta");
          return false;
        }

        $.post('http://cerramientostechos.com.ar/mailer.php', {
            accion: 'consulta-rapida',
            nombre: $("#nombre").attr("value"),
            contacto: $("#contacto").attr("value"),
            consulta: $("#consulta").attr("value"),
            },
            function(data)
            {
            })
            .done(function(data){
                if(data.status == 1){
                  $(".formulario-simple .mensaje-ok").toggle();
                  $(".formulario-simple .controles").toggle();
                }else{
                  $(".formulario-simple .mensaje-error").toggle();
                  $(".formulario-simple .controles").toggle();
                }
            })
            .fail(function(data){
                $(".formulario-simple .mensaje-error").toggle();
                $(".formulario-simple .controles").toggle();
            })
        });

        $("#verMasImagenes").click(function(){
          $("#verMasImagenes").hide();
          $(".imagen-100.oculto").removeClass("oculto");
        });
});