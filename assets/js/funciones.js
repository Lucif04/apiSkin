
function insertarSkin(){
    
    let n = 0;
    alert('INSERTANDO SKINS');
    /*Ingresamos la direccion de la que queremos extraer los datos*/
    fetch('https://bymykel.github.io/CSGO-API/api/en/skins.json')
    //"then es como una promesa, hacemos una peticion"
    //Sanitisamos los datos json para poder leerlos
    .then(response => response.json())
    .then(data => {
        let id = data.id;
        let name = data.name;
        let category = data.category;
        let pattern = data.pattern;
        let rarity = data.rarity;
        let img = data.image;
        //Recorremos los datos 1 * 1 y los colocamos en una variable.
        for(let i = 0; i<data.length;i++){
            //console.log(data[i].name)
            let id = data[i].id;
            let name = data[i].name;
            let category = data[i].category;
            let pattern = data[i].pattern;
            let rarity = data[i].rarity;
            let img = data[i].image;

            //Creamos conjunto de pares clave-valor, para enviar a php a travez del objeto formData.
            let formData = new FormData();
            formData.append('id', id);
            formData.append('name', name);
            formData.append('category', category);
            formData.append('pattern', pattern);
            formData.append('rarity', rarity);
            formData.append('img', img);
            
            //Enviamos los datos a nuestro archivo php para insertarlos en nuestra base de datos.
            fetch('insertarSkin.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(result => {
                console.log('Resultado del servidor:', result);
            })
            .catch(error => {
                console.log('Error al realizar la solicitud:', error);
            });

            n = n + 1;
            //Hacemos una pausa con un alert para darle tiempo y que se ejecuten todos los datos.(Hay mejores formas de hacerlo)
            if (n == 200){
                alert("Se insertaron 200 Skins en la DB");
                n = 0;
            }
        } 
        alert("Insertamos todas las skin's correctamente");
    });
   
    
}

function insertarStiker(){

    let n = 0;
    alert('Insertando Stikers');
    fetch('https://bymykel.github.io/CSGO-API/api/en/stickers.json')
    .then(response => response.json())
    .then(data => {
        let id = data.id;
        let name = data.name;
        let rarity = data.rarity;
        let img = data.image;

        for(let i = 0; i<data.length;i++){
            let id = data[i].id;
            let name = data[i].name;
            let rarity = data[i].rarity;
            let img = data[i].image;

            let formData = new FormData();
            formData.append('id', id);
            formData.append('name', name);
            formData.append('rarity', rarity);
            formData.append('img', img);  

            n = n + 1;
            fetch('insertarStiker.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(result => {
                console.log('Resultado del servidor:', result);
            })
            .catch(error => {
                console.log('Error al realizar la solicitud:', error);
            });

            //Hacemos una pausa con un alert para darle tiempo y que se ejecuten todos los datos.(Hay mejores formas de hacerlo)
            //Recomendacion: Esperen unos 15seg antes de apretar aceptar en este alert, ya que son muchos datos y en la db local se me solia romper.
            if (n == 300) {
                alert("Se insertaron 300 Stiker en la DB");
                n = 0;
            }
        }
        alert("Insertamos todas las Stiker's correctamente");   
    });
    
}


function insertarAgente(){

    let n = 0;
    alert('Insertando Agentes');
    fetch('https://bymykel.github.io/CSGO-API/api/en/agents.json')
    .then(response => response.json())
    .then(data => {
        let id = data.id;
        let name = data.name;
        let rarity = data.rarity;
        let img = data.image;

        for(let i = 0; i<data.length;i++){
            let id = data[i].id;
            let name = data[i].name;
            let rarity = data[i].rarity;
            let img = data[i].image;

            let formData = new FormData();
            formData.append('id', id);
            formData.append('name', name);
            formData.append('rarity', rarity);
            formData.append('img', img);  

            fetch('insertarAgent.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(result => {
                console.log('Resultado del servidor:', result);
            })
            .catch(error => {
                console.log('Error al realizar la solicitud:', error);
            });

            n = n + 1;

            if (n == 100) {
                alert("Se insertaron 100 agentes en la DB");
                n = 0;
            }
        }
        alert("Insertamos todas los agentes correctamente");   
    });
    
}

function insertarCajas(){

    let total = 0;
    let n = 0;
    alert('Insertando Cajas');
    fetch('https://bymykel.github.io/CSGO-API/api/en/crates.json')
    .then(response => response.json())
    .then(data => {
        let id = data.id;
        let name = data.name;
        let type = data.type;
        let img = data.image;

        for(let i = 0; i<data.length;i++){
            let id = data[i].id;
            let name = data[i].name;
            let type = data[i].type;
            let img = data[i].image;

            let formData = new FormData();
            formData.append('id', id);
            formData.append('name', name);
            formData.append('type', type);
            formData.append('img', img);  

            fetch('insertarCajas.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(result => {
                console.log('Resultado del servidor:', result);
            })
            .catch(error => {
                console.log('Error al realizar la solicitud:', error);
            });
            total++;
            n = n + 1;
            
            if (n == 100) {
                alert("Se insertaron 100 cajas en la DB");
                n = 0;
            }
        }
        alert("Insertamos " + total +" las cajas correctamente");   
    });
    
}