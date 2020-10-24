<?php

 $destination = "luisqrja@gmail.com";
 $name = $_POST["name"];
 $email = $_POST["email"];
 $phone = $_POST["phone"];
 $mensaje = $_POST["message"];

 /**
  * Create content to send mail
  */
 $content = "Nombre: ".$nombre."\nCorreo: ".$correo."\nMensaje: ".$mensaje;
 mail($destination,"!Hola, quiero trabajar contigo¡, $content);

?>