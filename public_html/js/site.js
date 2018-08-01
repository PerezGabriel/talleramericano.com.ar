$(function(){
        $(".burger-menu").click(function(){
            $(".menu-items").toggle("fast");
        });

        $("#enviarConsulta").click(function () {
        if($("#nombre").attr("value").trim() == ""){
          alert("Es necesario un nombre");
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
        $("#enviarConsulta").attr("html","Enviando...");

        $.post('http://cerramientostechos.com.ar/mailer.php', {
            accion: 'consulta-rapida',
            pagina_visitada: $("#nombre").attr("nombrePagina"),
            nombre: $("#nombre").attr("value"),
            contacto: $("#contacto").attr("value"),
            telefono: $("#telefono").attr("value"),
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