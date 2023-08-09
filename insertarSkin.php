<?php

include('conexion.php');
$cc = conexion();

/*Instanciamos e insertamos cada skin en nuestra tabla SKINS*/
$id_api = $_POST['id'];
$name = $_POST['name'];
$category = $_POST['category'];
$pattern = $_POST['pattern'];
$rarity = $_POST['rarity'];
$img = $_POST['img'];

mysqli_query($cc, "INSERT INTO `skins`(`id_skin`, `id_api`, `name`, `category`, `pattern`, `rarity`, `img`) VALUES (NULL,'$id_api','$name','$category','$pattern','$rarity','$img')");

?>