<?php

error_reporting(E_ALL); 
ini_set("display_errors", 1); 
/// Días y Meses:
$MESES = array(" ", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
$DIAS = array(" ", "Domingo", "Lunes", "Martes", "Mi&eacute;rcoles", "Jueves", "Viernes", "Sábado");
define("__DIR__",dirname(__FILE__));



include_once(dirname(__FILE__).'/PHPMailer/mail.php');

header('Content-Type: application/json');

date_default_timezone_set("America/Buenos_Aires");
$momento = "Consulta enviada el ";
$momento.= $DIAS[date("w")+1]." ".date("d")." de ".$MESES[date("n")]." del ".date("Y");
$momento.= " a las ".date("H:i")."hs :\t\n";
$contactoData = prepararPostCont(array("submit","action","accion"));
//$cont = $momento . $contactoData;
$cont = $contactoData;


$asunto = $momento;
$from = "consultaweb@cerramientostechos.com.ar";
$to = "talleramericanoweb@gmail.com";
$status = @mail_html(
  $to,
  $asunto,
  $cont,
  "contacto desde la web",
  ($from),//reply to
  ($from)//from
  );

echo json_encode(array("status"=>$status));
