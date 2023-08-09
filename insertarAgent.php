<?php

include('conexion.php');
$cc = conexion();

/*Instanciamos e insertamos cada skin en nuestra tabla AGENTES*/
$id_api = $_POST['id'];
$name = $_POST['name'];
$rarity = $_POST['rarity'];
$img = $_POST['img'];

mysqli_query($cc, "INSERT INTO `agentes`(`id_agente`, `id_api`, `name`, `rarity`, `img`) VALUES (NULL,'$id_api','$name','$rarity','$img')");


?>