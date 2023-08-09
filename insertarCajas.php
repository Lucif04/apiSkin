<?php

include('conexion.php');
$cc = conexion();

/*Instanciamos e insertamos cada skin en nuestra tabla CAJAS*/
$id_api = $_POST['id'];
$name = $_POST['name'];
$type = $_POST['type'];
$img = $_POST['img'];

mysqli_query($cc, "INSERT INTO `cajas`(`id_caja`, `id_api`, `name`,`type`, `img`) VALUES (NULL,'$id_api','$name','$type','$img')");

?>