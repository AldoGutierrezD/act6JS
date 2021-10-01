function tarjeta(){
    document.getElementById("tarjetaVista").innerHTML=localStorage.getItem("contenido");
    document.getElementById("tarjeta").style.width='100vw';
    document.getElementById("tarjeta").style.height=window.innerHeight+'px'; //Adaptar al contenido
}