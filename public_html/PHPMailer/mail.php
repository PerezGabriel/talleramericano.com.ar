<?php

require 'PHPMailerAutoload.php';

function prepararPostCont($excepciones = array())
{
	global $_POST;
	$cont ="<table>"; 
	foreach($_POST as $key => $val){
		if (!in_array($key, $excepciones))
					 $cont .= '<tr><td height="20"><font size="2" face="Arial"><b>' . utf8_decode(strtoupper(str_replace("_", " ", $key))) . ':</b> ' . ($val) . "</font></td></tr>";
	}
	$cont .= "</table>\n";

	return $cont;
}

//envia un email con contenido en formato html y con un texto alternativo
//esta probado y funcionando siempre y cuando esta habilitado el server para enviar mail
function mail_html($to,$subject,$messageContent,$textPlain,$replyTo,$from, $charset="utf-8")
{
	$mail = new PHPMailer();
	$mail->IsSMTP();                                      // set mailer to use SMTP
	$mail->CharSet = $charset;
	$mail->SMTPSecure = 'tls';
	$mail->Host = "mail.talleramericano.com.ar";  // specify main and backup server
	$mail->SMTPAuth = true;     // turn on SMTP authentication
	$mail->Username = "consultaweb@talleramericano.com.ar";  // SMTP username
	$mail->Password = "w3bqu3ry"; // SMTP password
	// $mail->SMTPDebug = 2;
	$mail->Port = 26;
	$mail->setFrom($from);
	if(strpos($to, ",")!==false){
		$toArr = explode(",", $to);
		foreach ($toArr as $toX) {
			$nomToArr = explode("@", $toX);
			$nomToX = $nomToArr[0];
			$mail->addAddress($toX,$nomToX);
		}
	}else{
		$mail->addAddress($to);
	}
	$mail->AddReplyTo($replyTo);

	$mail->IsHTML(true);                                  // set email format to HTML

	$mail->Subject = $subject;
	$mail->Body    = $messageContent;
	$mail->AltBody = $textPlain;

	return($mail->Send());
}
