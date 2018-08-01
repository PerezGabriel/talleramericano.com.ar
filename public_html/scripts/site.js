$(function(){
    var cantidadVerMas = 12;
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
         if(($("#contacto").attr("value").trim() == "") && ($("#telefono").attr("value").trim() == "")){
          alert("Es necesario mail o telefono para poder responder su consuta.");
          return false;
        }     

        if($("#consulta").attr("value").trim() == ""){
          alert("Es necesario una consulta");
          return false;
        }

        $("#enviarConsulta").attr("disabled","disabled");
        $("#enviarConsulta").html("Enviando...");

        $.post('./mailer.php', {
            accion: 'consulta-rapida',
            nombre:     $("#nombre").attr("value"),
            telefono: $("#telefono").attr("value"),
            contacto: $("#contacto").attr("value"),
            consulta: $("#consulta").attr("value"),
            pagina_visitada: $("#nombre").attr("nombrePagina"),
            },
            function(data)
            {
            })
            .done(function(data){
                console.log("data = "); console.log(data);                
              $(".formulario-simple .mensaje-ok p").html("Gracias por enviar su consulta. <br/>La responderemos a la brevedad.");
              $(".formulario-simple .mensaje-ok").show();
              $(".formulario-simple .controles").hide();
            })
            .fail(function(data){
                console.log("data = "); console.log(data);
                $(".formulario-simple .mensaje-error p").html("Su consulta pudo no haberse enviado.<br/>");
                $(".formulario-simple .mensaje-error").show();
                $(".formulario-simple .controles").hide();
            })
    });

});