
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--style-->
    <link rel="stylesheet" href="assets/css/style.css">
    
    <title>Tu DB de CS-GO</title>
</head>
<body>
    <div class="portada">
        <img src="assets/img/portada.jpg" alt="">
    </div>
    <div class="conteiner">
        <button onclick="insertarSkin();" >Insertar Skins</button>
        <button onclick="insertarStiker();">Insertar Stickers</button>
        <button onclick="insertarAgente();" >Insertar Agentes</button>
        <button onclick="insertarCajas();" >Insertar Cajas</button>
    </div>
    <!--Seccion más informacion-->
    <div class="conteiner">
        <div class= "info">
            <input type="checkbox" id="check">
            <label for="check" class="mostrar-mas">
            <p>Mas info Skin</p>
            </label>
            <nav class="menu">
                <h3>CREA TU PROPIA BASE DE DATOS</h3>
                <p>Api creada para extraer los datos e insertarlos en una base de datos propia.</p>
                <div class="m-info"> 
                    <p>
                        <b>BASE DE DATOS PARA SKIN'S</b> 
                        <br>
                        Nombre de la tabla: Skins. 
                        <br>
                        Columnas dentro: id_skin, id_api, name, pattern, rarity, img.
                    </p>
                    <p>
                        <b>BASE DE DATOS PARA STIKER'S</b> 
                        <br>
                        Nombre de la tabla: Stikers. 
                        <br>
                        Columnas dentro: id_stiker, id_api, name, rarity, img.
                    </p>
                    <p>
                        <b>BASE DE DATOS PARA AGENTES</b> 
                        <br>
                        Nombre de la tabla: Agentes. 
                        <br>
                        Columnas dentro: id_agente, id_api, name, rarity, img.
                    </p>
                    <p>
                        <b>BASE DE DATOS PARA CAJAS</b> 
                        <br>
                        Nombre de la tabla: Cajas.
                        <br>
                        Columnas dentro: id_caja, id_api, name, type, img.
                    </p>
                </div>
            <label for="check" class="mostrar-menos">
                Menos info &#8743
            </label>  
            </nav> 
        </div>
    </div>

    <!--JS-->
    <script src="assets/js/funciones.js"></script>
</body>
</html>