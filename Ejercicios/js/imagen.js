var imagenes = ["/imagenes/diamantes.jpeg","/imagenes/ladrillosclaros.jpg","/imagenes/botonenviar.jpeg"];
var indice = 0;
function cambiarImagen(){
    indice = (indice + 1) % imagenes.length;
    document.getElementById("imagen").src=imagenes[indice];
}
