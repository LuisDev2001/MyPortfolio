<?php
 $destino = "luisqrja@correo.com";
 $nombre = $_POST["nombre"];
 $apellido = $_POST['apell'];
 $correo = $_POST["correo"];
 $mensaje = $_POST["message"];
 $contenido = "Nombre: ".$nombre."\nCorreo: ".$correo."\nMensaje: ".$mensaje;
 mail($destino,"Contacto", $contenido);
?>