<?php

include('conexion.php');
$cc = conexion();

/*Instanciamos e insertamos cada skin en nuestra tabla STIKERS*/
$id_api = $_POST['id'];
$name = $_POST['name'];
$rarity = $_POST['rarity'];
$img = $_POST['img'];

mysqli_query($cc, "INSERT INTO `stikers`(`id_stiker`, `id_api`, `name`, `rarity`, `img`) VALUES (null,'$id_api','$name','$rarity','$img')");



?>