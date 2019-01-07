<?php
	//revisar que los campos no estén vacíos
	if(empty($_POST['c_name']) ||
		empty($_POST['c_phone']) ||
		empty($_POST['c_email']) ||
		empty($_POST['c_message']) ||
		!filter_var($_POST['c_email'], FILTER_VALIDATE_EMAIL)	
	){
		echo "<script>alert('Favor de llenar todos los campos');</script>";
		echo "<script>window.location.href='../contacto.html';</script>";
	}else{
		$nombre=htmlspecialchars($_POST['c_name']);
		$telefono=htmlspecialchars($_POST['c_phone']);
		$correo=htmlspecialchars($_POST['c_email']);
		$mensaje=htmlspecialchars($_POST['c_message']);

		//destinatario
		$destino="juan_27angel@hotmail.com";

		//asunto
		$asunto="Mensaje desde la página web";

		//cabeceras
		$headers = 'MIME-Version: 1.0' . "\r\n";
		$headers .= "Content-type: text/html; charset=UTF-8\r\n";

		//contenido del mensaje
		$contenido = '
			<html>
			<head></head>
			<body>
				<h3>'.$nombre.' ha enviado el siguiente mensaje a través de la página</h3>
				<hr/>
				<p>'.$mensaje.'</p>
				<hr/>
				<h2>Te puedes poner en contacto con '.$nombre.' al correo  <span style="color:#0645AD = rgb(6,69,173);">'.$correo.'</span> o al teléfono '.$telefono.'</h2> 
			</body>
			</html>
		';

		//envío de correo electrónico
		$envio = mail($destino, $asunto, $contenido, $headers);

		if($envio){
			echo "<script>alert('datos enviados exitosamente, Redireccionando');</script>";
			//Enviando autorespuesta
			$pwf_header = "From: juan_27angel@hotmail.com\n"
			."Reply-to: juan_27angel@hotmail.com\n";
			$pwf_asunto = "Mensaje recibido";
			$pwf_dirigido_a = "$correo";
			$pwf_mensaje = "Muchas gracias $nombre por enviar su información desde la sección de contacto\n"
			."Su mensaje ha sido recibido satisfactoriamente.\n"
			."Nos pondremos en contacto lo antes posible a su e-mail: $correo\n"
			."\n"
			."\n"
			."-----------------------------------------------------------------"
			."Favor de NO responder este e-mail ya que es generado Automáticamente.\n"
			."Atte: Gabe. \n"
			."http://gabe.mx";
			
			@mail($pwf_dirigido_a, $pwf_asunto, $pwf_mensaje, $pwf_header);
			echo "<script>window.location.href='../contacto.html';</script>";
		}else{
			echo "<script>alert('Intentelo de nuevo en unos momentos, Redireccionando');</script>";
			echo "<script>window.location.href='../contacto.html';</script>";
		}
	}
?>