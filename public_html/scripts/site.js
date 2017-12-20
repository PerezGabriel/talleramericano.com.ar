$(function(){
    var cantidadVerMas = 9;
    $(".grupo3imagenes").each(function (index,el) {
        if(index>=(cantidadVerMas / 3) ){
            $(el).hide();
        }
    });

    if($(".grupo3imagenes").length<(cantidadVerMas / 3)){
        $("#botonVerMasImagenes").hide();
    }

    $("#botonVerMasImagenes").click(function(){
        $(".grupo3imagenes").show();
        $("#botonVerMasImagenes").hide();
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

        function avisoFlat (msg) {
            msg +=". Datos enviados:";
            msg += "Nombre:" + $("#nombre").attr("value");
            msg += "Contacto:" + $("#contacto").attr("value");
            msg += "Consulta:" + $("#consulta").attr("value");

            $.post('mailFlat.php', {
                msg:msg
                },
                function(data)
                {
                });
        }

        $("#enviarConsulta").attr("disabled","disabled");
        $("#enviarConsulta").html("Enviando...");

        $.post('./mailer.php', {
            accion: 'consulta-rapida',
            nombre: $("#nombre").attr("value"),
            contacto: $("#contacto").attr("value"),
            consulta: $("#consulta").attr("value"),
            },
            function(data)
            {
            })
            .done(function(data){
                console.log("data = "); console.log(data);
              // $(".formulario-simple .mensaje-ok").show();
              // $(".formulario-simple .controles").hide();
                
              $(".formulario-simple .mensaje-ok p").html("Su consulta fue enviada. <br/>La responderemos a la brevedad.");
              $(".formulario-simple .mensaje-ok").show();
              $(".formulario-simple .controles").hide();
                if(!data.status){
                    avisoFlat("status incorrecto");
                }
            })
            .fail(function(data){
                $(".formulario-simple .mensaje-error p").html("No hay conexion a internet.<br/>Intentar nuevamente más tarde.");
                $(".formulario-simple .mensaje-error").show();
                $(".formulario-simple .controles").hide();
            })
    });

});
