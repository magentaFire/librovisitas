function obtenerTextPreview(){
 var area = document.getElementById("textoArea").value;
 var mostrarTexto = document.getElementById("text");
 mostrarTexto.innerHTML= area;
 return mostrarTexto.innerText;
}

function enviar(){
//  var preview=obtenerTextPreview();
 var nuevo = document.createElement("p");
 nuevo.innerText = obtenerTextPreview();
 //nuevo.innerText = preview;
 var articulos = document.getElementById("contenedorNuevosArticulos").appendChild(nuevo);

}

 // var textoCopia = document.getElementById("text").cloneNode();
 // var contenedor = document.getElementById("contenedorNuevosArticulos");
 // var textoPrev = document.getElementById("text");
 // textoCopia.innerText = textoPrev.innerText
 // contenedor.appendChild(textoCopia);
 // console.log(textoCopia.innerText);


function textoGrande(){
 document.getElementById("text").style.fontSize = "xx-large";
}

function textoChico(){
 document.getElementById("text").style.fontSize = "small";
}

function textoMediano(){
 document.getElementById("text").style.fontSize = "medium";
}

function cambiaColor(){
    var color=prompt("Introduce codigo RGB para cambiar el color de fuente");
    var text = document.getElementById("text").style.color = color;

    return text.innerText;
}
function colorFondo(){
    var color=prompt("Introduce codigo RGB para cambiar el color de fondo");
    var text = document.getElementById("text").style.backgroundColor = color


    return text.innerText;
}

function alinearIzquierda(){
    document.getElementById("text").style.textAlign ="left";
}

function alinearDerecha(){
    document.getElementById("text").style.textAlign="right";
}

function alinearCentro(){
    document.getElementById("text").style.textAlign="center";
}
