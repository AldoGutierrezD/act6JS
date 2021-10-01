function mostrar(){
    var tema=document.getElementById("temaTarjeta");
    var temaSeleccionado=tema.options[tema.selectedIndex].text;

    var color=document.getElementById("color-tarjeta").value;

    var marco=document.getElementsByName("marco");
    
    for(var i=0; i<marco.length; i++){
        if(marco[i].checked){
            var marcoSeleccionado = marco[i].value;
        }
    }

    var nombre=document.getElementById("nombre").value;
    var colorNombre=document.getElementById("color-nombre").value;
    var tituloTarjeta=document.getElementById("titulo-tarjeta").value;
    var colorTitulo=document.getElementById("color-titulo").value;

    var mensaje=document.getElementById("mensaje").value;
    var colorMensaje=document.getElementById("color-mensaje").value;
    
    let contenido=document.getElementById('tarjetaVista');
    contenido.style.backgroundImage="url('img/"+marcoSeleccionado+".jpg')";
    document.getElementById("colorVista").style.backgroundColor=color;
    document.getElementById("nombreVista").style.color=colorNombre;
    document.getElementById("nombreVista").innerHTML=nombre;
    document.getElementById("tituloVista").style.color=colorTitulo;
    document.getElementById("tituloVista").innerHTML=tituloTarjeta;
    document.getElementById("imagenVista").style.backgroundImage="url('img/"+fondo+".jpg')";
    document.getElementById("mensajeVista").style.color=colorMensaje;
    document.getElementById("mensajeVista").innerHTML=mensaje;
    
    switch(temaSeleccionado){
        case 'Cumpleaños':
            document.getElementById("nombreVista").style.fontFamily="'Stint Ultra Condensed', cursive";
            document.getElementById("tituloVista").style.fontFamily="'Lobster', cursive";
            document.getElementById("mensajeVista").style.fontFamily="'Niconne', cursive";
            break;
        case 'San Valentin':
            document.getElementById("nombreVista").style.fontFamily="'Lobster', cursive";
            document.getElementById("tituloVista").style.fontFamily="'Niconne', cursive";
            document.getElementById("mensajeVista").style.fontFamily="'Stint Ultra Condensed', cursive";
            break;
        case 'Navidad':
            document.getElementById("nombreVista").style.fontFamily="'Niconne', cursive";
            document.getElementById("tituloVista").style.fontFamily="'Lobster', cursive";
            document.getElementById("mensajeVista").style.fontFamily="'Stint Ultra Condensed', cursive";
            break;
    }

    localStorage.setItem("contenido",contenido);

    const musica = new Audio("img/pista.mp3");
    musica.play();   
}

function fondo(nombreImagen){
    document.getElementById("imagenVista").style.backgroundImage="url('img/"+nombreImagen+".jpg')";
}